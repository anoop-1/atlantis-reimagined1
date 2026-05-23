import { Link } from "react-router-dom";
import { Database, Cog, Sparkles, ArrowRight } from "lucide-react";

/**
 * SEO link-equity distribution block.
 *
 * Inserted into top-30 high-traffic pages on atlantisndt.com to funnel
 * incoming SEO traffic (cert / training / salary / API guide pages) into
 * the two flagship product pillars + a contextually-relevant Odoo-app
 * pillar page.
 *
 *  - Card 1 (fixed): /erp        — Atlantis NDT ERP, $18,000/yr
 *  - Card 2 (fixed): /digital-twins — Digital Twin for NDT
 *  - Card 3 (dynamic): pick a pillar that matches the source page's intent.
 *
 * Designed to be visually distinct (gradient panel + accent border) but
 * still respect the existing slate/blue palette used elsewhere
 * (RelatedProducts.tsx, asnt-certification.tsx etc.). Uses only existing
 * Tailwind + lucide-react — no new deps.
 *
 * Drop near the END of the main page content, BEFORE <ContactDetails />
 * or the page footer, inside the existing `<div className="container ..">`
 * wrapper. Component owns its own `<aside>` and vertical margins.
 *
 * Usage:
 *   <ErpDtCrossPromoBlock relevantApp="CMMS" relevantAppHref="/erp/cmms-for-inspection-companies" />
 *
 * `relevantApp` should be a short noun phrase (e.g. "CMMS", "HR & Payroll",
 * "Quality Management") — it is interpolated into the Card 3 copy.
 *
 * If `relevantApp` / `relevantAppHref` are omitted, Card 3 falls back to
 * a generic "Browse all 30+ Odoo apps" → /erp link, so the block is safe
 * to drop anywhere without crashing.
 */
interface ErpDtCrossPromoBlockProps {
  /** Short label for the contextually-relevant Odoo app (e.g. "CMMS", "HR & Payroll"). */
  relevantApp?: string;
  /** Target URL for the relevant-app pillar page. */
  relevantAppHref?: string;
  /** Optional heading override. */
  heading?: string;
  /** Optional sub-copy override. */
  subheading?: string;
}

export function ErpDtCrossPromoBlock({
  relevantApp,
  relevantAppHref,
  heading = "Built by NDT inspectors — software included in every Atlantis deal",
  subheading = "We don't just teach and consult — we ship the software inspection companies actually use. Try free, see pricing, no sales call required.",
}: ErpDtCrossPromoBlockProps) {
  const card3Title = relevantApp
    ? `${relevantApp} for NDT Companies`
    : "All 30+ Odoo Apps for NDT";
  const card3Description = relevantApp
    ? `${relevantApp} for NDT Companies — included free at $18K/yr. Pre-configured for inspection workflows.`
    : "Browse the full Odoo-app pillar set for NDT — CRM, CMMS, HR, Quality, Project, Document Control, and more. All included at $18K/yr.";
  const card3Href = relevantAppHref ?? "/erp";

  return (
    <aside
      aria-label="Atlantis NDT ERP and Digital Twin products"
      className="my-12 rounded-2xl border-2 border-[#004aad]/20 bg-gradient-to-br from-blue-50 via-white to-slate-50 p-6 md:p-8 shadow-sm"
    >
      <div className="flex items-center gap-2 mb-2">
        <Sparkles className="w-5 h-5 text-[#004aad]" aria-hidden="true" />
        <span className="text-xs font-semibold uppercase tracking-wider text-[#004aad]">
          Atlantis Products
        </span>
      </div>
      <div className="mb-6">
        <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-2 leading-tight">
          {heading}
        </h2>
        <p className="text-sm text-slate-600 max-w-3xl leading-relaxed">
          {subheading}
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {/* Card 1 — ERP */}
        <Link
          to="/erp"
          className="group block bg-white p-5 rounded-xl border border-slate-200 hover:border-[#004aad] hover:shadow-md transition-all"
        >
          <Database className="w-7 h-7 text-[#004aad] mb-3" aria-hidden="true" />
          <h3 className="font-bold text-slate-900 mb-2 group-hover:text-[#004aad] transition-colors">
            Atlantis NDT ERP
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed mb-3">
            $18,000/yr — all 30+ Odoo apps included. Fully customizable for
            NDT inspection workflows. Cheapest ERP in the industry.
          </p>
          <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#004aad] group-hover:gap-2 transition-all">
            See pricing
            <ArrowRight className="w-3 h-3" aria-hidden="true" />
          </span>
        </Link>

        {/* Card 2 — Digital Twin */}
        <Link
          to="/digital-twins"
          className="group block bg-white p-5 rounded-xl border border-slate-200 hover:border-[#004aad] hover:shadow-md transition-all"
        >
          <Cog className="w-7 h-7 text-[#004aad] mb-3" aria-hidden="true" />
          <h3 className="font-bold text-slate-900 mb-2 group-hover:text-[#004aad] transition-colors">
            Digital Twin for NDT
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed mb-3">
            UT/PAUT in 3D, API 579 FFS, RBI heat-maps, audit-ready packs.
            Built on real plant geometry — not generic CAD.
          </p>
          <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#004aad] group-hover:gap-2 transition-all">
            Try free
            <ArrowRight className="w-3 h-3" aria-hidden="true" />
          </span>
        </Link>

        {/* Card 3 — contextual Odoo app pillar */}
        <Link
          to={card3Href}
          className="group block bg-white p-5 rounded-xl border border-slate-200 hover:border-[#004aad] hover:shadow-md transition-all"
        >
          <Sparkles className="w-7 h-7 text-[#004aad] mb-3" aria-hidden="true" />
          <h3 className="font-bold text-slate-900 mb-2 group-hover:text-[#004aad] transition-colors">
            {card3Title}
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed mb-3">
            {card3Description}
          </p>
          <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#004aad] group-hover:gap-2 transition-all">
            Explore module
            <ArrowRight className="w-3 h-3" aria-hidden="true" />
          </span>
        </Link>
      </div>
    </aside>
  );
}

export default ErpDtCrossPromoBlock;
