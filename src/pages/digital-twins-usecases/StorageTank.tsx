import ProductPageLayout from "@/components/ProductPageLayout";
import UsecaseDeepDive from "@/components/UsecaseDeepDive";

const compareRows = [
    { factor: "Asset count (typical tank farm)", atlantis: "20–200 tanks per terminal", competitor: "—" },
    { factor: "Primary failure modes", atlantis: "Floor underside corrosion, shell external corrosion, settlement, weld defects, roof corrosion, fire-side risks", competitor: "—" },
    { factor: "Code references", atlantis: "API 653 (in-service), API 650 (new construction), API 575 (lubricating oil), API 651 / 652 (cathodic protection / lining), STI SP001 (small tanks)", competitor: "—" },
    { factor: "NDT methods deployed", atlantis: "MFL floor scanning, UT shell thickness, MT/PT weld inspection, settlement survey, video boroscopy", competitor: "—" },
    { factor: "Inspection cycle", atlantis: "Internal 10/20 yr per API 653, external visual 5 yr, UT thickness 5 yr", competitor: "—" },
    { factor: "Atlantis ROI typical", atlantis: "$300K–$1.5M/yr per tank farm through avoided leak events + inspection efficiency", competitor: "—" },
    { factor: "Implementation", atlantis: "8–10 weeks for first tank farm live", competitor: "—" },
];

const faqs = [
    { question: "What does Atlantis Digital Twin do for storage tank integrity that an API 653 inspection report doesn&rsquo;t?", answer: "An API 653 inspection report is a snapshot — the integrity status on the day of inspection. Atlantis maintains the asset state continuously between inspections: floor scan results plotted on the floor map with remaining-life predictions, shell thickness CMLs with corrosion rate trends, weld register with re-inspection scheduling, settlement readings overlaid on the foundation, cathodic protection performance logged. The 3D twin shows the live state and the next API 653 inspection is dramatically less effort because the data is already structured and current — rather than re-discovering the asset from scratch every 10 years." },
    { question: "How does MFL floor scan data import?", answer: "Magnetic Flux Leakage (MFL) floor scans from major tools (Silverwing, Innospection, Eddyfi) import natively as structured grid data — coordinates, signal amplitude, defect classification (top side, bottom side, no defect). Atlantis renders the MFL result as a heat-map overlay on the floor map with integrated UT confirmation drilling. Floor remaining-thickness is tracked plate by plate with corrosion-rate trending over multiple inspection cycles." },
    { question: "What about settlement?", answer: "Tank shell settlement is measured by survey at every external API 653 inspection and at intervals between inspections per API 653 Annex B. Atlantis stores settlement readings as a circumferential profile, calculates differential settlement between adjacent points, applies the API 653 acceptance criteria, and flags any exceedance. The 3D twin overlays the settlement profile on the foundation so anomalies are visible at a glance. Trend analysis across multiple inspection cycles drives long-term settlement projections." },
    { question: "Can the twin handle tank farms with mixed product service?", answer: "Yes. Tanks in mixed service (different products, sour vs sweet, hot vs ambient, fixed vs floating roof) get different damage mechanism templates and different RBI scoring. Atlantis ships templates for crude oil tanks, refined product tanks, sour water tanks, asphalt tanks, sulfuric acid tanks, caustic tanks, and the major specialty services. Damage mechanism libraries follow API 571 with terminal-specific calibration based on past inspection findings." },
    { question: "Cathodic protection integration?", answer: "Yes. CP system performance — rectifier output, anode wastage, structure-to-electrolyte potentials — logs into Atlantis from the CP monitoring system (where automated CP monitoring exists) or via manual entry from periodic survey. Underprotection or anode depletion drives floor underside corrosion risk in the RBI scoring. The 3D twin overlays CP coverage status on the tank exterior so integrity engineers see the protection state at a glance." },
];

export default function StorageTankUseCase() {
    const structuredData = {
        "@context": "https://schema.org",
        "@graph": [
            { "@type": "Article", "headline": "Atlantis Digital Twin for Storage Tanks: API 653 Integrity, MFL Floor Scans [2026]", "datePublished": "2026-05-09", "dateModified": "2026-05-09", "author": { "@type": "Person", "name": "Anoop Rayavarapu" }, "publisher": { "@type": "Organization", "name": "Atlantis NDT" }, "mainEntityOfPage": { "@type": "WebPage", "@id": "https://atlantisndt.com/digital-twins/storage-tank" } },
            { "@type": "FAQPage", "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } })) }
        ]
    };
    return (
        <ProductPageLayout
            title="Atlantis Digital Twin for Storage Tanks: API 653, MFL, Settlement, CP [2026]"
            description="Storage tank digital twin: API 653 inspection workflow, MFL floor scans, shell CML thickness, settlement profile, cathodic protection. $300K-$1.5M/yr ROI per tank farm."
            canonical="https://atlantisndt.com/digital-twins/storage-tank"
            eyebrow="Use Case"
            h1="Atlantis Digital Twin for Storage Tanks: API 653 Workflow, MFL Floor Scans, Settlement &amp; CP [2026]"
            intro="Tank farms typically run 20–200 tanks per terminal. Atlantis Digital Twin manages the full API 653 inspection workflow with MFL floor scan import, shell CML thickness trending, settlement profile analysis, and cathodic protection logging — with a 3D twin per tank."
            heroGradient="from-orange-700 to-amber-800"
            competitorLabel="Tank Farm Specifics"
            compareRows={compareRows}
            faqs={faqs}
            related={[
                { href: "/digital-twins/refinery", title: "Refinery", blurb: "Adjacent use case — process unit integrity." },
                { href: "/digital-twins/pipeline", title: "Pipeline", blurb: "Mid-stream integrity for the connected pipeline network." },
                { href: "/digital-twins/petrochemical-complex", title: "Petrochemical Complex", blurb: "Mixed product / mixed service environment." },
                { href: "/digital-twins", title: "Atlantis Digital Twin", blurb: "Product page — features, pricing, case studies." },
                { href: "/api-653-certification", title: "API 653 Certification", blurb: "The inspector certification underpinning the workflow." },
                { href: "/contact", title: "Book a Tank Farm Demo", blurb: "Bring one tank&rsquo;s API 653 report and floor scan. We&rsquo;ll show your tank as a twin in 30 minutes." },
            ]}
            ctaTitle="See Your Tank Farm as a Live Integrity Twin"
            ctaSubtitle="Bring one API 653 report and one MFL floor scan. We&rsquo;ll have it running as an Atlantis twin in a 30-minute demo."
            structuredData={structuredData}
            bodyChildren={
                <>
                    <h2>Why storage tanks deserve a dedicated digital twin workflow</h2>
                    <p>Above-ground storage tanks are simple in geometry and complex in integrity. The dominant failure modes — floor underside corrosion (invisible until catastrophic), shell external corrosion, weld defects, settlement, and roof structure — combine episodic high-cost inspection events (every 10 years internal per API 653) with consequential failure modes (release events, environmental exposure, fire and explosion risk). The operating economics push integrity to the edge: tanks are usually full and tied to operating volume, so taking one out of service is expensive and requires planning months in advance.</p>

                    <h2>Atlantis workflow per tank</h2>
                    <h3>Floor integrity</h3>
                    <p>MFL (Magnetic Flux Leakage) floor scan results from major tools — Silverwing Floormap, Innospection MFL, Eddyfi MFL/PEC tools — import natively as structured grid data. The Atlantis floor map overlays MFL signal amplitude, defect classification (top vs bottom side), and integrated UT confirmation drill points. Floor remaining-thickness is tracked plate by plate. Cathodic protection performance — rectifier output, anode wastage, structure-to-electrolyte potentials — logs against the floor underside risk model.</p>

                    <h3>Shell integrity</h3>
                    <p>Shell CML grid follows API 653 spacing (typically 1 reading per ring × cardinal direction). Corrosion rate calculated from successive inspections; t-min and remaining life calculated per API 653 Section 4. The 3D shell visualization color-codes thickness state — green / yellow / red — with click-through to the full thickness history.</p>

                    <h3>Weld register</h3>
                    <p>Shell-to-shell, shell-to-floor, and roof welds tracked individually. NDT method, acceptance status, repair history, and re-inspection schedule maintained per weld. Field repair welds get specific tracking with full PQR/WPS reference.</p>

                    <h3>Settlement</h3>
                    <p>Circumferential settlement profile measured at each external API 653 inspection. Atlantis stores readings, calculates differential settlement between adjacent points, applies API 653 Annex B acceptance criteria, and trends over multiple inspection cycles. Anomalies flag automatically.</p>

                    <h3>Roof integrity</h3>
                    <p>Fixed roof and floating roof tracked separately. Floating roof seal condition, pontoon integrity, drainage performance logged. Fixed roof structural members and rafters thickness-tracked. Vapor space corrosion (sulfur tank crown corrosion is a classic failure mode) gets its own damage mechanism template.</p>

                    <h2>API 653 inspection cycle alignment</h2>
                    <p>Atlantis aligns to API 653 inspection intervals — internal at 10 or 20 years (RBI-driven), external visual at 5 years, UT thickness at 5 years. Calendar shows every tank&rsquo;s next-due dates. Inspection scope for each tank pre-populates from the historical record so the inspector arrives knowing exactly what to look at and what to compare against. Most terminals report 30–50% reduction in inspection report production time because the data goes straight from capture into the structured record rather than into a Word document.</p>

                    <h2>ROI for a typical tank farm deployment</h2>
                    <ul>
                        <li><strong>Avoided release events:</strong> A single floor leak event in a refinery tank farm can be $5M–$50M in clean-up, lost product, and regulatory exposure. Even a small probability reduction has large expected-value impact.</li>
                        <li><strong>Inspection efficiency:</strong> 30–50% reduction in inspection report production time on a $300K–$1M/yr inspection budget = $90K–$500K/yr.</li>
                        <li><strong>API 653 internal scope optimization:</strong> Better-justified scope of work = avoided rework and better contractor pricing on the actual scope.</li>
                        <li><strong>Insurance and regulatory:</strong> Defensible integrity program is increasingly important for tank farm insurance discussions.</li>
                    </ul>
                    <p>Net: $300K&ndash;$1.5M/yr in measurable value per tank farm on an affordable, accessible, fully customizable Atlantis SaaS platform &mdash; quote on request.</p>
                <UsecaseDeepDive slug="storage-tank" />
                </>
            }
        />
    );
}
