/**
 * CTR wave 7 — 2026-09-02. Snippet truncation on the blog cohort.
 * ─────────────────────────────────────────────────────────────────────────────
 * WHY THIS WAVE EXISTS WHEN WAVE 6 CONCLUDED SNIPPET WORK WAS FINISHED
 *
 * Wave 6 declined to rewrite snippets on the grounds that CTR was suppressed
 * 4-6x at *every* position band, and that a uniform depression across the whole
 * curve is not a snippet defect. The reasoning was sound; the premise was not.
 * Measuring CTR by position band PER SECTION on the 90-day pull to 2026-09-01
 * shows the depression is not uniform at all:
 *
 *                    pos 3-6   pos 6-10   pos 10-20   impressions
 *   Training           6.12%      3.65%       3.25%        16,895
 *   3D scanning        6.86%      4.64%       2.43%        12,838
 *   Consulting         2.02%      3.25%       3.33%         4,174
 *   Blog               1.31%      1.51%       1.00%       291,810
 *   Glossary           1.01%      0.82%       0.32%        16,141
 *
 * Training earns 4.7x the blog's CTR in the same band, on the same site, under
 * the same brand and the same SERP features. Whatever suppresses the blog is
 * specific to the blog, and the blog holds 73% of all site impressions.
 *
 * WHAT THE DEFECT ACTUALLY IS
 * Not wording — geometry. Every bleeder below carries a description of 212-270
 * characters against a Google display limit near 155, and a title of 66-81
 * against a limit near 60. Both truncate, and both spend their visible portion
 * on setup rather than payoff:
 *
 *   /blog/ndt-salary-guide-2026-global     54,295i  pos 5.9  CTR 0.83%
 *     T(78) "NDT Technician and Inspector Salary — What Each Level Actually
 *            Pays, by Region"                          <- "by Region" cut
 *     D(251) "Real pay ranges for NDT Level I, II and III and for API inspectors
 *            across the Gulf, India, the US, Europe and Australia — plus which
 *            methods and certifications move a band the..."   <- payoff cut
 *
 * The control is on the same site. The one blog page with healthy CTR is
 * /blog/ut-level-2-practice-questions at 6.32%, and it is the one blog page
 * with a 68-character title and a 153-character description that displays whole:
 * "Free Mock Exam (50+ Questions)" is visible, not truncated away.
 *
 * Training's descriptions are long too, and still perform — because they front-
 * load. "ADNOC + DUBAL + Emirates Steel aligned. UT, RT, MT, PT, ET, VT, PAUT,
 * TOFD. ASNT + ISO 9712 + PCN. 96% pass" is all inside the first 155 characters.
 * So the rule this wave applies is not "write shorter", it is "put the specific
 * thing the searcher wants inside the visible window".
 *
 * SIZE OF THE PRIZE
 * 19 blog pages clear a 60-click threshold if they reach the training-band CTR:
 * +6,600 clicks/90d against a current site total of 6,138. The salary guide
 * alone accounts for +2,828 of that, because 54,295 impressions at 0.83% is the
 * largest single pool of wasted rank on the site.
 *
 * FALSIFIABLE
 * These pages hold position and impressions already, so position should not
 * move. If CTR on this cohort has not risen 3-4 weeks after deploy and recrawl,
 * at unchanged position, the truncation diagnosis is wrong and wave 6's
 * conclusion stands after all.
 *
 * CONSTRAINTS HELD
 * No Atlantis price appears in any title or description (CLAUDE.md hard rule);
 * third-party salary and market bands are permitted and are used. Titles are
 * capped at 60 characters and descriptions at 155, enforced by assertion below
 * rather than by inspection — the whole point of the wave is the geometry, so a
 * regression on length is a regression on the intervention itself.
 */

export const CTR_WAVE7_OVERRIDES = {
  // 54,295 impressions at 0.83% — the single largest recoverable pool on the
  // site. Leads with the term searched rather than a descriptive sentence.
  '/blog/ndt-salary-guide-2026-global': {
    title: 'NDT Salary 2026 — Level I, II, III and API Pay by Region',
    description:
      'Level I, II and III pay bands plus API 510/570/653 inspector rates across the US, Gulf, Europe, India and Australia, and which tickets move you a band.',
  },

  '/blog/rt-vs-ut-complete-comparison': {
    title: 'RT vs UT — Flaw Types, Wall Thickness, Which to Specify',
    description:
      'Radiography reads porosity and slag; ultrasonics finds the tight planar flaws RT misses and gives depth. Which to specify by wall thickness and flaw type.',
  },

  '/blog/asnt-snt-tc-1a-certification-requirements': {
    title: 'SNT-TC-1A Requirements — Written Practice, Hours, Levels',
    description:
      'Training and experience hours by level and method, what your Written Practice must state, and why SNT-TC-1A being a recommended practice decides audits.',
  },

  '/blog/api-510-570-653-exam-schedule-2026': {
    title: 'API 510, 570, 653 Exam Dates 2026 — Windows, Deadlines',
    description:
      'Every 2026 examination window with its application deadline, how Prometric booking works, and when to apply if you need a visa or travel time.',
  },

  '/blog/api-653-tank-inspection-guide': {
    title: 'API 653 Tank Inspection — Intervals, Floor Scans, Repairs',
    description:
      'Internal and external interval rules, floor MFL with UT prove-up, shell settlement and plumbness limits, and what triggers a repair under API 653.',
  },

  '/blog/aws-d1-1-weld-acceptance-criteria-comprehensive-guide': {
    title: 'AWS D1.1 Weld Acceptance — Visual, UT and RT Limits',
    description:
      'Undercut, porosity, reinforcement and profile limits for visual examination, plus the UT and RT criteria, and how statically and cyclically loaded differ.',
  },

  '/blog/asme-section-v-article-4-ut-requirements-explained': {
    title: 'ASME Section V Article 4 — UT Requirements, Calibration',
    description:
      'Written procedure variables, calibration blocks, DAC and TCG setup, scanning coverage and recording level, plus the mandatory appendices that apply.',
  },

  '/blog/asme-section-viii-division-1-pressure-vessel-ndt': {
    title: 'ASME Section VIII Div 1 — NDE Requirements, Acceptance',
    description:
      'When radiography or ultrasonics is mandatory, how joint efficiency changes required thickness, and the acceptance criteria for vessel welds in one place.',
  },

  '/blog/asme-section-v-article-6-liquid-penetrant-pt-requirements-explained': {
    title: 'ASME V Article 6 — PT Dwell, Temperature, Acceptance',
    description:
      'Surface prep, penetrant sensitivity, minimum dwell, the standard temperature window, developer time, and where acceptance criteria come from.',
  },

  '/blog/radiographic-testing-complete-guide': {
    title: 'Radiographic Testing — Sources, Technique, Acceptance',
    description:
      'Ir-192, Se-75 and Co-60 by section thickness, IQI selection and density, single and double wall technique, and how the referencing code sets acceptance.',
  },

  '/blog/asme-b31-3-process-piping-requirements': {
    title: 'ASME B31.3 — Examination Extent by Fluid Service',
    description:
      'Category D, Normal, Category M and high pressure: how much volumetric examination each requires, weld acceptance, and Owner’s Inspector qualification.',
  },

  '/blog/magnetic-particle-testing-complete-guide': {
    title: 'Magnetic Particle Testing — Technique, Current, Limits',
    description:
      'Yoke, prod and coil technique, AC against DC and what each finds, wet against dry media, field strength verification, and acceptance by referencing code.',
  },

  '/blog/visual-testing': {
    title: 'Visual Testing (VT) — Lighting, Procedure, Acceptance',
    description:
      'Direct and remote VT, minimum illumination and resolution checks, procedure requirements under ASME Section V Article 9, and personnel qualification.',
  },

  '/blog/api-570-inspector-salary-2026-by-region-experience': {
    title: 'API 570 Inspector Salary 2026 — Pay by Region and Years',
    description:
      'What API 570 inspectors earn across the US Gulf, Middle East, Europe and Asia by experience band, and which additional tickets raise the rate most.',
  },

  '/blog/asnt-snt-tc-1a-vs-cp-189-comparison': {
    title: 'SNT-TC-1A vs CP-189 — Which One Your Audit Requires',
    description:
      'Recommended practice against standard, how each handles Level III certification, the employer obligations that differ, and which a client contract names.',
  },

  '/blog/iso-9712-vs-asnt-snt-tc-1a-certification-comparison': {
    title: 'ISO 9712 vs SNT-TC-1A — Central or Employer Certified',
    description:
      'Third-party central certification against employer-based certification: who examines, who certifies, portability between employers, and global acceptance.',
  },

  '/blog/ultrasonic-testing-ultimate-guide': {
    title: 'Ultrasonic Testing — Technique, Calibration, Acceptance',
    description:
      'Straight and angle beam, DAC and DGS calibration, thickness and flaw sizing, phased array and TOFD, and how UT acceptance is set by the referencing code.',
  },

  '/blog/pipe-wall-thickness-inspection-ut-procedures': {
    title: 'Pipe Wall Thickness UT — CMLs, Rates, Remaining Life',
    description:
      'Probe choice for rough and hot surfaces, CML placement, short and long-term corrosion rates, and how remaining life is calculated under API 570.',
  },

  // Cost drivers, not prices. No currency figure appears, and none may — this
  // page sits closest to the pricing rule of anything in the wave.
  '/blog/ndt-inspection-cost-2026-by-method-pricing-matrix': {
    title: 'NDT Inspection Cost Drivers — By Method and Scope',
    description:
      'What actually drives inspection cost by method: mobilisation, access, coverage rate, technician level and reporting, and how to compare scopes fairly.',
  },
};

/** Google truncates near these. The wave exists to respect them. */
export const TITLE_MAX = 60;
export const DESC_MAX = 155;

/**
 * The geometry IS the intervention, so a length regression is a silent failure
 * of the whole wave. Asserted at build time rather than reviewed by eye.
 */
export function assertWave7Lengths() {
  const bad = [];
  for (const [path, o] of Object.entries(CTR_WAVE7_OVERRIDES)) {
    if ((o.title || '').length > TITLE_MAX) bad.push(`${path}: title ${o.title.length} > ${TITLE_MAX}`);
    if ((o.description || '').length > DESC_MAX) bad.push(`${path}: description ${o.description.length} > ${DESC_MAX}`);
    if (!o.title || !o.description) bad.push(`${path}: missing title or description`);
  }
  if (bad.length) throw new Error(`CTR wave 7 length violations:\n  ${bad.join('\n  ')}`);
  return Object.keys(CTR_WAVE7_OVERRIDES).length;
}

/**
 * CLAUDE.md hard rule: no Atlantis price anywhere public. Third-party salary and
 * market bands are permitted, and several of these pages are about exactly that,
 * so the test is for a currency amount rather than for the word "salary".
 */
export function assertNoPricesInWave7() {
  const MONEY = /[$£€]\s?\d|\b\d+\s?(?:USD|GBP|EUR|AED|SAR)\b|\bper (?:seat|user|licen[cs]e)\b/i;
  const bad = [];
  for (const [path, o] of Object.entries(CTR_WAVE7_OVERRIDES)) {
    if (MONEY.test(`${o.title} ${o.description}`)) bad.push(path);
  }
  if (bad.length) throw new Error(`CTR wave 7 contains a price: ${bad.join(', ')}`);
}

/** Two pages sharing a title re-creates the collision waves 5 and 6 removed. */
export function assertNoWave7TitleCollisions() {
  const seen = new Map();
  const bad = [];
  for (const [path, o] of Object.entries(CTR_WAVE7_OVERRIDES)) {
    const key = o.title.toLowerCase();
    if (seen.has(key)) bad.push(`${path} collides with ${seen.get(key)}`);
    seen.set(key, path);
  }
  if (bad.length) throw new Error(`CTR wave 7 title collisions:\n  ${bad.join('\n  ')}`);
}
