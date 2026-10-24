/**
 * The library: every book in Readwise, shelved by the year it was read.
 *
 * Built on top of `getBooks()` from `readwise.ts`. Covers are downloaded and
 * resized while the site builds, then served as static files from
 * `/library/covers/[slug].webp`, so the pages never hotlink a 2MB store image.
 * Each cover's dominant colour paints the book's spine on the shelf.
 */

import sharp from "sharp";
import { getBooks, type Book, type BookHighlight } from "@/utils/readwise";

/** Covers are shown at up to 240px wide, so 480px covers 2x screens. */
const COVER_WIDTH = 480;

/** Abort a single cover download that takes too long, so a slow store can't hang CI. */
const COVER_TIMEOUT_MS = 20_000;

/** Parallel cover downloads. */
const COVER_CONCURRENCY = 6;

/**
 * How many words of highlights a book page shows. Publishing every highlight
 * would reproduce large parts of some books (one runs to 29,000 words), so each
 * page shows a selection. 1,000 words matches the quotation allowance in
 * Argentina's copyright law (Ley 11.723, art. 10).
 */
export const WORD_BUDGET = 1000;

/** Spines for books whose cover could not be used, picked per book from the slug. */
const FALLBACK_SPINES = [
	"#7a2e2a",
	"#2f4a6d",
	"#3d5a45",
	"#9a6a24",
	"#4a3f5c",
	"#5c4a3a",
	"#2b2f36",
];

const INK_LIGHT = "#f3ead6";
const INK_DARK = "#2b2217";

export interface LibraryHighlight {
	id: number;
	text: string;
	/** Human readable position, such as "p. 42" or "loc. 1203", when the source records one. */
	location: string | null;
	favorite: boolean;
}

export interface LibraryBook {
	slug: string;
	title: string;
	author: string | null;
	searchUrl: string;
	highlightCount: number;
	/** A selection of up to `WORD_BUDGET` words, in reading order. */
	highlights: LibraryHighlight[];
	firstRead: Date;
	lastRead: Date;
	/** The shelf the book sits on: the year of its latest highlight. */
	year: number;
	cover: { src: string; width: number; height: number } | null;
	spine: { color: string; ink: string };
}

let libraryPromise: Promise<LibraryBook[]> | null = null;
const coverFiles = new Map<string, Buffer>();

/** Small, stable hash so a book keeps its fallback colour and spine height across builds. */
export function hashOf(value: string): number {
	let hash = 0;
	for (let i = 0; i < value.length; i++) hash = (hash * 31 + value.charCodeAt(i)) | 0;
	return Math.abs(hash);
}

/** Readwise's stand-in images for books without a cover. */
function isPlaceholderCover(url: string): boolean {
	return url.includes("/static/images/");
}

/**
 * Google Books covers come as 128px thumbnails. A larger zoom gives a usable
 * size and dropping `edge` removes the fake page-curl, but for some books the
 * larger size is an "image not available" card, always exactly this size.
 */
const GOOGLE_PLACEHOLDER = { width: 575, height: 750 };

async function download(url: string): Promise<Buffer> {
	const response = await fetch(url, {
		headers: { "User-Agent": "Mozilla/5.0 (library cover fetch)" },
		signal: AbortSignal.timeout(COVER_TIMEOUT_MS),
	});
	if (!response.ok) throw new Error(`${response.status} ${response.statusText}`);
	return Buffer.from(await response.arrayBuffer());
}

async function downloadCover(url: string): Promise<Buffer> {
	if (!url.includes("books.google.com")) return download(url);

	const larger = new URL(url);
	larger.searchParams.delete("edge");
	larger.searchParams.set("zoom", "3");
	const image = await download(larger.toString());

	const { width, height } = await sharp(image).metadata();
	const isPlaceholder = width === GOOGLE_PLACEHOLDER.width && height === GOOGLE_PLACEHOLDER.height;
	return isPlaceholder ? download(url) : image;
}

function relativeLuminance({ r, g, b }: { r: number; g: number; b: number }): number {
	const channel = (value: number) => {
		const c = value / 255;
		return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
	};
	return 0.2126 * channel(r) + 0.7152 * channel(g) + 0.0722 * channel(b);
}

function toHex({ r, g, b }: { r: number; g: number; b: number }): string {
	return `#${[r, g, b].map((c) => c.toString(16).padStart(2, "0")).join("")}`;
}

function fallbackSpine(slug: string): LibraryBook["spine"] {
	return { color: FALLBACK_SPINES[hashOf(slug) % FALLBACK_SPINES.length]!, ink: INK_LIGHT };
}

async function loadCover(
	book: Book
): Promise<Pick<LibraryBook, "cover" | "spine"> & { file: Buffer | null }> {
	const fallback = { cover: null, spine: fallbackSpine(book.slug), file: null };
	if (!book.coverUrl || isPlaceholderCover(book.coverUrl)) return fallback;

	try {
		const source = await downloadCover(book.coverUrl);
		const { data, info } = await sharp(source)
			.resize({ width: COVER_WIDTH, withoutEnlargement: true })
			.webp({ quality: 78 })
			.toBuffer({ resolveWithObject: true });
		const { dominant } = await sharp(source).stats();

		// A near-white cover makes a near-white spine, which disappears on the
		// light theme's paper; nudge it to a cream so the shelf still reads.
		const luminance = relativeLuminance(dominant);
		const color = luminance > 0.82 ? "#e9dfc9" : toHex(dominant);

		return {
			cover: { src: `/library/covers/${book.slug}.webp`, width: info.width, height: info.height },
			spine: { color, ink: luminance > 0.36 ? INK_DARK : INK_LIGHT },
			file: data,
		};
	} catch (error) {
		console.warn(
			`[library] could not load the cover for "${book.title}", using a plain spine: ${
				error instanceof Error ? error.message : String(error)
			}`
		);
		return fallback;
	}
}

function formatLocation(highlight: BookHighlight): string | null {
	if (highlight.location === null) return null;
	if (highlight.locationType === "page") return `p. ${highlight.location}`;
	if (highlight.locationType === "location") return `loc. ${highlight.location}`;
	// "order" and "offset" only rank highlights; they mean nothing to a reader.
	return null;
}

/** Reading order: by position in the book, then by when it was highlighted. */
function byReadingOrder(a: BookHighlight, b: BookHighlight): number {
	if (a.location !== null && b.location !== null && a.location !== b.location) {
		return a.location - b.location;
	}
	return a.highlightedAt.localeCompare(b.highlightedAt);
}

const wordCount = (text: string) => text.split(/\s+/).filter(Boolean).length;

/**
 * Orders items so that every prefix is spread across the whole list: the
 * middle first, then the quarters, then the eighths, and so on.
 */
function spreadOrder<T>(items: readonly T[]): T[] {
	const order: T[] = [];
	const seen = new Set<number>();
	for (let parts = 1; seen.size < items.length; parts *= 2) {
		for (let i = 0; i < parts; i++) {
			const index = Math.floor(((i + 0.5) * items.length) / parts);
			if (seen.has(index)) continue;
			seen.add(index);
			order.push(items[index]!);
		}
	}
	return order;
}

/**
 * Picks the highlights a book page shows, within `WORD_BUDGET` words:
 * favourites first, then the rest spread through the book so the selection
 * walks from start to end instead of bunching in the first chapter. A
 * highlight that doesn't fit is skipped in favour of shorter ones after it.
 * Returned in reading order.
 */
function selectHighlights(highlights: readonly BookHighlight[]): BookHighlight[] {
	const ordered = [...highlights].sort(byReadingOrder);
	const candidates = [
		...ordered.filter((highlight) => highlight.favorite),
		...spreadOrder(ordered.filter((highlight) => !highlight.favorite)),
	];

	const picked = new Set<BookHighlight>();
	let words = 0;
	for (const highlight of candidates) {
		const count = wordCount(highlight.text);
		if (words + count > WORD_BUDGET) continue;
		picked.add(highlight);
		words += count;
	}

	return ordered.filter((highlight) => picked.has(highlight));
}

/** Runs `task` over `items` with at most `limit` in flight, keeping the input order. */
async function mapWithConcurrency<T, R>(
	items: readonly T[],
	limit: number,
	task: (item: T) => Promise<R>
): Promise<R[]> {
	const results = new Array<R>(items.length);
	let next = 0;
	const worker = async () => {
		while (next < items.length) {
			const index = next++;
			results[index] = await task(items[index]!);
		}
	};
	await Promise.all(Array.from({ length: Math.min(limit, items.length) }, worker));
	return results;
}

async function buildLibrary(): Promise<LibraryBook[]> {
	const books = await getBooks();

	const library = await mapWithConcurrency(books, COVER_CONCURRENCY, async (book) => {
		const dates = book.highlights
			.map((highlight) => new Date(highlight.highlightedAt))
			.filter((date) => !Number.isNaN(date.getTime()))
			.sort((a, b) => a.getTime() - b.getTime());
		const firstRead = dates[0] ?? new Date(0);
		const lastRead = dates[dates.length - 1] ?? firstRead;

		const { cover, spine, file } = await loadCover(book);
		if (file) coverFiles.set(book.slug, file);

		return {
			slug: book.slug,
			title: book.title,
			author: book.author,
			searchUrl: book.searchUrl,
			highlightCount: book.highlights.length,
			highlights: selectHighlights(book.highlights).map((highlight) => ({
				id: highlight.id,
				text: highlight.text,
				location: formatLocation(highlight),
				favorite: highlight.favorite,
			})),
			firstRead,
			lastRead,
			year: lastRead.getFullYear(),
			cover,
			spine,
		};
	});

	// Most recently read first, which is also the order of the shelves.
	library.sort((a, b) => b.lastRead.getTime() - a.lastRead.getTime());

	if (library.length > 0) {
		console.info(`[library] shelved ${library.length} books, ${coverFiles.size} with covers`);
	}
	return library;
}

/** Every book, most recently read first. Shared across pages, so covers download once per build. */
export function getLibrary(): Promise<LibraryBook[]> {
	libraryPromise ??= buildLibrary();
	return libraryPromise;
}

/** The resized cover for a book, once `getLibrary()` has resolved. */
export async function getCoverFile(slug: string): Promise<Buffer | undefined> {
	await getLibrary();
	return coverFiles.get(slug);
}

/** Books grouped into shelves by year, newest shelf first. */
export function shelvesByYear(
	library: readonly LibraryBook[]
): { year: number; books: LibraryBook[] }[] {
	const shelves = new Map<number, LibraryBook[]>();
	for (const book of library) {
		const shelf = shelves.get(book.year);
		if (shelf) shelf.push(book);
		else shelves.set(book.year, [book]);
	}
	return [...shelves.entries()].sort(([a], [b]) => b - a).map(([year, books]) => ({ year, books }));
}

const monthYear = new Intl.DateTimeFormat("en-GB", { month: "short", year: "numeric" });
const monthOnly = new Intl.DateTimeFormat("en-GB", { month: "short" });

/** "Jun 2026", "May → Jun 2026" or "Dec 2025 → Jan 2026". */
export function readingPeriod(book: Pick<LibraryBook, "firstRead" | "lastRead">): string {
	const { firstRead, lastRead } = book;
	const sameMonth =
		firstRead.getFullYear() === lastRead.getFullYear() &&
		firstRead.getMonth() === lastRead.getMonth();
	if (sameMonth) return monthYear.format(lastRead);
	if (firstRead.getFullYear() === lastRead.getFullYear()) {
		return `${monthOnly.format(firstRead)} → ${monthYear.format(lastRead)}`;
	}
	return `${monthYear.format(firstRead)} → ${monthYear.format(lastRead)}`;
}
