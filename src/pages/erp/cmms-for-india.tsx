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
      countrySlug="india"
      countryLabel="India"
      metaDescription="Atlantis NDT ERP CMMS for India — PESO Form XVI/XIV submission, AERB radiography, IBR boiler regulations, OISD-141 asset integrity, BIS IS 2825 pressure vessels. Affordable, accessible, and fully customizable."
      heroBody="Atlantis NDT ERP CMMS pre-configured for Indian industrial-maintenance operations — PESO Form XVI/XIV submission, AERB (Atomic Energy Regulatory Board) radiography licensing, IBR (Indian Boiler Regulations) 1950, OISD-141 asset-integrity, BIS IS 2825 pressure-vessel codes, and bilingual English/Hindi asset registers. Affordable, accessible, and fully customizable."
      whatItIs={[
        "CMMS for India inside Atlantis NDT ERP is pre-configured for India's diverse industrial-maintenance market — refining, petrochemicals, fertilisers, ammonia-urea, LNG / regasification, steel, automotive, pharmaceutical, aerospace and defence.",
      ]}
      useCases={[
        { useCase: "IOCL refinery maintenance contractor", body: "" },
        { useCase: "Reliance Jamnagar Phase I+II operator", body: "Example: a Jamnagar Phase I + Phase II maintenance contractor uses CMMS-integrated TAN (Total Acid Number) opportunity-crude corrosion models." },
        { useCase: "ONGC Mumbai High offshore vendor", body: "Example: an ONGC Mumbai High / Bassein offshore-platform maintenance team tracks sea-water and chloride-SCC damage mechanisms with AS 4458-equivalent IS 2825 inspection." },
        { useCase: "Tata Steel Jamshedpur / Kalinganagar maintenance", body: "Example: a Tata Steel maintenance contractor (380 assets across blast furnace, basic oxygen furnace, coke-oven battery, cold-rolling mill) tracks plant-specific damage-mechanism profiles." },
      ]}
      keyFeatures={[
        "PESO Form XVI / XIV statutory-submission generation",
        "IBR 1950 boiler inspection-interval management",
        "AERB radiography licence tracking per source",
        "BIS IS 2825 / IS 4126 / IS 5572 code-conformity tracking",
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
        "PESO Form XVI/XIV statutory portal",
      ]}
      faqs={[
        { question: "Does the CMMS support PESO Form XVI/XIV?", answer: "Yes. PESO Form XVI (Petroleum Class A/B storage) and Form XIV (compressed-gas / LPG storage) submissions are auto-generated from inspection records with all required vessel parameters, inspector-qualification evidence, and supporting documentation packaged for statutory submission." },
        { question: "Is the data hosted inside India?", answer: "Yes. By default the CMMS hosts on AWS Asia-Pacific (Mumbai) region for MeitY data-residency compliance." },
        { question: "Does the CMMS handle IBR 1950 boiler inspections?", answer: "Yes. IBR (Indian Boiler Regulations) 1950 statutory boiler inspections — including hydrostatic test, internal inspection, and intermediate inspection per IBR — are tracked with state-specific Boiler Inspectorate submission workflow. The CMMS auto-generates Form II / Form III submissions." },
        { question: "What does the ERP cost?", answer: "Pricing varies by region and team size — request a tailored quote at info@atlantisndt.com. The platform is affordable, transparent SaaS pricing and includes hosting, all 28 business apps, mobile apps, training and support. Implementation services for Indian clients (data migration, custom IOCL/HPCL/BPCL/Reliance template design, GST e-invoice integration, bilingual English/regional-language template build) are quoted based on scope." },
        { question: "Does the CMMS handle TAN opportunity-crude corrosion?", answer: "Yes. Reliance Jamnagar, Nayara Vadinar and other Indian opportunistic-crude refiners run high-TAN feedstocks that drive accelerated naphthenic-acid corrosion in crude/vacuum unit hot-circuit piping." },
        { question: "Can the CMMS handle AERB radiography licensing?", answer: "Yes. AERB Class A/B/C industrial-radiography authorisation status is tracked per radiographer, per radioactive source (Ir-192 / Se-75 / Co-60), and per work order. The CMMS auto-alerts when source-handling qualifications expire." },
        { question: "Does the CMMS support state factory-act submissions?", answer: "Yes. State-level Factories Act submissions vary by jurisdiction — DISH Maharashtra, Factories Inspectorate Gujarat / Tamil Nadu / Karnataka / Telangana / Andhra Pradesh / Kerala / West Bengal each have distinct formats. The CMMS generates state-specific PDFs in the local regional language alongside English." },
              ]}
    />
  );
}
