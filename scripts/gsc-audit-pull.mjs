#!/usr/bin/env node
/**
 * One-shot GSC data pull for the April 2026 SEO audit.
 * Pulls, for BOTH atlantisndt.com + ndt-connect.com:
 *   - page × query (striking-distance finder)
 *   - country × clicks
 *   - device × clicks
 *   - 28d + 90d summaries
 *   - per-pillar query buckets
 * Writes one consolidated JSON to scripts/gsc-audit-2026-04.json.
 */
import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const CREDENTIALS_PATH = join(__dirname, 'gsc-service-account.json');
const SITES = ['https://atlantisndt.com', 'https://ndt-connect.com'];
const OUT_PATH = join(__dirname, 'gsc-audit-2026-04.json');

async function getAccessToken(credentials, scope) {
  const header = { alg: 'RS256', typ: 'JWT' };
  const now = Math.floor(Date.now() / 1000);
  const claim = { iss: credentials.client_email, scope, aud: 'https://oauth2.googleapis.com/token', exp: now + 3600, iat: now };
  const { createSign } = await import('crypto');
  const encode = (obj) => Buffer.from(JSON.stringify(obj)).toString('base64url');
  const unsignedToken = `${encode(header)}.${encode(claim)}`;
  const sign = createSign('RSA-SHA256'); sign.update(unsignedToken);
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
    // Don't hard-fail — some properties may not be verified / may have no data
    return { _error: `${res.status} ${text}` };
  }
  return res.json();
}

function dateRange(days) {
  const end = new Date(); end.setDate(end.getDate() - 3);
  const start = new Date(end); start.setDate(start.getDate() - days);
  return { startDate: start.toISOString().split('T')[0], endDate: end.toISOString().split('T')[0] };
}

async function pullSite(accessToken, siteUrl, days) {
  const range = dateRange(days);
  console.log(`\n📊 ${siteUrl} — last ${days} days (${range.startDate} → ${range.endDate})`);

  // 1. Page-level aggregate
  const pagesRes = await gscQuery(accessToken, siteUrl, { ...range, dimensions: ['page'], rowLimit: 25000 });
  const pages = (pagesRes.rows || []).map(r => ({
    page: r.keys[0].replace(siteUrl, ''),
    clicks: r.clicks, impressions: r.impressions, ctr: r.ctr, position: r.position,
  }));

  // 2. Query-level aggregate
  const queriesRes = await gscQuery(accessToken, siteUrl, { ...range, dimensions: ['query'], rowLimit: 25000 });
  const queries = (queriesRes.rows || []).map(r => ({
    query: r.keys[0],
    clicks: r.clicks, impressions: r.impressions, ctr: r.ctr, position: r.position,
  }));

  // 3. Page × Query (striking distance): top 5000 rows
  const pqRes = await gscQuery(accessToken, siteUrl, { ...range, dimensions: ['page', 'query'], rowLimit: 25000 });
  const pageQueries = (pqRes.rows || []).map(r => ({
    page: r.keys[0].replace(siteUrl, ''), query: r.keys[1],
    clicks: r.clicks, impressions: r.impressions, ctr: r.ctr, position: r.position,
  }));

  // 4. Country aggregate
  const countryRes = await gscQuery(accessToken, siteUrl, { ...range, dimensions: ['country'], rowLimit: 500 });
  const countries = (countryRes.rows || []).map(r => ({
    country: r.keys[0], clicks: r.clicks, impressions: r.impressions, ctr: r.ctr, position: r.position,
  }));

  // 5. Device aggregate
  const deviceRes = await gscQuery(accessToken, siteUrl, { ...range, dimensions: ['device'], rowLimit: 10 });
  const devices = (deviceRes.rows || []).map(r => ({
    device: r.keys[0], clicks: r.clicks, impressions: r.impressions, ctr: r.ctr, position: r.position,
  }));

  const totalClicks = pages.reduce((s, p) => s + p.clicks, 0);
  const totalImpressions = pages.reduce((s, p) => s + p.impressions, 0);

  console.log(`   Clicks: ${totalClicks} | Impr: ${totalImpressions} | CTR: ${(totalClicks/(totalImpressions||1)*100).toFixed(2)}% | Pages: ${pages.length} | Queries: ${queries.length}`);

  return { site: siteUrl, range, pages, queries, pageQueries, countries, devices, totals: { clicks: totalClicks, impressions: totalImpressions } };
}

async function main() {
  const credentials = JSON.parse(readFileSync(CREDENTIALS_PATH, 'utf-8'));
  const token = await getAccessToken(credentials, 'https://www.googleapis.com/auth/webmasters.readonly');

  const out = { generated: new Date().toISOString(), sites: {} };
  for (const site of SITES) {
    try {
      const data28 = await pullSite(token, site, 28);
      const data90 = await pullSite(token, site, 90);
      out.sites[site] = { '28d': data28, '90d': data90 };
    } catch (err) {
      console.warn(`   ⚠️  ${site}: ${err.message}`);
      out.sites[site] = { error: err.message };
    }
  }

  writeFileSync(OUT_PATH, JSON.stringify(out, null, 2), 'utf-8');
  const sizeKb = (JSON.stringify(out).length / 1024).toFixed(1);
  console.log(`\n✅ Audit data written to ${OUT_PATH} (${sizeKb} KB)`);
}

main().catch(err => { console.error(err); process.exit(1); });
