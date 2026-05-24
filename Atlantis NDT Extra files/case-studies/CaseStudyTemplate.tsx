import React from "react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import AuthorBio, { Author } from "@/components/AuthorBio";
import RegulatorCodeMatrix from "@/components/RegulatorCodeMatrix";

/**
 * CaseStudyTemplate — reusable layout for every /case-studies/* page.
 *
 * Schema: Article + Place + Organization JSON-LD emitted inline.
 *
 * Copy is engineer-readable, regulator-anchored, and uses generic
 * anonymized client descriptors so that confidentiality can be honored
 * while still producing an indexable, topically rich page.
 */

export type OutcomeMetric = {
  label: string;    // e.g. "Remaining useful life accuracy"
  value: string;    // e.g. "±6 months on a 60-month horizon"
  note?: string;    // optional secondary detail
};

export type CaseStudyImage = {
  src: string;
  alt: string;
  caption?: string;
};

export type CaseStudyProps = {
  /** Canonical URL path, e.g. "/case-studies/cs-refinery-paut-overlay" */
  path: string;
  /** Optional named client — may be redacted (e.g. "Gulf-region refinery"). */
  client?: string;
  industry: string;
  region: string;
  assetType: string;
  scope: string;
  methods: string[];
  outcome: OutcomeMetric[];
  timeline: string;
  regulatorContext: string[];
  /** Codes to show in the RegulatorCodeMatrix subset. Must match ALL_CODES entries. */
  regulatorCodesSubset?: string[];
  images?: CaseStudyImage[];
  reviewedBy?: Author;
  title: string;
  metaDescription: string;
  children: React.ReactNode;
};

const ORIGIN = "https://atlantisndt.com";

function buildArticleJsonLd (p: CaseStudyProps): object {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: p.title,
    description: p.metaDescription,
    mainEntityOfPage: `${ORIGIN}${p.path}`,
    author: p.reviewedBy
      ? { "@type": "Person", name: p.reviewedBy.name, jobTitle: p.reviewedBy.role }
      : { "@type": "Organization", name: "Atlantis NDT" },
    publisher: {
      "@type": "Organization",
      name: "Atlantis NDT",
      url: ORIGIN,
      logo: { "@type": "ImageObject", url: `${ORIGIN}/logo.png` },
    },
    about: [p.industry, p.assetType, ...p.methods],
    keywords: [p.industry, p.assetType, p.region, ...p.methods, ...p.regulatorContext].join(", "),
    articleSection: "Case Study",
    inLanguage: "en",
  };
}

function buildPlaceJsonLd (p: CaseStudyProps): object {
  return {
    "@context": "https://schema.org",
    "@type": "Place",
    name: p.client || `${p.assetType} — ${p.region}`,
    description: `${p.assetType} in ${p.region}. ${p.scope}`,
    address: {
      "@type": "PostalAddress",
      addressRegion: p.region,
    },
  };
}

function buildOrgJsonLd (): object {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Atlantis NDT",
    url: ORIGIN,
    sameAs: ["https://asnt.org"],
    description:
      "Experts in Digital Twin solutions, Non-destructive testing and software.",
  };
}

export default function CaseStudyTemplate (props: CaseStudyProps) {
  const {
    path, client, industry, region, assetType, scope, methods, outcome,
    timeline, regulatorContext, regulatorCodesSubset, images = [], reviewedBy,
    title, metaDescription, children,
  } = props;

  const canonical = `${ORIGIN}${path}`;

  return (
    <>
      <SEOHead
        title={title}
        description={metaDescription}
        canonical={canonical}
        alternates={[
          { hreflang: "en", href: canonical },
          { hreflang: "x-default", href: canonical },
        ]}
        breadcrumb={[
          { name: "Home",         item: `${ORIGIN}/` },
          { name: "Case Studies", item: `${ORIGIN}/case-studies` },
          { name: title,          item: canonical },
        ]}
      />

      {/* Inline JSON-LD for Article + Place + Organization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildArticleJsonLd(props)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildPlaceJsonLd(props)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildOrgJsonLd()) }}
      />

      <main className="bg-white text-slate-900">
        <section className="border-b border-slate-200 bg-gradient-to-b from-slate-50 to-white">
          <div className="mx-auto max-w-5xl px-6 py-16">
            <nav className="text-xs text-slate-500">
              <Link to="/case-studies" className="hover:underline">Case studies</Link>
              <span className="mx-2">/</span>
              <span>{industry}</span>
            </nav>
            <h1 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-slate-900 md:text-5xl">
              {title}
            </h1>
            <p className="mt-4 max-w-3xl text-lg text-slate-700">{metaDescription}</p>

            <dl className="mt-8 grid gap-4 text-sm sm:grid-cols-2 lg:grid-cols-4">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-widest text-slate-500">Client</dt>
                <dd className="mt-1 text-slate-900">{client || "Redacted — see scope"}</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-widest text-slate-500">Industry</dt>
                <dd className="mt-1 text-slate-900">{industry}</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-widest text-slate-500">Region</dt>
                <dd className="mt-1 text-slate-900">{region}</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-widest text-slate-500">Asset</dt>
                <dd className="mt-1 text-slate-900">{assetType}</dd>
              </div>
            </dl>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-6 py-14">
          <div className="grid gap-10 md:grid-cols-3">
            <aside className="md:col-span-1">
              <h2 className="text-sm font-semibold uppercase tracking-widest text-sky-700">Scope</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-700">{scope}</p>

              <h2 className="mt-6 text-sm font-semibold uppercase tracking-widest text-sky-700">Timeline</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-700">{timeline}</p>

              <h2 className="mt-6 text-sm font-semibold uppercase tracking-widest text-sky-700">NDT methods</h2>
              <ul className="mt-2 space-y-1 text-sm text-slate-700">
                {methods.map((m) => (
                  <li key={m} className="flex items-baseline gap-2">
                    <span aria-hidden="true" className="text-sky-700">•</span>
                    <span>{m}</span>
                  </li>
                ))}
              </ul>

              <h2 className="mt-6 text-sm font-semibold uppercase tracking-widest text-sky-700">Regulator context</h2>
              <ul className="mt-2 space-y-1 text-sm text-slate-700">
                {regulatorContext.map((r) => (
                  <li key={r} className="flex items-baseline gap-2">
                    <span aria-hidden="true" className="text-sky-700">•</span>
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </aside>

            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold text-slate-900">Outcome at a glance</h2>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {outcome.map((o) => (
                  <div key={o.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                    <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                      {o.label}
                    </p>
                    <p className="mt-1 text-lg font-bold text-slate-900">{o.value}</p>
                    {o.note ? <p className="mt-1 text-xs text-slate-600">{o.note}</p> : null}
                  </div>
                ))}
              </div>

              <article className="prose prose-slate mt-10 max-w-none text-slate-800">
                {children}
              </article>

              {images.length ? (
                <div className="mt-10 grid gap-4 sm:grid-cols-2">
                  {images.map((img) => (
                    <figure key={img.src} className="overflow-hidden rounded-lg border border-slate-200 bg-slate-50">
                      <img src={img.src} alt={img.alt} className="h-48 w-full object-cover" loading="lazy" />
                      {img.caption ? (
                        <figcaption className="px-3 py-2 text-xs text-slate-600">{img.caption}</figcaption>
                      ) : null}
                    </figure>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        </section>

        {regulatorCodesSubset && regulatorCodesSubset.length ? (
          <section className="border-y border-slate-200 bg-slate-50">
            <div className="mx-auto max-w-5xl px-6 py-12">
              <RegulatorCodeMatrix
                heading="Codes applied on this engagement"
                subset={regulatorCodesSubset}
              />
            </div>
          </section>
        ) : null}

        <section className="mx-auto max-w-5xl px-6 py-14">
          <AuthorBio author={reviewedBy} />

          <div className="mt-10 rounded-lg border border-sky-200 bg-sky-50 p-6">
            <h2 className="text-lg font-semibold text-slate-900">Scope a similar engagement</h2>
            <p className="mt-2 text-sm text-slate-700">
              Atlantis deploys remote-led twin + inspection programs in 6 to 10 weeks for most
              existing assets. Confidentiality and regulator-aligned data handling are default.
            </p>
            <Link
              to="/contact"
              className="mt-4 inline-block rounded-md bg-sky-700 px-5 py-2 text-sm font-semibold text-white hover:bg-sky-800"
            >
              Request a scoping call
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
