import { Container } from "../../../base";
import { RedpaprIcon } from "../../branding";



export default function BrandingFooter () {
	return (
		<footer className="bg-zinc-950 text-white text-left">
			<section className="max-w-5xl mx-auto px-6 py-12 grid lg:grid-cols-3 gap-x-4 gap-y-6 text-zinc-300">
				<section className="space-y-4">
					<h1>Redpapr</h1>
					<RedpaprIcon size={200} />
					<h4>Doing the Tech bit in EdTech.</h4>
				</section>

				<section>
					<h3>Reach out to us</h3>
				</section>

				<section>
					<h3>Social Media</h3>
				</section>
			</section>
		</footer>
	);
}
