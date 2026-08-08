import type { VercelRequest, VercelResponse } from '@vercel/node';
import Stripe from 'stripe';

// Needed so we can verify the Stripe signature against the exact raw bytes
// Stripe signed — a parsed/re-serialized body will not match the signature.
export const config = {
  api: { bodyParser: false },
};

// Level I / Level II eLearning channel ids in Odoo (slide.channel), created
// 2026-08-08 by duplicating the 5 existing Level II courses. Order: RT, UT,
// MT, PT, VT — kept consistent across both levels for readability only, the
// enrollment loop does not care about order.
const LEVEL_CHANNEL_IDS: Record<'level_1' | 'level_2', number[]> = {
  level_1: [15, 16, 17, 18, 19], // RT, UT, MT, PT, VT — Level 1 (new)
  level_2: [2, 6, 1, 5, 13], // RT, UT, MT, PT, VT — Level 2 (existing)
};

async function readRawBody(req: VercelRequest): Promise<Buffer> {
  const chunks: Buffer[] = [];
  for await (const chunk of req) {
    chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk);
  }
  return Buffer.concat(chunks);
}

// ---- Odoo JSON-RPC (same auth pattern as Atlantis Marketing Agent's
// odoo_client.py) — a small inline client rather than a shared module,
// since this is the only place in this repo that talks to Odoo. ----
async function odooRpc(service: string, method: string, args: unknown[]) {
  const url = process.env.ODOO_URL;
  if (!url) throw new Error('ODOO_URL not configured');
  const res = await fetch(`${url}/jsonrpc`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      jsonrpc: '2.0',
      method: 'call',
      params: { service, method, args },
      id: Math.floor(Math.random() * 1e9),
    }),
  });
  const data = await res.json();
  if (data.error) {
    throw new Error(`Odoo RPC error: ${JSON.stringify(data.error?.data?.message || data.error)}`);
  }
  return data.result;
}

async function odooAuthenticate(): Promise<number> {
  const db = process.env.ODOO_DB;
  const login = process.env.ODOO_LOGIN;
  const apiKey = process.env.ODOO_API_KEY;
  if (!db || !login || !apiKey) {
    throw new Error('ODOO_DB / ODOO_LOGIN / ODOO_API_KEY not configured');
  }
  const uid = await odooRpc('common', 'authenticate', [db, login, apiKey, {}]);
  if (!uid) throw new Error('Odoo authentication failed — check ODOO_LOGIN/ODOO_API_KEY');
  return uid as number;
}

async function odooExecute(uid: number, model: string, method: string, args: unknown[], kwargs: Record<string, unknown> = {}) {
  const db = process.env.ODOO_DB;
  const apiKey = process.env.ODOO_API_KEY;
  return odooRpc('object', 'execute_kw', [db, uid, apiKey, model, method, args, kwargs]);
}

async function findOrCreatePartner(uid: number, email: string, name: string): Promise<number> {
  const existing = (await odooExecute(uid, 'res.partner', 'search_read', [[['email', '=', email]]], {
    fields: ['id'],
    limit: 1,
  })) as Array<{ id: number }>;
  if (existing.length) return existing[0].id;

  const newId = await odooExecute(uid, 'res.partner', 'create', [{ name: name || email, email }]);
  return newId as number;
}

async function enrollInChannels(uid: number, partnerId: number, channelIds: number[]): Promise<{ created: number[]; alreadyEnrolled: number[] }> {
  const created: number[] = [];
  const alreadyEnrolled: number[] = [];
  for (const channelId of channelIds) {
    const count = (await odooExecute(uid, 'slide.channel.partner', 'search_count', [
      [
        ['channel_id', '=', channelId],
        ['partner_id', '=', partnerId],
      ],
    ])) as number;
    if (count > 0) {
      alreadyEnrolled.push(channelId);
      continue;
    }
    await odooExecute(uid, 'slide.channel.partner', 'create', [{ channel_id: channelId, partner_id: partnerId }]);
    created.push(channelId);
  }
  return { created, alreadyEnrolled };
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
  const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
  if (!webhookSecret || !stripeSecretKey) {
    console.error('Stripe webhook received but STRIPE_WEBHOOK_SECRET/STRIPE_SECRET_KEY not configured yet.');
    return res.status(500).json({ error: 'Webhook not configured' });
  }

  const stripe = new Stripe(stripeSecretKey);

  let event: Stripe.Event;
  try {
    const rawBody = await readRawBody(req);
    const signature = req.headers['stripe-signature'];
    if (!signature || Array.isArray(signature)) {
      return res.status(400).json({ error: 'Missing Stripe-Signature header' });
    }
    event = stripe.webhooks.constructEvent(rawBody, signature, webhookSecret);
  } catch (err: any) {
    console.error('Stripe webhook signature verification failed:', err?.message || err);
    return res.status(400).json({ error: 'Invalid signature' });
  }

  // Only checkout completion enrolls someone. Everything else (invoice
  // renewals, subscription updates, etc.) is acknowledged but ignored here
  // — cron 60 in Odoo owns user creation/credential email; this endpoint's
  // only job is to create the slide.channel.partner enrollment rows once,
  // at initial purchase.
  if (event.type !== 'checkout.session.completed') {
    return res.status(200).json({ ok: true, ignored: event.type });
  }

  const session = event.data.object as Stripe.Checkout.Session;

  if (session.payment_status !== 'paid') {
    console.warn('checkout.session.completed with payment_status != paid, ignoring:', session.id, session.payment_status);
    return res.status(200).json({ ok: true, ignored: 'not_paid' });
  }

  const email = session.customer_details?.email;
  if (!email) {
    console.error('checkout.session.completed with no customer email, session:', session.id);
    return res.status(200).json({ ok: true, ignored: 'no_email' });
  }

  const bundleField = session.custom_fields?.find((f) => f.key === 'bundle_level');
  const bundleValue = bundleField?.dropdown?.value;

  if (bundleValue !== 'level_1' && bundleValue !== 'level_2') {
    // Loud, not silent — a paid customer with an unparseable bundle answer
    // needs a human, not a dropped webhook. Logged for the on-call/owner to
    // pick up; still returns 200 so Stripe doesn't retry-storm forever.
    console.error(
      `Stripe checkout ${session.id} (${email}) paid but had no valid bundle_level custom field (got: ${JSON.stringify(bundleField)}). Needs manual enrollment — contact info@atlantisndt.com flow.`
    );
    return res.status(200).json({ ok: true, ignored: 'no_bundle_selection', email });
  }

  const channelIds = LEVEL_CHANNEL_IDS[bundleValue];
  const name = session.customer_details?.name || email;

  try {
    const uid = await odooAuthenticate();
    const partnerId = await findOrCreatePartner(uid, email, name);
    const { created, alreadyEnrolled } = await enrollInChannels(uid, partnerId, channelIds);
    console.info(
      `Enrolled ${email} (partner ${partnerId}) in ${bundleValue}: created=${JSON.stringify(created)} alreadyEnrolled=${JSON.stringify(alreadyEnrolled)}`
    );
    return res.status(200).json({ ok: true, partnerId, bundle: bundleValue, created, alreadyEnrolled });
  } catch (err: any) {
    // Stripe will retry a 5xx — safe to do so here since enrollment is
    // idempotent (search_count check above), so a genuine transient Odoo
    // failure gets retried automatically instead of silently losing the
    // enrollment.
    console.error('Odoo enrollment failed for', email, bundleValue, err?.message || err);
    return res.status(502).json({ error: 'Enrollment failed, will retry' });
  }
}
