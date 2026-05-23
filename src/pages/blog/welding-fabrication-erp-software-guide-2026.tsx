import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { SocialShare } from "@/components/SocialShare";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const faqs = [
  { question: "What is the best ERP software for welding and fabrication shops in 2026?", answer: "For welding and fabrication shops, the ERP shortlist in 2026 narrows to systems that can natively handle WPS / PQR / WPQR documentation, AWS D1.1 / D1.5 weld traceability, ASME Section IX welder qualification, ISO 3834 fabrication-quality compliance, and NDT inspection integration. Top tier (large structural / pressure-vessel / shipyard fabricators): SAP S/4HANA Manufacturing, IFS Cloud, Plex Smart Manufacturing — $180-380K/year. Mid tier ($10-50M revenue fab shops): Epicor Kinetic (Manufacturing edition), Global Shop Solutions, Microsoft Dynamics 365 F&O — $45-140K/year. Affordable tier: Atlantis NDT ERP at flat USD $18,000/year with welding-specific modules pre-configured. Atlantis NDT ERP is the only solution under $30K/year that ships WPS register, PQR / WPQR repository, welder continuity tracking, AWS D1.1 / D1.5 / D1.6 / B2.1 documentation, ASME Section IX qualification range tracking, ISO 3834-2 / -3 / -4 fabrication-quality compliance, and a built-in inspection module covering VT / MT / PT / UT / RT / PAUT / TOFD." },
  { question: "Does Atlantis NDT ERP track welder continuity per AWS D1.1 and ASME Section IX?", answer: "Yes — this is a primary function of the welding module. AWS D1.1 Clause 4.2.3.2 requires welder continuity to be re-established within 6 months of last welding (re-qualification required if exceeded). ASME Section IX QW-322 requires re-qualification if a welder has not used the qualified process within 6 months. Atlantis NDT ERP tracks every welder's last weld date per process / position / base metal grouping, calculates the continuity window automatically, generates 30/14/7-day expiry alerts, blocks the welder from being scheduled on jobs that would exceed continuity (a soft warning that the shop manager can override with documented justification), and produces continuity records for client / inspector audit. The system also handles the AWS D1.5 (bridge welding) and AWS D1.6 (stainless welding) variant rules, plus ASME B31.1 / B31.3 power-piping and process-piping continuity requirements." },
  { question: "How does the system handle WPS / PQR / WPQR documentation?", answer: "Welding Procedure Specifications (WPS), Procedure Qualification Records (PQR), and Welder Performance Qualification Records (WPQR) are stored as first-class entities. Each WPS links to its supporting PQR(s), the qualified ranges per AWS D1.1 Table 4.5 / ASME Section IX QW-451, the base materials groupings (P-numbers, S-numbers, M-numbers), filler-metal F-numbers and A-numbers, qualified positions, and qualified thickness ranges. WPQR records link individual welders to qualified WPSs with date-of-qualification, qualification-test results, and continuity status. The system enforces qualified-range compliance: a shop scheduler attempting to assign a welder to a weld outside their qualification range gets blocked with a clear remediation path (qualify the welder, modify the joint design, or reassign)." },
  { question: "Can the ERP integrate with welding power source data (Lincoln, Miller, Fronius, ESAB)?", answer: "Yes. The shop-floor module integrates with weld-data-monitoring systems from Lincoln Electric (CheckPoint), Miller Electric (Insight Centerpoint), Fronius (WeldCube), and ESAB (WeldCloud). Captured weld parameters (voltage, current, travel speed, heat input, gas flow, time-on-arc) are linked to the work-order, joint number, welder ID, and WPS. This enables: AWS / ASME heat-input compliance verification (post-weld), real-time WPS-deviation alerts, productivity metrics (arc-on-time, deposit rate, idle-time-per-welder), automatic generation of welding records for client traceability packages, and integration with weld-process audits required by ISO 3834-2 manufacturer's responsibility. For shops not yet running connected power sources, the system supports manual welder daily-log entry via mobile app." },
  { question: "How does Atlantis NDT ERP handle NDT inspection integration with fabrication?", answer: "The NDT module is built into the same ERP as the welding module, so the inspection-fabrication workflow is unified rather than integrated across two systems. Every weld carries an inspection requirement (VT 100%, MT/PT 10% random + 100% on critical joints, UT 100% on full-penetration butts per AWS D1.1 Clause 6.20, RT or UT alternatives per ASME B31.3 Table 341.3.2). Inspection results post directly against the joint, trigger acceptance or rejection per the code's acceptance criteria (AWS D1.1 Table 6.1, ASME VIII Div 1 UW-51, etc.), generate the NDT report, and unlock the next work-order step. Failed inspections automatically trigger a non-conformance report (NCR) with a corrective-action workflow (repair → re-weld → re-inspect)." },
  { question: "Does the system support ISO 3834 fabrication quality compliance?", answer: "Yes. ISO 3834 — Quality requirements for fusion welding of metallic materials — has four parts: ISO 3834-2 (comprehensive), -3 (standard), -4 (elementary), and -5 (documents required). Atlantis NDT ERP ships with a complete ISO 3834-2 compliance template: management responsibility & contract review documentation; welding personnel (welding coordinator IWE / IWT / IWS qualifications, welders ISO 9606 / AWS / ASME); welding equipment register with calibration; production and testing equipment; welding consumable handling and storage (essential for low-hydrogen electrodes); base material identification and traceability; welding procedures and qualification; pre/post-heat treatment records; non-conformance and corrective action; calibration of measuring/inspection/testing equipment; and identification and traceability throughout fabrication. For shops pursuing CE / UKCA marking under EN 1090-2 (structural steel) the system maps ISO 3834-2 documentation to EN 1090-2 Factory Production Control requirements." },
  { question: "What is the typical fabrication-shop ERP implementation timeline?", answer: "Realistic 2026 implementation timelines for fabrication ERP: Small shop (5-25 employees, single facility, AWS-only): 6-10 weeks. Mid shop (25-100 employees, AWS + ASME, multi-product): 12-20 weeks. Large fabricator (100+ employees, multi-facility, AWS + ASME + ISO 3834): 16-28 weeks. Compare with SAP S/4HANA Manufacturing typical 9-15 months and Epicor Kinetic typical 6-10 months. The accelerator for fabrication is that 70-80% of the welding-specific data model is identical across shops (WPS register, qualified ranges, welder continuity, weld map, NDT package). Atlantis NDT ERP ships this as a pre-configured template that only requires shop-specific customization for proprietary processes (e.g., narrow-gap GMAW for offshore pipeline shops, hot-wire GTAW for nuclear pressure vessels)." },
  { question: "Can the system handle shipyard, bridge, and pressure-vessel fabrication in one platform?", answer: "Yes — but with different code overlays applied per project. A single ERP installation can simultaneously run: shipyard projects under ABS / DNV / Lloyd's Register / ClassNK rules and IACS UR W22 weld documentation; bridge projects under AWS D1.5 with AISC / DOT acceptance criteria; pressure-vessel projects under ASME VIII Div 1 + Section IX with NBIC R-certification for repairs; piping projects under ASME B31.1 (power), B31.3 (process), or B31.8 (gas transmission); structural projects under AWS D1.1 + AISC 360. Each project carries its applicable code-stack as configuration, and the system applies the right WPS, qualification, NDT, and acceptance criteria automatically." }
];

const fabERPTable = [
  { erp: "Atlantis NDT ERP (Odoo 18)", price: "$18,000/yr flat", wpsPqr: "Native", continuity: "Automated", iso3834: "Templates included", ndtIntegrated: "Yes (same platform)", bestFor: "Small-mid fabricators, NDT-heavy shops" },
  { erp: "SAP S/4HANA Manufacturing", price: "$180-380K/yr", wpsPqr: "Add-on (Polarion)", continuity: "Custom", iso3834: "Custom", ndtIntegrated: "Separate module", bestFor: "Large fabricators, listed companies" },
  { erp: "Epicor Kinetic", price: "$45-120K/yr", wpsPqr: "Industry pack", continuity: "Manual + add-on", iso3834: "Custom", ndtIntegrated: "Separate", bestFor: "Mid-market job-shops" },
  { erp: "IFS Cloud", price: "$80-260K/yr", wpsPqr: "Add-on", continuity: "Custom", iso3834: "Custom", ndtIntegrated: "Separate", bestFor: "Asset-heavy EPC fabricators" },
  { erp: "Plex Smart Mfg", price: "$60-180K/yr", wpsPqr: "Add-on", continuity: "Custom", iso3834: "Custom", ndtIntegrated: "Separate", bestFor: "Automotive Tier-1, aerospace machining" },
  { erp: "Global Shop Solutions", price: "$35-90K/yr", wpsPqr: "Manual", continuity: "Manual", iso3834: "Manual", ndtIntegrated: "Separate", bestFor: "Job-shop manufacturing" },
];

const fabApplications = [
  { app: "Structural Steel (AISC, AWS D1.1)", description: "High-rise, industrial-plant structures, AISC certified fabricator under AWS D1.1; CE/UKCA Execution Class EXC2-EXC4 under EN 1090-2" },
  { app: "Bridge Fabrication (AWS D1.5)", description: "Bridge welding code, AASHTO/DOT acceptance, NBIS inspection integration" },
  { app: "Pressure Vessels (ASME VIII)", description: "ASME U-stamp shops, Section IX welder qualification, NBIC R-stamp for repairs" },
  { app: "Piping (ASME B31.1 / B31.3 / B31.8)", description: "Power, process, and gas-transmission piping fabrication with separate qualification ranges" },
  { app: "Shipyard / Offshore (DNV, ABS, LR)", description: "Class-society rules, IACS UR W22 weld documentation, offshore-platform module fabrication" },
  { app: "Nuclear (ASME III, NQA-1)", description: "Nuclear pressure-vessel fabrication with N-stamp, NQA-1 quality program, ASME Section III subsection NB/NC/ND" },
];

export default function WeldingFabricationERPGuide2026() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      <SEOHead
        title="Welding & Fabrication ERP Software 2026: WPS, AWS D1.1, ASME IX Guide"
        description="Welding and fabrication ERP 2026 compared. WPS / PQR / WPQR tracking, welder continuity, AWS D1.1, ASME Section IX, ISO 3834. SAP $380K vs Epicor vs Atlantis NDT ERP $18K/yr."
        keywords="welding and fabrication erp, welding erp software, fabrication erp software, wps pqr tracking software, welder continuity software, aws d1.1 erp, asme section ix erp, iso 3834 erp"
        canonical="https://atlantisndt.com/blog/welding-fabrication-erp-software-guide-2026"
        article={{
          headline: "Welding & Fabrication ERP Software 2026: WPS, AWS D1.1, ASME Section IX, ISO 3834 Guide",
          datePublished: "2026-05-23",
          author: "Atlantis NDT Editorial Team",
          section: "ERP Buyer Guides"
        }}
        faq={faqs}
      />
      <Breadcrumbs />

      <section className="bg-gradient-to-br from-orange-700 to-amber-900 text-white pt-24 pb-16">
        <div className="container mx-auto max-w-4xl px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="text-orange-200 mb-4">Fabrication ERP Guide • May 2026 • 14 min read</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Welding &amp; Fabrication ERP Software 2026</h1>
            <p className="text-xl text-orange-100 mb-8">Practical 2026 ERP buyer guide for welding fabrication shops — structural steel, bridge, pressure-vessel, piping, shipyard, and nuclear. WPS / PQR / WPQR tracking, welder continuity, AWS D1.1, ASME Section IX, ISO 3834, EN 1090-2. SAP, Epicor, IFS, Plex, Global Shop Solutions, and Atlantis NDT ERP compared.</p>
          </motion.div>
        </div>
      </section>

      <div className="py-6 bg-white border-b">
        <div className="container mx-auto max-w-4xl px-6">
          <SocialShare title="Welding & Fabrication ERP Software 2026" description="Welding and fabrication ERP guide covering WPS tracking, welder continuity, AWS, ASME, ISO 3834." />
        </div>
      </div>

      <article className="py-16">
        <div className="container mx-auto max-w-4xl px-6">

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Why Welding Fabrication ERP Is a Distinct Software Category</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Generic manufacturing ERP — even reputable platforms like Epicor Kinetic, Global Shop Solutions, IQMS / DELMIAworks, JobBOSS — treats welding as a routing operation. That works for sheet-metal job shops and light fabrication. It fails for code-compliant welding fabrication because the welding shop's daily reality is governed by a stack of documents that generic ERP has no place for: WPS (Welding Procedure Specification) per AWS D1.1, ASME Section IX, ISO 15614; PQR (Procedure Qualification Record) supporting each WPS; WPQR (Welder Performance Qualification Record) for every welder on every process; weld map per drawing with joint-level traceability; welder continuity logs; weld-history records for ASME / NBIC / classification-society audit; and the full NDT inspection report pack (VT, MT, PT, UT, RT) tied to every joint.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Shops that try to run code-compliant welding work in generic ERP end up maintaining the welding documentation in parallel Excel registers, SharePoint folders, and AutoCAD weld-map drawings — an arrangement that fails the moment a client inspector audits the fabrication and asks &quot;show me the WPQR continuity record for welder J. Smith on this joint as of the weld date.&quot; A welding fabrication ERP makes those records the system of record, not the parallel paperwork.
            </p>
            <div className="bg-orange-50 border-l-4 border-orange-500 p-6">
              <p className="text-orange-900 font-semibold mb-2">2026 fabrication ERP key facts:</p>
              <ul className="text-orange-900 space-y-1 list-disc list-inside">
                <li>AWS D1.1 Clause 4.2.3.2: welder continuity 6 months</li>
                <li>ASME Section IX QW-322: welder re-qualification if process unused 6 months</li>
                <li>ISO 9606-1 welder qualification valid 3 years (with 6-month interim verification)</li>
                <li>ISO 3834-2 is the comprehensive welding quality standard for CE/UKCA EN 1090-2 EXC3/EXC4</li>
                <li>EN 1090-2 Factory Production Control mandatory for structural steel CE/UKCA marking</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Fabrication ERP Comparison Matrix (2026)</h2>
            <div className="overflow-x-auto mb-6">
              <table className="w-full bg-white rounded-lg shadow-sm text-sm">
                <thead className="bg-orange-100">
                  <tr>
                    <th className="px-3 py-2 text-left font-semibold">ERP</th>
                    <th className="px-3 py-2 text-left font-semibold">Annual</th>
                    <th className="px-3 py-2 text-left font-semibold">WPS / PQR</th>
                    <th className="px-3 py-2 text-left font-semibold">Welder Continuity</th>
                    <th className="px-3 py-2 text-left font-semibold">ISO 3834</th>
                    <th className="px-3 py-2 text-left font-semibold">NDT Integrated</th>
                  </tr>
                </thead>
                <tbody>
                  {fabERPTable.map((r, i) => (
                    <tr key={i} className="border-t">
                      <td className="px-3 py-2 font-semibold">{r.erp}</td>
                      <td className="px-3 py-2 text-orange-700">{r.price}</td>
                      <td className="px-3 py-2">{r.wpsPqr}</td>
                      <td className="px-3 py-2">{r.continuity}</td>
                      <td className="px-3 py-2">{r.iso3834}</td>
                      <td className="px-3 py-2">{r.ndtIntegrated}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Welding-Specific Modules Atlantis NDT ERP Ships Out of the Box</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              The welding pack inside Atlantis NDT ERP includes nine first-class modules that generic manufacturing ERP lacks:
            </p>
            <ul className="space-y-3 text-slate-700 text-lg list-disc list-inside mb-6">
              <li><strong>WPS Register</strong> — store every Welding Procedure Specification with qualified ranges per AWS D1.1 Table 4.5 or ASME Section IX QW-451</li>
              <li><strong>PQR Repository</strong> — supporting Procedure Qualification Records linked to each WPS with all qualification-test results</li>
              <li><strong>WPQR per Welder</strong> — Welder Performance Qualification Records linked to each welder, each process, each WPS</li>
              <li><strong>Welder Continuity</strong> — automated 6-month tracking per AWS D1.1 Clause 4.2.3.2 and ASME Section IX QW-322</li>
              <li><strong>Weld Map</strong> — joint-level register linking drawing, joint number, welder ID, WPS, date, heat input, and NDT result</li>
              <li><strong>Welding-Power-Source Integration</strong> — Lincoln CheckPoint, Miller Insight, Fronius WeldCube, ESAB WeldCloud data ingestion</li>
              <li><strong>NDT Module</strong> — VT, MT, PT, UT, RT, PAUT, TOFD inspection planning and reporting tied to weld map</li>
              <li><strong>ISO 3834 Compliance Pack</strong> — full template aligned to ISO 3834-2 manufacturer's quality requirements</li>
              <li><strong>EN 1090-2 FPC</strong> — Factory Production Control documentation for structural-steel CE/UKCA marking</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Fabrication Verticals Supported</h2>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              {fabApplications.map((a, i) => (
                <div key={i} className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-orange-500">
                  <h4 className="font-bold text-lg mb-1 text-orange-900">{a.app}</h4>
                  <p className="text-slate-700 text-sm">{a.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Welder Continuity — The Daily Compliance Killer</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              AWS D1.1 Clause 4.2.3.2 and ASME Section IX QW-322 both require a welder to maintain continuity within 6 months — meaning the welder must actually weld using a given process / qualification combination within any 6-month rolling window or the qualification expires. In a busy shop with 30-80 welders running 6-15 processes each (SMAW, GMAW, FCAW, GTAW, SAW, GMAW-P short-arc and pulsed, ESW, EGW), the matrix of (welder × process × position × material × thickness) qualifications quickly contains hundreds of combinations. Manual tracking in Excel is functionally impossible.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              The cost of a single missed continuity entry: client inspection rejects the joint, shop must re-weld, re-inspect, and either re-qualify the welder or assign a different qualified welder. On a marine offshore deck-module job the cost per rejected joint can run $2,000-8,000 between rework, repair welding, NDT re-inspection, and schedule impact. A welding ERP that automates continuity tracking pays back through avoided rejection alone within the first 2-4 weeks of operation.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Integration With NDT Inspection — The Atlantis NDT ERP Differentiator</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Welding shops typically subcontract NDT inspection to specialist NDT service vendors (or run an in-house NDT department). In either case, NDT results must close back to the weld map: each joint needs a documented VT acceptance, plus MT or PT surface examination per code, plus volumetric UT or RT for full-penetration butts per AWS D1.1 Clause 6.20 or ASME B31.3 Table 341.3.2. Generic manufacturing ERP treats this as an attached PDF on the work order. Atlantis NDT ERP runs the NDT inspection as a first-class module in the same database, so every inspection report is structured data tied to the joint, the welder, the WPS, the date, and the acceptance/rejection per code-specific criteria.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              This unification produces three operational benefits invisible in generic ERP: (1) Real-time weld-quality dashboards — first-time-pass rate per welder, per process, per joint type, used by shop foremen to identify training needs; (2) Automatic NCR generation — rejected joints trigger non-conformance records with corrective-action workflow (repair, re-weld, re-inspect, NCR closure); (3) Audit-ready traceability packages — client / class-society / regulator audits routinely demand the full weld history pack for any joint, and the system produces it as a single PDF in seconds rather than days of manual assembly.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">When to Pick Each Fabrication ERP</h2>
            <ul className="space-y-3 text-slate-700 text-lg">
              <li><strong>SAP S/4HANA Manufacturing</strong> — Large fabricators above $200M revenue, listed companies, multi-country operations.</li>
              <li><strong>Epicor Kinetic Manufacturing</strong> — Mid-market job shops $20-100M, automotive Tier-2/3, light fabrication; weak on code-compliance.</li>
              <li><strong>IFS Cloud</strong> — EPC-aligned fabricators, asset-heavy services, oil &amp; gas module shops.</li>
              <li><strong>Plex Smart Manufacturing</strong> — Automotive Tier-1, aerospace machining; strong shop-floor, weak on welding-specific docs.</li>
              <li><strong>Atlantis NDT ERP</strong> — Code-compliant welding fabricators of any size (structural, bridge, pressure-vessel, shipyard, nuclear, offshore), NDT-heavy shops, ISO 3834 / EN 1090-2 certified shops. Flat $18,000/year regardless of welder count.</li>
              <li><strong>Global Shop Solutions / JobBOSS</strong> — Light fabrication without code-compliance requirements; pure job-shop scheduling.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Related Resources</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link to="/erp" className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-orange-500 hover:shadow-md transition"><h4 className="font-bold text-orange-900">Atlantis NDT ERP Pricing</h4><p className="text-slate-600 text-sm">Flat $18,000/yr with welding + NDT modules.</p></Link>
              <Link to="/erp/manufacturing-erp-for-fabrication-shops" className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-orange-500 hover:shadow-md transition"><h4 className="font-bold text-orange-900">Manufacturing ERP for Fab Shops</h4><p className="text-slate-600 text-sm">Full module overview for fabrication.</p></Link>
              <Link to="/erp/quality-management-for-ndt-companies" className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-orange-500 hover:shadow-md transition"><h4 className="font-bold text-orange-900">Quality Management Module</h4><p className="text-slate-600 text-sm">ISO 3834, AWS, ASME compliance workflow.</p></Link>
              <Link to="/contact" className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-orange-500 hover:shadow-md transition"><h4 className="font-bold text-orange-900">Book a Fabrication Demo</h4><p className="text-slate-600 text-sm">Walkthrough with WPS / continuity / NDT scenarios.</p></Link>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((f, i) => (
                <details key={i} className="bg-white p-5 rounded-lg shadow-sm">
                  <summary className="font-bold text-lg cursor-pointer text-orange-900">{f.question}</summary>
                  <p className="text-slate-700 mt-3 leading-relaxed">{f.answer}</p>
                </details>
              ))}
            </div>
          </section>

          <section className="bg-gradient-to-br from-orange-700 to-amber-900 text-white p-10 rounded-2xl mb-12">
            <h2 className="text-3xl font-bold mb-4">See Pricing — Flat $18,000/year</h2>
            <p className="text-orange-100 text-lg mb-6">Atlantis NDT ERP for welding fabrication shops. WPS / PQR / WPQR tracking, welder continuity, AWS D1.1, ASME Section IX, ISO 3834. Unlimited users.</p>
            <div className="flex flex-wrap gap-4">
              <Link to="/erp" className="bg-white text-orange-900 px-6 py-3 rounded-lg font-semibold hover:bg-orange-50 flex items-center gap-2">See ERP Pricing <ArrowRight className="w-4 h-4" /></Link>
              <Link to="/contact" className="bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-500 flex items-center gap-2">Book a Demo <ArrowRight className="w-4 h-4" /></Link>
            </div>
          </section>

          <ContactDetails />
        </div>
      </article>
    </div>
  );
}
