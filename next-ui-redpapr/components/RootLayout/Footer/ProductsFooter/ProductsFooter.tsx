import { redpaprJson } from "@/data";
import Product from "./Product";



export default function ProductsFooter () {
	return (
		<footer className="bg-zinc-50 text-zinc-800 border-t border-zinc-300 px-4 py-12 text-center">
			<header className="text-center">
				<h2>Products</h2>
			</header>

			<main className="container-5xl grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
				{redpaprJson.products.map((product, k) => <Product key={k} product={product} />)}
			</main>
		</footer>
	);
}
