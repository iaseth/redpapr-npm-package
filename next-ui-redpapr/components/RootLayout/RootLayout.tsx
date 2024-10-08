import { Ubuntu } from 'next/font/google';
import Script from 'next/script';

import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Sidebar from './Sidebar/Sidebar';
import React from 'react';

const sansSerif = Ubuntu({
	subsets: ['latin'],
	weight: ['400', '700']
});

interface RootLayoutProps {
	children: React.ReactNode
}

export default function RootLayout ({children}: RootLayoutProps) {
	return (
		<html lang="en">
			<Script async src="https://www.googletagmanager.com/gtag/js?id=G-BHR7Q0Q62F" />
			<Script type="text/javascript" id="google-analytics">
				{`
window.dataLayer = window.dataLayer || [];
function gtag() {dataLayer.push(arguments);};
if (document.location.hostname.search("ui.redpapr.com") !== -1) {
	gtag('js', new Date()); gtag('config', 'G-BHR7Q0Q62F');
}
				`}
			</Script>
			<body className={`redpapr-theme-dark ${sansSerif.className}`}>
				<Header />
				<main className="bg-100 lg:flex items-stretch border-y border-red-600">
					<Sidebar />
					<section className="grow">
						<article className="max-w-5xl mx-auto min-h-screen px-4 py-12 text-left">{children}</article>
					</section>
				</main>
				<Footer />
			</body>
		</html>
	);
}
