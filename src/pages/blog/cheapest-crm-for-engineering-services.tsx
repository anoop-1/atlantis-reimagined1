import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { SocialShare } from "@/components/SocialShare";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const faqs = [
  { question: "What is the cheapest CRM for engineering-services companies?", answer: "For engineering services (NDT inspection, fabrication, design consultancy, EPC, project management), the cheapest CRM at production scale (25+ users) is Atlantis NDT ERP CRM at $18,000/year flat including the full ERP. Per-user CRM competitors: HubSpot CRM Starter at $20/user/month ($6K-30K/year for 25-125 users); Zoho CRM Standard at $14/user/month ($4.2K-21K/year for 25-125 users); Pipedrive Essential at $14/user/month ($4.2K-21K/year for 25-125 users); Freshsales Suite at $15/user/month ($4.5K-22.5K/year for 25-125 users). Below 25 users, per-user CRM is cheaper on a price-only basis but lacks engineering-services vertical depth. Above 25 users, Atlantis NDT ERP CRM wins on both price and depth." },
  { question: "Why does engineering-services CRM need different software from generic CRM?", answer: "Engineering services pipelines have characteristics generic CRMs don't model well: (1) long sales cycles (6-24 months from initial enquiry to contract award); (2) multi-stakeholder decision processes (project sponsor, technical authority, procurement, QA/QC, HSE — often 5-10 individuals per opportunity); (3) qualification gates (ISO 9001 / 17020 / 17025 accreditation evidence, NADCAP, IATF 16949, ASME accreditation, AWS certification, operator-specific vendor portal evidence packs); (4) per-opportunity scope-of-work documentation (technical method statements, ITPs — Inspection and Test Plans, NDE travelers); (5) multi-currency / multi-jurisdiction pricing." },
  { question: "Can I use HubSpot Free for an engineering-services company?", answer: "HubSpot CRM Free supports up to 1 million contacts and basic pipeline management — and works fine for very early-stage engineering consultancies. The free tier hits limits around: (a) automation (no automated workflow beyond basic email follow-up); (b) custom properties (max 10 custom contact / deal properties — most engineering firms need 30-80 custom fields); (c) reporting (limited dashboard customisation); (d) email send limits (2,000/month bulk send). Upgrade to HubSpot Sales Hub Starter ($20/user/month) or Professional ($90/user/month) typically becomes necessary around 6-18 months of growth." },
  { question: "Does the Atlantis NDT ERP CRM work for non-NDT engineering services?", answer: "Yes. The Atlantis NDT ERP CRM is built on Odoo 18 CRM (a generic-purpose CRM) with the NDT vertical added as an extension layer. The base CRM works equally well for engineering services firms outside NDT — design consultancies, EPC contractors, civil engineering firms, mechanical / electrical / structural / instrumentation engineering, and similar professional-services businesses. The NDT-specific fields can be hidden or repurposed for other vertical-specific data without affecting the core CRM workflow." },
  { question: "What is the typical 5-year CRM TCO for a 30-staff engineering services firm?", answer: "5-year CRM TCO comparison for a 30-staff engineering services firm: HubSpot Sales Hub Pro $135-270K (50 seats at $90-150/mo); Salesforce Sales Cloud Pro $120-240K (50 users at $80-150/mo); Zoho CRM Enterprise $36-72K (50 users at $40/mo); Pipedrive Power $36-72K (50 users at $49/mo); Atlantis NDT ERP CRM $90K flat over 5 years (all-in, includes full ERP). For pure-CRM cost Zoho and Pipedrive win at the cheap end; for bundled full-ERP-and-CRM Atlantis NDT wins at the value end." }
];

export default function CheapestCRMForEngineeringServices() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      <SEOHead
        title="Cheapest CRM for Engineering Services Companies 2026"
        description="Cheapest CRM for engineering services 2026. HubSpot vs Zoho vs Pipedrive vs Salesforce vs Atlantis NDT ERP $18K/yr flat. Per-user breakeven, engineering-vertical features, real 5-yr TCO."
        keywords="cheapest crm for engineering services, affordable crm engineering, ndt crm cheap, hubspot vs zoho engineering, salesforce alternative engineering services"
        canonical="https://atlantisndt.com/blog/cheapest-crm-for-engineering-services"
        article={{ headline: "Cheapest CRM for Engineering Services Companies", datePublished: "2026-05-24", author: "Atlantis NDT Editorial Team", section: "ERP Buyer Guides" }}
        faq={faqs}
      />
      <Breadcrumbs />

      <section className="bg-gradient-to-br from-teal-700 to-cyan-900 text-white pt-24 pb-16">
        <div className="container mx-auto max-w-4xl px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="text-teal-200 mb-4">Engineering Services CRM • May 2026 • 11 min read</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Cheapest CRM for Engineering Services Companies</h1>
            <p className="text-xl text-teal-100 mb-8">An honest comparison of cheap CRM options for engineering-services firms — HubSpot Free / Sales Hub, Zoho CRM, Pipedrive, Salesforce, and the flat-fee Atlantis NDT ERP CRM bundled with full ERP.</p>
          </motion.div>
        </div>
      </section>

      <div className="py-6 bg-white border-b"><div className="container mx-auto max-w-4xl px-6"><SocialShare title="Cheapest CRM for Engineering Services" description="Honest CRM cost comparison." /></div></div>

      <article className="py-16">
        <div className="container mx-auto max-w-4xl px-6">
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">The Cost Crossover Between Per-User CRM and Flat-Fee CRM</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Per-user CRM (HubSpot, Salesforce, Zoho, Pipedrive) is cheap below ~20 users — typically $5-15K/year for an early-stage engineering services firm. The structural cost gap appears as the firm grows: at 30 users HubSpot Pro costs $32-54K/year, Salesforce Pro $29-54K/year, Zoho $14K/year, Pipedrive $18K/year. Atlantis NDT ERP CRM at $18K/year flat is cheapest for any firm with 25-100 staff and includes the full ERP stack that the per-user-CRM competitors don't bundle.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Related Resources</h2>
            <ul className="text-slate-700 space-y-2 list-disc list-inside">
              <li><Link className="text-teal-700 hover:underline" to="/blog/affordable-crm-for-ndt-inspection-companies-2026">Affordable CRM for NDT Inspection Companies</Link></li>
              <li><Link className="text-teal-700 hover:underline" to="/erp/crm-for-ndt-companies">CRM for NDT Companies (product page)</Link></li>
            </ul>
          </section>

          <section className="mb-12">
            <div className="bg-gradient-to-br from-teal-600 to-cyan-700 text-white rounded-2xl p-8 text-center">
              <h2 className="text-3xl font-bold mb-3">See the engineering-services CRM in action</h2>
              <p className="text-teal-100 mb-6 max-w-2xl mx-auto">Book a 30-minute walkthrough comparing Atlantis NDT ERP CRM against your current HubSpot / Salesforce / Zoho / Pipedrive setup with real cost numbers for your team size.</p>
              <a href="mailto:info@atlantisndt.com?subject=Demo%3A%20Cheapest%20CRM%20Engineering" className="inline-flex items-center gap-2 bg-white text-teal-700 hover:bg-teal-50 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">info@atlantisndt.com <ArrowRight className="w-5 h-5" /></a>
            </div>
          </section>

          <ContactDetails />
        </div>
      </article>
    </div>
  );
}
