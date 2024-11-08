import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import Header from "./header";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const {
  NEXT_PUBLIC_FIREBASE_API,
  NEXT_PUBLIC_FIREBASE_AUTHDOMAIN,
  NEXT_PUBLIC_FIREBASE_DBURL,
  NEXT_PUBLIC_FIREBASE_PROJECTID,
  NEXT_PUBLIC_FIREBASE_STORAGE,
  NEXT_PUBLIC_FIREBASE_MESSAGE,
  NEXT_PUBLIC_FIREBASE_APPID,
  NEXT_PUBLIC_FIREBASE_MEASUREMENTID,
} = process.env;

if (typeof window !== "undefined") {
  const firebaseConfig = {
    apiKey: NEXT_PUBLIC_FIREBASE_API,
    authDomain: NEXT_PUBLIC_FIREBASE_AUTHDOMAIN,
    databaseURL: NEXT_PUBLIC_FIREBASE_DBURL,
    projectId: NEXT_PUBLIC_FIREBASE_PROJECTID,
    storageBucket: NEXT_PUBLIC_FIREBASE_STORAGE,
    messagingSenderId: NEXT_PUBLIC_FIREBASE_MESSAGE,
    appId: NEXT_PUBLIC_FIREBASE_APPID,
    measurementId: NEXT_PUBLIC_FIREBASE_MEASUREMENTID,
  };
  getAnalytics(initializeApp(firebaseConfig));
}

const ibm = IBM_Plex_Sans({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["cyrillic"],
});

export const metadata: Metadata = {
  title: "The 7 Questions Traveler",
  description:
    "Seven question to aims to raise awareness about safety while traveling",
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
