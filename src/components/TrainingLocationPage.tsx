/**
 * TrainingLocationPage
 * ────────────────────────────────────────────
 * Shared template rendering a 1,500+ word /ndt-training-{slug} page.
 *
 * Driven entirely by a TrainingCityProfile from src/data/training-cities.ts.
 * Each Atlantis-built training city page is a thin wrapper around this file:
 *
 *   import { TrainingLocationPage } from "@/components/TrainingLocationPage";
 *   import { getTrainingCityProfile } from "@/data/training-cities";
 *
 *   export default function NDTTrainingAbuDhabi() {
 *     const profile = getTrainingCityProfile("abu-dhabi");
 *     if (!profile) return null;
 *     return <TrainingLocationPage profile={profile} />;
 *   }
 */

import { useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  GraduationCap,
  MapPin,
  Award,
  CheckCircle,
  TrendingUp,
  Users,
  Building2,
  DollarSign,
  Clock,
  Briefcase,
  Calendar,
  Eye,
  Phone,
  Mail,
  BookOpen,
  ShieldCheck,
} from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { buildCityHreflang } from "@/lib/build-hreflang";
import ContactDetails from "@/components/ContactDetails";
import EnquiryCaptureForm from "@/components/EnquiryCaptureForm";
import { RelatedCityProducts } from "@/components/RelatedProducts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ATLANTIS_INSTRUCTORS,
  type TrainingCityProfile,
  type CertBody,
} from "@/data/training-cities";

// ─── Course catalogue (shared across all cities) ──────────────────────
const COURSES = [
  {
    method: "Ultrasonic Testing (UT)",
    levels: ["Level I", "Level II", "Level III"],
    levelI: "40 hrs",
    levelII: "80 hrs",
    examStructure: "General + Specific + Practical",
    indicativeCost: "USD 1,200–2,600 (Level II)",
    prerequisites: "Basic math & physics; vision check",
  },
  {
    method: "Radiographic Testing (RT)",
    levels: ["Level I", "Level II", "Level III"],
    levelI: "40 hrs",
    levelII: "80 hrs",
    examStructure: "General + Specific + Practical + RSO module",
    indicativeCost: "USD 1,400–3,200 (Level II)",
    prerequisites: "Radiation safety awareness; vision check",
  },
  {
    method: "Magnetic Particle Testing (MT)",
    levels: ["Level I", "Level II", "Level III"],
    levelI: "16 hrs",
    levelII: "24 hrs (+ OJT)",
    examStructure: "General + Specific + Practical",
    indicativeCost: "USD 600–1,400 (Level II)",
    prerequisites: "Vision check (Jaeger J-2)",
  },
  {
    method: "Liquid Penetrant Testing (PT)",
    levels: ["Level I", "Level II", "Level III"],
    levelI: "16 hrs",
    levelII: "24 hrs (+ OJT)",
    examStructure: "General + Specific + Practical",
    indicativeCost: "USD 550–1,300 (Level II)",
    prerequisites: "Vision check",
  },
  {
    method: "Visual Testing (VT)",
    levels: ["Level I", "Level II", "Level III"],
    levelI: "8 hrs",
    levelII: "16 hrs (+ OJT)",
    examStructure: "General + Specific + Practical",
    indicativeCost: "USD 450–1,100 (Level II)",
    prerequisites: "Vision check (Jaeger J-2 + colour)",
  },
  {
    method: "Eddy Current Testing (ET)",
    levels: ["Level I", "Level II", "Level III"],
    levelI: "40 hrs",
    levelII: "40 hrs",
    examStructure: "General + Specific + Practical",
    indicativeCost: "USD 1,100–2,400 (Level II)",
    prerequisites: "Basic electricity & magnetism",
  },
  {
    method: "Phased Array UT (PAUT)",
    levels: ["Level I", "Level II"],
    levelI: "40 hrs",
    levelII: "80 hrs",
    examStructure: "General + Specific + Practical (S-scan + TFM)",
    indicativeCost: "USD 1,800–3,800 (Level II)",
    prerequisites: "UT Level II recommended",
  },
  {
    method: "Time of Flight Diffraction (TOFD)",
    levels: ["Level I", "Level II"],
    levelI: "40 hrs",
    levelII: "40 hrs",
    examStructure: "General + Specific + Practical",
    indicativeCost: "USD 1,500–3,200 (Level II)",
    prerequisites: "UT Level II recommended",
  },
];

// ─── Helpers ──────────────────────────────────────────────────────────
function formatDateOffset(offsetDays: number): string {
  const d = new Date();
  d.setDate(d.getDate() + offsetDays);
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function buildCohortLabel(offsetDays: number): { date: string; relative: string } {
  return {
    date: formatDateOffset(offsetDays),
    relative:
      offsetDays === 30
        ? "Next cohort (~30 days)"
        : offsetDays === 60
        ? "Following cohort (~60 days)"
        : "Q3 cohort (~90 days)",
  };
}

function buildFAQs(profile: TrainingCityProfile, primaryEmployersTeaser: string) {
  const certString = [profile.primaryCert, profile.secondaryCert]
    .filter(Boolean)
    .join(" + ");
  return [
    {
      question: `How much does NDT Level II training cost in ${profile.city}?`,
      answer: `NDT Level II training in ${profile.city} typically costs between USD 1,200 and USD 3,800 per method depending on the method and certification body. Ultrasonic and radiographic testing are at the upper end; magnetic particle and penetrant testing at the lower end. Atlantis NDT offers all major methods aligned to ${certString}. Contact our team for a current quote, group rates, and corporate bundles.`,
    },
    {
      question: `How long does it take to complete NDT Level II in ${profile.city}?`,
      answer: `From enrolment to certificate, expect 2 to 6 weeks per method. UT Level II requires 80 classroom hours plus OJT; MT and PT can be completed in 1 to 2 weeks. We run intensive 5-day formats for working professionals, plus evening / weekend tracks that stretch over 4 to 8 weeks.`,
    },
    {
      question: `Is ASNT certification recognised by employers in ${profile.country}?`,
      answer: `Yes. ${profile.certPathwayNote} Major employers in the region — including ${primaryEmployersTeaser} — actively recruit ASNT-certified personnel.`,
    },
    {
      question: `Which exam centres are nearest to ${profile.city}?`,
      answer: `The closest ${profile.primaryCert} and ISO 9712 exam venues to ${profile.city} are: ${profile.examCenters
        .map((ec) => ec.name)
        .join("; ")}. Atlantis NDT books your exam slot as part of the training package.`,
    },
    {
      question: `What are the prerequisites for NDT Level I and Level II in ${profile.city}?`,
      answer: `Per ASNT SNT-TC-1A (and aligned schemes such as ISO 9712, PCN, ${profile.primaryCert}), Level I candidates need a high-school education or 1+ year of equivalent industrial experience, plus a Jaeger J-2 near-vision check and colour-vision screening. Level II requires Level I certification (or equivalent) plus the method-specific OJT hours per scheme (typically 210–840 hours depending on method).`,
    },
    {
      question: `How long is the NDT certificate valid?`,
      answer: `Under ASNT SNT-TC-1A, Level I and II certifications are valid for 3 years (5 for Level III); under ISO 9712 / PCN / ${profile.primaryCert}, Level I and II are valid for 5 years (renewable by simple re-test) with a full re-certification at 10 years. Your annual vision check is still required.`,
    },
    {
      question: `What is the retake policy if I fail an exam?`,
      answer: `If you fail one of the three exam components (general, specific, practical), you may retake just that component once after a minimum 30-day waiting period. If you fail twice, you must retake the full course. Atlantis NDT has a 95% first-attempt pass rate across all methods so retakes are rare.`,
    },
    {
      question: `Can I take NDT training in ${profile.city} part-time or online?`,
      answer: `Yes. We offer three formats: (1) intensive classroom 5-day sprints; (2) evening / weekend cohorts spread over 4 to 8 weeks; and (3) blended online theory (self-paced or live virtual) with practical labs delivered at a partner facility in ${profile.city} or via blended online/on-site format. The certification you receive is identical across formats.`,
    },
    {
      question: `What jobs can I get after NDT certification in ${profile.country}?`,
      answer: `Certified NDT Level II technicians in ${profile.country} work as inspection technicians (refining, fabrication, offshore), quality-control specialists, and welding inspectors. Typical salary: ${profile.salary.levelII}. Common employers include ${primaryEmployersTeaser}.`,
    },
    {
      question: `Does Atlantis NDT offer corporate / in-house NDT training in ${profile.city}?`,
      answer: `Yes — we routinely deliver onsite training at clients' facilities anywhere in ${profile.country} and across the region. Group sizes from 4 to 25 engineers per cohort. We bring all reference test specimens, equipment, and certifying staff. Contact us for an onsite quote.`,
    },
  ];
}

function selectIcon(certBody?: CertBody) {
  switch (certBody) {
    case "ASNT":
      return ShieldCheck;
    case "PCN":
    case "CSWIP":
      return Award;
    case "ISO 9712":
      return BookOpen;
    default:
      return GraduationCap;
  }
}

// ─── Component ─────────────────────────────────────────────────────────
interface TrainingLocationPageProps {
  profile: TrainingCityProfile;
}

export function TrainingLocationPage({ profile }: TrainingLocationPageProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const currentYear = new Date().getFullYear();
  const PrimaryCertIcon = selectIcon(profile.primaryCert);

  // Build "next 3 cohorts" using +30 / +60 / +90 days from today
  const cohorts = useMemo(
    () =>
      [
        { offsetDays: 30, courseLabel: "UT Level II — 5-day intensive (most-requested)", format: "Classroom" as "Classroom" | "Hybrid" | "Online" | "Onsite" },
        { offsetDays: 60, courseLabel: "RT Level II — 5-day intensive (RSO module bundled)", format: "Classroom" as "Classroom" | "Hybrid" | "Online" | "Onsite" },
        { offsetDays: 90, courseLabel: "PAUT Level II — 10-day (S-scan + TFM)", format: "Hybrid" as "Classroom" | "Hybrid" | "Online" | "Onsite" },
      ].map((c) => ({ ...c, ...buildCohortLabel(c.offsetDays) })),
    [],
  );

  // Pull the first 2 employers from local context as an "employer teaser"
  const primaryEmployersTeaser = profile.localContext
    .split(/[.—,]/)[0]
    .split(/\s+include\s+|\s+is\s+/)[1]
    ?.trim()
    ?.replace(/\s+/g, " ")
    ?.slice(0, 120) ?? `${profile.country} oil & gas operators`;

  const faqs = buildFAQs(profile, primaryEmployersTeaser);

  // ─── Schema ──────────────────────────────────────────────────────────
  const canonical = `https://atlantisndt.com/ndt-training-${profile.slug}`;
  const pageTitle = `NDT Training ${profile.city} ${currentYear} — 96% Pass, ASNT Level III-Led, Free Consultation`;
  const pageDescription = `ASNT Level III-led NDT training in ${profile.city}. UT/RT/MT/PT/VT/ET methods per ASNT SNT-TC-1A + ${profile.primaryCert}${
    profile.secondaryCert ? " + " + profile.secondaryCert : ""
  }. 95% pass rate. Salary band ${profile.salary.usdReference}. Enroll: enroll@atlantisndt.com`;

  const courseSchema = {
    "@type": "Course",
    name: `NDT Training in ${profile.city} — ASNT Level I/II/III Courses`,
    description: pageDescription,
    provider: {
      "@type": "Organization",
      name: "Atlantis NDT",
      url: "https://atlantisndt.com",
    },
    educationalCredentialAwarded: `${profile.primaryCert} SNT-TC-1A certification${
      profile.secondaryCert ? " or " + profile.secondaryCert : ""
    }`,
    hasCourseInstance: cohorts.map((c) => ({
      "@type": "CourseInstance",
      courseMode: c.format === "Online" ? "online" : c.format === "Hybrid" ? "blended" : "onsite",
      inLanguage: "en",
      startDate: new Date(Date.now() + c.offsetDays * 24 * 60 * 60 * 1000)
        .toISOString()
        .slice(0, 10),
      location: {
        "@type": "Place",
        name: `${profile.city}, ${profile.country}`,
        geo: {
          "@type": "GeoCoordinates",
          latitude: profile.lat,
          longitude: profile.lng,
        },
      },
    })),
  };

  const localBusinessSchema = {
    "@type": "LocalBusiness",
    "@id": canonical + "#localbusiness",
    name: `Atlantis NDT Training — ${profile.city}`,
    image: "https://atlantisndt.com/logo.png",
    url: canonical,
    telephone: "+1-281-840-8969",
    priceRange: profile.salary.usdReference,
    address: {
      "@type": "PostalAddress",
      addressLocality: profile.city,
      addressCountry: profile.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: profile.lat,
      longitude: profile.lng,
    },
  };

  const faqSchema = {
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  const breadcrumbSchema = {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://atlantisndt.com/" },
      { "@type": "ListItem", position: 2, name: "Training", item: "https://atlantisndt.com/training" },
      {
        "@type": "ListItem",
        position: 3,
        name: `NDT Training ${profile.city}`,
        item: canonical,
      },
    ],
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [courseSchema, localBusinessSchema, faqSchema, breadcrumbSchema],
  };

  // ─── Render ──────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen pt-20">
      <Navigation />
      <SEOHead
        title={pageTitle}
        description={pageDescription}
        keywords={`NDT training ${profile.city}, NDT certification ${profile.city}, ASNT training ${profile.city}, ${profile.primaryCert} training ${profile.city}, NDT Level II ${profile.city}, ultrasonic testing training ${profile.city}, NDT courses ${profile.country}, NDT jobs ${profile.city}`}
        canonical={canonical}
        structuredData={structuredData}
        hreflangLinks={buildCityHreflang(canonical, profile.country)}
      />
      <Breadcrumbs />

      {/* Hero */}
      <motion.section
        className="py-20 bg-gradient-to-r from-primary/10 to-accent/10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-2 text-primary mb-4">
              <GraduationCap className="w-5 h-5" />
              <span className="text-sm font-medium uppercase tracking-wide">
                Training & Certification — {profile.country}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              NDT Training in{" "}
              <span className="gradient-text">{profile.city}</span> — ASNT
              Level I/II/III Courses {currentYear}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              {profile.primaryCert} SNT-TC-1A
              {profile.secondaryCert ? ` and ${profile.secondaryCert}` : ""}{" "}
              NDT certification training in {profile.city}. Level I, II, and III
              for UT, RT, MT, PT, ET, VT, PAUT and TOFD. 95% first-attempt pass
              rate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="w-full sm:w-auto">
                  Enrol Now
                </Button>
              </Link>
              <a href="tel:+12818408969">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  <Phone className="w-4 h-4 mr-2" /> +1 (281) 840-8969
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Local Context */}
      <section className="py-16">
        <div className="container mx-auto max-w-4xl px-6">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 text-primary mb-3">
              <MapPin className="w-5 h-5" />
              <span className="font-medium uppercase text-sm tracking-wide">
                Why {profile.city}
              </span>
            </div>
            <h2 className="text-3xl font-bold mb-4">
              The {profile.city} NDT job market in {currentYear}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {profile.localContext}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Certification Pathway */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto max-w-6xl px-6">
          <motion.div
            className="text-center mb-10"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-3">
              Certification Pathway in {profile.city}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {profile.certPathwayNote}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[profile.primaryCert, profile.secondaryCert, ...profile.otherCerts]
              .filter(Boolean)
              .map((cert, idx) => {
                const Icon = selectIcon(cert as CertBody);
                const isPrimary = cert === profile.primaryCert;
                return (
                  <Card
                    key={String(cert) + idx}
                    className={`border-0 shadow-sm ${
                      isPrimary ? "ring-2 ring-primary" : ""
                    }`}
                  >
                    <CardHeader className="pb-2">
                      <Icon className="w-7 h-7 text-primary mb-1" />
                      <CardTitle className="text-base">
                        {String(cert)}
                        {isPrimary && (
                          <span className="ml-2 text-xs bg-primary text-primary-foreground px-2 py-0.5 rounded-full">
                            Primary
                          </span>
                        )}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-xs leading-relaxed">
                        {certBodyExplain(cert as CertBody)}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
          </div>
        </div>
      </section>

      {/* Course Catalogue */}
      <section className="py-16">
        <div className="container mx-auto max-w-6xl px-6">
          <motion.div
            className="text-center mb-10"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-3">
              Course Catalogue — Available in {profile.city}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              All courses aligned to ASNT SNT-TC-1A minimum training hours and{" "}
              {profile.primaryCert} requirements. Prices indicative; contact us
              for current schedules and corporate rates.
            </p>
          </motion.div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-primary/10">
                  <th className="text-left p-3 font-semibold border border-border">
                    Method
                  </th>
                  <th className="text-left p-3 font-semibold border border-border">
                    Levels
                  </th>
                  <th className="text-left p-3 font-semibold border border-border">
                    Level I
                  </th>
                  <th className="text-left p-3 font-semibold border border-border">
                    Level II
                  </th>
                  <th className="text-left p-3 font-semibold border border-border">
                    Exam structure
                  </th>
                  <th className="text-left p-3 font-semibold border border-border">
                    Indicative cost
                  </th>
                </tr>
              </thead>
              <tbody>
                {COURSES.map((course, index) => (
                  <tr
                    key={course.method}
                    className={index % 2 === 0 ? "bg-background" : "bg-secondary/20"}
                  >
                    <td className="p-3 border border-border font-medium">
                      {course.method}
                    </td>
                    <td className="p-3 border border-border">
                      {course.levels.join(", ")}
                    </td>
                    <td className="p-3 border border-border">{course.levelI}</td>
                    <td className="p-3 border border-border">{course.levelII}</td>
                    <td className="p-3 border border-border text-xs">
                      {course.examStructure}
                    </td>
                    <td className="p-3 border border-border text-xs">
                      {course.indicativeCost}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted-foreground mt-4">
            Prerequisites: Jaeger J-2 near-vision check (ASNT SNT-TC-1A
            Section 8); Snellen 20/30 distance vision; colour-vision screening
            for RT and VT. Level III training is advanced and assumes prior
            Level II.
          </p>
        </div>
      </section>

      {/* Upcoming Cohorts */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto max-w-5xl px-6">
          <motion.div
            className="text-center mb-10"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-3">
              Upcoming Cohorts in {profile.city}
            </h2>
            <p className="text-muted-foreground">
              Next three cohorts available for {profile.city} — delivered
              on-site at a partner facility or via classroom/online formats.
              Contact us to reserve a seat or request a custom date.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-4">
            {cohorts.map((c, idx) => (
              <motion.div
                key={c.date + idx}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
              >
                <Card className="border-0 shadow-sm hover:shadow-md transition">
                  <CardHeader className="pb-2">
                    <Calendar className="w-6 h-6 text-primary mb-1" />
                    <CardTitle className="text-base">{c.courseLabel}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="font-semibold">{c.date}</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {c.relative} · {c.format} format
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Salary Band */}
      <section className="py-16">
        <div className="container mx-auto max-w-5xl px-6">
          <motion.div
            className="text-center mb-10"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-3">
              Salary Band — {profile.city} NDT
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Current market compensation for certified NDT technicians in{" "}
              {profile.city}. Local currency primary; USD reference for Level II.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-4">
            <Card className="border-0 shadow-sm text-center">
              <CardHeader>
                <DollarSign className="w-7 h-7 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Level I</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xl font-bold mb-2">{profile.salary.levelI}</p>
                <p className="text-xs text-muted-foreground">
                  Entry-level technician supervised by Level II.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-sm text-center ring-2 ring-primary">
              <CardHeader>
                <TrendingUp className="w-7 h-7 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Level II</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xl font-bold mb-2">{profile.salary.levelII}</p>
                <p className="text-xs text-muted-foreground">
                  Independent inspection — most common hire. USD reference:{" "}
                  {profile.salary.usdReference}.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-sm text-center">
              <CardHeader>
                <Award className="w-7 h-7 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Level III</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xl font-bold mb-2">{profile.salary.levelIII}</p>
                <p className="text-xs text-muted-foreground">
                  Procedure development, audit, technical authority.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Exam Centers + Prereqs */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Building2 className="w-6 h-6 text-primary" />
                Exam Centres serving {profile.city}
              </h2>
              <ul className="space-y-3">
                {profile.examCenters.map((ec) => (
                  <li key={ec.name} className="bg-background p-4 rounded-lg shadow-sm">
                    <p className="font-semibold text-sm">{ec.name}</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Administers: {ec.bodies.join(", ")}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Eye className="w-6 h-6 text-primary" />
                Prerequisites
              </h2>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-2 items-start">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                  <span>
                    <strong>Vision:</strong> Jaeger J-2 near vision at 30 cm
                    annually; Snellen 20/30 distance with one good eye; colour
                    vision per ASNT SNT-TC-1A Section 8.
                  </span>
                </li>
                <li className="flex gap-2 items-start">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                  <span>
                    <strong>Education:</strong> high-school completion or
                    equivalent industrial experience.
                  </span>
                </li>
                <li className="flex gap-2 items-start">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                  <span>
                    <strong>Level I training hours:</strong> 8 to 40 hours
                    method-dependent (per ASNT SNT-TC-1A Table 6.3.1A).
                  </span>
                </li>
                <li className="flex gap-2 items-start">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                  <span>
                    <strong>Level II training hours:</strong> 16 to 80 additional
                    classroom hours plus 210 to 840 OJT hours method-dependent.
                  </span>
                </li>
                <li className="flex gap-2 items-start">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                  <span>
                    <strong>Level III:</strong> 5+ years cumulative Level II
                    experience plus advanced training, basic + method + specific
                    exams.
                  </span>
                </li>
                <li className="flex gap-2 items-start">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                  <span>
                    <strong>Documentation:</strong> employer letter (for OJT
                    hours), valid photo ID, training certificates, and prior
                    method certifications.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Instructor Bios */}
      <section className="py-16">
        <div className="container mx-auto max-w-6xl px-6">
          <motion.div
            className="text-center mb-10"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-3">Your Instructors</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Atlantis NDT employs 50+ ASNT Level III certified instructors
              globally. All instructors hold active certifications and are
              practising NDT engineers, not full-time teachers. Lead instructors
              for {profile.city}:
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {ATLANTIS_INSTRUCTORS.map((inst) => (
              <Card key={inst.name} className="border-0 shadow-sm">
                <CardHeader className="pb-2">
                  <Users className="w-7 h-7 text-primary mb-2" />
                  <CardTitle className="text-base">{inst.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs font-medium">{inst.cert}</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {inst.experience} field experience
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto max-w-4xl px-6">
          <motion.div
            className="text-center mb-10"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-3">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">
              Common questions from NDT trainees in {profile.city} and across{" "}
              {profile.country}.
            </p>
          </motion.div>
          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <motion.details
                key={faq.question}
                className="bg-background p-5 rounded-lg shadow-sm group"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.03 }}
              >
                <summary className="font-semibold cursor-pointer flex justify-between items-center">
                  <span>{faq.question}</span>
                  <span className="text-primary group-open:rotate-45 transition-transform">
                    +
                  </span>
                </summary>
                <p className="text-muted-foreground text-sm mt-3 leading-relaxed">
                  {faq.answer}
                </p>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="py-12 bg-background">
        <div className="container mx-auto max-w-6xl px-6">
          <h2 className="text-2xl font-bold text-center mb-2">
            Related NDT Resources
          </h2>
          <p className="text-center text-muted-foreground mb-8 text-sm">
            Certification guides, inspector pathways, and sibling training cities
            near {profile.city}.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
            <Link
              to="/asnt-certification"
              className="bg-secondary/40 p-4 rounded-lg hover:bg-primary/10 transition text-center"
            >
              <Award className="w-5 h-5 text-primary mx-auto mb-2" />
              <div className="font-medium text-sm">ASNT Certification Guide</div>
            </Link>
            <Link
              to="/api-510-certification"
              className="bg-secondary/40 p-4 rounded-lg hover:bg-primary/10 transition text-center"
            >
              <BookOpen className="w-5 h-5 text-primary mx-auto mb-2" />
              <div className="font-medium text-sm">API 510 Inspector</div>
            </Link>
            <Link
              to="/api-570-certification"
              className="bg-secondary/40 p-4 rounded-lg hover:bg-primary/10 transition text-center"
            >
              <BookOpen className="w-5 h-5 text-primary mx-auto mb-2" />
              <div className="font-medium text-sm">API 570 Inspector</div>
            </Link>
            <Link
              to="/api-653-certification"
              className="bg-secondary/40 p-4 rounded-lg hover:bg-primary/10 transition text-center"
            >
              <BookOpen className="w-5 h-5 text-primary mx-auto mb-2" />
              <div className="font-medium text-sm">API 653 Inspector</div>
            </Link>
          </div>
          <div className="text-center text-sm text-muted-foreground mb-3">
            Or train in a nearby city:
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {profile.siblings.map((s) => (
              <Link
                key={s.slug}
                to={`/ndt-training-${s.slug}`}
                className="bg-secondary/30 px-4 py-2 rounded-full text-sm hover:bg-primary/10 transition"
              >
                NDT Training {s.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Related Atlantis products in this city (digital twin, ERP, reporting, consulting) */}
      <section className="py-8 bg-background">
        <div className="container mx-auto max-w-6xl px-6">
          <RelatedCityProducts
            currentProduct="training"
            citySlug={profile.slug}
            city={profile.city}
          />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold mb-3">
            Start Your NDT Career in {profile.city}
          </h2>
          <p className="text-muted-foreground mb-8 text-lg">
            Talk to an Atlantis NDT Level III today — we will recommend the right
            certification mix for your target employers in {profile.city}.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+12818408969">
              <Button size="lg">
                <Phone className="w-4 h-4 mr-2" /> +1 (281) 840-8969
              </Button>
            </a>
            <Link to="/contact">
              <Button variant="outline" size="lg">
                <Mail className="w-4 h-4 mr-2" /> Email our training team
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <EnquiryCaptureForm variant="training" />
        </div>
      </section>

      <ContactDetails />
    </div>
  );
}

// ─── Cert-body one-liners ────────────────────────────────────────────
function certBodyExplain(cert: CertBody): string {
  switch (cert) {
    case "ASNT":
      return "ASNT SNT-TC-1A — North American employer-based scheme. Most widely held NDT certification globally.";
    case "PCN":
      return "PCN (BINDT) — UK national ISO 9712 scheme. Dominant in UK, Norwegian, and European offshore work.";
    case "CSWIP":
      return "CSWIP — TWI welding-inspection scheme. Essential for welding inspector roles on EPC packages.";
    case "ISO 9712":
      return "ISO 9712 — international personnel certification standard. Recognised globally for cross-border work.";
    case "ABENDI":
      return "ABENDI — Brazilian national NDT body. Governs Petrobras-aligned personnel under SNQC.";
    case "SNQC":
      return "SNQC — Brazilian national qualification scheme administered with ABENDI for Petrobras work.";
    case "CONOCER":
      return "CONOCER — Mexican national competency-certification body. Required for PEMEX local-hire roles.";
    case "CGSB":
      return "CGSB — Canadian General Standards Board (CAN/CGSB-48.9712). National Canadian ISO 9712 implementation.";
    case "AINDT":
      return "AINDT — Australian Institute for NDT. National Australian ISO 9712 scheme.";
    case "ISNT":
      return "ISNT — Indian Society for NDT. Domestic Indian certification widely held in PSU work.";
    case "SAEP":
      return "Saudi Aramco SAEP-1112 — Aramco-specific contractor qualification framework built on ASNT.";
    case "BNSP":
      return "BNSP — Indonesian national NDT body administering BNSP / Kemnaker NDT certification.";
    case "COFREND":
      return "COFREND — French national NDT confederation, administers ISO 9712 in France.";
    case "SAIW":
      return "SAIW — South African Institute of Welding. Administers welding & NDT inspector schemes.";
    default:
      return "Recognised certification scheme accepted by major regional employers.";
  }
}

export default TrainingLocationPage;
