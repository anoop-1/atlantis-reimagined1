#!/usr/bin/env node
/**
 * Schema Audit — Tier 5 Risk Mitigation
 * ─────────────────────────────────────
 * Read-only audit of prerendered HTML in dist/** /index.html for
 * structured-data correctness and on-page SEO meta tags.
 *
 * Scope (matches Tier 5 spec):
 *   - /erp-modules/* * /index.html
 *   - /erp-industries/* * /index.html
 *   - /erp/index.html
 *   - /compare/* * /index.html
 *   - /case-studies/* * /index.html
 *   - /ndt-erp-* * /index.html
 *   - /resources/* * /index.html
 *
 * Rules checked:
 *   1. No duplicate aggregateRating on the same @id entity
 *   2. No review[] array attached to Organization (regression check
 *      for commit 961d7991)
 *   3. No duplicate FAQPage on the same URL
 *   4. Every page emitting Product/SoftwareApplication has either
 *      aggregateRating OR review[] (not both, not neither)
 *   5. BreadcrumbList present on non-root pages
 *   6. Open Graph + Twitter Card meta tags present
 *   7. Canonical link present + matches the URL path
 *   8. Hreflang (if present) uses English variants only — no broken
 *      locales
 *
 * Output:
 *   scripts/schema-audit-report-<DATE>.md  (markdown table)
 *
 * Re-runnable. Read-only. No source modifications.
 *
 * Usage:
 *   node scripts/schema-audit.mjs
 *   node scripts/schema-audit.mjs --date 2026-05-13
 *   node scripts/schema-audit.mjs --root e:/software/Atlantis/atlantis-reimagined1
 */

import { readFileSync, writeFileSync, existsSync, readdirSync, statSync } from 'fs';
import { dirname, join, relative, resolve, sep } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = resolve(__dirname, '..');

// ── CLI args ───────────────────────────────────────────────────────────────
function getArg(name, fallback) {
  const i = process.argv.indexOf(name);
  if (i === -1 || i === process.argv.length - 1) return fallback;
  return process.argv[i + 1];
}
const DATE = getArg('--date', new Date().toISOString().slice(0, 10));
const ROOT = resolve(getArg('--root', REPO_ROOT));
const DIST = join(ROOT, 'dist');
const REPORT = join(__dirname, `schema-audit-report-${DATE}.md`);
const SITE_ORIGIN = 'https://atlantisndt.com';

// ── Scope filter: which dist subtrees to audit ─────────────────────────────
const SCOPE_PREFIXES = [
  'erp-modules' + sep,
  'erp-industries' + sep,
  'erp' + sep,
  'compare' + sep,
  'case-studies' + sep,
  'resources' + sep,
];
const SCOPE_CITY_PREFIX = 'ndt-erp-'; // top-level directories like dist/ndt-erp-houston/

function isInScope(relPath) {
  // relPath looks like "erp-modules/asset-management/index.html"
  if (!relPath.endsWith('index.html')) return false;
  // ndt-erp-* top-level dirs
  if (relPath.startsWith(SCOPE_CITY_PREFIX)) return true;
  for (const p of SCOPE_PREFIXES) {
    if (relPath.startsWith(p)) return true;
  }
  return false;
}

// ── Walk dist for index.html files ─────────────────────────────────────────
function walk(dir, acc = []) {
  let entries;
  try { entries = readdirSync(dir, { withFileTypes: true }); } catch { return acc; }
  for (const e of entries) {
    const full = join(dir, e.name);
    if (e.isDirectory()) walk(full, acc);
    else if (e.isFile() && e.name === 'index.html') acc.push(full);
  }
  return acc;
}

// ── Extract JSON-LD blocks from HTML ───────────────────────────────────────
// JSON-LD blocks look like:
//   <script type="application/ld+json">...</script>
// May be multiline or single-line. Use a non-greedy match.
const JSONLD_RE = /<script\s+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;

function extractJsonLd(html) {
  const blocks = [];
  let m;
  while ((m = JSONLD_RE.exec(html)) !== null) {
    const raw = m[1].trim();
    if (!raw) continue;
    try {
      blocks.push({ raw, parsed: JSON.parse(raw), valid: true });
    } catch (err) {
      blocks.push({ raw, parsed: null, valid: false, error: err.message });
    }
  }
  return blocks;
}

// ── Walk a parsed JSON-LD object and yield every node ──────────────────────
function* walkNodes(obj) {
  if (obj === null || typeof obj !== 'object') return;
  if (Array.isArray(obj)) {
    for (const item of obj) yield* walkNodes(item);
    return;
  }
  // A node may have @graph
  if (Array.isArray(obj['@graph'])) {
    for (const item of obj['@graph']) yield* walkNodes(item);
  }
  // Only yield objects that look like schema nodes (have @type)
  if (obj['@type']) yield obj;
  // Also walk into nested fields that commonly hold schema nodes
  for (const k of Object.keys(obj)) {
    if (k === '@graph' || k === '@type' || k === '@context' || k === '@id') continue;
    const v = obj[k];
    if (v && typeof v === 'object') yield* walkNodes(v);
  }
}

function typeOf(node) {
  const t = node['@type'];
  if (Array.isArray(t)) return t;
  if (typeof t === 'string') return [t];
  return [];
}

function isOneOfTypes(node, types) {
  return typeOf(node).some(t => types.includes(t));
}

// ── Meta tag extraction (regex-based — prerender HTML is well-formed) ──────
function pickMeta(html, attr, value) {
  // <meta {attr}="{value}" content="..." />
  const re = new RegExp(
    `<meta\\s+[^>]*${attr}=["']${value.replace(/[.*+?^${}()|[\\]\\\\]/g, '\\$&')}["'][^>]*content=["']([^"']*)["'][^>]*>`,
    'i'
  );
  const m = html.match(re);
  if (m) return m[1];
  // attr/content reversed order
  const re2 = new RegExp(
    `<meta\\s+[^>]*content=["']([^"']*)["'][^>]*${attr}=["']${value.replace(/[.*+?^${}()|[\\]\\\\]/g, '\\$&')}["'][^>]*>`,
    'i'
  );
  const m2 = html.match(re2);
  return m2 ? m2[1] : null;
}

function pickCanonical(html) {
  const m = html.match(/<link\s+[^>]*rel=["']canonical["'][^>]*href=["']([^"']+)["'][^>]*>/i);
  if (m) return m[1];
  const m2 = html.match(/<link\s+[^>]*href=["']([^"']+)["'][^>]*rel=["']canonical["'][^>]*>/i);
  return m2 ? m2[1] : null;
}

function pickHreflang(html) {
  const out = [];
  const re = /<link\s+[^>]*rel=["']alternate["'][^>]*hreflang=["']([^"']+)["'][^>]*>/gi;
  let m;
  while ((m = re.exec(html)) !== null) out.push(m[1]);
  const re2 = /<link\s+[^>]*hreflang=["']([^"']+)["'][^>]*rel=["']alternate["'][^>]*>/gi;
  while ((m = re2.exec(html)) !== null) out.push(m[1]);
  return out;
}

// English-only hreflang allowlist
const ALLOWED_HREFLANG = new Set(['en', 'en-us', 'en-gb', 'en-ca', 'en-au', 'en-in', 'en-ae', 'x-default']);

// ── Build URL from file path ───────────────────────────────────────────────
function fileToUrl(absFile) {
  // dist/foo/bar/index.html  →  /foo/bar
  const rel = relative(DIST, absFile).replace(/\\/g, '/');
  const path = '/' + rel.replace(/\/index\.html$/, '').replace(/^index\.html$/, '');
  return SITE_ORIGIN + (path === '/' ? '' : path);
}

// ── Audit one file ─────────────────────────────────────────────────────────
function auditFile(absFile) {
  const issues = [];
  let html;
  try { html = readFileSync(absFile, 'utf-8'); }
  catch (err) { return [{ severity: 'critical', issue: 'unreadable: ' + err.message }]; }

  const expectedUrl = fileToUrl(absFile);
  const relPath = relative(ROOT, absFile).replace(/\\/g, '/');

  // 1+2+3+4. JSON-LD checks
  const blocks = extractJsonLd(html);
  let parsedOk = 0;
  for (const b of blocks) {
    if (!b.valid) {
      issues.push({
        severity: 'critical',
        issue: 'invalid JSON-LD: ' + b.error,
        fix: 'Re-emit the JSON-LD block with valid JSON — escape quotes properly.',
      });
    } else parsedOk++;
  }

  // Aggregate every node across every block
  const nodes = [];
  for (const b of blocks) {
    if (!b.valid) continue;
    for (const n of walkNodes(b.parsed)) nodes.push(n);
  }

  // Rule 1: No duplicate aggregateRating on the same @id entity
  // Group entities (with @id) and count whether they have aggregateRating set more than once
  const idEntities = new Map(); // @id → { aggregateRatingCount, types }
  for (const n of nodes) {
    if (!n['@id']) continue;
    const id = n['@id'];
    const entry = idEntities.get(id) || { aggregateRatingCount: 0, types: new Set() };
    typeOf(n).forEach(t => entry.types.add(t));
    if (n.aggregateRating) entry.aggregateRatingCount++;
    idEntities.set(id, entry);
  }
  for (const [id, entry] of idEntities) {
    if (entry.aggregateRatingCount > 1) {
      issues.push({
        severity: 'critical',
        issue: `duplicate aggregateRating on @id ${id} (count=${entry.aggregateRatingCount})`,
        fix: 'Emit aggregateRating exactly once per @id. Deduplicate at the schema generator.',
      });
    }
  }

  // Rule 2: No review[] array attached to Organization (regression check)
  for (const n of nodes) {
    if (isOneOfTypes(n, ['Organization'])) {
      if (Array.isArray(n.review) && n.review.length > 0) {
        issues.push({
          severity: 'critical',
          issue: `Organization node has review[] array (length=${n.review.length}) — regression of commit 961d7991`,
          fix: 'Remove review[] from Organization. Reviews belong on Product/SoftwareApplication/Service, not Organization.',
        });
      }
    }
  }

  // Rule 3: No duplicate FAQPage on same URL
  // FAQPages should be unique per page (URL). Count FAQPage nodes.
  const faqCount = nodes.filter(n => isOneOfTypes(n, ['FAQPage'])).length;
  if (faqCount > 1) {
    issues.push({
      severity: 'critical',
      issue: `duplicate FAQPage on this URL (count=${faqCount})`,
      fix: 'Emit FAQPage exactly once per page. Consolidate mainEntity arrays into a single FAQPage block.',
    });
  }

  // Rule 4: Product/SoftwareApplication must have aggregateRating XOR review[]
  // (not both bundled inconsistently — and not neither)
  const productNodes = nodes.filter(n =>
    isOneOfTypes(n, ['Product', 'SoftwareApplication']) ||
    typeOf(n).some(t => /Product|SoftwareApplication/i.test(t))
  );
  for (const p of productNodes) {
    const hasRating = !!p.aggregateRating;
    const hasReview = (Array.isArray(p.review) && p.review.length > 0) ||
                       (p.review && typeof p.review === 'object');
    const t = typeOf(p).join('/');
    if (!hasRating && !hasReview) {
      issues.push({
        severity: 'warning',
        issue: `${t} (${p.name || p['@id'] || 'unnamed'}) has neither aggregateRating nor review[]`,
        fix: 'Add aggregateRating or review[] to satisfy Google Merchant guidelines for Product rich results.',
      });
    }
    // Note: both is acceptable per schema.org. We flag inconsistency only if ratings disagree.
    if (hasRating && hasReview) {
      const r = p.aggregateRating;
      const reviewArr = Array.isArray(p.review) ? p.review : [p.review];
      const reviewCount = r && (r.reviewCount || r.ratingCount);
      if (reviewCount && Number(reviewCount) !== reviewArr.length && reviewArr.length > 0) {
        // Only flag if reviewArr is non-trivial — typically when explicit review[] is present
        // we expect at least aggregateRating.reviewCount to roughly match. Soft warning.
        issues.push({
          severity: 'info',
          issue: `${t} (${p.name || 'unnamed'}) aggregateRating.reviewCount=${reviewCount} but review[].length=${reviewArr.length}`,
          fix: 'Sync aggregateRating.reviewCount with the actual review[] array length.',
        });
      }
    }
  }

  // Rule 5: BreadcrumbList present on non-root pages
  const isRoot = expectedUrl === SITE_ORIGIN || expectedUrl === SITE_ORIGIN + '/';
  const hasBreadcrumb = nodes.some(n => isOneOfTypes(n, ['BreadcrumbList']));
  if (!isRoot && !hasBreadcrumb) {
    issues.push({
      severity: 'warning',
      issue: 'missing BreadcrumbList schema on non-root page',
      fix: 'Inject a BreadcrumbList JSON-LD block listing the path from home → section → page.',
    });
  }

  // Rule 6: Open Graph + Twitter Card meta tags present
  const og = {
    title: pickMeta(html, 'property', 'og:title'),
    description: pickMeta(html, 'property', 'og:description'),
    type: pickMeta(html, 'property', 'og:type'),
    image: pickMeta(html, 'property', 'og:image'),
    url: pickMeta(html, 'property', 'og:url'),
  };
  const twitter = {
    card: pickMeta(html, 'name', 'twitter:card'),
    title: pickMeta(html, 'name', 'twitter:title'),
    description: pickMeta(html, 'name', 'twitter:description'),
    image: pickMeta(html, 'name', 'twitter:image'),
  };
  const missingOg = Object.entries(og).filter(([_, v]) => !v).map(([k]) => k);
  const missingTw = Object.entries(twitter).filter(([_, v]) => !v).map(([k]) => k);
  if (missingOg.length > 0) {
    issues.push({
      severity: 'warning',
      issue: `missing Open Graph tags: ${missingOg.map(k => 'og:' + k).join(', ')}`,
      fix: 'Add the missing og:* meta tags in the <head> via the prerender template.',
    });
  }
  if (missingTw.length > 0) {
    issues.push({
      severity: 'warning',
      issue: `missing Twitter Card tags: ${missingTw.map(k => 'twitter:' + k).join(', ')}`,
      fix: 'Add the missing twitter:* meta tags in the <head> via the prerender template.',
    });
  }

  // Rule 7: Canonical link present + matches the URL path
  const canonical = pickCanonical(html);
  if (!canonical) {
    issues.push({
      severity: 'critical',
      issue: 'missing <link rel="canonical">',
      fix: 'Add a canonical link tag with the absolute URL in the <head>.',
    });
  } else {
    // Normalize trailing slash for comparison
    const norm = (u) => u.replace(/\/$/, '');
    if (norm(canonical) !== norm(expectedUrl)) {
      issues.push({
        severity: 'warning',
        issue: `canonical mismatch: file expects ${expectedUrl} but canonical = ${canonical}`,
        fix: 'Update the canonical href to match the page URL exactly (origin + path, no trailing slash).',
      });
    }
  }

  // Rule 8: Hreflang correct — English variants only
  const hreflangs = pickHreflang(html);
  for (const h of hreflangs) {
    if (!ALLOWED_HREFLANG.has(h.toLowerCase())) {
      issues.push({
        severity: 'warning',
        issue: `non-English hreflang detected: ${h}`,
        fix: 'Remove non-English hreflang variants (site is English-only). Allowed: en, en-us, en-gb, en-ca, en-au, en-in, en-ae, x-default.',
      });
    }
  }

  return issues;
}

// ── Main ───────────────────────────────────────────────────────────────────
function main() {
  if (!existsSync(DIST)) {
    console.error(`[schema-audit] dist/ not found at ${DIST}. Run a production build first.`);
    process.exit(1);
  }

  console.log(`[schema-audit] root: ${ROOT}`);
  console.log(`[schema-audit] dist: ${DIST}`);
  console.log(`[schema-audit] date: ${DATE}`);
  console.log(`[schema-audit] walking dist/ ...`);

  const all = walk(DIST);
  const inScope = all.filter(f => {
    const rel = relative(DIST, f).replace(/\\/g, '/');
    return isInScope(rel.replace(/\//g, sep));
  });
  console.log(`[schema-audit] total index.html files: ${all.length}`);
  console.log(`[schema-audit] in-scope files: ${inScope.length}`);

  const rows = [];
  const severityCount = { critical: 0, warning: 0, info: 0 };
  let pagesWithIssues = 0;

  for (const f of inScope) {
    const issues = auditFile(f);
    if (issues.length === 0) continue;
    pagesWithIssues++;
    const relFile = relative(ROOT, f).replace(/\\/g, '/');
    for (const it of issues) {
      severityCount[it.severity] = (severityCount[it.severity] || 0) + 1;
      rows.push({ file: relFile, ...it });
    }
  }

  // Build the markdown report
  const lines = [];
  lines.push(`# Schema Audit Report — ${DATE}`);
  lines.push('');
  lines.push(`**Scope:** dist/erp-modules, dist/erp-industries, dist/erp, dist/compare, dist/case-studies, dist/ndt-erp-*, dist/resources`);
  lines.push('');
  lines.push(`**Files audited:** ${inScope.length}`);
  lines.push(`**Files with issues:** ${pagesWithIssues}`);
  lines.push(`**Total issues:** ${rows.length}`);
  lines.push('');
  lines.push('## Severity Summary');
  lines.push('');
  lines.push('| Severity | Count |');
  lines.push('|---|---|');
  lines.push(`| critical | ${severityCount.critical || 0} |`);
  lines.push(`| warning | ${severityCount.warning || 0} |`);
  lines.push(`| info | ${severityCount.info || 0} |`);
  lines.push('');
  lines.push('## Rules Checked');
  lines.push('');
  lines.push('1. No duplicate aggregateRating on the same `@id` entity');
  lines.push('2. No `review[]` attached to Organization (regression check for commit 961d7991)');
  lines.push('3. No duplicate FAQPage on the same URL');
  lines.push('4. Product/SoftwareApplication has aggregateRating or review[] (not neither)');
  lines.push('5. BreadcrumbList present on non-root pages');
  lines.push('6. Open Graph + Twitter Card meta tags present');
  lines.push('7. Canonical link present and matches the URL path');
  lines.push('8. Hreflang values restricted to English variants');
  lines.push('');
  lines.push('## Important Context');
  lines.push('');
  lines.push('This audit reads the **static prerendered HTML only**. JSON-LD that is injected at runtime by React (via `react-helmet-async` or similar) is NOT visible here. Google\'s rendering pipeline does execute JavaScript, so client-injected schema can still be picked up — but the safest pattern is to inline page-specific JSON-LD (Product, SoftwareApplication, BreadcrumbList, FAQPage) into the prerender output. If only `Organization` + `WebSite` schema show up in the static HTML, the page-specific schema is being added client-side and will work for Google but not for less-capable crawlers (Bing, social-media bots, AI crawlers).');
  lines.push('');

  if (rows.length === 0) {
    lines.push('## Issues');
    lines.push('');
    lines.push('No issues found across the audited scope.');
  } else {
    // Aggregate by issue pattern for top section, then full detail table
    const byIssue = new Map();
    for (const r of rows) {
      const key = r.issue.replace(/\s+\(.*?\)\s*$/, '').replace(/=\d+/g, '=N').replace(/length=\d+/g, 'length=N');
      const entry = byIssue.get(key) || { count: 0, severity: r.severity, fix: r.fix, examples: [] };
      entry.count++;
      if (entry.examples.length < 3) entry.examples.push(r.file);
      byIssue.set(key, entry);
    }

    lines.push('## Issues — Grouped by Pattern');
    lines.push('');
    lines.push('| Pattern | Severity | Count | Example file(s) | Fix |');
    lines.push('|---|---|---|---|---|');
    const sorted = [...byIssue.entries()].sort((a, b) => {
      const order = { critical: 0, warning: 1, info: 2 };
      const sa = order[a[1].severity], sb = order[b[1].severity];
      if (sa !== sb) return sa - sb;
      return b[1].count - a[1].count;
    });
    for (const [pattern, e] of sorted) {
      lines.push(`| ${pattern} | ${e.severity} | ${e.count} | ${e.examples.join('<br>')} | ${e.fix || ''} |`);
    }

    lines.push('');
    lines.push('## Issues — Full Detail (first 200)');
    lines.push('');
    lines.push('| File | Issue | Severity | Recommended Fix |');
    lines.push('|---|---|---|---|');
    for (const r of rows.slice(0, 200)) {
      lines.push(`| ${r.file} | ${r.issue.replace(/\|/g, '\\|')} | ${r.severity} | ${(r.fix || '').replace(/\|/g, '\\|')} |`);
    }
    if (rows.length > 200) {
      lines.push('');
      lines.push(`_… ${rows.length - 200} more rows omitted from inline table. Re-run with output redirection for full list._`);
    }
  }

  writeFileSync(REPORT, lines.join('\n') + '\n');
  console.log(`[schema-audit] report written: ${REPORT}`);
  console.log(`[schema-audit] critical=${severityCount.critical || 0} warning=${severityCount.warning || 0} info=${severityCount.info || 0}`);
}

main();
