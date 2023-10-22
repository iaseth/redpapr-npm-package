import Link from "next/link";
import { H4 } from "../../../../package/src";



interface SidebarLink {
	href: string,
	title: string
}

interface SidebarSectionProps {
	heading: string,
	links: SidebarLink[]
}

export default function SidebarSection ({heading, links}: SidebarSectionProps) {
	return (
		<section>
			<header className="px-3 py-2 border-b-2 border-zinc-600 text-white">
				<H4>{heading}</H4>
			</header>
			<footer className="px-3 py-3 space-y-2 text-zinc-300">
				{links.map((link, k) => (
					<H4 key={k}>
						<Link href={link.href} className="block px-3 py-1 rounded hover:bg-zinc-800">{link.title}</Link>
					</H4>
				))}
			</footer>
		</section>
	);
}
