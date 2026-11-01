import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";
import sitemap from "@astrojs/sitemap";
import prefetch from "@astrojs/prefetch";

// https://astro.build/config
export default defineConfig({
	site: "https://jmgentili.com",
	markdown: {
		shikiConfig: {
			theme: "css-variables",
			wrap: true,
		},
	},
	integrations: [
		mdx({}),
		tailwind({
			config: {
				applyBaseStyles: false,
			},
		}),
		image({
			serviceEntryPoint: "@astrojs/image/sharp",
		}),
		sitemap(),
		prefetch(),
	],
	vite: {
		build: {
			// Astro 2 inlines hoisted scripts smaller than this limit into the page and
			// deletes their files. Since Vite 4.5 splits code shared between pages into
			// its own chunk, that deleted a chunk other pages still import, which broke
			// every script on them (theme toggle, language switch, library filter).
			// Keeping scripts as files avoids it.
			assetsInlineLimit: 0,
		},
		optimizeDeps: {
			exclude: ["@resvg/resvg-js"],
		},
	},
});
