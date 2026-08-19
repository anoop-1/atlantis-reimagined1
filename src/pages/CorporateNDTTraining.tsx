import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { Link } from "react-router-dom";
import {
  Building2, Users, GraduationCap, Laptop2, Factory, Globe, CheckCircle2,
  Phone, ShieldCheck, BriefcaseBusiness, Award, Clock, MapPin,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import TrainingEnquiryCTA from "@/components/TrainingEnquiryCTA";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import {
  CORPORATE_TRAINING_CITIES,
  CORPORATE_HUB_PRIORITY_SLUGS,
} from "@/data/corporate-training-seo";

const HUB_FAQS = [
  {
    question: "What's the minimum batch size for a corporate NDT training engagement?",
    answer: "We run cohorts from 6 trainees upward for specialist methods (ACFM, PAUT for cryogenic service) and 10 upward for standard ASNT Level I/II methods. Below 6 trainees open-enrolment is generally more efficient. Pricing varies by region and scope — contact us for a tailored quote.",
  },
  {
    question: "Online vs onsite — which delivery mode should we choose?",
    answer: "Online wins for distributed teams, refresher cycles, and pre-work before a turnaround; onsite wins when your equipment (e.g. a specific OEM phased-array unit, a particular specimen geometry) is the training target. Blended is the most efficient for most clients: theory online, practicals onsite. Typical saving on blended vs pure onsite is 20-25%.",
  },
  {
    question: "Which certification schemes do you align to?",
    answer: "We default to the scheme that matches the client's written practice — ASNT SNT-TC-1A (US, most Asia), PCN/BINDT (UK), CGSB-48.9712 (Canada), EN ISO 9712 (Europe, most GCC), AINDT (Australia), ISNT IS 13805 (India), CSWIP (welding-adjacent). Every cohort graduates with an ASNT Level III countersignature for international recognition.",
  },
  {
    question: "How long is certification valid?",
    answer: "Typical validity is 5 years per ASNT SNT-TC-1A and most parallel schemes, with annual vision re-tests, ongoing OJT records, and a mid-cycle refresher often required. We include a free digital competence record for every trainee that tracks vision, OJT, and re-certification windows.",
  },
  {
    question: "How do we book a site visit to assess corporate training needs?",
    answer: "Contact us and we'll schedule a 30-minute discovery call within 2 business days. For engagements over 40 trainees we offer a no-cost onsite competence-gap assessment (typically half a day at your facility) before we quote.",
  },
  {
    question: "What does a corporate NDT technician training contract actually cover?",
    answer: "A standing training contract specifies cohort size (typically 6-25 technicians per batch), the method mix and level (UT, PAUT, TOFD, RT, MT, PT, ET, VT — each scoped independently), delivery mode (onsite, online, or blended), and a recertification cadence written into the contract term so Level II technicians renew on schedule rather than lapsing mid-assignment. We scope this against your written practice, not a generic syllabus.",
  },
  {
    question: "We're an NDT inspection company, not an asset owner — can you run group training for our own technician staff?",
    answer: "Yes — group NDT training for inspection company staff is one of our most common engagement types. Instead of training a single client's maintenance crew, we build bench strength across your roster of technicians who get deployed to multiple clients, structured as a standing contract with agreed cohort cadence, method coverage, and recertification scheduling rather than one-off bookings.",
  },
];

export default function CorporateNDTTraining() {
  const priorityCities = CORPORATE_HUB_PRIORITY_SLUGS
    .map(slug => CORPORATE_TRAINING_CITIES.find(c => c.slug === slug))
    .filter((c): c is NonNullable<typeof c> => !!c);

  const otherCities = CORPORATE_TRAINING_CITIES
    .filter(c => !CORPORATE_HUB_PRIORITY_SLUGS.includes(c.slug))
    .sort((a, b) => a.city.localeCompare(b.city));

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Corporate NDT Training Contracts | Group Technician Training for Inspection Companies | 55+ Cities"
        description="Corporate NDT technician training contracts for inspection companies and asset owners — group cohorts of your own bench staff, onsite at your facility, online for distributed crews, or blended. ASNT, PCN, ISO 9712 schemes, recertification built into the contract term, across 55+ cities. Book now."
        canonical="/corporate-ndt-training"
        course={{
          name: "Atlantis NDT — Corporate NDT Technician Training Contracts",
          description: "Corporate NDT technician training contracts delivered onsite at your facility, online for distributed teams, or blended — for asset owners training their own crew and for NDT inspection companies running group NDT training for inspection company staff. Covers ASNT Level I/II/III, PCN, ISO 9712, CGSB-48.9712, and local scheme variants across 55+ cities worldwide. Methods: UT, RT, MT, PT, ET, VT, PAUT, TOFD, ACFM, plus API 510/570/653 inspector certification. Recertification cadence built into the contract term.",
          deliveryMode: ['onsite', 'online', 'blended'],
          provider: 'Atlantis NDT',
          educationalCredentialAwarded: 'ASNT Level I/II/III (or parallel scheme) with digital competence record',
          educationalLevel: 'Intermediate',
        }}
        faq={HUB_FAQS}
      />
      <Navigation />

      <main className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <Breadcrumbs
            items={[
              { label: "Home", path: "/" },
              { label: "Training", path: "/training" },
              { label: "Corporate NDT Training" },
            ]}
          />

          {/* Hero */}
          <header className="mt-6 mb-16">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Corporate NDT Training
              <span className="block text-xl md:text-2xl font-medium text-muted-foreground mt-4">
                Online, onsite, or blended — across 55+ cities worldwide
              </span>
            </h1>
            <p className="text-lg text-muted-foreground mt-6 max-w-3xl">
              Bring your team from "can pass a written exam" to "can defend a PAUT scan to an auditor"
              in a single engagement. We deliver corporate NDT training at your facility, online for
              distributed teams, or a blended mix — in 55+ cities across the US, Middle East, Europe,
              India, APAC, and Africa. Aligned to ASNT SNT-TC-1A, PCN, CGSB-48.9712, EN ISO 9712, and
              local schemes, with ASNT Level III countersignature on every certificate.
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              <Link to="/contact" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium">
                <Phone className="w-4 h-4" /> Request a corporate quote
              </Link>
              <a href="#cities" className="inline-flex items-center gap-2 border px-6 py-3 rounded-md font-medium">
                <MapPin className="w-4 h-4" /> See all cities
              </a>
            </div>
          </header>

          {/* Why corporate */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Why corporate training — not individual enrolment</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg"><Clock className="w-5 h-5 text-primary" /> Compress ramp</CardTitle>
                </CardHeader>
                <CardContent className="text-sm">
                  <p>A 10-week individual ramp becomes a 5-week cohort when we align to your written practice, your equipment, and your inspection plan — not a generic textbook.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg"><ShieldCheck className="w-5 h-5 text-primary" /> Reduce downtime</CardTitle>
                </CardHeader>
                <CardContent className="text-sm">
                  <p>Trainees practice on your specimen geometries. The skills gap between a classroom-certified inspector and a production-ready one closes before the first turnaround, not during.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg"><Award className="w-5 h-5 text-primary" /> Unified competence record</CardTitle>
                </CardHeader>
                <CardContent className="text-sm">
                  <p>Every trainee gets a single auditable competence record with OJT, vision, written and practical exam history — exactly what your QA auditor (or a client audit) wants to see.</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Delivery modes */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Delivery modes — pick what fits your team</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-l-4 border-primary">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl"><Factory className="w-6 h-6" /> Onsite</CardTitle>
                </CardHeader>
                <CardContent className="text-sm space-y-3">
                  <p>Our trainer flies to your facility. Classroom is on your meeting-room projector; practicals are on your shop-floor specimens and your equipment.</p>
                  <ul className="space-y-1">
                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" /> Maximum relevance to your written practice</li>
                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" /> Trainees stay onsite; no travel cost</li>
                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" /> HSE-aligned to your plant from day one</li>
                  </ul>
                  <p className="text-muted-foreground"><strong>Best for:</strong> Refinery / petrochemical / MRO turnaround prep.</p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-primary">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl"><Laptop2 className="w-6 h-6" /> Online</CardTitle>
                </CardHeader>
                <CardContent className="text-sm space-y-3">
                  <p>Live-led theory via video + interactive virtual labs streaming real UT / PAUT signal acquisition from our regional hub labs in Houston, Dubai, Mumbai, and Singapore.</p>
                  <ul className="space-y-1">
                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" /> Distributed teams in a single cohort</li>
                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" /> 25-35% lower cost than onsite</li>
                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" /> Asynchronous modules + live exam windows</li>
                  </ul>
                  <p className="text-muted-foreground"><strong>Best for:</strong> Refreshers, pre-turnaround theory pre-work, multi-site rollouts.</p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-primary">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl"><Globe className="w-6 h-6" /> Blended</CardTitle>
                </CardHeader>
                <CardContent className="text-sm space-y-3">
                  <p>Theory + written exam online. Hands-on practicals + specimen exam at your facility, delivered by a visiting trainer over a condensed 3-5 day window.</p>
                  <ul className="space-y-1">
                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" /> 20-25% cheaper than pure onsite</li>
                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" /> Less shop-floor disruption</li>
                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" /> Same ASNT Level III countersignature</li>
                  </ul>
                  <p className="text-muted-foreground"><strong>Best for:</strong> Most corporate engagements. This is our default recommendation.</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Method catalog */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Methods and credentials we deliver corporately</h2>
            <div className="grid md:grid-cols-4 gap-3 text-sm">
              {[
                "Ultrasonic Testing (UT) I / II / III",
                "Radiographic Testing (RT) I / II / III",
                "Magnetic Particle (MT) I / II",
                "Liquid Penetrant (PT) I / II",
                "Eddy Current (ET) I / II / III",
                "Visual Testing (VT) I / II",
                "Phased Array UT (PAUT) Level II",
                "Time-of-Flight Diffraction (TOFD)",
                "ACFM for subsea / offshore",
                "MFL tank-floor inspection",
                "API 510 pressure-vessel inspector",
                "API 570 piping inspector",
                "API 653 above-ground-tank inspector",
                "ASNT Level III certification prep",
                "NAS 410 / EN 4179 aerospace",
                "CSWIP 3.1 / 3.2 welding inspector",
              ].map((m, i) => (
                <div key={i} className="flex items-start gap-2 p-3 border rounded">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>{m}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Cities grid */}
          <section id="cities" className="mb-16">
            <h2 className="text-3xl font-bold mb-2">Corporate NDT Training — cities we serve</h2>
            <p className="text-muted-foreground mb-6 max-w-3xl">
              Each city page includes the local anchor industries, named employers we commonly train for,
              onsite travel radius, typical batch size, and city-specific FAQs. Pricing varies by region and scope — contact us for a tailored quote.
            </p>

            <h3 className="text-xl font-semibold mb-3">Priority hubs</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
              {priorityCities.map(c => (
                <Link
                  key={c.slug}
                  to={`/corporate-ndt-training/${c.slug}`}
                  className="block p-5 border-2 border-primary/20 rounded-lg hover:border-primary transition-colors bg-card"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="w-5 h-5 text-primary" />
                    <h3 className="font-semibold text-lg">{c.city}</h3>
                  </div>
                  <p className="text-xs text-muted-foreground line-clamp-3">{c.shortPitch}</p>
                  <p className="text-xs font-medium text-primary mt-2">Affordable. Accessible. Fully Customizable.</p>
                </Link>
              ))}
            </div>

            <h3 className="text-xl font-semibold mb-3">Additional cities</h3>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-2">
              {otherCities.map(c => (
                <Link
                  key={c.slug}
                  to={`/corporate-ndt-training/${c.slug}`}
                  className="block p-3 border rounded hover:border-primary transition-colors text-sm"
                >
                  <span className="font-medium">{c.city}</span>
                  <span className="text-muted-foreground text-xs ml-1">({c.country})</span>
                </Link>
              ))}
            </div>
          </section>

          {/* Training contracts for NDT inspection companies */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">
              Corporate NDT technician training contracts — built for inspection companies
            </h2>
            <p className="text-muted-foreground mb-6 max-w-3xl">
              Two different buyers land on this page. Asset owners (refineries, EPCs, fabrication
              yards) train their own maintenance and inspection staff for a specific turnaround or
              an ongoing program. NDT inspection service companies run <strong>group NDT training
              for inspection company staff</strong> — building bench strength across a roster of
              technicians who get deployed to multiple clients. For that second group, we structure
              the engagement as a standing <strong>corporate NDT technician training contract</strong>{" "}
              rather than a one-off course booking, so cohort cadence, method coverage, and
              recertification are agreed once and then run on a schedule.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg"><Users className="w-5 h-5 text-primary" /> Cohort sizing</CardTitle>
                </CardHeader>
                <CardContent className="text-sm">
                  <p>Contracts typically run 4-25 technicians per batch, scaled to your bench strength rather than a fixed class size. Specialist methods (PAUT, ACFM) usually run smaller batches than standard Level I/II UT/MT/PT cohorts.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg"><Building2 className="w-5 h-5 text-primary" /> Methods covered</CardTitle>
                </CardHeader>
                <CardContent className="text-sm">
                  <p>UT, PAUT, TOFD, RT, MT, PT, ET, VT, MFL and ACFM, each independently scoped by level (I/II/III), so a contract can mix a Level II PAUT specialist track with a broader Level I UT/MT/PT intake in the same cohort round.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg"><GraduationCap className="w-5 h-5 text-primary" /> Onsite vs online</CardTitle>
                </CardHeader>
                <CardContent className="text-sm">
                  <p>Onsite technician training at your facility when the equipment or specimen geometry is the point of the exercise; online for technicians already deployed across multiple client sites; blended when the crew needs both without the full onsite cost.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg"><BriefcaseBusiness className="w-5 h-5 text-primary" /> Recertification cycles</CardTitle>
                </CardHeader>
                <CardContent className="text-sm">
                  <p>A recertification / renewal cadence is written into the contract term itself — typically aligned to the 5-year SNT-TC-1A or CP-189 cycle plus annual vision checks — so technicians renew on schedule instead of lapsing mid-assignment.</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Engagement model */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
              <Clock className="w-7 h-7 text-primary" /> Engagement model — at a glance
            </h2>
            <Card>
              <CardContent className="pt-6 text-sm">
                <p className="mb-3">
                  <strong>Affordable. Accessible. Fully Customizable.</strong> Cohorts scale from compact 6-10 trainee specialist batches up to 20+ seat enterprise rollouts, delivered online, onsite, or blended.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" /> Trainer + written + practical exam + ASNT Level III countersignature included</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" /> Digital competence record for every trainee, auditable for 5 years</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" /> Free onsite competence-gap assessment for engagements over 40 trainees</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" /> Local-currency invoicing in USD, GBP, EUR, AED, SAR, INR, SGD, AUD, CAD</li>
                </ul>
                <p className="text-muted-foreground">Pricing varies by region and scope — contact us for a tailored quote, returned within 2 business days.</p>
              </CardContent>
            </Card>
          </section>

          {/* FAQs */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Corporate training — FAQs</h2>
            <Accordion type="single" collapsible>
              {HUB_FAQS.map((f, i) => (
                <AccordionItem key={i} value={`item-${i}`}>
                  <AccordionTrigger className="text-left">{f.question}</AccordionTrigger>
                  <AccordionContent className="text-sm">{f.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>

          {/* CTA */}
          <section className="mb-12">
            <Card className="bg-primary text-primary-foreground">
              <CardContent className="pt-10 pb-10 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to lift your team's NDT competence?
                </h2>
                <p className="max-w-2xl mx-auto mb-6 text-primary-foreground/90">
                  Tell us your city, your facility, and how many inspectors you want trained.
                  We'll come back with a method-mix recommendation, a delivery-mode plan,
                  and a quote — in 2 business days.
                </p>
                <Link to="/contact" className="inline-flex items-center gap-2 bg-background text-foreground px-8 py-4 rounded-md font-semibold">
                  <Phone className="w-5 h-5" /> Start a corporate training conversation
                </Link>
              </CardContent>
            </Card>
          </section>
        </div>
        <TrainingEnquiryCTA />
      <ContactDetails />
      </main>
    </div>
  );
}
