import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { createSign } from 'crypto';
const __dirname = dirname(fileURLToPath(import.meta.url));
const C = JSON.parse(readFileSync(join(__dirname, 'gsc-service-account.json'), 'utf-8'));
const SITE = 'https://atlantisndt.com';
const now = Math.floor(Date.now() / 1000);
const enc = o => Buffer.from(JSON.stringify(o)).toString('base64url');
const unsigned = `${enc({ alg: 'RS256', typ: 'JWT' })}.${enc({ iss: C.client_email, scope: 'https://www.googleapis.com/auth/webmasters.readonly', aud: 'https://oauth2.googleapis.com/token', exp: now + 3600, iat: now })}`;
const sg = createSign('RSA-SHA256'); sg.update(unsigned);
const tk = (await (await fetch('https://oauth2.googleapis.com/token', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: `grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer&assertion=${unsigned}.${sg.sign(C.private_key, 'base64url')}` })).json()).access_token;
async function q(body) {
  const r = await fetch(`https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(SITE)}/searchAnalytics/query`, {
    method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${tk}` }, body: JSON.stringify({ type: 'web', ...body }),
  });
  if (!r.ok) throw new Error(r.status + ' ' + (await r.text()).slice(0, 200));
  return (await r.json()).rows || [];
}
const S = '2026-07-18', E = '2026-08-14';
const F = (...f) => f.map(x => ({ filters: [x] }));
const cty = v => ({ dimension: 'country', operator: 'equals', expression: v });
const pg = (op, v) => ({ dimension: 'page', operator: op, expression: v });
const show = async (label, body) => { const r = await q({ startDate: S, endDate: E, ...body }); console.log(label.padEnd(52), 'clicks', String(r[0]?.clicks ?? 0).padStart(5), 'impr', String(r[0]?.impressions ?? 0).padStart(7), 'pos', (r[0]?.position ?? 0).toFixed(1)); };
const sumRows = async (label, body) => { const r = await q({ startDate: S, endDate: E, rowLimit: 25000, ...body }); console.log(label.padEnd(52), 'clicks', String(r.reduce((a, x) => a + x.clicks, 0)).padStart(5), 'impr', String(r.reduce((a, x) => a + x.impressions, 0)).padStart(7), 'rows', r.length); };

console.log('=== CONTROLS ===');
await show('ALL geo, no dims', {});
await sumRows('ALL geo, dim=page', { dimensions: ['page'] });
await sumRows('ALL geo, dim=date', { dimensions: ['date'] });
await show('USA filter, no dims', { dimensionFilterGroups: F(cty('usa')) });
await show('USA + page contains "atlantisndt" (match-all)', { dimensionFilterGroups: F(cty('usa'), pg('contains', 'atlantisndt')) });
await show('USA + page contains "/" (match-all)', { dimensionFilterGroups: F(cty('usa'), pg('contains', '/')) });
await sumRows('USA filter, dim=page', { dimensions: ['page'], dimensionFilterGroups: F(cty('usa')) });

console.log('\n=== USA SEGMENTS (filter-only aggregates) ===');
const segs = {
  'training (any)': pg('contains', 'training'),
  'ndt-training-<city>': pg('contains', '/ndt-training-'),
  '/training/ subtree': pg('contains', '/training/'),
  'blog': pg('contains', '/blog'),
  'ndt-erp': pg('contains', 'ndt-erp'),
  'digital-twin': pg('contains', 'digital-twin'),
  'consulting': pg('contains', 'consult'),
  'certification pages': pg('contains', 'certification'),
  'reporting': pg('contains', 'reporting'),
};
for (const [k, f] of Object.entries(segs)) {
  await show('USA + ' + k, { dimensionFilterGroups: F(cty('usa'), f) });
}
console.log('\n=== SAME SEGMENTS, ALL GEO ===');
for (const [k, f] of Object.entries(segs)) {
  await show('ALL + ' + k, { dimensionFilterGroups: F(f) });
}
