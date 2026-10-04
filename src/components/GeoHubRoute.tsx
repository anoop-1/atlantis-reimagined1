import { Link, useLocation } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import EnquiryCaptureForm from "@/components/EnquiryCaptureForm";
import { useContentJson, isSplashLifted } from "@/lib/contentJson";

/**
 * Geo hub page (/ndt-training-{state}, /ndt-consulting-{slug},
 * /inspection-services-{state}, ...) — 2026-10-02.
 *
 * One component serves every hub: it loads /data/geohubs/<path>.json (emitted
 * by scripts/emit-content-json.mjs from src/data/geo-hubs-pages.json, written
 * by scripts/build-geo-hubs.mjs). The crawler HTML comes from the same record
 * via scripts/geo-hub-routes.mjs, so title, meta, canonical and H1 match
 * (two-layer rule): the H1 here is the record's own H1 text.
 */
export interface GeoHubPage {
  path: string;
  family: string;
  name: string;
  region: string;
  country: string;
  title: string;
  metaDescription: string;
  h1: string;
  contentHtml: string;
}

const HUB: Record<string, { href: string; label: string; enquiry: "training" | "consulting" | "erp" | "practical-ndt" }> = {
  training: { href: "/training", label: "Training", enquiry: "training" },
  consulting: { href: "/consulting", label: "Consulting", enquiry: "consulting" },
  inspection: { href: "/inspection-services", label: "Inspection Services", enquiry: "consulting" },
  erp: { href: "/erp", label: "ERP", enquiry: "erp" },
  practical: { href: "/practical-ndt", label: "Practical NDT", enquiry: "practical-ndt" },
  // API inspection programme 2026-10-04 (state/province hubs + /api-inspection/{slug} guides).
  api653: { href: "/inspection-services", label: "Inspection services", enquiry: "consulting" },
  api510: { href: "/inspection-services", label: "Inspection services", enquiry: "consulting" },
  api570: { href: "/inspection-services", label: "Inspection services", enquiry: "consulting" },
  apiguide: { href: "/inspection-services", label: "Inspection services", enquiry: "consulting" },
};

// contentHtml carries its own <header><nav> (crawler-only) and the <h1>;
// Navigation and the H1 are rendered by this component, so keep only the
// <main> body without its H1.
function mainBody(html: string): string {
  const m = html.match(/<main[^>]*>([\s\S]*)<\/main>/i);
  return (m ? m[1] : html).replace(/<h1[^>]*>[\s\S]*?<\/h1>/i, "");
}

export default function GeoHubRoute() {
  const { pathname } = useLocation();
  const path = pathname.replace(/\/+$/, "") || "/";
  const { data: page, loading } = useContentJson<GeoHubPage>(`/data/geohubs${path}.json`);

  if (loading) {
    if (!isSplashLifted()) return <div className="min-h-screen bg-white dark:bg-slate-950" />;
    return (
      <div className="min-h-screen bg-white dark:bg-slate-950">
        <Navigation />
        <main className="max-w-4xl mx-auto px-4 py-10" aria-busy="true" />
      </div>
    );
  }
  if (!page) return null;

  const hub = HUB[page.family] || HUB.consulting;
  const canonical = `https://atlantisndt.com${page.path}`;

  return (
    <div className="min-h-screen pt-20">
      <Navigation />
      <SEOHead title={page.title} description={page.metaDescription} canonical={canonical} />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: hub.label, href: hub.href },
          { label: page.name, href: page.path },
        ]}
      />

      <section className="py-14 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">{page.h1}</h1>
          {page.region ? <p className="text-lg text-muted-foreground mb-6">{page.region}</p> : null}
          <a
            href="#geo-hub-enquiry"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg shadow-lg hover:opacity-90 transition"
          >
            Request a quote
          </a>
        </div>
      </section>

      <article
        className="container mx-auto px-6 py-12 max-w-4xl prose prose-lg prose-headings:font-bold prose-a:text-primary prose-table:text-sm"
        dangerouslySetInnerHTML={{ __html: mainBody(page.contentHtml) }}
      />

      <div className="container mx-auto px-6 pb-8 max-w-4xl text-center">
        <Link to={hub.href} className="text-primary hover:underline">
          ← Back to {hub.label}
        </Link>
      </div>

      <div id="geo-hub-enquiry">
        <EnquiryCaptureForm variant={hub.enquiry} />
      </div>

      <ContactDetails />
    </div>
  );
}
