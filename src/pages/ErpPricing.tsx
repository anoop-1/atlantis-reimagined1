// /erp/pricing — Atlantis ERP plans for the USA and Canada (owner, 2026-10-07).
// All copy and figures come from src/data/approved-erp-pricing.json, which the
// prerendered page (scripts/approved-pricing.mjs → ERP_PRICING_ROUTE) also reads,
// so the H1, table and FAQ match in both layers.
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { ErpPlanCards, ErpPlansTable } from "@/components/ErpPlansPricing";
import { ERP_PRICING, erpTokens } from "@/lib/approved-pricing";

export default function ErpPricing() {
  const pg = ERP_PRICING.page;
  const faq = pg.faq.map((f) => ({ question: f.q, answer: erpTokens(f.a) }));
  return (
    <div className="min-h-screen pt-20">
      <Navigation />
      <SEOHead title={pg.title} description={pg.description} canonical="https://atlantisndt.com/erp/pricing" faq={faq} />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "ERP", href: "/erp" }, { label: "Pricing", href: "/erp/pricing" }]} />

      <section className="py-14 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">{pg.h1}</h1>
          {pg.intro.map((p) => (
            <p key={p} className="text-lg text-muted-foreground mb-4">{erpTokens(p)}</p>
          ))}
        </div>
      </section>

      <section data-approved-erp-pricing="full" className="container mx-auto px-6 max-w-6xl py-12 space-y-8">
        <h2 className="text-2xl md:text-3xl font-bold">Plans at a glance — {ERP_PRICING.marketLabel}</h2>
        <ErpPlansTable />
        <ErpPlanCards />
        <div className="text-center">
          <Link to={ERP_PRICING.walkthroughHref} data-cta-variant="erp-pricing-walkthrough" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg">
            Book a free walkthrough <ArrowRight className="w-4 h-4" />
          </Link>
          <p className="text-sm text-muted-foreground mt-2">See your own workflow running before you choose a plan.</p>
        </div>
      </section>

      <div className="container mx-auto px-6 max-w-3xl pb-8 space-y-10">
        {pg.sections.map((s) => (
          <section key={s.h2}>
            <h2 className="text-2xl font-bold mb-3">{s.h2}</h2>
            {s.paragraphs.map((p) => (
              <p key={p} className="text-muted-foreground mb-3">{erpTokens(p)}</p>
            ))}
          </section>
        ))}
        <p className="text-muted-foreground">
          Outside North America?{" "}
          <Link to={ERP_PRICING.quoteHref} className="text-primary underline">Request a quote for your region</Link>. See also{" "}
          <Link to="/erp" className="text-primary underline">Atlantis ERP</Link> and{" "}
          <Link to="/erp/apps" className="text-primary underline">every ERP app</Link>.
        </p>
        <section>
          <h2 className="text-2xl font-bold mb-4">Frequently asked questions</h2>
          <div className="space-y-5">
            {faq.map((f) => (
              <div key={f.question}>
                <h3 className="font-semibold mb-1">{f.question}</h3>
                <p className="text-muted-foreground">{f.answer}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
      <ContactDetails />
    </div>
  );
}
