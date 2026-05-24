import ProductPageLayout from "@/components/ProductPageLayout";

const compareRows = [
    { factor: "Rotterdam-area refineries served", atlantis: "Shell Pernis (largest refinery in Europe), ExxonMobil Rotterdam, BP Rotterdam, Vitol Botlek, Gunvor Europoort, plus the integrated petrochemical cluster (Shell Moerdijk, INEOS, LyondellBasell Maasvlakte, Dow Terneuzen)", competitor: "—" },
    { factor: "Combined nameplate capacity", atlantis: "~1.0 million bpd refining capacity in the Rotterdam-Antwerp-Amsterdam (ARA) corridor &mdash; Europe&rsquo;s largest refining cluster", competitor: "—" },
    { factor: "Damage mechanism profile", atlantis: "North Sea marine CUI, sour service from Russian Urals (historically) / West African / North Sea / US Bakken crudes, HTHA on hydrocracker / reformer, low-temperature brittle fracture for North Sea winter service", competitor: "—" },
    { factor: "Regulatory regime", atlantis: "PED (Pressure Equipment Directive 2014/68/EU), ATEX, Seveso III, Dutch DCMR Milieudienst Rijnmond, Stoomwezen / NoBo certification, EN 13445 + EN 13480 inspection codes alongside API 510/570", competitor: "—" },
    { factor: "ROI typical (Rotterdam refinery)", atlantis: "$3M&ndash;$10M/yr &mdash; driven by PED-compliant FFS submittals, EU ETS allowance management via reduced flaring, and CUI program maturity", competitor: "—" },
    { factor: "Implementation", atlantis: "10&ndash;14 weeks first process unit live; 4&ndash;6 weeks per subsequent unit; PED audit pack module ships ready-to-submit", competitor: "—" },
];

const faqs = [
    { question: "Which Rotterdam-area refineries are the strongest digital twin candidates?", answer: "Shell Pernis (~404,000 bpd) is the largest refinery in Europe and the canonical candidate &mdash; a deeply integrated refining + petrochemical complex with hydrocracker, FCC, residue conversion, and the adjacent Shell Moerdijk petrochemical site. ExxonMobil Rotterdam (~191,000 bpd) is a deep-conversion refinery integrated with the Rotterdam Aromatics Plant. BP Rotterdam (~377,000 bpd) is one of BP&rsquo;s largest European refineries with significant hydroprocessing and lube manufacturing. Vitol&rsquo;s Botlek facility, Gunvor&rsquo;s Europoort refinery, and the wider Antwerp cluster (Total Antwerp, ExxonMobil Antwerp, Borealis, INEOS) round out the immediate Rotterdam-Antwerp catchment. All run the integrated refinery-petrochemical model that the Atlantis platform is well-suited to." },
    { question: "How does PED (Pressure Equipment Directive) change the inspection workflow vs API 510/570?", answer: "PED 2014/68/EU is the European equivalent of the US ASME Section VIII / API 510 vessel and ASME B31.3 / API 570 piping regime, but with important differences. PED requires Notified Body (NoBo) certification during construction (Stoomwezen, TUV, Lloyd&rsquo;s Register, Bureau Veritas), and in-service inspection cadence is set by Dutch (or Belgian / German / French) competent authorities rather than US-style API recommended practice. EN 13445 (unfired pressure vessels) and EN 13480 (industrial piping) define the inspection methodology. Atlantis ships the PED + EN 13445/13480 audit-pack template alongside the API 510/570/653 templates, so refineries running mixed-code regimes (typical for European refineries also exporting product to the US or Asia) maintain both audit trails in the same twin." },
    { question: "What about the Russian Urals supply transition?", answer: "The European refining industry&rsquo;s decade-long reliance on Russian Urals crude ended sharply in 2022. Rotterdam-area refineries have since restructured their crude diets toward US WTI / Bakken, West African (Nigerian Bonny Light, Angolan), Middle Eastern (Saudi Arab Light/Medium), Norwegian Johan Sverdrup, and Guyanese Liza. Every crude swap re-ranks the sour service and naphthenic acid corrosion risk profile across the refinery. Atlantis API 571 damage-mechanism templates plus the API 581 RBI engine recalculate component risk scores within hours of a crude swap reflected in the AVEVA PI / Yokogawa Exaquantum historian." },
    { question: "How does Rotterdam fit into the European EU ETS / CBAM regulatory regime?", answer: "Rotterdam refineries are subject to the EU Emissions Trading System (ETS) Phase IV, which has tightened free allowance allocation significantly. The Carbon Border Adjustment Mechanism (CBAM) is now affecting downstream exports to non-EU markets. Atlantis Digital Twin contributes to ETS / CBAM compliance indirectly: better integrity tracking reduces unplanned shutdowns and associated flaring (a measurable ETS allowance savings), and the integrated CUI program reduces methane emissions from corrosion-driven leaks. Operators with mature digital-twin-backed integrity programs see measurable reductions in ETS allowance consumption per ton of throughput." },
    { question: "What about the integration with European inspection contractors and engineering firms?", answer: "Rotterdam-area inspection contractors integrating with Atlantis include Applus+ RTD (a Dutch heritage company, now part of Applus+), Stork (a Fluor company, Dutch-headquartered), Bilfinger Industrial Services, Sonomatic, Mistras Group Netherlands, Vinci Energies, Mott MacDonald, Vroon Group, and the in-house departments at Shell, ExxonMobil, and BP. European engineering firms doing FFS and RBI work in the ARA corridor &mdash; DNV, KIWA, Lloyd&rsquo;s Register, ROSEN Europe, ENGIE Laborelec, Tractebel, Fluor Netherlands &mdash; integrate via the Atlantis REST API for FFS submittal review under PED requirements." },
];

export default function RefineryRotterdamCombo() {
    const structuredData = {
        "@context": "https://schema.org",
        "@graph": [
            { "@type": "Article", "headline": "Digital Twin for Rotterdam Refineries: Shell Pernis, ExxonMobil, BP [2026]", "datePublished": "2026-05-25", "dateModified": "2026-05-25", "author": { "@type": "Person", "name": "Anoop Rayavarapu" }, "publisher": { "@type": "Organization", "name": "Atlantis NDT" }, "mainEntityOfPage": { "@type": "WebPage", "@id": "https://atlantisndt.com/digital-twins/refinery-rotterdam" } },
            { "@type": "FAQPage", "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } })) }
        ]
    };
    return (
        <ProductPageLayout
            title="Digital Twin for Rotterdam Refineries: Shell Pernis, ExxonMobil, BP [2026]"
            description="Rotterdam refinery digital twin: PED + EN 13445/13480 + API 510/570 dual-code integrity, North Sea CUI, post-Urals crude diet RBI, EU ETS allowance optimisation. ROI $3M-$10M/yr per refinery."
            canonical="https://atlantisndt.com/digital-twins/refinery-rotterdam"
            eyebrow="Use Case · Location"
            h1="Atlantis Digital Twin for Rotterdam Refineries: PED-Compliant Integrity for Europe&rsquo;s Refining Hub [2026]"
            intro="The Rotterdam-Antwerp-Amsterdam (ARA) corridor runs ~1.0 million bpd of refining capacity &mdash; Europe&rsquo;s largest refining cluster. Atlantis Digital Twin handles PED 2014/68/EU + EN 13445/13480 + API 510/570 dual-code integrity for Shell Pernis, ExxonMobil Rotterdam, BP Rotterdam, Vitol Botlek, and Gunvor Europoort, with post-Russian-Urals crude diet RBI and EU ETS allowance optimisation built into the workflow."
            heroGradient="from-blue-700 to-cyan-800"
            competitorLabel="Rotterdam Specifics"
            compareRows={compareRows}
            faqs={faqs}
            related={[
                { href: "/digital-twins/refinery", title: "Refinery Use Case", blurb: "Asset-class deep-dive." },
                { href: "/digital-twin-rotterdam", title: "Rotterdam (Location)", blurb: "Full city DT coverage page." },
                { href: "/digital-twin-netherlands", title: "Netherlands Country Coverage", blurb: "Dutch DT programmes." },
                { href: "/digital-twins/petrochemical-complex", title: "Petrochemical Complex", blurb: "Adjacent use case for the integrated cluster." },
                { href: "/contact", title: "Book a Rotterdam Demo", blurb: "Bring a process unit&rsquo;s PED inspection record. 30-minute demo." },
            ]}
            ctaTitle="See Your Rotterdam Refinery as a Live PED-Compliant Twin"
            ctaSubtitle="Bring one process unit&rsquo;s asset list and a sample EN 13445 / Stoomwezen inspection record. We&rsquo;ll have it running as an Atlantis twin in a 30-minute demo."
            structuredData={structuredData}
            bodyChildren={
                <>
                    <h2>Why Rotterdam refining is a high-leverage digital twin region</h2>
                    <p>The Port of Rotterdam handles more crude and product than any other port in Europe. Within the immediate Rotterdam-Antwerp-Amsterdam (ARA) corridor sits ~1.0 million bpd of refining capacity across five major refineries and the integrated petrochemical cluster: Shell Pernis (~404,000 bpd, Europe&rsquo;s largest), ExxonMobil Rotterdam (~191,000 bpd), BP Rotterdam (~377,000 bpd), Vitol Botlek, Gunvor Europoort, plus the directly-integrated petrochemical sites (Shell Moerdijk, INEOS Geel/Antwerp, LyondellBasell Maasvlakte, Dow Terneuzen, BASF Antwerp). This cluster is one of the most regulated and code-dense refining environments in the world &mdash; PED 2014/68/EU plus EN 13445 / 13480, ATEX, Seveso III, EU ETS Phase IV, plus the Dutch DCMR Milieudienst Rijnmond authority. Every operator runs a defensible inspection programme, and digital twin maturity has been climbing steadily as the regulatory burden has tightened.</p>

                    <h2>The Rotterdam damage-mechanism stack</h2>
                    <ul>
                        <li><strong>North Sea marine CUI.</strong> Rotterdam refineries sit on the Maas estuary, with salt-laden marine air driving CUI on insulated piping and storage tanks at rates somewhere between US Gulf Coast and inland European refineries.</li>
                        <li><strong>Post-Urals sour service variability.</strong> The crude diet has restructured dramatically since 2022. Each new sourcing pattern &mdash; US WTI/Bakken, West African Bonny Light/Angolan, Middle East Saudi Arab Light/Medium, Norwegian Johan Sverdrup, Guyanese Liza &mdash; brings a different sour-service / TAN / nitrogen / mercaptan profile.</li>
                        <li><strong>HTHA on hydrocracker / reformer / hydroprocessing.</strong> European refineries run high-severity hydrocracking for low-sulfur diesel; HTHA screening per API 941 Nelson Curve is core to the inspection plan.</li>
                        <li><strong>Low-temperature brittle fracture risk.</strong> North Sea winter ambient temperatures can drop to -10&deg;C and below, which raises the brittle-fracture screening bar per API 579 Part 3 for cold-service equipment.</li>
                        <li><strong>Sulfidation in residue and FCC service.</strong> The wider Rotterdam cluster has substantial residue conversion and FCC capacity; sulfidation per API 571 is a core damage mechanism.</li>
                    </ul>

                    <h2>PED + EN 13445/13480 + API 510/570 dual-code workflow</h2>
                    <p>The defining feature of European refinery integrity is dual-code operation. PED 2014/68/EU governs construction certification and basic in-service inspection cadence, with EN 13445 (unfired pressure vessels) and EN 13480 (industrial piping) defining methodology. For exports to non-EU markets and for global API 510/570 alignment, refineries also maintain API-equivalent inspection records. Atlantis ships dual-code audit pack templates &mdash; the same CML thickness reading or PAUT scan generates a PED-compliant inspection record AND an API 510-equivalent record from the same data, with NoBo (Notified Body) certification metadata captured automatically. Stoomwezen (now Kiwa Stoomwezen), TUV Rheinland, Lloyd&rsquo;s Register, Bureau Veritas, and DNV all integrate as third-party inspection authorities via the Atlantis REST API.</p>

                    <h2>EU ETS Phase IV and CBAM integration</h2>
                    <p>Rotterdam refineries are deep in EU Emissions Trading System (ETS) Phase IV compliance, with sharply reduced free allowance allocation through 2030. Better integrity tracking contributes to ETS compliance in two ways. First, fewer unplanned shutdowns mean less startup-related flaring and less product-quality giveaway during transient operation &mdash; a measurable ETS allowance saving. Second, a mature CUI programme reduces methane emissions from corrosion-driven leaks, which feeds into the broader Methane Emissions Regulation (Regulation 2024/1787). Atlantis tracks downtime events and corrosion-driven leak events in the digital twin, enabling defensible ETS / methane regulation reporting from the same data repository.</p>

                    <h2>Post-Urals crude diet RBI</h2>
                    <p>The crude-supply restructure since 2022 has been the most significant European refining event in a generation. Atlantis API 581 RBI engine recalculates component risk scores whenever crude composition tags from the historian change. A Shell Pernis switch from Urals to a Guyana Liza / US WTI blend, for example, lowers sulfur and raises API gravity &mdash; reducing sour-service risk on most components but potentially raising naphthenic acid risk on residue service if TAN increases. The RBI engine surfaces the re-ranking automatically; integrity engineers don&rsquo;t need to recalculate manually.</p>

                    <h2>ROI math for a typical Rotterdam refinery</h2>
                    <p>For a representative Rotterdam refinery (~200,000&ndash;400,000 bpd, 8&ndash;12 process units, 40,000&ndash;120,000 CMLs site-wide), Atlantis Digital Twin enterprise tier ($200K/yr) typically pays back through:</p>
                    <ul>
                        <li><strong>Turnaround scope reduction:</strong> 15&ndash;25% on $30&ndash;$80M turnaround = $4.5&ndash;$20M every 4&ndash;5 years &asymp; $1&ndash;$4.5M/yr averaged.</li>
                        <li><strong>EU ETS allowance savings:</strong> Reduced unplanned shutdown flaring + reduced fugitive methane emissions = $500K&ndash;$2M/yr in avoided ETS allowance purchases.</li>
                        <li><strong>PED FFS submittal efficiency:</strong> Defensible FFS evidence supporting NoBo inspection-interval extension saves $300K&ndash;$1M/yr in premature replacement and inspection labour.</li>
                        <li><strong>Unplanned downtime avoided:</strong> One avoided unit trip from early CUI / HTHA detection = $3&ndash;$10M in lost margin (European refining margins are leaner than US Gulf Coast but unit sizes are comparable).</li>
                    </ul>
                    <p>Net: $3M&ndash;$10M/yr in measurable value per refinery at $200K/yr platform cost. Payback well inside 12 months.</p>

                    <h2>Implementation in the Rotterdam ecosystem</h2>
                    <p>First process unit live in 10&ndash;14 weeks. Integration with existing tools (SAP PM, AVEVA PI, Yokogawa Exaquantum, Honeywell Uniformance, Bentley AssetWise, ROSEN Asset Integrity Suite) is the norm. Coexistence with European inspection contractor data formats is built in: Applus+ RTD inspection reports, Stork inspection reports, Bilfinger and Sonomatic data formats, plus the standard Olympus / Eddyfi / Sonatest / GE Mentor instrument files all import natively. NoBo certification metadata (Kiwa Stoomwezen, TUV, Lloyd&rsquo;s) captures alongside the inspection data automatically.</p>
                </>
            }
        />
    );
}
