// 2026-08-07 — Shared template for standalone NDT method/level course pages
// (ASNT Level 2 UT online, PAUT Level 2, TOFD, ET Level 2, RT Level 2 film
// interpretation, MT certification, PT Level 1, NDT Level 2 recert/renewal).
//
// These target real buyer-intent search terms this session's research
// identified as a gap: the methods previously only existed as cards inside
// /training, not as standalone ranking URLs. Atlantis genuinely runs this
// training (Level I/II/III, per SNT-TC-1A / NAS 410, online + on-site +
// hybrid) — unlike the API 510/570/653 exam-prep pages, this is a real
// product line, so the Course schema here is honest.
//
// One data object per page (see src/pages/{slug}.tsx) is passed into this
// component, which renders the full page: SEOHead (title/description/canonical
// + Course + FAQPage schema), hero, stats, overview, curriculum, certification
// pathway, delivery formats, recertification note, FAQ accordion,
// EnquiryCaptureForm (variant="training"), related links, and ContactDetails.
import { Navigation } from "@/components/Navigation";
import { SEOHead, FaqItem } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import EnquiryCaptureForm from "@/components/EnquiryCaptureForm";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle, Award, Clock, Globe, RefreshCw } from "lucide-react";
import { useState } from "react";
import { buildTechArticleSchema } from "@/data/author-schema";

export interface MethodCourseStat {
  label: string;
  value: string;
}

export interface MethodCourseFaq {
  question: string;
  answer: string;
}

export interface MethodCoursePathwayStep {
  title: string;
  detail: string;
}

export interface MethodCourseRelatedLink {
  to: string;
  label: string;
  desc: string;
}

export interface MethodCourseData {
  /** URL slug without leading slash, e.g. "asnt-level-2-ut-online-course" */
  slug: string;
  seoTitle: string;
  seoDescription: string;
  keywords: string;
  h1: string;
  badgeLabel: string;
  heroSubtitle: string;
  methodName: string;
  levelLabel: string;
  hoursLabel: string;
  stats: MethodCourseStat[];
  overview: string[];
  highlightTitle: string;
  highlightBody: string;
  curriculum: string[];
  pathwaySteps: MethodCoursePathwayStep[];
  faqs: MethodCourseFaq[];
  relatedLinks: MethodCourseRelatedLink[];
  /** Course schema */
  courseName: string;
  courseDescription: string;
  courseTeaches: string;
  coursePrerequisites: string;
  educationalCredentialAwarded: string;
  educationalLevel: string;
  durationISO?: string;
  /** TechArticle schema */
  articleHeadline: string;
  articleDescription: string;
  articleSection: string;
  articleKeywords: string;
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <details
      className="border border-slate-200 rounded-xl overflow-hidden group"
      open={open}
      onClick={(e) => {
        e.preventDefault();
        setOpen(!open);
      }}
    >
      <summary className="p-5 font-semibold text-slate-800 cursor-pointer hover:bg-slate-50 list-none flex items-center justify-between">
        {q}
        <span className="text-blue-700 text-xl ml-4 flex-shrink-0">{open ? "−" : "+"}</span>
      </summary>
      <div className="px-5 pb-5 text-slate-600 leading-relaxed border-t border-slate-100">{a}</div>
    </details>
  );
}

const DELIVERY_FORMATS = [
  {
    icon: Globe,
    title: "Online Theory",
    desc: "Self-paced online theory modules covering principles, code references and interpretation — study on your own schedule with instructor support on request.",
  },
  {
    icon: Award,
    title: "On-Site Practical",
    desc: "Hands-on equipment time and supervised practical assessment delivered on-site, since equipment-based methods cannot be certified from theory alone.",
  },
  {
    icon: RefreshCw,
    title: "Blended / Hybrid",
    desc: "Online theory paired with a compressed on-site practical block — the most common format for working technicians who cannot take extended time off the job.",
  },
];

export default function MethodCoursePage({ data }: { data: MethodCourseData }) {
  const canonical = `https://atlantisndt.com/${data.slug}`;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://atlantisndt.com/" },
      { "@type": "ListItem", "position": 2, "name": "Training", "item": "https://atlantisndt.com/training" },
      { "@type": "ListItem", "position": 3, "name": data.h1, "item": canonical },
    ],
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      buildTechArticleSchema({
        url: canonical,
        headline: data.articleHeadline,
        description: data.articleDescription,
        datePublished: "2026-08-07",
        dateModified: "2026-08-07",
        section: data.articleSection,
        keywords: data.articleKeywords,
      }),
      breadcrumbSchema,
    ],
  };

  const faqItems: FaqItem[] = data.faqs.map((f) => ({ question: f.question, answer: f.answer }));

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      <SEOHead
        title={data.seoTitle}
        description={data.seoDescription}
        keywords={data.keywords}
        canonical={canonical}
        structuredData={structuredData}
        faq={faqItems}
        course={{
          name: data.courseName,
          description: data.courseDescription,
          provider: "Atlantis NDT",
          url: canonical,
          deliveryMode: ["online", "onsite", "blended"],
          durationISO: data.durationISO,
          coursePrerequisites: data.coursePrerequisites,
          educationalCredentialAwarded: data.educationalCredentialAwarded,
          educationalLevel: data.educationalLevel,
        }}
      />
      <Breadcrumbs />

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-800 to-slate-900 text-white pt-24 pb-16">
        <div className="container mx-auto max-w-6xl px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex items-center gap-2 text-blue-200 mb-4">
              <Award className="w-5 h-5" />
              <span>{data.badgeLabel}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{data.h1}</h1>
            <p className="text-xl text-blue-100 max-w-3xl mb-8">{data.heroSubtitle}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-block bg-white text-blue-800 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition text-center"
              >
                Book My Free Pathway Call
              </Link>
              <Link
                to="/training"
                className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition justify-center"
              >
                View All Training
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {data.stats.map((s) => (
              <div key={s.label}>
                <div className="text-3xl md:text-4xl font-bold text-blue-800 mb-2">{s.value}</div>
                <div className="text-slate-600">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold mb-6">What Is the {data.h1}?</h2>
              {data.overview.map((p, i) => (
                <p key={i} className="text-slate-600 mb-4 text-lg">
                  {p}
                </p>
              ))}
            </div>
            <div>
              <div className="bg-blue-50 border-l-4 border-blue-600 p-5 rounded-r-lg">
                <h3 className="font-bold text-blue-900 mb-2">{data.highlightTitle}</h3>
                <p className="text-blue-900/80 text-sm">{data.highlightBody}</p>
              </div>
              <div className="mt-6 bg-white rounded-lg border border-slate-200 p-5">
                <h3 className="font-semibold text-slate-800 mb-2 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-blue-700" /> Typical Duration
                </h3>
                <p className="text-slate-600 text-sm">{data.hoursLabel}</p>
                <p className="text-slate-500 text-xs mt-2">
                  Hours vary by candidate background and certifying scheme — figures reflect SNT-TC-1A recommended
                  training-hour guidance for {data.levelLabel}.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold text-center mb-4">What This Course Covers</h2>
          <p className="text-center text-slate-600 mb-10 max-w-2xl mx-auto">
            Practical, exam-relevant curriculum built around {data.methodName} as it is actually applied in the field.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {data.curriculum.map((topic) => (
              <div key={topic} className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span>{topic}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certification Pathway */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold text-center mb-4">Certification Pathway</h2>
          <p className="text-center text-slate-600 mb-10 max-w-2xl mx-auto">
            The route from enrollment to a documented {data.levelLabel} certification, following ASNT SNT-TC-1A and
            NAS 410-aligned practice.
          </p>
          <div className="space-y-4 max-w-3xl mx-auto">
            {data.pathwaySteps.map((step, i) => (
              <div key={step.title} className="flex gap-4 bg-white p-5 rounded-lg border border-slate-200">
                <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-700 text-white flex items-center justify-center font-bold">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800">{step.title}</h3>
                  <p className="text-slate-600 text-sm mt-1">{step.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Formats */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold text-center mb-4">Delivery Formats</h2>
          <p className="text-center text-slate-600 mb-12">
            Online + on-site + hybrid models supported — choose the format that fits your schedule and where you're
            based.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {DELIVERY_FORMATS.map((fmt) => (
              <div key={fmt.title} className="bg-slate-50 rounded-xl border-t-4 border-t-blue-600 p-6">
                <fmt.icon className="w-8 h-8 text-blue-700 mb-3" />
                <h3 className="font-bold text-lg mb-2">{fmt.title}</h3>
                <p className="text-slate-600 text-sm">{fmt.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recertification note */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Already Certified? Plan Your Renewal Early</h2>
          <p className="text-slate-600 mb-6">
            NDT certifications run on a 5-year SNT-TC-1A or CP-189 cycle, with an annual vision test (near-vision
            plus colour-vision screening) required separately and on a shorter clock than the certification itself.
            If your {data.levelLabel} certification is approaching renewal, see our{" "}
            <Link to="/ndt-level-2-recertification-course" className="text-blue-700 font-semibold underline">
              NDT Level 2 recertification / renewal course
            </Link>
            .
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-4xl px-6">
          <h2 className="text-3xl font-bold mb-8 text-center text-blue-900">
            {data.h1} — Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {data.faqs.map((faq, i) => (
              <FAQItem key={i} q={faq.question} a={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry capture */}
      <EnquiryCaptureForm variant="training" />

      {/* Related links */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold text-center mb-4">Related Training & Resources</h2>
          <p className="text-center text-slate-600 mb-10">
            Explore the full Atlantis NDT training catalogue and adjacent certification pathways.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {data.relatedLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="bg-white p-4 rounded-lg border border-slate-200 hover:border-blue-300 hover:shadow-md transition block"
              >
                <h3 className="font-semibold text-blue-700 mb-1">{link.label}</h3>
                <p className="text-sm text-slate-500">{link.desc}</p>
              </Link>
            ))}
            <Link
              to="/corporate-ndt-training"
              className="bg-white p-4 rounded-lg border border-slate-200 hover:border-blue-300 hover:shadow-md transition block"
            >
              <h3 className="font-semibold text-blue-700 mb-1">Corporate / Group NDT Training</h3>
              <p className="text-sm text-slate-500">
                Bring this course in-house for your inspection team under a corporate training contract.
              </p>
            </Link>
            <Link
              to="/training"
              className="bg-white p-4 rounded-lg border border-slate-200 hover:border-blue-300 hover:shadow-md transition block"
            >
              <h3 className="font-semibold text-blue-700 mb-1">All NDT Training Courses</h3>
              <p className="text-sm text-slate-500">
                Browse the full Level I/II/III catalogue across UT, RT, MT, PT, VT, ET, PAUT and TOFD.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-800 to-slate-900 text-white text-center">
        <div className="container mx-auto max-w-4xl px-6">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your {data.levelLabel} Pathway?</h2>
          <p className="text-blue-100 mb-8 text-lg">
            Get a free, personalized training-pathway consultation — wherever you're based.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-block bg-white text-blue-800 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition"
            >
              Request Free Consultation
            </Link>
            <Link
              to="/training"
              className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition"
            >
              View All Training
            </Link>
            <Link
              to="/corporate-ndt-training"
              className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition"
            >
              Corporate Group Training
            </Link>
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <ContactDetails />
    </div>
  );
}
