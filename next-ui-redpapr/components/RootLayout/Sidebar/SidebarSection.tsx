import Link from "next/link";



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
			<header className="px-3 py-2 border-b-2 border-zinc-500 text-950">
				<h4>{heading}</h4>
			</header>
			<footer className="px-0 py-2 text-700">
				{links.map((link, k) => (
					<p key={k}>
						<Link href={link.href} className="block pl-6 pr-3 py-3 rounded slow hover:bg-red-500 hover:text-white">{link.title}</Link>
					</p>
				))}
			</footer>
		</section>
	);
}
