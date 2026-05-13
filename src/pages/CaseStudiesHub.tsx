import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import CustomerLogosBlock from "@/components/CustomerLogosBlock";
import { ArrowRight, Mail, Building2 } from "lucide-react";

interface CaseStudyCard {
  slug: string;
  industry: string;
  title: string;
  oneLine: string;
  region: string;
}

const cases: CaseStudyCard[] = [
  {
    slug: "ndt-inspection-companies",
    industry: "NDT Inspection Companies",
    title: "Gulf-Coast NDT contractor — 45 technicians, refinery turnaround support",
    oneLine: "Eliminated cert-expiry incidents, cut report cycle from 48-72h to 8-18h, audit prep from 80h to 30 seconds.",
    region: "Texas & Louisiana, USA",
  },
  {
    slug: "calibration-laboratories",
    industry: "Calibration Laboratories",
    title: "ISO 17025 lab — ~8,000 customer instruments/year, multi-discipline",
    oneLine: "Certificate cycle 9-12 days down to 3-5 days, zero ANAB findings, unified certificate across 5 disciplines.",
    region: "US Mid-Atlantic",
  },
  {
    slug: "welding-fabrication-shops",
    industry: "Welding & Fabrication Shops",
    title: "ASME 'U' stamp shop — 60-welder fleet, AWS D1.1 + Section IX",
    oneLine: "WPS search under 5 seconds, real-time QW-322 continuity, one-click AI data package.",
    region: "US Midwest",
  },
  {
    slug: "marine-survey-companies",
    industry: "Marine Survey & Offshore Inspection",
    title: "FPSO conversion specialist — IMCA D-018, hull integrity surveys",
    oneLine: "Mobilisation eligibility real-time, class-society reports same-day, IMCA evidence under 30 seconds.",
    region: "Singapore HQ, global operations",
  },
  {
    slug: "pipeline-integrity-services",
    industry: "Pipeline Integrity Services",
    title: "Midstream operator — ~8,000 km, API 1160 IMP + ILI",
    oneLine: "ILI vendor normalisation automated, dig latency 5-7 days down to 30 minutes, DOT PHMSA report assembly in days not weeks.",
    region: "US Mid-Continent + Permian",
  },
  {
    slug: "aerospace-quality-control",
    industry: "Aerospace Quality Control & MRO",
    title: "AS9100D / NAS-410 NDT shop — Boeing + Airbus + Pratt & Whitney customers",
    oneLine: "Customer flow-down auto-enforced, NAS-410 record retrieval under 10 seconds, Nadcap prep 4 weeks to 1 week.",
    region: "US Pacific Northwest",
  },
  {
    slug: "metrology-laboratories",
    industry: "Metrology Laboratories",
    title: "ANAB-accredited lab — ~12,000 instruments/year, 9-discipline scope",
    oneLine: "Unified customer experience, consistent uncertainty framework, zero ANAB findings.",
    region: "US Southeast",
  },
  {
    slug: "industrial-coatings-inspection",
    industry: "Industrial Coatings Inspection",
    title: "Refinery coatings contractor — NACE / AMPP CIP team, SSPC PA 2 campaigns",
    oneLine: "DFT gauge to measurement-plan direct, SSPC PA 2 non-conformance at point of measurement, daily reports 2-4 hours.",
    region: "US Gulf Coast",
  },
  {
    slug: "construction-quality-assurance",
    industry: "Construction Quality Assurance",
    title: "EPC QA/QC contractor — large refinery construction project",
    oneLine: "ITP execution real-time, vendor surveillance visible, MC data-pack assembly days not weeks.",
    region: "US Gulf Coast + global vendor surveillance",
  },
  {
    slug: "geotechnical-engineering",
    industry: "Geotechnical Engineering",
    title: "Site investigation firm — infrastructure project, AGS data format",
    oneLine: "AGS submission 3-5 days down to 1-2 hours, single sample identifier through lifecycle, procedure-currency in place.",
    region: "US / UK dual-office",
  },
  {
    slug: "environmental-testing-labs",
    industry: "Environmental Testing Laboratories",
    title: "ISO 17025 env lab — EPA SW-846, multi-matrix samples",
    oneLine: "EDD rejection rate 8% down to under 1%, batch QC exception-based, accreditation prep 3 weeks to 5 days.",
    region: "US Mid-Atlantic + Southeast",
  },
  {
    slug: "oilfield-services",
    industry: "Oilfield Services & Wellsite Inspection",
    title: "Drilling / wellsite inspection co — API 5C5 OCTG, API RP 53 BOP testing",
    oneLine: "Field-ticket-to-invoice 14-21 days to 2-4 days, electronic OCTG delivery native, basin-tested field client.",
    region: "US Permian + Eagle Ford",
  },
];

export default function CaseStudiesHub() {
  const url = "https://atlantisndt.com/case-studies";

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${url}#hub`,
    "name": "Atlantis NDT ERP — Customer Case Studies",
    "description": "12 anonymized customer case studies covering Atlantis NDT ERP implementations across inspection, calibration, welding, marine, pipeline, aerospace, metrology, coatings, construction, geotechnical, environmental, and oilfield service companies.",
    "url": url,
    "hasPart": cases.map((c) => ({
      "@type": "Article",
      "name": c.title,
      "url": `${url}/${c.slug}-erp-implementation`,
      "description": c.oneLine,
      "articleSection": c.industry,
    })),
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      <SEOHead
        title="ERP Implementation Case Studies — Inspection, Calibration, Welding, Aerospace | Atlantis NDT"
        description="12 anonymized customer case studies covering Atlantis NDT ERP implementations across NDT inspection, calibration labs, welding fabrication, marine survey, pipeline integrity, aerospace, metrology, coatings, construction QA, geotechnical, environmental, and oilfield service companies."
        keywords="ERP case studies, inspection ERP case study, NDT ERP customer story, calibration lab ERP implementation, welding fabrication ERP, aerospace NDT ERP, pipeline integrity ERP, Atlantis NDT ERP customer stories"
        canonical={url}
        structuredData={collectionSchema}
      />
      <Breadcrumbs />

      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white pt-24 pb-14">
        <div className="container mx-auto max-w-6xl px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-5 text-xs uppercase tracking-wider">
              <Building2 className="w-4 h-4" />
              <span>Atlantis NDT ERP — Customer Case Studies</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
              How inspection and service companies actually deploy Atlantis NDT ERP
            </h1>
            <p className="text-lg text-blue-100 max-w-3xl mb-7">
              Twelve customer case studies — one per industry — covering the specific pain points,
              configuration decisions, parallel-run discoveries, quantified outcomes, and lessons
              learned (including what did not go perfectly) from real implementations. All
              anonymized under MNDA; metrics presented as ranges.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="px-5 py-2.5 bg-white text-blue-900 font-semibold rounded-lg hover:bg-blue-50 text-sm"
              >
                Discuss your implementation
              </Link>
              <a
                href="mailto:info@atlantisndt.com?subject=Atlantis NDT ERP — Case study questions"
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
          <h2 className="text-2xl font-bold mb-2">12 case studies — one per industry</h2>
          <p className="text-slate-600 mb-8 max-w-3xl">
            Each case is an anonymized account of an Atlantis NDT ERP implementation, written for
            buyers evaluating the platform. Customer identities and specific financial figures are
            withheld under MNDA. Implementation timelines and quantified outcomes are presented as
            ranges; individual results vary by site, scope, and data quality.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            {cases.map((c) => (
              <Link
                key={c.slug}
                to={`/case-studies/${c.slug}-erp-implementation`}
                className="group bg-white border border-slate-200 rounded-xl p-5 hover:border-blue-400 hover:shadow-md transition"
              >
                <div className="text-xs uppercase tracking-wide text-blue-700 font-semibold mb-2">
                  {c.industry}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug group-hover:text-blue-700 transition">
                  {c.title}
                </h3>
                <p className="text-sm text-slate-600 mb-3 leading-relaxed">{c.oneLine}</p>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-500">{c.region}</span>
                  <span className="inline-flex items-center gap-1 text-blue-700 font-medium">
                    Read case study <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CustomerLogosBlock
        title="Anonymized customer industries we serve"
        subtitle="Logos representative of customer industries; specific customer names omitted under MNDA."
      />

      <section className="py-12 bg-slate-100">
        <div className="container mx-auto max-w-6xl px-6">
          <h2 className="text-xl font-semibold mb-4">Explore Atlantis NDT ERP further</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 text-sm">
            <Link to="/ndt-erp-solution" className="text-blue-700 hover:underline">
              Full Atlantis NDT ERP suite →
            </Link>
            <Link to="/erp-modules" className="text-blue-700 hover:underline">
              Browse ERP modules →
            </Link>
            <Link to="/erp-industries" className="text-blue-700 hover:underline">
              All ERP industries →
            </Link>
            <Link to="/ndt-erp-vs-generic-erp" className="text-blue-700 hover:underline">
              NDT ERP vs generic ERP →
            </Link>
            <Link to="/ndt-erp-implementation-timeline" className="text-blue-700 hover:underline">
              ERP implementation timeline →
            </Link>
            <Link to="/ndt-erp-roi-calculator" className="text-blue-700 hover:underline">
              ERP ROI calculator →
            </Link>
          </div>
        </div>
      </section>

      <ContactDetails />
    </div>
  );
}
