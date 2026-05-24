import ProductPageLayout from "@/components/ProductPageLayout";

const compareRows = [
    { factor: "Asset count (typical LNG terminal)", atlantis: "1–8 LNG storage tanks + 2–6 liquefaction or regasification trains + jetty + 200–600 cryogenic piping circuits", competitor: "—" },
    { factor: "Primary failure modes", atlantis: "Brittle fracture at cryogenic temperature, 9% Ni weld defects, thermal fatigue from cooldown cycles, perlite settlement in tank annular space, BOG-line CUI, jetty corrosion", competitor: "—" },
    { factor: "Code references", atlantis: "API 625 (LNG storage), API 620 Appendix Q (cryogenic), EN 14620, NFPA 59A, ASME B31.3 process piping, ASME Section VIII Div. 1/2, BS 7777", competitor: "—" },
    { factor: "NDT methods deployed", atlantis: "PAUT on 9% Ni welds, RT on butt welds, AET acoustic emission on tank shells, PEC on jetty piping under coatings, UT thickness on cryogenic piping, helium leak testing", competitor: "—" },
    { factor: "Typical CML & weld count per terminal", atlantis: "4,000–18,000 CMLs and 30,000–90,000 weld map entries across cryogenic piping and tank welds", competitor: "—" },
    { factor: "Atlantis ROI typical", atlantis: "$2.5M–$8M/yr from avoided BOG flaring, deferred tank out-of-service inspections (8–10 year cycle), and turnaround scope optimisation", competitor: "—" },
    { factor: "Implementation per terminal", atlantis: "12–18 weeks first train + first tank; 4–6 weeks for additional trains", competitor: "—" },
];

const faqs = [
    { question: "Why is a digital twin specifically important for LNG terminals vs other downstream assets?", answer: "Three reasons. First, the consequence-of-failure on LNG cryogenic equipment is severe — a tank shell crack, jetty-loading arm rupture, or 9% Ni weld defect at -162°C can produce a BLEVE or a flash fire. Regulators (PHMSA Part 193, EMA Singapore, OGAW Qatar) accept fitness-for-service evidence in lieu of tear-down only when the integrity record is defensible. Second, BOG (boil-off gas) recovery economics push operators to maximise loaded inventory time between tank out-of-service inspections, which traditionally run on 8–10 year cycles per API 653/API 625. A defensible digital twin with continuous CML thickness, AET acoustic emission, and PEC under-insulation evidence extends those intervals safely. Third, LNG terminal jetties operate in marine splash zones with severe external corrosion that needs systematic colour-coded tracking — exactly what a 3D twin overlays naturally." },
    { question: "What about the 9% Ni weld inspection workflow?", answer: "9% Ni steel (ASTM A553 Type I) is the workhorse material for LNG inner tanks and cryogenic piping, and its weld inspection is a specialty. Atlantis ships with API 625 / ASME Section VIII Div. 2 PAUT acceptance criteria pre-loaded for 9% Ni butt welds, including the more stringent flaw-sizing limits for brittle-fracture-prone service. Every weld in the cryogenic system is registered with its NDE record (PAUT scan, RT film if applicable, MT/PT report), heat number, welder ID, and qualification record. Re-inspection during turnaround is scoped from the digital twin directly — operators routinely cut weld re-inspection scope by 30–50% versus the spreadsheet workflow it replaces, with full ABS/DNV/Lloyd's audit traceability." },
    { question: "How does Atlantis handle the LNG tank out-of-service inspection?", answer: "API 653 / API 625 mandate periodic full out-of-service tank inspection — typically every 8–10 years, with each inspection running $3M–$8M plus production loss. Atlantis Digital Twin builds the evidence stack that lets operators apply for inspection-interval extensions under API 653 Section 6.4.2.2. The twin holds the original construction radiographs, every annular plate UT scan, every shell-corrosion-rate trend, the perlite settlement measurement record, every AET acoustic emission survey, and the FFS results that prove fitness-for-service. Cheniere Sabine Pass, Sempra Cameron LNG, and similar operators have used digital-twin-backed FFS evidence to defer tank out-of-service work, saving tens of millions per terminal cycle." },
    { question: "Which LNG operators run digital twin programmes today?", answer: "The largest US LNG export terminals — Cheniere's Sabine Pass and Corpus Christi, Sempra's Cameron LNG and ECA, Venture Global's Calcasieu Pass and Plaquemines, Freeport LNG, Cove Point — all run some form of asset-integrity digital twin programme, typically a mix of CAD-based 3D models, IDMS (Antea, Meridium, GE APM), and operator-built BI dashboards. QatarEnergy at Ras Laffan runs the world's largest LNG digital integrity programme as part of the North Field expansion. Shell Prelude FLNG, Inpex Ichthys, and the Woodside Pluto/Scarborough complex all run cryogenic digital twins. Atlantis fits as the inspection-data-native layer that consolidates the workflow." },
    { question: "Integration with the LNG control system (DCS) and BOG management?", answer: "Atlantis pulls process severity tags from your DCS/historian (Honeywell Experion, Emerson DeltaV, ABB 800xA, AVEVA PI) via OPC-UA or REST. Typical mapping is 80–250 cryogenic-integrity-relevant tags per train (inner tank temperature, shell skin temperature, BOG composition, jetty arm position, ambient temperature for thermal-fatigue cycling). These feed into the API 579 FFS engine and the brittle-fracture screening per ASME Section VIII Div. 2 Part 3. No DCS-side changes required beyond a read-only service account." },
];

export default function LngTerminalUseCase() {
    const structuredData = {
        "@context": "https://schema.org",
        "@graph": [
            { "@type": "Article", "headline": "Atlantis Digital Twin for LNG Terminals: API 625/620 Cryogenic Integrity [2026]", "datePublished": "2026-05-24", "dateModified": "2026-05-24", "author": { "@type": "Person", "name": "Anoop Rayavarapu" }, "publisher": { "@type": "Organization", "name": "Atlantis NDT" }, "mainEntityOfPage": { "@type": "WebPage", "@id": "https://atlantisndt.com/digital-twins/lng-terminal" } },
            { "@type": "FAQPage", "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } })) }
        ]
    };
    return (
        <ProductPageLayout
            title="Atlantis Digital Twin for LNG Terminals: API 625/620 Cryogenic Integrity [2026]"
            description="LNG terminal digital twin: 9% Ni weld inspection, API 625 storage-tank integrity, API 620 Appendix Q cryogenic, NFPA 59A compliance, BOG management. ROI $2.5M-$8M/yr."
            canonical="https://atlantisndt.com/digital-twins/lng-terminal"
            eyebrow="Use Case"
            h1="Atlantis Digital Twin for LNG Terminals: From 9% Ni Weld Maps to Out-of-Service Inspection Deferral [2026]"
            intro="A typical LNG terminal has 1–8 cryogenic storage tanks, 2–6 liquefaction or regasification trains, and 30,000–90,000 weld map entries on 9% Ni and stainless steels operating at -162°C. Atlantis Digital Twin manages cryogenic integrity from PAUT weld inspection through API 625 tank fitness-for-service, BOG line CUI tracking, and out-of-service inspection-interval extension."
            heroGradient="from-cyan-700 to-blue-800"
            competitorLabel="LNG Specifics"
            compareRows={compareRows}
            faqs={faqs}
            related={[
                { href: "/digital-twins/storage-tank", title: "Storage Tank", blurb: "Asset-class deep-dive — API 653 and API 625 workflows." },
                { href: "/digital-twins/pipeline", title: "Pipeline", blurb: "Adjacent use case — cryogenic pipeline integrity." },
                { href: "/digital-twin-doha", title: "Doha (Qatar)", blurb: "Location coverage — QatarEnergy Ras Laffan LNG." },
                { href: "/digital-twin-corpus-christi", title: "Corpus Christi", blurb: "Location coverage — Cheniere LNG export." },
                { href: "/digital-twins", title: "Atlantis Digital Twin", blurb: "Product page — features, pricing, case studies." },
                { href: "/contact", title: "Book an LNG Demo", blurb: "Bring a weld map and a tank shell UT history. We&rsquo;ll show your terminal in 30 minutes." },
            ]}
            ctaTitle="See Your LNG Terminal as a Live Cryogenic Twin"
            ctaSubtitle="Bring one train&rsquo;s weld map and one tank&rsquo;s out-of-service inspection record. We&rsquo;ll have it running as an Atlantis twin in a 30-minute demo."
            structuredData={structuredData}
            bodyChildren={
                <>
                    <h2>Why LNG terminals are a high-leverage digital twin use case</h2>
                    <p>An LNG export or regas terminal is a small number of very expensive, very high-consequence assets. A single 180,000 m³ full-containment storage tank is a $300M+ capital asset with a 60-year design life; a single liquefaction train (e.g. an APCI C3MR train) is $1.5B–$3B. Out-of-service inspection on a major LNG storage tank costs $3M–$8M and removes a tank from service for 6–12 weeks — every operator looks for defensible evidence to extend the inspection interval safely. The major US export terminals (Cheniere Sabine Pass, Cheniere Corpus Christi, Sempra Cameron LNG, Venture Global Calcasieu Pass, Venture Global Plaquemines, Freeport LNG, Cove Point), the QatarEnergy Ras Laffan complex (the world&rsquo;s largest), and the Asia-Pacific FLNG fleet (Shell Prelude, Petronas FLNG2, Eni Coral Sul) all run some form of integrity twin.</p>

                    <h2>The damage mechanisms Atlantis is built for in cryogenic service</h2>
                    <p>LNG service damage mechanisms are different from the refinery toolkit. Atlantis ships templates for the relevant ones:</p>
                    <ul>
                        <li><strong>Brittle fracture risk at cryogenic temperature.</strong> 9% Ni inner tank shells and stainless steel piping are inspected with PAUT and screened per ASME Section VIII Div. 2 Part 3 brittle-fracture rules. Flaw acceptance criteria are tighter than ambient-service equivalents.</li>
                        <li><strong>9% Ni weld defects.</strong> ASTM A553 Type I welds are inspected per API 625 / EN 14620 / BS 7777 with PAUT, RT, and MT/PT. Heat-number traceability and welder qualification records are first-class objects in the twin.</li>
                        <li><strong>Thermal fatigue from cooldown / warm-up cycles.</strong> Each load/unload cycle, each start-stop event, and each emergency depressurisation event adds fatigue damage. The twin tracks cycle counts and projects remaining fatigue life per API 579 Part 14.</li>
                        <li><strong>Perlite settlement in tank annular space.</strong> Tracked via NDE surveys and aerial photogrammetry; the twin overlays settlement zones on the 3D model.</li>
                        <li><strong>BOG line CUI (Corrosion Under Insulation).</strong> BOG (boil-off gas) handling piping runs near-ambient externally but is heavily insulated for thermal protection. Pulsed eddy current and digital RT scan archiving feed the CUI risk overlay per API 583.</li>
                        <li><strong>Jetty and loading arm corrosion.</strong> Marine splash zone external corrosion on jetty piles, loading arms, and quick-connect/disconnect couplings is tracked via UT thickness grids and external visual surveys.</li>
                    </ul>

                    <h2>Workflow walkthrough — from weld inspection to out-of-service deferral</h2>
                    <h3>Weld inspection capture during construction and after major repair</h3>
                    <p>During construction (or post-major-repair re-qualification), every 9% Ni butt weld is captured as a discrete object in the digital twin: weld number, joint type, heat numbers of both base metals, welder ID, welding procedure specification (WPS) reference, PAUT scan file, RT film if applicable, and the code acceptance status. The weld map is geo-referenced on the 3D tank shell or piping run so engineers can click any weld and immediately see its NDE history. Major operators with construction-vintage records going back to the 1990s have used Atlantis to consolidate scattered paper records into a defensible digital twin.</p>

                    <h3>In-service CML and AET monitoring</h3>
                    <p>Once in operation, cryogenic piping CMLs are inspected per the operator&rsquo;s API 570 + API 625 inspection plan, typically every 5–10 years for low-corrosion-rate cryogenic service. AET (Acoustic Emission Testing) campaigns on the tank shell occur on the same cadence, with each AET event registered in the twin and flagged events linked to PAUT or UT follow-up at the indicated location. Jetty splash-zone UT thickness grids are inspected annually because of the more aggressive external corrosion environment, and the twin overlays remaining-life trend zones on the 3D model.</p>

                    <h3>Engineering review and out-of-service inspection-interval extension</h3>
                    <p>The integrity engineer reviews the consolidated record before submitting an inspection-interval extension request under API 653 Section 6.4.2.2 or the equivalent in the operator&rsquo;s jurisdiction (PHMSA Part 193 in the USA, EMA in Singapore, OGAW in Qatar). The twin assembles every CML reading, every AET event, every FFS calculation, every visual survey, and the operating-severity tags from the DCS into a single PDF-ready evidence pack. Regulators have approved 2–4 year extensions on a typical 10-year cycle for operators with mature digital-twin-backed integrity programmes — savings of $1M–$3M per deferred inspection plus avoided production loss.</p>

                    <h3>Turnaround scoping for the liquefaction or regasification train</h3>
                    <p>For the train side (compressors, MCHEs, MR drum, propane chillers, etc.), the turnaround scoping module pulls together every CML overdue, every elevated RBI risk component, every FFS that flagged &lsquo;requires further evaluation,&rsquo; and every weld pending re-inspection. Major operators report 15–25% inspection-labor savings on LNG turnaround through better scoping alone.</p>

                    <h2>ROI in real numbers for an LNG terminal</h2>
                    <p>For a typical 2-train, 4-tank LNG export terminal (e.g. Cameron LNG Phase 1, Sabine Pass Trains 1-2), Atlantis Digital Twin enterprise deployment ($200K/yr) pays back through:</p>
                    <ul>
                        <li><strong>Deferred tank out-of-service inspection:</strong> 2–4 year deferral on a 10-year cycle × $3M–$8M per inspection = $0.6M–$3.2M/yr value, averaged.</li>
                        <li><strong>Avoided BOG flaring during cooldown:</strong> Improved cooldown-cycle planning from twin-backed thermal-fatigue tracking = $0.5M–$1.5M/yr saved BOG.</li>
                        <li><strong>Turnaround scope optimization:</strong> 15–25% turnaround inspection cost reduction × $8M–$25M turnaround = $1.2M–$6M every 4–6 years.</li>
                        <li><strong>Insurance &amp; regulatory:</strong> Defensible integrity program reduces NFPA 59A and PHMSA Part 193 friction; major insurers reward digital-twin-backed integrity programmes with measurable premium reductions.</li>
                    </ul>
                    <p>Net: $2.5M–$8M/yr in measurable value at a $200K/yr platform cost. Payback well inside 12 months for a typical mid-sized terminal.</p>

                    <h2>Real LNG operators where this fits</h2>
                    <p>Cheniere Energy (Sabine Pass, Corpus Christi), Sempra Infrastructure (Cameron LNG, ECA LNG), Venture Global (Calcasieu Pass, Plaquemines, CP2), Freeport LNG, Dominion Cove Point, Tellurian Driftwood, NextDecade Rio Grande LNG, ConocoPhillips Darwin LNG, Inpex Ichthys LNG, Woodside Pluto and Scarborough, QatarEnergy Ras Laffan (NFE/NFS expansion), Shell Prelude FLNG, Petronas FLNG2 / Bintulu MLNG, Equinor Hammerfest LNG (Snøhvit), Yamal LNG, Egypt Idku/Damietta, Angola LNG Soyo, Trinidad Atlantic LNG, Peru LNG Pisco, and the regas import terminals (Cove Point, Everett, Elba Island, Cameron, Quintero Chile, Dragon LNG UK, South Hook UK). All run cryogenic integrity programmes where Atlantis fits as the inspection-data-native layer.</p>

                    <h2>Implementation path for an LNG terminal deployment</h2>
                    <p>First train and first tank live in 12–18 weeks. Subsequent trains and tanks typically 4–6 weeks each given the templates, integrations, and team familiarity built in the first deployment. Most operators deploy train-by-train, tank-by-tank rather than big-bang — this preserves integrity team capacity and lets the platform earn trust before it&rsquo;s the only system of record. Coexistence with existing IDMS (Antea, Meridium, GE APM), construction-vintage paper records, and operating-side DCS/PI is the rule, not the exception.</p>
                </>
            }
        />
    );
}
