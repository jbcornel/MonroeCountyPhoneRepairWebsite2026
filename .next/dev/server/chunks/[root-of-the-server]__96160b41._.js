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
"[project]/app/api/quote/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST,
    "runtime",
    ()=>runtime
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mail$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/mail.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$business$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/business.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$validators$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/validators.ts [app-route] (ecmascript)");
;
;
;
;
const runtime = 'nodejs';
const preferredContactOptions = [
    'call',
    'text',
    'email'
];
async function POST(req) {
    try {
        const body = await req.json().catch(()=>({}));
        // Honeypot: include an invisible input named "website" in your form.
        // If it’s filled, treat as bot and return OK without sending.
        const honeypot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$validators$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["safeTrim"])(body.website, 200);
        if (honeypot) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            ok: true
        }, {
            status: 200
        });
        const name = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$validators$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["safeTrim"])(body.name, 120);
        const phone = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$validators$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["safeTrim"])(body.phone, 30);
        const email = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$validators$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["safeTrim"])(body.email, 200);
        const device = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$validators$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["safeTrim"])(body.device, 120);
        const issue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$validators$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["safeTrim"])(body.issue, 2000);
        const preferredContact = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$validators$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["safeEnum"])(body.preferredContact, preferredContactOptions, 'text');
        // Required fields
        if (!name) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Name is required.'
        }, {
            status: 400
        });
        if (!phone) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Phone is required.'
        }, {
            status: 400
        });
        if (!device) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Device is required.'
        }, {
            status: 400
        });
        if (!issue) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Issue is required.'
        }, {
            status: 400
        });
        // Validate phone/email if provided
        if (phone && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$validators$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isValidPhone"])(phone)) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Invalid phone number.'
            }, {
                status: 400
            });
        }
        if (email && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$validators$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isValidEmail"])(email)) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Invalid email address.'
            }, {
                status: 400
            });
        }
        const subject = `New Quote Request — ${device} (${name})`;
        const html = `
      <div style="font-family: Arial, sans-serif; line-height: 1.4;">
        <h2 style="margin:0 0 12px 0;">New Quote Request</h2>

        <table cellpadding="0" cellspacing="0" style="border-collapse: collapse;">
          <tr><td style="padding:4px 12px 4px 0;"><b>Name:</b></td><td>${esc(name)}</td></tr>
          <tr><td style="padding:4px 12px 4px 0;"><b>Phone:</b></td><td>${esc(phone)}</td></tr>
          <tr><td style="padding:4px 12px 4px 0;"><b>Email:</b></td><td>${esc(email || '(not provided)')}</td></tr>
          <tr><td style="padding:4px 12px 4px 0;"><b>Device:</b></td><td>${esc(device)}</td></tr>
          <tr><td style="padding:4px 12px 4px 0;"><b>Preferred contact:</b></td><td>${esc(preferredContact)}</td></tr>
        </table>

        <div style="margin-top:12px;">
          <b>Issue details:</b>
          <div style="margin-top:6px; padding:10px; background:#f6f7f8; border:1px solid #e6e6e6; border-radius:8px;">
            ${esc(issue).replace(/\n/g, '<br/>')}
          </div>
        </div>

        <hr style="margin:16px 0; border:none; border-top:1px solid #e6e6e6;" />

        <div style="color:#555; font-size: 12px;">
          Sent from <b>${esc(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$business$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["business"].name)}</b><br/>
          ${esc((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$business$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatFullAddress"])())}<br/>
          ${esc(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$business$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["business"].phoneDisplay)}
        </div>
      </div>
    `;
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mail$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sendLeadEmail"])({
            subject,
            html,
            replyTo: email || undefined
        });
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            ok: true
        }, {
            status: 200
        });
    } catch (err) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: err?.message || 'Failed to submit quote request.'
        }, {
            status: 500
        });
    }
}
function esc(s) {
    return s.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&#039;');
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__96160b41._.js.map