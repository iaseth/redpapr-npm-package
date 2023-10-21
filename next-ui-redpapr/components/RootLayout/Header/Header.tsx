import Link from "next/link";



export default function Header () {
	return (
		<header className="bg-red-500 text-white text-center">
			<h5>
				<Link className="block px-4 py-2" href="/app">Download the <span className="bg-red-700 px-2 py-2 mx-1 rounded">App</span></Link>
			</h5>
		</header>
	);
}
