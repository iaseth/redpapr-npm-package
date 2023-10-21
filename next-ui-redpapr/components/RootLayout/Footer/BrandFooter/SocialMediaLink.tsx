import { RedpaprJsonSocialMedia } from "@/data/redpapr";



interface SocialMediaLinkProps {
	sm: RedpaprJsonSocialMedia,
}

export default function SocialMediaLink ({sm}: SocialMediaLinkProps) {
	return (
		<li>
			<a className="block bg-zinc-200 rounded shadow px-4 py-3 duration-300 select-none hover:px-6" href={sm.URL}>
				<p>{sm.title}</p>
				<p className="h4 text-right">@{sm.username}</p>
			</a>
		</li>
	);
}
