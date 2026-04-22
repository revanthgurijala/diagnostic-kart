import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

// We use Plus Jakarta Sans for a highly modern, stylish look
const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-geist-sans", // Reusing your existing CSS variable so Tailwind picks it up automatically
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
    <html lang="en" className={`${plusJakarta.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
