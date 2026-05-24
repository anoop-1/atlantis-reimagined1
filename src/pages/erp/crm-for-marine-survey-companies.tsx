import ErpIndustryAppPage from "@/components/ErpIndustryAppPage";

export default function CrmForMarineSurveyCompanies() {
  return (
    <ErpIndustryAppPage
      pageTitle="CRM for Marine Survey Companies"
      slug="crm-for-marine-survey-companies"
      appName="CRM (Customer Relationship Management)"
      industry="marine survey companies"
      breadcrumbLabel="CRM for Marine Survey"
      trustBadge="IACS / IMO / Lloyd's Register ready"
      metaDescription="Atlantis NDT ERP CRM for marine survey companies — IACS classification-society pipeline tracking, IMO regulator awareness, Lloyd's Register / DNV / ABS / BV / ClassNK / RINA / KR / CCS / IRClass surveyor pool management. Flat $18,000/yr."
      heroBody="Atlantis NDT ERP CRM pre-configured for marine survey companies — IACS classification-society opportunity tracking, IMO regulatory framework awareness, surveyor pool management across Lloyd's Register, DNV, ABS, Bureau Veritas, ClassNK, RINA, Korean Register, China Classification Society and IRClass, plus port-state-control inspection lead routing. Part of the all-apps-included $18,000 / year subscription."
      whatItIs={[
        "CRM for Marine Survey Companies inside Atlantis NDT ERP is the Odoo 18 CRM module pre-configured for the operating reality of marine survey firms — IACS (International Association of Classification Societies) member-pipeline tracking, IMO MARPOL / SOLAS / Load Line / Tonnage / MLC convention frameworks, port-state-control (Paris MoU, Tokyo MoU, USCG, AMSA) inspection lead routing, and surveyor pool management across the 12 IACS classification societies plus second-tier societies (Indian Register IRClass, Polish Register, Croatian Register, Turkish Lloyd).",
        "The CRM tracks every commercial opportunity — newbuild survey, periodical class survey (Annual, Intermediate, Special), continuous class survey programs, condition assessment surveys, P&I (Protection and Indemnity) damage surveys, hull and machinery (H&M) insurance surveys, cargo surveys, on/off-hire surveys, draught surveys, bunker surveys, pre-purchase surveys, scrapping surveys (Hong Kong Convention / EU Ship Recycling Regulation), and warranty surveys — with structured fields for IMO number, class society, flag state, gross tonnage, vessel type (tanker, bulker, container, gas carrier, offshore support vessel, FPSO, FSO), age, last drydocking date, last special survey, and next survey due date.",
      ]}
      useCases={[
        { useCase: "Use Case 1", body: "A Singapore marine survey firm (45 surveyors) tracks IACS class society opportunities across Maersk, MSC, CMA CGM, ONE and Evergreen fleets — pipeline forecasting now flags every Special Survey 18 months ahead, growing repeat-survey conversion from 64% to 89%." },
        { useCase: "Use Case 2", body: "A Rotterdam-based P&I correspondent (12 surveyors) routes damage-survey instructions from 15 P&I Clubs (UK Club, Britannia, North, Steamship Mutual, Gard) via the CRM — instruction-to-mobilization time fell from 14 hours to 90 minutes." },
        { useCase: "Use Case 3", body: "A Mumbai marine survey contractor (18 surveyors) manages IRClass and Lloyd's Register parallel pipelines for Shipping Corporation of India and Great Eastern Shipping — eliminated the recurring 'wrong surveyor sent' error that cost two clients in 2024." },
        { useCase: "Use Case 4", body: "A Houston Gulf-coast marine survey firm (22 surveyors) supporting offshore platform surveys for ExxonMobil, Shell and BP tracks NDT-method scope (UT, RT, MT, PT, ECT, visual close-up) per opportunity and matches surveyors to scope automatically." },
      ]}
      keyFeatures={[
        "IACS classification-society opportunity tagging (LR, DNV, ABS, BV, ClassNK, RINA, KR, CCS, IRClass, PRS, CRS, TL)",
        "IMO convention scope per opportunity (SOLAS, MARPOL, Load Line, Tonnage, COLREG, STCW, MLC)",
        "Flag-state filtering (Panama, Liberia, Marshall Islands, Singapore, Hong Kong, UK, Norway NIS/NOR)",
        "Port-state-control (Paris MoU, Tokyo MoU, USCG, AMSA) lead routing",
        "Vessel-type filtering (tanker, bulker, container, gas, OSV, FPSO, FSO, drillship)",
        "Survey-type taxonomy (Annual, Intermediate, Special, Continuous, P&I damage, H&M, draught, bunker)",
        "Surveyor pool management by qualification (Class A, B, C, Hull, Machinery, Cargo, P&I)",
        "P&I Club / insurance-syndicate routing rules (Lloyd's syndicates, IG P&I Clubs)",
        "Charter-party CP clause-driven opportunity scoring (NYPE, BARECON, BIMCO templates)",
        "Auto-forecast next Special Survey + Intermediate based on last build / last special date",
        "Multi-currency opportunity values (USD, EUR, GBP, SGD, JPY, KRW)",
        "Hong Kong Convention / EU SRR ship-recycling opportunity tracking",
        "Mobile app for port-side surveyor capture (offline-capable, attaches GPS / photo evidence)",
      ]}
      integrations={[
        "Lloyd's Register OneOcean platform (Class Direct, ShipRight)",
        "DNV Veracity / Survey Status / Nauticus Machinery",
        "ABS Eagle / ABS Nautical Systems / Eagle.Engineering",
        "Bureau Veritas Veristar (class status, survey planning)",
        "ClassNK NK-SHIPS portal",
        "IACS recognised-organisation data exchange",
        "Marine Traffic / AIS Live API for vessel-position-driven lead alerts",
        "Equasis port-state-control inspection history",
        "Paris MoU / Tokyo MoU public inspection databases",
        "IG P&I Clubs correspondent network instruction inbox",
      ]}
      faqs={[
        { question: "Does the CRM handle parallel class-society pipelines?", answer: "Yes. Vessels under dual class (e.g. LR + ABS, DNV + ClassNK) are common — the CRM tracks each class society as a separate opportunity stream against the same vessel IMO number, with merged survey-scheduling but separate billing per class society. The system flags conflicts when a single surveyor is double-booked across both classes for the same window." },
        { question: "Can the CRM track IMO MARPOL Annex VI sulfur-cap and CII regulatory work?", answer: "Yes. IMO MARPOL Annex VI (sulfur 0.5% cap since 2020, EEXI/CII regulatory survey since 2023, the Carbon Intensity Indicator), MARPOL Annex I (oil pollution), Annex II (chemicals), Annex IV (sewage), Annex V (garbage) and Annex VI (air pollution) are tracked as separate compliance dimensions per vessel. CII rating (A, B, C, D, E) is loaded annually so business-development teams can target D/E-rated vessels for Energy Efficiency Existing Ship Index (EEXI) compliance survey work." },
        { question: "How does the CRM route P&I damage survey instructions?", answer: "P&I Club damage-survey instructions arrive via email, P&I Club correspondent portals (UK P&I, North, Britannia, Steamship Mutual, Gard, Skuld, West of England), or insurance brokers (Marsh, Willis, Aon). The CRM parses incoming instructions, extracts vessel name / IMO / port / damage-type, matches to the nearest qualified surveyor (proximity + qualification + workload) and sends a mobilization brief in under 5 minutes — vs the 4-12 hour manual triage typical in the industry." },
        { question: "Does the CRM support IACS Common Structural Rules survey workflows?", answer: "Yes. IACS Common Structural Rules for Bulk Carriers (CSR-BC) and Oil Tankers (CSR-OT), Common Hull Damage Notations (UR S31), and Enhanced Survey Programme (ESP) for bulk carriers and oil tankers (UR Z10) are loaded as structured survey scope. Close-up survey requirements per UR Z10 (cargo-hold longitudinal members, top-side tanks, hopper tanks, double-bottom tanks) are pre-scoped — surveyors see exactly which compartments require close-up examination per the vessel's age and tonnage." },
        { question: "Can the CRM track tonnage-tax and flag-state opportunities?", answer: "Yes. UK tonnage tax, Singapore Maritime Sector Incentive (MSI), Cyprus tonnage-tax, and Norwegian NIS/NOR flag opportunities each have specific survey requirements that flow into the CRM as workflow stages. Flag-state inspection regimes (DMA Denmark, MCA UK, NMA Norway, MPA Singapore, USCG, AMSA, JCG Japan) are tagged so business-development teams can forecast pipeline by flag." },
        { question: "How does the CRM handle newbuild survey opportunities?", answer: "Newbuild survey opportunities are tracked from yard order through delivery — typical stages include yard-pre-construction (drawing approval), keel laying, block assembly, hull pre-erection, hydro testing, sea trials and final delivery. Each stage carries an estimated surveyor-day budget. The CRM forecasts surveyor demand 18-36 months out for major newbuild programs at Hyundai Heavy Industries, Samsung Heavy Industries, Daewoo Shipbuilding (HHI/SHI/DSME), Imabari Shipbuilding, Mitsubishi Shipbuilding, Yangzijiang, CSSC and Hyundai Mipo." },
        { question: "Does the platform support offshore (mobile offshore drilling units, FPSO, FSO) survey?", answer: "Yes. MODU code surveys for jack-ups, semi-submersibles and drillships; FPSO and FSO classification + flag surveys; subsea-system flexible-riser inspection; mooring-system MIC (mooring integrity certification); offshore lifting-equipment (cranes, winches, LARS) certification. Class societies' offshore-specific rules (LR Code for Offshore Units, ABS MODU/FPS, DNV-OS series, BV NR series) are loaded as structured rule sets." },
        { question: "Can we track condition assessment programme (CAP) work?", answer: "Yes. Lloyd's Register Condition Assessment Programme (CAP) — including CAP Hull, CAP Machinery and CAP Cargo — with the 1-2-3-4 rating scale, is fully supported. ABS Hull Condition Monitoring (HCM) and DNV Hull Integrity Management equivalents are also tracked. CAP work is high-margin survey work commonly required by P&I Clubs and bank lenders before vessel purchases, charter renewals or insurance binding — the CRM tracks the trigger events (charter renewal, change of management, sale-and-purchase) so business-development teams can pursue these opportunities proactively." },
      ]}
    />
  );
}
