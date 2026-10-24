import type { APIContext, GetStaticPathsResult } from "astro";
import { getCoverFile, getLibrary } from "@/utils/library";

export async function getStaticPaths(): Promise<GetStaticPathsResult> {
	const library = await getLibrary();
	return library.filter((book) => book.cover).map(({ slug }) => ({ params: { slug } }));
}

export async function get({ params: { slug } }: APIContext) {
	const file = await getCoverFile(slug!);
	if (!file) return new Response(null, { status: 404 });
	return {
		body: file,
		encoding: "binary",
	};
}
