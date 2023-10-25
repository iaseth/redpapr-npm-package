


export default function BetaInvitation () {
	return (
		<article className="max-w-sm mx-auto px-6 py-6">
			<header>
				<section className="flex py-6">
					<img className="w-48 h-48" src="img/icon/redpapr-icon.svg" alt="Redpapr Icon" />
				</section>
				<h4>Redpapr is still in Beta.</h4>
			</header>

			<section className="py-2 space-y-2">
				<h4>
					<a href="https://docs.google.com/forms/d/e/1FAIpQLSfhx5i4V_NKvgzhbRsRKyoB796Eyv0GLeBb74ERvp8ZV-09fQ/viewform?usp=sf_link" target="_blank" className="link">Request for an invite</a>
				</h4>
				<h4>
					<a href="https://home.redpapr.com/" className="link" target="_blank">Go to RedHome</a>
				</h4>
				<h4>
					<a href="https://questions.redpapr.com/" className="link" target="_blank">Go to Redpaper Questions Portal</a>
				</h4>
			</section>
		</article>
	);
}
