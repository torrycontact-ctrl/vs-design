(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
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
]);

//# sourceMappingURL=src_components_RevealOnScroll_tsx_2ccb723e._.js.map