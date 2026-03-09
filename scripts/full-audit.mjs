#!/usr/bin/env node
/**
 * Full SEO Audit — pulls comprehensive GSC data for analysis
 */
import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { createSign } from 'crypto';

const __dirname = dirname(fileURLToPath(import.meta.url));
const creds = JSON.parse(readFileSync(join(__dirname, 'gsc-service-account.json'), 'utf-8'));

async function getToken() {
  const header = { alg: 'RS256', typ: 'JWT' };
  const now = Math.floor(Date.now() / 1000);
  const claim = { iss: creds.client_email, scope: 'https://www.googleapis.com/auth/webmasters.readonly', aud: 'https://oauth2.googleapis.com/token', exp: now + 3600, iat: now };
  const encode = (obj) => Buffer.from(JSON.stringify(obj)).toString('base64url');
  const unsigned = `${encode(header)}.${encode(claim)}`;
  const sign = createSign('RSA-SHA256');
  sign.update(unsigned);
  const sig = sign.sign(creds.private_key, 'base64url');
  const jwt = `${unsigned}.${sig}`;
  const res = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer&assertion=${jwt}`,
  });
  return (await res.json()).access_token;
}

async function query(token, dims, sd, ed, rowLimit = 25000) {
  const res = await fetch('https://www.googleapis.com/webmasters/v3/sites/https%3A%2F%2Fatlantisndt.com/searchAnalytics/query', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
    body: JSON.stringify({ startDate: sd, endDate: ed, dimensions: dims, rowLimit, type: 'web' }),
  });
  return res.json();
}

async function main() {
  const token = await getToken();

  // Date ranges
  const end = new Date(); end.setDate(end.getDate() - 3);
  const start = new Date(end); start.setDate(start.getDate() - 28);
  const startDate = start.toISOString().split('T')[0];
  const endDate = end.toISOString().split('T')[0];

  const end7 = new Date(end);
  const start7 = new Date(end7); start7.setDate(start7.getDate() - 7);
  const endPrev = new Date(start7); endPrev.setDate(endPrev.getDate() - 1);
  const startPrev = new Date(endPrev); startPrev.setDate(startPrev.getDate() - 7);

  // Sitemap status
  const smRes = await fetch('https://www.googleapis.com/webmasters/v3/sites/https%3A%2F%2Fatlantisndt.com/sitemaps', {
    headers: { Authorization: `Bearer ${token}` },
  });
  const sitemaps = await smRes.json();
  console.log('=== SITEMAP STATUS ===');
  (sitemaps.sitemap || []).forEach(s => {
    console.log(`  ${s.path}`);
    (s.contents || []).forEach(c => {
      console.log(`    Type: ${c.type}  Submitted: ${c.submitted}  Indexed: ${c.indexed}`);
    });
    console.log(`    Warnings: ${s.warnings || 0}  Errors: ${s.errors || 0}`);
  });

  // 28-day overview
  const total28 = await query(token, [], startDate, endDate);
  const pages28 = await query(token, ['page'], startDate, endDate);
  const queries28 = await query(token, ['query'], startDate, endDate);

  const r = total28.rows?.[0] || {};
  console.log(`\n=== TRAFFIC OVERVIEW (${startDate} to ${endDate}) ===`);
  console.log(`  Clicks:       ${r.clicks || 0}`);
  console.log(`  Impressions:  ${(r.impressions || 0).toLocaleString()}`);
  console.log(`  CTR:          ${((r.ctr || 0) * 100).toFixed(2)}%`);
  console.log(`  Avg Position: ${(r.position || 0).toFixed(1)}`);
  console.log(`  Pages w/data: ${(pages28.rows || []).length}`);
  console.log(`  Queries:      ${(queries28.rows || []).length}`);

  // Week over week
  const c7 = await query(token, [], start7.toISOString().split('T')[0], end7.toISOString().split('T')[0]);
  const p7 = await query(token, [], startPrev.toISOString().split('T')[0], endPrev.toISOString().split('T')[0]);
  const cr = c7.rows?.[0] || {};
  const pr = p7.rows?.[0] || {};
  console.log('\n=== WEEK OVER WEEK ===');
  console.log(`  This week:  ${cr.clicks || 0} clicks, ${cr.impressions || 0} imp, ${((cr.ctr || 0) * 100).toFixed(2)}% CTR, pos ${(cr.position || 0).toFixed(1)}`);
  console.log(`  Last week:  ${pr.clicks || 0} clicks, ${pr.impressions || 0} imp, ${((pr.ctr || 0) * 100).toFixed(2)}% CTR, pos ${(pr.position || 0).toFixed(1)}`);
  const clickDelta = (cr.clicks || 0) - (pr.clicks || 0);
  const impDelta = (cr.impressions || 0) - (pr.impressions || 0);
  console.log(`  Delta:      ${clickDelta > 0 ? '+' : ''}${clickDelta} clicks, ${impDelta > 0 ? '+' : ''}${impDelta} imp`);

  // Daily trend
  const daily = await query(token, ['date'], startDate, endDate);
  console.log('\n=== DAILY TREND (last 14 days) ===');
  (daily.rows || []).sort((a, b) => a.keys[0].localeCompare(b.keys[0])).slice(-14).forEach(d => {
    const bar = '\u2588'.repeat(Math.max(1, Math.round(d.clicks)));
    console.log(`  ${d.keys[0]}  clicks:${String(d.clicks).padStart(3)}  imp:${String(d.impressions).padStart(5)}  ${bar}`);
  });

  // Position distribution
  const allPages = pages28.rows || [];
  const buckets = [
    { label: 'Position 1-3', filter: r => r.position <= 3 },
    { label: 'Position 4-10', filter: r => r.position > 3 && r.position <= 10 },
    { label: 'Position 11-20', filter: r => r.position > 10 && r.position <= 20 },
    { label: 'Position 21-50', filter: r => r.position > 20 && r.position <= 50 },
    { label: 'Position 50+', filter: r => r.position > 50 },
  ];
  console.log('\n=== POSITION DISTRIBUTION ===');
  buckets.forEach(b => {
    const pages = allPages.filter(b.filter);
    console.log(`  ${b.label.padEnd(15)}  ${String(pages.length).padStart(4)} pages  ${String(pages.reduce((s, r) => s + r.impressions, 0)).padStart(6)} imp  ${String(pages.reduce((s, r) => s + r.clicks, 0)).padStart(4)} clicks`);
  });

  // Top pages by clicks
  const topPages = allPages.filter(r => r.clicks > 0).sort((a, b) => b.clicks - a.clicks);
  console.log('\n=== TOP PAGES BY CLICKS ===');
  topPages.slice(0, 20).forEach(r => {
    const page = r.keys[0].replace('https://atlantisndt.com', '');
    console.log(`  ${String(r.clicks).padStart(3)} clicks  ${String(r.impressions).padStart(5)} imp  ctr:${(r.ctr * 100).toFixed(1).padStart(5)}%  pos:${r.position.toFixed(1).padStart(5)}  ${page}`);
  });

  // Zero-click pages with high impressions
  const zeroClick = allPages.filter(r => r.clicks === 0 && r.impressions >= 10).sort((a, b) => b.impressions - a.impressions);
  console.log(`\n=== ZERO-CLICK PAGES (10+ imp) — ${zeroClick.length} pages, ${zeroClick.reduce((s, r) => s + r.impressions, 0)} wasted imp ===`);
  zeroClick.slice(0, 30).forEach(r => {
    const page = r.keys[0].replace('https://atlantisndt.com', '');
    console.log(`  ${String(r.impressions).padStart(5)} imp  pos:${r.position.toFixed(1).padStart(5)}  ${page}`);
  });

  // Striking distance queries
  const allQueries = queries28.rows || [];
  const striking = allQueries.filter(r => r.position >= 5 && r.position <= 20 && r.impressions >= 3).sort((a, b) => b.impressions - a.impressions);
  console.log(`\n=== STRIKING DISTANCE QUERIES (pos 5-20, 3+ imp) — ${striking.length} ===`);
  striking.slice(0, 35).forEach(r => {
    console.log(`  ${String(r.impressions).padStart(5)} imp  pos:${r.position.toFixed(1).padStart(5)}  clicks:${String(r.clicks).padStart(2)}  "${r.keys[0]}"`);
  });

  // Deep high-volume
  const deep = allQueries.filter(r => r.position > 20 && r.impressions >= 10).sort((a, b) => b.impressions - a.impressions);
  console.log(`\n=== DEEP BUT HIGH VOLUME (pos 20+, 10+ imp) — ${deep.length} ===`);
  deep.slice(0, 25).forEach(r => {
    console.log(`  ${String(r.impressions).padStart(5)} imp  pos:${r.position.toFixed(1).padStart(5)}  "${r.keys[0]}"`);
  });

  // Query intent
  const branded = allQueries.filter(r => /atlantis/i.test(r.keys[0]));
  const informational = allQueries.filter(r => /what is|how to|guide|explained|vs |comparison|difference|between/i.test(r.keys[0]));
  const commercial = allQueries.filter(r => /cost|price|salary|training|course|certification|software|tool/i.test(r.keys[0]));
  const local = allQueries.filter(r => /dubai|houston|india|saudi|uae|singapore|uk|abu dhabi|qatar|mumbai|chennai|bangalore|delhi|kuwait|norway|chicago|los angeles|calgary/i.test(r.keys[0]));
  console.log('\n=== QUERY INTENT BREAKDOWN ===');
  console.log(`  Branded:       ${branded.length} queries (${branded.reduce((s, r) => s + r.impressions, 0)} imp, ${branded.reduce((s, r) => s + r.clicks, 0)} clicks)`);
  console.log(`  Informational: ${informational.length} queries (${informational.reduce((s, r) => s + r.impressions, 0)} imp, ${informational.reduce((s, r) => s + r.clicks, 0)} clicks)`);
  console.log(`  Commercial:    ${commercial.length} queries (${commercial.reduce((s, r) => s + r.impressions, 0)} imp, ${commercial.reduce((s, r) => s + r.clicks, 0)} clicks)`);
  console.log(`  Local/Geo:     ${local.length} queries (${local.reduce((s, r) => s + r.impressions, 0)} imp, ${local.reduce((s, r) => s + r.clicks, 0)} clicks)`);

  // New queries this week
  const curr7q = await query(token, ['query'], start7.toISOString().split('T')[0], end7.toISOString().split('T')[0]);
  const prev7q = await query(token, ['query'], startPrev.toISOString().split('T')[0], endPrev.toISOString().split('T')[0]);
  const prevSet = new Set((prev7q.rows || []).map(r => r.keys[0]));
  const newQ = (curr7q.rows || []).filter(r => !prevSet.has(r.keys[0]) && r.impressions >= 2).sort((a, b) => b.impressions - a.impressions);
  console.log(`\n=== NEW QUERIES THIS WEEK — ${newQ.length} ===`);
  newQ.slice(0, 20).forEach(r => {
    console.log(`  ${String(r.impressions).padStart(4)} imp  pos:${r.position.toFixed(1).padStart(5)}  "${r.keys[0]}"`);
  });

  // Device & country
  const devices = await query(token, ['device'], startDate, endDate);
  console.log('\n=== DEVICE BREAKDOWN ===');
  (devices.rows || []).forEach(r => {
    console.log(`  ${r.keys[0].padEnd(10)}  clicks:${String(r.clicks).padStart(4)}  imp:${String(r.impressions).padStart(6)}  ctr:${(r.ctr * 100).toFixed(1)}%  pos:${r.position.toFixed(1)}`);
  });

  const countries = await query(token, ['country'], startDate, endDate);
  console.log('\n=== TOP COUNTRIES ===');
  (countries.rows || []).sort((a, b) => b.impressions - a.impressions).slice(0, 15).forEach(r => {
    console.log(`  ${r.keys[0].padEnd(5)}  clicks:${String(r.clicks).padStart(4)}  imp:${String(r.impressions).padStart(6)}  ctr:${(r.ctr * 100).toFixed(1)}%  pos:${r.position.toFixed(1)}`);
  });

  // Page category analysis
  const categories = {
    'Homepage': r => r.keys[0] === 'https://atlantisndt.com/',
    'Blog': r => r.keys[0].includes('/blog/'),
    'Consulting Cities': r => r.keys[0].includes('/consulting/ndt-consulting-'),
    'Method+City': r => /\/(ultrasonic|radiographic|magnetic|penetrant|eddy-current|visual)-testing-/.test(r.keys[0]),
    'Digital Twin Cities': r => /\/digital-twin-(aberdeen|abu|calgary|denver|doha|dubai|houston|hyderabad|kuala|kuwait|lagos|london|mumbai|muscat|new-orleans|oslo|perth|rotterdam|saudi|singapore)/.test(r.keys[0]),
    'ERP Cities': r => r.keys[0].includes('/ndt-erp-') && r.keys[0] !== 'https://atlantisndt.com/ndt-erp-solution',
    'Training': r => /\/(training|ndt-training)/.test(r.keys[0]),
    'Certification (API/ASNT)': r => /(api-510|api-570|api-653|asnt)-certification/.test(r.keys[0]),
    'Tools': r => r.keys[0].includes('/tools'),
    'Resources': r => r.keys[0].includes('/resources/'),
    'Core Pages': r => true,
  };

  console.log('\n=== PAGE CATEGORY PERFORMANCE ===');
  const categorized = new Set();
  for (const [cat, filter] of Object.entries(categories)) {
    const pages = allPages.filter(r => {
      if (cat === 'Core Pages') return !categorized.has(r.keys[0]);
      if (filter(r)) { categorized.add(r.keys[0]); return true; }
      return false;
    });
    if (pages.length > 0) {
      console.log(`  ${cat.padEnd(25)}  ${String(pages.length).padStart(4)} pages  ${String(pages.reduce((s, r) => s + r.impressions, 0)).padStart(6)} imp  ${String(pages.reduce((s, r) => s + r.clicks, 0)).padStart(4)} clicks  pos:${(pages.reduce((s, r) => s + r.position * r.impressions, 0) / Math.max(1, pages.reduce((s, r) => s + r.impressions, 0))).toFixed(1)}`);
    }
  }
}

main().catch(err => { console.error(err); process.exit(1); });
