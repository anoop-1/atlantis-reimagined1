#!/usr/bin/env node
/**
 * Generate CTR_OVERRIDES entries for top opportunity pages identified by
 * round5-opportunities.json. Writes a new Object.assign block to
 * scripts/prerender.mjs immediately before the route-definition section.
 *
 * Title formula proven across 296 existing overrides:
 *   {Primary Keyword} {City/Year} — {Number/Proof} + {Code} | Free {CTA}
 *
 * Idempotent — checks for `// Round-5 CTR cascade` marker before re-injecting.
 */
import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const MARKER = '// === Round-5 CTR cascade — top opportunity pages ===';

const opps = JSON.parse(readFileSync(join(ROOT, 'scripts/round5-opportunities.json'), 'utf-8'));
const prerender = readFileSync(join(ROOT, 'scripts/prerender.mjs'), 'utf-8');

if (prerender.includes(MARKER)) {
  console.log('Round-5 CTR cascade already injected — skipping.');
  process.exit(0);
}

// Extract existing override keys
const existingPaths = new Set();
const ctrBlocks = prerender.matchAll(/Object\.assign\(CTR_OVERRIDES,\s*\{([\s\S]*?)\n\}\);/g);
for (const block of ctrBlocks) {
  const paths = [...block[1].matchAll(/['"]([^'"]+)['"]\s*:/g)].map(m => m[1]);
  paths.forEach(p => existingPaths.add(p));
}
const initial = prerender.match(/const CTR_OVERRIDES = \{([\s\S]*?)\n\};/);
if (initial) {
  const paths = [...initial[1].matchAll(/['"]([^'"]+)['"]\s*:/g)].map(m => m[1]);
  paths.forEach(p => existingPaths.add(p));
}

// Merge all opp pages, de-dup
const allOpps = [
  ...opps.tierA.pages,
  ...opps.tierB.pages,
  ...opps.tierC.pages,
  ...opps.tierD.pages,
  ...opps.tierE.pages,
];
const seen = new Set();
const uniqueOpps = [];
for (const p of allOpps) {
  if (!seen.has(p.page) && !existingPaths.has(p.page)) {
    seen.add(p.page);
    uniqueOpps.push(p);
  }
}

// Title generator per route family
function titleCase(slug) {
  return slug.split('-').map(w => {
    if (['and','of','the','in','on','for','vs','to'].includes(w)) return w;
    if (/^(ut|rt|mt|pt|et|vt|ndt|asnt|api|paut|tofd|cwi|aws|iso|nace|iacs|usa|uae|uk|ccs|lng|hrsg|fpso|hp|lp|rbi|ffs|cui|ecda|epc|asme|cp|snt|tc|nas|en|eemua|epri|astm|sssc|qms|hse|psm)$/i.test(w)) return w.toUpperCase();
    return w.charAt(0).toUpperCase() + w.slice(1);
  }).join(' ');
}

function genTitle(page) {
  const p = page;
  const s = p.replace(/\/+$/, '');

  // Method × city pattern
  let m = s.match(/^\/(ultrasonic|radiographic|magnetic-particle|penetrant|visual|eddy-current|acoustic-emission|guided-wave|tofd)-testing-([a-z-]+)$/);
  if (m) {
    const method = titleCase(m[1] + ' testing');
    const city = titleCase(m[2]);
    return {
      title: `${method} ${city} 2026 — ASNT Level III + Code-Aligned | Free Quote 24h`,
      description: `Atlantis NDT ${method} services in ${city} — ASNT Level III led, ASME V + API code-aligned, free 30-min consultation + tailored quote within 24h. 2026 cohort + on-site mobilisation.`,
    };
  }
  // 3D scanning city
  m = s.match(/^\/3d-scanning-([a-z-]+)$/);
  if (m && m[1] !== 'services') {
    const city = titleCase(m[1]);
    return {
      title: `3D Scanning ${city} 2026 — Survey-Grade LiDAR + Drone + BIM | Same-Day Quote`,
      description: `Atlantis NDT 3D scanning services in ${city}. Survey-grade LiDAR + photogrammetry + drone + BIM-ready models. ASNT Level III led. Free 30-min consultation + same-day quote.`,
    };
  }
  // Consulting city
  m = s.match(/^\/consulting\/ndt-consulting-([a-z-]+)$/);
  if (m) {
    const city = titleCase(m[1]);
    return {
      title: `NDT Consulting ${city} 2026 — ASNT Level III + API 581 RBI + 579 FFS | Free Consultation`,
      description: `Atlantis NDT consulting in ${city} — ASNT NDT Level III + API ICP certified. RBI per API 581, FFS per API 579, written-practice authoring, code consulting. Free 30-min consultation.`,
    };
  }
  // Training city
  m = s.match(/^\/ndt-training-([a-z-]+)$/);
  if (m) {
    const city = titleCase(m[1]);
    return {
      title: `NDT Training ${city} 2026 — 96% Pass, ASNT Level III-Led + Free Retake | Monthly Batches`,
      description: `Atlantis NDT training in ${city} — 96% first-attempt pass rate, ASNT Level III instructors, free retake-grade backstop. ASNT + ISO 9712 + API + AWS CWI + NACE CIP pathway. Monthly cohorts.`,
    };
  }
  // ERP city
  m = s.match(/^\/ndt-erp-([a-z-]+)$/);
  if (m) {
    const city = titleCase(m[1]);
    return {
      title: `Affordable NDT ERP ${city} 2026 — 30+ Odoo Apps + 96% Pass + ASNT III | Free Quote 24h`,
      description: `Atlantis NDT ERP for inspection companies in ${city}. Affordable + fully customizable. 30+ Odoo apps + ASNT/ISO 9712 cert tracking + RBI + calibration + invoicing. Free 24h quote.`,
    };
  }
  // DT city
  m = s.match(/^\/digital-twin-([a-z-]+)$/);
  if (m) {
    const city = titleCase(m[1]);
    return {
      title: `Digital Twin NDT ${city} 2026 — API 510/570/653 + RBI + FFS Integrated | Free Demo`,
      description: `Atlantis NDT Digital Twin platform in ${city} — 3D asset visualisation + API 510/570/653 + API 581 RBI + API 579 FFS integration. ASNT Level III authored. Free 30-min demo.`,
    };
  }
  // Compare pages
  m = s.match(/^\/compare\/(.+)$/);
  if (m) {
    const compTitle = titleCase(m[1]);
    return {
      title: `${compTitle} 2026 — Decision Matrix + ROI + Free Demo | Atlantis NDT`,
      description: `Atlantis NDT vs ${titleCase(m[1].replace(/^(atlantis-dt-vs-|vs-|odoo-vs-)/, ''))} — 8-dimension decision matrix, code coverage, ROI comparison, anonymised customer outcomes. Free 30-min demo.`,
    };
  }
  // Blog pages — derive from slug
  m = s.match(/^\/blog\/(.+)$/);
  if (m) {
    const topic = titleCase(m[1].replace(/-2026$|-2027$|-guide$|-explained$|-complete-guide$/g, ''));
    return {
      title: `${topic} 2026 — Atlantis NDT Level III Authored, Code-Aligned | Free Consultation`,
      description: `${topic} — authoritative guide by Atlantis NDT ASNT Level III practitioners. Code references, free consultation + tailored cert/consulting roadmap. 2026 updated.`,
    };
  }
  // Cert pages
  if (/^\/(asnt-certification|api-510-certification|api-570-certification|api-653-certification|api-580-certification)$/.test(s)) {
    const cert = s.replace('/', '').replace('-certification', '').toUpperCase();
    return {
      title: `${cert} Certification 2026 — Atlantis NDT 96% Pass Rate + ASNT Level III-Led | Free Schedule`,
      description: `${cert} certification with Atlantis NDT. ASNT NDT Level III-led training. 96% first-attempt pass rate. Free retake-grade backstop. 2026 monthly cohorts globally. Free 30-min consultation.`,
    };
  }
  // Generic fallback — slug-based
  const top = s.replace(/^\//, '').split('/')[0];
  return {
    title: `${titleCase(top)} 2026 — Atlantis NDT Level III-Led | Free Consultation + Quote 24h`,
    description: `Atlantis NDT ${titleCase(top)} services — affordable, accessible, fully customizable. ASNT NDT Level III-led delivery. Free 30-min consultation + tailored quote within 24h.`,
  };
}

const lines = [
  '',
  MARKER,
  `// ${uniqueOpps.length} top-opportunity pages identified by Phase 1 GSC audit.`,
  '// Title formula: {Primary KW} {City/Year} — {Proof} + {Code} | Free {CTA}',
  'Object.assign(CTR_OVERRIDES, {',
];
for (const p of uniqueOpps) {
  const { title, description } = genTitle(p.page);
  const escTitle = title.replace(/'/g, "\\'");
  const escDesc = description.replace(/'/g, "\\'");
  lines.push(`  '${p.page}': {`);
  lines.push(`    title: '${escTitle}',`);
  lines.push(`    description: '${escDesc}'`);
  lines.push(`  },`);
}
lines.push('});');
lines.push('');

const block = lines.join('\n');

// Insert before "// ─── Route Definitions" — same insertion point as Round-2/3
const insertMarker = '// ─── Route Definitions';
const idx = prerender.indexOf(insertMarker);
if (idx === -1) {
  console.error('Could not find route definitions insertion point — aborting.');
  process.exit(1);
}

const newPrerender = prerender.slice(0, idx) + block + '\n' + prerender.slice(idx);
writeFileSync(join(ROOT, 'scripts/prerender.mjs'), newPrerender, 'utf-8');

console.log(`Round-5 CTR cascade injected: ${uniqueOpps.length} new overrides`);
console.log(`Total overrides now: ${existingPaths.size + uniqueOpps.length}`);
