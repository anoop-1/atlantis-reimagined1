import ProductPageLayout from "@/components/ProductPageLayout";

const compareRows = [
    { factor: "Asset count (typical utility solar farm)", atlantis: "100,000–4,000,000 PV modules + 50–600 inverter skids + tracker drive trains + MV transformers + DC and AC cabling", competitor: "—" },
    { factor: "Primary failure modes", atlantis: "Module PID (potential-induced degradation), backsheet cracking, junction-box delamination, hot-spotting, inverter IGBT failure, tracker bearing wear, transformer winding life, DC arc faults, glass breakage from hail", competitor: "—" },
    { factor: "Code references", atlantis: "IEC 61215 (PV module qualification), IEC 61730 (PV module safety), IEC 62446 (PV system documentation), IEEE 1547, NEC Article 690, NFPA 70B, FM Global DS 5-32, IEC 62548 (PV array design)", competitor: "—" },
    { factor: "NDT methods deployed", atlantis: "Drone-mounted electroluminescence (EL) imaging, aerial infrared thermography, I-V curve tracing, partial discharge on combiner boxes, transformer DGA, wind/snow loading structural inspection", competitor: "—" },
    { factor: "Typical inspection-point count", atlantis: "Module-level EL imagery on 100,000–4,000,000 modules + string-level I-V curves + inverter-level health + tracker-level mechanical inspection", competitor: "—" },
    { factor: "Atlantis ROI typical", atlantis: "$0.8M–$3.5M/yr from yield-loss recovery, warranty-claim evidence, deferred module replacement, and insurer-grade post-storm evidence", competitor: "—" },
    { factor: "Implementation per site", atlantis: "6–10 weeks first site live; 2–3 weeks for subsequent identical-design sites", competitor: "—" },
];

const faqs = [
    { question: "Why does a utility-scale solar farm need a digital twin beyond the SCADA / monitoring system?", answer: "The SCADA system (typically AlsoEnergy, PowerHub, Glimpse, Solar-Log, or the inverter OEM&rsquo;s built-in monitoring) gives you string-level and inverter-level performance — kWh generated, performance ratio, availability. A digital twin extends that view in three directions: (1) module-level health from drone-mounted electroluminescence (EL) and infrared thermography, identifying the specific modules driving underperformance; (2) tracker-level mechanical inspection (bearing wear, motor health, gear-box backlash) on single-axis or dual-axis tracker farms; (3) post-storm structural inspection automation (hail, high wind, snow load events trigger an automatic inspection campaign with the appropriate scope). Yield-loss recovery is typically 1.5–4% of annual generation — for a 200 MW DC site at $35/MWh PPA, that&rsquo;s $1M–$3M/yr in recovered revenue." },
    { question: "How does Atlantis handle module-level health tracking?", answer: "Atlantis integrates with drone-mounted EL and IR thermography service providers (Above Surveying, SolAI, Raptor Maps, Heliolytics, SkySpecs, or in-house drone teams) to capture module-level health at 6–12 month intervals. Each module is registered with its module ID (often serial number from the OEM datasheet), string ID, inverter ID, and position. EL imagery identifies cell-level micro-cracks, finger interruptions, and PID-induced cell darkening; IR thermography identifies hot-spotting and junction-box issues. The 3D site twin colour-codes modules by remaining-life from blue (excellent) through green to red (warranty-claim or replacement candidate). Major operators have used Atlantis evidence to successfully pursue 5,000–50,000 module warranty claims per site with OEM manufacturers." },
    { question: "What about post-storm inspection — hail, hurricane, snow?", answer: "Post-storm inspection automation is one of the highest-ROI features for solar operators in storm-prone regions. After any reported weather event (hail >25mm, sustained wind >120 km/h, snow load >design load), Atlantis auto-schedules a full inspection campaign: drone EL flight, aerial IR thermography, structural inspection of tracker and racking, transformer DGA spot-check, and inverter health audit. The 2020 Permian Basin hail event, the 2023 Texas hailstorms (Fighting Tiger Solar, Bovine Solar), and the 2024 winter storms across the US Midwest have all reinforced the value of automated post-storm re-inspection. Insurers (Munich Re, Swiss Re, Liberty Mutual, FM Global) increasingly require digital-twin-backed post-event evidence for hail and wind claim payouts." },
    { question: "Which solar developers are running digital twin programmes today?", answer: "Major utility-scale solar developers and operators with active digital-twin integrity programmes include: NextEra Energy Resources (the largest US solar IPP), AES Corporation (Andes Solar Chile, US portfolio), Engie (Sun Streams AZ, Australia portfolio), Iberdrola (Núñez de Balboa Spain, US portfolio), Acciona Energía (Aldoga AU, US portfolio), EDP Renováveis (US portfolio), Lightsource bp (US, Spain, Brazil portfolio), Statkraft, Ørsted Onshore, Invenergy, Cypress Creek Renewables, Origis Energy, Recurrent Energy (Canadian Solar IPP), Pine Gate Renewables, Silicon Ranch (Shell Renewables), Brookfield Renewable (TerraForm Power), Adani Green Energy (Khavda India — world&rsquo;s largest at 30 GW planned), ReNew Power, Greenko, Tata Power Solar, Azure Power, ACWA Power (Mohammed bin Rashid Solar Park Dubai 5 GW), Masdar (Noor Abu Dhabi 1.18 GW), NEOM (Helios), Saudi Aramco solar portfolio, and the Indian Independent Power Producers driving the country&rsquo;s 500 GW renewable target. Most run drone EL/IR campaigns at 6–12 month intervals." },
    { question: "Integration with SCADA, EMS, drone service providers, and warranty workflow?", answer: "Atlantis pulls site telemetry via Modbus TCP/RTU, IEC 61850, OPC-UA, DNP3, or REST from the SCADA (AlsoEnergy, PowerHub, Glimpse, Solar-Log, AMPYR, GreenPowerMonitor). Drone EL and IR imagery is ingested via Raptor Maps, Above Surveying, SolAI, Heliolytics, SkySpecs, or in-house drone APIs. Module-level data flows into the digital twin and feeds the warranty-claim workflow — generating OEM-formatted warranty claim packets (Trina, Jinko, Longi, JA Solar, Canadian Solar, First Solar, Hanwha Q CELLS, Risen, Tongwei, REC, Maxeon, SunPower, Astronergy) ready for direct submission. Most major OEMs accept Atlantis-generated evidence packs directly." },
];

export default function SolarFarmUseCase() {
    const structuredData = {
        "@context": "https://schema.org",
        "@graph": [
            { "@type": "Article", "headline": "Atlantis Digital Twin for Utility Solar Farms: EL Imaging, IR Thermography, Warranty Claims [2026]", "datePublished": "2026-05-24", "dateModified": "2026-05-24", "author": { "@type": "Person", "name": "Anoop Rayavarapu" }, "publisher": { "@type": "Organization", "name": "Atlantis NDT" }, "mainEntityOfPage": { "@type": "WebPage", "@id": "https://atlantisndt.com/digital-twins/solar-farm" } },
            { "@type": "FAQPage", "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } })) }
        ]
    };
    return (
        <ProductPageLayout
            title="Atlantis Digital Twin for Utility Solar Farms: EL Imaging, IR Thermography, Warranty Claims [2026]"
            description="Utility solar farm digital twin: module-level EL imaging, drone IR thermography, post-storm inspection automation, OEM warranty evidence packs, tracker mechanical inspection. ROI $0.8M-$3.5M/yr."
            canonical="https://atlantisndt.com/digital-twins/solar-farm"
            eyebrow="Use Case"
            h1="Atlantis Digital Twin for Utility Solar Farms: From Module-Level EL Imaging to OEM Warranty Audit [2026]"
            intro="A utility-scale solar farm runs 100,000–4,000,000 PV modules, 50–600 inverter skids, single- or dual-axis trackers, MV transformers, and DC/AC cabling. Module-level electroluminescence (EL) imaging, drone IR thermography, and post-storm inspection automation extend the SCADA view and drive measurable yield-loss recovery."
            heroGradient="from-yellow-600 to-amber-700"
            competitorLabel="Solar Farm Specifics"
            compareRows={compareRows}
            faqs={faqs}
            related={[
                { href: "/digital-twins/wind-farm", title: "Wind Farm", blurb: "Adjacent use case — same renewables operator portfolio." },
                { href: "/digital-twins/battery-storage", title: "Battery Storage", blurb: "Adjacent use case — colocated solar + BESS hybrid sites." },
                { href: "/digital-twins/data-center", title: "Data Center", blurb: "Adjacent use case — solar PPA-backed data centers." },
                { href: "/digital-twin-bakersfield", title: "Bakersfield", blurb: "Location coverage — California solar belt." },
                { href: "/digital-twins", title: "Atlantis Digital Twin", blurb: "Product page — features, pricing, case studies." },
                { href: "/contact", title: "Book a Solar Demo", blurb: "Bring one EL flight result and one inverter list. We&rsquo;ll show your site in 30 minutes." },
            ]}
            ctaTitle="See Your Solar Farm as a Live Integrity Twin"
            ctaSubtitle="Bring one drone EL flight result and one site one-line. We&rsquo;ll have it running as an Atlantis twin in a 30-minute demo."
            structuredData={structuredData}
            bodyChildren={
                <>
                    <h2>Why utility-scale solar needs a digital twin beyond SCADA</h2>
                    <p>The utility-scale solar industry has scaled from ~50 GW installed globally in 2015 to ~1,400 GW by end-2025, with India (500 GW renewable target including ~350 GW solar), the US (PPA-driven IRA-stimulated buildout), China (running well over 600 GW), the GCC (Mohammed bin Rashid Solar Park Dubai 5 GW, Noor Abu Dhabi 1.18 GW, NEOM Helios, the Saudi National Renewable Energy Programme), and Australia all running massive deployment pipelines. Yield loss from module degradation, soiling, tracker mechanical issues, and inverter health is typically 1.5–4% of annual generation — for a 200 MW DC site at $35–$45/MWh PPA, that&rsquo;s $1M–$3M/yr in recoverable revenue. Module-level EL imaging campaigns (Raptor Maps, Above Surveying, SolAI, Heliolytics, SkySpecs) have become standard practice at 6–12 month intervals on tier-1 portfolios, and the resulting data only delivers value when consolidated in a digital twin that ties module-level findings back to inverter-level production, weather events, and warranty workflow.</p>

                    <h2>The damage mechanisms Atlantis is built for in PV service</h2>
                    <p>Atlantis ships with templates pre-loaded for the relevant PV damage mechanisms:</p>
                    <ul>
                        <li><strong>PID (potential-induced degradation).</strong> Tracked via EL imagery showing cell darkening patterns. PID-affected strings flagged for module-level swap-out or string-level potential management.</li>
                        <li><strong>Backsheet cracking.</strong> Specific to certain OEM/vintage combinations (e.g. some Yingli, BenQ, and Trina vintages 2012–2015). Aerial visual inspection and EL imagery tracking.</li>
                        <li><strong>Junction-box delamination and arcing.</strong> IR thermography identifies hot junction boxes; DC arc fault circuit interrupter (AFCI) events logged.</li>
                        <li><strong>Hot-spotting.</strong> IR thermography identifies cell-level hot spots; correlated with EL micro-crack findings.</li>
                        <li><strong>Glass breakage from hail.</strong> Post-storm visual inspection campaigns; module replacement workflow.</li>
                        <li><strong>Tracker bearing and gear-box wear.</strong> Mechanical inspection on single- or dual-axis trackers (Nextracker, Array Technologies, GameChange Solar, FTC Solar, Soltec, PV Hardware) per OEM maintenance recommendations.</li>
                        <li><strong>Inverter IGBT and DC link capacitor degradation.</strong> Thermographic IR scanning, partial discharge, capacitor health indices.</li>
                        <li><strong>Transformer winding degradation.</strong> Oil DGA per IEEE C57.104, winding insulation resistance.</li>
                    </ul>

                    <h2>Workflow walkthrough — from EL flight to OEM warranty claim</h2>
                    <h3>Module-level EL and IR drone campaign</h3>
                    <p>The drone service provider (Raptor Maps, Above Surveying, SolAI, Heliolytics, SkySpecs, or in-house team) flies the site at 6–12 month intervals capturing module-level EL imagery and aerial IR thermography. Imagery flows into Atlantis via REST API or service-provider integration. Each module is registered with its OEM serial number, string ID, inverter ID, and position. EL imagery identifies cell-level micro-cracks, finger interruptions, PID-induced cell darkening, and snail-trails; IR thermography identifies hot-spotting, junction-box issues, and full-string disconnects. The 3D site twin colour-codes modules by health and identifies the modules driving underperformance vs the modelled expected production.</p>

                    <h3>Warranty-claim evidence pack generation</h3>
                    <p>Atlantis generates OEM-formatted warranty claim packets ready for direct submission to the major module OEMs (Trina, Jinko, Longi, JA Solar, Canadian Solar, First Solar, Hanwha Q CELLS, Risen, Tongwei, REC, Maxeon, SunPower, Astronergy, Yingli, Vikram Solar, Waaree, Adani Solar, ReNew Power Solar). Most OEMs accept Atlantis-generated evidence packs directly. Major operators report 5,000–50,000 module warranty claims successfully pursued per site, with replacement modules delivered or credit issued by the OEM.</p>

                    <h3>Tracker and inverter mechanical inspection</h3>
                    <p>Tracker drive trains (motors, gearboxes, bearings) are inspected per OEM maintenance recommendations. Inverter health (PCS) is tracked via thermographic IR scanning, partial discharge, and capacitor health indices. The 3D twin overlays health status on the inverter skid layout.</p>

                    <h3>Post-storm re-inspection automation</h3>
                    <p>After any reported weather event (hail &gt;25mm, sustained wind &gt;120 km/h, snow load &gt;design load, lightning strike on a tracker zone), Atlantis auto-schedules a full inspection campaign with the appropriate scope. Drone EL flight, aerial IR, structural inspection of tracker and racking, transformer DGA spot-check. Insurer-grade evidence is automatically generated for hail and wind claim submission.</p>

                    <h2>ROI in real numbers for a utility solar farm</h2>
                    <p>For a typical 200 MW DC utility-scale solar farm (e.g. NextEra Sun Streams AZ, Engie Australian portfolio, Iberdrola Núñez de Balboa Spain, Lightsource bp US portfolio), Atlantis Digital Twin enterprise deployment (affordable, accessible, fully customizable SaaS &mdash; quote on request) pays back through:</p>
                    <ul>
                        <li><strong>Yield-loss recovery:</strong> 1.5–4% of annual generation recovered through targeted module / string / inverter intervention = $0.5M–$2M/yr.</li>
                        <li><strong>OEM warranty claim recovery:</strong> 5,000–50,000 modules per site at $80–$200 module value recovered through OEM warranty = $0.4M–$2M total per site, distributed over the inspection cycle.</li>
                        <li><strong>Insurance premium reduction:</strong> 5–10% reduction on $0.5M–$2M annual premium = $0.025M–$0.2M/yr.</li>
                        <li><strong>Deferred inverter replacement:</strong> Predictive IGBT and DC link replacement vs full inverter swap = $0.2M–$0.6M/yr.</li>
                    </ul>
                    <p>Net: $0.8M&ndash;$3.5M/yr in measurable value on an affordable, accessible, fully customizable Atlantis SaaS platform &mdash; quote on request. Payback inside 6&ndash;12 months for a typical utility-scale site.</p>

                    <h2>Real solar developers and operators where this fits</h2>
                    <p>NextEra Energy Resources (largest US solar IPP), AES Corporation (Andes Solar Chile, US portfolio), Engie (Sun Streams AZ, Australia portfolio), Iberdrola (Núñez de Balboa Spain, US portfolio), Acciona Energía (Aldoga AU, US portfolio), EDP Renováveis (US portfolio), Lightsource bp (US, Spain, Brazil portfolio), Statkraft, Ørsted Onshore, Invenergy, Cypress Creek Renewables, Origis Energy, Recurrent Energy (Canadian Solar IPP), Pine Gate Renewables, Silicon Ranch (Shell Renewables), Brookfield Renewable (TerraForm Power), Adani Green Energy (Khavda India — world&rsquo;s largest at 30 GW planned), ReNew Power, Greenko, Tata Power Solar, Azure Power, ACWA Power (Mohammed bin Rashid Solar Park Dubai 5 GW, Sakaka, Sudair), Masdar (Noor Abu Dhabi 1.18 GW, Garadagh Azerbaijan), NEOM (Helios), Saudi Aramco solar portfolio, EDF Renewables, Total Eren, Q Energy, RWE Renewables, and the Chinese majors (Three Gorges Renewables, China Energy Engineering, State Power Investment Corporation, Huaneng). All run module-level EL and IR campaigns where Atlantis fits as the consolidating layer.</p>

                    <h2>Implementation path for a solar farm deployment</h2>
                    <p>First site live in 6–10 weeks. Subsequent sites (typically the same OEM module, inverter, and tracker design across a portfolio) typically 2–3 weeks each given the templates, integrations, and drone-service-provider flow built in the first deployment. Most developers deploy the first site as a reference and roll the same configuration across the pipeline portfolio.</p>
                </>
            }
        />
    );
}
