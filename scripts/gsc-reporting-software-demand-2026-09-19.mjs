// Ad-hoc pull: NDT Reporting Software competitive research (2026-09-19)
// Pulls 90d GSC data for reporting-related pages + broad "report software" query demand,
// broken out by country tier (USA/CA/EU/AU-NZ vs India/ME).
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
  const out = {};

  console.log(`Range: ${startDate} .. ${endDate}\n`);

  // 1. All pages matching reporting-software family
  console.log('=== Pages matching /*reporting* or /best-ndt-reporting* or /intelligent-reporting* or /digital-twin-reporting (90d) ===');
  const allPages = await sa(t, { startDate, endDate, dimensions: ['page'], rowLimit: 25000, dataState: 'all' });
  const reportingPageRe = /reporting|report-software|report-generator/i;
  const reportingPages = (allPages.rows || []).filter(r => reportingPageRe.test(r.keys[0]));
  reportingPages.sort((a, b) => b.impressions - a.impressions);
  out.reportingPages = reportingPages;
  console.log(`  total pages matched: ${reportingPages.length}`);
  const totalImpr = reportingPages.reduce((s, r) => s + r.impressions, 0);
  const totalClicks = reportingPages.reduce((s, r) => s + r.clicks, 0);
  console.log(`  SUM impressions=${totalImpr} clicks=${totalClicks}`);
  reportingPages.slice(0, 40).forEach(r => console.log(`  imp=${r.impressions} clk=${r.clicks} ctr=${(r.ctr*100).toFixed(1)}% pos=${r.position.toFixed(1)}  ${r.keys[0]}`));

  // 2. Query-level data for the flagship pillar page specifically
  console.log('\n=== Queries driving /best-ndt-reporting-software-2026 specifically (90d) ===');
  const pillarQ = await sa(t, {
    startDate, endDate, dimensions: ['query'], rowLimit: 200, dataState: 'all',
    dimensionFilterGroups: [{ filters: [{ dimension: 'page', operator: 'equals', expression: 'https://atlantisndt.com/best-ndt-reporting-software-2026' }] }],
  });
  out.pillarQueries = pillarQ.rows || [];
  (pillarQ.rows || []).sort((a,b)=>b.impressions-a.impressions).forEach(r => console.log(`  imp=${r.impressions} clk=${r.clicks} pos=${r.position.toFixed(1)}  ${r.keys[0]}`));
  if (!pillarQ.rows || !pillarQ.rows.length) console.log('  (no rows)');

  // 3. Broad query demand for "report software" style terms site-wide, regardless of current ranking page
  console.log('\n=== Site-wide queries containing report/inspection-app/data-capture keywords (90d) — TAM proxy ===');
  const allQueries = await sa(t, { startDate, endDate, dimensions: ['query'], rowLimit: 25000, dataState: 'all' });
  const kw = ['report software','reporting software','report generator','report app','inspection app','inspection report','data capture','field capture','digital signature','mobile inspection','ndt report','paperless inspection','report template','inspection software'];
  const demandRows = (allQueries.rows || []).filter(r => {
    const q = r.keys[0].toLowerCase();
    return kw.some(k => q.includes(k));
  });
  demandRows.sort((a,b)=>b.impressions-a.impressions);
  out.demandQueries = demandRows;
  const dTotalImpr = demandRows.reduce((s,r)=>s+r.impressions,0);
  const dTotalClicks = demandRows.reduce((s,r)=>s+r.clicks,0);
  console.log(`  matched ${demandRows.length} queries; SUM impressions=${dTotalImpr} clicks=${dTotalClicks}`);
  demandRows.slice(0, 60).forEach(r => console.log(`  imp=${r.impressions} clk=${r.clicks} ctr=${(r.ctr*100).toFixed(1)}% pos=${r.position.toFixed(1)}  ${r.keys[0]}`));

  // 4. Country breakdown for demand keywords: USA/CA/EU/AU-NZ tier 1, India/ME tier 2
  console.log('\n=== Country breakdown for report/inspection-app demand (90d) ===');
  out.byCountry = {};
  const regex = 'report software|reporting software|report generator|report app|inspection app|inspection report|data capture|field capture|digital signature|mobile inspection|ndt report|paperless inspection|report template';
  for (const ctry of ['usa','can','gbr','deu','fra','nld','nor','aus','nzl','ind','are','sau','qat','kwt','omn','sgp','mys','nga','zaf']) {
    const r = await sa(t, {
      startDate, endDate, dimensions: ['query'], rowLimit: 200, dataState: 'all',
      dimensionFilterGroups: [
        { filters: [{ dimension: 'country', operator: 'equals', expression: ctry }] },
        { filters: [{ dimension: 'query', operator: 'includingRegex', expression: regex }] },
      ],
    });
    const rows = (r.rows || []).filter(x => {
      const q = x.keys[0].toLowerCase();
      return kw.some(k => q.includes(k));
    });
    const impr = rows.reduce((s,x)=>s+x.impressions,0);
    const clk = rows.reduce((s,x)=>s+x.clicks,0);
    out.byCountry[ctry] = { impressions: impr, clicks: clk, rows };
    if (rows.length > 0) {
      console.log(`\n  --- ${ctry.toUpperCase()} (SUM imp=${impr} clk=${clk}) ---`);
      rows.slice(0, 6).forEach(x => console.log(`    imp=${x.impressions} clk=${x.clicks} pos=${x.position.toFixed(1)}  ${x.keys[0]}`));
    } else {
      console.log(`\n  --- ${ctry.toUpperCase()}: no matching rows ---`);
    }
  }

  writeFileSync(join(__dirname, 'gsc-reporting-software-demand-2026-09-19.json'), JSON.stringify({ ...out, fetched: today.toISOString(), startDate, endDate }, null, 2));
  console.log('\nSaved -> scripts/gsc-reporting-software-demand-2026-09-19.json');
};

main().catch(e => { console.error(e); process.exit(1); });
