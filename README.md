# gentilijuanmanuel.github.io

Personal site and blog of Juan Manuel Gentili: essays, field notes and reading highlights, written in natural and programming languages.

## Design

The site sits between a paperback and a terminal.

- **Light theme:** sepia paper, brown-black ink, burnt amber accents, a faint paper grain.
- **Dark theme:** deep navy, cool ink and a periwinkle accent; reading cards blend into the page with a hairline border.
- **Type:** [Newsreader](https://fonts.google.com/specimen/Newsreader) for reading, [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) for the interface.
- **Details:** a library of every book read in Readwise (spines on shelves by subject, a page per book with selected passages), reading highlights rendered as book pages, a table-of-contents post index, an outline panel and reading progress on posts, a `⌘K` / `/` command palette, and an ink-spread theme switch.

Design tokens live in `src/styles/global.css` (CSS variables for both themes) and are exposed to Tailwind in `tailwind.config.ts`.

## Commands

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `npm install`     | Install dependencies                         |
| `npm run dev`     | Start the dev server at `localhost:3000`     |
| `npm run build`   | Build the production site to `./dist/`       |
| `npm run preview` | Preview the build locally                    |
| `npm run check`   | Type-check the project                       |

## Environment

Copy `.env.example` to `.env`:

- `PUBLIC_GA_MEASUREMENT_ID`: Google Analytics measurement id (optional).
- `READWISE_ACCESS_TOKEN`: used at build time to pull reading highlights and build the library. Without it the Reading section renders without highlights and the library is empty.

## Writing a post

Posts live in `src/content/post/` as Markdown. Frontmatter:

```yaml
title: "Post title" # max 60 characters
description: "Between 50 and 160 characters."
publishDate: "23 Dec 2025"
tags: ["books", "diary"]
language: "en" # or "es"
translationSlug: "slug-of-the-other-language-version" # optional
```

## Deployment

Pushes to `main` build and deploy to GitHub Pages through `.github/workflows`.

## License

MIT
