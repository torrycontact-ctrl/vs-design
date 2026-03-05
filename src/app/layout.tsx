import type { Metadata } from "next";
import { Instrument_Serif } from "next/font/google";
import localFont from "next/font/local";
import Navbar from "@/components/layout/Navbar";
import FooterWrapper from "@/components/layout/FooterWrapper";
import HomeBackgroundWrapper from "@/components/layout/HomeBackgroundWrapper";
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

const splineSansMono = localFont({
  src: "../../public/fonts/SplineSansMono-Light.ttf",
  weight: "300",
  style: "normal",
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "VS Design – Product Designer Portfolio",
  description: "Product Designer portfolio showcasing UX/UI case studies and design work.",
  icons: {
    icon: [
      { url: "/images/favicons/favicon-26.png", sizes: "26x26", type: "image/png" },
      { url: "/images/favicons/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/images/favicons/favicon-64.png", sizes: "64x64", type: "image/png" },
      { url: "/images/favicons/favicon-128.png", sizes: "128x128", type: "image/png" },
    ],
    apple: [
      { url: "/images/favicons/favicon-180.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/images/favicons/favicon-32.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${ppNeueMontreal.variable} ${instrumentSerif.variable} ${splineSansMono.variable}`} suppressHydrationWarning>
      <body className="flex h-screen flex-col overflow-hidden antialiased text-[var(--color-fg)] transition-colors duration-300" suppressHydrationWarning>
        <HomeBackgroundWrapper>
          <Navbar />
          {children}
          <FooterWrapper />
        </HomeBackgroundWrapper>
      </body>
    </html>
  );
}
