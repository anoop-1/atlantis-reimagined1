#!/usr/bin/env node
/**
 * GSC Indexing Audit — Tier 5 Risk Mitigation
 * ────────────────────────────────────────────
 * Reads scripts/gsc-multi-progress.json, picks 20 URLs sampled across the
 * batches submitted on the target date, and calls the Google Search Console
 * URL Inspection API to retrieve the current indexing state for each.
 *
 * READ-ONLY — does not submit, does not modify any source files.
 *
 * Usage:
 *   node scripts/gsc-indexing-audit.mjs                     # samples 20 URLs from 2026-05-12 submissions
 *   node scripts/gsc-indexing-audit.mjs --date 2026-05-12   # explicit target submission date
 *   node scripts/gsc-indexing-audit.mjs --sample 30         # custom sample size
 *   node scripts/gsc-indexing-audit.mjs --report-date 2026-05-13   # report filename date
 */

import { readFileSync, writeFileSync, existsSync } from 'fs';
import { createSign } from 'crypto';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

function getArg(name, fallback) {
  const i = process.argv.indexOf(name);
  if (i === -1 || i === process.argv.length - 1) return fallback;
  return process.argv[i + 1];
}

const TARGET_DATE = getArg('--date', '2026-05-12');
const REPORT_DATE = getArg('--report-date', new Date().toISOString().slice(0, 10));
const SAMPLE_SIZE = parseInt(getArg('--sample', '20'), 10);
const PROGRESS_FILE = join(__dirname, 'gsc-multi-progress.json');
const CRED_FILE = join(__dirname, 'gsc-service-account.json');
const REPORT_FILE = join(__dirname, `gsc-indexing-audit-${REPORT_DATE}.md`);
const SITE = 'sc-domain:atlantisndt.com';

// ── Auth ───────────────────────────────────────────────────────────────────
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
  const enc = (o) => Buffer.from(JSON.stringify(o)).toString('base64url');
  const unsigned = `${enc(header)}.${enc(claim)}`;
  const sig = createSign('RSA-SHA256').update(unsigned).sign(credentials.private_key, 'base64url');
  return `${unsigned}.${sig}`;
}

async function getToken(credentials, scope = 'https://www.googleapis.com/auth/webmasters.readonly') {
  const jwt = getJWT(credentials, scope);
  const r = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer&assertion=${jwt}`,
  });
  if (!r.ok) throw new Error(`auth failed (${r.status}): ${await r.text()}`);
  const j = await r.json();
  return j.access_token;
}

async function inspect(url, token) {
  const r = await fetch('https://searchconsole.googleapis.com/v1/urlInspection/index:inspect', {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ inspectionUrl: url, siteUrl: SITE }),
  });
  const txt = await r.text();
  let data; try { data = JSON.parse(txt); } catch { data = { raw: txt }; }
  return { status: r.status, data };
}

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

// ── Sampling logic ─────────────────────────────────────────────────────────
function pickTodayUrls(progress, targetDate) {
  // Sum submitted counts across runs matching targetDate
  const runs = (progress.runs || []).filter(r => r.date === targetDate);
  if (runs.length === 0) return [];
  const submittedToday = runs.reduce((s, r) => s + (r.submitted || 0), 0);
  // The `submitted` flat array appends in run order, so today's batch is the tail
  // BUT runs after the target date could have appended more. Detect that.
  const runsAfter = (progress.runs || []).filter(r => r.date > targetDate);
  const submittedAfter = runsAfter.reduce((s, r) => s + (r.submitted || 0), 0);
  const submitted = progress.submitted || [];
  const start = submitted.length - submittedAfter - submittedToday;
  const end = submitted.length - submittedAfter;
  if (start < 0 || end > submitted.length || end <= start) return [];
  return submitted.slice(start, end);
}

function stratifiedSample(arr, n) {
  if (arr.length <= n) return arr.slice();
  const out = [];
  const step = arr.length / n;
  for (let i = 0; i < n; i++) {
    out.push(arr[Math.floor(i * step)]);
  }
  return out;
}

// ── Interpret URL Inspection response ──────────────────────────────────────
function interpret(insp) {
  if (!insp || !insp.inspectionResult) return { state: 'API_ERROR', verdict: 'unknown' };
  const r = insp.inspectionResult;
  const idx = r.indexStatusResult || {};
  return {
    verdict: idx.verdict || 'unknown',
    coverageState: idx.coverageState || 'unknown',
    robotsTxtState: idx.robotsTxtState || 'unknown',
    indexingState: idx.indexingState || 'unknown',
    lastCrawlTime: idx.lastCrawlTime || null,
    pageFetchState: idx.pageFetchState || 'unknown',
    googleCanonical: idx.googleCanonical || null,
    userCanonical: idx.userCanonical || null,
    referringUrls: (idx.referringUrls || []).slice(0, 3),
    crawledAs: idx.crawledAs || null,
    inspectionResultLink: r.inspectionResultLink || null,
  };
}

function classify(view) {
  const cs = (view.coverageState || '').toLowerCase();
  if (cs.includes('submitted and indexed') || cs === 'indexed') return 'indexed';
  if (cs.includes('unknown to google')) return 'url_unknown_to_google';
  if (cs.includes('discovered')) return 'discovered_not_indexed';
  if (cs.includes('crawled')) return 'crawled_not_indexed';
  if (cs.includes('duplicate')) return 'duplicate';
  if (cs.includes('excluded')) return 'excluded';
  if (cs === 'unknown' || cs === '') return 'unknown';
  return cs;
}

// ── Main ───────────────────────────────────────────────────────────────────
async function main() {
  if (!existsSync(PROGRESS_FILE)) { console.error(`progress file missing: ${PROGRESS_FILE}`); process.exit(1); }
  if (!existsSync(CRED_FILE)) { console.error(`credentials missing: ${CRED_FILE}`); process.exit(1); }

  const progress = JSON.parse(readFileSync(PROGRESS_FILE, 'utf-8'));
  const credentials = JSON.parse(readFileSync(CRED_FILE, 'utf-8'));

  const todayUrls = pickTodayUrls(progress, TARGET_DATE);
  console.log(`[gsc-audit] target date: ${TARGET_DATE}`);
  console.log(`[gsc-audit] URLs submitted that date: ${todayUrls.length}`);
  if (todayUrls.length === 0) {
    console.error('no URLs found for target date');
    process.exit(1);
  }

  const sample = stratifiedSample(todayUrls, SAMPLE_SIZE);
  console.log(`[gsc-audit] sample size: ${sample.length}`);

  console.log(`[gsc-audit] getting access token...`);
  const token = await getToken(credentials);

  const results = [];
  for (let i = 0; i < sample.length; i++) {
    const url = sample[i];
    console.log(`[${i + 1}/${sample.length}] inspecting ${url}`);
    try {
      const { status, data } = await inspect(url, token);
      if (status !== 200) {
        results.push({ url, status, error: data?.error?.message || JSON.stringify(data).slice(0, 200), view: null });
      } else {
        results.push({ url, status, view: interpret(data) });
      }
    } catch (err) {
      results.push({ url, status: 'EXCEPTION', error: err.message, view: null });
    }
    // Rate limit: ~1 req/sec is safe
    await sleep(1100);
  }

  // ── Build report ─────────────────────────────────────────────────────────
  const classes = {};
  for (const r of results) {
    const key = r.view ? classify(r.view) : (r.error ? 'api_error' : 'unknown');
    classes[key] = (classes[key] || 0) + 1;
  }

  const lines = [];
  lines.push(`# GSC Indexing Audit — Sampled URLs from ${TARGET_DATE}`);
  lines.push(`Report generated: ${new Date().toISOString()}`);
  lines.push('');
  lines.push(`**Property:** ${SITE}`);
  lines.push(`**URLs submitted on ${TARGET_DATE}:** ${todayUrls.length}`);
  lines.push(`**Sample size:** ${sample.length} (stratified — evenly spaced across the submission order)`);
  lines.push('');
  lines.push('## Distribution');
  lines.push('');
  lines.push('| State | Count |');
  lines.push('|---|---|');
  for (const [k, v] of Object.entries(classes).sort((a, b) => b[1] - a[1])) {
    lines.push(`| ${k} | ${v} |`);
  }
  lines.push('');

  lines.push('## Per-URL Detail');
  lines.push('');
  lines.push('| # | URL | Verdict | Coverage state | Indexing state | Last crawl | Issue / Recommended Fix |');
  lines.push('|---|---|---|---|---|---|---|');
  results.forEach((r, i) => {
    if (!r.view) {
      const sev = 'critical';
      const fix = `API error (status=${r.status}): ${r.error}. Verify service account has access to ${SITE}.`;
      lines.push(`| ${i + 1} | ${r.url} | API_ERROR | - | - | - | ${sev}: ${fix} |`);
      return;
    }
    const v = r.view;
    const cls = classify(v);
    let fix;
    let sev;
    if (cls === 'indexed') {
      sev = 'info'; fix = 'Indexed. No action.';
    } else if (cls === 'url_unknown_to_google') {
      sev = 'info';
      fix = 'Google has not yet crawled. Normal state 12-48h after Indexing API submission. Re-inspect in 24-72h.';
    } else if (cls === 'discovered_not_indexed') {
      sev = 'warning';
      fix = 'Google has the URL but not yet crawled. Add to internal links / sitemap to raise priority. Re-submit if older than 14 days.';
    } else if (cls === 'crawled_not_indexed') {
      sev = 'warning';
      fix = 'Crawled but not selected. Improve content uniqueness, internal links, or thin-content signal. Consider noindex if low value.';
    } else if (cls === 'duplicate') {
      sev = 'warning';
      fix = 'Duplicate or alternate-canonical. Check canonical link tag matches the page URL. Confirm Google chose the same canonical.';
    } else if (cls === 'excluded') {
      sev = 'critical';
      fix = 'Excluded by robots/noindex/canonical. Audit robots meta + canonical on this URL.';
    } else {
      sev = 'info';
      fix = 'Status not yet available in URL Inspection. Re-check in 24-72h.';
    }
    const lastCrawl = v.lastCrawlTime ? v.lastCrawlTime.split('T')[0] : '-';
    lines.push(`| ${i + 1} | ${r.url} | ${v.verdict} | ${v.coverageState} | ${v.indexingState} | ${lastCrawl} | ${sev}: ${fix} |`);
  });

  lines.push('');
  lines.push('## Notes');
  lines.push('');
  lines.push('- "Discovered – currently not indexed" is the normal post-submission state for 1-7 days after API submission. It transitions to "Submitted and indexed" (or another state) once Google crawls.');
  lines.push('- "Crawled – currently not indexed" after 7+ days usually indicates content quality or duplication signals. Add unique location-specific content or remove from sitemap.');
  lines.push('- The Indexing API submission is a hint, not a guarantee. Real indexing depends on content quality, internal linking, and Googlebot priority.');
  lines.push('');
  lines.push('## Re-run');
  lines.push('');
  lines.push('```');
  lines.push(`node scripts/gsc-indexing-audit.mjs --date ${TARGET_DATE} --sample ${SAMPLE_SIZE}`);
  lines.push('```');

  writeFileSync(REPORT_FILE, lines.join('\n') + '\n');
  console.log(`[gsc-audit] report written: ${REPORT_FILE}`);
}

main().catch(e => { console.error('[gsc-audit] FATAL', e); process.exit(1); });
