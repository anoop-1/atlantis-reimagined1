import ProductPageLayout from "@/components/ProductPageLayout";
import UsecaseDeepDive from "@/components/UsecaseDeepDive";

const compareRows = [
    { factor: "Asset count (typical FPSO)", atlantis: "800–2,500 fixed-equipment items + 200–600 piping circuits + hull structure", competitor: "—" },
    { factor: "Primary failure modes", atlantis: "Topsides corrosion, marine-environment CUI, hull steel wastage, splash-zone corrosion, mooring fatigue, sour service in produced fluids", competitor: "—" },
    { factor: "Code references", atlantis: "API 510/570, API 579, API 581, DNV-OS-C101 (hull), ABS / DNV / LR class rules, NACE SP0102", competitor: "—" },
    { factor: "Inspection access challenges", atlantis: "Confined space entry, hot work restrictions, planned class survey windows, drone + crawler inspection where access permits", competitor: "—" },
    { factor: "Class survey regime", atlantis: "5-year cycle with intermediate; Atlantis aligns inspection scope to class survey requirements", competitor: "—" },
    { factor: "Atlantis ROI typical", atlantis: "$2M–$8M/yr through avoided unplanned shutdown + class survey efficiency + reduced rework", competitor: "—" },
    { factor: "Implementation", atlantis: "12–16 weeks for first FPSO live", competitor: "—" },
];

const faqs = [
    { question: "Why is FPSO integrity different from a land refinery?", answer: "Three big differences. (1) Marine environment — splash zone, salt spray, and seawater immersion drive CUI and external corrosion much harder than land. (2) Inspection access — turnarounds are rare, confined space entry is restrictive, hot work permits are scarce, and the asset is moving (vessel motion under sea state affects PAUT couplant performance). (3) Class survey regime — ABS / DNV / LR class rules drive a 5-year survey cycle that Atlantis aligns inspection scope to, so the integrity workflow doesn&rsquo;t fight the class survey workflow." },
    { question: "How does Atlantis handle hull integrity?", answer: "Hull steel wastage is tracked with the same CML thickness workflow as topsides equipment but with hull-specific data structures: shell plate identification by frame and longitudinal, stiffener thickness records, ballast tank corrosion grading per IACS guidelines, splash-zone segmentation, and class survey requirement mapping. PEC (pulsed eddy current) and conventional UT thickness scans both archive natively. The 3D hull model overlays wastage hot-spots so naval architects and class surveyors can review at a glance." },
    { question: "What about mooring system integrity?", answer: "Mooring chains, wire ropes, and connectors are tracked as separate equipment classes with fatigue-driven inspection planning. Inspection events from ROV surveys (typically annual) and class surveys (typically 5-yearly) feed into the asset record. Fatigue accumulation is calculated from environmental load history — wave height, current, vessel motion — pulled from the platform&rsquo;s metocean data feed where available. Mooring failure consequence is severe so the RBI scoring weights it heavily." },
    { question: "Class survey integration?", answer: "Atlantis aligns to ABS, DNV, and LR class survey workflow. Class-required inspections appear as scheduled events in the asset calendar with the relevant class rule reference. Survey reports import as inspection events; surveyor recommendations flow into the action register. Most operators report 20–35% reduction in class survey preparation effort because the data is already structured and current." },
    { question: "What about the splash zone and ballast tanks specifically?", answer: "Splash zone is the highest-corrosion-rate area on the hull and gets dedicated treatment in Atlantis: segmented shell plate records, coating breakdown tracking, anode wastage records, ICCP system performance logging. Ballast tanks are tracked per IACS Common Structural Rules with grading scales (Good / Fair / Poor) for coating condition and a separate steel wastage record. Both areas drive most of the hull integrity workload and are central to the next class survey." },
];

export default function FpsoUseCase() {
    const structuredData = {
        "@context": "https://schema.org",
        "@graph": [
            { "@type": "Article", "headline": "Atlantis Digital Twin for FPSOs: Topsides + Hull + Mooring Integrity [2026]", "datePublished": "2026-05-09", "dateModified": "2026-05-09", "author": { "@type": "Person", "name": "Anoop Rayavarapu" }, "publisher": { "@type": "Organization", "name": "Atlantis NDT" }, "mainEntityOfPage": { "@type": "WebPage", "@id": "https://atlantisndt.com/digital-twins/fpso" } },
            { "@type": "FAQPage", "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } })) }
        ]
    };
    return (
        <ProductPageLayout
            title="Atlantis Digital Twin for FPSOs: Topsides + Hull + Mooring Integrity [2026]"
            description="FPSO digital twin: topsides equipment, hull steel wastage, splash zone, ballast tanks, mooring fatigue, class survey alignment (ABS/DNV/LR). 12-16 wk deploy, $2M-$8M/yr ROI."
            canonical="https://atlantisndt.com/digital-twins/fpso"
            eyebrow="Use Case"
            h1="Atlantis Digital Twin for FPSOs: Topsides + Hull + Mooring Integrity in One Twin [2026]"
            intro="A typical FPSO carries 800–2,500 topsides equipment items, hundreds of piping circuits, plus the hull, ballast tanks, splash zone, and mooring system. Atlantis Digital Twin manages the full integrity workflow aligned to ABS / DNV / LR class survey requirements."
            heroGradient="from-blue-700 to-cyan-800"
            competitorLabel="FPSO Specifics"
            compareRows={compareRows}
            faqs={faqs}
            related={[
                { href: "/digital-twins/offshore-platform", title: "Offshore Platform", blurb: "Adjacent use case — fixed offshore platform integrity." },
                { href: "/digital-twins/subsea", title: "Subsea Equipment", blurb: "Subsea wellhead, manifold, and flowline integrity." },
                { href: "/digital-twins/refinery", title: "Refinery", blurb: "Onshore equivalent for the topsides process workflow." },
                { href: "/digital-twins", title: "Atlantis Digital Twin", blurb: "Product page — features, pricing, case studies." },
                { href: "/integrations/sap-pm", title: "SAP PM Integration", blurb: "How Atlantis fits with FPSO operator SAP / Oracle landscape." },
                { href: "/contact", title: "Book an FPSO Demo", blurb: "Bring a topsides asset list and one hull plate inspection report. We&rsquo;ll show your FPSO in 30 minutes." },
            ]}
            ctaTitle="See Your FPSO as a Live Integrity Twin"
            ctaSubtitle="Topsides + hull + mooring + class survey alignment in one platform. Bring a sample data set, leave with a working twin demo."
            structuredData={structuredData}
            bodyChildren={
                <>
                    <h2>FPSO integrity is the hardest integrity workload in oil &amp; gas</h2>
                    <p>An FPSO combines the complexity of a refinery topsides with the corrosion environment of a marine asset and the constraints of a remote, motion-affected, access-restricted operating site. Inspection windows are scarce — there is no &lsquo;turnaround&rsquo; in the refinery sense. Hot work permits are tightly controlled. Confined space entries are infrequent. Class survey requirements (ABS, DNV, LR) drive a 5-year survey cycle plus intermediate surveys that the integrity workflow has to align to. The result: every inspection has to count, every data point has to be captured cleanly, and the integrity engineering has to be defensible to both the operator&rsquo;s integrity authority and the class society.</p>

                    <h2>What Atlantis does specifically for FPSOs</h2>
                    <h3>Topsides</h3>
                    <p>Same workflow as a refinery — CMLs, FFS, RBI, weld registers, NDT scan archive — calibrated for marine-environment damage mechanisms (CUI is much more aggressive offshore due to salt-laden insulation, salt-spray-driven external corrosion, and produced-water sour-service mechanisms). API 571 damage mechanism templates pre-loaded for marine topsides.</p>

                    <h3>Hull and ballast tanks</h3>
                    <p>Hull steel wastage tracked with hull-specific data structures: shell plate identification by frame and longitudinal, stiffener thickness records, ballast tank corrosion grading per IACS Common Structural Rules (Good / Fair / Poor), splash zone segmentation, coating breakdown tracking, anode and ICCP performance logging. The 3D hull model overlays wastage hot-spots and remaining-life estimates so naval architects and class surveyors can review the asset at a glance.</p>

                    <h3>Mooring system</h3>
                    <p>Mooring chains, wire ropes, and connectors tracked as separate equipment classes with fatigue-driven inspection planning. ROV survey results (typically annual), class survey results (typically 5-yearly), and ongoing fatigue accumulation calculated from environmental load history feed the records. Mooring failure consequence is severe — RBI scoring weights it heavily.</p>

                    <h3>Class survey alignment</h3>
                    <p>Atlantis aligns to ABS, DNV, and LR class survey workflow. Class-required inspections appear as scheduled events in the asset calendar with the relevant class rule reference. Survey reports import as inspection events; surveyor recommendations flow into the action register. Most operators report 20–35% reduction in class survey preparation effort because the data is already structured and current rather than scrambled together in the months before the surveyor arrives.</p>

                    <h2>Inspection access realities</h2>
                    <p>FPSO inspection access is a constraint on every workflow. Atlantis surfaces the access status on every asset record (accessible, scaffold required, hot work required, confined space entry required, class survey alignment required) so inspection planners can build realistic campaigns. Drone and crawler-based inspection results — common for hull plate above-water inspection and for confined-space access — import natively with structured location tagging.</p>

                    <h2>ROI for a typical FPSO deployment</h2>
                    <ul>
                        <li><strong>Avoided unplanned shutdown:</strong> 1–2 events/year averted at $1M–$5M each = $1M–$10M/yr value range, settling at $2M–$5M/yr typical.</li>
                        <li><strong>Class survey efficiency:</strong> 20–35% preparation effort reduction over the 5-year cycle, valued at $300K–$1M per cycle.</li>
                        <li><strong>Inspection labor optimization:</strong> Better scoping of the constrained inspection windows = 10–20% labor efficiency on a $1.5M–$4M/yr inspection budget.</li>
                        <li><strong>Mooring failure prevention:</strong> A single mooring failure event can be $50M+ — even a small probability reduction has large expected-value impact.</li>
                    </ul>
                    <p>Net: $2M&ndash;$8M/yr in measurable value on an affordable, accessible, fully customizable Atlantis SaaS platform &mdash; quote on request. Class society engagement during deployment is recommended &mdash; most class societies recognize Atlantis-style integrity twins as evidence of strong integrity management, which can affect insurance and class fee discussions.</p>

                    <h2>Implementation path</h2>
                    <p>First FPSO live in 12–16 weeks. Slightly longer than a refinery process unit because of the hull / ballast tank / mooring scope and the class survey alignment work. Second and third FPSOs in a fleet typically 6–8 weeks each. Implementation runs offshore where access permits and remote where it doesn&rsquo;t — most setup and configuration is done remotely.</p>
                <UsecaseDeepDive slug="fpso" />
                </>
            }
        />
    );
}
