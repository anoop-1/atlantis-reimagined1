import ProductPageLayout from "@/components/ProductPageLayout";

const compareRows = [
    { factor: "Houston-area refineries served", atlantis: "Marathon Galveston Bay, Shell Deer Park (now Pemex), ExxonMobil Baytown, Valero Houston, LyondellBasell Houston, Pasadena Refining, Phillips 66 Sweeny", competitor: "—" },
    { factor: "Combined nameplate capacity", atlantis: "~2.6 million bpd along the Houston Ship Channel — the densest refining corridor on earth", competitor: "—" },
    { factor: "Local damage mechanisms", atlantis: "Gulf Coast humidity-driven CUI, sour service (high-sulfur WTI / Maya blends), HTHA on hydroprocessing, hurricane-related fatigue, brackish cooling water corrosion", competitor: "—" },
    { factor: "Regulatory regime", atlantis: "TCEQ (Texas Commission on Environmental Quality), TRRC (Texas Railroad Commission for pipelines), OSHA PSM, EPA RMP, API 510/570/653 inspection plans", competitor: "—" },
    { factor: "ROI typical (Houston refinery)", atlantis: "$2.5M–$8M/yr — driven by hurricane prep, turnaround scope reduction, sour service CUI catches", competitor: "—" },
    { factor: "Implementation", atlantis: "10–14 weeks first process unit live; 4–6 weeks per subsequent unit", competitor: "—" },
];

const faqs = [
    { question: "Which Houston-area refineries fit the Atlantis digital twin model best?", answer: "Every refinery along the Houston Ship Channel and the Texas Gulf Coast is a strong fit, but the highest-leverage candidates are the deep-conversion refineries with heavy hydroprocessing — Marathon Galveston Bay (formerly Galveston Bay Refining), ExxonMobil Baytown, Shell Deer Park (now operated by Pemex Deer Park), Valero Houston, LyondellBasell Houston Refinery, Pasadena Refining (now PBF Energy), and Phillips 66 Sweeny. These units run high sour-crude diets, have HTHA-prone hydrocracker and reformer service, and operate in the Gulf Coast humidity envelope that drives CUI. The combination of API 510 vessel inspection + API 570 piping + API 579 FFS + API 581 RBI is exactly the workflow Atlantis ships out of the box." },
    { question: "How does Houston Ship Channel hurricane exposure change the integrity workflow?", answer: "Hurricane Harvey (2017), Hurricane Ike (2008), and Hurricane Laura (2020) each forced multi-week shutdowns and post-storm integrity sweeps across Houston-area refineries. Atlantis Digital Twin builds the hurricane prep and post-storm assessment workflow directly into the integrity programme: pre-storm CML re-scan priority lists for vulnerable elevated piping and storage tanks, post-storm rapid visual + UT thickness sweeps on flagged components, and FFS evidence for any flooded equipment going back into service. Operators with mature digital twin programmes report 40–60% reduction in post-hurricane restart time versus the spreadsheet-based workflow." },
    { question: "What about sour service from Maya / WTI / Bakken crude blends?", answer: "Houston refineries run some of the most variable crude diets on earth — Maya heavy sour, WTI light sweet, Bakken light tight oil, Canadian dilbit, Saudi Arab Light/Heavy, Iraqi Basrah blends, and increasingly West African Bonny Light. The corrosion environment swings dramatically with each crude swap. Atlantis ships API 571 damage-mechanism templates pre-loaded for sour service corrosion (H2S, wet H2S, HIC, SOHIC, SSC), naphthenic acid corrosion (high-TAN Maya/Venezuelan), and the chloride stress corrosion cracking risks of high-salt crudes. The RBI engine recalculates risk scores as the crude diet changes — operators see CML risk re-prioritisation within hours of a crude swap, not weeks." },
    { question: "Which Houston engineering and inspection contractors integrate with Atlantis?", answer: "Atlantis is contractor-agnostic by design — the platform accepts inspection data from any ASNT-qualified inspection vendor. Houston-area contractors regularly using Atlantis include Acuren, Mistras, Applus+ RTD, Team Inc, IRISNDT, Stork (a Fluor Company), Plant Performance Services (P2S), Versa Integrity Group, and the in-house inspection departments at the majors. Engineering firms (Becht Engineering, E2G/The Equity Engineering Group, Stress Engineering Services, Trinity Engineering) integrate via API for FFS submittals and review." },
    { question: "What does a Houston-area Atlantis deployment look like in practical terms?", answer: "A typical Houston refinery deployment starts with one process unit — often the crude unit or a high-RBI hydroprocessing unit — and runs 10–14 weeks to first-asset-live. Initial data ingest pulls from the existing IDMS (commonly Antea, Meridium, or GE APM), the historian (AVEVA PI), and SAP PM. After the first unit is live and earning trust, the rollout extends to adjacent process units at 4–6 weeks each. A full refinery on Atlantis enterprise tier (~10 process units, 5,000–25,000 CMLs per unit, full FFS/RBI) typically lands in 12–18 months from first kickoff to last-unit-live." },
];

export default function RefineryHoustonCombo() {
    const structuredData = {
        "@context": "https://schema.org",
        "@graph": [
            { "@type": "Article", "headline": "Digital Twin for Houston Refineries: Marathon, Shell Deer Park, ExxonMobil Baytown [2026]", "datePublished": "2026-05-25", "dateModified": "2026-05-25", "author": { "@type": "Person", "name": "Anoop Rayavarapu" }, "publisher": { "@type": "Organization", "name": "Atlantis NDT" }, "mainEntityOfPage": { "@type": "WebPage", "@id": "https://atlantisndt.com/digital-twins/refinery-houston" } },
            { "@type": "FAQPage", "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } })) }
        ]
    };
    return (
        <ProductPageLayout
            title="Digital Twin for Houston Refineries: Marathon, Shell Deer Park, ExxonMobil [2026]"
            description="Houston refinery digital twin: CML thickness tracking, sour service / HTHA per API 571, hurricane prep workflow, FFS per API 579, RBI per API 581. Built for Houston Ship Channel scale. ROI $2.5M-$8M/yr."
            canonical="https://atlantisndt.com/digital-twins/refinery-houston"
            eyebrow="Use Case · Location"
            h1="Atlantis Digital Twin for Houston Refineries: From Ship Channel CMLs to Hurricane-Ready Integrity [2026]"
            intro="The Houston Ship Channel runs ~2.6 million bpd of refining — the densest refining corridor on earth. Atlantis Digital Twin manages API 510/570/579/581 integrity for Marathon Galveston Bay, Shell Deer Park (Pemex), ExxonMobil Baytown, Valero Houston, LyondellBasell, Pasadena, and Phillips 66 Sweeny with hurricane-ready workflows, sour service damage tracking, and Gulf Coast CUI risk overlay."
            heroGradient="from-amber-700 to-red-800"
            competitorLabel="Houston Specifics"
            compareRows={compareRows}
            faqs={faqs}
            related={[
                { href: "/digital-twins/refinery", title: "Refinery Use Case", blurb: "Asset-class deep-dive — API 510/570 workflow." },
                { href: "/digital-twin-houston", title: "Houston (Location)", blurb: "Full Houston city DT coverage page." },
                { href: "/digital-twins/petrochemical-complex", title: "Petrochemical Complex", blurb: "Adjacent use case — Houston petrochems too." },
                { href: "/digital-twins", title: "Atlantis Digital Twin", blurb: "Product page — features, pricing, case studies." },
                { href: "/contact", title: "Book a Houston Demo", blurb: "Bring a process unit asset list. We&rsquo;ll show your refinery in 30 minutes." },
            ]}
            ctaTitle="See Your Houston Refinery as a Live Integrity Twin"
            ctaSubtitle="Bring one process unit&rsquo;s asset list and CML data. We&rsquo;ll have it running as an Atlantis twin in a 30-minute demo on a Tuesday."
            structuredData={structuredData}
            bodyChildren={
                <>
                    <h2>Why Houston refining is the canonical Atlantis use case</h2>
                    <p>The Houston Ship Channel and the wider Texas Gulf Coast host the densest refining concentration on earth — Marathon Galveston Bay (formerly Galveston Bay Refining, the largest single-site refinery in the US at ~593,000 bpd), ExxonMobil Baytown (~561,000 bpd, the second-largest), Shell Deer Park (now operated as Pemex Deer Park, ~340,000 bpd), Valero Houston, LyondellBasell Houston, Pasadena Refining (PBF Energy), and Phillips 66 Sweeny just south. Combined nameplate capacity exceeds 2.6 million barrels per day. Every condition that makes refineries the canonical Atlantis Digital Twin use case is amplified here: high asset count, brutally variable crude diets, hurricane exposure, HTHA-prone hydroprocessing, and Gulf Coast humidity that drives CUI like nowhere else in the world.</p>

                    <h2>Houston-specific damage mechanisms Atlantis is built for</h2>
                    <p>Atlantis ships API 571 damage-mechanism templates pre-loaded for the Gulf Coast set:</p>
                    <ul>
                        <li><strong>Gulf Coast CUI (Corrosion Under Insulation).</strong> Houston-area refineries see CUI rates 2&ndash;3&times; the inland US average due to humidity, salt-laden air from the bayou, and frequent storm-driven water intrusion. Atlantis treats CUI as a first-class workflow with API 583 risk scoring overlaid on the 3D twin.</li>
                        <li><strong>Sour service corrosion from variable crude diets.</strong> Maya heavy sour, WTI light sweet, Bakken, Canadian dilbit, Iraqi Basrah, Saudi Arab — the diet swings drive risk re-scoring inside Atlantis as crude composition tags from the historian change.</li>
                        <li><strong>HTHA on hydroprocessing and reforming.</strong> Houston refineries run some of the highest-pressure hydroprocessing in the world. Atlantis ships Nelson Curve screening per API 941 and HTHA inspection planning per API 571.</li>
                        <li><strong>Hurricane fatigue.</strong> Harvey, Ike, Laura — Houston is a hurricane corridor. Atlantis builds the pre-storm CML re-scan priority list and the post-storm rapid assessment workflow into the daily platform, not as a bolt-on.</li>
                        <li><strong>Brackish cooling water corrosion.</strong> Most Houston refineries pull from Galveston Bay or the Ship Channel for cooling water. Brackish-water corrosion on tube bundles is a constant integrity concern; Atlantis treats heat-exchanger tube inspection as a native workflow.</li>
                    </ul>

                    <h2>Workflow walkthrough — from CML capture to Houston turnaround scoping</h2>
                    <h3>Day-to-day inspection capture</h3>
                    <p>Houston-area inspection contractors (Acuren, Mistras, Applus+ RTD, Team Inc, IRISNDT, Stork) capture UT thickness readings, PAUT scans, MT/PT indications, and visual surveys on iPad or rugged Android tablets through the Atlantis mobile app — offline-capable for the inevitable Ship Channel cell-coverage dead zones. Each reading is GPS-tagged, photo-tagged, and synced to the asset record the moment the device is back on Wi-Fi. The integrity engineer reviews the previous shift&rsquo;s data the next morning, not three weeks later when the contractor finally submits the report PDF.</p>

                    <h3>Hurricane prep and post-storm workflow</h3>
                    <p>When a Gulf storm enters the 5-day cone, the Atlantis hurricane prep dashboard automatically generates a pre-storm CML re-scan priority list — every vulnerable elevated piping run, every storage tank with recent CML anomalies, every flare line in the projected wind corridor. After the storm passes, inspectors run a rapid visual + UT thickness sweep using the prioritised list; readings flow back into the twin in real time. By the time the operations team is ready to restart, the integrity team has a defensible FFS-ready evidence pack for every flagged component. Operators report 40&ndash;60% reduction in post-storm restart inspection time using this workflow versus the spreadsheet method it replaces.</p>

                    <h3>Turnaround scope optimisation</h3>
                    <p>A Houston refinery turnaround scope decision moves millions of dollars in either direction. The Atlantis turnaround scoping module pulls together every overdue CML, every elevated RBI risk component, every FFS that flagged &lsquo;requires further evaluation,&rsquo; every weld pending re-inspection, and every API 581-driven recommendation, then ranks them by combined consequence-and-probability into a defensible scope list. Houston refineries report 15&ndash;25% reduction in turnaround inspection labour cost from better scoping alone &mdash; on a $40&ndash;$120M Gulf Coast refinery turnaround, that is $6&ndash;$30M per event.</p>

                    <h2>ROI math for a typical Houston-area refinery</h2>
                    <p>For a representative Houston Ship Channel refinery (~200,000&ndash;600,000 bpd, 8&ndash;12 process units, 50,000&ndash;200,000 CMLs site-wide), Atlantis Digital Twin enterprise tier (affordable, accessible, fully customizable SaaS &mdash; quote on request) pays back through:</p>
                    <ul>
                        <li><strong>Turnaround scope reduction:</strong> 15&ndash;25% on $40&ndash;$120M turnaround scope = $6&ndash;$30M every 4&ndash;5 years &asymp; $1.5&ndash;$6M/yr averaged.</li>
                        <li><strong>Unplanned downtime avoided:</strong> One avoided unit trip from early CUI detection saves $5&ndash;$15M in lost margin (Houston refining margins are $10&ndash;$25/bbl &times; 100&ndash;400K bpd unit &times; 5&ndash;14 days outage).</li>
                        <li><strong>Hurricane restart acceleration:</strong> 40&ndash;60% reduction in post-storm restart inspection time = $2&ndash;$8M per major storm event.</li>
                        <li><strong>Inspection labor savings:</strong> 10&ndash;20% reduction in routine inspection hours = $400K&ndash;$1.5M/yr.</li>
                    </ul>
                    <p>Net: $2.5M&ndash;$8M/yr in measurable value on an affordable, accessible, fully customizable Atlantis SaaS platform &mdash; quote on request. Payback in &lt;6 months for a typical mid-sized Houston refinery.</p>

                    <h2>The Houston engineering and inspection ecosystem</h2>
                    <p>Atlantis is contractor-agnostic. Houston-area integrators and inspection vendors regularly using the platform include Acuren (a Rockwood acquisition), Mistras Group (Princeton-headquartered but Houston-heavy), Applus+ RTD, Team Inc (Houston-headquartered), IRISNDT, Stork (a Fluor company), Plant Performance Services (P2S), Versa Integrity, and the in-house inspection departments at the majors. Engineering firms doing FFS and RBI work in the Houston market &mdash; Becht Engineering, E2G/The Equity Engineering Group, Stress Engineering Services, Trinity Engineering &mdash; integrate via the Atlantis REST API for submittal review and the FFS calculation cross-check.</p>

                    <h2>Regulatory context for Houston refining</h2>
                    <p>TCEQ (Texas Commission on Environmental Quality) governs air emissions and process safety reporting at the state level. TRRC (Texas Railroad Commission) covers pipelines feeding the refineries. At the federal level, OSHA PSM and EPA RMP set the process safety baseline, and API 510/570/653 + API 580/581 set the inspection and integrity standard. The Atlantis audit pack module generates regulator-ready evidence bundles for any of these regimes in &lt;30 seconds from the digital twin data repository.</p>

                    <h2>Implementation path for a Houston refinery</h2>
                    <p>First process unit live in 10&ndash;14 weeks: 2 weeks of asset model import from existing IDMS (Antea / Meridium / GE APM), 4 weeks of integration build to AVEVA PI / SAP PM / Maximo, 4 weeks of inspection data backfill and FFS/RBI tuning, 2&ndash;3 weeks of inspector and engineer training. Subsequent process units typically 4&ndash;6 weeks each. A full refinery (8&ndash;12 process units) typically reaches last-unit-live within 12&ndash;18 months of first kickoff. Most Houston operators deploy unit-by-unit rather than big-bang &mdash; this preserves integrity team capacity and lets the platform earn trust before it becomes the system of record.</p>
                </>
            }
        />
    );
}
