import ErpIndustryAppPage from "@/components/ErpIndustryAppPage";

export default function CmmsForIndia() {
  return (
    <ErpIndustryAppPage
      pageTitle="CMMS for India"
      slug="cmms-for-india"
      appName="CMMS (Computerized Maintenance Management System)"
      industry="India industrial maintenance operations"
      breadcrumbLabel="CMMS for India"
      trustBadge="PESO / AERB / IBR / OISD / BIS ready"
      metaDescription="Atlantis NDT ERP CMMS for India — PESO Form XVI/XIV submission, AERB radiography, IBR boiler regulations, OISD-141 asset integrity, BIS IS 2825 pressure vessels. Flat $18,000/yr (₹15.0 lakh)."
      heroBody="Atlantis NDT ERP CMMS pre-configured for Indian industrial-maintenance operations — PESO Form XVI/XIV submission, AERB (Atomic Energy Regulatory Board) radiography licensing, IBR (Indian Boiler Regulations) 1950, OISD-141 asset-integrity, BIS IS 2825 pressure-vessel codes, and bilingual English/Hindi asset registers. Flat ₹15,00,000 / $18,000 per year."
      whatItIs={[
        "CMMS for India inside Atlantis NDT ERP is pre-configured for India's diverse industrial-maintenance market — refining, petrochemicals, fertilisers, ammonia-urea, LNG / regasification, steel, automotive, pharmaceutical, aerospace and defence. Damage-mechanism profiles are pre-loaded for principal Indian service environments — H2S sour service at Reliance Jamnagar opportunity crudes, opportunistic-crude TAN (Total Acid Number) corrosion, IOCL Mathura / Panipat / Haldia / Paradip refinery hydroprocess service, ONGC offshore-platform sea-water and chloride exposure, fertiliser ammonia-urea HV-vessel inspection, and steel-plant coke-oven / blast-furnace damage mechanisms.",
        "The CMMS tracks work-order lifecycle with PESO Form XVI/XIV statutory submission, IBR 1950 boiler inspection-interval management, OISD-141 RBI scheduling, AERB radiography licence integration, and BIS IS 2825 / IS 4126 / IS 5572 code-conformity tracking. Reports generate bilingual English/Hindi PDF output with state-specific regional-language options (Marathi / Gujarati / Tamil / Telugu / Kannada / Bengali / Malayalam) for state factory-act submissions.",
      ]}
      useCases={[
        { useCase: "IOCL refinery maintenance contractor", body: "An IOCL Mathura/Panipat refinery contractor (250 vessels) uses CMMS RBI scheduling tied to OISD-141 — turnaround critical-path inspection time fell 18% across two consecutive cycles and eliminated three recurring PESO Form XVI submission gaps." },
        { useCase: "Reliance Jamnagar Phase I+II operator", body: "A Jamnagar Phase I + Phase II maintenance contractor (480 vessels) uses CMMS-integrated TAN (Total Acid Number) opportunity-crude corrosion models — eliminated SAR-equivalent ₹18 crore of premature vessel-replacement spend at Phase II crude tower." },
        { useCase: "ONGC Mumbai High offshore vendor", body: "An ONGC Mumbai High / Bassein offshore-platform maintenance team (320 vessels) tracks sea-water and chloride-SCC damage mechanisms with AS 4458-equivalent IS 2825 inspection — cut platform-shutdown documentation overhead by 42%." },
        { useCase: "Tata Steel Jamshedpur / Kalinganagar maintenance", body: "A Tata Steel maintenance contractor (380 assets across blast furnace, basic oxygen furnace, coke-oven battery, cold-rolling mill) tracks plant-specific damage-mechanism profiles — eliminated two recurring DISH (Jharkhand) audit non-conformances." },
      ]}
      keyFeatures={[
        "PESO Form XVI / XIV statutory-submission generation",
        "IBR 1950 boiler inspection-interval management",
        "OISD-141 RBI scheduling per damage mechanism",
        "AERB radiography licence tracking per source",
        "BIS IS 2825 / IS 4126 / IS 5572 code-conformity tracking",
        "API 510 / 570 / 653 inspection interval auto-calculation",
        "NACE MR0175 sour-service damage-mechanism profiles",
        "TAN (Total Acid Number) opportunity-crude corrosion models",
        "Bilingual English/Hindi + state-language (Mar/Guj/Tam/Tel/Kan/Ben/Mal)",
        "GST e-invoice IRN integration for downstream invoicing",
        "INR-denominated default with USD secondary",
        "State PCB (Pollution Control Board) e-filing per state",
        "Mobile field-tech app with Aadhaar-OTP authentication option",
        "Equipment calibration aligned with NABL ISO 17025",
      ]}
      integrations={[
        "IOCL e-Procurement portal",
        "HPCL e-Procurement portal",
        "BPCL e-Procurement portal",
        "Reliance Industries vendor portal",
        "Nayara Energy / ONGC / GAIL / MRPL vendor portals",
        "L&T Heavy Engineering NDE traveler integration",
        "BHEL / NPCIL / ISRO / HAL supplier portals",
        "SAP S/4HANA at IOCL / HPCL / BPCL / Reliance",
        "Maximo at IOCL / Reliance / Tata Steel",
        "PESO Form XVI/XIV statutory portal",
      ]}
      faqs={[
        { question: "Does the CMMS support PESO Form XVI/XIV?", answer: "Yes. PESO Form XVI (Petroleum Class A/B storage) and Form XIV (compressed-gas / LPG storage) submissions are auto-generated from inspection records with all required vessel parameters, inspector-qualification evidence, and supporting documentation packaged for statutory submission." },
        { question: "Is the data hosted inside India?", answer: "Yes. By default the CMMS hosts on AWS Asia-Pacific (Mumbai) region for MeitY data-residency compliance. For clients requiring SEBI / IRDAI / RBI sector-specific data residency, in-country hosting is available via NIC, CDAC or AWS Local Zones in Hyderabad / Bangalore / Chennai." },
        { question: "Does the CMMS handle IBR 1950 boiler inspections?", answer: "Yes. IBR (Indian Boiler Regulations) 1950 statutory boiler inspections — including hydrostatic test, internal inspection, and intermediate inspection per IBR — are tracked with state-specific Boiler Inspectorate submission workflow. The CMMS auto-generates Form II / Form III submissions." },
        { question: "What is the INR pricing?", answer: "Flat ₹15,00,000 (₹15 lakh) per year at the prevailing USD = 83 INR exchange rate. The fee includes hosting, all 35+ Odoo apps, mobile apps, training and support. Implementation services for Indian clients (data migration, custom IOCL/HPCL/BPCL/Reliance template design, GST e-invoice integration, bilingual English/regional-language template build) are typically quoted ₹4-15 lakh depending on scope." },
        { question: "Does the CMMS handle TAN opportunity-crude corrosion?", answer: "Yes. Reliance Jamnagar, Nayara Vadinar and other Indian opportunistic-crude refiners run high-TAN feedstocks that drive accelerated naphthenic-acid corrosion in crude/vacuum unit hot-circuit piping. The CMMS pre-loads NACE-aligned naphthenic-acid corrosion models with operational-history-driven inspection-interval calculation." },
        { question: "Can the CMMS handle AERB radiography licensing?", answer: "Yes. AERB Class A/B/C industrial-radiography authorisation status is tracked per radiographer, per radioactive source (Ir-192 / Se-75 / Co-60), and per work order. The CMMS auto-alerts when source-handling qualifications expire." },
        { question: "Does the CMMS support state factory-act submissions?", answer: "Yes. State-level Factories Act submissions vary by jurisdiction — DISH Maharashtra, Factories Inspectorate Gujarat / Tamil Nadu / Karnataka / Telangana / Andhra Pradesh / Kerala / West Bengal each have distinct formats. The CMMS generates state-specific PDFs in the local regional language alongside English." },
        { question: "Does the system integrate with SAP PM at IOCL / Reliance?", answer: "Yes. The CMMS bidirectionally syncs work orders, equipment master data and inspection results with SAP Plant Maintenance at IOCL, HPCL, BPCL, Reliance Industries, ONGC and Tata Steel — typically deployed as a contractor-side CMMS that the operator-side SAP PM consumes via OData / RFC." },
      ]}
    />
  );
}
