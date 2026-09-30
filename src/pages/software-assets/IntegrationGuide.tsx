// /integrations and /integrations/<system> (2026-09-29). Content lives in
// src/data/software-assets/integrations.json, shared with the prerender layer.
import { Link } from "react-router-dom";
import { Plug } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import RichHtml from "@/components/software-assets/RichHtml";
import data from "@/data/software-assets/integrations.json";

export default function IntegrationGuide({ slug }: { slug?: string }) {
  const page = slug ? data.pages.find((x) => x.slug === slug) : undefined;
  const d = page ?? data.hub;
  const name = page ? page.name : "Integrations";
  const cta = `/contact?service=erp&subject=${encodeURIComponent(`Integration scoping — ${name}`)}`;
  const crumbs = [{ label: "Home", href: "/" }, { label: "Integrations", href: data.hub.path }];
  if (page) crumbs.push({ label: page.name, href: page.path });
  return (
    <div className="min-h-screen pt-20">
      <Navigation />
      <SEOHead
        title={d.title}
        description={d.description}
        canonical={`https://atlantisndt.com${d.path}`}
        faq={d.faqs.map((f) => ({ question: f.q, answer: f.a }))}
      />
      <Breadcrumbs items={crumbs} />
      <section className="py-12 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto px-6 max-w-4xl">
          <p className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-primary/10 text-primary text-sm font-medium">
            <Plug className="w-4 h-4" /> Open REST API
          </p>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">{d.h1}</h1>
          <p className="text-lg text-muted-foreground mb-6">{d.lead}</p>
          <Link to={cta} data-cta-variant="integration-hero" className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg">
            Book an integration scoping call
          </Link>
        </div>
      </section>
      <section className="container mx-auto px-6 max-w-4xl py-10">
        <RichHtml html={d.bodyHtml} />
      </section>
      {page && (
        <section className="container mx-auto px-6 max-w-4xl pb-10">
          <h2 className="text-xl font-bold mb-3">Other integration guides</h2>
          <div className="flex flex-wrap gap-3">
            {data.pages
              .filter((x) => x.slug !== page.slug)
              .map((x) => (
                <Link key={x.slug} to={x.path} className="px-4 py-2 rounded-lg border hover:border-primary">
                  {x.name}
                </Link>
              ))}
          </div>
        </section>
      )}
      <ContactDetails />
    </div>
  );
}
