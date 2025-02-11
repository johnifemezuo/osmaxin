import type { Metadata } from "next";
import { Wix_Madefor_Display } from "next/font/google";
import "./globals.css";
import { Layout } from "@/components/Layout/Layout";

const wixMadeforDisplay = Wix_Madefor_Display({variable: "--font-wix-madefor-display", subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Osmaxin Developers : A Web Design Agency Base in Awka",
  description: "A web design agency based in Awka Nigeria.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="author" content="John Ifemezuo Anayo" />
        <link rel="icon" href="/images/logo-tab.png" />
        <title>Osmaxin Developers : A Web Design Agency Base in Awka</title>
      </head>
      <body
        className={` ${wixMadeforDisplay.variable} antialiased`}
      >
        <Layout>
        {children}
        </Layout>
      </body>
    </html>
  );
}
