import { RedpaprJsonQuickLinkColumn } from "../../../../../data/redpapr";
import QuickLink from "./QuickLink";



interface QuickLinksSectionProps {
	column: RedpaprJsonQuickLinkColumn,
}

export default function QuickLinksSection ({column}: QuickLinksSectionProps) {
	return (
		<section className="">
			<header className="">
				<h4>{column.heading}</h4>
				<p className="p5">{column.description}</p>
			</header>
			<main>
				<ul className="py-2 space-y-1 p5">
					{column.links.map((link, k) => <QuickLink key={k} link={link} />)}
				</ul>
			</main>
		</section>
	);
}
