import { BrandingFooter, CopyRightFooter, ProductsFooter, QuickLinksFooter } from "../../../redpapr";



export default function Footer () {
	return (
		<>
			<QuickLinksFooter />
			<ProductsFooter />
			<BrandingFooter />
			<CopyRightFooter newtab={true} />
		</>
	);
}
