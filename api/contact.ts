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

  if (!host || !user || !pass) {
    return res.status(500).json({ error: 'Mail service not configured' });
  }

  const transport = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });

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

  const autoReplyText =
    `Dear ${firstName},\n\n` +
    `Thank you for reaching out to Atlantis NDT. We have received your message and a member of our team will be in touch with you very soon.\n\n` +
    `If your matter is urgent, please call us directly at +1 (281) 840-8969.\n\n` +
    `Best regards,\n` +
    `Atlantis NDT Team\n` +
    `https://atlantisndt.com`;

  const autoReplyHtml =
    `<p>Dear ${escapeHtml(firstName)},</p>` +
    `<p>Thank you for reaching out to <strong>Atlantis NDT</strong>. We have received your message and a member of our team will be in touch with you very soon.</p>` +
    `<p>If your matter is urgent, please call us directly at <strong>+1 (281) 840-8969</strong>.</p>` +
    `<hr style="border:none;border-top:1px solid #e5e7eb;margin:20px 0">` +
    `<p style="color:#6b7280;font-size:13px">Atlantis NDT — Precision Through Innovation<br>` +
    `<a href="https://atlantisndt.com" style="color:#f59e0b">atlantisndt.com</a></p>`;

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

    // Auto-reply to the person who submitted the form
    await transport.sendMail({
      from: `"Atlantis NDT" <${fromAddress}>`,
      to: `"${firstName} ${lastName}" <${email}>`,
      subject: `We received your message — Atlantis NDT will be in touch soon`,
      text: autoReplyText,
      html: autoReplyHtml,
    });

    return res.status(200).json({ ok: true });
  } catch (err: any) {
    console.error('Contact form SMTP error:', err);
    return res.status(502).json({ error: 'Mail delivery failed' });
  }
}
