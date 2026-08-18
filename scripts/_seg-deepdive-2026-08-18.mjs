import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { createSign } from 'crypto';
const __dirname = dirname(fileURLToPath(import.meta.url));
const C = JSON.parse(readFileSync(join(__dirname, 'gsc-service-account.json'), 'utf-8'));
const SITE = 'https://atlantisndt.com';
const now = Math.floor(Date.now() / 1000);
const enc = o => Buffer.from(JSON.stringify(o)).toString('base64url');
const u = `${enc({ alg: 'RS256', typ: 'JWT' })}.${enc({ iss: C.client_email, scope: 'https://www.googleapis.com/auth/webmasters.readonly', aud: 'https://oauth2.googleapis.com/token', exp: now + 3600, iat: now })}`;
const sg = createSign('RSA-SHA256'); sg.update(u);
const tk = (await (await fetch('https://oauth2.googleapis.com/token', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: `grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer&assertion=${u}.${sg.sign(C.private_key, 'base64url')}` })).json()).access_token;
async function q(b) {
  for (let i = 0; i < 4; i++) {
    const r = await fetch(`https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(SITE)}/searchAnalytics/query`, { method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${tk}` }, body: JSON.stringify({ type: 'web', rowLimit: 25000, ...b }) });
    if (r.ok) return (await r.json()).rows || [];
    if (r.status === 429 || r.status >= 500) { await new Promise(x => setTimeout(x, 1500 * (i + 1))); continue; }
    throw new Error(r.status + ' ' + (await r.text()).slice(0, 200));
  }
  throw new Error('retries');
}
const cty = v => ({ filters: [{ dimension: 'country', operator: 'equals', expression: v }] });
const pgc = v => ({ filters: [{ dimension: 'page', operator: 'contains', expression: v }] });
const agg = async (s, e, g) => { const r = await q({ startDate: s, endDate: e, ...(g ? { dimensionFilterGroups: g } : {}) }); return { c: r[0]?.clicks ?? 0, i: r[0]?.impressions ?? 0, p: +(r[0]?.position ?? 0).toFixed(1) }; };

// ── 1. Is there a 10-day decline? ────────────────────────────────────────────
const daily = await q({ startDate: '2026-06-20', endDate: '2026-08-17', dimensions: ['date'] });
const dUS = await q({ startDate: '2026-06-20', endDate: '2026-08-17', dimensions: ['date'], dimensionFilterGroups: [cty('usa')] });
const um = new Map(dUS.map(r => [r.keys[0], r]));
const rows = daily.map(r => ({ d: r.keys[0], c: r.clicks, i: r.impressions, p: +r.position.toFixed(1), uc: um.get(r.keys[0])?.clicks ?? 0, ui: um.get(r.keys[0])?.impressions ?? 0 }));
const last = rows.slice(-10), prev = rows.slice(-20, -10), prev2 = rows.slice(-30, -20);
const S = a => a.reduce((x, y) => x + y.c, 0), SI = a => a.reduce((x, y) => x + y.i, 0), SU = a => a.reduce((x, y) => x + y.uc, 0), SUI = a => a.reduce((x, y) => x + y.ui, 0);
console.log('=== LAST 21 DAYS (latest GSC data) ===');
console.log('date        clicks  impr   pos  | US c   US i');
for (const r of rows.slice(-21)) console.log(`${r.d}  ${String(r.c).padStart(5)} ${String(r.i).padStart(6)} ${String(r.p).padStart(5)}  | ${String(r.uc).padStart(4)} ${String(r.ui).padStart(6)}`);
console.log(`\nlast10  ${last[0].d}..${last[9].d}   clicks ${S(last)}  impr ${SI(last)}  US ${SU(last)}c/${SUI(last)}i`);
console.log(`prev10  ${prev[0].d}..${prev[9].d}   clicks ${S(prev)}  impr ${SI(prev)}  US ${SU(prev)}c/${SUI(prev)}i`);
console.log(`prev10b ${prev2[0].d}..${prev2[9].d}   clicks ${S(prev2)}  impr ${SI(prev2)}  US ${SU(prev2)}c/${SUI(prev2)}i`);
const pct = (a, b) => b ? `${(((a - b) / b) * 100).toFixed(1)}%` : 'n/a';
console.log(`\nlast10 vs prev10: clicks ${pct(S(last), S(prev))}  impressions ${pct(SI(last), SI(prev))}  US clicks ${pct(SU(last), SU(prev))}  US impr ${pct(SUI(last), SUI(prev))}`);

// ── 2. Segment deep dive: DT / ERP / Consulting ──────────────────────────────
const SEGS = {
  'Digital Twins': 'digital-twin',
  'ERP': 'ndt-erp',
  'Consulting': 'consult',
  'Reporting software': 'reporting-software',
  'Training': 'training',
};
console.log('\n=== SEGMENT TREND (all geo) — monthly clicks / impressions / avg pos ===');
const months = [['2026-05', '2026-05-01', '2026-05-31'], ['2026-06', '2026-06-01', '2026-06-30'], ['2026-07', '2026-07-01', '2026-07-31'], ['2026-08', '2026-08-01', '2026-08-17']];
const segTrend = {};
for (const [name, needle] of Object.entries(SEGS)) {
  const line = [];
  for (const [lbl, s, e] of months) { const a = await agg(s, e, [pgc(needle)]); line.push(`${lbl} ${String(a.c).padStart(4)}c/${String(a.i).padStart(6)}i p${String(a.p).padStart(5)}`); }
  segTrend[name] = line;
  console.log(`  ${name.padEnd(19)} ${line.join('   ')}`);
}
console.log('\n=== SEGMENT, USA ONLY — monthly ===');
for (const [name, needle] of Object.entries(SEGS)) {
  const line = [];
  for (const [lbl, s, e] of months) { const a = await agg(s, e, [cty('usa'), pgc(needle)]); line.push(`${lbl} ${String(a.c).padStart(3)}c/${String(a.i).padStart(5)}i p${String(a.p).padStart(5)}`); }
  console.log(`  ${name.padEnd(19)} ${line.join('   ')}`);
}

// ── 3. What queries do DT / ERP / Consulting actually surface for? ────────────
const out = {};
for (const [name, needle] of Object.entries(SEGS)) {
  const qs = await q({ startDate: '2026-06-19', endDate: '2026-08-17', dimensions: ['query'], dimensionFilterGroups: [pgc(needle)] });
  const top = qs.sort((a, b) => b.impressions - a.impressions).slice(0, 22);
  out[name] = top.map(r => ({ q: r.keys[0], i: r.impressions, c: r.clicks, p: +r.position.toFixed(1) }));
  console.log(`\n=== ${name.toUpperCase()} — top queries (60d) ===`);
  for (const r of top) console.log(`  ${String(r.clicks).padStart(3)}c ${String(r.impressions).padStart(5)}i p${String(r.position.toFixed(1)).padStart(5)}  ${r.keys[0].slice(0, 58)}`);
}

// ── 4. Where DO we have top-3? ───────────────────────────────────────────────
const allQ = await q({ startDate: '2026-06-19', endDate: '2026-08-17', dimensions: ['query'] });
const top3 = allQ.filter(r => r.position <= 3.5 && r.impressions >= 20).sort((a, b) => b.impressions - a.impressions);
console.log(`\n=== QUERIES ALREADY AT POSITION <=3.5 (>=20 impr, 60d): ${top3.length} ===`);
for (const r of top3.slice(0, 30)) console.log(`  ${String(r.clicks).padStart(3)}c ${String(r.impressions).padStart(5)}i p${String(r.position.toFixed(1)).padStart(4)}  ${r.keys[0].slice(0, 58)}`);
const near = allQ.filter(r => r.position > 3.5 && r.position <= 8 && r.impressions >= 100).sort((a, b) => b.impressions - a.impressions);
console.log(`\n=== BIGGEST QUERIES AT POS 3.5-8 (>=100 impr) — the top-3 candidates: ${near.length} ===`);
for (const r of near.slice(0, 30)) console.log(`  ${String(r.clicks).padStart(3)}c ${String(r.impressions).padStart(5)}i p${String(r.position.toFixed(1)).padStart(4)}  ${r.keys[0].slice(0, 58)}`);

writeFileSync(join(__dirname, 'seg-deepdive-2026-08-18.json'), JSON.stringify({ daily: rows, segQueries: out, top3: top3.map(r => ({ q: r.keys[0], i: r.impressions, c: r.clicks, p: r.position })), near: near.map(r => ({ q: r.keys[0], i: r.impressions, c: r.clicks, p: r.position })) }, null, 2));
console.log('\nwrote seg-deepdive-2026-08-18.json');
