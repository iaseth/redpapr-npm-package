import { RedpaprJsonQuickLinkColumn } from "../../../../data/redpapr";



interface QuickLinksSectionProps {
	column: RedpaprJsonQuickLinkColumn,
}

export default function QuickLinksSection ({column}: QuickLinksSectionProps) {
	return (
		<section className="">
			<header className="text-center">
				<h4>{column.heading}</h4>
			</header>
			<main>
				<ul></ul>
			</main>
		</section>
	);
}
