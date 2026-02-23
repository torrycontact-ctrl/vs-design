(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/ImageGallery.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ImageGallery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function ImageGallery(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(10);
    if ($[0] !== "404275f5c109537685ec7855e7a4c2748b193d6d7578f5a631eb3c0148b3320a") {
        for(let $i = 0; $i < 10; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "404275f5c109537685ec7855e7a4c2748b193d6d7578f5a631eb3c0148b3320a";
    }
    const { images } = t0;
    const scrollRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ({
            "ImageGallery[scroll]": (direction)=>{
                const container = scrollRef.current;
                if (!container) {
                    return;
                }
                const style = window.getComputedStyle(container);
                const gap = parseFloat(style.columnGap || style.gap || "0");
                const firstChild = container.querySelector("[data-gallery-item]");
                const scrollAmount = (firstChild?.offsetWidth ?? container.clientWidth) + gap;
                const delta = direction === "left" ? -scrollAmount : scrollAmount;
                container.scrollBy({
                    left: delta,
                    behavior: "smooth"
                });
            }
        })["ImageGallery[scroll]"];
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    const scroll = t1;
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = ({
            "ImageGallery[<button>.onClick]": ()=>scroll("left")
        })["ImageGallery[<button>.onClick]"];
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    let t3;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            "aria-label": "Scroll gallery left",
            onClick: t2,
            className: "group flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-black)] dark:border-[var(--color-white)] transition-all duration-200 hover:bg-[var(--color-black)] dark:hover:bg-[var(--color-white)]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                className: "stroke-[var(--color-black)] dark:stroke-[var(--color-white)] group-hover:stroke-[var(--color-white)] dark:group-hover:stroke-[var(--color-black)] transition-all duration-200",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M19 12H5M5 12L12 19M5 12L12 5",
                    strokeWidth: "1.5",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, void 0, false, {
                    fileName: "[project]/src/components/ImageGallery.tsx",
                    lineNumber: 57,
                    columnNumber: 594
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ImageGallery.tsx",
                lineNumber: 57,
                columnNumber: 313
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/ImageGallery.tsx",
            lineNumber: 57,
            columnNumber: 10
        }, this);
        $[3] = t3;
    } else {
        t3 = $[3];
    }
    let t4;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = ({
            "ImageGallery[<button>.onClick]": ()=>scroll("right")
        })["ImageGallery[<button>.onClick]"];
        $[4] = t4;
    } else {
        t4 = $[4];
    }
    let t5;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "hidden lg:flex items-center gap-3 justify-end mb-6",
            children: [
                t3,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    "aria-label": "Scroll gallery right",
                    onClick: t4,
                    className: "group flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-black)] dark:border-[var(--color-white)] transition-all duration-200 hover:bg-[var(--color-black)] dark:hover:bg-[var(--color-white)]",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        className: "stroke-[var(--color-black)] dark:stroke-[var(--color-white)] group-hover:stroke-[var(--color-white)] dark:group-hover:stroke-[var(--color-black)] transition-all duration-200",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M5 12H19M19 12L12 5M19 12L12 19",
                            strokeWidth: "1.5",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ImageGallery.tsx",
                            lineNumber: 73,
                            columnNumber: 667
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ImageGallery.tsx",
                        lineNumber: 73,
                        columnNumber: 386
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ImageGallery.tsx",
                    lineNumber: 73,
                    columnNumber: 82
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ImageGallery.tsx",
            lineNumber: 73,
            columnNumber: 10
        }, this);
        $[5] = t5;
    } else {
        t5 = $[5];
    }
    let t6;
    if ($[6] !== images) {
        t6 = images.map(_ImageGalleryImagesMap);
        $[6] = images;
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    let t7;
    if ($[8] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative",
            children: [
                t5,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: scrollRef,
                    className: "flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide",
                    children: t6
                }, void 0, false, {
                    fileName: "[project]/src/components/ImageGallery.tsx",
                    lineNumber: 88,
                    columnNumber: 40
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ImageGallery.tsx",
            lineNumber: 88,
            columnNumber: 10
        }, this);
        $[8] = t6;
        $[9] = t7;
    } else {
        t7 = $[9];
    }
    return t7;
}
_s(ImageGallery, "rUl6RJdP9XfufN21BrtKqIOri0o=");
_c = ImageGallery;
function _ImageGalleryImagesMap(img, i) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-gallery-item": true,
        className: "shrink-0 snap-start overflow-hidden rounded-2xl",
        style: {
            width: img.width,
            height: img.height
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            src: img.src,
            alt: img.alt,
            width: img.width,
            height: img.height,
            className: "h-full w-full object-cover"
        }, void 0, false, {
            fileName: "[project]/src/components/ImageGallery.tsx",
            lineNumber: 100,
            columnNumber: 6
        }, this)
    }, i, false, {
        fileName: "[project]/src/components/ImageGallery.tsx",
        lineNumber: 97,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "ImageGallery");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/utils/seededRandom.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "seededRandom",
    ()=>seededRandom
]);
function seededRandom(seed) {
    let t = seed >>> 0;
    return ()=>{
        t += 0x6d2b79f5;
        let r = Math.imul(t ^ t >>> 15, 1 | t);
        r ^= r + Math.imul(r ^ r >>> 7, 61 | r);
        return ((r ^ r >>> 14) >>> 0) / 4294967296;
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/BlobImageReveal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BlobImageReveal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$seededRandom$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/seededRandom.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const clamp = (v, min, max)=>Math.min(max, Math.max(min, v));
const cornerDist = (x, y, w, h)=>Math.max(Math.hypot(x, y), Math.hypot(x - w, y), Math.hypot(x, y - h), Math.hypot(x - w, y - h));
function BlobImageReveal(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(66);
    if ($[0] !== "b0ea6c178df30aa8eb2d4a04ad4c8ae9351f57f8796912c140e13ddca795d6c2") {
        for(let $i = 0; $i < 66; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "b0ea6c178df30aa8eb2d4a04ad4c8ae9351f57f8796912c140e13ddca795d6c2";
    }
    const { src, alt: t1, className, priority: t2, blobCount: t3, seed: t4, duration: t5, delay: t6, trigger: t7, replay: t8 } = t0;
    const alt = t1 === undefined ? "" : t1;
    const priority = t2 === undefined ? false : t2;
    const blobCount = t3 === undefined ? 6 : t3;
    const seed = t4 === undefined ? 1 : t4;
    const duration = t5 === undefined ? 3 : t5;
    const delay = t6 === undefined ? 0 : t6;
    const trigger = t7 === undefined ? "inView" : t7;
    const replay = t8 === undefined ? false : t8;
    const wrapperRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t9;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = {
            w: 0,
            h: 0
        };
        $[1] = t9;
    } else {
        t9 = $[1];
    }
    const [size, setSize] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t9);
    const [play, setPlay] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(trigger === "mount");
    const hasPlayedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(trigger === "mount");
    let t10;
    if ($[2] !== blobCount) {
        t10 = clamp(blobCount, 1, 12);
        $[2] = blobCount;
        $[3] = t10;
    } else {
        t10 = $[3];
    }
    const safeCount = t10;
    const rawId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])();
    let t11;
    if ($[4] !== rawId) {
        let t12;
        if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
            t12 = /:/g;
            $[6] = t12;
        } else {
            t12 = $[6];
        }
        t11 = rawId.replace(t12, "");
        $[4] = rawId;
        $[5] = t11;
    } else {
        t11 = $[5];
    }
    const uid = t11;
    const maskId = `bm-${uid}`;
    const filterId = `bf-${uid}`;
    let t12;
    let t13;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = ({
            "BlobImageReveal[useEffect()]": ()=>{
                const node = wrapperRef.current;
                if (!node) {
                    return;
                }
                const measure = {
                    "BlobImageReveal[useEffect() > measure]": ()=>{
                        const r = node.getBoundingClientRect();
                        setSize({
                            w: r.width,
                            h: r.height
                        });
                    }
                }["BlobImageReveal[useEffect() > measure]"];
                measure();
                const ro = new ResizeObserver(measure);
                ro.observe(node);
                return ()=>ro.disconnect();
            }
        })["BlobImageReveal[useEffect()]"];
        t13 = [];
        $[7] = t12;
        $[8] = t13;
    } else {
        t12 = $[7];
        t13 = $[8];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t12, t13);
    let t14;
    let t15;
    if ($[9] !== replay || $[10] !== trigger) {
        t14 = ({
            "BlobImageReveal[useEffect()]": ()=>{
                if (trigger === "mount") {
                    return;
                }
                const node_0 = wrapperRef.current;
                if (!node_0) {
                    return;
                }
                const io = new IntersectionObserver((t16)=>{
                    const [entry] = t16;
                    if (entry.isIntersecting) {
                        if (!hasPlayedRef.current || replay) {
                            setPlay(true);
                            hasPlayedRef.current = true;
                        }
                    } else {
                        if (replay && entry.intersectionRatio === 0) {
                            setPlay(false);
                            hasPlayedRef.current = false;
                        }
                    }
                }, {
                    rootMargin: "0px 0px -10% 0px"
                });
                io.observe(node_0);
                return ()=>io.disconnect();
            }
        })["BlobImageReveal[useEffect()]"];
        t15 = [
            replay,
            trigger
        ];
        $[9] = replay;
        $[10] = trigger;
        $[11] = t14;
        $[12] = t15;
    } else {
        t14 = $[11];
        t15 = $[12];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t14, t15);
    let t16;
    bb0: {
        if (!size.w || !size.h) {
            let t17;
            if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
                t17 = [];
                $[13] = t17;
            } else {
                t17 = $[13];
            }
            t16 = t17;
            break bb0;
        }
        let t17;
        if ($[14] !== safeCount || $[15] !== seed || $[16] !== size.h || $[17] !== size.w) {
            const rand = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$seededRandom$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["seededRandom"])(seed);
            const cx = size.w / 2;
            const cy = size.h / 2;
            t17 = Array.from({
                length: safeCount
            }, {
                "BlobImageReveal[Array.from()]": ()=>{
                    const rawX = rand() * size.w;
                    const rawY = rand() * size.h;
                    const pull = 0.35 + rand() * 0.45;
                    const endX = clamp(rawX + (cx - rawX) * pull + (rand() - 0.5) * size.w * 0.2, 0, size.w);
                    const endY = clamp(rawY + (cy - rawY) * pull + (rand() - 0.5) * size.h * 0.2, 0, size.h);
                    const endR = cornerDist(endX, endY, size.w, size.h) * (1.05 + rand() * 0.35);
                    const stagger = rand() * 0.25;
                    return {
                        startX: rawX,
                        startY: rawY,
                        endX,
                        endY,
                        endR,
                        stagger
                    };
                }
            }["BlobImageReveal[Array.from()]"]);
            $[14] = safeCount;
            $[15] = seed;
            $[16] = size.h;
            $[17] = size.w;
            $[18] = t17;
        } else {
            t17 = $[18];
        }
        t16 = t17;
    }
    const blobs = t16;
    const ready = size.w > 0 && size.h > 0;
    const active = play && ready;
    const vw = Math.max(size.w, 1);
    const vh = Math.max(size.h, 1);
    let t17;
    if ($[19] !== className) {
        t17 = [
            "relative overflow-hidden",
            className
        ].filter(Boolean);
        $[19] = className;
        $[20] = t17;
    } else {
        t17 = $[20];
    }
    const t18 = t17.join(" ");
    const t19 = `url(#${maskId})`;
    const t20 = `url(#${maskId})`;
    let t21;
    if ($[21] !== t19 || $[22] !== t20) {
        t21 = {
            WebkitMaskImage: t19,
            maskImage: t20,
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
            WebkitMaskSize: "100% 100%",
            maskSize: "100% 100%",
            WebkitMaskPosition: "0 0",
            maskPosition: "0 0"
        };
        $[21] = t19;
        $[22] = t20;
        $[23] = t21;
    } else {
        t21 = $[23];
    }
    let t22;
    if ($[24] !== alt || $[25] !== priority || $[26] !== src) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            src: src,
            alt: alt,
            fill: true,
            priority: priority,
            sizes: "100vw",
            className: "object-cover"
        }, void 0, false, {
            fileName: "[project]/src/components/BlobImageReveal.tsx",
            lineNumber: 250,
            columnNumber: 11
        }, this);
        $[24] = alt;
        $[25] = priority;
        $[26] = src;
        $[27] = t22;
    } else {
        t22 = $[27];
    }
    let t23;
    if ($[28] !== t21 || $[29] !== t22) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0",
            style: t21,
            children: t22
        }, void 0, false, {
            fileName: "[project]/src/components/BlobImageReveal.tsx",
            lineNumber: 260,
            columnNumber: 11
        }, this);
        $[28] = t21;
        $[29] = t22;
        $[30] = t23;
    } else {
        t23 = $[30];
    }
    const t24 = `0 0 ${vw} ${vh}`;
    let t25;
    let t26;
    if ($[31] === Symbol.for("react.memo_cache_sentinel")) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feGaussianBlur", {
            in: "SourceGraphic",
            stdDeviation: "18",
            result: "blur"
        }, void 0, false, {
            fileName: "[project]/src/components/BlobImageReveal.tsx",
            lineNumber: 271,
            columnNumber: 11
        }, this);
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feColorMatrix", {
            in: "blur",
            type: "matrix",
            values: "1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 25 -10",
            result: "goo"
        }, void 0, false, {
            fileName: "[project]/src/components/BlobImageReveal.tsx",
            lineNumber: 272,
            columnNumber: 11
        }, this);
        $[31] = t25;
        $[32] = t26;
    } else {
        t25 = $[31];
        t26 = $[32];
    }
    let t27;
    if ($[33] !== filterId) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("filter", {
            id: filterId,
            x: "-50%",
            y: "-50%",
            width: "200%",
            height: "200%",
            children: [
                t25,
                t26
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/BlobImageReveal.tsx",
            lineNumber: 281,
            columnNumber: 11
        }, this);
        $[33] = filterId;
        $[34] = t27;
    } else {
        t27 = $[34];
    }
    let t28;
    if ($[35] !== vh || $[36] !== vw) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
            width: vw,
            height: vh,
            fill: "black"
        }, void 0, false, {
            fileName: "[project]/src/components/BlobImageReveal.tsx",
            lineNumber: 289,
            columnNumber: 11
        }, this);
        $[35] = vh;
        $[36] = vw;
        $[37] = t28;
    } else {
        t28 = $[37];
    }
    const t29 = `url(#${filterId})`;
    let t30;
    if ($[38] !== active || $[39] !== blobs || $[40] !== delay || $[41] !== duration) {
        t30 = blobs.map({
            "BlobImageReveal[blobs.map()]": (b, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "0",
                    cy: "0",
                    r: b.endR,
                    className: active ? "blob-circle-animate" : "blob-circle-hidden",
                    style: {
                        "--sx": `${b.startX}px`,
                        "--sy": `${b.startY}px`,
                        "--ex": `${b.endX}px`,
                        "--ey": `${b.endY}px`,
                        "--d": `${active ? duration : 0}s`,
                        "--t": `${active ? delay + b.stagger : 0}s`
                    }
                }, i, false, {
                    fileName: "[project]/src/components/BlobImageReveal.tsx",
                    lineNumber: 300,
                    columnNumber: 49
                }, this)
        }["BlobImageReveal[blobs.map()]"]);
        $[38] = active;
        $[39] = blobs;
        $[40] = delay;
        $[41] = duration;
        $[42] = t30;
    } else {
        t30 = $[42];
    }
    let t31;
    if ($[43] !== t29 || $[44] !== t30) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
            filter: t29,
            fill: "white",
            children: t30
        }, void 0, false, {
            fileName: "[project]/src/components/BlobImageReveal.tsx",
            lineNumber: 319,
            columnNumber: 11
        }, this);
        $[43] = t29;
        $[44] = t30;
        $[45] = t31;
    } else {
        t31 = $[45];
    }
    let t32;
    if ($[46] !== maskId || $[47] !== t28 || $[48] !== t31 || $[49] !== vh || $[50] !== vw) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mask", {
            id: maskId,
            x: "0",
            y: "0",
            width: vw,
            height: vh,
            maskUnits: "userSpaceOnUse",
            maskContentUnits: "userSpaceOnUse",
            children: [
                t28,
                t31
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/BlobImageReveal.tsx",
            lineNumber: 328,
            columnNumber: 11
        }, this);
        $[46] = maskId;
        $[47] = t28;
        $[48] = t31;
        $[49] = vh;
        $[50] = vw;
        $[51] = t32;
    } else {
        t32 = $[51];
    }
    let t33;
    if ($[52] !== t27 || $[53] !== t32) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
            children: [
                t27,
                t32
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/BlobImageReveal.tsx",
            lineNumber: 340,
            columnNumber: 11
        }, this);
        $[52] = t27;
        $[53] = t32;
        $[54] = t33;
    } else {
        t33 = $[54];
    }
    let t34;
    if ($[55] !== t24 || $[56] !== t33) {
        t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: "absolute inset-0 h-full w-full pointer-events-none",
            viewBox: t24,
            preserveAspectRatio: "none",
            "aria-hidden": "true",
            children: t33
        }, void 0, false, {
            fileName: "[project]/src/components/BlobImageReveal.tsx",
            lineNumber: 349,
            columnNumber: 11
        }, this);
        $[55] = t24;
        $[56] = t33;
        $[57] = t34;
    } else {
        t34 = $[57];
    }
    const t35 = `
            [data-blob-scope="${uid}"] .blob-circle-hidden {
              transform: translate(var(--sx), var(--sy)) scale(0);
            }
            [data-blob-scope="${uid}"] .blob-circle-animate {
              transform: translate(var(--sx), var(--sy)) scale(0);
              animation: blob-grow-${uid} var(--d) cubic-bezier(0.16, 1, 0.3, 1) var(--t) forwards;
            }
            @keyframes blob-grow-${uid} {
              0% { transform: translate(var(--sx), var(--sy)) scale(0); }
              100% { transform: translate(var(--ex), var(--ey)) scale(1); }
            }
            @media (prefers-reduced-motion: reduce) {
              [data-blob-scope="${uid}"] .blob-circle-animate {
                animation: none !important;
                transform: translate(var(--ex), var(--ey)) scale(1);
              }
            }
          `;
    let t36;
    if ($[58] !== t35) {
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
            dangerouslySetInnerHTML: {
                __html: t35
            }
        }, void 0, false, {
            fileName: "[project]/src/components/BlobImageReveal.tsx",
            lineNumber: 377,
            columnNumber: 11
        }, this);
        $[58] = t35;
        $[59] = t36;
    } else {
        t36 = $[59];
    }
    let t37;
    if ($[60] !== t18 || $[61] !== t23 || $[62] !== t34 || $[63] !== t36 || $[64] !== uid) {
        t37 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: wrapperRef,
            "data-blob-scope": uid,
            className: t18,
            children: [
                t23,
                t34,
                t36
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/BlobImageReveal.tsx",
            lineNumber: 387,
            columnNumber: 11
        }, this);
        $[60] = t18;
        $[61] = t23;
        $[62] = t34;
        $[63] = t36;
        $[64] = uid;
        $[65] = t37;
    } else {
        t37 = $[65];
    }
    return t37;
}
_s(BlobImageReveal, "l31klbBjuw15z7iB/lvggsyIQIA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"]
    ];
});
_c = BlobImageReveal;
var _c;
__turbopack_context__.k.register(_c, "BlobImageReveal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_a1c7a216._.js.map