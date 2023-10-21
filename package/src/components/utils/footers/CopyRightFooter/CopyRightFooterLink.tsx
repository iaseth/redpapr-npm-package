import { P5 } from "../../../base";
import { DefaultLinkProps } from "../../DefaultLink/DefaultLink";



interface CopyRightFooterLinkProps {
	href: string,
	title: string,
	Link: React.FC<DefaultLinkProps>
}

export default function CopyRightFooterLink ({href, title, Link}: CopyRightFooterLinkProps) {
	return (
		<P5>
			<Link href={href}>{title}</Link>
		</P5>
	);
}
