// /business-consulting — owner positioning 2026-09-27: NDT Level III consulting
// is the primary consulting line; business consulting for NDT/inspection
// companies is the second. Copy lives in src/data/business-consulting.json and
// is shared with the prerendered page.
import { Link } from "react-router-dom";
import { ArrowRight, Briefcase } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import data from "@/data/business-consulting.json";

const CTA = "/contact?service=consulting&subject=Business%20consulting";

export default function BusinessConsulting() {
  return (
    <div className="min-h-screen pt-20">
      <Navigation />
      <SEOHead title={data.title} description={data.description} canonical="https://atlantisndt.com/business-consulting" />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Consulting", href: "/consulting" }, { label: "Business Consulting", href: "/business-consulting" }]} />

      <section className="py-14 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <p className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-primary/10 text-primary text-sm font-medium">
            <Briefcase className="w-4 h-4" /> Atlantis NDT Consulting
          </p>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">{data.h1}</h1>
          <p className="text-lg text-muted-foreground mb-8">{data.intro}</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to={CTA} data-cta-variant="business-consulting-hero" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg shadow-lg hover:opacity-90">
              Book a consultation <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/consulting" className="inline-flex items-center justify-center px-8 py-4 border border-primary text-primary font-semibold rounded-lg hover:bg-primary/5">
              NDT Level III consulting
            </Link>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 max-w-5xl py-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Where we help</h2>
        <div className="grid md:grid-cols-2 gap-5">
          {data.areas.map((a) => (
            <div key={a.title} className="p-6 rounded-xl border bg-white">
              <h3 className="text-lg font-semibold mb-2">{a.title}</h3>
              <p className="text-muted-foreground">{a.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-6 max-w-3xl pb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">How an engagement works</h2>
        <ol className="list-decimal pl-6 space-y-2 text-muted-foreground">
          {data.how.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ol>
        <p className="mt-4 text-sm text-muted-foreground">Affordable. Accessible. Fully customizable. Quote on request.</p>
      </section>

      <section className="py-14 bg-muted/40 text-center">
        <h2 className="text-3xl font-bold mb-3">Talk through your business</h2>
        <p className="text-muted-foreground mb-6">A free first conversation with an ASNT Level III who runs NDT businesses.</p>
        <Link to={CTA} data-cta-variant="business-consulting-footer" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg">
          Send an enquiry <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
      <ContactDetails />
    </div>
  );
}
