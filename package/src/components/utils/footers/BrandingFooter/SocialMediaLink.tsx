import { RedpaprJsonSocialMedia } from "../../../../data";



interface SocialMediaLinkProps {
	link: RedpaprJsonSocialMedia
}

export default function SocialMediaLink ({link}: SocialMediaLinkProps) {
	return (
		<li className="text-zinc-400">
			<h4 className="">
				<a href={link.URL} target="_blank" className="block py-2 red-link flex items-stretch border border-transparent rounded hover:px-4 hover:bg-zinc-900 hover:border-red-500">
					<span>{link.title}</span>
					<span className="grow flex px-4 pt-1">
						<span className="my-auto block h-1 bg-red-500 w-full"></span>
					</span>
					<span>@{link.username}</span>
				</a>
			</h4>
		</li>
	);
}
