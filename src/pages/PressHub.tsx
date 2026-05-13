import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Newspaper, ArrowRight, Mail } from "lucide-react";

const POSTS = [
  {
    slug: "atlantis-ndt-erp-launch-2026",
    title: "Atlantis NDT Launches Industry-First NDT ERP with 11 Modules + 12 Industry Verticals",
    date: "2026-05-13",
    excerpt: "Atlantis NDT today announced the general availability of its purpose-built NDT ERP platform, with 11 production-ready modules, 12 industry-vertical configurations, and pre-loaded operator quality clauses from Saudi Aramco SAEP-1142, ADNOC ACS-01, Petronas PTS, and 30+ major operators.",
    category: "Product Launch",
  },
  {
    slug: "saep-1142-acs-01-pts-templates",
    title: "Pre-Built Operator Quality Templates: Saudi Aramco SAEP-1142, ADNOC ACS-01, Petronas PTS",
    date: "2026-05-13",
    excerpt: "Atlantis NDT ERP now ships with pre-configured operator quality clause libraries for the top 30 oil & gas operators globally. Inspection contractors can pass operator-approved-vendor audits in days rather than months.",
    category: "Industry",
  },
  {
    slug: "iso-17025-calibration-laboratory-erp",
    title: "Calibration Laboratory ERP: ISO/IEC 17025 §7.8 Reporting Native, GUM Uncertainty Built-In",
    date: "2026-05-13",
    excerpt: "Atlantis NDT ERP's calibration-laboratory configuration covers ISO/IEC 17025:2017 §7.8 reporting requirements natively, with JCGM 100:2008 (GUM) uncertainty budgets, customer-asset traceability chains, and ANAB / UKAS / NABL accreditation support.",
    category: "Industry",
  },
  {
    slug: "free-templates-2026-launch",
    title: "Free Editable Templates: 16 NDT / Inspection / QA Templates Now Available",
    date: "2026-05-13",
    excerpt: "Atlantis NDT releases 16 free editable templates for the inspection community — NDT procedure template (SNT-TC-1A), API 510/570/653 reports, PWHT records, RBI worksheet (API 581), calibration certificates (ISO 17025), welder qualification (WPQR), ITP, and more.",
    category: "Resources",
  },
];

export default function PressHub() {
  const url = "https://atlantisndt.com/press";
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${url}#hub`,
    "name": "Atlantis NDT — Press & News",
    "description": "Press releases, product launches, and industry insights from Atlantis NDT — purpose-built ERP for inspection, NDT, calibration, welding, marine survey, pipeline integrity, aerospace QC, and metrology service companies.",
    "url": url,
    "hasPart": POSTS.map(p => ({ "@type": "NewsArticle", "name": p.title, "datePublished": p.date, "url": `${url}/${p.slug}`, "description": p.excerpt })),
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      <SEOHead
        title="Press & News | Atlantis NDT"
        description="Press releases, product launches, and industry insights from Atlantis NDT — purpose-built ERP for inspection service companies."
        keywords="Atlantis NDT press, Atlantis NDT news, NDT ERP launch, inspection software news, ERP press release"
        canonical={url}
        structuredData={structuredData}
      />
      <Breadcrumbs />

      <section className="bg-gradient-to-br from-blue-700 to-indigo-800 text-white pt-24 pb-16">
        <div className="container mx-auto max-w-6xl px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6">
              <Newspaper className="w-4 h-4" /><span className="text-sm">Press &amp; News</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Press &amp; News from Atlantis NDT</h1>
            <p className="text-xl text-blue-100 max-w-3xl">Product launches, industry insights, and announcements from Atlantis NDT. For media inquiries, contact info@atlantisndt.com.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="grid md:grid-cols-2 gap-6">
            {POSTS.map(p => (
              <Link key={p.slug} to={`/press/${p.slug}`}>
                <Card className="border-l-4 border-blue-600 hover:shadow-md transition cursor-pointer">
                  <CardHeader>
                    <div className="flex items-center justify-between text-sm text-slate-500 mb-1">
                      <span className="font-semibold text-blue-700">{p.category}</span>
                      <span>{p.date}</span>
                    </div>
                    <CardTitle className="text-lg">{p.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-600 leading-relaxed">{p.excerpt}</p>
                    <span className="inline-flex items-center gap-1 text-blue-600 text-sm mt-3 font-medium">Read more <ArrowRight className="w-3 h-3" /></span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-2xl font-bold mb-4">Media Inquiries</h2>
          <p className="text-slate-600 mb-6">For interviews, product demos, or industry commentary on NDT, calibration, welding, or asset-integrity software, contact our team.</p>
          <a href="mailto:info@atlantisndt.com?subject=Media Inquiry — Atlantis NDT" className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-500"><Mail className="w-4 h-4" />info@atlantisndt.com</a>
        </div>
      </section>

      <ContactDetails />
    </div>
  );
}
