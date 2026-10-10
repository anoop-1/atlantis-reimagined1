/**
 * US commercial keyword portfolio — 100 keywords across the six priority lines (CLAUDE.md §51).
 * ─────────────────────────────────────────────────────────────────────────────
 * Why: the owner's 90-day plan (2026-10-10) asks for a 100-keyword tracking portfolio:
 * ERP 20 · Digital Twin Reporting 15 · Practical NDT Simulation 15 · Training 20 ·
 * Level III Consulting 15 · Inspection Services 15. API training is excluded and 3D
 * scanning is deprioritised by the same plan, so neither appears here.
 *
 * Each keyword has ONE intended landing page (the owner from §49/§50 where one exists),
 * so tracking and internal anchors never split a term across URLs (§40.3).
 *
 * Demand: Atlantis's own Search Console snapshot scripts/_audit-all-queries.json
 * (global, ~2026-09-02). `exact` = the query itself; `family` = every query containing
 * the phrase as whole words. No third-party search volumes are invented; US volume and
 * difficulty need a paid tool and are left null for the owner to fill.
 *
 * Score (plan §6 weights): intent 30 · relevance 25 · existing ranking 20 · demand 15 ·
 * feasibility 10. Ranking scores best at positions 4–20 (the plan's priority band).
 *
 * Embedding check: whether the phrase appears in the built owner page's text (dist) and
 * whether it is an anchor in the §50 related-link system. Run after `npm run build`:
 *   node scripts/keyword-portfolio-2026-10.mjs        → scripts/keyword-portfolio-2026-10.json
 */
import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { KEYWORD_LINK_TARGETS } from '../src/data/keyword-links-2026-10.mjs';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');

// [keyword, landing page, intent 1-5, feasibility 1-5]. Feasibility 2 = SERP owned by
// aggregators or the standards body; 4-5 = niche SERP with thin competitor pages (§47.2, §49).
const P = {
  erp: [
    ['ndt erp', '/erp', 5, 4], ['ndt erp software', '/erp', 5, 4], ['erp for inspection companies', '/erp', 5, 3],
    ['ndt business management software', '/erp', 5, 4], ['ndt company management software', '/erp', 5, 4],
    ['inspection company software', '/erp', 4, 3], ['ndt reporting and management software', '/erp', 5, 4],
    ['ndt software for small inspection companies', '/erp', 5, 4],
    ['ndt management software', '/ndt-inspection-software', 5, 3], ['ndt software', '/ndt-inspection-software', 4, 2],
    ['ndt inspection software', '/ndt-inspection-software', 5, 3], ['ndt certification tracking software', '/ndt-inspection-software', 5, 4],
    ['calibration management software', '/ndt-inspection-software', 4, 2], ['iso 17020 inspection body software', '/ndt-inspection-software', 5, 4],
    ['inspection management software', '/inspection-management-software', 4, 2], ['ndt inspection management software', '/inspection-management-software', 5, 4],
    ['ndt reporting software', '/best-ndt-reporting-software-2026', 5, 3], ['best ndt software', '/best-ndt-reporting-software-2026', 4, 2],
    ['ndt report generator', '/best-ndt-reporting-software-2026', 4, 4], ['floodlight alternative', '/compare/atlantis-erp-vs-floodlight', 5, 4],
  ],
  dt: [
    ['digital twin inspection reporting', '/digital-twin-reporting', 5, 4], ['digital twin reporting software', '/digital-twin-reporting', 5, 4],
    ['3d inspection reporting', '/digital-twin-reporting', 5, 4], ['ndt data visualization', '/digital-twin-reporting', 4, 4],
    ['inspection history management', '/digital-twin-reporting', 4, 4], ['digital twin erp integration', '/digital-twin-reporting', 4, 4],
    ['digital twins for ndt', '/digital-twins', 4, 4], ['asset integrity digital twin', '/digital-twins', 5, 3],
    ['asset integrity visualization', '/digital-twins', 4, 4], ['inspection data management system', '/digital-twins', 5, 3],
    ['cml management software', '/digital-twins', 5, 3], ['corrosion monitoring software', '/digital-twins', 4, 2],
    ['thickness monitoring software', '/digital-twins', 4, 3], ['digital twin for oil and gas', '/digital-twins', 4, 2],
    ['predix alternatives', '/compare/ge-predix-alternatives', 5, 4],
  ],
  sim: [
    ['ndt simulator', '/practical-ndt', 5, 4], ['ndt training simulator', '/practical-ndt', 5, 4],
    ['ultrasonic testing simulator', '/practical-ndt', 5, 4], ['ndt simulation software', '/practical-ndt', 5, 4],
    ['virtual ndt training', '/practical-ndt', 5, 4], ['ndt training software', '/practical-ndt', 5, 3],
    ['flaw detector simulator', '/practical-ndt', 5, 4], ['a-scan simulator', '/practical-ndt', 4, 4],
    ['phased array simulator', '/practical-ndt', 4, 3], ['radiography simulator', '/practical-ndt', 4, 3],
    ['eddy current simulator', '/practical-ndt', 4, 4], ['browser-based ndt practice', '/practical-ndt', 4, 5],
    ['ndt practice online', '/practical-ndt', 4, 4], ['vr ndt training', '/blog/vr-ndt-training-employer-business-case', 4, 3],
    ['ndt training simulator for schools', '/practical-ndt', 5, 4],
  ],
  training: [
    ['ndt training', '/training', 5, 2], ['ndt courses', '/training', 5, 2], ['ndt certification', '/asnt-certification', 4, 2],
    ['snt-tc-1a certification', '/asnt-certification', 4, 3], ['ndt training online', '/ndt-training-online', 5, 3],
    ['online ndt courses', '/ndt-training-online', 5, 3], ['blended ndt training', '/ndt-training-online', 5, 4],
    ['asnt level iii training', '/asnt-level-iii-training', 5, 3], ['asnt level iii exam prep', '/asnt-level-iii-training', 5, 3],
    ['ndt level 1 training', '/ndt-level-1-training', 5, 3], ['ndt level 2 training', '/ndt-level-2-training', 5, 3],
    ['ultrasonic testing training', '/ultrasonic-testing-training', 5, 3], ['ut level 2 training', '/ut-level-2-training', 5, 3],
    ['magnetic particle testing training', '/magnetic-particle-testing-training', 5, 4],
    ['liquid penetrant testing training', '/penetrant-testing-training', 5, 4], ['radiographic testing training', '/radiographic-testing-training', 5, 3],
    ['eddy current training', '/eddy-current-testing-training', 5, 4], ['corporate ndt training', '/corporate-ndt-training', 5, 4],
    ['on-site ndt training', '/corporate-ndt-training', 5, 4], ['ndt school', '/ndt-school', 4, 2],
  ],
  level3: [
    ['ndt level iii consulting', '/consulting/ndt-consulting-level-iii', 5, 4], ['asnt level iii consulting', '/consulting/ndt-consulting-level-iii', 5, 4],
    ['ndt level 3 consultant', '/consulting/ndt-consulting-level-iii', 5, 4], ['outsourced level iii', '/consulting/ndt-consulting-level-iii', 5, 4],
    ['ndt level iii services', '/consulting/ndt-consulting-level-iii', 5, 4], ['snt-tc-1a consulting', '/consulting/ndt-consulting-level-iii', 5, 4],
    ['nas 410 level 3 services', '/consulting/ndt-consulting-level-iii', 5, 4], ['personnel qualification support', '/consulting/ndt-consulting-level-iii', 4, 4],
    ['ndt written practice', '/consulting/written-practice-development', 4, 4], ['written practice development', '/consulting/written-practice-development', 5, 4],
    ['snt-tc-1a written practice', '/consulting/written-practice-development', 4, 4], ['cp-189 written practice', '/consulting/written-practice-development', 4, 5],
    ['ndt procedure development', '/consulting/ndt-technical-procedure-development', 5, 4],
    ['technique sheet', '/consulting/ndt-technical-procedure-development', 3, 4],
    ['nadcap audit preparation', '/consulting/level-iii-audit-support-aerospace', 5, 3],
  ],
  inspection: [
    ['ndt inspection services', '/inspection-services', 5, 3], ['third party inspection services', '/inspection-services', 5, 2],
    ['phased array ultrasonic testing services', '/inspection-services', 5, 3], ['tofd inspection', '/inspection-services', 4, 4],
    ['ultrasonic thickness measurement', '/inspection-services', 4, 4], ['corrosion mapping services', '/inspection-services', 5, 4],
    ['api 653 tank inspection services', '/consulting/api-653-tank-inspector-services', 5, 3],
    ['storage tank inspection services', '/consulting/api-653-tank-inspector-services', 5, 3],
    ['api 510 inspection services', '/consulting/api-510-pressure-vessel-inspector-services', 5, 4],
    ['pressure vessel inspection services', '/consulting/api-510-pressure-vessel-inspector-services', 5, 3],
    ['api 570 piping inspection', '/consulting/api-570-piping-inspector-services', 5, 4],
    ['ultrasonic testing services', '/ultrasonic-testing', 5, 3], ['radiographic testing services', '/radiographic-testing', 5, 3],
    ['magnetic particle testing services', '/magnetic-particle-testing', 5, 3], ['penetrant testing services', '/penetrant-testing', 5, 3],
  ],
};
const LABEL = { erp: 'NDT ERP', dt: 'Digital Twin Reporting', sim: 'Practical NDT Simulation', training: 'NDT Training', level3: 'Level III Consulting', inspection: 'Inspection Services' };

// Demand from the committed GSC snapshot. Sum rows; never collapse slash variants (§21.8) —
// this file is keyed by query, so there are none to collapse.
const rows = JSON.parse(readFileSync(join(ROOT, 'scripts/_audit-all-queries.json'), 'utf-8'));
const norm = (s) => String(s).toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
const Q = rows.map((r) => ({ q: norm(r.keys[0]), i: r.impressions, c: r.clicks, p: r.position }));
function demand(kw) {
  const k = norm(kw);
  const re = new RegExp(`(^| )${k.replace(/ /g, ' ')}( |$)`);
  const exact = Q.find((r) => r.q === k) || null;
  const fam = Q.filter((r) => re.test(r.q));
  const imp = fam.reduce((a, r) => a + r.i, 0);
  const clk = fam.reduce((a, r) => a + r.c, 0);
  const pos = imp ? fam.reduce((a, r) => a + r.p * r.i, 0) / imp : null;
  return { exact: exact && { impressions: exact.i, clicks: exact.c, position: +exact.p.toFixed(1) },
    family: { queries: fam.length, impressions: imp, clicks: clk, position: pos && +pos.toFixed(1) } };
}
const rankScore = (p) => (p == null ? 1 : p < 4 ? 3 : p <= 20 ? 5 : p <= 30 ? 4 : p <= 50 ? 3 : 2);
const demandScore = (i) => (i >= 1000 ? 5 : i >= 300 ? 4 : i >= 100 ? 3 : i >= 20 ? 2 : 1);

// Embedding check on the built owner page and the §50 anchors.
const pageText = new Map();
function textOf(path) {
  if (pageText.has(path)) return pageText.get(path);
  const f = join(ROOT, 'dist', path === '/' ? '' : path, 'index.html');
  const t = existsSync(f) ? norm(readFileSync(f, 'utf-8').replace(/<script[\s\S]*?<\/script>/g, ' ').replace(/<[^>]+>/g, ' ')) : null;
  pageText.set(path, t);
  return t;
}
const anchors = Object.values(KEYWORD_LINK_TARGETS).flatMap((t) => t.anchors.map((a) => [t.href, norm(a)]));

const out = [];
for (const [cat, list] of Object.entries(P)) {
  for (const [kw, page, intent, feas] of list) {
    const d = demand(kw);
    const pos = d.exact?.position ?? d.family.position;
    const imp = Math.max(d.exact?.impressions ?? 0, d.family.impressions);
    const s = { intent, relevance: 5, ranking: rankScore(pos), demand: demandScore(imp), feasibility: feas };
    const score = Math.round((s.intent * 30 + s.relevance * 25 + s.ranking * 20 + s.demand * 15 + s.feasibility * 10) / 5);
    const t = textOf(page);
    const k = norm(kw);
    out.push({ category: LABEL[cat], keyword: kw, landingPage: page, builtPage: t != null, onPage: t ? t.includes(k) : false,
      anchorToOwner: anchors.some(([h, a]) => h === page && a.includes(k)), gsc: d, scores: s, score,
      usVolume: null, difficulty: null });
  }
}
out.sort((a, b) => b.score - a.score);
const counts = Object.fromEntries(Object.values(LABEL).map((l) => [l, out.filter((r) => r.category === l).length]));
if (out.length !== 100) throw new Error(`keyword portfolio: expected 100 keywords, got ${out.length}`);
const missingPages = out.filter((r) => !r.builtPage);
writeFileSync(join(ROOT, 'scripts/keyword-portfolio-2026-10.json'), JSON.stringify({
  generated: new Date().toISOString().slice(0, 10), source: 'scripts/_audit-all-queries.json (GSC, global, ~2026-09-02)',
  weights: { intent: 30, relevance: 25, ranking: 20, demand: 15, feasibility: 10 }, counts, keywords: out }, null, 1));
console.log(`keyword portfolio: ${out.length} keywords`, counts);
console.log(`  on owner page: ${out.filter((r) => r.onPage).length}/100 · anchor to owner: ${out.filter((r) => r.anchorToOwner).length}/100 · pages missing: ${missingPages.map((r) => r.landingPage).join(', ') || 'none'}`);
for (const r of out.filter((r) => !r.onPage)) console.log(`  NOT ON PAGE  ${r.keyword}  →  ${r.landingPage}`);
