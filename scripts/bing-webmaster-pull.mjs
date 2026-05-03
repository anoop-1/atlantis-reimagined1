#!/usr/bin/env node
/**
 * Bing Webmaster Tools Pull (TEMPLATE)
 * ====================================
 * Bing represents ~39% of search traffic for atlantisndt (per current GA4) but
 * we have NO Bing Webmaster Tools API setup yet.
 *
 * This script:
 *   - Reads a Bing API key from scripts/bing-api-key.json or env BING_API_KEY
 *   - If missing, prints clear setup steps and exits 0 (no crash)
 *   - If present, pulls page stats, top queries, crawl issues
 *   - Writes JSON to scripts/bing-audit-<YYYY-MM>.json
 *
 * Bing Webmaster Tools API docs:
 *   https://learn.microsoft.com/en-us/bingwebmaster/
 *   https://learn.microsoft.com/en-us/bingwebmaster/getting-access
 *
 * USAGE:
 *   node scripts/bing-webmaster-pull.mjs
 */

import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const KEY_PATH = join(__dirname, 'bing-api-key.json');
const SITE_URL = 'https://atlantisndt.com';

const ym = (() => {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`;
})();
const OUT_PATH = join(__dirname, `bing-audit-${ym}.json`);

const SETUP_INSTRUCTIONS = `
╔════════════════════════════════════════════════════════════════════════╗
║  Bing Webmaster Tools API key not found.                              ║
╠════════════════════════════════════════════════════════════════════════╣
║                                                                        ║
║  Setup steps:                                                          ║
║                                                                        ║
║  1. Sign in: https://www.bing.com/webmasters/                          ║
║                                                                        ║
║  2. Verify atlantisndt.com — three options:                            ║
║       a) XML file upload                                               ║
║       b) Meta tag (similar to existing GSC tag at meta name=           ║
║          "google-site-verification" content=                           ║
║          "afbI_z9kdB5yg6Sm11tqhvzz0M2iOo7Fb7jYCkgB460")                 ║
║       c) DNS CNAME / TXT record                                        ║
║       Or: import properties directly from Google Search Console        ║
║       (Settings → Import sites from GSC) — fastest for already-        ║
║       verified GSC sites.                                              ║
║                                                                        ║
║  3. Generate API key:                                                  ║
║       Settings (gear icon) → API Access → Generate                     ║
║       Docs: https://learn.microsoft.com/en-us/bingwebmaster/getting-access
║                                                                        ║
║  4. Save the key in ONE of these ways:                                 ║
║       a) scripts/bing-api-key.json with content:                       ║
║          { "apiKey": "YOUR_KEY_HERE" }                                 ║
║       b) Environment variable: BING_API_KEY=YOUR_KEY_HERE              ║
║                                                                        ║
║  5. Re-run: node scripts/bing-webmaster-pull.mjs                       ║
║                                                                        ║
║  Note: Add bing-api-key.json to .gitignore to prevent committing.      ║
║                                                                        ║
╚════════════════════════════════════════════════════════════════════════╝
`;

function loadApiKey() {
  // Env var takes precedence
  if (process.env.BING_API_KEY && process.env.BING_API_KEY.trim()) {
    return { source: 'env', apiKey: process.env.BING_API_KEY.trim() };
  }
  if (existsSync(KEY_PATH)) {
    try {
      const data = JSON.parse(readFileSync(KEY_PATH, 'utf-8'));
      if (data && data.apiKey) return { source: 'file', apiKey: data.apiKey };
    } catch (err) {
      console.error(`⚠️  Failed to parse ${KEY_PATH}: ${err.message}`);
      return null;
    }
  }
  return null;
}

// ─── Bing Webmaster API helpers ────────────────────────────────────────────
// API base: https://ssl.bing.com/webmaster/api.svc/json/
// All endpoints accept GET with apikey + siteUrl querystring.
// Docs: https://learn.microsoft.com/en-us/bingwebmaster/

async function bingGet(endpoint, params, apiKey) {
  const qs = new URLSearchParams({ apikey: apiKey, ...params }).toString();
  const url = `https://ssl.bing.com/webmaster/api.svc/json/${endpoint}?${qs}`;
  const res = await fetch(url, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
  });
  const text = await res.text();
  if (!res.ok) {
    return { _error: `${res.status} ${text}`, _endpoint: endpoint };
  }
  try {
    return JSON.parse(text);
  } catch {
    return { _raw: text, _endpoint: endpoint };
  }
}

async function getPageStats(apiKey, siteUrl) {
  return bingGet('GetPageStats', { siteUrl }, apiKey);
}

async function getQueryStats(apiKey, siteUrl) {
  return bingGet('GetQueryStats', { siteUrl }, apiKey);
}

async function getCrawlIssues(apiKey, siteUrl) {
  return bingGet('GetCrawlIssues', { siteUrl }, apiKey);
}

async function getRankAndTrafficStats(apiKey, siteUrl) {
  return bingGet('GetRankAndTrafficStats', { siteUrl }, apiKey);
}

// ─── Summarizers ────────────────────────────────────────────────────────────
function summarizePageStats(data) {
  if (!data || data._error) return { available: false, error: data && data._error };
  const rows = data.d || [];
  const totals = rows.reduce((acc, r) => {
    acc.clicks += Number(r.Clicks || 0);
    acc.impressions += Number(r.Impressions || 0);
    return acc;
  }, { clicks: 0, impressions: 0 });
  return {
    available: true,
    pageCount: rows.length,
    totals,
    topPages: rows
      .sort((a, b) => Number(b.Impressions || 0) - Number(a.Impressions || 0))
      .slice(0, 25)
      .map(r => ({
        page: r.Query || r.Page,
        impressions: Number(r.Impressions || 0),
        clicks: Number(r.Clicks || 0),
      })),
  };
}

function summarizeQueryStats(data) {
  if (!data || data._error) return { available: false, error: data && data._error };
  const rows = data.d || [];
  return {
    available: true,
    queryCount: rows.length,
    topQueries: rows
      .sort((a, b) => Number(b.Impressions || 0) - Number(a.Impressions || 0))
      .slice(0, 25)
      .map(r => ({
        query: r.Query,
        impressions: Number(r.Impressions || 0),
        clicks: Number(r.Clicks || 0),
        position: Number(r.AvgImpressionPosition || r.Position || 0),
      })),
  };
}

function summarizeCrawlIssues(data) {
  if (!data || data._error) return { available: false, error: data && data._error };
  const rows = data.d || [];
  const counts = {};
  for (const r of rows) {
    const code = r.HttpCode || 'unknown';
    counts[code] = (counts[code] || 0) + 1;
  }
  return {
    available: true,
    issueCount: rows.length,
    byHttpCode: counts,
    sample: rows.slice(0, 25),
  };
}

// ─── Main ───────────────────────────────────────────────────────────────────
async function main() {
  const key = loadApiKey();

  if (!key) {
    console.log(SETUP_INSTRUCTIONS);
    const stub = {
      generated: new Date().toISOString(),
      site: SITE_URL,
      status: 'NOT_CONFIGURED',
      reason: 'No Bing API key found at scripts/bing-api-key.json or env BING_API_KEY',
      next_steps: [
        'Sign in to https://www.bing.com/webmasters/',
        'Verify atlantisndt.com (or import from GSC)',
        'Settings → API Access → Generate key',
        'Save to scripts/bing-api-key.json as { "apiKey": "..." }',
        'Re-run: node scripts/bing-webmaster-pull.mjs',
      ],
      api_docs: 'https://learn.microsoft.com/en-us/bingwebmaster/',
    };
    writeFileSync(OUT_PATH, JSON.stringify(stub, null, 2), 'utf-8');
    console.log(`📄 Stub written to: ${OUT_PATH}`);
    return;
  }

  console.log(`🔑 Bing API key loaded from: ${key.source}`);
  console.log(`🌐 Site: ${SITE_URL}\n`);

  const [pageStats, queryStats, crawlIssues, rankStats] = await Promise.all([
    getPageStats(key.apiKey, SITE_URL),
    getQueryStats(key.apiKey, SITE_URL),
    getCrawlIssues(key.apiKey, SITE_URL),
    getRankAndTrafficStats(key.apiKey, SITE_URL),
  ]);

  const pageSummary = summarizePageStats(pageStats);
  const querySummary = summarizeQueryStats(queryStats);
  const crawlSummary = summarizeCrawlIssues(crawlIssues);

  const out = {
    generated: new Date().toISOString(),
    site: SITE_URL,
    status: 'OK',
    keySource: key.source,
    summaries: {
      pages: pageSummary,
      queries: querySummary,
      crawlIssues: crawlSummary,
    },
    raw: {
      pageStats,
      queryStats,
      crawlIssues,
      rankAndTrafficStats: rankStats,
    },
  };

  writeFileSync(OUT_PATH, JSON.stringify(out, null, 2), 'utf-8');

  // Stdout summary
  console.log(`═══════════════════════════════════════════════════════════`);
  console.log(`📊 BING WEBMASTER PULL — ${SITE_URL}`);
  console.log(`═══════════════════════════════════════════════════════════`);

  if (pageSummary.available) {
    console.log(`\nPage stats: ${pageSummary.pageCount} rows`);
    console.log(`  Total clicks: ${pageSummary.totals.clicks}`);
    console.log(`  Total impressions: ${pageSummary.totals.impressions}`);
    console.log(`  Top pages:`);
    for (const p of pageSummary.topPages.slice(0, 10)) {
      console.log(`    ${p.impressions.toString().padStart(6)} impr  ${p.clicks.toString().padStart(4)} clicks  ${p.page}`);
    }
  } else {
    console.log(`\n⚠️  Page stats: unavailable (${pageSummary.error || 'no data'})`);
  }

  if (querySummary.available) {
    console.log(`\nQuery stats: ${querySummary.queryCount} rows`);
    console.log(`  Top queries:`);
    for (const q of querySummary.topQueries.slice(0, 10)) {
      console.log(`    ${q.impressions.toString().padStart(6)} impr  ${q.clicks.toString().padStart(4)} clicks  pos ${q.position.toFixed(1).padStart(5)}  ${q.query}`);
    }
  } else {
    console.log(`\n⚠️  Query stats: unavailable (${querySummary.error || 'no data'})`);
  }

  if (crawlSummary.available) {
    console.log(`\nCrawl issues: ${crawlSummary.issueCount}`);
    for (const [code, n] of Object.entries(crawlSummary.byHttpCode)) {
      console.log(`  HTTP ${code}: ${n}`);
    }
  } else {
    console.log(`\n⚠️  Crawl issues: unavailable (${crawlSummary.error || 'no data'})`);
  }

  console.log(`\n📄 Output: ${OUT_PATH}`);
}

main().catch(err => { console.error('FATAL:', err); process.exit(1); });
