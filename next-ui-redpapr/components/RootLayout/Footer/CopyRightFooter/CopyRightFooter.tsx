import Link from "next/link";
import CopyRightFooterLink from "./CopyRightFooterLink";




export default function CopyRightFooter () {
	return (
		<footer className="bg-zinc-50 text-zinc-800 border-t border-zinc-300 px-4 py-12 text-left">
			<main className="container-5xl grid md:grid-cols-2 gap-x-4 gap-y-4 text-zinc-500">
				<section>
					<h3 className="text-red-500">
						<Link href="/">&copy; Redpapr</Link>
					</h3>
					<p className="p5">Copyright &copy; 2023 Redpapr.</p>
					<p className="p5">All rights reserved.</p>
				</section>
				<section className="grid grid-cols-2 gap-x-3 gap-y-2 p5">
					<CopyRightFooterLink href="privacy" title="Privacy Policy" />
					<CopyRightFooterLink href="terms" title="Terms of Use" />
					<CopyRightFooterLink href="payments" title="Payments and Refunds" />
					<CopyRightFooterLink href="legal" title="Legal" />
					<CopyRightFooterLink href="sitemap" title="Site Map" />
				</section>
			</main>
		</footer>
	);
}
