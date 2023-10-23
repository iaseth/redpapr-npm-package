import { BrandingFooter, CopyRightFooter, ProductsFooter, QuickLinksFooter } from "../..";



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
