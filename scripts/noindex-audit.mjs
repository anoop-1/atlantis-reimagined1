#!/usr/bin/env node
/**
 * Noindex Audit — Tier 5 Risk Mitigation
 * ───────────────────────────────────────
 * Scans every dist/** /index.html for `<meta name="robots" content="...noindex...">`.
 * Flags any page in the ERP-cluster (ndt-erp-*, erp-modules/*, erp-industries/*,
 * erp/, compare/, case-studies/, resources/) that has noindex — these should
 * be `index, follow` per the CURATED_CITY_SLUGS allowlist.
 *
 * Output:
 *   scripts/noindex-audit-report-<DATE>.md
 *
 * Re-runnable. Read-only.
 *
 * Usage:
 *   node scripts/noindex-audit.mjs
 *   node scripts/noindex-audit.mjs --date 2026-05-13
 *   node scripts/noindex-audit.mjs --all      # audit ALL dist files (not just ERP cluster)
 */

import { readFileSync, writeFileSync, existsSync, readdirSync } from 'fs';
import { dirname, join, relative, resolve, sep } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = resolve(__dirname, '..');

function getArg(name, fallback) {
  const i = process.argv.indexOf(name);
  if (i === -1 || i === process.argv.length - 1) return fallback;
  return process.argv[i + 1];
}
const DATE = getArg('--date', new Date().toISOString().slice(0, 10));
const ROOT = resolve(getArg('--root', REPO_ROOT));
const DIST = join(ROOT, 'dist');
const AUDIT_ALL = process.argv.includes('--all');
const REPORT = join(__dirname, `noindex-audit-report-${DATE}.md`);
const SITE_ORIGIN = 'https://atlantisndt.com';

// ── Scope ──────────────────────────────────────────────────────────────────
const SCOPE_PREFIXES = [
  'erp-modules' + sep,
  'erp-industries' + sep,
  'erp' + sep,
  'compare' + sep,
  'case-studies' + sep,
  'resources' + sep,
];
const SCOPE_CITY_PREFIX = 'ndt-erp-';

function isInErpCluster(relPath) {
  if (!relPath.endsWith('index.html')) return false;
  if (relPath.startsWith(SCOPE_CITY_PREFIX)) return true;
  for (const p of SCOPE_PREFIXES) if (relPath.startsWith(p)) return true;
  return false;
}

// Walk
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

// ── Slug extraction (mirrors gsc-multi-account-submit logic) ───────────────
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
  // erp-modules / erp-industries city pages share a hyphenated city suffix:
  'asset-management-', 'aerospace-quality-control-', 'calibration-laboratories-',
  'construction-quality-assurance-', 'environmental-testing-labs-',
];

function fileToUrl(absFile) {
  const rel = relative(DIST, absFile).replace(/\\/g, '/');
  const path = '/' + rel.replace(/\/index\.html$/, '');
  return SITE_ORIGIN + (path === '/' ? '' : path);
}

// Sub-path prefixes (gsc-multi-account-submit TEMPLATE_PATH_PREFIXES analogue)
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

function extractCitySlug(url) {
  try {
    const u = new URL(url);
    const fullPath = u.pathname;
    // Try sub-path prefixes first (e.g. /industry/aerospace-ndt-boston)
    for (const p of TEMPLATE_PATH_PREFIXES) {
      if (fullPath.startsWith(p)) {
        const rest = fullPath.slice(p.length);
        const slash = rest.indexOf('/');
        return slash === -1 ? rest : rest.slice(0, slash);
      }
    }
    const path = fullPath.replace(/^\//, '');
    // Top-level template-prefixed slugs (e.g. ndt-erp-houston)
    for (const p of TEMPLATE_PREFIXES) {
      if (path.startsWith(p)) {
        const rest = path.slice(p.length);
        const slash = rest.indexOf('/');
        return slash === -1 ? rest : rest.slice(0, slash);
      }
    }
    // Nested erp-modules/<module>-<city>/ patterns
    const m = path.match(/^erp-(modules|industries)\/([^\/]+)$/);
    if (m) {
      const seg = m[2];
      for (const p of TEMPLATE_PREFIXES) {
        const bare = p.replace(/-$/, '');
        if (seg === bare) return null;
        if (seg.startsWith(bare + '-')) return seg.slice(bare.length + 1);
      }
      return null;
    }
    return null;
  } catch { return null; }
}

// ── Robots meta parsing ────────────────────────────────────────────────────
function getRobots(html) {
  const m = html.match(/<meta\s+[^>]*name=["']robots["'][^>]*content=["']([^"']+)["'][^>]*>/i);
  if (m) return m[1];
  const m2 = html.match(/<meta\s+[^>]*content=["']([^"']+)["'][^>]*name=["']robots["'][^>]*>/i);
  return m2 ? m2[1] : null;
}

function hasNoindex(content) {
  if (!content) return false;
  return /\bnoindex\b/i.test(content);
}

// ── Main ───────────────────────────────────────────────────────────────────
function main() {
  if (!existsSync(DIST)) {
    console.error(`[noindex-audit] dist/ not found at ${DIST}`);
    process.exit(1);
  }

  console.log(`[noindex-audit] root: ${ROOT}`);
  console.log(`[noindex-audit] dist: ${DIST}`);
  console.log(`[noindex-audit] date: ${DATE}`);
  console.log(`[noindex-audit] mode: ${AUDIT_ALL ? 'all dist files' : 'ERP-cluster only'}`);

  const all = walk(DIST);
  const target = AUDIT_ALL ? all : all.filter(f => {
    const rel = relative(DIST, f).replace(/\\/g, '/');
    return isInErpCluster(rel.replace(/\//g, sep));
  });

  console.log(`[noindex-audit] total index.html: ${all.length}`);
  console.log(`[noindex-audit] in-scope: ${target.length}`);

  const offenders = [];
  const stats = { erpCluster: 0, otherDist: 0, otherWithNoindex: 0 };

  // Also do a broad sweep across ALL dist for context (separately)
  const broadOffenders = [];
  for (const f of all) {
    let html;
    try { html = readFileSync(f, 'utf-8'); } catch { continue; }
    const robots = getRobots(html);
    if (hasNoindex(robots)) {
      const url = fileToUrl(f);
      const relFile = relative(ROOT, f).replace(/\\/g, '/');
      const slug = extractCitySlug(url);
      const inCluster = (() => {
        const rel = relative(DIST, f).replace(/\\/g, '/');
        return isInErpCluster(rel.replace(/\//g, sep));
      })();
      const entry = { file: relFile, url, robots, citySlug: slug, inErpCluster: inCluster };
      broadOffenders.push(entry);
      if (inCluster) offenders.push(entry);
      else stats.otherWithNoindex++;
    }
  }

  // ── Report ───────────────────────────────────────────────────────────────
  const lines = [];
  lines.push(`# Noindex Audit Report — ${DATE}`);
  lines.push('');
  lines.push(`**Audit:** robots meta tag scan across \`dist/**/index.html\``);
  lines.push(`**Goal:** verify ERP-cluster pages are \`index, follow\` (commit 412ca97b fix verification)`);
  lines.push('');
  lines.push('## Summary');
  lines.push('');
  lines.push('| Metric | Count |');
  lines.push('|---|---|');
  lines.push(`| Total dist/index.html files | ${all.length} |`);
  lines.push(`| ERP-cluster pages scanned | ${target.length} |`);
  lines.push(`| ERP-cluster pages with noindex (CRITICAL) | ${offenders.length} |`);
  lines.push(`| Other dist pages with noindex (info — expected for non-curated cities) | ${stats.otherWithNoindex} |`);
  lines.push('');

  lines.push('## ERP-Cluster Noindex Offenders');
  lines.push('');
  if (offenders.length === 0) {
    lines.push('No noindex tags found on ERP-cluster pages. Commit 412ca97b fix is intact.');
  } else {
    lines.push('Pages in scope (`/ndt-erp-*`, `/erp-modules/*`, `/erp-industries/*`, `/erp`, `/compare/*`, `/case-studies/*`, `/resources/*`) MUST be `index, follow`. The pages below regressed.');
    lines.push('');
    lines.push('| URL | City slug | robots content | Severity | Recommended Fix |');
    lines.push('|---|---|---|---|---|');
    for (const o of offenders) {
      const fix = o.citySlug
        ? `Add \`${o.citySlug}\` to CURATED_CITY_SLUGS in both \`src/data/curated-cities.ts\` AND \`scripts/gsc-multi-account-submit.mjs\`, then rebuild.`
        : `Verify the page route does not fall through to the noindex NotFound catch-all. Check src/App.tsx routes and DynamicCityRoute logic.`;
      lines.push(`| ${o.url} | ${o.citySlug || '(unknown)'} | ${o.robots} | critical | ${fix} |`);
    }
  }

  lines.push('');
  lines.push('## Other Dist Noindex Pages (out of scope but informational)');
  lines.push('');
  lines.push('These pages are correctly noindexed because they are non-curated city template variants. No action required unless a specific city should be promoted to the curated allowlist.');
  lines.push('');

  // Group by city slug
  const byCity = new Map();
  for (const o of broadOffenders.filter(b => !b.inErpCluster)) {
    const key = o.citySlug || '(no-slug)';
    const arr = byCity.get(key) || [];
    arr.push(o);
    byCity.set(key, arr);
  }

  if (byCity.size === 0) {
    lines.push('None.');
  } else {
    lines.push('| City slug | Page count | Example URL |');
    lines.push('|---|---|---|');
    const sorted = [...byCity.entries()].sort((a, b) => b[1].length - a[1].length);
    for (const [slug, arr] of sorted) {
      lines.push(`| ${slug} | ${arr.length} | ${arr[0].url} |`);
    }
  }

  lines.push('');
  lines.push('## How to Fix');
  lines.push('');
  lines.push('For any ERP-cluster URL that incorrectly has noindex:');
  lines.push('');
  lines.push('1. Extract the city slug from the URL (e.g. `ndt-erp-baytown` → `baytown`).');
  lines.push('2. Add the slug to `CURATED_CITY_SLUGS` in `src/data/curated-cities.ts`.');
  lines.push('3. Add the same slug to `CURATED_CITY_SLUGS` in `scripts/gsc-multi-account-submit.mjs`.');
  lines.push('4. Run `npm run build` (or `pnpm build`) to regenerate dist/.');
  lines.push('5. Re-run this audit to confirm.');
  lines.push('');

  writeFileSync(REPORT, lines.join('\n') + '\n');
  console.log(`[noindex-audit] report written: ${REPORT}`);
  console.log(`[noindex-audit] ERP-cluster offenders: ${offenders.length}`);
  console.log(`[noindex-audit] other noindex pages: ${stats.otherWithNoindex}`);
}

main();
