/**
 * ERP generic repositioning — 2026-07-29.
 * ─────────────────────────────────────────────────────────────────────────────
 * OWNER DIRECTION
 * The ERP pages read as an NDT product. They should read as a business
 * management platform that happens to be exceptional for inspection and testing
 * — because the addressable market for "run my business on one system" is an
 * order of magnitude larger than the market for "NDT ERP", and the GA4 data says
 * we are already paying to send that wider audience to these pages.
 *
 * WHAT THE DATA SAYS
 * GA4, last 28 days: /erp is the single largest landing page on the site with
 * 7,638 sessions — but 79% bounce, 21% engaged, and the whole site produced 34
 * generate_lead events. GSC over the same window: the ERP cluster's own head
 * terms ("ndt erp {city}") have effectively no search volume, while generic
 * business-software demand is enormous and entirely untouched by this copy.
 *
 * WHAT THIS MODULE DOES
 * 1. Rewrites the hub-level ERP titles and descriptions in generic,
 *    benefit-first language. City and module pages keep the local targeting that
 *    earns their existing impressions — broadening them is done by adding the
 *    generic framing below, not by discarding the term they rank for.
 * 2. Appends a generic positioning section to every ERP-family page, so the
 *    wider audience finds something addressed to them on whichever page they
 *    land, and every one of those pages gains a clear route to contact.
 *
 * TWO HARD RULES, per owner direction:
 *   - No numbers anywhere in this copy. Not app counts, not percentages, not
 *     timelines, not prices. Outcomes are stated in words.
 *   - Positioning words carried throughout: affordable, accessible, fully
 *     customizable. Calls to action are always a conversation.
 */

const esc = (s) =>
  String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/* ── Hub-level title/description rewrites ─────────────────────────────────── */

export const ERP_HUB_META = {
  '/erp': {
    // 2026-08-07 second pass: fresh US-filtered GSC pull shows zero US queries
    // containing the literal word "erp" earning impressions, while the task/
    // module pages earn real US impressions for exact phrases like "compliance
    // tracking," "calibration management" and "audit preparation." /erp itself
    // ranks pos ~10 in the US at 0% CTR — a snippet problem. Widened positioning
    // from the first pass is kept (still "and every business you run"); the
    // lead now names the terms that demonstrably earn impressions elsewhere.
    title: 'Compliance Tracking, Calibration Management & Audit Preparation ERP — and Every Business You Run | Atlantis',
    description:
      'Cloud-based ERP built around compliance tracking, calibration management and audit preparation — for testing and inspection companies, and any operations-heavy business. Certification tracking that flags expiring credentials, equipment calibration management, and crew scheduling, alongside sales, projects, field teams, stock, people and accounts. Affordable, accessible, fully customizable. Book a free consultation.',
  },
  '/ndt-erp-solution': {
    title: 'NDT Technician Certification Tracking & Calibration Management Software | Atlantis',
    description:
      'Software built for testing and inspection companies — technician certification tracking that flags expiring credentials automatically, equipment calibration management, and document control under ISO quality standards, alongside quoting, projects, job costing and accounts. Affordable, accessible, fully customizable. Free consultation.',
  },
  '/erp-modules': {
    title: 'Business Software Modules — Sales, Projects, Stock, People, Quality | Atlantis',
    description:
      'Every module your business runs on, switched on only where you need it and customized to fit your process: CRM and sales, projects and job costing, inventory, purchasing, HR, accounting, quality and document control.',
  },
  '/erp-industries': {
    title: 'Business Management Software by Industry — Configured Before You Log In | Atlantis',
    description:
      'Pre-configured for the way your sector actually works — service businesses, contractors, manufacturers, laboratories, distribution and asset owners — then customized further. Affordable, accessible, fully customizable.',
  },
  '/ndt-erp-software-comparison': {
    title: 'Comparing Business Management Software — How to Evaluate Without Being Misled | Atlantis',
    description:
      'A practical method for comparing business management platforms: establish which category you are buying, test enforcement rather than features, test the field and exit paths, then pilot narrowly and measure honestly.',
  },
};

/* ── Generic positioning section appended to every ERP-family page ────────── */

const GENERIC_SECTION = `
    <section aria-label="Built for any business that runs on operations">
      <h2>Built for any business that runs on operations</h2>
      <p>Most companies do not fail at their craft. They lose time, margin and goodwill in the gaps between the tools they use to run the place — a quoting spreadsheet that does not talk to the job sheet, a job sheet that does not reach accounts, and a compliance folder nobody can search when a client asks. Atlantis closes those gaps by putting the whole operation on one platform, so information is entered once and everything downstream stays in step.</p>

      <h2>What you can run on it</h2>
      <ul>
        <li><strong>Sales and CRM</strong> — leads, quotes, follow-ups and the pipeline that tells you what next month looks like.</li>
        <li><strong>Projects and job costing</strong> — plan the work, track the hours and materials against it, and see the margin while the job is still live rather than at final account.</li>
        <li><strong>Field and service teams</strong> — dispatch, schedules, mobile capture that works with no signal, and sign-off from site.</li>
        <li><strong>Inventory and purchasing</strong> — stock, suppliers, reorder points and goods receipt, joined to the jobs that consume them.</li>
        <li><strong>People</strong> — records, qualifications and licences with renewal reminders, timesheets, leave and payroll.</li>
        <li><strong>Quality and documents</strong> — procedures and forms under revision control, with the audit trail an inspection or accreditation body actually asks for.</li>
        <li><strong>Accounts</strong> — invoicing, expenses, multi-currency and the reporting your accountant stops chasing you for.</li>
      </ul>

      <h2>Affordable, accessible, fully customizable — and we mean each word</h2>
      <p><strong>Affordable</strong> because the whole suite is included rather than sold to you a module at a time, and because implementation is done by people who have run operations rather than by a chain of subcontractors. <strong>Accessible</strong> because it runs in a browser and on a phone, works for a small team on day one, and does not need a specialist on staff to keep it alive. <strong>Fully customizable</strong> because your process is the thing that makes you competitive — the software should bend to it, not the other way round.</p>

      <h2>Industries we configure for</h2>
      <p>Service businesses and contractors, manufacturing and fabrication, trading and distribution, laboratories and testing houses, engineering consultancies, construction and facilities, and asset owners across energy, marine, aerospace and infrastructure. Inspection and testing is where we started, and it remains the sector we go deepest in — but the platform underneath is general-purpose, and most of what it does has nothing to do with inspection at all.</p>

      <h2>What happens when you get in touch</h2>
      <p>A short conversation, not a sales sequence. We ask how the business runs today and where it hurts, show you the platform doing that work, and send a written quote shaped to your region, your team size and the scope you actually need. No obligation, nothing to install first, and no pressure to decide on the call. <a href="/contact?service=erp">Reach out and tell us what you are trying to fix</a>.</p>

      <p>Related: <a href="/erp">business management platform</a> · <a href="/inspection-management-software">inspection management software</a> · <a href="/ndt-inspection-software">choosing the right category of software</a> · <a href="/erp-modules">modules</a> · <a href="/erp-industries">by industry</a> · <a href="/digital-twins">asset integrity platform</a>. <a href="/contact?service=erp">Book a free consultation</a>.</p>
    </section>`;

/**
 * @param routes  final prerender route list
 * @param append  append(route, html) helper
 */
export function applyErpGenericPositioning(routes, append) {
  let metaFixed = 0;
  let sectioned = 0;

  for (const r of routes) {
    if (r.path.includes(':')) continue;

    const meta = ERP_HUB_META[r.path];
    if (meta) {
      r.title = meta.title;
      r.ogTitle = meta.title;
      r.description = meta.description;
      r.ogDesc = meta.description;
      metaFixed++;
    }

    const isErpFamily =
      /^\/erp(\/|$)/.test(r.path) ||
      /^\/erp-modules(\/|$)/.test(r.path) ||
      /^\/erp-industries(\/|$)/.test(r.path) ||
      /^\/ndt-erp-/.test(r.path) ||
      r.path === '/erp-oil-gas-malaysia' ||
      r.path === '/erp-construction-singapore';

    if (!isErpFamily || !r.bodyContent) continue;
    if (r.bodyContent.includes('Built for any business that runs on operations')) continue;

    append(r, GENERIC_SECTION);
    sectioned++;
  }

  return { metaFixed, sectioned };
}

/**
 * Guard: fail loudly if a number slips back into the ERP hub copy. The owner
 * direction is absolute — no figures of any kind in this positioning.
 */
export function assertNoNumbersInErpHubMeta() {
  const offenders = [];
  for (const [path, m] of Object.entries(ERP_HUB_META)) {
    const text = `${m.title} ${m.description}`;
    if (/\d/.test(text)) offenders.push(path);
  }
  if (/\d/.test(GENERIC_SECTION.replace(/<[^>]*>/g, ' '))) offenders.push('GENERIC_SECTION');
  if (offenders.length) {
    throw new Error(`ERP positioning copy contains numerals, which owner direction forbids: ${offenders.join(', ')}`);
  }
  return true;
}
