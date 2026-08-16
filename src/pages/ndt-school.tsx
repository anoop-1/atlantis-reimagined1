/**
 * /ndt-school — school-intent owner page (Phase T2, 2026-08-16).
 *
 * WHY: the school cluster already ranks with no owning page (USA 90d:
 * "ndt school near me" p6.4 WITH clicks, "non destructive testing schools
 * near me" p3.5, "ndt school" p13.5 — 21 queries scattered across city pages
 * and the salary guide). This page owns the INSTITUTION question; proximity
 * intent stays with /ndt-training-near-me and the programme hub stays /training.
 *
 * The differentiator no school states: under SNT-TC-1A a school cannot certify
 * you — an employer does. CLAUDE.md §18 (no pricing) · §24.2 (no fabricated
 * presence — Houston named as the genuine base, no walk-in classroom claimed).
 *
 * The crawler-facing body lives in scripts/ndt-school-page-2026-08-16.mjs;
 * keep the two in substantive agreement when editing either.
 */
import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import EnquiryCaptureForm from "@/components/EnquiryCaptureForm";
import { Link } from "react-router-dom";
import { GraduationCap, ShieldQuestion, ClipboardCheck, ArrowRight } from "lucide-react";

const EVALUATION = [
  {
    q: "Who teaches, and what do they hold?",
    a: "The instructor should hold a current ASNT Level III in the methods taught — ask, and expect a certificate number. A Level III teaching UT has passed the hardest examination in the field; a generic “instructor” may not have.",
  },
  {
    q: "What specimens will you actually scan?",
    a: "Practical competence is built on flawed specimens — welds with real lack of fusion, castings with real shrinkage, corroded plate. A school whose lab is two calibration blocks and a demo kit produces graduates who fail their first practical examination. Ask to see the specimen inventory.",
  },
  {
    q: "Are the hours documented to SNT-TC-1A's structure?",
    a: "Your future employer's Written Practice will require documented training hours per method. A school that issues a proper hours transcript saves you re-doing training later; one that issues a completion certificate with no hours breakdown may not.",
  },
  {
    q: "Which methods, and in what order?",
    a: "A school pushing you straight into radiography or advanced UT before the surface methods is optimising for its fee schedule, not your career.",
  },
  {
    q: "Do they tell you the truth about certification?",
    a: "Any school implying you leave “certified” — rather than trained and exam-ready — has failed the most basic honesty test in this industry. Walk away.",
  },
];

export default function NdtSchool() {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="NDT Schools — What They Teach, What They Can’t Certify, How to Choose | Atlantis NDT"
        description="What an NDT school actually provides, why no school can certify you under SNT-TC-1A, how to evaluate a program (instructors, specimens, documented hours), and the employer-based alternative."
        canonicalUrl="https://atlantisndt.com/ndt-school"
      />
      <Navigation />
      <Breadcrumbs items={[{ label: "Training", href: "/training" }, { label: "NDT Schools" }]} />

      {/* Hero + the direct answer (snippet-form, §25.4) */}
      <section className="bg-gradient-to-br from-[#003366] to-[#004aad] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            NDT Schools: What They Teach, What They Cannot Certify, and How to Choose One
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-3">What does an NDT school actually give you?</h2>
          <p className="text-lg text-white/90 max-w-3xl">
            An NDT school gives you classroom training hours, hands-on familiarity with equipment, and
            preparation for certification examinations — three genuinely valuable things. What it cannot
            give you is the certification itself: under SNT-TC-1A, the document that governs most US
            industrial NDT, <strong>certification is issued by an employer, not by a school</strong>.
            Understanding that single fact before you enrol anywhere will save you money and months.
          </p>
        </div>
      </section>

      <main className="max-w-4xl mx-auto px-4 py-12 space-y-14">
        <section>
          <div className="flex items-center gap-3 mb-4">
            <ShieldQuestion className="w-7 h-7 text-[#004aad]" />
            <h2 className="text-2xl md:text-3xl font-bold">Why no school can certify you — and what that means for your plan</h2>
          </div>
          <p className="text-muted-foreground mb-4">
            SNT-TC-1A is a recommended practice that tells an <em>employer</em> how to build its own
            certification programme: the employer adopts a Written Practice, counts your training hours,
            documents your supervised experience, administers your examinations, and issues a
            certification that is valid <em>within that employer's programme</em>. A school course counts
            toward the training hours — often all of them — but the experience hours and the
            certification decision belong to the company that hires you.
          </p>
          <p className="text-muted-foreground">
            Practical consequence: a school certificate is evidence of training, not a licence to work
            alone. Your first employer will still put you through their own programme. The plan that
            works is school (or employer-delivered training) for the knowledge, then a hiring employer
            for the hours and the certification — laid out step by step on the{" "}
            <Link to="/ndt-level-1-training" className="text-[#004aad] hover:underline">Level I</Link> and{" "}
            <Link to="/ndt-level-2-training" className="text-[#004aad] hover:underline">Level II</Link> paths.
          </p>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-6">
            <ClipboardCheck className="w-7 h-7 text-[#004aad]" />
            <h2 className="text-2xl md:text-3xl font-bold">How to evaluate an NDT school — five questions that separate them</h2>
          </div>
          <div className="space-y-5">
            {EVALUATION.map((e) => (
              <div key={e.q} className="border rounded-lg p-5">
                <h3 className="font-semibold text-lg mb-2">{e.q}</h3>
                <p className="text-muted-foreground">{e.a}</p>
              </div>
            ))}
          </div>
          <p className="text-muted-foreground mt-4">
            On method order specifically:{" "}
            <Link to="/blog/which-ndt-method-should-you-learn-first" className="text-[#004aad] hover:underline">
              which method to learn first
            </Link>{" "}
            covers the trade-offs honestly.
          </p>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-4">
            <GraduationCap className="w-7 h-7 text-[#004aad]" />
            <h2 className="text-2xl md:text-3xl font-bold">The routes that don't start at a school</h2>
          </div>
          <p className="text-muted-foreground mb-4">
            Plenty of working technicians never attended a standalone school.{" "}
            <strong>Employer-sponsored training</strong> is the most common route: a company hires you as
            a trainee and delivers the training itself or brings it on-site — this is exactly what
            Atlantis delivers, at the employer's facility under an ASNT Level III, so the training hours,
            the specimens and the Written Practice all line up from day one.{" "}
            <strong>Trade crossover</strong> is the second: welders, machinists and pipefitters carry
            directly relevant knowledge —{" "}
            <Link to="/blog/welder-to-ndt-technician-no-degree-path" className="text-[#004aad] hover:underline">
              the welder-to-NDT route
            </Link>{" "}
            is shorter than most people assume. <strong>Military experience</strong> is the third —{" "}
            <Link to="/blog/veterans-transitioning-into-ndt" className="text-[#004aad] hover:underline">
              veterans map onto NDT
            </Link>{" "}
            unusually well, and some service training counts toward hours.
          </p>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Looking for an NDT school in Houston?</h2>
          <p className="text-muted-foreground mb-4">
            Houston is the densest NDT employment market in North America — the ship channel refineries
            and chemical complexes, the fabrication belt, and the inspection companies that serve them —
            which is why “NDT school Houston” is one of the most-searched school queries in the country.
            Houston is also Atlantis's genuine home base. We do not operate a walk-in classroom; we
            deliver training on-site at employer facilities across the Gulf Coast, which for a company
            qualifying a crew is the better shape: your equipment, your procedures, your Written
            Practice. Individuals in Houston looking for a route in should read the{" "}
            <Link to="/ndt-training-houston" className="text-[#004aad] hover:underline">Houston training page</Link>{" "}
            for the local employer landscape and enquire below — cohorts form around employer demand.
          </p>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Where to go from here</h2>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-start gap-2"><ArrowRight className="w-5 h-5 mt-0.5 text-[#004aad] shrink-0" /><span><Link to="/blog/which-ndt-method-should-you-learn-first" className="text-[#004aad] hover:underline">Which method to learn first</Link> — if you are choosing where to start</span></li>
            <li className="flex items-start gap-2"><ArrowRight className="w-5 h-5 mt-0.5 text-[#004aad] shrink-0" /><span><Link to="/ndt-level-1-training" className="text-[#004aad] hover:underline">Level I</Link> and <Link to="/ndt-level-2-training" className="text-[#004aad] hover:underline">Level II</Link> requirements end to end</span></li>
            <li className="flex items-start gap-2"><ArrowRight className="w-5 h-5 mt-0.5 text-[#004aad] shrink-0" /><span><Link to="/blog/ndt-salary-guide-2026-global" className="text-[#004aad] hover:underline">The salary guide</Link> — what each step is worth</span></li>
            <li className="flex items-start gap-2"><ArrowRight className="w-5 h-5 mt-0.5 text-[#004aad] shrink-0" /><span><Link to="/blog/building-us-ndt-crew-certification-sequence" className="text-[#004aad] hover:underline">The crew certification sequence</Link> — if you are an employer building capability</span></li>
            <li className="flex items-start gap-2"><ArrowRight className="w-5 h-5 mt-0.5 text-[#004aad] shrink-0" /><span><Link to="/ndt-training-near-me" className="text-[#004aad] hover:underline">The location index</Link> — every US market with a real programme</span></li>
          </ul>
        </section>

        <section id="school-enquiry">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ask about training — individual or crew</h2>
          <EnquiryCaptureForm variant="training" />
        </section>
      </main>

      <ContactDetails />
    </div>
  );
}
