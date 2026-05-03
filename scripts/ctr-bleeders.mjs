#!/usr/bin/env node
/**
 * CTR Bleeders Finder
 * ===================
 * Identifies pages where actual GSC CTR is significantly below the
 * position-adjusted benchmark — highest-ROI targets for title/description rewrites.
 *
 * Logic:
 *   - Pull last 28d GSC page-level data for atlantisndt.com + ndt-connect.com
 *   - Compare actual CTR vs position-expected CTR
 *   - Flag pages where actual_ctr / expected_ctr < 0.4 AND impressions >= 100
 *   - Sort by lost_clicks_per_month desc
 *
 * USAGE:
 *   node scripts/ctr-bleeders.mjs
 */

import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const CREDENTIALS_PATH = join(__dirname, 'gsc-service-account.json');
const SITES = ['https://atlantisndt.com', 'https://ndt-connect.com'];

const ym = (() => {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`;
})();
const OUT_PATH = join(__dirname, `ctr-bleeders-${ym}.json`);

// ─── Position → expected CTR lookup ─────────────────────────────────────────
const EXPECTED_CTR = {
  1: 0.28, 2: 0.16, 3: 0.11, 4: 0.08, 5: 0.06,
  6: 0.045, 7: 0.035, 8: 0.028, 9: 0.022, 10: 0.018,
  11: 0.015, 12: 0.012, 13: 0.010, 14: 0.009, 15: 0.008,
  16: 0.007, 17: 0.006, 18: 0.005, 19: 0.0045, 20: 0.004,
};

function expectedCtr(pos) {
  const rounded = Math.round(pos);
  if (rounded <= 0) return EXPECTED_CTR[1];
  if (rounded <= 20) return EXPECTED_CTR[rounded];
  return 0.004 * (20 / pos);
}

// ─── Auth (copied from gsc-audit-pull.mjs) ──────────────────────────────────
async function getAccessToken(credentials, scope) {
  const header = { alg: 'RS256', typ: 'JWT' };
  const now = Math.floor(Date.now() / 1000);
  const claim = { iss: credentials.client_email, scope, aud: 'https://oauth2.googleapis.com/token', exp: now + 3600, iat: now };
  const { createSign } = await import('crypto');
  const encode = (obj) => Buffer.from(JSON.stringify(obj)).toString('base64url');
  const unsignedToken = `${encode(header)}.${encode(claim)}`;
  const sign = createSign('RSA-SHA256');
  sign.update(unsignedToken);
  const jwt = `${unsignedToken}.${sign.sign(credentials.private_key, 'base64url')}`;
  const res = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer&assertion=${jwt}`,
  });
  if (!res.ok) throw new Error(`Token exchange: ${res.status} ${await res.text()}`);
  return (await res.json()).access_token;
}

async function gscQuery(accessToken, siteUrl, body) {
  const url = `https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(siteUrl)}/searchAnalytics/query`;
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${accessToken}` },
    body: JSON.stringify({ ...body, type: 'web' }),
  });
  if (!res.ok) {
    const text = await res.text();
    return { _error: `${res.status} ${text}` };
  }
  return res.json();
}

function dateRange(days) {
  const end = new Date(); end.setDate(end.getDate() - 3);
  const start = new Date(end); start.setDate(start.getDate() - days);
  return { startDate: start.toISOString().split('T')[0], endDate: end.toISOString().split('T')[0] };
}

// ─── Bleeder analysis per site ──────────────────────────────────────────────
function analyzeBleeders(siteUrl, pages) {
  const bleeders = [];
  for (const p of pages) {
    if (p.impressions < 100) continue;
    const eCtr = expectedCtr(p.position);
    const ratio = eCtr > 0 ? (p.ctr / eCtr) : 0;
    if (ratio >= 0.4) continue;

    // 28d → monthly extrapolation: 28d * (30/28). Lost clicks = (expected - actual) * impressions
    const lostClicks28d = (eCtr - p.ctr) * p.impressions;
    const lostMonthly = Math.round(lostClicks28d * (30 / 28));

    let severity;
    if (ratio === 0) severity = 'critical';
    else if (ratio < 0.15) severity = 'critical';
    else if (ratio < 0.3) severity = 'high';
    else severity = 'medium';

    bleeders.push({
      page: p.page,
      impressions: p.impressions,
      clicks: p.clicks,
      position: Number(p.position.toFixed(2)),
      actual_ctr: Number(p.ctr.toFixed(5)),
      expected_ctr: Number(eCtr.toFixed(5)),
      ratio: Number(ratio.toFixed(3)),
      lost_clicks_per_month: lostMonthly,
      severity,
    });
  }
  bleeders.sort((a, b) => b.lost_clicks_per_month - a.lost_clicks_per_month);
  return bleeders;
}

async function pullSiteBleeders(token, siteUrl) {
  const range = dateRange(28);
  console.log(`\n📊 ${siteUrl} — last 28 days (${range.startDate} → ${range.endDate})`);
  const pagesRes = await gscQuery(token, siteUrl, { ...range, dimensions: ['page'], rowLimit: 25000 });
  if (pagesRes._error) {
    console.warn(`   ⚠️  ${siteUrl}: ${pagesRes._error}`);
    return { site: siteUrl, range, error: pagesRes._error, bleeders: [] };
  }
  const pages = (pagesRes.rows || []).map(r => ({
    page: r.keys[0].replace(siteUrl, ''),
    clicks: r.clicks, impressions: r.impressions, ctr: r.ctr, position: r.position,
  }));
  const bleeders = analyzeBleeders(siteUrl, pages);
  console.log(`   Total pages: ${pages.length} | Bleeders flagged: ${bleeders.length}`);
  return { site: siteUrl, range, pageCount: pages.length, bleeders };
}

function pad(s, n) {
  s = String(s);
  if (s.length >= n) return s.slice(0, n - 1) + '…';
  return s + ' '.repeat(n - s.length);
}

function printTopBleeders(siteResult, topN = 20) {
  const { site, bleeders } = siteResult;
  if (!bleeders || !bleeders.length) {
    console.log(`\n   ${site}: 0 bleeders.`);
    return;
  }
  console.log(`\n── Top ${Math.min(topN, bleeders.length)} CTR bleeders for ${site} ──`);
  console.log(
    pad('PAGE', 56) + pad('IMPR', 7) + pad('POS', 7) +
    pad('CTR%', 8) + pad('EXP%', 8) + pad('RATIO', 7) +
    pad('LOST/MO', 9) + 'SEV'
  );
  console.log('─'.repeat(102));
  for (const b of bleeders.slice(0, topN)) {
    console.log(
      pad(b.page, 56) +
      pad(b.impressions, 7) +
      pad(b.position, 7) +
      pad((b.actual_ctr * 100).toFixed(2), 8) +
      pad((b.expected_ctr * 100).toFixed(2), 8) +
      pad(b.ratio.toFixed(2), 7) +
      pad(b.lost_clicks_per_month, 9) +
      b.severity
    );
  }
}

async function main() {
  const credentials = JSON.parse(readFileSync(CREDENTIALS_PATH, 'utf-8'));
  const token = await getAccessToken(credentials, 'https://www.googleapis.com/auth/webmasters.readonly');

  const out = {
    generated: new Date().toISOString(),
    methodology: {
      window: 'last 28 days, ending 3 days ago (GSC freshness lag)',
      threshold: 'actual_ctr / expected_ctr < 0.4 AND impressions >= 100',
      lost_clicks_formula: '(expected_ctr - actual_ctr) * impressions * (30/28)',
    },
    sites: {},
  };

  for (const site of SITES) {
    try {
      const result = await pullSiteBleeders(token, site);
      out.sites[site] = result;
    } catch (err) {
      console.warn(`   ⚠️  ${site}: ${err.message}`);
      out.sites[site] = { site, error: err.message, bleeders: [] };
    }
  }

  writeFileSync(OUT_PATH, JSON.stringify(out, null, 2), 'utf-8');

  // Print summaries
  let totalBleeders = 0;
  let totalLost = 0;
  for (const site of SITES) {
    const r = out.sites[site];
    if (r && r.bleeders) {
      printTopBleeders(r, 20);
      totalBleeders += r.bleeders.length;
      totalLost += r.bleeders.reduce((s, b) => s + b.lost_clicks_per_month, 0);
    }
  }

  console.log(`\n═══════════════════════════════════════════════════════════`);
  console.log(`✅ Total bleeders identified: ${totalBleeders}`);
  console.log(`💸 Estimated total lost clicks/month: ${totalLost.toLocaleString()}`);
  console.log(`📄 Output: ${OUT_PATH}`);
}

main().catch(err => { console.error('FATAL:', err); process.exit(1); });
