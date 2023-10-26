import redpaprJsonData from './redpapr.json';

export const redpaprJson: RedpaprJson = redpaprJsonData;
export const redMeta = redpaprJson.meta;

interface RedpaprJson {
	meta: RedpaprJsonMeta,
	plans: RedpaprJsonPlan[],
	products: RedpaprJsonProduct[],
	quickLinks: RedpaprJsonQuickLinkColumn[],
	socialMedia: RedpaprJsonSocialMedia[],
	testimonials: RedpaprJsonTestimonial[],
}

interface RedpaprJsonMeta {
	appName: string,
	appURL: string,
	description: string,
	tagline: string,
	contactEmail: string,
	contactMobile: string,
}

export interface RedpaprJsonPlan {
	title: string,
	description: string,
	features: string[],
	limitations: string[],
	paid: boolean,
	pricePerMonth: number,
}

export interface RedpaprJsonProduct {
	title: string,
	className: string,
	description: string,
	tagline: string,
	status: "alpha" | "beta" | "stable" | string,
	androidAppURL: string,
	iosAppURL: string,
	internalURL: string,
	webURL: string,
	features: string[]
}

export interface RedpaprJsonQuickLinkColumn {
	heading: string,
	description: string,
	links: RedpaprJsonQuickLink[],
}

export interface RedpaprJsonQuickLink {
	title: string,
	URL: string,
}

export interface RedpaprJsonSocialMedia {
	title: string,
	description: string,
	username: string,
	URL: string,
}

export interface RedpaprJsonTestimonial {
	fullname: string,
	title: string,
	content: string[],
	imageSrc: string,
	homepage: boolean,
	visible: boolean,
}
