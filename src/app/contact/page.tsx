import ContactSection from "@/components/sections/ContactSection";

export const metadata = {
  title: "Contact – VS Design",
  description: "Get in touch for collaboration and design projects.",
};

export default function ContactPage() {
  return (
    <main className="flex flex-1 flex-col overflow-hidden bg-[linear-gradient(180deg,#F6CFF1_0%,#FFF4DB_103.61%)] dark:bg-none">
      <ContactSection />
    </main>
  );
}
