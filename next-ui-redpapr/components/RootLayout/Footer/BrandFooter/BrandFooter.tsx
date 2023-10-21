import { redpaprJson, redMeta } from "@/data";
import SocialMediaLink from "./SocialMediaLink";



export default function BrandFooter () {
	return (
		<footer className="bg-zinc-50 text-zinc-800 border-t border-zinc-300 px-4 py-12 text-left">
			<main className="container-5xl grid md:grid-cols-3 gap-x-4 gap-y-4">
				<section>
					<h3>Redpapr</h3>
					<p>{redMeta.description}</p>
				</section>
				<section>
					<h3>Contact</h3>
				</section>
				<section>
					<h3>Socials</h3>
					<ul className="grid grid-cols-2 py-2 gap-3">
						{redpaprJson.socialMedia.map((sm, k) => <SocialMediaLink key={k} sm={sm} />)}
					</ul>
				</section>
			</main>
		</footer>
	);
}
