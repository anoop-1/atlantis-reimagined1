/**
 * /erp/solutions/:slug — problem → solution pages (2026-11-06, owner: "find a problem, show
 * this product as solution"). Content: src/data/erp-solutions-2026-11.json, rendered by the
 * same functions as the crawler body (src/data/erp-solutions-2026-11.mjs). The hero carries
 * the interactive dashboard preview opened on the panel that shows this problem being caught.
 */
import { useParams } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import NotFound from "@/pages/NotFound";
import ErpDashboardPreview from "@/components/erp/ErpDashboardPreview";
import catalog from "@/data/erp-apps-catalog.json";
import raw from "@/data/erp-solutions-2026-11.json";
import { SOL_CLASS, solutionPath, solutionHeroHtml, solutionBodyHtml, solutionSchema } from "@/data/erp-solutions-2026-11.mjs";
import type { SolutionsData } from "@/data/erp-solutions-2026-11.mjs";
import { relatedTitle } from "@/data/erp-solutions-related-titles-2026-11.mjs";

const data = raw as unknown as SolutionsData;
const APPS: Record<string, string> = Object.fromEntries(catalog.apps.map((a) => [a.slug, a.name]));

export default function ErpSolutionPage() {
  const { slug = "" } = useParams();
  const r = data.pages.find((p) => p.slug === slug);
  if (!r) return <NotFound />;
  return (
    <div className="min-h-screen pt-20">
      <Navigation />
      <SEOHead title={r.title} description={r.description} canonical={`https://atlantisndt.com${solutionPath(r.slug)}`} structuredData={solutionSchema(r)} />
      <main>
        <section className={SOL_CLASS.heroSection}>
          <div className={SOL_CLASS.heroGrid}>
            {/* Our own JSON, escaped by the renderer; no user input reaches it. */}
            <div dangerouslySetInnerHTML={{ __html: solutionHeroHtml(r) }} />
            <ErpDashboardPreview key={r.slug} initialTab={r.dashboardTab} />
          </div>
        </section>
        <div dangerouslySetInnerHTML={{ __html: solutionBodyHtml(r, APPS, relatedTitle) }} />
      </main>
    </div>
  );
}
