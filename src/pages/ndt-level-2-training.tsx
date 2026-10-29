import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import CourseFactsBlock, { courseFactsSchema } from "@/components/CourseFactsBlock";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import RelatedGuidesBlock from "@/components/RelatedGuidesBlock";
import QuickAnswerBox from "@/components/QuickAnswerBox";
import { Link } from "react-router-dom";

import ApprovedTrainingFees from "@/components/ApprovedTrainingFees";
import { CheckCircle, Award, Monitor, Building2, ArrowRight, Briefcase, Globe } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import TrainingEnquiryCTA from "@/components/TrainingEnquiryCTA";
import TrainingGapInbound from "@/components/TrainingGapInbound";
import SNT_HOURS from "@/data/snt-tc-1a-hours.json";

/**
 * /ndt-level-2-training — candidate-facing "how do I get NDT / ASNT Level II
 * certified" page, with a genuinely substantive ASNT 9712 section.
 *
 * WHY THIS PAGE EXISTS: GSC-confirmed queries — "ndt level 2 certification"
 * (7 impr/90d, pos 36.4), "asnt ndt level ii" (9 impr, pos 35.6), and
 * "accp level 2" (13 impr, pos 8.8 — already ranks well elsewhere, so the ASNT 9712
 * pathway here needs to be a genuinely good, standalone section, not a
 * throwaway paragraph, per the approved plan).
 *
 * Audience: a CANDIDATE already holding (or close to holding) Level I, deciding
 * how to progress to Level II and whether to go SNT-TC-1A (employer) or ASNT 9712
 * (third-party, portable). Not employer/buyer-facing.
 *
 * CLAUDE.md §18: no Atlantis pricing anywhere, including ASNT/ASNT 9712 third-party
 * exam fees — this page deliberately covers structure, not cost. No claimed
 * physical presence in any city; delivery framed like /ndt-training-online.
 */

// 2026-10-16: hours read from src/data/snt-tc-1a-hours.json (one source with the planner, the
// Course markup and the crawler hours tables) instead of typed figures, which had MT/PT
// classroom and every experience figure wrong. Level II hours are in addition to Level I.
const METHOD_ROWS: [string, string, string][] = [
  ["UT", "Ultrasonic Testing (UT)", "ultrasonic-testing"],
  ["RT", "Radiographic Testing (RT)", "radiographic-testing"],
  ["ET", "Eddy Current Testing (ET)", "eddy-current-testing"],
  ["MT", "Magnetic Particle Testing (MT)", "magnetic-particle-testing"],
  ["PT", "Liquid Penetrant Testing (PT)", "penetrant-testing"],
  ["VT", "Visual Testing (VT)", "visual-testing"],
];
const sumHours = (row: string[]) => Number(row[0]) + Number(row[1]);
const methodHours = METHOD_ROWS.map(([k, method, slug]) => ({
  method,
  slug,
  train: `+${SNT_HOURS.classroom[k][1]} hrs (${sumHours(SNT_HOURS.classroom[k])} cumulative)`,
  ojt: `+${SNT_HOURS.ojt[k][1]} hrs (${sumHours(SNT_HOURS.ojt[k])} cumulative)`,
}));

const accpVsSnt = [
  { feature: "Who certifies you", snt: "Your employer, against its own Written Practice", accp: "ASNT directly — a central, third-party programme" },
  { feature: "Portability", snt: "Tied to that employer; re-certify when you change jobs", accp: "Portable — the credential moves with you between employers" },
  { feature: "Written Practice needed", snt: "Yes, your employer must maintain one", accp: "No — ASNT administers the whole programme centrally" },
  { feature: "Exam source", snt: "Employer selects or writes the exam", accp: "Standardised ASNT exam, same for every candidate" },
  { feature: "Available at Level I?", snt: "Yes", accp: "No — ASNT 9712 begins at Level II" },
  { feature: "Renewal", snt: "Set by employer's Written Practice", accp: "Fixed 5-year renewal cycle" },
  { feature: "Typical use", snt: "Most common route across oil & gas, petrochemical, power generation", accp: "Where a client or contract asks for ISO 9712-based central certification" },
];

const faqs = [
  { question: "What are the prerequisites for NDT Level II certification?", answer: "Normally you hold Level I in that method first; a candidate qualified directly to Level II needs the Level I and Level II training and experience combined. Beyond that, SNT-TC-1A recommends additional classroom training hours on top of your Level I hours, and additional logged on-the-job experience hours under a certified Level II or III. There is no separate degree requirement — the pathway is built on documented training and supervised experience stacked on top of Level I." },
  { question: "How many additional training hours does Level II require?", answer: "It depends on the method and stacks on top of Level I. Ultrasonic (UT), Radiographic (RT) and Eddy Current (ET) each add 40 classroom hours (80 cumulative through Level II). Magnetic Particle (MT) adds 8 hours (20 cumulative), Liquid Penetrant (PT) adds 8 hours (12 cumulative) and Visual Testing (VT) adds 16 hours (24 cumulative). Experience hours in the method also increase substantially — see the table on this page." },
  { question: "What is ASNT NDT Level II?", answer: "ASNT NDT Level II is ASNT's central certification for Level II technicians in MT, PT, RT, UT and VT, built to meet SNT-TC-1A. ASNT administers a computer-based general exam and specific exams; ASNT states that employers are responsible for carrying out the visual acuity, practical and any job-specific exams, and your employer still certifies you under its Written Practice. The ASNT certificate is renewed every five years and stays with you when you change employers. It is not the same as ASNT 9712, which is built to ISO 9712, replaced ACCP, and has its practical exams taken at ASNT authorized exam centers." },
  { question: "ASNT NDT Level II vs SNT-TC-1A Level II — which should I choose?", answer: "They are not alternatives. Under SNT-TC-1A your employer certifies you against its Written Practice. ASNT NDT Level II can supply the written exams for that certification, centrally and independently, and gives you a credential that stays with you; your employer still runs the vision and practical exams and issues the certification. Check whether your employer's Written Practice accepts the ASNT exams. If a client asks specifically for ISO 9712-based certification, that is ASNT 9712, a separate scheme." },
  { question: "Can I complete NDT Level II training online?", answer: "The classroom theory portion — calibration principles, acceptance-criteria interpretation, procedure reading — can be delivered online, the same as at Level I. The practical component (equipment setup, calibration, interpreting results on real specimens, and demonstrating supervisory judgement over Level I work) cannot be completed online under either SNT-TC-1A or ASNT 9712; it requires real equipment and in-person assessment." },
  { question: "How long does it take to go from Level I to Level II?", answer: "It depends on the additional experience hours in the method (140 to 630, depending on method) and how steadily that work comes to you. The additional classroom hours are usually completed quickly; the additional logged experience hours are what sets the actual calendar, the same as the Level I timeline. Technicians in methods used only occasionally at their site can take longer simply because the experience hours accumulate more slowly." },
  { question: "What can a Level II technician do that a Level I technician cannot?", answer: "Level II technicians set up and calibrate equipment, interpret and evaluate results against acceptance criteria, write technique sheets within an established procedure, and supervise Level I technicians. Level I technicians perform tests and record data under Level II or III supervision, following written instructions without independently interpreting the results." },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map((f) => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } })),
};

// 2026-10-12: Google "Course info" node from the shared builder (same as the crawler).
const courseSchema = courseFactsSchema("/ndt-level-2-training");

export default function NdtLevel2Training() {
  return (
    <div className="min-h-screen pt-20 bg-white">
      <Navigation />
      <SEOHead
        title="NDT Level 2 Certification 2026 — SNT-TC-1A and ASNT 9712"
        description="NDT Level 2 certification: prerequisites, additional training hours, realistic timeline, and a full ASNT NDT Level II vs SNT-TC-1A comparison. Online theory + in-person practical."
        keywords="ndt level 2 certification, asnt ndt level ii, accp level 2, ndt level 2 training, asnt level 2 certification, ndt level ii requirements"
        canonical="https://atlantisndt.com/ndt-level-2-training"
        structuredData={{ "@context": "https://schema.org", "@graph": [courseSchema, faqSchema] }}
        faq={faqs}
      />
      <Breadcrumbs />

      <section className="py-16 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto max-w-5xl px-6">
          <div className="flex items-center gap-2 text-primary mb-4">
            <Award className="w-5 h-5" />
            <span className="text-sm font-medium uppercase tracking-wide">Intermediate NDT Certification</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            NDT <span className="gradient-text">Level 2</span> Certification Training
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-3xl">
            Level II is where you move from performing tests under supervision to interpreting results, calibrating equipment, and supervising Level I technicians. This page covers the prerequisites, the additional training hours per method, a realistic timeline, and how employer certification under SNT-TC-1A and ASNT's central Level II credentials fit together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg">
              <Link to="/training#training-enquiry">Ask About Level II Training</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/asnt-certification">Full ASNT Certification Guide</Link>
            </Button>
          </div>
        </div>
      </section>

      <CourseFactsBlock path="/ndt-level-2-training" />

      <div className="container mx-auto max-w-5xl px-6">
        <QuickAnswerBox
          question="How do you get NDT Level 2 certification?"
          answer="Normally you hold Level I in that method first. From there, Level II adds further classroom training hours (8 to 40 additional hours depending on method), substantially more logged experience in the method, and written plus practical exams covering calibration, interpretation and acceptance-criteria judgement. Under SNT-TC-1A your employer certifies you; ASNT's central ASNT NDT Level II can supply the written exams, with the employer still giving the vision and practical exams."
          bullets={[
            "Usually follows Level I; direct entry to Level II needs the Level I and Level II hours combined",
            "Your employer certifies you under SNT-TC-1A; ASNT NDT Level II adds a central exam credential",
            "ASNT 9712 is a separate, ISO 9712-based scheme with practical exams at ASNT centers",
          ]}
        />
      </div>

      {/* Prerequisites */}
      <section className="py-16">
        <div className="container mx-auto max-w-5xl px-6">
          <h2 className="text-3xl font-bold mb-4">Prerequisites for NDT Level II</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-3xl">
            Level II is normally reached from Level I in the same method: the Level II experience is time spent working at Level I. A candidate qualified directly to Level II needs the Level I and Level II training and experience combined.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-0 shadow-sm">
              <CardHeader className="pb-2">
                <CheckCircle className="w-8 h-8 text-primary mb-2" />
                <CardTitle>Existing Level I certification</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Level II is method-specific, not a general upgrade, and is normally reached from Level I in that method. A technician certified Level I in MT and PT can advance to Level II in either method independently, on its own timeline.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-sm">
              <CardHeader className="pb-2">
                <Briefcase className="w-8 h-8 text-primary mb-2" />
                <CardTitle>Additional documented experience</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Beyond the classroom hours, Level II requires substantially more experience in the method than Level I — supervised, logged, and verifiable. This is the step most candidates underestimate: it is judgement-building time, not just hour-counting.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Exam format + hours */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto max-w-5xl px-6">
          <h2 className="text-3xl font-bold mb-4">Exam Format and Additional Training Hours</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-3xl">
            The Level II exam adds calibration, interpretation and acceptance-criteria judgement to the written and practical format used at Level I. Format specifics depend on who sets the exam — your employer's Written Practice under SNT-TC-1A, or ASNT's own exams if you take ASNT NDT Level II or ASNT 9712. The classroom and experience hours below stack on top of what you already logged at Level I.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse bg-background rounded-lg overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-primary/10">
                  <th className="text-left p-3 font-semibold border border-border">NDT Method</th>
                  <th className="text-left p-3 font-semibold border border-border">Additional Classroom Hours</th>
                  <th className="text-left p-3 font-semibold border border-border">Experience Hours in the Method (Additional, Cumulative)</th>
                </tr>
              </thead>
              <tbody>
                {methodHours.map((m, i) => (
                  <tr key={m.slug} className={i % 2 === 0 ? "bg-background" : "bg-secondary/20"}>
                    <td className="p-3 border border-border font-medium">
                      <Link to={`/${m.slug}`} className="text-primary hover:underline">{m.method}</Link>
                    </td>
                    <td className="p-3 border border-border">{m.train}</td>
                    <td className="p-3 border border-border">{m.ojt}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted-foreground mt-4">Figures are SNT-TC-1A recommended minimums; see also the method table on our <Link to="/asnt-certification" className="text-primary underline">ASNT certification guide</Link>. Your employer's Written Practice governs the exact hours that apply to you; ASNT publishes its own figures for ASNT NDT Level II and ASNT 9712.</p>
        </div>
      </section>

      {/* Realistic timeline */}
      <section className="py-16">
        <div className="container mx-auto max-w-4xl px-6">
          <h2 className="text-3xl font-bold mb-4 text-center">A Realistic Timeline to Level II</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6 text-center max-w-2xl mx-auto">
            How long Level II takes after Level I depends on the additional experience hours in the method and how steadily that work comes to you. The pacing driver is the same as at Level I: classroom hours can be finished quickly, but supervised experience hours accumulate at the speed of the actual work available to you.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed text-center max-w-2xl mx-auto">
            Candidates in a method used only occasionally — a specialised technique performed on a handful of jobs a year, for example — should expect the experience-hour requirement to extend the timeline well beyond 12 months, regardless of how quickly the classroom portion is finished.
          </p>
        </div>
      </section>

      {/* ASNT 9712 section — genuinely substantive per the plan */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto max-w-5xl px-6">
          <h2 className="text-3xl font-bold mb-4">ASNT's Central Level II Credentials</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-3xl">
            ASNT runs two central Level II credentials, and they are often confused. ASNT NDT Level II is built to meet SNT-TC-1A: ASNT administers the computer-based general and specific exams in MT, PT, RT, UT and VT, employers carry out the vision, practical and any job-specific exams, and the certificate is renewed every five years. ASNT 9712 is built to ISO 9712 and replaced ACCP (the former ASNT Central Certification Program); ASNT administers the whole scheme, including practical exams at its authorized exam centers. Neither has a Level I. The table compares employer-based SNT-TC-1A certification with ASNT 9712.
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse bg-background rounded-lg overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-primary/10">
                  <th className="text-left p-3 font-semibold border border-border">Feature</th>
                  <th className="text-left p-3 font-semibold border border-border">SNT-TC-1A (Employer-Based)</th>
                  <th className="text-left p-3 font-semibold border border-border">ASNT 9712 (which replaced ACCP, the former ASNT Central Certification Program)</th>
                </tr>
              </thead>
              <tbody>
                {accpVsSnt.map((row, i) => (
                  <tr key={row.feature} className={i % 2 === 0 ? "bg-background" : "bg-secondary/20"}>
                    <td className="p-3 border border-border font-medium">{row.feature}</td>
                    <td className="p-3 border border-border">{row.snt}</td>
                    <td className="p-3 border border-border">{row.accp}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-0 shadow-sm">
              <CardHeader className="pb-2">
                <Globe className="w-8 h-8 text-primary mb-2" />
                <CardTitle>When ASNT 9712 is worth pursuing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  ASNT 9712 earns its value when a client, contract or international employer specifies ISO 9712-based certification, and for technicians who expect to work across employers or countries. US aerospace work runs under employer written practices, which Atlantis builds on ASNT SNT-TC-1A, aligned to prime flow-down and Nadcap AC7114.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-sm">
              <CardHeader className="pb-2">
                <Building2 className="w-8 h-8 text-primary mb-2" />
                <CardTitle>When SNT-TC-1A is the better fit</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  SNT-TC-1A remains the dominant route across oil & gas, petrochemical and power generation, and is what most employer Written Practices are already built around. If your employer already runs a mature Written Practice and you have no near-term plan to change companies, staying on SNT-TC-1A is the more direct path; you can add an ASNT central credential later if portability becomes relevant.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Delivery model */}
      <section className="py-16">
        <div className="container mx-auto max-w-5xl px-6">
          <h2 className="text-3xl font-bold mb-4">Delivery Model: Online Theory, In-Person Practical</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-3xl">
            The same split that applies at Level I applies here, and for the same reason: SNT-TC-1A and ASNT 9712 both allow theory to be delivered remotely but both require the practical and experience components to happen with real equipment, in person, available nationwide on request.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-0 shadow-sm">
              <CardHeader className="pb-2">
                <Monitor className="w-8 h-8 text-primary mb-2" />
                <CardTitle>Theory — delivered online</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Self-paced online modules, with an ASNT Level III answering your questions, cover calibration principles, code and standard interpretation, and acceptance-criteria evaluation — the additional theory content that separates Level II from Level I. Enrollment is open all year, with no fixed course dates.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-sm">
              <CardHeader className="pb-2">
                <Building2 className="w-8 h-8 text-primary mb-2" />
                <CardTitle>Practical — delivered in person</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Equipment setup, calibration and interpretation on real parts, plus the supervised experience hours, happen at your employer's facility, on its own equipment, with an ASNT Level III supervising the practical training. Atlantis has no classroom or public venue. The Practical NDT simulator helps you practice first but does not replace this. Neither SNT-TC-1A nor ASNT 9712 accepts a fully online Level II pathway.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto max-w-4xl px-6">
          <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((f) => (
              <div key={f.question} className="bg-background p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-lg mb-2">{f.question}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{f.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="container mx-auto max-w-4xl px-6">
          <h2 className="text-2xl font-bold text-center mb-6">Working Toward Level III?</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link to="/ndt-level-1-training" className="flex items-center gap-3 p-4 bg-secondary/30 rounded-lg hover:shadow-md hover:bg-primary/5 transition">
              <ArrowRight className="w-5 h-5 text-primary flex-shrink-0" />
              <div>
                <div className="font-medium text-sm">NDT Level 1 Training</div>
                <div className="text-xs text-muted-foreground">Start here if you're new to NDT</div>
              </div>
            </Link>
            <Link to="/asnt-level-iii-training" className="flex items-center gap-3 p-4 bg-secondary/30 rounded-lg hover:shadow-md hover:bg-primary/5 transition">
              <ArrowRight className="w-5 h-5 text-primary flex-shrink-0" />
              <div>
                <div className="font-medium text-sm">ASNT Level III Training</div>
                <div className="text-xs text-muted-foreground">The senior technical authority pathway</div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <RelatedGuidesBlock links={[
        { title: "NDT Level 1 Training", href: "/ndt-level-1-training", description: "Prerequisites, hours and timeline for the entry level", icon: "training" },
        { title: "ASNT Level III Training", href: "/asnt-level-iii-training", description: "Basic + Method exam, experience path, refresher", icon: "training" },
        { title: "ASNT Certification Path", href: "/asnt-certification", description: "Full Level I/II/III breakdown in one place", icon: "cert" },
        { title: "Online NDT Training", href: "/ndt-training-online", description: "How the online theory + in-person practical model works", icon: "training" },
        { title: "NDT Level 2 Salary", href: "/ndt-level-2-salary", description: "Level II pay by method and region", icon: "blog" },
        { title: "NDT Training Near Me", href: "/ndt-training-near-me", description: "Find delivery options across the US", icon: "training" },
      ]} />

      <TrainingGapInbound path="/ndt-level-2-training" />
      <ApprovedTrainingFees />
      <TrainingEnquiryCTA />
      <ContactDetails />
    </div>
  );
}
