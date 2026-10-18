import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { SocialShare } from "@/components/SocialShare";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import OwnerLinkParagraph from "@/components/OwnerLinkParagraph";

// 2026-10-18 (software workstream): every answer below now matches the oilfield owner page
// (/erp-industries/oilfield-services) and /erp. The earlier answers claimed pre-built IADC / OPITO /
// NORSOK / API Q1 workflows, bidirectional operator vendor-portal integration, frac-sand logistics,
// market-data and WITSML feeds, and pre-built Aramco / ADNOC / KOC contract workflows; none is a
// product fact, and the owner page says the ERP does not sync with contractor-management portals.
const faqs = [
  { question: "What is the most affordable ERP for oilfield-services companies in 2026?", answer: "It depends on what the company does. For an oilfield service company whose core work is NDT and inspection of tubulars, wellhead equipment and field facilities, Atlantis NDT ERP runs call-outs, crews, MFL and UT reports, technician certifications, calibrated equipment and standby billing in one system. Plans for the USA and Canada are published on the ERP pricing page; elsewhere it is quoted on request, and there is a free trial. Production-accounting and well-data platforms solve a different problem; compare them on their own vendors' terms." },
  { question: "Does the ERP support IADC / OPITO / Wellsite QC standards?", answer: "Partly. Technician certifications, vision tests and medical fitness expiry are tracked, and training records such as IADC or OPITO certificates can be held as certificates under another scheme with their expiry dates. NORSOK D-010 or API Spec Q1 and Q2 quality-management workflows and wellsite QC witness programmes are not pre-configured; where a company needs them they are scoped during implementation." },
  { question: "How does the ERP handle well-services billing (rig day rates, T&M, lump sum, performance)?", answer: "Partly. Timesheets record inspection, travel, standby and setup time as separate work types with a rate multiplier, which supports day-rate and standby billing, and invoices show labour, equipment and consumables separately. Rig-contract day-rate structures, footage-based or performance-based billing are not standard and would be scoped during implementation." },
  { question: "Can the ERP integrate with Halliburton, Schlumberger, Baker Hughes operator portals?", answer: "No. Atlantis NDT ERP does not sync with operator or contractor-management vendor portals. Certificates, vision tests and calibration records are held on each record, ready to send with a pre-mobilisation pack, and any portal-related document tracking is configured during implementation as part of the agreed scope." },
  { question: "Does the ERP handle frac sand / proppant logistics?", answer: "No. Proppant sourcing, rail and transload logistics are outside the standard scope of Atlantis NDT ERP, which is built around inspection work: crews, reports, certificates, equipment and invoicing." },
  { question: "Does the ERP support FracTrack, drilling-completions data feeds?", answer: "No. Atlantis NDT ERP has no prebuilt market-data or rig-floor data feeds. It has an open REST API, and any connection to another system is scoped per implementation." },
  { question: "Can the ERP handle Saudi Aramco, ADNOC, and KOC OFS contract execution?", answer: "Not as pre-built workflows. Technician qualifications an operator asks for can be held as certificates with their expiry dates, and the job, crew, reports and invoice run the same way for any client. Country-specific e-invoicing, payroll or workforce reporting is scoped per implementation." }
];

export default function AffordableERPForOilfieldServices2026() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      <SEOHead
        title="Affordable ERP for Oilfield Services Companies 2026"
        description="ERP for oilfield service companies doing NDT and inspection work: call-outs, MFL and UT reports, certifications, equipment and standby billing, and what it does not do."
        keywords="affordable erp oilfield services, ofs erp software 2026, quorum energy components alternative, peloton wellview alternative, well services erp, drilling services erp"
        canonical="https://atlantisndt.com/blog/affordable-erp-for-oilfield-services-2026"
        article={{ headline: "Affordable ERP for Oilfield Services Companies 2026", datePublished: "2026-05-24", author: "Atlantis NDT Editorial Team", section: "ERP Buyer Guides" }}
        faq={faqs}
      />
      <Breadcrumbs />

      <section className="bg-gradient-to-br from-stone-700 to-amber-900 text-white pt-24 pb-16">
        <div className="container mx-auto max-w-4xl px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="text-stone-200 mb-4">Oilfield Services ERP Buyer Guide • May 2026 • 12 min read</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Affordable ERP for Oilfield Services Companies 2026</h1>
            <p className="text-xl text-stone-100 mb-8">An honest guide for oilfield service companies that do NDT and inspection work: what Atlantis NDT ERP covers for call-outs, crews, MFL and UT reports, certifications, calibrated equipment and standby billing, and what it does not do.</p>
          </motion.div>
        </div>
      </section>

      <div className="py-6 bg-white border-b">
        <div className="container mx-auto max-w-4xl px-6">
          <SocialShare title="Affordable ERP for Oilfield Services Companies 2026" description="ERP for oilfield service companies doing NDT and inspection work." />
        </div>
      </div>

      <article className="py-16">
        <div className="container mx-auto max-w-4xl px-6">
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Why OFS Contractors Need a Vertical-Native ERP</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Oilfield-services contractors operate at the intersection of three demanding domains: IADC / OPITO / NORSOK competency frameworks for personnel; API Spec Q1 / Q2 / 4F / 5CT / 6A / 7-1 quality-management systems for tools and equipment; and operator-specific qualification regimes (Saudi Aramco SAEP-1112 / SAEP-1119, ADNOC AGES, KOC Field Operations, Petrobras Diretrizes Operacionais) that change between operators and even between operator divisions.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Atlantis NDT ERP covers the inspection side of that work: call-outs dispatched as team assignments, MFL and UT reports, technician certificates with vision-test and medical-fitness expiry, calibrated equipment tracked by serial number, and timesheets that separate standby and travel time. It does not ship with IADC, OPITO, NORSOK or API Q1 workflows, and it does not integrate with operator vendor portals; where a company needs them they are scoped during implementation. Plans for the USA and Canada are published on the ERP pricing page; elsewhere it is quoted on request at info@atlantisndt.com.
            </p>
            <OwnerLinkParagraph path="/blog/affordable-erp-for-oilfield-services-2026" className="owner-link text-slate-600 text-lg leading-relaxed mb-6 [&_a]:text-amber-700 [&_a]:underline [&_a]:underline-offset-2" />
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Related Resources</h2>
            <ul className="text-slate-700 space-y-2 list-disc list-inside">
              <li><Link className="text-amber-700 hover:underline" to="/erp/cmms-for-oilfield-services">CMMS for Oilfield Services</Link></li>
              <li><Link className="text-amber-700 hover:underline" to="/blog/affordable-erp-for-pipeline-companies-2026">Affordable ERP for Pipeline Companies</Link></li>
              <li><Link className="text-amber-700 hover:underline" to="/erp/crm-erp-for-saudi-arabia">CRM ERP for Saudi Arabia</Link></li>
            </ul>
          </section>

          <section className="mb-12">
            <div className="bg-gradient-to-br from-amber-600 to-stone-700 text-white rounded-2xl p-8 text-center">
              <h2 className="text-3xl font-bold mb-3">See the OFS ERP in action</h2>
              <p className="text-amber-100 mb-6 max-w-2xl mx-auto">Book a walkthrough of Atlantis NDT ERP on one of your own call-outs: the crew, the equipment issued, the MFL or UT report and the standby-time invoice.</p>
              <a href="mailto:info@atlantisndt.com?subject=Demo%3A%20Affordable%20ERP%20for%20OFS" className="inline-flex items-center gap-2 bg-white text-amber-700 hover:bg-amber-50 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">info@atlantisndt.com <ArrowRight className="w-5 h-5" /></a>
            </div>
          </section>

          <ContactDetails />
        </div>
              <p className="mt-8 pt-4 border-t border-slate-200 text-sm italic text-slate-500" data-atlantis-pricing-disclaimer="1">Disclaimer: Any salary, cost, or pricing figures in this article are general industry estimates for informational purposes only and do not represent Atlantis NDT pricing.</p>
      </article>
    </div>
  );
}
