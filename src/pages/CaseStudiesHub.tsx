// /case-studies — hub for case stories from completed engagements.
// 2026-10-11 (owner): only real, owner-described engagements are listed here. The
// 12 ERP "case studies", the 10 prerender-only case studies and /case-studies/legacy
// were retired (301 to this page in vercel.json). Same data as the crawler layer:
// src/data/case-stories-2026-10.json via scripts/case-stories-2026-10.mjs. The title,
// description and H1 below are repeated in the two /case-studies entries in scripts/prerender.mjs.
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { ArrowRight, Building2 } from "lucide-react";
import caseStories from "@/data/case-stories-2026-10.json";

const SITE = "https://atlantisndt.com";

const RELATED: [string, string][] = [
  ["/consulting/ndt-consulting-level-iii", "Outsourced ASNT Level III consulting"],
  ["/consulting/ndt-program-audit-gap-assessment", "NDT programme audit and gap assessment"],
  ["/consulting/level-iii-audit-support-lng", "Level III audit support for LNG facilities"],
  ["/consulting/ndt-technical-procedure-development", "NDT technical procedure development"],
  ["/consulting/ultrasonic-testing-procedure-development-lng", "UT procedure development for LNG facilities"],
  ["/consulting/written-practice-development", "Written practice development"],
];

const stripPrefix = (h1: string) => h1.replace(/^Case study:\s*/i, "");

export default function CaseStudiesHub() {
  const url = `${SITE}/case-studies`;

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${url}#hub`,
    name: "Atlantis NDT case studies: completed Level III engagements",
    description:
      "Completed Level III engagements, told as they happened: a remote NDT documentation audit and a UT weld procedure revision. Client names withheld.",
    url,
    hasPart: caseStories.stories.map((s) => ({
      "@type": "Article",
      name: stripPrefix(s.h1),
      url: `${url}/${s.slug}`,
      description: s.description,
      articleSection: s.sector,
    })),
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      <SEOHead
        title="NDT Case Studies: Completed Level III Engagements | Atlantis NDT"
        description="Completed Level III engagements, told as they happened: a remote NDT documentation audit and a UT weld procedure revision. Client names withheld."
        keywords="NDT case study, NDT documentation audit, remote NDT audit, UT procedure revision, ASNT Level III consulting"
        canonical={url}
        structuredData={collectionSchema}
      />
      <Breadcrumbs />

      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white pt-24 pb-14">
        <div className="container mx-auto max-w-6xl px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-5 text-xs uppercase tracking-wider">
              <Building2 className="w-4 h-4" />
              <span>Case studies</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">NDT case studies: completed Level III engagements</h1>
            <p className="text-lg text-blue-100 max-w-3xl">
              Atlantis NDT publishes a case study only when the engagement is complete and its facts can
              be stated as they happened. Where a story explains how Atlantis runs that kind of work, it is
              labelled as our method, not presented as findings from the client's records.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-14 bg-white border-b border-slate-200" data-case-stories="2026-10">
        <div className="container mx-auto max-w-6xl px-6">
          <h2 className="text-2xl font-bold mb-2">{caseStories.hub.heading}</h2>
          <p className="text-slate-600 mb-8 max-w-3xl">{caseStories.hub.intro}</p>
          <div className="grid md:grid-cols-2 gap-4">
            {caseStories.stories.map((c) => (
              <Link
                key={c.slug}
                to={`/case-studies/${c.slug}`}
                className="group bg-slate-50 border border-slate-200 rounded-xl p-5 hover:border-blue-400 hover:shadow-md transition"
              >
                <div className="text-xs uppercase tracking-wide text-blue-700 font-semibold mb-2">{c.sector}</div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug group-hover:text-blue-700 transition">
                  {stripPrefix(c.h1)}
                </h3>
                <p className="text-sm text-slate-600 mb-3 leading-relaxed">{c.card}</p>
                <span className="inline-flex items-center gap-1 text-blue-700 font-medium text-xs">
                  Read the story <ArrowRight className="w-3 h-3" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-slate-100">
        <div className="container mx-auto max-w-6xl px-6">
          <h2 className="text-xl font-semibold mb-4">The services behind these engagements</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 text-sm">
            {RELATED.map(([href, label]) => (
              <Link key={href} to={href} className="text-blue-700 hover:underline">
                {label} →
              </Link>
            ))}
          </div>
          <p className="text-sm text-slate-600 mt-6 max-w-3xl">
            Planning an audit or a procedure revision?{" "}
            <Link to="/contact?service=consulting&subject=Level%20III%20engagement" className="text-blue-700 hover:underline">
              Talk to a Level III about your scope
            </Link>
            .
          </p>
        </div>
      </section>

      <ContactDetails />
    </div>
  );
}
