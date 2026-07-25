import ProductPageLayout from "@/components/ProductPageLayout";
import UsecaseDeepDive from "@/components/UsecaseDeepDive";

const compareRows = [
    { factor: "Asset count (typical complex)", atlantis: "3,000–15,000 fixed-equipment items across multiple process units", competitor: "—" },
    { factor: "Primary failure modes", atlantis: "Polymer service erosion, catalyst-driven corrosion, ammonia SCC, caustic embrittlement, chloride SCC, fatigue from cyclic service", competitor: "—" },
    { factor: "Code references", atlantis: "API 510 / 570 / 579 / 581, API 571 (damage mechanisms), country-specific codes (PED for Europe, IBR for India)", competitor: "—" },
    { factor: "Process units typical", atlantis: "Steam crackers, polymer trains, ammonia / urea, methanol, MEG, BTX, chlor-alkali, specialty chemicals", competitor: "—" },
    { factor: "Atlantis ROI typical", atlantis: "$2M–$8M/yr — turnaround optimization + avoided unplanned shutdown + integrity defensibility", competitor: "—" },
    { factor: "Implementation", atlantis: "10–14 weeks for first process unit live", competitor: "—" },
    { factor: "Cyclic service considerations", atlantis: "Coker drums, chemical reactors, pressure-swing-adsorption beds — fatigue-driven workflow", competitor: "—" },
];

const faqs = [
    { question: "How is petrochemical integrity different from refinery integrity?", answer: "Substantial overlap — both are hydrocarbon-process plants with API 510 / 570 / 579 / 581 as the integrity backbone. The main differences are damage mechanism mix and cyclic service. Petrochem has more polymer-service erosion (slurry, catalyst contact), more specialty service environments (ammonia SCC, caustic embrittlement, chloride SCC, HF service in alkylation), and more cyclic service equipment (chemical reactors, swing beds, batch operations). Atlantis ships API 571 templates for the petrochem-specific mechanisms in addition to the refinery set." },
    { question: "What about ammonia / urea / fertilizer plants?", answer: "Ammonia plants have unique integrity considerations — ammonia stress corrosion cracking on carbon steel, hydrogen attack in synthesis loops (high-pressure / high-temperature H2-N2 mix), urea reactor integrity (carbamate corrosion), and the specific damage mechanisms of HP boiler feedwater systems. Atlantis ships templates for these workflows. We have customers running this for ammonia / urea complexes with deployment patterns specific to fertilizer-industry maintenance cycles (long catalyst runs interspersed with short turnarounds)." },
    { question: "Polymer plants — HDPE / LDPE / PP integrity?", answer: "Polymer plants have erosion-corrosion as a dominant damage mechanism in slurry-service piping and reactors. Catalyst-bearing streams, polymer-bearing streams, and the recycle systems all see accelerated wear. Atlantis ships templates for polymer-service erosion patterns and supports the catalyst-bed inspection workflow for fluid-bed and slurry-bed reactors. PSA bed inspection (pressure-swing adsorption) for hydrogen recovery / nitrogen generation also supported." },
    { question: "How does specialty chemicals service work?", answer: "Specialty chemicals service — chlorine, hydrogen fluoride, sulfuric acid, caustic, anhydrous ammonia — drives unique materials selection and integrity workflows. Atlantis supports service-specific damage mechanism templates and the materials-of-construction-aware RBI scoring needed for these services. Compliance with operator-specific or regulator-specific integrity programs (e.g. Chlorine Institute pamphlets, Sulfuric Acid Industry guidelines) is supported through configurable inspection plan templates." },
    { question: "Country-specific code support?", answer: "European PED (Pressure Equipment Directive) compliance, Indian IBR (Indian Boiler Regulations) compliance, and major operator-specific integrity standards are supported through configurable inspection regimes alongside the API code defaults. Atlantis is API-native but extends to other regulatory regimes through configuration rather than code change." },
];

export default function PetrochemicalComplexUseCase() {
    const structuredData = {
        "@context": "https://schema.org",
        "@graph": [
            { "@type": "Article", "headline": "Atlantis Digital Twin for Petrochemical Complexes [2026]", "datePublished": "2026-05-09", "dateModified": "2026-05-09", "author": { "@type": "Person", "name": "Anoop Rayavarapu" }, "publisher": { "@type": "Organization", "name": "Atlantis NDT" }, "mainEntityOfPage": { "@type": "WebPage", "@id": "https://atlantisndt.com/digital-twins/petrochemical-complex" } },
            { "@type": "FAQPage", "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } })) }
        ]
    };
    return (
        <ProductPageLayout
            title="Atlantis Digital Twin for Petrochemical Complexes: Steam Crackers to Polymer Trains [2026]"
            description="Petrochemical digital twin: steam crackers, polymer trains, ammonia/urea, methanol, BTX, chlor-alkali. API 571 damage mechanisms, FFS, RBI, cyclic service. $2M-$8M/yr ROI."
            canonical="https://atlantisndt.com/digital-twins/petrochemical-complex"
            eyebrow="Use Case"
            h1="Atlantis Digital Twin for Petrochemical Complexes: From Steam Crackers to Polymer Trains [2026]"
            intro="Petrochemical complexes combine refinery-style integrity workload with specialty service damage mechanisms (ammonia SCC, polymer erosion, HF service, caustic embrittlement). Atlantis Digital Twin manages the full integrity workflow across steam crackers, polymer trains, ammonia/urea, methanol, and specialty units."
            heroGradient="from-fuchsia-700 to-rose-800"
            competitorLabel="Petrochemical Specifics"
            compareRows={compareRows}
            faqs={faqs}
            related={[
                { href: "/digital-twins/refinery", title: "Refinery", blurb: "Adjacent workflow — significant overlap with petrochem topsides." },
                { href: "/digital-twins/heat-exchanger", title: "Heat Exchanger", blurb: "Asset-class deep-dive — critical for cracker and reformer integrity." },
                { href: "/digital-twins/pressure-vessel", title: "Pressure Vessel", blurb: "Asset-class deep-dive — reactors, columns, drums." },
                { href: "/digital-twins", title: "Atlantis Digital Twin", blurb: "Product page — features, pricing, case studies." },
                { href: "/integrations/sap-pm", title: "SAP PM Integration", blurb: "How Atlantis fits with petrochem SAP / Maximo landscape." },
                { href: "/contact", title: "Book a Petrochem Demo", blurb: "Bring an asset list from one process train. We&rsquo;ll show your unit as a twin in 30 minutes." },
            ]}
            ctaTitle="See Your Petrochem Complex as a Live Integrity Twin"
            ctaSubtitle="Bring one process train&rsquo;s asset list and CML data. We&rsquo;ll have it running as an Atlantis twin in a 30-minute demo."
            structuredData={structuredData}
            bodyChildren={
                <>
                    <h2>Petrochemical integrity = refinery integrity + specialty mechanisms + cyclic service</h2>
                    <p>Petrochemical complexes share the integrity DNA of refineries — API 510 vessels, API 570 piping, API 571 damage mechanisms, API 579 FFS, API 581 RBI — but layer on specialty service environments and cyclic service that change the integrity workload. A typical world-scale petrochemical complex has 3,000–15,000 fixed-equipment items across multiple process units (steam cracker, polymer train, aromatic recovery, BTX extraction, ammonia / urea, methanol, MEG, chlor-alkali, specialty chemistries). The integrity team has to cover all of it with consistent quality and defensibility.</p>

                    <h2>Petrochem-specific damage mechanisms Atlantis handles</h2>
                    <ul>
                        <li><strong>Polymer-service erosion-corrosion.</strong> Slurry-bearing and catalyst-bearing streams in HDPE / LDPE / PP plants. Atlantis ships erosion-corrosion templates with flow-rate and particle-loading sensitivity.</li>
                        <li><strong>Ammonia stress corrosion cracking.</strong> Carbon steel in anhydrous ammonia service. Templates per API 571 and Chlorine Institute / Ammonia Safety guidance.</li>
                        <li><strong>Caustic embrittlement and caustic SCC.</strong> Caustic-bearing streams, sodium hydroxide service equipment. Templates with concentration / temperature severity.</li>
                        <li><strong>Chloride SCC on austenitic stainless.</strong> Cooling water / process water environments where chloride concentration matters. Templates with material-grade-aware susceptibility scoring.</li>
                        <li><strong>HF service damage.</strong> Alkylation units running HF chemistry — specific damage mechanism templates per API 751 / API RP 750.</li>
                        <li><strong>High-temperature hydrogen attack (HTHA) and hydrogen damage.</strong> Synthesis loops, hydroprocessing, ammonia plants. API RP 941 Nelson curve overlay with operating condition tracking.</li>
                        <li><strong>Sulfidation in steam crackers.</strong> Cracker furnaces and downstream piping per API 939-C with chromium / molybdenum content tracking.</li>
                        <li><strong>Carbamate corrosion in urea reactors.</strong> Specific to urea production. Templates with synthesis-loop-aware severity.</li>
                        <li><strong>Cyclic / thermal fatigue.</strong> Coker drums, swing beds, batch reactors — fatigue-driven inspection planning.</li>
                    </ul>

                    <h2>Cyclic service workflow</h2>
                    <p>Petrochemical complexes have more cyclic service equipment than refineries — coker drums, swing beds, batch reactors, regenerator vessels with frequent regeneration cycles. Atlantis tracks fatigue accumulation per equipment item with cycle-counting from operating data (where available) and conservative cycle estimates from operating procedures (where automated cycle counting isn&rsquo;t available). FFS Level 3 fatigue calculations per API 579 Part 14 supported for high-cycle service.</p>

                    <h2>Steam cracker furnace integrity</h2>
                    <p>Steam cracker radiant coils have unique integrity workload — coke deposition causes thermal gradient and tube metal temperature elevation, driving sulfidation, carburization, and creep. Atlantis tracks coil tube records (TMT trending, decoke cycle history, residual life calculation) and the broader cracker furnace integrity (convection section piping, transfer line exchangers, quench zone). Coil retubing decisions become defensible from the trended record rather than gut-feel from veteran inspectors.</p>

                    <h2>Polymer train workflow</h2>
                    <p>Polymer plants have specific workflows for catalyst-bed inspection (fluid-bed and slurry-bed reactors), polymer-service piping (erosion-corrosion as the dominant mechanism), and recycle systems (where catalyst-laden streams accelerate wear). PSA (pressure-swing adsorption) beds for hydrogen recovery / nitrogen generation tracked separately with cyclic-service fatigue workflow.</p>

                    <h2>ROI for petrochem complex deployment</h2>
                    <p>Similar magnitude to refinery &mdash; $2M&ndash;$8M/yr for a single-site petrochem complex through avoided unplanned shutdown ($1M&ndash;$4M/yr expected value), inspection labor reduction (15&ndash;25% of $2M&ndash;$5M/yr inspection cost = $300K&ndash;$1.25M/yr), and turnaround scope optimization (5&ndash;15% of $20M&ndash;$80M turnaround = $1M&ndash;$12M every 4&ndash;5 years). Net payback inside 12 months on an affordable, accessible, fully customizable Atlantis SaaS platform &mdash; quote on request.</p>
                <UsecaseDeepDive slug="petrochemical-complex" />
                </>
            }
        />
    );
}
