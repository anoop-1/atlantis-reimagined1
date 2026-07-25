import ProductPageLayout from "@/components/ProductPageLayout";
import UsecaseDeepDive from "@/components/UsecaseDeepDive";

const compareRows = [
    { factor: "Asset count (typical refinery)", atlantis: "1,500–8,000 vessels + piping circuits", competitor: "—" },
    { factor: "Primary failure modes", atlantis: "Sour service corrosion, naphthenic acid corrosion, HTHA, CUI, sulfidation, fatigue", competitor: "—" },
    { factor: "Code references", atlantis: "API 510 (vessels), API 570 (piping), API 571 (damage mechanisms), API 579 FFS, API 580/581 RBI", competitor: "—" },
    { factor: "NDT methods deployed", atlantis: "UT (B/C-scan, PAUT), RT, MT, PT, eddy current on tubes, AUT for sour service", competitor: "—" },
    { factor: "Typical CML count per unit", atlantis: "5,000–25,000 across a process unit", competitor: "—" },
    { factor: "Atlantis ROI typical", atlantis: "$1.8M–$6M/yr in avoided unplanned downtime + 15–25% inspection labor reduction", competitor: "—" },
    { factor: "Implementation per unit", atlantis: "10–14 weeks first unit, 4–6 weeks subsequent", competitor: "—" },
];

const faqs = [
    { question: "Why does a refinery need a digital twin if it already has a process historian and an APM?", answer: "Process historians (PI, Insights Hub) cover the real-time process side. APM platforms (Meridium, GE Vernova APM, IBM Maximo Health) cover the corporate integrity reporting and RBI library. Neither covers the daily inspection capture workflow with the depth needed for refinery integrity — CML thickness grids, weld registers, FFS calculations, and the 3D twin that integrity engineers actually use. Atlantis fills that gap. In coexistence, PI feeds operating severity, APM feeds the corporate library, Atlantis is the daily-work platform." },
    { question: "What about sour service and HTHA-prone units?", answer: "Sour service (H2S-bearing) and HTHA (high-temperature hydrogen attack) units are exactly where digital twin pays off fastest. The damage mechanisms are well-defined per API 571, the RBI scoring is well-codified per API 581, but the inspection data volume and complexity is high — many CMLs, frequent re-inspection, multiple NDT methods. Atlantis ships with API 571 damage mechanism templates pre-loaded for sour service and HTHA, and the RBI engine is calibrated for these mechanisms. We have hydroprocessing unit deployments where Atlantis dropped the inspection cycle time from weeks to days." },
    { question: "How does CUI fit in?", answer: "Corrosion Under Insulation (CUI) is the most insidious refinery integrity threat — invisible until you strip insulation, often discovered too late. Atlantis treats CUI as a first-class workflow: insulation jacket maps, CUI risk scoring per API 583, inspection record templates for stripped vs in-situ inspection, pulsed eddy current and digital RT scan archiving, and the 3D twin overlays CUI risk bands on the asset model so integrity engineers can see CUI exposure at a glance. Refineries running structured CUI programs see 30–50% reductions in CUI-driven leaks within 18 months of program maturity." },
    { question: "What about turnaround planning?", answer: "Turnaround inspection scope is one of the highest-cost decisions in refinery integrity. Atlantis ships with a turnaround scoping module that pulls together every CML overdue, every elevated RBI risk component, every FFS that flagged &lsquo;requires further evaluation,&rsquo; every weld pending re-inspection, and every API 581-driven recommendation. Integrity engineers walk into the turnaround scope meeting with a defensible, prioritized list rather than a spreadsheet of opinions. Most refineries report 15–25% inspection-labor savings on turnaround through better scoping alone." },
    { question: "Integration with refinery DCS/PLC and process historian?", answer: "Atlantis pulls process severity tags from your historian (AVEVA PI, OSIsoft PI, Honeywell Uniformance, etc.) via OPC-UA or REST. Typical mapping is 50–200 corrosion-relevant tags per major asset (skin temperature, fluid composition, operating pressure, dew point, sulfur content) brought into the asset record so RBI scoring and corrosion rate predictions stay in sync with operating severity. No DCS/PLC changes required." },
];

export default function RefineryUseCase() {
    const structuredData = {
        "@context": "https://schema.org",
        "@graph": [
            { "@type": "Article", "headline": "Atlantis Digital Twin for Refineries: API 510/570/579/581 Integrity Workflow [2026]", "datePublished": "2026-05-09", "dateModified": "2026-05-09", "author": { "@type": "Person", "name": "Anoop Rayavarapu" }, "publisher": { "@type": "Organization", "name": "Atlantis NDT" }, "mainEntityOfPage": { "@type": "WebPage", "@id": "https://atlantisndt.com/digital-twins/refinery" } },
            { "@type": "FAQPage", "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } })) }
        ]
    };
    return (
        <ProductPageLayout
            title="Atlantis Digital Twin for Refineries: API 510/570/579/581 Integrity [2026]"
            description="Refinery digital twin: CML thickness tracking, sour service / HTHA damage mechanisms per API 571, FFS per API 579, RBI per API 581, CUI risk overlay, turnaround scoping. ROI $1.8M-$6M/yr."
            canonical="https://atlantisndt.com/digital-twins/refinery"
            eyebrow="Use Case"
            h1="Atlantis Digital Twin for Refineries: Inspection Integrity from CML to Turnaround [2026]"
            intro="A typical refinery has 1,500–8,000 fixed-equipment assets with 5,000–25,000 CMLs per process unit. Atlantis Digital Twin manages the full integrity workflow from inspection capture through API 579 FFS, API 581 RBI, CUI risk overlay, and turnaround scoping — with a 3D twin the integrity team actually uses."
            heroGradient="from-amber-700 to-red-800"
            competitorLabel="Refinery Specifics"
            compareRows={compareRows}
            faqs={faqs}
            related={[
                { href: "/digital-twins/petrochemical-complex", title: "Petrochemical Complex", blurb: "Adjacent use case — similar damage mechanisms with different process severity." },
                { href: "/digital-twins/heat-exchanger", title: "Heat Exchanger", blurb: "Asset-class deep-dive — tube bundle and shell integrity." },
                { href: "/digital-twins/pressure-vessel", title: "Pressure Vessel", blurb: "Asset-class deep-dive — API 510 workflow." },
                { href: "/digital-twins", title: "Atlantis Digital Twin", blurb: "Product page — features, pricing, case studies." },
                { href: "/integrations/sap-pm", title: "SAP PM Integration", blurb: "How Atlantis fits with your refinery SAP landscape." },
                { href: "/contact", title: "Book a Refinery Demo", blurb: "Bring an asset list and a sample CML report. We&rsquo;ll show your refinery in 30 minutes." },
            ]}
            ctaTitle="See Your Refinery as a Live Integrity Twin"
            ctaSubtitle="Bring one process unit&rsquo;s asset list and CML data. We&rsquo;ll have it running as an Atlantis twin in a 30-minute demo."
            structuredData={structuredData}
            bodyChildren={
                <>
                    <h2>Why refineries are the canonical digital twin use case</h2>
                    <p>Refineries combine every reason a digital twin pays off: high asset count, high consequence-of-failure, complex multi-mechanism damage, code-driven inspection requirements, and large recurring inspection labor cost. A typical refinery has 1,500–8,000 fixed-equipment assets across multiple process units (atmospheric distillation, vacuum, hydroprocessing, FCC, hydrogen plant, sulfur recovery, alkylation), with 5,000–25,000 CMLs per process unit. Inspection labor is millions of dollars per year. Unplanned downtime from a vessel or piping failure costs $50,000–$500,000 per day. The math for digital twin investment is straightforward at refinery scale.</p>

                    <h2>The damage mechanisms Atlantis is built for</h2>
                    <p>Atlantis ships with API 571 damage mechanism templates pre-loaded for the refinery-relevant mechanisms — and the RBI engine is calibrated for them:</p>
                    <ul>
                        <li><strong>Sour service corrosion (H2S, wet H2S, HIC, SOHIC, SSC).</strong> Templates for sour water systems, hydroprocessing, sulfur recovery.</li>
                        <li><strong>Naphthenic acid corrosion.</strong> Templates for crude / vacuum units operating at TAN-elevated feed.</li>
                        <li><strong>HTHA (high-temperature hydrogen attack).</strong> Templates per API RP 941 with operating-condition Nelson curve overlay.</li>
                        <li><strong>Sulfidation (Couper-Gorman).</strong> Templates per API 939-C with chromium/molybdenum content tracking.</li>
                        <li><strong>CUI (Corrosion Under Insulation).</strong> Templates per API 583 with insulation jacket maps and pulsed eddy current scan archiving.</li>
                        <li><strong>Fatigue and thermal fatigue.</strong> Templates for cyclic-service equipment (coker drums, FCC reactors, columns with thermal cycling).</li>
                        <li><strong>Caustic embrittlement, ammonia SCC, chloride SCC.</strong> Templates for the relevant service environments.</li>
                    </ul>

                    <h2>Workflow walkthrough — from inspection to turnaround scope</h2>
                    <h3>Daily inspection capture</h3>
                    <p>Inspector arrives at the asset with an iPad. Atlantis app loads the asset record offline (works in plant areas with no connectivity). CML grid shows current thickness, corrosion rate, t-min, and any flags from the last inspection. Inspector takes new readings, logs observations, captures photos. Sync uploads when back in coverage. The whole capture cycle is faster than the spreadsheet workflow it replaces and produces structured data instead of free-text notes.</p>

                    <h3>Engineering review</h3>
                    <p>Integrity engineer reviews the day&rsquo;s captures in the office. Anything below t-min or with accelerated corrosion rate flags for FFS. The integrated API 579 FFS engine runs Level 1 / Level 2 / Level 3 calculations natively. Results — acceptable, not acceptable, requires further evaluation — flow into the asset record and into the RBI engine for risk-band reassessment. Anything moving to elevated risk auto-creates a Service Request / Notification in the connected EAM (Maximo, SAP PM, Oracle, etc.) per the integration page.</p>

                    <h3>RBI scoring and inspection planning</h3>
                    <p>API 581 RBI runs continuously as new inspection data arrives and as operating severity changes (pulled from the process historian). Risk band changes update the next-inspection date. Inspection plans for the upcoming 12 months are visible to the integrity team and the maintenance planner.</p>

                    <h3>Turnaround scoping</h3>
                    <p>The turnaround scoping module pulls together every CML overdue, every elevated RBI risk component, every FFS result that flagged &lsquo;requires further evaluation,&rsquo; every weld pending re-inspection, and every API 581-driven recommendation. The integrity team walks into the turnaround scope meeting with a defensible, prioritized list rather than a spreadsheet of opinions. Most refineries report 15–25% inspection-labor savings on turnaround through better scoping alone, plus avoided rework when a turnaround discovers a problem that should have been on the original scope.</p>

                    <h2>ROI in real numbers</h2>
                    <p>For a single-site refinery with 25,000 CMLs across 3 process units, typical Atlantis Digital Twin enterprise deployment (affordable, accessible, fully customizable SaaS &mdash; quote on request) pays back through:</p>
                    <ul>
                        <li><strong>Avoided unplanned downtime:</strong> 1–3 events/year averted at enterprise tier–$2M each = $1M–$3M/yr value.</li>
                        <li><strong>Inspection labor reduction:</strong> 15–25% of $2M–$5M/yr inspection cost = $300K–$1.25M/yr.</li>
                        <li><strong>Turnaround scope optimization:</strong> 5–15% turnaround cost reduction × $20M–$80M turnaround = $1M–$12M every 4–5 years.</li>
                        <li><strong>Insurance &amp; regulatory:</strong> Defensible integrity program cuts insurance premiums and regulatory friction (PHMSA, EPA, OSHA PSM compliance).</li>
                    </ul>
                    <p>Net: $1.8M&ndash;$6M/yr in measurable value on an affordable, accessible, fully customizable Atlantis SaaS platform &mdash; quote on request. Even discounted heavily for ramp-up and adoption realities, the payback is well inside 12 months.</p>

                    <h2>Implementation path for a refinery deployment</h2>
                    <p>First process unit live in 10–14 weeks. Subsequent units typically 4–6 weeks each given the templates, integrations, and team familiarity built in the first deployment. Most refineries deploy unit-by-unit over 6–12 months rather than big-bang — this preserves integrity team capacity and lets the platform earn trust before it&rsquo;s the only system of record. Coexistence with existing PI / APM / EAM is the rule, not the exception.</p>
                <UsecaseDeepDive slug="refinery" />
                </>
            }
        />
    );
}
