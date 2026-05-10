#!/usr/bin/env node
/**
 * Daily SEO Orchestrator
 * ──────────────────────
 * Single entry point that runs all daily SEO maintenance autonomously.
 * Designed to be invoked by Windows Scheduled Task `Daily-SEO-Orchestrator`
 * at 7:00 AM (one hour after the GSC indexing job at 6:00 AM).
 *
 * Pipeline (each stage wrapped in try/catch — never crashes the rest):
 *   1. Pull fresh GSC data → scripts/gsc-audit-2026-04.json (overwrite)
 *   2. Pull fresh GA4 data → scripts/ga4-audit-2026-04.json (overwrite)
 *   3. Run ctr-bleeders.mjs → scripts/ctr-bleeders-<YYYY-MM>.json
 *   4. Run joined-attribution.mjs → scripts/joined-attribution-<YYYY-MM>.json
 *   5. Run gsc-multi-account-submit.mjs (200 URLs per account, 10 accounts)
 *   6. Compare today's totals vs yesterday → scripts/daily-deltas/<YYYY-MM-DD>.json
 *   7. Identify NEW bleeders today vs yesterday → scripts/daily-bleeders-new/<YYYY-MM-DD>.json
 *   8. Run auto-rewrite-bleeders.mjs (suggestions for un-overridden bleeders)
 *   9. (Sundays only) Run seo-dashboard.mjs → scripts/weekly-dashboard-<ISO-week>.md
 *  10. Send Telegram summary
 *
 * IDEMPOTENT: safe to re-run same day. Output files use overwrite-by-date.
 *
 * Usage:
 *   node scripts/daily-seo-orchestrator.mjs                # full run
 *   node scripts/daily-seo-orchestrator.mjs --skip-pulls   # skip GSC/GA4 pulls (use cached)
 *   node scripts/daily-seo-orchestrator.mjs --skip-submit  # skip indexing submission
 *   node scripts/daily-seo-orchestrator.mjs --dry-run      # don't actually submit URLs
 *   node scripts/daily-seo-orchestrator.mjs --no-telegram  # skip Telegram alert
 */

import { readFileSync, writeFileSync, existsSync, mkdirSync, readdirSync, appendFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { spawn } from 'child_process';
import { sendTelegram } from './lib/telegram.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');

// ── Config / paths ──────────────────────────────────────────────────────────
const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD
const ym = today.slice(0, 7); // YYYY-MM
const dayOfWeek = new Date().getUTCDay(); // 0 = Sunday

const PATHS = {
  gscAudit: join(__dirname, 'gsc-audit-2026-04.json'),
  ga4Audit: join(__dirname, 'ga4-audit-2026-04.json'),
  bleeders: join(__dirname, `ctr-bleeders-${ym}.json`),
  joined: join(__dirname, `joined-attribution-${ym}.json`),
  multiSubmit: join(__dirname, 'gsc-multi-account-submit.mjs'),
  multiProgress: join(__dirname, 'gsc-multi-progress.json'),
  deltasDir: join(__dirname, 'daily-deltas'),
  bleedersDir: join(__dirname, 'daily-bleeders-new'),
  log: join(__dirname, 'daily-orchestrator.log'),
  scriptsDir: __dirname,
};

const FLAGS = {
  skipPulls: process.argv.includes('--skip-pulls'),
  skipSubmit: process.argv.includes('--skip-submit'),
  dryRun: process.argv.includes('--dry-run'),
  noTelegram: process.argv.includes('--no-telegram'),
  forceWeekly: process.argv.includes('--force-weekly'),
};

// ── Logging ─────────────────────────────────────────────────────────────────
function log(msg) {
  const ts = new Date().toISOString();
  const line = `[${ts}] ${msg}`;
  console.log(line);
  try {
    appendFileSync(PATHS.log, line + '\n', 'utf-8');
  } catch {}
}

function logErr(msg, err) {
  const text = err?.stack || err?.message || String(err);
  log(`ERROR ${msg}: ${text}`);
}

// ── Ensure output dirs exist ────────────────────────────────────────────────
function ensureDirs() {
  for (const d of [PATHS.deltasDir, PATHS.bleedersDir]) {
    if (!existsSync(d)) mkdirSync(d, { recursive: true });
  }
}

// ── Spawn a node script and capture exit code ──────────────────────────────
function runScript(scriptPath, args = [], { timeoutMs = 1000 * 60 * 30 } = {}) {
  return new Promise((resolve) => {
    const child = spawn(process.execPath, [scriptPath, ...args], {
      cwd: ROOT,
      env: { ...process.env },
      shell: false,
    });
    let stdout = '';
    let stderr = '';
    let timedOut = false;
    const timer = setTimeout(() => {
      timedOut = true;
      try { child.kill('SIGTERM'); } catch {}
    }, timeoutMs);

    child.stdout?.on('data', (b) => {
      const s = b.toString();
      stdout += s;
      // Stream child output live, prefixed for clarity
      for (const line of s.split('\n')) {
        if (line.trim()) console.log(`   │ ${line}`);
      }
    });
    child.stderr?.on('data', (b) => {
      const s = b.toString();
      stderr += s;
      for (const line of s.split('\n')) {
        if (line.trim()) console.error(`   │ ${line}`);
      }
    });
    child.on('close', (code) => {
      clearTimeout(timer);
      resolve({ ok: !timedOut && code === 0, code, stdout, stderr, timedOut });
    });
    child.on('error', (err) => {
      clearTimeout(timer);
      resolve({ ok: false, code: -1, stdout, stderr: stderr + err.message, error: err.message });
    });
  });
}

// ── Stage wrapper: catch all errors, never crash pipeline ──────────────────
async function stage(name, fn) {
  log(`── STAGE: ${name} ──`);
  const t0 = Date.now();
  try {
    const result = await fn();
    const elapsed = ((Date.now() - t0) / 1000).toFixed(1);
    log(`   ✅ ${name} OK (${elapsed}s)`);
    return { ok: true, name, elapsed, ...result };
  } catch (err) {
    const elapsed = ((Date.now() - t0) / 1000).toFixed(1);
    logErr(name, err);
    return { ok: false, name, elapsed, error: err?.message || String(err) };
  }
}

// ── Stage helpers ───────────────────────────────────────────────────────────
async function stagePullGsc() {
  if (FLAGS.skipPulls) return { skipped: true, reason: '--skip-pulls' };
  const script = join(PATHS.scriptsDir, 'gsc-audit-pull.mjs');
  if (!existsSync(script)) throw new Error(`script not found: ${script}`);
  const r = await runScript(script);
  if (!r.ok) throw new Error(`gsc-audit-pull exit ${r.code}`);
  return { exit: r.code };
}

async function stagePullGa4() {
  if (FLAGS.skipPulls) return { skipped: true, reason: '--skip-pulls' };
  const script = join(PATHS.scriptsDir, 'ga4-audit-pull.mjs');
  if (!existsSync(script)) throw new Error(`script not found: ${script}`);
  // GA4 may exit 4 (partial errors) — still treat as recoverable
  const r = await runScript(script);
  // exit 0 = ok, 4 = partial, others = real failure but non-fatal here
  return { exit: r.code, partial: r.code === 4 };
}

async function stageBleeders() {
  const script = join(PATHS.scriptsDir, 'ctr-bleeders.mjs');
  if (!existsSync(script)) throw new Error(`script not found: ${script}`);
  const r = await runScript(script);
  if (!r.ok) throw new Error(`ctr-bleeders exit ${r.code}`);
  return { exit: r.code };
}

async function stageJoined() {
  const script = join(PATHS.scriptsDir, 'joined-attribution.mjs');
  if (!existsSync(script)) throw new Error(`script not found: ${script}`);
  const r = await runScript(script);
  // Joined attribution can fail on GA4 perms; treat as recoverable.
  return { exit: r.code, ok: r.ok };
}

async function stageMultiSubmit() {
  if (FLAGS.skipSubmit) return { skipped: true, reason: '--skip-submit', submittedToday: 0 };
  if (!existsSync(PATHS.multiSubmit)) {
    log(`   ⚠️  ${PATHS.multiSubmit} not found — skipping multi-account submission`);
    return { skipped: true, reason: 'script missing', submittedToday: 0 };
  }

  // Snapshot progress before
  let beforeCount = 0;
  if (existsSync(PATHS.multiProgress)) {
    try {
      beforeCount = JSON.parse(readFileSync(PATHS.multiProgress, 'utf-8')).submitted?.length || 0;
    } catch {}
  }

  const args = FLAGS.dryRun ? ['--dry-run'] : [];
  const r = await runScript(PATHS.multiSubmit, args, { timeoutMs: 1000 * 60 * 60 });

  let afterCount = 0;
  if (existsSync(PATHS.multiProgress)) {
    try {
      afterCount = JSON.parse(readFileSync(PATHS.multiProgress, 'utf-8')).submitted?.length || 0;
    } catch {}
  }

  const submittedToday = Math.max(0, afterCount - beforeCount);
  return { exit: r.code, ok: r.ok, beforeCount, afterCount, submittedToday };
}

// ── Compute today's deltas vs yesterday ─────────────────────────────────────
function snapshotPagesFromGscAudit() {
  if (!existsSync(PATHS.gscAudit)) return { totals: {}, pages: [] };
  const data = JSON.parse(readFileSync(PATHS.gscAudit, 'utf-8'));
  const pages = [];
  let totalClicks = 0, totalImpr = 0, weightedPos = 0, posSamples = 0;
  for (const siteUrl of Object.keys(data.sites || {})) {
    const block = data.sites[siteUrl]?.['28d'];
    if (!block) continue;
    totalClicks += block.totals?.clicks || 0;
    totalImpr += block.totals?.impressions || 0;
    for (const p of block.pages || []) {
      pages.push({ site: siteUrl, page: p.page, clicks: p.clicks, impressions: p.impressions, position: p.position, ctr: p.ctr });
      if (p.position && p.impressions) {
        weightedPos += p.position * p.impressions;
        posSamples += p.impressions;
      }
    }
  }
  const avgPos = posSamples > 0 ? weightedPos / posSamples : null;
  const ctr = totalImpr > 0 ? totalClicks / totalImpr : 0;
  return {
    totals: { clicks: totalClicks, impressions: totalImpr, ctr, position: avgPos },
    pages,
  };
}

function findYesterdayDelta() {
  if (!existsSync(PATHS.deltasDir)) return null;
  const files = readdirSync(PATHS.deltasDir).filter(f => f.endsWith('.json')).sort();
  // Pick the most recent file BEFORE today (skip today's file if already exists)
  const before = files.filter(f => f.replace('.json', '') < today);
  if (!before.length) return null;
  const latest = before[before.length - 1];
  try {
    return { date: latest.replace('.json', ''), data: JSON.parse(readFileSync(join(PATHS.deltasDir, latest), 'utf-8')) };
  } catch {
    return null;
  }
}

async function stageDeltas(submittedToday) {
  const snap = snapshotPagesFromGscAudit();
  const yesterday = findYesterdayDelta();

  const delta = {
    date: today,
    generated: new Date().toISOString(),
    totals: snap.totals,
    pagesSnapshot: snap.pages.slice(0, 5000), // cap to keep file size sane
    pagesCount: snap.pages.length,
    indexingSubmittedToday: submittedToday || 0,
    vsYesterday: null,
  };

  if (yesterday && yesterday.data?.totals) {
    const y = yesterday.data.totals;
    const c = snap.totals;
    const dClicks = (c.clicks || 0) - (y.clicks || 0);
    const dImpr = (c.impressions || 0) - (y.impressions || 0);
    const dPos = (c.position != null && y.position != null) ? (c.position - y.position) : null;
    delta.vsYesterday = {
      yesterdayDate: yesterday.date,
      clicks: { yesterday: y.clicks || 0, today: c.clicks || 0, delta: dClicks, pct: y.clicks ? (dClicks / y.clicks * 100) : null },
      impressions: { yesterday: y.impressions || 0, today: c.impressions || 0, delta: dImpr, pct: y.impressions ? (dImpr / y.impressions * 100) : null },
      position: { yesterday: y.position, today: c.position, delta: dPos },
    };
  }

  const outFile = join(PATHS.deltasDir, `${today}.json`);
  writeFileSync(outFile, JSON.stringify(delta, null, 2), 'utf-8');
  log(`   📄 wrote ${outFile}`);
  return { file: outFile, delta };
}

// ── Identify NEW bleeders today vs yesterday ────────────────────────────────
function loadBleedersFromFile(file) {
  if (!existsSync(file)) return new Map();
  try {
    const data = JSON.parse(readFileSync(file, 'utf-8'));
    const out = new Map();
    for (const siteUrl of Object.keys(data.sites || {})) {
      for (const b of data.sites[siteUrl]?.bleeders || []) {
        const key = `${siteUrl}${b.page}`;
        out.set(key, { site: siteUrl, ...b });
      }
    }
    return out;
  } catch {
    return new Map();
  }
}

function loadYesterdayBleedersFromDir() {
  if (!existsSync(PATHS.bleedersDir)) return null;
  const files = readdirSync(PATHS.bleedersDir).filter(f => f.endsWith('.json')).sort();
  const before = files.filter(f => f.replace('.json', '') < today);
  if (!before.length) return null;
  const latest = before[before.length - 1];
  try {
    const data = JSON.parse(readFileSync(join(PATHS.bleedersDir, latest), 'utf-8'));
    return { date: latest.replace('.json', ''), keys: new Set((data.allBleederKeys || []).slice()) };
  } catch {
    return null;
  }
}

async function stageNewBleeders() {
  const today_ = loadBleedersFromFile(PATHS.bleeders);
  const allKeys = Array.from(today_.keys());
  const yest = loadYesterdayBleedersFromDir();

  let newOnes;
  if (yest && yest.keys) {
    newOnes = allKeys.filter(k => !yest.keys.has(k)).map(k => today_.get(k));
  } else {
    // First run — call them all "new"
    newOnes = allKeys.map(k => today_.get(k));
  }
  // Sort by lost clicks/month desc
  newOnes.sort((a, b) => (b.lost_clicks_per_month || 0) - (a.lost_clicks_per_month || 0));

  const out = {
    date: today,
    generated: new Date().toISOString(),
    yesterdayDate: yest?.date || null,
    totalBleedersToday: allKeys.length,
    newBleedersCount: newOnes.length,
    newBleeders: newOnes,
    allBleederKeys: allKeys, // saved so tomorrow's run can diff
  };
  const outFile = join(PATHS.bleedersDir, `${today}.json`);
  writeFileSync(outFile, JSON.stringify(out, null, 2), 'utf-8');
  log(`   📄 wrote ${outFile} (${newOnes.length} new of ${allKeys.length} total)`);
  return { file: outFile, newOnes, total: allKeys.length };
}

// ── Auto-rewrite suggestions (rule-based, no LLM) ───────────────────────────
async function stageAutoRewrite() {
  const script = join(PATHS.scriptsDir, 'auto-rewrite-bleeders.mjs');
  if (!existsSync(script)) {
    return { skipped: true, reason: 'script not found' };
  }
  const r = await runScript(script);
  return { exit: r.code, ok: r.ok };
}

// ── Weekly dashboard (Sundays only) ─────────────────────────────────────────
async function stageWeekly() {
  if (!FLAGS.forceWeekly && dayOfWeek !== 0) {
    return { skipped: true, reason: `dayOfWeek=${dayOfWeek} (Sunday only)` };
  }
  const script = join(PATHS.scriptsDir, 'seo-dashboard.mjs');
  if (!existsSync(script)) return { skipped: true, reason: 'script not found' };
  const r = await runScript(script);
  return { exit: r.code, ok: r.ok };
}

// ── Bleeders fixed in last 7 days (rough heuristic) ─────────────────────────
function countBleedersFixedLast7Days() {
  if (!existsSync(PATHS.bleedersDir)) return 0;
  const files = readdirSync(PATHS.bleedersDir).filter(f => f.endsWith('.json')).sort();
  if (files.length < 2) return 0;
  const cutoff = new Date();
  cutoff.setDate(cutoff.getDate() - 7);
  const recent = files.filter(f => {
    const d = new Date(f.replace('.json', '') + 'T00:00:00');
    return !isNaN(d.getTime()) && d >= cutoff;
  });
  if (recent.length < 2) return 0;
  let oldKeys, newKeys;
  try {
    oldKeys = new Set(JSON.parse(readFileSync(join(PATHS.bleedersDir, recent[0]), 'utf-8')).allBleederKeys || []);
    newKeys = new Set(JSON.parse(readFileSync(join(PATHS.bleedersDir, recent[recent.length - 1]), 'utf-8')).allBleederKeys || []);
  } catch {
    return 0;
  }
  // Pages that WERE bleeders 7 days ago but are NOT today = "fixed"
  let fixed = 0;
  for (const k of oldKeys) if (!newKeys.has(k)) fixed++;
  return fixed;
}

// ── Telegram message builder ────────────────────────────────────────────────
function escMd(s) {
  return String(s == null ? '' : s).replace(/[_*`\[\]]/g, m => '\\' + m);
}

function buildTelegramMessage(results) {
  const lines = [];
  lines.push(`*Daily SEO Report — ${today}*`);
  lines.push('');

  // Clicks delta
  const deltaStage = results.find(r => r.name === 'deltas');
  if (deltaStage?.delta?.vsYesterday) {
    const v = deltaStage.delta.vsYesterday;
    const dClicks = v.clicks?.delta ?? 0;
    const dPct = v.clicks?.pct;
    const arrow = dClicks > 0 ? '📈' : dClicks < 0 ? '📉' : '➖';
    const pctStr = dPct != null ? ` (${dPct >= 0 ? '+' : ''}${dPct.toFixed(1)}%)` : '';
    lines.push(`${arrow} *Clicks*: ${v.clicks.today} vs ${v.clicks.yesterday}${pctStr}`);
    if (v.position?.today != null) {
      const dp = v.position.delta;
      const posArrow = dp != null && dp < 0 ? '⬆️' : dp != null && dp > 0 ? '⬇️' : '➖';
      lines.push(`${posArrow} *Avg pos*: ${v.position.today.toFixed(2)}${dp != null ? ` (Δ ${dp.toFixed(2)})` : ''}`);
    }
  } else if (deltaStage?.delta?.totals) {
    lines.push(`📊 *Clicks today*: ${deltaStage.delta.totals.clicks} (no yesterday baseline)`);
  } else {
    lines.push(`📊 _No GSC delta data available._`);
  }
  lines.push('');

  // Indexing
  const submitStage = results.find(r => r.name === 'multiSubmit');
  if (submitStage?.submittedToday != null) {
    if (submitStage.skipped) {
      lines.push(`📤 *Indexing*: skipped (${escMd(submitStage.reason || '')})`);
    } else {
      lines.push(`📤 *Indexing*: ${submitStage.submittedToday} URLs submitted today`);
    }
  }

  // Bleeders fixed
  const fixed = countBleedersFixedLast7Days();
  if (fixed > 0) {
    lines.push(`✅ *Bleeders fixed (7d)*: ${fixed}`);
  }

  // New bleeders
  const newBStage = results.find(r => r.name === 'newBleeders');
  if (newBStage?.newOnes) {
    const top = newBStage.newOnes.slice(0, 3);
    if (top.length) {
      lines.push('');
      lines.push(`🆕 *Top ${top.length} NEW bleeder(s) today*:`);
      for (const b of top) {
        const path = escMd((b.page || '').slice(0, 50));
        lines.push(`  • \`${path}\` — ${b.lost_clicks_per_month || 0} clicks/mo, pos ${b.position}`);
      }
    } else {
      lines.push(`🟢 *No new bleeders today*`);
    }
  }

  // Stage status quick recap
  lines.push('');
  lines.push(`*Pipeline*: ${results.filter(r => r.ok).length}/${results.length} stages ok`);
  const failed = results.filter(r => !r.ok && !r.skipped);
  if (failed.length) {
    lines.push(`⚠️ Failed: ${failed.map(f => escMd(f.name)).join(', ')}`);
  }

  // Report links
  lines.push('');
  if (deltaStage?.file) {
    lines.push(`📄 Delta: \`${escMd(deltaStage.file.split(/[\\/]/).pop())}\``);
  }
  if (newBStage?.file) {
    lines.push(`📄 New bleeders: \`${escMd(newBStage.file.split(/[\\/]/).pop())}\``);
  }

  // Recommended next action
  const nextAction = (() => {
    if (failed.length) return `Fix failed stage: ${failed[0].name} (see daily-orchestrator.log)`;
    if (newBStage?.newOnes?.length >= 5) return `Review auto-rewrite-suggestions-${today}.md and apply top rewrites`;
    if (submitStage?.afterCount && submitStage?.beforeCount && (submitStage.afterCount - submitStage.beforeCount) < 1500) {
      return `Indexing throughput low — verify all 10 GSC accounts active`;
    }
    return `All clear — no action required`;
  })();
  lines.push('');
  lines.push(`👉 *Next*: ${escMd(nextAction)}`);

  return lines.join('\n');
}

// ── Main ────────────────────────────────────────────────────────────────────
async function main() {
  log(`════════════════════════════════════════════════════════════`);
  log(`Daily SEO Orchestrator — ${today} (dayOfWeek=${dayOfWeek})`);
  log(`Flags: ${JSON.stringify(FLAGS)}`);
  log(`════════════════════════════════════════════════════════════`);

  ensureDirs();

  const results = [];

  results.push(await stage('pullGsc', stagePullGsc));
  results.push(await stage('pullGa4', stagePullGa4));
  results.push(await stage('bleeders', stageBleeders));
  results.push(await stage('joined', stageJoined));

  const submitResult = await stage('multiSubmit', stageMultiSubmit);
  results.push(submitResult);

  const deltaResult = await stage('deltas', () => stageDeltas(submitResult.submittedToday || 0));
  results.push(deltaResult);

  const newBleedersResult = await stage('newBleeders', stageNewBleeders);
  results.push(newBleedersResult);

  results.push(await stage('autoRewrite', stageAutoRewrite));
  results.push(await stage('weekly', stageWeekly));

  // Telegram summary
  if (!FLAGS.noTelegram) {
    const msg = buildTelegramMessage(results);
    log(`── STAGE: telegram ──`);
    const tg = await sendTelegram(msg);
    if (tg.ok) {
      log(`   ✅ telegram OK`);
    } else {
      log(`   ⚠️  telegram FAILED status=${tg.status} resp=${JSON.stringify(tg.response || tg.error)}`);
    }
    results.push({ name: 'telegram', ok: tg.ok, status: tg.status });
  } else {
    log(`── STAGE: telegram (skipped via --no-telegram)`);
  }

  // Final summary
  const okCount = results.filter(r => r.ok).length;
  log(`────────────────────────────────────────────────────────────`);
  log(`Done — ${okCount}/${results.length} stages OK`);
  for (const r of results) {
    const status = r.ok ? '✅' : (r.skipped ? '⏭️ ' : '❌');
    log(`   ${status} ${r.name}${r.error ? ` — ${r.error}` : ''}${r.skipped ? ` (skipped: ${r.reason || ''})` : ''}`);
  }

  // Exit clean even with partial failures (don't crash scheduled task)
  process.exit(0);
}

main().catch(err => {
  logErr('fatal', err);
  // Best-effort Telegram alert about fatal
  if (!FLAGS.noTelegram) {
    sendTelegram(`🚨 *Daily SEO Orchestrator FATAL* — ${today}\n\`\`\`\n${(err?.message || String(err)).slice(0, 1000)}\n\`\`\``)
      .finally(() => process.exit(1));
  } else {
    process.exit(1);
  }
});
