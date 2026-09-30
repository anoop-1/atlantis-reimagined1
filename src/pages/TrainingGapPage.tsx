/**
 * Training-gap pages (2026-09-29): ASNT Level III exam prep per method,
 * ASNT NDT Level II exam prep, and "Can you get NDT certified online?".
 *
 * Renders src/data/training-gap-pages.json, the same data the crawler layer
 * renders in scripts/training-gap-routes-2026-09-29.mjs. Edit the sources in
 * scripts/training-gap/src/ and re-run scripts/training-gap/build.mjs; never
 * edit the JSON by hand. Schema here mirrors trainingGapSchema() there.
 */
import { useLocation } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import TrainingEnquiryCTA from "@/components/TrainingEnquiryCTA";
import data from "@/data/training-gap-pages.json";

const SITE = "https://atlantisndt.com";

type Page = (typeof data.pages)[number] & { kind?: string; workload?: string };

const PERSON = {
  "@type": "Person",
  "@id": `${SITE}/#anoop-rayavarapu`,
  name: "Anoop Rayavarapu",
  jobTitle: "ASNT NDT Level III, Founder of Atlantis NDT",
  url: `${SITE}/authors/anoop-rayavarapu`,
};
const ORG = { "@type": "Organization", "@id": `${SITE}/#organization`, name: "Atlantis NDT", url: SITE };

function schemaFor(p: Page) {
  const url = `${SITE}${p.path}`;
  const faq = {
    "@type": "FAQPage",
    "@id": `${url}#faq`,
    mainEntity: p.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
  const main =
    p.kind === "article"
      ? {
          "@type": "TechArticle",
          "@id": `${url}#article`,
          headline: p.h1,
          description: p.description,
          url,
          datePublished: p.publishedAt,
          dateModified: p.publishedAt,
          author: PERSON,
          publisher: ORG,
          inLanguage: "en",
        }
      : {
          "@type": "Course",
          "@id": `${url}#course`,
          name: p.courseName,
          description: p.courseDescription,
          url,
          provider: ORG,
          inLanguage: "en",
          educationalLevel: "Professional",
          hasCourseInstance: [
            { "@type": "CourseInstance", courseMode: "Online", ...(p.workload ? { courseWorkload: p.workload } : {}), instructor: PERSON },
          ],
        };
  return { "@context": "https://schema.org", "@graph": [main, faq] };
}

export default function TrainingGapPage() {
  const { pathname } = useLocation();
  const path = pathname.replace(/\/+$/, "") || "/";
  const page = (data.pages as Page[]).find((p) => p.path === path);
  if (!page) return null;
  const published = new Date(`${page.publishedAt}T00:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });

  return (
    <div className="min-h-screen pt-20 bg-background">
      <Navigation />
      <SEOHead
        title={page.title}
        description={page.description}
        canonical={`${SITE}${page.path}`}
        structuredData={schemaFor(page)}
      />
      <Breadcrumbs
        items={[
          { label: "Training", href: "/training" },
          ...(page.path.startsWith("/asnt-level-iii-") ? [{ label: "ASNT Level III", href: "/asnt-level-iii-training" }] : []),
          { label: page.breadcrumb },
        ]}
      />
      <section className="bg-gradient-to-br from-[#003366] to-[#004aad] text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">{page.h1}</h1>
          <p className="text-white/85 text-sm">
            By <a href="/authors/anoop-rayavarapu" className="underline">Anoop Rayavarapu</a>, ASNT NDT Level III · Published {published}
          </p>
        </div>
      </section>
      <article className="container mx-auto px-6 py-12 max-w-4xl">
        <div
          className="prose prose-lg max-w-none prose-headings:font-bold prose-a:text-primary prose-table:text-sm"
          dangerouslySetInnerHTML={{ __html: page.bodyHtml + page.relatedHtml }}
        />
      </article>
      <TrainingEnquiryCTA />
      <ContactDetails />
    </div>
  );
}
