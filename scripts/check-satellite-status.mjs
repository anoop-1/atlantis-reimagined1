#!/usr/bin/env node
/**
 * Check GSC status for all 5 satellite sites
 */
import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { createSign } from 'crypto';

const __dirname = dirname(fileURLToPath(import.meta.url));
const CREDENTIALS_PATH = join(__dirname, 'gsc-service-account.json');
const credentials = JSON.parse(readFileSync(CREDENTIALS_PATH, 'utf-8'));

async function getAccessToken() {
  const header = { alg: 'RS256', typ: 'JWT' };
  const now = Math.floor(Date.now() / 1000);
  const claim = {
    iss: credentials.client_email,
    scope: 'https://www.googleapis.com/auth/webmasters',
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

const satellites = [
  'https://ndt-knowledge-hub.vercel.app/',
  'https://industrial-inspection-resources.vercel.app/',
  'https://asset-integrity-hub.vercel.app/',
  'https://ndt-training-academy.vercel.app/',
  'https://ndt-careers-portal.vercel.app/',
];

async function main() {
  const token = await getAccessToken();
  console.log('Service account:', credentials.client_email);
  console.log('Token obtained.\n');

  for (const siteUrl of satellites) {
    console.log(`\n=== ${siteUrl} ===`);

    // Get search analytics (last 28 days)
    const analyticsRes = await fetch(
      `https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(siteUrl)}/searchAnalytics/query`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          startDate: '2026-02-04',
          endDate: '2026-03-04',
          dimensions: ['page'],
          rowLimit: 25,
        }),
      }
    );

    if (analyticsRes.ok) {
      const data = await analyticsRes.json();
      if (data.rows && data.rows.length > 0) {
        console.log(`  Indexed pages with impressions: ${data.rows.length}`);
        let totalImpressions = 0, totalClicks = 0;
        for (const row of data.rows) {
          totalImpressions += row.impressions;
          totalClicks += row.clicks;
        }
        console.log(`  Total impressions: ${totalImpressions}, clicks: ${totalClicks}`);
        console.log('  Top pages:');
        data.rows.slice(0, 5).forEach((r) => {
          console.log(`    ${r.keys[0]} - ${r.impressions} imp, ${r.clicks} clicks, pos ${r.position.toFixed(1)}`);
        });
      } else {
        console.log('  No search analytics data yet (site may still be getting indexed)');
      }
    } else {
      console.log(`  Analytics query failed: HTTP ${analyticsRes.status}`);
    }

    // Get sitemap details
    const smRes = await fetch(
      `https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(siteUrl)}/sitemaps/${encodeURIComponent(siteUrl + 'sitemap.xml')}`,
      { headers: { Authorization: `Bearer ${token}` } }
    );
    if (smRes.ok) {
      const smData = await smRes.json();
      const c = smData.contents?.[0];
      console.log(`  Sitemap: submitted=${c?.submitted ?? 'N/A'}, indexed=${c?.indexed ?? 'N/A'}, lastDownloaded=${smData.lastDownloaded ?? 'never'}`);
    } else {
      console.log(`  Sitemap status: HTTP ${smRes.status}`);
    }
  }
}

main().catch(console.error);
