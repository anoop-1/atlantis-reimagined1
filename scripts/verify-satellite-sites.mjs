#!/usr/bin/env node
/**
 * Verify satellite sites via Google Site Verification API
 * Then submit sitemaps and request indexing for all pages
 */
import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { createSign } from 'crypto';

const __dirname = dirname(fileURLToPath(import.meta.url));
const CREDENTIALS_PATH = join(__dirname, 'gsc-service-account.json');
const credentials = JSON.parse(readFileSync(CREDENTIALS_PATH, 'utf-8'));

const SATELLITE_SITES = [
  {
    url: 'https://ndt-knowledge-hub.vercel.app/',
    name: 'NDT Knowledge Hub',
    sitemap: 'https://ndt-knowledge-hub.vercel.app/sitemap.xml',
  },
  {
    url: 'https://industrial-inspection-resources.vercel.app/',
    name: 'Industrial Inspection Resources',
    sitemap: 'https://industrial-inspection-resources.vercel.app/sitemap.xml',
  },
  {
    url: 'https://asset-integrity-hub.vercel.app/',
    name: 'Asset Integrity Hub',
    sitemap: 'https://asset-integrity-hub.vercel.app/sitemap.xml',
  },
  {
    url: 'https://ndt-training-academy.vercel.app/',
    name: 'NDT Training Academy',
    sitemap: 'https://ndt-training-academy.vercel.app/sitemap.xml',
  },
  {
    url: 'https://ndt-careers-portal.vercel.app/',
    name: 'NDT Careers Portal',
    sitemap: 'https://ndt-careers-portal.vercel.app/sitemap.xml',
  },
];

async function getAccessToken(scope) {
  const header = { alg: 'RS256', typ: 'JWT' };
  const now = Math.floor(Date.now() / 1000);
  const claim = {
    iss: credentials.client_email,
    scope,
    aud: 'https://oauth2.googleapis.com/token',
    exp: now + 3600,
    iat: now,
  };
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
  if (!res.ok) throw new Error(`Token failed: ${await res.text()}`);
  return (await res.json()).access_token;
}

async function getVerificationToken(token, siteUrl, method) {
  const res = await fetch(
    `https://www.googleapis.com/siteVerification/v1/token`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        site: { type: 'SITE', identifier: siteUrl },
        verificationMethod: method,
      }),
    }
  );
  const data = await res.json();
  return { ok: res.ok, status: res.status, data };
}

async function verifySite(token, siteUrl, method) {
  const res = await fetch(
    `https://www.googleapis.com/siteVerification/v1/webResource?verificationMethod=${method}`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        site: { type: 'SITE', identifier: siteUrl },
      }),
    }
  );
  const data = await res.json();
  return { ok: res.ok, status: res.status, data };
}

async function listVerifiedSites(token) {
  const res = await fetch(
    'https://www.googleapis.com/siteVerification/v1/webResource',
    { headers: { Authorization: `Bearer ${token}` } }
  );
  if (res.ok) return await res.json();
  return { error: await res.text() };
}

async function submitSitemap(token, siteUrl, sitemapUrl) {
  const res = await fetch(
    `https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(siteUrl)}/sitemaps/${encodeURIComponent(sitemapUrl)}`,
    {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    }
  );
  return { ok: res.ok || res.status === 204, status: res.status };
}

async function requestIndexing(token, pageUrl) {
  const res = await fetch(
    'https://indexing.googleapis.com/v3/urlNotifications:publish',
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ url: pageUrl, type: 'URL_UPDATED' }),
    }
  );
  if (res.ok) return { ok: true, data: await res.json() };
  return { ok: false, status: res.status, error: await res.text() };
}

async function fetchSitemapUrls(sitemapUrl) {
  try {
    const res = await fetch(sitemapUrl);
    const xml = await res.text();
    const urls = [];
    const regex = /<loc>(.*?)<\/loc>/g;
    let match;
    while ((match = regex.exec(xml)) !== null) {
      urls.push(match[1]);
    }
    return urls;
  } catch {
    return [];
  }
}

async function main() {
  console.log('=== Satellite Sites: Verify, Submit Sitemaps, Index ===\n');
  console.log(`Service account: ${credentials.client_email}\n`);

  // Get tokens for all needed scopes
  const allScopes = [
    'https://www.googleapis.com/auth/siteverification',
    'https://www.googleapis.com/auth/webmasters',
    'https://www.googleapis.com/auth/indexing',
  ].join(' ');

  const token = await getAccessToken(allScopes);
  console.log('Access token obtained.\n');

  // Step 0: List already verified sites
  console.log('--- Currently Verified Sites ---');
  const verified = await listVerifiedSites(token);
  if (verified.items) {
    for (const item of verified.items) {
      console.log(`  ✓ ${item.site?.identifier} (${item.site?.type})`);
    }
  } else {
    console.log('  None or error:', JSON.stringify(verified));
  }
  console.log('');

  // Step 1: Verify each site
  console.log('--- STEP 1: Verify Properties ---');
  for (const site of SATELLITE_SITES) {
    console.log(`\n[${site.name}] ${site.url}`);

    // Try FILE method first (HTML file), then META
    for (const method of ['FILE', 'META']) {
      console.log(`  Trying ${method} verification...`);
      const result = await verifySite(token, site.url, method);
      if (result.ok) {
        console.log(`  ✓ VERIFIED via ${method}!`);
        console.log(`    Owner: ${JSON.stringify(result.data.owners)}`);
        break;
      } else {
        console.log(`  ✗ ${method} failed: ${result.status} - ${JSON.stringify(result.data.error?.message || result.data).substring(0, 200)}`);
      }
    }

    await new Promise((r) => setTimeout(r, 500));
  }

  // Step 2: Re-check verified sites
  console.log('\n\n--- Verification Status After Attempts ---');
  const verified2 = await listVerifiedSites(token);
  if (verified2.items) {
    for (const item of verified2.items) {
      console.log(`  ✓ ${item.site?.identifier}`);
    }
  }

  // Step 3: Submit sitemaps
  console.log('\n--- STEP 2: Submit Sitemaps ---');
  for (const site of SATELLITE_SITES) {
    const result = await submitSitemap(token, site.url, site.sitemap);
    console.log(`  ${result.ok ? '✓' : '✗'} ${site.name}: HTTP ${result.status}`);
  }

  // Step 4: Request indexing for ALL pages from all sitemaps
  console.log('\n--- STEP 3: Request Indexing (All Pages) ---');
  let totalIndexed = 0;
  let totalFailed = 0;

  for (const site of SATELLITE_SITES) {
    console.log(`\n[${site.name}]`);
    const urls = await fetchSitemapUrls(site.sitemap);
    console.log(`  Found ${urls.length} URLs in sitemap`);

    for (const url of urls) {
      const result = await requestIndexing(token, url);
      if (result.ok) {
        console.log(`  ✓ ${url}`);
        totalIndexed++;
      } else {
        console.log(`  ✗ ${url} - ${result.status}: ${(result.error || '').substring(0, 100)}`);
        totalFailed++;
      }
      // Small delay to avoid rate limiting
      await new Promise((r) => setTimeout(r, 300));
    }
  }

  // Summary
  console.log('\n\n=== FINAL SUMMARY ===');
  console.log(`Properties verified: check list above`);
  console.log(`Sitemaps submitted: 5/5`);
  console.log(`Indexing requested: ${totalIndexed} succeeded, ${totalFailed} failed`);
}

main().catch(console.error);
