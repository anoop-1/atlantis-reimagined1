// Free downloads + "custom templates" quotation call to action (owner, 2026-10-24).
//
// Owner: "my onedrive has a lot of report templates, add those to the respective page as for users
// to download directly instead of them reaching out to me one by one, include practice questions
// for UT, MT, PT & RT general and specific for level II ... Below the free templates, let us add a
// statement, a call to action button for more templates or for more custom templates respective to
// your industry, your specific method ... We give out a few free material templates, and rest of it
// they will have to buy it from Atlantis entity. Once they contact us, we'll give them relevant apt
// quotation."
//
// One list for both layers: React (src/components/FreeDownloadsBlock.tsx) and the crawler
// (scripts/free-downloads-2026-10.mjs). Files:
//   public/templates/xlsx/<slug>.xlsx            scripts/build-report-templates-xlsx.py
//   public/downloads/practice/<m>-level-2-*.pdf   scripts/build-practice-packs.py
// No prices anywhere (CLAUDE.md §18): the call to action asks for a quotation.

export const TEMPLATES = {
  "ut-weld": { title: "UT weld inspection report", method: "UT", file: "/templates/xlsx/ut-weld-inspection-report.xlsx", page: "/ndt-report-templates/ut-weld-inspection-report" },
  "ut-thickness": { title: "UT thickness survey report", method: "UT", file: "/templates/xlsx/ut-thickness-survey-report.xlsx", page: "/ndt-report-templates/ut-thickness-survey-report" },
  pt: { title: "Liquid penetrant (PT) report", method: "PT", file: "/templates/xlsx/pt-liquid-penetrant-report.xlsx", page: "/ndt-report-templates/pt-liquid-penetrant-report" },
  mt: { title: "Magnetic particle (MT) report", method: "MT", file: "/templates/xlsx/mt-magnetic-particle-report.xlsx", page: "/ndt-report-templates/mt-magnetic-particle-report" },
  rt: { title: "Radiography (RT) report", method: "RT", file: "/templates/xlsx/rt-radiography-report.xlsx", page: "/ndt-report-templates/rt-radiography-report" },
  vt: { title: "Visual weld inspection (VT) report", method: "VT", file: "/templates/xlsx/vt-visual-inspection-report.xlsx", page: "/ndt-report-templates/vt-visual-inspection-report" },
  paut: { title: "Phased array (PAUT) report", method: "PAUT", file: "/templates/xlsx/paut-phased-array-report.xlsx", page: "/ndt-report-templates/paut-phased-array-report" },
  tofd: { title: "TOFD report", method: "TOFD", file: "/templates/xlsx/tofd-report.xlsx", page: "/ndt-report-templates/tofd-report" },
};

const pack = (m, name, kind, n) => ({
  title: `${m} Level II ${kind} practice questions`,
  method: m,
  kind,
  count: n,
  methodName: name,
  file: `/downloads/practice/${m.toLowerCase()}-level-2-${kind.toLowerCase()}-practice-questions.pdf`,
});
export const PACKS = {
  "ut-general": pack("UT", "Ultrasonic Testing", "General", 40),
  "ut-specific": pack("UT", "Ultrasonic Testing", "Specific", 20),
  "mt-general": pack("MT", "Magnetic Particle Testing", "General", 40),
  "mt-specific": pack("MT", "Magnetic Particle Testing", "Specific", 20),
  "pt-general": pack("PT", "Liquid Penetrant Testing", "General", 40),
  "pt-specific": pack("PT", "Liquid Penetrant Testing", "Specific", 20),
  "rt-general": pack("RT", "Radiographic Testing", "General", 40),
  "rt-specific": pack("RT", "Radiographic Testing", "Specific", 20),
};

const ALL_PACKS = Object.keys(PACKS).map((k) => `pdf:${k}`);
const ALL_TEMPLATES = Object.keys(TEMPLATES).map((k) => `xlsx:${k}`);
const UT = ["xlsx:ut-weld", "xlsx:ut-thickness", "pdf:ut-general", "pdf:ut-specific"];
const MT = ["xlsx:mt", "pdf:mt-general", "pdf:mt-specific"];
const PT = ["xlsx:pt", "pdf:pt-general", "pdf:pt-specific"];
const RT = ["xlsx:rt", "pdf:rt-general", "pdf:rt-specific"];

// [exact paths, items]. Paths not listed get no block.
export const PLACEMENTS = [
  [["/ndt-practice-tests", "/ndt-level-2-training", "/ndt-level-1-training", "/asnt-certification", "/training", "/ndt-training-online"], ALL_PACKS],
  [["/ndt-report-templates", "/resources"], ALL_TEMPLATES],
  [["/ultrasonic-testing", "/ultrasonic-testing-training", "/blog/ut-level-2-practice-questions", "/ndt-report-templates/ut-weld-inspection-report", "/ndt-report-templates/ut-thickness-survey-report"], UT],
  [["/phased-array-ut", "/inspection/phased-array-inspection-services", "/ndt-report-templates/paut-phased-array-report", "/blog/paut-level-2-practice-questions-2026-free-mock-exam"], ["xlsx:paut", "xlsx:ut-weld", "pdf:ut-general", "pdf:ut-specific"]],
  [["/tofd-testing", "/ndt-report-templates/tofd-report", "/blog/tofd-level-2-practice-questions-2026-free-mock-exam"], ["xlsx:tofd", "xlsx:paut", "pdf:ut-general"]],
  [["/corrosion-mapping"], ["xlsx:ut-thickness", "pdf:ut-general"]],
  [["/magnetic-particle-testing", "/magnetic-particle-testing-training", "/blog/mt-level-2-practice-questions-2026-free-mock-exam", "/ndt-report-templates/mt-magnetic-particle-report"], MT],
  [["/penetrant-testing", "/penetrant-testing-training", "/blog/pt-level-2-practice-questions-2026-free-mock-exam", "/ndt-report-templates/pt-liquid-penetrant-report"], PT],
  [["/radiographic-testing", "/radiographic-testing-training", "/blog/rt-level-2-practice-questions-2026-free-mock-exam", "/ndt-report-templates/rt-radiography-report", "/inspection/ndt-inspection-services/advanced-ndt/digital-radiography"], RT],
  [["/visual-testing", "/visual-testing-training", "/blog/vt-level-2-practice-questions-2026-free-mock-exam", "/ndt-report-templates/vt-visual-inspection-report"], ["xlsx:vt", "xlsx:mt", "xlsx:pt"]],
  [["/inspection/ndt-inspection-services/conventional-ndt"], ["xlsx:ut-weld", "xlsx:ut-thickness", "xlsx:mt", "xlsx:pt", "xlsx:rt", "xlsx:vt"]],
  [["/inspection/ndt-inspection-services/advanced-ndt"], ["xlsx:paut", "xlsx:tofd", "xlsx:ut-thickness"]],
];

export const DOWNLOADS_COPY = {
  h2: "Free downloads",
  intro: "Download these directly: no form and no email address needed.",
  templateNote: "Excel workbook, written as Atlantis Engineering Consultants with no logo, so you can add your own.",
  packNote: "PDF with an answer key and explanations.",
  cta: {
    h3: "Need more templates, or templates made for your work?",
    p: "These downloads are a free starter set. Atlantis NDT also prepares report templates, practice and qualification exams, and document packs matched to your industry, method, code and client format: PAUT and TOFD data sheets, IRIS and eddy-current tube reports, MFL tank-floor reports, hardness, PMI and holiday-test records, calibration and equipment logs, and complete report packs aligned with your written practice. Tell us what you need and we will reply with a quotation.",
    button: "Request custom templates",
    href: "/contact?service=templates&subject=Custom%20NDT%20templates%20and%20documents",
    secondary: [["/ndt-report-templates", "All free report templates"], ["/ndt-practice-tests", "All practice tests"]],
  },
};

export const DOWNLOADS_MARKER = 'data-free-downloads="2026-10"';

// Inline colours: published pages style every link in <main> as an underlined primary-colour link,
// which made the button labels unreadable on the blue and navy fills. Same values in React.
export const DL_STYLE = {
  button: "color:#ffffff;text-decoration:none",
  ctaButton: "color:#0f172a;text-decoration:none",
  onDark: "color:#ffffff",
};

/** Resolve the items for a path (exact match, trailing slash ignored), or null. */
export function downloadsFor(path) {
  const p = (path || "").replace(/\/+$/, "") || "/";
  const hit = PLACEMENTS.find(([paths]) => paths.includes(p));
  if (!hit) return null;
  const items = hit[1].map((key) => {
    const [kind, id] = key.split(":");
    if (kind === "xlsx") { const t = TEMPLATES[id]; return { key, kind, title: t.title, file: t.file, badge: "Excel", note: DOWNLOADS_COPY.templateNote, page: p === t.page ? null : t.page }; }
    const k = PACKS[id];
    return { key, kind, title: k.title, file: k.file, badge: "PDF", note: `${k.count} questions. ${DOWNLOADS_COPY.packNote}`, page: null };
  });
  return { items, secondary: DOWNLOADS_COPY.cta.secondary.filter(([href]) => href !== p) };
}

const esc = (s) => String(s ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

/** Crawler markup; the React block renders the same classes and copy. */
export function downloadsHtml(block) {
  const c = DOWNLOADS_COPY.cta;
  const cards = block.items.map((it) => `<li class="rounded-xl border border-slate-200 bg-white p-4 flex flex-col gap-2"><span class="text-xs font-semibold uppercase tracking-wide text-primary">${esc(it.badge)}</span><span class="font-semibold text-slate-900">${esc(it.title)}</span><span class="text-sm text-slate-600">${esc(it.note)}</span><span class="mt-auto flex flex-wrap gap-3 text-sm"><a href="${esc(it.file)}" download class="inline-flex items-center px-4 py-2 rounded-lg bg-primary text-primary-foreground font-semibold" data-download="${esc(it.key)}" style="${DL_STYLE.button}">Download ${esc(it.badge === "Excel" ? ".xlsx" : "PDF")}</a>${it.page ? `<a href="${esc(it.page)}" class="text-primary underline self-center">About this template</a>` : ""}</span></li>`).join("");
  const sec = block.secondary.map(([h, l]) => `<a href="${esc(h)}" class="text-white underline" style="${DL_STYLE.onDark}">${esc(l)}</a>`).join(" · ");
  return `<section ${DOWNLOADS_MARKER} class="py-10"><div class="container mx-auto max-w-5xl px-6"><h2 class="text-2xl md:text-3xl font-bold text-slate-900 mb-2">${esc(DOWNLOADS_COPY.h2)}</h2><p class="text-slate-600 mb-5">${esc(DOWNLOADS_COPY.intro)}</p><ul class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 list-none p-0">${cards}</ul><div class="mt-6 rounded-xl bg-slate-900 text-white p-6" data-template-quote="2026-10"><h3 class="text-xl font-bold mb-2">${esc(c.h3)}</h3><p class="text-slate-200 mb-4">${esc(c.p)}</p><p class="flex flex-wrap items-center gap-4"><a href="${esc(c.href)}" class="inline-flex items-center px-5 py-3 rounded-lg bg-white text-slate-900 font-semibold" data-cta-variant="custom-templates-quote" style="${DL_STYLE.ctaButton}">${esc(c.button)}</a>${sec ? `<span class="text-sm text-slate-300">${sec}</span>` : ""}</p></div></div></section>`;
}
