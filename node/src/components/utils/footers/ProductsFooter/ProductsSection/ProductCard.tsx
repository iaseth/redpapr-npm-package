import { RedpaprJsonProduct } from "../../../../../data";
import { RedpaprIcon } from "../../../branding";



interface ProductCardProps {
	product: RedpaprJsonProduct
}

export default function ProductCard ({product}: ProductCardProps) {
	return (
		<a className="group block bg-50 text-900 border border-red-800 rounded" href={product.webURL} target="_blank">
			<header className="px-4 py-1 bg-red-700 text-white text-center">
				<h5>{product.tagline}</h5>
			</header>

			<section className="px-4 py-5 bg-100">
				<div className="slow overflow-hidden group-hover:scale-110">
					<RedpaprIcon size={120} className="mx-auto" />
				</div>
			</section>

			<footer className="px-4 py-4 text-center">
				<h4>{product.title}</h4>
				<p className="p5 text-700">{product.description}</p>
			</footer>
		</a>
	);
}
