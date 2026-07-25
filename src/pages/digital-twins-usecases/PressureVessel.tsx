import ProductPageLayout from "@/components/ProductPageLayout";
import UsecaseDeepDive from "@/components/UsecaseDeepDive";

const compareRows = [
    { factor: "Asset count (typical refinery)", atlantis: "200–800 pressure vessels", competitor: "—" },
    { factor: "Primary failure modes", atlantis: "Internal corrosion, external corrosion, CUI, sour service mechanisms, HTHA, fatigue, brittle fracture below MDMT", competitor: "—" },
    { factor: "Code references", atlantis: "API 510 (in-service), ASME Section VIII Div. 1/2 (design), API 579 (FFS), API 581 (RBI), API 571 (damage mechanisms)", competitor: "—" },
    { factor: "NDT methods", atlantis: "UT (B/C-scan, PAUT, AUT), RT, MT, PT, eddy current, AE, guided wave", competitor: "—" },
    { factor: "Inspection cycle", atlantis: "RBI-driven typically 5–10 years internal; external visual at 5 years; CML thickness as RBI requires", competitor: "—" },
    { factor: "Atlantis ROI typical", atlantis: "Embedded in refinery / petrochem deployment ROI", competitor: "—" },
    { factor: "Implementation", atlantis: "Pressure vessel workflow ships as part of process unit deployment", competitor: "—" },
];

const faqs = [
    { question: "How does API 510 inspection planning work in Atlantis?", answer: "API 510 inspection planning runs natively in the platform. The default inspection interval comes from RBI calculation (API 581) per vessel; if RBI isn&rsquo;t implemented, the API 510 default intervals apply (5 years internal / 5 years external visual / CMLs as required). Atlantis tracks every CML reading, calculates corrosion rate from successive readings, and projects t-actual vs t-min and remaining life. The next-due inspection date updates automatically as new data arrives." },
    { question: "What about MDMT and brittle fracture?", answer: "Minimum Design Metal Temperature (MDMT) and brittle fracture susceptibility track on the vessel record per ASME Section VIII Div. 1 UCS-66 / UG-20(f). Atlantis flags any operating condition that approaches or violates MDMT (typically when pressure-test conditions are below normal operating temperature, or during cold-startup transients) and supports the API 579 Part 3 brittle fracture FFS for vessels operating below the original design MDMT after material property reassessment." },
    { question: "How does the CML grid relate to the vessel geometry?", answer: "Each CML is geo-located on the 3D vessel model — head / shell course / nozzle / weld / supports. Inspector arrives at the vessel knowing exactly which CML to read and where it sits geometrically. The 3D vessel rendering color-codes CMLs by remaining-life severity. Click-through to the CML record shows thickness history, corrosion rate, t-min, and projected next-inspection date. Multi-decade trending across vessel inspections supports defensible re-rating decisions." },
    { question: "What about FFS for cracks, blisters, HIC, and other indications?", answer: "API 579 Level 1, 2, and 3 FFS supported natively for general metal loss (Part 4), local metal loss (Part 5), pitting (Part 6), blisters and laminations (Part 7), HIC and SOHIC (Part 7), creep (Part 10), fire damage (Part 11), brittle fracture (Part 3), fatigue (Part 14), and crack-like flaws (Part 9). Calculation inputs come from the inspection record; outputs flow into the integrity decision (acceptable / not acceptable / requires further evaluation) and into the recommended action." },
    { question: "How does this fit with the company&rsquo;s pressure equipment integrity program?", answer: "Atlantis fits the vessel workflow into the broader process-unit / plant integrity program that the operator&rsquo;s integrity authority owns. The platform doesn&rsquo;t prescribe the program — it executes it. Atlantis Level III consultants (included on enterprise engagements) work with your integrity authority during deployment to align inspection plan templates, FFS workflow, and RBI scoring to the operator&rsquo;s standards." },
];

export default function PressureVesselUseCase() {
    const structuredData = {
        "@context": "https://schema.org",
        "@graph": [
            { "@type": "Article", "headline": "Atlantis Digital Twin for Pressure Vessels: API 510 / 579 / 581 Workflow [2026]", "datePublished": "2026-05-09", "dateModified": "2026-05-09", "author": { "@type": "Person", "name": "Anoop Rayavarapu" }, "publisher": { "@type": "Organization", "name": "Atlantis NDT" }, "mainEntityOfPage": { "@type": "WebPage", "@id": "https://atlantisndt.com/digital-twins/pressure-vessel" } },
            { "@type": "FAQPage", "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } })) }
        ]
    };
    return (
        <ProductPageLayout
            title="Atlantis Digital Twin for Pressure Vessels: API 510, FFS, RBI Workflow [2026]"
            description="Pressure vessel digital twin: API 510 inspection cycle, CML thickness trending, API 579 FFS Level 1/2/3, API 581 RBI scoring, MDMT brittle fracture, multi-decade vessel record."
            canonical="https://atlantisndt.com/digital-twins/pressure-vessel"
            eyebrow="Asset-Class Use Case"
            h1="Atlantis Digital Twin for Pressure Vessels: API 510 to FFS to RBI [2026]"
            intro="Pressure vessels are the backbone of every process plant — 200–800 per refinery, with API 510 inspection cycles, API 579 FFS calculations, and API 581 RBI scoring driving the integrity workflow. Atlantis Digital Twin manages all of it natively with multi-decade vessel records."
            heroGradient="from-slate-700 to-blue-800"
            competitorLabel="Pressure Vessel Specifics"
            compareRows={compareRows}
            faqs={faqs}
            related={[
                { href: "/digital-twins/refinery", title: "Refinery", blurb: "Pressure vessels in the broader refinery integrity context." },
                { href: "/digital-twins/heat-exchanger", title: "Heat Exchanger", blurb: "Adjacent asset class — shell-side workflow shares the API 510 base." },
                { href: "/digital-twins/petrochemical-complex", title: "Petrochem Complex", blurb: "Pressure vessels in petrochem service environments." },
                { href: "/digital-twins", title: "Atlantis Digital Twin", blurb: "Product page — features, pricing, case studies." },
                { href: "/api-510-certification", title: "API 510 Certification", blurb: "The inspector certification underpinning the workflow." },
                { href: "/contact", title: "Book a Vessel Demo", blurb: "Bring one vessel&rsquo;s API 510 history. We&rsquo;ll show your vessel as a twin in 30 minutes." },
            ]}
            ctaTitle="See Your Pressure Vessels as Live Integrity Twins"
            ctaSubtitle="Bring one vessel&rsquo;s API 510 history and CML data. We&rsquo;ll have it running as an Atlantis twin in a 30-minute demo."
            structuredData={structuredData}
            bodyChildren={
                <>
                    <h2>The pressure vessel as the integrity-twin canonical asset</h2>
                    <p>If a digital twin earns its keep on any single asset class, it&rsquo;s the pressure vessel. Vessels are high-value (large capital cost, central to process operation), high-consequence (failure = explosion / release / personnel harm), and inspection-intensive (CMLs across the vessel, multi-decade thickness trends, API 510 / 579 / 581 workflow on every major vessel). The integrity team needs structured, queryable, defensible data — not a stack of paper inspection reports.</p>

                    <h2>API 510 workflow native to Atlantis</h2>
                    <p>The default inspection interval for each vessel comes from RBI calculation (API 581); if RBI isn&rsquo;t fully implemented, the API 510 default intervals apply (5-year internal, 5-year external visual, CMLs as required). Atlantis tracks every CML reading, calculates corrosion rate from successive readings, and projects t-actual vs t-min and remaining life. The next-due inspection date updates automatically. Inspection plans for the next 12 months pre-populate from the vessel records — inspection planners don&rsquo;t scramble for the next-due list, it&rsquo;s already calculated.</p>

                    <h2>CML grid on the 3D vessel</h2>
                    <p>Each CML is geo-located on the 3D vessel — head / shell course / nozzle / weld / support. Inspector arrives knowing exactly which CMLs to read. The 3D rendering color-codes CMLs by remaining-life severity. Click-through to the CML record shows thickness history, corrosion rate, t-min, and projected next-inspection date. The visualization is what drives integrity team adoption — once they see their vessels rendered with color-coded CML state, the platform earns its keep.</p>

                    <h2>FFS calculations native</h2>
                    <p>API 579 Level 1, 2, and 3 FFS supported natively for the full damage-mechanism set:</p>
                    <ul>
                        <li><strong>Part 4 — General metal loss.</strong> Most common FFS use case for refinery vessels.</li>
                        <li><strong>Part 5 — Local metal loss.</strong> Pitting clusters, localized thinning patches.</li>
                        <li><strong>Part 6 — Pitting damage.</strong> Statistical pitting analysis.</li>
                        <li><strong>Part 7 — Blisters, HIC, and SOHIC.</strong> Sour service damage assessment.</li>
                        <li><strong>Part 9 — Crack-like flaws.</strong> Surface and embedded cracks per fracture mechanics.</li>
                        <li><strong>Part 10 — Creep damage.</strong> High-temperature service vessels.</li>
                        <li><strong>Part 11 — Fire damage.</strong> Post-fire vessel reassessment.</li>
                        <li><strong>Part 14 — Fatigue.</strong> Cyclic service vessels (coker drums, swing reactors).</li>
                        <li><strong>Part 3 — Brittle fracture.</strong> MDMT reassessment for cold-startup risk.</li>
                    </ul>
                    <p>Calculation inputs come from the inspection record; outputs flow into the integrity decision and recommended action.</p>

                    <h2>RBI scoring per API 581</h2>
                    <p>API 581 RBI runs continuously as new inspection data arrives and as operating severity changes (pulled from the connected process historian). Risk band changes update the next-inspection date and inspection effectiveness assumptions. The RBI library — damage mechanisms, COF/POF factors, inspection effectiveness scoring — is configurable per operator standards while shipping with sensible defaults per API 581.</p>

                    <h2>MDMT and brittle fracture</h2>
                    <p>Minimum Design Metal Temperature (MDMT) and brittle fracture susceptibility track on the vessel record per ASME Section VIII Div. 1 UCS-66 / UG-20(f). Atlantis flags operating conditions that approach or violate MDMT (typically pressure-test conditions below normal operating, or cold-startup transients) and supports API 579 Part 3 brittle fracture FFS for vessels operating below original design MDMT after material property reassessment.</p>

                    <h2>Multi-decade vessel record</h2>
                    <p>Pressure vessels run for decades. The integrity team that&rsquo;s running the vessel today is rarely the team that built it. Atlantis maintains the multi-decade record — every inspection, every FFS, every RBI assessment, every repair, every re-rate — with the same data quality standard. New integrity engineers on the team have a defensible historical baseline; old hands have their judgment captured in structured data. The vessel record outlives the people who maintain it.</p>
                <UsecaseDeepDive slug="pressure-vessel" />
                </>
            }
        />
    );
}
