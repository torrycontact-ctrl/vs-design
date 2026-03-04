import ContactSection from "@/components/sections/ContactSection";

export const metadata = {
  title: "Contact – VS Design",
  description: "Get in touch for collaboration and design projects.",
};

export default function ContactPage() {
  return (
    <main className="flex flex-1 flex-col overflow-hidden">
      <ContactSection />
    </main>
  );
}
