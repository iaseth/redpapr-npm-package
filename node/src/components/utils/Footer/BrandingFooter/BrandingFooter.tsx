import { redpaprJson } from "../../../../data";
import { EmailID, MobileNumber } from "../../../base";
import { RedpaprIcon } from "../../branding";
import SocialMediaLink from "./SocialMediaLink";



export default function BrandingFooter () {
	const { meta } = redpaprJson;
	return (
		<footer className="bg-50 py-12 text-700 text-left">
			<section className="max-w-5xl mx-auto px-4 py-4 grid lg:grid-cols-3 gap-x-4 gap-y-8">
				<section className="space-y-4">
					<h1>Redpapr</h1>
					<RedpaprIcon size={200} />
					<h4>{meta.tagline}</h4>
					<p>{meta.description}</p>
				</section>

				<section className="">
					<h3>Contact Us</h3>
					<section className="py-4 space-y-1 text-600">
						<p>You can call us at:</p>
						<h4 className="text-800">
							<MobileNumber mobileNumber={meta.contactMobile} />
						</h4>
						<p>You can Email us at:</p>
						<h4 className="text-800">
							<EmailID emailID={meta.contactEmail} />
						</h4>
					</section>
				</section>

				<section>
					<h3>Social Media</h3>
					<ul className="py-2">
						{redpaprJson.socialMedia.map((link, k) => <SocialMediaLink key={k} link={link} />)}
					</ul>
				</section>
			</section>
		</footer>
	);
}
