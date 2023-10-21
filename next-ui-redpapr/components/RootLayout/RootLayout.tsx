import { Lato as myFontModule } from 'next/font/google';
import Script from 'next/script';

import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Main from "./Main/Main";

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
				<Header />
				<Main>{children}</Main>
				<Footer />
			</body>
		</html>
	);
}
