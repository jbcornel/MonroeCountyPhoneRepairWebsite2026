import nodemailer from 'nodemailer';

type SendLeadEmailArgs = {
  subject: string;
  html: string;
  replyTo?: string;
};

function mustGetEnv(name: string) {
  const v = process.env[name];
  if (!v) throw new Error(`Missing env var: ${name}`);
  return v;
}

export async function sendLeadEmail({ subject, html, replyTo }: SendLeadEmailArgs) {
  const host = mustGetEnv('SMTP_HOST');
  const port = Number(mustGetEnv('SMTP_PORT'));
  const secure = mustGetEnv('SMTP_SECURE') === 'true';
  const user = mustGetEnv('SMTP_USER');
  const pass = mustGetEnv('SMTP_PASS');
  const from = mustGetEnv('SMTP_FROM');
  const to = mustGetEnv('LEADS_TO_EMAIL');

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
  });

  // Optional: verify connection in dev
  // await transporter.verify();

  const info = await transporter.sendMail({
    from,
    to,
    subject,
    html,
    replyTo,
  });

  return info; // contains messageId, etc.
}
