// Deep-dive: pull query×page for top CTR bleeders + city/country search demand.
import { readFileSync, writeFileSync } from 'fs';
import { createSign } from 'crypto';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const cred = JSON.parse(readFileSync(join(__dirname, 'gsc-service-account.json'), 'utf-8'));

async function token() {
  const h = { alg: 'RS256', typ: 'JWT' };
  const now = Math.floor(Date.now() / 1000);
  const c = { iss: cred.client_email, scope: 'https://www.googleapis.com/auth/webmasters.readonly', aud: 'https://oauth2.googleapis.com/token', exp: now + 3600, iat: now };
  const enc = (o) => Buffer.from(JSON.stringify(o)).toString('base64url');
  const u = `${enc(h)}.${enc(c)}`;
  const sig = createSign('RSA-SHA256').update(u).sign(cred.private_key, 'base64url');
  const r = await fetch('https://oauth2.googleapis.com/token', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: `grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer&assertion=${u}.${sig}` });
  return (await r.json()).access_token;
}

const SITE = 'sc-domain:atlantisndt.com';
const today = new Date();
const startDate = new Date(today.getTime() - 90 * 86400000).toISOString().slice(0, 10);
const endDate = new Date(today.getTime() - 2 * 86400000).toISOString().slice(0, 10);

async function sa(t, body) {
  const r = await fetch(`https://searchconsole.googleapis.com/webmasters/v3/sites/${encodeURIComponent(SITE)}/searchAnalytics/query`, { method: 'POST', headers: { 'Authorization': `Bearer ${t}`, 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
  return r.json();
}

const bleeders = [
  'https://atlantisndt.com/blog/ndt-salary-guide-2026-global',
  'https://atlantisndt.com/asnt-certification',
  'https://atlantisndt.com/blog/api-653-tank-inspection-guide',
  'https://atlantisndt.com/api-653-certification',
  'https://atlantisndt.com/api-510-certification',
  'https://atlantisndt.com/api-570-certification',
  'https://atlantisndt.com/blog/aerospace-composite-inspection-ndt-methods-guide',
];

const main = async () => {
  const t = await token();
  const out = {};

  for (const url of bleeders) {
    const r = await sa(t, {
      startDate, endDate, dimensions: ['query'], rowLimit: 25, dataState: 'all',
      dimensionFilterGroups: [{ filters: [{ dimension: 'page', operator: 'equals', expression: url }] }],
    });
    out[url] = r.rows || [];
    console.log(`\n=== ${url} ===`);
    (r.rows || []).slice(0, 12).forEach(x => console.log(`  ${x.impressions}  ${x.clicks}  ${(x.ctr*100).toFixed(1)}%  pos=${x.position.toFixed(1)}  ${x.keys[0]}`));
  }

  // Country demand for keyword pivots
  console.log('\n=== Country breakdown (90d) ===');
  const byCountry = await sa(t, { startDate, endDate, dimensions: ['country'], rowLimit: 30, dataState: 'all' });
  (byCountry.rows || []).forEach(r => console.log(`  ${r.keys[0]}: imp=${r.impressions} clicks=${r.clicks} ctr=${(r.ctr*100).toFixed(1)}% pos=${r.position.toFixed(1)}`));
  out.countries = byCountry.rows;

  // Singapore + Indonesia + Nigeria queries
  for (const ctry of ['sgp', 'idn', 'nga', 'ind', 'are', 'sau']) {
    console.log(`\n=== Top queries from ${ctry.toUpperCase()} ===`);
    const r = await sa(t, {
      startDate, endDate, dimensions: ['query'], rowLimit: 30, dataState: 'all',
      dimensionFilterGroups: [{ filters: [{ dimension: 'country', operator: 'equals', expression: ctry }] }],
    });
    (r.rows || []).slice(0, 15).forEach(x => console.log(`  imp=${x.impressions} clk=${x.clicks} pos=${x.position.toFixed(1)}  ${x.keys[0]}`));
    out[`queries_${ctry}`] = r.rows;
  }

  writeFileSync(join(__dirname, 'gsc-bleeder-deep-dive.json'), JSON.stringify(out, null, 2));
  console.log('\nSaved -> scripts/gsc-bleeder-deep-dive.json');
};
main().catch(e => { console.error(e); process.exit(1); });
