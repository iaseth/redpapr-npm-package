import { RedpaprJsonProduct } from "../../../../../data";
import ProductCard from "./ProductCard";



interface ProductsSectionProps {
	heading?: string,
	products: RedpaprJsonProduct[]
}

export default function ProductsSection ({heading, products}: ProductsSectionProps) {
	if (products.length === 0) {
		return null;
	}

	return (
		<section className="py-2">
			<header hidden={heading ? false : true}>
				<h3>{heading}</h3>
			</header>

			<section className="py-2 grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 gap-y-6">
				{products.map((product, k) => <ProductCard key={k} product={product} />)}
			</section>
		</section>
	);
}
