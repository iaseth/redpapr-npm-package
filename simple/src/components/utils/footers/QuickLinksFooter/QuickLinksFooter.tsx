import { redpaprJson } from "../../../../data/redpapr";
import QuickLinksSection from "./QuickLinksSection/QuickLinksSection";



export default function QuickLinksFooter () {
	return (
		<footer className="bg-50 text-700 py-12 text-left">
			<section className="max-w-5xl mx-auto px-6 py-4">
				<header className="py-4">
					<h1>Quick Links</h1>
				</header>
				<section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
					{redpaprJson.quickLinks.map((column, k) => <QuickLinksSection key={k} column={column} />)}
				</section>
			</section>
		</footer>
	);
}
