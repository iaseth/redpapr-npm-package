import { RedpaprJsonSocialMedia } from "../../../../data";



interface SocialMediaLinkProps {
	link: RedpaprJsonSocialMedia
}

export default function SocialMediaLink ({link}: SocialMediaLinkProps) {
	return (
		<li className="text-zinc-400">
			<h4 className="flex">
				<a href={link.URL} target="_blank" className="py-1 red-link">{link.title} @{link.username}</a>
			</h4>
		</li>
	);
}
