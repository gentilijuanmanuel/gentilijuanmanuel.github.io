import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";

export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}"],
	darkMode: "class",
	corePlugins: {
		// disable aspect ratio as per docs -> @tailwindcss/aspect-ratio
		aspectRatio: false,
		// disable some core plugins as they are included in the css, even when unused
		touchAction: false,
		ringOffsetWidth: false,
		ringOffsetColor: false,
		scrollSnapType: false,
		borderOpacity: false,
		textOpacity: false,
		fontVariantNumeric: false,
	},
	theme: {
		extend: {
			colors: {
				bg: "var(--theme-bg)",
				elev: "var(--theme-elev)",
				paper: "var(--theme-paper)",
				ink: "var(--theme-ink)",
				"ink-soft": "var(--theme-ink-soft)",
				muted: "var(--theme-muted)",
				line: "var(--theme-line)",
				accent: "var(--theme-accent)",
				signal: "var(--theme-signal)",
			},
			fontFamily: {
				// Newsreader carries the reading experience, JetBrains Mono the interface.
				serif: ["Newsreader", ...fontFamily.serif],
				mono: ['"JetBrains Mono"', ...fontFamily.mono],
				sans: [...fontFamily.sans],
			},
			maxWidth: {
				measure: "68ch",
			},
			transitionProperty: {
				height: "height",
			},
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			// Remove above once tailwindcss exposes theme type
			typography: () => ({
				ink: {
					css: {
						"--tw-prose-body": "var(--theme-ink)",
						"--tw-prose-headings": "var(--theme-ink)",
						"--tw-prose-lead": "var(--theme-ink-soft)",
						"--tw-prose-links": "var(--theme-ink)",
						"--tw-prose-bold": "var(--theme-ink)",
						"--tw-prose-counters": "var(--theme-muted)",
						"--tw-prose-bullets": "var(--theme-accent)",
						"--tw-prose-quotes": "var(--theme-ink-soft)",
						"--tw-prose-quote-borders": "var(--theme-accent)",
						"--tw-prose-captions": "var(--theme-muted)",
						"--tw-prose-code": "var(--theme-ink)",
						"--tw-prose-hr": "var(--theme-line)",
						"--tw-prose-th-borders": "var(--theme-line)",
						"--tw-prose-td-borders": "var(--theme-line)",
					},
				},
				DEFAULT: {
					css: {
						fontSize: "1.1875rem",
						lineHeight: "1.75",
						a: {
							"@apply ink-link": "",
							fontWeight: "inherit",
							textDecoration: "none",
						},
						strong: {
							fontWeight: "650",
						},
						"h1, h2, h3, h4": {
							fontWeight: "500",
							letterSpacing: "-0.01em",
							scrollMarginTop: "6rem",
						},
						h2: {
							fontSize: "1.65em",
							marginTop: "2.2em",
						},
						h3: {
							fontSize: "1.3em",
						},
						blockquote: {
							fontStyle: "italic",
							fontWeight: "400",
							borderLeftWidth: "2px",
							paddingLeft: "1.25em",
						},
						"blockquote p:first-of-type::before": { content: "none" },
						"blockquote p:last-of-type::after": { content: "none" },
						code: {
							fontFamily: "var(--font-mono)",
							fontSize: "0.82em",
							fontWeight: "400",
							padding: "0.15em 0.4em",
							borderRadius: "4px",
							backgroundColor: "var(--theme-elev)",
							border: "1px solid var(--theme-line)",
						},
						"code::before": { content: "none" },
						"code::after": { content: "none" },
						pre: {
							fontFamily: "var(--font-mono)",
							fontSize: "0.8em",
							borderRadius: "10px",
							border: "1px solid var(--theme-line)",
						},
						"pre code": {
							border: "none",
							padding: "0",
							backgroundColor: "transparent",
						},
						img: {
							borderRadius: "8px",
						},
						hr: {
							border: "none",
							textAlign: "center",
							marginTop: "3em",
							marginBottom: "3em",
						},
						"hr::after": {
							content: '"✦  ✦  ✦"',
							color: "var(--theme-accent)",
							fontSize: "0.8em",
							letterSpacing: "0.5em",
						},
						thead: {
							borderBottomWidth: "1px",
						},
						"thead th": {
							fontFamily: "var(--font-mono)",
							fontSize: "0.75em",
							fontWeight: "500",
							textTransform: "uppercase",
							letterSpacing: "0.08em",
						},
					},
				},
			}),
		},
	},
	plugins: [
		require("@tailwindcss/typography"),
		require("@tailwindcss/aspect-ratio"),
		plugin(function ({ addComponents }) {
			addComponents({
				// Underline that sits under the text and fills with the accent colour on hover.
				".ink-link": {
					backgroundImage: "linear-gradient(var(--theme-accent), var(--theme-accent))",
					backgroundPosition: "0 100%",
					backgroundRepeat: "no-repeat",
					backgroundSize: "100% 1px",
					transition: "background-size 0.35s cubic-bezier(.2,.8,.2,1), color 0.2s ease",
					paddingBottom: "1px",
					"&:hover": {
						backgroundSize: "100% 100%",
						color: "var(--theme-bg)",
					},
				},
				".title": {
					"@apply font-serif text-3xl font-medium tracking-tight text-ink sm:text-4xl": {},
				},
				".eyebrow": {
					"@apply font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-muted": {},
				},
				".kbd": {
					"@apply inline-flex items-center gap-1 rounded-md border border-line bg-elev px-1.5 py-0.5 font-mono text-[0.6875rem] leading-none text-muted":
						{},
				},
			});
		}),
	],
} satisfies Config;
