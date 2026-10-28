import { renderSiteCard } from "@/utils/og";

/** The default social preview, for every page without a card of its own. */
export async function get() {
	return {
		body: await renderSiteCard(),
		encoding: "binary",
	};
}
