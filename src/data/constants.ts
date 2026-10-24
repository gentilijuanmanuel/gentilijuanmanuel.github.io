export const MENU_LINKS = [
	{
		title: "Home",
		path: "/",
	},
	{
		title: "About",
		path: "/about",
	},
	{
		title: "Blog",
		path: "/posts",
	},
	{
		title: "Library",
		path: "/library",
	},
];

export const SOCIAL_LINKS = {
	github: "https://github.com/gentilijuanmanuel",
	twitter: "https://twitter.com/jgentilicio",
	email: "gentilijuanmanuel@gmail.com",
	medium: "https://medium.com/@jmgentili",
	substack: "https://substack.com/@jmgentili",
	linkedin: "https://www.linkedin.com/in/juan-manuel-gentili",
};

export const READING_LINKS = {
	readwise: "https://readwise.io/@juanmanuelgentili",
};

export const WORK_LINKS = {
	runna: "https://www.runna.com/",
	strava: "https://www.strava.com/",
};

export const MONETIZATION_LINKS = {
	buyMeACoffee: "https://www.buymeacoffee.com/jmgentili",
	cafecito: "https://cafecito.app/jmgentili",
};

export interface WorkExperience {
	role: string;
	company: string;
	url?: string;
	/** Free-form, e.g. "Oct 2024". */
	start: string;
	/** Omit for the current role. */
	end?: string;
	summary: string;
}

// Newest first. Mirrors the resume; LinkedIn has the long form.
export const WORK_EXPERIENCE: WorkExperience[] = [
	{
		role: "Senior Engineer II",
		company: "Runna (acquired by Strava)",
		url: WORK_LINKS.runna,
		start: "Oct 2024",
		summary:
			"The Swift side of a personalized running coach: watchOS app, widgets, Live Activities and HealthKit.",
	},
	{
		role: "Senior iOS Engineer & Technical Scrum Master",
		company: "PayPal (Venmo)",
		start: "Jun 2022",
		end: "Oct 2024",
		summary:
			"Built Venmo's Teen Account from its inception, then drove its planning as Technical Scrum Master.",
	},
	{
		role: "Senior iOS Engineer",
		company: "Moen",
		start: "May 2021",
		end: "Jun 2022",
		summary: "iOS app to pair and control Flo and Moen smart water devices.",
	},
	{
		role: "iOS Engineer",
		company: "IncluIT",
		start: "Apr 2020",
		end: "May 2021",
		summary: "Client apps across VoIP, banking, insurance and health, including a tech lead role.",
	},
	{
		role: "Mobile Developer",
		company: "OZ Digital Consulting",
		start: "Apr 2019",
		end: "Apr 2020",
		summary: "Xamarin.Forms app for construction companies to manage property listings.",
	},
	{
		role: "Mobile Developer",
		company: "DGENIX",
		start: "May 2018",
		end: "Apr 2019",
		summary: "International Xamarin projects and contributions to MvvmCross open source.",
	},
];
