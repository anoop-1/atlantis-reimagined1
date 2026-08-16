/**
 * /compare/ge-predix-alternatives — the alternatives-field owner (Phase D, 2026-08-16).
 *
 * WHY: the Predix cluster (USA 90d: "predix digital twin" 102i p22, "predix
 * alternatives" 19i p24, "ge predix alternatives" 13i p37) all resolves to the
 * head-to-head vs-page — the wrong shape for a searcher who wants the FIELD.
 * §23.3 honesty rule: credit each rival for what it is genuinely best at.
 * §18: no pricing; vendor pricing qualitative only (§25.5).
 *
 * Crawler-facing body lives in scripts/phase-d-dt-2026-08-16.mjs — keep the
 * two in substantive agreement when editing either.
 */
import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { Link } from "react-router-dom";
import { Layers, Compass, ArrowRight } from "lucide-react";

const FIELD = [
  {
    name: "Cognite Data Fusion",
    strong: "The strongest pure data-platform alternative: contextualises OT/IT/engineering data at scale, with a genuine developer ecosystem.",
    caveat: "It is infrastructure — you build or buy the applications on top.",
    link: "/compare/atlantis-dt-vs-cognite-data-fusion",
  },
  {
    name: "AVEVA (PI System + Predictive Analytics)",
    strong: "If your plant already runs PI historians this is the lowest-friction road: the data is already there. Strongest on time-series.",
    caveat: "The twin itself is assembled from several AVEVA products.",
    link: "/compare/atlantis-dt-vs-aveva-pi-system",
  },
  {
    name: "Bentley iTwin",
    strong: "The engineering-model twin: geometry, reality capture, infrastructure-grade change tracking. Outstanding where the asset IS the structure.",
    caveat: "Lighter on process-plant condition analytics.",
    link: "/compare/atlantis-dt-vs-bentley-itwin",
  },
  {
    name: "Siemens (MindSphere / Insights Hub)",
    strong: "Deepest where Siemens automation already runs the plant.",
    caveat: "Value concentrates inside the Siemens estate.",
    link: "/compare/atlantis-dt-vs-siemens-mindsphere",
  },
  {
    name: "PTC ThingWorx",
    strong: "Rapid IoT application building with strong AR.",
    caveat: "A platform for makers of connected products more than for owner-operators.",
    link: "/compare/atlantis-dt-vs-ptc-thingworx",
  },
  {
    name: "Azure Digital Twins",
    strong: "DTDL modelling primitives on Azure — maximum flexibility.",
    caveat: "A developer service, not a product: you build everything else.",
    link: "/compare/atlantis-dt-vs-microsoft-azure-digital-twins",
  },
];

export default function GePredixAlternatives() {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="GE Predix Alternatives — Who Actually Replaces It, and For Which Job | Atlantis NDT"
        description="A working map of the GE Predix (now GE Vernova) alternatives field: Cognite, AVEVA, Bentley iTwin, Siemens, PTC, Azure Digital Twins and NDT-data-native platforms — matched to the job you are actually hiring a platform for."
        canonicalUrl="https://atlantisndt.com/compare/ge-predix-alternatives"
      />
      <Navigation />
      <Breadcrumbs items={[{ label: "Compare", href: "/compare" }, { label: "GE Predix Alternatives" }]} />

      <section className="bg-gradient-to-br from-[#003366] to-[#004aad] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            GE Predix Alternatives: Who Actually Replaces It, and For Which Job
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-3">What are the real alternatives to GE Predix?</h2>
          <p className="text-lg text-white/90 max-w-3xl">
            It depends on which of Predix's jobs you are hiring for. For fleet APM and predictive
            analytics the credible successors are Cognite Data Fusion and AVEVA's PI-based stack; for
            engineering-grade digital twins, Bentley iTwin and Siemens; for IoT platform work, PTC
            ThingWorx and Azure Digital Twins; and for asset-integrity twins built on inspection evidence
            rather than sensor feeds, NDT-data-native platforms — the class Atlantis DT belongs to.
          </p>
        </div>
      </section>

      <main className="max-w-4xl mx-auto px-4 py-12 space-y-14">
        <section>
          <div className="flex items-center gap-3 mb-4">
            <Compass className="w-7 h-7 text-[#004aad]" />
            <h2 className="text-2xl md:text-3xl font-bold">Why people search for a Predix alternative at all</h2>
          </div>
          <p className="text-muted-foreground">
            Predix was launched as an industrial-internet platform of enormous ambition, and GE has since
            refocused it inside GE Vernova around APM for the installed GE fleet. It remains strong
            exactly there — power-generation fleets with deep GE equipment coverage. The searches happen
            because teams outside that centre of gravity — refining, midstream, chemicals, discrete
            plant — find themselves evaluating a platform whose roadmap is now anchored to someone else's
            equipment.
          </p>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-6">
            <Layers className="w-7 h-7 text-[#004aad]" />
            <h2 className="text-2xl md:text-3xl font-bold">The alternatives, matched to the job</h2>
          </div>
          <div className="space-y-5">
            {FIELD.map((v) => (
              <div key={v.name} className="border rounded-lg p-5">
                <h3 className="font-semibold text-lg mb-2">{v.name}</h3>
                <p className="text-muted-foreground mb-2">{v.strong} {v.caveat}</p>
                <Link to={v.link} className="text-[#004aad] hover:underline inline-flex items-center gap-1">
                  Compared in detail <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
            <div className="border-2 border-[#004aad] rounded-lg p-5">
              <h3 className="font-semibold text-lg mb-2">NDT-data-native platforms (Atlantis DT)</h3>
              <p className="text-muted-foreground mb-2">
                A different premise from all of the above: the twin is built on inspection evidence —
                wall thickness, corrosion mapping, weld records, fitness-for-service state — rather than
                sensor telemetry. For fixed-equipment integrity, that is the data that actually predicts
                failure; sensors on a vessel shell tell you far less than its thickness-survey history.
                Openly not the tool for rotating-fleet vibration analytics — that is APM territory, and
                Cognite or AVEVA are better there.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/digital-twins" className="text-[#004aad] hover:underline inline-flex items-center gap-1">
                  How the Atlantis platform approaches it <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/digital-twin-roi-calculator" className="text-[#004aad] hover:underline inline-flex items-center gap-1">
                  Estimate the ROI <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Choosing without regretting it</h2>
          <p className="text-muted-foreground">
            Write the failure you are trying to prevent, then work backwards to the data that predicts
            it. If it is rotating-equipment degradation, the sensor-analytics platforms above are the
            field. If it is fixed-equipment integrity — vessels, piping, tanks, exchangers — the
            predictive data is inspection history, and the honest comparison is between the
            engineering-model twins and the NDT-data-native class. Cost the decision with{" "}
            <Link to="/digital-twin-roi-calculator" className="text-[#004aad] hover:underline">your own asset counts</Link>{" "}
            before any vendor conversation, and read{" "}
            <Link to="/blog/ai-in-digital-twins-for-asset-integrity" className="text-[#004aad] hover:underline">
              what AI in a twin can and cannot predict
            </Link>{" "}
            before believing anyone's autonomy claims.
          </p>
        </section>
      </main>

      <ContactDetails />
    </div>
  );
}
