import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
    Monitor, Database, BarChart2, AlertTriangle, FileText,
    CheckCircle, ArrowRight, Layers, Cpu, Globe, MapPin,
    Clock, TrendingUp, Shield, Zap, ChevronDown, ChevronUp
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { isCuratedCity, cityFromProductSlug } from '@/data/curated-cities';

// ─── Location context data ────────────────────────────────────────────────────

const digitalTwinLocationContext: Record<string, string> = {
    "houston": "Houston is the global capital of the oil and gas industry, hosting more than 500 refineries, petrochemical complexes, and midstream facilities across the Greater Houston area. The sheer density of pressure vessels, heat exchangers, storage tanks, and pipeline networks makes digital twin technology an operational necessity for integrity managers working across Shell, ExxonMobil, Chevron, and Lyondell Basell assets. The humid subtropical climate and proximity to the Gulf of Mexico create persistent corrosion challenges, making real-time thickness trending within a 3D digital twin a critical risk-management tool.",
    "dubai": "Dubai serves as the commercial nerve centre for Middle East energy operations, with ENOC, DEWA, and Emarat facilities concentrated across Jebel Ali and the broader UAE industrial corridor. The emirate's position as a logistics and engineering hub makes it ideal for managing digital twin data across offshore platforms, onshore storage tanks, and the complex pipeline infrastructure connecting Gulf production to export terminals. Extreme desert temperatures and coastal humidity create demanding corrosion environments where predictive maintenance planning through digital twin analytics delivers measurable ROI.",
    "abu-dhabi": "Abu Dhabi holds 94% of the UAE's proven oil reserves and hosts ADNOC's sprawling network of offshore platforms, the Ruwais refinery complex, LNG storage at Das Island, and hundreds of kilometres of sour-gas pipelines. The scale and criticality of these assets make digital twin integration with NDT inspection data a regulatory and commercial imperative. ADNOC's internal integrity management initiatives align directly with the colour-coded fitness-for-service outputs that digital twin platforms provide to inspection engineers.",
    "saudi-arabia": "Saudi Arabia operates the world's largest integrated oil and gas network, spanning the Ghawar field, the Abqaiq processing facility, and refining complexes at Yanbu, Jubail, and Ras Tanura that together process millions of barrels per day. Saudi Aramco's digital transformation programme has established 3D asset visualisation and real-time inspection data integration as standard requirements for new major projects. Digital twins of pressure vessels, reactors, and cryogenic storage tanks reduce shutdown durations and enable continuous fitness-for-service monitoring between turnarounds.",
    "calgary": "Calgary is the administrative headquarters of Canada's oil sands sector, with Suncor, Canadian Natural Resources, and Imperial Oil operating massive upgrader vessels, bitumen processing units, and an extensive pipeline network connecting production to North American markets. The extreme cold-weather operational environment accelerates certain damage mechanisms and requires inspection programmes that feed directly into a 3D digital twin for trend analysis and remaining-life calculations. Oil sands processing equipment — cokers, fractionators, and hot-bitumen piping — benefit enormously from digital twin corrosion mapping.",
    "singapore": "Singapore's Jurong Island hosts one of the world's most highly integrated petrochemical complexes, with ExxonMobil, Shell, and Sembcorp operating cracker units, reformers, and polymer plants within a few square kilometres. Space constraints and continuous operation schedules make risk-based inspection planning through digital twins essential for managing inspection windows without compromising production. The island's maritime environment creates localised corrosion hotspots on external surfaces that are most efficiently tracked through colour-coded 3D models.",
    "mumbai": "Mumbai anchors India's western industrial corridor, with BPCL's Mahul refinery, HPCL's Chembur plant, and the offshore production infrastructure of ONGC all within the region. Rapid growth in India's refining capacity and an ageing installed base of pressure equipment make digital twin inspection data integration a high-priority initiative for integrity managers seeking to optimise turnaround scope and demonstrate regulatory compliance under PESO and Petroleum Act requirements. The monsoon-driven corrosion season makes seasonal wall-thickness trending in a live 3D model especially valuable.",
    "london": "London serves as the corporate headquarters for BP, Shell, and numerous EPCI contractors managing inspection programmes across the North Sea, downstream Europe, and global asset portfolios. Digital twin platforms adopted at the London corporate level drive standardised inspection data workflows across operating sites worldwide. The UK's mature regulatory framework under the Pressure Systems Safety Regulations and PSSR 2000, combined with the HSE's focus on major hazard risk reduction, creates a strong compliance driver for fitness-for-service digital twin outputs.",
    "perth": "Perth is the operational gateway to Western Australia's LNG mega-projects — Gorgon, Wheatstone, and North West Shelf — as well as major iron ore and mineral processing facilities operated by BHP, Rio Tinto, and Woodside. The combination of offshore FLNG vessels, onshore LNG trains, cryogenic storage, and high-pressure separator vessels creates one of the most technically demanding digital twin environments globally. Remote site locations and expensive logistics make virtual inspection planning through 3D digital twins a critical cost-reduction tool.",
    "doha": "Doha sits at the heart of Qatar's LNG export industry, which is the world's largest, with RasGas and Qatargas operating cryogenic storage spheres, regasification facilities, and loading arms at the Ras Laffan Industrial City complex. The North Field expansion represents the world's largest single LNG development, and QatarEnergy's engineering standards mandate digital twin data integration for all new pressure vessels and storage tanks. Cryogenic service conditions, high-pressure gas streams, and the critical nature of export infrastructure make digital twin fitness-for-service reporting essential.",
    "kuwait": "Kuwait City coordinates KNPC's Clean Fuels Project at Al-Zour — the world's largest refinery project — alongside the existing Mina Abdullah and Mina Al-Ahmadi refineries and KOC's extensive upstream pipeline network. The commissioning of new high-capacity refinery units creates an immediate requirement for baseline digital twin models that can absorb all NDT inspection data throughout the asset lifecycle. High-sulphur crude processing and sour-water corrosion make localised thickness trending within a 3D model a key risk-management deliverable.",
    "aberdeen": "Aberdeen is the established capital of the UK offshore oil and gas industry, with operators including BP, TotalEnergies, Harbour Energy, and EnQuest managing ageing North Sea platforms, FPSOs, and subsea systems from local offices. Life extension programmes for platforms beyond their original design life rely heavily on fitness-for-service assessments, and digital twins that aggregate decades of inspection data provide the evidentiary basis for continued operation approvals from the HSE. The energy transition is also driving offshore wind digital twin adoption from Aberdeen.",
    "oslo": "Oslo coordinates Norway's offshore petroleum sector under the world's most stringent regulatory regime, with Equinor, Aker BP, and ConocoPhillips operating platforms subject to NORSOK N-005 and PSA Norway requirements for systematic condition monitoring. Norwegian operators have been early adopters of digital twin technology as a component of their Computerised Maintenance Management Systems, integrating TOFD, phased array, and AUT scan data directly into 3D asset models. The subsea inspection environment and the prevalence of ageing North Sea platforms make digital twin life-extension analysis a core deliverable.",
    "rotterdam": "Rotterdam's Europoort is Europe's largest refining and petrochemical hub, with Shell, ExxonMobil, BP, and Koch Industries operating major cracking and distillation units that process crude from global sources for continental European markets. The Netherlands Authority for Nuclear Safety and Radiation Protection (ANVS) and the Seveso III Directive create a compliance framework that rewards systematic inspection data management, which digital twin platforms deliver through automated regulatory reporting. Tidal waterways and North Sea wind exposure create specific external corrosion patterns trackable in 3D models.",
    "hyderabad": "Hyderabad is India's emerging technology and industrial hub, hosting HPCL's Visakh refinery operations' decision-making teams, BHEL's power plant manufacturing, and a growing cluster of inspection technology companies that are early adopters of digital twin platforms. The city's role as a centre for India's NDT software development means digital twin customisation for Indian regulatory requirements — including PESO and IBR compliance reporting — is actively developed here. ONGC's KG basin offshore operations are also monitored from Hyderabad engineering centres.",
    "muscat": "Muscat serves as the operational hub for Petroleum Development Oman's extensive onshore oil production network, the OQ (Orpic) Sohar refinery, and LNG trains at Sur that export to global markets. PDO's ongoing digitisation programme and Vision Oman 2040 both emphasise technology adoption in asset management, making digital twin inspection data integration an aligned strategic priority. Remote desert locations and aging oil production wells mean that virtual asset condition monitoring reduces costly site visits while maintaining regulatory compliance.",
    "kuala-lumpur": "Kuala Lumpur is the corporate headquarters of Petronas, which operates Pengerang Integrated Complex — one of Asia's largest downstream facilities — alongside significant deepwater offshore production in the South China Sea. Petronas's internal technical standards mandate systematic inspection data management for all pressure equipment, and digital twin platforms are increasingly specified in project engineering packages for new downstream facilities. Malaysia's diverse mix of onshore refineries, offshore platforms, and LNG terminals creates a broad digital twin application landscape.",
    "lagos": "Lagos serves as the commercial hub for Nigeria's petroleum industry, with the Dangote Refinery — Africa's largest at 650,000 bpd capacity — recently commissioned alongside existing NNPC-operated refineries and the growing deepwater offshore sector. The scale of new refinery assets and the need to establish world-class inspection data management from commissioning create an ideal environment for digital twin implementation. External corrosion from the hot, humid coastal environment and the critical nature of new export infrastructure make real-time 3D condition monitoring essential.",
    "new-orleans": "New Orleans anchors the Lower Mississippi River chemical corridor, with major refineries operated by Phillips 66, Valero, and Marathon alongside LNG export terminals and a dense network of petrochemical facilities. The strategic importance of Gulf Coast energy infrastructure and its exposure to hurricane-related damage drives risk-based inspection planning, where digital twin platforms provide the geographic and condition data needed to prioritise inspection scopes after weather events. High humidity, temperature cycling, and external corrosion from the Mississippi River industrial environment are monitored in real time through 3D asset models.",
    "denver": "Denver serves Colorado's diverse energy sector, including extensive DJ Basin oil and gas production, Rocky Mountain pipeline infrastructure, and significant downstream processing facilities operated by Suncor and Valero. The high-altitude UV environment and extreme seasonal temperature swings from -30°C to +40°C create unique external corrosion and inspection challenges that benefit from digital twin seasonal trending. Denver also hosts engineering decision-making centres for midstream operators managing thousands of kilometres of pipeline under PHMSA DOT regulations, where digital twin data integration supports integrity management plans."
};

// ─── Asset type data per city ─────────────────────────────────────────────────

const digitalTwinAssets: Record<string, string[]> = {
    "houston": ["Refinery pressure vessels and reactors", "Offshore FPSO hulls and mooring systems", "Petrochemical pipeline networks", "Crude oil and product storage tanks (API 653)", "Fired heaters and heat exchangers"],
    "dubai": ["ENOC and ADNOC refinery vessels", "Offshore platform topsides and jackets", "Product storage tanks at Jebel Ali", "Export pipeline networks", "LPG spheres and pressure vessels"],
    "abu-dhabi": ["ADNOC offshore platform structural members", "Ruwais refinery reactors and fractionators", "LNG cryogenic storage at Das Island", "Sour gas pipeline networks", "Produced water injection systems"],
    "saudi-arabia": ["Saudi Aramco crude processing separators", "Yanbu and Jubail refinery columns", "Abqaiq gas processing trains", "Cross-country crude oil pipelines", "SABIC petrochemical reactor vessels"],
    "calgary": ["Oil sands coking and fractionation units", "Bitumen upgrader pressure vessels", "Cold-service pipeline systems", "Storage tanks at Hardisty terminal", "Steam-assisted gravity drainage (SAGD) vessels"],
    "singapore": ["Jurong Island cracker units", "Naphtha and aromatics storage tanks", "Heat exchanger bundles (ECT tube inspection)", "Polymer plant pressure vessels", "Marine loading arms and jetty structures"],
    "mumbai": ["BPCL Mahul refinery columns and vessels", "HPCL atmospheric distillation units", "ONGC offshore platform wellheads", "Refinery fired heaters and waste heat boilers", "Coastal crude oil storage tanks"],
    "london": ["North Sea FPSO hull structures", "Downstream refinery pressure vessels", "Gas processing separators and scrubbers", "Pipeline risers and subsea infrastructure", "Tank farm storage vessels"],
    "perth": ["Gorgon and Wheatstone LNG cryogenic storage", "FLNG vessel hull and topside structures", "Iron ore processing plant vessels", "High-pressure separator vessels (offshore)", "Woodside offshore platform topsides"],
    "doha": ["QatarEnergy LNG cryogenic spheres and tanks", "Ras Laffan refinery pressure vessels", "Natural gas processing trains", "Offshore North Field platform structures", "LNG loading arm systems"],
    "kuwait": ["Al-Zour refinery atmospheric and vacuum distillation", "KNPC process vessels and reactors", "KOC crude oil gathering pipeline networks", "Storage tanks at Mina Al-Ahmadi", "Hydrogen production unit vessels"],
    "aberdeen": ["North Sea fixed platform structural members", "FPSO hull plating and framing", "Subsea pipeline risers and J-tubes", "Topside process vessels and separators", "Offshore wind monopile foundations"],
    "oslo": ["Equinor Troll and Oseberg platform topsides", "Subsea manifold and template structures", "North Sea cryogenic process vessels", "NORSOK-compliant mooring chains", "Offshore wind jacket foundations"],
    "rotterdam": ["Europoort cracking and distillation columns", "Crude oil and product storage tanks", "Chemical plant reactor vessels", "Cross-dock pipeline manifolds", "Jetty loading arm structures"],
    "hyderabad": ["HPCL Vizag refinery monitoring systems", "BHEL power boiler pressure parts", "ONGC offshore platform data integration", "Gas processing plant separators", "Fertiliser plant pressure vessels"],
    "muscat": ["PDO oil production separator trains", "OQ Sohar refinery vessels and columns", "Sur LNG storage tanks", "Desert pipeline corrosion monitoring", "Produced water re-injection vessels"],
    "kuala-lumpur": ["Pengerang Integrated Complex reactors", "Petronas deepwater FPSO structures", "RAPID refinery pressure vessels", "Malaysia LNG Bintulu storage tanks", "South China Sea offshore platform topsides"],
    "lagos": ["Dangote Refinery atmospheric distillation units", "NNPC refinery pressure vessels", "Niger Delta pipeline networks", "Offshore deepwater FPSO hulls", "LNG export terminal cryogenic storage"],
    "new-orleans": ["Mississippi River refinery pressure vessels", "LNG export terminal cryogenic tanks", "Petrochemical plant reactors and columns", "Pipeline network corrosion monitoring", "Storage tank farm integrity tracking"],
    "denver": ["DJ Basin oil and gas separator vessels", "Rocky Mountain pipeline integrity systems", "Suncor Commerce City refinery units", "Midstream compression station vessels", "High-altitude UV-exposed storage tanks"]
};

// ─── Industry pairs per city ──────────────────────────────────────────────────

const digitalTwinIndustries: Record<string, string[]> = {
    "houston": ["Oil & Gas Refining", "Petrochemicals", "Midstream Pipeline Operations", "Offshore Production"],
    "dubai": ["Downstream Petroleum", "Gas Processing", "Maritime & Shipping", "Power Generation"],
    "abu-dhabi": ["Upstream Oil Production", "LNG Processing", "Downstream Refining", "Sour Gas Treatment"],
    "saudi-arabia": ["Crude Oil Processing", "Petrochemicals", "Gas Processing", "Refining & Petrochemicals"],
    "calgary": ["Oil Sands Processing", "Heavy Oil Upgrading", "Midstream Transport", "Conventional Upstream"],
    "singapore": ["Petrochemicals", "Refining", "Marine & Shipping", "Electronics Manufacturing"],
    "mumbai": ["Petroleum Refining", "Offshore Production", "Power Generation", "Fertiliser & Chemicals"],
    "london": ["Upstream Oil & Gas", "Downstream Refining", "Nuclear Power", "Aerospace"],
    "perth": ["LNG Production", "Mining & Mineral Processing", "Offshore Oil & Gas", "Marine Infrastructure"],
    "doha": ["LNG Export", "Gas Processing", "Downstream Refining", "Offshore Production"],
    "kuwait": ["Refining", "Crude Oil Production", "Petrochemicals", "Power & Water"],
    "aberdeen": ["Offshore Oil & Gas", "Decommissioning", "Offshore Wind", "Subsea Engineering"],
    "oslo": ["Offshore Oil & Gas", "Subsea Systems", "Offshore Wind", "Maritime Industry"],
    "rotterdam": ["Refining", "Petrochemicals", "Chemical Processing", "Maritime Port Infrastructure"],
    "hyderabad": ["Power Generation", "Refining (Remote Monitoring)", "Fertiliser & Chemicals", "Defence & Aerospace"],
    "muscat": ["Upstream Production", "LNG Export", "Downstream Refining", "Petrochemicals"],
    "kuala-lumpur": ["Downstream Refining", "Offshore Production", "LNG", "Petrochemicals"],
    "lagos": ["Refining", "Offshore Oil & Gas", "Pipeline Infrastructure", "Power Generation"],
    "new-orleans": ["Downstream Refining", "LNG Export", "Petrochemicals", "Midstream Transport"],
    "denver": ["Midstream Gas Processing", "Upstream Oil & Gas", "Refining", "Renewable Energy Infrastructure"]
};

// ─── Use case definitions ─────────────────────────────────────────────────────

const useCases = [
    {
        icon: TrendingUp,
        title: "Corrosion Monitoring & Trending",
        description: "Real-time wall-thickness measurements from UT, TOFD, and phased array inspections are automatically fed into the 3D asset model. Colour-coded zones show rate-of-corrosion trends over time, enabling engineers to project remaining life and determine optimal next-inspection intervals under API 510, API 570, or API 653.",
        color: "text-blue-600",
        bg: "bg-blue-50",
        border: "border-blue-200"
    },
    {
        icon: Database,
        title: "Inspection History Visualisation",
        description: "Every past NDT inspection event — radiographic film, UT scan data, MFL records, and visual inspection reports — is linked to the physical location on the 3D model. Engineers can click any point on the asset and immediately retrieve the full inspection history, eliminating time-consuming manual record searches.",
        color: "text-emerald-600",
        bg: "bg-emerald-50",
        border: "border-emerald-200"
    },
    {
        icon: Shield,
        title: "Fitness-for-Service (FFS) Assessment",
        description: "API 579-1/ASME FFS-1 Level 1 and Level 2 calculations are performed directly within the digital twin environment, using measured thickness data and operating conditions already stored in the model. Visual output maps the FFS status across the entire asset surface, providing clear pass/fail zones for engineering review and regulatory submission.",
        color: "text-purple-600",
        bg: "bg-purple-50",
        border: "border-purple-200"
    },
    {
        icon: AlertTriangle,
        title: "Predictive Maintenance Planning",
        description: "Machine-learning corrosion rate models trained on your historical inspection data identify high-risk zones that are projected to reach minimum acceptable thickness before the next scheduled turnaround. Maintenance planners receive ranked priority lists weeks or months in advance, allowing material procurement and crew scheduling to be optimised.",
        color: "text-amber-600",
        bg: "bg-amber-50",
        border: "border-amber-200"
    },
    {
        icon: FileText,
        title: "Regulatory Reporting",
        description: "API 510, API 570, API 653, and ASME Section VIII inspection reports are generated automatically from the digital twin data repository. Report templates pre-populated with current thickness readings, corrosion rates, and next-inspection due dates reduce report preparation time by up to 60% and eliminate transcription errors between field data and final documentation.",
        color: "text-rose-600",
        bg: "bg-rose-50",
        border: "border-rose-200"
    }
];

// ─── How It Works steps ───────────────────────────────────────────────────────

const howItWorksSteps = [
    {
        step: "01",
        title: "Import CAD / Asset Dimensions",
        description: "Upload existing CAD drawings, isometric files, or manually enter vessel dimensions, nozzle schedules, and equipment lists. The platform generates a parametric 3D model of your asset ready to receive inspection data.",
        icon: Layers
    },
    {
        step: "02",
        title: "Map NDT Data to the Model",
        description: "Import UT thickness readings, TOFD waveforms, phased array C-scan images, or MFL data directly from your inspection instruments or NDT software. Each data point is geo-referenced to an exact location on the 3D asset surface.",
        icon: Cpu
    },
    {
        step: "03",
        title: "View the Colour-Coded Model",
        description: "The digital twin renders a live colour map: green indicates areas within acceptable limits, amber indicates monitoring zones, orange flags plan-for-repair areas, and red identifies locations requiring immediate action before next startup.",
        icon: Monitor
    },
    {
        step: "04",
        title: "Generate Reports & Compliance Records",
        description: "Export API 510/570/653-compliant inspection reports, FFS assessment summaries, and regulatory submission packages directly from the platform. All reports are timestamped, auditor-signed, and archived within the digital twin data repository.",
        icon: FileText
    }
];

// ─── ROI statistics ───────────────────────────────────────────────────────────

const roiStats = [
    { value: "60%", label: "Reduction in report preparation time" },
    { value: "80%", label: "Elimination of paper-based inspection records" },
    { value: "40%", label: "Faster turnaround scope definition" },
    { value: "3×", label: "More inspection data points analysed per engineer per day" }
];

// ─── FAQ component ────────────────────────────────────────────────────────────

function FAQItem({ question, answer }: { question: string; answer: string }) {
    const [open, setOpen] = useState(false);
    return (
        <div className="border border-slate-200 rounded-xl overflow-hidden">
            <button
                className="w-full flex justify-between items-center px-6 py-4 text-left font-semibold text-slate-800 hover:bg-slate-50 transition-colors"
                onClick={() => setOpen(!open)}
            >
                <span>{question}</span>
                {open ? <ChevronUp className="h-5 w-5 text-[#004aad] flex-shrink-0" /> : <ChevronDown className="h-5 w-5 text-[#004aad] flex-shrink-0" />}
            </button>
            {open && (
                <div className="px-6 py-4 bg-slate-50 text-slate-700 leading-relaxed text-sm border-t border-slate-200">
                    {answer}
                </div>
            )}
        </div>
    );
}

// ─── Props interface ──────────────────────────────────────────────────────────

interface DigitalTwinLocationPageProps {
    city: string;
    country: string;
    slug: string; // e.g. "digital-twin-houston"
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function DigitalTwinLocationPage({ city, country, slug }: DigitalTwinLocationPageProps) {
    // Derive city key from slug (remove "digital-twin-" prefix)
    const cityKey = slug.replace("digital-twin-", "");

    const locationContext = digitalTwinLocationContext[cityKey] ||
        `${city} is a significant industrial hub with major oil and gas, petrochemical, and power generation assets requiring systematic inspection data management. Digital twin technology provides integrity managers in ${city} with real-time 3D condition monitoring, corrosion trend analysis, and automated regulatory reporting across their critical pressure equipment portfolio. The growing focus on asset reliability and regulatory compliance in ${country} makes digital twin NDT integration a strategic priority for operators across all sectors.`;

    const assets = digitalTwinAssets[cityKey] || [
        "Refinery pressure vessels and reactors",
        "Storage tanks and spheres",
        "Pipeline networks and risers",
        "Offshore platform structural members",
        "Heat exchangers and fired heaters"
    ];

    const industries = digitalTwinIndustries[cityKey] || [
        "Oil & Gas",
        "Petrochemicals",
        "Power Generation",
        "Marine & Offshore"
    ];

    const pageTitle = `Digital Twin NDT ${city} | 3D Inspection Visualization | Atlantis NDT`;
    const pageDesc = `Digital twin NDT solutions in ${city}, ${country}. Real-time 3D asset visualization for ${assets.slice(0, 2).join(", ")} and more. API 510/570/653 compliant reporting. Corrosion trending, FFS assessment, and predictive maintenance. Request a demo from Atlantis NDT.`;
    const canonical = `https://atlantisndt.com/${slug}`;

    // Generate hreflang links for multi-regional SEO
    const hreflangLinks = [
        { hreflang: `en-${country}`, href: canonical },
        { hreflang: 'x-default', href: canonical },
        { hreflang: 'en', href: canonical }
    ];

    const structuredData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "SoftwareApplication",
                "name": `Digital Twin NDT Platform — ${city}`,
                "applicationCategory": "Engineering Software",
                "operatingSystem": "Web Browser",
                "provider": {
                    "@type": "Organization",
                    "name": "Atlantis NDT",
                    "url": "https://atlantisndt.com"
                },
                "description": pageDesc,
                "featureList": [
                    "3D asset visualisation with colour-coded condition mapping",
                    "Real-time corrosion monitoring and trending",
                    "API 579 fitness-for-service assessment",
                    "Automated API 510/570/653 regulatory reporting",
                    "Predictive maintenance planning",
                    "Inspection history database with geo-referenced data"
                ],
                "areaServed": {
                    "@type": "Place",
                    "name": `${city}, ${country}`
                },
                "offers": {
                    "@type": "Offer",
                    "availability": "https://schema.org/InStock",
                    "priceCurrency": "USD",
                    "priceSpecification": {
                        "@type": "PriceSpecification",
                        "description": "Contact for pricing"
                    }
                }
            },
            {
                "@type": "LocalBusiness",
                "@id": `https://atlantisndt.com/${slug}#business`,
                "name": `Atlantis NDT - ${city}`,
                "description": `Professional NDT consulting, training, and digital twin solutions in ${city}, ${country}`,
                "url": `https://atlantisndt.com/${slug}`,
                "telephone": "+1-281-840-8969",
                "email": "info@atlantisndt.com",
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": city,
                    "addressCountry": country
                },
                "areaServed": {
                    "@type": "City",
                    "name": city
                },
                "parentOrganization": {
                    "@type": "Organization",
                    "name": "Atlantis NDT",
                    "url": "https://atlantisndt.com"
                }
            }
        ]
    };

    const faqs = [
        {
            question: `What is a digital twin for NDT inspection in ${city}?`,
            answer: `A digital twin for NDT inspection is a 3D virtual replica of a physical asset — such as a pressure vessel, storage tank, or pipeline — that is continuously updated with real inspection data from ultrasonic testing, TOFD, phased array, MFL, and other NDT methods. In ${city}, operators use digital twins to visualise the current condition of their assets in real time, track corrosion rates over time, and generate API 510, API 570, or API 653 compliant inspection reports automatically from the data repository.`
        },
        {
            question: `Which asset types benefit most from digital twin NDT in ${city}?`,
            answer: `In ${city}, the highest-value applications are ${assets.slice(0, 3).join(", ")}. These asset types accumulate large volumes of inspection data over their service life and benefit enormously from having all historical measurements geo-referenced to a 3D model. Integrity engineers can immediately identify inspection history gaps, compare current readings to baseline thickness values, and generate remaining-life calculations without manually searching paper or PDF reports.`
        },
        {
            question: "How does the digital twin receive NDT inspection data?",
            answer: "Inspection data is imported into the digital twin through multiple pathways: direct instrument integration from portable UT gauges and phased array systems, import of existing A-scan and C-scan data files, manual entry of thickness grids from historical paper records, and API-based integration with existing inspection management software. All imported data is geo-referenced to the exact location on the 3D model and timestamped for audit purposes."
        },
        {
            question: "Does the digital twin platform support API 579 fitness-for-service calculations?",
            answer: "Yes. The Atlantis NDT digital twin platform performs API 579-1/ASME FFS-1 Level 1 and Level 2 calculations using the thickness data already stored in the model, combined with the operating pressure, temperature, and material properties defined at initial configuration. The platform outputs a colour-coded FFS status map overlaid on the 3D asset, with a structured assessment report suitable for submission to inspection authorities and insurers."
        },
        {
            question: `How does digital twin technology reduce inspection costs in ${city}?`,
            answer: `Digital twin NDT delivers cost savings in ${city} through three mechanisms: first, risk-based inspection planning from the digital twin prioritises high-risk zones, reducing unnecessary scaffolding and access preparation for low-risk areas; second, automated report generation reduces report preparation time by up to 60%; and third, predictive maintenance alerts allow material procurement and crew scheduling to be planned weeks in advance rather than during turnaround, eliminating premium procurement costs.`
        },
        {
            question: "Can the digital twin integrate with our existing inspection management software?",
            answer: "Yes. The Atlantis NDT digital twin platform provides standard API integrations for common inspection management systems including Meridium (APM), PCMS, Intelex, and custom SQL databases. For organisations without existing inspection software, the platform includes its own inspection data management module with full historical record import capability from Excel, CSV, and PDF formats."
        },
        {
            question: "What NDT methods can feed data into the digital twin?",
            answer: "The platform accepts data from all major NDT methods: ultrasonic thickness measurements (manual UT and automated scanning), time-of-flight diffraction (TOFD), phased array UT (C-scan and B-scan images), magnetic flux leakage (MFL) for tank floor inspection, eddy current testing for tube bundles, and visual inspection records including photographic evidence geo-referenced to the 3D model."
        },
        {
            question: "How long does it take to implement a digital twin for an existing asset?",
            answer: "For a standard pressure vessel or storage tank with existing dimensional drawings and a historical inspection record, initial digital twin setup typically takes 2-5 working days. This includes 3D model generation, baseline thickness data import, corrosion rate calculation, and configuration of the first automated inspection report. For complex assets such as FPSO hulls or offshore platform topsides, implementation typically takes 2-4 weeks depending on the volume of historical data and asset complexity."
        }
    ];

    const faqStructuredData = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };

    const breadcrumbs = [
        { label: "Home", href: "/" },
        { label: "Digital Twins", href: "/digital-twins" },
        { label: `Digital Twin ${city}`, href: `/${slug}` }
    ];

    return (
        <div className="min-h-screen bg-slate-50">
            <Navigation />

            <SEOHead
                title={pageTitle}
                description={pageDesc}
                noindex={!isCuratedCity(cityFromProductSlug(slug))}
                canonical={canonical}
                hreflangLinks={hreflangLinks}
            />

            {/* Structured data scripts */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
            />

            {/* ── Hero ─────────────────────────────────────────────────────── */}
            <section className="relative bg-gradient-to-br from-[#002d6b] to-[#004aad] pt-28 pb-20 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl" />
                    <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-300 rounded-full blur-3xl" />
                </div>
                <div className="container mx-auto max-w-6xl px-6 relative z-10">
                    <Breadcrumbs items={breadcrumbs} className="mb-6 text-blue-200" />
                    <div className="flex items-center gap-2 mb-4">
                        <MapPin className="h-5 w-5 text-blue-300" />
                        <span className="text-blue-200 text-sm font-medium">{city}, {country}</span>
                    </div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight"
                    >
                        Digital Twin Solutions {city}
                        <span className="block text-blue-300 text-3xl md:text-4xl mt-2">
                            3D Asset Inspection Visualisation
                        </span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-xl text-blue-100 max-w-3xl mb-8"
                    >
                        Transform your NDT inspection data into a live, colour-coded 3D model of your assets.
                        Real-time corrosion monitoring, API 579 fitness-for-service, and automated regulatory
                        reporting — purpose-built for {industries.slice(0, 2).join(" and ")} operators in {city}.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex flex-wrap gap-4"
                    >
                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-2 bg-white text-[#004aad] font-semibold px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors"
                        >
                            Request a Demo <ArrowRight className="h-4 w-4" />
                        </Link>
                        <Link
                            to="/digital-twin-reporting"
                            className="inline-flex items-center gap-2 border border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/10 transition-colors"
                        >
                            See Reporting Platform
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* ── Location context + assets ─────────────────────────────────── */}
            <section className="bg-white py-16">
                <div className="container mx-auto max-w-6xl px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-start">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="flex items-center gap-2 mb-3">
                                <Globe className="h-5 w-5 text-[#004aad]" />
                                <span className="text-[#004aad] font-semibold text-sm uppercase tracking-wide">Industrial Context</span>
                            </div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-4">
                                Digital Twin NDT in {city}
                            </h2>
                            <p className="text-slate-700 leading-relaxed text-lg">
                                {locationContext}
                            </p>
                            <div className="mt-6 flex flex-wrap gap-2">
                                {industries.map((industry) => (
                                    <span key={industry} className="bg-[#004aad]/10 text-[#004aad] text-sm font-medium px-3 py-1 rounded-full">
                                        {industry}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <Card className="border-slate-200 shadow-sm">
                                <CardHeader className="pb-3">
                                    <CardTitle className="text-[#004aad] flex items-center gap-2">
                                        <Layers className="h-5 w-5" />
                                        Primary Asset Types in {city}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-3">
                                        {assets.map((asset) => (
                                            <li key={asset} className="flex items-start gap-3">
                                                <CheckCircle className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                                                <span className="text-slate-700">{asset}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ── Use Cases ─────────────────────────────────────────────────── */}
            <section className="bg-slate-50 py-16">
                <div className="container mx-auto max-w-6xl px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">
                            Digital Twin Use Cases in {city}
                        </h2>
                        <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                            Five core capabilities that deliver measurable ROI for {city}-based inspection programmes.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {useCases.map((useCase, idx) => {
                            const Icon = useCase.icon;
                            return (
                                <motion.div
                                    key={useCase.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: idx * 0.08 }}
                                >
                                    <Card className={`h-full border ${useCase.border} shadow-sm hover:shadow-md transition-shadow`}>
                                        <CardContent className="p-6">
                                            <div className={`${useCase.bg} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                                                <Icon className={`h-6 w-6 ${useCase.color}`} />
                                            </div>
                                            <h3 className="text-lg font-bold text-slate-900 mb-3">{useCase.title}</h3>
                                            <p className="text-slate-600 text-sm leading-relaxed">{useCase.description}</p>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            );
                        })}
                        {/* Last card spanning columns on large screens */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="md:col-span-2 lg:col-span-3"
                        >
                            <Card className="border-[#004aad]/30 bg-gradient-to-r from-[#004aad]/5 to-blue-50 shadow-sm">
                                <CardContent className="p-6 flex flex-col md:flex-row items-center gap-6">
                                    <div className="flex-1">
                                        <h3 className="text-lg font-bold text-[#004aad] mb-2">Ready to implement digital twin NDT in {city}?</h3>
                                        <p className="text-slate-700 text-sm">Our team deploys the platform against your existing asset register and inspection data within days — no new hardware required.</p>
                                    </div>
                                    <Link
                                        to="/contact"
                                        className="inline-flex items-center gap-2 bg-[#004aad] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#003580] transition-colors whitespace-nowrap"
                                    >
                                        Book a Demo <ArrowRight className="h-4 w-4" />
                                    </Link>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ── How It Works ──────────────────────────────────────────────── */}
            <section className="bg-white py-16">
                <div className="container mx-auto max-w-6xl px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">How It Works</h2>
                        <p className="text-slate-600 max-w-xl mx-auto">
                            Four steps to transform your inspection data into a live 3D digital twin.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {howItWorksSteps.map((step, idx) => {
                            const Icon = step.icon;
                            return (
                                <motion.div
                                    key={step.step}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                                    className="relative"
                                >
                                    <Card className="h-full border-slate-200 shadow-sm text-center p-6">
                                        <div className="text-5xl font-black text-[#004aad]/10 mb-2 leading-none">{step.step}</div>
                                        <div className="w-12 h-12 bg-[#004aad] rounded-xl flex items-center justify-center mx-auto mb-4">
                                            <Icon className="h-6 w-6 text-white" />
                                        </div>
                                        <h3 className="text-base font-bold text-slate-900 mb-2">{step.title}</h3>
                                        <p className="text-slate-600 text-sm leading-relaxed">{step.description}</p>
                                    </Card>
                                    {idx < howItWorksSteps.length - 1 && (
                                        <div className="hidden lg:flex absolute top-1/2 -right-3 z-10 items-center justify-center">
                                            <ArrowRight className="h-6 w-6 text-[#004aad]/30" />
                                        </div>
                                    )}
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ── Asset Types Deep Dive ─────────────────────────────────────── */}
            <section className="bg-slate-50 py-16">
                <div className="container mx-auto max-w-6xl px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">
                                Local Asset Applications in {city}
                            </h2>
                            <p className="text-slate-700 mb-6 leading-relaxed">
                                The Atlantis NDT digital twin platform is configured for the specific asset types
                                that dominate {city}'s industrial landscape. Each asset class has pre-built
                                corrosion mechanisms, damage progression models, and inspection code templates
                                relevant to the {country} regulatory environment.
                            </p>
                            <div className="space-y-3">
                                {assets.map((asset) => (
                                    <div key={asset} className="flex items-start gap-3 bg-white rounded-lg p-3 border border-slate-100 shadow-sm">
                                        <Zap className="h-5 w-5 text-[#004aad] flex-shrink-0 mt-0.5" />
                                        <div>
                                            <span className="text-slate-800 font-medium text-sm">{asset}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="space-y-4"
                        >
                            <Card className="border-blue-200 bg-blue-50 shadow-sm">
                                <CardContent className="p-6">
                                    <h3 className="font-bold text-[#004aad] mb-3 flex items-center gap-2">
                                        <Monitor className="h-5 w-5" />
                                        Colour-Coded Condition Zones
                                    </h3>
                                    <div className="space-y-2 text-sm">
                                        <div className="flex items-center gap-3">
                                            <div className="w-4 h-4 rounded bg-green-500 flex-shrink-0" />
                                            <span className="text-slate-700"><strong>Green:</strong> Within acceptable limits — no action required</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="w-4 h-4 rounded bg-yellow-400 flex-shrink-0" />
                                            <span className="text-slate-700"><strong>Amber:</strong> Monitor zone — next inspection triggered</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="w-4 h-4 rounded bg-orange-500 flex-shrink-0" />
                                            <span className="text-slate-700"><strong>Orange:</strong> Plan for repair — schedule in next turnaround</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="w-4 h-4 rounded bg-red-600 flex-shrink-0" />
                                            <span className="text-slate-700"><strong>Red:</strong> Immediate action — engineering review required</span>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                            <Card className="border-slate-200 shadow-sm">
                                <CardContent className="p-6">
                                    <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                                        <BarChart2 className="h-5 w-5 text-[#004aad]" />
                                        Supported Codes & Standards
                                    </h3>
                                    <ul className="grid grid-cols-2 gap-2 text-sm text-slate-700">
                                        {["API 510", "API 570", "API 653", "API 579-1/ASME FFS-1", "ASME Section VIII", "ASNT SNT-TC-1A", "ISO 9712", "NACE SP0169"].map(code => (
                                            <li key={code} className="flex items-center gap-1">
                                                <CheckCircle className="h-3.5 w-3.5 text-emerald-500 flex-shrink-0" />
                                                {code}
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ── Integration with Inspection Workflow ─────────────────────── */}
            <section className="bg-white py-16">
                <div className="container mx-auto max-w-6xl px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">
                            Integration with Your Inspection Workflow
                        </h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            The digital twin platform sits alongside your existing inspection process —
                            not replacing it, but transforming raw data into actionable intelligence.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Database,
                                title: "Data Ingestion",
                                points: [
                                    "Direct import from portable UT instruments",
                                    "Phased array C-scan and TOFD waveform upload",
                                    "MFL scan data for tank floors",
                                    "Historical record migration from paper and PDF",
                                    "Real-time field data entry via mobile app"
                                ]
                            },
                            {
                                icon: Monitor,
                                title: "Analysis & Visualisation",
                                points: [
                                    "Automatic corrosion rate calculation",
                                    "Remaining life projection with confidence intervals",
                                    "API 579 Level 1 & Level 2 FFS calculations",
                                    "Heat maps overlaid on 3D asset model",
                                    "Trend charts per measurement point over time"
                                ]
                            },
                            {
                                icon: FileText,
                                title: "Reporting & Compliance",
                                points: [
                                    "Auto-generated API 510/570/653 reports",
                                    "Next inspection due date scheduling",
                                    "Regulatory submission packages",
                                    "Auditor-signed digital records",
                                    "Export to PDF, Excel, and CMMS formats"
                                ]
                            }
                        ].map((col, idx) => {
                            const Icon = col.icon;
                            return (
                                <motion.div
                                    key={col.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                                >
                                    <Card className="h-full border-slate-200 shadow-sm">
                                        <CardContent className="p-6">
                                            <div className="w-10 h-10 bg-[#004aad]/10 rounded-lg flex items-center justify-center mb-4">
                                                <Icon className="h-5 w-5 text-[#004aad]" />
                                            </div>
                                            <h3 className="font-bold text-slate-900 mb-4">{col.title}</h3>
                                            <ul className="space-y-2">
                                                {col.points.map(point => (
                                                    <li key={point} className="flex items-start gap-2 text-sm text-slate-600">
                                                        <CheckCircle className="h-4 w-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                                                        {point}
                                                    </li>
                                                ))}
                                            </ul>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ── ROI Stats ─────────────────────────────────────────────────── */}
            <section className="bg-[#004aad] py-16">
                <div className="container mx-auto max-w-6xl px-6">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold text-white mb-3">
                            Measurable ROI for {city} Operators
                        </h2>
                        <p className="text-blue-200 max-w-xl mx-auto">
                            Industry benchmarks from digital twin implementations across oil & gas and petrochemical facilities.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {roiStats.map((stat, idx) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: idx * 0.1 }}
                                className="text-center"
                            >
                                <div className="text-4xl md:text-5xl font-black text-white mb-2">{stat.value}</div>
                                <div className="text-blue-200 text-sm leading-snug">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                    <div className="text-center mt-10">
                        <p className="text-blue-100 text-xs mb-4">
                            * Based on reported outcomes from digital twin implementations in comparable oil & gas and petrochemical facilities.
                        </p>
                        <div className="flex justify-center gap-4 flex-wrap">
                            <Link
                                to="/digital-twin-reporting"
                                className="inline-flex items-center gap-2 bg-white text-[#004aad] font-semibold px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors"
                            >
                                Explore the Platform <ArrowRight className="h-4 w-4" />
                            </Link>
                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-2 border border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/10 transition-colors"
                            >
                                Request Demo
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── FAQ ──────────────────────────────────────────────────────── */}
            <section className="bg-slate-50 py-16">
                <div className="container mx-auto max-w-4xl px-6">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">
                            Frequently Asked Questions — Digital Twin NDT {city}
                        </h2>
                        <p className="text-slate-600">
                            Common questions from integrity engineers and inspection managers in {city}.
                        </p>
                    </div>
                    <div className="space-y-3">
                        {faqs.map((faq) => (
                            <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Related Services ─────────────────────────────────────────── */}
            <section className="bg-slate-50 py-12 border-t border-slate-200">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">
                        Related NDT Services in {city}
                    </h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                            { title: "NDT Consulting", desc: "ASNT Level III consulting", link: `/consulting/ndt-consulting-${slug.replace('digital-twin-', '')}` },
                            { title: "NDT ERP Software", desc: "Inspection management", link: `/ndt-erp-${slug.replace('digital-twin-', '')}` },
                            { title: "NDT Training", desc: "ASNT certification courses", link: "/training" },
                            { title: "Corrosion Mapping", desc: "UT thickness surveys", link: "/corrosion-mapping" },
                        ].map(s => (
                            <Link key={s.title} to={s.link} className="block p-4 bg-white rounded-lg border border-slate-200 hover:border-[#004aad] hover:shadow-md transition-all group">
                                <h3 className="font-semibold text-slate-900 group-hover:text-[#004aad] transition-colors">{s.title}</h3>
                                <p className="text-sm text-slate-500 mt-1">{s.desc}</p>
                            </Link>
                        ))}
                    </div>
                    <div className="mt-8">
                        <h3 className="text-lg font-semibold text-slate-700 mb-3">Digital Twins in Other Locations</h3>
                        <div className="flex flex-wrap gap-2">
                            {["houston", "dubai", "abu-dhabi", "saudi-arabia", "calgary", "singapore", "mumbai", "london", "perth", "aberdeen", "oslo", "doha", "kuwait", "lagos"]
                                .filter(c => c !== slug.replace('digital-twin-', ''))
                                .slice(0, 8)
                                .map(c => (
                                    <Link key={c} to={`/digital-twin-${c}`} className="text-sm px-3 py-1.5 bg-white border border-slate-200 rounded-full hover:border-[#004aad] hover:text-[#004aad] transition-colors">
                                        {c.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
                                    </Link>
                                ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── CTA Section ──────────────────────────────────────────────── */}
            <section className="bg-white py-16">
                <div className="container mx-auto max-w-6xl px-6">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">
                            Get Started with Digital Twin NDT in {city}
                        </h2>
                        <p className="text-slate-600 max-w-xl mx-auto text-lg">
                            Our implementation team will have your first asset live in the platform within days.
                            No hardware investment. No lengthy integration projects.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6 mb-10">
                        {[
                            { title: "Digital Twin Platform", desc: "See the full 3D visualisation and reporting platform.", link: "/digital-twin-reporting", label: "View Platform" },
                            { title: "Digital Twins Overview", desc: "Learn how digital twins transform NDT inspection programmes.", link: "/digital-twins", label: "Learn More" },
                            { title: "Contact Us", desc: "Talk to our team about your specific asset portfolio in " + city + ".", link: "/contact", label: "Get in Touch" }
                        ].map(card => (
                            <Card key={card.title} className="border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                                <CardContent className="p-6 text-center">
                                    <h3 className="font-bold text-slate-900 mb-2">{card.title}</h3>
                                    <p className="text-slate-600 text-sm mb-4">{card.desc}</p>
                                    <Link
                                        to={card.link}
                                        className="inline-flex items-center gap-2 text-[#004aad] font-semibold text-sm hover:underline"
                                    >
                                        {card.label} <ArrowRight className="h-4 w-4" />
                                    </Link>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                    <div className="flex justify-center gap-4 flex-wrap">
                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-2 bg-[#004aad] text-white font-semibold px-8 py-4 rounded-lg hover:bg-[#003580] transition-colors text-lg"
                        >
                            Request a Demo for {city} <ArrowRight className="h-5 w-5" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* ── Clock / Urgency strip ─────────────────────────────────────── */}
            <section className="bg-slate-100 py-6 border-t border-slate-200">
                <div className="container mx-auto max-w-6xl px-6">
                    <div className="flex flex-wrap justify-center gap-8 text-sm text-slate-600">
                        <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-[#004aad]" />
                            <span>Implementation in 2–5 days for standard assets</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-emerald-500" />
                            <span>API 510 / 570 / 653 compliant reporting</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Globe className="h-4 w-4 text-[#004aad]" />
                            <span>Serving {city} and {country} operators globally</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Shield className="h-4 w-4 text-[#004aad]" />
                            <span>API 579 FFS calculations included</span>
                        </div>
                    </div>
                </div>
            </section>

            <ContactDetails />
        </div>
    );
}
