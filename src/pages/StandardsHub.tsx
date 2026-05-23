import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { ArrowRight, BookOpen, Mail, ChevronRight } from "lucide-react";
import standardsData from "@/data/standards.json";

interface StandardEntry {
  slug: string;
  code: string;
  displayTitle: string;
  shortDescription: string;
  issuingBody: string;
  category: string;
  applicableMethods?: { label: string; href: string }[];
}

const standards = standardsData as unknown as StandardEntry[];

// Sort issuing bodies in preferred display order
const BODY_ORDER = ["ASME", "API", "ASTM", "ISO", "AWS", "EN/CEN"];

const BODY_DESCRIPTIONS: Record<string, string> = {
  ASME: "American Society of Mechanical Engineers — BPVC Section V articles and B31 piping codes governing construction and NDE for pressure equipment.",
  API: "American Petroleum Institute — in-service inspection codes, damage mechanism references, fitness-for-service, and risk-based inspection methodology.",
  ASTM: "American Society for Testing and Materials — foundational NDE practice and guide standards adopted across industries.",
  ISO: "International Organization for Standardization — global NDE standards covering personnel certification, PT, MT, RT, and UT of welds.",
  AWS: "American Welding Society — structural and bridge welding codes with embedded NDE and acceptance criteria.",
  "EN/CEN": "European Norms and specialized industry standards — UT equipment characterization, sour-service materials, and pipeline coating verification.",
};

export default function StandardsHub() {
  const url = "https://atlantisndt.com/standards";

  // Group by issuingBody, preserving the preferred order
  const grouped: Record<string, StandardEntry[]> = {};
  for (const body of BODY_ORDER) grouped[body] = [];
  for (const s of standards) {
    if (!grouped[s.issuingBody]) grouped[s.issuingBody] = [];
    grouped[s.issuingBody].push(s);
  }

  // Sort each group's entries by code for stable display
  for (const body of Object.keys(grouped)) {
    grouped[body].sort((a, b) => a.code.localeCompare(b.code));
  }

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${url}#hub`,
    name: "NDT Standards Reference — ASME, API, ASTM, ISO, AWS, NACE",
    description:
      "Comprehensive reference for NDT and inspection codes and standards: ASME Section V articles, ASME B31.3, API 510/570/571/579/580/581/653/1104, ASTM E94/E165/E709/E1417/E1444, ISO 3452/9712/17636/17640/9934, AWS D1.1/D1.5, EN 12668, NACE MR0175/SP0490.",
    url,
    hasPart: standards.map((s) => ({
      "@type": "TechArticle",
      name: s.displayTitle,
      url: `${url}/${s.slug}`,
      description: s.shortDescription,
      articleSection: s.issuingBody,
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://atlantisndt.com/" },
      { "@type": "ListItem", position: 2, name: "Standards", item: url },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      <SEOHead
        title="NDT Standards Reference — ASME, API, ASTM, ISO, AWS, NACE | Atlantis NDT"
        description="Reference summaries of 30+ NDT and inspection codes and standards: ASME Section V (Articles 1, 2, 4, 5, 6, 7, 8, 9, 23) and B31.3; API 510, 570, 571, 579, 580, 581, 653, 1104; ASTM E94, E165, E709, E1417, E1444; ISO 3452, 9712, 17636, 17640, 9934; AWS D1.1, D1.5; EN 12668; NACE MR0175, SP0490."
        keywords="NDT standards, ASME Section V, API 510, API 570, API 653, API 579, ASTM E165, ASTM E709, ISO 9712, ISO 17636, AWS D1.1, NACE MR0175, NDT codes reference"
        canonical={url}
        structuredData={[collectionSchema, breadcrumbSchema]}
      />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Standards", href: "/standards" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white pt-24 pb-14">
        <div className="container mx-auto max-w-6xl px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-5 text-xs uppercase tracking-wider">
              <BookOpen className="w-4 h-4" />
              <span>NDT Standards Reference Library</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
              NDT codes &amp; standards reference — {standards.length} standards across six issuing bodies
            </h1>
            <p className="text-lg text-blue-100 max-w-3xl mb-7">
              Plain-language summaries of the inspection codes and NDE standards Atlantis NDT
              uses on a daily basis: ASME Section V articles and B31.3 process piping; API
              in-service inspection codes (510, 570, 653) and supporting RPs (571, 579, 580,
              581, 1104); ASTM PT/MT/RT general practices; ISO equivalents (3452, 9712, 9934,
              17636, 17640); AWS D1.1/D1.5 welding codes; EN 12668 UT equipment; and the NACE
              MR0175/SP0490 sour-service and pipeline coating standards. Each entry summarizes
              scope, key requirements with clause references, revisions history, and the
              certifications and methods to which it applies.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="px-5 py-2.5 bg-white text-blue-900 font-semibold rounded-lg hover:bg-blue-50 text-sm"
              >
                Request a code review or procedure audit
              </Link>
              <a
                href="mailto:info@atlantisndt.com?subject=NDT standards consultation"
                className="px-5 py-2.5 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500 flex items-center gap-2 text-sm"
              >
                <Mail className="w-4 h-4" /> info@atlantisndt.com
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-14">
        <div className="container mx-auto max-w-6xl px-6">
          {BODY_ORDER.map((body) => {
            const entries = grouped[body] || [];
            if (!entries.length) return null;
            return (
              <div key={body} className="mb-12">
                <div className="flex items-baseline justify-between mb-1">
                  <h2 className="text-2xl font-bold">{body}</h2>
                  <span className="text-sm text-slate-500">{entries.length} standards</span>
                </div>
                <p className="text-slate-600 mb-5 max-w-3xl">{BODY_DESCRIPTIONS[body]}</p>
                <div className="grid md:grid-cols-2 gap-4">
                  {entries.map((s) => (
                    <Link
                      key={s.slug}
                      to={`/standards/${s.slug}`}
                      className="group bg-white border border-slate-200 rounded-xl p-5 hover:border-blue-400 hover:shadow-md transition"
                    >
                      <div className="text-xs uppercase tracking-wide text-blue-700 font-semibold mb-2">
                        {s.code}
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug group-hover:text-blue-700 transition">
                        {s.displayTitle}
                      </h3>
                      <p className="text-sm text-slate-600 mb-3 leading-relaxed">
                        {s.shortDescription}
                      </p>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-slate-500 capitalize">{s.category}</span>
                        <span className="inline-flex items-center gap-1 text-blue-700 font-medium">
                          Read summary <ArrowRight className="w-3 h-3" />
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="py-12 bg-slate-100">
        <div className="container mx-auto max-w-6xl px-6">
          <h2 className="text-xl font-semibold mb-4">Explore Atlantis NDT further</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 text-sm">
            <Link to="/asnt-certification" className="text-blue-700 hover:underline inline-flex items-center gap-1">
              ASNT Certification <ChevronRight className="w-3 h-3" />
            </Link>
            <Link to="/api-510-certification" className="text-blue-700 hover:underline inline-flex items-center gap-1">
              API 510 Certification <ChevronRight className="w-3 h-3" />
            </Link>
            <Link to="/api-570-certification" className="text-blue-700 hover:underline inline-flex items-center gap-1">
              API 570 Certification <ChevronRight className="w-3 h-3" />
            </Link>
            <Link to="/api-653-certification" className="text-blue-700 hover:underline inline-flex items-center gap-1">
              API 653 Certification <ChevronRight className="w-3 h-3" />
            </Link>
            <Link to="/training" className="text-blue-700 hover:underline inline-flex items-center gap-1">
              NDT Training Programs <ChevronRight className="w-3 h-3" />
            </Link>
            <Link to="/consulting" className="text-blue-700 hover:underline inline-flex items-center gap-1">
              Level III Consulting <ChevronRight className="w-3 h-3" />
            </Link>
            <Link to="/blog" className="text-blue-700 hover:underline inline-flex items-center gap-1">
              NDT Knowledge Blog <ChevronRight className="w-3 h-3" />
            </Link>
            <Link to="/ndt-methods" className="text-blue-700 hover:underline inline-flex items-center gap-1">
              All NDT Methods <ChevronRight className="w-3 h-3" />
            </Link>
            <Link to="/case-studies" className="text-blue-700 hover:underline inline-flex items-center gap-1">
              Customer Case Studies <ChevronRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </section>

      <ContactDetails />
    </div>
  );
}
