import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { Link } from "react-router-dom";

const URL = "https://atlantisndt.com/press/free-templates-2026-launch";

export default function PressFreeTemplates2026Launch() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "headline": "Free Editable Templates: 16 NDT / Inspection / QA Templates Now Available",
    "datePublished": "2026-05-13",
    "dateModified": "2026-05-13",
    "author": {
      "@type": "Organization",
      "name": "Atlantis NDT",
      "url": "https://atlantisndt.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Atlantis NDT",
      "url": "https://atlantisndt.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://atlantisndt.com/atlantis.png"
      }
    },
    "url": "https://atlantisndt.com/press/free-templates-2026-launch",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://atlantisndt.com/press/free-templates-2026-launch"
    },
    "description": "Atlantis NDT releases 16 free editable templates — NDT procedure (SNT-TC-1A), API 510/570/653 reports, PWHT records, RBI worksheet (API 581), calibration certificates (ISO 17025), welder qualification (WPQR), ITP, and more.",
    "articleSection": "Resources"
  };
  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      <SEOHead
        title="16 Free Editable NDT Templates — Procedure, Inspection, Safety, RBI, WPQR — Atlantis NDT"
        description="Atlantis NDT releases 16 free editable templates — NDT procedure (SNT-TC-1A), API 510/570/653 reports, PWHT records, RBI worksheet (API 581), calibration certificates (ISO 17025), welder qualification (WPQR), ITP, and more."
        keywords="free templates 2026 launch, Atlantis NDT, free editable templates"
        canonical={URL}
        structuredData={structuredData}
      />
      <Breadcrumbs />
      <article className="container mx-auto max-w-3xl px-6 py-16">
        <div className="text-sm text-blue-700 font-semibold mb-2">Resources · 2026-05-13</div>
        <h1 className="text-4xl font-bold mb-6">Free Editable Templates: 16 NDT / Inspection / QA Templates Now Available</h1>
        <p className="text-slate-700 leading-relaxed mb-4">Atlantis NDT today released 16 free editable templates for the inspection community covering NDT procedures, API inspection reports, safety, PWHT records, RBI worksheets, calibration certificates, welder qualification, written practices, ITPs, and audit-finding trackers. All templates are downloadable directly from atlantisndt.com/resources as native Excel (.xlsx) or Word (.docx) files with no email gate, no registration, and no embedded tracking.</p>
        <p className="text-slate-700 leading-relaxed mb-4">The 16 templates fall into four categories. Inspection workflow: NDT Inspection Checklist, NDT Safety Checklist, API 510 Pressure Vessel Inspection Report, API 570 Piping Inspection Record, API 653 Tank Inspection Template, PWHT Record (per ASME B31.3 / Section VIII). Qualification and certification: NDT Procedure Template (SNT-TC-1A / ISO 9712 compliant), Training Requirements Matrix (ASNT / ISO 9712 / PCN), Welder Qualification Record (WPQR) per ASME Section IX, NDT Written Practice (SNT-TC-1A), ASNT Level III Study Guide. Engineering and integrity: RBI Worksheet (API 581) for damage-mechanism scoring and POF/COF risk-matrix. Calibration and quality: Calibration Certificate Template (ISO/IEC 17025 §7.8), Inspection &amp;amp; Test Plan (ITP), Audit Finding Tracker (NCR/CAPA).</p>
        <p className="text-slate-700 leading-relaxed mb-4">Each template was authored by ASNT Level III certified consultants with active inspection experience. Fields and sections map to the relevant codes and standards (API 510/570/653, ASME Section V / VIII / IX, AWS D1.1, ISO 9712, ISO/IEC 17025, NACE/AMPP). Where applicable, templates include multi-sheet structures (the API 653 template has 6 sheets covering cover data, shell UT, floor, roof, settlement survey, recommendations, and sign-off) so users can adapt them to large inspection campaigns without restructuring.</p>
        <p className="text-slate-700 leading-relaxed mb-4">The templates have already been downloaded by inspection contractors, calibration laboratories, welding fabrication shops, and asset owners across 80+ countries since their initial release. Atlantis NDT plans to expand the free template library to 30+ templates over the next two quarters, covering additional disciplines including AS9100D supplier audit checklists, NAS-410 personnel qualification matrices, API 1163 ILI vendor qualification, and DOT PHMSA pipeline integrity reporting.</p>
        <p className="text-slate-700 leading-relaxed mb-4">Custom templates for operator-specific quality clauses (Saudi Aramco SAEP, ADNOC ACS, Petronas PTS, etc.) are available on request from info@atlantisndt.com. Standard custom-build turnaround is 5-7 business days for $1,500-$3,500 depending on complexity and the number of customer-specific fields.</p>

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
