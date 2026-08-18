#!/usr/bin/env node
/**
 * 90-day traffic forecast model — 2026-08-18.
 * ─────────────────────────────────────────────────────────────────────────────
 * Turns the 90-day plan into arithmetic, so the 30,000 clicks/month target can
 * be argued about with numbers instead of adjectives.
 *
 * EVERY BASELINE HERE IS MEASURED, NOT ASSUMED. Sources, all GSC/GA4 pulls to
 * 2026-08-17 (see diag-traffic-2026-08-17.mjs and seg-deepdive-2026-08-18.mjs):
 *
 *   current impressions/month     160,493
 *   current clicks/month            2,415
 *   sitewide CTR                     1.40%
 *   CTR by position band   pos1-3 5.68% · 4-5 3.94% · 6-8 1.43% · 9-10 1.40%
 *                          11-15 1.28% · 16-20 0.80% · 21+ 0.72%
 *   impressions at pos 1-3            528  (0.3% of all)
 *   impressions at pos 6-8         68,343  (42.6% of all)
 *   yield: blog-class page          2.14 clicks/page/month
 *   yield: permutation page         0.06 clicks/page/month
 *   116 pages produce 80% of clicks, of ~5,000 published
 *
 * The assumptions are declared separately and every one is labelled with how
 * confident we should be in it. Change them at the top and re-run; the point of
 * the model is that the argument is inspectable rather than asserted.
 *
 *   node scripts/forecast-90day-2026-08-18.mjs
 *   node scripts/forecast-90day-2026-08-18.mjs --scenario aggressive
 *   node scripts/forecast-90day-2026-08-18.mjs --solve-for-30k
 */

const args = process.argv.slice(2);
const scenarioName = args.includes('--scenario') ? args[args.indexOf('--scenario') + 1] : 'base';
const solveFor30k = args.includes('--solve-for-30k');

// ─── MEASURED BASELINE (do not edit without a fresh pull) ────────────────────
const BASE = {
  impressionsPerMonth: 160493,
  clicksPerMonth: 2415,
  ctr: 0.0140,
  ctrByBand: { '1-3': 0.0568, '4-5': 0.0394, '6-8': 0.0143, '9-10': 0.0140, '11-15': 0.0128, '16-20': 0.0080, '21+': 0.0072 },
  imprByBand: { '1-3': 528, '4-5': 8989, '6-8': 68343, '9-10': 24494, '11-15': 22464, '16-20': 6897, '21+': 28778 },
  blogYieldPerPage: 2.14,      // clicks/page/month, mature
  permutationYield: 0.06,
};

// ─── ASSUMPTIONS ─────────────────────────────────────────────────────────────
// confidence: high = measured on this site; medium = industry-typical and
// consistent with this site's behaviour; low = genuinely uncertain, the model
// is sensitive to it, treat any result that depends on it as a hypothesis.
const SCENARIOS = {
  conservative: {
    label: 'Conservative — plan executes, nothing surprises us favourably',
    newDepthPagesPerMonth: 12,
    depthPageYield: 1.5,
    maturationMonths: 3,
    strikingDistanceCapture: 0.5,
    aeoImpressionLift: 0.00,
    ctrLiftFromAeo: 0.00,
    segmentLiftConsulting: 0.3,
    segmentLiftDtErp: 0.2,
  },
  base: {
    label: 'Base — plan executes as written, competitor gaps hold',
    newDepthPagesPerMonth: 20,
    depthPageYield: 2.14,
    maturationMonths: 3,
    strikingDistanceCapture: 0.75,
    aeoImpressionLift: 0.05,
    ctrLiftFromAeo: 0.10,
    segmentLiftConsulting: 0.6,
    segmentLiftDtErp: 0.4,
  },
  aggressive: {
    label: 'Aggressive — gaps convert fast and AEO work lands',
    newDepthPagesPerMonth: 30,
    depthPageYield: 3.0,
    maturationMonths: 2,
    strikingDistanceCapture: 1.0,
    aeoImpressionLift: 0.15,
    ctrLiftFromAeo: 0.25,
    segmentLiftConsulting: 1.0,
    segmentLiftDtErp: 0.8,
  },
};

const CONFIDENCE = {
  newDepthPagesPerMonth: ['medium', 'Publishing capacity. A real constraint on writer/SME time, not on Google.'],
  depthPageYield: ['high', 'Measured: blog-class pages return 2.14 clicks/page/month on this site.'],
  maturationMonths: ['medium', 'New pages on a domain with 2,446 unindexed URLs take longer than usual to rank. 3 months is not pessimistic here.'],
  strikingDistanceCapture: ['high', 'The 38-page pos 4-15 queue models to +262 clicks/month at full capture; this is the fraction achieved.'],
  aeoImpressionLift: ['low', 'Whether AI-citation work returns impressions at all is unproven. Glossary just lost 82% to AI Overviews with positions unchanged.'],
  ctrLiftFromAeo: ['low', 'Recovering CTR against AI Overviews is the least certain lever in the plan. Could plausibly be zero.'],
  segmentLiftConsulting: ['medium', 'Consulting holds 630 impressions on commercial queries at pos 44-63. Real headroom, but from a very low base.'],
  segmentLiftDtErp: ['low', 'DT and ERP currently capture almost no real query at all — their top "queries" are the brand and site: operator. This is closer to a launch than a lift.'],
};

const S = SCENARIOS[scenarioName] || SCENARIOS.base;

// ─── MODEL ───────────────────────────────────────────────────────────────────
/**
 * A page published in month M contributes nothing until it is indexed and has
 * matured. Modelled as a linear ramp across maturationMonths rather than a step,
 * because that is how the site's own cohorts have behaved.
 */
function maturedFraction(monthsLive, maturationMonths) {
  if (monthsLive <= 0) return 0;
  return Math.min(1, monthsLive / maturationMonths);
}

function runModel(s, months = 3) {
  const rows = [];
  let cumulativeDepthPages = 0;

  for (let m = 1; m <= months; m++) {
    cumulativeDepthPages += s.newDepthPagesPerMonth;

    // 1. New depth pages, each ramping in over maturationMonths.
    let depthClicks = 0;
    for (let cohort = 1; cohort <= m; cohort++) {
      const monthsLive = m - cohort + 1;
      depthClicks += s.newDepthPagesPerMonth * s.depthPageYield * maturedFraction(monthsLive, s.maturationMonths);
    }

    // 2. Striking-distance promotions. Front-loaded: it is existing pages that
    //    already rank, so it lands faster than new content.
    const sdRamp = Math.min(1, m / 2);
    const strikingClicks = 262 * s.strikingDistanceCapture * sdRamp;

    // 3. Segment lifts, applied to each segment's own measured baseline.
    const consultingBase = 17, dtBase = 11, erpBase = 4, reportingBase = 8;
    const segRamp = Math.min(1, m / 3);
    const segmentClicks =
      consultingBase * s.segmentLiftConsulting * segRamp +
      (dtBase + erpBase + reportingBase) * s.segmentLiftDtErp * segRamp;

    // 4. AEO: lifts impressions on existing pages and partially restores CTR.
    const aeoRamp = Math.min(1, m / 3);
    const aeoImpressions = BASE.impressionsPerMonth * s.aeoImpressionLift * aeoRamp;
    const baselineCtrLifted = BASE.ctr * (1 + s.ctrLiftFromAeo * aeoRamp);
    const baseClicksLifted = BASE.impressionsPerMonth * baselineCtrLifted;
    const aeoClicks = aeoImpressions * baselineCtrLifted;

    const total = baseClicksLifted + depthClicks + strikingClicks + segmentClicks + aeoClicks;

    rows.push({
      month: m,
      baseline: Math.round(baseClicksLifted),
      depth: Math.round(depthClicks),
      striking: Math.round(strikingClicks),
      segments: Math.round(segmentClicks),
      aeo: Math.round(aeoClicks),
      total: Math.round(total),
      newPages: cumulativeDepthPages,
    });
  }
  return rows;
}

// ─── OUTPUT ──────────────────────────────────────────────────────────────────
console.log('\n═══ 90-DAY FORECAST — atlantisndt.com ═══');
console.log(`Scenario: ${scenarioName} — ${S.label}\n`);
console.log(`Measured baseline: ${BASE.clicksPerMonth.toLocaleString()} clicks/month from ${BASE.impressionsPerMonth.toLocaleString()} impressions at ${(BASE.ctr * 100).toFixed(2)}% CTR\n`);

console.log('ASSUMPTIONS');
for (const [k, v] of Object.entries(S)) {
  if (k === 'label') continue;
  const [conf, why] = CONFIDENCE[k] || ['?', ''];
  console.log(`  ${k.padEnd(26)} ${String(v).padStart(6)}   [${conf.toUpperCase()}] ${why}`);
}

console.log('\nMONTH-BY-MONTH (clicks/month)');
console.log('  month  baseline   depth  striking  segments    aeo     TOTAL   new pages');
const rows = runModel(S);
for (const r of rows) {
  console.log(`  ${String(r.month).padStart(5)}  ${String(r.baseline).padStart(8)} ${String(r.depth).padStart(7)} ${String(r.striking).padStart(9)} ${String(r.segments).padStart(9)} ${String(r.aeo).padStart(6)} ${String(r.total).padStart(9)} ${String(r.newPages).padStart(11)}`);
}

const end = rows[rows.length - 1];
const growth = ((end.total - BASE.clicksPerMonth) / BASE.clicksPerMonth) * 100;
console.log(`\n  Day-90 run rate: ${end.total.toLocaleString()} clicks/month  (${growth > 0 ? '+' : ''}${growth.toFixed(0)}% vs today)`);
console.log(`  Target:          30,000 clicks/month`);
console.log(`  Shortfall:       ${Math.max(0, 30000 - end.total).toLocaleString()} clicks/month  —  ${(30000 / end.total).toFixed(1)}x further to go`);

// ─── WHAT WOULD 30k ACTUALLY REQUIRE? ────────────────────────────────────────
if (solveFor30k || true) {
  console.log('\n═══ WHAT 30,000 CLICKS/MONTH ACTUALLY REQUIRES ═══\n');

  const atCurrentCtr = 30000 / BASE.ctr;
  console.log(`  Route A — volume only, CTR unchanged at ${(BASE.ctr * 100).toFixed(2)}%:`);
  console.log(`     needs ${Math.round(atCurrentCtr).toLocaleString()} impressions/month  (${(atCurrentCtr / BASE.impressionsPerMonth).toFixed(1)}x today)`);
  console.log(`     at ${BASE.blogYieldPerPage} clicks/page/month that is ${Math.round(30000 / BASE.blogYieldPerPage).toLocaleString()} mature depth pages.`);
  console.log(`     At 20 pages/month that is ${Math.round((30000 / BASE.blogYieldPerPage) / 20 / 12)} years. Route A alone does not work.\n`);

  for (const targetCtr of [0.03, 0.05, 0.08]) {
    const needImpr = 30000 / targetCtr;
    console.log(`  Route B — CTR raised to ${(targetCtr * 100).toFixed(0)}% (top-3 presence + AI citation):`);
    console.log(`     needs ${Math.round(needImpr).toLocaleString()} impressions/month  (${(needImpr / BASE.impressionsPerMonth).toFixed(1)}x today)`);
  }

  console.log('\n  The honest read: 30,000/month is a CTR problem before it is a volume problem.');
  console.log('  Today 0.3% of impressions sit at position 1-3. Moving the 68,343 impressions');
  console.log('  parked at position 6-8 into the top 3 is worth roughly');
  const move = 68343 * (BASE.ctrByBand['1-3'] - BASE.ctrByBand['6-8']);
  console.log(`  +${Math.round(move).toLocaleString()} clicks/month on its own — more than the site's entire current output —`);
  console.log('  and that is before a single new page is written.');
  console.log('\n  Note the ceiling this exposes: even at position 1-3 this site earns 5.68%,');
  console.log('  against ~20% normal. Until that gap closes, every volume forecast is');
  console.log('  multiplied by a broken number. That is why AI-citation work is not a');
  console.log('  nice-to-have in this plan — it is the lever on the multiplier.');
}

console.log('\n═══ ALL SCENARIOS, DAY-90 RUN RATE ═══');
for (const [name, sc] of Object.entries(SCENARIOS)) {
  const r = runModel(sc);
  const t = r[r.length - 1].total;
  console.log(`  ${name.padEnd(14)} ${String(t.toLocaleString()).padStart(8)} clicks/month   ${(t / BASE.clicksPerMonth).toFixed(1)}x today   ${((t / 30000) * 100).toFixed(0)}% of target`);
}
console.log();
