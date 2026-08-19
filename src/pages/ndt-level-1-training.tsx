import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import RelatedGuidesBlock from "@/components/RelatedGuidesBlock";
import QuickAnswerBox from "@/components/QuickAnswerBox";
import { Link } from "react-router-dom";
import { CheckCircle, Clock, Award, Monitor, Building2, ArrowRight, Eye } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import TrainingEnquiryCTA from "@/components/TrainingEnquiryCTA";

/**
 * /ndt-level-1-training — candidate-facing "how do I get NDT Level I certified" page.
 *
 * WHY THIS PAGE EXISTS: GSC-confirmed queries with no purpose-built landing page —
 * "ndt level 1 certification" (13 impr/90d, pos 37.2), "level 1 ndt certification"
 * (16 impr, pos 39.9), "how to get ndt level 1 certification" (10 impr, pos 54.3),
 * "ndt level 1 certification online" (7 impr, pos 48.6). These currently scatter
 * across /asnt-certification (which covers all 3 levels at once) and stray city
 * pages. This page owns the Level I intent specifically.
 *
 * Audience: a CANDIDATE deciding whether/how to get Level I certified — not a
 * company hiring one. Training-hour and experience-hour figures match the table
 * already published on /asnt-certification for consistency across the site.
 *
 * CLAUDE.md §18: no Atlantis pricing anywhere. No claimed physical presence in
 * any city — delivery model framed like /ndt-training-online and
 * /ndt-training-near-me (online theory + in-person practical, nationwide).
 */

const methodHours = [
  { method: "Ultrasonic Testing (UT)", slug: "ultrasonic-testing", train: "40 hrs", ojt: "210 hrs" },
  { method: "Radiographic Testing (RT)", slug: "radiographic-testing", train: "40 hrs", ojt: "210 hrs" },
  { method: "Eddy Current Testing (ET)", slug: "eddy-current-testing", train: "40 hrs", ojt: "210 hrs" },
  { method: "Magnetic Particle Testing (MT)", slug: "magnetic-particle-testing", train: "12 hrs", ojt: "130 hrs" },
  { method: "Liquid Penetrant Testing (PT)", slug: "penetrant-testing", train: "8 hrs", ojt: "130 hrs" },
  { method: "Visual Testing (VT)", slug: "visual-testing", train: "8 hrs", ojt: "130 hrs" },
];

const timeline = [
  { step: "1", title: "Vision screening", detail: "A near-vision acuity test (Jaeger 1 or equivalent) and a colour-contrast test, both administered annually. This gate is checked first because failing it stops the pathway before any training hours are spent." },
  { step: "2", title: "Classroom theory hours", detail: "The minimum classroom hours for your chosen method — 8 to 40 hours depending on method (table below). Delivered as a continuous block or spread across weeks; online-delivered theory is accepted under SNT-TC-1A as long as the hours are documented." },
  { step: "3", title: "Logged on-the-job experience", detail: "130 to 210 hours of supervised, documented work in the method under a certified Level II or Level III, depending on method. This is usually the longest step and its pace depends entirely on how much of that method's work is available to you." },
  { step: "4", title: "Written and practical examination", detail: "A general exam, a method-specific exam, and a practical demonstration on reference specimens. Format (open-book vs closed-book, pass threshold) is set by your employer's Written Practice, not by a single fixed national standard." },
  { step: "5", title: "Certification issued", detail: "Your employer certifies you under SNT-TC-1A once training, experience and exam records are complete. There is no separate Level I credential issued directly by ASNT — see the certifying-body section below." },
];

const faqs = [
  { question: "What are the prerequisites for NDT Level I certification?", answer: "SNT-TC-1A does not require a college degree or prior NDT experience for Level I — it is the entry point. What it does require is a current near-vision acuity test and a colour-contrast (or colour-differentiation) test, both administered annually, plus the classroom training hours and logged on-the-job experience hours specific to the method you are certifying in. A high school diploma or GED is the typical baseline education requirement under most employer Written Practices." },
  { question: "How many training hours does NDT Level I require?", answer: "It depends on the method. Under SNT-TC-1A recommended minimums: Ultrasonic (UT), Radiographic (RT) and Eddy Current (ET) each require 40 classroom hours at Level I; Magnetic Particle (MT) requires 12 hours; Liquid Penetrant (PT) and Visual Testing (VT) each require 8 hours. These are classroom hours only — logged on-the-job experience hours (130-210 depending on method) are separate and additional." },
  { question: "How do you get NDT Level I certification?", answer: "Pass the vision screening, complete the classroom training hours for your method, log the required on-the-job experience hours under a certified Level II or III, then pass the written general exam, the method-specific exam and a practical demonstration on reference specimens. Your employer (or a third-party training provider working from your employer's Written Practice) certifies you once all four are documented." },
  { question: "Can I get NDT Level I certification online?", answer: "The classroom theory portion can be delivered online — SNT-TC-1A does not specify that training must happen in person, only that the minimum hours and content are covered and documented. The on-the-job experience and the practical examination cannot be completed online: both require physical specimens, real equipment and a supervising Level II or III present. A genuine online NDT Level I pathway is therefore theory online, practical in person." },
  { question: "Is NDT Level I certified by ASNT directly or by my employer?", answer: "By your employer. SNT-TC-1A is an employer-based scheme: your company writes a Written Practice describing exactly how it implements the recommended practice, and your company certifies you against it once training, experience and exam requirements are met. ASNT's third-party certification programme, ACCP, does not offer Level I at all — ACCP starts at Level II. If you eventually want a portable, third-party credential, that decision point comes after Level I, not at it." },
  { question: "How long does it realistically take to get NDT Level I certified?", answer: "For someone working full-time in the method, most of the classroom-hour requirement (8-40 hours depending on method) can be completed in one to three weeks. The on-the-job experience requirement (130-210 hours) is what actually sets the calendar — if the work is steady, that is a matter of weeks; if the method is used only occasionally at your site, it can take a few months to accumulate the hours. Most candidates reach Level I within 6 to 12 weeks of steady exposure to the method." },
  { question: "What is the difference between NDT Level I and Level II?", answer: "Level I technicians perform tests and record data under Level II or III supervision, following written instructions without independently interpreting results. Level II technicians set up and calibrate equipment, interpret and evaluate results against acceptance criteria, and can supervise Level I technicians. Level II requires holding Level I first, plus additional classroom hours and additional logged experience — see our dedicated Level II training guide for the full pathway." },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map((f) => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } })),
};

const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "NDT Level I Certification Training",
  "description": "Entry-level Nondestructive Testing certification training per ASNT SNT-TC-1A: classroom theory, on-the-job experience logging, and exam preparation across UT, RT, MT, PT, ET and VT.",
  "provider": { "@type": "Organization", "name": "Atlantis NDT", "url": "https://atlantisndt.com" },
  "hasCourseInstance": [
    { "@type": "CourseInstance", "courseMode": "online", "description": "Live-virtual and self-paced theory modules" },
    { "@type": "CourseInstance", "courseMode": "onsite", "description": "In-person practical demonstration and on-the-job experience logging" },
  ],
  "educationalLevel": "Entry level",
  "occupationalCredentialAwarded": "NDT Level I (SNT-TC-1A, employer-certified)",
};

export default function NdtLevel1Training() {
  return (
    <div className="min-h-screen pt-20 bg-white">
      <Navigation />
      <SEOHead
        title="NDT Level 1 Certification 2026 — How to Get Level I Training Online"
        description="How to get NDT Level 1 certification: prerequisites, training hours per method, realistic timeline, and who certifies you. Online theory + in-person practical, nationwide."
        keywords="ndt level 1 certification, level 1 ndt certification, how to get ndt level 1 certification, ndt level 1 certification online, ndt level 1 training, ndt level 1 requirements"
        canonical="https://atlantisndt.com/ndt-level-1-training"
        structuredData={{ "@context": "https://schema.org", "@graph": [courseSchema, faqSchema] }}
        faq={faqs}
      />
      <Breadcrumbs />

      <section className="py-16 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto max-w-5xl px-6">
          <div className="flex items-center gap-2 text-primary mb-4">
            <Award className="w-5 h-5" />
            <span className="text-sm font-medium uppercase tracking-wide">Entry-Level NDT Certification</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            NDT <span className="gradient-text">Level 1</span> Certification Training
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-3xl">
            Level I is the entry point into Nondestructive Testing — no prior NDT experience or college degree required. This page walks through exactly what SNT-TC-1A asks for: the prerequisites, the training hours per method, a realistic timeline, who actually certifies you, and how the online-plus-practical delivery model works.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg">
              <Link to="/training#training-enquiry">Ask About Level I Training</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/asnt-certification">Full ASNT Certification Guide</Link>
            </Button>
          </div>
        </div>
      </section>

      <div className="container mx-auto max-w-5xl px-6">
        <QuickAnswerBox
          question="How do you get NDT Level 1 certification?"
          answer="Pass an annual vision screening, complete the classroom training hours for your chosen method (8-40 hours depending on method under SNT-TC-1A), log the required on-the-job experience hours under a certified Level II or III supervisor (130-210 hours depending on method), then pass a written and practical examination. Your employer certifies you against its own Written Practice — there is no separate Level I credential issued directly by ASNT."
          bullets={[
            "No degree or prior NDT experience required — Level I is the entry point",
            "Training hours vary by method: 8 hrs (PT/VT) up to 40 hrs (UT/RT/ET)",
            "Certified by your employer under SNT-TC-1A, not by ASNT directly",
          ]}
        />
      </div>

      {/* Prerequisites */}
      <section className="py-16">
        <div className="container mx-auto max-w-5xl px-6">
          <h2 className="text-3xl font-bold mb-4">Prerequisites for NDT Level I</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-3xl">
            SNT-TC-1A deliberately sets a low entry bar for Level I because it assumes you will learn the method under direct supervision. What it does check, before anything else, is your ability to actually see the defects the method is designed to find.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-0 shadow-sm">
              <CardHeader className="pb-2">
                <Eye className="w-8 h-8 text-primary mb-2" />
                <CardTitle>Vision requirements</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  A near-vision acuity test (Jaeger 1 or equivalent, natural or corrected) and a colour-contrast or colour-differentiation test, both administered and documented annually. This is checked before training begins because it disqualifies some candidates outright — it is worth confirming before you commit time to the rest of the pathway.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-sm">
              <CardHeader className="pb-2">
                <CheckCircle className="w-8 h-8 text-primary mb-2" />
                <CardTitle>Education and experience</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  No college degree is required. Most employer Written Practices set a high school diploma or GED as the baseline. No prior NDT experience is required — Level I assumes none, and the entire structure of the certification (training hours plus supervised on-the-job hours) is built around bringing a new candidate up to competence in one method at a time.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Exam format + training hours */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto max-w-5xl px-6">
          <h2 className="text-3xl font-bold mb-4">Exam Format and Minimum Training Hours</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-3xl">
            Level I certification is confirmed through a written general exam, a method-specific written exam, and a practical demonstration on reference specimens. The exact format — open-book or closed-book, question count, pass threshold — is set by your employer's Written Practice, so it varies between companies. The classroom training hours and the logged on-the-job experience hours per method, however, follow the SNT-TC-1A recommended minimums below.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse bg-background rounded-lg overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-primary/10">
                  <th className="text-left p-3 font-semibold border border-border">NDT Method</th>
                  <th className="text-left p-3 font-semibold border border-border">Level I Classroom Hours</th>
                  <th className="text-left p-3 font-semibold border border-border">Level I On-the-Job Experience</th>
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
          <p className="text-xs text-muted-foreground mt-4">Figures are SNT-TC-1A recommended minimums; your employer's Written Practice governs the exact hours and exam format that apply to you. Consistent with the method table on our <Link to="/asnt-certification" className="text-primary underline">ASNT certification guide</Link>.</p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16">
        <div className="container mx-auto max-w-4xl px-6">
          <h2 className="text-3xl font-bold mb-4 text-center">A Realistic Timeline to Level I</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-10 text-center max-w-2xl mx-auto">
            The classroom hours are the fast part. The on-the-job experience hours are what actually sets your calendar, because they depend on how much of that method's work passes through your hands.
          </p>
          <div className="space-y-4">
            {timeline.map((t) => (
              <div key={t.step} className="flex gap-4 items-start bg-secondary/20 rounded-lg p-4">
                <div className="flex-shrink-0 w-9 h-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">{t.step}</div>
                <div>
                  <h3 className="font-semibold mb-1">{t.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{t.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who certifies you */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto max-w-5xl px-6">
          <h2 className="text-3xl font-bold mb-4">Who Actually Certifies You: Employer, Not ASNT</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-0 shadow-sm">
              <CardHeader><CardTitle className="text-lg">SNT-TC-1A (the Level I pathway)</CardTitle></CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  SNT-TC-1A is a recommended practice, not a certification body. Your employer writes a Written Practice describing how it implements the recommendation, and your employer certifies you against that document once your training hours, experience hours and exam results are recorded. The certification belongs to that employer relationship — moving companies typically means re-certifying under the new employer's Written Practice.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-sm">
              <CardHeader><CardTitle className="text-lg">Why not ACCP at Level I</CardTitle></CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  ASNT's third-party, portable certification programme (ACCP) does not certify Level I at all — it is available for Level II and Level III only. If a portable, employer-independent credential matters to you, that decision arrives after you have Level I and are training toward Level II, not before.
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
            Training is delivered nationwide in two parts. There is no fixed classroom location — the format below is what every genuine Level I pathway looks like, whether the provider is Atlantis NDT or anyone else, because SNT-TC-1A's structure requires it.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-0 shadow-sm">
              <CardHeader className="pb-2">
                <Monitor className="w-8 h-8 text-primary mb-2" />
                <CardTitle>Theory — delivered online</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Live-virtual sessions with an ASNT Level III instructor, or self-paced recorded modules, cover the classroom-hour requirement for your method. SNT-TC-1A does not require theory to be delivered in a physical classroom — only that the hours and content are covered and documented.
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
                  On-the-job experience logging and the practical examination on reference specimens require a physical presence with real equipment and a supervising Level II or III — either at your own employer's site, or at an arranged venue, available nationwide on request. This portion cannot be completed online under any legitimate certification scheme.
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

      {/* Next step */}
      <section className="py-14">
        <div className="container mx-auto max-w-4xl px-6">
          <h2 className="text-2xl font-bold text-center mb-6">Already Have Level I? Here's What Comes Next</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link to="/ndt-level-2-training" className="flex items-center gap-3 p-4 bg-secondary/30 rounded-lg hover:shadow-md hover:bg-primary/5 transition">
              <ArrowRight className="w-5 h-5 text-primary flex-shrink-0" />
              <div>
                <div className="font-medium text-sm">NDT Level 2 Training</div>
                <div className="text-xs text-muted-foreground">Prerequisites, hours, and the ACCP pathway</div>
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
        { title: "NDT Level 2 Training", href: "/ndt-level-2-training", description: "Prerequisites, hours, and the ACCP Level II pathway", icon: "training" },
        { title: "ASNT Level III Training", href: "/asnt-level-iii-training", description: "Basic + Method exam, experience path, refresher", icon: "training" },
        { title: "ASNT Certification Path", href: "/asnt-certification", description: "Full Level I/II/III breakdown in one place", icon: "cert" },
        { title: "Online NDT Training", href: "/ndt-training-online", description: "How the online theory + in-person practical model works", icon: "training" },
        { title: "NDT Level 1 Salary", href: "/ndt-level-1-salary", description: "Entry-level pay by industry and region", icon: "blog" },
        { title: "NDT Training Near Me", href: "/ndt-training-near-me", description: "Find delivery options across the US", icon: "training" },
      ]} />

      <TrainingEnquiryCTA />
      <ContactDetails />
    </div>
  );
}
