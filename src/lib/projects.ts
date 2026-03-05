export interface ContentBlock {
  heading: string;
  paragraphs: string[];
}

export interface ImageBlock {
  type: "single" | "double" | "full" | "beforeAfter";
  images: { src: string; alt: string; width: number; height: number }[];
  height?: number;
  fit?: "cover" | "contain";
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
    slug: "astoria",
    title: "Astoria Health",
    services: "Product design • SaaS • AI integration • Healthcare",
    thumbnail: "/images/Works/1.png",
    heroImage: "/images/Work/Astoria/hero.png",
    website: { label: "melodify.io", url: "https://melodify.io" },
    industry: "A role-based clinic platform built around how medical teams actually work.",
    timeline: "Oct 2025 – Feb 2026",
    contentBlocks: [
      {
        heading: "Designing for Real Clinical Workflows",
        paragraphs: [
          "Astoria Health is a role-based medical platform built to support the daily operations of a real clinic. The system connects front desk staff, nurses, and doctors in a single shared patient record, enabling seamless collaboration under time pressure. The product needed to balance medical precision, structured documentation, and usability in a high-stakes healthcare environment.",
        ],
      },
      {
        heading: "Turning Complexity Into Clarity",
        paragraphs: [
          "The challenge was to redesign and structure a data-heavy system used by three distinct roles, each with different priorities and mental models. The platform needed to reduce cognitive load, simplify workflows, and ensure safe handoffs between staff — while maintaining compliance and medical accuracy. The goal was to create an intuitive, efficient interface that supports patient care rather than distracts from it.",
        ],
      },
      {
        heading: "Three Workspaces, One System",
        paragraphs: [
          "I designed a unified product structured around three tailored environments: Front Desk, Nurse, and Doctor, connected through a shared data layer. The front desk interface prioritizes speed and appointment management, the nurse workspace focuses on structured intake and vitals capture, and the doctor dashboard consolidates patient history, AI-assisted voice notes, calls intake, and clinical documentation into one clear timeline. Special attention was given to information hierarchy, visual calmness, and reducing unnecessary interactions in time-sensitive scenarios.",
        ],
      },
    ],
    imageBlocks: [
      {
        type: "single",
        images: [
          { src: "/images/Work/Astoria/1.png", alt: "Astoria Health platform overview", width: 3840, height: 2340 },
        ],
      },
      {
        type: "double",
        images: [
          { src: "/images/Work/Astoria/31.png", alt: "Astoria front desk interface", width: 1860, height: 1800 },
          { src: "/images/Work/Astoria/32.png", alt: "Astoria nurse workspace", width: 1860, height: 1800 },
        ],
      },
      {
        type: "single",
        images: [
          { src: "/images/Work/Astoria/2.png", alt: "Astoria doctor dashboard", width: 3840, height: 2340 },
        ],
      },
    ],
    resultsGalleryWidths: [512, 576, 320, 384],
    results: {
      heading: "A Scalable, AI-Enhanced Clinical Platform",
      paragraphs: [
        "The redesigned platform transformed a functionally complex system into a clean, role-aware medical product ready for real-world implementation. By integrating AI-powered call summaries and voice-assisted documentation, the solution reduced manual input and improved workflow efficiency. The result is a scalable, modern healthcare platform that supports clinical accuracy while delivering a confident, market-ready user experience.",
      ],
    },
    resultsGalleryImages: [
      {
        src: "/images/Work/Astoria/small-image 1.png",
        alt: "Astoria interface detail 1",
        width: 800,
        height: 600,
      },
      {
        src: "/images/Work/Astoria/small-image 2.png",
        alt: "Astoria interface detail 2",
        width: 900,
        height: 600,
      },
      {
        src: "/images/Work/Astoria/small-image 4: png.png",
        alt: "Astoria interface detail 3",
        width: 600,
        height: 600,
      },
      {
        src: "/images/Work/Astoria/small-image 5.png",
        alt: "Astoria interface detail 4",
        width: 600,
        height: 600,
      },
    ],
  },
  {
    slug: "qoria",
    title: "Qoria",
    services: "Product design • Mobile app • Gamification • Social",
    thumbnail: "/images/Works/2.png",
    heroImage: "/images/Work/Qoria/hero.png",
    website: { label: "EMAIL", url: "mailto:torry.contact@gmail.com" },
    industry: "Designing Engagement at Scale",
    timeline: "July 2025 – Oct 2025",
    contentBlocks: [
      {
        heading: "Designing a Competitive Social Platform",
        paragraphs: [
          "Qoria is a multi-feature competition platform built for dancers and performance communities. The product blends voting mechanics, video submissions, reactions, rankings, and premium tutorials into one interactive ecosystem. The goal was to create an engaging, emotionally driven experience that feels dynamic and fair — while remaining structured and scalable.",
        ],
      },
      {
        heading: "Balancing Gamification and Usability",
        paragraphs: [
          "The challenge was to design a system that supports competition logic (popular votes, trophy rooms, rankings, duet videos) without overwhelming users. The platform needed to encourage participation, reward achievement, and maintain transparency in scoring — all while feeling intuitive for both performers and voters. The experience had to work seamlessly across mobile-first interactions and content-heavy screens.",
        ],
      },
      {
        heading: "Structured Energy With Clear Hierarchy",
        paragraphs: [
          "I designed a modular system where features like Popular Vote, Hall of Fame, reactions, and premium tutorials coexist within a clear visual hierarchy. Gamification elements were carefully balanced with usability principles to avoid visual noise and cognitive overload. I focused on creating a flexible design system that supports dynamic content, ranking states, and community feedback while keeping the experience emotionally engaging and easy to navigate.",
        ],
      },
    ],
    imageBlocks: [
      {
        type: "single",
        images: [
          { src: "/images/Work/Qoria/1.png", alt: "Qoria competition feed", width: 3840, height: 2340 },
        ],
      },
      {
        type: "double",
        images: [
          { src: "/images/Work/Qoria/31.png", alt: "Qoria competition detail view", width: 1860, height: 1800 },
          { src: "/images/Work/Qoria/32.png", alt: "Qoria voting interface", width: 1860, height: 1800 },
        ],
      },
      {
        type: "single",
        images: [
          { src: "/images/Work/Qoria/2.png", alt: "Qoria creator profile and social layer", width: 3840, height: 2340 },
        ],
      },
    ],
    resultsGalleryWidths: [512, 576, 320, 384],
    results: {
      heading: "A Scalable, Engagement-Driven Product",
      paragraphs: [
        "The final product combines strong gamification mechanics with a clean, confident interface that supports both competition and learning. Qoria evolved into a scalable platform that drives engagement, encourages user participation, and positions itself as more than a voting app — but a full digital stage for performance communities.",
      ],
    },
    resultsGalleryImages: [
      {
        src: "/images/Work/Qoria/small-image 17.png",
        alt: "Qoria interface detail 1",
        width: 800,
        height: 600,
      },
      {
        src: "/images/Work/Qoria/small-image 18.png",
        alt: "Qoria interface detail 2",
        width: 600,
        height: 600,
      },
      {
        src: "/images/Work/Qoria/small-image 22.png",
        alt: "Qoria interface detail 3",
        width: 900,
        height: 600,
      },
      {
        src: "/images/Work/Qoria/small-image 25.png",
        alt: "Qoria interface detail 4",
        width: 600,
        height: 600,
      },
    ],
  },
  {
    slug: "teams",
    title: "Teams",
    services: "Product design • SaaS platform • Web • Mobile • Design system",
    thumbnail: "/images/Works/3.png",
    heroImage: "/images/Work/teams/hero.png",
    website: { label: "teams.dot.cards", url: "https://teams.dot.cards" },
    industry: "Operational SaaS for Structured Team Growth",
    timeline: "Feb 2023 – May 2025",
    contentBlocks: [
      {
        heading: "Designing the Infrastructure Behind Modern Teams",
        paragraphs: [
          "Teams is a B2B platform built to help organizations manage people, workflows, templates, and performance within one structured environment. The product combines CRM-like functionality, internal collaboration tools, analytics, and gated resources into a scalable operational system. The goal was to transform a feature-heavy tool into a clear, cohesive product that supports growing teams without overwhelming them.",
        ],
      },
      {
        heading: "Bringing Structure to a Complex System",
        paragraphs: [
          "The challenge was not adding features, but organizing them. Teams included templates, analytics dashboards, role-based permissions, resource libraries, and monetized content — all operating within one ecosystem. The interface needed to feel structured and intuitive while supporting multiple user roles and advanced workflows. The objective was to simplify navigation, clarify hierarchy, and create a system that could scale with product growth.",
        ],
      },
      {
        heading: "Modular Architecture With Clear Hierarchy",
        paragraphs: [
          "I designed a modular product framework that organizes core functions into structured environments: team management, performance tracking, content templates, and analytics. A consistent design system was developed to unify dashboards, settings, and dynamic states while reducing cognitive load. I focused on interaction clarity, visual rhythm, and flexible components that allow the platform to expand without losing usability.",
        ],
      },
    ],
    imageBlocks: [
      {
        type: "single",
        images: [
          { src: "/images/Work/teams/1.png", alt: "Teams dashboard overview", width: 3840, height: 2304 },
        ],
      },
      {
        type: "double",
        images: [
          { src: "/images/Work/teams/31.png", alt: "Teams member management", width: 1860, height: 1800 },
          { src: "/images/Work/teams/32.png", alt: "Teams client portal", width: 1860, height: 1800 },
        ],
      },
      {
        type: "single",
        images: [
          { src: "/images/Work/teams/2.png", alt: "Teams design system components", width: 3840, height: 2304 },
        ],
      },
    ],
    resultsGalleryWidths: [512, 576, 320, 384],
    results: {
      heading: "A Scalable, Market-Ready SaaS Platform",
      paragraphs: [
        "The redesigned product evolved into a confident, scalable B2B system ready for growth and monetization. By transforming complex workflows into structured, easy-to-navigate interfaces, Teams now supports operational clarity, stronger engagement, and a more professional market presence. The platform balances depth and usability — enabling teams to operate efficiently while feeling in control of their environment.",
        "243 Components Created · 97% Template Success Rate · 70K Customers Reached · +$20M Subscription Revenue",
      ],
    },
    resultsGalleryImages: [
      {
        src: "/images/Work/teams/small-image 1.png",
        alt: "Teams interface detail 1",
        width: 800,
        height: 600,
      },
      {
        src: "/images/Work/teams/small-image 2.png",
        alt: "Teams interface detail 2",
        width: 800,
        height: 600,
      },
      {
        src: "/images/Work/teams/small-image 3.png",
        alt: "Teams interface detail 3",
        width: 900,
        height: 600,
      },
      {
        src: "/images/Work/teams/small-image 4.png",
        alt: "Teams interface detail 4",
        width: 500,
        height: 600,
      },
      {
        src: "/images/Work/teams/small-image 5.png",
        alt: "Teams interface detail 5",
        width: 600,
        height: 600,
      },
    ],
  },
  {
    slug: "recordless",
    title: "Recordless",
    services: "App design • Mobile • AI product • Visual strategy • Gamification",
    thumbnail: "/images/Works/4.png",
    heroImage: "/images/Work/Recordless/hero.png",
    website: { label: "EMAIL", url: "mailto:torry.contact@gmail.com" },
    industry: "Music Production System Built on Dynamic Personalization",
    timeline: "Aug 2022 – Apr 2023",
    contentBlocks: [
      {
        heading: "Designing Adaptive Music Experiences",
        paragraphs: [
          "Recordless is an AI-powered music and production platform that gives artists deeper creative control while delivering listeners a dynamic, personalized music experience. The product enables songs to adapt in real time to a listener's mood and activity level — blending creativity, AI logic, and user interaction into one evolving system. The goal was to design an interface that makes advanced audio technology feel intuitive, expressive, and accessible.",
        ],
      },
      {
        heading: "Translating AI Logic Into Usable Design",
        paragraphs: [
          "The platform combines music production tools, adaptive playback logic, user personalization, and real-time system feedback. The challenge was to design an experience that balances creative freedom with technical complexity. The interface needed to support artists managing tracks and adaptive rules, while also delivering a seamless, emotionally engaging experience for listeners — without exposing unnecessary system complexity.",
        ],
      },
      {
        heading: "Structured Creativity With System Clarity",
        paragraphs: [
          "I designed a modular interface that separates creative control from listener experience, while keeping both connected through a clear interaction framework. Visual hierarchy and interaction patterns were carefully structured to communicate system states, adaptive behaviors, and AI-driven changes in real time. A scalable design system was developed to support evolving features, dynamic content, and future expansion of the platform.",
        ],
      },
    ],
    imageBlocks: [
      {
        type: "single",
        images: [
          { src: "/images/Work/Recordless/1.png", alt: "Recordless app home screen", width: 3840, height: 2340 },
        ],
      },
      {
        type: "double",
        images: [
          { src: "/images/Work/Recordless/31.png", alt: "Recordless player view", width: 1860, height: 1800 },
          { src: "/images/Work/Recordless/32.png", alt: "Recordless playlist view", width: 1860, height: 1800 },
        ],
      },
      {
        type: "single",
        images: [
          { src: "/images/Work/Recordless/2.png", alt: "Recordless mood and activity selection", width: 3807, height: 2340 },
        ],
      },
    ],
    resultsGalleryWidths: [512, 576, 320, 384],
    results: {
      heading: "A Scalable AI-Driven Music Platform",
      paragraphs: [
        "Recordless evolved into a clear, confident product that bridges creativity and technology. The design supports both artists and listeners, making complex AI-driven functionality feel intuitive and purposeful. The result is a modern music platform positioned for growth — combining adaptive intelligence with a thoughtful, user-centered experience.",
      ],
    },
    resultsGalleryImages: [
      {
        src: "/images/Work/Recordless/small-image 26.png",
        alt: "Recordless interface detail 1",
        width: 800,
        height: 600,
      },
      {
        src: "/images/Work/Recordless/small-image 27.png",
        alt: "Recordless interface detail 2",
        width: 600,
        height: 600,
      },
      {
        src: "/images/Work/Recordless/small-image 28.png",
        alt: "Recordless interface detail 3",
        width: 900,
        height: 600,
      },
      {
        src: "/images/Work/Recordless/small-image 29.png",
        alt: "Recordless interface detail 4",
        width: 800,
        height: 600,
      },
      {
        src: "/images/Work/Recordless/small-image 30.png",
        alt: "Recordless interface detail 5",
        width: 500,
        height: 600,
      },
    ],
  },
  {
    slug: "invamia",
    title: "Invamia",
    services: "Product design • SaaS platform • Dashboard • Responsive",
    thumbnail: "/images/Works/5.png",
    heroImage: "/images/Work/invamia/hero.png",
    website: { label: "EMAIL", url: "mailto:torry.contact@gmail.com" },
    industry: "Optimization Dashboards for Ad Management",
    timeline: "Mar 2020 – Jun 2020",
    contentBlocks: [
      {
        heading: "Bringing Clarity to Ad Automation",
        paragraphs: [
          "Invamia is an ad-tech platform designed to manage and optimize digital advertising operations at scale. The system aggregates campaign data, performance metrics, targeting logic, and automation rules into one operational environment. The goal was to transform a technically complex, engineer-driven interface into a clear, decision-oriented product that supports fast, confident marketing actions.",
        ],
      },
      {
        heading: "Structuring High-Density Data",
        paragraphs: [
          "I redesigned the platform around a structured hierarchy focused on clarity and action. Dashboards were simplified to highlight key performance signals, while secondary data was organized into expandable layers. A consistent visual system was introduced to unify charts, tables, filters, and status states. Special attention was given to interaction logic, helping users move from insight to action with minimal friction.",
        ],
      },
      {
        heading: "Decision-First Dashboard Design",
        paragraphs: [
          "Every screen was built to reduce the gap between data and decision. Filters, sorting controls, and status indicators were simplified and made persistent. The interface was designed to surface what matters most — performance signals, anomalies, and actions — without requiring users to dig through raw data to understand what's happening.",
        ],
      },
    ],
    imageBlocks: [
      {
        type: "single",
        images: [
          { src: "/images/Work/invamia/1.png", alt: "Ad publishing dashboard overview", width: 3840, height: 2304 },
        ],
      },
      {
        type: "full",
        images: [
          { src: "/images/Work/invamia/2.png", alt: "Invamia design system overview", width: 1280, height: 672 },
        ],
      },
      {
        type: "beforeAfter",
        images: [
          { src: "/images/Work/invamia/before.png", alt: "Before redesign", width: 1280, height: 672 },
          { src: "/images/Work/invamia/after.png", alt: "After redesign", width: 1280, height: 672 },
        ],
      },
      {
        type: "single",
        images: [
          { src: "/images/Work/invamia/video.png", alt: "Ad publishing analytics and performance view", width: 3840, height: 2016 },
        ],
      },
    ],
    galleryImages: [
      {
        src: "/images/Work/invamia/carousel/small-image 1.png",
        alt: "Ad publishing interface detail 1",
        width: 800,
        height: 600,
      },
      {
        src: "/images/Work/invamia/carousel/small-image 2.png",
        alt: "Ad publishing interface detail 2",
        width: 800,
        height: 600,
      },
      {
        src: "/images/Work/invamia/carousel/small-image 3.png",
        alt: "Ad publishing interface detail 3",
        width: 900,
        height: 600,
      },
      {
        src: "/images/Work/invamia/carousel/small-image 4.png",
        alt: "Ad publishing interface detail 4",
        width: 500,
        height: 600,
      },
      {
        src: "/images/Work/invamia/carousel/small-image 5.png",
        alt: "Ad publishing interface detail 5",
        width: 600,
        height: 600,
      },
    ],
    results: {
      heading: "A Confident, Scalable SaaS Experience",
      paragraphs: [
        "The redesigned product shifted from a tool built for engineers to a market-ready SaaS platform built for marketers and operators. By transforming dense data structures into clear, usable dashboards, Invamia became easier to navigate, easier to sell, and better positioned for growth. The platform now balances analytical depth with usability — supporting both automation logic and human decision-making.",
        "+65% Success Rate Increase · 89% User Satisfaction · 33.3K Unique Users · 54 Components Created",
      ],
    },
  },
  {
    slug: "ibnb",
    title: "iBNB",
    services: "App design • Mobile app • Fintech • Crypto • Web • Dashboard",
    thumbnail: "/images/Works/6.png",
    heroImage: "/images/Work/ibnb/hero-image.png",
    website: { label: "EMAIL", url: "mailto:torry.contact@gmail.com" },
    industry: "Fintech Platform for Structured Property Investment Decisions",
    timeline: "Sep 2021 – Jan 2022",
    contentBlocks: [
      {
        heading: "Designing Financial Confidence",
        paragraphs: [
          "iBNB is a fintech platform designed to simplify property-related financial management and investment decisions. The product brings together listings, financial data, performance projections, and transaction workflows into one structured environment. The goal was to create a platform that feels trustworthy, clear, and intuitive in a domain where precision and confidence are essential.",
        ],
      },
      {
        heading: "Simplifying Financial Complexity",
        paragraphs: [
          "The platform required organizing multiple layers of financial information — property details, projections, user accounts, and transaction flows — without overwhelming the user. The challenge was to design an experience that supports informed decision-making while maintaining clarity and visual calmness. Trust, transparency, and structured navigation were key priorities.",
        ],
      },
      {
        heading: "Structured Information With Visual Trust",
        paragraphs: [
          "I designed a clean, modular interface that prioritizes financial clarity and hierarchy. Data-heavy screens were organized around decision points, with visual emphasis on key metrics and projections. A consistent design system was implemented to unify dashboards, listings, and account management flows. Interaction patterns were refined to make complex financial processes feel approachable and secure.",
        ],
      },
    ],
    imageBlocks: [
      {
        type: "single",
        images: [
          { src: "/images/Work/ibnb/images/ibnb-1.png", alt: "Crypto finance app screen 1", width: 3840, height: 2016 },
        ],
      },
      {
        type: "full",
        images: [
          { src: "/images/Work/ibnb/images/ibnb-2.png", alt: "Crypto finance app screen 2", width: 3840, height: 2016 },
        ],
      },
      {
        type: "double",
        images: [
          { src: "/images/Work/ibnb/images/ibnb-3.png", alt: "Crypto finance app screen 3", width: 1860, height: 1800 },
          { src: "/images/Work/ibnb/images/ibnb-4.png", alt: "Crypto finance app screen 4", width: 1860, height: 1800 },
        ],
      },
      {
        type: "double",
        images: [
          { src: "/images/Work/ibnb/images/ibnb-5.png", alt: "Crypto finance app screen 5", width: 1860, height: 1800 },
          { src: "/images/Work/ibnb/images/ibnb-6.png", alt: "Crypto finance app screen 6", width: 1860, height: 1800 },
        ],
      },
      {
        type: "full",
        images: [
          { src: "/images/Work/ibnb/images/ibnb-7.png", alt: "Crypto finance app screen 7", width: 3840, height: 2304 },
        ],
      },
      {
        type: "full",
        images: [
          { src: "/images/Work/ibnb/hero-image.png", alt: "Crypto finance hero detail", width: 2880, height: 1280 },
        ],
      },
      {
        type: "single",
        images: [
          { src: "/images/Work/ibnb/images/ibnb-8.png", alt: "Crypto finance app screen 8", width: 3840, height: 2304 },
        ],
      },
    ],
    results: {
      heading: "A Scalable, Market-Ready Fintech Product",
      paragraphs: [
        "The redesigned platform transformed financial complexity into a structured, user-friendly experience. iBNB evolved into a confident, scalable product that supports both discovery and transaction workflows. By balancing analytical depth with visual clarity, the platform strengthens user trust while enabling informed financial decisions.",
      ],
    },
    resultsGalleryImages: [
      {
        src: "/images/Work/ibnb/carousel/carousel-1.png",
        alt: "iBNB carousel image 1",
        width: 900,
        height: 600,
      },
      {
        src: "/images/Work/ibnb/carousel/carousel-2.png",
        alt: "iBNB carousel image 2",
        width: 500,
        height: 600,
      },
      {
        src: "/images/Work/ibnb/carousel/carousel-3.png",
        alt: "iBNB carousel image 3",
        width: 600,
        height: 600,
      },
      {
        src: "/images/Work/ibnb/carousel/carousel-4.png",
        alt: "iBNB carousel image 4",
        width: 500,
        height: 600,
      },
      {
        src: "/images/Work/ibnb/carousel/carousel-5.png",
        alt: "iBNB carousel image 5",
        width: 600,
        height: 600,
      },
    ],
  },
  {
    slug: "vidverto",
    title: "Vidverto",
    services: "Product design • Website • Branding • Responsive",
    thumbnail: "/images/Works/7.png",
    heroImage: "/images/Work/vidverto/hero.png",
    website: { label: "EMAIL", url: "mailto:torry.contact@gmail.com" },
    industry: "Performance-Driven Video Advertising System",
    timeline: "Jun 2021 – Sep 2021",
    contentBlocks: [
      {
        heading: "Designing for Performance-Driven Video Advertising",
        paragraphs: [
          "Vidverto is a video advertising platform built to manage, distribute, and optimize digital video campaigns at scale. The product combines campaign management tools, performance analytics, inventory controls, and monetization logic within one operational system. The goal was to transform a technically robust platform into a clear, efficient, and market-ready SaaS experience.",
        ],
      },
      {
        heading: "Reducing Complexity in a High-Data Environment",
        paragraphs: [
          "The platform handled large volumes of campaign data, targeting settings, video assets, reporting dashboards, and optimization controls. The challenge was to organize high-density information into a structure that supports quick decision-making without overwhelming the user. The interface needed to serve both operational teams and performance marketers while maintaining clarity across workflows.",
        ],
      },
      {
        heading: "Modular Dashboards With Clear Action Paths",
        paragraphs: [
          "I redesigned the interface around structured dashboards and decision-oriented layouts. Key metrics were prioritized, while secondary data was layered to reduce visual noise. A scalable design system unified campaign management screens, analytics views, and configuration panels. Interaction logic was refined to help users move efficiently from insight to optimization.",
        ],
      },
    ],
    imageBlocks: [
      {
        type: "single",
        images: [
          { src: "/images/Work/vidverto/1.png", alt: "Vidverto website overview", width: 3840, height: 2340 },
        ],
      },
      {
        type: "double",
        images: [
          { src: "/images/Work/vidverto/31.png", alt: "Vidverto publisher interface", width: 1860, height: 1800 },
          { src: "/images/Work/vidverto/32.png", alt: "Vidverto advertiser interface", width: 1860, height: 1800 },
        ],
      },
      {
        type: "single",
        images: [
          { src: "/images/Work/vidverto/2.png", alt: "Vidverto brand system", width: 3840, height: 2340 },
        ],
      },
    ],
    results: {
      heading: "A Clear, Scalable Ad-Tech Platform",
      paragraphs: [
        "The redesigned product evolved into a confident, structured platform that balances analytical depth with usability. Vidverto became easier to navigate, easier to demonstrate, and better positioned for growth. The result is a performance-focused SaaS experience that supports automation logic while empowering human decision-making.",
        "• 97% PageSpeed Score",
        "• +65% Conversion Rate Increase",
        "• 23K Users After Redesign",
      ],
    },
    resultsGalleryImages: [
      {
        src: "/images/Work/vidverto/small-image 17.jpg",
        alt: "Vidverto t-shirts brand merch",
        width: 1024,
        height: 768,
      },
      {
        src: "/images/Work/vidverto/small-image 18.jpg",
        alt: "Vidverto pink sweater brand merch",
        width: 768,
        height: 768,
      },
      {
        src: "/images/Work/vidverto/small-image 22.jpg",
        alt: "Vidverto social media assets",
        width: 1152,
        height: 768,
      },
      {
        src: "/images/Work/vidverto/small-image 25.jpg",
        alt: "Vidverto purple sweater brand merch",
        width: 768,
        height: 768,
      },
    ],
  },
];
