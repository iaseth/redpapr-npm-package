import { H2, H4 } from "../../../../package/src";
import SidebarSection from "./SidebarSection";



export default function Sidebar () {
	return (
		<aside className="w-full lg:w-1/4 lg:max-w-sm bg-50 border-b lg:border-r lg:border-b-0 border-red-600 flex flex-col">
			<header className="px-4 py-8 text-center bg-100">
				<H2>Redpapr</H2>
				<H4>Redifining Education</H4>
			</header>

			<section className="grow px-4 py-4 space-y-4 border-y border-red-600">
				<SidebarSection heading="Basics" links={[
					{"href": "/ui/text", "title": "Text"},
					{"href": "/ui/images", "title": "Images"},
					{"href": "/ui/forms", "title": "Forms"},
					{"href": "/ui/buttons", "title": "Buttons"}
				]} />
			</section>

			<footer className="bg-100 px-6 py-8 text-center">
				<h4>You can find the source code on <a href="https://github.com/iaseth/redpapr-npm-package">GitHub</a>.</h4>
			</footer>
		</aside>
	);
}
