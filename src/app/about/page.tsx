import AboutSection from "@/components/sections/AboutSection";

export const metadata = {
  title: "About – VS Design",
  description: "About the designer — background, skills, and experience.",
};

export default function AboutPage() {
  return (
    <main className="flex-1 overflow-y-auto">
      <AboutSection />
    </main>
  );
}
