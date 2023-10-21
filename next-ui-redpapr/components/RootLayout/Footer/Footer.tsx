import { CopyRightFooter } from "../..";
import BrandFooter from "./BrandFooter/BrandFooter";
import ProductsFooter from "./ProductsFooter/ProductsFooter";
import QuickLinksFooter from "./QuickLinksFooter/QuickLinksFooter";



export default function Footer () {
	return (
		<>
			<div className="hidden">
				<ProductsFooter />
				<QuickLinksFooter />
				<BrandFooter />
			</div>
			<CopyRightFooter />
		</>
	);
}
