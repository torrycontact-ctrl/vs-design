export interface ContentBlock {
  heading: string;
  paragraphs: string[];
}

export interface ImageBlock {
  type: "single" | "double" | "full";
  images: { src: string; alt: string }[];
  height?: number;
}

export interface GalleryImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface Project {
  slug: string;
  title: string;
  services: string;
  thumbnail: string;
  heroImage?: string;
  client?: string;
  website?: { label: string; url: string };
  industry?: string;
  timeline?: string;
  contentBlocks?: ContentBlock[];
  imageBlocks?: ImageBlock[];
  galleryImages?: GalleryImage[];
  results?: ContentBlock;
  resultsGalleryWidths?: number[];
  resultsGalleryImages?: GalleryImage[];
}

export const projects: Project[] = [
  {
    slug: "ai-music-player",
    title: "AI Music Player",
    services: "APP, AI DESIGN",
    thumbnail: "/images/Works/Light/img.png",
    heroImage: "/images/Works/Light/img.png",
    client: "Melodify Inc.",
    website: { label: "melodify.io", url: "https://melodify.io" },
    industry: "Music & Entertainment",
    timeline: "Jan 2024 – Apr 2024",
    contentBlocks: [
      {
        heading: "Reimagining the Music Experience with AI",
        paragraphs: [
          "The challenge was to create a music player that adapts to the user's mood, habits, and environment. Traditional music apps rely on static playlists and manual curation — we wanted to change that.",
          "By leveraging AI-driven recommendations and contextual awareness, we designed an experience that feels personal and effortless from the first interaction.",
        ],
      },
    ],
    imageBlocks: [
      {
        type: "single",
        images: [
          { src: "/images/Works/Light/img.png", alt: "App main screen" },
        ],
      },
      {
        type: "double",
        images: [
          { src: "/images/Works/Light/img.png", alt: "Player view" },
          { src: "/images/Works/Light/img.png", alt: "Playlist view" },
        ],
      },
      {
        type: "single",
        height: 672,
        images: [
          { src: "/images/Works/Light/img.png", alt: "Full app experience" },
        ],
      },
    ],
    resultsGalleryWidths: [512, 576, 320, 384],
    results: {
      heading: "Final Results",
      paragraphs: [
        "The AI Music Player launched to overwhelmingly positive reception. User engagement increased by 40% compared to traditional players, with an average session duration of 45 minutes.",
        "The adaptive recommendation engine achieved a 92% satisfaction rate in user surveys, proving that thoughtful AI integration enhances rather than replaces the human experience.",
      ],
    },
  },
  {
    slug: "clinic-ai-erm",
    title: "Clinic AI ERM",
    services: "SAAS, CRM, WEB",
    thumbnail: "/images/Works/Light/img-1.png",
    heroImage: "/images/Works/Light/img-1.png",
    client: "Clinic AI",
    website: { label: "EMAIL", url: "mailto:hello@vsdesign.com" },
    industry: "Healthcare, AI",
    timeline: "Feb 2024 – Jul 2024",
    contentBlocks: [
      {
        heading: "Designing a Modern Clinic Operations Hub",
        paragraphs: [
          "Clinic AI ERM unifies patient records, scheduling, and reporting into a single operational hub for clinics. The goal was to reduce administrative friction while improving clarity for clinical teams.",
          "We focused on scalable information architecture and predictable workflows so teams can move quickly between patients, appointments, and analytics without losing context.",
        ],
      },
    ],
    imageBlocks: [
      {
        type: "single",
        images: [
          { src: "/images/Works/Light/img-1.png", alt: "Clinic ERM overview" },
        ],
      },
      {
        type: "double",
        images: [
          { src: "/images/Works/Light/img-1.png", alt: "Patient management" },
          { src: "/images/Works/Light/img-1.png", alt: "Clinic analytics" },
        ],
      },
      {
        type: "single",
        height: 672,
        images: [
          { src: "/images/Works/Light/img-1.png", alt: "Scheduling and insights" },
        ],
      },
    ],
    resultsGalleryWidths: [512, 576, 320, 384],
    results: {
      heading: "Final Results",
      paragraphs: [
        "Delivered an end-to-end clinic ERM system that unifies patient flows, documentation, and operational reporting. The system reduced time spent on administrative tasks and improved cross-team visibility.",
        "The redesigned platform improved staff adoption and data accuracy, enabling clinics to scale operations while maintaining a consistent care experience.",
      ],
    },
  },
  {
    slug: "dance-app",
    title: "Dance App",
    services: "APP, IOS, SOCIAL",
    thumbnail: "/images/Works/Light/img-2.png",
    heroImage: "/images/Works/Light/img-2.png",
    client: "Move Studio",
    website: { label: "EMAIL", url: "mailto:hello@vsdesign.com" },
    industry: "Social, Mobile",
    timeline: "May 2024 – Sep 2024",
    contentBlocks: [
      {
        heading: "Building a Social Dance Experience",
        paragraphs: [
          "Dance App connects creators and communities through short-form classes, challenges, and live sessions. The design had to feel energetic while keeping navigation simple on mobile.",
          "We prioritized quick onboarding, expressive profiles, and a feed that highlights trending moves without sacrificing performance or usability.",
        ],
      },
    ],
    imageBlocks: [
      {
        type: "single",
        images: [
          { src: "/images/Works/Light/img-2.png", alt: "Dance app feed" },
        ],
      },
      {
        type: "double",
        images: [
          { src: "/images/Works/Light/img-2.png", alt: "Class details" },
          { src: "/images/Works/Light/img-2.png", alt: "Creator profile" },
        ],
      },
      {
        type: "single",
        height: 672,
        images: [
          { src: "/images/Works/Light/img-2.png", alt: "Challenges overview" },
        ],
      },
    ],
    resultsGalleryWidths: [512, 576, 320, 384],
    results: {
      heading: "Final Results",
      paragraphs: [
        "Shipped a social-first mobile experience that increases community engagement while keeping discovery friction low. The interface supports creators, classes, and challenges with clear visual hierarchy.",
        "The product launched with strong retention and a growing creator base, validating the balance of expressive visuals and practical navigation.",
      ],
    },
  },
  {
    slug: "teams-platform",
    title: "Teams Management Platform",
    services: "Saas, Dashboard, CRM, Web App",
    thumbnail: "/images/Works/Light/img-3.png",
    heroImage: "/images/Works/Light/small-image.png",
    client: "dot cards",
    website: { label: "teams.dot.cards", url: "https://teams.dot.cards" },
    industry: "Start-Up, AI",
    timeline: "Jan 2024 - May 2025",
    contentBlocks: [
      {
        heading: "Building a Scalable Team Platform",
        paragraphs: [
          "dot.Teams is a team and contact management platform within the dot.cards ecosystem. This project focused on designing scalable UX and UI systems that support growing teams, complex roles, and real operational needs — from early structure to production.",
          "As teams grow, managing people, connections, and shared data becomes increasingly complex. dot.Teams was designed to support this growth — providing a structured, flexible platform for team and contact management within the dot.cards ecosystem.",
        ],
      },
    ],
    imageBlocks: [
      {
        type: "single",
        images: [
          { src: "/images/Project/Work/Teams/big-image.png", alt: "Teams dashboard overview" },
        ],
      },
      {
        type: "double",
        images: [
          { src: "/images/Project/Work/Teams/img 4.png", alt: "User experience view" },
          { src: "/images/Project/Work/Teams/img 5.png", alt: "Conversation tracking" },
        ],
      },
      {
        type: "single",
        height: 672,
        images: [
          { src: "/images/Project/Work/Teams/big-image-1.png", alt: "Teams insights analytics" },
        ],
      },
    ],
    resultsGalleryWidths: [512, 576, 320, 384],
    results: {
      heading: "Final Results",
      paragraphs: [
        "Delivered a production-ready design system and end-to-end UI for dot.Teams, covering onboarding, team management, subscriptions, and core workflows. Close collaboration with engineering ensured design fidelity across the platform.",
        "The redesign improved clarity and adoption, supporting 97% template creation success, 243 reusable components, 70k+ customers reached, and $20M+ in subscription revenue — positioning dot.Teams as a scalable, revenue-driven product.",
      ],
    },
  },
];
