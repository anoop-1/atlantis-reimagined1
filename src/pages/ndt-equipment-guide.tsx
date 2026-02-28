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
  DollarSign,
  CheckCircle,
  Settings,
  Wrench,
  Shield,
  Activity,
  Zap,
  Target,
  Radio,
  Eye,
} from "lucide-react";

/* ─── UT Equipment ─── */
const utEquipment = [
  {
    brand: "Olympus (Evident)",
    models: "OmniScan X3, OmniScan MX2, Epoch 650",
    type: "PAUT & Conventional UT",
    priceRange: "$15,000 - $65,000",
    bestFor: "Weld inspection (PAUT), corrosion mapping, general UT",
    notes: "Market leader in PAUT. OmniScan X3 is the industry standard for advanced weld inspection. Epoch 650 is the standard conventional flaw detector.",
  },
  {
    brand: "Eddyfi Technologies",
    models: "Gekko, Mantis, M2M Gekko",
    type: "PAUT & TFM/FMC",
    priceRange: "$25,000 - $80,000",
    bestFor: "Advanced PAUT, Total Focusing Method (TFM), research",
    notes: "Leading in advanced imaging technology (TFM/FMC). Gekko is popular for high-end weld inspection and R&D applications.",
  },
  {
    brand: "Baker Hughes (Waygate)",
    models: "Mentor UT, USM Go+, Phasor XS",
    type: "Conventional & PAUT",
    priceRange: "$8,000 - $55,000",
    bestFor: "Thickness gauging, general flaw detection, industrial inspection",
    notes: "Strong presence in oil & gas. Mentor UT offers a robust field-ready platform. USM Go+ is a popular conventional flaw detector.",
  },
  {
    brand: "Sonatest",
    models: "Veo+, Prisma, D-series",
    type: "PAUT & Conventional",
    priceRange: "$12,000 - $45,000",
    bestFor: "Cost-effective PAUT, training, general inspection",
    notes: "UK-based manufacturer. Competitive pricing. Veo+ is a capable mid-range PAUT instrument. Good for training facilities.",
  },
  {
    brand: "Proceq (Screening Eagle)",
    models: "Pundit series, UT instruments",
    type: "Concrete & Specialized UT",
    priceRange: "$5,000 - $30,000",
    bestFor: "Concrete inspection, civil infrastructure, specialized applications",
    notes: "Specialized in concrete NDT. Pundit series uses ultrasonic pulse velocity for concrete quality assessment.",
  },
];

/* ─── RT Equipment ─── */
const rtComparison = [
  { factor: "Image Quality", film: "Excellent (reference standard)", cr: "Very Good", dr: "Excellent (high resolution panels)" },
  { factor: "Exposure Time", film: "Standard (minutes)", cr: "Standard (uses existing sources)", dr: "Reduced (higher sensitivity)" },
  { factor: "Processing Time", film: "15-30 min (wet darkroom)", cr: "2-5 min (phosphor plate scan)", dr: "Immediate (real-time)" },
  { factor: "Per-Shot Cost", film: "$15-$50 (film + chemicals)", cr: "$0.50-$2 (plate reuse)", dr: "$0 (panel reuse)" },
  { factor: "Initial Investment", film: "$5,000-$15,000", cr: "$30,000-$80,000", dr: "$80,000-$250,000" },
  { factor: "Portability", film: "Excellent", cr: "Good (scanner needed)", dr: "Moderate (panels fragile)" },
  { factor: "Environmental Impact", film: "High (chemicals, silver waste)", cr: "Low", dr: "Very Low" },
  { factor: "Storage/Archival", film: "Physical film storage required", cr: "Digital files", dr: "Digital files" },
  { factor: "Code Acceptance", film: "Universal", cr: "Widely accepted (ASME, API)", dr: "Increasingly accepted" },
];

/* ─── Equipment by Application ─── */
const equipByApplication = [
  { application: "Weld Inspection (Carbon Steel)", recommended: "PAUT (OmniScan X3 or Gekko)", alternative: "Conventional UT (Epoch 650) or RT", reason: "PAUT provides sector scan imaging with accurate defect sizing. Replacing RT in most applications." },
  { application: "Corrosion Mapping", recommended: "Olympus OmniScan + paint crawler", alternative: "Conventional UT thickness gauge", reason: "PAUT corrosion mapping provides C-scan images of remaining wall thickness over large areas." },
  { application: "Thickness Gauging", recommended: "Olympus 38DL PLUS or 72DL PLUS", alternative: "Any conventional UT thickness gauge", reason: "Dedicated thickness gauges are faster and simpler than flaw detectors for pure thickness measurement." },
  { application: "Tube Inspection (Heat Exchangers)", recommended: "Eddyfi Ectane 3 (ET) or Olympus Nortec 600", alternative: "IRIS (Internal Rotary Inspection System - UT)", reason: "ET is fastest for screening. IRIS provides detailed wall thickness measurement where ET indicates defects." },
  { application: "Surface Crack Detection (Ferromagnetic)", recommended: "MT yoke (AC or DC) + UV light", alternative: "PT kit (if MT not practical)", reason: "MT is more sensitive than PT for ferromagnetic materials. AC yokes are portable and fast." },
  { application: "Surface Crack Detection (Non-Ferro)", recommended: "PT fluorescent kit or ET probe", alternative: "Visible dye PT kit", reason: "Fluorescent PT under UV is more sensitive than visible dye. ET provides fastest automated scanning." },
  { application: "Pipeline In-Line Inspection", recommended: "MFL intelligent pig", alternative: "UT pig for wall thickness", reason: "MFL pigs detect corrosion and metal loss. UT pigs provide direct wall thickness measurement." },
  { application: "Composite Inspection (Aerospace)", recommended: "UT immersion or PAUT", alternative: "Thermography (for impact damage)", reason: "UT detects delaminations and disbonds in composite layups. PAUT enables rapid area scanning." },
];

/* ─── Budget Guide ─── */
const budgetGuide = [
  { category: "Visual Testing (VT)", basic: "$500 - $2,000", midRange: "$2,000 - $10,000", professional: "$10,000 - $50,000", includes: "Basic: magnifiers, lights, gauges. Mid: borescopes, video cameras. Pro: drone-based VT systems." },
  { category: "Liquid Penetrant (PT)", basic: "$100 - $500", midRange: "$500 - $3,000", professional: "$3,000 - $15,000", includes: "Basic: spray kits. Mid: fluorescent kits + UV lamps. Pro: automated spray lines, test panels." },
  { category: "Magnetic Particle (MT)", basic: "$500 - $3,000", midRange: "$3,000 - $15,000", professional: "$15,000 - $100,000+", includes: "Basic: AC yoke + dry powder. Mid: AC/DC yoke + wet fluorescent. Pro: bench units, coils, demagnetizers." },
  { category: "Ultrasonic Testing (UT)", basic: "$3,000 - $10,000", midRange: "$10,000 - $40,000", professional: "$40,000 - $100,000+", includes: "Basic: thickness gauge. Mid: conventional flaw detector. Pro: PAUT/TOFD instrument + probes." },
  { category: "Eddy Current (ET)", basic: "$5,000 - $15,000", midRange: "$15,000 - $40,000", professional: "$40,000 - $120,000+", includes: "Basic: single-frequency instrument. Mid: multi-frequency with recording. Pro: array probes, automated systems." },
  { category: "Radiographic Testing (RT)", basic: "$5,000 - $20,000", midRange: "$30,000 - $80,000", professional: "$80,000 - $300,000+", includes: "Basic: film + source rental. Mid: CR system + IP plates. Pro: DR flat panel + X-ray generator." },
];

/* ─── FAQ ─── */
const faqs = [
  {
    q: "What is the best NDT equipment for beginners?",
    a: "For beginners entering the NDT field, start with equipment appropriate for your certification method. For UT, the Olympus Epoch 650 or Sonatest D-series are excellent conventional flaw detectors with intuitive interfaces. For MT, a good AC yoke (Magnaflux Y-6, Y-7, or Y-8) with wet fluorescent particles and a UV lamp is the standard field kit. For PT, a basic visible dye penetrant kit (Magnaflux Spotcheck) costs under $100 and is sufficient for training and basic work. The key principle is to master the fundamentals on basic equipment before investing in advanced instruments — a skilled operator with a basic instrument will outperform a novice with a $65,000 PAUT unit.",
  },
  {
    q: "Is Olympus or Eddyfi better for PAUT?",
    a: "Both manufacturers produce excellent PAUT equipment, but they target different segments. Olympus OmniScan X3 is the industry standard for field weld inspection — it has the widest code acceptance, the largest user base, the most available training, and excellent field durability. It is the safer choice for production weld inspection work. Eddyfi Gekko offers more advanced imaging capabilities including Total Focusing Method (TFM) and Full Matrix Capture (FMC), which provide superior defect characterization for complex geometries and research applications. For most commercial NDT inspection companies, Olympus is the practical choice. For advanced applications, R&D, or when TFM is specified, Eddyfi is preferred.",
  },
  {
    q: "How much does a PAUT system cost?",
    a: "A complete PAUT system for weld inspection typically costs $30,000-$80,000 depending on the instrument and probe configuration. The instrument alone (e.g., Olympus OmniScan X3 64:128) costs $40,000-$65,000. Phased array probes cost $1,500-$5,000 each (you need multiple probes for different applications). Wedges and scanners add $500-$3,000 per setup. Software licenses for analysis (Olympus TomoView, Eddyfi Capture) add $5,000-$15,000. Total first-year investment for a single PAUT inspection capability: $50,000-$100,000 including training. Many NDT companies lease equipment or purchase certified pre-owned instruments to reduce initial investment.",
  },
  {
    q: "Should I buy film RT, computed radiography (CR), or digital radiography (DR)?",
    a: "The choice depends on your inspection volume and budget. Film RT has the lowest initial investment ($5,000-$15,000 excluding source) but the highest per-shot cost ($15-$50 per exposure for film + chemicals + processing) and environmental concerns. Computed Radiography (CR) eliminates film and chemicals — phosphor imaging plates are reusable and produce digital images — with moderate initial investment ($30,000-$80,000) and very low per-shot cost. Digital Radiography (DR) provides immediate real-time images with the highest initial investment ($80,000-$250,000) but zero per-shot consumable cost. For high-volume operations (>50 exposures/day), DR has the lowest total cost of ownership. For moderate volume, CR offers the best balance. Film is only cost-effective for very low volume or where digital systems are not code-accepted.",
  },
  {
    q: "What calibration equipment do I need?",
    a: "Calibration requirements depend on the NDT method and applicable code. For UT: calibration blocks (IIW Type 1, IIW Type 2, DSC block, step wedges), reference standards with machined reflectors (side-drilled holes, notches, flat-bottom holes) per the applicable code. For RT: image quality indicators (IQIs) — wire-type per ASME SE-747 or hole-type per ASME SE-1025. For MT: ring specimens, Ketos ring, pie gauge (for field verification), and UV meter (for fluorescent MT). For PT: TAM panels or known-defect reference specimens. For ET: calibration standards with machined defects (through-holes, notches) per applicable specification. All calibration equipment must be traceable to national standards (NIST in USA) and recalibrated per the applicable procedure interval.",
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

export default function NDTEquipmentGuide() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "NDT Equipment Guide 2026 | Top Brands & Instrument Comparison",
        description:
          "Complete NDT equipment guide: Olympus vs Eddyfi vs Baker Hughes comparison, PAUT system costs ($30K-$80K), film vs CR vs DR radiography, equipment by application, and budget guide for every NDT method.",
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
          "@id": "https://atlantisndt.com/ndt-equipment-guide",
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
        title="NDT Equipment Guide 2026 | Top Brands & Instrument Comparison | Atlantis NDT"
        description="Complete NDT equipment guide: Olympus vs Eddyfi vs Baker Hughes UT comparison, PAUT costs ($30K-$80K), film vs CR vs DR radiography, MT/PT/ET equipment, selection by application, and budget guide."
        keywords="ndt equipment guide, paut equipment, olympus omniscan, eddyfi gekko, ut flaw detector, ndt instrument comparison, ndt equipment cost, radiography equipment, mt equipment, pt equipment, eddy current instrument, ndt calibration equipment"
        structuredData={structuredData}
        canonical="https://atlantisndt.com/ndt-equipment-guide"
      />
      <Breadcrumbs />

      {/* Hero */}
      <section className="bg-[#004aad] text-white py-16">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="max-w-3xl">
            <p className="text-blue-200 text-sm font-medium mb-3 uppercase tracking-wider">
              NDT Equipment Guide &middot; Updated February 2026
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
              NDT Equipment Guide 2026
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              A comprehensive comparison of NDT equipment across all methods. Top brands, instrument features, price ranges, equipment selection by application, and a budget guide from entry-level to professional. Practical guidance from Level III professionals who use this equipment daily.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/ndt-methods-comparison"
                className="bg-white text-[#004aad] font-semibold px-6 py-3 rounded-lg hover:bg-blue-50 transition"
              >
                Compare NDT Methods
              </Link>
              <Link
                to="/ndt-complete-guide"
                className="border border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/10 transition"
              >
                Complete NDT Guide
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto max-w-6xl px-6 py-12 grid md:grid-cols-3 gap-12">
        <article className="md:col-span-2 space-y-14">
          {/* Market Overview */}
          <motion.section
            id="overview"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-5" style={{ color: "#004aad" }}>
              NDT Equipment Market Overview
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-4">
              The global NDT equipment market is valued at approximately $4.5 billion (2024) and is growing at 7-9% CAGR. The market is dominated by a handful of major manufacturers: <strong>Olympus/Evident</strong> (UT/PAUT leader), <strong>Baker Hughes/Waygate Technologies</strong> (RT/industrial CT), <strong>Eddyfi Technologies</strong> (advanced UT/ET), and <strong>Magnaflux</strong> (MT/PT consumables). Equipment costs range from under $100 for a basic PT kit to over $300,000 for a digital radiography system.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              Key trends driving equipment innovation include: digital transformation (cloud connectivity, AI-assisted analysis), miniaturization (smaller, lighter field instruments), advanced imaging (TFM/FMC for UT, digital RT), automation (robotic scanners, drone-based inspection), and interoperability (standardized data formats, digital twin integration).
            </p>
          </motion.section>

          {/* UT Equipment */}
          <motion.section
            id="ut-equipment"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
          >
            <h2 className="text-3xl font-bold mb-5" style={{ color: "#004aad" }}>
              Ultrasonic Testing (UT) Equipment
            </h2>
            <p className="text-slate-700 leading-relaxed mb-5">
              UT represents the largest segment of the NDT equipment market. Equipment ranges from simple thickness gauges ($3,000-$8,000) to advanced PAUT/TFM instruments ($40,000-$80,000). The choice of instrument depends on the application, required technique (conventional, PAUT, TOFD, TFM), and budget.
            </p>
            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow">
              <table className="w-full text-sm">
                <thead className="bg-[#004aad] text-white">
                  <tr>
                    <th className="text-left p-4 font-semibold">Brand</th>
                    <th className="text-left p-4 font-semibold">Key Models</th>
                    <th className="text-left p-4 font-semibold">Type</th>
                    <th className="text-left p-4 font-semibold">Price Range</th>
                    <th className="text-left p-4 font-semibold">Best For</th>
                  </tr>
                </thead>
                <tbody>
                  {utEquipment.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="p-4 font-bold text-[#004aad] whitespace-nowrap">{row.brand}</td>
                      <td className="p-4 text-slate-700 text-xs">{row.models}</td>
                      <td className="p-4 text-slate-700 text-xs">{row.type}</td>
                      <td className="p-4 text-slate-700 whitespace-nowrap">{row.priceRange}</td>
                      <td className="p-4 text-slate-600 text-xs">{row.bestFor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.section>

          {/* RT Equipment */}
          <motion.section
            id="rt-equipment"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h2 className="text-3xl font-bold mb-5" style={{ color: "#004aad" }}>
              Radiographic Testing (RT) Equipment — Film vs CR vs DR
            </h2>
            <p className="text-slate-700 leading-relaxed mb-5">
              The RT equipment market is in transition from traditional film to digital technologies. Computed Radiography (CR) uses reusable phosphor imaging plates scanned by a dedicated reader. Digital Radiography (DR) uses flat panel detectors that produce images in real-time. Both digital methods eliminate film, chemicals, and darkroom facilities.
            </p>
            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow">
              <table className="w-full text-sm">
                <thead className="bg-[#004aad] text-white">
                  <tr>
                    <th className="text-left p-4 font-semibold">Factor</th>
                    <th className="text-left p-4 font-semibold">Film RT</th>
                    <th className="text-left p-4 font-semibold">Computed Radiography (CR)</th>
                    <th className="text-left p-4 font-semibold">Digital Radiography (DR)</th>
                  </tr>
                </thead>
                <tbody>
                  {rtComparison.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="p-4 font-bold text-[#004aad]">{row.factor}</td>
                      <td className="p-4 text-slate-700 text-xs">{row.film}</td>
                      <td className="p-4 text-slate-700 text-xs">{row.cr}</td>
                      <td className="p-4 text-slate-700 text-xs">{row.dr}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.section>

          {/* MT/PT/ET Brief */}
          <motion.section
            id="other-equipment"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <h2 className="text-3xl font-bold mb-5" style={{ color: "#004aad" }}>
              MT, PT & ET Equipment Overview
            </h2>
            <div className="space-y-4">
              <div className="bg-white rounded-xl p-6 shadow border border-slate-100 border-t-4 border-t-amber-600">
                <div className="flex items-center gap-2 mb-3">
                  <Target className="w-5 h-5 text-amber-600" />
                  <h3 className="text-lg font-bold text-[#004aad]">Magnetic Particle Testing (MT) Equipment</h3>
                </div>
                <p className="text-slate-700 leading-relaxed mb-3 text-sm">
                  MT equipment ranges from portable AC yokes (Magnaflux Y-6/Y-7/Y-8, Parker Research DA-200) for field use to stationary wet horizontal bench units for workshop inspection. Key accessories include UV-A lamps (for fluorescent MT), magnetic particles (dry powder or wet fluorescent), and field indicators (pie gauge, Ketos ring). AC yokes are the most common field equipment, costing $500-$3,000. Bench units for high-volume inspection cost $15,000-$100,000+.
                </p>
                <p className="text-sm text-slate-600"><strong>Key Brands:</strong> Magnaflux, Parker Research, Western Instruments, Helling</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow border border-slate-100 border-t-4 border-t-green-600">
                <div className="flex items-center gap-2 mb-3">
                  <Shield className="w-5 h-5 text-green-600" />
                  <h3 className="text-lg font-bold text-[#004aad]">Liquid Penetrant Testing (PT) Equipment</h3>
                </div>
                <p className="text-slate-700 leading-relaxed mb-3 text-sm">
                  PT equipment is the most affordable NDT method. Portable kits include penetrant, cleaner/remover, and developer in spray cans (Magnaflux Spotcheck, Sherwin-Williams) for $30-$100. Fluorescent penetrant systems (for higher sensitivity) require UV-A lamps and are used in aerospace and critical applications. Automated penetrant lines for production environments cost $50,000-$500,000+. PT materials are classified by ASTM E1417 and qualified per AMS 2644 for aerospace.
                </p>
                <p className="text-sm text-slate-600"><strong>Key Brands:</strong> Magnaflux, Sherwin-Williams (Ardrox), Met-L-Chek, Helling</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow border border-slate-100 border-t-4 border-t-teal-600">
                <div className="flex items-center gap-2 mb-3">
                  <Radio className="w-5 h-5 text-teal-600" />
                  <h3 className="text-lg font-bold text-[#004aad]">Eddy Current Testing (ET) Equipment</h3>
                </div>
                <p className="text-slate-700 leading-relaxed mb-3 text-sm">
                  ET equipment ranges from single-frequency portable instruments for surface inspection to multi-channel array instruments for automated tube inspection. Key instruments include Olympus Nortec 600 (portable surface inspection), Eddyfi Ectane 3 (advanced multi-technology), and Zetec MIZ-200 (tube inspection). ET array probes enable rapid scanning of large areas for surface crack detection. Tube inspection systems typically include the instrument, probes, calibration standards, and data analysis software.
                </p>
                <p className="text-sm text-slate-600"><strong>Key Brands:</strong> Olympus/Evident, Eddyfi Technologies, Zetec (Baker Hughes), IPC</p>
              </div>
            </div>
          </motion.section>

          {/* Equipment Selection Guide */}
          <motion.section
            id="selection-guide"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-5" style={{ color: "#004aad" }}>
              Equipment Selection Guide — By Application
            </h2>
            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow">
              <table className="w-full text-sm">
                <thead className="bg-[#004aad] text-white">
                  <tr>
                    <th className="text-left p-4 font-semibold">Application</th>
                    <th className="text-left p-4 font-semibold">Recommended Equipment</th>
                    <th className="text-left p-4 font-semibold">Alternative</th>
                    <th className="text-left p-4 font-semibold">Rationale</th>
                  </tr>
                </thead>
                <tbody>
                  {equipByApplication.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="p-4 font-bold text-[#004aad]">{row.application}</td>
                      <td className="p-4 text-slate-700 text-xs">{row.recommended}</td>
                      <td className="p-4 text-slate-600 text-xs">{row.alternative}</td>
                      <td className="p-4 text-slate-600 text-xs">{row.reason}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.section>

          {/* Budget Guide */}
          <motion.section
            id="budget"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            <h2 className="text-3xl font-bold mb-5" style={{ color: "#004aad" }}>
              NDT Equipment Budget Guide
            </h2>
            <p className="text-slate-700 leading-relaxed mb-5">
              Equipment investment varies dramatically by method and capability level. The table below provides budget ranges for entry-level, mid-range, and professional-grade equipment across all NDT methods.
            </p>
            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow">
              <table className="w-full text-sm">
                <thead className="bg-[#004aad] text-white">
                  <tr>
                    <th className="text-left p-4 font-semibold">Category</th>
                    <th className="text-left p-4 font-semibold">Basic</th>
                    <th className="text-left p-4 font-semibold">Mid-Range</th>
                    <th className="text-left p-4 font-semibold">Professional</th>
                  </tr>
                </thead>
                <tbody>
                  {budgetGuide.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="p-4 font-bold text-[#004aad]">{row.category}</td>
                      <td className="p-4 text-slate-700 whitespace-nowrap">{row.basic}</td>
                      <td className="p-4 text-slate-700 whitespace-nowrap">{row.midRange}</td>
                      <td className="p-4 text-slate-700 whitespace-nowrap">{row.professional}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.section>

          {/* Maintenance & Calibration */}
          <motion.section
            id="calibration"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="text-3xl font-bold mb-5" style={{ color: "#004aad" }}>
              Equipment Maintenance & Calibration
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Proper maintenance and calibration are essential for reliable NDT results. All NDT equipment must be verified and calibrated according to the applicable code requirements. ASME Section V and most other NDE codes require documented calibration procedures with traceable reference standards.
            </p>
            <div className="bg-blue-50 border-l-4 border-[#004aad] rounded-r-xl p-6">
              <h3 className="font-bold text-[#004aad] mb-2">Key Calibration Requirements</h3>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-[#004aad] flex-shrink-0 mt-0.5" /><span><strong>UT instruments:</strong> Annual linearity verification (horizontal and vertical), calibration on reference blocks before each use per the applicable procedure.</span></li>
                <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-[#004aad] flex-shrink-0 mt-0.5" /><span><strong>RT sources:</strong> Activity verification, source projector survey, dosimeter calibration. Film densitometer calibration per ASTM E1079.</span></li>
                <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-[#004aad] flex-shrink-0 mt-0.5" /><span><strong>MT equipment:</strong> Lifting power verification (AC yoke: 10 lbs at max pole spacing), UV lamp intensity (&gt;1000 uW/cm² at 15 inches), ambient light verification.</span></li>
                <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-[#004aad] flex-shrink-0 mt-0.5" /><span><strong>PT materials:</strong> Penetrant sensitivity testing per ASTM E1417, system performance check on reference panels.</span></li>
                <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-[#004aad] flex-shrink-0 mt-0.5" /><span><strong>ET instruments:</strong> System verification on calibration standards with known defects before each inspection setup.</span></li>
              </ul>
            </div>
          </motion.section>

          {/* FAQ */}
          <section>
            <h2 id="faq" className="text-3xl font-bold mb-6" style={{ color: "#004aad" }}>
              NDT Equipment — Frequently Asked Questions
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
              Need Equipment Guidance? Talk to Our Level III Experts
            </h2>
            <p className="text-blue-100 mb-6 leading-relaxed">
              Atlantis NDT's Level III consultants use and evaluate NDT equipment daily across oil & gas, aerospace, and power generation applications. We provide independent equipment recommendations based on your specific inspection requirements — not brand loyalty. Contact us for expert guidance.
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
                Contact Our Team
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
                ["#overview", "Market Overview"],
                ["#ut-equipment", "UT Equipment"],
                ["#rt-equipment", "RT Equipment (Film vs CR vs DR)"],
                ["#other-equipment", "MT, PT & ET Equipment"],
                ["#selection-guide", "Selection by Application"],
                ["#budget", "Budget Guide"],
                ["#calibration", "Maintenance & Calibration"],
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

          <div className="bg-green-50 p-6 rounded-xl shadow border border-green-200">
            <h3 className="text-lg font-bold mb-3 text-green-800">Price Quick Reference</h3>
            <ul className="space-y-3 text-sm text-green-800">
              {[
                { label: "UT Thickness Gauge", value: "$3K-$8K" },
                { label: "PAUT System", value: "$30K-$80K" },
                { label: "CR System", value: "$30K-$80K" },
                { label: "DR Panel System", value: "$80K-$250K" },
                { label: "ET Instrument", value: "$8K-$60K" },
                { label: "MT Yoke (AC)", value: "$500-$3K" },
              ].map((item) => (
                <li key={item.label} className="flex justify-between items-center border-b border-green-200 pb-2">
                  <span>{item.label}</span>
                  <span className="font-bold">{item.value}</span>
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
                ["/ndt-methods-comparison", "NDT Methods Comparison"],
                ["/ndt-complete-guide", "Complete NDT Guide"],
                ["/ndt-standards-comparison", "NDT Standards Comparison"],
                ["/ndt-certification-guide", "Certification Guide"],
                ["/ultrasonic-testing", "Ultrasonic Testing"],
                ["/phased-array-ut", "Phased Array UT"],
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
            <h3 className="text-lg font-bold mb-3">Independent Equipment Advice</h3>
            <p className="text-blue-100 text-sm mb-4">
              Need help selecting the right NDT equipment for your operation? Our Level III consultants provide manufacturer-independent recommendations based on your specific requirements.
            </p>
            <Link
              to="/contact"
              className="block bg-white text-[#004aad] text-center font-bold px-4 py-3 rounded-lg hover:bg-blue-50 transition text-sm"
            >
              Get Expert Advice
            </Link>
          </div>
        </aside>
      </div>

      <ContactDetails />
    </div>
  );
}
