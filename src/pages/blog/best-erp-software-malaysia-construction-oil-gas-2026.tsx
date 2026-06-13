import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { SocialShare } from "@/components/SocialShare";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle, DollarSign, AlertTriangle, ArrowRight } from "lucide-react";

const faqs = [
  { question: "What is the best construction ERP software in Malaysia for 2026?", answer: "For Malaysian construction contractors working CIDB-graded projects, the practical choice in 2026 is between three tiers. Top tier: SAP S/4HANA EPC (RM 1.2-2.5M/year all-in) — used by Gamuda, IJM, Sunway for billion-ringgit infrastructure work. Mid tier: Oracle NetSuite (RM 400-900K/year) and Microsoft Dynamics 365 Finance & Project Operations (RM 350-800K) — fits Grade G5-G7 contractors. Affordable tier: Atlantis NDT ERP, built on Odoo 18 with construction + NDT modules pre-configured, at a regional pricing (~RM 85,000/year). Atlantis NDT's pricing is the only tier where a CIDB G3-G5 contractor can deploy real construction project accounting, BOQ tracking, subcontractor management, CIDB Levy reporting, and SST 8% handling without a six-figure ringgit commitment. For pure construction (no NDT/inspection workload), Procore, Buildots, and PlanGrid are popular but they are project-collaboration tools, not full ERPs — you still need a separate finance system." },
  { question: "Which ERP system do oil and gas companies in Malaysia use?", answer: "PETRONAS itself runs SAP S/4HANA across upstream, downstream, and corporate functions — that flows down to its vendor ecosystem because suppliers must invoice into PETRONAS's SUS (Supplier Self-Service) and integrate with Ariba Network. As a PETRONAS-licensed vendor under SWEC (Supplier Work Evaluation and Compliance), you need an ERP that can: (1) issue PETRONAS-compliant tax invoices with SST and e-invoice (LHDN MyInvois) compliance, (2) track competency certifications for your technicians (CIDB Green Card, PETRONAS-approved CP, SCM, NDT Level II ISO 9712 certs), (3) maintain calibration records for inspection equipment, and (4) produce ISO 9001 / ISO 45001 / OGSP-compliant documentation. SAP, Oracle, and IFS all do this for the top 30 vendors. For the long tail of 800+ PETRONAS Tier-2/Tier-3 service providers, Atlantis NDT ERP at regional pricing handles all four requirements out-of-the-box and ships with a pre-built PETRONAS vendor invoice template, MyInvois integration, and ASNT/ISO 9712 technician tracking module." },
  { question: "How much does SAP cost in Malaysia versus Atlantis NDT ERP?", answer: "SAP S/4HANA in Malaysia: implementation typically RM 800K-2.5M for a 50-200 user mid-tier contractor (Accenture/Deloitte/PwC Malaysia local rates), plus RM 250K-600K annual SAP license fees and roughly RM 180K-400K/year in third-party support. Total Year 1: RM 1.2-3.5M. Year 2-5: RM 430K-1M/year ongoing. Atlantis NDT ERP, flat fee regional pricing (~RM 85,000) includes hosting, implementation, training, support, upgrades, and unlimited users. Over a 5-year horizon: SAP costs RM 3.3-7.5M; Atlantis NDT costs RM 425K. The 8-18× cost gap is why we focus on G3-G5 contractors and PETRONAS Tier-2/Tier-3 vendors — a small Malaysian construction firm cannot absorb a SAP-class deployment, but they still need the same functional capabilities to win and execute work." },
  { question: "Is Atlantis NDT ERP compliant with Malaysian SST and LHDN e-invoicing?", answer: "Yes. Atlantis NDT ERP (Odoo 18 base) ships with the Malaysian localization that handles: SST 8% sales/service tax with correct B2B and B2C breakdowns; LHDN MyInvois e-invoicing integration via the PEPPOL adapter (mandatory for all Malaysian businesses by 1 July 2026); Bahasa Malaysia bilingual invoice templates; SOCSO, EPF, EIS payroll deductions; CP8 employment tax reporting; and EA Form generation for year-end employee tax filings. For oil and gas vendors, we add: PETRONAS-format invoice templates, Sabah/Sarawak state-specific cabotage and labor permit tracking, and Petronas e-Marketplace API integration for purchase-order ingestion." },
  { question: "Can Atlantis NDT ERP handle PETRONAS supplier compliance?", answer: "Yes — PETRONAS supplier compliance is the specific use case we built the construction + oil & gas variant for. The system tracks: SWEC registration status and renewal dates; SUS (Supplier Self-Service) portal credentials; PETRONAS Bumiputera status (if applicable for B-class licenses); ISO 9001, ISO 14001, ISO 45001 certification expiry dates with automated renewal alerts; PETRONAS Contractor Performance Index (CPI) scores; technician competency certifications (CP-rated, SCM, ASNT Level II/III, ISO 9712); calibration certificates for inspection equipment with NIST/SIRIM traceability; and HSE incident reporting in the PETRONAS Quad Format. The CRM module also handles tender-tracking against PETRONAS RFQ/RFP cycles and lost-bid analysis." },
  { question: "What construction modules does Atlantis NDT ERP include?", answer: "The construction package includes: BOQ (Bill of Quantities) management with measurement-based progress claims; subcontractor management with retention money tracking (typically 5-10% Malaysian standard); CIDB Levy 0.125% calculation and submission; progress claims and back-charges with JKR/PWD standard formats; equipment fleet management with idle/utilization tracking; site material requisitions with goods-received-note workflow; CITF (Construction Industry Training Fund) levy tracking; certified BIM data integration (IFC files); and project profitability dashboards drilled down to BOQ line-item gross margin. For mixed construction + inspection contractors (common in Malaysia oil & gas), the NDT modules layer on top: technician certification tracking, equipment calibration, inspection scheduling, and ASNT/ISO 9712 compliance." },
  { question: "Can we deploy Atlantis NDT ERP on-premise or only cloud?", answer: "Both. Cloud deployment is the default (hosted on AWS Asia Pacific - Singapore region for Malaysian data residency) and is included in the regional pricing fee. On-premise deployment is available for Malaysian operators with PDPA Section 129 data residency requirements or PETRONAS Tier-1 contractors requiring air-gapped environments. On-premise adds USD $9,000 one-time installation and USD $4,800/year for remote support and updates. We also support hybrid models where transactional data lives in Malaysia while reporting and analytics run in the cloud — a common configuration for PETRONAS-aligned EPC contractors who require Malaysian on-soil storage for invoice and contract data but want global executives to access dashboards." },
  { question: "How fast can a Malaysian contractor go live on Atlantis NDT ERP?", answer: "Typical go-live timelines: Small contractor (5-25 users, basic finance + CRM + project): 4-6 weeks. Mid contractor (25-100 users, full BOQ + subcontractor + payroll + inspection): 8-14 weeks. PETRONAS Tier-2/Tier-3 vendor (100-300 users with full SWEC integration): 12-20 weeks. By comparison, SAP S/4HANA implementations in Malaysia routinely run 9-18 months with multiple millions of ringgit in consulting fees. The reason for Atlantis NDT's speed: the construction + NDT modules are pre-configured for Malaysian regulations out of the box, so go-live is primarily data migration (chart of accounts, vendor master, project history) plus user training rather than custom development." }
];

const erpComparisonMalaysia = [
  { erp: "Atlantis NDT ERP (Odoo 18)", priceMYR: "RM 85,000/year (USD 18,000)", users: "Unlimited", deployment: "Cloud / On-prem", sstReady: "Yes", myInvois: "Yes", petronasReady: "Yes (pre-built)", bestFor: "G3-G7 contractors, PETRONAS Tier-2/Tier-3 vendors" },
  { erp: "SAP S/4HANA", priceMYR: "RM 1.2-2.5M/year", users: "Per-user fee", deployment: "Cloud / On-prem", sstReady: "Yes", myInvois: "Add-on", petronasReady: "Yes (PETRONAS native)", bestFor: "G7 EPC majors, listed contractors, PETRONAS Tier-1" },
  { erp: "Oracle NetSuite", priceMYR: "RM 400-900K/year", users: "Per-user fee", deployment: "Cloud-only", sstReady: "Yes", myInvois: "Add-on", petronasReady: "Partial", bestFor: "G5-G7 contractors, fast-growing services firms" },
  { erp: "Microsoft Dynamics 365 F&O", priceMYR: "RM 350-800K/year", users: "Per-user fee", deployment: "Cloud / Hybrid", sstReady: "Yes", myInvois: "Add-on", petronasReady: "Partial", bestFor: "Microsoft-stack contractors, manufacturing-adjacent" },
  { erp: "Sage 300 / Sage X3", priceMYR: "RM 180-400K/year", users: "Per-user fee", deployment: "Cloud / On-prem", sstReady: "Yes", myInvois: "Manual export", petronasReady: "No", bestFor: "Mature mid-market, accounting-led firms" },
  { erp: "AutoCount", priceMYR: "RM 18-45K/year", users: "Per-user fee", deployment: "On-prem mainly", sstReady: "Yes", myInvois: "Yes", petronasReady: "No", bestFor: "Small contractors, SME accounting only" },
];

const malaysiaHubs = [
  { hub: "Klang Valley (KL/Selangor)", profile: "Headquarters concentration; G5-G7 contractors; PETRONAS Twin Towers ecosystem; financial services regulatory overhead" },
  { hub: "Johor (Pengerang, Pasir Gudang)", profile: "PETRONAS RAPID complex; downstream petrochemical; cross-border Singapore service flows" },
  { hub: "Sabah (Kota Kinabalu, Labuan)", profile: "PETRONAS Sabah Oil & Gas Terminal; Shell Malaysia Brunei E&P; offshore service hubs" },
  { hub: "Sarawak (Bintulu, Miri)", profile: "PETRONAS LNG Complex (largest single-site LNG plant globally); upstream Sarawak basin; mature service vendor base" },
  { hub: "Penang", profile: "Manufacturing electronics + fabrication; aerospace MRO emerging; tier-2 oil & gas fabricators" },
];

export default function BestERPMalaysiaConstructionOilGas2026() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      <SEOHead
        title="Best ERP Software Malaysia 2026: Construction & Oil & Gas Compared"
        description="Construction ERP Malaysia + oil & gas ERP compared. SAP RM 1.2M vs Oracle vs Atlantis NDT ERP RM 85K/yr. PETRONAS vendor compliance, MyInvois, SST 8%, CIDB Levy. Full 2026 buyer guide."
        keywords="construction erp malaysia, construction erp software malaysia, erp software for oil and gas malaysia, erp malaysia, petronas vendor erp, myinvois erp malaysia, sap malaysia construction, odoo malaysia construction"
        canonical="https://atlantisndt.com/blog/best-erp-software-malaysia-construction-oil-gas-2026"
        article={{
          headline: "Best ERP Software Malaysia 2026: Construction & Oil & Gas Compared (SAP vs Oracle vs Atlantis NDT ERP)",
          datePublished: "2026-05-23",
          author: "Atlantis NDT Editorial Team",
          section: "ERP Buyer Guides"
        }}
        faq={faqs}
      />
      <Breadcrumbs />

      <section className="bg-gradient-to-br from-emerald-700 to-teal-900 text-white pt-24 pb-16">
        <div className="container mx-auto max-w-4xl px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="text-emerald-200 mb-4">ERP Buyer Guide • May 2026 • 14 min read</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Best ERP Software in Malaysia 2026: Construction & Oil & Gas</h1>
            <p className="text-xl text-emerald-100 mb-8">Honest 2026 comparison of construction ERP software in Malaysia and oil &amp; gas ERP options for PETRONAS-aligned vendors. SAP, Oracle NetSuite, Microsoft Dynamics, Sage, AutoCount, and Atlantis NDT ERP ranked by total cost of ownership, MyInvois compliance, and PETRONAS supplier-readiness.</p>
          </motion.div>
        </div>
      </section>

      <div className="py-6 bg-white border-b">
        <div className="container mx-auto max-w-4xl px-6">
          <SocialShare title="Best ERP Software Malaysia 2026" description="Construction ERP Malaysia + oil and gas ERP options for PETRONAS vendors, ranked by TCO and compliance." />
        </div>
      </div>

      <article className="py-16">
        <div className="container mx-auto max-w-4xl px-6">

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Why ERP Selection Is Harder in Malaysia Than in the USA or EU</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Malaysian construction and oil &amp; gas contractors face a uniquely overlapping regulatory and supply-chain environment. Any 2026 ERP decision has to handle CIDB grading (G1-G7), SST 8% sales and service tax, LHDN MyInvois e-invoicing (mandatory for all businesses by 1 July 2026), Section 129 PDPA data residency, and — if the operator is in the PETRONAS supplier ecosystem — SWEC registration, CP-rating, and PETRONAS Quad-Format HSE reporting. The systems that nail USA construction (Procore, Sage 300 Construction) often struggle with PETRONAS-specific tender, invoice, and HSE workflows. The systems that nail global oil and gas (SAP S/4HANA, IFS) carry six-figure ringgit price tags that exclude the long tail of 800+ Tier-2/Tier-3 PETRONAS vendors who actually execute most of the field work.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              This guide compares the realistic 2026 options on five Malaysian-specific axes: PETRONAS supplier readiness, MyInvois compliance, SST handling, CIDB Levy support, and total 5-year cost of ownership in ringgit. We focus particularly on the under-served Grade G3-G7 contractor segment and PETRONAS Tier-2/Tier-3 service providers who need real ERP capability without a SAP-class budget.
            </p>
            <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6">
              <p className="text-emerald-900 font-semibold mb-2">2026 Malaysia ERP key facts:</p>
              <ul className="text-emerald-800 space-y-1 list-disc list-inside">
                <li>LHDN MyInvois mandatory for all Malaysian businesses by 1 July 2026 — any ERP without native MyInvois integration is a forced replacement</li>
                <li>SST rate increased from 6% to 8% effective 1 March 2024 — many older systems still mis-calculate</li>
                <li>PETRONAS SUS (Supplier Self-Service) and Ariba Network are mandatory for all PETRONAS vendors</li>
                <li>CIDB Levy 0.125% on contract value applies to all construction projects above RM 500,000</li>
                <li>e-PERMOHONAN portal integration required for all CIDB-graded contractors from 2026</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Malaysia Construction & Oil & Gas ERP Comparison Matrix</h2>
            <div className="overflow-x-auto mb-6">
              <table className="w-full bg-white rounded-lg shadow-sm text-sm">
                <thead className="bg-emerald-100">
                  <tr>
                    <th className="px-3 py-2 text-left font-semibold">ERP</th>
                    <th className="px-3 py-2 text-left font-semibold">Annual Price (MYR)</th>
                    <th className="px-3 py-2 text-left font-semibold">Users</th>
                    <th className="px-3 py-2 text-left font-semibold">SST 8%</th>
                    <th className="px-3 py-2 text-left font-semibold">MyInvois</th>
                    <th className="px-3 py-2 text-left font-semibold">PETRONAS-ready</th>
                  </tr>
                </thead>
                <tbody>
                  {erpComparisonMalaysia.map((r, i) => (
                    <tr key={i} className="border-t">
                      <td className="px-3 py-2 font-semibold">{r.erp}</td>
                      <td className="px-3 py-2 text-emerald-700">{r.priceMYR}</td>
                      <td className="px-3 py-2">{r.users}</td>
                      <td className="px-3 py-2">{r.sstReady}</td>
                      <td className="px-3 py-2">{r.myInvois}</td>
                      <td className="px-3 py-2">{r.petronasReady}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-slate-500 text-sm">Pricing reflects 2026 Malaysian market rates collected from vendor RFQs and integrator references. SAP and Oracle costs include average local implementation partner fees (Accenture, Deloitte, PwC Malaysia, EY Malaysia). Atlantis NDT ERP fee is the flat USD affordable, accessible list price converted at RM 4.72/USD spot rate.</p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Construction ERP Malaysia: What Really Matters for CIDB-Graded Contractors</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              A construction ERP software in Malaysia has to do five things well or it slows the business instead of accelerating it. First, BOQ (Bill of Quantities) management — Malaysian construction works in BOQ-driven tender and progress-claim cycles, not WBS or task-time as is common in USA tech construction. Second, retention money tracking — Malaysian construction standardizes 5-10% retention typically released 50% on Certificate of Practical Completion and 50% after the 12-month Defects Liability Period; an ERP that does not track this drains margin. Third, subcontractor and back-charge management — Malaysian projects routinely chain three to five subcontractor tiers, with back-charges for delays, material wastage, and rework. Fourth, CIDB Levy 0.125% calculation and submission — applies to all contracts above RM 500,000. Fifth, JKR/PWD progress-claim formats — government clients accept only specific claim templates.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Construction-specific ERPs from outside Malaysia (Procore, Buildots, Aconex) excel at collaboration and document management but treat finance, BOQ, and Malaysian tax handling as bolt-ons. The ERPs that handle BOQ and finance natively — SAP EPC, Oracle Primavera + Fusion, Microsoft Dynamics F&amp;O Project Operations — carry costs only G6-G7 contractors can absorb. Atlantis NDT ERP fills the gap by configuring Odoo 18's Project, Manufacturing, and Accounting modules with a Malaysian construction overlay (BOQ, retention, CIDB Levy, JKR formats) shipped pre-built rather than custom-developed for each customer.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Oil & Gas ERP Malaysia: Designed for the PETRONAS Supplier Ecosystem</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              PETRONAS runs the Malaysian oil and gas value chain — from upstream exploration through the Sarawak LNG Complex, Pengerang Integrated Complex (PIC), and the downstream retail network. Any oil and gas ERP in Malaysia is effectively a PETRONAS supplier-management system. The vendor master file must align with PETRONAS SWEC categories (CP-rated for products, SCM for services). Invoices must flow into PETRONAS SUS and the Ariba Network. HSE incident reporting must use the PETRONAS Quad Format (Frequency, Severity, Lost-Time, Total-Recordable). Technician competency must align with CP-rated training providers and ASNT / ISO 9712 NDT certifications.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Service contractors operating in Sabah (Kota Kinabalu, Labuan) and Sarawak (Bintulu, Miri) carry additional Sabah/Sarawak Labour Ordinance and cabotage compliance obligations not visible in West Malaysia. The Pengerang RAPID complex in Johor enforces strict petrochemical-specific HSE and shutdown turnaround scheduling protocols.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              {malaysiaHubs.map((h, i) => (
                <div key={i} className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-teal-500">
                  <h4 className="font-bold text-lg mb-1 text-teal-900">{h.hub}</h4>
                  <p className="text-slate-700 text-sm">{h.profile}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">SAP S/4HANA vs Atlantis NDT ERP for Malaysian Contractors</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              SAP S/4HANA is the dominant ERP among PETRONAS itself and its Tier-1 EPC partners (Sapura, Dialog, Yinson, MMHE). For a G7 contractor handling RM 500M+ annual revenue with 500+ employees, SAP delivers depth that no other system matches — financial consolidation across subsidiaries, multi-currency project accounting, deep integration to PETRONAS Ariba, regulatory reporting depth.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              The picture flips below G5 grade or under RM 80M annual revenue. SAP's RM 1.2-2.5M annual cost (plus RM 800K-2.5M one-time implementation) is roughly 2-4% of revenue for an RM 50M contractor — economically prohibitive. Atlantis NDT ERP at RM 85,000/year is 0.17% of revenue at the same scale, leaves the implementation budget intact for actual business investment, and still ships pre-built PETRONAS SUS, MyInvois, CIDB Levy, and ASNT NDT compliance. Functional parity for the G3-G5 segment is sufficient; SAP's strength in multi-billion-ringgit consolidation is irrelevant at that scale.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              For the missing middle — G5-G7 contractors with RM 80-300M revenue — both Oracle NetSuite and Microsoft Dynamics 365 deliver reasonable economics (RM 400-900K/year). The trade-off is implementation complexity and the need to bolt on MyInvois and PETRONAS-specific extensions, since neither system ships these natively in 2026.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">5-Year Total Cost of Ownership Comparison (G5 Malaysian Contractor)</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Modeling a 100-user, RM 60M annual revenue G5 construction contractor with light NDT scope (subcontracts inspection to specialist Tier-2 vendors), here is the 5-year all-in cost across the three realistic options:
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full bg-white rounded-lg shadow-sm text-sm">
                <thead className="bg-emerald-100">
                  <tr>
                    <th className="px-3 py-2 text-left font-semibold">Cost Component</th>
                    <th className="px-3 py-2 text-left font-semibold">SAP S/4HANA</th>
                    <th className="px-3 py-2 text-left font-semibold">Oracle NetSuite</th>
                    <th className="px-3 py-2 text-left font-semibold">Atlantis NDT ERP</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t"><td className="px-3 py-2">Implementation (one-time)</td><td className="px-3 py-2">RM 1,200,000</td><td className="px-3 py-2">RM 350,000</td><td className="px-3 py-2">Included</td></tr>
                  <tr className="border-t"><td className="px-3 py-2">License (5 yrs × annual)</td><td className="px-3 py-2">RM 1,800,000</td><td className="px-3 py-2">RM 2,200,000</td><td className="px-3 py-2">RM 425,000</td></tr>
                  <tr className="border-t"><td className="px-3 py-2">Hosting / cloud (5 yrs)</td><td className="px-3 py-2">RM 450,000</td><td className="px-3 py-2">Included</td><td className="px-3 py-2">Included</td></tr>
                  <tr className="border-t"><td className="px-3 py-2">MyInvois + SST extensions</td><td className="px-3 py-2">RM 180,000</td><td className="px-3 py-2">RM 120,000</td><td className="px-3 py-2">Included</td></tr>
                  <tr className="border-t"><td className="px-3 py-2">PETRONAS connector / Ariba bridge</td><td className="px-3 py-2">Included</td><td className="px-3 py-2">RM 240,000</td><td className="px-3 py-2">Included</td></tr>
                  <tr className="border-t"><td className="px-3 py-2">Support &amp; admin (5 yrs)</td><td className="px-3 py-2">RM 900,000</td><td className="px-3 py-2">RM 380,000</td><td className="px-3 py-2">Included</td></tr>
                  <tr className="border-t bg-emerald-50 font-semibold"><td className="px-3 py-2">5-Year Total</td><td className="px-3 py-2 text-emerald-700">RM 4,530,000</td><td className="px-3 py-2 text-emerald-700">RM 3,290,000</td><td className="px-3 py-2 text-emerald-700">RM 425,000</td></tr>
                </tbody>
              </table>
            </div>
            <p className="text-slate-500 text-sm">Modeling assumes typical Malaysian-region pricing from 2026 partner quotes. Implementation timelines: SAP 9-14 months, NetSuite 6-9 months, Atlantis NDT ERP 8-14 weeks for this profile.</p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">When to Pick Each ERP — Decision Framework</h2>
            <ul className="space-y-3 text-slate-700 text-lg">
              <li><strong>Pick SAP S/4HANA if</strong> your company is G7-grade, annual revenue above RM 300M, listed on Bursa Malaysia, executing PETRONAS Tier-1 contracts above RM 500M, or operating multi-country across ASEAN with complex consolidation needs.</li>
              <li><strong>Pick Oracle NetSuite if</strong> you are G5-G7, revenue RM 80-300M, fast-growing services or technology-adjacent firm, prefer cloud-only with global rollout potential.</li>
              <li><strong>Pick Microsoft Dynamics 365 F&amp;O if</strong> you are already standardized on Microsoft 365 enterprise, want tight Power BI / Teams integration, and have internal IT capability to manage the platform.</li>
              <li><strong>Pick Atlantis NDT ERP if</strong> you are G3-G5, revenue under RM 80M, or any size PETRONAS Tier-2/Tier-3 vendor, or any contractor with significant NDT/inspection workload, or any contractor unable to absorb a 6-figure-ringgit annual ERP cost. The regional pricing price applies regardless of user count or revenue scale.</li>
              <li><strong>Pick Sage or AutoCount if</strong> your only need is accounting + SST + EA Forms with light project tracking — these are tactical accounting systems, not full ERPs.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Internal Links — Related Resources</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link to="/erp" className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-emerald-500 hover:shadow-md transition"><h4 className="font-bold text-emerald-900">Atlantis NDT ERP — Pricing &amp; Modules</h4><p className="text-slate-600 text-sm">Full module breakdown and flat regional pricing pricing.</p></Link>
              <Link to="/erp/crm-for-ndt-companies" className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-emerald-500 hover:shadow-md transition"><h4 className="font-bold text-emerald-900">CRM for NDT &amp; Inspection Companies</h4><p className="text-slate-600 text-sm">Tender, lead, and bid-management workflow.</p></Link>
              <Link to="/erp/project-management-for-ndt-companies" className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-emerald-500 hover:shadow-md transition"><h4 className="font-bold text-emerald-900">Project Management for Contractors</h4><p className="text-slate-600 text-sm">BOQ, progress claims, subcontractor tracking.</p></Link>
              <Link to="/contact" className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-emerald-500 hover:shadow-md transition"><h4 className="font-bold text-emerald-900">Book a Malaysia ERP Demo</h4><p className="text-slate-600 text-sm">30-minute walkthrough with PETRONAS vendor scenarios.</p></Link>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((f, i) => (
                <details key={i} className="bg-white p-5 rounded-lg shadow-sm">
                  <summary className="font-bold text-lg cursor-pointer text-emerald-900">{f.question}</summary>
                  <p className="text-slate-700 mt-3 leading-relaxed">{f.answer}</p>
                </details>
              ))}
            </div>
          </section>

          <section className="bg-gradient-to-br from-emerald-700 to-teal-900 text-white p-10 rounded-2xl mb-12">
            <h2 className="text-3xl font-bold mb-4">See Pricing — Flat regional pricing</h2>
            <p className="text-emerald-100 text-lg mb-6">Atlantis NDT ERP for Malaysian construction and oil &amp; gas contractors. PETRONAS-ready, MyInvois compliant, full BOQ + CIDB Levy support. Unlimited users.</p>
            <div className="flex flex-wrap gap-4">
              <Link to="/erp" className="bg-white text-emerald-900 px-6 py-3 rounded-lg font-semibold hover:bg-emerald-50 flex items-center gap-2">See ERP Pricing <ArrowRight className="w-4 h-4" /></Link>
              <Link to="/contact" className="bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-500 flex items-center gap-2">Book a Demo <ArrowRight className="w-4 h-4" /></Link>
            </div>
          </section>

          <ContactDetails />
        </div>
              <p className="mt-8 pt-4 border-t border-slate-200 text-sm italic text-slate-500" data-atlantis-pricing-disclaimer="1">Disclaimer: Any salary, cost, or pricing figures in this article are general industry estimates for informational purposes only and do not represent Atlantis NDT pricing.</p>
      </article>
    </div>
  );
}
