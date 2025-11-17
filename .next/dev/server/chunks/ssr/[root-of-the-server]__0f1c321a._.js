module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/app/houses/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Houses
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
function Houses() {
    const houses = [
        {
            name: "Flame House",
            img: "/flame.png",
            bg: "/flame-bg.jpg",
            text: "The Flame House represents passion, courage, and transformation. Members are known for their fiery determination and ability to overcome any obstacle through sheer willpower and creative problem-solving."
        },
        {
            name: "Void House",
            img: "/void.png",
            bg: "/void-bg.jpg",
            text: "The Void House embodies mystery, adaptability, and infinite potential. These enigmatic warriors draw power from the unknown, using shadows and illusions to outmaneuver their enemies in battle."
        },
        {
            name: "Sage House",
            img: "/sage.png",
            bg: "/sage-bg.jpg",
            text: "The Sage House is the pinnacle of wisdom, strategy, and ancient knowledge. Their members are master tacticians who combine deep understanding of the game mechanics with unparalleled strategic thinking."
        },
        {
            name: "Frost House",
            img: "/frost.png",
            bg: "/frost-bg.jpg",
            text: "The Frost House symbolizes precision, patience, and unyielding resolve. Like a glacier carving through stone, Frost warriors methodically dismantle their opponents with calculated strikes and defensive mastery."
        },
        {
            name: "Lotus House",
            img: "/lotus.png",
            bg: "/lotus-bg.jpg",
            text: "The Lotus House represents harmony, balance, and spiritual enlightenment. Their approach combines offensive and defensive techniques in perfect equilibrium, creating a fluid and unpredictable fighting style."
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-background flex flex-col items-center justify-center p-12",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex gap-8 w-full max-w-7xl justify-center",
            children: houses.map((house, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: " group  flex flex-col items-center  bg-cover bg-center relative  p-6 rounded-2xl cursor-pointer transition-all duration-500 ease-out w-48 hover:w-[450px]  min-h-[420px] shadow-lg hover:shadow-2xl ",
                    style: {
                        backgroundImage: `url(${house.bg})`
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 bg-black/60 rounded-2xl"
                        }, void 0, false, {
                            fileName: "[project]/app/houses/page.tsx",
                            lineNumber: 55,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative z-10 flex flex-col items-center text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: house.img,
                                    className: "w-32 h-32 mb-4 drop-shadow-lg"
                                }, void 0, false, {
                                    fileName: "[project]/app/houses/page.tsx",
                                    lineNumber: 58,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-3xl font-bold text-white mb-4 drop-shadow-md",
                                    children: house.name
                                }, void 0, false, {
                                    fileName: "[project]/app/houses/page.tsx",
                                    lineNumber: 60,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: " text-white text-base leading-relaxed  opacity-0 max-h-0  group-hover:opacity-100 group-hover:max-h-[300px]  overflow-hidden transition-all duration-700 ",
                                    children: house.text
                                }, void 0, false, {
                                    fileName: "[project]/app/houses/page.tsx",
                                    lineNumber: 65,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/houses/page.tsx",
                            lineNumber: 57,
                            columnNumber: 13
                        }, this)
                    ]
                }, i, true, {
                    fileName: "[project]/app/houses/page.tsx",
                    lineNumber: 40,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/app/houses/page.tsx",
            lineNumber: 38,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/houses/page.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/houses/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/houses/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0f1c321a._.js.map