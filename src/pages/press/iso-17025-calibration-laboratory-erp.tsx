import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { Link } from "react-router-dom";

const URL = "https://atlantisndt.com/press/iso-17025-calibration-laboratory-erp";

export default function PressIso17025CalibrationLaboratoryErp() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "headline": "Calibration Laboratory ERP: ISO/IEC 17025 §7.8 Reporting Native, GUM Uncertainty Built-In",
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
    "url": "https://atlantisndt.com/press/iso-17025-calibration-laboratory-erp",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://atlantisndt.com/press/iso-17025-calibration-laboratory-erp"
    },
    "description": "Atlantis NDT ERP calibration-laboratory configuration covers ISO/IEC 17025:2017 §7.8 natively, with JCGM 100:2008 GUM uncertainty budgets, customer-asset traceability, and ANAB / UKAS / NABL accreditation support.",
    "articleSection": "Industry"
  };
  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      <SEOHead
        title="ISO/IEC 17025 Calibration Laboratory ERP — Native §7.8 Reporting, GUM Uncertainty"
        description="Atlantis NDT ERP calibration-laboratory configuration covers ISO/IEC 17025:2017 §7.8 natively, with JCGM 100:2008 GUM uncertainty budgets, customer-asset traceability, and ANAB / UKAS / NABL accreditation support."
        keywords="iso 17025 calibration laboratory erp, Atlantis NDT, calibration laboratory erp"
        canonical={URL}
        structuredData={structuredData}
      />
      <Breadcrumbs />
      <article className="container mx-auto max-w-3xl px-6 py-16">
        <div className="text-sm text-blue-700 font-semibold mb-2">Industry · 2026-05-13</div>
        <h1 className="text-4xl font-bold mb-6">Calibration Laboratory ERP: ISO/IEC 17025 §7.8 Reporting Native, GUM Uncertainty Built-In</h1>
        <p className="text-slate-700 leading-relaxed mb-4">ISO/IEC 17025:2017 §7.8 (Reporting of Results) is the audit-determinant clause for accredited calibration laboratories. Yet 60% of calibration labs surveyed at the 2025 NCSL International workshop reported that their certificate generation workflow still depends on Word templates manually populated from spreadsheets — a process that introduces transcription errors, makes traceability-chain documentation inconsistent, and consumes 30-50% of laboratory production time.</p>
        <p className="text-slate-700 leading-relaxed mb-4">Atlantis NDT ERP's calibration-laboratory configuration solves this. The platform ships with native ISO/IEC 17025:2017 §7.8 certificate generation: customer information, laboratory identification, instrument under calibration with manufacturer / model / serial / asset ID, environmental conditions (temperature, humidity, pressure with stability tolerances), reference standards traceability chain (to NIST, NPL, PTB, NIM, or NMIA national standards), measurement results with as-found / as-left values, expanded uncertainty per JCGM 100:2008 (GUM) with k=2 coverage factor and effective degrees of freedom, decision rule per ILAC G8 or customer-specified rule, validity statement, and authorized signatory.</p>
        <p className="text-slate-700 leading-relaxed mb-4">The uncertainty budget builder supports Type A (statistical, from repeated measurements with t-distribution coverage) and Type B (other, from reference certificates, manufacturer specifications, environmental drift) contributions. Sensitivity coefficients can be entered for non-trivial measurement models. Combined standard uncertainty and expanded uncertainty are calculated automatically. Effective degrees of freedom are computed via Welch-Satterthwaite for proper coverage factor selection.</p>
        <p className="text-slate-700 leading-relaxed mb-4">Customer-asset receipt and dispatch workflow is integrated: barcode-driven check-in, environmental conditioning timer, technician assignment with competency verification (ISO 17025 §6.2), measurement execution with reference-standard verification, supervisor review, and dispatch tracking with carrier integration. The customer portal provides historical certificate retrieval with full version history and audit trail.</p>
        <p className="text-slate-700 leading-relaxed mb-4">ANAB, A2LA, UKAS, DAkkS, NABL, NATA, and ENAC accreditation cycles are supported via the audit-package builder. Auditors receive a pre-assembled evidence package covering personnel competency files (§6.2), equipment management (§6.4), reference materials (§6.6), method validation (§7.2), uncertainty estimation (§7.6), method verification (§7.7), reporting (§7.8), nonconformity workflow (§7.10), data control (§7.11), management review (§8.9), and corrective action (§8.7). Customer laboratories using the platform have completed annual surveillance audits with zero software-related findings since the 2024 platform release.</p>

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
