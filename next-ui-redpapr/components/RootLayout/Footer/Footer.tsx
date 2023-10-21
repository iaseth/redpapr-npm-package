import { BrandingFooter, CopyRightFooter, ProductsFooter, QuickLinksFooter } from "../..";



export default function Footer () {
	return (
		<>
			<div className="">
				<ProductsFooter />
				<QuickLinksFooter />
				<BrandingFooter />
			</div>
			<CopyRightFooter />
		</>
	);
}
