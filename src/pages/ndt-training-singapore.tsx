import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { RelatedCityProducts } from "@/components/RelatedProducts";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { GraduationCap, MapPin, Award, CheckCircle, Ship, Factory, Briefcase } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const URL = "https://atlantisndt.com/ndt-training-singapore";

const courses = [
  { method: "Ultrasonic Testing (UT)", levelI: "40 hrs", levelII: "80 hrs", standard: "ASNT SNT-TC-1A / ISO 9712 / PCN" },
  { method: "Radiographic Testing (RT)", levelI: "40 hrs", levelII: "80 hrs", standard: "ASNT SNT-TC-1A / ISO 9712" },
  { method: "Magnetic Particle (MT)", levelI: "16 hrs", levelII: "40 hrs", standard: "ASNT SNT-TC-1A / ISO 9712" },
  { method: "Liquid Penetrant (PT)", levelI: "16 hrs", levelII: "40 hrs", standard: "ASNT SNT-TC-1A / ISO 9712" },
  { method: "Eddy Current (ET)", levelI: "40 hrs", levelII: "80 hrs", standard: "ASNT SNT-TC-1A / ISO 9712" },
  { method: "Phased Array UT (PAUT)", levelI: "40 hrs", levelII: "80 hrs", standard: "ASNT / CSWIP / PCN" },
  { method: "Time of Flight Diffraction (TOFD)", levelI: "40 hrs", levelII: "40 hrs", standard: "ASNT / CSWIP" },
  { method: "Visual Testing (VT)", levelI: "16 hrs", levelII: "24 hrs", standard: "ASNT / ISO 9712 / AWS CWI" },
];

const apiCourses = [
  { code: "API 510", title: "Pressure Vessel Inspector", duration: "5-day prep", fee: "$2,495", target: "ASME VIII Div 1 vessels — refineries, petrochem, FPSO topsides" },
  { code: "API 570", title: "Piping Inspector", duration: "5-day prep", fee: "$2,495", target: "ASME B31.3 piping — process plants, marine fuel piping, LNG terminals" },
  { code: "API 653", title: "Aboveground Storage Tank Inspector", duration: "5-day prep", fee: "$2,495", target: "API 650 / 620 tanks — Jurong, Pulau Bukom, marine terminals" },
];

const whySG = [
  { icon: Factory, title: "Jurong Island Petrochem Hub", text: "100+ chemical plants on Jurong Island require API 510 / 570 / 653 inspectors and ASNT / ISO 9712 Level II technicians. Continuous turnaround demand." },
  { icon: Ship, title: "Marine + FPSO Sector", text: "Singapore is the world's largest FPSO conversion hub (Keppel, Sembcorp Marine). PAUT / TOFD / RT inspectors are in constant demand for hull, topside piping, and structural welds." },
  { icon: Briefcase, title: "Multi-Standard Alignment", text: "Singapore employers accept ASNT SNT-TC-1A, ISO 9712, and PCN. Atlantis NDT prep covers all three so you can work in Singapore, EU, ME, and Australia without re-certifying." },
];

const faqs = [
  { question: "Where is NDT training in Singapore conducted?", answer: "Atlantis NDT delivers blended training in Singapore — theory online or at partner classrooms, practical and exam at our partner Jurong-area training facility. Public batches run quarterly; corporate batches on-site at your facility." },
  { question: "Is ASNT or ISO 9712 better for Singapore?", answer: "Both are accepted. Major operators (ExxonMobil, Shell, ChevronPhillips, Vopak) historically use ASNT SNT-TC-1A. Marine and offshore EPCs (Keppel, Sembcorp, MODEC) increasingly require ISO 9712. Atlantis NDT prep covers both — single course, dual certification path." },
  { question: "How fast can I get NDT Level II certified in Singapore?", answer: "UT / RT Level II: 6-8 weeks (40 hr Level I + 80 hr Level II + supervised OJT). MT / PT Level II: 3-4 weeks. Atlantis NDT runs accelerated pathways for sponsored candidates from operators." },
  { question: "Do you train PAUT / TOFD in Singapore?", answer: "Yes. PAUT and TOFD Level II are run as 80-hour intensive courses with hands-on practicals on Olympus OmniScan and Sonatest equipment. Required for FPSO topside weld inspection and Jurong refinery turnarounds." },
  { question: "Is the salary good for NDT inspectors in Singapore?", answer: "NDT Level II in Singapore: SGD 5,500-9,000/month. Level III: SGD 12,000-22,000/month. PAUT specialists with offshore experience: SGD 800-1,500/day on day-rate. API 510/570/653 certified inspectors command 25-40% premium." },
];

export default function NDTTrainingSingapore() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Course",
        "@id": `${URL}#course`,
        "name": "NDT Training Singapore — ASNT, ISO 9712, PCN, API 510/570/653",
        "description": "Comprehensive NDT and API inspector training in Singapore. UT, RT, MT, PT, ET, VT, PAUT, TOFD per ASNT SNT-TC-1A, ISO 9712, and PCN. API 510/570/653 5-day exam prep. ASNT Level III instructors.",
        "provider": { "@type": "Organization", "name": "Atlantis NDT", "url": "https://atlantisndt.com" },
        "url": URL,
        "hasCourseInstance": [
          { "@type": "CourseInstance", "courseMode": "blended", "eventAttendanceMode": "https://schema.org/MixedEventAttendanceMode", "location": { "@type": "Place", "name": "Singapore", "address": { "@type": "PostalAddress", "addressLocality": "Singapore", "addressCountry": "SG" } } },
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
    city: "Singapore",
    country: "SG",
    serviceType: "NDT Training",
    description: "ASNT, ISO 9712, PCN, and API 510/570/653 inspector training in Singapore — Jurong Island petrochem and FPSO marine sector focus.",
    lat: 1.3521,
    lng: 103.8198,
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      <SEOHead
        title="NDT Training Singapore 2026 — 95% Pass Rate, ASNT/ISO 9712/PCN Approved, 5 Day Course | Atlantis NDT"
        description="ASNT Level III-led NDT training in Singapore. UT/RT/MT/PT/VT/ET + PAUT/TOFD methods. 95% pass rate. 950+ Jurong/FPSO technicians trained. Enroll: enroll@atlantisndt.com"
        keywords="NDT training Singapore, API 510 Singapore, API 570 Singapore, API 653 Singapore, ASNT certification Singapore, ISO 9712 Singapore, PCN Singapore, PAUT training Singapore, TOFD Singapore, pressure vessel inspector Singapore, piping inspector Singapore, Jurong NDT training"
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
              <span className="text-sm">Singapore — Jurong Island + Marine FPSO Hub</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">NDT Training in Singapore — ASNT, ISO 9712, PCN, API 510/570/653</h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl">
              Multi-standard NDT and API inspector certification for Singapore's petrochemical, FPSO marine, and offshore sectors. UT, RT, MT, PT, ET, PAUT, TOFD per ASNT SNT-TC-1A / ISO 9712 / PCN. API 510 / 570 / 653 5-day exam prep with 95% first-attempt pass rate.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/contact" className="px-6 py-3 bg-white text-blue-700 font-semibold rounded-lg hover:bg-blue-50">Request Singapore Brochure</Link>
              <Link to="/api-510-certification" className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500">API 510 Prep Details</Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold mb-8">Why NDT Training in Singapore?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {whySG.map((w, i) => (
              <Card key={i}>
                <CardHeader>
                  <w.icon className="w-8 h-8 text-blue-600 mb-2" />
                  <CardTitle className="text-lg">{w.title}</CardTitle>
                </CardHeader>
                <CardContent><p className="text-slate-600">{w.text}</p></CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold mb-2">API Inspector Certification — Singapore</h2>
          <p className="text-slate-600 mb-8">Singapore's Jurong Island petrochemical complex and FPSO marine sector demand API 510, 570, and 653 inspectors. 5-day exam prep, code-book-based open-book exam coaching, 95% first-attempt pass rate.</p>
          <div className="grid md:grid-cols-3 gap-6">
            {apiCourses.map(c => (
              <Card key={c.code} className="border-l-4 border-blue-600">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-2xl">{c.code}</CardTitle>
                    <Award className="w-6 h-6 text-blue-600" />
                  </div>
                  <p className="text-sm font-semibold text-slate-700">{c.title}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 mb-3">{c.target}</p>
                  <div className="flex justify-between text-sm border-t pt-2">
                    <span className="text-slate-500">{c.duration}</span>
                    <span className="font-semibold text-blue-700">{c.fee}</span>
                  </div>
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
            <Link to="/ndt-consulting-singapore" className="text-blue-600 hover:underline">NDT Consulting in Singapore →</Link>
            <Link to="/ndt-reporting-singapore" className="text-blue-600 hover:underline">NDT Reporting Software — Singapore →</Link>
            <Link to="/ultrasonic-testing-singapore" className="text-blue-600 hover:underline">Ultrasonic Testing — Singapore →</Link>
            <Link to="/radiographic-testing-singapore" className="text-blue-600 hover:underline">Radiographic Testing — Singapore →</Link>
            <Link to="/training-me" className="text-blue-600 hover:underline">NDT Training — Middle East Region →</Link>
          </div>
        </div>
      </section>

      <section className="py-8 bg-white border-t border-slate-200">
        <div className="container mx-auto max-w-6xl px-6">
          <RelatedCityProducts currentProduct="training" citySlug="singapore" city="Singapore" />
        </div>
      </section>

      <ContactDetails />
    </div>
  );
}
