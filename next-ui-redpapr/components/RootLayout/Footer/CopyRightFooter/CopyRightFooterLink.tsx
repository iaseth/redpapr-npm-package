import Link from "next/link";



interface CopyRightFooterLinkProps {
	href: string,
	title: string
}

export default function CopyRightFooterLink ({href, title}: CopyRightFooterLinkProps) {
	return (
		<div>
			<Link href={href}>{title}</Link>
		</div>
	);
}
