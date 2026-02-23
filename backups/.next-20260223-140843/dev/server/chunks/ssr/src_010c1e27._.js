module.exports = [
"[project]/src/lib/projects.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/src/components/RevealOnScroll.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RevealOnScroll
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
const DEFAULT_SELECTOR = "[data-reveal]";
function RevealOnScroll({ children, selector = DEFAULT_SELECTOR, rootMargin = "0px 0px -10% 0px", threshold = 0.2, replay = false }) {
    const wrapperRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ("TURBOPACK compile-time truthy", 1) return;
        //TURBOPACK unreachable
        ;
        const root = undefined;
        const elements = undefined;
        const media = undefined;
        const observer = undefined;
    }, [
        replay,
        rootMargin,
        selector,
        threshold
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: wrapperRef,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/RevealOnScroll.tsx",
        lineNumber: 58,
        columnNumber: 10
    }, this);
}
}),
"[project]/src/components/sections/WorksSection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WorksSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$projects$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/projects.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RevealOnScroll$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/RevealOnScroll.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function WorksSection() {
    const scrollRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const scroll = (direction)=>{
        const container = scrollRef.current;
        if (!container) return;
        const style = window.getComputedStyle(container);
        const gap = parseFloat(style.columnGap || style.gap || "0");
        const cssCardWidth = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--card-w-desktop"));
        const cardWidth = container.querySelector("[data-card]")?.offsetWidth ?? 0;
        const scrollAmount = (cardWidth || cssCardWidth || container.clientWidth) + gap;
        const delta = direction === "left" ? -scrollAmount : scrollAmount;
        container.scrollBy({
            left: delta,
            behavior: "smooth"
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative flex flex-col overflow-hidden bg-[linear-gradient(180deg,#FFF9FE_0%,#F4C5F7_44.27%,#CFCDFA_100%)] dark:bg-none",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RevealOnScroll$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto w-full max-w-[var(--max-w-desktop)] px-[var(--container-padding-mobile)] pt-[calc(64px+24px)] lg:px-[var(--container-padding-desktop)] lg:pt-[calc(64px+70px)]",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-end justify-between gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-reveal": true,
                                className: "hero-reveal-scroll",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "h2 lg:hidden",
                                        children: "Selected Works"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/WorksSection.tsx",
                                        lineNumber: 34,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "hidden lg:block h1",
                                        children: "Selected Works"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/WorksSection.tsx",
                                        lineNumber: 35,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sections/WorksSection.tsx",
                                lineNumber: 33,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-reveal": true,
                                className: "hero-reveal-scroll hero-reveal-delay-1 hidden lg:flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        "aria-label": "Scroll works left",
                                        onClick: ()=>scroll("left"),
                                        className: "group flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-black)] dark:border-[var(--color-white)] transition-all duration-200 hover:bg-[var(--color-black)] dark:hover:bg-[var(--color-white)]",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            width: "24",
                                            height: "24",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            className: "stroke-[var(--color-black)] dark:stroke-[var(--color-white)] group-hover:stroke-[var(--color-white)] dark:group-hover:stroke-[var(--color-black)] transition-all duration-200",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M19 12H5M5 12L12 5M5 12L12 19",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/WorksSection.tsx",
                                                lineNumber: 53,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections/WorksSection.tsx",
                                            lineNumber: 45,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/WorksSection.tsx",
                                        lineNumber: 39,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        "aria-label": "Scroll works right",
                                        onClick: ()=>scroll("right"),
                                        className: "group flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-black)] dark:border-[var(--color-white)] transition-all duration-200 hover:bg-[var(--color-black)] dark:hover:bg-[var(--color-white)]",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            width: "24",
                                            height: "24",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            className: "stroke-[var(--color-black)] dark:stroke-[var(--color-white)] group-hover:stroke-[var(--color-white)] dark:group-hover:stroke-[var(--color-black)] transition-all duration-200",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M5 12H19M19 12L12 5M19 12L12 19",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/WorksSection.tsx",
                                                lineNumber: 74,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections/WorksSection.tsx",
                                            lineNumber: 66,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/WorksSection.tsx",
                                        lineNumber: 60,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sections/WorksSection.tsx",
                                lineNumber: 38,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sections/WorksSection.tsx",
                        lineNumber: 32,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/WorksSection.tsx",
                    lineNumber: 31,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    "data-reveal": true,
                    className: "hero-reveal-scroll hero-reveal-delay-2 mt-8 px-[var(--container-padding-mobile)] pb-16 lg:mt-12 lg:pl-[var(--container-padding-desktop)] lg:pr-0 lg:pb-24",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: scrollRef,
                        className: "flex flex-col gap-1.5 lg:flex-row lg:gap-1 lg:overflow-x-auto lg:pb-2 lg:snap-x lg:snap-mandatory scrollbar-hide",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$projects$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["projects"].map((project, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: `/works/${project.slug}`,
                                "data-card": true,
                                className: "stagger-card group relative h-[513px] w-full overflow-hidden rounded-[16px] lg:h-[var(--container-xl,616px)] lg:w-[var(--container-sm,400px)] lg:flex-shrink-0 lg:snap-start",
                                style: {
                                    "--stagger-delay": `${i * 80}ms`
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        src: project.thumbnail,
                                        alt: project.title,
                                        fill: true,
                                        className: "object-cover transition-[transform,filter] duration-500 ease-out group-hover:scale-110 group-hover:blur-[2px]",
                                        sizes: "(min-width: 1024px) 400px, 100vw"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/WorksSection.tsx",
                                        lineNumber: 101,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/WorksSection.tsx",
                                        lineNumber: 108,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 flex flex-col justify-end gap-3 p-6 text-white",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "h3 italic",
                                                children: project.title
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/WorksSection.tsx",
                                                lineNumber: 110,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "case-caption truncate",
                                                children: project.services
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/WorksSection.tsx",
                                                lineNumber: 111,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/sections/WorksSection.tsx",
                                        lineNumber: 109,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, project.slug, true, {
                                fileName: "[project]/src/components/sections/WorksSection.tsx",
                                lineNumber: 94,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/WorksSection.tsx",
                        lineNumber: 89,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/WorksSection.tsx",
                    lineNumber: 85,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/sections/WorksSection.tsx",
            lineNumber: 30,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/sections/WorksSection.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=src_010c1e27._.js.map