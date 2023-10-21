import { Lato as myFontModule } from 'next/font/google';
import Script from 'next/script';

import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Sidebar from './Sidebar/Sidebar';

const myFont = myFontModule({
	subsets: ['latin'],
	weight: ['400', '700']
});

interface RootLayoutProps {
	children: React.ReactNode
}

export default function RootLayout ({children}: RootLayoutProps) {
	return (
		<html lang="en">
			<Script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" />
			<Script type="text/javascript" id="google-analytics">
				{`
window.dataLayer = window.dataLayer || [];
function gtag() {dataLayer.push(arguments);};
if (document.location.hostname.search("redpapr.com") !== -1) {
	gtag('js', new Date()); gtag('config', 'G-XXXXXXXXXX');
}
				`}
			</Script>
			<body className={myFont.className}>
				<main className="h-screen bg-zinc-900 text-white flex">
					<Sidebar />
					<section className="h-screen grow overflow-y-scroll">
						<Header />
						<section className="min-h-screen">
							<article className="max-w-5xl mx-auto px-4 py-12 text-left">{children}</article>
						</section>
						<Footer />
					</section>
				</main>
			</body>
		</html>
	);
}
