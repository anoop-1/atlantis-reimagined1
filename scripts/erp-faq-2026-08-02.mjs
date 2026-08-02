/**
 * ERP buyer FAQ — 2026-08-02.
 * ─────────────────────────────────────────────────────────────────────────────
 * WHY
 * The 2026-08-02 audit found the ERP cluster is NOT thin — 1,271 indexable
 * pages averaging 1,084 words, none under 650. What it lacks is Q&A: 1,089 of
 * those pages render no questions and therefore emit no FAQPage schema, while
 * the rest of the site carries it on 857 pages.
 *
 * That matters twice over. Buyers of business software arrive with a fixed set
 * of anxieties — migration, disruption, lock-in, whether their odd process can
 * be accommodated — and a page that does not address them loses the reader
 * regardless of how much it explains the product. And FAQ schema can only ever
 * be derived from Q&A the page actually renders (CLAUDE.md 20.8), so the
 * structured-data gap and the content gap are the same gap.
 *
 * TWO HARD RULES, both owner direction (CLAUDE.md 18 and 20.10):
 *   1. No prices, anywhere, in any form.
 *   2. No numbers at all in ERP copy — no counts, no percentages, no timelines.
 *      Outcomes are stated in words. assertNoNumbersInErpFaq() enforces it and
 *      fails the build rather than letting a numeral slip back in.
 *
 * The answers are deliberately generic-first, per the repositioning in 20.10:
 * this is business management software that goes deepest in inspection and
 * testing, not an NDT product.
 */

const esc = (s) =>
  String(s == null ? '' : s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/* ── Core buyer questions, asked on every ERP page ─────────────────────────── */

const CORE = [
  {
    q: 'Do we have to move everything across at once?',
    a: 'No, and it is usually a poor idea. Most implementations start with the part of the business where the pain is sharpest — often quoting and job costing, or scheduling and field capture — and run it alongside what you use today until people trust it. Once that is steady, the next area follows. Moving everything in one weekend is how projects acquire the reputation they have; moving one process at a time is how they succeed.',
  },
  {
    q: 'What happens to the spreadsheets we already rely on?',
    a: 'They are the specification, not the enemy. A spreadsheet that has survived years of daily use encodes real decisions about how your business works, and the first job of implementation is to read it properly. Some become configured processes in the platform, some stay as spreadsheets because that is genuinely the right tool, and a few turn out to exist only because two systems could not talk to each other, and simply stop being needed.',
  },
  {
    q: 'Our process is unusual. Will we have to change how we work?',
    a: 'The unusual part is often the thing that makes you competitive, so bending it to fit software is the wrong trade. The platform is configured around your process rather than the other way round. Where we do push back is on process that exists to work around a previous system\'s limitations — that is worth removing rather than reproducing.',
  },
  {
    q: 'How long before it is actually running?',
    a: 'Sooner than a traditional enterprise rollout, because the scope is deliberately narrow at first. A single well-chosen process can be live and useful while the rest is still being planned. What extends timelines is almost never the software — it is data cleanliness and decision-making on the customer side, which is why we agree early who owns which decision.',
  },
  {
    q: 'What happens to our data if we stop using it?',
    a: 'It leaves with you in a usable form. Ask this of every vendor you evaluate, and treat a vague answer as an answer. Being able to exit is what keeps a supplier relationship honest, and a platform confident in its value has no reason to make leaving difficult.',
  },
  {
    q: 'Do we need someone technical on staff to keep it running?',
    a: 'No. It runs in a browser and on a phone, and day-to-day administration — adding users, adjusting a workflow, changing a form — is designed to be done by the people who run the business rather than by a specialist. Deeper changes are a conversation with us, not a recruitment exercise.',
  },
  {
    q: 'Can it handle several locations, currencies and legal entities?',
    a: 'Yes. Multi-company, multi-currency and multi-site working are core rather than an upgrade tier, which matters for service businesses that operate across borders and need consolidated reporting without maintaining separate books by hand.',
  },
  {
    q: 'What does it cost?',
    a: 'Pricing depends on region, team size and the scope you actually need, so we quote rather than publish. The positioning is deliberate: affordable, accessible and fully customizable, with the suite included rather than sold module by module. Tell us how the business runs today and you will get a written quote shaped to it, with no obligation.',
  },
];

/* ── Family-specific additions ─────────────────────────────────────────────── */

const MODULE_QA = [
  {
    q: 'Can we switch on just this module and add others later?',
    a: 'Yes. Modules are enabled where you need them and left dormant where you do not, and adding one later does not mean a re-implementation. Because it is one platform rather than integrated products, switching on a new area inherits the customers, suppliers, staff and jobs already in the system instead of needing them re-entered.',
  },
  {
    q: 'How does this module talk to the rest of the business?',
    a: 'Through shared records rather than interfaces. The job a technician completes is the same job that was quoted, costed and invoiced, so information is entered once and everything downstream stays in step. That is the whole argument for a single platform over several good tools stitched together.',
  },
];

const INDUSTRY_QA = [
  {
    q: 'Is this configured for our sector before we start?',
    a: 'Yes — the sector configuration is the starting point, not the finished article. It reflects how businesses like yours typically quote, schedule, cost and report, so the first demonstration shows something recognisable rather than an empty system. Everything in it remains adjustable once you see it against your own way of working.',
  },
  {
    q: 'What if we operate across more than one sector?',
    a: 'That is common and it is handled by configuration rather than by running separate systems. Different work types can carry different processes, forms and approval routes while sharing one customer list, one set of accounts and one view of capacity.',
  },
];

const COMPLIANCE_QA = [
  {
    q: 'Will this help us pass a client or accreditation audit?',
    a: 'It is built for it. The things audits actually ask for — that the person who did the work was qualified at the time, that the equipment was in calibration, that the procedure revision in force was the one followed, and that the records can be produced on request — are held as records with dates rather than as folders someone has to search. The difference at audit is between retrieving evidence and reconstructing it.',
  },
  {
    q: 'What happens when a qualification or calibration is about to expire?',
    a: 'You are told before it lapses rather than after. Expiry is tracked against the person or the instrument, and the warning arrives while there is still time to act, which is the difference between rescheduling work and cancelling it.',
  },
];

/* ── No-numbers enforcement ────────────────────────────────────────────────── */

const ALL_QA = [...CORE, ...MODULE_QA, ...INDUSTRY_QA, ...COMPLIANCE_QA];

/**
 * Owner direction: ERP copy contains no numerals of any kind. Fail the build
 * rather than let one back in — the rule has been re-broken before.
 */
export function assertNoNumbersInErpFaq() {
  const offenders = [];
  for (const { q, a } of ALL_QA) {
    if (/\d/.test(q)) offenders.push(`Q: ${q}`);
    if (/\d/.test(a)) offenders.push(`A: ${a.slice(0, 90)}…`);
  }
  if (offenders.length) {
    throw new Error(
      `ERP FAQ copy contains numerals, which owner direction forbids:\n  ${offenders.join('\n  ')}`,
    );
  }
}

/* ── Rendering ─────────────────────────────────────────────────────────────── */

function faqHtml(pairs, heading) {
  return `
    <section aria-label="${esc(heading)}">
      <h2>${esc(heading)}</h2>
${pairs.map(({ q, a }) => `      <h3>${esc(q)}</h3>\n      <p>${esc(a)}</p>`).join('\n\n')}
      <p>Still deciding? A short conversation beats a feature list. <a href="/contact?service=erp">Tell us what you are trying to fix</a>, or see the <a href="/erp-modules">modules</a> and <a href="/erp-industries">sector configurations</a>.</p>
    </section>`;
}

/** Choose the question set that suits the page, so families do not all read alike. */
function pairsFor(path) {
  if (/^\/erp-modules\//.test(path)) return [...CORE.slice(0, 5), ...MODULE_QA];
  if (/^\/erp-industries\//.test(path)) return [...CORE.slice(0, 5), ...INDUSTRY_QA];
  if (/^\/ndt-erp-/.test(path)) return [...CORE.slice(0, 6), ...COMPLIANCE_QA];
  if (/^\/erp\//.test(path)) return [...CORE.slice(0, 5), ...MODULE_QA.slice(0, 1), ...COMPLIANCE_QA.slice(0, 1)];
  return CORE;
}

const IS_ERP = /^\/(erp|ndt-erp|erp-modules|erp-industries|ndt-erp-solution|ndt-erp-software-comparison)/;

/**
 * @param routes  prerender route list
 * @param append  (route, html) => void
 * @returns count of ERP pages given visible Q&A
 */
export function applyErpFaqs(routes, append) {
  assertNoNumbersInErpFaq();
  let n = 0;
  for (const r of routes) {
    if (!IS_ERP.test(r.path)) continue;
    // Do not double up on pages that already render their own Q&A.
    if (/<h[23][^>]*>\s*(?:Q\s*\d|What|How|Why|Can|Do|Does|Is|Will)\b[^<]*\?/i.test(r.bodyContent || '')) continue;
    const pairs = pairsFor(r.path);
    append(r, faqHtml(pairs, 'Questions buyers ask before they commit'));
    // Surfaced for the post-pass so schema is derived from what is rendered.
    r._faqs = [...(r._faqs || []), ...pairs.map(({ q, a }) => ({ question: q, answer: a }))];
    n++;
  }
  return n;
}
