module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/node:crypto [external] (node:crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:crypto", () => require("node:crypto"));

module.exports = mod;
}),
"[project]/lib/mail.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "sendLeadEmail",
    ()=>sendLeadEmail
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$resend$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/resend/dist/index.mjs [app-route] (ecmascript)");
;
const resend = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$resend$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Resend"](process.env.RESEND_API_KEY);
async function sendLeadEmail(params) {
    const to = process.env.LEADS_TO_EMAIL;
    const from = process.env.LEADS_FROM_EMAIL;
    if (!process.env.RESEND_API_KEY) throw new Error('Missing RESEND_API_KEY');
    if (!to) throw new Error('Missing LEADS_TO_EMAIL');
    if (!from) throw new Error('Missing LEADS_FROM_EMAIL');
    return resend.emails.send({
        from,
        to,
        subject: params.subject,
        html: params.html,
        replyTo: params.replyTo
    });
}
}),
"[project]/lib/validators.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isValidEmail",
    ()=>isValidEmail,
    "isValidPhone",
    ()=>isValidPhone,
    "safeEnum",
    ()=>safeEnum,
    "safeTrim",
    ()=>safeTrim
]);
function isValidPhone(input) {
    const digits = input.replace(/\D/g, '');
    return digits.length >= 10 && digits.length <= 15;
}
function isValidEmail(input) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.trim());
}
function safeTrim(input, max = 5000) {
    const s = typeof input === 'string' ? input : '';
    return s.trim().slice(0, max);
}
function safeEnum(input, allowed, fallback) {
    const v = typeof input === 'string' ? input : fallback;
    return allowed.includes(v) ? v : fallback;
}
}),
"[project]/lib/business.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
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
    googleMapsUrl: 'https://maps.app.goo.gl/nDXMkVv6LFCopP487',
    googleMapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5937.879212362234!2d-83.431941!3d41.915657!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883b65cd10252c3d%3A0x4fe27fa9f06abdef!2sMonroe%20County%20Phone%20Repair!5e0!3m2!1sen!2sus!4v1769021555451!5m2!1sen!2sus',
    hoursNote: 'By appointment. Call or text to schedule.',
    serviceAreaShort: 'Monroe, MI and surrounding areas',
    social: {
        facebook: 'https://www.facebook.com/monroecountycellphonerepair',
        instagram: 'https://www.instagram.com/monroecountyphonerepair'
    }
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
"[project]/app/api/book/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mail$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/mail.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$validators$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/validators.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$business$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/business.ts [app-route] (ecmascript)");
;
;
;
;
const CONTACT_METHODS = [
    'Text',
    'Call',
    'Email'
];
async function POST(req) {
    try {
        const raw = await req.json().catch(()=>({}));
        // Honeypot (bots)
        const company = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$validators$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["safeTrim"])(raw?.company, 200);
        if (company) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                ok: true
            }); // silently accept
        }
        const name = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$validators$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["safeTrim"])(raw?.name, 120);
        const preferredContact = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$validators$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["safeEnum"])(raw?.preferredContact, CONTACT_METHODS, 'Text');
        const phone = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$validators$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["safeTrim"])(raw?.phone, 40);
        const email = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$validators$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["safeTrim"])(raw?.email, 200);
        const date = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$validators$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["safeTrim"])(raw?.date, 60);
        const timeWindow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$validators$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["safeTrim"])(raw?.timeWindow, 60);
        const device = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$validators$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["safeTrim"])(raw?.device, 120);
        const issue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$validators$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["safeTrim"])(raw?.issue, 200);
        const notes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$validators$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["safeTrim"])(raw?.notes, 2000);
        if (!name) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                ok: false,
                error: 'Name is required.'
            }, {
                status: 400
            });
        }
        if (!device) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                ok: false,
                error: 'Device is required.'
            }, {
                status: 400
            });
        }
        if (!issue) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                ok: false,
                error: 'Issue is required.'
            }, {
                status: 400
            });
        }
        // Contact rules
        if (preferredContact === 'Email') {
            if (!email || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$validators$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isValidEmail"])(email)) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    ok: false,
                    error: 'A valid email is required when preferred contact is Email.'
                }, {
                    status: 400
                });
            }
        } else {
            if (!phone || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$validators$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isValidPhone"])(phone)) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    ok: false,
                    error: 'A valid phone number is required when preferred contact is Call/Text.'
                }, {
                    status: 400
                });
            }
        }
        const subject = `Booking Request — ${device}`;
        const html = `
      <div style="font-family:Arial,sans-serif;line-height:1.4">
        <h2 style="margin:0 0 12px 0;">New Booking Request</h2>

        <table cellpadding="6" cellspacing="0" border="0" style="border-collapse:collapse;">
          <tr><td><b>Name</b></td><td>${escapeHtml(name)}</td></tr>
          <tr><td><b>Preferred Contact</b></td><td>${escapeHtml(preferredContact)}</td></tr>
          <tr><td><b>Phone</b></td><td>${escapeHtml(phone || '(not provided)')}</td></tr>
          <tr><td><b>Email</b></td><td>${escapeHtml(email || '(not provided)')}</td></tr>
          <tr><td><b>Preferred Date</b></td><td>${escapeHtml(date || '(not provided)')}</td></tr>
          <tr><td><b>Time Window</b></td><td>${escapeHtml(timeWindow || '(not provided)')}</td></tr>
          <tr><td><b>Device</b></td><td>${escapeHtml(device)}</td></tr>
          <tr><td><b>Issue</b></td><td>${escapeHtml(issue)}</td></tr>
        </table>

        <h3 style="margin:16px 0 6px 0;">Notes</h3>
        <div style="white-space:pre-wrap;border:1px solid #ddd;padding:10px;border-radius:6px;">
          ${escapeHtml(notes || '(none)')}
        </div>

        <p style="margin-top:16px;color:#555">
          Business: ${escapeHtml(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$business$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["business"].name)} — ${escapeHtml((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$business$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatFullAddress"])())}
        </p>
      </div>
    `;
        const replyTo = preferredContact === 'Email' && email ? email : undefined;
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mail$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sendLeadEmail"])({
            subject,
            html,
            replyTo
        });
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            ok: true
        });
    } catch (err) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            ok: false,
            error: err?.message || 'Server error.'
        }, {
            status: 500
        });
    }
}
function escapeHtml(input) {
    return input.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&#039;');
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__01a33c47._.js.map