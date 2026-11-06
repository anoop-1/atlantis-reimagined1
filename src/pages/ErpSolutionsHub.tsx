/**
 * /erp/solutions — index of the problem → solution pages (2026-11-06). Same data and
 * renderer as the crawler body (src/data/erp-solutions-2026-11.{json,mjs}).
 */
import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import ErpDashboardPreview from "@/components/erp/ErpDashboardPreview";
import raw from "@/data/erp-solutions-2026-11.json";
import { SOL_CLASS, SOLUTIONS_BASE, solutionsHubHeroHtml, solutionsHubBodyHtml, solutionsHubSchema } from "@/data/erp-solutions-2026-11.mjs";
import type { SolutionsData } from "@/data/erp-solutions-2026-11.mjs";

const data = raw as unknown as SolutionsData;

export default function ErpSolutionsHub() {
  return (
    <div className="min-h-screen pt-20">
      <Navigation />
      <SEOHead title={data.hub.title} description={data.hub.description} canonical={`https://atlantisndt.com${SOLUTIONS_BASE}`} structuredData={solutionsHubSchema(data.hub, data.pages)} />
      <main>
        <section className={SOL_CLASS.heroSection}>
          <div className={SOL_CLASS.heroGrid}>
            <div dangerouslySetInnerHTML={{ __html: solutionsHubHeroHtml(data.hub) }} />
            <ErpDashboardPreview initialTab={data.hub.dashboardTab} />
          </div>
        </section>
        <div dangerouslySetInnerHTML={{ __html: solutionsHubBodyHtml(data.hub, data.pages) }} />
      </main>
    </div>
  );
}
