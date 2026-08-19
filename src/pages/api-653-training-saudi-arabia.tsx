import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MapPin, Award, CheckCircle, Factory } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import TrainingEnquiryCTA from "@/components/TrainingEnquiryCTA";

const URL = "https://atlantisndt.com/api-653-training-saudi-arabia";

const refSites = [
  { city: "Jubail", desc: "Saudi Aramco + SABIC integrated petrochem complex. ~600 storage tanks across SADAF, KEMYA, Petrokemya, Yanpet. Continuous turnaround inspection demand." },
  { city: "Yanbu", desc: "Saudi Aramco Yanbu Refinery + SAMREF + YASREF + PetroRabigh. Crude / products / petrochem terminals. API 653 inspectors needed for tank hydrotesting + shell repair." },
  { city: "Ras Tanura", desc: "Saudi Aramco's largest crude export terminal. ~120 large-diameter floating-roof tanks. API 653 + API 575 + API 651 cathodic protection focus." },
  { city: "Riyadh", desc: "Headquarter base for Aramco / SABIC engineering teams. Atlantis NDT Riyadh batches serve corporate sponsorship programs and Vision 2030 contractors." },
  { city: "Dammam / Eastern Province", desc: "Aramco Northern Area, Berri/Khurais GOSPs, Tanajib offshore. Tank farms supporting upstream production." },
];

const codes = [
  "API 653 — Tank Inspection, Repair, Alteration, and Reconstruction",
  "API 650 — Welded Tanks for Oil Storage (new construction)",
  "API 651 — Cathodic Protection of Aboveground Petroleum Storage Tanks",
  "API 652 — Lining of Aboveground Petroleum Storage Tank Bottoms",
  "API 571 — Damage Mechanisms Affecting Fixed Equipment",
  "API 575 — Inspection Practices for Atmospheric / Low-Pressure Tanks",
  "API 577 — Welding Inspection and Metallurgy",
  "ASME Section V — Nondestructive Examination",
  "ASME Section IX — Welding & Brazing Qualifications",
  "AWS D1.1 — Structural Welding Code (Steel)",
];

const faqs = [
  { question: "Where in Saudi Arabia is API 653 training delivered?", answer: "Atlantis NDT runs API 653 5-day exam prep in Jubail (Royal Commission area), Yanbu (Industrial City), and Riyadh (Olaya / Ar Rabwah). On-site corporate batches at Saudi Aramco / SABIC affiliates and Vision 2030 contractors. ProMetric exam centers in Riyadh, Jeddah, Dhahran." },
  { question: "Is API 653 recognized by Saudi Aramco?", answer: "Yes. Saudi Aramco SAEP-1142 and SABIC SAFCS specify API 653 as the required certification for aboveground storage tank inspectors. Aramco-approved contractors must staff API 653 certified inspectors for SAEP-359 tank inspection programs." },
  { question: "What's the API 653 inspector salary in Saudi Arabia?", answer: "API 653 certified inspectors in Saudi Arabia: SAR 18,000–32,000/month base salary, plus housing allowance (SAR 4,000–8,000/month), transport, and offshore/site premiums. Senior tank integrity engineers and Aramco-approved consultants: SAR 40,000–65,000/month." },
  { question: "How long does it take to prepare for the API 653 exam?", answer: "Atlantis NDT recommends 80–120 hours of dedicated study. Our 5-day classroom prep (40 hrs) covers all 10 reference codes with code-tab strategy + 200+ practice questions. Weekly self-study after the course closes the gap to exam-readiness in 4–6 weeks." },
  { question: "Can I take the API 653 exam in Saudi Arabia?", answer: "Yes. API uses ProMetric for all CBT exams. ProMetric centers in Saudi Arabia: Riyadh (Olaya + Sulaimaniyah), Jeddah (Al Salamah), Dhahran. You schedule directly with API after registering your application. Atlantis NDT helps with the application package + experience documentation." },
];

export default function API653TrainingSaudiArabia() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Course",
        "@id": `${URL}#course`,
        "name": "API 653 Training Saudi Arabia — Tank Inspector 5-Day Prep",
        "description": "API 653 Aboveground Storage Tank Inspector exam prep in Jubail, Yanbu, Riyadh, and on-site at Saudi Aramco / SABIC contractor facilities. 5-day intensive course covering 10 reference codes (API 650/651/652/653/571/575/577 + ASME V/IX + AWS D1.1).",
        "provider": { "@type": "Organization", "name": "Atlantis NDT", "url": "https://atlantisndt.com" },
        "url": URL,
        "occupationalCategory": "Tank Inspector",
        "educationalCredentialAwarded": "API 653 Certification",
        "hasCourseInstance": [
          { "@type": "CourseInstance", "courseMode": "blended", "eventAttendanceMode": "https://schema.org/MixedEventAttendanceMode", "courseWorkload": "PT40H", "location": { "@type": "Place", "name": "Saudi Arabia", "address": { "@type": "PostalAddress", "addressCountry": "SA" } } },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${URL}#faq`,
        "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } })),
      },
    ],
  };

  const localBusiness = {
    city: "Riyadh",
    country: "SA",
    serviceType: "API 653 Tank Inspector Training",
    description: "API 653 5-day exam prep in Saudi Arabia — Jubail, Yanbu, Riyadh, Ras Tanura. Saudi Aramco + SABIC + Vision 2030 contractor recognized.",
    lat: 24.7136,
    lng: 46.6753,
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      <SEOHead
        title="API 653 Training Saudi Arabia 2026 — Jubail, Yanbu, Riyadh"
        description="API 653 Aboveground Storage Tank Inspector training in Saudi Arabia: Jubail, Yanbu, Riyadh, Ras Tanura. 5-day exam prep, 10 reference codes (API 650/651/652/571/575/577 + ASME V/IX + AWS D1.1). 95% first-attempt pass rate. Saudi Aramco + SABIC + Vision 2030 contractor approved."
        keywords="API 653 training Saudi Arabia, API 653 Jubail, API 653 Yanbu, API 653 Riyadh, API 653 Ras Tanura, API 653 Saudi Aramco, tank inspector training Saudi Arabia, aboveground storage tank inspection Saudi, API 653 SAEP-1142, API 653 prep Riyadh, ProMetric Saudi Arabia API 653"
        canonical={URL}
        structuredData={structuredData}
        localBusiness={localBusiness}
      />
      <Breadcrumbs />

      <section className="bg-gradient-to-br from-blue-700 to-indigo-800 text-white pt-24 pb-16">
        <div className="container mx-auto max-w-6xl px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">Saudi Arabia — Aramco + SABIC Tank Inspector Hub</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">API 653 Training in Saudi Arabia — Jubail, Yanbu, Riyadh</h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl">
              5-day API 653 Aboveground Storage Tank Inspector exam prep delivered in Saudi Arabia. Saudi Aramco SAEP-1142 + SABIC SAFCS recognized. 10 reference codes (API 650 / 651 / 652 / 653 / 571 / 575 / 577 + ASME V / IX + AWS D1.1). 95% first-attempt pass rate.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/contact" className="px-6 py-3 bg-white text-blue-700 font-semibold rounded-lg hover:bg-blue-50">Request Saudi Brochure</Link>
              <Link to="/api-653-certification" className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500">Full API 653 Cert Guide</Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold mb-8">Training Locations & Refining Hubs</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {refSites.map(s => (
              <Card key={s.city}>
                <CardHeader><Factory className="w-6 h-6 text-blue-600 mb-2" /><CardTitle className="text-lg">{s.city}</CardTitle></CardHeader>
                <CardContent><p className="text-sm text-slate-600">{s.desc}</p></CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold mb-8">10 Reference Codes Covered</h2>
          <div className="grid md:grid-cols-2 gap-3">
            {codes.map((c, i) => (
              <div key={i} className="flex items-start gap-3 p-3 bg-slate-50 rounded">
                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-slate-700">{c}</span>
              </div>
            ))}
          </div>
          <p className="text-sm text-slate-500 mt-6">All codes provided in 5-day prep (latest editions per current API exam bulletin). Code-tabbing session on Day 1 — proven open-book navigation strategy used by 95% of our pass-rate cohort.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold mb-8">Course Format & Schedule</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader><CardTitle>5-Day Intensive (40 hours)</CardTitle></CardHeader>
              <CardContent>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>Day 1: API 653 + 650 deep-dive + code-tabbing strategy</li>
                  <li>Day 2: API 651 cathodic protection + 652 lining + 571 damage</li>
                  <li>Day 3: API 575 + 577 + ASME Section V (NDE)</li>
                  <li>Day 4: ASME Section IX + AWS D1.1 + calculations</li>
                  <li>Day 5: Mock exam + review + open-Q&A</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader><CardTitle>Saudi Aramco / SABIC Recognition</CardTitle></CardHeader>
              <CardContent>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>Aramco SAEP-1142 — qualified inspector requirement</li>
                  <li>Aramco SAEP-359 — tank inspection program</li>
                  <li>SABIC SAFCS — tank integrity contractor approval</li>
                  <li>Vision 2030 NEOM / Red Sea projects — pre-qualification</li>
                  <li>ProMetric exam centers: Riyadh, Jeddah, Dhahran</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <Card key={i}>
                <CardHeader><CardTitle className="text-lg">{f.question}</CardTitle></CardHeader>
                <CardContent><p className="text-slate-600">{f.answer}</p></CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-slate-100">
        <div className="container mx-auto max-w-6xl px-6">
          <h3 className="text-xl font-semibold mb-4">Related Resources</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 text-sm">
            <Link to="/api-653-certification" className="text-blue-600 hover:underline">Full API 653 Certification Guide →</Link>
            <Link to="/api-653-training" className="text-blue-600 hover:underline">API 653 Training (All Locations) →</Link>
            <Link to="/blog/api-653-tank-inspection-guide" className="text-blue-600 hover:underline">API 653 Tank Inspection Guide →</Link>
            <Link to="/api-510-training" className="text-blue-600 hover:underline">API 510 Pressure Vessel Training →</Link>
            <Link to="/api-570-training" className="text-blue-600 hover:underline">API 570 Piping Inspector Training →</Link>
            <Link to="/ndt-training-saudi-arabia" className="text-blue-600 hover:underline">NDT Training Saudi Arabia →</Link>
            <Link to="/ndt-consulting-jubail" className="text-blue-600 hover:underline">NDT Consulting Jubail →</Link>
            <Link to="/ndt-consulting-yanbu" className="text-blue-600 hover:underline">NDT Consulting Yanbu →</Link>
            <Link to="/asnt-certification" className="text-blue-600 hover:underline">ASNT Certification (SNT-TC-1A vs ACCP) →</Link>
          </div>
        </div>
      </section>

      <TrainingEnquiryCTA />
      <ContactDetails />
    </div>
  );
}
