export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  tags: string[];
  thumbnail: string;
  hero: string;
  color: string;
  year: string;
  role: string;
  duration: string;
  overview: string;
  sections: {
    heading: string;
    body: string;
    image?: string;
  }[];
}

export const projects: Project[] = [
  {
    slug: "flavour-fusion",
    title: "Flavour Fusion",
    subtitle: "A recipe discovery app blending global cuisines into personalized meal plans.",
    tags: ["UX Research", "UI Design", "Prototyping"],
    thumbnail: "/images/flavour-fusion-thumb.jpg",
    hero: "/images/flavour-fusion-hero.jpg",
    color: "var(--color-light-pink)",
    year: "2024",
    role: "Product Designer",
    duration: "8 weeks",
    overview:
      "Flavour Fusion helps home cooks discover new recipes tailored to their dietary preferences, pantry inventory, and skill level. The app combines AI-powered recommendations with a vibrant community of food enthusiasts.",
    sections: [
      {
        heading: "Research & Discovery",
        body: "Conducted 12 user interviews and competitive analysis across 5 major recipe platforms to identify gaps in personalization and meal planning features.",
        image: "/images/flavour-fusion-research.jpg",
      },
      {
        heading: "Design Process",
        body: "Iterated through 3 rounds of wireframes, testing each with users to refine the core recipe-browsing and meal-planning flows.",
        image: "/images/flavour-fusion-process.jpg",
      },
      {
        heading: "Final Design",
        body: "Delivered a polished UI system with 40+ components, dark mode support, and accessibility compliance to WCAG 2.1 AA.",
        image: "/images/flavour-fusion-final.jpg",
      },
    ],
  },
  {
    slug: "nomad-wallet",
    title: "Nomad Wallet",
    subtitle: "A fintech app built for digital nomads to manage multi-currency expenses.",
    tags: ["Product Strategy", "UI Design", "Design System"],
    thumbnail: "/images/nomad-wallet-thumb.jpg",
    hero: "/images/nomad-wallet-hero.jpg",
    color: "var(--color-butter-yellow)",
    year: "2024",
    role: "Product Designer",
    duration: "10 weeks",
    overview:
      "Nomad Wallet simplifies financial management for remote workers who travel between countries, offering real-time exchange rates, split billing, and expense categorization.",
    sections: [
      {
        heading: "Problem Space",
        body: "Digital nomads often juggle 3–5 bank accounts and struggle with currency conversions, hidden fees, and tax-compliant record keeping.",
        image: "/images/nomad-wallet-problem.jpg",
      },
      {
        heading: "Ideation & Testing",
        body: "Ran a design sprint to generate concepts, then validated the top 3 with moderated usability tests across 8 participants in 4 countries.",
        image: "/images/nomad-wallet-testing.jpg",
      },
      {
        heading: "Outcome",
        body: "The final product reduced average transaction time by 40% and received a 4.7★ rating in beta testing with 200+ users.",
        image: "/images/nomad-wallet-outcome.jpg",
      },
    ],
  },
  {
    slug: "pulse-fit",
    title: "Pulse Fit",
    subtitle: "A health & fitness platform connecting users with certified personal trainers.",
    tags: ["UX Research", "Interaction Design", "Prototyping"],
    thumbnail: "/images/pulse-fit-thumb.jpg",
    hero: "/images/pulse-fit-hero.jpg",
    color: "var(--color-pink)",
    year: "2023",
    role: "Product Designer",
    duration: "12 weeks",
    overview:
      "Pulse Fit bridges the gap between affordable fitness coaching and personalized workout plans, making professional guidance accessible to everyone.",
    sections: [
      {
        heading: "User Research",
        body: "Surveyed 200+ gym-goers and conducted contextual inquiries at 3 fitness centers to understand pain points in trainer-client communication.",
        image: "/images/pulse-fit-research.jpg",
      },
      {
        heading: "Design Iterations",
        body: "Built an interactive prototype in Figma, testing 5 key flows with 15 participants over 2 sprint cycles.",
        image: "/images/pulse-fit-iterations.jpg",
      },
      {
        heading: "Results",
        body: "Achieved a 92% task-completion rate in final usability testing. The client secured seed funding based on the prototype.",
        image: "/images/pulse-fit-results.jpg",
      },
    ],
  },
  {
    slug: "green-loop",
    title: "Green Loop",
    subtitle: "A sustainability tracker helping households reduce their carbon footprint.",
    tags: ["Product Strategy", "UI Design", "Data Visualization"],
    thumbnail: "/images/green-loop-thumb.jpg",
    hero: "/images/green-loop-hero.jpg",
    color: "var(--color-nude-purple)",
    year: "2023",
    role: "Lead Designer",
    duration: "6 weeks",
    overview:
      "Green Loop gamifies sustainable living by tracking energy, water, and waste metrics and suggesting actionable changes through a friendly, data-rich dashboard.",
    sections: [
      {
        heading: "Discovery",
        body: "Mapped the landscape of sustainability apps and identified a gap: most tools overwhelm users with data but lack actionable next steps.",
        image: "/images/green-loop-discovery.jpg",
      },
      {
        heading: "Visual Design",
        body: "Created a warm, approachable visual language with custom illustrations and data-viz components that make complex metrics feel simple.",
        image: "/images/green-loop-visual.jpg",
      },
      {
        heading: "Impact",
        body: "Beta users reported a 25% reduction in household waste within 30 days of consistent use.",
        image: "/images/green-loop-impact.jpg",
      },
    ],
  },
];
