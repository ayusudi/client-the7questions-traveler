import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import Header from "./header";

const ibm = IBM_Plex_Sans({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["cyrillic"],
});

export const metadata: Metadata = {
  title: "Page Transition",
  description: "Using framer-motion to add trasition between pages",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ibm.className} bg-beige flex flex-col-reverse md:flex-row `}
      >
        <main className="flex-grow px-2 md:px-0">{children}</main>
        <Header />
      </body>
    </html>
  );
}
