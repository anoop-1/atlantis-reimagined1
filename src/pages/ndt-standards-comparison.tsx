import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  ChevronDown,
  ChevronUp,
  ArrowRight,
  BookOpen,
  Globe,
  Shield,
  CheckCircle,
  FileText,
} from "lucide-react";

/* ─── ASME Section V Articles ─── */
const asmeArticles = [
  { article: "Article 1", scope: "General Requirements for all NDE methods" },
  { article: "Article 2", scope: "Radiographic Examination" },
  { article: "Article 4", scope: "Ultrasonic Examination of Welds" },
  { article: "Article 5", scope: "Ultrasonic Examination of Materials" },
  { article: "Article 6", scope: "Liquid Penetrant Examination" },
  { article: "Article 7", scope: "Magnetic Particle Examination" },
  { article: "Article 8", scope: "Eddy Current Examination" },
  { article: "Article 9", scope: "Visual Examination" },
  { article: "Article 10", scope: "Leak Testing" },
  { article: "Article 12", scope: "Acoustic Emission Examination" },
  { article: "Article 13", scope: "Continuous Acoustic Emission Monitoring" },
  { article: "Article 14", scope: "Examination System Qualification" },
  { article: "Article 23", scope: "Ultrasonic Standards (SE standards)" },
  { article: "Appendix IV", scope: "Phased Array UT Examination" },
  { article: "Appendix IX", scope: "TOFD Examination" },
];

/* ─── ASTM Standards by Method ─── */
const astmStandards = [
  { method: "Ultrasonic Testing", standards: "E114, E164, E213, E273, E317, E587, E797, E2375 (PAUT), E2700 (TOFD)" },
  { method: "Radiographic Testing", standards: "E94, E142, E186, E280, E446, E747, E1025, E2033 (digital)" },
  { method: "Magnetic Particle Testing", standards: "E709 (standard guide), E1444 (standard practice), E3024 (AC yoke)" },
  { method: "Liquid Penetrant Testing", standards: "E165, E1417 (standard practice), E1208 (fluorescent PT), E1219 (penetrant system)" },
  { method: "Eddy Current Testing", standards: "E376, E426, E571, E690, E1004, E2261 (phased array ET)" },
  { method: "Visual Testing", standards: "E165 (surface prep), E1316 (terminology), E2580 (digital imaging)" },
  { method: "Acoustic Emission", standards: "E569, E749, E750, E1067, E1118, E1139" },
];

/* ─── ISO Standards ─── */
const isoStandards = [
  { standard: "ISO 17640", scope: "UT examination of welds — techniques, testing levels, assessment" },
  { standard: "ISO 10863", scope: "UT examination of welds — use of TOFD" },
  { standard: "ISO 13588", scope: "UT examination of welds — automated phased array technology" },
  { standard: "ISO 3452-1", scope: "Penetrant testing — general principles" },
  { standard: "ISO 9934-1", scope: "Magnetic particle testing — general principles" },
  { standard: "ISO 5579", scope: "Radiographic testing — metallic materials using X- and gamma rays" },
  { standard: "ISO 15548", scope: "Eddy current testing — equipment characteristics and verification" },
  { standard: "ISO 17636", scope: "Radiographic testing of fusion-welded joints" },
  { standard: "ISO 9712", scope: "NDT personnel qualification and certification" },
  { standard: "ISO 11666", scope: "UT of welds — acceptance levels" },
];

/* ─── EN Standards ─── */
const enStandards = [
  { standard: "EN 12668", scope: "UT equipment — characterization and verification (Parts 1-3)" },
  { standard: "EN 1714", scope: "UT examination of welded joints (now superseded by ISO 17640)" },
  { standard: "EN 1712", scope: "UT characterisation of weld imperfections" },
  { standard: "EN 12062", scope: "General rules for NDE of welds" },
  { standard: "EN 571-1", scope: "Penetrant testing — general principles" },
  { standard: "EN 1290", scope: "Magnetic particle testing of welds" },
  { standard: "EN 1435", scope: "Radiographic examination of welded joints" },
  { standard: "EN 1711", scope: "Eddy current examination of welds" },
  { standard: "EN 13018", scope: "Visual testing — general principles" },
  { standard: "EN 13480", scope: "Metallic industrial piping — inspection and testing" },
];

/* ─── Standards by Application ─── */
const standardsByApplication = [
  {
    application: "Pressure Vessel Fabrication",
    usa: "ASME Section VIII + Section V",
    europe: "PED + EN 13445 + EN 12062",
    international: "ISO 17640, ISO 3452, ISO 9934",
  },
  {
    application: "Process Piping",
    usa: "ASME B31.3 + Section V",
    europe: "EN 13480",
    international: "ISO 17640 (welds)",
  },
  {
    application: "Pipeline Girth Welds",
    usa: "API 1104 + ASME Section V",
    europe: "EN 12732",
    international: "ISO 12176, API 1104",
  },
  {
    application: "Structural Steel",
    usa: "AWS D1.1 + D1.5",
    europe: "EN 1090",
    international: "ISO 17640",
  },
  {
    application: "Storage Tanks",
    usa: "API 650 (new) + API 653 (in-service)",
    europe: "EN 14015",
    international: "API 650/653 (widely adopted)",
  },
  {
    application: "Aerospace Components",
    usa: "NAS-410, AMS-STD-2154",
    europe: "EN 4179 (= NAS-410)",
    international: "NAS-410/EN 4179, Nadcap",
  },
  {
    application: "Nuclear Components",
    usa: "ASME Section III + Section XI",
    europe: "RCC-M (French), KTA (German)",
    international: "Country-specific nuclear codes",
  },
];

/* ─── Standards by Country ─── */
const standardsByCountry = [
  { country: "United States", primaryCodes: "ASME, API, AWS, ASTM", certScheme: "ASNT SNT-TC-1A, ACCP" },
  { country: "United Kingdom", primaryCodes: "BS EN, PED, ASME (some)", certScheme: "PCN (BINDT), CSWIP (TWI)" },
  { country: "Germany", primaryCodes: "DIN EN, AD 2000, PED", certScheme: "DGZfP (ISO 9712)" },
  { country: "France", primaryCodes: "NF EN, RCC-M (nuclear)", certScheme: "COFREND (ISO 9712)" },
  { country: "Norway", primaryCodes: "NORSOK, EN, DNV", certScheme: "Nordtest (ISO 9712)" },
  { country: "Saudi Arabia", primaryCodes: "ASME, API, ARAMCO standards", certScheme: "ASNT, ISO 9712, PCN" },
  { country: "UAE", primaryCodes: "ASME, API, BS EN", certScheme: "ASNT, ISO 9712, PCN" },
  { country: "India", primaryCodes: "ASME, IBR, IS codes", certScheme: "ISNT, ASNT, ISO 9712" },
  { country: "Australia", primaryCodes: "AS/NZS, ASME (projects)", certScheme: "AINDT (ISO 9712)" },
  { country: "Japan", primaryCodes: "JIS, ASME (projects)", certScheme: "JSNDI" },
  { country: "Singapore", primaryCodes: "ASME, BS EN, SS codes", certScheme: "ASNT, ISO 9712" },
  { country: "Canada", primaryCodes: "CSA, ASME, API", certScheme: "NRCan NDTCB (CAN/CGSB-48.9712), ASNT" },
];

/* ─── Acceptance Criteria Comparison ─── */
const acceptanceCriteria = [
  {
    indication: "Crack (any length)",
    asmeVIII: "Reject",
    awsD11: "Reject",
    api1104: "Reject (burn-through cracks >1/2 inch only in some cases)",
    en13445: "Reject",
  },
  {
    indication: "Porosity (scattered)",
    asmeVIII: "Accept if within density limits per T-282",
    awsD11: "Accept if sum of diameters < specified limit per Table 6.1",
    api1104: "Accept if < specified % of weld area per 9.3",
    en13445: "Accept per ISO 5817 quality level B, C, or D",
  },
  {
    indication: "Slag Inclusion (linear)",
    asmeVIII: "Accept if length < 2/3t and spacing > 3L",
    awsD11: "Accept if length < 2/3t per 6.12.1",
    api1104: "Accept if length < 2 inches per 9.3.8",
    en13445: "Accept per ISO 5817 quality level",
  },
  {
    indication: "Lack of Fusion",
    asmeVIII: "Reject",
    awsD11: "Reject",
    api1104: "Accept if < 1 inch per 9.3",
    en13445: "Reject (quality level B); limited acceptance at level D",
  },
  {
    indication: "Undercut",
    asmeVIII: "Accept if < 1/32 inch (0.8mm)",
    awsD11: "Accept if < 1/32 inch (non-tubular) per 6.9",
    api1104: "Accept if < 1/32 inch and < 12.5% of pipe wall",
    en13445: "Accept per ISO 5817 quality level",
  },
];

/* ─── FAQ ─── */
const faqs = [
  {
    q: "Which NDT standard should I use for pressure vessel weld inspection?",
    a: "For pressure vessel weld inspection in the United States and projects governed by US codes, ASME Section V is the primary NDE standard, with acceptance criteria defined in ASME Section VIII Division 1 or 2 (for new construction) or API 510 (for in-service inspection). The specific NDE methods and extent are specified by the construction or inspection code — for example, ASME Section VIII requires 100% RT or UT for full radiography joints. In Europe, EN 13445 (pressure vessels) references EN standards for NDE methods and ISO 5817 for acceptance criteria. For international projects, the applicable standard depends on the construction code specified in the project specification.",
  },
  {
    q: "What is the difference between ASME Section V and ASTM standards?",
    a: "ASME Section V is a comprehensive NDE code that defines examination requirements, procedures, and acceptance criteria for NDE performed on boilers, pressure vessels, and nuclear components manufactured under the ASME Boiler and Pressure Vessel Code. ASTM standards are individual test method standards that define how to perform specific NDE techniques — for example, ASTM E164 defines the procedure for contact UT examination of welds. ASME Section V frequently references ASTM standards as the basis for examination procedures (the ASTM standards are adopted into ASME as 'SE' standards, e.g., SE-164). In practice, ASME Section V tells you what NDE to do and when, while the adopted ASTM/SE standards tell you the detailed how.",
  },
  {
    q: "Are European (EN) and ISO NDT standards the same?",
    a: "They are closely related but not identical. Many European NDT standards have been harmonized with ISO standards — for example, EN ISO 17640 (UT of welds) is the European adoption of ISO 17640. However, some EN standards remain distinct from their ISO equivalents, and European standards include additional requirements specific to PED (Pressure Equipment Directive) compliance. In general, if a standard has the 'EN ISO' prefix, it is identical to the corresponding ISO standard. Standards with only the 'EN' prefix may have European-specific content. The trend is toward full harmonization, with EN standards increasingly being replaced by EN ISO standards.",
  },
  {
    q: "Which standard applies for pipeline NDT?",
    a: "For transmission pipelines in the United States, API 1104 (Welding of Pipelines and Related Facilities) is the primary standard governing NDE of pipeline girth welds. API 1104 defines requirements for RT (radiographic testing) and UT/PAUT (ultrasonic testing) of girth welds, as well as acceptance criteria. For distribution pipelines, API 1104 also applies but with potentially different acceptance criteria. In Europe, EN 12732 governs pipeline welding and NDE. Internationally, API 1104 is the most widely used standard for oil & gas pipeline construction NDE. ASME Section V provides the detailed NDE procedures referenced by API 1104.",
  },
  {
    q: "What acceptance criteria standard is most stringent?",
    a: "In general, nuclear codes (ASME Section III for USA, RCC-M for France) have the most stringent acceptance criteria, followed by aerospace standards (NAS-410/Nadcap requirements). Among conventional industrial codes, ASME Section VIII Division 1 is generally more stringent than API 1104 for weld inspection — ASME Section VIII rejects any crack and any lack of fusion, while API 1104 allows limited lack of fusion in some circumstances. AWS D1.1 falls between ASME VIII and API 1104 in stringency. European EN/ISO standards use a quality level system (B, C, D) where level B is the most stringent and level D is the most lenient. The choice of acceptance criteria should be driven by the consequence of failure and the applicable regulatory framework.",
  },
  {
    q: "How do I know which NDT standard to use?",
    a: "The applicable NDT standard is determined by: (1) the construction code specified in the engineering design — for example, if equipment is designed per ASME Section VIII, the NDE standard is ASME Section V; (2) the project specification — the owner/client may specify additional or alternative NDE requirements; (3) the regulatory framework — jurisdiction-specific regulations may mandate certain standards (e.g., PED in Europe requires EN/ISO standards); (4) the industry — aerospace uses NAS-410/Nadcap, pipeline uses API 1104, structural steel uses AWS D1.1. When in doubt, consult the project specification or contact Atlantis NDT for expert guidance on standard selection.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-slate-200 rounded-xl overflow-hidden">
      <button
        className="w-full flex items-center justify-between p-5 text-left font-semibold text-slate-800 bg-white hover:bg-slate-50 transition"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span>{q}</span>
        {open ? (
          <ChevronUp className="w-5 h-5 text-[#004aad] flex-shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-[#004aad] flex-shrink-0" />
        )}
      </button>
      {open && (
        <div className="px-5 pb-5 text-slate-600 leading-relaxed bg-white border-t border-slate-100">
          {a}
        </div>
      )}
    </div>
  );
}

export default function NDTStandardsComparison() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "NDT Standards Comparison | ASME Section V vs ASTM vs ISO vs EN",
        description:
          "Comprehensive NDT standards comparison: ASME Section V, ASTM, ISO, EN, AWS, and API standards. Tables comparing standards by application, country, industry, and acceptance criteria.",
        author: { "@type": "Organization", name: "Atlantis NDT", url: "https://atlantisndt.com" },
        publisher: {
          "@type": "Organization",
          name: "Atlantis NDT",
          logo: { "@type": "ImageObject", url: "https://atlantisndt.com/favicon-96x96.jpg" },
        },
        datePublished: "2026-02-28",
        dateModified: "2026-02-28",
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": "https://atlantisndt.com/ndt-standards-comparison",
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      <SEOHead
        title="NDT Standards Comparison | ASME Section V vs ASTM vs ISO vs EN | Atlantis NDT"
        description="Complete NDT standards guide: ASME Section V, ASTM, ISO, EN, AWS D1.1, API codes compared by application, country, and acceptance criteria."
        keywords="ndt standards comparison, asme section v, astm ndt standards, iso ndt standards, en ndt standards, aws d1.1, api ndt codes, ndt acceptance criteria, ndt code comparison, welding inspection codes"
        structuredData={structuredData}
        canonical="https://atlantisndt.com/ndt-standards-comparison"
      />
      <Breadcrumbs />

      {/* Hero */}
      <section className="bg-[#004aad] text-white py-16">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="max-w-3xl">
            <p className="text-blue-200 text-sm font-medium mb-3 uppercase tracking-wider">
              NDT Standards Guide &middot; Updated February 2026
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
              NDT Standards Comparison: ASME vs ASTM vs ISO vs EN
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              A comprehensive comparison of the major NDT codes and standards used globally. Understand which standard applies to your application, industry, and country. Includes ASME Section V articles, ASTM standards by method, ISO and EN standards, AWS, and API codes.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/ndt-complete-guide"
                className="bg-white text-[#004aad] font-semibold px-6 py-3 rounded-lg hover:bg-blue-50 transition"
              >
                Complete NDT Guide
              </Link>
              <Link
                to="/consulting"
                className="border border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/10 transition"
              >
                Consulting Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto max-w-6xl px-6 py-12 grid md:grid-cols-3 gap-12">
        <article className="md:col-span-2 space-y-14">
          {/* Overview */}
          <motion.section
            id="overview"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-5" style={{ color: "#004aad" }}>
              Overview of the NDT Standards Landscape
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-4">
              NDT is governed by a complex framework of codes and standards developed by organizations across the Americas, Europe, and internationally. These standards define examination procedures, equipment requirements, acceptance criteria, and personnel qualification requirements. Understanding this landscape is essential for NDT professionals working across multiple jurisdictions and industries.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              The major standard-setting organizations include: <strong>ASME</strong> (American Society of Mechanical Engineers), <strong>ASTM</strong> (American Society for Testing and Materials), <strong>AWS</strong> (American Welding Society), <strong>API</strong> (American Petroleum Institute), <strong>ISO</strong> (International Organization for Standardization), <strong>CEN</strong> (European Committee for Standardization, publishing EN standards), and <strong>ASNT</strong> (American Society for Nondestructive Testing, primarily personnel certification).
            </p>
            <div className="bg-blue-50 border-l-4 border-[#004aad] rounded-r-xl p-6">
              <h3 className="font-bold text-[#004aad] mb-2">Key Principle: Construction Code Determines NDE Standard</h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                The applicable NDE standard is determined by the construction code specified for the equipment. Equipment designed per ASME Section VIII uses ASME Section V for NDE. Equipment designed per EN 13445 (PED) uses EN/ISO NDE standards. Pipeline welds per API 1104 use ASME Section V procedures with API 1104 acceptance criteria. Always check the construction code first to determine which NDE standards apply.
              </p>
            </div>
          </motion.section>

          {/* ASME Section V */}
          <motion.section
            id="asme"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
          >
            <h2 className="text-3xl font-bold mb-5" style={{ color: "#004aad" }}>
              ASME Section V — Nondestructive Examination
            </h2>
            <p className="text-slate-700 leading-relaxed mb-5">
              ASME Boiler and Pressure Vessel Code Section V is the most widely referenced NDE code in the oil & gas, petrochemical, and power generation industries. It defines examination methods, procedures, and acceptance criteria for NDE performed on boilers, pressure vessels, and nuclear components. Section V contains articles for each NDE method plus mandatory and non-mandatory appendices.
            </p>
            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow">
              <table className="w-full text-sm">
                <thead className="bg-[#004aad] text-white">
                  <tr>
                    <th className="text-left p-4 font-semibold">Article</th>
                    <th className="text-left p-4 font-semibold">Scope</th>
                  </tr>
                </thead>
                <tbody>
                  {asmeArticles.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="p-4 font-bold text-[#004aad] whitespace-nowrap">{row.article}</td>
                      <td className="p-4 text-slate-700">{row.scope}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.section>

          {/* ASTM */}
          <motion.section
            id="astm"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h2 className="text-3xl font-bold mb-5" style={{ color: "#004aad" }}>
              ASTM Standards by NDT Method
            </h2>
            <p className="text-slate-700 leading-relaxed mb-5">
              ASTM International publishes individual NDE test method standards that define detailed procedures for performing specific examinations. Many ASTM NDE standards are adopted into ASME Section V as SE standards (e.g., ASTM E164 becomes ASME SE-164). ASTM standards provide the procedural detail that ASME Section V references.
            </p>
            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow">
              <table className="w-full text-sm">
                <thead className="bg-[#004aad] text-white">
                  <tr>
                    <th className="text-left p-4 font-semibold">NDT Method</th>
                    <th className="text-left p-4 font-semibold">Key ASTM Standards</th>
                  </tr>
                </thead>
                <tbody>
                  {astmStandards.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="p-4 font-bold text-[#004aad] whitespace-nowrap">{row.method}</td>
                      <td className="p-4 text-slate-700">{row.standards}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.section>

          {/* ISO */}
          <motion.section
            id="iso"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <h2 className="text-3xl font-bold mb-5" style={{ color: "#004aad" }}>
              ISO NDT Standards
            </h2>
            <p className="text-slate-700 leading-relaxed mb-5">
              ISO (International Organization for Standardization) publishes internationally recognized NDT standards. ISO NDT standards are widely used in Europe (adopted as EN ISO), the Middle East, Asia-Pacific, and increasingly in projects worldwide. ISO 9712 is the international standard for NDT personnel certification.
            </p>
            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow">
              <table className="w-full text-sm">
                <thead className="bg-[#004aad] text-white">
                  <tr>
                    <th className="text-left p-4 font-semibold">Standard</th>
                    <th className="text-left p-4 font-semibold">Scope</th>
                  </tr>
                </thead>
                <tbody>
                  {isoStandards.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="p-4 font-bold text-[#004aad] whitespace-nowrap">{row.standard}</td>
                      <td className="p-4 text-slate-700">{row.scope}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.section>

          {/* EN */}
          <motion.section
            id="en"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-5" style={{ color: "#004aad" }}>
              EN (European) NDT Standards
            </h2>
            <p className="text-slate-700 leading-relaxed mb-5">
              European NDT standards (EN) are published by CEN and are mandatory for equipment manufactured under the Pressure Equipment Directive (PED) in the European Union. Many EN standards have been harmonized with ISO standards (designated as EN ISO). EN standards are also widely used in the North Sea, Middle East (for European IOC contracts), and Australia.
            </p>
            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow">
              <table className="w-full text-sm">
                <thead className="bg-[#004aad] text-white">
                  <tr>
                    <th className="text-left p-4 font-semibold">Standard</th>
                    <th className="text-left p-4 font-semibold">Scope</th>
                  </tr>
                </thead>
                <tbody>
                  {enStandards.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="p-4 font-bold text-[#004aad] whitespace-nowrap">{row.standard}</td>
                      <td className="p-4 text-slate-700">{row.scope}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.section>

          {/* AWS */}
          <motion.section
            id="aws"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            <h2 className="text-3xl font-bold mb-5" style={{ color: "#004aad" }}>
              AWS Standards — Structural Welding
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              The American Welding Society (AWS) publishes structural welding codes that include comprehensive NDE requirements. AWS D1.1 (Structural Welding Code — Steel) is the most widely used structural welding code in the United States and is referenced globally for structural steel fabrication.
            </p>
            <div className="bg-white rounded-xl p-6 shadow border border-slate-100">
              <div className="space-y-4">
                {[
                  { code: "AWS D1.1", scope: "Structural Welding Code — Steel. Covers buildings, bridges, and structural steel. NDE requirements in Part C, acceptance criteria in Tables 6.1/6.2." },
                  { code: "AWS D1.5", scope: "Bridge Welding Code. More stringent than D1.1 for fracture-critical members. Requires UT per Annex K for CJP welds." },
                  { code: "AWS D1.6", scope: "Structural Welding Code — Stainless Steel." },
                  { code: "AWS D17.1", scope: "Specification for Fusion Welding for Aerospace Applications." },
                  { code: "AWS D1.8", scope: "Structural Welding Code — Seismic Supplement. Additional NDE requirements for seismic-critical connections." },
                ].map((item, i) => (
                  <div key={i} className="border-b border-slate-100 pb-3 last:border-0 last:pb-0">
                    <span className="font-bold text-[#004aad]">{item.code}</span>
                    <p className="text-sm text-slate-700 mt-1">{item.scope}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* API */}
          <motion.section
            id="api"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="text-3xl font-bold mb-5" style={{ color: "#004aad" }}>
              API Standards — Oil & Gas Inspection
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              The American Petroleum Institute (API) publishes codes for in-service inspection and integrity management of oil & gas equipment. API codes reference ASME Section V for NDE procedures but define their own inspection intervals, requirements, and certification programs.
            </p>
            <div className="bg-white rounded-xl p-6 shadow border border-slate-100">
              <div className="space-y-4">
                {[
                  { code: "API 510", scope: "Pressure Vessel Inspection Code — in-service inspection, repair, alteration, and rerating of pressure vessels." },
                  { code: "API 570", scope: "Piping Inspection Code — in-service inspection, rating, repair, and alteration of piping systems." },
                  { code: "API 653", scope: "Tank Inspection, Repair, Alteration, and Reconstruction of aboveground storage tanks." },
                  { code: "API 1104", scope: "Welding of Pipelines and Related Facilities — NDE requirements for pipeline girth welds." },
                  { code: "API RP 580", scope: "Risk-Based Inspection (general principles)." },
                  { code: "API RP 581", scope: "Risk-Based Inspection Methodology (detailed quantitative RBI)." },
                  { code: "API 579-1", scope: "Fitness-For-Service (joint with ASME FFS-1)." },
                ].map((item, i) => (
                  <div key={i} className="border-b border-slate-100 pb-3 last:border-0 last:pb-0">
                    <span className="font-bold text-[#004aad]">{item.code}</span>
                    <p className="text-sm text-slate-700 mt-1">{item.scope}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-4">
              <Link
                to="/api-inspector-guide"
                className="inline-flex items-center gap-1 text-sm font-semibold text-[#004aad] hover:underline"
              >
                Read the API Inspector Guide <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.section>

          {/* Standards by Application */}
          <motion.section
            id="by-application"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
          >
            <h2 className="text-3xl font-bold mb-5" style={{ color: "#004aad" }}>
              Which Standard Applies? — Comparison by Application
            </h2>
            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow">
              <table className="w-full text-sm">
                <thead className="bg-[#004aad] text-white">
                  <tr>
                    <th className="text-left p-4 font-semibold">Application</th>
                    <th className="text-left p-4 font-semibold">USA</th>
                    <th className="text-left p-4 font-semibold">Europe</th>
                    <th className="text-left p-4 font-semibold">International</th>
                  </tr>
                </thead>
                <tbody>
                  {standardsByApplication.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="p-4 font-bold text-[#004aad]">{row.application}</td>
                      <td className="p-4 text-slate-700">{row.usa}</td>
                      <td className="p-4 text-slate-700">{row.europe}</td>
                      <td className="p-4 text-slate-700">{row.international}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.section>

          {/* Standards by Country */}
          <motion.section
            id="by-country"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold mb-5" style={{ color: "#004aad" }}>
              NDT Standards & Certification by Country
            </h2>
            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow">
              <table className="w-full text-sm">
                <thead className="bg-[#004aad] text-white">
                  <tr>
                    <th className="text-left p-4 font-semibold">Country</th>
                    <th className="text-left p-4 font-semibold">Primary Codes</th>
                    <th className="text-left p-4 font-semibold">Certification Scheme</th>
                  </tr>
                </thead>
                <tbody>
                  {standardsByCountry.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="p-4 font-bold text-[#004aad] whitespace-nowrap">{row.country}</td>
                      <td className="p-4 text-slate-700">{row.primaryCodes}</td>
                      <td className="p-4 text-slate-700">{row.certScheme}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.section>

          {/* Acceptance Criteria */}
          <motion.section
            id="acceptance-criteria"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
          >
            <h2 className="text-3xl font-bold mb-5" style={{ color: "#004aad" }}>
              Acceptance Criteria Comparison
            </h2>
            <p className="text-slate-700 leading-relaxed mb-5">
              Different codes define different acceptance criteria for the same indication types. Understanding these differences is critical when inspecting equipment built to multiple codes or when evaluating existing indications against applicable standards.
            </p>
            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow">
              <table className="w-full text-sm">
                <thead className="bg-[#004aad] text-white">
                  <tr>
                    <th className="text-left p-4 font-semibold">Indication</th>
                    <th className="text-left p-4 font-semibold">ASME VIII</th>
                    <th className="text-left p-4 font-semibold">AWS D1.1</th>
                    <th className="text-left p-4 font-semibold">API 1104</th>
                    <th className="text-left p-4 font-semibold">EN 13445</th>
                  </tr>
                </thead>
                <tbody>
                  {acceptanceCriteria.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="p-4 font-bold text-[#004aad]">{row.indication}</td>
                      <td className="p-4 text-slate-700 text-xs">{row.asmeVIII}</td>
                      <td className="p-4 text-slate-700 text-xs">{row.awsD11}</td>
                      <td className="p-4 text-slate-700 text-xs">{row.api1104}</td>
                      <td className="p-4 text-slate-700 text-xs">{row.en13445}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.section>

          {/* How to Choose */}
          <motion.section
            id="how-to-choose"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-5" style={{ color: "#004aad" }}>
              How to Choose the Right NDT Standard
            </h2>
            <div className="bg-blue-50 border-l-4 border-[#004aad] rounded-r-xl p-6">
              <ol className="space-y-3 text-sm text-slate-700">
                <li className="flex gap-2"><span className="font-bold text-[#004aad] flex-shrink-0">1.</span><span><strong>Identify the construction code:</strong> What code was the equipment designed and built to? (ASME VIII, EN 13445, API 650, AWS D1.1, etc.)</span></li>
                <li className="flex gap-2"><span className="font-bold text-[#004aad] flex-shrink-0">2.</span><span><strong>Check the project specification:</strong> The owner/client may specify additional or alternative NDE requirements beyond the construction code minimum.</span></li>
                <li className="flex gap-2"><span className="font-bold text-[#004aad] flex-shrink-0">3.</span><span><strong>Identify the regulatory framework:</strong> Jurisdiction-specific regulations may mandate certain standards (PED in EU, NR-13 in Brazil, IBR in India).</span></li>
                <li className="flex gap-2"><span className="font-bold text-[#004aad] flex-shrink-0">4.</span><span><strong>Determine if in-service inspection codes apply:</strong> For existing equipment, API 510/570/653 or equivalent in-service inspection codes may supersede original construction NDE requirements.</span></li>
                <li className="flex gap-2"><span className="font-bold text-[#004aad] flex-shrink-0">5.</span><span><strong>Verify personnel certification requirements:</strong> The applicable NDE standard determines the required personnel certification scheme (ASNT, ISO 9712, PCN, etc.).</span></li>
              </ol>
            </div>
          </motion.section>

          {/* FAQ */}
          <section>
            <h2 id="faq" className="text-3xl font-bold mb-6" style={{ color: "#004aad" }}>
              NDT Standards — Frequently Asked Questions
            </h2>
            <div className="space-y-3">
              {faqs.map((f, i) => (
                <FAQItem key={i} q={f.q} a={f.a} />
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="bg-[#004aad] rounded-2xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-3">
              Need Help with NDT Standard Selection?
            </h2>
            <p className="text-blue-100 mb-6 leading-relaxed">
              Atlantis NDT's Level III consultants have expertise across ASME, API, AWS, ISO, and EN standards. We help clients select the right NDE standards, develop examination procedures, and ensure compliance with applicable codes. Contact us for expert guidance.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/consulting"
                className="bg-white text-[#004aad] font-bold px-6 py-3 rounded-lg hover:bg-blue-50 transition"
              >
                NDT Consulting Services
              </Link>
              <Link
                to="/contact"
                className="border border-white text-white px-6 py-3 rounded-lg hover:bg-white/10 transition"
              >
                Contact Our Experts
              </Link>
            </div>
          </section>
        </article>

        {/* Sidebar */}
        <aside className="hidden md:block md:col-span-1 space-y-6 mt-2">
          <div className="bg-white p-6 rounded-xl shadow border border-slate-100 sticky top-16">
            <h3 className="text-lg font-bold mb-4" style={{ color: "#004aad" }}>
              On This Page
            </h3>
            <ul className="space-y-2 text-sm text-slate-600">
              {[
                ["#overview", "Standards Overview"],
                ["#asme", "ASME Section V"],
                ["#astm", "ASTM Standards"],
                ["#iso", "ISO Standards"],
                ["#en", "EN Standards"],
                ["#aws", "AWS Standards"],
                ["#api", "API Standards"],
                ["#by-application", "By Application"],
                ["#by-country", "By Country"],
                ["#acceptance-criteria", "Acceptance Criteria"],
                ["#how-to-choose", "How to Choose"],
                ["#faq", "FAQ"],
              ].map(([href, label]) => (
                <li key={href}>
                  <a href={href} className="hover:text-[#004aad] transition flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#004aad] rounded-full flex-shrink-0" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow border border-slate-100">
            <h3 className="text-lg font-bold mb-3" style={{ color: "#004aad" }}>
              Related Guides
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                ["/ndt-complete-guide", "Complete NDT Guide"],
                ["/ndt-methods-comparison", "NDT Methods Comparison"],
                ["/api-inspector-guide", "API Inspector Guide"],
                ["/ndt-certification-guide", "Certification Guide"],
                ["/ndt-equipment-guide", "Equipment Guide"],
                ["/weld-inspection", "Weld Inspection"],
              ].map(([href, label]) => (
                <li key={href}>
                  <Link to={href} className="text-[#004aad] hover:underline">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#004aad] p-6 rounded-xl shadow text-white">
            <h3 className="text-lg font-bold mb-3">Expert Standards Consulting</h3>
            <p className="text-blue-100 text-sm mb-4">
              Need help selecting the right NDT standard for your project? Our Level III consultants have expertise in ASME, API, AWS, ISO, and EN codes. Get expert guidance today.
            </p>
            <Link
              to="/contact"
              className="block bg-white text-[#004aad] text-center font-bold px-4 py-3 rounded-lg hover:bg-blue-50 transition text-sm"
            >
              Contact Our Experts
            </Link>
          </div>
        </aside>
      </div>

      <ContactDetails />
    </div>
  );
}
