/// <reference path="../.astro/types.d.ts" />
/// <reference types="@astrojs/image/client" />

interface ImportMetaEnv {
	readonly PUBLIC_GA_MEASUREMENT_ID?: string;
	/** Build-time only, never exposed to the browser. https://readwise.io/access_token */
	readonly READWISE_ACCESS_TOKEN?: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
