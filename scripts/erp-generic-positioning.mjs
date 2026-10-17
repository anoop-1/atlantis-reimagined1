// Hub metadata and a short evaluation guide. Detailed routes use their own subject matter.
import { readFileSync } from 'fs';

const esc = (s) =>
  String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/* ── Hub-level title/description rewrites ─────────────────────────────────── */

const MONEY_META = JSON.parse(readFileSync(new URL('../src/data/money-page-meta.json', import.meta.url), 'utf-8'));
const WAVE15_META = JSON.parse(readFileSync(new URL('../src/data/ctr-wave15-software-meta.json', import.meta.url), 'utf-8')); // 2026-10-17

export const ERP_HUB_META = {
  '/erp': {
    // 2026-08-07 second pass: fresh US-filtered GSC pull shows zero US queries
    // containing the literal word "erp" earning impressions, while the task/
    // module pages earn real US impressions for exact phrases like "compliance
    // tracking," "calibration management" and "audit preparation." /erp itself
    // ranks pos ~10 in the US at 0% CTR — a snippet problem. Widened positioning
    // from the first pass is kept (still "and every business you run"); the
    // lead now names the terms that demonstrably earn impressions elsewhere.
    // 2026-09-29 SOFTWARE-COMPETITIVE: retitled to the NDT / inspection-company
    // ERP intent. The /erp body is owned by the ERP-REBUILD stream; only title + meta here.
    // 2026-10-12 (moneypages): one source with React Erp.tsx and CTR wave 13 —
    // src/data/money-page-meta.json. Edit the snippet there, not here.
    title: MONEY_META['/erp'].title,
    description: MONEY_META['/erp'].description,
  },
  '/ndt-erp-solution': {
    // 2026-10-08 CTR wave 12: US 'ndt inspection software' 35 impr @6.1, 0 clicks (see ctr-wave12-overrides.mjs).
    // 2026-10-17 wave 15: "NDT inspection software" belongs to /ndt-inspection-software (owner links);
    // this page is re-angled to the ERP intent. One source with React ndt-erp-solution.tsx.
    title: WAVE15_META['/ndt-erp-solution'].title,
    description: WAVE15_META['/ndt-erp-solution'].description,
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

// Hub evaluation section.

const GENERIC_SECTION = `
<section aria-label="Plan an ERP evaluation"><h2>Plan an ERP evaluation</h2><p>Bring a sample job, report template and equipment register to the demonstration. Follow the work from quotation through assignment, inspection review and invoicing. Confirm which modules, permissions and support are included in your proposed plan.</p><p>Use the <a href="/ndt-erp-integration-matrix">integration scoping guide</a> to record data flows and responsibilities. <a href="/contact?service=erp">Request a demonstration</a> with your own workflow.</p></section>`;

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

    // Broad product positioning belongs on the hub, not on every local or module page.
    if (r.path !== '/erp' || !r.bodyContent) continue;
    if (r.bodyContent.includes('Built for any business that runs on operations')) continue;

    append(r, GENERIC_SECTION);
    sectioned++;
  }

  return { metaFixed, sectioned };
}

/**
 * Guard: fail loudly if a number slips back into the ERP hub copy. The owner
 * Keep numerical claims out of positioning except the owner-confirmed 14-day trial.
 */
export function assertNoNumbersInErpHubMeta() {
  const offenders = [];
  for (const [path, m] of Object.entries(ERP_HUB_META)) {
    const text = `${m.title} ${m.description}`;
    if (/\d/.test(text.replace(/\b14-day\b/g, ''))) offenders.push(path);
  }
  if (/\d/.test(GENERIC_SECTION.replace(/<[^>]*>/g, ' '))) offenders.push('GENERIC_SECTION');
  if (offenders.length) {
    throw new Error(`ERP positioning copy contains numerals, which owner direction forbids: ${offenders.join(', ')}`);
  }
  return true;
}
