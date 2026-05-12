// Pull ERP-related search demand from GSC for atlantisndt.com
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

const main = async () => {
  const t = await token();

  console.log('=== Top queries containing "erp" or related (90d) ===');
  const allQueries = await sa(t, { startDate, endDate, dimensions: ['query'], rowLimit: 5000, dataState: 'all' });
  const erpKeywords = ['erp', 'inspection software', 'inspection management', 'inventory management', 'certification tracking', 'calibration tracking', 'cmms', 'eam', 'asset management', 'work order', 'maintenance management', 'quality management', 'audit management', 'document management', 'compliance tracking', 'project management software', 'fleet management', 'lab management'];
  const erpRows = (allQueries.rows || []).filter(r => {
    const q = r.keys[0].toLowerCase();
    return erpKeywords.some(k => q.includes(k));
  });
  erpRows.sort((a, b) => b.impressions - a.impressions);
  erpRows.slice(0, 60).forEach(r => console.log(`  imp=${r.impressions} clk=${r.clicks} ctr=${(r.ctr*100).toFixed(1)}% pos=${r.position.toFixed(1)}  ${r.keys[0]}`));

  console.log('\n=== Top pages containing /ndt-erp (90d) ===');
  const allPages = await sa(t, { startDate, endDate, dimensions: ['page'], rowLimit: 5000, dataState: 'all' });
  const erpPages = (allPages.rows || []).filter(r => r.keys[0].includes('/ndt-erp') || r.keys[0].includes('/erp'));
  erpPages.sort((a, b) => b.impressions - a.impressions);
  erpPages.slice(0, 50).forEach(r => console.log(`  imp=${r.impressions} clk=${r.clicks} ctr=${(r.ctr*100).toFixed(1)}% pos=${r.position.toFixed(1)}  ${r.keys[0]}`));

  console.log('\n=== Country demand for "ndt software" / "inspection software" (90d) ===');
  for (const ctry of ['usa', 'are', 'sau', 'ind', 'sgp', 'gbr', 'can', 'aus', 'mys', 'idn', 'nga', 'zaf', 'bra']) {
    const r = await sa(t, {
      startDate, endDate, dimensions: ['query'], rowLimit: 30, dataState: 'all',
      dimensionFilterGroups: [
        { filters: [{ dimension: 'country', operator: 'equals', expression: ctry }] },
        { filters: [{ dimension: 'query', operator: 'includingRegex', expression: 'erp|software|management|tracking|cmms|eam' }] },
      ],
    });
    const rows = (r.rows || []).filter(x => {
      const q = x.keys[0].toLowerCase();
      return erpKeywords.some(k => q.includes(k));
    });
    if (rows.length > 0) {
      console.log(`\n  --- ${ctry.toUpperCase()} ---`);
      rows.slice(0, 8).forEach(x => console.log(`    imp=${x.impressions} clk=${x.clicks} pos=${x.position.toFixed(1)}  ${x.keys[0]}`));
    }
  }

  writeFileSync(join(__dirname, 'gsc-erp-demand.json'), JSON.stringify({ erpQueries: erpRows, erpPages, fetched: today.toISOString() }, null, 2));
  console.log('\nSaved -> scripts/gsc-erp-demand.json');
};

main().catch(e => { console.error(e); process.exit(1); });
