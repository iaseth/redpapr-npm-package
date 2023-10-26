import { RedpaprJsonProduct } from "../../../../../data";
import { RedpaprIcon } from "../../../branding";



interface ProductCardProps {
	product: RedpaprJsonProduct
}

export default function ProductCard ({product}: ProductCardProps) {
	const alpha = product.status === "alpha";
	const webURL = alpha ? false : product.webURL;

	return (
		<a className={`block bg-50 text-900 border rounded ${alpha ? "border-blue-900" : "group border-red-800"}`} href={webURL || undefined} target="_blank">
			<header className={`px-4 py-1 text-white text-center ${alpha ? "bg-blue-700" : "bg-red-700"}`}>
				<p className="p5 py-2">{product.tagline}</p>
			</header>

			<section className="px-4 py-5 bg-100">
				<div className="slow overflow-hidden group-hover:scale-110">
					<RedpaprIcon size={120} className="mx-auto" />
				</div>
			</section>

			<footer className="px-4 py-4 text-center">
				<h4>
					<span className="slow group-hover:text-red-600">{product.title}</span>
					{product.status === "beta" && <sup className="px-2 py-1 text-green-600 h6 rounded">BETA</sup>}
					{product.status === "alpha" && <sup className="px-2 py-1 text-blue-600 h6 rounded">ALPHA</sup>}
				</h4>
				<p className="p5 text-700">{product.description}</p>
			</footer>
		</a>
	);
}
