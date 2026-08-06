/**
 * US head-term boost — 2026-08-06.
 * Query→page ownership from scripts/gsc-usa-90d-2026-08-06.json:
 *   ndt reporting software      → /best-ndt-reporting-software-2026        p9, 80i, 0c
 *   ndt inspection software     → /blog/ndt-inspection-software-2026-...   p19, 85i
 *   ndt software                → /ndt-reporting-software-comparison       p72 (authority gap)
 *   api 653 tank inspection companies → /blog/api-653-tank-inspection-guide p35, 115i
 *   asnt certification nationwide contracts → /asnt-certification          p18, 93i
 *   ndt inspection management software / cloud ndt software → landing on
 *   /ndt-connect (wrong page) — terms embedded into the money pages below.
 *
 * Additive sections appended to the OWNING page for each query (never a new
 * page, never moved ownership). Snippet rule (§25.4): the answer block opens
 * with an <h2> restating the query and a direct answer. No pricing (§18).
 */

export const HEADTERM_BLOCKS = {
  '/best-ndt-reporting-software-2026': `
    <section aria-label="Choosing NDT reporting software">
      <h2>What is the best NDT reporting software?</h2>
      <p>The best NDT reporting software is the one that captures findings once — in the field, offline if necessary — and turns them into a code-referenced report the client accepts without rework. Judge candidates on template fidelity to the codes you actually work (ASME, AWS, API), offline mobile capture, technician certification data flowing automatically into the report header, and how quickly a reviewer can approve and issue. Everything else is secondary.</p>
      <h2>The evaluation checklist US inspection companies actually use</h2>
      <p><strong>Report turnaround, measured honestly.</strong> Count the hours from probe-off to report-issued in your current process, including retyping, review loops and chasing signatures. That number is the benchmark any NDT inspection management software must beat — and the vendor should be comfortable being measured against it during a trial.</p>
      <p><strong>Template control stays with you.</strong> Client-specific formats, logo blocks, acceptance-criteria references and revision control should be configuration you own, not change requests you wait on. Ask to build one of your real templates during the demo, on your data.</p>
      <p><strong>Certification data lives in the same system.</strong> A report is only defensible if the technician's method, level and currency are verifiable at the moment of signature. Cloud NDT software that holds the personnel records beside the findings closes the gap auditors most often find.</p>
      <p><strong>Data leaves when you do.</strong> Your examination records are your clients' inspection history and your own liability defence. Confirm export — complete, structured, unassisted — before you sign anything.</p>
      <p>Atlantis builds exactly this stack for inspection companies — reporting, certification tracking, calibration and scheduling in one system. <a href="/ndt-inspection-software">The NDT inspection software platform</a> · <a href="/ndt-erp-solution">why providers replace spreadsheets</a> · <a href="/contact?service=erp">arrange a working demo on your templates</a>.</p>
    </section>`,

  '/blog/ndt-inspection-software-2026-best-platforms-compared': `
    <section aria-label="NDT inspection software selection guidance">
      <h2>How US inspection companies should shortlist NDT inspection software</h2>
      <p>Most NDT software comparisons are written for asset owners. If you run an inspection services company, your criteria are different: you serve many clients with many formats, your technicians are your inventory, and your audit exposure is SNT-TC-1A and client quality departments rather than internal QA. Shortlist accordingly.</p>
      <p><strong>Multi-client reality.</strong> A platform built for one plant's inspection programme often cannot hold ten clients' report formats, acceptance criteria and deliverable expectations side by side. Ask every vendor to show two different clients' outputs generated from the same underlying examination data.</p>
      <p><strong>The technician ledger.</strong> Certification tracking is the operational heart of a service company — methods, levels, expiry dates, vision records, Written Practice mapping. If the platform treats personnel records as an afterthought, it was built for owners, not providers.</p>
      <p><strong>Field-first capture.</strong> Dig sites, tank farms and turnaround decks are not office environments. Offline mobile data capture with clean sync is the difference between reporting from data and reporting from memory.</p>
      <p><strong>Business spine included.</strong> Quoting, work orders, job costing and invoicing belong in the same system as the inspection data they describe — that integration is what an <a href="/ndt-erp-solution">ERP for NDT companies</a> means in practice, and what generic field-service tools cannot retrofit.</p>
      <p>Atlantis is built provider-first on exactly these lines: <a href="/ndt-inspection-software">see the platform</a>.</p>
    </section>`,

  '/ndt-erp-solution': `
    <section aria-label="US NDT service providers">
      <h2>Built for US NDT inspection service companies</h2>
      <p>Across the US market — Gulf Coast turnaround contractors, pipeline integrity crews in the Permian and Bakken, fab-shop inspectors in the Midwest, aerospace NDT houses on the coasts — the operating problem is the same shape: certified people, calibrated equipment and defensible reports, coordinated faster than the competition. Atlantis packages that coordination as cloud NDT software with the business layer attached: certification tracking under SNT-TC-1A and CP-189, calibration registers reviewers accept, offline field capture, code-referenced NDT reporting, and quoting-to-invoice on the same records.</p>
      <p>Where your market concentrates shapes the configuration, not the product: <a href="/ndt-erp-houston">Houston</a> and the <a href="/ndt-erp-beaumont">Golden Triangle</a> run on turnaround surges, <a href="/ndt-erp-midland">the Permian</a> on dispersed field capture, <a href="/ndt-erp-chicago">Chicago</a> and <a href="/ndt-erp-pittsburgh">Pittsburgh</a> on shop-and-mill mix, <a href="/ndt-erp-seattle">Seattle</a> and <a href="/ndt-erp-fort-worth">Fort Worth</a> on aerospace audit regimes, <a href="/ndt-erp-charlotte">Charlotte</a> on outage season. One system of record underneath all of it — that is the point of NDT inspection management software over a stack of spreadsheets.</p>
    </section>`,

  '/blog/api-653-tank-inspection-guide': `
    <section aria-label="Choosing an API 653 tank inspection company">
      <h2>How to choose an API 653 tank inspection company</h2>
      <p>An API 653 tank inspection is only as good as the inspector's certification and the report's defensibility. When evaluating API 653 tank inspection companies, verify four things before price ever enters the conversation: that the inspector of record holds a current API 653 certification you can check against API's public directory; that NDT personnel supporting the inspection (floor scan, UT, settlement survey) are certified under a written practice the company can produce; that the deliverable includes corrosion rates, remaining life and next-interval calculations — not just thickness readings; and that the company carries the records to defend the report years later, when the tank's history matters more than its last inspection.</p>
      <p><strong>Questions that separate strong providers quickly:</strong> Who signs as the API 653 authorized inspector, and how many tanks has that individual closed out? What floor-scanning technology do you run, and how do you prosecute MFL indications with UT? How do you deliver data — a PDF, or structured records our integrity system can consume? Can you support the repair scope your findings generate, or do you hand off?</p>
      <p>For owners running multiple tanks, the reporting format matters as much as the inspection: consistent, structured records across a tank farm are what make risk-based prioritisation possible. <a href="/contact?service=inspection">ask Atlantis about API 653 inspection support</a> · <a href="/api-653-certification">how API 653 certification works</a> · <a href="/blog/digital-twin-for-tank-inspection-api-653-integration-guide">structured tank data and digital twins</a>.</p>
    </section>`,

  '/asnt-certification': `
    <section aria-label="ASNT certification for nationwide contracts">
      <h2>ASNT certification for nationwide contracts</h2>
      <p>National accounts — pipeline operators, utility fleets, plant owners with sites in many states — increasingly write personnel-certification requirements into master service agreements: technicians certified under a compliant SNT-TC-1A or CP-189 written practice, records auditable on demand, and consistency across every crew that touches the contract regardless of which office dispatched them. For an inspection company, that turns certification from a per-technician credential into a company-wide system: one written practice, one qualification matrix, one answer when the client's quality team asks for evidence across state lines.</p>
      <p>The practical failure mode is fragmentation — each branch tracking its own people its own way, so the national client gets three formats and a gap. Companies that win and keep nationwide contracts centralise the records and the renewals: examinations administered under a single Level III authority, expiry horizons visible far enough ahead to schedule around project peaks, and the audit package exportable the day it is requested. <a href="/consulting/ndt-consulting-level-iii">Outsourced Level III services</a> can carry the written-practice authority; <a href="/ndt-erp-solution">certification tracking software</a> carries the records. Both together are how a regional company passes a national audit.</p>
    </section>`,
};

export function applyHeadtermBoost(routes, append) {
  const byPath = new Map(routes.map((r) => [r.path, r]));
  let n = 0;
  for (const [path, html] of Object.entries(HEADTERM_BLOCKS)) {
    const r = byPath.get(path);
    if (!r) continue;
    append(r, html);
    n++;
  }
  return n;
}

export function assertNoPricesInHeadterm() {
  const m = JSON.stringify(HEADTERM_BLOCKS).match(/[$£€₹]\s?\d|per day|per hour|\/yr/gi);
  if (m) throw new Error(`headterm boost contains pricing: ${[...new Set(m)].join(', ')}`);
}
