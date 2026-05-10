#!/usr/bin/env node
/**
 * Weekly SEO Dashboard
 * ────────────────────
 * Reads the last 7 daily delta files from scripts/daily-deltas/ + the current
 * gsc-audit-2026-04.json, then produces a weekly summary markdown:
 *   - 7-day trend (clicks / impressions / CTR / position)
 *   - Top wins (pages that gained position OR clicks)
 *   - Top losses (pages that dropped)
 *   - Indexing throughput per day
 *   - "Was this week better than last?" verdict
 *
 * Output: scripts/weekly-dashboard-<ISO-week>.md
 *
 * Auto-runs on Sundays via daily-seo-orchestrator.mjs.
 *
 * Usage:
 *   node scripts/seo-dashboard.mjs
 */

import { readFileSync, writeFileSync, existsSync, readdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DELTAS_DIR = join(__dirname, 'daily-deltas');
const BLEEDERS_DIR = join(__dirname, 'daily-bleeders-new');
const GSC_AUDIT_FILE = join(__dirname, 'gsc-audit-2026-04.json');

function isoWeek(d = new Date()) {
  const date = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
  const dayNum = date.getUTCDay() || 7;
  date.setUTCDate(date.getUTCDate() + 4 - dayNum);
  const yearStart = new Date(Date.UTC(date.getUTCFullYear(), 0, 1));
  const weekNo = Math.ceil(((date - yearStart) / 86400000 + 1) / 7);
  return `${date.getUTCFullYear()}-W${String(weekNo).padStart(2, '0')}`;
}

const ISO_WEEK = isoWeek();
const OUT_FILE = join(__dirname, `weekly-dashboard-${ISO_WEEK}.md`);

function loadJsonSafe(file) {
  try {
    return JSON.parse(readFileSync(file, 'utf-8'));
  } catch {
    return null;
  }
}

function loadDeltas(daysBack = 14) {
  if (!existsSync(DELTAS_DIR)) return [];
  const files = readdirSync(DELTAS_DIR)
    .filter(f => f.endsWith('.json'))
    .sort();
  const cutoff = new Date();
  cutoff.setDate(cutoff.getDate() - daysBack);
  const items = [];
  for (const f of files) {
    const dateStr = f.replace('.json', '');
    const d = new Date(dateStr + 'T00:00:00');
    if (isNaN(d.getTime())) continue;
    if (d < cutoff) continue;
    const data = loadJsonSafe(join(DELTAS_DIR, f));
    if (data) items.push({ date: dateStr, data });
  }
  return items;
}

function loadBleeders(daysBack = 14) {
  if (!existsSync(BLEEDERS_DIR)) return [];
  const files = readdirSync(BLEEDERS_DIR)
    .filter(f => f.endsWith('.json'))
    .sort();
  const cutoff = new Date();
  cutoff.setDate(cutoff.getDate() - daysBack);
  const items = [];
  for (const f of files) {
    const dateStr = f.replace('.json', '');
    const d = new Date(dateStr + 'T00:00:00');
    if (isNaN(d.getTime())) continue;
    if (d < cutoff) continue;
    const data = loadJsonSafe(join(BLEEDERS_DIR, f));
    if (data) items.push({ date: dateStr, data });
  }
  return items;
}

function summarizeTrend(deltas) {
  if (!deltas.length) {
    return { rows: [], totals: { clicks: 0, impressions: 0 }, verdict: 'no data' };
  }
  const rows = deltas.map(({ date, data }) => {
    const clicks = data.totals?.clicks ?? 0;
    const impressions = data.totals?.impressions ?? 0;
    const ctr = impressions > 0 ? clicks / impressions : 0;
    const position = data.totals?.position ?? null;
    const submitted = data.indexingSubmittedToday ?? 0;
    return { date, clicks, impressions, ctr, position, submitted };
  });

  const last7 = rows.slice(-7);
  const prev7 = rows.slice(-14, -7);
  const sum = (arr, k) => arr.reduce((s, r) => s + (r[k] || 0), 0);
  const last7Clicks = sum(last7, 'clicks');
  const prev7Clicks = sum(prev7, 'clicks');
  const last7Impr = sum(last7, 'impressions');
  const prev7Impr = sum(prev7, 'impressions');

  let verdict;
  if (prev7Clicks === 0) {
    verdict = last7Clicks > 0 ? `up — ${last7Clicks} clicks vs no prior data` : 'flat — no clicks either week';
  } else {
    const dPct = ((last7Clicks - prev7Clicks) / prev7Clicks) * 100;
    verdict = `${dPct >= 0 ? 'up' : 'down'} ${Math.abs(dPct).toFixed(1)}% — ${last7Clicks} clicks vs ${prev7Clicks} prior 7d`;
  }

  return {
    rows,
    last7Totals: { clicks: last7Clicks, impressions: last7Impr },
    prev7Totals: { clicks: prev7Clicks, impressions: prev7Impr },
    verdict,
  };
}

function diffPagesAcrossDeltas(deltas) {
  // We compare current GSC audit pages to the OLDEST delta available within the window.
  // This produces "movers": pages whose position changed >= 2 OR clicks delta >= 10.
  if (deltas.length < 2) return { wins: [], losses: [] };

  const oldest = deltas[0];
  const newest = deltas[deltas.length - 1];

  const oldPages = new Map();
  for (const p of oldest.data.pagesSnapshot || []) {
    oldPages.set(p.page, p);
  }
  const movers = [];
  for (const p of newest.data.pagesSnapshot || []) {
    const prev = oldPages.get(p.page);
    if (!prev) continue;
    const posDelta = (prev.position ?? 0) - (p.position ?? 0); // positive = improved
    const clicksDelta = (p.clicks ?? 0) - (prev.clicks ?? 0);
    if (Math.abs(posDelta) < 2 && Math.abs(clicksDelta) < 10) continue;
    movers.push({
      page: p.page,
      site: p.site,
      posPrev: prev.position,
      posNow: p.position,
      posDelta,
      clicksPrev: prev.clicks,
      clicksNow: p.clicks,
      clicksDelta,
    });
  }
  movers.sort((a, b) => (b.clicksDelta || 0) - (a.clicksDelta || 0));
  const wins = movers.filter(m => m.clicksDelta > 0 || m.posDelta > 0).slice(0, 10);
  const losses = movers.filter(m => m.clicksDelta < 0 || m.posDelta < 0)
    .sort((a, b) => (a.clicksDelta || 0) - (b.clicksDelta || 0))
    .slice(0, 10);
  return { wins, losses };
}

function pad(s, n) {
  s = String(s ?? '');
  if (s.length >= n) return s.slice(0, n - 1) + '…';
  return s + ' '.repeat(n - s.length);
}

function buildMarkdown(deltas, bleeders, trend, movers) {
  const lines = [];
  lines.push(`# Weekly SEO Dashboard — ${ISO_WEEK}`);
  lines.push('');
  lines.push(`Generated: ${new Date().toISOString()}`);
  lines.push(`Window: last ${deltas.length} daily snapshots`);
  lines.push('');
  lines.push(`## Verdict`);
  lines.push('');
  lines.push(`**This week vs prior 7d:** ${trend.verdict}`);
  lines.push('');

  // 7-day trend table
  lines.push(`## 7-Day Trend`);
  lines.push('');
  lines.push(`| Date | Clicks | Impressions | CTR | Avg Pos | Indexed Today |`);
  lines.push(`|------|-------:|------------:|----:|--------:|--------------:|`);
  for (const r of trend.rows.slice(-7)) {
    const ctrStr = (r.ctr * 100).toFixed(2) + '%';
    const posStr = r.position !== null ? r.position.toFixed(2) : '—';
    lines.push(`| ${r.date} | ${r.clicks} | ${r.impressions} | ${ctrStr} | ${posStr} | ${r.submitted} |`);
  }
  lines.push('');

  // Top wins
  lines.push(`## Top Wins (positions improved or clicks gained)`);
  lines.push('');
  if (!movers.wins.length) {
    lines.push(`_No notable movers (need 2+ daily snapshots with position data)._`);
  } else {
    lines.push(`| Page | Site | Pos: Prev → Now | Δ Pos | Clicks: Prev → Now | Δ Clicks |`);
    lines.push(`|------|------|----------------:|------:|-------------------:|---------:|`);
    for (const m of movers.wins) {
      const posPrev = (m.posPrev ?? 0).toFixed(1);
      const posNow = (m.posNow ?? 0).toFixed(1);
      const posDelta = (m.posDelta ?? 0).toFixed(1);
      lines.push(`| \`${m.page}\` | ${m.site || '—'} | ${posPrev} → ${posNow} | ${posDelta} | ${m.clicksPrev} → ${m.clicksNow} | ${m.clicksDelta >= 0 ? '+' : ''}${m.clicksDelta} |`);
    }
  }
  lines.push('');

  // Top losses
  lines.push(`## Top Losses (positions dropped or clicks lost)`);
  lines.push('');
  if (!movers.losses.length) {
    lines.push(`_No notable losses._`);
  } else {
    lines.push(`| Page | Site | Pos: Prev → Now | Δ Pos | Clicks: Prev → Now | Δ Clicks |`);
    lines.push(`|------|------|----------------:|------:|-------------------:|---------:|`);
    for (const m of movers.losses) {
      const posPrev = (m.posPrev ?? 0).toFixed(1);
      const posNow = (m.posNow ?? 0).toFixed(1);
      const posDelta = (m.posDelta ?? 0).toFixed(1);
      lines.push(`| \`${m.page}\` | ${m.site || '—'} | ${posPrev} → ${posNow} | ${posDelta} | ${m.clicksPrev} → ${m.clicksNow} | ${m.clicksDelta} |`);
    }
  }
  lines.push('');

  // Indexing throughput
  lines.push(`## Indexing Throughput (URLs submitted per day)`);
  lines.push('');
  if (!trend.rows.length) {
    lines.push(`_No data._`);
  } else {
    const totalSubmitted = trend.rows.reduce((s, r) => s + (r.submitted || 0), 0);
    lines.push(`- **7-day total submitted:** ${totalSubmitted}`);
    lines.push(`- **Daily average:** ${(totalSubmitted / Math.max(1, trend.rows.length)).toFixed(0)}`);
    lines.push('');
  }

  // New bleeders trend
  if (bleeders.length) {
    lines.push(`## New Bleeders Identified This Week`);
    lines.push('');
    lines.push(`| Date | New Bleeders | Lost Clicks/mo |`);
    lines.push(`|------|-------------:|---------------:|`);
    for (const b of bleeders.slice(-7)) {
      const count = (b.data.newBleeders || []).length;
      const lost = (b.data.newBleeders || []).reduce((s, x) => s + (x.lost_clicks_per_month || 0), 0);
      lines.push(`| ${b.date} | ${count} | ${lost.toLocaleString()} |`);
    }
    lines.push('');
  }

  return lines.join('\n');
}

function main() {
  const deltas = loadDeltas(14);
  const bleeders = loadBleeders(14);
  const trend = summarizeTrend(deltas);
  const movers = diffPagesAcrossDeltas(deltas);
  const md = buildMarkdown(deltas, bleeders, trend, movers);
  writeFileSync(OUT_FILE, md, 'utf-8');
  console.log(`✅ Wrote ${OUT_FILE}`);
  console.log(`   Verdict: ${trend.verdict}`);
  console.log(`   Wins: ${movers.wins.length} | Losses: ${movers.losses.length}`);
  return { file: OUT_FILE, trend, movers, deltas: deltas.length };
}

const isDirectRun = (() => {
  try {
    const entry = (process.argv[1] || '').replace(/\\/g, '/');
    return entry.endsWith('/seo-dashboard.mjs') || entry === 'seo-dashboard.mjs';
  } catch {
    return false;
  }
})();

if (isDirectRun) {
  try {
    main();
  } catch (err) {
    console.error('FATAL:', err);
    process.exit(1);
  }
}

export default main;
export { main };
