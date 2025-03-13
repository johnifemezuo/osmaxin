import { ApolloWrapper } from "@/base/lib/apollo-client";
import { Layout } from "@/components/Layout/Layout";
import type { Metadata } from "next";
import { Wix_Madefor_Display } from "next/font/google";
import "./globals.css";

const wixMadeforDisplay = Wix_Madefor_Display({
  variable: "--font-wix-madefor-display",
  subsets: ["latin"],
});

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
    <html lang='en'>
      <body className={` ${wixMadeforDisplay.variable} antialiased`}>
        <Layout>
          <ApolloWrapper>{children}</ApolloWrapper>
        </Layout>
      </body>
    </html>
  );
}
