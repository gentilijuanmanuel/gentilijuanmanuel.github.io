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

/**
 * Where a highlight's source line points. Readwise's own highlight and book
 * urls require an account, so a reader clicking one lands on a login page.
 * A search link works for every book: only a handful carry an ISBN or ASIN,
 * so a direct book page is not an option for most of the library.
 *
 * `i=stripbooks` scopes the search to the Books department, which keeps noisy
 * titles from matching unrelated products.
 */
const AMAZON_SEARCH_ENDPOINT = "https://www.amazon.com/s";

/** Abort a single request that takes too long, so a slow API can't hang CI. */
const REQUEST_TIMEOUT_MS = 20_000;

/** Safety net for the pagination loop. */
const MAX_PAGES = 25;

/**
 * Highlights longer than this are dropped. The limit exists only to keep a
 * single quote from swallowing the section: the longest in the library runs to
 * 7,500 characters. It is set well above the typical highlight, whose median
 * length is around 430 characters, so it trims the tail rather than the body.
 */
const MAX_TEXT_LENGTH = 1500;

/** Very short highlights are usually fragments without context. */
const MIN_TEXT_LENGTH = 40;

/**
 * How many highlights get embedded in the page for the client to choose from.
 * Kept small because the pool ships inside the HTML; the pool itself is
 * re-drawn from the whole library on every build. Anything above the number of
 * books in the library only adds second and third quotes for some of them, so
 * there is little point pushing it far beyond that.
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
	/** A public link for the book, so readers without a Readwise account can follow it. */
	url: string;
}

interface ReadwiseHighlight {
	id: number;
	text: string;
	is_deleted?: boolean;
	is_discard?: boolean;
}

interface ReadwiseBook {
	user_book_id: number;
	title?: string | null;
	readable_title?: string | null;
	author?: string | null;
	category?: string | null;
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

function bookSearchUrl(title: string, author: string | null): string {
	const url = new URL(AMAZON_SEARCH_ENDPOINT);
	url.searchParams.set("k", [title, author].filter(Boolean).join(" "));
	url.searchParams.set("i", "stripbooks");
	return url.toString();
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

	return { id: highlight.id, text, title, author, url: bookSearchUrl(title, author) };
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

/**
 * Builds the pool one book at a time rather than sampling highlights directly.
 *
 * Sampling highlights would track how much each book was highlighted, not how
 * many books there are: the heaviest book in the library has 140 eligible
 * highlights and the lightest has 1, so the heavy ones would crowd out the rest.
 * Taking a round of one highlight per book, then a second round, and so on,
 * gives every book a slot before any book gets a second one.
 */
function poolByBook(candidates: readonly Highlight[], size: number): Highlight[] {
	const byBook = new Map<string, Highlight[]>();
	for (const highlight of candidates) {
		const bucket = byBook.get(highlight.title);
		if (bucket) bucket.push(highlight);
		else byBook.set(highlight.title, [highlight]);
	}

	// Book order decides who gets the leftover slots, and highlight order decides
	// which quote represents each book, so both are shuffled per build.
	const queues = shuffle([...byBook.values()]).map((highlights) => shuffle(highlights));
	const pool: Highlight[] = [];

	for (let round = 0; pool.length < size; round++) {
		let added = false;

		for (const queue of queues) {
			if (pool.length === size) break;

			const highlight = queue[round];
			if (!highlight) continue;

			pool.push(highlight);
			added = true;
		}

		// Every book is exhausted: the library has fewer highlights than `size`.
		if (!added) break;
	}

	return pool;
}

/**
 * Picks `count` highlights at random, avoiding showing the same book twice.
 * Falls back to repeating books only when the pool holds fewer distinct ones
 * than requested.
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

	const pool = poolByBook(candidates, POOL_SIZE);
	cache = { pool, expiresAt: Date.now() + CACHE_TTL_MS };

	const booksInPool = new Set(pool.map((highlight) => highlight.title)).size;
	console.info(
		`[readwise] embedded ${pool.length} of ${candidates.length} eligible highlights, covering ${booksInPool} books`
	);

	return pool;
}
