import AboutSection from "@/components/sections/AboutSection";

export const metadata = {
  title: "About — Product Designer",
  description: "Product designer with 9+ years of experience working with startups and Fortune 500 teams. Specializing in complex SaaS, AI products, and scalable design systems.",
  alternates: { canonical: "https://torry.design/about" },
  openGraph: {
    title: "About — Victoria Samoilenko | Product Designer",
    description: "Product designer with 9+ years of experience working with startups and Fortune 500 teams.",
    url: "https://torry.design/about",
    images: [{ url: "/og/og-about.jpg", width: 1200, height: 630 }],
  },
};

export default function AboutPage() {
  return (
    <main className="flex-1 overflow-y-auto">
      <AboutSection />
    </main>
  );
}
