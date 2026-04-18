#!/usr/bin/env node
/**
 * GSC Setup All Properties for All Service Accounts
 * ===================================================
 * Adds ALL domains (primary + satellites) to GSC for ALL service accounts.
 * Each service account will be able to submit indexing requests for all properties.
 */

import { readFileSync, readdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { createSign } from 'crypto';

const __dirname = dirname(fileURLToPath(import.meta.url));

// ─── All Properties ─────────────────────────────────────────────────────────
const ALL_PROPERTIES = [
  // Primary domains
  'https://atlantisndt.com',
  'https://ndt-connect.com',
  // NDT Satellite sites (35)
  'https://advanced-ndt-techniques.vercel.app',
  'https://aerospace-ndt-standards.vercel.app',
  'https://api-certification-guide.vercel.app',
  'https://asset-integrity-hub.vercel.app',
  'https://coating-inspection-guide.vercel.app',
  'https://composite-testing-hub.vercel.app',
  'https://construction-ndt-guide.vercel.app',
  'https://corrosion-management-ndt.vercel.app',
  'https://heat-exchanger-ndt.vercel.app',
  'https://industrial-inspection-resources.vercel.app',
  'https://lng-inspection-hub.vercel.app',
  'https://manufacturing-ndt-quality.vercel.app',
  'https://marine-offshore-ndt.vercel.app',
  'https://middle-east-ndt-resource.vercel.app',
  'https://mining-ndt-hub.vercel.app',
  'https://ndt-automation-future.vercel.app',
  'https://ndt-careers-portal.vercel.app',
  'https://ndt-equipment-reviews.vercel.app',
  'https://ndt-knowledge-hub.vercel.app',
  'https://ndt-safety-compliance.vercel.app',
  'https://ndt-software-solutions.vercel.app',
  'https://ndt-standards-library.vercel.app',
  'https://ndt-training-academy.vercel.app',
  'https://nuclear-ndt-resource.vercel.app',
  'https://oil-gas-inspection-guide.vercel.app',
  'https://petrochemical-ndt-hub.vercel.app',
  'https://pipeline-integrity-guide.vercel.app',
  'https://power-generation-ndt.vercel.app',
  'https://pressure-vessel-ndt.vercel.app',
  'https://rail-ndt-resource.vercel.app',
  'https://renewable-energy-ndt.vercel.app',
  'https://subsea-inspection-guide.vercel.app',
  'https://tank-inspection-resource.vercel.app',
  'https://weld-quality-resource.vercel.app',
  'https://welding-inspection-hub.vercel.app',
  // GoVisa satellite sites (6)
  'https://visapath-eight.vercel.app',
  'https://digital-nomad-visas.vercel.app',
  'https://evisa-guide.vercel.app',
  'https://passport-power-index.vercel.app',
  'https://travel-docs-checklist.vercel.app',
  'https://visa-free-destinations.vercel.app',
];

// ─── Load All Service Accounts ──────────────────────────────────────────────
function loadServiceAccounts() {
  const accounts = [];

  // Legacy account
  const legacyPath = join(__dirname, 'gsc-service-account.json');
  if (existsSync(legacyPath)) {
    const creds = JSON.parse(readFileSync(legacyPath, 'utf-8'));
    accounts.push({ name: 'legacy', credentials: creds });
  }

  // Additional accounts from gsc-accounts/
  const accountsDir = join(__dirname, 'gsc-accounts');
  if (existsSync(accountsDir)) {
    const files = readdirSync(accountsDir).filter(f => f.endsWith('.json')).sort();
    for (const file of files) {
      const creds = JSON.parse(readFileSync(join(accountsDir, file), 'utf-8'));
      accounts.push({ name: file.replace('.json', ''), credentials: creds });
    }
  }

  return accounts;
}

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

// ─── List Sites in GSC ──────────────────────────────────────────────────────
async function listSitesInGSC(accessToken) {
  const res = await fetch('https://www.googleapis.com/webmasters/v3/sites', {
    headers: { 'Authorization': `Bearer ${accessToken}` },
  });
  if (res.ok) {
    const data = await res.json();
    return data.siteEntry || [];
  }
  return [];
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
    return { success: true };
  }
  const text = await res.text();
  return { success: false, error: text };
}

// ─── Main ────────────────────────────────────────────────────────────────────
async function main() {
  const mode = process.argv[2] || '--add';

  console.log('🚀 GSC Setup All Properties for All Service Accounts');
  console.log('═'.repeat(55));
  console.log(`\n📋 Total properties to manage: ${ALL_PROPERTIES.length}`);

  const accounts = loadServiceAccounts();
  console.log(`📋 Service accounts loaded: ${accounts.length}\n`);

  for (const account of accounts) {
    console.log(`  • ${account.name}: ${account.credentials.client_email}`);
  }

  const scope = [
    'https://www.googleapis.com/auth/webmasters',
    'https://www.googleapis.com/auth/indexing',
    'https://www.googleapis.com/auth/siteverification',
  ].join(' ');

  if (mode === '--status') {
    // Just show status for each account
    for (const account of accounts) {
      console.log(`\n━━━ ${account.name} (${account.credentials.client_email}) ━━━`);
      try {
        const token = await getAccessToken(account.credentials, scope);
        const sites = await listSitesInGSC(token);
        console.log(`  Properties: ${sites.length}`);
        for (const site of sites) {
          console.log(`    ${site.permissionLevel.padEnd(12)} ${site.siteUrl}`);
        }
      } catch (err) {
        console.log(`  ERROR: ${err.message}`);
      }
    }
    return;
  }

  // Add all properties for all accounts
  const results = { success: 0, alreadyExists: 0, errors: 0 };

  for (const account of accounts) {
    console.log(`\n━━━ Setting up: ${account.name} (${account.credentials.client_email}) ━━━`);

    let token;
    try {
      token = await getAccessToken(account.credentials, scope);
      console.log('  ✓ Token obtained');
    } catch (err) {
      console.log(`  ✗ Token error: ${err.message}`);
      continue;
    }

    // Check existing sites
    const existingSites = await listSitesInGSC(token);
    const existingUrls = new Set(existingSites.map(s => s.siteUrl));
    console.log(`  Existing properties: ${existingSites.length}`);

    for (const siteUrl of ALL_PROPERTIES) {
      // Check if URL-prefix property already exists
      if (existingUrls.has(siteUrl) || existingUrls.has(siteUrl + '/')) {
        process.stdout.write('.');
        results.alreadyExists++;
        continue;
      }

      // Add site
      const result = await addSiteToGSC(token, siteUrl);
      if (result.success) {
        process.stdout.write('+');
        results.success++;
      } else {
        process.stdout.write('✗');
        results.errors++;
        if (!result.error?.includes('already exists')) {
          console.log(`\n  WARN: ${siteUrl}: ${result.status} - ${result.error?.substring(0, 100)}`);
        }
      }

      // Submit sitemap for new sites
      const sitemapUrl = siteUrl + '/sitemap.xml';
      await submitSitemap(token, siteUrl, sitemapUrl);

      // Rate limit (1500ms to avoid 429 quota errors)
      await new Promise(r => setTimeout(r, 1500));
    }
    console.log(''); // newline after dots
  }

  console.log('\n═══ SUMMARY ═══');
  console.log(`  New properties added: ${results.success}`);
  console.log(`  Already existed:      ${results.alreadyExists}`);
  console.log(`  Errors:               ${results.errors}`);
  console.log(`  Total properties:     ${ALL_PROPERTIES.length}`);
  console.log(`  Total accounts:       ${accounts.length}`);
}

main().catch(console.error);
