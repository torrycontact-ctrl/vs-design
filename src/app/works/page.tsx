import WorksSection from "@/components/sections/WorksSection";

export const metadata = {
  title: "Work — Product Design Portfolio",
  description: "Selected product design work across SaaS platforms, healthcare AI, fintech, and mobile apps. Case studies with real outcomes and system-level thinking.",
  alternates: { canonical: "https://torry.design/works" },
  openGraph: {
    title: "Work — Victoria Samoilenko | Product Design Portfolio",
    description: "Selected product design work across SaaS platforms, healthcare AI, fintech, and mobile apps.",
    url: "https://torry.design/works",
    images: [{ url: "/og/og-work.jpg", width: 1200, height: 630 }],
  },
};

export default function WorksPage() {
  return (
    <main className="works-page">
      <WorksSection />
    </main>
  );
}
