(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
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
"[project]/src/components/RevealOnScroll.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RevealOnScroll
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const DEFAULT_SELECTOR = "[data-reveal]";
function RevealOnScroll(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "4d047f88937f1cf2b722c6092dcc52c9997371beb7bf791cbaab68be322e6322") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "4d047f88937f1cf2b722c6092dcc52c9997371beb7bf791cbaab68be322e6322";
    }
    const { children, selector: t1, rootMargin: t2, threshold: t3, replay: t4 } = t0;
    const selector = t1 === undefined ? DEFAULT_SELECTOR : t1;
    const rootMargin = t2 === undefined ? "0px 0px -10% 0px" : t2;
    const threshold = t3 === undefined ? 0.2 : t3;
    const replay = t4 === undefined ? false : t4;
    const wrapperRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t5;
    let t6;
    if ($[1] !== replay || $[2] !== rootMargin || $[3] !== selector || $[4] !== threshold) {
        t5 = ({
            "RevealOnScroll[useEffect()]": ()=>{
                if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
                ;
                const root = wrapperRef.current;
                if (!root) {
                    return;
                }
                const elements = Array.from(root.querySelectorAll(selector));
                if (!elements.length) {
                    return;
                }
                const media = window.matchMedia("(prefers-reduced-motion: reduce)");
                if (media.matches) {
                    elements.forEach(_RevealOnScrollUseEffectElementsForEach);
                    return;
                }
                const observer = new IntersectionObserver((entries)=>{
                    entries.forEach({
                        "RevealOnScroll[useEffect() > <anonymous> > entries.forEach()]": (entry)=>{
                            const target = entry.target;
                            if (entry.isIntersecting) {
                                target.classList.add("reveal-visible");
                                if (!replay) {
                                    observer.unobserve(target);
                                }
                            } else {
                                if (replay && entry.intersectionRatio === 0) {
                                    target.classList.remove("reveal-visible");
                                }
                            }
                        }
                    }["RevealOnScroll[useEffect() > <anonymous> > entries.forEach()]"]);
                }, {
                    rootMargin,
                    threshold
                });
                elements.forEach({
                    "RevealOnScroll[useEffect() > elements.forEach()]": (el_0)=>observer.observe(el_0)
                }["RevealOnScroll[useEffect() > elements.forEach()]"]);
                return ()=>observer.disconnect();
            }
        })["RevealOnScroll[useEffect()]"];
        t6 = [
            replay,
            rootMargin,
            selector,
            threshold
        ];
        $[1] = replay;
        $[2] = rootMargin;
        $[3] = selector;
        $[4] = threshold;
        $[5] = t5;
        $[6] = t6;
    } else {
        t5 = $[5];
        t6 = $[6];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t5, t6);
    let t7;
    if ($[7] !== children) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: wrapperRef,
            children: children
        }, void 0, false, {
            fileName: "[project]/src/components/RevealOnScroll.tsx",
            lineNumber: 94,
            columnNumber: 10
        }, this);
        $[7] = children;
        $[8] = t7;
    } else {
        t7 = $[8];
    }
    return t7;
}
_s(RevealOnScroll, "S9hay92VXuy3YMd6nM+XEC/Dmxc=");
_c = RevealOnScroll;
function _RevealOnScrollUseEffectElementsForEach(el) {
    return el.classList.add("reveal-visible");
}
var _c;
__turbopack_context__.k.register(_c, "RevealOnScroll");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/MarqueeGallery.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MarqueeGallery
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
function MarqueeGallery(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(24);
    if ($[0] !== "a28a4a2f1733b6e4b1e619d892e683a3a355cfb064ecd19727517116d8aac718") {
        for(let $i = 0; $i < 24; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "a28a4a2f1733b6e4b1e619d892e683a3a355cfb064ecd19727517116d8aac718";
    }
    const { widths, images, gap: t1, speed: t2 } = t0;
    const gap = t1 === undefined ? 16 : t1;
    const speed = t2 === undefined ? 40 : t2;
    const rawId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])();
    let t3;
    if ($[1] !== rawId) {
        let t4;
        if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
            t4 = /:/g;
            $[3] = t4;
        } else {
            t4 = $[3];
        }
        t3 = rawId.replace(t4, "");
        $[1] = rawId;
        $[2] = t3;
    } else {
        t3 = $[2];
    }
    const uid = t3;
    let t4;
    if ($[4] !== images || $[5] !== widths) {
        t4 = images && images.length > 0 ? images.map(_MarqueeGalleryImagesMap) : widths ?? [];
        $[4] = images;
        $[5] = widths;
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    const itemWidths = t4;
    let t5;
    if ($[7] !== gap) {
        t5 = ({
            "MarqueeGallery[itemWidths.reduce()]": (sum, w)=>sum + w + gap
        })["MarqueeGallery[itemWidths.reduce()]"];
        $[7] = gap;
        $[8] = t5;
    } else {
        t5 = $[8];
    }
    const totalWidth = itemWidths.reduce(t5, 0);
    const duration = totalWidth / speed;
    let t6;
    if ($[9] !== gap) {
        t6 = {
            gap,
            width: "max-content"
        };
        $[9] = gap;
        $[10] = t6;
    } else {
        t6 = $[10];
    }
    let t7;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = [
            0,
            1
        ];
        $[11] = t7;
    } else {
        t7 = $[11];
    }
    let t8;
    if ($[12] !== images || $[13] !== itemWidths) {
        t8 = t7.map({
            "MarqueeGallery[(anonymous)()]": (copy)=>itemWidths.map({
                    "MarqueeGallery[(anonymous)() > itemWidths.map()]": (w_0, i)=>{
                        const img_0 = images?.[i];
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: [
                                "shrink-0 rounded-3xl h-[160px] md:h-[600px]",
                                img_0 ? "relative overflow-hidden" : "bg-[#5a79e6]"
                            ].join(" "),
                            style: {
                                width: w_0
                            },
                            children: img_0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: img_0.src,
                                alt: img_0.alt,
                                fill: true,
                                className: "object-cover",
                                sizes: "(max-width: 768px) 80vw, 600px"
                            }, void 0, false, {
                                fileName: "[project]/src/components/MarqueeGallery.tsx",
                                lineNumber: 94,
                                columnNumber: 24
                            }, this)
                        }, `${copy}-${i}`, false, {
                            fileName: "[project]/src/components/MarqueeGallery.tsx",
                            lineNumber: 92,
                            columnNumber: 18
                        }, this);
                    }
                }["MarqueeGallery[(anonymous)() > itemWidths.map()]"])
        }["MarqueeGallery[(anonymous)()]"]);
        $[12] = images;
        $[13] = itemWidths;
        $[14] = t8;
    } else {
        t8 = $[14];
    }
    let t9;
    if ($[15] !== t6 || $[16] !== t8 || $[17] !== uid) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            "data-marquee": uid,
            className: "flex",
            style: t6,
            children: t8
        }, void 0, false, {
            fileName: "[project]/src/components/MarqueeGallery.tsx",
            lineNumber: 106,
            columnNumber: 10
        }, this);
        $[15] = t6;
        $[16] = t8;
        $[17] = uid;
        $[18] = t9;
    } else {
        t9 = $[18];
    }
    const t10 = `
            [data-marquee="${uid}"] {
              animation: marquee-${uid} ${duration}s linear infinite;
            }
            @keyframes marquee-${uid} {
              0% { transform: translateX(0); }
              100% { transform: translateX(-${totalWidth}px); }
            }
          `;
    let t11;
    if ($[19] !== t10) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
            dangerouslySetInnerHTML: {
                __html: t10
            }
        }, void 0, false, {
            fileName: "[project]/src/components/MarqueeGallery.tsx",
            lineNumber: 125,
            columnNumber: 11
        }, this);
        $[19] = t10;
        $[20] = t11;
    } else {
        t11 = $[20];
    }
    let t12;
    if ($[21] !== t11 || $[22] !== t9) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "overflow-hidden",
            children: [
                t9,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/MarqueeGallery.tsx",
            lineNumber: 135,
            columnNumber: 11
        }, this);
        $[21] = t11;
        $[22] = t9;
        $[23] = t12;
    } else {
        t12 = $[23];
    }
    return t12;
}
_s(MarqueeGallery, "z5G64aAJtITuH/AsdF2fhyIl3Cg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"]
    ];
});
_c = MarqueeGallery;
function _MarqueeGalleryImagesMap(img) {
    return img.width;
}
var _c;
__turbopack_context__.k.register(_c, "MarqueeGallery");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/BeforeAfterSlider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BeforeAfterSlider
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
function BeforeAfterSlider(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(53);
    if ($[0] !== "cfc54f4518d87ae56ab934dc38a766be1e6634a6c5c8a930beb54a9f42084b2b") {
        for(let $i = 0; $i < 53; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "cfc54f4518d87ae56ab934dc38a766be1e6634a6c5c8a930beb54a9f42084b2b";
    }
    const { beforeSrc, afterSrc, beforeAlt: t1, afterAlt: t2, className: t3, fit: t4 } = t0;
    const beforeAlt = t1 === undefined ? "Before" : t1;
    const afterAlt = t2 === undefined ? "After" : t2;
    const className = t3 === undefined ? "" : t3;
    const fit = t4 === undefined ? "cover" : t4;
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [position, setPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(50);
    const [isDragging, setIsDragging] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t5;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = ({
            "BeforeAfterSlider[updatePosition]": (clientX)=>{
                const container = containerRef.current;
                if (!container) {
                    return;
                }
                const rect = container.getBoundingClientRect();
                const x = clientX - rect.left;
                const pct = Math.min(100, Math.max(0, x / rect.width * 100));
                setPosition(pct);
            }
        })["BeforeAfterSlider[updatePosition]"];
        $[1] = t5;
    } else {
        t5 = $[1];
    }
    const updatePosition = t5;
    let t6;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = ({
            "BeforeAfterSlider[handlePointerDown]": (e)=>{
                e.preventDefault();
                setIsDragging(true);
                e.target.setPointerCapture(e.pointerId);
                updatePosition(e.clientX);
            }
        })["BeforeAfterSlider[handlePointerDown]"];
        $[2] = t6;
    } else {
        t6 = $[2];
    }
    const handlePointerDown = t6;
    let t7;
    if ($[3] !== isDragging) {
        t7 = ({
            "BeforeAfterSlider[handlePointerMove]": (e_0)=>{
                if (!isDragging) {
                    return;
                }
                updatePosition(e_0.clientX);
            }
        })["BeforeAfterSlider[handlePointerMove]"];
        $[3] = isDragging;
        $[4] = t7;
    } else {
        t7 = $[4];
    }
    const handlePointerMove = t7;
    let t8;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = ({
            "BeforeAfterSlider[handlePointerUp]": ()=>{
                setIsDragging(false);
            }
        })["BeforeAfterSlider[handlePointerUp]"];
        $[5] = t8;
    } else {
        t8 = $[5];
    }
    const handlePointerUp = t8;
    const offset = Math.abs(position - 50) / 50;
    const blurAmount = offset * 12;
    const blurBefore = position < 50 ? blurAmount : 0;
    const blurAfter = position > 50 ? blurAmount : 0;
    let t9;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = ({
            "BeforeAfterSlider[handleKeyDown]": (e_1)=>{
                if (e_1.key === "ArrowLeft") {
                    setPosition(_BeforeAfterSliderHandleKeyDownSetPosition);
                } else {
                    if (e_1.key === "ArrowRight") {
                        setPosition(_BeforeAfterSliderHandleKeyDownSetPosition2);
                    }
                }
            }
        })["BeforeAfterSlider[handleKeyDown]"];
        $[6] = t9;
    } else {
        t9 = $[6];
    }
    const handleKeyDown = t9;
    const fitClass = fit === "contain" ? "object-contain" : "object-cover";
    const t10 = `before-after-slider relative select-none overflow-hidden rounded-3xl ${className}`;
    let t11;
    if ($[7] !== position) {
        t11 = Math.round(position);
        $[7] = position;
        $[8] = t11;
    } else {
        t11 = $[8];
    }
    const t12 = isDragging ? "grabbing" : "grab";
    let t13;
    if ($[9] !== t12) {
        t13 = {
            cursor: t12
        };
        $[9] = t12;
        $[10] = t13;
    } else {
        t13 = $[10];
    }
    const t14 = `${fitClass} pointer-events-none`;
    let t15;
    if ($[11] !== afterAlt || $[12] !== afterSrc || $[13] !== t14) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            src: afterSrc,
            alt: afterAlt,
            fill: true,
            className: t14,
            sizes: "(max-width: 768px) 100vw, 1280px",
            priority: true
        }, void 0, false, {
            fileName: "[project]/src/components/BeforeAfterSlider.tsx",
            lineNumber: 145,
            columnNumber: 11
        }, this);
        $[11] = afterAlt;
        $[12] = afterSrc;
        $[13] = t14;
        $[14] = t15;
    } else {
        t15 = $[14];
    }
    const t16 = `inset(0 ${100 - position}% 0 0)`;
    let t17;
    if ($[15] !== t16) {
        t17 = {
            clipPath: t16
        };
        $[15] = t16;
        $[16] = t17;
    } else {
        t17 = $[16];
    }
    const t18 = `${fitClass} pointer-events-none`;
    let t19;
    if ($[17] !== beforeAlt || $[18] !== beforeSrc || $[19] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            src: beforeSrc,
            alt: beforeAlt,
            fill: true,
            className: t18,
            sizes: "(max-width: 768px) 100vw, 1280px",
            priority: true
        }, void 0, false, {
            fileName: "[project]/src/components/BeforeAfterSlider.tsx",
            lineNumber: 167,
            columnNumber: 11
        }, this);
        $[17] = beforeAlt;
        $[18] = beforeSrc;
        $[19] = t18;
        $[20] = t19;
    } else {
        t19 = $[20];
    }
    let t20;
    if ($[21] !== t17 || $[22] !== t19) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 overflow-hidden",
            style: t17,
            children: t19
        }, void 0, false, {
            fileName: "[project]/src/components/BeforeAfterSlider.tsx",
            lineNumber: 177,
            columnNumber: 11
        }, this);
        $[21] = t17;
        $[22] = t19;
        $[23] = t20;
    } else {
        t20 = $[23];
    }
    let t21;
    if ($[24] !== blurBefore || $[25] !== position) {
        t21 = blurBefore > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-y-0 left-0 z-[5] pointer-events-none",
            style: {
                width: `${position}%`,
                backdropFilter: `blur(${blurBefore}px)`,
                WebkitBackdropFilter: `blur(${blurBefore}px)`,
                maskImage: `linear-gradient(to right, black ${Math.max(0, 100 - position / 50 * 100)}%, transparent 100%)`,
                WebkitMaskImage: `linear-gradient(to right, black ${Math.max(0, 100 - position / 50 * 100)}%, transparent 100%)`
            }
        }, void 0, false, {
            fileName: "[project]/src/components/BeforeAfterSlider.tsx",
            lineNumber: 186,
            columnNumber: 29
        }, this);
        $[24] = blurBefore;
        $[25] = position;
        $[26] = t21;
    } else {
        t21 = $[26];
    }
    let t22;
    if ($[27] !== blurAfter || $[28] !== position) {
        t22 = blurAfter > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-y-0 right-0 z-[5] pointer-events-none",
            style: {
                width: `${100 - position}%`,
                backdropFilter: `blur(${blurAfter}px)`,
                WebkitBackdropFilter: `blur(${blurAfter}px)`,
                maskImage: `linear-gradient(to left, black ${Math.max(0, 100 - (100 - position) / 50 * 100)}%, transparent 100%)`,
                WebkitMaskImage: `linear-gradient(to left, black ${Math.max(0, 100 - (100 - position) / 50 * 100)}%, transparent 100%)`
            }
        }, void 0, false, {
            fileName: "[project]/src/components/BeforeAfterSlider.tsx",
            lineNumber: 201,
            columnNumber: 28
        }, this);
        $[27] = blurAfter;
        $[28] = position;
        $[29] = t22;
    } else {
        t22 = $[29];
    }
    const t23 = `${position}%`;
    let t24;
    if ($[30] !== t23) {
        t24 = {
            left: t23,
            transform: "translateX(-50%)"
        };
        $[30] = t23;
        $[31] = t24;
    } else {
        t24 = $[31];
    }
    let t25;
    if ($[32] === Symbol.for("react.memo_cache_sentinel")) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-y-0 -left-[1px] w-[2px] bg-white/90"
        }, void 0, false, {
            fileName: "[project]/src/components/BeforeAfterSlider.tsx",
            lineNumber: 228,
            columnNumber: 11
        }, this);
        $[32] = t25;
    } else {
        t25 = $[32];
    }
    const t26 = `translate(-50%, -50%) scale(${isDragging ? 1.1 : 1})`;
    let t27;
    if ($[33] !== t26) {
        t27 = {
            left: "0px",
            transform: t26
        };
        $[33] = t26;
        $[34] = t27;
    } else {
        t27 = $[34];
    }
    let t28;
    if ($[35] === Symbol.for("react.memo_cache_sentinel")) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8 12H16M8 12L10.5 9.5M8 12L10.5 14.5M16 12L13.5 9.5M16 12L13.5 14.5",
                stroke: "#1a1a1a",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/BeforeAfterSlider.tsx",
                lineNumber: 247,
                columnNumber: 106
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/BeforeAfterSlider.tsx",
            lineNumber: 247,
            columnNumber: 11
        }, this);
        $[35] = t28;
    } else {
        t28 = $[35];
    }
    let t29;
    if ($[36] !== t27) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute top-1/2 flex items-center justify-center w-[48px] h-[48px] rounded-full bg-white shadow-[0_2px_12px_rgba(0,0,0,0.25)] transition-transform duration-150",
            style: t27,
            children: t28
        }, void 0, false, {
            fileName: "[project]/src/components/BeforeAfterSlider.tsx",
            lineNumber: 254,
            columnNumber: 11
        }, this);
        $[36] = t27;
        $[37] = t29;
    } else {
        t29 = $[37];
    }
    let t30;
    if ($[38] !== t24 || $[39] !== t29) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute top-0 bottom-0 z-10",
            style: t24,
            children: [
                t25,
                t29
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/BeforeAfterSlider.tsx",
            lineNumber: 262,
            columnNumber: 11
        }, this);
        $[38] = t24;
        $[39] = t29;
        $[40] = t30;
    } else {
        t30 = $[40];
    }
    let t31;
    let t32;
    if ($[41] === Symbol.for("react.memo_cache_sentinel")) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute top-4 left-4 z-10 rounded-full bg-black/50 px-3 py-1 text-[12px] font-medium uppercase tracking-wider text-white backdrop-blur-sm",
            children: "Before"
        }, void 0, false, {
            fileName: "[project]/src/components/BeforeAfterSlider.tsx",
            lineNumber: 272,
            columnNumber: 11
        }, this);
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute top-4 right-4 z-10 rounded-full bg-black/50 px-3 py-1 text-[12px] font-medium uppercase tracking-wider text-white backdrop-blur-sm",
            children: "After"
        }, void 0, false, {
            fileName: "[project]/src/components/BeforeAfterSlider.tsx",
            lineNumber: 273,
            columnNumber: 11
        }, this);
        $[41] = t31;
        $[42] = t32;
    } else {
        t31 = $[41];
        t32 = $[42];
    }
    let t33;
    if ($[43] !== handlePointerMove || $[44] !== t10 || $[45] !== t11 || $[46] !== t13 || $[47] !== t15 || $[48] !== t20 || $[49] !== t21 || $[50] !== t22 || $[51] !== t30) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: containerRef,
            className: t10,
            onPointerDown: handlePointerDown,
            onPointerMove: handlePointerMove,
            onPointerUp: handlePointerUp,
            role: "slider",
            "aria-label": "Before and after comparison",
            "aria-valuenow": t11,
            "aria-valuemin": 0,
            "aria-valuemax": 100,
            tabIndex: 0,
            onKeyDown: handleKeyDown,
            style: t13,
            children: [
                t15,
                t20,
                t21,
                t22,
                t30,
                t31,
                t32
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/BeforeAfterSlider.tsx",
            lineNumber: 282,
            columnNumber: 11
        }, this);
        $[43] = handlePointerMove;
        $[44] = t10;
        $[45] = t11;
        $[46] = t13;
        $[47] = t15;
        $[48] = t20;
        $[49] = t21;
        $[50] = t22;
        $[51] = t30;
        $[52] = t33;
    } else {
        t33 = $[52];
    }
    return t33;
}
_s(BeforeAfterSlider, "29RvVKWw9lVtZVoivKMsR3x4U0k=");
_c = BeforeAfterSlider;
function _BeforeAfterSliderHandleKeyDownSetPosition2(p_0) {
    return Math.min(100, p_0 + 2);
}
function _BeforeAfterSliderHandleKeyDownSetPosition(p) {
    return Math.max(0, p - 2);
}
var _c;
__turbopack_context__.k.register(_c, "BeforeAfterSlider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_49aa3ffb._.js.map