import ProductPageLayout from "@/components/ProductPageLayout";
import UsecaseDeepDive from "@/components/UsecaseDeepDive";

const compareRows = [
    { factor: "Asset count (typical refinery)", atlantis: "200–800 pressure vessels", competitor: "—" },
    { factor: "Primary failure modes", atlantis: "Internal corrosion, external corrosion, CUI, sour service mechanisms, HTHA, fatigue, brittle fracture below MDMT", competitor: "—" },
    { factor: "Code references", atlantis: "API 510 (in-service), ASME Section VIII Div. 1/2 (design), API 571 (damage mechanisms)", competitor: "—" },
    { factor: "NDT methods", atlantis: "UT (B/C-scan, PAUT, AUT), RT, MT, PT, eddy current, AE, guided wave", competitor: "—" },
    { factor: "Inspection cycle", atlantis: "Per API 510 and the owner's inspection plan; CML thickness intervals tracked against corrosion rate and remaining life", competitor: "—" },
    { factor: "Atlantis ROI typical", atlantis: "Embedded in refinery / petrochem deployment ROI", competitor: "—" },
    { factor: "Implementation", atlantis: "Pressure vessel workflow ships as part of process unit deployment", competitor: "—" },
];

const faqs = [
    { question: "How does API 510 inspection planning work in Atlantis?", answer: "API 510 inspection tracking runs natively in the platform. Inspection intervals follow API 510 and the owner&rsquo;s inspection plan for each vessel. Atlantis tracks every CML reading, calculates corrosion rate from successive readings, and projects t-actual vs t-min and remaining life. The next-due inspection date updates automatically as new data arrives." },
    { question: "What about MDMT and brittle fracture?", answer: "Minimum Design Metal Temperature (MDMT) and brittle fracture susceptibility track on the vessel record per ASME Section VIII Div. 1 UCS-66 / UG-20(f)." },
    { question: "How does the CML grid relate to the vessel geometry?", answer: "Each CML is geo-located on the 3D vessel model — head / shell course / nozzle / weld / supports. Inspector arrives at the vessel knowing exactly which CML to read and where it sits geometrically. The 3D vessel rendering color-codes CMLs by remaining-life severity. Click-through to the CML record shows thickness history, corrosion rate, t-min, and projected next-inspection date. Multi-decade trending across vessel inspections supports defensible re-rating decisions." },
    { question: "How does the twin handle cracks, blisters, HIC, and other indications?", answer: "Every NDT indication &mdash; general and local metal loss, pitting, blisters and laminations, HIC and SOHIC, crack-like flaws &mdash; is mapped to its exact location on the 3D vessel model with method, size, images, and inspection date. Successive inspections are overlaid so growth or new indications are visible at a glance, and the full indication history exports into the automated API 510 inspection report for the owner&rsquo;s engineers to review." },
    { question: "How does this fit with the company&rsquo;s pressure equipment integrity program?", answer: "Atlantis fits the vessel workflow into the broader process-unit / plant integrity program that the operator&rsquo;s integrity authority owns. The platform doesn&rsquo;t prescribe the program — it executes it." },
];

export default function PressureVesselUseCase() {
    const structuredData = {
        "@context": "https://schema.org",
        "@graph": [
            { "@type": "Article", "headline": "Atlantis Digital Twin for Pressure Vessels: API 510 Inspection Workflow [2026]", "datePublished": "2026-05-09", "dateModified": "2026-05-09", "author": { "@type": "Person", "name": "Anoop Rayavarapu" }, "publisher": { "@type": "Organization", "name": "Atlantis NDT" }, "mainEntityOfPage": { "@type": "WebPage", "@id": "https://atlantisndt.com/digital-twins/pressure-vessel" } },
            { "@type": "FAQPage", "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } })) }
        ]
    };
    return (
        <ProductPageLayout
            title="Atlantis Digital Twin for Pressure Vessels: API 510 Inspection Workflow [2026]"
            description="Pressure vessel digital twin: API 510 inspection cycle, CML thickness trending, corrosion-rate and remaining-life tracking, 3D indication mapping, MDMT brittle fracture, multi-decade vessel record."
            canonical="https://atlantisndt.com/digital-twins/pressure-vessel"
            eyebrow="Asset-Class Use Case"
            h1="Atlantis Digital Twin for Pressure Vessels: API 510 Inspection Data in 3D [2026]"
            intro="Pressure vessels are the backbone of every process plant — 200–800 per refinery, with API 510 inspection cycles, CML thickness surveys, and multi-method NDT data driving the integrity workflow. Atlantis Digital Twin puts that inspection data on a 3D vessel model, trends corrosion rate and remaining life, and generates API 510 reports from multi-decade vessel records."
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
                    <p>If a digital twin earns its keep on any single asset class, it&rsquo;s the pressure vessel. Vessels are high-value (large capital cost, central to process operation), high-consequence (failure = explosion / release / personnel harm), and inspection-intensive (CMLs across the vessel, multi-decade thickness trends, API 510 workflow on every major vessel). The integrity team needs structured, queryable, defensible data — not a stack of paper inspection reports.</p>

                    <h2>API 510 workflow native to Atlantis</h2>
                    <p>Inspection intervals for each vessel follow API 510 and the owner&rsquo;s inspection plan. Atlantis tracks every CML reading, calculates corrosion rate from successive readings, and projects t-actual vs t-min and remaining life. The next-due inspection date updates automatically. Inspection plans for the next 12 months pre-populate from the vessel records — inspection planners don&rsquo;t scramble for the next-due list, it&rsquo;s already calculated.</p>

                    <h2>CML grid on the 3D vessel</h2>
                    <p>Each CML is geo-located on the 3D vessel — head / shell course / nozzle / weld / support. Inspector arrives knowing exactly which CMLs to read. The 3D rendering color-codes CMLs by remaining-life severity. Click-through to the CML record shows thickness history, corrosion rate, t-min, and projected next-inspection date.</p>

                    <h2>Damage and indication mapping</h2>
                    <p>Every NDT indication is pinned to its location on the 3D vessel with method, size, images, and inspection date:</p>
                    <ul>
                        <li><strong>General and local metal loss.</strong> UT thickness grids and corrosion-mapping scans shown as colour-coded thickness maps.</li>
                        <li><strong>Pitting.</strong> Pit locations and depths tracked across successive inspections.</li>
                        <li><strong>Blisters, HIC, and SOHIC.</strong> Wet H2S indications mapped and compared inspection to inspection.</li>
                        <li><strong>Crack-like indications.</strong> PAUT / TOFD sizing results attached to the weld or location record.</li>
                    </ul>
                    <p>Assessment of any flagged indication stays with the owner&rsquo;s qualified engineers; the twin gives them the complete, auditable inspection history and generates the API 510 inspection report automatically.</p>

                    <h2>MDMT and brittle fracture</h2>
                    <p>Minimum Design Metal Temperature (MDMT) and brittle fracture susceptibility track on the vessel record per ASME Section VIII Div. 1 UCS-66 / UG-20(f).</p>

                    <h2>Multi-decade vessel record</h2>
                    <p>Pressure vessels run for decades. The integrity team that&rsquo;s running the vessel today is rarely the team that built it. New integrity engineers on the team have a defensible historical baseline; old hands have their judgment captured in structured data. The vessel record outlives the people who maintain it.</p>
                <UsecaseDeepDive slug="pressure-vessel" />
                </>
            }
        />
    );
}
