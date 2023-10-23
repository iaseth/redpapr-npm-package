import { redpaprJson } from "../../../../data";
import ProductCard from "./ProductCard";



export default function ProductsFooter () {
	return (
		<footer className="py-12 bg-zinc-900 text-white">
			<section className="max-w-5xl px-6 py-4 mx-auto">
				<header className="py-4">
					<h2>Products</h2>
				</header>

				<section className="py-2 grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 gap-y-6">
					{redpaprJson.products.map((product, k) => <ProductCard key={k} product={product} />)}
				</section>
			</section>
		</footer>
	);
}
