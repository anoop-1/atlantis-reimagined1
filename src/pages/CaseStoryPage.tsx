// Case stories from completed engagements (2026-10-10, CLAUDE.md §53). Same data as the crawler
// pages: src/data/case-stories-2026-10.json via scripts/case-stories-2026-10.mjs.
import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import data from "@/data/case-stories-2026-10.json";

type Section = { h: string; p?: string[]; list?: string[]; method?: boolean };
type Story = {
  slug: string; title: string; description: string; h1: string; card: string; sector: string;
  facts: [string, string][]; sections: Section[]; links: [string, string][]; cta: [string, string];
};
export const CASE_STORIES = data.stories as unknown as Story[];

const SITE = "https://atlantisndt.com";

export default function CaseStoryPage({ slug }: { slug: string }) {
  const s = CASE_STORIES.find((x) => x.slug === slug);
  if (!s) return null;
  const url = `${SITE}/case-studies/${s.slug}`;
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: s.h1,
    description: s.description,
    articleSection: "Case studies",
    datePublished: "2026-10-10",
    dateModified: "2026-10-10",
    url,
    author: { "@type": "Person", name: "Anoop Rayavarapu", url: `${SITE}/authors/anoop-rayavarapu` },
    publisher: { "@type": "Organization", name: "Atlantis NDT", url: SITE },
  };
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <SEOHead title={s.title} description={s.description} canonical={url} structuredData={schema} />
      <Breadcrumbs />
      <main className="container mx-auto max-w-3xl px-6 pt-24 pb-16">
        <article data-case-stories="2026-10">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary mb-3">
            <Link to="/case-studies" className="hover:underline">Case studies</Link> · {s.sector}
          </p>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">{s.h1}</h1>
          <p className="text-lg text-muted-foreground mb-8">{s.card}</p>

          <div className="rounded-xl border border-border bg-card p-5 mb-10">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-3">The engagement at a glance</h2>
            <dl className="grid sm:grid-cols-[11rem_1fr] gap-x-4 gap-y-2 text-sm">
              {s.facts.map(([k, v]) => (
                <div key={k} className="contents">
                  <dt className="font-semibold">{k}</dt>
                  <dd className="text-muted-foreground">{v}</dd>
                </div>
              ))}
            </dl>
          </div>

          {s.sections.map((sec) => (
            <section key={sec.h} className={sec.method ? "mb-8 rounded-xl bg-muted/50 p-5" : "mb-8"}>
              <h2 className="text-2xl font-bold mb-3">{sec.h}</h2>
              {(sec.p || []).map((t, i) => <p key={i} className="mb-3 leading-relaxed">{t}</p>)}
              {sec.list && (
                <ul className="list-disc pl-6 space-y-2">
                  {sec.list.map((t, i) => <li key={i} className="leading-relaxed">{t}</li>)}
                </ul>
              )}
            </section>
          ))}

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-3">Related</h2>
            <ul className="space-y-2">
              {s.links.map(([href, label]) => (
                <li key={href}><Link to={href} className="text-primary hover:underline">{label} →</Link></li>
              ))}
            </ul>
          </section>

          <Link to={s.cta[0]} className="inline-block rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground hover:opacity-90">
            {s.cta[1]}
          </Link>
        </article>
      </main>
      <ContactDetails />
    </div>
  );
}
