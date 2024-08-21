import { DownloadBannerHeader } from "../../../redpapr";



interface HeaderProps {
	//
}

export default function Header ({}: HeaderProps) {
	return (
		<>
			<DownloadBannerHeader />
			<header className="px-4 py-8 bg-zinc-950 text-center">
				<h1>Red UI</h1>
			</header>
		</>
	);
}
