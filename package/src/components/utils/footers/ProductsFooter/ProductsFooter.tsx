import { redpaprJson } from "../../../../data";
import ProductsSection from "./ProductsSection/ProductsSection";



export default function ProductsFooter () {
	const { products } = redpaprJson;
	const alphaProducts = products.filter(product => product.status === "alpha");
	const betaProducts = products.filter(product => product.status === "beta");
	const stableProducts = products.filter(product => product.status === "stable");

	return (
		<footer className="py-12 bg-zinc-900 text-white">
			<section className="max-w-5xl px-6 py-4 mx-auto">
				<header className="py-4">
					<h1>Products</h1>
				</header>

				<section>
					<ProductsSection products={stableProducts} />
					<ProductsSection products={betaProducts} heading="In Beta" />
					<ProductsSection products={alphaProducts} heading="Upcoming" />
				</section>
			</section>
		</footer>
	);
}
