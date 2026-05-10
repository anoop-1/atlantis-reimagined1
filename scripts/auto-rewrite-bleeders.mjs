#!/usr/bin/env node
/**
 * Auto-Rewrite Bleeders — Rule-Based Title/Description Suggestions
 * ─────────────────────────────────────────────────────────────────
 * Reads ctr-bleeders-<YYYY-MM>.json + gsc-audit-2026-04.json, walks every
 * bleeder page that ISN'T already in CTR_OVERRIDES, and produces
 * suggested title + description rewrites using rule-based templates
 * (NO LLM — strictly local rules).
 *
 * Output: scripts/auto-rewrite-suggestions-<YYYY-MM-DD>.md
 *   Markdown table the user reviews + copy/pastes into prerender.mjs
 *   CTR_OVERRIDES.
 *
 * Usage:
 *   node scripts/auto-rewrite-bleeders.mjs                 # default — current month
 *   node scripts/auto-rewrite-bleeders.mjs --bleeders=path # custom bleeders json
 */

import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const PRERENDER_FILE = join(__dirname, 'prerender.mjs');
const GSC_AUDIT_FILE = join(__dirname, 'gsc-audit-2026-04.json');

const ym = (() => {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`;
})();

const today = new Date().toISOString().split('T')[0];
const argBleeders = process.argv.find(a => a.startsWith('--bleeders='));
const BLEEDERS_FILE = argBleeders
  ? argBleeders.slice('--bleeders='.length)
  : join(__dirname, `ctr-bleeders-${ym}.json`);
const OUT_FILE = join(__dirname, `auto-rewrite-suggestions-${today}.md`);

// ── Topic dictionary: slug fragments → human-readable topic + signature numbers
const TOPIC_DICT = [
  // API certs
  { match: /api[-/]?579[-/]?fitness|fitness[-/]for[-/]service/i, topic: 'API 579 Fitness For Service', facts: ['Cost $1,200', '11 Levels', '88% Pass'] },
  { match: /api[-/]?510/i, topic: 'API 510 Pressure Vessel', facts: ['$730 Fee', '82% Pass', '$95K Salary'] },
  { match: /api[-/]?570/i, topic: 'API 570 Piping Inspector', facts: ['$730 Fee', '82% Pass', '$92K Salary'] },
  { match: /api[-/]?653/i, topic: 'API 653 Tank Inspector', facts: ['$730 Fee', '78% Pass', '$98K Salary'] },
  { match: /api[-/]?580|api[-/]?581|risk[-/]based[-/]inspection|rbi/i, topic: 'Risk-Based Inspection (API 580/581)', facts: ['12-Step Rollout', '$45K Saved', '70% Less Downtime'] },
  // ASNT / CWI
  { match: /asnt[-/]level[-/]?iii|asnt[-/]?3/i, topic: 'ASNT Level III', facts: ['$750 Fee', '65% Pass', '$115K Salary'] },
  { match: /asnt[-/]level[-/]?ii|asnt[-/]?2/i, topic: 'ASNT Level II', facts: ['$200 Fee', '74% Pass', '$68K Salary'] },
  { match: /asnt[-/]?certification/i, topic: 'ASNT Certification', facts: ['$200-$750', 'Pass Rates', 'Salary Data'] },
  { match: /cwi[-/]?certification|certified[-/]welding[-/]inspector/i, topic: 'CWI Certification', facts: ['$1,500 Cost', '60% Pass Rate', '$75K Salary'] },
  { match: /pcn[-/]?certification|iso[-/]?9712/i, topic: 'PCN / ISO 9712', facts: ['Geographic Win', 'Recert', 'Recognition'] },
  // NDT methods
  { match: /ultrasonic[-/]testing|^ut[-/]|[-/]ut[-/]/i, topic: 'Ultrasonic Testing (UT)', facts: ['Cost', 'Coverage', 'When Wins'] },
  { match: /radiographic[-/]testing|^rt[-/]|[-/]rt[-/]/i, topic: 'Radiographic Testing (RT)', facts: ['Cost', 'Defects Found', 'Safety'] },
  { match: /phased[-/]?array|paut/i, topic: 'Phased Array UT (PAUT)', facts: ['Cost', '+18% Pay', 'Coverage'] },
  { match: /tofd/i, topic: 'TOFD Inspection', facts: ['Cost', 'Defects Found', 'Speed'] },
  { match: /magnetic[-/]particle|^mt[-/]|[-/]mt[-/]/i, topic: 'Magnetic Particle Testing (MT)', facts: ['Cost', 'Defects Found', 'Speed'] },
  { match: /penetrant[-/]testing|^pt[-/]|[-/]pt[-/]|liquid[-/]penetrant/i, topic: 'Penetrant Testing (PT)', facts: ['Cost', 'Coverage', 'When Wins'] },
  { match: /eddy[-/]current|^et[-/]|[-/]et[-/]/i, topic: 'Eddy Current Testing (ET)', facts: ['Cost', 'Coverage', 'When Wins'] },
  { match: /visual[-/]testing|^vt[-/]|[-/]vt[-/]/i, topic: 'Visual Testing (VT)', facts: ['Cost', 'Coverage', 'When Wins'] },
  { match: /acoustic[-/]emission|^ae[-/]|[-/]ae[-/]/i, topic: 'Acoustic Emission (AE)', facts: ['Cost', 'Real-Time', 'Defects Found'] },
  { match: /guided[-/]?wave/i, topic: 'Guided Wave UT', facts: ['100m Range', 'Cost', 'Pipeline Coverage'] },
  { match: /mfl[-/]?(pipeline|inline|inspection)/i, topic: 'MFL Pipeline Inspection', facts: ['Bore Coverage', '$8K-$45K/mile', 'ID/OD Defects'] },
  { match: /infrared|thermograph/i, topic: 'Infrared / Thermography', facts: ['Cost', 'Coverage', 'When Wins'] },
  // Salary / career
  { match: /salary[-/]?guide|technician[-/]?salary|ndt[-/]?salary/i, topic: 'NDT Salary', facts: ['L1 $52K', 'L2 $68K', 'L3 $115K'] },
  { match: /career|jobs|hiring/i, topic: 'NDT Careers', facts: ['Demand', 'Salary', 'Pathway'] },
  // Industries
  { match: /aerospace[-/]?ndt/i, topic: 'Aerospace NDT', facts: ['Boeing/Airbus', 'AS9100', '7 Methods'] },
  { match: /pipeline[-/]?ndt|pipeline[-/]?inspection/i, topic: 'Pipeline Inspection', facts: ['MFL/UT/PAUT', 'Cost/mile', 'API 1163'] },
  { match: /oil[-/]?gas[-/]?ndt|oil[-/]?and[-/]?gas/i, topic: 'Oil & Gas NDT', facts: ['Refinery', 'Upstream', 'Salary +22%'] },
  { match: /power[-/]?generation|power[-/]?plant|nuclear[-/]?ndt/i, topic: 'Power Generation NDT', facts: ['ASME XI', 'Outage', 'Coverage'] },
  { match: /petrochemical[-/]?ndt/i, topic: 'Petrochemical NDT', facts: ['Reactor', 'API 510/570/653', 'Shutdown'] },
  { match: /marine[-/]?ndt|offshore[-/]?ndt/i, topic: 'Marine & Offshore NDT', facts: ['DNV', 'Subsea', 'Salary +18%'] },
  { match: /manufacturing[-/]?ndt/i, topic: 'Manufacturing NDT', facts: ['ISO 17025', 'Throughput', 'Cost/Part'] },
  { match: /construction[-/]?ndt/i, topic: 'Construction NDT', facts: ['AWS D1.1', 'Throughput', 'Cost'] },
  // Software
  { match: /digital[-/]?twin/i, topic: 'NDT Digital Twin', facts: ['$200K/yr', '40% Less Downtime', '3D + Inspection Data'] },
  { match: /reporting[-/]?software|inspection[-/]?reporting/i, topic: 'NDT Reporting Software', facts: ['$50K/yr', 'Offline', 'AI-Generated'] },
  { match: /erp|ndt[-/]?crm|ndt[-/]?management/i, topic: 'NDT ERP', facts: ['$18K/yr', 'Cert Tracking', 'ISO 9001'] },
  { match: /ai[-/]?ndt|ai[-/]?inspection/i, topic: 'AI in NDT', facts: ['Defect ID', '40% Faster', 'Accuracy'] },
  // Comparison
  { match: /vs|compare|comparison/i, topic: 'Comparison Guide', facts: ['Cost', 'Coverage', 'When Each Wins'] },
];

function getTopic(slug) {
  const cleanSlug = slug.toLowerCase();
  for (const entry of TOPIC_DICT) {
    if (entry.match.test(cleanSlug)) return entry;
  }
  // Fallback: titlecase the slug fragments
  const words = cleanSlug
    .replace(/^\//, '')
    .split(/[-/]/)
    .filter(w => w && !['the', 'and', 'for', 'a', 'an', 'of', 'to', 'in'].includes(w))
    .slice(0, 5)
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
  return { topic: words || 'NDT Guide', facts: ['Cost', 'Pass Rate', 'Salary'] };
}

// ── Read existing CTR_OVERRIDES so we don't suggest duplicates ──────────────
function loadExistingOverrides() {
  if (!existsSync(PRERENDER_FILE)) return new Set();
  const src = readFileSync(PRERENDER_FILE, 'utf-8');
  const startIdx = src.indexOf('const CTR_OVERRIDES');
  if (startIdx < 0) return new Set();
  // grab until the next top-level "const " or end of file (rough but adequate)
  const tail = src.slice(startIdx);
  const stop = tail.search(/\n\};?\s*\n(?:const|function|export|\/\/)/);
  const block = stop >= 0 ? tail.slice(0, stop + 2) : tail.slice(0, 30000);
  const paths = new Set();
  const re = /'(\/[^']+)'\s*:/g;
  let m;
  while ((m = re.exec(block)) !== null) {
    paths.add(m[1]);
  }
  return paths;
}

// ── Pull top queries per page from gsc-audit ────────────────────────────────
function loadTopQueriesPerPage() {
  if (!existsSync(GSC_AUDIT_FILE)) return new Map();
  let data;
  try {
    data = JSON.parse(readFileSync(GSC_AUDIT_FILE, 'utf-8'));
  } catch {
    return new Map();
  }
  const out = new Map();
  for (const siteUrl of Object.keys(data.sites || {})) {
    const block = data.sites[siteUrl]?.['28d'];
    if (!block || !block.pageQueries) continue;
    for (const row of block.pageQueries) {
      const path = row.page;
      if (!out.has(path)) out.set(path, []);
      out.get(path).push({
        query: row.query,
        impressions: row.impressions,
        clicks: row.clicks,
        position: row.position,
      });
    }
  }
  // sort each page's queries by impressions desc
  for (const arr of out.values()) {
    arr.sort((a, b) => b.impressions - a.impressions);
  }
  return out;
}

function highestQueryWord(queries) {
  if (!queries || !queries.length) return null;
  const top = queries[0].query;
  // Pick the longest meaningful word (skip stop words, short fragments)
  const stop = new Set(['the', 'and', 'for', 'a', 'an', 'of', 'to', 'in', 'is', 'on', 'how', 'what', 'with', 'vs']);
  const words = top.split(/\s+/).filter(w => !stop.has(w.toLowerCase()) && w.length > 2);
  if (!words.length) return top;
  // Prefer words that look like proper nouns / numbers / industry terms
  const ranked = words.sort((a, b) => b.length - a.length);
  return ranked[0];
}

// ── Templates ───────────────────────────────────────────────────────────────
function buildTitle(topicEntry, queries) {
  const facts = topicEntry.facts || [];
  if (facts.length >= 3) {
    return `${topicEntry.topic} 2026: ${facts[0]}, ${facts[1]}, ${facts[2]} | Atlantis NDT`;
  }
  const hot = highestQueryWord(queries);
  if (hot) {
    return `${topicEntry.topic} 2026: Complete Guide (${hot})`;
  }
  return `${topicEntry.topic} 2026: Complete Guide | Atlantis NDT`;
}

function buildDescription(topicEntry, queries, page) {
  const facts = topicEntry.facts || [];
  const lead = facts.length
    ? `${topicEntry.topic} — ${facts.join(', ')}.`
    : `${topicEntry.topic} — verified 2026 data.`;
  const hot = highestQueryWord(queries);
  const middle = hot
    ? ` Search-tested for "${hot}".`
    : '';
  const cta = ' Free guide + ASNT Level III review.';
  let out = lead + middle + cta;
  if (out.length > 158) out = out.slice(0, 155) + '…';
  return out;
}

// ── Try to read current title from dist/<slug>/index.html ───────────────────
function readCurrentTitle(page) {
  // dist files live at dist/<slug-without-leading-slash>/index.html
  const slug = page.replace(/^\//, '').replace(/\/$/, '');
  const distPath = slug
    ? join(ROOT, 'dist', slug, 'index.html')
    : join(ROOT, 'dist', 'index.html');
  if (!existsSync(distPath)) return null;
  try {
    const html = readFileSync(distPath, 'utf-8');
    const m = html.match(/<title[^>]*>([^<]*)<\/title>/i);
    return m ? m[1].trim() : null;
  } catch {
    return null;
  }
}

// ── Main ────────────────────────────────────────────────────────────────────
function main() {
  if (!existsSync(BLEEDERS_FILE)) {
    console.error(`❌ Bleeders file not found: ${BLEEDERS_FILE}`);
    console.error(`   Run: node scripts/ctr-bleeders.mjs first`);
    process.exit(1);
  }

  const data = JSON.parse(readFileSync(BLEEDERS_FILE, 'utf-8'));
  const existing = loadExistingOverrides();
  const queriesByPage = loadTopQueriesPerPage();

  console.log(`📊 Existing CTR_OVERRIDES: ${existing.size} pages`);
  console.log(`📊 Pages with GSC query data: ${queriesByPage.size}`);

  const suggestions = [];
  for (const siteUrl of Object.keys(data.sites || {})) {
    const block = data.sites[siteUrl];
    if (!block || !block.bleeders) continue;
    for (const b of block.bleeders) {
      if (existing.has(b.page)) continue;
      const topicEntry = getTopic(b.page);
      const queries = queriesByPage.get(b.page) || [];
      const currentTitle = readCurrentTitle(b.page);
      const newTitle = buildTitle(topicEntry, queries);
      const newDesc = buildDescription(topicEntry, queries, b.page);
      suggestions.push({
        site: siteUrl,
        page: b.page,
        impressions: b.impressions,
        position: b.position,
        actualCtr: b.actual_ctr,
        expectedCtr: b.expected_ctr,
        ratio: b.ratio,
        lostMonthly: b.lost_clicks_per_month,
        severity: b.severity,
        topic: topicEntry.topic,
        currentTitle,
        newTitle,
        newDescription: newDesc,
        topQuery: queries[0]?.query || '—',
      });
    }
  }
  suggestions.sort((a, b) => b.lostMonthly - a.lostMonthly);

  // ── Build markdown ────────────────────────────────────────────────────────
  const lines = [];
  lines.push(`# Auto-Rewrite Suggestions — ${today}`);
  lines.push('');
  lines.push(`Generated by \`scripts/auto-rewrite-bleeders.mjs\` from \`${BLEEDERS_FILE.split(/[\\/]/).pop()}\`.`);
  lines.push('');
  lines.push(`Rule-based templates only — NO LLM calls. Review each suggestion, then copy/paste`);
  lines.push(`into \`scripts/prerender.mjs\` \`CTR_OVERRIDES\` block.`);
  lines.push('');
  lines.push(`## Summary`);
  lines.push('');
  lines.push(`- **Total suggestions:** ${suggestions.length}`);
  lines.push(`- **Already in CTR_OVERRIDES (skipped):** ${existing.size}`);
  lines.push(`- **Pages with GSC query context:** ${queriesByPage.size}`);
  const totalLost = suggestions.reduce((s, x) => s + (x.lostMonthly || 0), 0);
  lines.push(`- **Estimated total clicks/month at risk:** ${totalLost.toLocaleString()}`);
  lines.push('');

  if (!suggestions.length) {
    lines.push(`> No new bleeders to rewrite — every flagged page already has a CTR override.`);
    writeFileSync(OUT_FILE, lines.join('\n'), 'utf-8');
    console.log(`✅ Wrote ${OUT_FILE} (no new suggestions)`);
    return { count: 0, file: OUT_FILE };
  }

  lines.push(`## Suggestions (top 50 by lost clicks/month)`);
  lines.push('');
  lines.push(`| # | Page | Lost/mo | Pos | Top Query | Suggested Title | Suggested Description |`);
  lines.push(`|---|------|--------:|----:|-----------|-----------------|------------------------|`);
  const top = suggestions.slice(0, 50);
  for (let i = 0; i < top.length; i++) {
    const s = top[i];
    const tIn = (s.newTitle || '').replace(/\|/g, '\\|');
    const dIn = (s.newDescription || '').replace(/\|/g, '\\|');
    const q = (s.topQuery || '—').replace(/\|/g, '\\|');
    lines.push(`| ${i + 1} | \`${s.page}\` | ${s.lostMonthly} | ${s.position} | ${q} | ${tIn} | ${dIn} |`);
  }
  lines.push('');
  lines.push(`## Copy-Paste Block for prerender.mjs`);
  lines.push('');
  lines.push('```js');
  lines.push('// Paste inside CTR_OVERRIDES = { ... } in scripts/prerender.mjs');
  for (const s of top) {
    lines.push(`  '${s.page}': {`);
    lines.push(`    title: ${JSON.stringify(s.newTitle)},`);
    lines.push(`    description: ${JSON.stringify(s.newDescription)}`);
    lines.push(`  },`);
  }
  lines.push('```');
  lines.push('');
  lines.push(`## Full Suggestion Details (all ${suggestions.length})`);
  lines.push('');
  for (const s of suggestions) {
    lines.push(`### ${s.page}`);
    lines.push(`- **Site:** ${s.site}`);
    lines.push(`- **Impressions (28d):** ${s.impressions} | **Position:** ${s.position} | **Actual CTR:** ${(s.actualCtr * 100).toFixed(2)}% | **Expected:** ${(s.expectedCtr * 100).toFixed(2)}%`);
    lines.push(`- **Severity:** ${s.severity} | **Lost clicks/mo:** ${s.lostMonthly}`);
    lines.push(`- **Topic detected:** ${s.topic}`);
    lines.push(`- **Top query (28d):** ${s.topQuery}`);
    if (s.currentTitle) lines.push(`- **Current \`<title>\`:** ${s.currentTitle}`);
    lines.push(`- **Suggested title:** ${s.newTitle}`);
    lines.push(`- **Suggested description:** ${s.newDescription}`);
    lines.push('');
  }

  writeFileSync(OUT_FILE, lines.join('\n'), 'utf-8');
  console.log(`✅ Wrote ${suggestions.length} suggestions → ${OUT_FILE}`);
  return { count: suggestions.length, file: OUT_FILE };
}

// CLI entry point — also exposed as default export for orchestrator
const isDirectRun = (() => {
  try {
    const entry = (process.argv[1] || '').replace(/\\/g, '/');
    return entry.endsWith('/auto-rewrite-bleeders.mjs') || entry === 'auto-rewrite-bleeders.mjs';
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
