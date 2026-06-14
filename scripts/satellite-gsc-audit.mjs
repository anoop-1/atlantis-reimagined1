#!/usr/bin/env node
/**
 * Satellite GSC audit — for each satellite vercel.app domain:
 *   1. Pull Search Analytics (clicks/imp/CTR/position last 30d)
 *   2. Inspect sample URL via URL Inspection API to find indexing status
 *   3. List sitemaps known to GSC
 * Output: scripts/satellite-gsc-audit-2026-06-14.json + console table
 */
import { readFileSync, writeFileSync, existsSync, readdirSync } from 'fs';
import { createSign } from 'crypto';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const SAT = join(ROOT, 'backlink-sites');

const SAT_NAMES = readdirSync(SAT, { withFileTypes: true })
  .filter(d => d.isDirectory())
  .map(d => d.name)
  .sort();

// Use primary SA — many satellites are verified under x-jigsaw-293515
const cred = JSON.parse(readFileSync(join(__dirname, 'gsc-service-account.json'), 'utf-8'));

async function getToken(scope) {
  const now = Math.floor(Date.now() / 1000);
  const enc = o => Buffer.from(JSON.stringify(o)).toString('base64url');
  const h = enc({ alg: 'RS256', typ: 'JWT' });
  const c = enc({ iss: cred.client_email, scope, aud: 'https://oauth2.googleapis.com/token', exp: now + 3600, iat: now });
  const u = h + '.' + c;
  const sig = createSign('RSA-SHA256').update(u).sign(cred.private_key, 'base64url');
  const r = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: 'grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer&assertion=' + u + '.' + sig,
  });
  const j = await r.json();
  return j.access_token;
}

async function gscQuery(token, site, body) {
  const r = await fetch(`https://searchconsole.googleapis.com/webmasters/v3/sites/${encodeURIComponent(site)}/searchAnalytics/query`, {
    method: 'POST',
    headers: { Authorization: 'Bearer ' + token, 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  return r.json();
}

async function listSitemaps(token, site) {
  const r = await fetch(`https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(site)}/sitemaps`, {
    headers: { Authorization: 'Bearer ' + token },
  });
  return r.json();
}

async function inspectUrl(token, siteUrl, inspectionUrl) {
  const r = await fetch('https://searchconsole.googleapis.com/v1/urlInspection/index:inspect', {
    method: 'POST',
    headers: { Authorization: 'Bearer ' + token, 'Content-Type': 'application/json' },
    body: JSON.stringify({ inspectionUrl, siteUrl, languageCode: 'en-US' }),
  });
  return r.json();
}

async function audit(name) {
  const host = `${name}.vercel.app`;
  // Try sc-domain: first, fall back to https://
  const variants = [
    `sc-domain:${host}`,
    `https://${host}/`,
  ];
  const wToken = await getToken('https://www.googleapis.com/auth/webmasters.readonly');
  const today = new Date();
  const end = new Date(today.getTime() - 3 * 86400000).toISOString().slice(0, 10);
  const start = new Date(today.getTime() - 30 * 86400000).toISOString().slice(0, 10);

  for (const site of variants) {
    const sa = await gscQuery(wToken, site, { startDate: start, endDate: end, dimensions: ['page'], rowLimit: 50, dataState: 'all' });
    if (sa && sa.error) {
      if (sa.error.code === 403) continue; // not verified for this variant; try next
      return { name, host, error: sa.error.message, code: sa.error.code };
    }
    const rows = sa.rows || [];
    const totalClicks = rows.reduce((s, r) => s + r.clicks, 0);
    const totalImp = rows.reduce((s, r) => s + r.impressions, 0);

    const sitemapsRes = await listSitemaps(wToken, site);
    const sitemaps = (sitemapsRes.sitemap || []).map(sm => ({
      path: sm.path,
      lastSubmitted: sm.lastSubmitted,
      contents: sm.contents ? sm.contents.map(c => ({ type: c.type, submitted: c.submitted, indexed: c.indexed })) : [],
      errors: sm.errors,
      warnings: sm.warnings,
      isPending: sm.isPending,
      isSitemapsIndex: sm.isSitemapsIndex,
    }));

    // Inspect homepage as canary
    const homepage = `https://${host}/`;
    const inspect = await inspectUrl(wToken, site, homepage).catch(e => ({ error: e.message }));
    const indexStatus = inspect?.inspectionResult?.indexStatusResult || {};

    // Inspect 2-3 article URLs
    let articleSamples = [];
    if (rows.length > 0) {
      const samples = rows.slice(0, 3).map(r => r.keys[0]);
      for (const u of samples) {
        const ins = await inspectUrl(wToken, site, u).catch(e => null);
        articleSamples.push({
          url: u,
          coverage: ins?.inspectionResult?.indexStatusResult?.coverageState || 'unknown',
          robotsTxtState: ins?.inspectionResult?.indexStatusResult?.robotsTxtState,
          indexingState: ins?.inspectionResult?.indexStatusResult?.indexingState,
          verdict: ins?.inspectionResult?.indexStatusResult?.verdict,
          lastCrawlTime: ins?.inspectionResult?.indexStatusResult?.lastCrawlTime,
          pageFetchState: ins?.inspectionResult?.indexStatusResult?.pageFetchState,
        });
      }
    }

    return {
      name,
      host,
      site,
      clicks30d: totalClicks,
      imp30d: totalImp,
      pagesWithImp: rows.length,
      homepage: {
        coverage: indexStatus.coverageState,
        verdict: indexStatus.verdict,
        robotsTxt: indexStatus.robotsTxtState,
        indexingState: indexStatus.indexingState,
        pageFetchState: indexStatus.pageFetchState,
        lastCrawlTime: indexStatus.lastCrawlTime,
        canonical: indexStatus.googleCanonical,
        userCanonical: indexStatus.userCanonical,
      },
      sitemaps,
      articleSamples,
    };
  }
  return { name, host, error: 'not verified in any variant' };
}

const results = [];
for (let i = 0; i < SAT_NAMES.length; i++) {
  const n = SAT_NAMES[i];
  console.log(`[${i+1}/${SAT_NAMES.length}] auditing ${n}...`);
  try {
    const r = await audit(n);
    results.push(r);
    if (r.error) {
      console.log(`  ERROR: ${r.error}`);
    } else {
      console.log(`  clicks30d=${r.clicks30d} imp30d=${r.imp30d} pagesWithImp=${r.pagesWithImp}`);
      console.log(`  homepage: coverage=${r.homepage.coverage} verdict=${r.homepage.verdict} pageFetch=${r.homepage.pageFetchState}`);
      if (r.sitemaps.length > 0) {
        for (const sm of r.sitemaps) {
          const ind = sm.contents.reduce((s, c) => s + (c.indexed || 0), 0);
          const sub = sm.contents.reduce((s, c) => s + (c.submitted || 0), 0);
          console.log(`  sitemap ${sm.path}: submitted=${sub} indexed=${ind} ${sm.errors ? 'errors=' + sm.errors : ''}`);
        }
      } else {
        console.log(`  NO SITEMAPS SUBMITTED`);
      }
      r.articleSamples.forEach(a => console.log(`    article ${a.coverage} / ${a.verdict} / ${a.pageFetchState} ${a.url}`));
    }
  } catch (e) {
    console.log(`  FAIL: ${e.message}`);
    results.push({ name: n, error: e.message });
  }
}

writeFileSync(join(__dirname, 'satellite-gsc-audit-2026-06-14.json'), JSON.stringify({ generated: new Date().toISOString(), results }, null, 2));
console.log(`\nSaved → scripts/satellite-gsc-audit-2026-06-14.json`);
