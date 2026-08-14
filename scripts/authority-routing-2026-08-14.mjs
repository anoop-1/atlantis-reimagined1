/**
 * Authority routing — 2026-08-14.
 * ─────────────────────────────────────────────────────────────────────────────
 * TWO STRUCTURAL DEFECTS FOUND BY THE PRODUCT x GEO AUDIT, BOTH ABOUT WHERE
 * INTERNAL AUTHORITY GOES. Neither is a content problem, so neither is fixed
 * by writing more words — §26.2 already tried that on the method pages and the
 * measurement below shows it did not move them.
 *
 * ── DEFECT 1: the money page does not rank for its own method term ──────────
 * GSC 90d, page-level, for each method head term:
 *
 *   "ultrasonic testing"   348i  p71  /glossary/ultrasonic-testing
 *                           18i  p54  /ultrasonic-testing-netherlands
 *                           14i  p22  /ultrasonic-testing-johannesburg
 *                       /ultrasonic-testing (the money page) ...... ABSENT
 *
 *   "eddy current testing" 261i  p77  /blog/…-complete-beginner-guide (301'd!)
 *                          178i  p69  /blog/eddy-current-testing-complete-guide
 *                          152i  p79  /glossary/eddy-current-testing
 *                       /eddy-current-testing ....................... ABSENT
 *
 *   "radiographic testing" 287i  p28  /blog/radiographic-testing-complete-guide
 *                          165i  p76  /glossary/radiographic-testing
 *                       /radiographic-testing ....................... ABSENT
 *
 * Three or four URLs split each term and the commercial page is not among
 * them. The glossary entry — a definition — is the one Google picked.
 *
 * The fix is not more prose. It is EXACT-ANCHOR internal links pointing at the
 * money page from the pages that already hold the topic: the ~591 method-city
 * pages, the glossary entry, and the complete-guide blog. Exact anchor text is
 * the strongest on-page ownership signal available, and these pages are
 * otherwise doing nothing with the authority they hold (method-city NA-US runs
 * 190 pages at average position 40.8).
 *
 * Each satellite page keeps its own job and gains one sentence naming the money
 * page as where the service is bought. No page is stripped (additive-only).
 *
 * ── DEFECT 2: the traffic engine is internally orphaned ────────────────────
 * Inbound internal links counted across dist/, against 90d impressions:
 *
 *   /blog/api-510-570-653-exam-schedule-2026 ......... 10,397i   6 inbound
 *   /blog/aws-d1-1-weld-acceptance-criteria ..........  9,984i   2 inbound
 *   /blog/api-653-tank-inspection-guide ..............  9,826i   4 inbound
 *   /blog/asme-section-viii-division-1 ...............  9,439i   1 inbound
 *   /blog/asme-b31-3-process-piping-requirements .....  8,037i   2 inbound
 *   /blog/asme-section-v-article-4-ut ................  7,586i   5 inbound
 *   /blog/eddy-current-testing-complete-guide ........  6,487i   3 inbound
 *   /blog/radiographic-testing-complete-guide ........  6,353i   2 inbound
 *
 * For contrast /contact carries 15,037 inbound links and /consulting 13,019.
 * Internal PageRank is pooled on nav destinations and starved from the pages
 * that actually rank. These eight sit at p6–19 on five-figure impression
 * counts, so position movement here is worth more than anything else measured
 * this cycle.
 *
 * Sources are chosen by topical adjacency AND measured authority, never by
 * convenience, and anchor text varies per source (a repeated site-wide anchor
 * reads as a footprint — §34.5).
 *
 * NO PRICING (§18). NO fabricated local presence (§24.2).
 */

const esc = (s) => String(s == null ? '' : s)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const L = (href, text) => `<a href="${href}">${esc(text)}</a>`;

/* ───────────────────────────────────────────────────────────────────────────
 * PART 1 — method head-term ownership
 * ───────────────────────────────────────────────────────────────────────── */

const METHODS = {
  'ultrasonic-testing': {
    term: 'ultrasonic testing', short: 'UT', money: '/ultrasonic-testing',
    glossary: '/glossary/ultrasonic-testing',
    guide: '/blog/ultrasonic-testing-ultimate-guide',
    // What the commercial page uniquely offers, so the link has a reason.
    buy: 'thickness surveys, weld examination, corrosion mapping and phased array performed to a qualified procedure',
  },
  'radiographic-testing': {
    term: 'radiographic testing', short: 'RT', money: '/radiographic-testing',
    glossary: '/glossary/radiographic-testing',
    guide: '/blog/radiographic-testing-complete-guide',
    buy: 'film and digital radiography with the source logistics, exclusion zones and permanent image records a contract requires',
  },
  'magnetic-particle-testing': {
    term: 'magnetic particle testing', short: 'MT', money: '/magnetic-particle-testing',
    glossary: '/glossary/magnetic-particle-testing',
    guide: '/blog/magnetic-particle-testing-complete-guide',
    buy: 'wet fluorescent and dry powder examination on ferromagnetic welds, castings and fatigue-critical details',
  },
  'penetrant-testing': {
    term: 'penetrant testing', short: 'PT', money: '/penetrant-testing',
    glossary: '/glossary/penetrant-testing',
    guide: '/blog/penetrant-testing-complete-guide',
    buy: 'visible and fluorescent penetrant examination on stainless, nickel alloy, aluminium and other non-magnetic material',
  },
  'visual-testing': {
    term: 'visual testing', short: 'VT', money: '/visual-testing',
    glossary: '/glossary/visual-testing',
    guide: null,
    buy: 'direct and remote visual examination against named acceptance criteria, with the evidence chain written to survive an audit',
  },
  'eddy-current-testing': {
    term: 'eddy current testing', short: 'ET', money: '/eddy-current-testing',
    glossary: '/glossary/eddy-current-testing',
    guide: '/blog/eddy-current-testing-complete-guide',
    buy: 'bobbin, array and rotating-probe tube inspection plus surface examination on non-ferrous and coated components',
  },
};

/**
 * From a method-city page: one sentence pointing UP at the national service
 * page with the exact head term as anchor. Varied by city so 591 pages do not
 * emit one identical sentence.
 */
function cityUplink(m, city) {
  const variants = [
    `Work in ${esc(city)} is delivered under the same procedures and Level III oversight described on our national ${L(m.money, m.term)} page, which covers ${esc(m.buy)}.`,
    `For the full scope — ${esc(m.buy)} — see ${L(m.money, m.term)}, the national service page this ${esc(city)} work is delivered under.`,
    `${esc(city)} scopes are quoted from the national ${L(m.money, `${m.term} service`)}: ${esc(m.buy)}.`,
    `What Atlantis provides in ${esc(city)} is set out in full on the ${L(m.money, `${m.term} services`)} page — ${esc(m.buy)}.`,
  ];
  // Deterministic pick so a rebuild is stable and siblings differ.
  let h = 0;
  for (let i = 0; i < city.length; i++) h = (h * 31 + city.charCodeAt(i)) >>> 0;
  return `
    <section aria-label="${esc(m.term)} — national service">
      <p>${variants[h % variants.length]}</p>
    </section>`;
}

/** From the glossary entry: narrow to definition scope, hand commercial intent up. */
function glossaryUplink(m) {
  return `
    <section aria-label="Scope of this entry">
      <h2>This entry defines the method — it is not the service page</h2>
      <p>This glossary entry exists to define ${esc(m.term)} (${esc(m.short)}) and the vocabulary around it.
      If you are looking to have ${esc(m.term)} performed on your equipment rather than to understand what it is,
      the service page is ${L(m.money, m.term)} — ${esc(m.buy)}.
      ${m.guide ? `For a longer explanation of how the method works in practice, see the ${L(m.guide, `${m.short} method guide`)}.` : ''}</p>
    </section>`;
}

/** From the complete-guide blog: explainer keeps its job, commercial intent goes up. */
function guideUplink(m) {
  return `
    <section aria-label="Having this performed">
      <h2>Having ${esc(m.term)} performed on your equipment</h2>
      <p>This guide explains the method. If what you actually need is the examination carried out —
      ${esc(m.buy)} — that is the ${L(m.money, `${m.term} service`)}.
      Teams mobilise to your site under Atlantis procedures with ASNT Level III oversight; findings are
      evaluated against the acceptance criteria your contract names, and records are structured to
      survive a client audit years later. ${L('/contact?service=inspection', 'Scope an examination')}.</p>
    </section>`;
}

export function applyMethodAuthority(routes, append) {
  const byPath = new Map(routes.map((r) => [r.path, r]));
  const out = { cityUplinks: 0, glossary: 0, guides: 0, missing: [] };

  for (const [slug, m] of Object.entries(METHODS)) {
    // Every /{method}-{city} page points up with the exact head term.
    const re = new RegExp(`^/${slug}-(.+)$`);
    for (const r of routes) {
      const mm = re.exec(r.path);
      if (!mm) continue;
      const city = mm[1].split('-').map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
      append(r, cityUplink(m, city));
      out.cityUplinks++;
    }

    const g = byPath.get(m.glossary);
    if (g) { append(g, glossaryUplink(m)); out.glossary++; } else out.missing.push(m.glossary);

    if (m.guide) {
      const b = byPath.get(m.guide);
      if (b) { append(b, guideUplink(m)); out.guides++; } else out.missing.push(m.guide);
    }
  }
  return out;
}

/* ───────────────────────────────────────────────────────────────────────────
 * PART 2 — inbound links to the traffic engine
 * ───────────────────────────────────────────────────────────────────────── */

/**
 * destination -> [{ from, anchor, sentence }]
 * `from` pages are chosen for topical adjacency and their own measured demand.
 * Anchors differ per source on purpose.
 */
const ENGINE_LINKS = [
  {
    to: '/blog/api-510-570-653-exam-schedule-2026',
    label: 'exam schedule',
    sources: [
      ['/api-510-certification', 'when the API 510 exam is actually sat', 'Eligibility is only half the problem — the other half is the calendar.'],
      ['/api-570-certification', 'API exam dates and windows', 'Certification planning fails more often on timing than on study.'],
      ['/api-653-certification', 'the current API exam schedule', 'Scheduling drives everything else in a certification plan.'],
      ['/asnt-certification', 'API 510, 570 and 653 exam windows', 'Candidates holding ASNT credentials frequently add an API endorsement next.'],
      ['/api-inspector-guide', 'exam windows for all three API codes', 'Sequencing the exams matters as much as choosing them.'],
    ],
  },
  {
    to: '/blog/aws-d1-1-weld-acceptance-criteria-comprehensive-guide',
    label: 'AWS D1.1 acceptance',
    sources: [
      ['/visual-testing', 'AWS D1.1 weld acceptance criteria', 'Most structural visual examination is judged against one document.'],
      ['/magnetic-particle-testing', 'how AWS D1.1 treats surface indications', 'On structural steel the acceptance standard decides what an indication means.'],
      ['/ultrasonic-testing', 'the AWS D1.1 ultrasonic acceptance tables', 'Structural UT is only meaningful against the code that grades it.'],
      ['/blog/weld-inspection-ndt-methods-guide', 'AWS D1.1 acceptance criteria in detail', 'Method selection and acceptance criteria are decided together.'],
    ],
  },
  {
    to: '/blog/asme-section-viii-division-1-pressure-vessel-ndt',
    label: 'Section VIII vessels',
    sources: [
      ['/api-510-certification', 'the ASME Section VIII construction rules behind API 510', 'In-service inspection inherits its acceptance criteria from the construction code.'],
      ['/radiographic-testing', 'ASME Section VIII radiography requirements', 'Vessel radiography scope is set by the construction code, not by preference.'],
      ['/consulting/ndt-consulting-level-iii', 'Section VIII NDT requirements', 'Procedure approval starts from the construction code the vessel was built to.'],
    ],
  },
  {
    to: '/blog/asme-b31-3-process-piping-requirements',
    label: 'B31.3 piping',
    sources: [
      ['/api-570-certification', 'the ASME B31.3 requirements API 570 relies on', 'Piping inspection is judged against the code the system was built to.'],
      ['/radiographic-testing', 'B31.3 radiography and examination extent', 'Process piping examination extent is a code decision.'],
      ['/blog/weld-inspection-acceptance-criteria-aws-vs-asme', 'B31.3 process piping requirements', 'The two code families treat the same indication differently.'],
    ],
  },
  {
    to: '/blog/asme-section-v-article-4-ut-requirements-explained',
    label: 'Section V Art. 4',
    sources: [
      ['/ultrasonic-testing', 'ASME Section V Article 4 requirements', 'Section V supplies the method rules every referencing code points at.'],
      ['/phased-array-ut', 'the Article 4 rules phased array is qualified against', 'Encoded techniques still answer to the same article.'],
      ['/blog/ultrasonic-testing-ultimate-guide', 'Article 4 examined in full', 'The method article is where technique qualification actually lives.'],
    ],
  },
  {
    to: '/blog/asme-section-v-article-6-liquid-penetrant-pt-requirements-explained',
    label: 'Section V Art. 6',
    sources: [
      ['/penetrant-testing', 'ASME Section V Article 6 requirements', 'Penetrant examination is governed method-by-method by Section V.'],
      ['/glossary/penetrant-testing', 'Article 6 penetrant requirements', 'The governing article defines dwell, technique and evaluation.'],
    ],
  },
  {
    to: '/blog/api-653-tank-inspection-guide',
    label: 'API 653 tanks',
    sources: [
      ['/api-653-certification', 'what an API 653 tank inspection actually involves', 'The certification exists to support a specific inspection scope.'],
      ['/services/mfl-pipeline-inspection', 'API 653 tank floor inspection', 'Floor scanning is one part of a wider tank inspection scope.'],
      ['/consulting', 'tank inspection under API 653', 'Tank programmes are among the most commonly outsourced inspection scopes.'],
    ],
  },
  {
    to: '/blog/eddy-current-testing-complete-guide',
    label: 'ET guide',
    sources: [
      ['/eddy-current-testing', 'how eddy current testing works in detail', 'The physics behind the service is worth understanding before scoping it.'],
      ['/blog/heat-exchanger-tube-inspection-methods-procedures', 'eddy current testing explained end to end', 'Tube inspection is where the method does most of its work.'],
    ],
  },
  {
    to: '/blog/radiographic-testing-complete-guide',
    label: 'RT guide',
    sources: [
      ['/radiographic-testing', 'radiography explained in full', 'The service page covers scope; the guide covers the method.'],
      ['/glossary/radiographic-testing', 'the complete radiographic testing guide', 'A definition is a starting point, not a working knowledge.'],
    ],
  },
  {
    to: '/blog/heat-exchanger-tube-inspection-methods-procedures',
    label: 'exchanger tubes',
    sources: [
      ['/eddy-current-testing', 'heat exchanger tube inspection procedures', 'Bundle work is the single largest ET application in process plant.'],
      ['/ndt-for-oil-gas', 'how exchanger bundles are actually inspected', 'Turnaround scope is dominated by exchanger work.'],
    ],
  },
  {
    to: '/blog/phased-array-ultrasonic-testing-paut-guide',
    label: 'PAUT guide',
    sources: [
      ['/phased-array-ut', 'the full PAUT method guide', 'Buyers of phased array benefit from understanding what it can resolve.'],
      ['/ultrasonic-testing', 'phased array ultrasonic testing in depth', 'PAUT is the technique most often specified above conventional UT.'],
    ],
  },
  {
    to: '/ndt-industry-statistics',
    label: 'market data',
    sources: [
      ['/blog/us-ndt-inspection-services-market-structure', 'NDT industry and market statistics', 'Market structure is easier to read alongside the underlying figures.'],
      ['/about', 'the size and shape of the NDT industry', 'Context for where this company sits in the sector.'],
    ],
  },
];

function engineBlock(items) {
  const lis = items.map(({ to, anchor, sentence }) =>
    `<li>${esc(sentence)} ${L(to, anchor)}.</li>`).join('\n        ');
  return `
    <section aria-label="Related reading">
      <h2>Related reading</h2>
      <ul>
        ${lis}
      </ul>
    </section>`;
}

export function applyEngineInboundLinks(routes, append) {
  const byPath = new Map(routes.map((r) => [r.path, r]));
  // Invert: group by SOURCE so each source page gets one block, not many.
  const bySource = new Map();
  const missingTargets = [];
  for (const dest of ENGINE_LINKS) {
    if (!byPath.has(dest.to)) { missingTargets.push(dest.to); continue; }
    for (const [from, anchor, sentence] of dest.sources) {
      if (!byPath.has(from)) { missingTargets.push(`from:${from}`); continue; }
      if (!bySource.has(from)) bySource.set(from, []);
      bySource.get(from).push({ to: dest.to, anchor, sentence });
    }
  }
  let applied = 0, links = 0;
  for (const [from, items] of bySource) {
    append(byPath.get(from), engineBlock(items));
    applied++; links += items.length;
  }
  return { sourcePages: applied, linksPlaced: links, missing: missingTargets };
}

/* ───────────────────────────────────────────────────────────────────────────
 * Guards
 * ───────────────────────────────────────────────────────────────────────── */

/** §18 — no Atlantis pricing may enter through this module. */
export function assertNoPricesInAuthorityRouting() {
  const blob = JSON.stringify(METHODS) + JSON.stringify(ENGINE_LINKS);
  const hits = blob.match(/[$£€₹]\s?\d|per day|per hour|\/yr\b|\bfee\b/gi);
  if (hits) throw new Error(`authority-routing copy contains pricing: ${[...new Set(hits)].join(', ')}`);
}

/**
 * Every link target must be a real route, or the module ships broken links —
 * §34.4: a plausible-looking slug from memory does not exist. Checked against
 * the live routes array at build time, so a renamed page fails the build
 * rather than silently emitting a 404 on thousands of pages.
 */
export function assertAuthorityTargetsExist(routes) {
  const paths = new Set(routes.map((r) => r.path));
  const need = new Set();
  for (const m of Object.values(METHODS)) {
    need.add(m.money); need.add(m.glossary);
    if (m.guide) need.add(m.guide);
  }
  for (const d of ENGINE_LINKS) {
    need.add(d.to);
    for (const [from] of d.sources) need.add(from);
  }
  const missing = [...need].filter((p) => !paths.has(p));
  if (missing.length) throw new Error(`authority-routing targets missing from routes: ${missing.join(', ')}`);
}
