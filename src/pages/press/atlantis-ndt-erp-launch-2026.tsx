import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { Link } from "react-router-dom";
import { Newspaper, Mail, ArrowRight } from "lucide-react";

const URL = "https://atlantisndt.com/press/atlantis-ndt-erp-launch-2026";

export default function PressLaunch2026() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "headline": "Atlantis NDT Launches Industry-First NDT ERP with 11 Modules + 12 Industry Verticals",
    "datePublished": "2026-05-13",
    "dateModified": "2026-05-13",
    "author": { "@type": "Organization", "name": "Atlantis NDT", "url": "https://atlantisndt.com" },
    "publisher": { "@type": "Organization", "name": "Atlantis NDT", "url": "https://atlantisndt.com", "logo": { "@type": "ImageObject", "url": "https://atlantisndt.com/atlantis.png" } },
    "url": URL,
    "mainEntityOfPage": { "@type": "WebPage", "@id": URL },
    "description": "Atlantis NDT announces general availability of purpose-built NDT ERP with 11 modules, 12 industry verticals, and pre-loaded operator quality clauses for 30+ major operators.",
    "articleSection": "Product Launch",
  };
  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      <SEOHead
        title="Atlantis NDT Launches Industry-First NDT ERP — 11 Modules, 12 Industries"
        description="Atlantis NDT today announced GA of its purpose-built NDT ERP platform — 11 modules, 12 industry verticals, operator quality clauses pre-loaded for Saudi Aramco, ADNOC, Petronas, and 30+ majors."
        keywords="Atlantis NDT ERP launch, NDT ERP 2026, inspection management software launch, ASNT ERP, API 510 570 653 ERP"
        canonical={URL}
        structuredData={structuredData}
      />
      <Breadcrumbs />

      <article className="container mx-auto max-w-3xl px-6 py-16">
        <div className="text-sm text-blue-700 font-semibold mb-2">Product Launch · 2026-05-13</div>
        <h1 className="text-4xl font-bold mb-6">Atlantis NDT Launches Industry-First NDT ERP with 11 Modules + 12 Industry Verticals</h1>
        <p className="text-lg text-slate-700 leading-relaxed mb-6"><strong>Houston / Hyderabad / Dubai — 2026-05-13</strong> — Atlantis NDT today announced the general availability of its purpose-built NDT ERP platform, with 11 production-ready modules, 12 industry-vertical configurations, and pre-loaded operator quality clauses for the top 30+ oil and gas operators globally including Saudi Aramco (SAEP-1142), ADNOC (ACS-01), QatarEnergy (NFPS), Shell (DEP), BP (ETP), and Petronas (PTS).</p>

        <h2 className="text-2xl font-bold mt-10 mb-4">Built for Inspection Service Companies</h2>
        <p className="text-slate-700 leading-relaxed mb-4">Generic enterprise platforms — SAP S/4HANA, IBM Maximo, Oracle NetSuite — require six to eighteen months of custom configuration to handle ASNT certification tracking, API 510 / 570 / 653 inspection scheduling, RBI per API 581, FFS per API 579-1, or operator-specific report formats. Atlantis NDT ERP ships with all of these as out-of-the-box configuration. A 50-person inspection contractor can go live in 8 to 14 weeks at one-fifth the all-in cost of a comparable Maximo or SAP deployment.</p>
        <p className="text-slate-700 leading-relaxed mb-4">"NDT inspection companies have been forced to choose between expensive enterprise platforms built for refinery operators or generic accounting tools with spreadsheet workflows," said Anoop Rayavarapu, Founder and CEO of Atlantis NDT and ASNT NDT Level III certified inspector. "Neither serves the inspection service business model. We built Atlantis NDT ERP because every NDT contractor we worked with — from 5-person UT crews to 500-person multinationals — was running the same broken workflow: spreadsheets tracking certifications two months behind reality, manual Word templates for client reports, and audit prep that consumed 80 hours per cycle."</p>

        <h2 className="text-2xl font-bold mt-10 mb-4">11 Production-Ready Modules</h2>
        <p className="text-slate-700 leading-relaxed mb-4">The platform ships with 11 modules that can be activated individually or as a tailored bundle: inventory management (NDT equipment, probes, calibration blocks, radioactive sources), certification &amp; personnel qualification (ASNT, ISO 9712, PCN, CSWIP, AWS CWI, NACE, API ICP), calibration management (ISO/IEC 17025-aligned), work order management, inspection scheduling (API 510/570/653 / ASME B31.3 / NB-23 / API 581 RBI), audit management (ISO 9001 / 17025 / AS9100D), document control, asset integrity, corrosion tracking and RBI, quality management, and project management for turnarounds and new-build campaigns.</p>

        <h2 className="text-2xl font-bold mt-10 mb-4">12 Industry Verticals</h2>
        <p className="text-slate-700 leading-relaxed mb-4">Each vertical configuration includes pre-built operator templates, regulatory framework mapping, code-specific report formats, and industry-specific qualification schemes. The 12 verticals cover NDT inspection service companies, ISO 17025 calibration laboratories, welding and fabrication shops, marine survey and offshore inspection, pipeline integrity and ILI services, aerospace quality control and MRO, multi-discipline metrology laboratories, industrial coatings inspection, construction quality assurance, geotechnical engineering firms, environmental testing laboratories, and oilfield services with wellsite inspection.</p>

        <h2 className="text-2xl font-bold mt-10 mb-4">Pricing and Availability</h2>
        <p className="text-slate-700 leading-relaxed mb-4">Atlantis NDT ERP is available as multi-tenant SaaS, single-tenant cloud, or on-premise deployment. Pricing starts at $18,000 per year for a 3-user package suitable for small inspection contractors. Mid-size deployments (50-100 users) typically land at $60,000 to $120,000 annually with all modules and the full operator-template library. Implementation runs $25,000 to $75,000 depending on data migration complexity and the number of industry verticals activated.</p>

        <h2 className="text-2xl font-bold mt-10 mb-4">About Atlantis NDT</h2>
        <p className="text-slate-700 leading-relaxed mb-4">Atlantis NDT is a global NDT services and technology company headquartered in Houston, Texas with operations in Hyderabad (India) and Dubai (UAE). The company provides NDT consulting, ASNT Level I/II/III training, API inspector preparation, digital twin platforms, and NDT ERP software to inspection service providers, calibration laboratories, welding fabrication shops, and asset owners across the oil &amp; gas, petrochemical, refining, power generation, aerospace, marine, and pharmaceutical industries.</p>

        <p className="text-slate-700 leading-relaxed mb-4">For demos, pricing, or media inquiries, contact info@atlantisndt.com or visit <Link to="/ndt-erp-solution" className="text-blue-600 hover:underline">atlantisndt.com/ndt-erp-solution</Link>.</p>

        <div className="mt-12 p-6 bg-slate-100 rounded-lg">
          <h3 className="font-semibold mb-3">Related Resources</h3>
          <div className="grid sm:grid-cols-2 gap-3 text-sm">
            <Link to="/ndt-erp-solution" className="text-blue-600 hover:underline">Atlantis NDT ERP Product Page →</Link>
            <Link to="/erp-modules" className="text-blue-600 hover:underline">11 ERP Modules →</Link>
            <Link to="/erp-industries" className="text-blue-600 hover:underline">12 Industry Verticals →</Link>
            <Link to="/compare" className="text-blue-600 hover:underline">Competitor Comparisons →</Link>
            <Link to="/resources" className="text-blue-600 hover:underline">Free Templates →</Link>
            <Link to="/press" className="text-blue-600 hover:underline">More Press Releases →</Link>
          </div>
        </div>
      </article>
      <ContactDetails />
    </div>
  );
}
