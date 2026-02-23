(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/sections/ContactSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ContactSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
/* ── Social links data ────────────────────────────────────── */ const socials = [
    {
        label: "X",
        href: "https://x.com/torrypixels"
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
    }
];
function ArrowUpRight() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "cd3098e830cb2f4e325bd5b55d6b6705744d6f31fff33746cd37a74837a9de46") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "cd3098e830cb2f4e325bd5b55d6b6705744d6f31fff33746cd37a74837a9de46";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            viewBox: "0 0 24 24",
            fill: "none",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M7 7H17M17 7V17M17 7L7 17",
                stroke: "currentColor",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/sections/ContactSection.tsx",
                lineNumber: 35,
                columnNumber: 105
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/sections/ContactSection.tsx",
            lineNumber: 35,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
}
_c = ArrowUpRight;
const stackCards = [
    {
        src: "/images/Contact/testimonial 1.png",
        alt: "Testimonial 1"
    },
    {
        src: "/images/Contact/testimonial 2.png",
        alt: "Testimonial 2"
    },
    {
        src: "/images/Contact/testimonial 3.png",
        alt: "Testimonial 3"
    },
    {
        src: "/images/Contact/testimonial 4.png",
        alt: "Testimonial 4"
    }
];
/* ── Card stack constants ─────────────────────────────────── */ const SWIPE_THRESHOLD = 80;
const VISIBLE_CARDS = 4;
const CARD_OFFSET = 8; // thin peek strips matching Figma
const CARD_SCALE_STEP = 0; // all strips same width as front card
const CARD_DIM_STEP = 0;
function CardStack() {
    _s();
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [drag, setDrag] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0
    });
    const [exiting, setExiting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const dragging = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const startPos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        x: 0,
        y: 0
    });
    const didDrag = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const count = stackCards.length;
    const ordered = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CardStack.useMemo[ordered]": ()=>stackCards.map({
                "CardStack.useMemo[ordered]": (card, i)=>({
                        card,
                        index: i,
                        pos: (i - active + count) % count
                    })
            }["CardStack.useMemo[ordered]"])
    }["CardStack.useMemo[ordered]"], [
        active,
        count
    ]);
    const advance = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CardStack.useCallback[advance]": ()=>{
            if (exiting) return;
            setExiting(true);
            setTimeout({
                "CardStack.useCallback[advance]": ()=>{
                    setActive({
                        "CardStack.useCallback[advance]": (prev)=>(prev + 1) % count
                    }["CardStack.useCallback[advance]"]);
                    setExiting(false);
                }
            }["CardStack.useCallback[advance]"], 280);
        }
    }["CardStack.useCallback[advance]"], [
        count,
        exiting
    ]);
    const onPointerDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CardStack.useCallback[onPointerDown]": (event)=>{
            event.currentTarget.setPointerCapture(event.pointerId);
            dragging.current = true;
            didDrag.current = false;
            startPos.current = {
                x: event.clientX,
                y: event.clientY
            };
            setDrag({
                x: 0,
                y: 0
            });
        }
    }["CardStack.useCallback[onPointerDown]"], []);
    const onPointerMove = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CardStack.useCallback[onPointerMove]": (event_0)=>{
            if (!dragging.current) return;
            const dx = event_0.clientX - startPos.current.x;
            const dy = event_0.clientY - startPos.current.y;
            if (Math.hypot(dx, dy) > 3) didDrag.current = true;
            setDrag({
                x: dx,
                y: dy
            });
        }
    }["CardStack.useCallback[onPointerMove]"], []);
    const onPointerUp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CardStack.useCallback[onPointerUp]": ()=>{
            if (!dragging.current) return;
            dragging.current = false;
            const distance = Math.hypot(drag.x, drag.y);
            if (distance > SWIPE_THRESHOLD) {
                advance();
            }
            setDrag({
                x: 0,
                y: 0
            });
        }
    }["CardStack.useCallback[onPointerUp]"], [
        drag.x,
        drag.y,
        advance
    ]);
    /* pt-6 reserves space above for the peeking strips */ return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full pt-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative w-full aspect-8/7",
            children: ordered.map(({ card: card_0, pos })=>{
                if (pos >= VISIBLE_CARDS) return null;
                const isTop = pos === 0;
                const offsetY = -(pos * CARD_OFFSET);
                const scale = 1 - pos * CARD_SCALE_STEP;
                const dim = 1 - pos * CARD_DIM_STEP;
                const zIndex = 10 - pos;
                const dragX = isTop ? drag.x : 0;
                const dragY = isTop ? drag.y : 0;
                const rotate = isTop ? drag.x * 0.06 : 0;
                const exitX = isTop && exiting ? drag.x * 4 || 300 : 0;
                const exitY = isTop && exiting ? drag.y * 4 || -100 : 0;
                const exitRotate = isTop && exiting ? drag.x * 0.2 || 15 : 0;
                const exitOpacity = isTop && exiting ? 0 : 1;
                const transition = isTop && dragging.current ? "none" : "transform 380ms cubic-bezier(0.34, 1.56, 0.64, 1), opacity 280ms ease, filter 320ms ease";
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    onClick: ()=>{
                        if (!didDrag.current && !exiting) advance();
                    },
                    onPointerDown: isTop ? onPointerDown : undefined,
                    onPointerMove: isTop ? onPointerMove : undefined,
                    onPointerUp: isTop ? onPointerUp : undefined,
                    onPointerCancel: isTop ? onPointerUp : undefined,
                    className: "absolute left-0 top-0 h-full w-full cursor-pointer select-none",
                    style: {
                        transform: `translate(${exitX || dragX}px, ${(exitY || dragY) + offsetY}px) scale(${scale}) rotate(${exitRotate || rotate}deg)`,
                        opacity: exitOpacity,
                        zIndex,
                        filter: `brightness(${dim})`,
                        transition,
                        ...isTop ? {
                            touchAction: "none"
                        } : {}
                    },
                    "aria-label": "Shuffle cards",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative h-full w-full overflow-hidden rounded-3xl",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: card_0.src,
                            alt: card_0.alt,
                            fill: true,
                            className: "object-cover",
                            sizes: "(max-width: 768px) calc(100vw - 48px), 500px",
                            priority: pos === 0
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/ContactSection.tsx",
                            lineNumber: 159,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/ContactSection.tsx",
                        lineNumber: 158,
                        columnNumber: 15
                    }, this)
                }, card_0.src, false, {
                    fileName: "[project]/src/components/sections/ContactSection.tsx",
                    lineNumber: 146,
                    columnNumber: 16
                }, this);
            })
        }, void 0, false, {
            fileName: "[project]/src/components/sections/ContactSection.tsx",
            lineNumber: 127,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/sections/ContactSection.tsx",
        lineNumber: 126,
        columnNumber: 10
    }, this);
}
_s(CardStack, "IioouWEiyiFepHcT5S66ufhf240=");
_c1 = CardStack;
function ContactSection() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(8);
    if ($[0] !== "cd3098e830cb2f4e325bd5b55d6b6705744d6f31fff33746cd37a74837a9de46") {
        for(let $i = 0; $i < 8; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "cd3098e830cb2f4e325bd5b55d6b6705744d6f31fff33746cd37a74837a9de46";
    }
    let t0;
    let t1;
    let t2;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "hero-reveal h1 text-[48px] leading-[1.1] md:text-(--font-size-7xl) md:leading-[80px]",
                    children: "Let's Talk About"
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/ContactSection.tsx",
                    lineNumber: 178,
                    columnNumber: 15
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "hero-reveal h1 italic text-[48px] leading-[1.1] md:text-(--font-size-7xl) md:leading-[80px]",
                    children: "Your Product"
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/ContactSection.tsx",
                    lineNumber: 178,
                    columnNumber: 137
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/sections/ContactSection.tsx",
            lineNumber: 178,
            columnNumber: 10
        }, this);
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "hero-reveal hero-reveal-delay-1 p1 mt-6 max-w-[599px]",
            children: "Whether you're launching something new or fixing a product that isn't – I'm here to help. Here's how it usually starts: you send me a quick note about your project, and we jump on a 30-minute call. I'll come prepared with initial thoughts and a rough direction."
        }, void 0, false, {
            fileName: "[project]/src/components/sections/ContactSection.tsx",
            lineNumber: 179,
            columnNumber: 10
        }, this);
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "hero-reveal hero-reveal-delay-1 p1-bold mt-6",
            children: "I work flexible hours that overlap with US timezones."
        }, void 0, false, {
            fileName: "[project]/src/components/sections/ContactSection.tsx",
            lineNumber: 180,
            columnNumber: 10
        }, this);
        $[1] = t0;
        $[2] = t1;
        $[3] = t2;
    } else {
        t0 = $[1];
        t1 = $[2];
        t2 = $[3];
    }
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex max-w-[640px] flex-col",
            children: [
                t0,
                t1,
                t2,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "hero-reveal hero-reveal-delay-2 mt-10",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "mailto:torry.contact@gmail.com",
                        className: "btn-primary",
                        children: [
                            "GET IN TOUCH",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "24",
                                height: "24",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M7 7H17M17 7V17M17 7L7 17",
                                    stroke: "currentColor",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/ContactSection.tsx",
                                    lineNumber: 191,
                                    columnNumber: 297
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/ContactSection.tsx",
                                lineNumber: 191,
                                columnNumber: 202
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sections/ContactSection.tsx",
                        lineNumber: 191,
                        columnNumber: 122
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/ContactSection.tsx",
                    lineNumber: 191,
                    columnNumber: 67
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/sections/ContactSection.tsx",
            lineNumber: 191,
            columnNumber: 10
        }, this);
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative mx-auto flex w-full max-w-[var(--max-w-desktop)] flex-1 items-start px-6 pt-[119px] md:items-center md:px-20",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex w-full flex-col gap-10 md:flex-row md:items-center md:justify-between md:gap-20",
                children: [
                    t3,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex w-full flex-col gap-3 md:w-[500px] md:shrink-0 md:items-start",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "p2 text-[rgba(0,0,0,0.5)] dark:text-[rgba(255,255,255,0.5)]",
                                children: "WHAT MY CLIENTS SAY"
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/ContactSection.tsx",
                                lineNumber: 198,
                                columnNumber: 335
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CardStack, {}, void 0, false, {
                                fileName: "[project]/src/components/sections/ContactSection.tsx",
                                lineNumber: 198,
                                columnNumber: 433
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sections/ContactSection.tsx",
                        lineNumber: 198,
                        columnNumber: 251
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sections/ContactSection.tsx",
                lineNumber: 198,
                columnNumber: 145
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/sections/ContactSection.tsx",
            lineNumber: 198,
            columnNumber: 10
        }, this);
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
            className: "mb-6 border-t border-[color:rgba(0,0,0,0.1)] dark:border-[color:rgba(255,255,255,0.1)]"
        }, void 0, false, {
            fileName: "[project]/src/components/sections/ContactSection.tsx",
            lineNumber: 205,
            columnNumber: 10
        }, this);
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    let t6;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "relative flex flex-1 flex-col overflow-y-auto overflow-x-clip",
            children: [
                t4,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto w-full max-w-[var(--max-w-desktop)] px-6 pb-8 md:px-20",
                    children: [
                        t5,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-4 md:flex-row md:items-center md:justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col gap-3 md:flex-row md:items-center md:gap-8",
                                    children: socials.map(_ContactSectionSocialsMap)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/ContactSection.tsx",
                                    lineNumber: 212,
                                    columnNumber: 265
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[14px] leading-[20px] text-[var(--color-gray-500)] dark:text-[var(--color-neutral-400)]",
                                    children: "© 2026. Crafted with love by Victoria Samoilenko"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/ContactSection.tsx",
                                    lineNumber: 212,
                                    columnNumber: 385
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/sections/ContactSection.tsx",
                            lineNumber: 212,
                            columnNumber: 181
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/sections/ContactSection.tsx",
                    lineNumber: 212,
                    columnNumber: 97
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/sections/ContactSection.tsx",
            lineNumber: 212,
            columnNumber: 10
        }, this);
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    return t6;
}
_c2 = ContactSection;
function _ContactSectionSocialsMap(s) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        href: s.href,
        target: "_blank",
        rel: "noopener noreferrer",
        className: "link-arrow-rotate link inline-flex items-center gap-1 text-[14px] leading-[20px]",
        children: [
            s.label,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ArrowUpRight, {}, void 0, false, {
                fileName: "[project]/src/components/sections/ContactSection.tsx",
                lineNumber: 220,
                columnNumber: 188
            }, this)
        ]
    }, s.label, true, {
        fileName: "[project]/src/components/sections/ContactSection.tsx",
        lineNumber: 220,
        columnNumber: 10
    }, this);
}
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "ArrowUpRight");
__turbopack_context__.k.register(_c1, "CardStack");
__turbopack_context__.k.register(_c2, "ContactSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_components_sections_ContactSection_tsx_6b6695b4._.js.map