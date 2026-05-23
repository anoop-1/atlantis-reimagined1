import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { RelatedCityProducts } from "@/components/RelatedProducts";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { GraduationCap, MapPin, Award, Factory, Ship, Briefcase } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const URL = "https://atlantisndt.com/ndt-training-jakarta";

const courses = [
  { method: "Ultrasonic Testing (UT)", levelI: "40 hrs", levelII: "80 hrs", standard: "ASNT SNT-TC-1A / ISO 9712" },
  { method: "Radiographic Testing (RT)", levelI: "40 hrs", levelII: "80 hrs", standard: "ASNT SNT-TC-1A / ISO 9712" },
  { method: "Magnetic Particle (MT)", levelI: "16 hrs", levelII: "40 hrs", standard: "ASNT SNT-TC-1A" },
  { method: "Liquid Penetrant (PT)", levelI: "16 hrs", levelII: "40 hrs", standard: "ASNT SNT-TC-1A" },
  { method: "Eddy Current (ET)", levelI: "40 hrs", levelII: "80 hrs", standard: "ASNT SNT-TC-1A" },
  { method: "Phased Array UT (PAUT)", levelI: "40 hrs", levelII: "80 hrs", standard: "ASNT / CSWIP" },
  { method: "Time of Flight Diffraction (TOFD)", levelI: "40 hrs", levelII: "40 hrs", standard: "ASNT / CSWIP" },
  { method: "Visual Testing (VT)", levelI: "16 hrs", levelII: "24 hrs", standard: "ASNT / AWS CWI" },
];

const apiCourses = [
  { code: "API 510", title: "Pressure Vessel Inspector", duration: "5-day prep", target: "Pertamina refineries — Cilacap, Balikpapan, Dumai. ASME VIII Div 1 vessel inspection." },
  { code: "API 570", title: "Piping Inspector", duration: "5-day prep", target: "Petrokimia complexes — Tuban, Bontang LNG, Cilegon. ASME B31.3 process piping." },
  { code: "API 653", title: "Storage Tank Inspector", duration: "5-day prep", target: "Pertamina terminals — Plumpang, Tanjung Priok, Surabaya. API 650 / 651 tank farms." },
];

const whyJakarta = [
  { icon: Factory, title: "Pertamina + State Energy Hub", text: "Indonesia's state energy giant Pertamina operates 6 major refineries (Cilacap 348 MBPD, Balikpapan, Dumai, Plaju, Balongan, Kasim). Continuous turnaround demand for ASNT Level II inspectors and API 510/570/653 certified professionals." },
  { icon: Ship, title: "LNG + Offshore Sector", text: "Bontang LNG (Kalimantan), Tangguh LNG (Papua), Donggi-Senoro LNG (Sulawesi). Jakarta-based EPCs (Tripatra, Rekayasa Industri) need PAUT / TOFD / RT for cryogenic piping and platform topsides." },
  { icon: Briefcase, title: "Petrokimia + Mining Crossover", text: "Petrokimia Gresik, Pupuk Indonesia, Krakatau Steel, plus Freeport Indonesia and Vale mining operations. Multi-industry NDT careers serving fertilizer, steel, mining, and energy." },
];

const faqs = [
  { question: "Where is NDT training in Jakarta conducted?", answer: "Atlantis NDT delivers blended training in Jakarta — theory online or at partner classrooms in South Jakarta (Sudirman / Kuningan business district), practical and exam at our partner Bekasi or Cilegon training facility. Public batches quarterly; corporate batches on-site at Pertamina, Petrokimia, or contractor facilities." },
  { question: "Is ASNT or ISO 9712 better for Indonesia?", answer: "Both accepted. Pertamina, Pupuk Indonesia, and Krakatau Steel historically use ASNT SNT-TC-1A. International EPCs (Tripatra, Rekind, McDermott Indonesia) increasingly require ISO 9712. Atlantis NDT prep covers both — single course, dual certification path." },
  { question: "What does API 510 / 570 / 653 prep cost in Jakarta?", answer: "Atlantis 5-day API exam prep is IDR 38–42 juta per course (group corporate rates available). API exam fee paid separately to API ($730 / IDR 11.5 juta). Total typical investment: IDR 50–55 juta per certification including code books." },
  { question: "How fast can I get NDT Level II certified in Indonesia?", answer: "UT / RT Level II: 6-8 weeks (40 hr Level I + 80 hr Level II + supervised OJT). MT / PT Level II: 3-4 weeks. Atlantis NDT runs accelerated pathways for Pertamina contractor sponsorship." },
  { question: "Is the salary good for NDT inspectors in Indonesia?", answer: "NDT Level II in Indonesia: IDR 12–22 juta/month. Level III: IDR 35–65 juta/month. PAUT specialists with offshore experience: IDR 4–8 juta/day on day-rate. API 510/570/653 certified: 30-45% premium over baseline." },
  { question: "Do you train PAUT / TOFD in Jakarta?", answer: "Yes. PAUT and TOFD Level II run as 80-hour intensive courses with hands-on practicals. Required for Bontang LNG turnaround inspections and Pertamina refinery PAUT-replacing-RT programs." },
];

export default function NDTTrainingJakarta() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Course",
        "@id": `${URL}#course`,
        "name": "NDT Training Jakarta — ASNT, ISO 9712, API 510/570/653",
        "description": "Comprehensive NDT and API inspector training in Jakarta, Indonesia. UT, RT, MT, PT, ET, VT, PAUT, TOFD per ASNT SNT-TC-1A and ISO 9712. API 510/570/653 5-day exam prep. Pertamina + Petrokimia + LNG sector focus.",
        "provider": { "@type": "Organization", "name": "Atlantis NDT", "url": "https://atlantisndt.com" },
        "url": URL,
        "hasCourseInstance": [
          { "@type": "CourseInstance", "courseMode": "blended", "eventAttendanceMode": "https://schema.org/MixedEventAttendanceMode", "location": { "@type": "Place", "name": "Jakarta", "address": { "@type": "PostalAddress", "addressLocality": "Jakarta", "addressCountry": "ID" } } },
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
    city: "Jakarta",
    country: "ID",
    serviceType: "NDT Training",
    description: "ASNT, ISO 9712, and API 510/570/653 inspector training in Jakarta — Pertamina, Petrokimia, and LNG sector focus.",
    lat: -6.2088,
    lng: 106.8456,
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      <SEOHead
        title="NDT Training Jakarta 2026 — ASNT, ISO 9712, API 510/570/653 Indonesia"
        description="NDT and API inspector training in Jakarta, Indonesia: UT, RT, MT, PT, ET, PAUT, TOFD per ASNT SNT-TC-1A and ISO 9712. API 510/570/653 5-day prep. Pertamina + Petrokimia + Bontang LNG focus. ASNT Level III instructors. 95% first-attempt pass rate."
        keywords="NDT training Jakarta, NDT training Indonesia, API 510 Indonesia, API 570 Indonesia, API 653 Indonesia, ASNT certification Jakarta, ISO 9712 Indonesia, PAUT training Indonesia, Pertamina NDT training, Bontang LNG NDT, pressure vessel inspector Indonesia, piping inspector Indonesia"
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
              <span className="text-sm">Jakarta — Pertamina + Petrokimia + LNG Hub</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">NDT Training in Jakarta — ASNT, ISO 9712, API 510/570/653</h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl">
              NDT and API inspector certification for Indonesia's energy sector. UT, RT, MT, PT, ET, PAUT, TOFD per ASNT SNT-TC-1A and ISO 9712. API 510 / 570 / 653 5-day exam prep with 95% first-attempt pass rate. Pertamina + Petrokimia + LNG operator-recognized.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/contact" className="px-6 py-3 bg-white text-blue-700 font-semibold rounded-lg hover:bg-blue-50">Request Jakarta Brochure</Link>
              <Link to="/api-510-certification" className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500">API 510 Prep Details</Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold mb-8">Why NDT Training in Jakarta?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {whyJakarta.map((w, i) => (
              <Card key={i}>
                <CardHeader><w.icon className="w-8 h-8 text-blue-600 mb-2" /><CardTitle className="text-lg">{w.title}</CardTitle></CardHeader>
                <CardContent><p className="text-slate-600">{w.text}</p></CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold mb-2">API Inspector Certification — Indonesia</h2>
          <p className="text-slate-600 mb-8">Indonesia's Pertamina refineries, Bontang/Tangguh LNG, and petrochemical complexes demand API 510, 570, and 653 inspectors. 5-day exam prep, code-book-based open-book exam coaching, 95% first-attempt pass rate.</p>
          <div className="grid md:grid-cols-3 gap-6">
            {apiCourses.map(c => (
              <Card key={c.code} className="border-l-4 border-blue-600">
                <CardHeader>
                  <div className="flex items-center justify-between"><CardTitle className="text-2xl">{c.code}</CardTitle><Award className="w-6 h-6 text-blue-600" /></div>
                  <p className="text-sm font-semibold text-slate-700">{c.title}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 mb-3">{c.target}</p>
                  <p className="text-sm text-slate-500 border-t pt-2">{c.duration}</p>
                  <Link to={`/${c.code.toLowerCase().replace(' ', '-')}-certification`} className="block mt-3 text-blue-600 text-sm hover:underline">View {c.code} prep details →</Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold mb-8">NDT Method Training — All Levels</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-lg shadow-sm">
              <thead className="bg-slate-100">
                <tr>
                  <th className="text-left px-4 py-3">Method</th>
                  <th className="text-left px-4 py-3">Level I</th>
                  <th className="text-left px-4 py-3">Level II</th>
                  <th className="text-left px-4 py-3">Standard</th>
                </tr>
              </thead>
              <tbody>
                {courses.map((c, i) => (
                  <tr key={i} className="border-t">
                    <td className="px-4 py-3 font-medium">{c.method}</td>
                    <td className="px-4 py-3 text-slate-600">{c.levelI}</td>
                    <td className="px-4 py-3 text-slate-600">{c.levelII}</td>
                    <td className="px-4 py-3 text-sm text-slate-500">{c.standard}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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
            <Link to="/api-510-certification" className="text-blue-600 hover:underline">API 510 Pressure Vessel Inspector Certification →</Link>
            <Link to="/api-570-certification" className="text-blue-600 hover:underline">API 570 Piping Inspector Certification →</Link>
            <Link to="/api-653-certification" className="text-blue-600 hover:underline">API 653 Tank Inspector Certification →</Link>
            <Link to="/asnt-certification" className="text-blue-600 hover:underline">ASNT Certification — SNT-TC-1A vs ACCP →</Link>
            <Link to="/ndt-consulting-jakarta" className="text-blue-600 hover:underline">NDT Consulting in Jakarta →</Link>
            <Link to="/ndt-training-singapore" className="text-blue-600 hover:underline">NDT Training Singapore →</Link>
            <Link to="/ndt-training-india" className="text-blue-600 hover:underline">NDT Training India →</Link>
            <Link to="/ndt-training-online" className="text-blue-600 hover:underline">NDT Training Online / Virtual →</Link>
            <Link to="/training-me" className="text-blue-600 hover:underline">NDT Training — Middle East Region →</Link>
          </div>
        </div>
      </section>

      <section className="py-8 bg-white border-t border-slate-200">
        <div className="container mx-auto max-w-6xl px-6">
          <RelatedCityProducts currentProduct="training" citySlug="jakarta" city="Jakarta" />
        </div>
      </section>

      <ContactDetails />
    </div>
  );
}
