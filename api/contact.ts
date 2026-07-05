import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

const escapeHtml = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const {
    firstName = '',
    lastName = '',
    email = '',
    phone = '',
    company = '',
    service = '',
    message = '',
    website = '',
  } = (req.body ?? {}) as Record<string, string>;

  if (website) return res.status(200).json({ ok: true });

  if (!firstName.trim() || !lastName.trim() || !email.trim() || !message.trim()) {
    return res.status(400).json({ error: 'Missing required fields' });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 200) {
    return res.status(400).json({ error: 'Invalid email' });
  }
  if (message.length > 5000) {
    return res.status(400).json({ error: 'Message too long' });
  }

  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || 465);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const to = process.env.CONTACT_TO || 'info@atlantisndt.com';
  // info@atlantisndt.com is forwarded on VPS to anoop@atlantisinspection.com
  const fromAddress = process.env.CONTACT_FROM || 'info@atlantisndt.com';

  if (!host) {
    return res.status(500).json({ error: 'Mail service not configured' });
  }

  // Allow unauthenticated SMTP (e.g. local MTA on 127.0.0.1:25).
  const transportOptions: any = {
    host,
    port,
    secure: port === 465,
  };
  if (user && pass) transportOptions.auth = { user, pass };

  const transport = nodemailer.createTransport(transportOptions);

  const subject = `Contact form: ${firstName} ${lastName}${service ? ` — ${service}` : ''}`;
  const text =
    `New contact form submission from atlantisndt.com\n\n` +
    `Name: ${firstName} ${lastName}\n` +
    `Email: ${email}\n` +
    `Phone: ${phone || '(not provided)'}\n` +
    `Company: ${company || '(not provided)'}\n` +
    `Service: ${service || '(not selected)'}\n\n` +
    `Message:\n${message}\n`;
  const html =
    `<h2>New contact form submission — atlantisndt.com</h2>` +
    `<table style="border-collapse:collapse">` +
    `<tr><td><b>Name</b></td><td>${escapeHtml(`${firstName} ${lastName}`)}</td></tr>` +
    `<tr><td><b>Email</b></td><td>${escapeHtml(email)}</td></tr>` +
    `<tr><td><b>Phone</b></td><td>${escapeHtml(phone || '(not provided)')}</td></tr>` +
    `<tr><td><b>Company</b></td><td>${escapeHtml(company || '(not provided)')}</td></tr>` +
    `<tr><td><b>Service</b></td><td>${escapeHtml(service || '(not selected)')}</td></tr>` +
    `</table>` +
    `<h3>Message</h3><p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>`;

  try {
    // Notify Atlantis NDT team (VPS forwards info@ to anoop@atlantisinspection.com)
    await transport.sendMail({
      from: `"Atlantis NDT Contact" <${fromAddress}>`,
      to,
      replyTo: `"${firstName} ${lastName}" <${email}>`,
      subject,
      text,
      html,
    });

    return res.status(200).json({ ok: true });
  } catch (err: any) {
    console.error('Contact form SMTP error:', err);

    // Attempt EmailJS fallback (server-side) if SMTP failed.
    const emailjsService = process.env.EMAILJS_SERVICE_ID || process.env.VITE_EMAILJS_SERVICE_ID;
    const emailjsTemplate = process.env.EMAILJS_TEMPLATE_ID || process.env.VITE_EMAILJS_TEMPLATE_ID;
    const emailjsUser = process.env.EMAILJS_PUBLIC_KEY || process.env.VITE_EMAILJS_PUBLIC_KEY;

    if (emailjsService && emailjsTemplate && emailjsUser) {
      try {
        const payload = {
          service_id: emailjsService,
          template_id: emailjsTemplate,
          user_id: emailjsUser,
          template_params: {
            from_name: `${firstName} ${lastName}`,
            from_email: email,
            phone: phone || '(not provided)',
            company: company || '(not provided)',
            service: service || '(not selected)',
            message,
            subject,
            to_email: to,
          },
        };

        const r = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });

        if (r.ok) {
          console.info('Contact form delivered via EmailJS fallback');
          return res.status(200).json({ ok: true, fallback: 'emailjs' });
        }

        const textErr = await r.text().catch(() => 'unknown');
        console.error('EmailJS fallback failed:', r.status, textErr);
      } catch (ejErr: any) {
        console.error('EmailJS fallback exception:', ejErr);
      }
    }

    // Temporary: return SMTP error message for debugging deployment issues.
    const reason = err && (err.message || JSON.stringify(err)) ? (err.message || JSON.stringify(err)) : 'unknown';
    return res.status(502).json({ error: 'Mail delivery failed', reason });
  }
}
