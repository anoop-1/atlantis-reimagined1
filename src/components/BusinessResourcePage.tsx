import { useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Printer, FileText, Download, CheckCircle } from "lucide-react";
import type { BusinessResource } from "@/data/business-resources";

const SITE = "https://atlantisndt.com";

/**
 * Renderer for the ERP Track A business-operations resources (2026-07-30).
 *
 * Follows the /resources pattern that already converts at roughly a 5% CTR on
 * this site, and fires the same `template_download` event the existing templates
 * use — so the funnel from organic traffic to a qualified ERP conversation is
 * measurable from the first day rather than inferred.
 *
 * Content lives in src/data/business-resources.ts so prerender renders the same
 * words the hydrated page shows.
 */
export default function BusinessResourcePage({ resource }: { resource: BusinessResource }) {
  useEffect(() => {
    const style = document.createElement("style");
    style.setAttribute("data-print", "true");
    style.textContent =
      "@media print { nav, footer, .no-print, .breadcrumbs { display: none !important; } body { font-size: 11pt; color: #000; } h1 { font-size: 18pt; } h2 { font-size: 14pt; page-break-after: avoid; } ul { page-break-inside: avoid; } }";
    document.head.appendChild(style);
    return () => { document.head.removeChild(style); };
  }, []);

  const canonical = `${SITE}/resources/${resource.slug}`;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: resource.h1,
    description: resource.description,
    author: { "@type": "Organization", name: "Atlantis NDT" },
    publisher: {
      "@type": "Organization",
      name: "Atlantis NDT",
      logo: { "@type": "ImageObject", url: `${SITE}/og-image.jpg` },
    },
    datePublished: "2026-07-30",
    dateModified: "2026-07-30",
    mainEntityOfPage: { "@type": "WebPage", "@id": canonical },
  };

  const trackDownload = () => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "template_download", {
        event_category: "Business Resources",
        event_label: resource.slug,
        value: 1,
        page_location: window.location.href,
        page_path: window.location.pathname,
      });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      <SEOHead
        title={resource.title}
        description={resource.description}
        keywords={resource.keywords}
        canonical={canonical}
        structuredData={structuredData}
        faq={resource.faqs}
      />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Resources", href: "/resources" },
          { label: resource.h1 },
        ]}
      />

      <section className="bg-[#004aad] text-white py-16 pt-8 no-print">
        <div className="container mx-auto max-w-6xl px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="flex items-center gap-2 text-blue-200 mb-4">
              <FileText className="w-5 h-5" />
              <span>{resource.badge}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{resource.h1}</h1>
            <p className="text-xl text-blue-100 max-w-3xl mb-8">{resource.lede}</p>
            <div className="flex flex-wrap gap-4">
              {resource.download ? (
                <a
                  href={resource.download}
                  download
                  onClick={trackDownload}
                  className="inline-flex items-center gap-2 bg-white text-[#004aad] px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
                >
                  <Download className="w-5 h-5" /> Download Editable Copy
                </a>
              ) : null}
              <button
                onClick={() => { trackDownload(); window.print(); }}
                className="inline-flex items-center gap-2 bg-white text-[#004aad] px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
              >
                <Printer className="w-5 h-5" /> Print / Save as PDF
              </button>
              <Link
                to="/contact?service=erp"
                className="inline-flex items-center gap-2 border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition"
              >
                Talk it through with us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto max-w-4xl px-6 space-y-10">
          <div className="bg-white rounded-xl shadow border border-slate-100 p-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Why this matters</h2>
            {resource.overview.map((p, i) => (
              <p key={i} className="text-slate-700 mb-3 last:mb-0">{p}</p>
            ))}
          </div>

          <div className="bg-white rounded-xl shadow border border-slate-100 p-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">What it covers</h2>
            <ul className="space-y-2">
              {resource.sections.map((s, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-700">
                  <CheckCircle className="w-5 h-5 text-[#004aad] flex-shrink-0 mt-0.5" />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow border border-slate-100 p-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">How to use it</h2>
            <div className="space-y-5">
              {resource.howToUse.map((h, i) => (
                <div key={i}>
                  <h3 className="font-semibold text-slate-900 mb-1">{h.h}</h3>
                  <p className="text-slate-700">{h.p}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow border border-slate-100 p-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Frequently asked questions</h2>
            <div className="space-y-3">
              {resource.faqs.map((f, i) => (
                <details key={i} className="group bg-slate-50 rounded-lg border border-slate-200 p-5 open:border-blue-300">
                  <summary className="font-semibold text-slate-900 cursor-pointer">{f.question}</summary>
                  <p className="mt-3 text-slate-700 leading-relaxed">{f.answer}</p>
                </details>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow border border-slate-100 p-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Related</h2>
            <ul className="grid sm:grid-cols-2 gap-3 text-slate-700">
              {resource.related.map((r) => (
                <li key={r.href}>
                  <Link to={r.href} className="text-[#004aad] hover:underline">{r.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#004aad] text-white text-center no-print">
        <div className="container mx-auto max-w-4xl px-6">
          <h2 className="text-3xl font-bold mb-4">Want this running in a system instead of a document?</h2>
          <p className="text-blue-100 mb-8 text-lg">
            Everything in this resource can be enforced automatically rather than checked manually.
            Affordable, accessible, fully customizable — and the conversation starts with how you work now.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact?service=erp"
              className="inline-flex items-center gap-2 bg-white text-[#004aad] px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
            >
              Book a Free Consultation
            </Link>
            <Link
              to="/erp"
              className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition"
            >
              See the Platform
            </Link>
          </div>
        </div>
      </section>

      <ContactDetails />
    </div>
  );
}
