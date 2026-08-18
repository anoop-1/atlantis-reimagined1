import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { createSign } from 'crypto';
const __dirname = dirname(fileURLToPath(import.meta.url));
const C = JSON.parse(readFileSync(join(__dirname, 'gsc-service-account.json'), 'utf-8'));
const SITE = 'https://atlantisndt.com';
const GA4 = '517088706';
async function token(scope) {
  const now = Math.floor(Date.now() / 1000);
  const enc = o => Buffer.from(JSON.stringify(o)).toString('base64url');
  const u = `${enc({ alg: 'RS256', typ: 'JWT' })}.${enc({ iss: C.client_email, scope, aud: 'https://oauth2.googleapis.com/token', exp: now + 3600, iat: now })}`;
  const s = createSign('RSA-SHA256'); s.update(u);
  const r = await fetch('https://oauth2.googleapis.com/token', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: `grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer&assertion=${u}.${s.sign(C.private_key, 'base64url')}` });
  return (await r.json()).access_token;
}
const tk = await token('https://www.googleapis.com/auth/webmasters.readonly');
async function q(body) {
  for (let i = 0; i < 4; i++) {
    const r = await fetch(`https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(SITE)}/searchAnalytics/query`, {
      method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${tk}` }, body: JSON.stringify({ type: 'web', ...body }),
    });
    if (r.ok) return (await r.json()).rows || [];
    if (r.status === 429 || r.status >= 500) { await new Promise(x => setTimeout(x, 1500 * (i + 1))); continue; }
    throw new Error(r.status + ' ' + (await r.text()).slice(0, 200));
  }
  throw new Error('retries');
}
const cty = v => ({ filters: [{ dimension: 'country', operator: 'equals', expression: v }] });
const pgc = v => ({ filters: [{ dimension: 'page', operator: 'contains', expression: v }] });
const one = async (start, end, groups) => {
  const r = await q({ startDate: start, endDate: end, ...(groups ? { dimensionFilterGroups: groups } : {}) });
  return { c: r[0]?.clicks ?? 0, i: r[0]?.impressions ?? 0, p: +(r[0]?.position ?? 0).toFixed(1) };
};

const months = [];
for (let y = 2025, m = 8; !(y === 2026 && m === 9); m === 12 ? (m = 1, y++) : m++) {
  const start = `${y}-${String(m).padStart(2, '0')}-01`;
  const last = new Date(Date.UTC(y, m, 0)).toISOString().split('T')[0];
  const end = last > '2026-08-14' ? '2026-08-14' : last;
  if (start > '2026-08-14') break;
  months.push({ label: `${y}-${String(m).padStart(2, '0')}`, start, end });
}

const rows = [];
for (const mo of months) {
  const [all, us, usTrain, allTrain, usBlog, usCity] = await Promise.all([
    one(mo.start, mo.end),
    one(mo.start, mo.end, [cty('usa')]),
    one(mo.start, mo.end, [cty('usa'), pgc('training')]),
    one(mo.start, mo.end, [pgc('training')]),
    one(mo.start, mo.end, [cty('usa'), pgc('/blog')]),
    one(mo.start, mo.end, [cty('usa'), pgc('/ndt-training-')]),
  ]);
  rows.push({ ...mo, all, us, usTrain, allTrain, usBlog, usCity });
  console.log(`${mo.label}  ALL ${String(all.c).padStart(5)}c/${String(all.i).padStart(7)}i  US ${String(us.c).padStart(4)}c/${String(us.i).padStart(6)}i pos${String(us.p).padStart(5)}  US-train ${String(usTrain.c).padStart(3)}c/${String(usTrain.i).padStart(5)}i pos${String(usTrain.p).padStart(5)}  US-city ${String(usCity.c).padStart(3)}c/${String(usCity.i).padStart(5)}i  US-blog ${String(usBlog.c).padStart(3)}c/${String(usBlog.i).padStart(5)}i  ALL-train ${String(allTrain.c).padStart(4)}c/${String(allTrain.i).padStart(6)}i pos${String(allTrain.p).padStart(5)}`);
}

// GA4 monthly: organic sessions + US organic sessions
const gtk = await token('https://www.googleapis.com/auth/analytics.readonly');
async function ga4(body) {
  const r = await fetch(`https://analyticsdata.googleapis.com/v1beta/properties/${GA4}:runReport`, {
    method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${gtk}` }, body: JSON.stringify(body),
  });
  if (!r.ok) throw new Error(r.status + ' ' + (await r.text()).slice(0, 300));
  return (await r.json()).rows || [];
}
console.log('\n=== GA4 monthly: sessions by channel (US only) ===');
const g = await ga4({
  dateRanges: [{ startDate: '2025-08-01', endDate: '2026-08-16' }],
  dimensions: [{ name: 'yearMonth' }, { name: 'sessionDefaultChannelGroup' }],
  metrics: [{ name: 'sessions' }],
  dimensionFilter: { filter: { fieldName: 'country', stringFilter: { value: 'United States' } } },
  orderBys: [{ dimension: { dimensionName: 'yearMonth' } }],
  limit: 500,
});
const byMonth = {};
for (const r of g) { const [m, ch] = r.dimensionValues.map(v => v.value); (byMonth[m] ??= {})[ch] = +r.metricValues[0].value; }
for (const [m, chs] of Object.entries(byMonth)) console.log(' ', m, Object.entries(chs).sort((a, b) => b[1] - a[1]).map(([k, v]) => `${k}=${v}`).join('  '));

console.log('\n=== GA4 monthly: total sessions by channel (all geo) ===');
const g2 = await ga4({
  dateRanges: [{ startDate: '2025-08-01', endDate: '2026-08-16' }],
  dimensions: [{ name: 'yearMonth' }, { name: 'sessionDefaultChannelGroup' }],
  metrics: [{ name: 'sessions' }],
  orderBys: [{ dimension: { dimensionName: 'yearMonth' } }],
  limit: 500,
});
const bm2 = {};
for (const r of g2) { const [m, ch] = r.dimensionValues.map(v => v.value); (bm2[m] ??= {})[ch] = +r.metricValues[0].value; }
for (const [m, chs] of Object.entries(bm2)) console.log(' ', m, Object.entries(chs).sort((a, b) => b[1] - a[1]).map(([k, v]) => `${k}=${v}`).join('  '));

writeFileSync(join(__dirname, 'trend-us-training.json'), JSON.stringify({ gsc: rows, ga4US: byMonth, ga4All: bm2 }, null, 2));
console.log('\nwrote trend-us-training.json');
