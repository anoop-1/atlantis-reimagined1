// Intent routing: every page that earns traffic points at the Atlantis product its
// readers are most likely to buy next (owner, 2026-10-24).
//
// Owner: "do all of those pages have respective hyperlinks to the respective target market
// product or service ... if a career or job page is getting some traffic, that should be
// linked with training and practical entity as a product to be sold. And if somebody is
// viewing calculators, maybe consulting will be the right page, or ERP".
//
// Evidence (scratchpad link audit over the 2026-10-19 build, GSC 90d page demand):
//   careers/salary   28 pages, 52.9k impr: Practical NDT linked from 21%, practice tests 21%
//   exam prep        51 pages, 22.1k impr: Practical NDT 37%, practice tests 31%
//   training        419 pages, 25.6k impr: practice tests 3%
//   glossary        201 pages, 10.3k impr: inspection services 11%
//   standards/codes 350 pages, 93.0k impr: inspection services 52%, training 65%
//   blog (other)    669 pages, 75.5k impr: inspection 34%, training 41%
//   GA4 (6 Sep-8 Oct): training landings 12.4 key events per 100 sessions vs blog 0.6.
// So the gap is the bridge from reading pages to product pages, not the products.
//
// One source for both layers: React (src/components/IntentRouteBlock.tsx) and the crawler
// (scripts/intent-routes-2026-10.mjs). First matching rule wins. No prices (CLAUDE.md §18);
// API 510/570/653 readers are never offered API training (Atlantis does not sell it).

export const ROUTE_MARKER = 'data-intent-route="2026-10"';

// Method -> [service page, training page, simulator page]
const M = {
  paut: ["/inspection/phased-array-inspection-services", "/phased-array-training", "/practical-ndt/phased-array-ut-simulator", "phased array (PAUT)"],
  tofd: ["/tofd-testing", "/tofd-training-certification-course", "/practical-ndt/tofd-simulator", "TOFD"],
  ut: ["/ultrasonic-testing", "/ultrasonic-testing-training", "/practical-ndt/ultrasonic-testing-simulator", "ultrasonic testing (UT)"],
  rt: ["/radiographic-testing", "/radiographic-testing-training", "/practical-ndt/radiography-simulator", "radiographic testing (RT)"],
  mt: ["/magnetic-particle-testing", "/magnetic-particle-testing-training", "/practical-ndt/magnetic-particle-simulator", "magnetic particle testing (MT)"],
  pt: ["/penetrant-testing", "/penetrant-testing-training", "/practical-ndt/penetrant-testing-simulator", "liquid penetrant testing (PT)"],
  et: ["/eddy-current-testing", "/eddy-current-testing-training", "/practical-ndt/eddy-current-simulator", "eddy current testing (ET)"],
  vt: ["/visual-testing", "/visual-testing-training", "/practical-ndt/visual-testing-simulator", "visual testing (VT)"],
};
const METHOD_RE = [
  ["paut", /phased-array|(^|[-/])paut([-/]|$)/],
  ["tofd", /(^|[-/])tofd([-/]|$)|time-of-flight/],
  ["ut", /ultrasonic|(^|[-/])ut([-/]|$)|(^|[-/])utt([-/]|$)|thickness|shear-wave|compression-wave|angle-beam|a-scan|sound-velocity|flat-bottom-hole|calibration-block|attenuation|article-4|article-5([-/]|$)|article-23/],
  ["rt", /radiograph|(^|[-/])rt([-/]|$)|half-value|(^|[-/])hvl([-/]|$)|film|iqi|penetrameter|article-2([-/]|$)/],
  ["mt", /magnetic-particle|(^|[-/])mt([-/]|$)|yoke|article-7/],
  ["pt", /penetrant|(^|[-/])pt([-/]|$)|astm-e165|article-6/],
  ["et", /eddy-current|(^|[-/])et([-/]|$)|impedance|article-8/],
  ["vt", /visual-testing|visual-inspection|(^|[-/])vt([-/]|$)|article-9|weld-acceptance|cwi/],
];
export function methodFor(path) {
  const hit = METHOD_RE.find(([, re]) => re.test(path));
  return hit ? hit[0] : null;
}

const L = {
  l2: ["/ndt-level-2-training", "NDT Level II training to ASNT SNT-TC-1A"],
  l1: ["/ndt-level-1-training", "NDT Level I training for new technicians"],
  l3: ["/asnt-level-iii-training", "ASNT NDT Level III exam preparation"],
  practical: ["/practical-ndt", "Practical NDT: hands-on practice on a 3D NDT simulator"],
  tests: ["/ndt-practice-tests", "Free Level II practice tests and downloadable question packs"],
  training: ["/training", "All NDT training courses"],
  inspection: ["/inspection/ndt-inspection-services", "NDT inspection services, quoted on request"],
  consultingL3: ["/consulting/ndt-consulting-level-iii", "Outsourced ASNT NDT Level III consulting"],
  procedure: ["/consulting/ndt-technical-procedure-development", "Have a Level III write or review the procedure"],
  programme: ["/consulting/snt-tc-1a-training-program-setup", "Written practice and SNT-TC-1A programme set-up"],
  erp: ["/erp", "Atlantis ERP: jobs, certifications, calibration and reports in one system"],
  erpCerts: ["/erp/apps/certificates", "Track technician certifications and expiry dates in Atlantis ERP"],
  erpReports: ["/erp/apps/ndt-reports", "Issue method-specific NDT reports from Atlantis ERP"],
  erpAssets: ["/erp/apps/asset-management", "Keep CMLs, readings and inspection due dates in Atlantis ERP"],
  rbi: ["/inspection/risk-based-inspection", "Risk-based inspection (API 580) services"],
  integrity: ["/inspection/asset-integrity-services", "Asset integrity services"],
  twin: ["/digital-twins", "See inspection data on a digital twin of the asset"],
  cui: ["/inspection/corrosion-under-insulation-inspection", "Corrosion under insulation (CUI) inspection"],
  weld: ["/inspection/weld-inspection-services-us", "Weld inspection services"],
  templates: ["/contact?service=templates&subject=Custom%20NDT%20templates%20and%20documents", "Custom templates in your format: request a quotation"],
  scan: ["/3d-scanning-services", "3D laser scanning services"],
  api510: ["/consulting/api-510-pressure-vessel-inspector-services", "API 510 pressure vessel NDE and data review"],
  api570: ["/consulting/api-570-piping-inspector-services", "API 570 piping NDE, CML data and review"],
  api653: ["/consulting/api-653-tank-inspector-services", "API 653 tank NDE: MFL, UT and settlement data"],
  vessel: ["/inspection/pressure-vessel-inspection-services", "Pressure vessel inspection services"],
  cml: ["/inspection/piping-circuit-inspection-cml", "Piping circuit and CML inspection"],
  tank: ["/inspection/aboveground-storage-tank-inspection", "Aboveground storage tank inspection"],
};
const meth = (k, kind) => {
  const m = M[k];
  if (kind === "service") return [m[0], `${cap(m[3])} services, quoted on request`];
  if (kind === "training") return [m[1], `${cap(m[3])} Level II training`];
  return [m[2], `Practise ${m[3]} on the Practical NDT simulator`];
};
const cap = (s) => s.charAt(0).toUpperCase() + s.slice(1);

const EXCLUDE = /^\/($|contact|about|privacy|terms|thank-you|404|erp($|\/|-)|ndt-erp|consulting($|\/)|ndt-consulting|digital-twin|practical-ndt|inspection($|\/|-)|3d-scanning|press|careers$|sitemap|embed)/;

// Specialist inspection services, matched before the generic method service page.
const SERVICES = [
  [/leak-test/, ["/inspection/ndt-inspection-services/conventional-ndt/leak-testing", "Leak testing services"]],
  [/hardness/, ["/inspection/ndt-inspection-services/conventional-ndt/hardness-testing", "Hardness testing services"]],
  [/(^|[-/])pmi([-/]|$)|positive-material/, ["/inspection/ndt-inspection-services/conventional-ndt/positive-material-identification", "Positive material identification (PMI)"]],
  [/holiday/, ["/inspection/ndt-inspection-services/conventional-ndt/holiday-testing", "Holiday testing services"]],
  [/ferrite/, ["/inspection/ndt-inspection-services/conventional-ndt/ferrite-testing", "Ferrite testing services"]],
  [/acfm/, ["/inspection/ndt-inspection-services/advanced-ndt/acfm-inspection", "ACFM inspection services"]],
  [/(^|[-/])iris([-/]|$)|heat-exchanger-tube|tube-inspection/, ["/inspection/ndt-inspection-services/advanced-ndt/iris-tube-inspection", "IRIS and tube inspection services"]],
  [/(^|[-/])mfl([-/]|$)|magnetic-flux|tank-floor/, ["/inspection/ndt-inspection-services/advanced-ndt/mfl-tank-floor-inspection", "MFL tank floor inspection"]],
  [/pulsed-eddy|(^|[-/])pec([-/]|$)/, ["/inspection/ndt-inspection-services/advanced-ndt/pulsed-eddy-current", "Pulsed eddy current (PEC) inspection"]],
  [/thermograph|infrared/, ["/inspection/ndt-inspection-services/advanced-ndt/infrared-thermography", "Infrared thermography services"]],
  [/shearograph/, ["/inspection/ndt-inspection-services/advanced-ndt/laser-shearography", "Laser shearography services"]],
  [/digital-radiograph|computed-radiograph/, ["/inspection/ndt-inspection-services/advanced-ndt/digital-radiography", "Digital radiography services"]],
  [/automated-ultrasonic|(^|[-/])aut([-/]|$)|corrosion-mapping/, ["/inspection/ndt-inspection-services/advanced-ndt/automated-ultrasonic-testing", "Automated ultrasonic testing (AUT)"]],
];
const serviceFor = (p) => SERVICES.find(([re]) => re.test(p))?.[1] || null;

/** The block for a path, or null. Pure: same answer in the browser and the build. */
export function intentRouteFor(rawPath) {
  const p = (rawPath || "").replace(/\/+$/, "") || "/";
  const b = ruleFor(p);
  if (!b) return null;
  const links = b.links.filter(([href]) => href.split("?")[0] !== p);
  return links.length >= 2 ? { ...b, links } : null;
}

// 2026-10-24: searches like "ndt calgary", "ndt houston", "ndt services in huntsville al" landed on the
// city training or consulting page; those pages now point to the city's NDT inspection hub.
const CITY_HUBS = { houston: "Houston", calgary: "Calgary", phoenix: "Phoenix", huntsville: "Huntsville" };

function ruleFor(p) {
  const city = /^\/(?:ndt-training|consulting\/ndt-consulting|ndt-consulting)-([a-z-]+)$/.exec(p)?.[1];
  if (city && CITY_HUBS[city]) {
    const name = CITY_HUBS[city];
    const training = p.startsWith("/ndt-training-");
    return block("place", training ? `Looking for NDT inspection in ${name}, or practice before training?` : `Looking for NDT inspection in ${name}?`,
      training ? `If you need inspection carried out rather than training, the ${name} inspection page covers the methods, codes and how to request a quotation. If you are training, practise with the free tests and the simulator.`
               : `If you need inspection carried out rather than Level III consulting, the ${name} inspection page covers the methods, codes and how to request a quotation.`,
      training ? [[`/inspection-services-${city}`, `NDT inspection services in ${name}`], L.tests, L.practical]
               : [[`/inspection-services-${city}`, `NDT inspection services in ${name}`], [`/ndt-training-${city}`, `NDT training in ${name}`], L.consultingL3]);
  }
  if (EXCLUDE.test(p)) return null;
  const mk = methodFor(p);
  const api = /api-(510|570|653)/.exec(p)?.[1];
  const level3 = /level-iii|level-3|(^|[-/])l3([-/]|$)/.test(p);

  // 1. Careers and pay -> training + Practical NDT (owner's example).
  if (/salary|career|how-to-become|become-an?-|apprentice|is-ndt-a-good|welder-to|veteran|no-experience|which-ndt-method/.test(p) && !/job-costing|crm-/.test(p)) {
    const first = level3 ? L.l3 : api ? meth("ut", "training") : /cwi/.test(p) ? meth("vt", "training") : mk ? meth(mk, "training") : L.l2;
    return block("careers", "Turn the pay data into a plan",
      "Pay in NDT follows certification level, method and documented hours. Atlantis trains to ASNT SNT-TC-1A, led by an ASNT NDT Level III, and Practical NDT gives you scan practice on a 3D simulator before you reach a real job.",
      [first, L.practical, L.tests]);
  }
  // 2. Exam preparation -> practice tests + simulator + training.
  if (/practice-questions|practice-test|mock-exam|study-guide|exam|body-of-knowledge|pass-rate|question-bank|quiz/.test(p)) {
    const train = level3 ? L.l3 : api ? meth("ut", "training") : /cwi/.test(p) ? meth("vt", "training") : mk ? meth(mk, "training") : L.l2;
    const sim = mk ? meth(mk, "sim") : api ? meth("ut", "sim") : L.practical;
    return block("exam", "Practise before the exam",
      "Written papers test what you know; employers and practical examinations test what you can do with a probe in your hand. Use the free practice tests to find your gaps, then practise the technique.",
      [L.tests, sim, train]);
  }
  // 3. Calculators and tools -> consulting or ERP (owner's example).
  if (/^\/tools(\/|$)|calculator|estimator/.test(p)) {
    if (/digital-twin/.test(p)) return block("tools", "Put the numbers to work", "A calculator gives you an estimate. A digital twin keeps the inspection data, damage and history for every asset in one place.", [L.twin, L.integrity, L.erp]);
    if (/3d-scanning/.test(p)) return block("tools", "Put the numbers to work", "Use the estimate to scope a scan, then get a quotation for your site.", [L.scan, L.twin, L.erp]);
    if (/roi|certification-cost|calibration|certification-tracking|tracker|report-completeness|erp|software/.test(p))
      return block("tools", "Run this in a system, not a spreadsheet", "If you are tracking this by hand, Atlantis ERP keeps certifications, calibration, jobs and reports in one place, configured to how your company works. Demo on request.", [L.erp, L.erpCerts, L.erpReports]);
    if (/hours-planner/.test(p)) return block("tools", "Turn the plan into a programme", "Hours only count when your written practice says how they are earned and recorded. A Level III can set the programme up, and training fills the classroom hours.", [L.programme, L.l2, L.practical]);
    if (/corrosion-rate|inspection-interval|thickness-calculator/.test(p))
      return block("tools", "From a calculation to an inspection plan", "A remaining-life or interval figure is only as good as the thickness data behind it. Atlantis carries out the thickness surveys and NDE, and Atlantis ERP keeps the readings and due dates.", [L.api570, L.rbi, L.erpAssets]);
    return block("tools", "Need this applied to your job?", "A calculator answers one question. A Level III turns it into a written technique, and the simulator lets your team practise it.", [L.procedure, meth(mk || "ut", "sim"), meth(mk || "ut", "training")]);
  }
  // 4. Templates and resources -> ERP + custom templates.
  if (/^\/(resources|ndt-report-templates)(\/|$)|template|checklist/.test(p)) {
    if (/procedure|written-practice/.test(p)) return block("templates", "Need it written to your code?", "Templates get you started. An ASNT NDT Level III can write or review the document against your code, client specification and written practice.", [L.procedure, L.programme, L.templates]);
    return block("templates", "Beyond templates", "When the same job, procedure, equipment and technician details are typed on every report, move the work into software, or ask us for templates in your own format.", [L.erpReports, L.erpCerts, L.templates]);
  }
  // 5. API inspection codes -> inspector services + inspection (never API training).
  if (api && /certification|training|course/.test(p)) return block("codes", `Next steps for API ${api} candidates and employers`, `Most API ${api} work runs on ultrasonic thickness and flaw data. Candidates can strengthen their UT skills and practise on the simulator; owner-operators can bring in Atlantis for the NDE and data review behind their API ${api} programme, with the Authorized Inspector staying their own.`, [meth("ut", "training"), meth("ut", "sim"), L["api" + api]]);
  if (api === "510") return block("codes", "Need the NDE behind your API 510 programme?", "Atlantis carries out the thickness surveys and NDE and reviews the data; your Authorized Inspector stays inspector of record. Atlantis ERP keeps the readings in one system.", [L.api510, L.vessel, L.erpAssets]);
  if (api === "570") return block("codes", "Need the NDE behind your API 570 programme?", "Atlantis carries out the CML thickness surveys and NDE and reviews the data; your Authorized Inspector stays inspector of record. Atlantis ERP keeps the CMLs and readings in one system.", [L.api570, L.cml, L.erpAssets]);
  if (api === "653") return block("codes", "Need the NDE behind your API 653 programme?", "Atlantis carries out tank floor, shell and settlement NDE and reviews the data; your Authorized Inspector stays inspector of record.", [L.api653, L.tank, L.erpAssets]);
  if (/api-5(79|80|81)|fitness-for-service|(^|[-/])ffs([-/]|$)|(^|[-/])rbi([-/]|$)|risk-based/.test(p)) return block("codes", "From assessment to a plan", "Assessments are only as good as the inspection data behind them. Atlantis carries out the NDE that feeds them, and a digital twin keeps the history in view.", [L.rbi, L.integrity, L.twin]);
  if (/nace|cui|corrosion-under-insulation/.test(p)) return block("codes", "Need this inspected?", "Atlantis carries out corrosion and CUI inspection and keeps the findings tied to each asset.", [L.cui, L.rbi, L.erpAssets]);
  // 6. Certification schemes -> training + programme set-up + simulator.
  if (/asnt|snt-tc-1a|cp-189|iso-9712|(^|[-/])accp|(^|[-/])pcn([-/]|$)|nas-410|en-4179|written-practice|certification|level-(i|ii|iii|1|2|3)([-/]|$)/.test(p))
    return block("certify", "Get certified, or certify your team", "Individuals train and sit examinations under their employer's written practice. Employers need that written practice, and a Level III to run it. Atlantis does both.", [level3 ? L.l3 : L.l2, L.programme, L.practical]);
  // 7. Codes and standards with a method -> procedure + service + training.
  if (/^\/standards|asme|aws-d1|(^|[-/])b31|astm|(^|[-/])en-iso|nbic|section-v|section-viii|acceptance-criteria/.test(p)) {
    if (mk) return block("codes", "Need this applied on your job?", "Atlantis writes and reviews procedures to this code, carries out the examination, and trains technicians in the method.", [L.procedure, meth(mk, "service"), meth(mk, "training")]);
    if (/weld|aws|b31|section-viii/.test(p)) return block("codes", "Need this applied on your job?", "Atlantis writes and reviews procedures to this code, inspects welds against it, and trains technicians in visual weld inspection.", [L.procedure, L.weld, meth("vt", "training")]);
    return block("codes", "Need this applied on your job?", "Atlantis writes and reviews procedures to the codes you work under, and provides the inspection and the training.", [L.procedure, L.inspection, L.training]);
  }
  // 8. Training pages -> practice tests + simulator.
  if (/^\/(training|ndt-training|ndt-level-|[a-z-]+-testing-training|phased-array-training|tofd-training|corporate-training|corporate-ndt-training|[a-z-]+-ndt-training|training-)/.test(p))
    return block("training", "Practise between sessions", "Free practice tests and downloadable question packs show where you stand, and Practical NDT lets you practise scans on a 3D simulator before the practical examination.", [L.tests, mk ? meth(mk, "sim") : L.practical, L.practical]);
  // 9. Glossary and method explainers -> service + training + simulator.
  const svc = serviceFor(p);
  if (svc) return block("method", "Need this carried out?", "Atlantis provides this as an inspection service, alongside ASNT SNT-TC-1A training and Level III consulting.", [svc, L.inspection, mk ? meth(mk, "training") : L.training]);
  if (mk) return block("method", `Need ${M[mk][3]} done, or learned?`, `Atlantis provides ${M[mk][3]} as an inspection service, trains technicians in it, and lets teams practise it on the Practical NDT simulator.`, [meth(mk, "service"), meth(mk, "training"), meth(mk, "sim")]);
  if (/^\/glossary\//.test(p)) return block("method", "Need this on your job?", "Atlantis provides NDT inspection, ASNT SNT-TC-1A training and Level III consulting.", [L.inspection, L.training, L.consultingL3]);
  // 10. Costs.
  if (/cost|fee|pricing/.test(p)) {
    if (/inspection/.test(p)) return block("cost", "Get a quotation for your scope", "Inspection cost depends on method, access, location and reporting. Send us the scope and we will quote it.", [L.inspection, ["/contact?service=inspection&subject=Inspection%20quotation", "Request an inspection quotation"], L.erp]);
    return block("cost", "Get fees for your region", "Fees vary by region and package. Contact us and we will reply with fees for where you are.", [L.training, ["/contact?service=training&subject=Training%20fees", "Ask for training fees in your region"], L.tests]);
  }
  // 11. Everything else on the blog.
  if (/^\/blog\//.test(p)) return block("blog", "Where Atlantis can help", "Atlantis provides NDT inspection, ASNT SNT-TC-1A training, Level III consulting and NDT software.", [L.inspection, L.training, L.consultingL3]);
  return null;
}

function block(kind, h, p, links) {
  const seen = new Set();
  const out = links.filter(([href]) => href && !seen.has(href) && seen.add(href));
  return { kind, h, p, links: out };
}

/** Every internal destination the rules can emit (build guard checks each is built). */
export function allRouteTargets() {
  const s = new Set();
  for (const v of Object.values(L)) s.add(v[0].split("?")[0]);
  for (const m of Object.values(M)) for (const x of m.slice(0, 3)) s.add(x);
  for (const [, [h]] of SERVICES) s.add(h);
  for (const c of Object.keys(CITY_HUBS)) s.add(`/inspection-services-${c}`);
  return [...s].filter((h) => h.startsWith("/") && h !== "/contact");
}

const esc = (s) => String(s ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const escHref = (s) => String(s).replace(/&(?!amp;)/g, "&amp;");

/** Crawler markup; IntentRouteBlock.tsx renders the same classes and copy. */
export function intentRouteHtml(b) {
  const lis = b.links.map(([href, label]) => `<li><a href="${escHref(href)}" class="text-primary underline underline-offset-2 hover:no-underline" data-route-link="${esc(b.kind)}" data-cta-variant="route-${esc(b.kind)}">${esc(label)}</a></li>`).join("");
  return `<section ${ROUTE_MARKER} data-route-kind="${esc(b.kind)}" class="container mx-auto max-w-4xl px-6 py-6" aria-label="${esc(b.h)}"><div class="rounded-xl border-l-4 border-primary bg-primary/5 p-6"><h2 class="text-xl md:text-2xl font-bold mb-2">${esc(b.h)}</h2><p class="text-slate-700 mb-3">${esc(b.p)}</p><ul class="list-disc pl-6 space-y-1">${lis}</ul></div></section>`;
}
