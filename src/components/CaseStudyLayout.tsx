import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { SEOHead, FaqItem } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import CustomerLogosBlock from "@/components/CustomerLogosBlock";
import { ArrowRight, Mail, MapPin, Users, Calendar, CheckCircle2 } from "lucide-react";

export interface CaseStudyOutcome {
  metric: string;
  before: string;
  after: string;
}

export interface CaseStudyTimelinePhase {
  phase: string;
  detail: string;
}

export interface CaseStudyLayoutProps {
  industrySlug: string;
  industryName: string;
  /** Page title for <title> + H1 (without site name suffix) */
  title: string;
  /** Meta description (~155 chars) */
  metaDescription: string;
  /** Hero anonymized company descriptor */
  companyDescriptor: string;
  region: string;
  companySize: string;
  /** ISO date the case was published (for Article schema) */
  datePublished?: string;
  /** ISO date last modified */
  dateModified?: string;
  /** Mailto subject for the demo CTA */
  ctaMailSubject: string;
  /** "The Challenge" — 3-4 paragraphs, JSX */
  challenge: React.ReactNode;
  /** "Why Atlantis NDT ERP" — 3-4 paragraphs, JSX */
  whyAtlantis: React.ReactNode;
  /** Implementation timeline rows */
  timeline: CaseStudyTimelinePhase[];
  /** Quantified outcomes */
  outcomes: CaseStudyOutcome[];
  /** Lessons learned — at least 1 honest "didn't go perfectly" bullet */
  lessonsLearned: React.ReactNode[];
  /** What's next — module-upgrade path */
  whatsNext: React.ReactNode;
  /** 4-5 FAQs combining industry + ERP-implementation concerns */
  faqs: FaqItem[];
  /** Related case study slugs to cross-link */
  related?: Array<{ slug: string; label: string }>;
  /** Optional aggregate rating (4.x out of 5) — single aggregateRating only */
  ratingValue?: number;
  ratingCount?: number;
}

export const CaseStudyLayout: React.FC<CaseStudyLayoutProps> = ({
  industrySlug,
  industryName,
  title,
  metaDescription,
  companyDescriptor,
  region,
  companySize,
  datePublished = "2026-05-12",
  dateModified = "2026-05-13",
  ctaMailSubject,
  challenge,
  whyAtlantis,
  timeline,
  outcomes,
  lessonsLearned,
  whatsNext,
  faqs,
  related,
  ratingValue = 4.8,
  ratingCount = 27,
}) => {
  const path = `/case-studies/${industrySlug}-erp-implementation`;
  const url = `https://atlantisndt.com${path}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${url}#article`,
    headline: title,
    description: metaDescription,
    datePublished,
    dateModified,
    author: { "@type": "Organization", "name": "Atlantis NDT" },
    publisher: {
      "@type": "Organization",
      "name": "Atlantis NDT",
      "logo": { "@type": "ImageObject", "url": "https://atlantisndt.com/og-image.jpg" },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    articleSection: industryName,
    about: {
      "@type": "SoftwareApplication",
      "name": "Atlantis NDT ERP",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": ratingValue.toFixed(1),
        "ratingCount": ratingCount,
        "bestRating": "5",
        "worstRating": "1",
      },
    },
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      <SEOHead
        title={title}
        description={metaDescription}
        keywords={`${industryName} case study, ERP implementation case study, ${industryName} ERP, inspection software case study, NDT ERP customer story, Atlantis NDT ERP`}
        canonical={url}
        structuredData={articleSchema}
        faq={faqs}
      />
      <Breadcrumbs />

      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white pt-24 pb-14">
        <div className="container mx-auto max-w-5xl px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full mb-5 text-xs uppercase tracking-wider">
              <span>Customer case study</span>
              <span aria-hidden="true">•</span>
              <span>{industryName}</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">{title}</h1>
            <p className="text-base md:text-lg text-blue-100 max-w-3xl mb-6">{companyDescriptor}</p>
            <div className="flex flex-wrap gap-4 text-sm text-blue-100">
              <span className="inline-flex items-center gap-2"><MapPin className="w-4 h-4" />{region}</span>
              <span className="inline-flex items-center gap-2"><Users className="w-4 h-4" />{companySize}</span>
              <span className="inline-flex items-center gap-2"><Calendar className="w-4 h-4" />Implementation: 12 weeks</span>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="px-5 py-2.5 bg-white text-blue-900 font-semibold rounded-lg hover:bg-blue-50 text-sm"
              >
                Book a similar implementation review
              </Link>
              <a
                href={`mailto:info@atlantisndt.com?subject=${encodeURIComponent(ctaMailSubject)}`}
                className="px-5 py-2.5 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500 flex items-center gap-2 text-sm"
              >
                <Mail className="w-4 h-4" /> info@atlantisndt.com
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <article className="py-14">
        <div className="container mx-auto max-w-3xl px-6 prose prose-slate max-w-none">
          <section className="not-prose mb-10">
            <h2 className="text-2xl font-bold mb-4">The challenge</h2>
            <div className="space-y-4 text-slate-700 leading-relaxed">{challenge}</div>
          </section>

          <section className="not-prose mb-10">
            <h2 className="text-2xl font-bold mb-4">Why Atlantis NDT ERP</h2>
            <div className="space-y-4 text-slate-700 leading-relaxed">{whyAtlantis}</div>
          </section>

          <section className="not-prose mb-10">
            <h2 className="text-2xl font-bold mb-4">Implementation timeline</h2>
            <ol className="border-l-2 border-blue-200 pl-5 space-y-5">
              {timeline.map((t) => (
                <li key={t.phase} className="relative">
                  <span
                    className="absolute -left-[27px] top-1 w-3 h-3 rounded-full bg-blue-600"
                    aria-hidden="true"
                  />
                  <h3 className="font-semibold text-slate-900">{t.phase}</h3>
                  <p className="text-slate-700 mt-1">{t.detail}</p>
                </li>
              ))}
            </ol>
          </section>

          <section className="not-prose mb-10">
            <h2 className="text-2xl font-bold mb-4">Outcomes</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {outcomes.map((o) => (
                <div key={o.metric} className="bg-white border border-slate-200 rounded-lg p-4">
                  <p className="text-xs uppercase tracking-wide text-slate-500 mb-2">{o.metric}</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-sm line-through text-slate-400">{o.before}</span>
                    <ArrowRight className="w-4 h-4 text-blue-600" />
                    <span className="text-base font-semibold text-slate-900">{o.after}</span>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xs text-slate-500 mt-3">
              Metrics shown as ranges; specific customer figures withheld under MNDA. Individual results
              vary by site, scope, and data quality.
            </p>
          </section>

          <section className="not-prose mb-10">
            <h2 className="text-2xl font-bold mb-4">Lessons learned</h2>
            <ul className="space-y-3">
              {lessonsLearned.map((item, i) => (
                <li key={i} className="flex gap-3 text-slate-700 leading-relaxed">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="not-prose mb-10">
            <h2 className="text-2xl font-bold mb-4">What is next</h2>
            <div className="space-y-4 text-slate-700 leading-relaxed">{whatsNext}</div>
          </section>

          <section className="not-prose mb-10">
            <h2 className="text-2xl font-bold mb-4">Frequently asked questions</h2>
            <div className="space-y-4">
              {faqs.map((f) => (
                <details
                  key={f.question}
                  className="bg-white border border-slate-200 rounded-lg p-4"
                >
                  <summary className="font-semibold text-slate-900 cursor-pointer">
                    {f.question}
                  </summary>
                  <p className="mt-3 text-slate-700 leading-relaxed">{f.answer}</p>
                </details>
              ))}
            </div>
          </section>

          <section className="not-prose bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-6 md:p-8 mb-12">
            <h2 className="text-2xl font-bold mb-2">See the same workflow on your site</h2>
            <p className="text-slate-700 mb-5">
              Request a 45-minute working session with the implementation team. We model your
              certification matrix, calibration intervals, and operator-specific clauses against
              the Atlantis NDT ERP modules — using your real org chart, not a stock demo.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="px-5 py-2.5 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-600 text-sm inline-flex items-center gap-2"
              >
                Book scoping call <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={`mailto:info@atlantisndt.com?subject=${encodeURIComponent(ctaMailSubject)}`}
                className="px-5 py-2.5 bg-white border border-blue-300 text-blue-800 font-semibold rounded-lg hover:bg-blue-50 text-sm inline-flex items-center gap-2"
              >
                <Mail className="w-4 h-4" /> Email the team
              </a>
            </div>
          </section>
        </div>
      </article>

      <CustomerLogosBlock industry={industrySlug} />

      <section className="py-12 bg-slate-100">
        <div className="container mx-auto max-w-5xl px-6">
          <h2 className="text-lg font-semibold mb-4">Explore further</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 text-sm">
            <Link to={`/erp-industries/${industrySlug}`} className="text-blue-700 hover:underline">
              {industryName} ERP overview →
            </Link>
            <Link to="/erp-industries" className="text-blue-700 hover:underline">
              All ERP industry solutions →
            </Link>
            <Link to="/erp-modules" className="text-blue-700 hover:underline">
              Browse ERP modules →
            </Link>
            <Link to="/ndt-erp-solution" className="text-blue-700 hover:underline">
              Full Atlantis NDT ERP suite →
            </Link>
            <Link to="/ndt-erp-implementation-timeline" className="text-blue-700 hover:underline">
              ERP implementation timeline →
            </Link>
            <Link to="/case-studies" className="text-blue-700 hover:underline">
              All ERP case studies →
            </Link>
          </div>

          {related && related.length > 0 && (
            <div className="mt-8">
              <h3 className="text-sm font-semibold text-slate-700 mb-3">Similar case studies</h3>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 text-sm">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    to={`/case-studies/${r.slug}-erp-implementation`}
                    className="text-blue-700 hover:underline"
                  >
                    {r.label} →
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <ContactDetails />
    </div>
  );
};

export default CaseStudyLayout;
