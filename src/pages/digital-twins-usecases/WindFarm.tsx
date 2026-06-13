import ProductPageLayout from "@/components/ProductPageLayout";

const compareRows = [
    { factor: "Asset count (typical farm)", atlantis: "20–200 turbines per farm + balance-of-plant", competitor: "—" },
    { factor: "Primary failure modes", atlantis: "Blade leading-edge erosion, blade structural fatigue, gearbox bearing wear, generator winding insulation, tower foundation, monopile fatigue (offshore)", competitor: "—" },
    { factor: "Inspection methods", atlantis: "Drone visual + IR, blade ultrasonic, rope access, ROV (offshore monopile), oil analysis, vibration monitoring", competitor: "—" },
    { factor: "Code references", atlantis: "DNV-ST-0376, IEC 61400-23, AWEA Recommended Practice, GL Renewables guidelines", competitor: "—" },
    { factor: "Atlantis ROI typical", atlantis: "$250K–$900K/yr per farm — turbine availability optimization + drone inspection cost reduction + warranty management", competitor: "—" },
    { factor: "Implementation", atlantis: "8–12 weeks first farm live", competitor: "—" },
    { factor: "Offshore extras", atlantis: "Foundation/monopile inspection, splash zone, J-tube and cable integrity, vessel access scheduling", competitor: "—" },
];

const faqs = [
    { question: "How does Atlantis handle drone inspection data?", answer: "Drone inspection imagery (DJI, Skydio, Cyberhawk, Sulus) imports natively as structured per-blade records with image-coordinate tagging. AI-driven defect detection — leading edge erosion classification, surface damage, lightning strike marks, paint condition — runs on import. Inspector review confirms or adjusts classifications. The 3D blade model overlays defect locations and severity. Multiple-inspection trending shows defect progression over time, which drives blade repair vs replace decisions." },
    { question: "What about gearbox condition monitoring integration?", answer: "Vibration monitoring and oil analysis data from major condition monitoring systems (Romax, GL Garrad Hassan, Brüel &amp; Kjær Vibro) imports natively. Anomaly events flow into the turbine asset record. Combined with inspection findings, this produces a full turbine health picture rather than a fragmented set of monitoring tool dashboards. For turbines under O&amp;M warranty, the structured record supports warranty claim defensibility." },
    { question: "Offshore wind specifics?", answer: "Offshore adds monopile / jacket foundation integrity, transition piece, J-tube / cable integrity, splash zone, and vessel access scheduling. Atlantis treats offshore wind as a distinct workflow with the marine-environment damage mechanisms (similar pattern to FPSO splash zone work). ROV inspection results from below-water foundation surveys import as structured records. Cable inspection on inter-array and export cables tracks separately with cable-specific failure modes (J-tube wear, free-span fatigue, abrasion damage)." },
    { question: "Can the twin handle a multi-OEM fleet?", answer: "Yes — and this is actually the typical case. Most operators have a mix of GE, Vestas, Siemens Gamesa, Nordex, MingYang turbines across their portfolio. Atlantis stores OEM-specific configurations and uses OEM-specific inspection requirements. The platform provides the cross-OEM operational view (this is what the integrity team needs) without losing OEM-specific detail (this is what the maintenance team needs)." },
    { question: "How does this fit with SCADA and OEM remote monitoring?", answer: "Atlantis pulls turbine availability, alarm history, and key SCADA tags from the operator&rsquo;s SCADA system or from OEM remote monitoring (where the operator has access). Operating context drives inspection priorities — a turbine with elevated vibration alarms moves up the inspection schedule. The platform doesn&rsquo;t replace SCADA — it consumes SCADA data for integrity decision-making." },
];

export default function WindFarmUseCase() {
    const structuredData = {
        "@context": "https://schema.org",
        "@graph": [
            { "@type": "Article", "headline": "Atlantis Digital Twin for Wind Farms: Blade, Gearbox, Foundation Integrity [2026]", "datePublished": "2026-05-09", "dateModified": "2026-05-09", "author": { "@type": "Person", "name": "Anoop Rayavarapu" }, "publisher": { "@type": "Organization", "name": "Atlantis NDT" }, "mainEntityOfPage": { "@type": "WebPage", "@id": "https://atlantisndt.com/digital-twins/wind-farm" } },
            { "@type": "FAQPage", "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } })) }
        ]
    };
    return (
        <ProductPageLayout
            title="Atlantis Digital Twin for Wind Farms: Blade, Gearbox, Foundation Integrity [2026]"
            description="Wind farm digital twin: blade drone inspection, gearbox condition monitoring, tower & monopile foundation, multi-OEM fleet (GE, Vestas, Siemens Gamesa). $250K-$900K/yr ROI per farm."
            canonical="https://atlantisndt.com/digital-twins/wind-farm"
            eyebrow="Use Case"
            h1="Atlantis Digital Twin for Wind Farms: Blade, Gearbox, Tower &amp; Monopile Integrity [2026]"
            intro="Wind farm operators run 20–200 turbines per farm across multi-OEM fleets. Atlantis Digital Twin manages blade drone inspection, gearbox condition monitoring, tower foundation, and (for offshore) monopile / jacket integrity in one platform — cross-OEM and audit-ready."
            heroGradient="from-sky-700 to-emerald-700"
            competitorLabel="Wind Farm Specifics"
            compareRows={compareRows}
            faqs={faqs}
            related={[
                { href: "/digital-twins/offshore-platform", title: "Offshore Platform", blurb: "Adjacent offshore use case — same marine-environment damage mechanisms." },
                { href: "/digital-twins/subsea", title: "Subsea Equipment", blurb: "Cables, foundations, ROV inspection workflows." },
                { href: "/integrations/ge-vernova-apm", title: "GE Vernova APM Integration", blurb: "Strategic integration for wind operators with GE turbines." },
                { href: "/digital-twins", title: "Atlantis Digital Twin", blurb: "Product page — features, pricing, case studies." },
                { href: "/erp", title: "Atlantis NDT ERP", blurb: "Companion ERP — jobs, certs, equipment, invoicing." },
                { href: "/contact", title: "Book a Wind Demo", blurb: "Bring a turbine list and a sample drone inspection report. We&rsquo;ll show your farm as a twin in 30 minutes." },
            ]}
            ctaTitle="See Your Wind Farm as a Live Integrity Twin"
            ctaSubtitle="Multi-OEM, drone-data-native, gearbox + foundation + blade in one record. Bring a sample inspection, leave with a working twin demo."
            structuredData={structuredData}
            bodyChildren={
                <>
                    <h2>Wind asset integrity is unique</h2>
                    <p>Wind turbine integrity combines three workflows that don&rsquo;t exist together in any other industry. (1) Blade inspection, increasingly drone-led with AI defect detection — image-data-heavy with classification challenges that don&rsquo;t exist in NDT thickness work. (2) Gearbox / generator condition monitoring — continuous vibration and oil analysis with ML-driven anomaly detection (Aspen Mtell territory). (3) Foundation integrity — for onshore turbines this is concrete and grout; for offshore turbines this is monopile or jacket steel with marine-environment damage mechanisms similar to FPSO splash zone work. Atlantis Digital Twin manages all three workflows in one platform with a single per-turbine record.</p>

                    <h2>Blade inspection workflow</h2>
                    <p>Drone inspection imagery from major drone-inspection vendors (DJI Mavic / Matrice, Skydio, Cyberhawk, Sulus) imports natively as structured per-blade records with image-coordinate tagging. AI-driven defect detection runs on import — leading edge erosion classification, surface damage, lightning strike marks, paint condition. Inspector review confirms or adjusts classifications; the platform learns from corrections. The 3D blade model overlays defect locations and severity bands. Multi-inspection trending shows defect progression, driving blade repair vs replace decisions and feeding the warranty defensibility record.</p>

                    <h2>Gearbox and drivetrain</h2>
                    <p>Vibration monitoring data from major systems (Romax, GL Garrad Hassan, Brüel &amp; Kjær Vibro) imports natively. Oil analysis results from periodic samples (ferrous count, ISO cleanliness, particle size distribution) flow into the asset record. Combined with inspection findings, this produces a full turbine health picture rather than a fragmented set of monitoring tool dashboards. For turbines under O&amp;M warranty (typically the first 5 years from OEM), the structured record supports warranty claim defensibility — operators have a real economic incentive to maintain it.</p>

                    <h2>Tower and foundation</h2>
                    <p>Onshore: tower bolt tension records, weld inspection per IEC 61400-23, foundation grout condition, anchor cage condition. Offshore: monopile or jacket steel thickness CMLs, splash zone inspection, J-tube and cable inspection, transition piece grout condition, scour protection survey results. ROV inspection results for below-water work import as structured records. Boat landing and access ladder inspection separately tracked.</p>

                    <h2>Multi-OEM fleet management</h2>
                    <p>Most operators have a mix of GE, Vestas, Siemens Gamesa, Nordex, MingYang, Goldwind, and Senvion (legacy) turbines across the portfolio. Atlantis stores OEM-specific configurations and uses OEM-specific inspection requirements. The platform provides the cross-OEM operational view (what the integrity team needs) without losing OEM-specific detail (what the maintenance team needs). Cross-OEM trending — &lsquo;our Vestas V112 fleet is showing X failure mode 2× more frequently than the GE 2.5 fleet&rsquo; — drives strategic procurement and warranty discussions.</p>

                    <h2>Offshore wind specifics</h2>
                    <p>Offshore wind adds monopile / jacket foundation integrity (steel wastage, fatigue), transition piece (grout condition, bolt tension), splash zone (high corrosion rate), J-tube and cable integrity, scour protection survey, and vessel access scheduling. Inspection windows are constrained by sea state and CTV / SOV availability, similar to FPSO inspection access constraints. The platform surfaces access status on every inspection so planning is realistic. Cable inspection on inter-array and export cables tracks separately with cable-specific failure modes (J-tube wear, free-span fatigue, abrasion damage at landfall).</p>

                    <h2>ROI for wind operators</h2>
                    <ul>
                        <li><strong>Turbine availability:</strong> Better-targeted inspection prevents in-service failure that takes a turbine down for weeks. A single avoided multi-week downtime event is $50K–enterprise tier in lost generation revenue.</li>
                        <li><strong>Drone inspection efficiency:</strong> Structured data flow eliminates manual inspection report production = 30–50% labor savings on a typical $50K–enterprise tier, accessible drone inspection budget.</li>
                        <li><strong>Warranty defensibility:</strong> Structured record of all inspections supports warranty claims against OEMs. Recovered warranty value can dwarf the platform cost.</li>
                        <li><strong>Repower / refurbishment decisions:</strong> Multi-year integrity record enables defensible repower vs replace decisions as turbines approach end of design life.</li>
                    </ul>
                </>
            }
        />
    );
}
