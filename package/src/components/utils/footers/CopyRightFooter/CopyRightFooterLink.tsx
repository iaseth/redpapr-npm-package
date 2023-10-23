


interface CopyRightFooterLinkProps {
	href: string,
	title: string,
	newtab: boolean
}

export default function CopyRightFooterLink ({href, title, newtab}: CopyRightFooterLinkProps) {
	return (
		<p className="p5">
			<a href={href}target={newtab ? "_blank" : "_self"}>{title}</a>
		</p>
	);
}
