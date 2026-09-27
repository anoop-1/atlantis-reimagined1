// /erp/apps/:app and /erp/apps/:app/:region — one page per app on the Atlantis
// NDT ERP home screen, plus regional versions of the NDT-specific apps.
// Evidence (GSC 90d to 2026-09-25): the 216 module × city pages earned 16 clicks
// (0.07/page), so the owner chose 28 app pages + 5 regions for 8 NDT-specific
// apps instead of app × city. Every CTA goes to /contact with service + subject
// preset (the intent-carry fix, see GlobalEnquireCTA). No prices anywhere.
// Page text lives in src/data/erp-apps/*.json, one lazy chunk per page, so the
// ~1MB of copy never lands in the main bundle. The same JSON feeds prerender.
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import NotFound from "@/pages/NotFound";
import catalog from "@/data/erp-apps-catalog.json";

interface AppPageData {
  h1: string;
  title: string;
  metaDescription: string;
  bodyHtml: string;
}

const pages = import.meta.glob<{ default: AppPageData }>("../data/erp-apps/*.json");

function contactHref(service: string, subject: string) {
  return `/contact?${new URLSearchParams({ service, subject }).toString()}`;
}

// Split the body at the <h2> nearest its midpoint so a CTA sits mid-read.
function splitBody(html: string): [string, string] {
  const idx: number[] = [];
  const re = /<h2[\s>]/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(html))) idx.push(m.index);
  if (idx.length < 3) return [html, ""];
  const mid = html.length / 2;
  const at = idx.slice(1).reduce((a, b) => (Math.abs(b - mid) < Math.abs(a - mid) ? b : a));
  return [html.slice(0, at), html.slice(at)];
}

export default function ErpAppPage() {
  const { app: appSlug = "", region: regionSlug } = useParams();
  const app = catalog.apps.find((a) => a.slug === appSlug);
  const region = regionSlug ? catalog.regions.find((r) => r.slug === regionSlug) : undefined;
  const key = region ? `${appSlug}--${regionSlug}` : appSlug;
  const loader = pages[`../data/erp-apps/${key}.json`];
  const [data, setData] = useState<AppPageData | null>(null);

  useEffect(() => {
    setData(null);
    if (loader) loader().then((m) => setData(m.default));
  }, [loader]);

  if (!app || (regionSlug && (!region || !app.regional)) || !loader) return <NotFound />;

  const path = region ? `/erp/apps/${app.slug}/${region.slug}` : `/erp/apps/${app.slug}`;
  const subject = `${app.name} demo${region ? ` (${region.name})` : ""}`;
  const demo = contactHref(app.service, subject);
  const quote = contactHref(app.service, `${app.name} quote${region ? ` (${region.name})` : ""}`);
  const related = catalog.apps.filter((a) => a.category === app.category && a.slug !== app.slug);
  const [partA, partB] = data ? splitBody(data.bodyHtml) : ["", ""];

  return (
    <div className="min-h-screen pt-20">
      <Navigation />
      {data && (
        <SEOHead title={data.title} description={data.metaDescription} canonical={`https://atlantisndt.com${path}`} />
      )}
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "ERP", href: "/erp" },
          { label: "Apps", href: "/erp/apps" },
          { label: app.name, href: `/erp/apps/${app.slug}` },
          ...(region ? [{ label: region.name, href: path }] : []),
        ]}
      />

      <section className="py-14 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <p className="inline-block px-3 py-1 mb-4 rounded-full bg-primary/10 text-primary text-sm font-medium">
            Atlantis NDT ERP · {app.name} app
          </p>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">{data?.h1 ?? app.name}</h1>
          <p className="text-lg text-muted-foreground mb-8">{app.blurb}</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to={demo}
              data-cta-variant="erp-app-hero"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg shadow-lg hover:opacity-90"
            >
              Request a demo <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to={quote}
              data-cta-variant="erp-app-quote"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-primary text-primary font-semibold rounded-lg hover:bg-primary/5"
            >
              Get a quote
            </Link>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">Affordable. Accessible. Fully customizable. Quote on request.</p>
        </div>
      </section>

      {app.featured && (
        <section className="container mx-auto px-6 max-w-4xl -mt-6">
          <Link
            to={app.featured.path}
            className="flex items-center gap-4 p-5 rounded-xl border-2 border-primary bg-white shadow-md hover:shadow-lg"
          >
            <Sparkles className="w-8 h-8 text-primary shrink-0" />
            <div className="text-left">
              <p className="text-xs font-semibold uppercase tracking-wide text-primary">Featured in {app.name}</p>
              <p className="text-lg font-bold">{app.featured.name}</p>
            </div>
            <ArrowRight className="w-5 h-5 text-primary ml-auto" />
          </Link>
        </section>
      )}

      {!data ? (
        <div className="container mx-auto px-6 py-24 text-center text-muted-foreground">Loading…</div>
      ) : (
        <>
          <article
            className="container mx-auto px-6 pt-12 max-w-4xl prose prose-lg prose-headings:font-bold prose-a:text-primary"
            dangerouslySetInnerHTML={{ __html: partA }}
          />
          {partB && (
            <>
              <aside className="container mx-auto px-6 max-w-4xl my-8">
                <div className="rounded-xl bg-primary text-primary-foreground p-6 md:flex items-center justify-between gap-6">
                  <div>
                    <p className="text-xl font-bold">See {app.name} running on your own jobs</p>
                    <p className="opacity-90">A 30-minute walkthrough set up around your methods, crews and clients.</p>
                  </div>
                  <Link
                    to={demo}
                    data-cta-variant="erp-app-mid"
                    className="mt-4 md:mt-0 inline-flex shrink-0 items-center gap-2 px-6 py-3 bg-white text-primary font-semibold rounded-lg"
                  >
                    Book my demo <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </aside>
              <article
                className="container mx-auto px-6 max-w-4xl prose prose-lg prose-headings:font-bold prose-a:text-primary"
                dangerouslySetInnerHTML={{ __html: partB }}
              />
            </>
          )}
        </>
      )}

      {app.regional && (
        <section className="container mx-auto px-6 max-w-4xl py-10">
          <h2 className="text-2xl font-bold mb-4">{app.name} by region</h2>
          <div className="flex flex-wrap gap-2">
            {region && (
              <Link to={`/erp/apps/${app.slug}`} className="px-4 py-2 rounded-full border hover:border-primary">
                Global overview
              </Link>
            )}
            {catalog.regions
              .filter((r) => r.slug !== region?.slug)
              .map((r) => (
                <Link key={r.slug} to={`/erp/apps/${app.slug}/${r.slug}`} className="px-4 py-2 rounded-full border hover:border-primary">
                  {app.name} in {r.name}
                </Link>
              ))}
          </div>
        </section>
      )}

      {related.length > 0 && (
        <section className="container mx-auto px-6 max-w-4xl pb-10">
          <h2 className="text-2xl font-bold mb-4">Works with</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {related.map((a) => (
              <Link key={a.slug} to={`/erp/apps/${a.slug}`} className="p-4 rounded-lg border hover:border-primary">
                <p className="font-semibold">{a.name}</p>
                <p className="text-sm text-muted-foreground">{a.blurb}</p>
              </Link>
            ))}
          </div>
        </section>
      )}

      <section className="py-14 bg-muted/40">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-3">Ready to run {app.name} in your NDT business?</h2>
          <ul className="inline-block text-left mb-6 space-y-1">
            {["Set up around your methods and written practice", "Your data migrated from spreadsheets", "Quote on request — no obligation"].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" /> {t}
              </li>
            ))}
          </ul>
          <div>
            <Link
              to={demo}
              data-cta-variant="erp-app-footer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg shadow-lg hover:opacity-90"
            >
              Send an enquiry <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <ContactDetails />
    </div>
  );
}
