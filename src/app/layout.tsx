import type { Metadata } from "next";
import { Instrument_Serif } from "next/font/google";
import localFont from "next/font/local";
import Navbar from "@/components/layout/Navbar";
import FooterSection from "@/components/sections/FooterSection";
import "./globals.css";

const ppNeueMontreal = localFont({
  src: [
    {
      path: "../../public/fonts/PPNeueMontreal-Book.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/PPNeueMontreal-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/PPNeueMontreal-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-sans",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "VS Design – Product Designer Portfolio",
  description: "Product Designer portfolio showcasing UX/UI case studies and design work.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${ppNeueMontreal.variable} ${instrumentSerif.variable}`} suppressHydrationWarning>
      <body className="flex h-screen flex-col overflow-hidden antialiased text-[var(--color-fg)] transition-colors duration-300">
        <Navbar />
        {children}
        <FooterSection />
      </body>
    </html>
  );
}
