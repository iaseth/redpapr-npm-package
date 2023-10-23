import { redpaprJson } from "../../../../data/redpapr";
import QuickLinksSection from "./QuickLinksSection";



export default function QuickLinksFooter () {
	return (
		<footer className="bg-zinc-950 text-zinc-300 px-6 py-12 text-left">
			<header className="">
				<h2>Quick Links</h2>
			</header>

			<main className="max-w-5xl mx-auto py-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
				{redpaprJson.quickLinks.map((column, k) => <QuickLinksSection key={k} column={column} />)}
			</main>
		</footer>
	);
}
