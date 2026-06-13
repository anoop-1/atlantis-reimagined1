import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import ContactDetails from "@/components/ContactDetails";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Link } from "react-router-dom";
import { CheckCircle, BookOpen, ArrowRight, GraduationCap, Globe, Shield, ChevronDown } from "lucide-react";
import { useState } from "react";

const FAQS: { question: string; answer: string }[] = [
  {
    question: "What is included with the eLearning platform inside Atlantis NDT ERP?",
    answer: "eLearning is bundled inside the standard Atlantis NDT ERP subscription — no per-module licence. You get a full SCORM-compatible LMS: course builder with video, PDF and quiz support; ASNT SNT-TC-1A-aligned content modules (UT, RT, MT, PT, VT, ET, PAUT, TOFD); examination engine with timed quizzes and randomised question banks; certificate issuance via the Atlantis NDT ERP Certificates app; progress tracking by student, cohort, and course. Designed for NDT training providers, in-house corporate training programmes, and inspection-company technician development."
  },
  {
    question: "How is the eLearning platform configured for NDT training specifically?",
    answer: "Pre-loaded with ASNT SNT-TC-1A 2024 topical outlines for every method (UT, RT, MT, PT, VT, ET, PAUT, TOFD, ECA, LRUT, IRIS, MFL). Pre-built API 510 / 570 / 653 prep curricula with practice question banks. Built-in vision-test scheduling per ASNT requirements (Jaeger near vision, Ishihara colour). ISO 9712 multi-sector tracks (oil & gas, aerospace, power generation, fabrication). Multi-language UI: English, Arabic, French, Spanish, Hindi, Bahasa, Mandarin. Custom branding so your training-provider business can run a fully white-labelled academy."
  },
  {
    question: "Can the eLearning platform integrate with our existing systems?",
    answer: "Yes. SCORM 1.2 and SCORM 2004 compatible — import courses from Articulate, iSpring, Adobe Captivate. SSO via SAML 2.0, Microsoft Azure AD, Google Workspace, Okta. Stripe, PayPal, Razorpay and HitPay for online course sales. Direct integration with the Atlantis NDT ERP CRM (lead-to-student conversion), Sales (course quoting), Certificates (issue ASNT/ISO 9712 certs on completion) and Invoicing (recurring subscription or one-off purchase). Open REST API for custom integrations."
  },
  {
    question: "What does implementation look like for the eLearning platform?",
    answer: "Standard rollout 4–6 weeks. Week 1: import existing course content (videos, PDFs, slides), set up cohorts, configure branding. Week 2: load examination question banks per method, configure timer rules. Week 3: integrate payment gateway and SSO. Week 4: dry-run with internal users, calibrate auto-grading. Week 5–6: launch with pilot cohort, gather feedback, scale. Dedicated Customer Success Manager owns the first 12 months. We supply baseline ASNT-aligned content for organisations starting from zero."
  },
  {
    question: "Is the data secure and compliant with regional data-protection laws?",
    answer: "Yes. ISO 27001-certified infrastructure with US, EU, UAE, Saudi (in-Kingdom), India and Singapore data residency. GDPR, PDPL (Saudi / UAE / Bahrain), DPDP Act 2023 (India), CCPA / CPRA, PIPEDA, Singapore PDPA, and FERPA (US student records) compliant. AES-256 at rest, TLS 1.3 in transit. Student data never used for AI training, never sold."
  }
];

export default function ELearningPlatformForNdtTraining() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white">
      <SEOHead
        title="eLearning Platform for NDT Training Providers — Affordable LMS"
        description="Run ASNT/API training programs online. Course builder, quiz engine, ASNT-aligned modules, SCORM-compatible. Affordable, accessible, fully customizable. Demo on request."
        canonical="/erp/elearning-platform-for-ndt-training"
        faq={FAQS}
      />
      <Navigation />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-6xl">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "ERP", href: "/erp" }, { label: "eLearning Platform for NDT Training" }]} />

        <section className="mt-6 mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
            eLearning Platform for NDT Training Providers
          </h1>
          <p className="text-xl text-slate-300 mb-6 max-w-3xl leading-relaxed">
            Run your ASNT and API training programmes online. <span className="text-emerald-400 font-semibold">Course builder, quiz engine, ASNT-aligned content modules, SCORM-compatible.</span> Designed for NDT training providers, corporate training programmes and inspection-company technician development. <span className="text-emerald-400 font-semibold">Affordable. Accessible. Fully Customizable.</span>
          </p>
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 rounded-lg px-4 py-2 text-emerald-300"><GraduationCap className="w-4 h-4" /><span className="font-semibold">Affordable</span></div>
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 rounded-lg px-4 py-2 text-blue-300"><Shield className="w-4 h-4" /><span className="font-semibold">ASNT / ISO 9712 ready</span></div>
            <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/30 rounded-lg px-4 py-2 text-purple-300"><Globe className="w-4 h-4" /><span className="font-semibold">Multi-region data residency</span></div>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="mailto:info@atlantisndt.com?subject=Demo%20request%3A%20eLearning%20platform" className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">Request a demo <ArrowRight className="w-4 h-4" /></a>
            <Link to="/erp" className="inline-flex items-center gap-2 bg-slate-700 hover:bg-slate-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">See the full ERP suite</Link>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-5">What is the eLearning platform inside Atlantis NDT ERP?</h2>
          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-slate-300 leading-relaxed">
              The eLearning app inside Atlantis NDT ERP is a SCORM-compatible learning management system pre-loaded with ASNT SNT-TC-1A topical outlines, API 510 / 570 / 653 prep curricula and ISO 9712 multi-sector content tracks. You run it as your training-provider business&apos;s student-facing academy, your in-house corporate training portal, or both — same engine, separate cohorts. Course builders upload video, slides, PDFs and interactive quizzes. Examination engine handles timed assessments, randomised question banks and auto-grading against a master answer key. On completion, certificates are issued through the Atlantis NDT ERP Certificates app — QR-coded, e-signed, audit-trail logged.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-5">Key features for training providers, L&amp;D directors and NDT instructors</h2>
          <ul className="grid md:grid-cols-2 gap-x-8 gap-y-3 text-slate-200">
            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span>SCORM 1.2 + SCORM 2004 import support (Articulate, iSpring, Captivate)</span></li>
            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span>ASNT SNT-TC-1A 2024 aligned topical outlines per method</span></li>
            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span>API 510 / 570 / 653 prep question banks with timer + randomisation</span></li>
            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span>Vision-test scheduling per ASNT (Jaeger + Ishihara)</span></li>
            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span>Mobile-friendly student experience (Android + iOS)</span></li>
            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span>Cohort + classroom management with attendance + grading</span></li>
            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span>Multi-language UI (EN, AR, FR, ES, HI, BS, ZH)</span></li>
            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span>White-label branding for your academy</span></li>
            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span>Auto-issue ASNT / ISO 9712 certificates via Certificates app</span></li>
            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span>Open REST API for custom integrations</span></li>
          </ul>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-5">Integrations</h2>
          <ul className="grid md:grid-cols-2 gap-x-8 gap-y-3 text-slate-200">
            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span>SSO: SAML 2.0, Microsoft Azure AD, Google Workspace, Okta</span></li>
            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span>Payments: Stripe, PayPal, Razorpay, HitPay</span></li>
            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span>Atlantis CRM, Sales, Certificates, Invoicing apps</span></li>
            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span>Video hosting: native, Vimeo, Wistia, YouTube unlisted</span></li>
            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span>Zoom, Microsoft Teams live-class integration</span></li>
          </ul>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-5">Quote &amp; Onboarding</h2>
          <p className="text-slate-300">Pricing accessible across regions. Quote on request. Demo on request. Demo a fully-configured NDT academy in 30 minutes — <a href="mailto:info@atlantisndt.com" className="text-emerald-400 hover:underline">info@atlantisndt.com</a></p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-5">FAQ</h2>
          <div className="space-y-3">
            {FAQS.map((f, i) => (
              <button key={i} onClick={() => setOpenIdx(openIdx === i ? null : i)} className="w-full text-left bg-slate-800/50 hover:bg-slate-800 border border-slate-700 rounded-lg p-4 transition-colors">
                <div className="flex items-start justify-between gap-3">
                  <span className="font-semibold text-white">{f.question}</span>
                  <ChevronDown className={`w-5 h-5 flex-shrink-0 transition-transform ${openIdx === i ? "rotate-180" : ""}`} />
                </div>
                {openIdx === i && <p className="mt-3 text-slate-300 leading-relaxed">{f.answer}</p>}
              </button>
            ))}
          </div>
        </section>

        <ContactDetails />
      </main>
    </div>
  );
}
