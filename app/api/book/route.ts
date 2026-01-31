import { NextResponse } from 'next/server';
import { sendLeadEmail } from '@/lib/mail';
import { isValidEmail, isValidPhone, safeTrim, safeEnum } from '@/lib/validators';
import { business, formatFullAddress } from '@/lib/business';

const CONTACT_METHODS = ['Text', 'Call', 'Email'] as const;
type ContactMethod = (typeof CONTACT_METHODS)[number];

export async function POST(req: Request) {
  try {
    const raw = await req.json().catch(() => ({}));

    // Honeypot (bots)
    const company = safeTrim(raw?.company, 200);
    if (company) {
      return NextResponse.json({ ok: true }); // silently accept
    }

    const name = safeTrim(raw?.name, 120);
    const preferredContact = safeEnum<ContactMethod>(raw?.preferredContact, CONTACT_METHODS, 'Text');

    const phone = safeTrim(raw?.phone, 40);
    const email = safeTrim(raw?.email, 200);

    const date = safeTrim(raw?.date, 60);
    const timeWindow = safeTrim(raw?.timeWindow, 60);
    const device = safeTrim(raw?.device, 120);
    const issue = safeTrim(raw?.issue, 200);
    const notes = safeTrim(raw?.notes, 2000);

    if (!name) {
      return NextResponse.json({ ok: false, error: 'Name is required.' }, { status: 400 });
    }

    if (!device) {
      return NextResponse.json({ ok: false, error: 'Device is required.' }, { status: 400 });
    }

    if (!issue) {
      return NextResponse.json({ ok: false, error: 'Issue is required.' }, { status: 400 });
    }

    // Contact rules
    if (preferredContact === 'Email') {
      if (!email || !isValidEmail(email)) {
        return NextResponse.json({ ok: false, error: 'A valid email is required when preferred contact is Email.' }, { status: 400 });
      }
    } else {
      if (!phone || !isValidPhone(phone)) {
        return NextResponse.json({ ok: false, error: 'A valid phone number is required when preferred contact is Call/Text.' }, { status: 400 });
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
          Business: ${escapeHtml(business.name)} — ${escapeHtml(formatFullAddress())}
        </p>
      </div>
    `;

    const replyTo = preferredContact === 'Email' && email ? email : undefined;

    await sendLeadEmail({ subject, html, replyTo });

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    return NextResponse.json(
      { ok: false, error: err?.message || 'Server error.' },
      { status: 500 }
    );
  }
}

function escapeHtml(input: string) {
  return input
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}
