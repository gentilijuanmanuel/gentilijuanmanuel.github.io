/**
 * Readwise integration.
 *
 * The site is statically generated and hosted on GitHub Pages, so there is no
 * server at request time and the access token can never reach the browser.
 * Highlights are therefore pulled at build time (via the Readwise export API),
 * trimmed down to a small pool, and embedded in the page. Picking the 3
 * highlights that are actually shown happens client side, on every page load.
 *
 * Token: https://readwise.io/access_token -> READWISE_ACCESS_TOKEN
 * API docs: https://readwise.io/api_deets
 */

const EXPORT_ENDPOINT = "https://readwise.io/api/v2/export/";

/** Abort a single request that takes too long, so a slow API can't hang CI. */
const REQUEST_TIMEOUT_MS = 20_000;

/** Safety net for the pagination loop. */
const MAX_PAGES = 25;

/** Highlights longer than this are dropped: they read poorly in a small widget. */
const MAX_TEXT_LENGTH = 500;

/** Very short highlights are usually fragments without context. */
const MIN_TEXT_LENGTH = 40;

/**
 * How many highlights get embedded in the page for the client to choose from.
 * Kept small because the pool ships inside the HTML; the pool itself is
 * re-drawn from the whole library on every build.
 */
const POOL_SIZE = 60;

/**
 * Only book highlights are shown. Readwise also returns "articles", "tweets"
 * and "supplementals" (its own auto-generated notes), none of which read well
 * out of context.
 */
const INCLUDED_CATEGORIES = new Set(["books"]);

/** Avoids re-fetching on every request while the dev server is running. */
const CACHE_TTL_MS = 10 * 60 * 1000;

export interface Highlight {
	id: number;
	text: string;
	title: string;
	author: string | null;
	url: string;
}

interface ReadwiseHighlight {
	id: number;
	text: string;
	is_deleted?: boolean;
	is_discard?: boolean;
	readwise_url?: string | null;
}

interface ReadwiseBook {
	user_book_id: number;
	title?: string | null;
	readable_title?: string | null;
	author?: string | null;
	category?: string | null;
	readwise_url?: string | null;
	is_deleted?: boolean;
	highlights?: ReadwiseHighlight[];
}

interface ReadwiseExportResponse {
	count: number;
	nextPageCursor?: string | number | null;
	results?: ReadwiseBook[];
}

let cache: { pool: Highlight[]; expiresAt: number } | null = null;

function getAccessToken(): string | undefined {
	const fromViteEnv = import.meta.env.READWISE_ACCESS_TOKEN;
	const fromProcessEnv =
		typeof process !== "undefined" ? process.env.READWISE_ACCESS_TOKEN : undefined;

	return (fromViteEnv || fromProcessEnv)?.trim() || undefined;
}

/**
 * Readwise highlights keep their source formatting: hard line breaks and the
 * odd markdown emphasis marker. Both look broken once rendered as plain text.
 */
function normalizeText(text: string): string {
	return text
		.replace(/\*\*(.+?)\*\*/gs, "$1")
		.replace(/__(.+?)__/gs, "$1")
		.replace(/\s+/g, " ")
		.trim();
}

function toHighlight(book: ReadwiseBook, highlight: ReadwiseHighlight): Highlight | null {
	if (highlight.is_deleted || highlight.is_discard) return null;

	const text = normalizeText(highlight.text ?? "");
	if (text.length < MIN_TEXT_LENGTH || text.length > MAX_TEXT_LENGTH) return null;

	// `readable_title` is not the display name its name suggests: for books
	// imported as a file, Readwise fills it with the uploaded file name, such as
	// "Slow-Productivity_cal-Newport". The clean name lives in `title`.
	const title = (book.title || book.readable_title || "").trim();
	if (!title) return null;

	const author = book.author?.trim() || null;
	const url = highlight.readwise_url || book.readwise_url;
	if (!url) return null;

	return { id: highlight.id, text, title, author, url };
}

async function fetchExportPage(
	token: string,
	cursor?: string | number | null
): Promise<ReadwiseExportResponse> {
	const url = new URL(EXPORT_ENDPOINT);
	if (cursor) url.searchParams.set("pageCursor", String(cursor));

	const response = await fetch(url, {
		headers: { Authorization: `Token ${token}` },
		signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
	});

	if (!response.ok) {
		throw new Error(`Readwise responded with ${response.status} ${response.statusText}`);
	}

	return (await response.json()) as ReadwiseExportResponse;
}

/** Fisher-Yates, on a copy of the input. */
function shuffle<T>(items: readonly T[]): T[] {
	const result = [...items];
	for (let i = result.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[result[i], result[j]] = [result[j], result[i]];
	}
	return result;
}

export function pickRandom<T>(items: readonly T[], count: number): T[] {
	return shuffle(items).slice(0, count);
}

/**
 * Like `pickRandom`, but avoids showing the same book twice. Falls back to
 * repeating books only when the pool holds fewer distinct ones than requested.
 */
export function pickFromDistinctBooks(items: readonly Highlight[], count: number): Highlight[] {
	const shuffled = shuffle(items);
	const picked: Highlight[] = [];
	const seen = new Set<string>();

	for (const item of shuffled) {
		if (seen.has(item.title)) continue;
		seen.add(item.title);
		picked.push(item);
		if (picked.length === count) return picked;
	}

	for (const item of shuffled) {
		if (picked.length === count) break;
		if (!picked.includes(item)) picked.push(item);
	}

	return picked;
}

/**
 * Builds the pool of highlights embedded in the page.
 *
 * Never throws: a missing token or an unreachable API degrades to an empty
 * pool, and the Reading section simply renders without highlights instead of
 * failing the build.
 */
export async function getHighlightPool(): Promise<Highlight[]> {
	if (cache && cache.expiresAt > Date.now()) return cache.pool;

	const token = getAccessToken();
	if (!token) {
		console.warn(
			"[readwise] READWISE_ACCESS_TOKEN is not set, skipping highlights. Get one at https://readwise.io/access_token"
		);
		return [];
	}

	const candidates: Highlight[] = [];

	try {
		let cursor: string | number | null | undefined;

		for (let page = 0; page < MAX_PAGES; page++) {
			const data = await fetchExportPage(token, cursor);

			for (const book of data.results ?? []) {
				if (book.is_deleted) continue;
				if (!INCLUDED_CATEGORIES.has(book.category ?? "")) continue;

				for (const highlight of book.highlights ?? []) {
					const normalized = toHighlight(book, highlight);
					if (normalized) candidates.push(normalized);
				}
			}

			cursor = data.nextPageCursor;
			if (!cursor) break;
		}
	} catch (error) {
		console.warn(
			`[readwise] could not fetch highlights, the Reading section will render without them: ${
				error instanceof Error ? error.message : String(error)
			}`
		);
		return [];
	}

	// Shuffling before slicing keeps the pool representative of the whole
	// library instead of favouring whatever the API returns first.
	const pool = pickRandom(candidates, POOL_SIZE);
	cache = { pool, expiresAt: Date.now() + CACHE_TTL_MS };

	console.info(`[readwise] embedded ${pool.length} of ${candidates.length} eligible highlights`);

	return pool;
}
