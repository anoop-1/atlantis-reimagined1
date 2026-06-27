#!/usr/bin/env node
/**
 * Round-6 Phase A — prioritise 800 highest-value weak pages.
 *
 * Sources:
 *   - dist/ rendered HTML word counts (current quality state)
 *   - scripts/gsc-report.json (impressions/CTR/position per page)
 *   - scripts/round5-opportunities.json (priority tiers A/B/C/D/E)
 *
 * Output: scripts/round6-upgrade-targets.json
 *   {
 *     targets: [
 *       { path, family, currentWords, impressions, ctr, position, tier, agent }
 *     ],
 *     byFamily: { erp: N, training: N, ... },
 *     byAgent: { A1: N, A2: N, ... }
 *   }
 *
 * Each target is assigned to a content-specialist agent (A1-A12).
 */
import { readFileSync, writeFileSync, readdirSync, statSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const DIST = join(ROOT, 'dist');

// ─── Load GSC data ──────────────────────────────────────────────────────
const gsc = JSON.parse(readFileSync(join(ROOT, 'scripts/gsc-report.json'), 'utf-8'));
const opps = JSON.parse(readFileSync(join(ROOT, 'scripts/round5-opportunities.json'), 'utf-8'));

// Build per-page impressions/CTR/position lookup
const gscByPath = new Map();
for (const p of gsc.pages) {
  const path = p.page.replace(/^https:\/\/atlantisndt\.com/, '').replace(/\/$/, '');
  gscByPath.set(path || '/', { impressions: p.impressions, ctr: parseFloat(p.ctr) || 0, position: p.position, clicks: p.clicks });
}

// Mark opportunity tier per page
const tierByPath = new Map();
['tierA', 'tierB', 'tierC', 'tierD', 'tierE'].forEach(t => {
  opps[t].pages.forEach(p => {
    const path = p.page.replace(/\/$/, '');
    if (!tierByPath.has(path)) tierByPath.set(path, t.replace('tier', ''));
  });
});

// ─── Walk dist/ for current word counts ─────────────────────────────────
function walk(dir, paths = []) {
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    if (!e.isDirectory()) continue;
    const sub = join(dir, e.name);
    if (existsSync(join(sub, 'index.html'))) {
      paths.push(sub.replace(DIST, '').replace(/\\/g, '/'));
    }
    walk(sub, paths);
  }
  return paths;
}

function wordCount(htmlPath) {
  if (!existsSync(htmlPath)) return 0;
  const html = readFileSync(htmlPath, 'utf-8');
  const m = html.match(/<main[^>]*>([\s\S]*?)<\/main>/i);
  if (!m) return 0;
  return m[1].replace(/<script[\s\S]*?<\/script>/g, ' ')
    .replace(/<style[\s\S]*?<\/style>/g, ' ')
    .replace(/<nav[\s\S]*?<\/nav>/g, ' ')
    .replace(/<footer[\s\S]*?<\/footer>/g, ' ')
    .replace(/<header[\s\S]*?<\/header>/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&[a-z]+;/gi, ' ')
    .replace(/\s+/g, ' ').trim().split(/\s+/).filter(Boolean).length;
}

// ─── Family classifier ──────────────────────────────────────────────────
function classify(path) {
  if (path.startsWith('/blog/')) return 'blog';
  if (path.startsWith('/ndt-erp-')) return 'ndt-erp-city';
  if (path.startsWith('/erp/')) return 'erp-combo';
  if (path.startsWith('/ndt-training-')) return 'ndt-training-city';
  if (path.match(/^\/training\/(api-510|api-570|api-653|asnt-level-iii|cwi)-training-/)) return 'cert-city';
  if (path.startsWith('/consulting/ndt-consulting-')) return 'consulting-city';
  if (path.startsWith('/consulting/')) return 'consulting-service';
  if (path.startsWith('/digital-twin-')) return 'dt-city';
  if (path.startsWith('/digital-twins/')) return 'dt-usecase';
  if (path.startsWith('/3d-scanning-') && path !== '/3d-scanning-services') return '3d-scan-city';
  if (path.startsWith('/services/')) return 'method-city';
  if (path.match(/^\/(ultrasonic|radiographic|magnetic-particle|penetrant|visual|eddy-current)-testing-/)) return 'method-city-direct';
  if (path.startsWith('/industry/')) return 'industry-city';
  if (path.startsWith('/inspection/')) return 'inspection-city';
  if (path.startsWith('/verticals/')) return 'vertical-hub';
  if (path.startsWith('/regions/')) return 'region-hub';
  if (path.startsWith('/compare/')) return 'compare';
  if (path.startsWith('/corporate-training/') || path.startsWith('/corporate-ndt-training/')) return 'corporate-training';
  if (path.startsWith('/case-studies/')) return 'case-study';
  if (path.startsWith('/press/')) return 'press';
  if (/^\/(ultrasonic|radiographic|magnetic-particle|penetrant|visual|eddy-current|tofd|phased-array|guided-wave|acoustic-emission|magnetic-flux-leakage)-testing$/.test(path)) return 'method-hub';
  if (/-ndt-services$|-ndt-training$/.test(path) || /^\/(asnt-certification|api-(510|570|653)-certification)$/.test(path)) return 'service-line';
  return 'other';
}

// Family → agent mapping
const FAMILY_TO_AGENT = {
  'ndt-erp-city': 'A1',
  'erp-combo': 'A1',
  'ndt-training-city': 'A2',
  'cert-city': 'A2',
  'consulting-city': 'A3',
  'consulting-service': 'A3',
  'dt-city': 'A4',
  'dt-usecase': 'A4',
  'method-city': 'A5',
  'method-city-direct': 'A5',
  'industry-city': 'A6',
  'inspection-city': 'A6',
  '3d-scan-city': 'A7',
  'method-hub': 'A8',
  'service-line': 'A8',
  'compare': 'A8',
  'vertical-hub': 'A10',
  'region-hub': 'A11',
  'case-study': 'A12',
  'corporate-training': 'A12',
  'blog': 'skip',
  'press': 'skip',
  'other': 'A12',
};

// ─── Score each weak page ────────────────────────────────────────────────
const allPaths = walk(DIST);
const scored = [];
for (const path of allPaths) {
  const family = classify(path);
  const agent = FAMILY_TO_AGENT[family];
  if (!agent || agent === 'skip') continue;
  const words = wordCount(join(DIST, path, 'index.html'));
  if (words >= 1200) continue; // already at quality bar
  const g = gscByPath.get(path) || { impressions: 0, ctr: 0, position: 99, clicks: 0 };
  const tier = tierByPath.get(path) || '';
  // Business value score
  const baseImp = g.impressions || 0;
  const familyBoost = { 'region-hub': 200, 'vertical-hub': 200, 'method-hub': 300, 'service-line': 200, 'compare': 100, 'consulting-service': 250, 'dt-city': 50, 'erp-combo': 30, 'ndt-erp-city': 50, 'ndt-training-city': 60, 'consulting-city': 50, '3d-scan-city': 30, 'method-city': 30, 'method-city-direct': 50, 'industry-city': 30, 'inspection-city': 30 }[family] || 30;
  const score = baseImp + familyBoost + (tier === 'A' ? 1000 : tier === 'B' ? 500 : tier === 'C' ? 250 : tier === 'D' ? 200 : 0);
  scored.push({ path, family, agent, currentWords: words, impressions: g.impressions, ctr: g.ctr, position: g.position, clicks: g.clicks, tier, score });
}

scored.sort((a, b) => b.score - a.score);

// ─── Build per-agent buckets with caps ──────────────────────────────────
const AGENT_CAPS = {
  A1: 80,  // ERP city
  A2: 80,  // Training city
  A3: 80,  // Consulting city
  A4: 80,  // DT city
  A5: 80,  // Method × city
  A6: 80,  // Industry × city
  A7: 80,  // 3D Scan city
  A8: 80,  // Hub + service-line + compare
  A10: 55, // Vertical (no extra subpages)
  A11: 29, // Region hubs (we have 29)
  A12: 40, // Case studies + corporate training + other
};

const byAgent = {};
const targets = [];
for (const t of scored) {
  const cap = AGENT_CAPS[t.agent] || 0;
  if (!byAgent[t.agent]) byAgent[t.agent] = [];
  if (byAgent[t.agent].length >= cap) continue;
  byAgent[t.agent].push(t);
  targets.push(t);
}

const byFamily = {};
for (const t of targets) byFamily[t.family] = (byFamily[t.family] || 0) + 1;

const out = {
  generated: '2026-06-25',
  sources: ['dist/*/index.html', 'scripts/gsc-report.json', 'scripts/round5-opportunities.json'],
  totalTargets: targets.length,
  byFamily,
  byAgent: Object.fromEntries(Object.entries(byAgent).map(([k, v]) => [k, v.length])),
  agentBuckets: byAgent,
  targets,
};

const outPath = join(ROOT, 'scripts/round6-upgrade-targets.json');
writeFileSync(outPath, JSON.stringify(out, null, 2), 'utf-8');

console.log(`Round-6 Phase A — prioritisation complete`);
console.log(`  Total weak pages scored: ${scored.length}`);
console.log(`  Targets selected: ${targets.length}`);
console.log(`  By agent:`);
for (const [a, n] of Object.entries(out.byAgent)) console.log(`    ${a}: ${n}`);
console.log(`  By family:`);
for (const [f, n] of Object.entries(byFamily).sort((a, b) => b[1] - a[1])) console.log(`    ${f}: ${n}`);
console.log(`\nTop 10 targets by score:`);
targets.slice(0, 10).forEach(t => console.log(`  ${t.score} ${t.path} (${t.family}, ${t.currentWords}w, ${t.impressions}imp, ${t.tier})`));
