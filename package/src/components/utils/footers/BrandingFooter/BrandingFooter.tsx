import { redpaprJson } from "../../../../data";
import { Container } from "../../../base";
import { RedpaprIcon } from "../../branding";
import SocialMediaLink from "./SocialMediaLink";



export default function BrandingFooter () {
	return (
		<footer className="bg-zinc-950 py-12 text-white text-left">
			<section className="max-w-5xl mx-auto px-6 py-4 grid lg:grid-cols-3 gap-x-4 gap-y-6 text-zinc-300">
				<section className="space-y-4">
					<h2>Redpapr</h2>
					<RedpaprIcon size={200} />
					<h4>Doing the Tech bit in EdTech.</h4>
				</section>

				<section className="">
					<h2>Contact Us</h2>
					<section className="py-4 space-y-1">
						<p>You can call us at:</p>
						<h4>{redpaprJson.meta.contactMobile}</h4>
						<p>You can Email us at:</p>
						<h4>{redpaprJson.meta.contactEmail}</h4>
					</section>
				</section>

				<section>
					<h2>Social Media</h2>
					<ul className="py-2">
						{redpaprJson.socialMedia.map((link, k) => <SocialMediaLink key={k} link={link} />)}
					</ul>
				</section>
			</section>
		</footer>
	);
}
