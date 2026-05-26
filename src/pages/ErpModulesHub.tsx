import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import CustomerLogosBlock from "@/components/CustomerLogosBlock";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Package, ArrowRight, Mail } from "lucide-react";

const modules = [
  { slug: "inventory-management", name: "Inventory Management", desc: "NDT equipment, probes, calibration blocks, consumables, source tracking. Barcode/QR check-in/out. ISO 17025 traceability." },
  { slug: "certification-tracking", name: "Certification & Personnel Qualification", desc: "ASNT, ISO 9712, PCN, CSWIP, AWS CWI, NACE, API, NAS-410, ASNT Level III tracking. 180/90/60/30-day expiry alerts." },
  { slug: "calibration-management", name: "Calibration Management", desc: "ISO/IEC 17025:2017 + ANSI Z540 compliant calibration. Uncertainty budgets per GUM. Multi-discipline." },
  { slug: "work-order-management", name: "Work Order & Job Management", desc: "Quote → work order → field execution → report → invoice. Multi-client, multi-project, day-rate + T&M + fixed-price." },
  { slug: "inspection-scheduling", name: "Inspection Scheduling", desc: "API 510/570/653 + ASME B31.3 + NB-23 + RBI per API 581 interval engine. Auto-schedule, never miss a due date." },
  { slug: "audit-management", name: "Audit & Compliance", desc: "Internal, client, regulator, accreditation audits. ISO 9001/17025/45001/AS9100/IATF 16949 checklists. NCR + CAPA lifecycle." },
  { slug: "document-control", name: "Document Control & QMS", desc: "Controlled-document revision control. Training acknowledgment, 21 CFR Part 11, multi-language. ISO 9001 / 17025 / AS9100." },
  { slug: "asset-management", name: "Asset Integrity & Equipment Register", desc: "Pressure vessel, piping, tank, heat exchanger, pipeline registers. API 571 damage mechanisms, IOWs, FFS screening." },
  { slug: "corrosion-tracking", name: "Corrosion Tracking & RBI", desc: "Corrosion rate trending, remaining-life, API 581 risk-based inspection. Online corrosion-probe data import." },
  { slug: "quality-management", name: "Quality Management & NCR", desc: "ISO 9001 / AS9100 / IATF 16949 / API Q1 QMS. NCR → root cause → CAPA → effectiveness review. Supplier scorecards." },
  { slug: "project-management", name: "Project Management & Turnaround Support", desc: "Multi-discipline turnaround / shutdown / new-build inspection projects. Resource leveling, hold-point mgmt, EVM, DPRs." },
];

export default function ErpModulesHub() {
  const url = "https://atlantisndt.com/erp-modules";
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${url}#hub`,
    "name": "Atlantis NDT ERP — Module Catalog",
    "description": "11 modules of the Atlantis NDT ERP platform. Inventory, certification tracking, calibration, work orders, inspection scheduling, audit management, document control, asset integrity, corrosion / RBI, quality management, project management.",
    "url": url,
    "hasPart": modules.map(m => ({ "@type": "WebPage", "name": m.name, "url": `${url}/${m.slug}`, "description": m.desc })),
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      <SEOHead
        title="11 NDT ERP Modules — regional pricing Flat, All Apps Included"
        description="Atlantis NDT ERP — 11 modules + 30+ Odoo apps for regional pricing flat. Certification, calibration, work orders, scheduling, audit, documents, assets, RBI, QMS. See pricing."
        keywords="ERP modules, NDT ERP modules, inspection management modules, certification tracking software, calibration management software, work order management, inspection scheduling, audit management, document control, asset integrity, corrosion management, quality management, project management, Atlantis NDT"
        canonical={url}
        structuredData={structuredData}
      />
      <Breadcrumbs />

      <section className="bg-gradient-to-br from-blue-700 to-indigo-800 text-white pt-24 pb-16">
        <div className="container mx-auto max-w-6xl px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6">
              <Package className="w-4 h-4" /><span className="text-sm">Atlantis NDT ERP — Module Catalog</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">ERP Modules — Pick What You Need</h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl">11 production-ready modules. Run any single module, build a tailored bundle for your industry, or deploy the full suite. Used by NDT inspection, calibration laboratories, welding fabrication shops, marine survey, pipeline integrity, aerospace QC, and metrology labs across 80+ cities.</p>
            <div className="flex flex-wrap gap-3">
              <Link to="/contact" className="px-6 py-3 bg-white text-blue-700 font-semibold rounded-lg hover:bg-blue-50">Request Demo</Link>
              <a href="mailto:info@atlantisndt.com?subject=Demo Request — Atlantis NDT ERP" className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500 flex items-center gap-2"><Mail className="w-4 h-4" />info@atlantisndt.com</a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold mb-8">All 11 ERP Modules</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {modules.map(m => (
              <Card key={m.slug} className="border-l-4 border-blue-600 hover:shadow-md transition">
                <CardHeader><CardTitle className="text-lg">{m.name}</CardTitle></CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 mb-3 leading-relaxed">{m.desc}</p>
                  <Link to={`/erp-modules/${m.slug}`} className="inline-flex items-center gap-1 text-blue-600 hover:underline text-sm font-medium">Module details <ArrowRight className="w-3 h-3" /></Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold mb-8">How Companies Use the Modules</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div><h3 className="text-xl font-bold mb-2">Single Module</h3><p className="text-slate-600">A 5-person calibration lab might run only the Calibration Management + Certification modules — replacing two disconnected SaaS tools and a spreadsheet.</p></div>
            <div><h3 className="text-xl font-bold mb-2">Industry Bundle</h3><p className="text-slate-600">A pipeline integrity contractor runs the Pipeline Integrity Industry bundle — pre-configured with Asset Mgmt, Corrosion Tracking, Work Orders, Project Mgmt, Document Control, Quality Mgmt, Certification, and Audit.</p></div>
            <div><h3 className="text-xl font-bold mb-2">Full Suite</h3><p className="text-slate-600">A 200-person NDT inspection multinational deploys all 11 modules with global rollout, regional data residency, custom integrations to Maximo / SAP, and a dedicated success manager.</p></div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-slate-100">
        <div className="container mx-auto max-w-6xl px-6">
          <h3 className="text-xl font-semibold mb-4">See ERP Tailored to Your Industry</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 text-sm">
            <Link to="/erp-industries/ndt-inspection-companies" className="text-blue-600 hover:underline">ERP for NDT Inspection Companies →</Link>
            <Link to="/erp-industries/calibration-laboratories" className="text-blue-600 hover:underline">ERP for Calibration Laboratories →</Link>
            <Link to="/erp-industries/welding-fabrication-shops" className="text-blue-600 hover:underline">ERP for Welding & Fabrication Shops →</Link>
            <Link to="/erp-industries/marine-survey-companies" className="text-blue-600 hover:underline">ERP for Marine Survey Companies →</Link>
            <Link to="/erp-industries/pipeline-integrity-services" className="text-blue-600 hover:underline">ERP for Pipeline Integrity Services →</Link>
            <Link to="/erp-industries/aerospace-quality-control" className="text-blue-600 hover:underline">ERP for Aerospace QC →</Link>
            <Link to="/erp-industries/metrology-laboratories" className="text-blue-600 hover:underline">ERP for Metrology Laboratories →</Link>
            <Link to="/erp-industries/industrial-coatings-inspection" className="text-blue-600 hover:underline">ERP for Industrial Coatings Inspection →</Link>
            <Link to="/erp-industries/construction-quality-assurance" className="text-blue-600 hover:underline">ERP for Construction QA / QC →</Link>
            <Link to="/erp-industries/geotechnical-engineering" className="text-blue-600 hover:underline">ERP for Geotechnical Engineering →</Link>
            <Link to="/erp-industries/environmental-testing-labs" className="text-blue-600 hover:underline">ERP for Environmental Testing Labs →</Link>
            <Link to="/erp-industries/oilfield-services" className="text-blue-600 hover:underline">ERP for Oilfield Services →</Link>
          </div>
        </div>
      </section>

      <CustomerLogosBlock />

      <ContactDetails />
    </div>
  );
}
