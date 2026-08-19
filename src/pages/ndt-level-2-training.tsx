import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import RelatedGuidesBlock from "@/components/RelatedGuidesBlock";
import QuickAnswerBox from "@/components/QuickAnswerBox";
import { Link } from "react-router-dom";
import { CheckCircle, Award, Monitor, Building2, ArrowRight, Briefcase, Globe } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import TrainingEnquiryCTA from "@/components/TrainingEnquiryCTA";

/**
 * /ndt-level-2-training — candidate-facing "how do I get NDT / ASNT Level II
 * certified" page, with a genuinely substantive ACCP section.
 *
 * WHY THIS PAGE EXISTS: GSC-confirmed queries — "ndt level 2 certification"
 * (7 impr/90d, pos 36.4), "asnt ndt level ii" (9 impr, pos 35.6), and
 * "accp level 2" (13 impr, pos 8.8 — already ranks well elsewhere, so the ACCP
 * pathway here needs to be a genuinely good, standalone section, not a
 * throwaway paragraph, per the approved plan).
 *
 * Audience: a CANDIDATE already holding (or close to holding) Level I, deciding
 * how to progress to Level II and whether to go SNT-TC-1A (employer) or ACCP
 * (third-party, portable). Not employer/buyer-facing.
 *
 * CLAUDE.md §18: no Atlantis pricing anywhere, including ASNT/ACCP third-party
 * exam fees — this page deliberately covers structure, not cost. No claimed
 * physical presence in any city; delivery framed like /ndt-training-online.
 */

const methodHours = [
  { method: "Ultrasonic Testing (UT)", slug: "ultrasonic-testing", train: "+40 hrs (80 cumulative)", ojt: "630 hrs cumulative" },
  { method: "Radiographic Testing (RT)", slug: "radiographic-testing", train: "+40 hrs (80 cumulative)", ojt: "630 hrs cumulative" },
  { method: "Eddy Current Testing (ET)", slug: "eddy-current-testing", train: "+40 hrs (80 cumulative)", ojt: "630 hrs cumulative" },
  { method: "Magnetic Particle Testing (MT)", slug: "magnetic-particle-testing", train: "+24 hrs (36 cumulative)", ojt: "390 hrs cumulative" },
  { method: "Liquid Penetrant Testing (PT)", slug: "penetrant-testing", train: "+16 hrs (24 cumulative)", ojt: "390 hrs cumulative" },
  { method: "Visual Testing (VT)", slug: "visual-testing", train: "+16 hrs (24 cumulative)", ojt: "390 hrs cumulative" },
];

const accpVsSnt = [
  { feature: "Who certifies you", snt: "Your employer, against its own Written Practice", accp: "ASNT directly — a central, third-party programme" },
  { feature: "Portability", snt: "Tied to that employer; re-certify when you change jobs", accp: "Portable — the credential moves with you between employers" },
  { feature: "Written Practice needed", snt: "Yes, your employer must maintain one", accp: "No — ASNT administers the whole programme centrally" },
  { feature: "Exam source", snt: "Employer selects or writes the exam", accp: "Standardised ASNT exam, same for every candidate" },
  { feature: "Available at Level I?", snt: "Yes", accp: "No — ACCP begins at Level II" },
  { feature: "Renewal", snt: "Set by employer's Written Practice", accp: "Fixed 5-year renewal cycle" },
  { feature: "Typical use", snt: "Most common route across oil & gas, petrochemical, power generation", accp: "Preferred where portability matters — multi-site employers, aerospace, government work" },
];

const faqs = [
  { question: "What are the prerequisites for NDT Level II certification?", answer: "You must already hold Level I certification in that method. Beyond that, SNT-TC-1A requires additional classroom training hours on top of your Level I hours, and additional logged on-the-job experience hours under a certified Level II or III. There is no separate degree requirement — the pathway is built entirely on stacking documented training and supervised experience on top of your existing Level I qualification." },
  { question: "How many additional training hours does Level II require?", answer: "It depends on the method and stacks on top of Level I. Ultrasonic (UT), Radiographic (RT) and Eddy Current (ET) each add 40 more classroom hours (80 cumulative through Level II). Magnetic Particle (MT) adds 24 hours (36 cumulative). Liquid Penetrant (PT) and Visual Testing (VT) each add 16 hours (24 cumulative). On-the-job experience hours also increase substantially — see the table on this page." },
  { question: "What is ACCP Level II?", answer: "ACCP (the ASNT Central Certification Program) is ASNT's third-party certification route, and Level II is the first level it covers — it does not certify Level I at all. Unlike SNT-TC-1A, where your employer certifies you against its own Written Practice, ACCP is administered directly by ASNT using a standardised exam, and the resulting certification is portable between employers rather than tied to one company." },
  { question: "ACCP Level II vs SNT-TC-1A Level II — which should I choose?", answer: "SNT-TC-1A is the dominant route across oil & gas, petrochemical and power generation, and is what most employer Written Practices are built around — it requires no separate ASNT exam fee and stays with your current employer. ACCP Level II makes more sense if portability matters to you specifically: multi-site employers, aerospace and government-adjacent work often prefer or require it because the credential does not need to be reissued when you change companies. Many technicians hold SNT-TC-1A first and add ACCP later once they know portability is worth pursuing." },
  { question: "Can I complete NDT Level II training online?", answer: "The classroom theory portion — calibration principles, acceptance-criteria interpretation, procedure reading — can be delivered online, the same as at Level I. The practical component (equipment setup, calibration, interpreting results on real specimens, and demonstrating supervisory judgement over Level I work) cannot be completed online under either SNT-TC-1A or ACCP; it requires real equipment and in-person assessment." },
  { question: "How long does it take to go from Level I to Level II?", answer: "Most technicians reach Level II within 6 to 12 months of holding Level I, assuming steady work in the method. The additional classroom hours are usually completed quickly; the additional logged experience hours are what sets the actual calendar, the same as the Level I timeline. Technicians in methods used only occasionally at their site can take longer simply because the experience hours accumulate more slowly." },
  { question: "What can a Level II technician do that a Level I technician cannot?", answer: "Level II technicians set up and calibrate equipment, interpret and evaluate results against acceptance criteria, write technique sheets within an established procedure, and supervise Level I technicians. Level I technicians perform tests and record data under Level II or III supervision, following written instructions without independently interpreting the results." },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map((f) => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } })),
};

const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "NDT Level II Certification Training",
  "description": "NDT Level II certification training per ASNT SNT-TC-1A and ACCP: additional classroom theory, calibration and interpretation practice, and exam preparation across UT, RT, MT, PT, ET and VT.",
  "provider": { "@type": "Organization", "name": "Atlantis NDT", "url": "https://atlantisndt.com" },
  "hasCourseInstance": [
    { "@type": "CourseInstance", "courseMode": "online", "description": "Live-virtual and self-paced theory modules" },
    { "@type": "CourseInstance", "courseMode": "onsite", "description": "In-person practical demonstration and on-the-job experience logging" },
  ],
  "educationalLevel": "Intermediate",
  "occupationalCredentialAwarded": "NDT Level II (SNT-TC-1A employer-certified, or ACCP third-party)",
};

export default function NdtLevel2Training() {
  return (
    <div className="min-h-screen pt-20 bg-white">
      <Navigation />
      <SEOHead
        title="NDT Level 2 Certification 2026 — ASNT Level II & ACCP Level 2 Guide"
        description="NDT Level 2 certification: prerequisites, additional training hours, realistic timeline, and a full ACCP Level 2 vs SNT-TC-1A comparison. Online theory + in-person practical."
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
            Level II is where you move from performing tests under supervision to interpreting results, calibrating equipment, and supervising Level I technicians. This page covers the prerequisites, the additional training hours per method, a realistic timeline, and a full comparison of the two certifying paths — SNT-TC-1A and ACCP Level II.
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

      <div className="container mx-auto max-w-5xl px-6">
        <QuickAnswerBox
          question="How do you get NDT Level 2 certification?"
          answer="You must already hold Level I in that method. From there, Level II adds further classroom training hours (16-40 additional hours depending on method), substantially more logged on-the-job experience, and a written plus practical exam covering calibration, interpretation and acceptance-criteria judgement. Certification comes either from your employer under SNT-TC-1A, or directly from ASNT under the portable ACCP programme."
          bullets={[
            "Requires Level I first — there is no direct-entry route to Level II",
            "Two certifying paths: employer-based SNT-TC-1A, or third-party portable ACCP",
            "ACCP is the only route to a portable NDT credential at Level II",
          ]}
        />
      </div>

      {/* Prerequisites */}
      <section className="py-16">
        <div className="container mx-auto max-w-5xl px-6">
          <h2 className="text-3xl font-bold mb-4">Prerequisites for NDT Level II</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-3xl">
            Level II has exactly one hard prerequisite: current Level I certification in the method you are advancing in. Everything else is additional documented training and experience stacked on top of that foundation.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-0 shadow-sm">
              <CardHeader className="pb-2">
                <CheckCircle className="w-8 h-8 text-primary mb-2" />
                <CardTitle>Existing Level I certification</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  You must hold current Level I certification in the specific method — Level II is method-specific, not a general upgrade. A technician certified Level I in MT and PT can advance to Level II in either method independently, on its own timeline.
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
                  Beyond the classroom hours, Level II requires substantially more cumulative on-the-job experience than Level I — supervised, logged, and verifiable. This is the step most candidates underestimate: it is judgement-building time, not just hour-counting.
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
            The Level II exam adds calibration, interpretation and acceptance-criteria judgement to the written and practical format used at Level I. Format specifics again depend on your certifying path — employer Written Practice for SNT-TC-1A, or ASNT's standardised exam for ACCP. The classroom and experience hours below stack on top of what you already logged at Level I.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse bg-background rounded-lg overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-primary/10">
                  <th className="text-left p-3 font-semibold border border-border">NDT Method</th>
                  <th className="text-left p-3 font-semibold border border-border">Additional Classroom Hours</th>
                  <th className="text-left p-3 font-semibold border border-border">On-the-Job Experience (Cumulative)</th>
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
          <p className="text-xs text-muted-foreground mt-4">Figures are SNT-TC-1A recommended minimums, consistent with the method table on our <Link to="/asnt-certification" className="text-primary underline">ASNT certification guide</Link>. Your employer's Written Practice (SNT-TC-1A) or the ASNT ACCP handbook governs the exact hours that apply to you.</p>
        </div>
      </section>

      {/* Realistic timeline */}
      <section className="py-16">
        <div className="container mx-auto max-w-4xl px-6">
          <h2 className="text-3xl font-bold mb-4 text-center">A Realistic Timeline to Level II</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6 text-center max-w-2xl mx-auto">
            Most technicians reach Level II within 6 to 12 months of holding Level I, provided the method sees steady use at their site. The pacing driver is the same as at Level I: classroom hours can be finished quickly, but supervised experience hours accumulate at the speed of the actual work available to you.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed text-center max-w-2xl mx-auto">
            Candidates in a method used only occasionally — a specialised technique performed on a handful of jobs a year, for example — should expect the experience-hour requirement to extend the timeline well beyond 12 months, regardless of how quickly the classroom portion is finished.
          </p>
        </div>
      </section>

      {/* ACCP section — genuinely substantive per the plan */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto max-w-5xl px-6">
          <h2 className="text-3xl font-bold mb-4">ACCP Level II: The Portable, Third-Party Pathway</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-3xl">
            ACCP — the ASNT Central Certification Program — is the one point in the entire NDT certification structure where a candidate can hold a credential that is not tied to a single employer. It starts at Level II; there is no ACCP Level I. Instead of your employer writing a Written Practice and certifying you against it, ASNT administers the whole programme directly: a standardised exam, a certificate issued by ASNT, and a fixed renewal cycle that follows you rather than your job.
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse bg-background rounded-lg overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-primary/10">
                  <th className="text-left p-3 font-semibold border border-border">Feature</th>
                  <th className="text-left p-3 font-semibold border border-border">SNT-TC-1A (Employer-Based)</th>
                  <th className="text-left p-3 font-semibold border border-border">ACCP (ASNT Central Certification)</th>
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
                <CardTitle>When ACCP is worth pursuing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  ACCP earns its value when portability actually matters to you: multi-site employers who want one credential valid across locations, aerospace and government-adjacent work where a third-party credential is often preferred or specified, and technicians who expect to change employers and do not want to re-certify from scratch each time.
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
                  SNT-TC-1A remains the dominant route across oil & gas, petrochemical and power generation, and is what most employer Written Practices are already built around. If your employer already runs a mature Written Practice and you have no near-term plan to change companies, staying on SNT-TC-1A is the more direct path — many technicians add ACCP later, once portability becomes relevant.
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
            The same split that applies at Level I applies here, and for the same reason: SNT-TC-1A and ACCP both allow theory to be delivered remotely but both require the practical and experience components to happen with real equipment, in person, available nationwide on request.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-0 shadow-sm">
              <CardHeader className="pb-2">
                <Monitor className="w-8 h-8 text-primary mb-2" />
                <CardTitle>Theory — delivered online</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Live-virtual sessions and self-paced modules cover calibration principles, code and standard interpretation, and acceptance-criteria evaluation — the additional theory content that separates Level II from Level I.
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
                  Equipment setup, calibration and interpretation on real specimens, plus the supervised experience hours, happen at your employer's site or an arranged venue. Neither SNT-TC-1A nor ACCP accepts a fully online Level II pathway.
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

      <TrainingEnquiryCTA />
      <ContactDetails />
    </div>
  );
}
