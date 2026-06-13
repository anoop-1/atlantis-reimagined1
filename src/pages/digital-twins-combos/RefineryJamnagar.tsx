import ProductPageLayout from "@/components/ProductPageLayout";

const compareRows = [
    { factor: "Asset profile", atlantis: "Reliance Jamnagar — the world&rsquo;s largest single-location refinery complex at ~1.36 million bpd (DTA + SEZ combined), plus the adjacent Nayara Energy Vadinar at ~400,000 bpd", competitor: "—" },
    { factor: "Process complexity", atlantis: "Deep-conversion: FCC, hydrocracker, coker, RDS/VRDS, alkylation, paraxylene/PX, propylene, polypropylene, lube base oil, petcoke. Among the highest Nelson Complexity Indices in the world.", competitor: "—" },
    { factor: "Damage mechanism stack", atlantis: "Sour service (high-sulfur Middle-East crudes), naphthenic acid corrosion, HTHA on hydroprocessing, MEROX corrosion, coker drum fatigue, Gulf of Kutch CUI from monsoon humidity", competitor: "—" },
    { factor: "Code basis", atlantis: "API 510, 570, 653, 579, 581 mirrored in Reliance internal standards + PNGRB (Petroleum and Natural Gas Regulatory Board) requirements + OISD-129/130 inspection codes", competitor: "—" },
    { factor: "Inspection scale (Jamnagar SEZ + DTA)", atlantis: "60,000&ndash;180,000 CMLs site-wide; one of the largest fixed-equipment integrity programs in the world", competitor: "—" },
    { factor: "ROI typical", atlantis: "$8M&ndash;$25M/yr at full-site scale &mdash; driven by turnaround scope optimisation, FFS-backed life extension, and integrated CUI program", competitor: "—" },
];

const faqs = [
    { question: "What makes Jamnagar uniquely well-suited to a digital twin programme?", answer: "Three factors. First, scale &mdash; Reliance Jamnagar is the world&rsquo;s largest single-location refinery complex (~1.36 million bpd across the DTA and SEZ refineries combined), which means inspection labour cost, turnaround scope decisions, and unplanned downtime risk all multiply against numbers that make even single-digit-percent improvements very large. Second, complexity &mdash; the Jamnagar Nelson Complexity Index is among the highest in the world, with deep-conversion hydroprocessing, coking, FCC, paraxylene, polypropylene, and lube base oil integrated into one site. The damage mechanism stack is correspondingly broad. Third, integrated culture &mdash; Reliance runs one of the most mature in-house integrity engineering teams in global refining, with an Operating Management System (OMS) that demands defensible, auditable inspection evidence at every level. Atlantis Digital Twin is built for exactly this profile." },
    { question: "Which Jamnagar units would be the highest-leverage starting point?", answer: "Two candidate units stand out. The hydroprocessing complex (RDS / VRDS / DHDT) is HTHA-prone, sour-service, and high-pressure &mdash; the canonical Atlantis sweet spot, with API 941 Nelson Curve screening, API 571 damage-mechanism templates, and the FFS/RBI engine all directly applicable. The coker complex (delayed cokers feeding petcoke production) is fatigue-driven with shell cracking, drum bulging, and quench-cycle thermal fatigue that maps cleanly to API 579 Part 14 fatigue assessment. Either makes a strong first-unit-live target. Reliance typically deploys integrity tooling unit-by-unit rather than big-bang, which fits the Atlantis implementation cadence (10&ndash;14 weeks first unit, 4&ndash;6 weeks subsequent)." },
    { question: "How does Atlantis fit with Reliance&rsquo;s existing in-house tools?", answer: "Reliance runs a deeply customised mix of SAP PM, AVEVA PI, in-house RBI tooling, and Bentley AssetWise components. Atlantis is built to coexist with this stack: SAP PM integration via standard BAPIs, AVEVA PI via OPC-UA or PI Web API, AssetWise via REST. The Atlantis advantage is not replacement; it is the daily inspector and integrity-engineer workflow that the corporate stack does not deliver natively. CML capture, weld map maintenance, FFS calculations, 3D twin visualisation, and ASNT-compliant report templates plug into the existing landscape rather than displacing it." },
    { question: "How does the Indian regulatory regime affect digital twin requirements?", answer: "PNGRB (Petroleum and Natural Gas Regulatory Board) sets the upstream and midstream regulatory baseline. OISD (Oil Industry Safety Directorate) standards &mdash; particularly OISD-129 (inspection of pressure vessels) and OISD-130 (inspection of piping) &mdash; set the inspection cadence and methodology requirements for Indian refineries. The Atlantis audit-pack module generates OISD-compliant evidence bundles directly from the digital twin data repository. For internationally-traded products (jet fuel, gasoline, diesel exports), the API/ASME inspection regime applies in parallel; Atlantis handles both code regimes in the same twin." },
    { question: "What about monsoon-driven CUI in the Gulf of Kutch climate?", answer: "Jamnagar sits on the Gulf of Kutch in Gujarat &mdash; high-humidity, salt-laden coastal climate with a sharp monsoon-driven wet season from June through September. CUI rates on insulated piping and vessels exposed to this environment run noticeably higher than inland Indian refineries (Bhatinda, Panipat, Mathura). Atlantis ships API 583 CUI risk overlays directly on the 3D twin, with monsoon-aware re-inspection scheduling that frontloads CUI surveys before the wet season starts. Reliance&rsquo;s in-house CUI programme has matured to the point where systematic digital-twin-backed CUI tracking is the natural next step." },
];

export default function RefineryJamnagarCombo() {
    const structuredData = {
        "@context": "https://schema.org",
        "@graph": [
            { "@type": "Article", "headline": "Digital Twin for Reliance Jamnagar: World&rsquo;s Largest Refinery Integrity [2026]", "datePublished": "2026-05-25", "dateModified": "2026-05-25", "author": { "@type": "Person", "name": "Anoop Rayavarapu" }, "publisher": { "@type": "Organization", "name": "Atlantis NDT" }, "mainEntityOfPage": { "@type": "WebPage", "@id": "https://atlantisndt.com/digital-twins/refinery-jamnagar" } },
            { "@type": "FAQPage", "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } })) }
        ]
    };
    return (
        <ProductPageLayout
            title="Digital Twin for Reliance Jamnagar: World&rsquo;s Largest Refinery Integrity [2026]"
            description="Reliance Jamnagar digital twin: 1.36M bpd, 60K-180K CMLs, hydroprocessing HTHA, coker fatigue, monsoon CUI. OISD + API 510/570/579/581 audit packs. ROI $8M-$25M/yr at scale."
            canonical="https://atlantisndt.com/digital-twins/refinery-jamnagar"
            eyebrow="Use Case · Location"
            h1="Atlantis Digital Twin for Jamnagar: Built for the World&rsquo;s Largest Refining Complex [2026]"
            intro="Reliance Jamnagar runs ~1.36 million bpd across the DTA and SEZ refineries &mdash; the world&rsquo;s largest single-location refining complex, plus the adjacent Nayara Energy Vadinar at ~400,000 bpd. Atlantis Digital Twin handles API 510/570/579/581 + OISD-129/130 integrity at Jamnagar scale, with monsoon-aware CUI workflows, HTHA tracking, and coker drum fatigue analytics."
            heroGradient="from-orange-700 to-red-900"
            competitorLabel="Jamnagar Specifics"
            compareRows={compareRows}
            faqs={faqs}
            related={[
                { href: "/digital-twins/refinery", title: "Refinery Use Case", blurb: "Asset-class deep-dive." },
                { href: "/digital-twin-jamnagar", title: "Jamnagar (Location)", blurb: "Full city DT coverage page." },
                { href: "/digital-twin-india", title: "India Country Coverage", blurb: "Pan-India DT programmes." },
                { href: "/digital-twins", title: "Atlantis Digital Twin", blurb: "Product page." },
                { href: "/contact", title: "Book a Jamnagar Demo", blurb: "Bring one process unit&rsquo;s asset list. 30-minute demo." },
            ]}
            ctaTitle="See Reliance Jamnagar as a Live Integrity Twin"
            ctaSubtitle="Bring one process unit&rsquo;s asset list and a sample OISD-129 inspection record. We&rsquo;ll have it running as an Atlantis twin in a 30-minute demo."
            structuredData={structuredData}
            bodyChildren={
                <>
                    <h2>Why Jamnagar is a different scale of digital twin opportunity</h2>
                    <p>Reliance Jamnagar is, by every measure, the largest single-location refining complex in the world. The DTA (Domestic Tariff Area) refinery runs ~668,000 bpd of mostly heavy-sour crude. The adjacent SEZ (Special Economic Zone) refinery runs another ~704,000 bpd, primarily for export. Together they exceed 1.36 million bpd of installed capacity &mdash; more than the largest US refinery (ExxonMobil Baytown) by a factor of 2.4&times;. Add the adjacent Nayara Energy Vadinar refinery (~400,000 bpd, previously Essar Oil) and the Gulf of Kutch coastline holds nearly 1.8 million bpd of refining within a single industrial cluster. Inspection labour, turnaround scope, CUI exposure, and HTHA risk all scale with this footprint.</p>

                    <h2>The Jamnagar damage-mechanism stack</h2>
                    <p>Jamnagar runs one of the broadest damage-mechanism profiles in global refining, driven by deep conversion of heavy sour crudes:</p>
                    <ul>
                        <li><strong>Sour service corrosion.</strong> High-sulfur Middle-East crudes (Saudi Arab Heavy/Medium, Iraqi Basrah, Iranian Heavy historically, Venezuelan Boscan) drive H<sub>2</sub>S-bearing service across most secondary units. API 571 templates for wet H<sub>2</sub>S, HIC, SOHIC, and SSC apply broadly.</li>
                        <li><strong>HTHA on hydroprocessing.</strong> The RDS/VRDS/DHDT complex is high-pressure and high-temperature; API 941 Nelson Curve screening is core to the inspection plan, with PAUT and AUT confirming results on flagged components.</li>
                        <li><strong>Naphthenic acid corrosion.</strong> Variable crude diet including high-TAN Venezuelan and West African grades drives naphthenic acid attack on FCC slurry, vacuum bottoms, and coker feed lines.</li>
                        <li><strong>Coker drum fatigue.</strong> Delayed cokers go through thousands of fill-drain-quench cycles; API 579 Part 14 fatigue analysis is core to the integrity plan.</li>
                        <li><strong>Monsoon-driven CUI.</strong> The Gulf of Kutch high-humidity, salt-laden environment plus the sharp June&ndash;September monsoon drives CUI rates noticeably higher than inland Indian refineries.</li>
                    </ul>

                    <h2>Workflow walkthrough for Jamnagar scale</h2>
                    <h3>Inspection capture at 60,000&ndash;180,000 CML scale</h3>
                    <p>Inspection capture at Jamnagar scale &mdash; tens of thousands of CMLs across the DTA and SEZ &mdash; demands an offline-capable mobile capture workflow. Atlantis runs on iPad and rugged Android tablets, captures UT thickness, PAUT B/C-scans, MT/PT indications, and visual surveys with GPS+photo tagging, and syncs to the asset record automatically when the device is back on Wi-Fi. Reliance&rsquo;s in-house inspection team plus the contractor pool (TCR Engineering, Bureau Veritas, Lloyd&rsquo;s, SGS, IRClass, IRISNDT) all use the same capture pattern, with role-based permissions ensuring contractor data is reviewed by Reliance integrity engineers before being committed to the corporate record.</p>

                    <h3>FFS and RBI at Jamnagar scale</h3>
                    <p>The Atlantis API 579 FFS engine handles Level 1, Level 2, and Level 3 assessments natively. For a complex with 60,000+ CMLs and tens of thousands of weld map entries, the FFS workflow at scale matters: bulk FFS screening can identify the top 1&ndash;2% of components requiring detailed Level 2 or Level 3 assessment, which is then routed to the integrity engineering team or to an external engineering firm (E2G, Becht, Wood, KBC). The Atlantis API 581 RBI engine recalculates risk scores whenever process severity tags from the AVEVA PI historian change &mdash; a crude swap, a unit re-blend, or an operating pressure trim can re-rank the inspection schedule within hours.</p>

                    <h3>Turnaround scope and OISD compliance</h3>
                    <p>Jamnagar turnaround scope decisions move tens to hundreds of millions of dollars. The Atlantis turnaround scoping module ranks every overdue CML, every elevated RBI risk component, every FFS &lsquo;requires further evaluation,&rsquo; and every weld pending re-inspection into a defensible scope list. OISD-129 (pressure vessel inspection) and OISD-130 (piping inspection) audit packs generate directly from the twin in &lt;30 seconds, ready for PNGRB inspector review.</p>

                    <h2>ROI math for a Jamnagar-scale deployment</h2>
                    <p>For a full Jamnagar SEZ + DTA deployment (or an equivalent-scale refinery cluster like SABIC&rsquo;s Saudi network or Sinopec&rsquo;s Maoming/Zhenhai), Atlantis Digital Twin enterprise tier (affordable, accessible, fully customizable SaaS &mdash; quote on request) typically pays back through:</p>
                    <ul>
                        <li><strong>Turnaround scope reduction:</strong> 15&ndash;25% on $200&ndash;$600M annualised turnaround spend = $30&ndash;$150M every 4&ndash;5 years &asymp; $7&ndash;$30M/yr averaged.</li>
                        <li><strong>HTHA / sour service unplanned downtime avoided:</strong> One avoided hydroprocessor trip from early HTHA or wet H<sub>2</sub>S detection saves $20&ndash;$60M in lost margin.</li>
                        <li><strong>Inspection labour savings:</strong> 10&ndash;20% reduction in routine inspection hours at Jamnagar headcount &asymp; $2&ndash;$6M/yr.</li>
                        <li><strong>FFS-backed life extension:</strong> Defensible FFS evidence enables inspection-interval extension under API 510 Section 6.4 / OISD-129 Annex C, saving multi-million-dollar premature replacements.</li>
                    </ul>
                    <p>Net: $8M&ndash;$25M/yr in measurable value at refinery scale, comfortably justifying a multi-year platform investment.</p>

                    <h2>Implementation path</h2>
                    <p>First process unit live in 10&ndash;14 weeks (typically a hydroprocessing unit or the coker complex). Subsequent units 4&ndash;6 weeks each. A full DTA + SEZ deployment realistically lands in 18&ndash;24 months from kickoff to last-unit-live, with continuous expansion into adjacent assets (PX, polypropylene, lube base oil) thereafter. Coexistence with the existing SAP PM + AVEVA PI + Bentley AssetWise stack is the norm, not the exception.</p>
                </>
            }
        />
    );
}
