import ProductPageLayout from "@/components/ProductPageLayout";
import UsecaseDeepDive from "@/components/UsecaseDeepDive";

const compareRows = [
    { factor: "Asset scope (typical operator)", atlantis: "Hundreds to thousands of miles of pipeline + above-ground stations", competitor: "—" },
    { factor: "Primary failure modes", atlantis: "Internal corrosion, external corrosion, SCC, third-party damage, cyclic fatigue, weld defects", competitor: "—" },
    { factor: "Code references", atlantis: "ASME B31.4 / B31.8, API 1160, API 1163, NACE SP0204, PHMSA 49 CFR 192/195, CSA Z662", competitor: "—" },
    { factor: "Inspection methods", atlantis: "ILI (MFL, UT, EMAT, caliper), CIPS / DCVG / ACVG, hydrotest, direct assessment", competitor: "—" },
    { factor: "Atlantis ROI typical", atlantis: "$1M–$5M/yr through ILI re-inspection optimization + dig program prioritization + reduced rework", competitor: "—" },
    { factor: "Implementation", atlantis: "10–14 weeks for first pipeline system live", competitor: "—" },
    { factor: "Regulatory alignment", atlantis: "PHMSA IMP / IM, CSA Z662, EU PED — Atlantis aligns inspection records to regulatory reporting", competitor: "—" },
];

const faqs = [
    { question: "Can Atlantis ingest ILI inspection results?", answer: "Yes. ILI vendor reports from major providers (Baker Hughes, ROSEN, NDT Global, T.D. Williamson, Onstream Pipeline Inspection) import natively as structured anomaly data — chainage, anomaly type, depth, length, width, axial position, classification (metal loss / dent / weld anomaly / mill anomaly). Atlantis then runs the integrity calculation per ASME B31G / B31G modified / RSTRENG / API 579 and prioritizes the dig program." },
    { question: "How does dig program prioritization work?", answer: "Every ILI anomaly gets a calculated remaining strength factor (RSF) and remaining life. Atlantis ranks anomalies by RSF, threat type (active corrosion vs stable mill defect), location consequence (HCA / class location), and operator risk tolerance. The output is a prioritized dig list with defensible rationale rather than a spreadsheet of opinions. Most operators report 20–40% reduction in unnecessary digs through better prioritization." },
    { question: "What about above-ground station integrity?", answer: "Compressor stations, pump stations, metering stations, and pig launchers/receivers all flow into the same Atlantis platform with station-specific equipment templates (compressors, pumps, scrubbers, filter separators, line heaters, station piping). The pipeline view and the station view share the asset hierarchy — an integrity engineer reviewing the pipeline can drill into the connected station equipment without switching tools." },
    { question: "PHMSA and integrity management plan integration?", answer: "Atlantis records align to PHMSA IMP (Integrity Management Plan) and IM Rule reporting requirements (49 CFR 192 Subpart O for gas, 49 CFR 195 Subpart H for hazardous liquid). Inspection records, anomaly assessments, and remediation actions structure to the regulatory data model. Annual reporting and audit responses produce from the structured record rather than scrambled together. CSA Z662 alignment for Canadian operators is supported equivalently." },
    { question: "Cathodic protection survey integration?", answer: "CIPS (Close Interval Potential Survey), DCVG (Direct Current Voltage Gradient), ACVG (Alternating Current Voltage Gradient), and rectifier output data import natively. The 3D pipeline overlay shows CP coverage status, coating breakdown indications, and underprotection segments. Structure-to-electrolyte potentials trended over time drive external corrosion threat assessment." },
];

export default function PipelineUseCase() {
    const structuredData = {
        "@context": "https://schema.org",
        "@graph": [
            { "@type": "Article", "headline": "Atlantis Digital Twin for Pipelines: ILI Anomaly Mgmt, B31.4/B31.8, PHMSA IMP [2026]", "datePublished": "2026-05-09", "dateModified": "2026-05-09", "author": { "@type": "Person", "name": "Anoop Rayavarapu" }, "publisher": { "@type": "Organization", "name": "Atlantis NDT" }, "mainEntityOfPage": { "@type": "WebPage", "@id": "https://atlantisndt.com/digital-twins/pipeline" } },
            { "@type": "FAQPage", "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } })) }
        ]
    };
    return (
        <ProductPageLayout
            title="Atlantis Digital Twin for Pipelines: ILI, B31.4/B31.8, PHMSA IMP, CP [2026]"
            description="Pipeline digital twin: ILI anomaly ingest (MFL, UT, EMAT), B31G/RSTRENG integrity calc, dig prioritization, CIPS/DCVG, PHMSA IMP alignment. $1M-$5M/yr ROI."
            canonical="https://atlantisndt.com/digital-twins/pipeline"
            eyebrow="Use Case"
            h1="Atlantis Digital Twin for Pipelines: ILI Anomaly Management to PHMSA Reporting [2026]"
            intro="Pipeline integrity combines ILI run interpretation, B31G / RSTRENG strength calculations, dig program prioritization, CP survey integration, and regulatory reporting. Atlantis Digital Twin manages all of it in one platform — for hundreds to thousands of miles."
            heroGradient="from-yellow-700 to-amber-800"
            competitorLabel="Pipeline Specifics"
            compareRows={compareRows}
            faqs={faqs}
            related={[
                { href: "/digital-twins/storage-tank", title: "Storage Tank", blurb: "Adjacent terminal-side asset class." },
                { href: "/digital-twins/subsea", title: "Subsea Pipeline", blurb: "Subsea / offshore pipeline integrity workflow." },
                { href: "/digital-twins/refinery", title: "Refinery", blurb: "Connected downstream process facility." },
                { href: "/digital-twins", title: "Atlantis Digital Twin", blurb: "Product page — features, pricing, case studies." },
                { href: "/integrations/sap-pm", title: "SAP PM Integration", blurb: "How Atlantis fits with pipeline operator SAP / Oracle landscape." },
                { href: "/contact", title: "Book a Pipeline Demo", blurb: "Bring an ILI report and a CP survey. We&rsquo;ll show your pipeline as a twin in 30 minutes." },
            ]}
            ctaTitle="See Your Pipeline as a Live Integrity Twin"
            ctaSubtitle="Bring one ILI inspection report and one CIPS survey. We&rsquo;ll have it running as an Atlantis twin in a 30-minute demo."
            structuredData={structuredData}
            bodyChildren={
                <>
                    <h2>Pipeline integrity workflow in one platform</h2>
                    <p>Pipeline integrity is unique among integrity workloads because the asset is linear and long, the inspection methods are predominantly inline (ILI tools running through the pipe rather than inspectors walking it), and the regulatory environment is tightly prescribed (PHMSA in the US, CSA in Canada, EU PED in Europe). Atlantis Digital Twin organizes the full pipeline integrity workflow — ILI ingest, integrity calculation, dig prioritization, repair tracking, regulatory reporting — in one platform with a 3D pipeline overlay showing live integrity state.</p>

                    <h2>ILI ingest and integrity calculation</h2>
                    <p>ILI vendor reports from Baker Hughes, ROSEN, NDT Global, T.D. Williamson, Onstream, Pii Pipeline Solutions, and others import natively as structured anomaly data. The data model captures chainage, anomaly type, depth, length, width, axial position, classification, and ILI tool resolution. Atlantis then runs the integrity calculation:</p>
                    <ul>
                        <li><strong>ASME B31G modified / RSTRENG / Effective Area Method</strong> for metal loss anomalies on piping with internal pressure.</li>
                        <li><strong>API 579 Level 1/2/3 FFS</strong> for anomalies that exceed the simpler methods&rsquo; applicability.</li>
                        <li><strong>Dent strain calculation per API 1183</strong> for dent / dent-with-metal-loss anomalies.</li>
                        <li><strong>Crack assessment per API 579 Part 9</strong> for SCC and crack-like indications.</li>
                    </ul>
                    <p>Each anomaly gets a calculated remaining strength factor (RSF), remaining life, and risk band. The 3D pipeline overlay color-codes anomalies by severity so integrity engineers see the risk picture at a glance.</p>

                    <h2>Dig program prioritization</h2>
                    <p>Atlantis ranks anomalies by RSF, active vs stable threat (active corrosion ranks higher than stable mill defects), location consequence (high-consequence area / class location), and operator risk tolerance. The output is a prioritized dig list with defensible rationale — anomaly ID, calculated RSF, remaining life, threat type, location consequence, recommended action, recommended timeframe. Most operators report 20–40% reduction in unnecessary digs through better prioritization, plus 10–20% improvement in repair effectiveness because the remediation action matches the actual threat.</p>

                    <h2>CP and direct assessment integration</h2>
                    <p>Cathodic protection survey data — CIPS, DCVG, ACVG, rectifier output, structure-to-electrolyte potentials — imports natively. The 3D pipeline overlay shows CP coverage status, coating breakdown indications, and underprotection segments. Indications from CP surveys overlay with ILI metal loss findings to identify external corrosion threats early. Direct assessment workflows (DA, ECDA, ICDA, SCCDA per NACE SP standards) flow into the platform with the structured pre-assessment / indirect inspection / direct examination / post-assessment cycle.</p>

                    <h2>Above-ground stations</h2>
                    <p>Compressor stations, pump stations, metering stations, scraper traps, mainline valves all live in the same Atlantis platform with station-specific equipment templates. The pipeline view and the station view share the asset hierarchy — integrity engineer reviewing the pipeline can drill into connected station equipment without switching tools.</p>

                    <h2>Regulatory reporting</h2>
                    <p>PHMSA IMP (Integrity Management Plan) and IM Rule reporting requirements (49 CFR 192 Subpart O for gas, 49 CFR 195 Subpart H for hazardous liquid) align to the Atlantis data model. Annual reporting, anomaly notification, and audit responses produce from the structured record. CSA Z662 alignment for Canadian operators, EU PED for European operators, and operator-specific extensions (Enbridge, Kinder Morgan, Williams, etc.) supported.</p>

                    <h2>ROI for a typical pipeline operator</h2>
                    <ul>
                        <li><strong>Dig program optimization:</strong> 20–40% fewer unnecessary digs at $50K–$300K per dig avoided = $1M–$5M/yr at typical operator scale.</li>
                        <li><strong>Repair effectiveness:</strong> Better-targeted remediation = fewer re-digs.</li>
                        <li><strong>Regulatory and audit efficiency:</strong> Structured record = dramatically faster audit response and lower regulatory risk.</li>
                        <li><strong>ILI re-inspection optimization:</strong> RBI-driven re-inspection intervals can defer some ILI runs (each a major capital item depending on length and tool type).</li>
                    </ul>
                <UsecaseDeepDive slug="pipeline" />
                </>
            }
        />
    );
}
