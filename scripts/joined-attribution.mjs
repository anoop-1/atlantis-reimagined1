#!/usr/bin/env node
/**
 * GSC × GA4 Joined Attribution
 * ============================
 * Joins GSC search data with GA4 session/engagement data per landing page.
 * Identifies:
 *   - Bad-intent traffic (high impressions, low GA engagement) → noindex/rewrite candidates
 *   - Hidden gems (low impressions, high engagement) → backlink/internal-link push candidates
 *
 * USAGE:
 *   node scripts/joined-attribution.mjs
 */

import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const CREDENTIALS_PATH = join(__dirname, 'gsc-service-account.json');
const SITE = 'https://atlantisndt.com';
const GA4_PROPERTY_ID = '517088706';

const ym = (() => {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`;
})();
const OUT_PATH = join(__dirname, `joined-attribution-${ym}.json`);

// ─── Auth ────────────────────────────────────────────────────────────────────
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

// ─── GSC ─────────────────────────────────────────────────────────────────────
async function gscQuery(accessToken, siteUrl, body) {
  const url = `https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(siteUrl)}/searchAnalytics/query`;
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${accessToken}` },
    body: JSON.stringify({ ...body, type: 'web' }),
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`GSC query failed: ${res.status} ${text}`);
  }
  return res.json();
}

// ─── GA4 ─────────────────────────────────────────────────────────────────────
async function ga4RunReport(accessToken, propertyId, body) {
  const url = `https://analyticsdata.googleapis.com/v1beta/properties/${propertyId}:runReport`;
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${accessToken}` },
    body: JSON.stringify(body),
  });
  const text = await res.text();
  if (!res.ok) throw new Error(`GA4 runReport (${propertyId}) ${res.status}: ${text}`);
  return JSON.parse(text);
}

// ─── Helpers ─────────────────────────────────────────────────────────────────
function dateRangeGSC(days) {
  const end = new Date(); end.setDate(end.getDate() - 3);
  const start = new Date(end); start.setDate(start.getDate() - days);
  return { startDate: start.toISOString().split('T')[0], endDate: end.toISOString().split('T')[0] };
}

function dateRangeGA4(days) {
  const end = new Date(); end.setDate(end.getDate() - 1);
  const start = new Date(end); start.setDate(start.getDate() - days);
  return { startDate: start.toISOString().split('T')[0], endDate: end.toISOString().split('T')[0] };
}

function normalizePath(p) {
  if (!p) return '/';
  // Strip query + fragment
  let path = p.split('?')[0].split('#')[0];
  // Remove leading site URL if accidentally present
  path = path.replace(/^https?:\/\/[^/]+/, '');
  // Ensure leading slash
  if (!path.startsWith('/')) path = '/' + path;
  // Strip trailing slash (unless root)
  if (path.length > 1 && path.endsWith('/')) path = path.slice(0, -1);
  return path;
}

function pad(s, n) {
  s = String(s);
  if (s.length >= n) return s.slice(0, n - 1) + '…';
  return s + ' '.repeat(n - s.length);
}

// ─── Pull data ───────────────────────────────────────────────────────────────
async function pullGsc(token) {
  const range = dateRangeGSC(28);
  console.log(`\n📊 GSC: ${SITE} — ${range.startDate} → ${range.endDate}`);
  const res = await gscQuery(token, SITE, { ...range, dimensions: ['page'], rowLimit: 25000 });
  const map = new Map();
  for (const r of res.rows || []) {
    const path = normalizePath(r.keys[0].replace(SITE, ''));
    map.set(path, {
      clicks: r.clicks, impressions: r.impressions, ctr: r.ctr, position: r.position,
    });
  }
  console.log(`   Pages: ${map.size}`);
  return { range, pages: map };
}

async function pullGa4(token) {
  const range = dateRangeGA4(28);
  console.log(`\n📊 GA4: property ${GA4_PROPERTY_ID} — ${range.startDate} → ${range.endDate}`);
  const report = await ga4RunReport(token, GA4_PROPERTY_ID, {
    dateRanges: [{ startDate: range.startDate, endDate: range.endDate }],
    dimensions: [{ name: 'pagePath' }],
    metrics: [
      { name: 'sessions' },
      { name: 'engagedSessions' },
      { name: 'averageSessionDuration' },
      { name: 'screenPageViews' },
    ],
    limit: 50000,
  });
  const map = new Map();
  for (const row of report.rows || []) {
    const path = normalizePath(row.dimensionValues[0].value);
    const sessions = Number(row.metricValues[0].value) || 0;
    const engagedSessions = Number(row.metricValues[1].value) || 0;
    const avgSessionDuration = Number(row.metricValues[2].value) || 0;
    const pageViews = Number(row.metricValues[3].value) || 0;
    // De-dup: if normalization collapsed multiple rows to same path, sum sessions/engagedSessions/views
    if (map.has(path)) {
      const prev = map.get(path);
      const totalSessions = prev.sessions + sessions;
      map.set(path, {
        sessions: totalSessions,
        engagedSessions: prev.engagedSessions + engagedSessions,
        // weighted-avg by sessions
        averageSessionDuration: totalSessions > 0
          ? ((prev.averageSessionDuration * prev.sessions) + (avgSessionDuration * sessions)) / totalSessions
          : 0,
        pageViews: prev.pageViews + pageViews,
      });
    } else {
      map.set(path, { sessions, engagedSessions, averageSessionDuration: avgSessionDuration, pageViews });
    }
  }
  console.log(`   Pages: ${map.size}`);
  return { range, pages: map };
}

// ─── Join + flag ─────────────────────────────────────────────────────────────
function joinAndFlag(gsc, ga4) {
  const joined = [];
  for (const [path, gscRow] of gsc.pages.entries()) {
    const gaRow = ga4.pages.get(path);
    if (!gaRow) continue;
    const engagement_rate = gaRow.sessions > 0 ? gaRow.engagedSessions / gaRow.sessions : 0;
    const gsc_to_ga_ratio = gscRow.clicks > 0 ? gaRow.sessions / gscRow.clicks : null;
    joined.push({
      page: path,
      impressions: gscRow.impressions,
      clicks: gscRow.clicks,
      position: Number(gscRow.position.toFixed(2)),
      gsc_ctr: Number(gscRow.ctr.toFixed(5)),
      sessions: gaRow.sessions,
      engagedSessions: gaRow.engagedSessions,
      pageViews: gaRow.pageViews,
      avg_session_sec: Number(gaRow.averageSessionDuration.toFixed(1)),
      engagement_rate: Number(engagement_rate.toFixed(3)),
      gsc_to_ga_ratio: gsc_to_ga_ratio !== null ? Number(gsc_to_ga_ratio.toFixed(2)) : null,
    });
  }

  const badIntent = joined.filter(r => r.impressions >= 200 && r.engagement_rate < 0.30)
    .sort((a, b) => b.impressions - a.impressions);

  const hiddenGems = joined.filter(r => r.impressions < 50 && r.engagement_rate > 0.70 && r.sessions >= 5)
    .sort((a, b) => b.engagement_rate - a.engagement_rate || b.sessions - a.sessions);

  return { joinedCount: joined.length, badIntent, hiddenGems, joined };
}

function printTable(rows, title, topN = 15) {
  if (!rows.length) {
    console.log(`\n── ${title}: 0 ──`);
    return;
  }
  console.log(`\n── ${title} (top ${Math.min(topN, rows.length)} of ${rows.length}) ──`);
  console.log(
    pad('PAGE', 52) + pad('IMPR', 7) + pad('CLICKS', 8) +
    pad('SESS', 7) + pad('ENG%', 7) + pad('AVGSEC', 8) + pad('GA/GSC', 8)
  );
  console.log('─'.repeat(97));
  for (const r of rows.slice(0, topN)) {
    console.log(
      pad(r.page, 52) +
      pad(r.impressions, 7) +
      pad(r.clicks, 8) +
      pad(r.sessions, 7) +
      pad((r.engagement_rate * 100).toFixed(0), 7) +
      pad(r.avg_session_sec, 8) +
      pad(r.gsc_to_ga_ratio === null ? '—' : r.gsc_to_ga_ratio, 8)
    );
  }
}

async function main() {
  const credentials = JSON.parse(readFileSync(CREDENTIALS_PATH, 'utf-8'));

  // Two scopes — pull two separate access tokens.
  const gscToken = await getAccessToken(credentials, 'https://www.googleapis.com/auth/webmasters.readonly');
  const gaToken = await getAccessToken(credentials, 'https://www.googleapis.com/auth/analytics.readonly');

  const gsc = await pullGsc(gscToken);
  const ga4 = await pullGa4(gaToken);

  const result = joinAndFlag(gsc, ga4);

  const out = {
    generated: new Date().toISOString(),
    site: SITE,
    ga4PropertyId: GA4_PROPERTY_ID,
    ranges: { gsc: gsc.range, ga4: ga4.range },
    methodology: {
      join: 'inner join on normalized pagePath (strip query/fragment, drop trailing slash)',
      bad_intent: 'GSC impressions >= 200 AND GA engagement_rate < 0.30',
      hidden_gems: 'GSC impressions < 50 AND GA engagement_rate > 0.70 AND sessions >= 5',
      engagement_rate: 'engagedSessions / sessions',
      gsc_to_ga_ratio: 'GA sessions / GSC clicks',
    },
    counts: {
      gscPages: gsc.pages.size,
      ga4Pages: ga4.pages.size,
      joined: result.joinedCount,
      badIntent: result.badIntent.length,
      hiddenGems: result.hiddenGems.length,
    },
    badIntent: result.badIntent,
    hiddenGems: result.hiddenGems,
  };

  writeFileSync(OUT_PATH, JSON.stringify(out, null, 2), 'utf-8');

  console.log(`\n═══════════════════════════════════════════════════════════`);
  console.log(`Joined pages: ${result.joinedCount} (GSC ${gsc.pages.size} ∩ GA4 ${ga4.pages.size})`);
  printTable(result.badIntent, 'BAD INTENT — high-impression, low-engagement (noindex/rewrite candidates)', 15);
  printTable(result.hiddenGems, 'HIDDEN GEMS — low-impression, high-engagement (backlink/internal-link targets)', 15);
  console.log(`\n📄 Output: ${OUT_PATH}`);
}

main().catch(err => { console.error('FATAL:', err); process.exit(1); });
