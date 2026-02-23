module.exports = [
"[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/lib/projects.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "projects",
    ()=>projects
]);
const projects = [
    {
        slug: "astoria",
        title: "Astoria Health",
        services: "Product design • SaaS • AI integration • Healthcare",
        thumbnail: "/images/Works/1.png",
        heroImage: "/images/Work/Astoria/hero.png",
        website: {
            label: "melodify.io",
            url: "https://melodify.io"
        },
        industry: "A role-based clinic platform built around how medical teams actually work.",
        timeline: "Oct 2025 – Feb 2026",
        contentBlocks: [
            {
                heading: "Three Roles, One Patient Record, Zero Room for Error",
                paragraphs: [
                    "Astoria Health needed a digital system that could run a real medical clinic. Not a dashboard with charts — an operational tool where front desk staff manage appointments, nurses handle intake and vitals, and doctors document diagnoses and prescriptions. All three roles working with the same patient data, in real time, under time pressure.",
                    "The challenge was operational, not visual. Every role carries a different mental model, a different pace, and different priorities — but the data flowing between them has to be seamless. A missed handoff in a clinic isn't a UX friction point. It's a patient safety issue."
                ]
            },
            {
                heading: "Three Products That Behave Like One",
                paragraphs: [
                    "The platform was structured as three distinct environments sharing a common data layer. The Front Desk interface is built around scheduling, patient creation, and routing — optimized for speed and minimal clicks. The Nurse workspace focuses on structured intake: vitals capture, medical history forms, and preparation notes that flow directly into the doctor's view.",
                    "The Doctor dashboard brings everything together — patient timeline, current visit data, diagnosis entry, prescriptions, and longitudinal notes. AI voice transcription was integrated across all three roles, allowing staff to document while working rather than after. The key design decision: keeping manual override visible at every step. In healthcare, the system suggests — it never decides."
                ]
            }
        ],
        imageBlocks: [
            {
                type: "single",
                images: [
                    {
                        src: "/images/Work/Astoria/1.png",
                        alt: "Astoria Health platform overview"
                    }
                ]
            },
            {
                type: "double",
                images: [
                    {
                        src: "/images/Work/Astoria/31.png",
                        alt: "Astoria front desk interface"
                    },
                    {
                        src: "/images/Work/Astoria/32.png",
                        alt: "Astoria nurse workspace"
                    }
                ]
            },
            {
                type: "single",
                height: 672,
                images: [
                    {
                        src: "/images/Work/Astoria/2.png",
                        alt: "Astoria doctor dashboard"
                    }
                ]
            }
        ],
        resultsGalleryWidths: [
            512,
            576,
            320,
            384
        ],
        results: {
            heading: "A Clinical System Ready for Real Operations",
            paragraphs: [
                "The result is a production-structured platform that maps directly to how clinics function. Three role-based interfaces, clean data handoffs between each stage of care, and AI-assisted documentation that stays out of the way until it's needed.",
                "What started as an ambitious concept became a grounded, buildable system — designed not to impress in a demo, but to survive a Monday morning rush at a busy clinic."
            ]
        },
        resultsGalleryImages: [
            {
                src: "/images/Work/Astoria/small-image 1.png",
                alt: "Astoria interface detail 1",
                width: 800,
                height: 600
            },
            {
                src: "/images/Work/Astoria/small-image 2.png",
                alt: "Astoria interface detail 2",
                width: 900,
                height: 600
            },
            {
                src: "/images/Work/Astoria/small-image 4: png.png",
                alt: "Astoria interface detail 3",
                width: 600,
                height: 600
            },
            {
                src: "/images/Work/Astoria/small-image 5.png",
                alt: "Astoria interface detail 4",
                width: 600,
                height: 600
            }
        ]
    },
    {
        slug: "qoria",
        title: "Qoria",
        services: "Product design • Mobile app • Gamification • Social",
        thumbnail: "/images/Works/2.png",
        heroImage: "/images/Work/Qoria/hero.png",
        website: {
            label: "EMAIL",
            url: "mailto:torry.contact@gmail.com"
        },
        industry: "A competition platform where community engagement has rules, structure, and a reason to come back.",
        timeline: "Aug 2025 – Oct 2025",
        contentBlocks: [
            {
                heading: "Social Energy Without a System Is Just Noise",
                paragraphs: [
                    "Qoria is a dance competition platform built around community participation, creator growth, and repeat engagement. The product ambition was clear: let people compete, vote, and grow an audience. The design challenge was making all of that feel fair, transparent, and structured enough to sustain long-term use.",
                    "Without careful system design, competition platforms collapse quickly. Voting feels rigged. Winners feel random. Participation drops after the first round. The core problem wasn't how the app looks — it was how the entire competition engine works beneath the surface."
                ]
            },
            {
                heading: "Building the Logic Layer Under the Social Layer",
                paragraphs: [
                    "The competition framework was designed from creation to resolution — defining how users enter, how votes are cast and weighted, how winners are selected, and how results are communicated. Every state in the competition lifecycle was mapped: active, voting, closed, tied, disputed.",
                    "Social features — reactions, duets, profiles, following — were layered on top of this structured foundation rather than the other way around. Premium tutorials and creator monetization flows were embedded with clear gating logic, so revenue mechanics wouldn't disrupt the core experience."
                ]
            }
        ],
        imageBlocks: [
            {
                type: "single",
                images: [
                    {
                        src: "/images/Work/Qoria/1.png",
                        alt: "Qoria competition feed"
                    }
                ]
            },
            {
                type: "double",
                images: [
                    {
                        src: "/images/Work/Qoria/31.png",
                        alt: "Qoria competition detail view"
                    },
                    {
                        src: "/images/Work/Qoria/32.png",
                        alt: "Qoria voting interface"
                    }
                ]
            },
            {
                type: "single",
                height: 672,
                images: [
                    {
                        src: "/images/Work/Qoria/2.png",
                        alt: "Qoria creator profile and social layer"
                    }
                ]
            }
        ],
        resultsGalleryWidths: [
            512,
            576,
            320,
            384
        ],
        results: {
            heading: "A Product That Knows When Excitement Needs Guardrails",
            paragraphs: [
                "The final platform supports structured competition loops, transparent voting, and a monetization layer that feels native rather than forced. The gamification framework scales — new competition types, content formats, and engagement mechanics can plug into the existing system without redesigning the core.",
                "A product that could have been chaotic became one with clear rules, predictable behavior, and a reason for users to return."
            ]
        },
        resultsGalleryImages: [
            {
                src: "/images/Work/Qoria/small-image 17.png",
                alt: "Qoria interface detail 1",
                width: 800,
                height: 600
            },
            {
                src: "/images/Work/Qoria/small-image 18.png",
                alt: "Qoria interface detail 2",
                width: 600,
                height: 600
            },
            {
                src: "/images/Work/Qoria/small-image 22.png",
                alt: "Qoria interface detail 3",
                width: 900,
                height: 600
            },
            {
                src: "/images/Work/Qoria/small-image 25.png",
                alt: "Qoria interface detail 4",
                width: 600,
                height: 600
            }
        ]
    },
    {
        slug: "teams",
        title: "dot.Teams",
        services: "Product design • SaaS platform • Web • Mobile • Design system",
        thumbnail: "/images/Works/3.png",
        heroImage: "/images/Work/teams/hero.png",
        website: {
            label: "teams.dot.cards",
            url: "https://teams.dot.cards"
        },
        industry: "Taking a growing product from feature accumulation to system-level clarity.",
        timeline: "Feb 2023 – May 2025",
        contentBlocks: [
            {
                heading: "More Features, Less Coherence",
                paragraphs: [
                    "dot.Teams is an all-in-one CRM and team management platform designed to unify eCommerce, user profiles, and collaborative tools. As features expanded, the product required a cohesive system that could support onboarding, subscriptions, team collaboration, and operational workflows without increasing complexity for multi-role users — admins, team members, and clients.",
                    "The goal wasn't a redesign for visual polish. It was structural: unify the platform into a system that could keep growing without becoming harder to use with every release. The project spanned 6 months — from discovery and UX research through high-fidelity UI and developer handoff."
                ]
            },
            {
                heading: "Designing the Platform and the System That Powers It",
                paragraphs: [
                    "Detailed user flows were mapped across all roles, validated through research and stakeholder collaboration, forming the foundation for product architecture, improved navigation, and clearer feature access across multiple subscription plans. Low- to high-fidelity wireframes established hierarchy and task-driven interfaces, aligning stakeholders and developers around a unified cross-device experience.",
                    "The deeper work was building the design system underneath. 243 reusable components, structured naming, documented patterns, and interaction logic that engineering could implement without ambiguity. Typography, color palette, spacing, and component library were defined as a cohesive visual language aligned with brand and functionality. The system wasn't a separate deliverable — it was the product strategy. Every screen was built from it, and every future screen would be too."
                ]
            }
        ],
        imageBlocks: [
            {
                type: "single",
                images: [
                    {
                        src: "/images/Work/teams/1.png",
                        alt: "dot.Teams dashboard overview"
                    }
                ]
            },
            {
                type: "double",
                images: [
                    {
                        src: "/images/Work/teams/31.png",
                        alt: "dot.Teams member management"
                    },
                    {
                        src: "/images/Work/teams/32.png",
                        alt: "dot.Teams client portal"
                    }
                ]
            },
            {
                type: "single",
                height: 672,
                images: [
                    {
                        src: "/images/Work/teams/2.png",
                        alt: "dot.Teams design system components"
                    }
                ]
            }
        ],
        resultsGalleryWidths: [
            512,
            576,
            320,
            384
        ],
        results: {
            heading: "A SaaS Product That Can Scale Without Breaking",
            paragraphs: [
                "The outcome: a fully responsive, production-ready platform with polished interfaces covering onboarding, team management, subscription plans, and cross-platform interactions. User feedback confirmed increased satisfaction, smoother navigation, and stronger alignment with business goals. The launch contributed directly to higher subscription conversions.",
                "More importantly, the system underneath means new features ship faster and look right on the first pass. dot.Teams went from a growing collection of screens to a product with architectural discipline.",
                "243 Components Created · 97% Template Success Rate · 70K Customers Reached · +$20M Subscription Revenue"
            ]
        },
        resultsGalleryImages: [
            {
                src: "/images/Work/teams/small-image 1.png",
                alt: "dot.Teams interface detail 1",
                width: 800,
                height: 600
            },
            {
                src: "/images/Work/teams/small-image 2.png",
                alt: "dot.Teams interface detail 2",
                width: 800,
                height: 600
            },
            {
                src: "/images/Work/teams/small-image 3.png",
                alt: "dot.Teams interface detail 3",
                width: 900,
                height: 600
            },
            {
                src: "/images/Work/teams/small-image 4.png",
                alt: "dot.Teams interface detail 4",
                width: 500,
                height: 600
            },
            {
                src: "/images/Work/teams/small-image 5.png",
                alt: "dot.Teams interface detail 5",
                width: 600,
                height: 600
            }
        ]
    },
    {
        slug: "recordless",
        title: "Recordless",
        services: "App design • Mobile • AI product • Visual strategy",
        thumbnail: "/images/Works/4.png",
        heroImage: "/images/Work/Recordless/hero.png",
        website: {
            label: "EMAIL",
            url: "mailto:torry.contact@gmail.com"
        },
        industry: "An AI music player where the technology stays invisible and the experience stays human.",
        timeline: "Aug 2022 – Apr 2023",
        contentBlocks: [
            {
                heading: "Smart Technology, Simple Experience",
                paragraphs: [
                    "Recordless is an AI-powered music production suite that lets users change songs according to mood and activity level — giving artists and listeners real control over how music sounds and feels. The scope covered full UX/UI design for the mobile app, plus a promotional website to introduce the platform to potential users and artists.",
                    "Foundation research from the team provided a starting point for understanding product goals, user groups, and interaction patterns. Secondary competitive research covered existing music players and design tools. Surveys and personas revealed the core audience: millennials drawn to song editing, unique interfaces, and personalized playlists. The design problem was clear — make adaptive AI behavior feel natural, not technical."
                ]
            },
            {
                heading: "Keeping Adaptation Invisible",
                paragraphs: [
                    "Mind maps, user journey diagrams, and app/site maps structured the ideation process before any visual work began. The interface was designed around emotional states rather than technical controls. Mood selection, activity context, and tonal preferences are captured through intuitive interactions — not settings panels or sliders.",
                    "The visual direction drew on CD-inspired gradients to set Recordless apart visually. Dark mode was chosen to let users sink into the music — making the arrangement process feel immersive rather than clinical. Purple primary and green secondary colors support key functionality without competing for attention. Track transitions, energy shifts, and playlist evolution were designed to feel gradual and natural rather than abrupt."
                ]
            }
        ],
        imageBlocks: [
            {
                type: "single",
                images: [
                    {
                        src: "/images/Work/Recordless/1.png",
                        alt: "Recordless app home screen"
                    }
                ]
            },
            {
                type: "double",
                images: [
                    {
                        src: "/images/Work/Recordless/31.png",
                        alt: "Recordless player view"
                    },
                    {
                        src: "/images/Work/Recordless/32.png",
                        alt: "Recordless playlist view"
                    }
                ]
            },
            {
                type: "single",
                height: 672,
                images: [
                    {
                        src: "/images/Work/Recordless/2.png",
                        alt: "Recordless mood and activity selection"
                    }
                ]
            }
        ],
        resultsGalleryWidths: [
            512,
            576,
            320,
            384
        ],
        results: {
            heading: "AI That Feels Like Good Taste, Not Technology",
            paragraphs: [
                "User testing confirmed the approach: navigation, track creation mode, and vibe selection were all rated clear and useful. The complexity lives entirely in the backend. What the user sees is a clean, focused music player that seems to understand them.",
                "A technically ambitious product shaped into something that feels effortless — which is the hardest kind of design to get right."
            ]
        },
        resultsGalleryImages: [
            {
                src: "/images/Work/Recordless/small-image 26.png",
                alt: "Recordless interface detail 1",
                width: 800,
                height: 600
            },
            {
                src: "/images/Work/Recordless/small-image 27.png",
                alt: "Recordless interface detail 2",
                width: 600,
                height: 600
            },
            {
                src: "/images/Work/Recordless/small-image 28.png",
                alt: "Recordless interface detail 3",
                width: 900,
                height: 600
            },
            {
                src: "/images/Work/Recordless/small-image 29.png",
                alt: "Recordless interface detail 4",
                width: 800,
                height: 600
            },
            {
                src: "/images/Work/Recordless/small-image 30.png",
                alt: "Recordless interface detail 5",
                width: 500,
                height: 600
            }
        ]
    },
    {
        slug: "invamia",
        title: "Invamia",
        services: "Product design • SaaS platform • Dashboard • Responsive",
        thumbnail: "/images/Works/5.png",
        heroImage: "/images/Work/invamia/hero.png",
        website: {
            label: "EMAIL",
            url: "mailto:torry.contact@gmail.com"
        },
        industry: "Redesigning a data-heavy ad platform so media owners actually want to use it.",
        timeline: "Mar 2020 – Jun 2020",
        contentBlocks: [
            {
                heading: "A Powerful Platform That Was Hard to Use",
                paragraphs: [
                    "Invamia is a site optimization and revenue intelligence platform for media owners — offering tools to check site speed, receive optimization recommendations, and balance revenue with user engagement. The platform was functional but the experience didn't match the product's ambition.",
                    "The scope covered a 6-month redesign of the landing page, the full dashboard platform, a design system, and adaptive screens for all devices. The goal: improve usability, increase engagement, drive better business outcomes, and raise overall user satisfaction."
                ]
            },
            {
                heading: "From User Research to System-Level Redesign",
                paragraphs: [
                    "User flows were mapped first, then refined through research findings and team input — setting clear goals for the redesign grounded in real user behavior. Wireframes defined the structure and layout before any visual investment, ensuring the platform met user needs before development began.",
                    "The visual design phase produced a full design system: visual language, typography, color palette, and component library applied consistently throughout the platform. Every screen was designed to be accessible across a wide range of users while maintaining scalability for future growth. Final responsive designs were delivered with implementation support throughout development."
                ]
            }
        ],
        imageBlocks: [
            {
                type: "single",
                height: 672,
                fit: "contain",
                images: [
                    {
                        src: "/images/Work/invamia/1.png",
                        alt: "Ad publishing dashboard overview"
                    }
                ]
            },
            {
                type: "full",
                height: 672,
                fit: "contain",
                images: [
                    {
                        src: "/images/Work/invamia/2.png",
                        alt: "Invamia design system overview"
                    }
                ]
            },
            {
                type: "beforeAfter",
                height: 672,
                fit: "contain",
                images: [
                    {
                        src: "/images/Work/invamia/before.png",
                        alt: "Before redesign"
                    },
                    {
                        src: "/images/Work/invamia/after.png",
                        alt: "After redesign"
                    }
                ]
            },
            {
                type: "single",
                height: 672,
                fit: "contain",
                images: [
                    {
                        src: "/images/Work/invamia/video.png",
                        alt: "Ad publishing analytics and performance view"
                    }
                ]
            }
        ],
        galleryImages: [
            {
                src: "/images/Work/invamia/carousel/small-image 1.png",
                alt: "Ad publishing interface detail 1",
                width: 800,
                height: 600
            },
            {
                src: "/images/Work/invamia/carousel/small-image 2.png",
                alt: "Ad publishing interface detail 2",
                width: 800,
                height: 600
            },
            {
                src: "/images/Work/invamia/carousel/small-image 3.png",
                alt: "Ad publishing interface detail 3",
                width: 900,
                height: 600
            },
            {
                src: "/images/Work/invamia/carousel/small-image 4.png",
                alt: "Ad publishing interface detail 4",
                width: 500,
                height: 600
            },
            {
                src: "/images/Work/invamia/carousel/small-image 5.png",
                alt: "Ad publishing interface detail 5",
                width: 600,
                height: 600
            }
        ],
        results: {
            heading: "Measurable Clarity, Measurable Results",
            paragraphs: [
                "After the redesign, the overall success rate for adding websites and generating site data increased by 65%. User surveys showed that more than 89% of users were satisfied with the new design and intended to continue using the platform for their business goals.",
                "A data-heavy tool that once felt overwhelming became something media owners could actually navigate with confidence.",
                "+65% Success Rate Increase · 89% User Satisfaction · 33.3K Unique Users · 54 Components Created"
            ]
        }
    },
    {
        slug: "ibnb",
        title: "iBNB",
        services: "App design • Mobile • Fintech • Web • Dashboard",
        thumbnail: "/images/Works/6.png",
        heroImage: "/images/Work/ibnb/hero-image.png",
        website: {
            label: "EMAIL",
            url: "mailto:torry.contact@gmail.com"
        },
        industry: "Making decentralized finance feel simple enough for daily use.",
        timeline: "Sep 2021 – Jan 2022",
        contentBlocks: [
            {
                heading: "Complex Financial Logic, Zero Tolerance for Confusion",
                paragraphs: [
                    "iBNB is a decentralized finance ecosystem offering a secure wallet for trading, automated dividend collection, and access to financial content. The product serves investors who interact with real money daily — meaning every interaction has to be precise, trustworthy, and frictionless.",
                    "The scope covered a full redesign of the mobile app, website, and dashboard with adaptive versions for mobile and tablet. The core challenge: translate complex financial operations into an interface that feels simple without hiding critical information."
                ]
            },
            {
                heading: "Structure First, Then Visual Identity",
                paragraphs: [
                    "User flows mapped every path through the web and mobile applications, refined through research and team collaboration. The wireframing phase focused on identifying key features, mapping task-based user journeys, and validating structure before investing in visual design.",
                    "The brand retained its signature yellow, updated to a more modern tone. A complete style guide was developed for mobile and desktop. The visual direction combined flat design with subtle background gradients and light noise textures — creating an interface that feels premium and approachable at the same time. Every financial interaction was designed for clarity: balances, dividends, and transaction history are surfaced without requiring users to dig."
                ]
            }
        ],
        imageBlocks: [
            {
                type: "single",
                images: [
                    {
                        src: "/images/Work/ibnb/images/ibnb-1.png",
                        alt: "Crypto finance app screen 1"
                    }
                ]
            },
            {
                type: "full",
                height: 672,
                images: [
                    {
                        src: "/images/Work/ibnb/images/ibnb-2.png",
                        alt: "Crypto finance app screen 2"
                    }
                ]
            },
            {
                type: "double",
                images: [
                    {
                        src: "/images/Work/ibnb/images/ibnb-3.png",
                        alt: "Crypto finance app screen 3"
                    },
                    {
                        src: "/images/Work/ibnb/images/ibnb-4.png",
                        alt: "Crypto finance app screen 4"
                    }
                ]
            },
            {
                type: "double",
                images: [
                    {
                        src: "/images/Work/ibnb/images/ibnb-5.png",
                        alt: "Crypto finance app screen 5"
                    },
                    {
                        src: "/images/Work/ibnb/images/ibnb-6.png",
                        alt: "Crypto finance app screen 6"
                    }
                ]
            },
            {
                type: "full",
                height: 672,
                images: [
                    {
                        src: "/images/Work/ibnb/images/ibnb-7.png",
                        alt: "Crypto finance app screen 7"
                    }
                ]
            },
            {
                type: "full",
                height: 672,
                images: [
                    {
                        src: "/images/Work/ibnb/hero-image.png",
                        alt: "Crypto finance hero detail"
                    }
                ]
            },
            {
                type: "single",
                height: 672,
                images: [
                    {
                        src: "/images/Work/ibnb/images/ibnb-8.png",
                        alt: "Crypto finance app screen 8"
                    }
                ]
            }
        ],
        results: {
            heading: "Finance Made Comfortable",
            paragraphs: [
                "The redesign delivered a cohesive experience across app, website, and dashboard. The dividend collection process — previously the biggest source of friction — became straightforward and transparent.",
                "A product dealing with real financial stakes, shaped into something that feels calm and controlled rather than intimidating."
            ]
        },
        resultsGalleryImages: [
            {
                src: "/images/Work/ibnb/carousel/carousel-1.png",
                alt: "iBNB carousel image 1",
                width: 900,
                height: 600
            },
            {
                src: "/images/Work/ibnb/carousel/carousel-2.png",
                alt: "iBNB carousel image 2",
                width: 500,
                height: 600
            },
            {
                src: "/images/Work/ibnb/carousel/carousel-3.png",
                alt: "iBNB carousel image 3",
                width: 600,
                height: 600
            },
            {
                src: "/images/Work/ibnb/carousel/carousel-4.png",
                alt: "iBNB carousel image 4",
                width: 500,
                height: 600
            },
            {
                src: "/images/Work/ibnb/carousel/carousel-5.png",
                alt: "iBNB carousel image 5",
                width: 600,
                height: 600
            }
        ]
    },
    {
        slug: "vidverto",
        title: "Vidverto",
        services: "Product design • Website • Branding • Responsive",
        thumbnail: "/images/Works/7.png",
        heroImage: "/images/Work/vidverto/hero.png",
        website: {
            label: "EMAIL",
            url: "mailto:torry.contact@gmail.com"
        },
        industry: "Redesigning an ad-tech platform and building the brand around it.",
        timeline: "Jun 2021 – Sep 2021",
        contentBlocks: [
            {
                heading: "Three User Types, One Platform, No Clear Story",
                paragraphs: [
                    "Vidverto is an enterprise-level video content and monetization platform providing programmatic advertising solutions. The platform serves three distinct audiences — Publishers (60%), Advertisers (25%), and Content Owners (15%) — each with different goals, different pain points, and different reasons to trust the product.",
                    "The scope went beyond screens: a full website redesign with adaptive mobile versions, plus branding materials including pitch decks, social media assets, stationery, and apparel. The design sprint was structured in five stages: discovery, UX mapping and wireframing, UI design, branding, and user testing."
                ]
            },
            {
                heading: "Designing for Three Audiences Without Losing Focus",
                paragraphs: [
                    "Research and user analysis defined clear personas and priorities for each audience segment. The site architecture was built to serve all three groups from a single entry point — with dedicated landing sections showing benefits specific to each user type, \"How to Connect\" tutorials, and targeted CTAs.",
                    "The visual concept drew on a galaxy and radio wave metaphor — comparing advertisement technology to futuristic space communications. This gave Vidverto a visual identity that stands apart in a market full of generic corporate ad-tech sites. The brand font was preserved but adapted for broader graphic use, with a full guidelines system covering colors, typography, and logo applications across digital and physical materials."
                ]
            }
        ],
        imageBlocks: [
            {
                type: "single",
                images: [
                    {
                        src: "/images/Work/vidverto/1.png",
                        alt: "Vidverto website overview"
                    }
                ]
            },
            {
                type: "double",
                images: [
                    {
                        src: "/images/Work/vidverto/31.png",
                        alt: "Vidverto publisher interface"
                    },
                    {
                        src: "/images/Work/vidverto/32.png",
                        alt: "Vidverto advertiser interface"
                    }
                ]
            },
            {
                type: "single",
                height: 672,
                images: [
                    {
                        src: "/images/Work/vidverto/2.png",
                        alt: "Vidverto brand system"
                    }
                ]
            }
        ],
        results: {
            heading: "A Platform and a Brand, Built Together",
            paragraphs: [
                "The final delivery included a fully responsive website, complete branding system, and marketing assets actively used by the Vidverto team for announcements, promotions, and company updates. The website achieved a 97% Google PageSpeed score and contributed to a 65% increase in conversion rate.",
                "An ad-tech company that previously blended into its market now has a visual identity and digital presence that matches the sophistication of its product.",
                "97% PageSpeed Score · +65% Conversion Rate Increase · 23K Users After Redesign"
            ]
        },
        resultsGalleryImages: [
            {
                src: "/images/Work/vidverto/small-image 17.png",
                alt: "Vidverto interface detail 1",
                width: 800,
                height: 600
            },
            {
                src: "/images/Work/vidverto/small-image 18.png",
                alt: "Vidverto interface detail 2",
                width: 197,
                height: 600
            },
            {
                src: "/images/Work/vidverto/small-image 22.png",
                alt: "Vidverto interface detail 3",
                width: 900,
                height: 600
            },
            {
                src: "/images/Work/vidverto/small-image 25.png",
                alt: "Vidverto interface detail 4",
                width: 278,
                height: 600
            }
        ]
    }
];
}),
"[project]/src/components/ProjectMeta.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProjectMeta
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
function MetaItem({ label, children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-[14px] leading-[20px] uppercase opacity-70 text-[var(--color-fg)] md:text-[12px] md:tracking-[0.12em] md:opacity-100 md:text-[var(--color-gray-400)]",
                children: label
            }, void 0, false, {
                fileName: "[project]/src/components/ProjectMeta.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-[16px] leading-[24px] text-[var(--color-fg)]",
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/ProjectMeta.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ProjectMeta.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
function ProjectMeta({ client, website, industry, services, timeline }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-6 md:flex-row md:flex-nowrap md:items-start md:justify-between md:w-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(MetaItem, {
                label: "Tags",
                children: services
            }, void 0, false, {
                fileName: "[project]/src/components/ProjectMeta.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            timeline && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(MetaItem, {
                label: "Timeline",
                children: timeline
            }, void 0, false, {
                fileName: "[project]/src/components/ProjectMeta.tsx",
                lineNumber: 43,
                columnNumber: 20
            }, this),
            industry && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "md:max-w-[400px]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(MetaItem, {
                    label: "Tagline",
                    children: industry
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectMeta.tsx",
                    lineNumber: 45,
                    columnNumber: 54
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ProjectMeta.tsx",
                lineNumber: 45,
                columnNumber: 20
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ProjectMeta.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/BlobImageReveal.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/BlobImageReveal.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/BlobImageReveal.tsx <module evaluation>", "default");
}),
"[project]/src/components/BlobImageReveal.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/BlobImageReveal.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/BlobImageReveal.tsx", "default");
}),
"[project]/src/components/BlobImageReveal.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$BlobImageReveal$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/BlobImageReveal.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$BlobImageReveal$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/components/BlobImageReveal.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$BlobImageReveal$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/components/RevealOnScroll.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/RevealOnScroll.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/RevealOnScroll.tsx <module evaluation>", "default");
}),
"[project]/src/components/RevealOnScroll.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/RevealOnScroll.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/RevealOnScroll.tsx", "default");
}),
"[project]/src/components/RevealOnScroll.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RevealOnScroll$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/RevealOnScroll.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RevealOnScroll$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/components/RevealOnScroll.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RevealOnScroll$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/components/MarqueeGallery.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/MarqueeGallery.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/MarqueeGallery.tsx <module evaluation>", "default");
}),
"[project]/src/components/MarqueeGallery.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/MarqueeGallery.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/MarqueeGallery.tsx", "default");
}),
"[project]/src/components/MarqueeGallery.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MarqueeGallery$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/MarqueeGallery.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MarqueeGallery$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/components/MarqueeGallery.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MarqueeGallery$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/components/BeforeAfterSlider.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/BeforeAfterSlider.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/BeforeAfterSlider.tsx <module evaluation>", "default");
}),
"[project]/src/components/BeforeAfterSlider.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/BeforeAfterSlider.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/BeforeAfterSlider.tsx", "default");
}),
"[project]/src/components/BeforeAfterSlider.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$BeforeAfterSlider$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/BeforeAfterSlider.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$BeforeAfterSlider$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/components/BeforeAfterSlider.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$BeforeAfterSlider$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/app/works/[slug]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WorkPage,
    "generateMetadata",
    ()=>generateMetadata,
    "generateStaticParams",
    ()=>generateStaticParams
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$projects$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/projects.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProjectMeta$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ProjectMeta.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$BlobImageReveal$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/BlobImageReveal.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RevealOnScroll$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/RevealOnScroll.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MarqueeGallery$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/MarqueeGallery.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$BeforeAfterSlider$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/BeforeAfterSlider.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
async function generateMetadata({ params }) {
    const { slug } = await params;
    const project = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$projects$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["projects"].find((p)=>p.slug === slug);
    if (!project) return {
        title: "Not Found"
    };
    return {
        title: `${project.title} – VS Design`,
        description: project.services
    };
}
async function generateStaticParams() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$projects$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["projects"].map((p)=>({
            slug: p.slug
        }));
}
async function WorkPage({ params }) {
    const { slug } = await params;
    const project = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$projects$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["projects"].find((p)=>p.slug === slug);
    if (!project) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    const resultsGalleryWidths = project.resultsGalleryWidths ?? [
        512,
        576,
        320,
        384,
        512,
        576
    ];
    const [primaryBlock, ...secondaryBlocks] = project.contentBlocks ?? [];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "project-page flex flex-1 flex-col overflow-y-auto bg-[var(--color-bg)]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "pt-[64px]",
                children: [
                    project.heroImage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-[176px] w-full md:h-[520px]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$BlobImageReveal$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            src: project.heroImage,
                            alt: project.title,
                            priority: true,
                            className: "h-full w-full",
                            trigger: "mount",
                            duration: 4.5,
                            delay: 0.15
                        }, void 0, false, {
                            fileName: "[project]/src/app/works/[slug]/page.tsx",
                            lineNumber: 46,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/works/[slug]/page.tsx",
                        lineNumber: 45,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mx-auto w-full max-w-[var(--max-w-desktop)] px-6 md:px-20",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "hero-reveal font-serif mt-8 text-[48px] leading-[48px] md:mt-12 md:text-center md:text-[96px] md:leading-[96px] md:mx-auto md:max-w-[941px] md:tracking-[-0.8px]",
                                children: project.title
                            }, void 0, false, {
                                fileName: "[project]/src/app/works/[slug]/page.tsx",
                                lineNumber: 59,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hero-reveal mt-9 md:mt-8",
                                style: {
                                    animationDelay: "900ms"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProjectMeta$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                    client: project.client,
                                    website: project.website,
                                    industry: project.industry,
                                    services: project.services,
                                    timeline: project.timeline
                                }, void 0, false, {
                                    fileName: "[project]/src/app/works/[slug]/page.tsx",
                                    lineNumber: 65,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/works/[slug]/page.tsx",
                                lineNumber: 64,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                                className: "hero-reveal mt-8 border-[var(--color-border)] md:mt-[36px]",
                                style: {
                                    animationDelay: "1050ms"
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/app/works/[slug]/page.tsx",
                                lineNumber: 75,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/works/[slug]/page.tsx",
                        lineNumber: 58,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/works/[slug]/page.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RevealOnScroll$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto w-full max-w-[var(--max-w-desktop)] px-6 md:px-20",
                    children: [
                        primaryBlock && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            "data-reveal": true,
                            className: "reveal-item",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-12 flex flex-col gap-4 md:mt-[80px] md:flex-row md:justify-between md:gap-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "font-serif text-[48px] leading-[48px] shrink-0 md:text-[72px] md:leading-[72px] md:tracking-[-0.8px] md:w-[484px]",
                                        children: primaryBlock.heading
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/works/[slug]/page.tsx",
                                        lineNumber: 85,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-[8px] md:w-[609px]",
                                        children: primaryBlock.paragraphs.map((p, j)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[14px] leading-[20px] md:text-[18px] md:leading-[28px] text-[var(--color-fg)]",
                                                children: p
                                            }, j, false, {
                                                fileName: "[project]/src/app/works/[slug]/page.tsx",
                                                lineNumber: 88,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/works/[slug]/page.tsx",
                                        lineNumber: 86,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/works/[slug]/page.tsx",
                                lineNumber: 84,
                                columnNumber: 15
                            }, this)
                        }, "content-primary", false, {
                            fileName: "[project]/src/app/works/[slug]/page.tsx",
                            lineNumber: 83,
                            columnNumber: 13
                        }, this),
                        project.imageBlocks?.map((block, i)=>{
                            const fitClass = block.fit === "contain" ? "object-contain" : "object-cover";
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-reveal": true,
                                className: `reveal-item ${i === 0 ? "mt-10 md:mt-[48px]" : "mt-6 md:mt-[24px]"}`,
                                children: [
                                    block.type === "single" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `relative w-full overflow-hidden rounded-3xl h-[200px] ${block.height ? "md:h-[672px]" : "md:h-[768px]"}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                            src: block.images[0].src,
                                            alt: block.images[0].alt,
                                            fill: true,
                                            className: fitClass,
                                            sizes: "(max-width: 768px) 100vw, 1280px"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/works/[slug]/page.tsx",
                                            lineNumber: 111,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/works/[slug]/page.tsx",
                                        lineNumber: 108,
                                        columnNumber: 17
                                    }, this),
                                    block.type === "double" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-row gap-3 md:gap-[40px]",
                                        children: block.images.map((img, k)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative h-[160px] w-[calc(50%-6px)] overflow-hidden rounded-3xl md:h-[600px] md:w-[calc(50%-20px)]",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                    src: img.src,
                                                    alt: img.alt,
                                                    fill: true,
                                                    className: fitClass,
                                                    sizes: "(max-width: 768px) 50vw, 620px"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/works/[slug]/page.tsx",
                                                    lineNumber: 128,
                                                    columnNumber: 23
                                                }, this)
                                            }, k, false, {
                                                fileName: "[project]/src/app/works/[slug]/page.tsx",
                                                lineNumber: 124,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/works/[slug]/page.tsx",
                                        lineNumber: 122,
                                        columnNumber: 17
                                    }, this),
                                    block.type === "beforeAfter" && block.images.length >= 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative h-[200px] w-full overflow-hidden rounded-3xl md:h-[var(--block-h,896px)]",
                                        style: block.height ? {
                                            "--block-h": `${block.height}px`
                                        } : undefined,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$BeforeAfterSlider$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                            beforeSrc: block.images[0].src,
                                            afterSrc: block.images[1].src,
                                            beforeAlt: block.images[0].alt,
                                            afterAlt: block.images[1].alt,
                                            fit: block.fit,
                                            className: "h-full w-full"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/works/[slug]/page.tsx",
                                            lineNumber: 149,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/works/[slug]/page.tsx",
                                        lineNumber: 141,
                                        columnNumber: 17
                                    }, this),
                                    block.type === "full" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative h-[200px] w-full overflow-hidden rounded-3xl md:h-[var(--block-h,896px)]",
                                        style: block.height ? {
                                            "--block-h": `${block.height}px`
                                        } : undefined,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                            src: block.images[0].src,
                                            alt: block.images[0].alt,
                                            fill: true,
                                            className: fitClass,
                                            sizes: "(max-width: 768px) 100vw, 1280px"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/works/[slug]/page.tsx",
                                            lineNumber: 169,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/works/[slug]/page.tsx",
                                        lineNumber: 161,
                                        columnNumber: 17
                                    }, this),
                                    i === 0 && secondaryBlocks.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-10 md:mt-[48px]",
                                        children: secondaryBlocks.map((block, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                "data-reveal": true,
                                                className: "reveal-item",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-12 flex flex-col gap-4 md:mt-[80px] md:flex-row md:justify-between md:gap-8",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                            className: "font-serif text-[48px] leading-[48px] shrink-0 md:text-[72px] md:leading-[72px] md:tracking-[-0.8px] md:w-[484px]",
                                                            children: block.heading
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/works/[slug]/page.tsx",
                                                            lineNumber: 183,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex flex-col gap-[8px] md:w-[609px]",
                                                            children: block.paragraphs.map((p, j)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-[14px] leading-[20px] md:text-[18px] md:leading-[28px] text-[var(--color-fg)]",
                                                                    children: p
                                                                }, j, false, {
                                                                    fileName: "[project]/src/app/works/[slug]/page.tsx",
                                                                    lineNumber: 186,
                                                                    columnNumber: 29
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/works/[slug]/page.tsx",
                                                            lineNumber: 184,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/works/[slug]/page.tsx",
                                                    lineNumber: 182,
                                                    columnNumber: 23
                                                }, this)
                                            }, `content-secondary-${idx}`, false, {
                                                fileName: "[project]/src/app/works/[slug]/page.tsx",
                                                lineNumber: 181,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/works/[slug]/page.tsx",
                                        lineNumber: 179,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, `img-${i}`, true, {
                                fileName: "[project]/src/app/works/[slug]/page.tsx",
                                lineNumber: 102,
                                columnNumber: 15
                            }, this);
                        })
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/works/[slug]/page.tsx",
                    lineNumber: 80,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/works/[slug]/page.tsx",
                lineNumber: 79,
                columnNumber: 7
            }, this),
            project.results && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RevealOnScroll$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mx-auto w-full max-w-[var(--max-w-desktop)] px-6 md:px-20 reveal-item",
                            "data-reveal": true,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-16 md:mt-[80px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "font-serif text-[48px] leading-[48px] md:text-[72px] md:leading-[72px] md:tracking-[-0.8px]",
                                        children: project.results.heading
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/works/[slug]/page.tsx",
                                        lineNumber: 208,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-4 flex flex-col gap-1 md:mt-[36px] md:flex-row md:gap-[80px]",
                                        children: project.results.paragraphs.map((p, j)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[14px] leading-[20px] md:text-[18px] md:leading-[28px] text-[var(--color-fg)] md:max-w-[600px] md:w-full",
                                                children: p
                                            }, j, false, {
                                                fileName: "[project]/src/app/works/[slug]/page.tsx",
                                                lineNumber: 211,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/works/[slug]/page.tsx",
                                        lineNumber: 209,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/works/[slug]/page.tsx",
                                lineNumber: 207,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/works/[slug]/page.tsx",
                            lineNumber: 206,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/works/[slug]/page.tsx",
                        lineNumber: 205,
                        columnNumber: 11
                    }, this),
                    project.results && project.resultsGalleryImages && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RevealOnScroll$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-10 md:mt-[48px] reveal-item",
                            "data-reveal": true,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MarqueeGallery$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                images: project.resultsGalleryImages
                            }, void 0, false, {
                                fileName: "[project]/src/app/works/[slug]/page.tsx",
                                lineNumber: 227,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/works/[slug]/page.tsx",
                            lineNumber: 226,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/works/[slug]/page.tsx",
                        lineNumber: 225,
                        columnNumber: 13
                    }, this),
                    project.results && !project.resultsGalleryImages && project.galleryImages && project.galleryImages.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RevealOnScroll$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-10 md:mt-[48px] reveal-item",
                            "data-reveal": true,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MarqueeGallery$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                images: project.galleryImages
                            }, void 0, false, {
                                fileName: "[project]/src/app/works/[slug]/page.tsx",
                                lineNumber: 234,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/works/[slug]/page.tsx",
                            lineNumber: 233,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/works/[slug]/page.tsx",
                        lineNumber: 232,
                        columnNumber: 13
                    }, this),
                    project.results && !project.resultsGalleryImages && (!project.galleryImages || project.galleryImages.length === 0) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RevealOnScroll$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-10 md:mt-[48px] reveal-item",
                            "data-reveal": true,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MarqueeGallery$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                widths: resultsGalleryWidths
                            }, void 0, false, {
                                fileName: "[project]/src/app/works/[slug]/page.tsx",
                                lineNumber: 241,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/works/[slug]/page.tsx",
                            lineNumber: 240,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/works/[slug]/page.tsx",
                        lineNumber: 239,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RevealOnScroll$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "mt-16 bg-[var(--color-custom-butter-yellow)] px-6 pt-12 pb-6 md:mt-24 md:px-20 md:pt-[80px] md:pb-[48px] reveal-item",
                    "data-reveal": true,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mx-auto w-full max-w-[var(--max-w-desktop)]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-12 md:flex-row md:items-start md:justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col gap-[24px]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                                className: "font-serif text-[48px] leading-[48px] text-[var(--color-black)] md:text-[72px] md:leading-[1.2] md:tracking-[-0.8px]",
                                                                children: "Ready to Make"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/works/[slug]/page.tsx",
                                                                lineNumber: 258,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                                className: "font-serif text-[48px] leading-[48px] text-[var(--color-black)] md:text-[72px] md:leading-[1.2] md:tracking-[-0.8px]",
                                                                children: "Something Exciting?"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/works/[slug]/page.tsx",
                                                                lineNumber: 261,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/works/[slug]/page.tsx",
                                                        lineNumber: 257,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-col gap-[12px] max-w-[599px]",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-[14px] leading-[20px] md:text-[20px] md:leading-[28px] text-[var(--color-black)]",
                                                                children: "Have a great idea? Whether it's an app, a website, or a custom interface – I can help you to bring your vision to life. Simply press the button below to email me and schedule a 30 min call. I can help you with a brief and product design plan."
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/works/[slug]/page.tsx",
                                                                lineNumber: 267,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-[14px] leading-[20px] font-medium md:text-[20px] md:leading-[28px] text-[var(--color-black)]",
                                                                children: "My working hours are flexible for US timezones. Can't wait to collaborate!"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/works/[slug]/page.tsx",
                                                                lineNumber: 275,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/works/[slug]/page.tsx",
                                                        lineNumber: 266,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/works/[slug]/page.tsx",
                                                lineNumber: 256,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-6 md:mt-[64px]",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "mailto:torry.contact@gmail.com",
                                                    className: "btn-primary",
                                                    children: [
                                                        "GET IN TOUCH",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            width: "24",
                                                            height: "24",
                                                            viewBox: "0 0 24 24",
                                                            fill: "none",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M7 7H17M17 7V17M17 7L7 17",
                                                                stroke: "currentColor",
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/works/[slug]/page.tsx",
                                                                lineNumber: 295,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/works/[slug]/page.tsx",
                                                            lineNumber: 288,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/works/[slug]/page.tsx",
                                                    lineNumber: 283,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/works/[slug]/page.tsx",
                                                lineNumber: 282,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/works/[slug]/page.tsx",
                                        lineNumber: 255,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-start md:justify-center md:block shrink-0",
                                        children: project.heroImage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative h-[240px] w-[240px] overflow-hidden rounded-3xl md:h-[448px] md:w-[512px]",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                src: project.heroImage,
                                                alt: project.title,
                                                fill: true,
                                                className: "object-cover",
                                                sizes: "(max-width: 768px) 240px, 512px"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/works/[slug]/page.tsx",
                                                lineNumber: 310,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/works/[slug]/page.tsx",
                                            lineNumber: 309,
                                            columnNumber: 17
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-[240px] w-[240px] rounded-3xl bg-gradient-to-b from-[#1d2644] to-[#999fcf] md:h-[448px] md:w-[512px]"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/works/[slug]/page.tsx",
                                            lineNumber: 319,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/works/[slug]/page.tsx",
                                        lineNumber: 307,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/works/[slug]/page.tsx",
                                lineNumber: 253,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-16 md:mt-[48px] flex flex-col gap-[40px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                                        className: "border-[var(--color-black)] opacity-20"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/works/[slug]/page.tsx",
                                        lineNumber: 326,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-9 md:flex-row md:items-center md:justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-wrap gap-6 items-center md:flex-row md:gap-[24px]",
                                                children: [
                                                    {
                                                        label: "CALENDLY",
                                                        href: "https://calendly.com/torry-contact/30min"
                                                    },
                                                    {
                                                        label: "LINKEDIN",
                                                        href: "https://www.linkedin.com/in/victoria-samoilenko/"
                                                    },
                                                    {
                                                        label: "INSTAGRAM",
                                                        href: "https://www.instagram.com/vs.pixels"
                                                    },
                                                    {
                                                        label: "DRIBBBLE",
                                                        href: "https://dribbble.com/torrydesign"
                                                    },
                                                    {
                                                        label: "BEHANCE",
                                                        href: "https://www.behance.net/torrydesign"
                                                    },
                                                    {
                                                        label: "X",
                                                        href: "https://x.com/torrypixels"
                                                    }
                                                ].map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                        href: s.href,
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        className: "link-arrow-rotate link-black inline-flex items-center gap-[16px]",
                                                        children: [
                                                            s.label,
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                width: "24",
                                                                height: "24",
                                                                viewBox: "0 0 24 24",
                                                                fill: "none",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    d: "M7 7H17M17 7V17M17 7L7 17",
                                                                    stroke: "currentColor",
                                                                    strokeLinecap: "round",
                                                                    strokeLinejoin: "round"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/works/[slug]/page.tsx",
                                                                    lineNumber: 352,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/works/[slug]/page.tsx",
                                                                lineNumber: 345,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, s.label, true, {
                                                        fileName: "[project]/src/app/works/[slug]/page.tsx",
                                                        lineNumber: 337,
                                                        columnNumber: 19
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/works/[slug]/page.tsx",
                                                lineNumber: 328,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[14px] leading-[20px] text-[var(--color-gray-700)]",
                                                children: "© 2026. Crafted with love by Victoria Samoilenko"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/works/[slug]/page.tsx",
                                                lineNumber: 362,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/works/[slug]/page.tsx",
                                        lineNumber: 327,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/works/[slug]/page.tsx",
                                lineNumber: 325,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/works/[slug]/page.tsx",
                        lineNumber: 251,
                        columnNumber: 9
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/works/[slug]/page.tsx",
                    lineNumber: 250,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/works/[slug]/page.tsx",
                lineNumber: 249,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/works/[slug]/page.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/works/[slug]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/works/[slug]/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__2095465e._.js.map