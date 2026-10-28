/**
 * The default social preview card (Open Graph and Twitter), rendered at build
 * time with satori and served at `/social-card.png`. It shares the site's light
 * theme so a preview looks like the page it links to: sepia paper, brown-black
 * ink and the burnt amber accent. Posts use one of their own images instead.
 */

import satori, { type SatoriOptions } from "satori";
import { html } from "satori-html";
import { Resvg } from "@resvg/resvg-js";
import { siteConfig } from "@/site-config";

const fontSource = (file: string) =>
	fetch(`https://api.fontsource.org/v1/fonts/${file}.ttf`).then((response) =>
		response.arrayBuffer()
	);

const [serifLight, mono] = await Promise.all([
	fontSource("newsreader/latin-300-normal"),
	fontSource("jetbrains-mono/latin-400-normal"),
]);

const options: SatoriOptions = {
	width: 1200,
	height: 630,
	embedFont: true,
	fonts: [
		{ name: "Newsreader", data: serifLight, weight: 300, style: "normal" },
		{ name: "JetBrains Mono", data: mono, weight: 400, style: "normal" },
	],
};

const markup = html`<div
	tw="flex flex-col w-full h-full bg-[#f3ead6] text-[#2b2217] px-20 py-16"
	style="font-family: 'Newsreader'"
>
	<div tw="flex items-center text-[22px] text-[#8a7350]" style="font-family: 'JetBrains Mono'">
		<span tw="text-[#a5561b] mr-4">></span>
		<span>writing · library · work</span>
	</div>
	<div tw="flex flex-1 items-center">
		<h1 tw="text-[104px] font-light leading-[1.06]" style="letter-spacing: -0.02em">
			${siteConfig.author}
		</h1>
	</div>
	<div tw="flex justify-end border-t border-[#d9ccb0] pt-7">
		<span tw="text-[20px] text-[#8a7350]" style="font-family: 'JetBrains Mono'">jmgentili.com</span>
	</div>
</div>`;

/**
 * The default card, for every page without its own. It leads with the name:
 * the page title and the site description already show under the image in
 * most previews, so the card doesn't repeat them.
 */
export async function renderSiteCard(): Promise<Buffer> {
	const svg = await satori(markup, options);
	return new Resvg(svg).render().asPng();
}
