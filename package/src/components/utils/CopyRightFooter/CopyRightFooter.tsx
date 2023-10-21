import { H3, P5 } from "../../base";
import { DefaultLink, DefaultLinkProps } from "../DefaultLink/DefaultLink";
import CopyRightFooterLink from "./CopyRightFooterLink";



interface CopyRightFooterProps {
	Link?: React.FC<DefaultLinkProps>
}

export default function CopyRightFooter ({
	Link=DefaultLink
}: CopyRightFooterProps) {
	return (
		<footer className="bg-zinc-50 text-zinc-800 border-t border-zinc-300 px-4 py-12 text-left">
			<main className="max-w-5xl mx-auto px-4 py-4 grid md:grid-cols-2 gap-x-4 gap-y-4 text-zinc-500">
				<section>
					<H3 className="text-red-500">
						<Link href="/">&copy; Redpapr</Link>
					</H3>
					<P5>Copyright &copy; 2023 Redpapr.</P5>
					<P5>All rights reserved.</P5>
				</section>
				<section className="grid grid-cols-2 gap-x-3 gap-y-2">
					<CopyRightFooterLink href="privacy" title="Privacy Policy" Link={Link} />
					<CopyRightFooterLink href="terms" title="Terms of Use" Link={Link} />
					<CopyRightFooterLink href="payments" title="Payments and Refunds" Link={Link} />
					<CopyRightFooterLink href="legal" title="Legal" Link={Link} />
					<CopyRightFooterLink href="sitemap" title="Site Map" Link={Link} />
				</section>
			</main>
		</footer>
	);
}
