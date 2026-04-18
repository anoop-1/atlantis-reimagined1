#!/usr/bin/env node
/**
 * Deep Index Check — Use URL Inspection API to check actual indexing status
 *
 * Search Analytics only shows pages with impressions.
 * URL Inspection API shows the real indexing verdict for each URL.
 * Quota: ~2000 inspections/day per property.
 */
import { readFileSync, writeFileSync, existsSync } from 'fs';
import { createSign } from 'crypto';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const credentials = JSON.parse(readFileSync(join(__dirname, 'gsc-service-account.json'), 'utf-8'));
const PROGRESS_FILE = join(__dirname, 'gsc-priority-progress.json');

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

async function getToken(scope) {
  const header = { alg: 'RS256', typ: 'JWT' };
  const now = Math.floor(Date.now() / 1000);
  const claim = { iss: credentials.client_email, scope, aud: 'https://oauth2.googleapis.com/token', exp: now + 3600, iat: now };
  const encode = (obj) => Buffer.from(JSON.stringify(obj)).toString('base64url');
  const unsigned = `${encode(header)}.${encode(claim)}`;
  const sign = createSign('RSA-SHA256');
  sign.update(unsigned);
  const sig = sign.sign(credentials.private_key, 'base64url');
  const res = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer&assertion=${unsigned}.${sig}`,
  });
  return (await res.json()).access_token;
}

// List verified sites
async function getVerifiedSites(wmToken) {
  const res = await fetch('https://www.googleapis.com/webmasters/v3/sites', {
    headers: { Authorization: `Bearer ${wmToken}` },
  });
  const data = await res.json();
  return new Set((data.siteEntry || [])
    .filter(s => s.permissionLevel === 'siteOwner')
    .map(s => s.siteUrl.replace(/\/$/, '')));
}

async function inspectUrl(url, siteUrl, token) {
  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      const res = await fetch('https://searchconsole.googleapis.com/v1/urlInspection/index:inspect', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify({ inspectionUrl: url, siteUrl }),
      });
      if (res.status === 429) {
        // Back off and retry
        if (attempt < 2) { await sleep(10000 * (attempt + 1)); continue; }
        return { status: 'rate_limited' };
      }
      if (res.status === 403) {
        // Quota exhausted or no access — back off once
        if (attempt < 2) { await sleep(5000); continue; }
        return { status: 'error', code: res.status };
      }
      if (res.status !== 200) return { status: 'error', code: res.status };
      const data = await res.json();
      const result = data?.inspectionResult?.indexStatusResult || {};
      return {
        status: 'ok',
        verdict: result.verdict,
        coverageState: result.coverageState,
        indexed: result.verdict === 'PASS' || (result.coverageState || '').toLowerCase().includes('indexed'),
        lastCrawlTime: result.lastCrawlTime,
        robotsTxtState: result.robotsTxtState,
        pageFetchState: result.pageFetchState,
      };
    } catch (err) {
      if (attempt < 2) { await sleep(3000); continue; }
      return { status: 'error', message: err.message };
    }
  }
}

// Load all URLs from all sources
function loadAllUrls() {
  const allUrlSet = new Set();
  const sourceFiles = [
    'all-new-urls-march-2026.txt', 'indexing-queue-smart.txt',
    'complete-satellite-urls.txt', 'us-eu-expansion-urls.txt',
    'ndtconnect-all-urls.txt', 'ndtconnect-satellite-urls.txt', 'govisa-urls.txt',
  ];
  for (const file of sourceFiles) {
    const path = join(__dirname, file);
    if (existsSync(path)) {
      readFileSync(path, 'utf-8').trim().split('\n')
        .filter(u => u.startsWith('https://')).forEach(u => allUrlSet.add(u));
    }
  }
  return allUrlSet;
}

// Tier classification
const GOVISA = ['go-visa','passport-power','visa-free','evisa-guide','digital-nomad-visa','travel-docs','visapath'];
const NDT_CONNECT_SATS = ['aerospace-ndt-center','corrosion-engineering-guide','industrial-coating-inspection','ndt-career-portal','ndt-digital-technology','ndt-equipment-reviews','ndt-safety-compliance','ndt-standards-reference','offshore-ndt-guide','pipeline-integrity-hub','pressure-vessel-inspection','rt-testing-hub','tank-inspection-guide','ut-testing-academy','weld-inspection-pro'];

function classifyUrl(url) {
  if (url.includes('atlantisndt.com')) return 'Tier 1: atlantisndt.com';
  if (url.includes('ndt-connect.com')) return 'Tier 3: ndt-connect.com';
  if (url.includes('vercel.app')) {
    if (GOVISA.some(d => url.includes(d))) return url.includes('go-visa.vercel.app') ? 'Tier 5: GoVisa' : 'Tier 6: GoVisa satellites';
    if (NDT_CONNECT_SATS.some(d => url.includes(d))) return 'Tier 4: ndt-connect satellites';
    return 'Tier 2: atlantisndt satellites';
  }
  return 'Tier 1: atlantisndt.com';
}

async function main() {
  console.log('\n==========================================================');
  console.log('  DEEP INDEX CHECK — URL Inspection API');
  console.log('==========================================================\n');

  const wmToken = await getToken('https://www.googleapis.com/auth/webmasters.readonly');
  console.log('  Auth:', credentials.client_email);

  const verifiedSites = await getVerifiedSites(wmToken);
  console.log(`  Verified properties: ${verifiedSites.size}\n`);

  const allUrls = loadAllUrls();
  console.log(`  Total URLs in queue: ${allUrls.size}`);

  // Group URLs by domain for siteUrl matching
  const urlsByDomain = {};
  for (const url of allUrls) {
    try {
      const origin = new URL(url).origin;
      if (!urlsByDomain[origin]) urlsByDomain[origin] = [];
      urlsByDomain[origin].push(url);
    } catch {}
  }

  // Filter to verified domains only
  const checkableDomains = Object.keys(urlsByDomain).filter(origin => {
    return verifiedSites.has(origin) || verifiedSites.has(origin + '/');
  });

  const checkableCount = checkableDomains.reduce((s, d) => s + urlsByDomain[d].length, 0);
  console.log(`  Checkable (verified domains): ${checkableCount} across ${checkableDomains.length} domains`);

  // Check URLs — prioritize atlantisndt.com first, then satellites
  const tierOrder = ['Tier 1: atlantisndt.com', 'Tier 2: atlantisndt satellites', 'Tier 3: ndt-connect.com', 'Tier 4: ndt-connect satellites', 'Tier 5: GoVisa', 'Tier 6: GoVisa satellites'];

  const results = {};
  for (const t of tierOrder) results[t] = { indexed: 0, notIndexed: 0, crawled: 0, error: 0, urls: { indexed: [], notIndexed: [] } };

  let totalChecked = 0;
  let totalIndexed = 0;
  let rateLimited = false;
  const MAX_CHECKS = 2000; // daily quota

  console.log(`\n  Checking up to ${MAX_CHECKS} URLs via Inspection API...\n`);

  // Sort URLs by tier priority
  const sortedUrls = [];
  for (const domain of checkableDomains) {
    sortedUrls.push(...urlsByDomain[domain]);
  }
  sortedUrls.sort((a, b) => {
    const ta = tierOrder.indexOf(classifyUrl(a));
    const tb = tierOrder.indexOf(classifyUrl(b));
    return ta - tb;
  });

  // Skip URLs already in alreadyIndexed or already checked in prior run
  const alreadyCheckedSet = new Set([...(existsSync(PROGRESS_FILE) ? JSON.parse(readFileSync(PROGRESS_FILE, 'utf-8')).alreadyIndexed || [] : [])]);
  const urlsToCheck = sortedUrls.filter(u => !alreadyCheckedSet.has(u));
  console.log(`  Skipping ${sortedUrls.length - urlsToCheck.length} already-checked URLs\n`);

  let currentTier = '';
  let consecutiveErrors = 0;

  for (const url of urlsToCheck) {
    if (totalChecked >= MAX_CHECKS || rateLimited) break;
    if (consecutiveErrors >= 10) {
      console.log(`\n  Stopping: ${consecutiveErrors} consecutive errors (likely throttled)`);
      break;
    }

    const tier = classifyUrl(url);
    if (tier !== currentTier) {
      if (currentTier) {
        const r = results[currentTier];
        console.log(`\n    ${currentTier}: ${r.indexed} indexed, ${r.notIndexed} not indexed, ${r.error} errors`);
      }
      currentTier = tier;
      console.log(`\n  --- ${tier} ---`);
    }

    const origin = new URL(url).origin;
    const siteUrl = origin + '/';
    const result = await inspectUrl(url, siteUrl, wmToken);

    totalChecked++;

    if (result.status === 'rate_limited') {
      console.log(`\n  RATE LIMITED after ${totalChecked} checks`);
      rateLimited = true;
      break;
    }

    if (result.status === 'ok') {
      consecutiveErrors = 0; // reset
      if (result.indexed) {
        results[tier].indexed++;
        results[tier].urls.indexed.push(url);
        totalIndexed++;
      } else {
        results[tier].notIndexed++;
        results[tier].urls.notIndexed.push(url);
      }
      if (result.lastCrawlTime) results[tier].crawled++;
    } else {
      results[tier].error++;
      consecutiveErrors++;
    }

    if (totalChecked % 50 === 0) {
      process.stdout.write(`\r    Checked: ${totalChecked} | Indexed: ${totalIndexed} | Not indexed: ${totalChecked - totalIndexed - results[tier].error}    `);
    }

    // Rate limit: ~600ms between requests (safer)
    await sleep(600);
  }

  // Print final tier result
  if (currentTier) {
    const r = results[currentTier];
    console.log(`\n    ${currentTier}: ${r.indexed} indexed, ${r.notIndexed} not indexed, ${r.error} errors`);
  }

  // Summary
  console.log('\n\n==========================================================');
  console.log('  DEEP INDEX CHECK RESULTS');
  console.log('==========================================================\n');

  console.log('  Tier                              Checked  Indexed  Not Indexed  Error  Index%');
  console.log('  --------------------------------  -------  -------  -----------  -----  ------');

  let grandChecked = 0, grandIndexed = 0, grandNotIndexed = 0, grandError = 0;
  for (const tier of tierOrder) {
    const r = results[tier];
    const checked = r.indexed + r.notIndexed + r.error;
    if (checked === 0) continue;
    const pct = checked > 0 ? Math.round((r.indexed / checked) * 100) : 0;
    console.log(`  ${tier.padEnd(32)}  ${String(checked).padStart(7)}  ${String(r.indexed).padStart(7)}  ${String(r.notIndexed).padStart(11)}  ${String(r.error).padStart(5)}  ${String(pct).padStart(5)}%`);
    grandChecked += checked;
    grandIndexed += r.indexed;
    grandNotIndexed += r.notIndexed;
    grandError += r.error;
  }
  console.log('  --------------------------------  -------  -------  -----------  -----  ------');
  console.log(`  ${'TOTAL'.padEnd(32)}  ${String(grandChecked).padStart(7)}  ${String(grandIndexed).padStart(7)}  ${String(grandNotIndexed).padStart(11)}  ${String(grandError).padStart(5)}  ${String(Math.round(grandIndexed/grandChecked*100)).padStart(5)}%`);

  console.log(`\n  Rate limited: ${rateLimited}`);
  console.log(`  URLs not checked (quota): ${sortedUrls.length - totalChecked}`);

  // Update progress file with confirmed indexed URLs
  console.log('\n  Updating gsc-priority-progress.json...');

  let progress;
  if (existsSync(PROGRESS_FILE)) {
    progress = JSON.parse(readFileSync(PROGRESS_FILE, 'utf-8'));
  } else {
    progress = { submitted: [], alreadyIndexed: [], failed: [], runs: [], created: new Date().toISOString() };
  }

  const existingIndexed = new Set(progress.alreadyIndexed || []);
  let newlyMarked = 0;

  for (const tier of tierOrder) {
    for (const url of results[tier].urls.indexed) {
      if (!existingIndexed.has(url)) {
        progress.alreadyIndexed.push(url);
        existingIndexed.add(url);
        newlyMarked++;
      }
    }
  }

  progress.lastDeepCheck = {
    date: new Date().toISOString(),
    totalChecked: grandChecked,
    totalIndexed: grandIndexed,
    totalNotIndexed: grandNotIndexed,
    rateLimited,
  };

  writeFileSync(PROGRESS_FILE, JSON.stringify(progress, null, 2));

  console.log(`  Added ${newlyMarked} newly confirmed indexed URLs`);
  console.log(`  Total in alreadyIndexed: ${progress.alreadyIndexed.length}`);

  // Calculate remaining to submit
  const submittedSet = new Set(progress.submitted || []);
  const allQ = loadAllUrls();
  const remaining = [...allQ].filter(u => !submittedSet.has(u) && !existingIndexed.has(u)).length;
  console.log(`  URLs remaining to submit: ${remaining} (~${Math.ceil(remaining / 200)} days)`);

  // Save detailed results
  writeFileSync(join(__dirname, 'gsc-deep-check-results.json'), JSON.stringify({
    date: new Date().toISOString(),
    summary: { checked: grandChecked, indexed: grandIndexed, notIndexed: grandNotIndexed, errors: grandError },
    byTier: Object.fromEntries(tierOrder.map(t => [t, { indexed: results[t].indexed, notIndexed: results[t].notIndexed, error: results[t].error }])),
    indexedUrls: tierOrder.flatMap(t => results[t].urls.indexed),
    notIndexedSample: tierOrder.flatMap(t => results[t].urls.notIndexed.slice(0, 20)),
  }, null, 2));

  console.log(`  Detailed results: gsc-deep-check-results.json`);
  console.log('\n==========================================================\n');
}

main().catch(console.error);
