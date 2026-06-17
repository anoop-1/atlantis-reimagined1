import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import CustomerLogosBlock from "@/components/CustomerLogosBlock";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import TableOfContents from "@/components/TableOfContents";
import RelatedGuidesBlock from "@/components/RelatedGuidesBlock";
import { Building2, ArrowRight, Mail } from "lucide-react";

const industries = [
  { slug: "ndt-inspection-companies", name: "NDT Inspection Companies", desc: "Purpose-built ERP for non-destructive testing service providers. ASNT / ISO 9712 / PCN, API 510/570/653 scheduling, corrosion trending, multi-client compliance." },
  { slug: "calibration-laboratories", name: "Calibration Laboratories", desc: "End-to-end ISO/IEC 17025 calibration lab — sample receipt, environmental conditioning, uncertainty budget, ISO 17025 §7.8 certificate generation, accreditation audit support." },
  { slug: "welding-fabrication-shops", name: "Welding & Fabrication Shops", desc: "WPS / PQR / WPQ library, welder qualification + continuity, ASME 'U' / 'S' / 'PP' stamp prep, AWS D1.1 / D1.5 work orders, weld-map traceability, NDE coordination." },
  { slug: "marine-survey-companies", name: "Marine Survey & Offshore Inspection", desc: "Hull condition surveys, class-society alignment (DNV / ABS / LR / BV / ClassNK / RINA / KR), IMCA D-018, ROV operations, FPSO life-extension assessment." },
  { slug: "pipeline-integrity-services", name: "Pipeline Integrity & ILI", desc: "ILI tool deployments, MFL / UT / EMAT / caliper data management, API 1163 / 1160, ASME B31.8S threat assessment, DOT PHMSA reporting, dig verification." },
  { slug: "aerospace-quality-control", name: "Aerospace Quality Control & MRO", desc: "AS9100D + NAS-410 + FAA 14 CFR Part 145. Customer-specific quality flow-down for Boeing / Airbus / Bombardier / Pratt & Whitney / GE Aerospace / Rolls-Royce." },
  { slug: "metrology-laboratories", name: "Metrology Laboratories", desc: "Multi-discipline calibration (dimensional, electrical, pressure, mass, thermal, force, flow, optical) under ISO 17025. GUM uncertainty + customer-specific decision rules." },
  { slug: "industrial-coatings-inspection", name: "Industrial Coatings Inspection", desc: "NACE / AMPP CIP inspector workflow, SSPC surface prep, ISO 12944 corrosion protection, DFT campaigns, ISO 8501 / 8502 cleanliness, pull-off adhesion ASTM D4541." },
  { slug: "construction-quality-assurance", name: "Construction Quality Assurance", desc: "EPC / civil / infrastructure QA-QC. Concrete cylinder breaks (ASTM C39), structural steel inspection (AWS D1.1), soil compaction (ASTM D698 / D1557), ITP execution, PCD assembly." },
  { slug: "geotechnical-engineering", name: "Geotechnical Engineering Firms", desc: "Site investigation campaigns, borehole / CPT data, lab testing (ASTM D / EN ISO), AGS data format, geotechnical reporting per Arup / Mott MacDonald / Fugro standards." },
  { slug: "environmental-testing-labs", name: "Environmental Testing Laboratories", desc: "Water / air / soil / waste sample chain-of-custody, multi-analyte testing, EPA / EA / DEC / DEFRA regulatory reporting, ISO 17025 / NELAP / MCERTS accreditation." },
  { slug: "oilfield-services", name: "Oilfield Services & Wellsite Inspection", desc: "Drilling rig inspection, BOP testing per API RP 53, casing / tubing per API 5C5/5C6/5C7, wireline / coiled-tubing / frac QC, field-service ticketing to invoicing." },
];

export default function ErpIndustriesHub() {
  const url = "https://atlantisndt.com/erp-industries";
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${url}#hub`,
    "name": "Atlantis NDT ERP — Industry Solutions",
    "description": "ERP tailored to inspection service providers across 12 industries. NDT inspection, calibration laboratories, welding fabrication, marine survey, pipeline integrity, aerospace QC, metrology, coatings, construction QA, geotechnical, environmental testing, oilfield services.",
    "url": url,
    "hasPart": industries.map(i => ({ "@type": "WebPage", "name": i.name, "url": `${url}/${i.slug}`, "description": i.desc })),
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      <SEOHead
        title="ERP for Inspection Companies — 12 Industries, regional pricing"
        description="Atlantis ERP regional pricing flat, tailored for 12 industries: NDT, calibration labs, welding shops, marine survey, pipeline integrity, aerospace QC, oilfield services. Demo free."
        keywords="industry-specific ERP, ERP for inspection companies, ERP for NDT, ERP for calibration lab, ERP for welding shop, ERP for marine survey, ERP for pipeline integrity, ERP for aerospace QC, ERP for metrology lab, ERP for coatings inspection, ERP for construction QA, ERP for geotechnical, ERP for environmental testing, ERP for oilfield services, Atlantis NDT"
        canonical={url}
        structuredData={structuredData}
      />
            <TableOfContents items={[{ id: "overview", label: "ERP by Industry Overview" }, { id: "industries", label: "Industries Served" }, { id: "faq", label: "FAQ" }]} />
      <Breadcrumbs />

      <section className="bg-gradient-to-br from-blue-700 to-indigo-800 text-white pt-24 pb-16">
        <div className="container mx-auto max-w-6xl px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6">
              <Building2 className="w-4 h-4" /><span className="text-sm">Atlantis NDT ERP — by Industry</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">ERP Software — Tailored to Your Industry</h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl">Atlantis NDT ERP is configured for 12 inspection and service-provider industries. Codes, standards, regulators, operator-specific quality clauses, and workflow are pre-loaded for each industry — not a generic SaaS forced to fit. Custom bundles built around your scope.</p>
            <div className="flex flex-wrap gap-3">
              <Link to="/contact" className="px-6 py-3 bg-white text-blue-700 font-semibold rounded-lg hover:bg-blue-50">Request Tailored Demo</Link>
              <a href="mailto:info@atlantisndt.com?subject=Demo Request — Atlantis NDT ERP" className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500 flex items-center gap-2"><Mail className="w-4 h-4" />info@atlantisndt.com</a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold mb-8">12 Industries — One Platform</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {industries.map(i => (
              <Card key={i.slug} className="border-l-4 border-blue-600 hover:shadow-md transition">
                <CardHeader><CardTitle className="text-lg">{i.name}</CardTitle></CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 mb-3 leading-relaxed">{i.desc}</p>
                  <Link to={`/erp-industries/${i.slug}`} className="inline-flex items-center gap-1 text-blue-600 hover:underline text-sm font-medium">Industry details <ArrowRight className="w-3 h-3" /></Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CustomerLogosBlock />

      <section className="py-12 bg-slate-100">
        <div className="container mx-auto max-w-6xl px-6">
          <h3 className="text-xl font-semibold mb-4">Explore Modules and Solutions</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 text-sm">
            <Link to="/erp-modules" className="text-blue-600 hover:underline">All ERP Modules →</Link>
            <Link to="/ndt-erp-solution" className="text-blue-600 hover:underline">Full Atlantis NDT ERP Suite →</Link>
            <Link to="/ndt-erp-vs-generic-erp" className="text-blue-600 hover:underline">NDT ERP vs Generic ERP →</Link>
            <Link to="/ndt-erp-software-comparison" className="text-blue-600 hover:underline">ERP Software Comparison →</Link>
            <Link to="/ndt-erp-roi-calculator" className="text-blue-600 hover:underline">ERP ROI Calculator →</Link>
            <Link to="/ndt-erp-implementation-timeline" className="text-blue-600 hover:underline">ERP Implementation Timeline →</Link>
          </div>
        </div>
      </section>
        <RelatedGuidesBlock links={[
              {
                    "title": "ERP Modules",
                    "href": "/erp-modules",
                    "description": "Full 35+ Odoo apps catalog",
                    "icon": "erp"
              },
              {
                    "title": "Atlantis NDT ERP Hub",
                    "href": "/erp",
                    "description": "All-in-one product hub",
                    "icon": "erp"
              },
              {
                    "title": "NDT vs Generic ERP",
                    "href": "/ndt-erp-vs-generic-erp",
                    "description": "Why NDT-specific config wins",
                    "icon": "erp"
              },
              {
                    "title": "ASNT Certification Path",
                    "href": "/asnt-certification",
                    "description": "Level I/II/III prep",
                    "icon": "cert"
              },
              {
                    "title": "API 510 Pressure Vessel Inspector Services",
                    "href": "/consulting/api-510-pressure-vessel-inspector-services",
                    "description": "Industry consulting",
                    "icon": "consulting"
              },
              {
                    "title": "Atlantis Digital Twin Platform",
                    "href": "/digital-twins",
                    "description": "Asset integrity overlay",
                    "icon": "dt"
              }
        ]} />

        <ContactDetails />
    </div>
  );
}
