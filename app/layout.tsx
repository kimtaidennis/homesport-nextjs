
import { cn } from "lib/utils/util";
import "./globals.css";
import StoreProvider from "../redux/StoreProvider";
import { Poppins } from "next/font/google"
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/toaster";

const PoppinsF = Poppins({
	subsets: ['latin'],
	weight: ['400','500','600','700'],
	variable: '--font-poppins'
})

export default function RootLayout({
  	children,
	}: Readonly<{
	children: React.ReactNode;
	}>) {

	
	return (
		<ClerkProvider>
			<html lang="en">
				<body className={ cn("font-PoppinsF antialiased", PoppinsF.variable)}>
					<StoreProvider>
						{/* Layout UI */}
						<main>{children}</main>
					</StoreProvider>
					<Toaster />
				</body>
			</html>
		</ClerkProvider>
	);
}
