import { RedpaprJsonProduct } from "../../../../data";
import { RedpaprIcon } from "../../branding";



interface ProductCardProps {
	product: RedpaprJsonProduct
}

export default function ProductCard ({product}: ProductCardProps) {
	return (
		<a className="block bg-zinc-950 text-zinc-100 border border-red-800 rounded" href={product.webURL} target="_blank">
			<header className="px-4 py-1 bg-red-700 text-center">
				<h5>{product.tagline}</h5>
			</header>

			<section className="px-4 py-5 bg-zinc-900">
				<RedpaprIcon size={120} className="mx-auto" />
			</section>

			<footer className="px-4 py-4 text-center">
				<h4>{product.title}</h4>
				<p className="p5 text-zinc-300">{product.description}</p>
			</footer>
		</a>
	);
}
