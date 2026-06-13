import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { SocialShare } from "@/components/SocialShare";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const faqs = [
  { question: "How much does Odoo ERP cost in 2026?", answer: "Odoo ERP 2026 pricing comes in several flavors. (1) Odoo Community Edition — free, open-source, self-hosted, requires in-house DevOps. (2) Odoo Online Standard — per-user/month for one app or all apps (annual billing). (3) Odoo Online Custom — all apps with Studio customisation, per-user/month. (4) Odoo.sh (developer cloud) — per-user/month plus hosting from a small worker instance upward. (5) Odoo Enterprise via implementation partner — per-user subscription plus partner-led implementation that varies widely by scope. (6) Atlantis NDT ERP (built on Odoo 18) — affordable, accessible, fully customizable; affordable, accessible and shared by quote on request. All-in fee includes hosting, implementation, training, support, and NDT-vertical extensions. Email info@atlantisndt.com for a region-specific quote." },
  { question: "How does Atlantis NDT ERP packaging compare to vanilla Odoo per-user pricing?", answer: "Atlantis NDT is an Odoo Partner that sells a pre-configured, hosted, NDT-vertical-extended deployment of Odoo Enterprise as a single affordable, accessible package. The all-in fee absorbs: (a) the Odoo Enterprise licence for an included user count; (b) AWS hosting; (c) Atlantis NDT vertical extensions (substantial customisation cost if built from scratch); (d) implementation support; (e) training, support, upgrades. Fully customizable. Pricing varies by region — request a tailored quote at info@atlantisndt.com." },
  { question: "Is Odoo Enterprise worth the upgrade from Community Edition?", answer: "Odoo Enterprise adds: (a) Studio (no-code customisation tool, saves substantial consultant time vs hand-coded customisation); (b) advanced apps (Marketing Automation, Quality, Maintenance, Planning, IoT, Field Service, Documents, Sign, Spreadsheet, VoIP); (c) advanced reporting (cohort analysis, dashboard graphs, pivot tables); (d) email integration (full Outlook / Gmail sync); (e) accounting closing, multi-company consolidation, multi-currency; (f) mobile apps for all modules; (g) 24/7 support from Odoo. For inspection firms, the Enterprise version of Maintenance, Quality, Field Service and Documents apps is essentially required — making Community a false economy for inspection use." },
  { question: "What is the most affordable Odoo ERP option for an NDT inspection firm?", answer: "For NDT inspection firms (5-50 staff), realistic 2026 Odoo deployment options are: (1) Atlantis NDT ERP — affordable, accessible, fully customizable, includes the NDT vertical and bundled implementation, training, hosting and support (quote on request); (2) Odoo Online Standard — cheapest pure Odoo subscription cost but no NDT vertical, no implementation help, no operator-portal integration; (3) Odoo Community self-hosted = $0 software cost but requires in-house DevOps, an Odoo developer, and partner-led implementation if customisation is needed. For most NDT firms the Atlantis NDT ERP option wins on all-in value because the NDT-vertical customisation is bundled. Email info@atlantisndt.com for a region-specific quote." },
  { question: "How much does Odoo implementation cost?", answer: "Odoo implementation cost varies enormously by partner and scope. Tier-1 Odoo Gold Partners (Bista Solutions, Cybrosys, Avalign, Odoo Inc. directly, IT Path Solutions) tend to be the most expensive band for mid-market implementations; Tier-2 partners are mid-band; Tier-3 / regional partners are typically the most affordable. Atlantis NDT ERP includes implementation in the all-in fee — fully customizable, with one predictable engagement instead of separate line items. Pricing varies by region; request a quote at info@atlantisndt.com." }
];

export default function OdooERPPricingExplained2026() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      <SEOHead
        title="Odoo ERP Pricing Explained 2026 — Community vs Enterprise vs Online vs Atlantis"
        description="Odoo ERP pricing 2026 explained. Community vs Enterprise vs Online vs Atlantis NDT ERP — affordable, accessible, fully customizable. Implementation models, partner tiers, and how to request a region-specific quote."
        keywords="odoo erp pricing 2026, odoo enterprise pricing, odoo community vs enterprise, odoo implementation cost, odoo partner pricing, cheap odoo erp"
        canonical="https://atlantisndt.com/blog/odoo-erp-pricing-explained-2026"
        article={{ headline: "Odoo ERP Pricing Explained 2026", datePublished: "2026-05-24", author: "Atlantis NDT Editorial Team", section: "ERP Buyer Guides" }}
        faq={faqs}
      />
      <Breadcrumbs />

      <section className="bg-gradient-to-br from-purple-700 to-violet-900 text-white pt-24 pb-16">
        <div className="container mx-auto max-w-4xl px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="text-purple-200 mb-4">Odoo Pricing Explained • May 2026 • 11 min read</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Odoo ERP Pricing Explained 2026</h1>
            <p className="text-xl text-purple-100 mb-8">Honest 2026 explanation of Odoo ERP pricing models — Community (free open-source), Online (per-user/month), Enterprise (per-user/month), Odoo.sh developer cloud, partner-led implementation tiers, and Atlantis NDT ERP as a packaged Odoo Partner offering — affordable, accessible, fully customizable, quote on request.</p>
          </motion.div>
        </div>
      </section>

      <div className="py-6 bg-white border-b"><div className="container mx-auto max-w-4xl px-6"><SocialShare title="Odoo ERP Pricing Explained 2026" description="Honest Odoo 2026 pricing breakdown." /></div></div>

      <article className="py-16">
        <div className="container mx-auto max-w-4xl px-6">
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">The Four Layers of Odoo Pricing</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Odoo's pricing model has four distinct layers: (1) the underlying software — Community is open-source free, Enterprise is commercial subscription; (2) the hosting — Online (Odoo-hosted SaaS), Odoo.sh (developer cloud with Git workflow), or self-hosted (customer-managed); (3) the customisation — Studio (no-code, Enterprise-included), Python development (custom modules), partner-led implementation; (4) the support — Standard (chat / email), Custom (Odoo Inc.), or partner-provided. Atlantis NDT ERP bundles all four layers into a single affordable, accessible, fully customizable package — the Odoo 18 Enterprise base plus Atlantis NDT vertical extensions, AWS hosting, and Atlantis-delivered implementation and support. Pricing varies by region; request a tailored quote at info@atlantisndt.com.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Related Resources</h2>
            <ul className="text-slate-700 space-y-2 list-disc list-inside">
              <li><Link className="text-purple-700 hover:underline" to="/blog/odoo-vs-sap-vs-netsuite-erp-comparison-2026">Odoo vs SAP vs NetSuite Comparison</Link></li>
              <li><Link className="text-purple-700 hover:underline" to="/blog/best-affordable-erp-software-comparison-2026">Best Affordable ERP Comparison 2026</Link></li>
            </ul>
          </section>

          <section className="mb-12">
            <div className="bg-gradient-to-br from-purple-600 to-violet-700 text-white rounded-2xl p-8 text-center">
              <h2 className="text-3xl font-bold mb-3">See the Odoo-based NDT ERP — affordable, accessible, fully customizable</h2>
              <p className="text-purple-100 mb-6 max-w-2xl mx-auto">Book a 30-minute walkthrough showing Atlantis NDT ERP (Odoo 18 + NDT vertical) and how it compares to your shortlist Odoo partner quotes. Region-specific pricing on request.</p>
              <a href="mailto:info@atlantisndt.com?subject=Demo%3A%20Odoo%20ERP%20Pricing" className="inline-flex items-center gap-2 bg-white text-purple-700 hover:bg-purple-50 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">info@atlantisndt.com <ArrowRight className="w-5 h-5" /></a>
            </div>
          </section>

          <ContactDetails />
        </div>
              <p className="mt-8 pt-4 border-t border-slate-200 text-sm italic text-slate-500" data-atlantis-pricing-disclaimer="1">Disclaimer: Any salary, cost, or pricing figures in this article are general industry estimates for informational purposes only and do not represent Atlantis NDT pricing.</p>
      </article>
    </div>
  );
}
