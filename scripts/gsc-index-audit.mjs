#!/usr/bin/env node
/**
 * GSC Index Audit — Check which URLs are indexed across all properties
 *
 * Uses:
 * 1. Search Analytics API — bulk discover indexed URLs (pages with impressions)
 * 2. URL Inspection API — verify specific URLs' index status
 * 3. Updates gsc-priority-progress.json so only non-indexed URLs get submitted
 */
import { readFileSync, writeFileSync, existsSync } from 'fs';
import { createSign } from 'crypto';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const CREDENTIALS_PATH = join(__dirname, 'gsc-service-account.json');
const credentials = JSON.parse(readFileSync(CREDENTIALS_PATH, 'utf-8'));
const PROGRESS_FILE = join(__dirname, 'gsc-priority-progress.json');
const AUDIT_FILE = join(__dirname, 'gsc-index-audit-results.json');

// ── Auth ─────────────────────────────────────────────────────────────────────
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

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

// ── List all verified GSC properties ─────────────────────────────────────────
async function listVerifiedSites(wmToken) {
  const res = await fetch('https://www.googleapis.com/webmasters/v3/sites', {
    headers: { Authorization: `Bearer ${wmToken}` },
  });
  const data = await res.json();
  return (data.siteEntry || []).map(s => ({
    url: s.siteUrl,
    level: s.permissionLevel,
  }));
}

// ── Search Analytics: get all pages with impressions (= indexed) ─────────────
async function getIndexedPages(wmToken, siteUrl, startDate, endDate) {
  const allPages = [];
  let startRow = 0;
  const rowLimit = 25000;

  while (true) {
    const res = await fetch(
      `https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(siteUrl)}/searchAnalytics/query`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${wmToken}` },
        body: JSON.stringify({
          startDate,
          endDate,
          dimensions: ['page'],
          rowLimit,
          startRow,
        }),
      }
    );

    if (!res.ok) {
      const err = await res.text();
      if (res.status === 403) return { error: 'no_access', pages: [] };
      console.log(`    API error (${res.status}): ${err.substring(0, 100)}`);
      break;
    }

    const data = await res.json();
    const rows = data.rows || [];
    for (const row of rows) {
      allPages.push({
        url: row.keys[0],
        clicks: row.clicks,
        impressions: row.impressions,
        ctr: row.ctr,
        position: row.position,
      });
    }

    if (rows.length < rowLimit) break;
    startRow += rowLimit;
    await sleep(500);
  }

  return { pages: allPages };
}

// ── URL Inspection API (for spot-checking) ───────────────────────────────────
async function inspectUrl(url, siteUrl, wmToken) {
  try {
    const res = await fetch('https://searchconsole.googleapis.com/v1/urlInspection/index:inspect', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${wmToken}` },
      body: JSON.stringify({ inspectionUrl: url, siteUrl }),
    });

    if (res.status === 200) {
      const data = await res.json();
      const result = data?.inspectionResult?.indexStatusResult || {};
      return {
        verdict: result.verdict,
        coverageState: result.coverageState,
        indexed: result.verdict === 'PASS' || (result.coverageState || '').toLowerCase().includes('indexed'),
        lastCrawlTime: result.lastCrawlTime,
        crawledAs: result.crawledAs,
      };
    } else if (res.status === 429) {
      return { error: 'rate_limited' };
    } else {
      return { error: `http_${res.status}` };
    }
  } catch (err) {
    return { error: err.message };
  }
}

// ── Load all URL queues ──────────────────────────────────────────────────────
function loadAllQueueUrls() {
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

  // Generate ndt-connect.com URLs
  const BASE = 'https://ndt-connect.com';
  const S = ['ultrasonic-testing','magnetic-particle-inspection','liquid-penetrant-testing','radiographic-testing','visual-inspection','eddy-current-testing','phased-array-ultrasonic-testing','time-of-flight-diffraction','computed-tomography','digital-radiography','guided-wave-testing','remote-visual-inspection','acoustic-emission-testing','thermographic-inspection','leak-testing','hardness-testing','positive-material-identification','ferrite-testing'];
  const I = ['oil-gas','aerospace','automotive','power-generation','construction','manufacturing','marine','railway','chemical','nuclear','petrochemical','wind-energy','pipeline','pressure-vessels'];
  const C = ['houston','new-york','los-angeles','chicago','dallas','philadelphia','phoenix','san-antonio','san-diego','san-jose','austin','jacksonville','fort-worth','columbus','charlotte','indianapolis','san-francisco','seattle','denver','abu-dhabi','dubai','riyadh','doha','kuwait-city','muscat'];
  const ST = ['/','about','services','contact','blog','industries','case-studies','resources','faq','pricing','careers','team','partners','certifications','news','events','gallery','testimonials','sitemap.xml'];
  for (const p of ST) allUrlSet.add(`${BASE}${p.startsWith('/') ? p : '/' + p}`);
  for (const s of S) allUrlSet.add(`${BASE}/services/${s}`);
  for (const i of I) allUrlSet.add(`${BASE}/industries/${i}`);
  for (const s of S) for (const c of C) allUrlSet.add(`${BASE}/services/${s}/${c}`);
  for (const i of I) for (const s of S) allUrlSet.add(`${BASE}/${i}/${s}`);
  for (const s of S) { allUrlSet.add(`${BASE}/services/${s}/applications`); allUrlSet.add(`${BASE}/services/${s}/standards`); allUrlSet.add(`${BASE}/services/${s}/equipment`); }

  return allUrlSet;
}

// ── Main ─────────────────────────────────────────────────────────────────────
async function main() {
  console.log('\n==========================================================');
  console.log('  GSC INDEX AUDIT — Full Indexing Status Check');
  console.log('==========================================================\n');

  const wmToken = await getAccessToken('https://www.googleapis.com/auth/webmasters.readonly');
  console.log('  Authenticated as:', credentials.client_email, '\n');

  // Step 1: List all verified properties
  console.log('  STEP 1: Listing all verified GSC properties...\n');
  const sites = await listVerifiedSites(wmToken);
  console.log(`  Found ${sites.length} properties:\n`);
  for (const s of sites) {
    console.log(`    ${s.level.padEnd(20)} ${s.url}`);
  }

  // Step 2: Query Search Analytics for each property
  console.log('\n  STEP 2: Querying Search Analytics (last 90 days)...\n');

  const endDate = new Date().toISOString().split('T')[0];
  const startDate = new Date(Date.now() - 90 * 86400000).toISOString().split('T')[0];

  const auditResults = {};
  const allIndexedUrls = new Set();

  for (const site of sites) {
    const cleanName = site.url.replace(/https?:\/\//, '').replace(/\/$/, '');
    process.stdout.write(`  Querying ${cleanName}...`);

    const result = await getIndexedPages(wmToken, site.url, startDate, endDate);

    if (result.error === 'no_access') {
      console.log(' NO ACCESS');
      auditResults[cleanName] = { status: 'no_access', indexed: 0, pages: [] };
      continue;
    }

    const pages = result.pages;
    for (const p of pages) allIndexedUrls.add(p.url);

    auditResults[cleanName] = {
      status: 'ok',
      indexed: pages.length,
      totalClicks: pages.reduce((s, p) => s + p.clicks, 0),
      totalImpressions: pages.reduce((s, p) => s + p.impressions, 0),
      topPages: pages.sort((a, b) => b.impressions - a.impressions).slice(0, 5).map(p => ({
        url: p.url, clicks: p.clicks, impressions: p.impressions,
      })),
    };

    console.log(` ${pages.length} pages indexed (${pages.reduce((s, p) => s + p.clicks, 0)} clicks, ${pages.reduce((s, p) => s + p.impressions, 0)} impressions)`);
    await sleep(500);
  }

  // Step 3: Cross-reference with our URL queue
  console.log('\n  STEP 3: Cross-referencing with URL queue...\n');

  const allQueueUrls = loadAllQueueUrls();
  console.log(`  Total URLs in queue: ${allQueueUrls.size}`);
  console.log(`  Total indexed URLs found in GSC: ${allIndexedUrls.size}`);

  // Match queue URLs against indexed
  const GOVISA = ['go-visa','passport-power','visa-free','evisa-guide','digital-nomad-visa','travel-docs','visapath'];
  const NDT_CONNECT_SATS = ['aerospace-ndt-center','corrosion-engineering-guide','industrial-coating-inspection','ndt-career-portal','ndt-digital-technology','ndt-equipment-reviews','ndt-safety-compliance','ndt-standards-reference','offshore-ndt-guide','pipeline-integrity-hub','pressure-vessel-inspection','rt-testing-hub','tank-inspection-guide','ut-testing-academy','weld-inspection-pro'];

  const tiers = {
    'Tier 1: atlantisndt.com': { total: 0, indexed: 0, notIndexed: 0, urls: [] },
    'Tier 2: atlantisndt.com satellites': { total: 0, indexed: 0, notIndexed: 0, urls: [] },
    'Tier 3: ndt-connect.com': { total: 0, indexed: 0, notIndexed: 0, urls: [] },
    'Tier 4: ndt-connect.com satellites': { total: 0, indexed: 0, notIndexed: 0, urls: [] },
    'Tier 5: GoVisa primary': { total: 0, indexed: 0, notIndexed: 0, urls: [] },
    'Tier 6: GoVisa satellites': { total: 0, indexed: 0, notIndexed: 0, urls: [] },
  };

  function classifyUrl(url) {
    if (url.includes('atlantisndt.com')) return 'Tier 1: atlantisndt.com';
    if (url.includes('ndt-connect.com')) return 'Tier 3: ndt-connect.com';
    if (url.includes('vercel.app')) {
      if (GOVISA.some(d => url.includes(d))) {
        return url.includes('go-visa.vercel.app') ? 'Tier 5: GoVisa primary' : 'Tier 6: GoVisa satellites';
      }
      if (NDT_CONNECT_SATS.some(d => url.includes(d))) return 'Tier 4: ndt-connect.com satellites';
      return 'Tier 2: atlantisndt.com satellites';
    }
    return 'Tier 1: atlantisndt.com';
  }

  const indexedInQueue = [];
  const notIndexedInQueue = [];

  for (const url of allQueueUrls) {
    const tier = classifyUrl(url);
    const isIndexed = allIndexedUrls.has(url);
    tiers[tier].total++;
    if (isIndexed) {
      tiers[tier].indexed++;
      indexedInQueue.push(url);
    } else {
      tiers[tier].notIndexed++;
      notIndexedInQueue.push(url);
    }
  }

  // Step 4: URL Inspection spot-check on a sample of "not indexed" URLs per tier
  console.log('\n  STEP 4: URL Inspection spot-check (sample per tier)...\n');

  const inspectionToken = await getAccessToken('https://www.googleapis.com/auth/webmasters.readonly');
  const additionalIndexed = [];
  let inspectionCount = 0;
  const MAX_INSPECTIONS = 100; // conserve quota

  for (const [tierName, tierData] of Object.entries(tiers)) {
    if (tierData.total === 0) continue;

    // Sample up to 15 "not-indexed" URLs per tier for inspection
    const tierNotIndexed = [...allQueueUrls].filter(u => classifyUrl(u) === tierName && !allIndexedUrls.has(u));
    const sample = tierNotIndexed.slice(0, Math.min(15, tierNotIndexed.length));

    if (sample.length === 0) continue;
    if (inspectionCount >= MAX_INSPECTIONS) break;

    console.log(`  Inspecting ${sample.length} URLs from ${tierName}...`);

    for (const url of sample) {
      if (inspectionCount >= MAX_INSPECTIONS) break;
      const siteUrl = new URL(url).origin + '/';
      const result = await inspectUrl(url, siteUrl, inspectionToken);
      inspectionCount++;

      if (result.error === 'rate_limited') {
        console.log('    Rate limited, stopping inspections');
        break;
      }

      if (result.indexed) {
        additionalIndexed.push(url);
        allIndexedUrls.add(url);
        const tier = classifyUrl(url);
        tiers[tier].indexed++;
        tiers[tier].notIndexed--;
      }

      await sleep(400);
    }
  }

  if (additionalIndexed.length > 0) {
    console.log(`\n  Found ${additionalIndexed.length} additional indexed URLs via inspection API`);
  }

  // Step 5: Print report
  console.log('\n==========================================================');
  console.log('  INDEX AUDIT REPORT');
  console.log('==========================================================\n');

  console.log('  Tier  Site                            Total  Indexed  Not Indexed  Index %');
  console.log('  ----  ------------------------------  -----  -------  -----------  -------');

  let grandTotal = 0, grandIndexed = 0, grandNotIndexed = 0;
  for (const [name, data] of Object.entries(tiers)) {
    const tierNum = name.split(':')[0].replace('Tier ', '');
    const siteName = name.split(': ')[1];
    const pct = data.total > 0 ? Math.round((data.indexed / data.total) * 100) : 0;
    console.log(`    ${tierNum}   ${siteName.padEnd(30)}  ${String(data.total).padStart(5)}  ${String(data.indexed).padStart(7)}  ${String(data.notIndexed).padStart(11)}  ${String(pct).padStart(5)}%`);
    grandTotal += data.total;
    grandIndexed += data.indexed;
    grandNotIndexed += data.notIndexed;
  }
  console.log('  ----  ------------------------------  -----  -------  -----------  -------');
  console.log(`        ${'TOTAL'.padEnd(30)}  ${String(grandTotal).padStart(5)}  ${String(grandIndexed).padStart(7)}  ${String(grandNotIndexed).padStart(11)}  ${String(Math.round(grandIndexed/grandTotal*100)).padStart(5)}%`);

  // Per-property breakdown
  console.log('\n\n  PER-PROPERTY BREAKDOWN (GSC Search Analytics):');
  console.log('  ' + '-'.repeat(70));
  for (const [domain, data] of Object.entries(auditResults).sort((a, b) => (b[1].indexed || 0) - (a[1].indexed || 0))) {
    if (data.status === 'no_access') {
      console.log(`  ${domain.padEnd(45)} NO ACCESS`);
    } else {
      console.log(`  ${domain.padEnd(45)} ${String(data.indexed).padStart(4)} indexed  ${String(data.totalClicks).padStart(5)} clicks  ${String(data.totalImpressions).padStart(7)} impr`);
    }
  }

  // Step 6: Update progress file
  console.log('\n\n  STEP 6: Updating gsc-priority-progress.json...\n');

  let progress;
  if (existsSync(PROGRESS_FILE)) {
    progress = JSON.parse(readFileSync(PROGRESS_FILE, 'utf-8'));
  } else {
    progress = { submitted: [], alreadyIndexed: [], failed: [], runs: [], created: new Date().toISOString() };
  }

  // Merge indexed URLs into alreadyIndexed
  const existingIndexed = new Set(progress.alreadyIndexed || []);
  let newlyMarkedIndexed = 0;
  for (const url of allIndexedUrls) {
    if (allQueueUrls.has(url) && !existingIndexed.has(url)) {
      progress.alreadyIndexed.push(url);
      existingIndexed.add(url);
      newlyMarkedIndexed++;
    }
  }

  // Also merge previously submitted URLs (from indexing-results + drip-feed)
  const existingSubmitted = new Set(progress.submitted || []);
  let newlySeeded = 0;
  const seedFiles = [
    { file: 'indexing-results-march-2026.json', key: 'submitted' },
  ];
  for (const { file, key } of seedFiles) {
    const path = join(__dirname, file);
    if (existsSync(path)) {
      const data = JSON.parse(readFileSync(path, 'utf-8'));
      for (const url of (data[key] || [])) {
        if (!existingSubmitted.has(url)) {
          progress.submitted.push(url);
          existingSubmitted.add(url);
          newlySeeded++;
        }
      }
    }
  }

  // Remove already-indexed URLs from submitted (they don't need re-submission)
  // Keep them in alreadyIndexed to prevent future submission

  progress.lastAudit = {
    date: new Date().toISOString(),
    totalQueueUrls: allQueueUrls.size,
    totalIndexed: allIndexedUrls.size,
    indexedInQueue: indexedInQueue.length + additionalIndexed.length,
    notIndexedInQueue: grandNotIndexed,
    inspectionsPerformed: inspectionCount,
    additionalIndexedViaInspection: additionalIndexed.length,
  };

  saveProgress(progress);

  console.log(`  Marked ${newlyMarkedIndexed} URLs as already indexed (will be skipped)`);
  console.log(`  Seeded ${newlySeeded} URLs from prior submissions`);
  console.log(`  Total in alreadyIndexed: ${progress.alreadyIndexed.length}`);
  console.log(`  Total in submitted: ${progress.submitted.length}`);

  // Calculate what will actually be submitted tomorrow
  const willSubmit = [...allQueueUrls].filter(u => !existingSubmitted.has(u) && !existingIndexed.has(u));
  console.log(`\n  URLs that will be submitted from tomorrow: ${willSubmit.length}`);
  console.log(`  Estimated days remaining: ~${Math.ceil(willSubmit.length / 200)}`);

  // Save full audit results
  const fullAudit = {
    auditDate: new Date().toISOString(),
    properties: auditResults,
    tierSummary: tiers,
    grandTotal: { total: grandTotal, indexed: grandIndexed, notIndexed: grandNotIndexed },
    indexedUrlsList: [...allIndexedUrls].sort(),
    willSubmitCount: willSubmit.length,
    estimatedDaysRemaining: Math.ceil(willSubmit.length / 200),
  };
  writeFileSync(AUDIT_FILE, JSON.stringify(fullAudit, null, 2));
  console.log(`  Full audit saved to: ${AUDIT_FILE}`);

  console.log('\n==========================================================\n');
}

function saveProgress(progress) {
  writeFileSync(PROGRESS_FILE, JSON.stringify(progress, null, 2));
}

main().catch(console.error);
