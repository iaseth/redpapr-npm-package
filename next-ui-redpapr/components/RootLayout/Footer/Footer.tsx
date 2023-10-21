import { BrandingFooter, CopyRightFooter, ProductsFooter, QuickLinksFooter } from "../..";



export default function Footer () {
	return (
		<>
			<div className="hidden">
				<ProductsFooter />
				<QuickLinksFooter />
				<BrandingFooter />
			</div>
			<CopyRightFooter />
		</>
	);
}
