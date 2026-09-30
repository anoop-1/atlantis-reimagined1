// SOFTWARE-COMPETITIVE React layer — 2026-09-29.
// Renders the same JSON that scripts/software-competitive.mjs injects into the
// prerendered HTML (written by scripts/build-software-competitive.mjs), so the
// crawler and the visitor read identical text:
//   - default export: the alternatives / comparison pages (/agilendt-alternatives …)
//   - SoftwareComparisonBlock: the 9-platform comparison on the best-software page
//   - SoftwareCompareLinks (./SoftwareCompareLinks.tsx): mounted once in App.tsx; adds the "Compare NDT
//     software" block on the 60 NA ERP city hubs and /erp/apps pages, and the
//     owner link to /ndt-inspection-software on competing software pages.
// Page JSON loads lazily, one chunk per page. No prices anywhere.
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import NotFound from "@/pages/NotFound";

interface Faq { q: string; a: string }
interface PageData {
  slug: string;
  title: string;
  description: string;
  h1: string;
  publishedAt: string;
  bodyHtml: string;
  faq: Faq[];
  schema: Record<string, unknown>[];
}
interface BlockData { path: string; html: string; schema: Record<string, unknown>[] }

const pageFiles = import.meta.glob<{ default: PageData }>("../data/software-competitive/pages/*.json");
const blockFiles = import.meta.glob<{ default: BlockData }>("../data/software-competitive/blocks/*.json");
const keyOf = (path: string) => path.replace(/^\//, "").replace(/\/$/, "").replace(/\//g, "__");

const PROSE =
  "prose prose-lg max-w-none prose-headings:font-bold prose-a:text-primary prose-table:text-sm [&_.table-scroll]:overflow-x-auto";

export default function SoftwareComparePage() {
  const { pathname } = useLocation();
  const loader = pageFiles[`../data/software-competitive/pages/${keyOf(pathname)}.json`];
  const [page, setPage] = useState<PageData | null>(null);

  useEffect(() => {
    setPage(null);
    if (loader) loader().then((m) => setPage(m.default));
  }, [loader]);

  if (!loader) return <NotFound />;
  if (!page) return <div className="min-h-screen pt-20"><Navigation /></div>;

  const url = `https://atlantisndt.com${page.slug}`;
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: page.h1,
        description: page.description,
        datePublished: page.publishedAt,
        dateModified: page.publishedAt,
        author: { "@type": "Person", "@id": "https://atlantisndt.com/#anoop-rayavarapu", name: "Anoop Rayavarapu" },
        publisher: { "@type": "Organization", "@id": "https://atlantisndt.com/#organization", name: "Atlantis NDT" },
        mainEntityOfPage: url,
      },
      ...page.schema,
    ],
  };

  return (
    <div className="min-h-screen bg-white pt-20">
      <SEOHead title={page.title} description={page.description} canonical={url} structuredData={structuredData} />
      <Navigation />
      <Breadcrumbs />
      <main className="container mx-auto max-w-4xl px-6 py-10">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 text-balance">{page.h1}</h1>
        <p className="text-sm text-muted-foreground mb-8">
          Reviewed by <a href="/authors/anoop-rayavarapu" className="text-primary hover:underline">Anoop Rayavarapu</a>,
          ASNT NDT Level III. Vendor facts checked September 2026.
        </p>
        <article className={PROSE} dangerouslySetInnerHTML={{ __html: page.bodyHtml }} />
      </main>
    </div>
  );
}

/** The unranked vendor comparison block inserted into an existing page. */
export function SoftwareComparisonBlock({ path }: { path: string }) {
  const loader = blockFiles[`../data/software-competitive/blocks/${keyOf(path)}.json`];
  const [html, setHtml] = useState<string | null>(null);
  useEffect(() => {
    setHtml(null);
    if (loader) loader().then((m) => setHtml(m.default.html));
  }, [loader]);
  if (!html) return null;
  return (
    <section className="container mx-auto max-w-5xl px-6 py-12">
      <div className={PROSE} dangerouslySetInnerHTML={{ __html: html }} />
    </section>
  );
}
