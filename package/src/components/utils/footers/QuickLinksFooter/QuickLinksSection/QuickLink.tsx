import { RedpaprJsonQuickLink } from "../../../../../data";



interface QuickLinkProps {
	link: RedpaprJsonQuickLink
}

export default function QuickLink ({link}: QuickLinkProps) {
	return (
		<li className="py-1">
			<a href={link.URL} className="red-link">{link.title}</a>
		</li>
	);
}
