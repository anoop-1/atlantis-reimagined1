import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { SocialShare } from "@/components/SocialShare";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const faqs = [
  { question: "How much does Odoo ERP cost in 2026?", answer: "Odoo ERP 2026 pricing comes in four flavors. (1) Odoo Community Edition — free, open-source, self-hosted, requires in-house DevOps. (2) Odoo Online Standard — $7/user/month for one application or $24.90/user/month for all applications (annual billing). (3) Odoo Online Custom — $37.40/user/month for all apps with Studio customisation. (4) Odoo.sh (developer cloud) — $24.90/user/month + hosting from $58/month for small worker instance. (5) Odoo Enterprise via implementation partner — $24-49/user/month subscription + partner-led implementation typically $30-150K. (6) Atlantis NDT ERP (built on Odoo 18) — flat USD $18,000/year all-in including hosting, implementation, training, support, and NDT-vertical extensions." },
  { question: "Why does Atlantis NDT ERP charge a flat fee when Odoo charges per user?", answer: "Atlantis NDT is an Odoo Partner that sells a pre-configured, hosted, NDT-vertical-extended deployment of Odoo Enterprise. The flat $18,000/year fee absorbs: (a) the per-user Odoo Enterprise licence at $24-49/user × 25 users included = ~$7,200-14,700/year passed-through; (b) AWS hosting ($3-6K/year); (c) Atlantis NDT vertical extensions (worth $100K+ in customisation cost if built from scratch); (d) implementation support (worth $30-150K standalone); (e) training, support, upgrades. The flat-fee model means Atlantis NDT absorbs the per-user margin compression in exchange for predictable customer economics, which works at scale across our 6,700+ CRM contacts and growing client base." },
  { question: "Is Odoo Enterprise worth the upgrade from Community Edition?", answer: "Odoo Enterprise adds: (a) Studio (no-code customisation tool, worth $20-60K of consultant time if hand-coded); (b) advanced apps (Marketing Automation, Quality, Maintenance, Planning, IoT, Field Service, Documents, Sign, Spreadsheet, VoIP); (c) advanced reporting (cohort analysis, dashboard graphs, pivot tables); (d) email integration (full Outlook / Gmail sync); (e) accounting closing, multi-company consolidation, multi-currency; (f) mobile apps for all modules; (g) 24/7 support from Odoo. For inspection firms, the Enterprise version of Maintenance, Quality, Field Service and Documents apps is essentially required — making Community a false economy for inspection use." },
  { question: "What is the cheapest Odoo ERP option for an NDT inspection firm?", answer: "For NDT inspection firms (5-50 staff), the cheapest realistic 2026 Odoo deployment options are: (1) Atlantis NDT ERP at $18K/year flat (includes NDT vertical, beats Odoo direct on bundled value); (2) Odoo Online Standard at $24.90/user/month × 25 users = $7,470/year (cheapest pure Odoo cost but no NDT vertical, no implementation help, no operator-portal integration); (3) Odoo Community self-hosted = $0 software cost + $3-6K hosting + $30-150K implementation = $33-156K year 1, $3-6K subsequent years (cheapest at scale-out if you have in-house DevOps and an Odoo developer). For most NDT firms the Atlantis NDT ERP option wins on all-in TCO because the NDT-vertical customisation cost is included." },
  { question: "How much does Odoo implementation cost?", answer: "Odoo implementation cost varies enormously by partner and scope. Tier-1 Odoo Gold Partners (Bista Solutions, Cybrosys, Avalign, Odoo Inc. directly, IT Path Solutions) typically charge $30-150K for a 25-50 user mid-market implementation. Tier-2 partners $20-80K. Tier-3 partners (India-based) $10-45K. Atlantis NDT ERP includes implementation in the $18K/year flat fee — so the customer pays $18K/year and gets the implementation worth $30-150K bundled in." }
];

export default function OdooERPPricingExplained2026() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      <SEOHead
        title="Odoo ERP Pricing Explained 2026 — Community vs Enterprise vs Online vs Atlantis"
        description="Odoo ERP pricing 2026 explained. Community free vs Enterprise $24-49/user vs Online $24.90/user vs Atlantis NDT ERP $18K/yr flat. Implementation costs, partner pricing, real 5-yr TCO."
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
            <p className="text-xl text-purple-100 mb-8">Honest 2026 explanation of Odoo ERP pricing — Community (free open-source), Online ($7-37/user/month), Enterprise ($24-49/user/month), Odoo.sh developer cloud, partner-led implementation ($10-150K), and Atlantis NDT ERP flat $18K/year as a packaged Odoo Partner offering.</p>
          </motion.div>
        </div>
      </section>

      <div className="py-6 bg-white border-b"><div className="container mx-auto max-w-4xl px-6"><SocialShare title="Odoo ERP Pricing Explained 2026" description="Honest Odoo 2026 pricing breakdown." /></div></div>

      <article className="py-16">
        <div className="container mx-auto max-w-4xl px-6">
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">The Four Layers of Odoo Pricing</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Odoo's pricing model has four distinct layers: (1) the underlying software — Community is open-source free, Enterprise is commercial subscription; (2) the hosting — Online (Odoo-hosted SaaS), Odoo.sh (developer cloud with Git workflow), or self-hosted (customer-managed); (3) the customisation — Studio (no-code, Enterprise-included), Python development (custom modules), partner-led implementation; (4) the support — Standard (chat / email), Custom (Odoo Inc.), or partner-provided. Atlantis NDT ERP bundles all four layers at flat $18K/year with the Odoo 18 Enterprise base + Atlantis NDT vertical extensions + AWS hosting + Atlantis-delivered implementation and support.
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
              <h2 className="text-3xl font-bold mb-3">See the Odoo-based ERP at flat fee</h2>
              <p className="text-purple-100 mb-6 max-w-2xl mx-auto">Book a 30-minute walkthrough showing Atlantis NDT ERP (Odoo 18 + NDT vertical) at $18K/year flat vs your shortlist Odoo partner quotes.</p>
              <a href="mailto:info@atlantisndt.com?subject=Demo%3A%20Odoo%20ERP%20Pricing" className="inline-flex items-center gap-2 bg-white text-purple-700 hover:bg-purple-50 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">info@atlantisndt.com <ArrowRight className="w-5 h-5" /></a>
            </div>
          </section>

          <ContactDetails />
        </div>
      </article>
    </div>
  );
}
