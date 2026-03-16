import { useParams, Link } from "react-router-dom";
import { useMemo, useEffect } from "react";
import { Navigation } from "./Navigation";
import { SEOHead } from "./SEOHead";
import { keyLocations } from "@/data/programmatic-seo";

// Advanced method data
const advancedMethods: Record<string, {
  name: string; shortName: string; fullDescription: string;
  physics: string; advantages: string[]; limitations: string[];
  applications: string[]; techniques: string[]; standards: string[];
  comparedTo: string; comparisonPoints: string[];
  equipmentNeeded: string[]; certificationPath: string;
  typicalSetup: string; dataAnalysis: string;
}> = {
  "paut-inspection": {
    name: "Phased Array Ultrasonic Testing (PAUT)",
    shortName: "PAUT",
    fullDescription: "Phased Array Ultrasonic Testing uses multiple ultrasonic elements pulsed at calculated time delays to electronically steer and focus sound beams. This enables comprehensive volumetric inspection from a single probe position, dramatically improving inspection speed and defect characterization compared to conventional UT.",
    physics: "PAUT employs constructive and destructive wave interference from multiple piezoelectric elements. By controlling the timing (phase) of excitation pulses to individual elements, the resulting ultrasonic beam can be steered through angles (sectorial scanning), focused at specific depths, and shaped to optimize detection for different defect orientations.",
    advantages: ["Electronic beam steering without mechanical movement", "Superior defect characterization and sizing", "Faster inspection speeds vs conventional UT", "Encoded data for permanent records", "Ability to inspect complex geometries", "Real-time imaging capability", "Reduced coupling area requirements"],
    limitations: ["Higher equipment cost", "Requires specialized Level II/III operators", "More complex calibration procedures", "Data file sizes can be very large", "Limited by material attenuation at high frequencies"],
    applications: ["Weld inspection per ASME and AWS codes", "Corrosion mapping of pressure vessels", "Composite laminate inspection in aerospace", "Turbine blade root inspection", "Dissimilar metal weld examination", "Nozzle weld inspection"],
    techniques: ["Sectorial (S-scan) scanning", "Linear (E-scan) scanning", "Compound scanning", "Full Matrix Capture (FMC/TFM)", "Dynamic Depth Focusing (DDF)", "Tandem PAUT configuration"],
    standards: ["ASME Section V Article 4", "ISO 13588", "AWS D1.1 Annex S", "API 620/650", "EN 16018", "DNVGL-ST-0126"],
    comparedTo: "Conventional Ultrasonic Testing (UT)",
    comparisonPoints: ["PAUT provides imaging vs single A-scan in conventional UT", "PAUT can inspect at multiple angles simultaneously", "PAUT offers encoded, reviewable data records", "Conventional UT requires more manual scanning patterns", "PAUT provides better Probability of Detection (POD)"],
    equipmentNeeded: ["Phased array flaw detector (OmniScan, Topaz, FOCUS PX)", "PA probes (16, 32, 64, or 128 elements)", "Wedges for specific applications", "Encoder wheels or scanners", "Calibration blocks (IIW, V1, V2, specific)"],
    certificationPath: "ASNT Level II in UT with additional PAUT training (typically 40-80 hours). Many employers require CSWIP 3.2 or equivalent PA certification.",
    typicalSetup: "Select appropriate probe and wedge for joint geometry. Perform velocity and delay calibration on reference block. Set scan plan with appropriate focal laws covering the inspection volume. Verify sensitivity using reference reflectors.",
    dataAnalysis: "PAUT data is presented as S-scans (sectorial), B-scans (cross-section), C-scans (plan view), and D-scans (side view). Indications are sized using 6dB drop, -14dB, or tip diffraction techniques depending on applicable code."
  },
  "tofd-inspection": {
    name: "Time-of-Flight Diffraction (TOFD)",
    shortName: "TOFD",
    fullDescription: "TOFD uses pairs of ultrasonic transducers positioned on opposite sides of a weld to detect diffracted signals from crack tips. Unlike conventional pulse-echo techniques that rely on reflected amplitude, TOFD measures time-of-flight of diffracted waves, providing highly accurate sizing of planar defects.",
    physics: "When an ultrasonic wave encounters a crack tip, it generates a diffracted wave that propagates in all directions. TOFD uses a transmitter-receiver pair positioned symmetrically about the weld centerline. The lateral wave (traveling along the surface) and back-wall reflection provide reference signals, while diffracted signals from defect tips appear between these references.",
    advantages: ["Highly accurate defect sizing (±1mm)", "High Probability of Detection for planar defects", "Fast scanning speed", "Less operator-dependent than pulse-echo", "Good for monitoring crack growth", "Encoded permanent record", "Sensitive to all defect orientations"],
    limitations: ["Dead zones near surfaces (lateral wave)", "Requires access to both sides of weld", "Difficult to apply on thin materials (<8mm)", "Geometric indications from weld cap and root", "Requires specialized interpretation skills"],
    applications: ["Weld inspection in pressure vessels and piping", "Pre-service and in-service inspection", "Hydrogen cracking detection", "Stress corrosion cracking assessment", "Nuclear component inspection", "Pipeline girth weld inspection"],
    techniques: ["Parallel scanning (along weld)", "Non-parallel scanning (across weld)", "Multi-channel TOFD for thick sections", "Combined TOFD and pulse-echo", "D-scan presentation analysis"],
    standards: ["BS EN ISO 10863", "ASME Section V Article 4", "AWS D1.1", "API 577", "DNVGL-ST-0126", "CSA W59"],
    comparedTo: "Radiographic Testing (RT)",
    comparisonPoints: ["TOFD provides real-time results vs RT film processing", "TOFD accurately sizes height of planar defects", "No radiation safety concerns with TOFD", "TOFD is faster for long seam welds", "RT better for porosity and slag characterization"],
    equipmentNeeded: ["TOFD-capable ultrasonic instrument", "Matched transducer pairs (various frequencies)", "Motorized or manual scanner", "Encoder for position tracking", "TOFD-specific calibration blocks"],
    certificationPath: "Requires ASNT Level II UT certification plus TOFD-specific training (typically 40 hours). PCN TOFD certification available in Europe.",
    typicalSetup: "Position transducer pair at calculated Probe Center Separation (PCS) based on material thickness. Set appropriate probe frequency and angle. Calibrate timing using reference signals and known reflectors. Scan along weld length with encoded positions.",
    dataAnalysis: "TOFD data displayed as B-scan (time vs position). Lateral wave appears at top, back-wall at bottom. Defect tips appear as hyperbolic arcs between these references. Through-wall height calculated from time-of-flight differences."
  },
  "guided-wave-inspection": {
    name: "Guided Wave Testing (GWT)",
    shortName: "GWT",
    fullDescription: "Guided Wave Testing uses low-frequency ultrasonic waves that propagate along the length of pipes and structures, allowing inspection of long distances from a single transducer position. A single test location can screen tens of meters of pipeline, making it ideal for inspecting insulated, buried, or otherwise inaccessible piping.",
    physics: "Unlike conventional UT that uses bulk waves, GWT generates guided waves that propagate within the wall of a pipe or plate, guided by the boundaries of the structure. The most common modes used are torsional (T(0,1)) and longitudinal (L(0,2)) waves. Reflections occur at any change in cross-sectional area, whether from corrosion, welds, supports, or other features.",
    advantages: ["Screen 30-100+ meters from single location", "Inspect through insulation without removal", "Test buried and inaccessible pipelines", "100% circumferential coverage", "Rapid screening capability", "Can detect both internal and external defects", "Permanent monitoring capability"],
    limitations: ["Screening technique - not sizing", "Sensitivity decreases with distance", "Complex signal interpretation", "Affected by pipe coatings and fill level", "Cannot detect axially-oriented defects well", "Requires follow-up with local technique for sizing"],
    applications: ["Insulated pipeline screening", "Road and river crossing inspection", "Offshore riser inspection", "Storage tank floor scanning", "Cased pipe inspection", "Structural member screening"],
    techniques: ["Torsional wave screening", "Longitudinal wave testing", "Focused guided wave (FGW)", "Magnetostrictive sensor (MsS) technology", "Permanently installed monitoring (PIMS)", "Guided wave tomography"],
    standards: ["ASTM E2775", "BS 9690 Parts 1 & 2", "DNV-RP-G103", "API 570", "ASME B31.3"],
    comparedTo: "Conventional point-by-point UT thickness measurement",
    comparisonPoints: ["GWT screens entire pipe circumference and length at once", "Conventional UT provides precise thickness at each point", "GWT identifies areas needing detailed follow-up", "GWT can test through insulation without removal", "Conventional UT more accurate for individual measurements"],
    equipmentNeeded: ["Guided wave instrument (Teletest, Wavemaker, MsS)", "Transducer collar/ring (matched to pipe diameter)", "Inflatable bladder for coupling", "Analysis software for data interpretation", "Calibration fixtures"],
    certificationPath: "Specialized GWT certification required. Available through equipment manufacturers and certification bodies. Typically requires UT Level II as prerequisite plus 40+ hours GWT training.",
    typicalSetup: "Install transducer ring at accessible location on pipe. Select appropriate wave mode and frequency for pipe geometry and coating. Perform calibration using known features (welds, pipe ends). Run test in both directions from collar position.",
    dataAnalysis: "Data presented as distance-amplitude display showing reflection signals along the pipe length. Known features (welds, supports) confirmed against pipeline drawings. Anomalous reflections classified by severity and recommended for follow-up inspection with local technique."
  },
  "acoustic-emission-inspection": {
    name: "Acoustic Emission Testing (AET)",
    shortName: "AET",
    fullDescription: "Acoustic Emission Testing is a passive NDT technique that detects transient elastic waves generated by the rapid release of energy from localized sources within a material under stress. Unlike other NDT methods that send energy into the material, AET listens for energy released by active defects, making it uniquely suited for monitoring growing cracks and active corrosion.",
    physics: "When materials are stressed, microscopic deformation processes release elastic energy in the form of transient stress waves. Sources include crack growth, plastic deformation, fiber breakage in composites, and corrosion processes. These waves propagate through the material and are detected by piezoelectric sensors coupled to the surface. Multiple sensors enable source location through triangulation.",
    advantages: ["Monitors entire structure simultaneously", "Detects active/growing defects", "Real-time monitoring capability", "Non-invasive and passive", "Can test during operation", "Locates defect sources by triangulation", "Applicable to any pressurized component"],
    limitations: ["Cannot detect dormant defects", "Requires loading/stressing of component", "High background noise can mask signals", "Requires skilled data interpretation", "Attenuation affects detection distance", "One-time events may not be captured"],
    applications: ["Pressure vessel proof testing", "Storage tank integrity testing", "Fiber-reinforced composite testing", "Structural health monitoring", "Leak detection in pipelines", "Bridge and civil structure monitoring"],
    techniques: ["Source location (linear, planar, zone)", "Frequency analysis", "Pattern recognition", "Felicity ratio evaluation", "Kaiser effect monitoring", "Moment tensor analysis"],
    standards: ["ASTM E569", "ASTM E1067", "ASTM E2374", "EN 14584", "API 510/570", "ASME Section V Article 12", "MONPAC standard"],
    comparedTo: "Pressure testing (hydrostatic/pneumatic)",
    comparisonPoints: ["AET actively monitors for defect growth during pressurization", "Conventional hydro test is pass/fail only", "AET can identify defect locations for repair", "AET can be used during normal operation", "Hydro test requires shutdown and filling"],
    equipmentNeeded: ["Multi-channel AE system (8-64+ channels)", "Piezoelectric AE sensors (150kHz, 300kHz)", "Signal cables and preamplifiers", "Coupling agents and sensor mounting fixtures", "AE analysis and source location software"],
    certificationPath: "ASNT Level II/III AE certification. Specialized training required (typically 40-80 hours). ISO 9712 AE certification available internationally.",
    typicalSetup: "Mount sensors at calculated spacing on structure surface. Perform pencil lead break (Hsu-Nielsen) tests to verify sensor coupling and attenuation. Set gain, threshold, and timing parameters. Apply load per prescribed loading schedule while monitoring AE activity.",
    dataAnalysis: "AE data analyzed for source location clusters, intensity, frequency content, and correlation with applied load. Emission rate, cumulative counts, and amplitude distribution evaluated against acceptance criteria."
  },
  "mfl-inspection": {
    name: "Magnetic Flux Leakage Testing (MFL)",
    shortName: "MFL",
    fullDescription: "Magnetic Flux Leakage testing detects corrosion, pitting, and metal loss in ferromagnetic materials by magnetizing the material to near saturation and measuring leakage fields at the surface. MFL is the primary technique for storage tank floor inspection and in-line pipeline inspection (intelligent pigging).",
    physics: "When a ferromagnetic material is magnetized to near saturation, the magnetic flux flows uniformly through the material. At locations where the material cross-section is reduced (by corrosion, pitting, or other metal loss), the flux is forced out of the material and leaks into the surrounding air. This leakage flux is detected by Hall effect sensors or coils positioned near the surface.",
    advantages: ["Fast scanning of large areas", "Detects both surface and subsurface metal loss", "Works through coatings up to 6mm", "No couplant required", "High throughput for tank floor scanning", "Both top-side and bottom-side defect detection", "Quantitative wall loss measurement"],
    limitations: ["Only works on ferromagnetic materials", "Requires near-magnetic saturation", "Sensitivity affected by scan speed", "Difficult on curved or complex geometries", "Permanent magnets make handling difficult", "Cannot detect tight cracks reliably"],
    applications: ["Storage tank floor scanning (API 653)", "Pipeline intelligent pigging (ILI)", "Wire rope inspection", "Well casing inspection", "Tube inspection (ferromagnetic tubes)", "Above-ground storage tank inspection"],
    techniques: ["Permanent magnet bridge scanner", "Electromagnetic bridge scanner", "MFL intelligent pig", "Tri-axial MFL sensing", "Circumferential MFL", "High-resolution MFL mapping"],
    standards: ["API 653", "API 650", "ASTM E2905", "EEMUA 159", "API 1163", "ASME Section V"],
    comparedTo: "Manual UT thickness measurement grid",
    comparisonPoints: ["MFL scans entire tank floor rapidly (hours vs days)", "UT provides precise thickness at each point", "MFL detects bottom-side pitting that grid UT may miss", "MFL works through thin coatings without removal", "UT more accurate for remaining thickness measurement"],
    equipmentNeeded: ["MFL floor scanner (e.g., Silverwing Floormap, MFE)", "Calibration plates with machined defects", "Hall effect sensor arrays", "Data recording and analysis software", "Demagnetizing equipment (if required)"],
    certificationPath: "MFL certification typically proprietary through equipment manufacturers. ASNT Level II certification with MFL method training. Some companies offer MFL-specific certification programs.",
    typicalSetup: "Prepare tank floor surface (clean debris, ensure dry). Calibrate scanner on reference plate with known defects. Set scanning parameters (speed, sensitivity, recording threshold). Scan floor in overlapping parallel passes. Mark and record all indications for follow-up.",
    dataAnalysis: "MFL data presented as C-scan color maps showing signal amplitude across the scanned area. Indications classified by signal characteristics: top-side vs bottom-side metal loss, pitting vs general corrosion. Critical indications verified with manual UT measurements."
  }
};

// City-specific industry context
function getCityContext(cityName: string, country: string, region: string, industries: string[]): {
  industryFocus: string; regulations: string; keyChallenge: string; marketInsight: string;
} {
  // US cities
  if (country === "US") {
    if (industries.includes("Oil & Gas") || industries.includes("Petrochemical") || industries.includes("Refining")) {
      return {
        industryFocus: `${cityName}'s extensive ${industries.slice(0, 2).join(" and ").toLowerCase()} infrastructure demands rigorous inspection programs to maintain asset integrity and regulatory compliance.`,
        regulations: "OSHA PSM (29 CFR 1910.119), EPA RMP, state-specific environmental regulations, and API Recommended Practices govern inspection requirements in this region.",
        keyChallenge: `Aging infrastructure in the ${region} ${industries[0].toLowerCase()} sector requires sophisticated inspection techniques to detect degradation mechanisms while minimizing production downtime.`,
        marketInsight: `The ${cityName} market represents one of the largest concentrations of ${industries[0].toLowerCase()} assets in North America, driving sustained demand for advanced NDT services.`
      };
    }
    if (industries.includes("Aerospace") || industries.includes("Defense")) {
      return {
        industryFocus: `${cityName}'s ${industries.slice(0, 2).join(" and ").toLowerCase()} sector requires the highest levels of inspection precision and reliability.`,
        regulations: "FAA regulations, NAS 410 (Aerospace NDT Personnel Qualification), Nadcap accreditation requirements, and DCMA contract quality requirements apply.",
        keyChallenge: `Advanced materials (composites, titanium alloys, superalloys) used in ${cityName}'s aerospace manufacturing require specialized inspection approaches beyond conventional NDT.`,
        marketInsight: `${cityName} hosts major aerospace manufacturing and MRO facilities, creating a specialized market for high-precision NDT services.`
      };
    }
    return {
      industryFocus: `${cityName}'s ${industries.slice(0, 2).join(" and ").toLowerCase()} industries require reliable inspection services to ensure safety, compliance, and operational efficiency.`,
      regulations: "Federal OSHA regulations, ASME codes, and state-specific requirements govern NDT inspection practices in this region.",
      keyChallenge: `The diverse industrial base in ${cityName} requires NDT service providers capable of addressing multiple industry-specific inspection challenges.`,
      marketInsight: `${cityName}'s growing industrial sector presents expanding opportunities for advanced NDT inspection services.`
    };
  }
  // Middle East
  if (["AE", "SA", "QA", "KW", "BH", "OM"].includes(country)) {
    return {
      industryFocus: `${cityName}'s massive ${industries.slice(0, 2).join(" and ").toLowerCase()} sector represents one of the world's largest concentrations of industrial assets requiring continuous inspection.`,
      regulations: "Saudi Aramco SAES/SAEP standards, ADNOC procedures, QatarEnergy specifications, and international codes (ASME, API) govern inspection requirements in the GCC region.",
      keyChallenge: `Extreme operating temperatures, H₂S-rich environments, and desert conditions in ${cityName} create unique inspection challenges that demand specialized equipment and techniques.`,
      marketInsight: `Vision 2030 economic diversification programs and continued petrochemical expansion in ${cityName} are driving increased demand for advanced NDT technologies.`
    };
  }
  // India
  if (country === "IN") {
    return {
      industryFocus: `${cityName}'s rapidly growing ${industries.slice(0, 2).join(" and ").toLowerCase()} sector is modernizing its inspection practices to meet international standards.`,
      regulations: "ISNT certification standards, IBR (Indian Boiler Regulations), PESO (Petroleum and Explosives Safety Organisation), and international codes (ASME, API) apply.",
      keyChallenge: `India's expanding industrial infrastructure in ${cityName} requires transitioning from conventional to advanced NDT methods while building the skilled workforce to support this growth.`,
      marketInsight: `${cityName} is experiencing rapid industrial growth under Make in India initiatives, creating substantial demand for advanced NDT inspection services.`
    };
  }
  // Europe
  if (["GB", "NO", "DE", "NL", "FR", "IT", "ES", "BE", "PL"].includes(country)) {
    return {
      industryFocus: `${cityName}'s ${industries.slice(0, 2).join(" and ").toLowerCase()} sector operates under stringent European regulatory frameworks requiring comprehensive inspection programs.`,
      regulations: "PED (Pressure Equipment Directive), EN/ISO standards, NORSOK specifications (Norway), and national regulatory body requirements govern inspection practices.",
      keyChallenge: `Aging infrastructure combined with increasingly stringent environmental regulations in ${cityName} demands more sophisticated and efficient inspection approaches.`,
      marketInsight: `${cityName}'s industrial sector is increasingly adopting digital and automated inspection solutions as part of Industry 4.0 transformation initiatives.`
    };
  }
  // Default (Asia Pacific, Americas, Africa)
  return {
    industryFocus: `${cityName}'s ${industries.slice(0, 2).join(" and ").toLowerCase()} sector requires advanced inspection services to maintain international standards of asset integrity.`,
    regulations: `International codes (ASME, API, ISO) along with local regulatory requirements govern NDT inspection practices in ${cityName}.`,
    keyChallenge: `Growing industrial development in ${cityName} is creating increased demand for qualified NDT personnel and advanced inspection technologies.`,
    marketInsight: `${cityName} represents a developing market for advanced NDT services, with increasing adoption of modern inspection technologies.`
  };
}

export default function AdvancedMethodLocationPage() {
  const { slug } = useParams<{ slug: string }>();

  // Parse the slug to extract method and city
  const parsed = useMemo(() => {
    if (!slug) return null;

    // Try each method slug prefix
    for (const [methodSlug, methodData] of Object.entries(advancedMethods)) {
      if (slug.startsWith(methodSlug + "-")) {
        const citySlug = slug.slice(methodSlug.length + 1);
        const city = keyLocations.find(l => l.slug === citySlug);
        if (city) {
          return { method: methodData, methodSlug, city };
        }
      }
    }
    return null;
  }, [slug]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!parsed) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold">Page Not Found</h1>
          <p className="mt-4 text-muted-foreground">The requested inspection service page could not be found.</p>
          <Link to="/" className="mt-6 inline-block text-primary hover:underline">Return to Homepage</Link>
        </div>
      </div>
    );
  }

  const { method, methodSlug, city } = parsed;
  const cityContext = getCityContext(city.name, city.country, city.region, city.industries);
  const pageTitle = `${method.name} in ${city.name} | ${method.shortName} Inspection Services`;
  const pageDescription = `Professional ${method.name} (${method.shortName}) inspection services in ${city.name}, ${city.region}. ${method.fullDescription.slice(0, 120)}...`;

  // Build JSON-LD structured data
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "name": `Atlantis NDT - ${method.shortName} Inspection ${city.name}`,
        "description": pageDescription,
        "url": `https://atlantisndt.com/services/${slug}`,
        "telephone": "+1-800-505-3554",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": city.name,
          "addressRegion": city.region,
          "addressCountry": city.country
        },
        "areaServed": { "@type": "City", "name": city.name },
        "serviceType": method.name,
        "provider": { "@id": "https://atlantisndt.com/#organization" }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://atlantisndt.com" },
          { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://atlantisndt.com/ndt-methods" },
          { "@type": "ListItem", "position": 3, "name": `${method.shortName} Inspection`, "item": `https://atlantisndt.com/services/${methodSlug}` },
          { "@type": "ListItem", "position": 4, "name": city.name, "item": `https://atlantisndt.com/services/${slug}` }
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={pageTitle}
        description={pageDescription}
        canonical={`https://atlantisndt.com/services/${slug}`}
      />
      <Navigation />

      {/* Breadcrumbs */}
      <div className="bg-muted/30 border-b">
        <div className="container mx-auto px-4 py-3">
          <nav className="flex text-sm text-muted-foreground" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-primary">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/ndt-methods" className="hover:text-primary">Services</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground font-medium">{method.shortName} Inspection in {city.name}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-blue-500/20 border border-blue-400/30 rounded-full text-sm font-medium text-blue-300">
                {method.shortName}
              </span>
              <span className="px-3 py-1 bg-emerald-500/20 border border-emerald-400/30 rounded-full text-sm font-medium text-emerald-300">
                {city.name}, {city.region}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {method.name} in {city.name}
            </h1>
            <p className="text-xl text-blue-100/80 mb-8 leading-relaxed">
              {method.fullDescription}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="px-6 py-3 bg-primary hover:bg-primary/90 rounded-lg font-medium transition-colors">
                Request {method.shortName} Quote
              </Link>
              <Link to="/consulting" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg font-medium transition-colors">
                Our Consulting Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* City Context Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">{method.shortName} Inspection Services in {city.name}</h2>
            <p className="text-lg text-muted-foreground mb-6">{cityContext.industryFocus}</p>
            <p className="text-muted-foreground mb-6">{cityContext.marketInsight}</p>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="p-6 rounded-lg border bg-card">
                <h3 className="font-semibold mb-3 text-primary">Local Industries Served</h3>
                <ul className="space-y-2">
                  {city.industries.map(ind => (
                    <li key={ind} className="flex items-center gap-2 text-muted-foreground">
                      <span className="w-2 h-2 rounded-full bg-primary" />
                      {ind}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-6 rounded-lg border bg-card">
                <h3 className="font-semibold mb-3 text-primary">Major Clients in {city.name}</h3>
                <ul className="space-y-2">
                  {city.companies.map(company => (
                    <li key={company} className="flex items-center gap-2 text-muted-foreground">
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                      {company}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Physics & How It Works */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">How {method.shortName} Works</h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">{method.physics}</p>

            <h3 className="text-2xl font-semibold mb-4">Typical Setup & Procedure</h3>
            <p className="text-muted-foreground mb-6">{method.typicalSetup}</p>

            <h3 className="text-2xl font-semibold mb-4">Data Analysis</h3>
            <p className="text-muted-foreground mb-6">{method.dataAnalysis}</p>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">{method.shortName} Applications in {city.name}</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {method.applications.map((app, i) => (
                <div key={i} className="p-4 rounded-lg border bg-card flex items-start gap-3">
                  <span className="mt-1 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-sm font-bold text-primary">{i+1}</span>
                  <div>
                    <p className="font-medium">{app}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Techniques */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">{method.shortName} Techniques Available</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {method.techniques.map((tech, i) => (
                <div key={i} className="p-4 rounded-lg border bg-card text-center">
                  <p className="font-medium">{tech}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Advantages & Limitations */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Advantages & Limitations</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-emerald-600">Advantages</h3>
                <ul className="space-y-3">
                  {method.advantages.map((adv, i) => (
                    <li key={i} className="flex items-start gap-2 text-muted-foreground">
                      <span className="text-emerald-500 mt-0.5">✓</span>
                      {adv}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-amber-600">Limitations</h3>
                <ul className="space-y-3">
                  {method.limitations.map((lim, i) => (
                    <li key={i} className="flex items-start gap-2 text-muted-foreground">
                      <span className="text-amber-500 mt-0.5">△</span>
                      {lim}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">{method.shortName} vs {method.comparedTo}</h2>
            <ul className="space-y-4">
              {method.comparisonPoints.map((point, i) => (
                <li key={i} className="p-4 rounded-lg border bg-card flex items-start gap-3">
                  <span className="mt-0.5 text-primary font-bold">→</span>
                  <p className="text-muted-foreground">{point}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Standards & Codes */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Applicable Standards & Codes</h2>
            <p className="text-muted-foreground mb-4">{cityContext.regulations}</p>
            <div className="flex flex-wrap gap-3 mt-6">
              {method.standards.map((std, i) => (
                <span key={i} className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  {std}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Equipment & Certification */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Equipment Used</h2>
              <ul className="space-y-3">
                {method.equipmentNeeded.map((eq, i) => (
                  <li key={i} className="flex items-start gap-2 text-muted-foreground">
                    <span className="text-primary">•</span> {eq}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Certification Path</h2>
              <p className="text-muted-foreground">{method.certificationPath}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Challenge Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">{method.shortName} Challenges in {city.name}</h2>
            <p className="text-lg text-muted-foreground mb-6">{cityContext.keyChallenge}</p>
            <p className="text-muted-foreground">
              Atlantis NDT's team of ASNT Level III certified professionals brings extensive experience in {method.shortName} inspection
              across {city.industries.join(", ").toLowerCase()} sectors in the {city.region} region. Our {method.shortName} services in {city.name} combine
              state-of-the-art equipment with deep industry knowledge to deliver reliable, code-compliant inspection results.
            </p>
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Related Services in {city.name}</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {Object.entries(advancedMethods)
                .filter(([key]) => key !== methodSlug)
                .slice(0, 3)
                .map(([key, m]) => (
                  <Link key={key} to={`/services/${key}-${city.slug}`} className="p-4 rounded-lg border bg-card hover:border-primary transition-colors">
                    <p className="font-semibold">{m.shortName} Inspection</p>
                    <p className="text-sm text-muted-foreground mt-1">{m.shortName} services in {city.name}</p>
                  </Link>
                ))
              }
            </div>
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">{method.shortName} in Other Locations</h3>
              <div className="flex flex-wrap gap-2">
                {keyLocations
                  .filter(l => l.slug !== city.slug)
                  .slice(0, 12)
                  .map(loc => (
                    <Link key={loc.slug} to={`/services/${methodSlug}-${loc.slug}`} className="px-3 py-1.5 text-sm rounded-full border hover:border-primary hover:text-primary transition-colors">
                      {loc.name}
                    </Link>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need {method.shortName} Inspection in {city.name}?</h2>
          <p className="text-xl text-blue-100/80 mb-8 max-w-2xl mx-auto">
            Contact Atlantis NDT for professional {method.name} services. ASNT Level III certified inspectors available for projects across {city.region}.
          </p>
          <Link to="/contact" className="inline-block px-8 py-4 bg-primary hover:bg-primary/90 rounded-lg font-medium text-lg transition-colors">
            Get a Free Quote
          </Link>
        </div>
      </section>

      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    </div>
  );
}
