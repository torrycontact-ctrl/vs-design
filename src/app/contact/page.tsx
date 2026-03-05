import ContactSection from "@/components/sections/ContactSection";

export const metadata = {
  title: "Contact — Hire a Product Designer",
  description: "Hire a senior product designer for your startup. Book a free 30-minute call to discuss your product. Flexible hours for US timezones. No commitment.",
  alternates: { canonical: "https://torry.design/contact" },
  openGraph: {
    title: "Contact — Victoria Samoilenko | Hire a Product Designer",
    description: "Book a free 30-minute call to discuss your product. Flexible hours for US timezones.",
    url: "https://torry.design/contact",
    images: [{ url: "/og/og-home.jpg", width: 1200, height: 630 }],
  },
};

export default function ContactPage() {
  return (
    <main className="flex flex-1 flex-col overflow-hidden">
      <ContactSection />
    </main>
  );
}
