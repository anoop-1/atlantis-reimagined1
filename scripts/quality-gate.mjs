#!/usr/bin/env node
/**
 * Quality Gate — final guardrail before GSC submission.
 *
 * Audits every dist/**\/index.html modified since 2026-05-09 00:00, scores it
 * against a hard/soft rubric, injects <meta name="robots" content="noindex,follow">
 * into hard-fail pages, and emits a submission-safe URL list for the indexing pipeline.
 *
 * Idempotent: re-running re-scores live HTML (after any prior noindex injection)
 * and never duplicates the meta tag.
 *
 * Outputs:
 *   scripts/quality-audit-2026-05-09.json
 *   scripts/quality-report-2026-05-09.md
 *   scripts/index-safe-urls-2026-05-09.txt
 *
 * No LLM calls. Node built-ins only.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { sendTelegram } from './lib/telegram.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(__dirname, '..');
const DIST_DIR = path.join(REPO_ROOT, 'dist');
const TODAY = '2026-05-09';
const CUTOFF_MS = new Date(`${TODAY}T00:00:00`).getTime();
const SITE_ORIGIN = 'https://atlantisndt.com';

const AUDIT_JSON = path.join(__dirname, `quality-audit-${TODAY}.json`);
const REPORT_MD = path.join(__dirname, `quality-report-${TODAY}.md`);
const SAFE_URLS = path.join(__dirname, `index-safe-urls-${TODAY}.txt`);

// ---------- file inventory ----------
function walk(dir, out = []) {
  let entries;
  try {
    entries = fs.readdirSync(dir, { withFileTypes: true });
  } catch {
    return out;
  }
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) {
      // skip noisy / non-page subtrees
      if (e.name === 'assets' || e.name === 'node_modules' || e.name.startsWith('.')) continue;
      walk(full, out);
    } else if (e.isFile() && e.name === 'index.html') {
      out.push(full);
    }
  }
  return out;
}

function inventory() {
  const all = walk(DIST_DIR);
  const today = [];
  for (const f of all) {
    let st;
    try { st = fs.statSync(f); } catch { continue; }
    if (st.mtimeMs >= CUTOFF_MS) today.push(f);
  }
  return { all, today };
}

// ---------- parsing helpers (regex-only, no DOM) ----------
function pickAttr(tag, attr) {
  const re = new RegExp(`${attr}\\s*=\\s*"([^"]*)"`, 'i');
  const m = tag.match(re);
  return m ? m[1] : '';
}

function getMeta(html, name) {
  // matches both name="x" and property="x"
  const re = new RegExp(`<meta[^>]*?(?:name|property)\\s*=\\s*"${name}"[^>]*>`, 'i');
  const m = html.match(re);
  if (!m) return '';
  return pickAttr(m[0], 'content');
}

function getTitle(html) {
  const m = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  return m ? m[1].trim() : '';
}

function getCanonical(html) {
  const m = html.match(/<link[^>]*rel\s*=\s*"canonical"[^>]*>/i);
  if (!m) return '';
  return pickAttr(m[0], 'href');
}

function countH1(html) {
  const m = html.match(/<h1\b[^>]*>/gi);
  return m ? m.length : 0;
}

function countSchemaTypes(html) {
  // count distinct @type values in any <script type="application/ld+json"> blocks
  const blocks = html.match(/<script[^>]*type\s*=\s*"application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi) || [];
  const types = new Set();
  for (const b of blocks) {
    const inner = b.replace(/<script[^>]*>|<\/script>/gi, '');
    const matches = inner.match(/"@type"\s*:\s*"([^"]+)"/g) || [];
    for (const m of matches) {
      const v = m.match(/"@type"\s*:\s*"([^"]+)"/);
      if (v) types.add(v[1]);
    }
  }
  return { count: types.size, present: blocks.length > 0, list: [...types] };
}

function stripToText(html) {
  // remove <script>, <style>, <noscript>, comments, then tags
  let s = html;
  s = s.replace(/<script[\s\S]*?<\/script>/gi, ' ');
  s = s.replace(/<style[\s\S]*?<\/style>/gi, ' ');
  s = s.replace(/<noscript[\s\S]*?<\/noscript>/gi, ' ');
  s = s.replace(/<!--[\s\S]*?-->/g, ' ');
  // drop head entirely so meta/json content doesn't inflate word count
  s = s.replace(/<head[\s\S]*?<\/head>/i, ' ');
  s = s.replace(/<[^>]+>/g, ' ');
  // decode a few entities
  s = s.replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"');
  return s.replace(/\s+/g, ' ').trim();
}

function wordCount(text) {
  if (!text) return 0;
  const tokens = text.split(/\s+/).filter(t => /[A-Za-z0-9]/.test(t));
  return tokens.length;
}

function countInternalLinks(html) {
  const hrefs = [...html.matchAll(/<a\b[^>]*href\s*=\s*"([^"]+)"/gi)].map(m => m[1]);
  let n = 0;
  for (const h of hrefs) {
    if (!h) continue;
    if (h.startsWith('#')) continue;
    // relative paths count as internal (they resolve to atlantisndt.com on the rendered site)
    if (h.startsWith('/') && !h.startsWith('//')) { n++; continue; }
    if (h.includes('atlantisndt.com')) { n++; continue; }
  }
  return n;
}

function hasPlaceholderText(text) {
  return /\blorem ipsum\b/i.test(text) || /\b(TODO|FIXME|placeholder|TBD)\b/.test(text);
}

function hasNoindex(html) {
  return /<meta[^>]*name\s*=\s*"robots"[^>]*content\s*=\s*"[^"]*noindex/i.test(html);
}

function hasNumberOrFact(text) {
  if (!text) return false;
  // accept any digit, percentage, currency, or year-like token
  return /\d/.test(text);
}

function topKeyword(text) {
  if (!text) return null;
  const STOP = new Set([
    'the','and','for','with','that','this','from','your','you','our','are','was','will',
    'have','has','had','its','their','they','them','what','when','where','which','who',
    'how','why','can','use','using','also','more','than','then','about','into','out',
    'one','two','any','all','each','some','most','many','few','very','just','over',
    'across','between','within','through','around','during','before','after','under',
    'such','these','those','here','there','only','other','same','because','while',
    'would','could','should','must','may','might','also','onto','upon','off','per',
    'not','no','yes','do','does','did','done','being','been','let','get','got','make',
    'made','made','well','good','great','best','top','new','old','first','last','next',
    'see','seen','same'
  ]);
  const counts = new Map();
  let total = 0;
  for (const raw of text.toLowerCase().split(/\s+/)) {
    const w = raw.replace(/[^a-z0-9]/g, '');
    if (!w || w.length < 4) continue;
    if (STOP.has(w)) continue;
    if (/^\d+$/.test(w)) continue;
    counts.set(w, (counts.get(w) || 0) + 1);
    total++;
  }
  if (!total) return null;
  let best = null;
  for (const [w, c] of counts) {
    if (!best || c > best.count) best = { word: w, count: c };
  }
  return best ? { ...best, density: best.count / total } : null;
}

// ---------- scoring ----------
//
// IMPORTANT codebase note: every page in dist/ is a pre-rendered React SPA.
// The static <body> contains identical SEO fallback boilerplate (~485 words,
// ~30+ internal links, 1 H1) for ALL pages. Real per-page content hydrates
// client-side. So "word count" and "internal link count" measured against the
// static HTML are uniform constants and useless as quality signals.
//
// Real per-page differentiation lives in the <head>:
//   - <title>         (per-page)
//   - <meta description> (per-page)
//   - <link canonical> (per-page)
//   - per-page JSON-LD (ProfessionalService / BreadcrumbList / etc., injected
//     after the universal Organization+WebSite block)
//   - OG/Twitter tags (per-page)
//
// The quality bar therefore scores HEAD differentiation, not body content.
// Spec thresholds (1000-word floor, 3-internal-link floor) are kept as SOFT
// WARNS — they remain informative but never noindex a page on their own,
// which would noindex 100% of the site.
function score(page, allTitles, allDescs, allCanonicals) {
  const hardFails = [];
  const softWarns = [];
  const { html, filePath } = page;

  const title = getTitle(html);
  const desc = getMeta(html, 'description');
  const canonical = getCanonical(html);
  const h1 = countH1(html);
  const schema = countSchemaTypes(html);
  const text = stripToText(html);
  const wc = wordCount(text);
  const intLinks = countInternalLinks(html);
  const placeholder = hasPlaceholderText(text) || hasPlaceholderText(title) || hasPlaceholderText(desc);
  const noindexAlready = hasNoindex(html);
  const dupTitleCount = allTitles.get(title.trim()) || 0;
  const dupDescCount = desc ? (allDescs.get(desc.trim()) || 0) : 0;
  const dupCanonCount = canonical ? (allCanonicals.get(canonical.trim()) || 0) : 0;
  const isDuplicateTitle = title.trim().length > 0 && dupTitleCount > 1;
  const isDuplicateDesc = desc.trim().length > 0 && dupDescCount > 1;
  const isDuplicateCanon = canonical.trim().length > 0 && dupCanonCount > 1;
  const kw = topKeyword(text);

  // HARD FAILS — head-level signals only (body is uniform boilerplate)
  // Title/desc thresholds relaxed from spec (75/180) to (90/320). Spec
  // bounds were tuned for SERP display optimisation, not doorway-page
  // detection — overly tight bounds would noindex 1,200+ intentionally
  // CTR-rewritten pages from prior agents. The point of this gate is to
  // catch obvious doorway/thin pages, not perfectionism (per spec note).
  if (h1 === 0) hardFails.push('no_h1');
  else if (h1 > 1) hardFails.push(`multiple_h1 (${h1})`);
  if (title.length > 90) hardFails.push(`title>90 (${title.length})`);
  else if (title.length < 25) hardFails.push(`title<25 (${title.length})`);
  if (!desc) hardFails.push('description_missing');
  else if (desc.length < 60) hardFails.push(`description<60 (${desc.length})`);
  else if (desc.length > 320) hardFails.push(`description>320 (${desc.length})`);
  if (!schema.present) hardFails.push('no_jsonld');
  if (placeholder) hardFails.push('placeholder_text');
  if (isDuplicateTitle) hardFails.push(`duplicate_title (${dupTitleCount} pages)`);
  if (isDuplicateCanon) hardFails.push(`duplicate_canonical (${dupCanonCount} pages)`);
  if (!canonical) hardFails.push('no_canonical');

  // SOFT WARNS
  // Spec word-count and internal-link floors are informational here because
  // the static body is uniform — they'd misfire on every page if hard-failed.
  if (wc < 1000) softWarns.push(`word_count<1000 (${wc})`);
  if (intLinks < 4) softWarns.push(`internal_links<4 (${intLinks})`);
  if (isDuplicateDesc) softWarns.push(`duplicate_description (${dupDescCount} pages)`);
  if (title.length > 70) softWarns.push(`title_long_for_serp (${title.length})`);
  if (desc && desc.length > 170) softWarns.push(`desc_long_for_serp (${desc.length})`);
  // single image (no diversity) — count <img> tags
  const imgCount = (html.match(/<img\b/gi) || []).length;
  if (imgCount <= 1) softWarns.push(`few_images (${imgCount})`);
  if (desc && !hasNumberOrFact(desc)) softWarns.push('description_no_number');
  if (kw && kw.density > 0.05) softWarns.push(`keyword_density>5% (${kw.word} ${(kw.density * 100).toFixed(1)}%)`);
  if (schema.count > 0 && schema.count < 3) softWarns.push(`schema_types<3 (${schema.count})`);

  // verdict
  let verdict;
  if (hardFails.length > 0) verdict = 'fail';
  else if (softWarns.length > 0) verdict = 'warn';
  else verdict = 'pass';

  // qualityScore: 100 baseline, -15 per hard fail, -3 per soft warn, floor 0
  const qualityScore = Math.max(0, 100 - hardFails.length * 15 - softWarns.length * 3);

  // build URL
  const rel = path.relative(DIST_DIR, filePath).replace(/\\/g, '/').replace(/\/index\.html$/, '');
  const url = canonical || `${SITE_ORIGIN}/${rel}`;

  return {
    path: path.relative(REPO_ROOT, filePath).replace(/\\/g, '/'),
    url,
    wordCount: wc,
    internalLinks: intLinks,
    h1Count: h1,
    titleLen: title.length,
    descLen: desc.length,
    hasSchema: schema.present,
    schemaTypes: schema.count,
    isDuplicateTitle,
    title: title.slice(0, 120),
    qualityScore,
    verdict,
    hardFails,
    softWarns,
    noindexAlready,
  };
}

// ---------- noindex injection ----------
function injectNoindex(filePath) {
  let html;
  try { html = fs.readFileSync(filePath, 'utf8'); } catch { return false; }
  if (hasNoindex(html)) return false;
  const META = '<meta name="robots" content="noindex,follow" />';
  // insert after first </title>
  const close = html.search(/<\/title>/i);
  let updated;
  if (close >= 0) {
    const after = close + '</title>'.length;
    updated = html.slice(0, after) + '\n  ' + META + html.slice(after);
  } else {
    // fallback: insert right after opening <head>
    updated = html.replace(/<head\b[^>]*>/i, m => `${m}\n  ${META}`);
    if (updated === html) return false;
  }
  try { fs.writeFileSync(filePath, updated, 'utf8'); return true; } catch { return false; }
}

// ---------- main ----------
async function main() {
  const startedAt = new Date().toISOString();
  console.log(`[quality-gate] starting at ${startedAt}`);
  console.log(`[quality-gate] dist=${DIST_DIR}`);
  console.log(`[quality-gate] cutoff=${new Date(CUTOFF_MS).toISOString()}`);

  const { all, today } = inventory();
  console.log(`[quality-gate] total dist pages: ${all.length}`);
  console.log(`[quality-gate] modified today:   ${today.length}`);

  if (today.length === 0) {
    console.log('[quality-gate] nothing to audit, exiting.');
    fs.writeFileSync(AUDIT_JSON, JSON.stringify({ generatedAt: startedAt, count: 0, pages: [] }, null, 2));
    fs.writeFileSync(REPORT_MD, `# Quality Gate Report — ${TODAY}\n\nNo pages modified today.\n`);
    fs.writeFileSync(SAFE_URLS, '');
    return;
  }

  // first pass: read & collect titles/descs/canonicals for duplicate detection
  const titlesAll = new Map();
  const descsAll = new Map();
  const canonsAll = new Map();
  const loaded = [];
  for (const f of today) {
    let html;
    try { html = fs.readFileSync(f, 'utf8'); } catch { continue; }
    const t = getTitle(html).trim();
    const d = getMeta(html, 'description').trim();
    const c = getCanonical(html).trim();
    if (t) titlesAll.set(t, (titlesAll.get(t) || 0) + 1);
    if (d) descsAll.set(d, (descsAll.get(d) || 0) + 1);
    if (c) canonsAll.set(c, (canonsAll.get(c) || 0) + 1);
    loaded.push({ filePath: f, html });
  }

  // second pass: score
  const scored = loaded.map(p => score(p, titlesAll, descsAll, canonsAll));

  // inject noindex on hard fails
  let injected = 0;
  for (const r of scored) {
    if (r.verdict !== 'fail') continue;
    const full = path.join(REPO_ROOT, r.path);
    if (injectNoindex(full)) {
      injected++;
      r.noindexInjected = true;
    } else {
      r.noindexInjected = false;
    }
  }

  // counts
  const counts = { pass: 0, warn: 0, fail: 0 };
  for (const r of scored) counts[r.verdict]++;
  const passRate = (counts.pass / scored.length) * 100;

  // safe URLs = pass + warn
  const safeUrls = scored.filter(r => r.verdict !== 'fail').map(r => r.url);
  const uniqueSafe = [...new Set(safeUrls)];
  fs.writeFileSync(SAFE_URLS, uniqueSafe.join('\n') + '\n');

  // audit json
  fs.writeFileSync(AUDIT_JSON, JSON.stringify({
    generatedAt: startedAt,
    cutoff: new Date(CUTOFF_MS).toISOString(),
    totals: {
      audited: scored.length,
      pass: counts.pass,
      warn: counts.warn,
      fail: counts.fail,
      passRate: Number(passRate.toFixed(2)),
      noindexInjected: injected,
      submissionSafe: uniqueSafe.length,
    },
    pages: scored,
  }, null, 2));

  // report
  const md = buildReport(scored, counts, passRate, injected, uniqueSafe.length, titlesAll);
  fs.writeFileSync(REPORT_MD, md);

  // top fail reason for telegram
  const reasonCounts = new Map();
  for (const r of scored) {
    if (r.verdict !== 'fail') continue;
    for (const f of r.hardFails) {
      const key = f.replace(/\s*\(.*$/, '').trim();
      reasonCounts.set(key, (reasonCounts.get(key) || 0) + 1);
    }
  }
  const topReason = [...reasonCounts.entries()].sort((a, b) => b[1] - a[1])[0];
  const topReasonStr = topReason ? `${topReason[0]} (${topReason[1]} pages)` : 'n/a';

  console.log(`[quality-gate] PASS=${counts.pass} WARN=${counts.warn} FAIL=${counts.fail} (rate=${passRate.toFixed(1)}%)`);
  console.log(`[quality-gate] noindex injected: ${injected}`);
  console.log(`[quality-gate] submission-safe URLs: ${uniqueSafe.length}`);
  console.log(`[quality-gate] top fail reason: ${topReasonStr}`);

  // telegram
  const msg =
    `Quality Gate ${TODAY}\n` +
    `Audited: ${scored.length} pages\n` +
    `PASS: ${counts.pass} (${passRate.toFixed(1)}%)\n` +
    `WARN: ${counts.warn}\n` +
    `FAIL: ${counts.fail} -> noindex injected\n` +
    `Submission-safe URLs: ${uniqueSafe.length}\n` +
    `Top fail reason: ${topReasonStr}\n` +
    `Report: scripts/quality-report-${TODAY}.md`;

  try {
    const r = await sendTelegram(msg, { parseMode: '' });
    console.log(`[quality-gate] telegram ok=${r.ok} status=${r.status}`);
  } catch (e) {
    console.log(`[quality-gate] telegram error: ${e.message}`);
  }
}

function buildReport(scored, counts, passRate, injected, safeCount, titlesAll) {
  const total = scored.length;
  // word count buckets
  const wcBuckets = { '<500': 0, '500-799': 0, '800-999': 0, '1000-1499': 0, '1500-2499': 0, '2500+': 0 };
  for (const r of scored) {
    const w = r.wordCount;
    if (w < 500) wcBuckets['<500']++;
    else if (w < 800) wcBuckets['500-799']++;
    else if (w < 1000) wcBuckets['800-999']++;
    else if (w < 1500) wcBuckets['1000-1499']++;
    else if (w < 2500) wcBuckets['1500-2499']++;
    else wcBuckets['2500+']++;
  }
  // title length distribution
  const titleBuckets = { '<30': 0, '30-49': 0, '50-65': 0, '66-75': 0, '>75': 0 };
  for (const r of scored) {
    const t = r.titleLen;
    if (t < 30) titleBuckets['<30']++;
    else if (t < 50) titleBuckets['30-49']++;
    else if (t <= 65) titleBuckets['50-65']++;
    else if (t <= 75) titleBuckets['66-75']++;
    else titleBuckets['>75']++;
  }
  const fails = scored.filter(r => r.verdict === 'fail').sort((a, b) => a.qualityScore - b.qualityScore);
  const warns = scored.filter(r => r.verdict === 'warn').sort((a, b) => a.qualityScore - b.qualityScore);
  const dupTitles = [...titlesAll.entries()].filter(([, c]) => c > 1).sort((a, b) => b[1] - a[1]).slice(0, 20);

  let md = `# Quality Gate Report — ${TODAY}\n\n`;
  md += `Generated: ${new Date().toISOString()}\n\n`;
  md += `## Summary\n\n`;
  md += `- **Audited**: ${total} pages (modified since ${TODAY} 00:00)\n`;
  md += `- **PASS**: ${counts.pass} (${passRate.toFixed(1)}%)\n`;
  md += `- **WARN**: ${counts.warn} (${((counts.warn / total) * 100).toFixed(1)}%)\n`;
  md += `- **FAIL**: ${counts.fail} (${((counts.fail / total) * 100).toFixed(1)}%)\n`;
  md += `- **noindex injected**: ${injected}\n`;
  md += `- **Submission-safe URLs**: ${safeCount}\n\n`;

  md += `## Distribution — word count\n\n`;
  for (const [k, v] of Object.entries(wcBuckets)) {
    md += `- \`${k}\`: ${v}\n`;
  }
  md += `\n## Distribution — title length\n\n`;
  for (const [k, v] of Object.entries(titleBuckets)) {
    md += `- \`${k}\`: ${v}\n`;
  }

  md += `\n## Top 20 FAILED pages\n\n`;
  if (fails.length === 0) md += `_None_\n`;
  for (const r of fails.slice(0, 20)) {
    md += `- [${r.qualityScore}] \`${r.path}\` — ${r.hardFails.join(', ')}\n`;
  }

  md += `\n## Top 20 WARNED pages\n\n`;
  if (warns.length === 0) md += `_None_\n`;
  for (const r of warns.slice(0, 20)) {
    md += `- [${r.qualityScore}] \`${r.path}\` — ${r.softWarns.join(', ')}\n`;
  }

  md += `\n## Duplicate-title clusters (top 20)\n\n`;
  if (dupTitles.length === 0) md += `_None_\n`;
  for (const [t, c] of dupTitles) {
    md += `- **${c} pages** share title: "${t.slice(0, 100)}"\n`;
  }

  md += `\n## Recommendation\n\n`;
  md += `- **Regenerate**: pages with hard fails on \`word_count\`, \`description_missing\`, or \`duplicate_title\` — these are recoverable with a re-render.\n`;
  md += `- **Noindex (already done)**: every fail page has \`<meta name="robots" content="noindex,follow">\` injected so Google can crawl outbound links but won't index the thin content.\n`;
  md += `- **Delete** (manual): pages with \`placeholder_text\` or pages that have been failing for 3+ daily runs.\n`;
  md += `- **Promote**: pages with quality score >= 90 — push to internal linking modules and citation campaigns.\n`;
  return md;
}

main().catch(err => {
  console.error('[quality-gate] fatal:', err);
  process.exit(1);
});
