module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/lib/business.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "business",
    ()=>business,
    "formatFullAddress",
    ()=>formatFullAddress,
    "smsHref",
    ()=>smsHref,
    "telHref",
    ()=>telHref
]);
const business = {
    name: 'Monroe County Phone Repair',
    phoneDisplay: '734-731-9094',
    phoneE164: '+17347319094',
    addressLine1: '1017 Rambow Dr',
    city: 'Monroe',
    region: 'MI',
    postalCode: '48161',
    country: 'US',
    // Tap/click directions link (great for buttons)
    googleMapsUrl: 'https://maps.app.goo.gl/nDXMkVv6LFCopP487',
    // Official Google embed URL (for iframes)
    googleMapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5937.879212362234!2d-83.431941!3d41.915657!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883b65cd10252c3d%3A0x4fe27fa9f06abdef!2sMonroe%20County%20Phone%20Repair!5e0!3m2!1sen!2sus!4v1769021555451!5m2!1sen!2sus',
    hoursNote: 'By appointment. Call or text to schedule.',
    serviceAreaShort: 'Monroe, MI and surrounding areas',
    smsMessageTemplate: 'Hi! I need help with a repair. My device is: '
};
function formatFullAddress() {
    return `${business.addressLine1}, ${business.city}, ${business.region} ${business.postalCode}`;
}
function telHref() {
    return `tel:${business.phoneE164}`;
}
function smsHref(prefill) {
    const body = encodeURIComponent(prefill ?? business.smsMessageTemplate);
    // iOS supports sms:+1...&body= ; Android varies. This is generally OK.
    return `sms:${business.phoneE164}?&body=${body}`;
}
}),
"[project]/app/reviews/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ReviewsPage,
    "metadata",
    ()=>metadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$business$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/business.ts [app-rsc] (ecmascript)");
;
;
const metadata = {
    title: 'Reviews',
    description: 'Customer reviews for Monroe County Phone Repair in Monroe, MI.'
};
function ReviewsPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-5",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "h3 fw-bold mb-3",
                    children: "Reviews"
                }, void 0, false, {
                    fileName: "[project]/app/reviews/page.tsx",
                    lineNumber: 12,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-muted",
                    children: "Add a Google reviews embed or curated reviews here. Include a link to leave a review."
                }, void 0, false, {
                    fileName: "[project]/app/reviews/page.tsx",
                    lineNumber: 13,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    className: "btn btn-outline-dark",
                    href: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$business$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["business"].googleMapsUrl,
                    children: "View on Google Maps"
                }, void 0, false, {
                    fileName: "[project]/app/reviews/page.tsx",
                    lineNumber: 16,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/reviews/page.tsx",
            lineNumber: 11,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/reviews/page.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/reviews/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/reviews/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__557f60ee._.js.map