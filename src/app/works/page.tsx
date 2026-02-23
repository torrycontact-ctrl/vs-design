import WorksSection from "@/components/sections/WorksSection";

export const metadata = {
  title: "Works – VS Design",
  description: "Selected case studies and design projects.",
};

export default function WorksPage() {
  return (
    <main className="flex-1 min-h-0 overflow-y-auto">
      <WorksSection />
    </main>
  );
}
