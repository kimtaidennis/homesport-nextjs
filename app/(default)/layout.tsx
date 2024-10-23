import type { Metadata } from "next";
import StoreProvider from "../../redux/StoreProvider";
import Header from "../../components/common/Header";
import Nav from "../../components/common/Nav";
import Footer from "../../components/common/Footer";
import FooterNav from "../../components/common/FooterNav";

export const metadata: Metadata = {
	title: "HomeSport",
	description: "Register for a betting account with Betika and you stand the chance to win big and bag the bragging rights with your sports-loving friends",
};

export default function RootLayout({
  	children,
	}: Readonly<{
	children: React.ReactNode;
	}>) {

	
	return (
		<>
			<Header />
			<Nav />
			<main>{ children }</main>
			<Footer />
			<FooterNav />
		</>
	);
}