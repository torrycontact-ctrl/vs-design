export interface Project {
  slug: string;
  title: string;
  services: string;
  thumbnail: string;
}

export const projects: Project[] = [
  {
    slug: "ai-music-player",
    title: "AI Music Player",
    services: "APP, AI DESIGN",
    thumbnail: "/images/Works/Light/img.png",
  },
  {
    slug: "clinic-ai-erm",
    title: "Clinic AI ERM",
    services: "SAAS, CRM, WEB",
    thumbnail: "/images/Works/Light/img-1.png",
  },
  {
    slug: "dance-app",
    title: "Dance App",
    services: "APP, IOS, SOCIAL",
    thumbnail: "/images/Works/Light/img-2.png",
  },
  {
    slug: "teams-platform",
    title: "Teams Platform",
    services: "SAAS, CRM, WEB",
    thumbnail: "/images/Works/Light/img-3.png",
  },
];
