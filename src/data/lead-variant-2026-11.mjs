// Which enquiry form an editorial (published) page carries — 2026-11-07.
//
// Owner, 2026-11-07: "focus on getting more traffic, and more leads … primarily for training and
// consulting, & ERP; do not increase effort into inspection, do not reduce it either".
//
// GA4 (10 Oct – 6 Nov 2026): 609 contact_cta_click → 206 form_start → 108 generate_lead; training
// enquiries 23, consulting 9, ERP demo 5. The editorial pages that carry most of the search traffic
// (/asnt-certification, the salary guide, the SNT-TC-1A requirements post, the API exam schedule,
// every /compliance page, the codes guides) showed NO enquiry form: PublicationBoundary picked the
// form by matching "training" / "consulting" / "erp" in the URL, and those URLs contain none of
// them. This module replaces that guess with an intent map, and the form now sits after the
// second section of the article instead of after the footer-side contact block.
//
// 2026-11-14 (owner: "check if we can add more lead traffic for NDT training & inspection services"):
// inspection pages now get the inspection quote form. GA4 (US, 28 days to 2026-11-13): inspection landings
// 32 sessions → 2 key events with only /contact links on the page. Method-city pages (MT/PT/UT/RT/VT/ET by
// city), state and city inspection hubs and the editorial /inspection/* pages; training, consulting and
// simulator wording in the URL still wins (those rules run first).

const P = (re) => (p) => re.test(p);
const W = (alts) => new RegExp(`(^|[/-])(${alts})([/-]|$)`); // whole slug words only ("decoded" is not "code")
const RULES = [
  // ERP family first: software pages must never get the training form.
  ['reporting', P(/reporting-software|^\/ndt-software|inspection-software|inspection-management-software/)],
  ['erp', (p) => /^\/(erp|ndt-erp)(\/|-|$)/.test(p) || W('erp|cmms|calibration').test(p) || /asset-integrity-management-software|^\/resources\/(business-software|spreadsheet-to-system|qualification-and-calibration|contract-margin|client-audit)/.test(p)],
  // Consulting: the consulting tree, compliance pages, anything about consulting, written practice, audits.
  ['consulting', (p) => /^\/(consulting|compliance)(\/|-|$)/.test(p) || /consult|written-practice|procedure-(development|qualification)|audit-(preparation|documentation)|outsourced-(ndt-)?level/.test(p)],
  // Simulator pages keep their own demo form.
  ['practical-ndt', P(/simulator|practical-ndt/)],
  // Training: certification, exams, practice tests, careers and salaries, courses.
  ['training', P(/training|certif|asnt|snt-tc-1a|cp-189|exam|practice-(test|question)|salary|level-(i|ii|iii|1|2|3)(\b|-)|course|career|study-guide|pass-rate|how-to-become|iso-9712|(^|[/-])cwi([/-]|$)/)],
  // Inspection: method service pages and city pages, inspection hubs, editorial /inspection/* pages (2026-11-14).
  ['inspection', (p) => /^\/(ultrasonic|magnetic-particle|penetrant|radiographic|visual|eddy-current)-testing(-[a-z-]+)?$/.test(p) || /^\/inspection-services-[a-z-]+$/.test(p) || /^\/inspection\/[a-z0-9-]+$/.test(p)],
  // Codes and standards guides: readers who need a procedure written or qualified to the code.
  ['consulting', (p) => /^\/(standards|blog)\//.test(p) && W('asme|aws|b31|astm|nbic|code|codes|standard|standards|section-v|api-(5|6|1)\\d\\d').test(p)],
];

/** @returns {'reporting'|'erp'|'consulting'|'practical-ndt'|'training'|'inspection'|null} */
export function leadVariantFor(rawPath) {
  const p = (String(rawPath || '').toLowerCase().replace(/\/+$/, '') || '/').replace(/^\/(ar|es)(?=\/)/, '');
  if (p === '/' || p === '/contact' || p === '/privacy-policy') return null;
  for (const [variant, test] of RULES) if (test(p)) return variant;
  return null;
}
