// /erp/apps — every app on the Atlantis NDT ERP home screen, grouped the way the
// nav flyout groups them. Digital Twin Reporting (under NDT Reports) and
// Practical NDT (under eLearning) are the two highlighted products.
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import catalog from "@/data/erp-apps-catalog.json";

const TITLE = "NDT ERP Apps: Reports, Certificates, eLearning & More | Atlantis NDT";
const DESC =
  "All 28 apps in the Atlantis NDT ERP, from NDT Reports and technician Certificates to Team Assignments, Quotations and eLearning. Book a demo or request a quote.";

export default function ErpAppsHub() {
  const featured = catalog.apps.filter((a) => a.featured);
  return (
    <div className="min-h-screen pt-20">
      <Navigation />
      <SEOHead title={TITLE} description={DESC} canonical="https://atlantisndt.com/erp/apps" />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "ERP", href: "/erp" }, { label: "Apps", href: "/erp/apps" }]} />

      <section className="py-14 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Every app in the Atlantis NDT ERP</h1>
          <p className="text-lg text-muted-foreground mb-8">
            One system for an NDT company: {catalog.apps.length} apps covering reports, technician certifications, crews,
            quotes, invoicing and training. Start with the apps you need and add the rest when you're ready.
          </p>
          <Link
            to="/contact?service=erp&subject=ERP%20demo%20(all%20apps)"
            data-cta-variant="erp-apps-hub"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg shadow-lg hover:opacity-90"
          >
            Request a demo <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <section className="container mx-auto px-6 max-w-5xl py-10 grid md:grid-cols-2 gap-4">
        {featured.map((a) => (
          <Link key={a.slug} to={a.featured!.path} className="flex items-center gap-4 p-6 rounded-xl border-2 border-primary bg-white shadow-md hover:shadow-lg">
            <Sparkles className="w-8 h-8 text-primary shrink-0" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-primary">Featured in {a.name}</p>
              <p className="text-xl font-bold">{a.featured!.name}</p>
            </div>
          </Link>
        ))}
      </section>

      {catalog.categories.map((c) => (
        <section key={c.key} className="container mx-auto px-6 max-w-5xl pb-10">
          <h2 className="text-2xl font-bold mb-4">{c.name}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {catalog.apps
              .filter((a) => a.category === c.key)
              .map((a) => (
                <Link key={a.slug} to={`/erp/apps/${a.slug}`} className="p-5 rounded-lg border hover:border-primary hover:shadow">
                  <p className="font-semibold text-lg">{a.name}</p>
                  <p className="text-sm text-muted-foreground">{a.blurb}</p>
                </Link>
              ))}
          </div>
        </section>
      ))}

      <section className="py-14 bg-muted/40 text-center">
        <h2 className="text-3xl font-bold mb-3">Not sure which apps you need?</h2>
        <p className="text-muted-foreground mb-6">Tell us how your NDT business runs today and we'll suggest where to start.</p>
        <Link
          to="/contact?service=erp&subject=Which%20ERP%20apps%20do%20we%20need%3F"
          data-cta-variant="erp-apps-hub-footer"
          className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg"
        >
          Talk to us <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
      <ContactDetails />
    </div>
  );
}
