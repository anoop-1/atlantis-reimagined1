/**
 * Tiny Telegram helper for SEO automation alerts.
 *
 * Bot: Atlantis ops alert bot
 * Token + chat ID hard-coded per project conventions (token is local-only,
 * documented in e:\software\CLAUDE.md). If you ever need to override, set
 * env vars TELEGRAM_BOT_TOKEN / TELEGRAM_CHAT_ID and they take precedence.
 *
 * Usage:
 *   import { sendTelegram } from './lib/telegram.mjs';
 *   await sendTelegram('*Daily SEO* — clicks +12% vs yesterday');
 *
 * Telegram limit: 4096 chars per message. Helper truncates safely.
 */

const DEFAULT_TOKEN = '8756264302:AAHz-N5BUfEmktnBzL2LSuAoB3TkwPyM8C0';
const DEFAULT_CHAT = '1712773246';
const MAX_LEN = 4090; // leave a few chars for the truncate marker

export async function sendTelegram(text, opts = {}) {
  const TOKEN = opts.token || process.env.TELEGRAM_BOT_TOKEN || DEFAULT_TOKEN;
  const CHAT = opts.chatId || process.env.TELEGRAM_CHAT_ID || DEFAULT_CHAT;
  const parseMode = opts.parseMode === undefined ? 'Markdown' : opts.parseMode;

  let body = String(text == null ? '' : text);
  if (body.length > MAX_LEN) {
    body = body.slice(0, MAX_LEN) + '\n…[truncated]';
  }

  const url = `https://api.telegram.org/bot${TOKEN}/sendMessage`;
  const payload = { chat_id: CHAT, text: body };
  if (parseMode) payload.parse_mode = parseMode;

  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    const json = await res.json().catch(() => ({}));
    return { ok: res.ok && json.ok !== false, status: res.status, response: json };
  } catch (err) {
    return { ok: false, status: 0, error: err.message };
  }
}

export default { sendTelegram };
