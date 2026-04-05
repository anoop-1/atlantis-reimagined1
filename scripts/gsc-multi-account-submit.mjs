#!/usr/bin/env node
/**
 * Multi-Account GSC Indexing Submission
 * ─────────────────────────────────────
 * Uses multiple Google Cloud service accounts in PARALLEL to bypass the
 * 200 URLs/day per-project quota. Each service account is a separate
 * GCP project with its own Indexing API quota.
 *
 * Setup:
 *   1. Create N Google Cloud projects (e.g. atlantis-gsc-1, atlantis-gsc-2, ...)
 *   2. Enable the "Web Search Indexing API" in each project
 *   3. Create a service account in each project, download the JSON key
 *   4. Place JSON files in scripts/gsc-accounts/ folder:
 *        gsc-accounts/account-1.json
 *        gsc-accounts/account-2.json
 *        gsc-accounts/account-3.json
 *        ...
 *   5. Add each service account's email as OWNER in Google Search Console
 *      for all properties you want to submit URLs for
 *
 * How it works:
 *   - Loads all service account JSON files from gsc-accounts/ folder
 *   - Also loads the legacy gsc-service-account.json (account #0)
 *   - Splits the URL queue into N chunks (one per account)
 *   - Submits 200 URLs per account IN PARALLEL
 *   - With 5 accounts → 1,000 URLs/day → 16 days for 16,000 URLs
 *   - With 10 accounts → 2,000 URLs/day → 8 days for 16,000 URLs
 *
 * Usage:
 *   node scripts/gsc-multi-account-submit.mjs              # Submit (200 per account)
 *   node scripts/gsc-multi-account-submit.mjs --dry-run    # Preview without submitting
 *   node scripts/gsc-multi-account-submit.mjs --status     # Show progress stats
 *   node scripts/gsc-multi-account-submit.mjs 150          # Custom batch size per account
 */

import { readFileSync, writeFileSync, existsSync, readdirSync, mkdirSync } from 'fs';
import { createSign } from 'crypto';
import { fileURLToPath } from 'url';
import { dirname, join, basename } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

// ── Config ──────────────────────────────────────────────────────────────────
const ACCOUNTS_DIR = join(__dirname, 'gsc-accounts');
const LEGACY_CRED = join(__dirname, 'gsc-service-account.json');
const QUEUE_FILE = join(__dirname, 'indexing-queue-smart.txt');
const PROGRESS_FILE = join(__dirname, 'gsc-multi-progress.json');
const LOG_FILE = join(__dirname, 'gsc-multi-submit.log');
const PER_ACCOUNT_LIMIT = parseInt(process.argv.find(a => /^\d+$/.test(a)) || '200');
const DRY_RUN = process.argv.includes('--dry-run');
const STATUS_ONLY = process.argv.includes('--status');
const INCLUDE_TEMPLATES = process.argv.includes('--include-templates');

// ── SEO Safety: Curated City Whitelist ─────────────────────────────────────
// Only 60 high-value industrial cities are indexed. All other city-template
// pages get noindex in the React app and are excluded from API submission.
// Use --include-templates to override (not recommended — doorway page risk).
const CURATED_CITY_SLUGS = new Set([
  // USA
  'houston', 'new-orleans', 'dallas', 'los-angeles', 'chicago', 'philadelphia',
  'pittsburgh', 'detroit', 'seattle', 'denver', 'new-york', 'atlanta',
  'san-francisco', 'boston', 'phoenix', 'port-arthur-texas', 'lake-charles-louisiana',
  'baton-rouge', 'corpus-christi', 'tampa', 'miami',
  // Middle East
  'abu-dhabi', 'dubai', 'jubail-saudi-arabia', 'doha-qatar', 'dammam-saudi-arabia',
  'ras-laffan-qatar', 'yanbu-saudi-arabia', 'al-khobar-saudi-arabia',
  // Europe
  'aberdeen-united-kingdom', 'rotterdam-netherlands', 'hamburg-germany',
  'stavanger-norway', 'london-united-kingdom', 'munich-germany', 'toulouse-france',
  'milan-italy', 'antwerp-belgium', 'gdansk-poland',
  // Asia-Pacific
  'singapore', 'mumbai-india', 'chennai', 'perth-australia', 'tokyo-japan',
  'seoul-south-korea', 'shanghai-china', 'kuala-lumpur-malaysia', 'bangkok-thailand',
  'hyderabad-india', 'ulsan-south-korea', 'geoje-south-korea', 'jamnagar-india',
  'yokohama-japan', 'brisbane-australia',
  // Americas & Africa
  'lagos-nigeria', 'luanda-angola', 'rio-de-janeiro-brazil',
  'johannesburg-south-africa', 'calgary-canada', 'edmonton-canada',
]);

const TEMPLATE_PREFIXES = [
  'ultrasonic-testing-', 'radiographic-testing-', 'magnetic-particle-testing-',
  'penetrant-testing-', 'eddy-current-testing-', 'visual-testing-',
  'visual-inspection-', 'ndt-training-', 'ndt-consulting-',
  'ndt-inventory-', 'ndt-marketing-', 'ndt-quotation-', 'ndt-sales-', 'ndt-crm-',
  'ndt-certification-tracking-', 'ndt-calibration-tracking-', 'ndt-equipment-management-',
  'ndt-level-ii-training-', 'ndt-level-i-training-',
  'et-level-ii-training-', 'mt-level-ii-training-', 'pt-level-ii-training-',
  'rt-level-ii-training-', 'ut-level-ii-training-', 'vt-level-ii-training-',
  'asnt-level-iii-prep-', 'digital-twin-', 'ndt-erp-', 'ndt-reporting-',
];
const TEMPLATE_PATH_PREFIXES = [
  '/consulting/ndt-consulting-', '/services/acoustic-emission-inspection-',
  '/services/guided-wave-inspection-', '/services/paut-inspection-',
  '/services/tofd-inspection-', '/services/mfl-inspection-',
  '/inspection/corrosion-inspection-services-', '/inspection/pipeline-inspection-services-',
  '/inspection/tank-inspection-services-', '/inspection/weld-inspection-services-',
  '/industry/power-generation-ndt-', '/industry/manufacturing-ndt-',
  '/industry/petrochemical-ndt-', '/industry/construction-ndt-',
  '/industry/aerospace-ndt-', '/industry/pipeline-ndt-',
  '/industry/oil-gas-ndt-', '/industry/marine-ndt-',
  '/training/asnt-level-iii-training-', '/training/api-510-training-',
  '/training/api-570-training-', '/training/api-653-training-', '/training/cwi-training-',
];

function getCitySlug(url) {
  try {
    const path = new URL(url).pathname;
    for (const p of TEMPLATE_PATH_PREFIXES) {
      if (path.startsWith(p)) return path.slice(p.length);
    }
    const slug = path.replace(/^\//, '');
    for (const p of TEMPLATE_PREFIXES) {
      if (slug.startsWith(p)) return slug.slice(p.length);
    }
  } catch {}
  return null;
}

function isTemplateUrl(url) {
  return getCitySlug(url) !== null;
}

function isCuratedTemplateUrl(url) {
  const city = getCitySlug(url);
  return city !== null && CURATED_CITY_SLUGS.has(city);
}

function isExcludedUrl(url) {
  // Excluded = template URL for a NON-curated city
  const city = getCitySlug(url);
  return city !== null && !CURATED_CITY_SLUGS.has(city);
}

// ── Load all service accounts ───────────────────────────────────────────────
function loadAccounts() {
  const accounts = [];

  // Account #0: legacy service account (backward compatible)
  if (existsSync(LEGACY_CRED)) {
    const cred = JSON.parse(readFileSync(LEGACY_CRED, 'utf-8'));
    accounts.push({
      id: 'account-0-legacy',
      email: cred.client_email,
      projectId: cred.project_id,
      credentials: cred,
    });
  }

  // Additional accounts from gsc-accounts/ folder
  if (existsSync(ACCOUNTS_DIR)) {
    const files = readdirSync(ACCOUNTS_DIR)
      .filter(f => f.endsWith('.json'))
      .sort();

    for (const file of files) {
      try {
        const cred = JSON.parse(readFileSync(join(ACCOUNTS_DIR, file), 'utf-8'));
        if (cred.client_email && cred.private_key) {
          accounts.push({
            id: basename(file, '.json'),
            email: cred.client_email,
            projectId: cred.project_id || 'unknown',
            credentials: cred,
          });
        }
      } catch (err) {
        console.warn(`⚠️  Skipping invalid account file: ${file} (${err.message})`);
      }
    }
  } else {
    mkdirSync(ACCOUNTS_DIR, { recursive: true });
    console.log(`📁 Created gsc-accounts/ folder. Add service account JSON files there.`);
  }

  return accounts;
}

// ── Auth ────────────────────────────────────────────────────────────────────
function getJWT(credentials, scope) {
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
  return `${unsigned}.${sig}`;
}

async function getAccessToken(credentials, scope = 'https://www.googleapis.com/auth/indexing') {
  const jwt = getJWT(credentials, scope);
  const res = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer&assertion=${jwt}`,
  });
  if (!res.ok) throw new Error(`Token failed: ${await res.text()}`);
  return (await res.json()).access_token;
}

// ── Verified domains check ──────────────────────────────────────────────────
async function getVerifiedDomains(credentials) {
  try {
    const wmToken = await getAccessToken(credentials, 'https://www.googleapis.com/auth/webmasters');
    const res = await fetch('https://www.googleapis.com/webmasters/v3/sites', {
      headers: { Authorization: `Bearer ${wmToken}` },
    });
    const data = await res.json();
    if (!data.siteEntry) return new Set();
    return new Set(
      data.siteEntry
        .filter(s => s.permissionLevel === 'siteOwner')
        .map(s => s.siteUrl.replace(/\/$/, ''))
    );
  } catch (err) {
    console.warn(`   ⚠️  Could not check verified domains: ${err.message}`);
    return new Set(['https://atlantisndt.com']); // Assume primary domain at minimum
  }
}

// ── Submit URL ──────────────────────────────────────────────────────────────
async function submitUrl(url, token) {
  const res = await fetch('https://indexing.googleapis.com/v3/urlNotifications:publish', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
    body: JSON.stringify({ url, type: 'URL_UPDATED' }),
  });
  return { status: res.status, data: await res.json() };
}

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

// ── Progress management ─────────────────────────────────────────────────────
function loadProgress() {
  if (existsSync(PROGRESS_FILE)) {
    return JSON.parse(readFileSync(PROGRESS_FILE, 'utf-8'));
  }

  // Seed from legacy drip-feed-progress.json
  const legacyProgress = join(__dirname, 'drip-feed-progress.json');
  const seeded = [];
  if (existsSync(legacyProgress)) {
    const legacy = JSON.parse(readFileSync(legacyProgress, 'utf-8'));
    seeded.push(...(legacy.submitted || []));
  }

  return {
    submitted: seeded,
    failed: [],
    skipped: [],
    runs: [],
    created: new Date().toISOString(),
    totalSubmitted: seeded.length,
  };
}

function saveProgress(progress) {
  writeFileSync(PROGRESS_FILE, JSON.stringify(progress, null, 2));
}

// ── Per-account submission worker ───────────────────────────────────────────
async function submitBatch(account, urls, progress, dryRun = false) {
  const accountId = account.id;
  const results = { ok: 0, fail: 0, skipped: 0, rateLimited: false };

  if (urls.length === 0) return results;

  console.log(`\n   🔑 ${accountId} (${account.email})`);
  console.log(`      Project: ${account.projectId}`);
  console.log(`      URLs assigned: ${urls.length}`);

  if (dryRun) {
    console.log(`      [DRY RUN] Would submit ${urls.length} URLs`);
    results.ok = urls.length;
    return results;
  }

  // Check verified domains for this account
  const verified = await getVerifiedDomains(account.credentials);
  console.log(`      Verified properties: ${verified.size}`);

  // Filter to submittable URLs
  const submittable = [];
  for (const url of urls) {
    const origin = new URL(url).origin;
    if (verified.has(origin)) {
      submittable.push(url);
    } else {
      results.skipped++;
    }
  }

  if (results.skipped > 0) {
    console.log(`      ⚠️  Skipping ${results.skipped} URLs from unverified domains`);
  }

  if (submittable.length === 0) {
    console.log(`      ❌ No submittable URLs for this account`);
    return results;
  }

  // Get auth token
  let token;
  try {
    token = await getAccessToken(account.credentials);
  } catch (err) {
    console.log(`      ❌ Auth failed: ${err.message}`);
    results.fail = submittable.length;
    return results;
  }

  // Submit URLs
  for (let i = 0; i < submittable.length; i++) {
    try {
      const { status, data } = await submitUrl(submittable[i], token);

      if (status === 200) {
        results.ok++;
        progress.submitted.push(submittable[i]);
        if (results.ok % 20 === 0 || i === submittable.length - 1) {
          process.stdout.write(`\r      ✅ ${results.ok}/${submittable.length} submitted`);
        }
      } else if (status === 429) {
        console.log(`\n      ⚠️  Rate limited after ${results.ok} submissions`);
        results.rateLimited = true;
        break;
      } else if (status === 403) {
        const failOrigin = new URL(submittable[i]).origin;
        console.log(`\n      🚫 403 for ${failOrigin} — skipping this domain`);
        // Skip remaining URLs from same domain
        while (i + 1 < submittable.length && submittable[i + 1].startsWith(failOrigin)) {
          i++;
          results.skipped++;
        }
        results.fail++;
        progress.failed.push(submittable[i]);
      } else {
        results.fail++;
        progress.failed.push(submittable[i]);
      }
    } catch (err) {
      results.fail++;
    }

    // Rate limiting: 350ms between requests + extra pause every 50
    await sleep(350);
    if ((i + 1) % 50 === 0) await sleep(2000);
  }

  console.log(); // newline after progress
  return results;
}

// ── Status display ──────────────────────────────────────────────────────────
function showStatus(accounts, progress, totalUrls) {
  const remaining = totalUrls - progress.submitted.length;
  const dailyCapacity = accounts.length * PER_ACCOUNT_LIMIT;
  const daysRemaining = Math.ceil(remaining / dailyCapacity);

  console.log(`\n╔════════════════════════════════════════════════════╗`);
  console.log(`║     GSC Multi-Account Indexing Status              ║`);
  console.log(`╠════════════════════════════════════════════════════╣`);
  console.log(`║  Service Accounts:     ${String(accounts.length).padStart(5)}                      ║`);
  console.log(`║  Daily Capacity:       ${String(dailyCapacity).padStart(5)} URLs/day              ║`);
  console.log(`║  ──────────────────────────────────────────────── ║`);
  console.log(`║  Total URLs in Queue:  ${String(totalUrls).padStart(5).padEnd(27)}║`);
  console.log(`║  Already Submitted:    ${String(progress.submitted.length).padStart(5).padEnd(27)}║`);
  console.log(`║  Remaining:            ${String(remaining).padStart(5).padEnd(27)}║`);
  console.log(`║  Failed:               ${String(progress.failed.length).padStart(5).padEnd(27)}║`);
  console.log(`║  ──────────────────────────────────────────────── ║`);
  console.log(`║  Est. Days to Complete: ${String(daysRemaining).padStart(4).padEnd(26)}║`);

  const eta = new Date();
  eta.setDate(eta.getDate() + daysRemaining);
  console.log(`║  Est. Completion Date:  ${eta.toISOString().split('T')[0].padEnd(26)}║`);
  console.log(`║  Progress:              ${(progress.submitted.length / totalUrls * 100).toFixed(1).padStart(5)}%                    ║`);
  console.log(`╠════════════════════════════════════════════════════╣`);
  console.log(`║  Accounts:                                        ║`);

  for (const acc of accounts) {
    const label = `${acc.id} (${acc.projectId})`.substring(0, 44);
    console.log(`║    ${label.padEnd(46)}║`);
  }

  console.log(`╠════════════════════════════════════════════════════╣`);

  if (progress.runs.length > 0) {
    const last5 = progress.runs.slice(-5);
    console.log(`║  Recent Runs:                                     ║`);
    for (const run of last5) {
      const line = `${run.date} — ${run.submitted} sent (${run.accounts} accounts)`;
      console.log(`║    ${line.padEnd(46)}║`);
    }
  }

  console.log(`╚════════════════════════════════════════════════════╝\n`);

  // Scale recommendations
  if (accounts.length === 1) {
    console.log(`💡 TIP: You're using 1 account (200/day). Add more service accounts`);
    console.log(`   to gsc-accounts/ to increase throughput:\n`);
    console.log(`   Accounts  │  Daily Rate  │  Days to Complete`);
    console.log(`   ──────────┼──────────────┼──────────────────`);
    for (const n of [3, 5, 8, 10]) {
      const days = Math.ceil(remaining / (n * 200));
      console.log(`   ${String(n).padStart(5)}     │  ${String(n * 200).padStart(5)}/day   │  ${days} days`);
    }
    console.log();
  }
}

// ── Main ────────────────────────────────────────────────────────────────────
async function main() {
  console.log(`\n🚀 GSC Multi-Account Parallel Indexing Submission`);
  console.log(`${'─'.repeat(50)}`);

  // Load accounts
  const accounts = loadAccounts();
  if (accounts.length === 0) {
    console.error('❌ No service accounts found!');
    console.error('   Place gsc-service-account.json in scripts/ or');
    console.error('   add JSON files to scripts/gsc-accounts/');
    process.exit(1);
  }

  console.log(`\n📋 Loaded ${accounts.length} service account(s):`);
  for (const acc of accounts) {
    console.log(`   • ${acc.id}: ${acc.email} (project: ${acc.projectId})`);
  }

  // Load queue
  const rawUrls = readFileSync(QUEUE_FILE, 'utf-8').trim().split('\n')
    .filter(u => u.startsWith('https://'));

  // SEO Safety: Only submit unique content + curated city pages
  let allUrls;
  if (INCLUDE_TEMPLATES) {
    allUrls = rawUrls;
    console.log(`\n📂 Queue: ${allUrls.length} total URLs (⚠️  ALL TEMPLATES INCLUDED — doorway page risk!)`);
  } else {
    const uniqueCount = rawUrls.filter(u => !isTemplateUrl(u)).length;
    const curatedCount = rawUrls.filter(u => isCuratedTemplateUrl(u)).length;
    const excludedCount = rawUrls.filter(u => isExcludedUrl(u)).length;
    allUrls = rawUrls.filter(u => !isExcludedUrl(u));
    console.log(`\n📂 Queue: ${rawUrls.length} total URLs`);
    console.log(`   📋 Unique content:        ${uniqueCount} URLs`);
    console.log(`   🏙️  Curated cities (60):   ${curatedCount} URLs`);
    console.log(`   🛡️  Excluded (noindex):    ${excludedCount} URLs`);
    console.log(`   ─────────────────────────────`);
    console.log(`   📤 Submitting:            ${allUrls.length} URLs`);
    console.log(`   💡 Use --include-templates to override (not recommended)`);
  }

  // Load progress
  const progress = loadProgress();
  const submittedSet = new Set(progress.submitted);
  const remaining = allUrls.filter(u => !submittedSet.has(u));

  console.log(`   Already submitted: ${progress.submitted.length}`);
  console.log(`   Remaining: ${remaining.length}`);

  // Status only mode
  if (STATUS_ONLY) {
    showStatus(accounts, progress, allUrls.length);
    return;
  }

  if (remaining.length === 0) {
    console.log('\n✅ All URLs have been submitted! Nothing to do.');
    showStatus(accounts, progress, allUrls.length);
    return;
  }

  // Calculate daily capacity
  const dailyCapacity = accounts.length * PER_ACCOUNT_LIMIT;
  const todayBatch = remaining.slice(0, dailyCapacity);

  console.log(`\n⚡ Today's submission plan:`);
  console.log(`   Accounts: ${accounts.length}`);
  console.log(`   Per-account limit: ${PER_ACCOUNT_LIMIT}`);
  console.log(`   Total capacity: ${dailyCapacity} URLs`);
  console.log(`   Submitting: ${todayBatch.length} URLs`);

  if (DRY_RUN) {
    console.log(`\n🔍 DRY RUN MODE — no actual submissions\n`);
  }

  // Split URLs across accounts (round-robin for even distribution)
  const accountBatches = accounts.map(() => []);
  for (let i = 0; i < todayBatch.length; i++) {
    const accountIndex = i % accounts.length;
    if (accountBatches[accountIndex].length < PER_ACCOUNT_LIMIT) {
      accountBatches[accountIndex].push(todayBatch[i]);
    }
  }

  console.log(`\n📤 Distribution:`);
  for (let i = 0; i < accounts.length; i++) {
    console.log(`   ${accounts[i].id}: ${accountBatches[i].length} URLs`);
  }

  // Submit ALL accounts in PARALLEL
  console.log(`\n🔄 Submitting in parallel across ${accounts.length} accounts...`);
  const startTime = Date.now();

  const results = await Promise.allSettled(
    accounts.map((account, i) =>
      submitBatch(account, accountBatches[i], progress, DRY_RUN)
    )
  );

  const elapsed = ((Date.now() - startTime) / 1000).toFixed(1);

  // Aggregate results
  let totalOk = 0, totalFail = 0, totalSkipped = 0;
  const accountResults = [];

  for (let i = 0; i < results.length; i++) {
    const result = results[i];
    if (result.status === 'fulfilled') {
      totalOk += result.value.ok;
      totalFail += result.value.fail;
      totalSkipped += result.value.skipped;
      accountResults.push({
        account: accounts[i].id,
        ...result.value,
      });
    } else {
      console.log(`   ❌ ${accounts[i].id} failed: ${result.reason}`);
      totalFail += accountBatches[i].length;
      accountResults.push({
        account: accounts[i].id,
        ok: 0,
        fail: accountBatches[i].length,
        skipped: 0,
        error: result.reason?.message,
      });
    }
  }

  // Save progress
  progress.totalSubmitted = progress.submitted.length;
  progress.runs.push({
    date: new Date().toISOString().split('T')[0],
    time: new Date().toISOString(),
    accounts: accounts.length,
    submitted: totalOk,
    failed: totalFail,
    skipped: totalSkipped,
    elapsed: `${elapsed}s`,
    perAccount: accountResults,
  });
  saveProgress(progress);

  // Final summary
  console.log(`\n${'═'.repeat(50)}`);
  console.log(`📊 Today's Results (${elapsed}s)`);
  console.log(`${'═'.repeat(50)}`);
  console.log(`   ✅ Submitted:  ${totalOk}`);
  console.log(`   ❌ Failed:     ${totalFail}`);
  console.log(`   ⏭️  Skipped:    ${totalSkipped}`);
  console.log(`   ─────────────────────────`);
  console.log(`   📈 Total progress: ${progress.submitted.length}/${allUrls.length} (${(progress.submitted.length / allUrls.length * 100).toFixed(1)}%)`);

  const newRemaining = allUrls.length - progress.submitted.length;
  const daysLeft = Math.ceil(newRemaining / dailyCapacity);
  const eta = new Date();
  eta.setDate(eta.getDate() + daysLeft);
  console.log(`   📅 Remaining: ${newRemaining} URLs (~${daysLeft} days)`);
  console.log(`   🏁 ETA: ${eta.toISOString().split('T')[0]}`);

  // Per-account breakdown
  console.log(`\n   Per-account breakdown:`);
  for (const ar of accountResults) {
    const status = ar.error ? `❌ ${ar.error}` : `✅ ${ar.ok} sent, ${ar.fail} failed`;
    console.log(`   • ${ar.account}: ${status}`);
  }

  // Log to file
  const logEntry = `[${new Date().toISOString()}] ${accounts.length} accounts, ${totalOk} submitted, ${totalFail} failed, ${totalSkipped} skipped. Total: ${progress.submitted.length}/${allUrls.length}\n`;
  writeFileSync(LOG_FILE, existsSync(LOG_FILE) ? readFileSync(LOG_FILE, 'utf-8') + logEntry : logEntry);

  showStatus(accounts, progress, allUrls.length);
}

main().catch(err => {
  console.error('❌ Fatal error:', err);
  process.exit(1);
});
