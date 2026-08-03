import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { SocialShare } from "@/components/SocialShare";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const faqs = [
  { question: "What is the best affordable ERP software in London for 2026?", answer: "For London-based engineering services, inspection companies, and small manufacturing businesses operating under PSSR 2000, the affordable 2026 ERP options sort into three tiers. Top tier (large London-headquartered firms): SAP S/4HANA Cloud, IFS Cloud, Oracle NetSuite OneWorld — typical UK cost £180-450K/year. Mid tier (£10-50M revenue): Sage 200 Professional, Microsoft Dynamics 365 Business Central, Acumatica, NetSuite SuiteSuccess — £45-120K/year. Affordable tier (under £10M revenue or specialist engineering services firms): Atlantis NDT ERP at regional pricing (~£14,500/year). Atlantis NDT ERP carries the UK localization required for: HMRC Making Tax Digital (MTD VAT) submission via approved API; UK Construction Industry Scheme (CIS) deductions; PAYE / RTI submissions to HMRC; auto-enrolment pension contributions; UK GAAP and FRS 102 compliance; and IR35 contractor-status flags. For inspection and asset-integrity companies, the system additionally ships with PSSR 2000 Written Scheme of Examination tracking, REGINA (Recognised Inspection Bodies) compliance, and PCN / CSWIP / BINDT technician certification modules." },
  { question: "How much does ERP software cost in London versus Aberdeen?", answer: "London ERP implementation costs typically run 15-30% higher than Aberdeen because the consulting day rates for SAP, Oracle, Microsoft Dynamics, and IFS implementation partners in the City and Canary Wharf range £1,200-2,200/day, versus £750-1,400/day for Aberdeen-based consultancies (Wood, Sword IT, Stork, Apollo Offshore Engineering). For a 50-user mid-tier ERP rollout: London implementation £180-380K vs Aberdeen £140-280K. Atlantis NDT ERP eliminates this geographic premium entirely — the implementation is included in the regional pricing fee and delivered remotely by our Hyderabad and Houston teams, with travel to UK only for go-live workshops if required. Effective net cost for a London or Aberdeen contractor is identical at £14,500/year over the full 5-year window." },
  { question: "Does Atlantis NDT ERP support UK HMRC Making Tax Digital VAT?", answer: "Yes — full MTD VAT compliance is built in. The system submits VAT returns directly to HMRC via the approved Making Tax Digital API; produces the 9-box VAT return automatically from posted invoices; handles the UK VAT 20% standard rate, 5% reduced rate, and 0% zero-rated/exempt categories; manages reverse-charge VAT for imported services (post-Brexit applies to most EU services); supports Northern Ireland Protocol dual-status for goods (UK domestic plus EU acquisitions); produces EC Sales Lists where still applicable (Northern Ireland to EU); and stores VAT digital records for the HMRC-required 6-year retention. The system is also Making Tax Digital for Income Tax Self-Assessment (MTD ITSA) ready for the April 2026 phased rollout to sole traders and landlords above the £50K threshold." },
  { question: "Is there an ERP provider in Aberdeen for North Sea offshore operators?", answer: "Aberdeen is the UK's offshore oil & gas hub, and most large operators (BP, Shell, TotalEnergies, Equinor, Harbour Energy, Ithaca Energy, Apache) standardize on SAP S/4HANA, IFS Cloud, or Oracle Fusion — implemented locally by Wood, Sword IT, Apollo Offshore Engineering, Stork (Fluor), and Subsea 7's internal IT. For the 1,200+ Aberdeen-based service vendors — NDT inspection, ROV services, subsea engineering, well services, scaffolding, rope access — that economics breaks down: an Aberdeen contractor with 20-80 employees serving multiple operators cannot absorb a SAP-class implementation. Atlantis NDT ERP is built specifically for this tier, with North Sea operator compliance modules covering DNV-ST-F101 girth-weld AUT documentation, NORSOK D-010 well-integrity reports, NORSOK S-001 HSE format, OPITO competency tracking, and OGUK Energy Industries Council vendor-pre-qualification documents. We support clients across Aberdeen, Westhill, Dyce, and the broader Aberdeenshire offshore service cluster." },
  { question: "What PSSR 2000 functionality does the ERP include for UK inspection companies?", answer: "Pressure Systems Safety Regulations 2000 (PSSR 2000) is the core UK regulation governing pressure equipment in service. The ERP includes: Written Scheme of Examination (WSE) management — every pressure system covered by PSSR must have a WSE drafted by a Competent Person; competent-person certification tracking against IMechE, PCN, and BINDT requirements; examination scheduling against PSSR Regulation 9 timelines (typically 12, 24, 48 or 72 months depending on system risk); 14-day exceedance reporting for failed inspections; pressure-vessel registers for individual asset tracking; integration to HSE RIDDOR reporting; coverage of Pressure Equipment (Safety) Regulations 2016 (PER 2016) for new construction CE/UKCA marking; and full audit-trail for HSE enforcement-officer visits. For complex sites covered by COMAH Regulations 2015, the system additionally tracks safety-case revisions and major-accident hazard inspection cycles." },
  { question: "Can the system handle CIS (Construction Industry Scheme) deductions?", answer: "Yes — UK CIS compliance is built into the AP/payments workflow. The system: verifies subcontractor CIS status via HMRC online (gross payment, 20% standard deduction, or 30% unverified); applies CIS deductions automatically at invoice posting; generates the monthly CIS300 return and submits to HMRC via the gateway API; produces CIS payment-and-deduction statements (CIS payment slips) for each subcontractor; reconciles to the HMRC PAYE account; flags IR35 status for off-payroll workers and applies the Public Sector Off-Payroll Working Rules where the contractor's end-client falls under the Off-Payroll Working Rules; and handles the £1,000 small-employer threshold for the Apprenticeship Levy correctly. UK payroll runs in parallel under standard PAYE / RTI with Real Time Information submissions to HMRC every pay-cycle." },
  { question: "Does the system support UK contractor IR35 status tracking?", answer: "Yes. For large UK clients (turnover above £10.2M, balance sheet above £5.1M, or 50+ employees) the Off-Payroll Working Rules apply, requiring the end-client to determine the IR35 status of every personal-service-company contractor engaged. Atlantis NDT ERP tracks Status Determination Statement (SDS) records, Contracted-For-Services vs Contract-Of-Services flags, the Client-Led Disagreement Process timeline (45-day client response), and the deemed-employment PAYE/NI treatment when an inside-IR35 determination triggers. This matters disproportionately for London engineering services where 30-50% of senior technical roles are filled by limited-company contractors." },
  { question: "Is ERP software for small business Aberdeen genuinely affordable?", answer: "Yes — and 2026 is the inflection year. For an Aberdeen-based small business (5-50 employees) — typical of the 1,200+ North Sea service vendors — the realistic ERP cost in 2026 is: Sage 200 Professional £18-45K/year; Xero + bolt-ons £4-12K/year (but Xero is accounting only, not full ERP); Microsoft Dynamics 365 Business Central £22-55K/year; QuickBooks UK + bolt-ons £3-9K/year (also accounting only); Atlantis NDT ERP regional pricing (~£14,500). On a pure-finance comparison, Sage 200 and Dynamics 365 Business Central look competitive. The differentiator for Aberdeen oil-and-gas service vendors is the bundled offshore-compliance and inspection-specific modules in Atlantis NDT ERP that would otherwise require £15-40K in separate point solutions (ASNT/PCN tracking, calibration management, OPITO-compliance, DNV-ST-F101 documentation). At that comparison the gap closes significantly in Atlantis NDT's favour for any vendor with material inspection or asset-integrity workload." }
];

const ukErpTable = [
  { erp: "Atlantis NDT ERP (Odoo 18)", priceGBP: "~£14,500/yr (flat USD affordable, accessible)", users: "Unlimited", mtdVat: "Yes", cis: "Yes", pssrSupport: "Yes (native)", bestFor: "SMEs, inspection firms, Aberdeen service vendors" },
  { erp: "SAP S/4HANA Cloud", priceGBP: "£180-450K/yr", users: "Per-user", mtdVat: "Yes", cis: "Add-on", pssrSupport: "Custom", bestFor: "FTSE-listed, large engineering majors" },
  { erp: "Oracle NetSuite OneWorld", priceGBP: "£90-220K/yr", users: "Per-user", mtdVat: "Yes", cis: "Add-on", pssrSupport: "Custom", bestFor: "Multi-country services, fast growth" },
  { erp: "MS Dynamics 365 BC", priceGBP: "£22-55K/yr", users: "Per-user", mtdVat: "Yes", cis: "Yes", pssrSupport: "Custom", bestFor: "Microsoft-stack mid-market" },
  { erp: "Sage 200 Professional", priceGBP: "£18-45K/yr", users: "Per-user", mtdVat: "Yes", cis: "Yes", pssrSupport: "Manual", bestFor: "Established UK SMEs, accounting-led" },
  { erp: "IFS Cloud", priceGBP: "£95-260K/yr", users: "Per-user", mtdVat: "Yes", cis: "Add-on", pssrSupport: "Custom", bestFor: "Offshore, asset-heavy, EPC services" },
  { erp: "Xero / QuickBooks UK", priceGBP: "£2-12K/yr", users: "Per-user", mtdVat: "Yes", cis: "Yes", pssrSupport: "No", bestFor: "Pure accounting only" },
];

const ukHubs = [
  { hub: "London (City, Canary Wharf, Stratford)", profile: "FTSE HQ concentration; engineering consultancies (Mott MacDonald, Arup, Atkins); financial-services regtech overlay; IR35 / Off-Payroll Rules apply heavily" },
  { hub: "Aberdeen / Westhill / Dyce", profile: "North Sea offshore hub; oil & gas service vendors; DNV-ST-F101, NORSOK, OPITO compliance; OGUK Energy Industries Council" },
  { hub: "Sheffield / Yorkshire / Humberside", profile: "Heavy fabrication, advanced manufacturing, AMRC ecosystem; tier-1 nuclear (Sheffield Forgemasters), aerospace forgings" },
  { hub: "Manchester / North-West", profile: "Manufacturing + engineering services, nuclear (Springfields, Sellafield supply chain), aerospace (BAE Systems Salmesbury)" },
  { hub: "Bristol / Southwest", profile: "Aerospace cluster (Airbus, Rolls-Royce, GKN, Filton Spirit), nuclear (Hinkley Point C supply chain), defence engineering" },
];

export default function ERPSoftwareLondonAffordableUK2026() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      <SEOHead
        title="ERP Software London & Aberdeen 2026: Affordable UK Buyer Guide"
        description="ERP software for London and Aberdeen compared for 2026: enterprise-licence SAP, mid-market Sage, and Atlantis — affordable, accessible, fully customizable. MTD VAT, CIS, PSSR 2000 and North Sea OPITO context. Honest UK SME buyer guide."
        keywords="erp software london, erp provider aberdeen, erp software for small business aberdeen, affordable erp uk, mtd vat erp uk, pssr 2000 software, north sea erp aberdeen, london engineering erp"
        canonical="https://atlantisndt.com/blog/erp-software-london-affordable-uk-2026"
        article={{
          headline: "ERP Software London & Aberdeen 2026: Affordable UK Buyer Guide (MTD VAT, CIS, PSSR 2000)",
          datePublished: "2026-05-23",
          author: "Atlantis NDT Editorial Team",
          section: "ERP Buyer Guides"
        }}
        faq={faqs}
      />
      <Breadcrumbs />

      <section className="bg-gradient-to-br from-indigo-700 to-blue-900 text-white pt-24 pb-16">
        <div className="container mx-auto max-w-4xl px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="text-indigo-200 mb-4">UK ERP Buyer Guide • May 2026 • 13 min read</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">ERP Software London &amp; Aberdeen 2026 — Affordable UK Buyer Guide</h1>
            <p className="text-xl text-indigo-100 mb-8">Practical 2026 ERP comparison for London engineering services firms, Aberdeen North Sea oil &amp; gas service vendors, and UK manufacturers operating under PSSR 2000. SAP, Oracle, NetSuite, Microsoft Dynamics, IFS, Sage, Xero, and Atlantis NDT ERP scored on HMRC MTD VAT, CIS, and offshore-vendor compliance.</p>
          </motion.div>
        </div>
      </section>

      <div className="py-6 bg-white border-b">
        <div className="container mx-auto max-w-4xl px-6">
          <SocialShare title="ERP Software London & Aberdeen 2026" description="Honest UK ERP buyer guide for London engineering services and Aberdeen North Sea oil & gas service vendors." />
        </div>
      </div>

      <article className="py-16">
        <div className="container mx-auto max-w-4xl px-6">

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Why UK ERP Selection Is Different from EU or USA</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Post-Brexit UK ERP comes with a regulatory stack that EU and USA systems handle poorly out of the box. HMRC Making Tax Digital (MTD) for VAT has been mandatory since April 2019 for VAT-registered businesses and extended to MTD ITSA (Income Tax Self Assessment) from April 2026 for sole traders and landlords above £50,000 turnover. The Construction Industry Scheme (CIS) imposes deduction-at-source obligations on contractors paying subcontractors. The Off-Payroll Working Rules (commonly called &quot;IR35&quot;) shifted determination responsibility from the contractor's PSC (personal service company) to the end-client for medium and large companies in April 2021 — and London engineering consultancies use these contractors heavily.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              On the inspection and asset-integrity side, PSSR 2000 (Pressure Systems Safety Regulations) governs the Written Scheme of Examination and Competent Person certification for any in-service pressure system. PER 2016 (Pressure Equipment (Safety) Regulations) governs UKCA marking for new construction. COMAH 2015 applies to major-accident hazard sites. North Sea offshore work adds OPITO competency, NORSOK alignment (driven by UK-Norway interconnect operators), DNV-ST-F101 for subsea pipeline girth-weld AUT, and the Energy Industries Council pre-qualification dossiers required by every IOC operating UKCS assets.
            </p>
            <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6">
              <p className="text-indigo-900 font-semibold mb-2">2026 UK ERP key facts:</p>
              <ul className="text-indigo-900 space-y-1 list-disc list-inside">
                <li>HMRC MTD VAT mandatory for all VAT-registered businesses; MTD ITSA phased rollout April 2026</li>
                <li>UK VAT 20% standard / 5% reduced / 0% zero-rated</li>
                <li>CIS: 20% (verified) or 30% (unverified) deduction; 0% for gross-payment subcontractors</li>
                <li>IR35 / Off-Payroll Rules: applies to medium/large clients; impacts London engineering services heavily</li>
                <li>PSSR 2000 Written Scheme of Examination required for all in-service pressure systems</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">UK ERP Comparison Matrix (London / Aberdeen)</h2>
            <div className="overflow-x-auto mb-6">
              <table className="w-full bg-white rounded-lg shadow-sm text-sm">
                <thead className="bg-indigo-100">
                  <tr>
                    <th className="px-3 py-2 text-left font-semibold">ERP</th>
                    <th className="px-3 py-2 text-left font-semibold">Annual GBP</th>
                    <th className="px-3 py-2 text-left font-semibold">Users</th>
                    <th className="px-3 py-2 text-left font-semibold">MTD VAT</th>
                    <th className="px-3 py-2 text-left font-semibold">CIS</th>
                    <th className="px-3 py-2 text-left font-semibold">PSSR Support</th>
                  </tr>
                </thead>
                <tbody>
                  {ukErpTable.map((r, i) => (
                    <tr key={i} className="border-t">
                      <td className="px-3 py-2 font-semibold">{r.erp}</td>
                      <td className="px-3 py-2 text-indigo-700">{r.priceGBP}</td>
                      <td className="px-3 py-2">{r.users}</td>
                      <td className="px-3 py-2">{r.mtdVat}</td>
                      <td className="px-3 py-2">{r.cis}</td>
                      <td className="px-3 py-2">{r.pssrSupport}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">London Engineering Services — IR35, Day-Rate Contractors, and System Choice</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              London engineering consultancies (Mott MacDonald, Arup, Atkins Realis, Buro Happold, AECOM, Ramboll UK, Stantec UK, WSP UK) operate distinctive resource models: a permanent staff core supplemented by 30-50% limited-company contractors charging £550-1,200/day on day-rate engagements. Since April 2021 the Off-Payroll Working Rules push IR35 status-determination obligations onto the end-client for medium and large engagements. An ERP that cannot track Status Determination Statements, the Client-Led Disagreement Process, and the deemed-employment PAYE/NI treatment is creating compliance risk.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              For smaller London engineering services firms (under £10M revenue), the practical choice is between Sage 200 Professional, Microsoft Dynamics 365 Business Central, and Atlantis NDT ERP. Sage 200 is mature, well-supported by London-based Sage partners, and handles MTD VAT and CIS natively — typical cost £18-45K/year. Dynamics 365 Business Central integrates tightly with Microsoft 365 and Power BI — £22-55K/year. Atlantis NDT ERP at £14,500/year adds the inspection-and-asset-integrity modules (PSSR 2000, technician certifications) that London consultancies serving Network Rail, National Grid ESO, Thames Water, and HS2 supply chains need but Sage and Dynamics treat as bolt-ons.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Aberdeen Offshore — Why North Sea Service Vendors Need a Sector-Specific ERP</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              The North Sea oil and gas service supply chain — concentrated in Aberdeen, Westhill, Dyce, Inverurie, and Banff — comprises roughly 1,200 service vendors employing 80,000 workers indirectly. Operator compliance demands here are unusually heavy: DNV-ST-F101 governs subsea pipeline girth-weld AUT inspection; NORSOK D-010 governs well integrity; NORSOK S-001 is the HSE format adopted by Norwegian-influenced operators (Equinor UK, Aker BP via the Norwegian-UK interconnect); OPITO BOSIET / FOET certifications are mandatory for offshore deployment; OGUK Energy Industries Council vendor pre-qualification is required for working with the major IOCs.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Generic UK ERP (Sage 200, Dynamics 365 BC, Xero) handle the finance side cleanly but treat OPITO competency, DNV documentation, and operator pre-qualification dossiers as off-system spreadsheet work. The Atlantis NDT ERP North Sea module ships these as first-class entities: every employee record tracks OPITO BOSIET / FOET / MIST status with renewal alerts; every technician carries PCN / CSWIP / ASNT certifications with ISO 9712 expiry tracking; every project links to the DNV-ST-F101 documentation pack including PQR/WPQR welder qualification; every operator pre-qualification cycle has a renewal-tracking workspace.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              {ukHubs.map((h, i) => (
                <div key={i} className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-indigo-500">
                  <h4 className="font-bold text-lg mb-1 text-indigo-900">{h.hub}</h4>
                  <p className="text-slate-700 text-sm">{h.profile}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">PSSR 2000 — The UK Inspection Sector's Killer Feature</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Pressure Systems Safety Regulations 2000 govern every in-service pressure system in the UK. Every system must have a Written Scheme of Examination (WSE) drafted by a Competent Person, scheduled examinations at intervals defined in the WSE (typically 12-72 months depending on risk), and 14-day exceedance reporting to HSE for failed examinations. For UK inspection bodies, asset-integrity contractors, and end-user operators (BP, Shell, Centrica, SSE Thermal, EDF Energy UK), the WSE workflow is the daily core of operations.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Atlantis NDT ERP ships the PSSR 2000 module pre-built: WSE register linked to every pressure system asset; Competent Person certification tracking against IMechE, BINDT and PCN requirements; examination scheduling with auto-generated work orders; 14-day exceedance escalation with HSE notification template; pressure-vessel register with serial-number, manufacturer, design-pressure, and PED/UKCA-marking traceability; and full audit-trail for HSE enforcement-officer visits. For COMAH 2015 sites the module adds safety-case revision tracking and major-accident hazard inspection cycles.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">When to Pick Each UK ERP</h2>
            <ul className="space-y-3 text-slate-700 text-lg">
              <li><strong>SAP S/4HANA or Oracle Fusion</strong> — FTSE 350 firms, multi-country operations, complex consolidation; budget £180K+ per year.</li>
              <li><strong>Oracle NetSuite OneWorld</strong> — Multi-country services firms £40-200M revenue, fast cross-border growth.</li>
              <li><strong>Microsoft Dynamics 365 Business Central</strong> — Microsoft-stack standardized SMEs, £10-50M revenue.</li>
              <li><strong>Sage 200 Professional</strong> — Mature UK SME £5-30M revenue, established Sage relationship, accounting-led.</li>
              <li><strong>IFS Cloud</strong> — Offshore-marine, asset-heavy services, EPC contractors; budget £100K+.</li>
              <li><strong>Atlantis NDT ERP</strong> — Engineering services, inspection firms, Aberdeen offshore-service vendors, any UK SME needing real ERP without 6-figure cost. Flat £14,500/year regardless of user count.</li>
              <li><strong>Xero / QuickBooks UK</strong> — Pure accounting + MTD VAT + CIS, no real project costing or asset-integrity workflow.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Related Resources</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link to="/erp" className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-indigo-500 hover:shadow-md transition"><h4 className="font-bold text-indigo-900">Atlantis NDT ERP Pricing</h4><p className="text-slate-600 text-sm">Flat £14,500/yr with UK localization, MTD VAT, CIS, PSSR.</p></Link>
              <Link to="/erp/crm-ndt-inspection-companies-london" className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-indigo-500 hover:shadow-md transition"><h4 className="font-bold text-indigo-900">CRM for Inspection Companies London</h4><p className="text-slate-600 text-sm">Tender, lead, and bid-management for UK engineering services.</p></Link>
              <Link to="/digital-twins" className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-indigo-500 hover:shadow-md transition"><h4 className="font-bold text-indigo-900">Digital Twins Platform</h4><p className="text-slate-600 text-sm">3D asset visualization with NDT and PSSR overlay.</p></Link>
              <Link to="/contact" className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-indigo-500 hover:shadow-md transition"><h4 className="font-bold text-indigo-900">Book a UK Demo</h4><p className="text-slate-600 text-sm">Walkthrough with PSSR 2000 + North Sea scenarios.</p></Link>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((f, i) => (
                <details key={i} className="bg-white p-5 rounded-lg shadow-sm">
                  <summary className="font-bold text-lg cursor-pointer text-indigo-900">{f.question}</summary>
                  <p className="text-slate-700 mt-3 leading-relaxed">{f.answer}</p>
                </details>
              ))}
            </div>
          </section>

          <section className="bg-gradient-to-br from-indigo-700 to-blue-900 text-white p-10 rounded-2xl mb-12">
            <h2 className="text-3xl font-bold mb-4">See Pricing — Flat £14,500/year (USD affordable, accessible)</h2>
            <p className="text-indigo-100 text-lg mb-6">Atlantis NDT ERP for London engineering services, Aberdeen North Sea vendors, and UK inspection companies. MTD VAT, CIS, PSSR 2000 ready. Unlimited users.</p>
            <div className="flex flex-wrap gap-4">
              <Link to="/erp" className="bg-white text-indigo-900 px-6 py-3 rounded-lg font-semibold hover:bg-indigo-50 flex items-center gap-2">See ERP Pricing <ArrowRight className="w-4 h-4" /></Link>
              <Link to="/contact" className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-500 flex items-center gap-2">Book a Demo <ArrowRight className="w-4 h-4" /></Link>
            </div>
          </section>

          <ContactDetails />
        </div>
              <p className="mt-8 pt-4 border-t border-slate-200 text-sm italic text-slate-500" data-atlantis-pricing-disclaimer="1">Disclaimer: Any salary, cost, or pricing figures in this article are general industry estimates for informational purposes only and do not represent Atlantis NDT pricing.</p>
      </article>
    </div>
  );
}
