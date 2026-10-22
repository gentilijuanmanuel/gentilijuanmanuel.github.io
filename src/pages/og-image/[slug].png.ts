import type { APIContext, GetStaticPathsResult } from "astro";
import { getCollection, getEntryBySlug } from "astro:content";
import satori, { SatoriOptions } from "satori";
import { html } from "satori-html";
import { Resvg } from "@resvg/resvg-js";
import { siteConfig } from "@/site-config";
import { getFormattedDate } from "@/utils";

const fontSource = (file: string) => fetch(`https://api.fontsource.org/v1/fonts/${file}.ttf`);

const [serifFont, serifItalicFont, monoFont] = await Promise.all([
	fontSource("newsreader/latin-500-normal"),
	fontSource("newsreader/latin-400-italic"),
	fontSource("jetbrains-mono/latin-400-normal"),
]);

const ogOptions: SatoriOptions = {
	width: 1200,
	height: 630,
	// debug: true,
	embedFont: true,
	fonts: [
		{
			name: "Newsreader",
			data: await serifFont.arrayBuffer(),
			weight: 500,
			style: "normal",
		},
		{
			name: "Newsreader",
			data: await serifItalicFont.arrayBuffer(),
			weight: 400,
			style: "italic",
		},
		{
			name: "JetBrains Mono",
			data: await monoFont.arrayBuffer(),
			weight: 400,
			style: "normal",
		},
	],
};

// Night-mode palette: navy page, cool ink, periwinkle accents.
const markup = (title: string, pubDate: string) => html`<div
	tw="flex flex-col w-full h-full bg-[#0a101d] text-[#d7deeb] p-16"
	style="font-family: 'Newsreader'"
>
	<div tw="flex items-center text-[22px] text-[#6c7a96]" style="font-family: 'JetBrains Mono'">
		<span tw="text-[#8fa8e8] mr-4">></span>
		<span>${pubDate}</span>
	</div>
	<div tw="flex flex-1 items-center">
		<h1 tw="text-[76px] leading-[1.08] font-medium">${title}</h1>
	</div>
	<div tw="flex items-center justify-between border-t border-[#1d2940] pt-8 text-[26px]">
		<div tw="flex items-center">
			<svg width="44" height="44" viewBox="0 0 32 32" fill="none"><path d="M8.5 3.2c4.3 0 7.5 1.5 7.5 4.6 0-3.1 3.2-4.6 7.5-4.6M16 7.8v16.4M8.5 28.8c4.3 0 7.5-1.5 7.5-4.6 0 3.1 3.2 4.6 7.5 4.6" stroke="#e0b07e" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round"></path></svg>
			<span tw="ml-5 italic text-[#a8b3c9]">${siteConfig.title}</span>
		</div>
		<span tw="text-[20px] text-[#6c7a96]" style="font-family: 'JetBrains Mono'">by ${siteConfig.author}</span>
	</div>
</div>`;

export async function get({ params: { slug } }: APIContext) {
	const post = await getEntryBySlug("post", slug!);
	const title = post?.data.title ?? siteConfig.title;
	const postDate = getFormattedDate(post?.data.publishDate ?? Date.now(), {
		weekday: "long",
		month: "long",
	});
	const svg = await satori(markup(title, postDate), ogOptions);
	const png = new Resvg(svg).render().asPng();
	return {
		body: png,
		encoding: "binary",
	};
}

export async function getStaticPaths(): Promise<GetStaticPathsResult> {
	const posts = await getCollection("post");
	return posts.filter(({ data }) => !data.ogImage).map(({ slug }) => ({ params: { slug } }));
}
