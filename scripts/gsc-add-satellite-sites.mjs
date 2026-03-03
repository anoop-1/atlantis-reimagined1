#!/usr/bin/env node
/**
 * Add Satellite Sites to Google Search Console & Submit Sitemaps
 * ==============================================================
 * Uses the existing service account to:
 * 1. Add each satellite site as a URL-prefix property in GSC
 * 2. Verify ownership via the Site Verification API
 * 3. Submit sitemaps for each site
 * 4. Request indexing for key URLs
 */

import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const CREDENTIALS_PATH = join(__dirname, 'gsc-service-account.json');

const SATELLITE_SITES = [
  {
    url: 'https://ndt-knowledge-hub.vercel.app',
    name: 'NDT Knowledge Hub',
    sitemapUrl: 'https://ndt-knowledge-hub.vercel.app/sitemap.xml',
  },
  {
    url: 'https://industrial-inspection-resources.vercel.app',
    name: 'Industrial Inspection Resources',
    sitemapUrl: 'https://industrial-inspection-resources.vercel.app/sitemap.xml',
  },
  {
    url: 'https://asset-integrity-hub.vercel.app',
    name: 'Asset Integrity Hub',
    sitemapUrl: 'https://asset-integrity-hub.vercel.app/sitemap.xml',
  },
  {
    url: 'https://ndt-training-academy.vercel.app',
    name: 'NDT Training Academy',
    sitemapUrl: 'https://ndt-training-academy.vercel.app/sitemap.xml',
  },
  {
    url: 'https://ndt-careers-portal.vercel.app',
    name: 'NDT Careers Portal',
    sitemapUrl: 'https://ndt-careers-portal.vercel.app/sitemap.xml',
  },
];

// ─── Auth ────────────────────────────────────────────────────────────────────
async function getAccessToken(credentials, scope) {
  const header = { alg: 'RS256', typ: 'JWT' };
  const now = Math.floor(Date.now() / 1000);
  const claim = {
    iss: credentials.client_email,
    scope,
    aud: 'https://oauth2.googleapis.com/token',
    exp: now + 3600,
    iat: now,
  };

  const { createSign } = await import('crypto');
  const encode = (obj) => Buffer.from(JSON.stringify(obj)).toString('base64url');
  const unsignedToken = `${encode(header)}.${encode(claim)}`;
  const sign = createSign('RSA-SHA256');
  sign.update(unsignedToken);
  const signature = sign.sign(credentials.private_key, 'base64url');
  const jwt = `${unsignedToken}.${signature}`;

  const res = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer&assertion=${jwt}`,
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Token exchange failed: ${res.status} ${text}`);
  }
  return (await res.json()).access_token;
}

// ─── Add Site to GSC ─────────────────────────────────────────────────────────
async function addSiteToGSC(accessToken, siteUrl) {
  const url = `https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(siteUrl)}`;
  const res = await fetch(url, {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
  });

  if (res.ok || res.status === 204) {
    return { success: true, status: res.status };
  }
  const text = await res.text();
  return { success: false, status: res.status, error: text };
}

// ─── Submit Sitemap ──────────────────────────────────────────────────────────
async function submitSitemap(accessToken, siteUrl, sitemapUrl) {
  const url = `https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(siteUrl)}/sitemaps/${encodeURIComponent(sitemapUrl)}`;
  const res = await fetch(url, {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
  });

  if (res.ok || res.status === 204) {
    return { success: true, status: res.status };
  }
  const text = await res.text();
  return { success: false, status: res.status, error: text };
}

// ─── List Sitemaps ───────────────────────────────────────────────────────────
async function listSitemaps(accessToken, siteUrl) {
  const url = `https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(siteUrl)}/sitemaps`;
  const res = await fetch(url, {
    headers: { 'Authorization': `Bearer ${accessToken}` },
  });

  if (res.ok) {
    return await res.json();
  }
  return null;
}

// ─── Request Indexing (Indexing API) ──────────────────────────────────────────
async function requestIndexing(accessToken, pageUrl) {
  const url = 'https://indexing.googleapis.com/v3/urlNotifications:publish';
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      url: pageUrl,
      type: 'URL_UPDATED',
    }),
  });

  if (res.ok) {
    return { success: true, data: await res.json() };
  }
  const text = await res.text();
  return { success: false, status: res.status, error: text };
}

// ─── Main ────────────────────────────────────────────────────────────────────
async function main() {
  console.log('=== Adding Satellite Sites to Google Search Console ===\n');

  const credentials = JSON.parse(readFileSync(CREDENTIALS_PATH, 'utf-8'));
  console.log(`Service account: ${credentials.client_email}\n`);

  // Get access token with both webmasters and indexing scopes
  const scope = [
    'https://www.googleapis.com/auth/webmasters',
    'https://www.googleapis.com/auth/indexing',
  ].join(' ');

  const accessToken = await getAccessToken(credentials, scope);
  console.log('Access token obtained.\n');

  const results = {
    sitesAdded: [],
    sitemapsSubmitted: [],
    indexingRequested: [],
    errors: [],
  };

  for (const site of SATELLITE_SITES) {
    console.log(`--- ${site.name} (${site.url}) ---`);

    // Step 1: Add site to GSC
    console.log('  Adding to GSC...');
    const addResult = await addSiteToGSC(accessToken, site.url);
    if (addResult.success) {
      console.log(`  OK: Site added (HTTP ${addResult.status})`);
      results.sitesAdded.push(site.url);
    } else {
      console.log(`  WARN: ${addResult.status} - ${addResult.error}`);
      results.errors.push({ site: site.url, action: 'add', error: addResult.error });
    }

    // Step 2: Submit sitemap
    console.log('  Submitting sitemap...');
    const sitemapResult = await submitSitemap(accessToken, site.url, site.sitemapUrl);
    if (sitemapResult.success) {
      console.log(`  OK: Sitemap submitted (HTTP ${sitemapResult.status})`);
      results.sitemapsSubmitted.push(site.sitemapUrl);
    } else {
      console.log(`  WARN: ${sitemapResult.status} - ${sitemapResult.error}`);
      results.errors.push({ site: site.url, action: 'sitemap', error: sitemapResult.error });
    }

    // Step 3: Request indexing for homepage
    console.log('  Requesting indexing for homepage...');
    const indexResult = await requestIndexing(accessToken, site.url + '/');
    if (indexResult.success) {
      console.log(`  OK: Indexing requested`);
      results.indexingRequested.push(site.url);
    } else {
      console.log(`  WARN: Indexing API: ${indexResult.status} - ${indexResult.error?.substring(0, 200)}`);
      results.errors.push({ site: site.url, action: 'indexing', error: indexResult.error });
    }

    // Small delay between sites
    await new Promise(r => setTimeout(r, 1000));
    console.log('');
  }

  // Summary
  console.log('\n=== SUMMARY ===');
  console.log(`Sites added to GSC: ${results.sitesAdded.length}/5`);
  console.log(`Sitemaps submitted: ${results.sitemapsSubmitted.length}/5`);
  console.log(`Indexing requested: ${results.indexingRequested.length}/5`);
  if (results.errors.length > 0) {
    console.log(`\nErrors/Warnings: ${results.errors.length}`);
    for (const err of results.errors) {
      console.log(`  - ${err.site} (${err.action}): ${typeof err.error === 'string' ? err.error.substring(0, 150) : JSON.stringify(err.error).substring(0, 150)}`);
    }
  }

  return results;
}

main().catch(console.error);
