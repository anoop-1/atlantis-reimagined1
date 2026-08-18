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
  const r = await fetch(`https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(SITE)}/searchAnalytics/query`, {
    method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${tk}` }, body: JSON.stringify({ type: 'web', rowLimit: 25000, ...body }),
  });
  if (!r.ok) throw new Error(r.status + ' ' + (await r.text()).slice(0, 200));
  return (await r.json()).rows || [];
}
const S = '2026-07-01', E = '2026-08-14';
const cty = v => ({ filters: [{ dimension: 'country', operator: 'equals', expression: v }] });
const pgc = v => ({ filters: [{ dimension: 'page', operator: 'contains', expression: v }] });

console.log('=== US: top queries hitting TRAINING pages (2026-07-01..08-14) ===');
const utq = await q({ startDate: S, endDate: E, dimensions: ['query'], dimensionFilterGroups: [cty('usa'), pgc('training')] });
for (const r of utq.sort((a, b) => b.impressions - a.impressions).slice(0, 30))
  console.log(` ${String(r.clicks).padStart(3)}c ${String(r.impressions).padStart(5)}i pos ${r.position.toFixed(1).padStart(5)}  ${r.keys[0].slice(0, 62)}`);

console.log('\n=== US: top TRAINING pages by impressions ===');
const utp = await q({ startDate: S, endDate: E, dimensions: ['page'], dimensionFilterGroups: [cty('usa'), pgc('training')] });
for (const r of utp.sort((a, b) => b.impressions - a.impressions).slice(0, 25))
  console.log(` ${String(r.clicks).padStart(3)}c ${String(r.impressions).padStart(5)}i pos ${r.position.toFixed(1).padStart(5)}  ${r.keys[0].replace(SITE, '').slice(0, 62)}`);

console.log('\n=== US: ALL top queries by impressions (any page) ===');
const uq = await q({ startDate: S, endDate: E, dimensions: ['query'], dimensionFilterGroups: [cty('usa')] });
for (const r of uq.sort((a, b) => b.impressions - a.impressions).slice(0, 35))
  console.log(` ${String(r.clicks).padStart(3)}c ${String(r.impressions).padStart(5)}i pos ${r.position.toFixed(1).padStart(5)}  ${r.keys[0].slice(0, 62)}`);

console.log('\n=== US: queries in striking distance (pos 4-20, impr>=50) ===');
for (const r of uq.filter(r => r.position >= 3.5 && r.position <= 20 && r.impressions >= 50).sort((a, b) => b.impressions - a.impressions).slice(0, 35))
  console.log(` ${String(r.clicks).padStart(3)}c ${String(r.impressions).padStart(5)}i pos ${r.position.toFixed(1).padStart(5)}  ${r.keys[0].slice(0, 62)}`);

console.log('\n=== ALL-GEO training pages: top by impressions ===');
const atp = await q({ startDate: S, endDate: E, dimensions: ['page'], dimensionFilterGroups: [pgc('training')] });
for (const r of atp.sort((a, b) => b.impressions - a.impressions).slice(0, 25))
  console.log(` ${String(r.clicks).padStart(4)}c ${String(r.impressions).padStart(6)}i pos ${r.position.toFixed(1).padStart(5)}  ${r.keys[0].replace(SITE, '').slice(0, 62)}`);

// ── GA4 source/medium anomaly ──
const gtk = await token('https://www.googleapis.com/auth/analytics.readonly');
async function ga4(body) {
  const r = await fetch(`https://analyticsdata.googleapis.com/v1beta/properties/${GA4}:runReport`, {
    method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${gtk}` }, body: JSON.stringify(body),
  });
  if (!r.ok) throw new Error(r.status + ' ' + (await r.text()).slice(0, 300));
  return (await r.json()).rows || [];
}
console.log('\n=== GA4 source/medium by month (all geo, top 40) ===');
const sm = await ga4({
  dateRanges: [{ startDate: '2026-06-01', endDate: '2026-08-16' }],
  dimensions: [{ name: 'yearMonth' }, { name: 'sessionSourceMedium' }],
  metrics: [{ name: 'sessions' }, { name: 'engagementRate' }, { name: 'averageSessionDuration' }],
  orderBys: [{ metric: { metricName: 'sessions' }, desc: true }], limit: 40,
});
for (const r of sm) console.log(' ', r.dimensionValues[0].value, r.dimensionValues[1].value.padEnd(40), String(r.metricValues[0].value).padStart(6), 'sess  eng', (+r.metricValues[1].value * 100).toFixed(0) + '%  dur', (+r.metricValues[2].value).toFixed(0) + 's');

console.log('\n=== GA4 landing pages, US organic, last 28d ===');
const lp = await ga4({
  dateRanges: [{ startDate: '2026-07-18', endDate: '2026-08-16' }],
  dimensions: [{ name: 'landingPage' }],
  metrics: [{ name: 'sessions' }, { name: 'engagementRate' }, { name: 'averageSessionDuration' }],
  dimensionFilter: { andGroup: { expressions: [
    { filter: { fieldName: 'country', stringFilter: { value: 'United States' } } },
    { filter: { fieldName: 'sessionDefaultChannelGroup', stringFilter: { value: 'Organic Search' } } },
  ] } },
  orderBys: [{ metric: { metricName: 'sessions' }, desc: true }], limit: 30,
});
for (const r of lp) console.log(' ', String(r.metricValues[0].value).padStart(5), 'sess eng', (+r.metricValues[1].value * 100).toFixed(0).padStart(3) + '% dur', (+r.metricValues[2].value).toFixed(0).padStart(4) + 's ', r.dimensionValues[0].value.slice(0, 62));

console.log('\n=== GA4 conversions / key events, last 90d ===');
try {
  const ke = await ga4({
    dateRanges: [{ startDate: '2026-05-18', endDate: '2026-08-16' }],
    dimensions: [{ name: 'eventName' }], metrics: [{ name: 'eventCount' }],
    orderBys: [{ metric: { metricName: 'eventCount' }, desc: true }], limit: 25,
  });
  for (const r of ke) console.log(' ', r.dimensionValues[0].value.padEnd(34), r.metricValues[0].value);
} catch (e) { console.log('  key events err', e.message.slice(0, 120)); }
