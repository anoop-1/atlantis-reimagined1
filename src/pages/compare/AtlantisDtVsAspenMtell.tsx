import ProductPageLayout from "@/components/ProductPageLayout";
import CompetitorDeepDive from "@/components/CompetitorDeepDive";

const compareRows = [
    { factor: "Pricing model", atlantis: "Affordable SaaS — quote on request, fully customizable", competitor: "AspenTech Subscription — typically $150K–$700K/yr depending on rotating equipment count" },
    { factor: "Primary use case", atlantis: "Fixed-equipment inspection integrity (CMLs, FFS, RBI)", competitor: "Predictive maintenance ML on rotating equipment (pumps, compressors, turbines)" },
    { factor: "Equipment focus", atlantis: "Static / fixed equipment — vessels, piping, tanks, exchangers, structures", competitor: "Rotating equipment with continuous telemetry" },
    { factor: "Data source", atlantis: "Inspection events (UT thickness, RT, MT/PT, PAUT scans)", competitor: "Continuous time-series sensor data — vibration, temperature, current" },
    { factor: "Engineering model", atlantis: "API 510, 570, 653, 579, 581", competitor: "Agent-based ML pattern recognition (Mtell &lsquo;agents&rsquo;) trained on historical failures" },
    { factor: "3D twin", atlantis: "Native browser WebGL", competitor: "Not the focus; data shown in dashboards and process diagrams" },
    { factor: "Implementation", atlantis: "8–14 weeks first asset live", competitor: "12–24 weeks per asset class to train Mtell agents" },
    { factor: "Best fit", atlantis: "Fixed-equipment integrity teams", competitor: "Reliability teams managing rotating equipment fleets" },
    { factor: "Coexistence", atlantis: "Pulls Mtell anomaly events into asset record for severity context", competitor: "Pulls Atlantis FFS/RBI status into rotating-equipment risk picture" },
];

const faqs = [
    { question: "Are Atlantis Digital Twin and Aspen Mtell competitors?", answer: "More complementary than competitive. Aspen Mtell is a predictive maintenance ML product focused on rotating equipment — pumps, compressors, turbines, motors — where there is high-frequency sensor telemetry (vibration, temperature, current draw) and a meaningful library of historical failure modes for ML pattern recognition. Atlantis Digital Twin is focused on fixed equipment — vessels, piping, tanks, structural welds — where the data is episodic inspection events (UT thickness, RT, MT/PT, PAUT) and the engineering is API code-driven (510, 570, 653, 579, 581). Most large operators need both: Mtell for the rotating equipment, Atlantis for the fixed equipment." },
    { question: "When does Aspen Mtell make sense?", answer: "When you have a meaningful rotating-equipment fleet (typically 100+ critical pumps/compressors/turbines), you have high-frequency sensor telemetry already flowing into a historian (PI, Insights Hub, or similar), you have historical failure data to train Mtell agents on, and you have a reliability engineering team that owns the platform. Mtell is excellent at early warning of degradation patterns 30–90 days before failure on rotating equipment that fits its training-data profile. It does not do anything useful for a vessel or a piping system or a storage tank where the failure mode is episodic corrosion or fatigue." },
    { question: "When does Atlantis Digital Twin make sense?", answer: "When your dominant integrity exposure is fixed equipment (which it is for almost every refinery, petrochemical plant, FPSO, tank farm, gas plant, and pipeline operator). Fixed-equipment failures are typically corrosion-driven, fatigue-driven, or stress-corrosion-cracking — and the engineering response is API 579 FFS, API 581 RBI, inspection-interval revision, and CML thickness monitoring. Mtell does not address any of this. Atlantis is the right platform." },
    { question: "Can the two be integrated?", answer: "Yes — and we&rsquo;ve done it for several oil &amp; gas operators. Mtell anomaly events on rotating equipment near a fixed asset (e.g. a pump on a vessel inlet) flow into the Atlantis asset record so integrity engineers see the rotating-equipment context when reviewing the fixed-equipment risk. Conversely, Atlantis FFS/RBI status flows back to Mtell so reliability engineers see the fixed-equipment risk picture when prioritizing rotating-equipment work. Integration is REST-based, typically 4–6 weeks of build." },
];

export default function AtlantisDtVsAspenMtell() {
    const structuredData = {
        "@context": "https://schema.org",
        "@graph": [
            { "@type": "Article", "headline": "Atlantis Digital Twin vs Aspen Mtell: Fixed Equipment vs Rotating Equipment [2026]", "datePublished": "2026-05-09", "dateModified": "2026-05-09", "author": { "@type": "Person", "name": "Anoop Rayavarapu" }, "publisher": { "@type": "Organization", "name": "Atlantis NDT" }, "mainEntityOfPage": { "@type": "WebPage", "@id": "https://atlantisndt.com/compare/atlantis-dt-vs-aspen-mtell" } },
            { "@type": "ItemList", "name": "Atlantis vs Aspen Mtell", "itemListElement": compareRows.map((r, i) => ({ "@type": "ListItem", "position": i + 1, "name": r.factor, "description": `Atlantis: ${r.atlantis}. Aspen Mtell: ${r.competitor}` })) },
            { "@type": "FAQPage", "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } })) }
        ]
    };
    return (
        <ProductPageLayout
            title="Atlantis Digital Twin vs Aspen Mtell: Fixed Equipment vs Rotating ML [2026]"
            description="Aspen Mtell vs Atlantis Digital Twin: predictive maintenance ML on rotating equipment vs inspection integrity twin on fixed equipment. Complementary, not competitive — coverage map inside."
            canonical="https://atlantisndt.com/compare/atlantis-dt-vs-aspen-mtell"
            eyebrow="Fixed vs Rotating Equipment"
            h1="Atlantis Digital Twin vs Aspen Mtell: Fixed Equipment Integrity vs Rotating Equipment ML [2026]"
            intro="Aspen Mtell and Atlantis Digital Twin look like competitors on the surface — both call themselves &lsquo;predictive&rsquo; and both live in the integrity / reliability stack. They actually cover different equipment classes. Most operators need both."
            heroGradient="from-rose-700 to-pink-800"
            competitorLabel="Aspen Mtell"
            compareRows={compareRows}
            faqs={faqs}
            related={[
                { href: "/integrations/aspen-mtell", title: "Aspen Mtell Integration", blurb: "How Atlantis pulls Mtell anomaly events into the asset record." },
                { href: "/compare/atlantis-dt-vs-ge-predix", title: "vs GE Predix / APM", blurb: "Other major APM platform — Meridium-derived." },
                { href: "/compare/atlantis-dt-vs-ibm-maximo", title: "vs IBM Maximo", blurb: "Tier-1 EAM with APM extensions." },
                { href: "/digital-twins", title: "Atlantis Digital Twin", blurb: "Product page — features and case studies." },
                { href: "/erp", title: "Atlantis NDT ERP", blurb: "Companion ERP — jobs, certs, equipment, invoicing." },
                { href: "/contact", title: "Book a Demo", blurb: "60-minute scoping call with an ASNT Level III consultant." },
            ]}
            ctaTitle="Cover Your Fixed Equipment Gap"
            ctaSubtitle="If Mtell handles your rotating equipment, Atlantis handles the rest. Let&rsquo;s scope the fixed-equipment integrity workflow in 30 minutes."
            structuredData={structuredData}
            bodyChildren={
                <>
                    <h2>Different equipment classes, different tools</h2>
                    <p>Aspen Mtell is the leading predictive maintenance ML product for rotating equipment. AspenTech&rsquo;s acquisition of Mtell in 2016 brought agent-based machine learning to a deep base of refinery and petrochemical customers. The product works by training &lsquo;agents&rsquo; on historical sensor data and known failure events — once trained, an agent can recognize the early-warning signature of an emerging failure mode on similar equipment and raise an alert 30–90 days before failure. This is genuinely valuable for pumps, compressors, turbines, motors, and other rotating equipment that have high-frequency telemetry and a usable failure history.</p>
                    <p>Atlantis Digital Twin is built for the other half of the integrity workload: fixed equipment. Vessels, piping, tanks, heat exchangers, structural welds. These don&rsquo;t fail with continuous-telemetry signatures — they fail through corrosion (general, localized, pitting, CUI), fatigue (high-cycle, low-cycle, thermal), stress-corrosion cracking, hydrogen attack, creep. The engineering response is API code-driven: API 510 for vessels, API 570 for piping, API 653 for tanks, API 579 for fitness-for-service, API 581 for risk-based inspection. The data inputs are episodic inspections, not continuous sensor streams.</p>

                    <h2>Coverage map for an integrity program</h2>
                    <p>If you ran both:</p>
                    <ul>
                        <li><strong>Mtell</strong> covers the rotating-equipment failure modes — bearing degradation, seal failure, impeller damage, alignment issues, motor winding faults — through ML on continuous telemetry.</li>
                        <li><strong>Atlantis</strong> covers the fixed-equipment failure modes — corrosion, fatigue, SCC, CUI, dead leg corrosion, hydrogen attack, creep — through inspection capture, FFS, and RBI.</li>
                    </ul>
                    <p>Neither replaces the other. Together they cover the integrity workload for a typical hydrocarbon process plant.</p>

                    <h2>Integration architecture</h2>
                    <p>The standard integration is bi-directional REST. Mtell anomaly events on rotating equipment near a fixed asset (e.g. a feed pump on a reactor inlet) flow into the corresponding Atlantis asset record so integrity engineers see the operating-severity context when reviewing fixed-equipment risk. Atlantis FFS/RBI risk-band changes flow back to Mtell so reliability engineers see when the connected fixed equipment is in elevated risk and can prioritize rotating-equipment work accordingly. Implementation is 4–6 weeks of build.</p>
                <CompetitorDeepDive slug="aspen-mtell" />
            </>
            }
        />
    );
}
