import AboutSection from "@/components/sections/AboutSection";

export const metadata = {
  title: "About – VS Design",
  description: "About the designer — background, skills, and experience.",
};

export default function AboutPage() {
  return (
    <main className="flex-1 overflow-y-auto bg-[linear-gradient(180deg,#FFF9FE_-199.24%,#CECCFA_-143.37%,#F4C5F7_0.32%,#FFF4DB_120.06%)] dark:bg-none">
      <AboutSection />
    </main>
  );
}
