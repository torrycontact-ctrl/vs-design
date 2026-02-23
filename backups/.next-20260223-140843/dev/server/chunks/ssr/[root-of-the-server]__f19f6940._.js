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
        slug: "ai-music-player",
        title: "AI Music Player",
        services: "APP, AI DESIGN",
        thumbnail: "/images/Works/Light/img.png",
        heroImage: "/images/Works/Light/img.png",
        client: "Melodify Inc.",
        website: {
            label: "melodify.io",
            url: "https://melodify.io"
        },
        industry: "Music & Entertainment",
        timeline: "Jan 2024 – Apr 2024",
        contentBlocks: [
            {
                heading: "Reimagining the Music Experience with AI",
                paragraphs: [
                    "The challenge was to create a music player that adapts to the user's mood, habits, and environment. Traditional music apps rely on static playlists and manual curation — we wanted to change that.",
                    "By leveraging AI-driven recommendations and contextual awareness, we designed an experience that feels personal and effortless from the first interaction."
                ]
            },
            {
                heading: "Designing for Emotion and Usability",
                paragraphs: [
                    "Every design decision was guided by the emotional journey of listening to music. From the color palette that shifts with genres to the fluid animations that mirror tempo, the interface is alive.",
                    "We conducted extensive user testing across demographics to ensure the AI suggestions felt helpful rather than intrusive, striking the right balance between automation and control."
                ]
            }
        ],
        imageBlocks: [
            {
                type: "single",
                images: [
                    {
                        src: "/images/Works/Light/img.png",
                        alt: "App main screen"
                    }
                ]
            },
            {
                type: "double",
                images: [
                    {
                        src: "/images/Works/Light/img.png",
                        alt: "Player view"
                    },
                    {
                        src: "/images/Works/Light/img.png",
                        alt: "Playlist view"
                    }
                ]
            },
            {
                type: "full",
                images: [
                    {
                        src: "/images/Works/Light/img.png",
                        alt: "Full app experience"
                    }
                ]
            }
        ],
        galleryImages: [
            {
                src: "/images/Works/Light/img.png",
                alt: "Screen 1",
                width: 512,
                height: 640
            },
            {
                src: "/images/Works/Light/img-1.png",
                alt: "Screen 2",
                width: 384,
                height: 640
            },
            {
                src: "/images/Works/Light/img-2.png",
                alt: "Screen 3",
                width: 576,
                height: 640
            },
            {
                src: "/images/Works/Light/img-3.png",
                alt: "Screen 4",
                width: 320,
                height: 640
            }
        ],
        results: {
            heading: "The Results",
            paragraphs: [
                "The AI Music Player launched to overwhelmingly positive reception. User engagement increased by 40% compared to traditional players, with an average session duration of 45 minutes.",
                "The adaptive recommendation engine achieved a 92% satisfaction rate in user surveys, proving that thoughtful AI integration enhances rather than replaces the human experience."
            ]
        }
    },
    {
        slug: "clinic-ai-erm",
        title: "Clinic AI ERM",
        services: "SAAS, CRM, WEB",
        thumbnail: "/images/Works/Light/img-1.png"
    },
    {
        slug: "dance-app",
        title: "Dance App",
        services: "APP, IOS, SOCIAL",
        thumbnail: "/images/Works/Light/img-2.png"
    },
    {
        slug: "teams-platform",
        title: "Teams Platform",
        services: "SAAS, CRM, WEB",
        thumbnail: "/images/Works/Light/img-3.png"
    }
];
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$projects$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/projects.ts [app-rsc] (ecmascript)");
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    children: project.title
                }, void 0, false, {
                    fileName: "[project]/src/app/works/[slug]/page.tsx",
                    lineNumber: 33,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: project.services
                }, void 0, false, {
                    fileName: "[project]/src/app/works/[slug]/page.tsx",
                    lineNumber: 34,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/works/[slug]/page.tsx",
            lineNumber: 32,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/works/[slug]/page.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/works/[slug]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/works/[slug]/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__f19f6940._.js.map