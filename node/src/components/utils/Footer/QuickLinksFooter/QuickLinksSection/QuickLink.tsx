import { RedpaprJsonQuickLink } from "../../../../../data";



interface QuickLinkProps {
	link: RedpaprJsonQuickLink
}

export default function QuickLink ({link}: QuickLinkProps) {
	return (
		<li className="text-700 border-l-2 border-transparent slow hover:pl-3 hover:border-red-600">
			<a href={link.URL} className="block py-1.5 red-link">{link.title}</a>
		</li>
	);
}
