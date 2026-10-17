import { Navigation } from "@/components/Navigation";
import DeepContent from "@/components/DeepContent";
import { SoftwareComparisonBlock } from "@/components/SoftwareCompetitive";
import bestBlock from "@/data/software-competitive/blocks/best-ndt-reporting-software-2026.json";
import { SEOHead } from "@/components/SEOHead";
import ContactDetails from "@/components/ContactDetails";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ServiceContextBlock } from "@/components/InspectionL3Content";
import { buildTechArticleSchema, ATLANTIS_AUTHOR_ANOOP, ATLANTIS_PUBLISHER } from "@/data/author-schema";

/**
 * /best-ndt-reporting-software-2026 — owner of "ndt reporting software" and "best ndt software"
 * (owner links, 2026-10-17). Everything on the page comes from the same JSON the crawler HTML
 * uses (scripts/software-competitive/best-software.mjs -> blocks/best-ndt-reporting-software-2026.json):
 * title, H1, intro, the direct answer, the unranked vendor-cited comparison, the approaches table,
 * the trial and walkthrough CTAs and the visible FAQ that the FAQPage is built from.
 * The earlier ranked "top 10" with Atlantis first, invented vendor prices and unsupported product
 * claims (native mobile apps, qualified signatures, AI models, escrow) was removed in both layers.
 */
const URL = "https://atlantisndt.com/best-ndt-reporting-software-2026";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    buildTechArticleSchema({
      url: URL,
      headline: bestBlock.h1,
      description: bestBlock.description,
      datePublished: "2026-04-18",
      dateModified: "2026-10-17",
      section: "NDT Software",
      keywords: "ndt reporting software, best ndt software, ndt software comparison, ndt report software",
    }),
    { "@type": "Organization", "@id": "https://atlantisndt.com/#organization", ...ATLANTIS_PUBLISHER },
    { "@type": "Person", "@id": "https://atlantisndt.com/#anoop-rayavarapu", ...ATLANTIS_AUTHOR_ANOOP },
    ...bestBlock.schema,
    {
      "@type": "FAQPage",
      "@id": `${URL}#faq`,
      mainEntity: bestBlock.faq.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

export default function BestNDTReportingSoftware2026() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      <SEOHead
        title={bestBlock.title}
        description={bestBlock.description}
        keywords="ndt reporting software, best ndt software, ndt software comparison, ndt report software, ndt inspection reporting"
        canonical={URL}
        structuredData={structuredData}
      />
      <Breadcrumbs />

      <section className="bg-gradient-to-br from-slate-900 to-primary text-white pt-24 pb-16">
        <div className="container mx-auto max-w-5xl px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{bestBlock.h1}</h1>
          <p className="text-lg text-blue-100 leading-relaxed">{bestBlock.intro}</p>
        </div>
      </section>

      <main>
        <SoftwareComparisonBlock path="/best-ndt-reporting-software-2026" />
        <div className="container mx-auto px-6 max-w-4xl">
          <ServiceContextBlock path="/best-ndt-reporting-software-2026" />
        </div>
        <div className="container mx-auto px-6 max-w-5xl py-8">
          <DeepContent path="/best-ndt-reporting-software-2026" />
        </div>
      </main>
      <ContactDetails />
    </div>
  );
}
