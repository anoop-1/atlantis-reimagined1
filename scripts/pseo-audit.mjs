#!/usr/bin/env node
/**
 * pSEO Audit — 2026-05-09
 *
 * 1. Replays the programmatic SEO route-generation logic from prerender.mjs
 *    (mirrored locally so we don't run the whole prerender pipeline).
 * 2. Looks each route up in scripts/gsc-audit-2026-04.json (90d window).
 * 3. Writes:
 *      scripts/pseo-route-inventory-2026-05-09.json
 *      scripts/pseo-audit-report-2026-05-09.md
 *      scripts/pseo-noindex-list.json
 *      scripts/pseo-improvement-targets.json
 *
 * NOTE: The route-generation arrays below are kept in sync with prerender.mjs
 * (lines 2435-2740). If those source-of-truth arrays change, re-run this
 * script to refresh the audit.
 */

import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');

const advancedMethodSlugs = [
  { slug: 'paut-inspection', name: 'Phased Array UT (PAUT) Inspection', shortName: 'PAUT' },
  { slug: 'tofd-inspection', name: 'TOFD Inspection', shortName: 'TOFD' },
  { slug: 'guided-wave-inspection', name: 'Guided Wave Testing', shortName: 'GWT' },
  { slug: 'acoustic-emission-inspection', name: 'Acoustic Emission Testing', shortName: 'AET' },
  { slug: 'mfl-inspection', name: 'Magnetic Flux Leakage Testing', shortName: 'MFL' },
];

// Pretty city names — extracted from prerender.mjs allCitySlugs definition
const cityNameMap = {
  'new-york': 'New York', 'boston': 'Boston', 'atlanta': 'Atlanta', 'miami': 'Miami',
  'washington-dc': 'Washington DC', 'nashville': 'Nashville', 'minneapolis': 'Minneapolis',
  'cleveland': 'Cleveland', 'baltimore': 'Baltimore', 'tampa': 'Tampa', 'charlotte': 'Charlotte',
  'indianapolis': 'Indianapolis', 'san-diego': 'San Diego', 'portland': 'Portland',
  'salt-lake-city': 'Salt Lake City', 'kansas-city': 'Kansas City', 'st-louis': 'St. Louis',
  'milwaukee': 'Milwaukee', 'cincinnati': 'Cincinnati', 'jacksonville': 'Jacksonville',
  'houston': 'Houston', 'los-angeles': 'Los Angeles', 'new-orleans': 'New Orleans',
  'denver': 'Denver', 'chicago': 'Chicago', 'seattle': 'Seattle', 'dallas': 'Dallas',
  'phoenix': 'Phoenix', 'philadelphia': 'Philadelphia', 'san-francisco': 'San Francisco',
  'detroit': 'Detroit', 'pittsburgh': 'Pittsburgh', 'baton-rouge': 'Baton Rouge',
  'corpus-christi': 'Corpus Christi', 'tulsa': 'Tulsa', 'beaumont': 'Beaumont',
  'dubai': 'Dubai', 'saudi-arabia': 'Saudi Arabia', 'qatar': 'Qatar', 'kuwait': 'Kuwait',
  'abu-dhabi': 'Abu Dhabi', 'bahrain': 'Bahrain', 'oman': 'Oman', 'jubail': 'Jubail',
  'yanbu': 'Yanbu', 'dammam': 'Dammam', 'mumbai': 'Mumbai', 'chennai': 'Chennai',
  'bangalore': 'Bangalore', 'delhi': 'Delhi', 'kolkata': 'Kolkata', 'ahmedabad': 'Ahmedabad',
  'jamnagar': 'Jamnagar', 'vizag': 'Vizag', 'kochi': 'Kochi', 'singapore': 'Singapore',
  'malaysia': 'Malaysia', 'indonesia': 'Indonesia', 'thailand': 'Thailand', 'vietnam': 'Vietnam',
  'south-korea': 'South Korea', 'japan': 'Japan', 'taiwan': 'Taiwan', 'australia': 'Australia',
  'perth': 'Perth', 'melbourne': 'Melbourne', 'sydney': 'Sydney', 'uk': 'UK', 'norway': 'Norway',
  'germany': 'Germany', 'netherlands': 'Netherlands', 'france': 'France', 'italy': 'Italy',
  'spain': 'Spain', 'aberdeen': 'Aberdeen', 'rotterdam': 'Rotterdam', 'stavanger': 'Stavanger',
  'calgary': 'Calgary', 'edmonton': 'Edmonton', 'toronto': 'Toronto', 'vancouver': 'Vancouver',
  'brazil': 'Brazil', 'sao-paulo': 'São Paulo', 'rio-de-janeiro': 'Rio de Janeiro',
  'trinidad': 'Trinidad', 'nigeria': 'Nigeria', 'lagos': 'Lagos', 'south-africa': 'South Africa',
  'johannesburg': 'Johannesburg', 'egypt': 'Egypt', 'angola': 'Angola', 'colombia': 'Colombia',
  'bogota': 'Bogotá', 'lima': 'Lima', 'santiago': 'Santiago', 'mexico-city': 'Mexico City',
  'argentina': 'Argentina', 'buenos-aires': 'Buenos Aires', 'beijing': 'Beijing',
  'shanghai': 'Shanghai', 'hong-kong': 'Hong Kong', 'manila': 'Manila', 'jakarta': 'Jakarta',
  'bangkok': 'Bangkok', 'hyderabad': 'Hyderabad', 'london': 'London', 'riyadh': 'Riyadh',
  'doha': 'Doha', 'kuala-lumpur': 'Kuala Lumpur',
};

const allCitySlugs = [
  { slug: 'new-york' }, { slug: 'boston' }, { slug: 'atlanta' }, { slug: 'miami' },
  { slug: 'washington-dc' }, { slug: 'nashville' }, { slug: 'minneapolis' }, { slug: 'cleveland' },
  { slug: 'baltimore' }, { slug: 'tampa' }, { slug: 'charlotte' }, { slug: 'indianapolis' },
  { slug: 'san-diego' }, { slug: 'portland' }, { slug: 'salt-lake-city' }, { slug: 'kansas-city' },
  { slug: 'st-louis' }, { slug: 'milwaukee' }, { slug: 'cincinnati' }, { slug: 'jacksonville' },
  { slug: 'houston' }, { slug: 'los-angeles' }, { slug: 'new-orleans' }, { slug: 'denver' },
  { slug: 'chicago' }, { slug: 'seattle' }, { slug: 'dallas' }, { slug: 'phoenix' },
  { slug: 'philadelphia' }, { slug: 'san-francisco' }, { slug: 'detroit' }, { slug: 'pittsburgh' },
  { slug: 'baton-rouge' }, { slug: 'corpus-christi' }, { slug: 'tulsa' }, { slug: 'beaumont' },
  { slug: 'dubai' }, { slug: 'saudi-arabia' }, { slug: 'qatar' }, { slug: 'kuwait' },
  { slug: 'abu-dhabi' }, { slug: 'bahrain' }, { slug: 'oman' }, { slug: 'jubail' },
  { slug: 'yanbu' }, { slug: 'dammam' }, { slug: 'mumbai' }, { slug: 'chennai' },
  { slug: 'bangalore' }, { slug: 'delhi' }, { slug: 'kolkata' }, { slug: 'ahmedabad' },
  { slug: 'jamnagar' }, { slug: 'vizag' }, { slug: 'kochi' }, { slug: 'singapore' },
  { slug: 'malaysia' }, { slug: 'indonesia' }, { slug: 'thailand' }, { slug: 'vietnam' },
  { slug: 'south-korea' }, { slug: 'japan' }, { slug: 'taiwan' }, { slug: 'australia' },
  { slug: 'perth' }, { slug: 'melbourne' }, { slug: 'sydney' }, { slug: 'uk' },
  { slug: 'norway' }, { slug: 'germany' }, { slug: 'netherlands' }, { slug: 'france' },
  { slug: 'italy' }, { slug: 'spain' }, { slug: 'aberdeen' }, { slug: 'rotterdam' },
  { slug: 'stavanger' }, { slug: 'calgary' }, { slug: 'edmonton' }, { slug: 'toronto' },
  { slug: 'vancouver' }, { slug: 'brazil' }, { slug: 'sao-paulo' }, { slug: 'rio-de-janeiro' },
  { slug: 'trinidad' }, { slug: 'nigeria' }, { slug: 'lagos' }, { slug: 'south-africa' },
  { slug: 'johannesburg' }, { slug: 'egypt' }, { slug: 'angola' }, { slug: 'colombia' },
  { slug: 'bogota' }, { slug: 'lima' }, { slug: 'santiago' }, { slug: 'mexico-city' },
  { slug: 'argentina' }, { slug: 'buenos-aires' }, { slug: 'beijing' }, { slug: 'shanghai' },
  { slug: 'hong-kong' }, { slug: 'manila' }, { slug: 'jakarta' }, { slug: 'bangkok' },
];

const top100 = allCitySlugs.slice(0, 100);
const top40  = allCitySlugs.slice(0, 40);
const top50  = allCitySlugs.slice(0, 50);
const top20  = allCitySlugs.slice(0, 20);

const industrySlugs = [
  { slug: 'oil-gas-ndt', name: 'Oil & Gas NDT Services' },
  { slug: 'aerospace-ndt', name: 'Aerospace NDT Services' },
  { slug: 'power-generation-ndt', name: 'Power Generation NDT Services' },
  { slug: 'pipeline-ndt', name: 'Pipeline NDT Inspection' },
  { slug: 'marine-ndt', name: 'Marine & Offshore NDT Services' },
  { slug: 'petrochemical-ndt', name: 'Petrochemical NDT Services' },
  { slug: 'construction-ndt', name: 'Construction NDT Services' },
  { slug: 'manufacturing-ndt', name: 'Manufacturing NDT Services' },
];

const inspectionSlugs = [
  { slug: 'weld-inspection-services', name: 'Weld Inspection Services' },
  { slug: 'tank-inspection-services', name: 'Tank Inspection Services' },
  { slug: 'pipeline-inspection-services', name: 'Pipeline Inspection Services' },
  { slug: 'corrosion-inspection-services', name: 'Corrosion Inspection Services' },
];

const certSlugs = [
  { slug: 'api-510-training', name: 'API 510 Certification Training' },
  { slug: 'api-570-training', name: 'API 570 Certification Training' },
  { slug: 'api-653-training', name: 'API 653 Certification Training' },
  { slug: 'asnt-level-iii-training', name: 'ASNT Level III Training' },
  { slug: 'cwi-training', name: 'CWI Certification Training' },
];

const caseStudies = [
  { slug: 'gulf-coast-refinery-ndt-program' },
  { slug: 'adnoc-offshore-pipeline-inspection' },
  { slug: 'aerospace-ndt-qualification-program' },
  { slug: 'pipeline-fitness-for-service' },
  { slug: 'digital-twin-refinery-implementation' },
  { slug: 'storage-tank-api-653-program' },
  { slug: 'petrochemical-turnaround-ndt' },
  { slug: 'power-plant-boiler-inspection' },
  { slug: 'lng-terminal-cryogenic-inspection' },
  { slug: 'india-refinery-training-program' },
];

const globalTrainingCities = [
  'dubai', 'abu-dhabi', 'mumbai', 'hyderabad', 'bangalore', 'chennai', 'perth',
  'calgary', 'aberdeen', 'london', 'riyadh', 'doha', 'kuala-lumpur',
  'lagos', 'johannesburg', 'sao-paulo', 'mexico-city', 'rotterdam',
];
const globalTrainingExisting = ['houston', 'new-york', 'los-angeles', 'chicago',
  'denver', 'new-orleans', 'dallas', 'philadelphia', 'pittsburgh', 'atlanta'];

// ─── Build inventory ──────────────────────────────────────────────────────

const inventory = [];

const cityName = slug => cityNameMap[slug] || slug;

advancedMethodSlugs.forEach(method => {
  top100.forEach(city => {
    const cn = cityName(city.slug);
    inventory.push({
      path: `/services/${method.slug}-${city.slug}`,
      pattern: 'services/<advanced-method>-<city>',
      method: method.slug,
      city: city.slug,
      title: `${method.name} in ${cn} | ${method.shortName} Services | Atlantis NDT`,
    });
  });
});

industrySlugs.forEach(industry => {
  top40.forEach(city => {
    const cn = cityName(city.slug);
    inventory.push({
      path: `/industry/${industry.slug}-${city.slug}`,
      pattern: 'industry/<industry>-<city>',
      method: industry.slug,
      city: city.slug,
      title: `${industry.name} in ${cn} | NDT Inspection | Atlantis NDT`,
    });
  });
});

inspectionSlugs.forEach(service => {
  top50.forEach(city => {
    const cn = cityName(city.slug);
    inventory.push({
      path: `/inspection/${service.slug}-${city.slug}`,
      pattern: 'inspection/<service>-<city>',
      method: service.slug,
      city: city.slug,
      title: `${service.name} in ${cn} | NDT Inspection | Atlantis NDT`,
    });
  });
});

certSlugs.forEach(cert => {
  top20.forEach(city => {
    const cn = cityName(city.slug);
    inventory.push({
      path: `/training/${cert.slug}-${city.slug}`,
      pattern: 'training/<cert>-<city>',
      method: cert.slug,
      city: city.slug,
      title: `${cert.name} in ${cn} | Atlantis NDT`,
    });
  });
});

caseStudies.forEach(cs => {
  inventory.push({
    path: `/case-studies/${cs.slug}`,
    pattern: 'case-studies/<slug>',
    method: 'case-study',
    city: null,
    title: `(case study) ${cs.slug}`,
  });
});

globalTrainingCities.forEach(slug => {
  if (globalTrainingExisting.includes(slug)) return;
  const cn = cityName(slug);
  inventory.push({
    path: `/ndt-training-${slug}`,
    pattern: 'ndt-training-<city>',
    method: 'ndt-training',
    city: slug,
    title: `NDT Training ${cn} | ASNT Level I-III Certification | Atlantis NDT`,
  });
});

console.log(`Inventory size: ${inventory.length}`);

// ─── Load GSC data ────────────────────────────────────────────────────────

const gsc = JSON.parse(
  readFileSync(join(ROOT, 'scripts/gsc-audit-2026-04.json'), 'utf-8')
);
const pages90d = gsc.sites['https://atlantisndt.com']['90d'].pages;

const pageMap = new Map();
for (const p of pages90d) {
  pageMap.set(p.page, p);
  // Also try without trailing slash + with trailing slash to be tolerant.
  if (p.page.endsWith('/') && p.page.length > 1) {
    pageMap.set(p.page.slice(0, -1), p);
  } else if (!p.page.endsWith('/')) {
    pageMap.set(p.page + '/', p);
  }
}

// ─── Score each route ─────────────────────────────────────────────────────

function categorize(p) {
  if (!p) return 'never_indexed';
  const c = p.clicks || 0;
  const i = p.impressions || 0;
  if (c >= 1 || i >= 50) return 'winner';
  if (i >= 5) return 'promising';
  return 'dead';
}

const scored = inventory.map(item => {
  const gscData = pageMap.get(item.path) || null;
  const status = categorize(gscData);
  return {
    ...item,
    status,
    clicks: gscData?.clicks ?? 0,
    impressions: gscData?.impressions ?? 0,
    ctr: gscData?.ctr ?? 0,
    position: gscData?.position ?? null,
  };
});

const counts = scored.reduce((acc, s) => {
  acc[s.status] = (acc[s.status] || 0) + 1;
  return acc;
}, {});

console.log('Counts:', counts);

// ─── Pattern analysis ─────────────────────────────────────────────────────

const patternStats = {};
for (const s of scored) {
  if (!patternStats[s.pattern]) {
    patternStats[s.pattern] = {
      total: 0, winner: 0, promising: 0, dead: 0, never_indexed: 0,
      totalClicks: 0, totalImpressions: 0,
    };
  }
  const ps = patternStats[s.pattern];
  ps.total++;
  ps[s.status]++;
  ps.totalClicks += s.clicks;
  ps.totalImpressions += s.impressions;
}

// ─── Write inventory file ─────────────────────────────────────────────────

writeFileSync(
  join(ROOT, 'scripts/pseo-route-inventory-2026-05-09.json'),
  JSON.stringify({
    generated: new Date().toISOString(),
    total: inventory.length,
    routes: inventory,
  }, null, 2),
  'utf-8'
);

// ─── Write noindex list (dead pages — <5 impressions) ─────────────────────
// These pages get noindex,follow so Google drops them from SERP without
// breaking internal links. NEVER_INDEXED routes are excluded — Google has
// not even seen them yet, so noindexing is premature.

const noindexList = scored
  .filter(s => s.status === 'dead')
  .map(s => s.path)
  .sort();

writeFileSync(
  join(ROOT, 'scripts/pseo-noindex-list.json'),
  JSON.stringify({
    generated: new Date().toISOString(),
    description: 'pSEO routes with <5 impressions over 90d (GSC). Apply noindex,follow.',
    count: noindexList.length,
    paths: noindexList,
  }, null, 2),
  'utf-8'
);

// ─── Write improvement targets (impressions but 0 clicks) ─────────────────

const improvementTargets = scored
  .filter(s => s.impressions > 0 && s.clicks === 0)
  .sort((a, b) => b.impressions - a.impressions)
  .map(s => ({
    path: s.path,
    pattern: s.pattern,
    impressions: s.impressions,
    position: s.position,
    currentTitle: s.title,
    suggestedAction: s.position && s.position <= 20
      ? 'Rewrite title + meta description for higher CTR (page is on page 1-2)'
      : 'Boost on-page content depth + internal links — page is too deep to convert without rank improvement',
  }));

writeFileSync(
  join(ROOT, 'scripts/pseo-improvement-targets.json'),
  JSON.stringify({
    generated: new Date().toISOString(),
    description: 'pSEO routes with impressions > 0 but clicks = 0 over 90d. CTR rewrites needed.',
    count: improvementTargets.length,
    targets: improvementTargets,
  }, null, 2),
  'utf-8'
);

// ─── Build report ─────────────────────────────────────────────────────────

const winners = scored
  .filter(s => s.status === 'winner')
  .sort((a, b) => (b.clicks - a.clicks) || (b.impressions - a.impressions));

const deadButImpressed = scored
  .filter(s => s.status !== 'winner' && s.impressions > 0)
  .sort((a, b) => b.impressions - a.impressions);

const fmtNum = n => (n == null ? '–' : Number(n).toFixed(n < 10 ? 2 : 1));

const lines = [];
lines.push('# pSEO Audit Report — 2026-05-09');
lines.push('');
lines.push(`Generated: ${new Date().toISOString()}`);
lines.push(`Source: scripts/gsc-audit-2026-04.json (atlantisndt.com 90d window)`);
lines.push('');
lines.push('## Summary');
lines.push('');
lines.push(`- **Total pSEO routes inventoried:** ${inventory.length}`);
lines.push(`- **WINNER (≥1 click OR ≥50 impressions):** ${counts.winner || 0}`);
lines.push(`- **PROMISING (5-49 impressions):** ${counts.promising || 0}`);
lines.push(`- **DEAD (<5 impressions):** ${counts.dead || 0}`);
lines.push(`- **NEVER INDEXED (not in GSC at all):** ${counts.never_indexed || 0}`);
lines.push('');
lines.push('## Pattern Analysis');
lines.push('');
lines.push('| Pattern | Total | Winners | Promising | Dead | Never-indexed | Total Clicks | Total Impressions |');
lines.push('|---|---:|---:|---:|---:|---:|---:|---:|');
for (const [pattern, ps] of Object.entries(patternStats).sort((a, b) => b[1].totalClicks - a[1].totalClicks)) {
  lines.push(`| \`${pattern}\` | ${ps.total} | ${ps.winner} | ${ps.promising} | ${ps.dead} | ${ps.never_indexed} | ${ps.totalClicks} | ${ps.totalImpressions} |`);
}
lines.push('');

lines.push(`## Top ${Math.min(20, winners.length)} Winners`);
lines.push('');
lines.push('| Path | Clicks | Impressions | Position |');
lines.push('|---|---:|---:|---:|');
for (const w of winners.slice(0, 20)) {
  lines.push(`| ${w.path} | ${w.clicks} | ${w.impressions} | ${fmtNum(w.position)} |`);
}
lines.push('');

lines.push('## Top 20 Underperformers (impressions but few/no clicks — CTR fixes, not deletes)');
lines.push('');
lines.push('| Path | Clicks | Impressions | Position |');
lines.push('|---|---:|---:|---:|');
for (const d of deadButImpressed.slice(0, 20)) {
  lines.push(`| ${d.path} | ${d.clicks} | ${d.impressions} | ${fmtNum(d.position)} |`);
}
lines.push('');

// Pattern-level recommendations
lines.push('## Recommendations');
lines.push('');
const sortedPatterns = Object.entries(patternStats)
  .map(([p, ps]) => ({ p, ...ps, deadPct: ps.dead / ps.total }))
  .sort((a, b) => b.deadPct - a.deadPct);

for (const ps of sortedPatterns) {
  const pct = (ps.deadPct * 100).toFixed(0);
  if (ps.deadPct >= 0.8) {
    lines.push(`- **\`${ps.p}\` is ${pct}% dead** (${ps.dead}/${ps.total}). Apply noindex,follow to dead URLs (already in pseo-noindex-list.json). Consider trimming city list to top-impression cities only on next regeneration.`);
  } else if (ps.deadPct >= 0.5) {
    lines.push(`- **\`${ps.p}\` is ${pct}% dead** (${ps.dead}/${ps.total}). Mixed performance — keep template, prune obvious dead cities.`);
  } else {
    lines.push(`- \`${ps.p}\` is ${pct}% dead (${ps.dead}/${ps.total}). Healthy template — invest in CTR rewrites for impressed pages.`);
  }
}
lines.push('');
lines.push(`- **${noindexList.length} URLs** added to \`pseo-noindex-list.json\` for noindex,follow injection.`);
lines.push(`- **${improvementTargets.length} URLs** in \`pseo-improvement-targets.json\` need title/description rewrites (impressions > 0, clicks = 0).`);
lines.push('');

writeFileSync(
  join(ROOT, 'scripts/pseo-audit-report-2026-05-09.md'),
  lines.join('\n'),
  'utf-8'
);

console.log('\nDeliverables written:');
console.log('  scripts/pseo-route-inventory-2026-05-09.json');
console.log('  scripts/pseo-audit-report-2026-05-09.md');
console.log('  scripts/pseo-noindex-list.json');
console.log('  scripts/pseo-improvement-targets.json');
console.log(`\nWinners: ${counts.winner || 0}`);
console.log(`Promising: ${counts.promising || 0}`);
console.log(`Dead: ${counts.dead || 0}`);
console.log(`Never indexed: ${counts.never_indexed || 0}`);
