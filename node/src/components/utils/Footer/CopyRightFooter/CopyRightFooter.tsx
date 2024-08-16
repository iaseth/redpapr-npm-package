import CopyRightFooterLink from "./CopyRightFooterLink";



interface CopyRightFooterProps {
	className?: string,
	newtab?: boolean
}

export default function CopyRightFooter ({
	className="",
	newtab=false
}: CopyRightFooterProps) {
	return (
		<footer className={"bg-100 text-500 py-12 text-left " + className}>
			<section className="max-w-5xl mx-auto px-6 py-4 grid md:grid-cols-2 gap-x-4 gap-y-6">
				<section className="space-y-2">
					<h3 className="text-red-500">
						<a href="https://www.redpapr.com/">&copy; Redpapr</a>
					</h3>
					<p className="p5">Copyright &copy; 2024 Redpapr.</p>
					<p className="p5">All rights reserved.</p>
				</section>

				<section className="grid grid-cols-2 gap-x-3 gap-y-3">
					<CopyRightFooterLink href="https://www.redpapr.com/privacy" title="Privacy Policy" newtab={newtab} />
					<CopyRightFooterLink href="https://www.redpapr.com/terms" title="Terms of Use" newtab={newtab} />
					<CopyRightFooterLink href="https://www.redpapr.com/payments" title="Payments and Refunds" newtab={newtab} />
					<CopyRightFooterLink href="https://www.redpapr.com/legal" title="Legal" newtab={newtab} />
					<CopyRightFooterLink href="https://www.redpapr.com/sitemap" title="Site Map" newtab={newtab} />
				</section>
			</section>
		</footer>
	);
}
