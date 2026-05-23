import React, { useMemo } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { ChevronLeft, ExternalLink, BookOpen, Calendar, Tag } from "lucide-react";
import standardsData from "@/data/standards.json";

interface LinkRef {
  label: string;
  href: string;
}

interface RevisionEntry {
  year: string;
  notes: string;
}

interface StandardEntry {
  slug: string;
  code: string;
  displayTitle: string;
  shortDescription: string;
  scope: string;
  keyRequirements: string;
  bestPractices?: string;
  revisionsHistory: RevisionEntry[];
  relatedStandards: string[];
  applicableCertifications: LinkRef[];
  applicableMethods: LinkRef[];
  issuingBody: string;
  category: string;
}

const standards = standardsData as unknown as StandardEntry[];
const slugIndex: Record<string, StandardEntry> = {};
for (const s of standards) slugIndex[s.slug] = s;

export default function StandardDetail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const std = slug ? slugIndex[slug] : undefined;

  const related = useMemo(() => {
    if (!std) return [];
    return (std.relatedStandards || [])
      .map((s) => slugIndex[s])
      .filter(Boolean) as StandardEntry[];
  }, [std]);

  const articleSchema = useMemo(() => {
    if (!std) return null;
    const url = `https://atlantisndt.com/standards/${std.slug}`;
    const latestRev = (std.revisionsHistory && std.revisionsHistory[0]) || null;
    const datePublished = latestRev ? `${latestRev.year}-01-01` : "2024-01-01";
    return {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "TechArticle",
          headline: std.displayTitle,
          description: std.shortDescription,
          datePublished,
          dateModified: new Date().toISOString().split("T")[0],
          author: {
            "@type": "Organization",
            name: "Atlantis NDT",
            url: "https://atlantisndt.com",
          },
          publisher: {
            "@type": "Organization",
            name: "Atlantis NDT",
            logo: {
              "@type": "ImageObject",
              url: "https://atlantisndt.com/favicon-96x96.jpg",
              width: 96,
              height: 96,
            },
          },
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": url,
          },
          image: "https://atlantisndt.com/og-image.jpg",
          keywords: `${std.code}, ${std.displayTitle}, NDT, non-destructive testing, ${std.issuingBody}`,
          about: {
            "@type": "Thing",
            name: std.displayTitle,
          },
          inLanguage: "en-US",
          isAccessibleForFree: true,
          articleSection: std.issuingBody,
        },
        {
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://atlantisndt.com/",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Standards",
              item: "https://atlantisndt.com/standards",
            },
            {
              "@type": "ListItem",
              position: 3,
              name: std.code,
              item: url,
            },
          ],
        },
      ],
    };
  }, [std]);

  if (!std) {
    return (
      <div className="min-h-screen bg-slate-50">
        <Navigation />
        <div className="container mx-auto px-6 py-32 text-center">
          <h1 className="text-3xl font-bold mb-3">Standard not found</h1>
          <p className="text-slate-600 mb-6">
            The requested standards reference page could not be located.
          </p>
          <Link
            to="/standards"
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500"
          >
            <ChevronLeft className="w-4 h-4" />
            Back to Standards index
          </Link>
        </div>
      </div>
    );
  }

  const url = `https://atlantisndt.com/standards/${std.slug}`;

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      <SEOHead
        title={`${std.code} — ${std.displayTitle} | Atlantis NDT Standards Reference`}
        description={std.shortDescription}
        keywords={`${std.code}, ${std.displayTitle}, NDT standard, ${std.issuingBody}, inspection code, ${std.category}`}
        canonical={url}
        structuredData={articleSchema}
      />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Standards", href: "/standards" },
          { label: std.code },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white pt-24 pb-12">
        <div className="container mx-auto max-w-6xl px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <button
              onClick={() => navigate("/standards")}
              className="inline-flex items-center gap-1 text-blue-100 hover:text-white text-sm mb-5"
            >
              <ChevronLeft className="w-4 h-4" />
              Back to Standards index
            </button>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="inline-flex items-center gap-1 px-3 py-1 bg-white/10 rounded-full text-xs uppercase tracking-wider">
                <BookOpen className="w-3 h-3" />
                {std.issuingBody}
              </span>
              <span className="inline-flex items-center gap-1 px-3 py-1 bg-white/10 rounded-full text-xs uppercase tracking-wider capitalize">
                <Tag className="w-3 h-3" />
                {std.category}
              </span>
              <span className="text-xs text-blue-200 font-mono">{std.code}</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
              {std.displayTitle}
            </h1>
            <p className="text-lg text-blue-100 max-w-3xl">{std.shortDescription}</p>
          </motion.div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main content */}
            <article className="lg:col-span-2">
              <div className="bg-white border border-slate-200 rounded-xl p-6 md:p-8 mb-6">
                <h2 className="text-2xl font-bold mb-4">Scope</h2>
                <div
                  className="standards-content"
                  dangerouslySetInnerHTML={{ __html: std.scope }}
                />
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-6 md:p-8 mb-6">
                <h2 className="text-2xl font-bold mb-4">Key requirements</h2>
                <div
                  className="standards-content"
                  dangerouslySetInnerHTML={{ __html: std.keyRequirements }}
                />
              </div>

              {std.bestPractices && (
                <div className="bg-white border border-slate-200 rounded-xl p-6 md:p-8 mb-6">
                  <div
                    className="standards-content"
                    dangerouslySetInnerHTML={{ __html: std.bestPractices }}
                  />
                </div>
              )}

              {/* Revisions History */}
              <div className="bg-white border border-slate-200 rounded-xl p-6 md:p-8 mb-6">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-blue-600" />
                  Revisions history
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="bg-slate-50">
                      <tr>
                        <th className="text-left p-3 font-semibold border-b border-slate-200 w-24">
                          Year
                        </th>
                        <th className="text-left p-3 font-semibold border-b border-slate-200">
                          Notes
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {std.revisionsHistory.map((rev, i) => (
                        <tr key={i} className="border-b border-slate-100">
                          <td className="p-3 font-mono text-blue-700 font-semibold">
                            {rev.year}
                          </td>
                          <td className="p-3 text-slate-700">{rev.notes}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6 md:p-8">
                <h2 className="text-xl font-bold mb-2">Need help with this standard?</h2>
                <p className="text-slate-700 mb-4">
                  Atlantis NDT offers Level III consulting on procedure development, code
                  compliance reviews, and audit preparation for {std.issuingBody} standards.
                  Our ASNT Level III team has authored procedures and led audits across
                  refining, petrochemical, aerospace, and structural steel fabrication.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    to="/consulting"
                    className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500 text-sm"
                  >
                    Level III Consulting
                  </Link>
                  <Link
                    to="/contact"
                    className="px-4 py-2 bg-white border border-blue-300 text-blue-700 font-semibold rounded-lg hover:bg-blue-50 text-sm"
                  >
                    Contact us
                  </Link>
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="space-y-6">
              {/* Applicable certifications */}
              {std.applicableCertifications && std.applicableCertifications.length > 0 && (
                <div className="bg-white border border-slate-200 rounded-xl p-5">
                  <h3 className="font-bold text-base mb-3 text-slate-900">
                    Applicable certifications
                  </h3>
                  <ul className="space-y-2 text-sm">
                    {std.applicableCertifications.map((c, i) => (
                      <li key={i}>
                        <Link
                          to={c.href}
                          className="inline-flex items-center gap-1 text-blue-700 hover:underline"
                        >
                          {c.label}
                          <ExternalLink className="w-3 h-3" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Applicable methods */}
              {std.applicableMethods && std.applicableMethods.length > 0 && (
                <div className="bg-white border border-slate-200 rounded-xl p-5">
                  <h3 className="font-bold text-base mb-3 text-slate-900">
                    Applicable methods &amp; guides
                  </h3>
                  <ul className="space-y-2 text-sm">
                    {std.applicableMethods.map((m, i) => (
                      <li key={i}>
                        <Link
                          to={m.href}
                          className="inline-flex items-center gap-1 text-blue-700 hover:underline"
                        >
                          {m.label}
                          <ExternalLink className="w-3 h-3" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Related standards */}
              {related.length > 0 && (
                <div className="bg-white border border-slate-200 rounded-xl p-5">
                  <h3 className="font-bold text-base mb-3 text-slate-900">
                    Related standards
                  </h3>
                  <ul className="space-y-2 text-sm">
                    {related.map((r) => (
                      <li key={r.slug}>
                        <Link
                          to={`/standards/${r.slug}`}
                          className="text-blue-700 hover:underline block"
                        >
                          <span className="font-mono text-xs text-slate-500 mr-1">
                            {r.code}
                          </span>
                          <span>{r.displayTitle}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Issuing body */}
              <div className="bg-slate-100 border border-slate-200 rounded-xl p-5">
                <h3 className="font-bold text-base mb-2 text-slate-900">Issuing body</h3>
                <p className="text-sm text-slate-700 mb-1">
                  <strong>{std.issuingBody}</strong>
                </p>
                <p className="text-xs text-slate-500 capitalize">Category: {std.category}</p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <ContactDetails />

      <style>{`
        .standards-content {
          color: hsl(var(--foreground));
          line-height: 1.7;
          font-size: 1rem;
        }
        .standards-content h2 {
          font-size: 1.35rem;
          font-weight: 700;
          margin-top: 1.75rem;
          margin-bottom: 0.75rem;
          color: hsl(var(--foreground));
          padding-bottom: 0.4rem;
          border-bottom: 2px solid hsl(var(--primary) / 0.2);
        }
        .standards-content h2:first-child { margin-top: 0; }
        .standards-content h3 {
          font-size: 1.1rem;
          font-weight: 600;
          margin-top: 1.25rem;
          margin-bottom: 0.5rem;
        }
        .standards-content p {
          margin-bottom: 1rem;
          color: hsl(var(--muted-foreground));
          line-height: 1.7;
        }
        .standards-content ul,
        .standards-content ol {
          margin: 0 0 1rem 1.25rem;
          color: hsl(var(--muted-foreground));
        }
        .standards-content ul { list-style: disc; }
        .standards-content ol { list-style: decimal; }
        .standards-content li {
          margin-bottom: 0.4rem;
          line-height: 1.6;
        }
        .standards-content li::marker { color: hsl(var(--primary)); }
        .standards-content strong { color: hsl(var(--foreground)); font-weight: 600; }
        .standards-content a {
          color: hsl(var(--primary));
          text-decoration: underline;
          text-underline-offset: 2px;
        }
      `}</style>
    </div>
  );
}
