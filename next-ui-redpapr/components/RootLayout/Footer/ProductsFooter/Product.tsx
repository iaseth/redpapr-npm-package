import { RedpaprJsonProduct } from "@/data";



interface ProductProps {
	product: RedpaprJsonProduct,
}

export default function Product ({product}: ProductProps) {
	return (
		<section className="bg-white border px-4 py-4">
			<h4>Product</h4>
		</section>
	);
}
