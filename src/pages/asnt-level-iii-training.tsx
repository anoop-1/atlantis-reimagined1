import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import RelatedGuidesBlock from "@/components/RelatedGuidesBlock";
import QuickAnswerBox from "@/components/QuickAnswerBox";
import { Link } from "react-router-dom";
import { Award, Trophy, Users, Monitor, Building2, RotateCcw, FileText } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

/**
 * /asnt-level-iii-training — REBUILD, 2026-08-11.
 *
 * WHY THIS REBUILD: the prior version sat at 16 impr/90d, position 82.8 —
 * meaning the old content was not working. GSC-confirmed target queries:
 * "ndt level 3 training" (32 impr, pos 52), "asnt level 3 online training"
 * (33 impr, pos 44), "asnt ndt level 3 refresher course" (21 impr, pos 54.2),
 * "ndt level 3 preparatory course" (18 impr, pos 48.8), "online ndt level 3
 * training" (13+12 impr, pos 78-80), "ndt level iii online courses"
 * (15 impr, pos 61).
 *
 * AUDIENCE: a CANDIDATE deciding whether/how to become a Level III — not a
 * company hiring one. "asnt level iii consulting" / "ndt level 3 consultant" /
 * "ndt level 3 consulting services" are a DIFFERENT, already-owned intent
 * (/consulting/ndt-consulting-level-iii) and are deliberately not targeted
 * here; the consulting page is not edited by this rebuild.
 *
 * COMPLIANCE FIXES from the prior version (owner-directed):
 * - Removed the unsourced "300+ Level III Trained" stat.
 * - Removed the external, untracked Microsoft Forms enrollment link — CTAs now
 *   point to /training#training-enquiry, the site's own tracked lead form.
 * - No pass-rate or headcount figures anywhere on this page (hard requirement
 *   for this rebuild) — every number here is a structural SNT-TC-1A/ASNT exam
 *   requirement (experience hours, question counts), not a performance claim.
 * - No claimed physical presence in any city; delivery framed like
 *   /ndt-training-online (online theory/exam-prep + in-person practical).
 */

const timeline = [
  { step: "1", title: "Hold Level II in the method (or qualify by degree)", detail: "Under SNT-TC-1A equivalency provisions, prior Level II certification in the method plus documented experience is the standard route. A qualifying engineering or science degree shortens the experience-hour requirement but does not remove the Level II prerequisite in most Written Practices." },
  { step: "2", title: "Log the required experience hours", detail: "SNT-TC-1A recommends roughly 4,200 hours of documented experience for candidates with a qualifying degree, or roughly 12,600 hours for candidates on the high-school-diploma path. This is by far the longest step and the one that actually sets your timeline." },
  { step: "3", title: "Pass the annual vision test", detail: "The same near-vision and colour-contrast requirements from Level I and II apply at Level III and must be current at the time of examination." },
  { step: "4", title: "Sit the Basic examination", detail: "A general exam covering materials and processes, common discontinuities, and the certification schemes themselves — taken once, and it carries across every method you later certify in." },
  { step: "5", title: "Sit the Method examination for each method", detail: "One exam per method sought, covering principles, equipment, technique selection, interpretation, and procedure development for that specific method." },
  { step: "6", title: "Sit the Specific examination, if your employer requires it", detail: "Some employer Written Practices add a Specific exam covering the codes, standards and procedures used at that company. This one is optional and employer-defined, not a universal ASNT requirement." },
];

const faqs = [
  { question: "What are the prerequisites for ASNT Level III certification?", answer: "The standard route requires prior Level II certification in the method, plus documented NDT experience — roughly 4,200 hours for candidates with a qualifying engineering or science degree, or roughly 12,600 hours for candidates on the high-school-diploma path, per SNT-TC-1A equivalency provisions. A current annual vision test (near-vision acuity and colour-contrast) is also required at the time of examination." },
  { question: "What is the ASNT Level III exam format?", answer: "Three possible components. The Basic examination covers materials and processes, common discontinuities and the certification schemes themselves, and is taken once regardless of how many methods you certify in. The Method examination is taken once per method and covers principles, equipment, technique selection, interpretation and procedure development for that method. A Specific examination, covering an individual employer's codes and procedures, is optional and only required where that employer's Written Practice calls for it." },
  { question: "How long does it realistically take to become Level III?", answer: "The exams themselves can be scheduled and prepared for over weeks, but the experience-hour requirement is what actually sets the calendar — most candidates already holding Level II need roughly 18 to 36 months of further qualifying experience before they have enough documented hours to sit for Level III, depending on how much of that method's work is available to them." },
  { question: "Does ASNT or my employer issue Level III certification?", answer: "Both paths exist. An employer-issued Level III, under SNT-TC-1A or the related ANSI/ASNT CP-189 standard, is appointed by your employer's own Written Practice once you have passed the required exams and met the experience requirement — it is tied to that employer the same way Level I and II are. ASNT NDT Level III, and ACCP Professional Level III, are issued directly by ASNT as a portable, third-party credential and follow you between employers. Which one applies to you depends on which exams you sit and which programme your employer participates in." },
  { question: "Can I prepare for ASNT Level III online?", answer: "The theory preparation — materials science, code interpretation, procedure-writing practice, and exam-technique coaching for the Basic and Method exams — can be delivered online through live-virtual sessions or self-paced modules. The Basic, Method and Specific examinations themselves require in-person, proctored testing; no legitimate certification scheme offers a fully online Level III exam." },
  { question: "Is there an ASNT Level III refresher or recertification course?", answer: "Yes. Level III certification is not indefinite — recertification is required on a periodic cycle set by ASNT (for ASNT-issued Level III / ACCP) or by the employer's Written Practice (for SNT-TC-1A / CP-189 Level III). A refresher course targeted at renewal typically covers what has changed in the relevant codes and standards since your last certification, plus a review of the Basic and Method exam content, rather than starting theory instruction from zero." },
  { question: "What does a Level III do that a Level II does not?", answer: "Level III is the technical-authority role: writing and approving inspection procedures, selecting appropriate NDT methods for a given application, interpreting codes and standards, training and certifying Level I and II personnel, and taking responsibility for the technical adequacy of an NDT programme. Level II performs and interprets tests within an established procedure; Level III writes the procedure and answers for it." },
  { question: "I want to hire a Level III, not become one — where do I go?", answer: "This page covers becoming a Level III yourself. If you are looking to engage an outsourced or contract ASNT Level III as the technical authority of record for your company, see our dedicated Level III consulting service." },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map((f) => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } })),
};

const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "ASNT Level III Certification Training",
  "description": "ASNT NDT Level III exam preparation: Basic examination, Method examination, procedure development, and experience-hour pathway guidance across UT, RT, MT, PT, ET and VT.",
  "provider": { "@type": "Organization", "name": "Atlantis NDT", "url": "https://atlantisndt.com" },
  "hasCourseInstance": [
    { "@type": "CourseInstance", "courseMode": "online", "description": "Live-virtual and self-paced Basic/Method exam-prep and refresher modules" },
    { "@type": "CourseInstance", "courseMode": "onsite", "description": "Proctored Basic, Method and Specific examinations; procedure-development practical" },
  ],
  "educationalLevel": "Professional",
  "occupationalCredentialAwarded": "ASNT NDT Level III / SNT-TC-1A Level III",
};

export default function ASNTLevelIIITraining() {
  return (
    <div className="min-h-screen pt-20">
      <Navigation />
      <SEOHead
        title="ASNT Level 3 Training 2026 — Online Prep, Refresher Course & Exam Prerequisites"
        description="ASNT Level 3 / NDT Level III training: prerequisites, Basic + Method exam format, realistic timeline, and refresher courses. Online prep + in-person proctored exam, nationwide."
        keywords="ndt level 3 training, asnt level 3 online training, asnt ndt level 3 refresher course, ndt level 3 preparatory course, online ndt level 3 training, ndt level iii online courses, asnt level iii training"
        canonical="https://atlantisndt.com/asnt-level-iii-training"
        structuredData={{ "@context": "https://schema.org", "@graph": [courseSchema, faqSchema] }}
        faq={faqs}
      />

      <section className="py-20 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 text-primary mb-4">
              <Trophy className="w-5 h-5" />
              <span className="text-sm font-medium uppercase tracking-wide">Senior Technical Authority</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              ASNT <span className="gradient-text">Level III</span> / NDT Level 3 Training
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Level III is the senior technical-authority certification: procedure development, code interpretation, and program leadership. This page covers exactly what the pathway requires — prerequisites, exam format, a realistic timeline, who actually certifies you, and how online preparation plus in-person proctored exams work — including the refresher route for candidates renewing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="btn-primary">
                <Link to="/training#training-enquiry">Ask About Level III Prep</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/asnt-certification">Full ASNT Certification Guide</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto max-w-6xl px-6">
        <QuickAnswerBox
          question="How do you become an ASNT Level III?"
          answer="Hold Level II certification in the method (or qualify via a degree-based equivalency path), log the required documented experience — roughly 4,200 hours with a qualifying degree, or roughly 12,600 hours without — pass a current annual vision test, then pass ASNT's Basic examination and a Method examination for each method sought. Certification is issued either by ASNT directly (a portable, third-party credential) or by your employer under SNT-TC-1A / CP-189, depending on which programme applies."
          bullets={[
            "Requires prior Level II certification in the method as the standard entry route",
            "Basic exam taken once, carries across every method; Method exam taken per method",
            "Online exam prep and refresher courses available; the exams themselves are in-person, proctored",
          ]}
        />
      </div>

      {/* Why Level III */}
      <section className="py-16">
        <div className="container mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">What Level III Actually Changes</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="h-full hover:shadow-lg transition border-0 shadow-sm">
              <CardHeader className="pb-2"><Trophy className="w-8 h-8 text-primary mb-2" /><CardTitle>Technical authority</CardTitle></CardHeader>
              <CardContent><p className="text-muted-foreground text-sm">Level III is the person who answers for the NDT programme's technical adequacy — selecting methods, approving procedures, and defending decisions to an auditor.</p></CardContent>
            </Card>
            <Card className="h-full hover:shadow-lg transition border-0 shadow-sm">
              <CardHeader className="pb-2"><Award className="w-8 h-8 text-primary mb-2" /><CardTitle>Procedure ownership</CardTitle></CardHeader>
              <CardContent><p className="text-muted-foreground text-sm">Where Level II works within an established procedure, Level III writes it — qualified for the specific material, thickness range and geometry, not a generic document.</p></CardContent>
            </Card>
            <Card className="h-full hover:shadow-lg transition border-0 shadow-sm">
              <CardHeader className="pb-2"><Users className="w-8 h-8 text-primary mb-2" /><CardTitle>Personnel certification</CardTitle></CardHeader>
              <CardContent><p className="text-muted-foreground text-sm">Level III trains, examines and certifies Level I and II personnel within the organisation's Written Practice — the role most Level I/II technicians eventually report to.</p></CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Prerequisites */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto max-w-5xl px-6">
          <h2 className="text-3xl font-bold mb-4">Prerequisites: Experience Hours and the Degree Pathway</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-3xl">
            The standard route to Level III requires prior Level II certification in the method plus a substantial amount of documented, verifiable NDT experience. How much experience depends on your education.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-0 shadow-sm">
              <CardHeader><CardTitle className="text-lg">With a qualifying degree</CardTitle></CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed">A qualifying engineering or science degree reduces the minimum documented-experience requirement to roughly 4,200 hours under SNT-TC-1A equivalency provisions, on top of the required Level II certification in the method.</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-sm">
              <CardHeader><CardTitle className="text-lg">High-school-diploma path</CardTitle></CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed">Without a qualifying degree, the same equivalency provisions set the minimum documented-experience requirement at roughly 12,600 hours — still on top of prior Level II certification, not instead of it.</p>
              </CardContent>
            </Card>
          </div>
          <p className="text-sm text-muted-foreground mt-6 max-w-3xl">A current annual vision test — the same near-vision and colour-contrast checks required at Level I and II — must also be on file at the time of examination.</p>
        </div>
      </section>

      {/* Exam format */}
      <section className="py-16">
        <div className="container mx-auto max-w-5xl px-6">
          <h2 className="text-3xl font-bold mb-4">Exam Format: Basic, Method, and Specific</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-3xl">
            Level III examination has up to three parts, and understanding which ones apply to you matters before you start preparing.
          </p>
          <div className="space-y-4">
            <Card className="border-0 shadow-sm">
              <CardHeader className="flex flex-row items-center gap-3 pb-2"><FileText className="w-6 h-6 text-primary" /><CardTitle className="text-lg">Basic examination</CardTitle></CardHeader>
              <CardContent><p className="text-muted-foreground text-sm leading-relaxed">Materials and processes, common discontinuities, the certification schemes themselves (SNT-TC-1A, CP-189), and an overview of methods you are not certifying in. Taken once — it carries across every method you later add.</p></CardContent>
            </Card>
            <Card className="border-0 shadow-sm">
              <CardHeader className="flex flex-row items-center gap-3 pb-2"><FileText className="w-6 h-6 text-primary" /><CardTitle className="text-lg">Method examination</CardTitle></CardHeader>
              <CardContent><p className="text-muted-foreground text-sm leading-relaxed">One per method sought — UT, RT, MT, PT, ET, VT and others — covering principles, equipment, technique selection, interpretation, codes and standards, and procedure development for that specific method.</p></CardContent>
            </Card>
            <Card className="border-0 shadow-sm">
              <CardHeader className="flex flex-row items-center gap-3 pb-2"><FileText className="w-6 h-6 text-primary" /><CardTitle className="text-lg">Specific examination (employer-optional)</CardTitle></CardHeader>
              <CardContent><p className="text-muted-foreground text-sm leading-relaxed">Covers the codes, standards and procedures used at a particular employer. Only required where that employer's Written Practice calls for it — not a universal ASNT requirement for every Level III candidate.</p></CardContent>
            </Card>
          </div>
          <p className="text-sm text-muted-foreground mt-6 max-w-3xl">Where candidates typically lose marks: codes and standards familiarity beyond recognising a title, procedure development qualified for a specific material and geometry rather than generic, and materials-and-processes content on the Basic exam that single-method specialists often underestimate.</p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto max-w-4xl px-6">
          <h2 className="text-3xl font-bold mb-4 text-center">A Realistic Timeline to Level III</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-10 text-center max-w-2xl mx-auto">
            Exam preparation is measured in weeks. The experience-hour requirement is measured in years — it is the actual constraint on when you can sit for Level III.
          </p>
          <div className="space-y-4">
            {timeline.map((t) => (
              <div key={t.step} className="flex gap-4 items-start bg-background rounded-lg p-4 shadow-sm">
                <div className="flex-shrink-0 w-9 h-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">{t.step}</div>
                <div>
                  <h3 className="font-semibold mb-1">{t.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{t.detail}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-sm text-muted-foreground mt-6 text-center max-w-2xl mx-auto">For a candidate already holding Level II, roughly 18 to 36 months of further qualifying experience is typical before enough documented hours exist to sit for Level III — the same order of magnitude cited for Level II → Level III progression on our ASNT certification guide.</p>
        </div>
      </section>

      {/* Who certifies you */}
      <section className="py-16">
        <div className="container mx-auto max-w-5xl px-6">
          <h2 className="text-3xl font-bold mb-4">Who Certifies You: Employer or ASNT Directly</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-3xl">
            Level III is the one level where both certifying paths genuinely apply, and the difference matters more here than at Level I or II because Level III is a named-authority role.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-0 shadow-sm">
              <CardHeader><CardTitle className="text-lg">Employer-issued (SNT-TC-1A / CP-189)</CardTitle></CardHeader>
              <CardContent><p className="text-muted-foreground text-sm leading-relaxed">Appointed by your employer's own Written Practice once the required exams are passed and the experience requirement is met. This Level III is tied to that employer, the same relationship structure as Level I and II under SNT-TC-1A.</p></CardContent>
            </Card>
            <Card className="border-0 shadow-sm">
              <CardHeader><CardTitle className="text-lg">ASNT-issued (ASNT NDT Level III / ACCP)</CardTitle></CardHeader>
              <CardContent><p className="text-muted-foreground text-sm leading-relaxed">Issued directly by ASNT as a portable, third-party credential that follows you between employers — the same programme structure that makes ACCP Level II portable, extended to Level III.</p></CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Delivery model + refresher */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto max-w-5xl px-6">
          <h2 className="text-3xl font-bold mb-4">Delivery Model: Online Prep, In-Person Proctored Exam</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-3xl">
            Level III preparation is where "online training" and "in-person exam" genuinely split, and understanding the split up front avoids the most common confusion candidates have about this level.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-0 shadow-sm">
              <CardHeader className="pb-2">
                <Monitor className="w-8 h-8 text-primary mb-2" />
                <CardTitle>Online exam preparation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed">Materials science, code interpretation, procedure-writing practice and exam-technique coaching for the Basic and Method exams, delivered live-virtual or self-paced. This is the part most "asnt level 3 online training" searches are actually looking for.</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-sm">
              <CardHeader className="pb-2">
                <Building2 className="w-8 h-8 text-primary mb-2" />
                <CardTitle>In-person proctored exam</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed">The Basic, Method and Specific examinations require in-person, proctored testing under ASNT rules — no legitimate provider offers a fully online Level III exam, regardless of how the preparation was delivered.</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-sm">
              <CardHeader className="pb-2">
                <RotateCcw className="w-8 h-8 text-primary mb-2" />
                <CardTitle>Refresher / recertification prep</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed">For candidates renewing rather than certifying for the first time: a focused review of what has changed in the relevant codes and standards since your last cycle, plus a condensed pass over Basic and Method exam content — not a restart from zero.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="container mx-auto max-w-4xl px-6">
          <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((f) => (
              <div key={f.question} className="bg-secondary/20 p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-lg mb-2">{f.question}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{f.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Start Your Level III Preparation</h2>
          <p className="text-muted-foreground mb-8">Tell us which method and which certifying path (employer SNT-TC-1A/CP-189 or ASNT-issued) you're working toward, and we'll come back with a preparation plan.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/training#training-enquiry">Ask About Level III Prep</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/contact">Request Information</Link>
            </Button>
          </div>
        </div>
      </section>

      <RelatedGuidesBlock links={[
        { title: "ASNT Certification Path", href: "/asnt-certification", description: "Level I/II/III route in one place", icon: "cert" },
        { title: "NDT Level 1 Training", href: "/ndt-level-1-training", description: "Prerequisites, hours and timeline for the entry level", icon: "training" },
        { title: "NDT Level 2 Training", href: "/ndt-level-2-training", description: "Prerequisites, hours and the ACCP pathway", icon: "training" },
        { title: "ASNT Level III Consulting Services", href: "/consulting/ndt-consulting-level-iii", description: "Hiring a Level III? Start here instead", icon: "consulting" },
        { title: "Inspection Procedures Management", href: "/erp/inspection-procedures-management-software", description: "Author + version-control NDT procedures", icon: "erp" },
        { title: "NDT Salary Guide 2026", href: "/blog/ndt-salary-guide-2026-global", description: "Pay by certification level", icon: "blog" },
      ]} />

      <ContactDetails />
    </div>
  );
}
