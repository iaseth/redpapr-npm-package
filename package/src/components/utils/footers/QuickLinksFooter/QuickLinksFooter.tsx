import { redpaprJson } from "@/data";
import QuickLinksSection from "./QuickLinksSection";



export default function QuickLinksFooter () {
	return (
		<footer className="bg-zinc-50 text-zinc-800 border-t border-zinc-300 px-4 py-12 text-left">
			<header className="text-center">
				<h2>Quick Links</h2>
			</header>

			<main className="container-5xl grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
				{redpaprJson.quickLinks.map((column, k) => <QuickLinksSection key={k} column={column} />)}
			</main>
		</footer>
	);
}
