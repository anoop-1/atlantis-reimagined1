#!/usr/bin/env node
/**
 * deploy-verify-index.mjs
 * ─────────────────────────────────────────────────────────────────────────────
 * End-to-end script that:
 *  1. Deploys petrochemical-ndt-hub and tank-inspection-resource to Vercel
 *     (uses Vercel REST API — no CLI needed)
 *  2. Waits for deployments to go READY
 *  3. Verifies both sites in Google Search Console via META method
 *  4. Adds both sites to GSC as siteOwner
 *  5. Submits their sitemaps
 *  6. Submits their 8 URLs via the Indexing API
 *  7. Runs a full drip-feed batch (up to 200 URLs) across all sites
 *
 * Usage:  node deploy-verify-index.mjs
 * Requires:  VERCEL_TOKEN env var OR edit the TOKEN constant below
 */

import { readFileSync, writeFileSync, existsSync } from 'fs';
import { createSign } from 'crypto';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

// ── Config ────────────────────────────────────────────────────────────────────
const VERCEL_TOKEN = process.env.VERCEL_TOKEN;
if (!VERCEL_TOKEN) {
  console.error('Missing VERCEL_TOKEN env var. Set it in scripts/.env.gsc or your shell.');
  process.exit(1);
}
const TEAM_ID = 'team_RvIKW6PFuuliC77dktstAJmQ';
const GSC_CREDS = JSON.parse(readFileSync(join(__dirname, 'gsc-service-account.json'), 'utf-8'));
const PROGRESS_FILE = join(__dirname, 'drip-feed-progress.json');
const QUEUE_FILE = join(__dirname, 'indexing-queue-smart.txt');
const LOG_FILE = join(__dirname, 'indexing-daily-log.json');
const GOOGLE_VERIFICATION_TOKEN = 'dlNM5ly7deh5YYSr3uXXCL_lyNXxdluY229Ywzm34nE';

const UNVERIFIED_SITES = [
  {
    name: 'petrochemical-ndt-hub',
    projectId: 'prj_WLR0vk0YUlBpTP2BATJrZkpuT5mx',
    url: 'https://petrochemical-ndt-hub.vercel.app/',
    urls: [
      'https://petrochemical-ndt-hub.vercel.app/',
      'https://petrochemical-ndt-hub.vercel.app/processes',
      'https://petrochemical-ndt-hub.vercel.app/equipment',
      'https://petrochemical-ndt-hub.vercel.app/safety',
    ],
  },
  {
    name: 'tank-inspection-resource',
    projectId: 'prj_jICaziWaFBzqPabAtqVIxbwMlPsG',
    url: 'https://tank-inspection-resource.vercel.app/',
    urls: [
      'https://tank-inspection-resource.vercel.app/',
      'https://tank-inspection-resource.vercel.app/above-ground',
      'https://tank-inspection-resource.vercel.app/underground',
      'https://tank-inspection-resource.vercel.app/maintenance',
    ],
  },
];

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

// ── Vercel API ────────────────────────────────────────────────────────────────
async function vercelApi(path, method = 'GET', body) {
  const url = `https://api.vercel.com${path}${path.includes('?') ? '&' : '?'}teamId=${TEAM_ID}`;
  const opts = {
    method,
    headers: { Authorization: `Bearer ${VERCEL_TOKEN}`, 'Content-Type': 'application/json' },
  };
  if (body) opts.body = JSON.stringify(body);
  const res = await fetch(url, opts);
  return { status: res.status, data: await res.json() };
}

async function triggerRedeploy(projectId, latestDeploymentId) {
  // Redeploy by creating a new deployment from the existing one
  const { status, data } = await vercelApi('/v13/deployments', 'POST', {
    deploymentId: latestDeploymentId,
    name: projectId,
    target: 'production',
  });
  return { status, deploymentId: data.id, url: data.url };
}

async function getLatestDeployment(projectId) {
  const { data } = await vercelApi(`/v6/deployments?projectId=${projectId}&limit=1`);
  return (data.deployments || [])[0];
}

async function waitForDeployment(deploymentId, timeoutMs = 300000) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    const { data } = await vercelApi(`/v13/deployments/${deploymentId}`);
    console.log(`   Status: ${data.readyState || data.state}`);
    if (data.readyState === 'READY' || data.state === 'READY') return true;
    if (data.readyState === 'ERROR' || data.state === 'ERROR') return false;
    await sleep(15000);
  }
  return false;
}

// ── GSC Auth ──────────────────────────────────────────────────────────────────
async function getGSCToken(scope) {
  const header = { alg: 'RS256', typ: 'JWT' };
  const now = Math.floor(Date.now() / 1000);
  const claim = { iss: GSC_CREDS.client_email, scope, aud: 'https://oauth2.googleapis.com/token', exp: now + 3600, iat: now };
  const encode = (obj) => Buffer.from(JSON.stringify(obj)).toString('base64url');
  const unsigned = `${encode(header)}.${encode(claim)}`;
  const sign = createSign('RSA-SHA256');
  sign.update(unsigned);
  const sig = sign.sign(GSC_CREDS.private_key, 'base64url');
  const jwt = `${unsigned}.${sig}`;
  const res = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer&assertion=${jwt}`,
  });
  if (!res.ok) throw new Error(`Token failed: ${await res.text()}`);
  return (await res.json()).access_token;
}

async function verifySiteInGSC(siteVerToken, siteUrl) {
  const res = await fetch('https://www.googleapis.com/siteVerification/v1/webResource?verificationMethod=META', {
    method: 'POST',
    headers: { Authorization: `Bearer ${siteVerToken}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ site: { type: 'SITE', identifier: siteUrl } }),
  });
  return { status: res.status, data: await res.json() };
}

async function addToGSC(wmToken, siteUrl) {
  const res = await fetch(`https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(siteUrl)}`, {
    method: 'PUT', headers: { Authorization: `Bearer ${wmToken}` },
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

async function submitUrl(url, indexToken) {
  const res = await fetch('https://indexing.googleapis.com/v3/urlNotifications:publish', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${indexToken}` },
    body: JSON.stringify({ url, type: 'URL_UPDATED' }),
  });
  return { status: res.status, data: await res.json() };
}

async function getVerifiedDomains(wmToken) {
  const res = await fetch('https://www.googleapis.com/webmasters/v3/sites', {
    headers: { Authorization: `Bearer ${wmToken}` },
  });
  const data = await res.json();
  return new Set((data.siteEntry || []).filter(s => s.permissionLevel === 'siteOwner').map(s => s.siteUrl.replace(/\/$/, '')));
}

// ── Main ──────────────────────────────────────────────────────────────────────
console.log('\n🚀 Deploy → Verify → Index Pipeline\n');
console.log('=' .repeat(60));

// STEP 1: Redeploy the two unverified satellite sites
console.log('\n📦 STEP 1: Redeploying unverified satellite sites...\n');

for (const site of UNVERIFIED_SITES) {
  console.log(`\n  📤 ${site.name}`);
  const latest = await getLatestDeployment(site.projectId);
  if (!latest) { console.log('    ❌ No existing deployment found'); continue; }
  console.log(`    Latest deployment: ${latest.uid} (${latest.state})`);

  const { status, deploymentId, url } = await triggerRedeploy(site.projectId, latest.uid);
  if (!deploymentId) {
    console.log(`    ❌ Failed to trigger redeploy: HTTP ${status}`);
    continue;
  }
  console.log(`    ✅ New deployment triggered: ${deploymentId}`);
  console.log(`    ⏳ Waiting for READY state...`);

  const ready = await waitForDeployment(deploymentId);
  if (ready) {
    console.log(`    ✅ Deployment READY: https://${url}`);
  } else {
    console.log(`    ⚠️  Deployment did not reach READY state within 5 minutes`);
  }
}

// Wait a bit for DNS propagation
console.log('\n⏳ Waiting 30s for deployments to propagate...');
await sleep(30000);

// STEP 2: Verify meta tags are live, then verify in GSC
console.log('\n🔍 STEP 2: Verifying sites in GSC...\n');

const siteVerToken = await getGSCToken('https://www.googleapis.com/auth/siteverification');
const wmToken = await getGSCToken('https://www.googleapis.com/auth/webmasters');
const indexToken = await getGSCToken('https://www.googleapis.com/auth/indexing');

let newlyVerified = [];

for (const site of UNVERIFIED_SITES) {
  console.log(`\n  🔑 ${site.name}`);

  // Check meta tag is live
  let metaFound = false;
  for (let attempt = 0; attempt < 5; attempt++) {
    const pageRes = await fetch(site.url);
    const html = await pageRes.text();
    metaFound = html.includes('google-site-verification') && html.includes(GOOGLE_VERIFICATION_TOKEN);
    if (metaFound) break;
    console.log(`    ⏳ Meta tag not found yet (attempt ${attempt + 1}/5), waiting 30s...`);
    await sleep(30000);
  }

  if (!metaFound) {
    console.log(`    ❌ Meta tag still not found after retries. Skipping verification.`);
    continue;
  }
  console.log(`    ✅ Meta tag confirmed live`);

  // Verify in Google Site Verification
  const verifyResult = await verifySiteInGSC(siteVerToken, site.url);
  console.log(`    Site Verification API: HTTP ${verifyResult.status}`);

  if (verifyResult.status === 200 || verifyResult.data?.id) {
    console.log(`    ✅ Site verified!`);
    newlyVerified.push(site);

    // Add to GSC
    const gscResult = await addToGSC(wmToken, site.url);
    console.log(`    GSC add: ${gscResult.ok ? '✅' : '⚠️ HTTP ' + gscResult.status}`);

    // Submit sitemap
    const domain = new URL(site.url).hostname;
    const sitemapUrl = `https://${domain}/sitemap.xml`;
    const sitemapResult = await submitSitemap(wmToken, site.url, sitemapUrl);
    console.log(`    Sitemap submit: ${sitemapResult.ok ? '✅' : '⚠️ HTTP ' + sitemapResult.status}`);
  } else {
    console.log(`    ❌ Verification failed:`, JSON.stringify(verifyResult.data).substring(0, 200));
  }
}

// STEP 3: Submit the 8 URLs for newly verified sites
console.log('\n📤 STEP 3: Submitting URLs for newly verified sites...\n');

let progress = JSON.parse(readFileSync(PROGRESS_FILE, 'utf-8'));
let newSubmissions = 0;

for (const site of newlyVerified) {
  for (const url of site.urls) {
    if (progress.submitted.includes(url)) {
      console.log(`  ⏭️  Already submitted: ${url}`);
      continue;
    }
    const { status } = await submitUrl(url, indexToken);
    if (status === 200) {
      progress.submitted.push(url);
      newSubmissions++;
      console.log(`  ✅ ${url}`);
    } else {
      console.log(`  ❌ HTTP ${status}: ${url}`);
    }
    await sleep(500);
  }
}

if (newSubmissions > 0) {
  progress.lastRun = new Date().toISOString();
  writeFileSync(PROGRESS_FILE, JSON.stringify(progress, null, 2));
  console.log(`\n  ✅ ${newSubmissions} new URLs submitted and progress saved`);
}

// STEP 4: Run the main drip-feed batch
console.log('\n📡 STEP 4: Running main drip-feed batch (up to 200 URLs)...\n');

const allUrls = readFileSync(QUEUE_FILE, 'utf-8').trim().split('\n').filter(u => u.startsWith('https://'));
const submittedSet = new Set(progress.submitted);
const verifiedDomains = await getVerifiedDomains(wmToken);
console.log(`  Verified domains: ${verifiedDomains.size}`);

const pending = allUrls.filter(u => !submittedSet.has(u));
const submittable = pending.filter(u => {
  const origin = new URL(u).origin;
  return verifiedDomains.has(origin) || verifiedDomains.has(origin + '/');
});

console.log(`  Pending: ${pending.length} | Submittable: ${submittable.length}`);

let batchOk = 0, batchFail = 0, batchAttempts = 0;
const DAILY_LIMIT = 200;

for (const url of submittable) {
  if (batchOk >= DAILY_LIMIT) break;
  batchAttempts++;
  const { status } = await submitUrl(url, indexToken);
  if (status === 200) {
    progress.submitted.push(url);
    submittedSet.add(url);
    batchOk++;
    if (batchOk % 20 === 0) console.log(`  ... ${batchOk} submitted so far`);
  } else if (status === 429) {
    console.log(`  ⚠️  Rate limited after ${batchOk} successes`);
    break;
  } else {
    batchFail++;
  }
  await sleep(200);
}

// Save progress
progress.lastRun = new Date().toISOString();
progress.totalSubmitted = progress.submitted.length;
writeFileSync(PROGRESS_FILE, JSON.stringify(progress, null, 2));

// Update daily log
const logs = JSON.parse(readFileSync(LOG_FILE, 'utf-8'));
const today = new Date().toISOString().split('T')[0];
const totalQueue = allUrls.length;
const totalSubmitted = progress.submitted.length;
const remaining = allUrls.filter(u => !new Set(progress.submitted).has(u)).length;

logs.push({
  date: today,
  run_time: new Date().toISOString(),
  run_type: 'deploy_verify_index',
  newly_verified_sites: newlyVerified.map(s => s.name),
  new_site_urls_submitted: newSubmissions,
  batch_attempted: batchAttempts,
  submitted_ok: batchOk,
  failed: batchFail,
  rate_limited: batchOk >= DAILY_LIMIT,
  total_submitted: totalSubmitted,
  total_queue: totalQueue,
  remaining,
  progress_pct: Math.round((totalSubmitted / totalQueue) * 100),
  notes: `Deployed + verified: ${newlyVerified.map(s=>s.name).join(', ') || 'none'}. Drip-feed batch: ${batchOk} submitted.`,
  next_batch_preview: 'Continue drip-feed across atlantisndt.com and ndt-connect.com',
});

writeFileSync(LOG_FILE, JSON.stringify(logs, null, 2));

// Final summary
console.log('\n' + '='.repeat(60));
console.log('✅ PIPELINE COMPLETE\n');
console.log(`  🏗️  Sites deployed: ${UNVERIFIED_SITES.map(s=>s.name).join(', ')}`);
console.log(`  🔑  Sites verified: ${newlyVerified.map(s=>s.name).join(', ') || 'none (meta tag not found)'}`);
console.log(`  📤  New site URLs submitted: ${newSubmissions}`);
console.log(`  📡  Drip-feed batch: ${batchOk}/${batchAttempts} submitted`);
console.log(`  📊  Overall progress: ${totalSubmitted}/${totalQueue} (${Math.round(totalSubmitted/totalQueue*100)}%)`);
console.log(`  📅  Remaining: ${remaining} URLs (~${Math.ceil(remaining/200)} more days)\n`);
