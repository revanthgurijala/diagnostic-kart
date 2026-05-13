import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Cormorant Garamond provides a razor-sharp, ultra-premium serif look (especially in italics)
const cormorant = Cormorant_Garamond({
  variable: "--font-playfair", // Keeping this variable name so we don't have to rewrite your CSS
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

// DM Sans is a beautiful, geometric, highly readable modern font
const dmSans = DM_Sans({
  variable: "--font-lato", // Keeping this variable name so we don't have to rewrite your CSS
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Diagnostic Kart",
  description: "One Platform, Complete Diagnostics & Preventive Care",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${cormorant.variable} ${dmSans.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-screen flex flex-col font-sans bg-[#f8fafc]">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
