#!/usr/bin/env node
/**
 * GSC Site Verification — Verify all unverified properties
 *
 * 1. Lists all GSC properties and finds unverified ones
 * 2. Checks if each site has the Google verification meta tag
 * 3. Attempts verification via Site Verification API
 * 4. Adds verified sites to GSC as siteOwner
 * 5. Submits sitemaps for newly verified sites
 */
import { readFileSync } from 'fs';
import { createSign } from 'crypto';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const credentials = JSON.parse(readFileSync(join(__dirname, 'gsc-service-account.json'), 'utf-8'));

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

// ── Auth ─────────────────────────────────────────────────────────────────────
async function getAccessToken(scope) {
  const header = { alg: 'RS256', typ: 'JWT' };
  const now = Math.floor(Date.now() / 1000);
  const claim = { iss: credentials.client_email, scope, aud: 'https://oauth2.googleapis.com/token', exp: now + 3600, iat: now };
  const encode = (obj) => Buffer.from(JSON.stringify(obj)).toString('base64url');
  const unsigned = `${encode(header)}.${encode(claim)}`;
  const sign = createSign('RSA-SHA256');
  sign.update(unsigned);
  const sig = sign.sign(credentials.private_key, 'base64url');
  const jwt = `${unsigned}.${sig}`;
  const res = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer&assertion=${jwt}`,
  });
  if (!res.ok) throw new Error(`Token failed: ${await res.text()}`);
  return (await res.json()).access_token;
}

// ── GSC API helpers ──────────────────────────────────────────────────────────
async function listSites(wmToken) {
  const res = await fetch('https://www.googleapis.com/webmasters/v3/sites', {
    headers: { Authorization: `Bearer ${wmToken}` },
  });
  return (await res.json()).siteEntry || [];
}

async function getVerificationToken(verToken, siteUrl, method) {
  const res = await fetch(`https://www.googleapis.com/siteVerification/v1/token`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${verToken}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      site: { type: 'SITE', identifier: siteUrl },
      verificationMethod: method,
    }),
  });
  return { status: res.status, data: await res.json() };
}

async function verifySite(verToken, siteUrl, method) {
  const res = await fetch('https://www.googleapis.com/siteVerification/v1/webResource?verificationMethod=' + method, {
    method: 'POST',
    headers: { Authorization: `Bearer ${verToken}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ site: { type: 'SITE', identifier: siteUrl } }),
  });
  return { status: res.status, data: await res.json() };
}

async function addSiteToGSC(wmToken, siteUrl) {
  const res = await fetch(`https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(siteUrl)}`, {
    method: 'PUT',
    headers: { Authorization: `Bearer ${wmToken}` },
  });
  return { status: res.status, ok: res.ok || res.status === 204 };
}

async function submitSitemap(wmToken, siteUrl, sitemapUrl) {
  const res = await fetch(
    `https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(siteUrl)}/sitemaps/${encodeURIComponent(sitemapUrl)}`,
    { method: 'PUT', headers: { Authorization: `Bearer ${wmToken}` } }
  );
  return { status: res.status, ok: res.ok || res.status === 204 };
}

// ── Check if site has meta verification tag ──────────────────────────────────
async function checkMetaTag(siteUrl) {
  try {
    const res = await fetch(siteUrl, {
      headers: { 'User-Agent': 'Mozilla/5.0 (compatible; GSC-Verifier/1.0)' },
      redirect: 'follow',
    });
    if (!res.ok) return { reachable: false, status: res.status };
    const html = await res.text();
    const hasTag = html.includes('google-site-verification');
    // Extract the verification token if present
    const match = html.match(/google-site-verification["\s]+content="([^"]+)"/);
    return { reachable: true, hasTag, token: match ? match[1] : null };
  } catch (err) {
    return { reachable: false, error: err.message };
  }
}

// ── Main ─────────────────────────────────────────────────────────────────────
async function main() {
  console.log('\n==========================================================');
  console.log('  GSC SITE VERIFICATION');
  console.log('==========================================================\n');

  const wmToken = await getAccessToken('https://www.googleapis.com/auth/webmasters');
  const verToken = await getAccessToken('https://www.googleapis.com/auth/siteverification');
  console.log('  Authenticated as:', credentials.client_email, '\n');

  // Step 1: Find unverified sites
  const sites = await listSites(wmToken);
  const unverified = sites.filter(s => s.permissionLevel !== 'siteOwner');

  console.log(`  Total properties: ${sites.length}`);
  console.log(`  Verified (siteOwner): ${sites.length - unverified.length}`);
  console.log(`  Unverified: ${unverified.length}\n`);

  if (unverified.length === 0) {
    console.log('  All sites are verified!\n');
    return;
  }

  console.log('  Unverified sites:');
  for (const s of unverified) {
    console.log(`    ${s.permissionLevel.padEnd(22)} ${s.siteUrl}`);
  }

  // Step 2: Check each unverified site
  console.log('\n  STEP 2: Checking meta tags & attempting verification...\n');

  const results = { verified: [], needsMetaTag: [], unreachable: [], scDomain: [] };

  for (const site of unverified) {
    const url = site.siteUrl;
    const cleanName = url.replace(/https?:\/\//, '').replace(/\/$/, '');
    process.stdout.write(`  ${cleanName.padEnd(50)}`);

    // Skip sc-domain: properties — they use DNS verification
    if (url.startsWith('sc-domain:')) {
      console.log('SKIP (domain property — needs DNS verification)');
      results.scDomain.push(url);
      continue;
    }

    // Check if site is reachable and has meta tag
    const metaCheck = await checkMetaTag(url);

    if (!metaCheck.reachable) {
      console.log(`UNREACHABLE (${metaCheck.status || metaCheck.error})`);
      results.unreachable.push({ url, reason: metaCheck.status || metaCheck.error });
      continue;
    }

    if (!metaCheck.hasTag) {
      console.log('NO META TAG');
      results.needsMetaTag.push(url);
      continue;
    }

    console.log(`META TAG FOUND (${metaCheck.token?.substring(0, 20)}...)`);

    // Attempt verification
    process.stdout.write(`    Verifying via META...`);
    const verResult = await verifySite(verToken, url, 'META');

    if (verResult.status === 200 || verResult.data?.id) {
      console.log(' VERIFIED!');

      // Add to GSC as property
      const addResult = await addSiteToGSC(wmToken, url);
      console.log(`    Added to GSC: ${addResult.ok ? 'OK' : 'HTTP ' + addResult.status}`);

      // Submit sitemap
      const domain = new URL(url).hostname;
      const sitemapUrl = `https://${domain}/sitemap.xml`;
      const smResult = await submitSitemap(wmToken, url, sitemapUrl);
      console.log(`    Sitemap submitted: ${smResult.ok ? 'OK' : 'HTTP ' + smResult.status}`);

      results.verified.push(url);
    } else {
      console.log(` FAILED (${verResult.status})`);
      if (verResult.data?.error) {
        console.log(`    Error: ${JSON.stringify(verResult.data.error).substring(0, 150)}`);
      }

      // Try FILE method as fallback — get the required filename
      process.stdout.write(`    Trying FILE method...`);
      const fileToken = await getVerificationToken(verToken, url, 'FILE');
      if (fileToken.data?.token) {
        console.log(` needs file: ${fileToken.data.token}`);
        results.needsMetaTag.push({ url, method: 'FILE', filename: fileToken.data.token });
      } else {
        console.log(` also failed`);
        results.needsMetaTag.push(url);
      }
    }

    await sleep(1000);
  }

  // Step 3: For sites without meta tags, try to get the required verification token
  if (results.needsMetaTag.length > 0) {
    console.log('\n  STEP 3: Getting verification requirements for untagged sites...\n');

    for (let i = 0; i < results.needsMetaTag.length; i++) {
      const item = results.needsMetaTag[i];
      const url = typeof item === 'string' ? item : item.url;
      if (typeof item === 'object' && item.method === 'FILE') continue; // already checked

      const cleanName = url.replace(/https?:\/\//, '').replace(/\/$/, '');
      process.stdout.write(`  ${cleanName.padEnd(50)}`);

      // Get META verification token
      const tokenResult = await getVerificationToken(verToken, url, 'META');
      if (tokenResult.data?.token) {
        console.log(`needs: <meta name="google-site-verification" content="${tokenResult.data.token}">`);
        results.needsMetaTag[i] = { url, metaToken: tokenResult.data.token };
      } else {
        console.log('could not get token');
      }
      await sleep(500);
    }
  }

  // Summary
  console.log('\n==========================================================');
  console.log('  VERIFICATION SUMMARY');
  console.log('==========================================================\n');

  console.log(`  Newly verified:     ${results.verified.length}`);
  for (const url of results.verified) console.log(`    OK  ${url}`);

  console.log(`\n  Need meta tag/file: ${results.needsMetaTag.length}`);
  for (const item of results.needsMetaTag) {
    if (typeof item === 'object') {
      console.log(`    --> ${item.url}`);
      if (item.metaToken) console.log(`        Add: <meta name="google-site-verification" content="${item.metaToken}">`);
      if (item.filename) console.log(`        Deploy file: ${item.filename}`);
    } else {
      console.log(`    --> ${item}`);
    }
  }

  console.log(`\n  Unreachable:        ${results.unreachable.length}`);
  for (const item of results.unreachable) console.log(`    ERR ${item.url} (${item.reason})`);

  console.log(`\n  Domain properties:  ${results.scDomain.length} (need DNS TXT record)`);
  for (const url of results.scDomain) console.log(`    DNS ${url}`);

  console.log('\n==========================================================\n');
}

main().catch(console.error);
