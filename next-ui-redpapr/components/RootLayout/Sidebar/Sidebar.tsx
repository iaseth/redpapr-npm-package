import { H2, H4 } from "../../../../package/src";
import SidebarSection from "./SidebarSection";



export default function Sidebar () {
    return (
        <aside className="h-screen overflow-y-scroll w-1/4 max-w-sm bg-zinc-950">
            <header className="px-4 py-8 text-center bg-zinc-900">
                <H2>Redpapr</H2>
                <H4>Redifining Education</H4>
            </header>
            <footer className="px-3 py-3">
                <SidebarSection heading="Basics" links={[
                    {"href": "one", "title": "One"},
                    {"href": "two", "title": "Two"},
                    {"href": "three", "title": "Three"},
                    {"href": "four", "title": "Four"}
                ]} />
            </footer>
        </aside>
    );
}
