import { RedpaprJsonQuickLink } from "../../../../../data";



interface QuickLinkProps {
	link: RedpaprJsonQuickLink
}

export default function QuickLink ({link}: QuickLinkProps) {
	return (
		<li className="py-1">
			<a href={link.URL} className="text-700 red-link">{link.title}</a>
		</li>
	);
}
