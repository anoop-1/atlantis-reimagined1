import { Navigation } from "@/components/Navigation";
import DeepContent from "@/components/DeepContent";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import EnquiryCaptureForm from "@/components/EnquiryCaptureForm";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import type { MoneyPage } from "@/data/money-pages";

const SITE = "https://atlantisndt.com";

/**
 * Shared renderer for the buyer-intent "money pages" (Phase 1, 2026-07-27 SEO
 * programme). Content lives in src/data/money-pages.ts so that
 * scripts/route-reconcile.mjs can build byte-comparable prerendered HTML from
 * the exact same source — the static HTML Google sees and the hydrated view a
 * user sees are generated from one object, never allowed to drift.
 */
export default function MoneyPageTemplate({ page }: { page: MoneyPage }) {
  const canonical = `${SITE}/${page.slug}`;

  const softwareSchema = page.softwareCategory
    ? {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "Atlantis NDT",
        applicationCategory: page.softwareCategory,
        operatingSystem: "Web browser; installable offline field app",
        url: canonical,
        description: page.description,
        provider: {
          "@type": "Organization",
          name: "Atlantis NDT",
          url: SITE,
        },
      }
    : undefined;

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      <SEOHead
        title={page.title}
        description={page.description}
        keywords={page.keywords}
        canonical={canonical}
        faq={page.faqs.map((f) => ({ question: f.question, answer: f.answer }))}
        structuredData={softwareSchema}
      />
      <Breadcrumbs />

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white pt-24 pb-16">
        <div className="container mx-auto max-w-5xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-blue-300 text-sm font-medium tracking-wide uppercase mb-4">
              {page.eyebrow}
            </div>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-5">{page.h1}</h1>
            <p className="text-lg md:text-xl text-blue-100 font-medium mb-6">{page.subhead}</p>
            <p className="text-slate-200 leading-relaxed max-w-3xl">{page.intro}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-500 hover:bg-blue-400 font-semibold transition"
              >
                Book a demo <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-white/30 hover:bg-white/10 font-semibold transition"
              >
                Request a tailored quote
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Body sections ────────────────────────────────────────────── */}
      <main>
        {/* 2026-10-17: direct answer + trial/walkthrough CTA, same order as the crawler HTML. */}
        {page.answer && (
          <section className="py-12 bg-white" data-answer-block="2026-10">
            <div className="container mx-auto max-w-4xl px-6">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">{page.answer.h2}</h2>
              <p className="text-lg text-slate-700 leading-relaxed">{page.answer.text}</p>
            </div>
          </section>
        )}
        {page.cta && (
          <section className="py-10 bg-blue-50" data-trial-cta="2026-10">
            <div className="container mx-auto max-w-4xl px-6">
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">{page.cta.h2}</h2>
              <p className="text-slate-700 mb-5">{page.cta.text}</p>
              <div className="flex flex-wrap gap-3">
                <Link to={page.cta.trial.href} className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold transition">
                  {page.cta.trial.label} <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to={page.cta.walkthrough.href} className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-blue-300 text-blue-800 hover:bg-white font-semibold transition">
                  {page.cta.walkthrough.label}
                </Link>
              </div>
            </div>
          </section>
        )}
        {page.sections.map((section, i) => (
          <section key={i} className={i % 2 === 0 ? "py-14 bg-white" : "py-14 bg-slate-50"}>
            <div className="container mx-auto max-w-5xl px-6">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">{section.h2}</h2>

              {section.paragraphs?.map((p, j) => (
                <p key={j} className="text-slate-700 leading-relaxed mb-4 max-w-4xl">
                  {p}
                </p>
              ))}

              {section.bullets && (
                <ul className="mt-4 space-y-3 max-w-4xl">
                  {section.bullets.map((b, j) => (
                    <li key={j} className="flex gap-3 text-slate-700 leading-relaxed">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              )}

              {section.table && (
                <div className="mt-6 overflow-x-auto rounded-xl border border-slate-200 bg-white">
                  <table className="w-full text-left text-sm">
                    {section.table.caption && (
                      <caption className="sr-only">{section.table.caption}</caption>
                    )}
                    <thead className="bg-slate-100">
                      <tr>
                        {section.table.headers.map((h, j) => (
                          <th key={j} className="px-4 py-3 font-semibold text-slate-900 align-top">
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {section.table.rows.map((row, j) => (
                        <tr key={j} className="border-t border-slate-200 align-top">
                          {row.map((cell, kk) => (
                            <td key={kk} className="px-4 py-3 text-slate-700 leading-relaxed">
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </section>
        ))}

        {/* ── FAQ ────────────────────────────────────────────────────── */}
        <section className="py-14 bg-white">
          <div className="container mx-auto max-w-4xl px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
              Frequently asked questions
            </h2>
            <div className="space-y-3">
              {page.faqs.map((f, i) => (
                <details
                  key={i}
                  className="group bg-slate-50 rounded-xl border border-slate-200 p-5 open:border-blue-300"
                >
                  <summary className="font-semibold text-slate-900 cursor-pointer">
                    {f.question}
                  </summary>
                  <p className="mt-3 text-slate-700 leading-relaxed">{f.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── Related ───────────────────────────────────────────────── */}
        <section className="py-12 bg-slate-50">
          <div className="container mx-auto max-w-5xl px-6">
            <h2 className="text-xl font-bold text-slate-900 mb-4">Related pages</h2>
            <div className="flex flex-wrap gap-3">
              {page.related.map((r) => (
                <Link
                  key={r.href}
                  to={r.href}
                  className="px-4 py-2 rounded-lg bg-white border border-slate-200 text-slate-700 hover:border-blue-400 hover:text-blue-700 transition text-sm"
                >
                  {r.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── Enquiry ───────────────────────────────────────────────── */}
        <section className="py-14 bg-white">
          <div className="container mx-auto max-w-3xl px-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">
              See it running on your own workflow
            </h2>
            <p className="text-slate-600 mb-6">
              Your job types and your reporting formats, walked through by an ASNT NDT Level III.
              Affordable, accessible, fully customizable — tell us the scope and we will send a
              tailored quote.
            </p>
            <DeepContent path={`/${page.slug}`} />
            <EnquiryCaptureForm variant={page.enquiryVariant} />
          </div>
        </section>
      </main>

      <ContactDetails />
    </div>
  );
}
