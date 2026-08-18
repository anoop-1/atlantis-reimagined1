#!/usr/bin/env node
/**
 * Weekly KPI scorecard — the 90-day plan's instrument panel.
 * ─────────────────────────────────────────────────────────────────────────────
 * Built 2026-08-18 to replace eyeballing the Search Console overview chart,
 * which is what produced two false alarms in a single day:
 *
 *   - The overview chart's right edge always collapses, because Google reports
 *     on a 2-3 day lag. It is not a traffic drop. This script never reads the
 *     last 3 days.
 *   - GA4 totals include a paid-search channel that went 10,276 sessions in
 *     July to 138 in August. Reading "sessions" as "traffic" turns that into a
 *     phantom crash. This script reports ORGANIC ONLY, and reports paid
 *     separately so it can never contaminate the trend again.
 *
 * It also tracks the four numbers the 90-day plan actually turns on, none of
 * which appear in any default report:
 *
 *   1. Top-3 presence      — queries at position <= 3.5. Was 39. The ceiling
 *                            on everything else: only 0.3% of impressions.
 *   2. Position 6-8 mass   — 68,343 impressions parked one page from the money.
 *                            Moving this block is worth ~+2,905 clicks/month.
 *   3. Sitewide CTR        — 1.40%, suppressed 4-6x at every band. The
 *                            multiplier on every volume forecast.
 *   4. Bot-suspect share   — direct sessions under 20s, which inflated August
 *                            by ~5,330 sessions and flatter every ratio.
 *
 *   node scripts/kpi-weekly.mjs
 *   node scripts/kpi-weekly.mjs --weeks 4
 */
import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { createSign } from 'crypto';

const __dirname = dirname(fileURLToPath(import.meta.url));
const C = JSON.parse(readFileSync(join(__dirname, 'gsc-service-account.json'), 'utf-8'));
const SITE = 'https://atlantisndt.com';
const GA4 = '517088706';

const args = process.argv.slice(2);
const WEEKS = args.includes('--weeks') ? parseInt(args[args.indexOf('--weeks') + 1], 10) : 2;

async function token(scope) {
  const now = Math.floor(Date.now() / 1000);
  const enc = o => Buffer.from(JSON.stringify(o)).toString('base64url');
  const u = `${enc({ alg: 'RS256', typ: 'JWT' })}.${enc({ iss: C.client_email, scope, aud: 'https://oauth2.googleapis.com/token', exp: now + 3600, iat: now })}`;
  const s = createSign('RSA-SHA256'); s.update(u);
  const r = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer&assertion=${u}.${s.sign(C.private_key, 'base64url')}`,
  });
  return (await r.json()).access_token;
}

const tk = await token('https://www.googleapis.com/auth/webmasters.readonly');
async function gsc(body) {
  for (let i = 0; i < 4; i++) {
    const r = await fetch(`https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(SITE)}/searchAnalytics/query`, {
      method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${tk}` },
      body: JSON.stringify({ type: 'web', rowLimit: 25000, ...body }),
    });
    if (r.ok) return (await r.json()).rows || [];
    if (r.status === 429 || r.status >= 500) { await new Promise(x => setTimeout(x, 1500 * (i + 1))); continue; }
    throw new Error(`${r.status} ${(await r.text()).slice(0, 200)}`);
  }
  throw new Error('gsc retries exhausted');
}

// Never read inside the reporting lag.
const iso = d => d.toISOString().split('T')[0];
const shift = (d, n) => { const x = new Date(d); x.setDate(x.getDate() + n); return x; };
const END = shift(new Date(), -3);

function window_(weeksBack) {
  const end = shift(END, -7 * weeksBack);
  return { start: iso(shift(end, -6)), end: iso(end) };
}

const cty = v => ({ filters: [{ dimension: 'country', operator: 'equals', expression: v }] });
const pgc = v => ({ filters: [{ dimension: 'page', operator: 'contains', expression: v }] });

const SEGMENTS = {
  Training: 'training',
  Consulting: 'consult',
  'Digital Twins': 'digital-twin',
  ERP: 'ndt-erp',
  Reporting: 'reporting-software',
};

const pct = (a, b) => (b ? `${a - b >= 0 ? '+' : ''}${(((a - b) / b) * 100).toFixed(0)}%` : ' n/a');
const agg = async (w, groups) => {
  const r = await gsc({ startDate: w.start, endDate: w.end, ...(groups ? { dimensionFilterGroups: groups } : {}) });
  return { c: r[0]?.clicks ?? 0, i: r[0]?.impressions ?? 0, p: +(r[0]?.position ?? 0).toFixed(1) };
};

const wNow = window_(0), wPrev = window_(1);
console.log(`\n╔═══ WEEKLY KPI SCORECARD — atlantisndt.com ═══╗`);
console.log(`  this week ${wNow.start} .. ${wNow.end}   (ends 3 days back — the lag is excluded on purpose)`);
console.log(`  vs        ${wPrev.start} .. ${wPrev.end}\n`);

// ── 1. Headline, organic search only ─────────────────────────────────────────
const [a, b] = [await agg(wNow), await agg(wPrev)];
const [ua, ub] = [await agg(wNow, [cty('usa')]), await agg(wPrev, [cty('usa')])];
const ctr = x => (x.i ? (x.c / x.i * 100) : 0);
console.log('── SEARCH (Google organic) ──');
console.log(`  clicks        ${String(a.c).padStart(6)}  vs ${String(b.c).padStart(6)}   ${pct(a.c, b.c)}`);
console.log(`  impressions   ${String(a.i).padStart(6)}  vs ${String(b.i).padStart(6)}   ${pct(a.i, b.i)}`);
console.log(`  CTR            ${ctr(a).toFixed(2)}%  vs  ${ctr(b).toFixed(2)}%`);
console.log(`  avg position   ${String(a.p).padStart(5)}  vs  ${String(b.p).padStart(5)}`);
console.log(`  US clicks     ${String(ua.c).padStart(6)}  vs ${String(ub.c).padStart(6)}   ${pct(ua.c, ub.c)}   [US is the only paying market]`);
console.log(`  US impr       ${String(ua.i).padStart(6)}  vs ${String(ub.i).padStart(6)}   ${pct(ua.i, ub.i)}`);

// ── 2. The four plan levers ──────────────────────────────────────────────────
const qNow = await gsc({ startDate: wNow.start, endDate: wNow.end, dimensions: ['query'] });
const qPrev = await gsc({ startDate: wPrev.start, endDate: wPrev.end, dimensions: ['query'] });
const top3 = rows => rows.filter(r => r.position <= 3.5 && r.impressions >= 20).length;
const band = (rows, lo, hi) => rows.filter(r => r.position >= lo && r.position <= hi).reduce((s, r) => s + r.impressions, 0);

console.log('\n── PLAN LEVERS (these decide whether 30k is reachable) ──');
console.log(`  1. queries at pos <=3.5     ${String(top3(qNow)).padStart(5)}  vs ${String(top3(qPrev)).padStart(5)}   ${pct(top3(qNow), top3(qPrev))}   [target: up and to the right, every week]`);
console.log(`  2. impressions at pos 6-8   ${String(band(qNow, 6, 8)).padStart(5)}  vs ${String(band(qPrev, 6, 8)).padStart(5)}          [the block to promote into the top 3]`);
console.log(`  3. impressions at pos 4-5   ${String(band(qNow, 4, 5)).padStart(5)}  vs ${String(band(qPrev, 4, 5)).padStart(5)}          [the staging area — growth here precedes lever 1]`);
console.log(`  4. sitewide CTR              ${ctr(a).toFixed(2)}%  vs  ${ctr(b).toFixed(2)}%          [1.40% baseline; 4-6x below normal at every band]`);

// ── 3. Segments — the owner requires all four to move together ───────────────
console.log('\n── SEGMENTS (clicks / impressions / avg pos) ──');
for (const [name, needle] of Object.entries(SEGMENTS)) {
  const [sa, sb] = [await agg(wNow, [pgc(needle)]), await agg(wPrev, [pgc(needle)])];
  const su = await agg(wNow, [cty('usa'), pgc(needle)]);
  console.log(`  ${name.padEnd(14)} ${String(sa.c).padStart(4)}c ${String(sa.i).padStart(6)}i p${String(sa.p).padStart(5)}   (was ${String(sb.c).padStart(4)}c ${String(sb.i).padStart(6)}i)  ${pct(sa.c, sb.c).padStart(5)}   US ${String(su.c).padStart(3)}c/${String(su.i).padStart(5)}i`);
}

// ── 4. GA4 — organic isolated, paid and bots quarantined ─────────────────────
try {
  const gtk = await token('https://www.googleapis.com/auth/analytics.readonly');
  const ga4 = async body => {
    const r = await fetch(`https://analyticsdata.googleapis.com/v1beta/properties/${GA4}:runReport`, {
      method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${gtk}` }, body: JSON.stringify(body),
    });
    if (!r.ok) throw new Error(`${r.status} ${(await r.text()).slice(0, 200)}`);
    return (await r.json()).rows || [];
  };
  const chan = await ga4({
    dateRanges: [{ startDate: wNow.start, endDate: wNow.end }, { startDate: wPrev.start, endDate: wPrev.end }],
    dimensions: [{ name: 'sessionDefaultChannelGroup' }],
    metrics: [{ name: 'sessions' }, { name: 'engagementRate' }, { name: 'averageSessionDuration' }],
  });
  const byChan = {};
  for (const r of chan) {
    const k = r.dimensionValues[0].value;
    byChan[k] ??= [];
    byChan[k].push({ s: +r.metricValues[0].value, e: +r.metricValues[1].value, d: +r.metricValues[2].value });
  }
  console.log('\n── GA4 BY CHANNEL (paid shown separately so it can never contaminate the organic trend) ──');
  for (const [k, v] of Object.entries(byChan).sort((x, y) => (y[1][0]?.s || 0) - (x[1][0]?.s || 0))) {
    const now = v[0] || { s: 0, e: 0, d: 0 }, prev = v[1] || { s: 0 };
    const flag = /Paid|Cross-network/.test(k) ? '  ← EXCLUDED from organic KPIs'
      : (k === 'Direct' && now.d < 20 && now.s > 200) ? '  ← BOT-SUSPECT: high volume, sub-20s sessions'
      : '';
    console.log(`  ${k.padEnd(20)} ${String(now.s).padStart(6)} sess  vs ${String(prev.s).padStart(6)}  ${pct(now.s, prev.s).padStart(6)}  eng ${(now.e * 100).toFixed(0).padStart(3)}%  ${now.d.toFixed(0).padStart(4)}s${flag}`);
  }
  const org = byChan['Organic Search']?.[0]?.s ?? 0;
  const orgPrev = byChan['Organic Search']?.[1]?.s ?? 0;
  console.log(`\n  ORGANIC SESSIONS (the number to report): ${org} vs ${orgPrev}  ${pct(org, orgPrev)}`);
  console.log(`  Note: GA4 organic exceeds GSC clicks because it includes Bing, Yahoo and DuckDuckGo.`);

  // Lead funnel — only meaningful over a window where all events existed (>= 2026-08-07).
  const ev = await ga4({
    dateRanges: [{ startDate: wNow.start < '2026-08-07' ? '2026-08-07' : wNow.start, endDate: wNow.end }],
    dimensions: [{ name: 'eventName' }], metrics: [{ name: 'eventCount' }], limit: 200,
  });
  const em = Object.fromEntries(ev.map(r => [r.dimensionValues[0].value, +r.metricValues[0].value]));
  console.log('\n── LEAD FUNNEL ──');
  const steps = [
    ['demo CTA clicked', 'erp_demo_request_click'],
    ['reached the form', 'contact_form_reached'],
    ['started the form', 'form_start'],
    ['lead recorded', 'generate_lead'],
    ['submitted', 'atlantis_form_submit'],
  ];
  let prevN = null;
  for (const [label, name] of steps) {
    const n = em[name] ?? 0;
    const surv = prevN === null ? '' : (prevN ? `  ${((n / prevN) * 100).toFixed(0)}% survives` : '');
    console.log(`  ${label.padEnd(20)} ${String(n).padStart(5)}${surv}`);
    prevN = n;
  }
  console.log('  Compare only events that existed for the whole window — see memory: ga4-event-lifespan-trap.');
} catch (e) {
  console.log('\n  GA4 section unavailable:', e.message.slice(0, 160));
}

console.log('\n── TARGET ──');
console.log(`  30,000 clicks/month = ~6,900/week. This week: ${a.c}. Gap: ${Math.max(0, 6900 - a.c).toLocaleString()}/week.`);
console.log(`  At 1.40% CTR that needs ~2.1M impressions/month vs ~160k today, so the`);
console.log(`  route runs through levers 1 and 4 above, not through publishing volume.\n`);

writeFileSync(join(__dirname, 'kpi-weekly-latest.json'), JSON.stringify({
  generated: new Date().toISOString(), windows: { now: wNow, prev: wPrev },
  search: { now: a, prev: b, us: { now: ua, prev: ub } },
  levers: { top3Now: top3(qNow), top3Prev: top3(qPrev), band68Now: band(qNow, 6, 8), band45Now: band(qNow, 4, 5) },
}, null, 2));
