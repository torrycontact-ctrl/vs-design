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
  metadataBase: new URL("https://torry.design"),
  title: {
    default: "Victoria Samoilenko — Senior Product Designer",
    template: "%s | Victoria Samoilenko",
  },
  description: "Senior Product Designer helping AI and SaaS startups build scalable products. 9+ years of experience. Based in Europe, working remotely with US teams.",
  keywords: ["product designer", "UX designer", "UI designer", "SaaS design", "AI product design", "freelance designer", "design systems", "startup designer"],
  authors: [{ name: "Victoria Samoilenko", url: "https://torry.design" }],
  creator: "Victoria Samoilenko",
  openGraph: {
    siteName: "Victoria Samoilenko — Product Designer",
    type: "website",
    locale: "en_US",
    url: "https://torry.design",
    title: "Victoria Samoilenko — Senior Product Designer",
    description: "Senior Product Designer helping AI and SaaS startups build scalable products. 9+ years of experience. Based in Europe, working remotely with US teams.",
    images: [{ url: "/og/og-home.jpg", width: 1200, height: 630, alt: "Victoria Samoilenko — Senior Product Designer portfolio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Victoria Samoilenko — Senior Product Designer",
    description: "Senior Product Designer helping AI and SaaS startups build scalable products.",
    images: ["/og/og-home.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/images/favicons/favicon-26.png", sizes: "26x26", type: "image/png" },
      { url: "/images/favicons/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/images/favicons/favicon-64.png", sizes: "64x64", type: "image/png" },
      { url: "/images/favicons/favicon-128.png", sizes: "128x128", type: "image/png" },
    ],
    apple: [{ url: "/images/favicons/favicon-180.png", sizes: "180x180", type: "image/png" }],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Victoria Samoilenko",
              jobTitle: "Senior Product Designer",
              url: "https://torry.design",
              sameAs: [
                "https://www.linkedin.com/in/victoria-samoilenko/",
                "https://dribbble.com/torrydesign",
              ],
              knowsAbout: ["Product Design", "UX Design", "UI Design", "SaaS", "Design Systems", "AI Products"],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Kraków",
                addressCountry: "PL",
              },
            }),
          }}
        />
        <HomeBackgroundWrapper>
          <Navbar />
          {children}
          <FooterWrapper />
        </HomeBackgroundWrapper>
      </body>
    </html>
  );
}
