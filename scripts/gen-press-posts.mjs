// Generate 3 remaining press posts (post 1 hand-authored).
import { writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dirname, '..', 'src/pages/press');
mkdirSync(outDir, { recursive: true });

const POSTS = [
  {
    slug: 'saep-1142-acs-01-pts-templates',
    title: 'Pre-Built Operator Quality Templates: Saudi Aramco SAEP-1142, ADNOC ACS-01, Petronas PTS',
    metaTitle: 'Pre-Built Operator Quality Templates: SAEP-1142, ADNOC ACS-01, Petronas PTS — Atlantis NDT',
    metaDesc: 'Atlantis NDT ERP ships with pre-configured operator quality clause libraries for the top 30 oil & gas operators globally. Inspection contractors pass approved-vendor audits in days, not months.',
    category: 'Industry',
    paragraphs: [
      "Inspection service companies bidding on Saudi Aramco, ADNOC, QatarEnergy, KOC, ONGC HVT-INSP, and similar major-operator contracts spend three to six months building operator-specific quality clauses into their internal procedures before they can even submit a vendor application. Atlantis NDT has eliminated that cycle.",
      "The Atlantis NDT ERP operator-template library now includes pre-configured quality clauses for Saudi Aramco (SAEP-1112 personnel qualification, SAEP-1142 inspection, SAES-H-001 coating, SAES-W-011 welding), ADNOC Company Standards (ACS-01 inspection, ACS-02 NDE, ACS-08 personnel), QatarEnergy NFPS (North Field Production Standard) for cryogenic LNG, Shell DEP (Design Engineering Practices) for offshore and downstream, BP ETP / GIS, ExxonMobil GP, Chevron CC-CHV, TotalEnergies TGS / GS-PVV, Petronas PTS (Petronas Technical Standards), KOC (Kuwait Oil Company) qualification scheme, ADCO and ZADCO requirements, and 20+ additional major-operator schemes covering offshore, refining, petrochemical, and LNG sectors.",
      "Each operator template includes: scope-of-work definitions per the operator's bulletin, qualification-prerequisite mapping to ASNT SNT-TC-1A and ISO 9712 schemes, report-format templates aligned to operator-specified PDF structures, audit-evidence package builder pre-configured against the operator's vendor-audit checklist, and quarterly automatic updates when operators publish revisions.",
      "For an inspection contractor entering a new operator's approved-vendor list, the template library typically compresses the 3-6 month internal-procedure build into a 2-week configuration cycle. The contractor's existing ASNT certifications, calibration records, and inspection procedures are mapped to the operator's required format automatically, with deviations flagged for engineering review. The audit-evidence package can be assembled in 30 seconds and is structured per the operator's audit-clause matrix.",
      "The template library is updated quarterly by Atlantis NDT's Level III consulting team, with breaking-change notifications sent to affected customers. Operator-specific feature requests can be submitted through the customer portal; common requests are added to the public template library at no additional cost."
    ],
  },
  {
    slug: 'iso-17025-calibration-laboratory-erp',
    title: 'Calibration Laboratory ERP: ISO/IEC 17025 §7.8 Reporting Native, GUM Uncertainty Built-In',
    metaTitle: 'ISO/IEC 17025 Calibration Laboratory ERP — Native §7.8 Reporting, GUM Uncertainty',
    metaDesc: 'Atlantis NDT ERP calibration-laboratory configuration covers ISO/IEC 17025:2017 §7.8 natively, with JCGM 100:2008 GUM uncertainty budgets, customer-asset traceability, and ANAB / UKAS / NABL accreditation support.',
    category: 'Industry',
    paragraphs: [
      "ISO/IEC 17025:2017 §7.8 (Reporting of Results) is the audit-determinant clause for accredited calibration laboratories. Yet 60% of calibration labs surveyed at the 2025 NCSL International workshop reported that their certificate generation workflow still depends on Word templates manually populated from spreadsheets — a process that introduces transcription errors, makes traceability-chain documentation inconsistent, and consumes 30-50% of laboratory production time.",
      "Atlantis NDT ERP's calibration-laboratory configuration solves this. The platform ships with native ISO/IEC 17025:2017 §7.8 certificate generation: customer information, laboratory identification, instrument under calibration with manufacturer / model / serial / asset ID, environmental conditions (temperature, humidity, pressure with stability tolerances), reference standards traceability chain (to NIST, NPL, PTB, NIM, or NMIA national standards), measurement results with as-found / as-left values, expanded uncertainty per JCGM 100:2008 (GUM) with k=2 coverage factor and effective degrees of freedom, decision rule per ILAC G8 or customer-specified rule, validity statement, and authorized signatory.",
      "The uncertainty budget builder supports Type A (statistical, from repeated measurements with t-distribution coverage) and Type B (other, from reference certificates, manufacturer specifications, environmental drift) contributions. Sensitivity coefficients can be entered for non-trivial measurement models. Combined standard uncertainty and expanded uncertainty are calculated automatically. Effective degrees of freedom are computed via Welch-Satterthwaite for proper coverage factor selection.",
      "Customer-asset receipt and dispatch workflow is integrated: barcode-driven check-in, environmental conditioning timer, technician assignment with competency verification (ISO 17025 §6.2), measurement execution with reference-standard verification, supervisor review, and dispatch tracking with carrier integration. The customer portal provides historical certificate retrieval with full version history and audit trail.",
      "ANAB, A2LA, UKAS, DAkkS, NABL, NATA, and ENAC accreditation cycles are supported via the audit-package builder. Auditors receive a pre-assembled evidence package covering personnel competency files (§6.2), equipment management (§6.4), reference materials (§6.6), method validation (§7.2), uncertainty estimation (§7.6), method verification (§7.7), reporting (§7.8), nonconformity workflow (§7.10), data control (§7.11), management review (§8.9), and corrective action (§8.7). Customer laboratories using the platform have completed annual surveillance audits with zero software-related findings since the 2024 platform release."
    ],
  },
  {
    slug: 'free-templates-2026-launch',
    title: 'Free Editable Templates: 16 NDT / Inspection / QA Templates Now Available',
    metaTitle: '16 Free Editable NDT Templates — Procedure, Inspection, Safety, RBI, WPQR — Atlantis NDT',
    metaDesc: 'Atlantis NDT releases 16 free editable templates — NDT procedure (SNT-TC-1A), API 510/570/653 reports, PWHT records, RBI worksheet (API 581), calibration certificates (ISO 17025), welder qualification (WPQR), ITP, and more.',
    category: 'Resources',
    paragraphs: [
      "Atlantis NDT today released 16 free editable templates for the inspection community covering NDT procedures, API inspection reports, safety, PWHT records, RBI worksheets, calibration certificates, welder qualification, written practices, ITPs, and audit-finding trackers. All templates are downloadable directly from atlantisndt.com/resources as native Excel (.xlsx) or Word (.docx) files with no email gate, no registration, and no embedded tracking.",
      "The 16 templates fall into four categories. Inspection workflow: NDT Inspection Checklist, NDT Safety Checklist, API 510 Pressure Vessel Inspection Report, API 570 Piping Inspection Record, API 653 Tank Inspection Template, PWHT Record (per ASME B31.3 / Section VIII). Qualification and certification: NDT Procedure Template (SNT-TC-1A / ISO 9712 compliant), Training Requirements Matrix (ASNT / ISO 9712 / PCN), Welder Qualification Record (WPQR) per ASME Section IX, NDT Written Practice (SNT-TC-1A), ASNT Level III Study Guide. Engineering and integrity: RBI Worksheet (API 581) for damage-mechanism scoring and POF/COF risk-matrix. Calibration and quality: Calibration Certificate Template (ISO/IEC 17025 §7.8), Inspection &amp; Test Plan (ITP), Audit Finding Tracker (NCR/CAPA).",
      "Each template was authored by ASNT Level III certified consultants with active inspection experience. Fields and sections map to the relevant codes and standards (API 510/570/653, ASME Section V / VIII / IX, AWS D1.1, ISO 9712, ISO/IEC 17025, NACE/AMPP). Where applicable, templates include multi-sheet structures (the API 653 template has 6 sheets covering cover data, shell UT, floor, roof, settlement survey, recommendations, and sign-off) so users can adapt them to large inspection campaigns without restructuring.",
      "The templates have already been downloaded by inspection contractors, calibration laboratories, welding fabrication shops, and asset owners across 80+ countries since their initial release. Atlantis NDT plans to expand the free template library to 30+ templates over the next two quarters, covering additional disciplines including AS9100D supplier audit checklists, NAS-410 personnel qualification matrices, API 1163 ILI vendor qualification, and DOT PHMSA pipeline integrity reporting.",
      "Custom templates for operator-specific quality clauses (Saudi Aramco SAEP, ADNOC ACS, Petronas PTS, etc.) are available on request from info@atlantisndt.com. Standard custom-build turnaround is 5-7 business days for $1,500-$3,500 depending on complexity and the number of customer-specific fields."
    ],
  },
];

for (const p of POSTS) {
  const url = `https://atlantisndt.com/press/${p.slug}`;
  const componentName = 'Press' + p.slug.split('-').map(w => w[0].toUpperCase() + w.slice(1)).join('');
  const paragraphs = p.paragraphs.map(para => `        <p className="text-slate-700 leading-relaxed mb-4">${para.replace(/"/g, '&quot;').replace(/&/g, '&amp;').replace(/&amp;quot;/g, '&quot;')}</p>`).join('\n');
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "headline": p.title,
    "datePublished": "2026-05-13",
    "dateModified": "2026-05-13",
    "author": { "@type": "Organization", "name": "Atlantis NDT", "url": "https://atlantisndt.com" },
    "publisher": { "@type": "Organization", "name": "Atlantis NDT", "url": "https://atlantisndt.com", "logo": { "@type": "ImageObject", "url": "https://atlantisndt.com/atlantis.png" } },
    "url": url,
    "mainEntityOfPage": { "@type": "WebPage", "@id": url },
    "description": p.metaDesc,
    "articleSection": p.category,
  };

  const tsx = `import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { Link } from "react-router-dom";

const URL = ${JSON.stringify(url)};

export default function ${componentName}() {
  const structuredData = ${JSON.stringify(structuredData, null, 2).split('\n').join('\n  ')};
  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      <SEOHead
        title=${JSON.stringify(p.metaTitle)}
        description=${JSON.stringify(p.metaDesc)}
        keywords=${JSON.stringify(p.slug.replace(/-/g, ' ') + ', Atlantis NDT, ' + p.title.split(':')[0].toLowerCase())}
        canonical={URL}
        structuredData={structuredData}
      />
      <Breadcrumbs />
      <article className="container mx-auto max-w-3xl px-6 py-16">
        <div className="text-sm text-blue-700 font-semibold mb-2">${p.category} · 2026-05-13</div>
        <h1 className="text-4xl font-bold mb-6">${p.title.replace(/"/g, '&quot;')}</h1>
${paragraphs}

        <div className="mt-12 p-6 bg-slate-100 rounded-lg">
          <h3 className="font-semibold mb-3">Related Resources</h3>
          <div className="grid sm:grid-cols-2 gap-3 text-sm">
            <Link to="/ndt-erp-solution" className="text-blue-600 hover:underline">Atlantis NDT ERP Product Page →</Link>
            <Link to="/erp-modules" className="text-blue-600 hover:underline">11 ERP Modules →</Link>
            <Link to="/erp-industries" className="text-blue-600 hover:underline">12 Industry Verticals →</Link>
            <Link to="/resources" className="text-blue-600 hover:underline">Free Templates →</Link>
            <Link to="/press" className="text-blue-600 hover:underline">More Press Releases →</Link>
          </div>
        </div>
      </article>
      <ContactDetails />
    </div>
  );
}
`;
  writeFileSync(join(outDir, `${p.slug}.tsx`), tsx);
  console.log(`  wrote press/${p.slug}.tsx`);
}

// Emit patch files
const lazy = POSTS.map(p => {
  const componentName = 'Press' + p.slug.split('-').map(w => w[0].toUpperCase() + w.slice(1)).join('');
  return `const ${componentName} = lazy(() => import("./pages/press/${p.slug}"));`;
}).join('\n') + '\nconst PressHub = lazy(() => import("./pages/PressHub"));\nconst PressLaunch2026 = lazy(() => import("./pages/press/atlantis-ndt-erp-launch-2026"));';

const routes = POSTS.map(p => {
  const componentName = 'Press' + p.slug.split('-').map(w => w[0].toUpperCase() + w.slice(1)).join('');
  return `                  <Route path="/press/${p.slug}" element={<LazyRoute Component={${componentName}} />} />`;
}).join('\n') + '\n                  <Route path="/press" element={<LazyRoute Component={PressHub} />} />\n                  <Route path="/press/atlantis-ndt-erp-launch-2026" element={<LazyRoute Component={PressLaunch2026} />} />';

writeFileSync(join(__dirname, '_tier4-press-lazy.txt'), lazy + '\n');
writeFileSync(join(__dirname, '_tier4-press-routes.txt'), routes + '\n');

const prerender = [
  { path: '/press', title: 'Press & News | Atlantis NDT', description: 'Press releases, product launches, and industry insights from Atlantis NDT.' },
  { path: '/press/atlantis-ndt-erp-launch-2026', title: 'Atlantis NDT Launches Industry-First NDT ERP — 11 Modules, 12 Industries', description: 'Atlantis NDT today announced GA of its purpose-built NDT ERP platform.' },
  ...POSTS.map(p => ({ path: `/press/${p.slug}`, title: p.metaTitle, description: p.metaDesc })),
].map(e => ({ ...e, bodyH1: e.title, bodyText: e.description }));

writeFileSync(join(__dirname, '_tier4-press-prerender.json'), JSON.stringify(prerender, null, 2));
console.log(`\n  Total press pages: ${POSTS.length + 2} (hub + launch + 3 generated)`);
