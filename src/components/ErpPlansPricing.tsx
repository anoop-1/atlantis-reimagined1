// Atlantis ERP plans & pricing — USA & Canada only (CLAUDE.md §18, revised 2026-10-07).
// Data: src/data/approved-erp-pricing.json (also read by the crawler layer,
// scripts/approved-pricing.mjs). Allowed ONLY on /erp (variant "section") and
// /erp/pricing (variant "full"); the pricing gate fails on any other usage.
import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import { ERP_PRICING, fmtUsd } from "@/lib/approved-pricing";

export function ErpPlansTable() {
  const plans = ERP_PRICING.plans;
  return (
    <div className="overflow-x-auto rounded-xl border bg-card">
      <table className="w-full text-sm">
        <caption className="text-left font-semibold p-3">
          Atlantis ERP plans, {ERP_PRICING.marketLabel} (USD)
        </caption>
        <thead className="bg-muted/50">
          <tr>
            <th scope="col" className="text-left p-3">Plan</th>
            {plans.map((p) => (
              <th key={p.key} scope="col" className="text-left p-3">{p.name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr className="border-t">
            <th scope="row" className="text-left p-3 font-medium">Annual licence</th>
            {plans.map((p) => (
              <td key={p.key} className="p-3 text-primary font-semibold whitespace-nowrap">{fmtUsd(p.annual)} / year</td>
            ))}
          </tr>
          <tr className="border-t">
            <th scope="row" className="text-left p-3 font-medium">One-time implementation</th>
            {plans.map((p) => (
              <td key={p.key} className="p-3 whitespace-nowrap">{fmtUsd(p.setup)}</td>
            ))}
          </tr>
          <tr className="border-t">
            <th scope="row" className="text-left p-3 font-medium">Users</th>
            {plans.map((p) => (
              <td key={p.key} className="p-3">Up to {p.users}</td>
            ))}
          </tr>
          {ERP_PRICING.comparison.map((c) => (
            <tr key={c.label} className="border-t">
              <th scope="row" className="text-left p-3 font-medium">{c.label}</th>
              {plans.map((p) => (
                <td key={p.key} className="p-3">{(c.values as Record<string, string>)[p.key] ?? ""}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function ErpPlanCards() {
  return (
    <div className="grid md:grid-cols-3 gap-5">
      {ERP_PRICING.plans.map((p) => (
        <article key={p.key} className={`p-6 rounded-xl border bg-card ${p.key === "business" ? "border-primary shadow-lg" : ""}`}>
          <p className="text-xs uppercase tracking-wide text-primary font-semibold mb-1">{p.tier}</p>
          <h3 className="text-xl font-bold mb-2">{p.name}</h3>
          <p className="text-2xl font-bold">
            {fmtUsd(p.annual)} <span className="text-sm font-normal text-muted-foreground">/ year licence</span>
          </p>
          <p className="text-sm text-muted-foreground mb-4">
            + {fmtUsd(p.setup)} one-time implementation · up to {p.users} users
          </p>
          {p.inherits && <p className="text-sm font-medium mb-2">{p.inherits}</p>}
          <ul className="space-y-1.5 text-sm">
            {p.features.map((f) => (
              <li key={f} className="flex gap-2">
                <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" /> {f}
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}

/** Compact section for /erp. */
export default function ErpPlansPricing() {
  const s = ERP_PRICING.section;
  return (
    <section id="erp-plans-pricing" data-approved-erp-pricing="section" aria-labelledby="erp-plans-h" className="container mx-auto px-6 max-w-5xl py-12">
      <h2 id="erp-plans-h" className="text-2xl md:text-3xl font-bold mb-3">{s.heading}</h2>
      <p className="text-muted-foreground mb-6">{s.intro}</p>
      <ErpPlansTable />
      <p className="mt-4 text-sm text-muted-foreground">
        {s.outsideNa}{" "}
        <Link to={ERP_PRICING.quoteHref} className="text-primary underline">Request a quote for your region</Link>.{" "}
        <Link to="/erp/pricing" className="text-primary underline font-medium">{s.moreLinkText}</Link>.
      </p>
    </section>
  );
}
