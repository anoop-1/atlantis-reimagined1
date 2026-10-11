import ErpIndustryAppPage from "@/components/ErpIndustryAppPage";

export default function ProjectManagementErpForIndia() {
  return (
    <ErpIndustryAppPage
      pageTitle="Project Management ERP for India"
      slug="project-management-erp-for-india"
      appName="Project Management"
      industry="India inspection projects and turnarounds"
      breadcrumbLabel="Project Management for India"
      trustBadge="PESO / AERB / OISD / IBR / ISNT ready"
      countrySlug="india"
      countryLabel="India"
      metaDescription="Atlantis NDT ERP Project Management for India — IOCL/HPCL/BPCL/Reliance turnaround scheduling, PESO Form XVI/XIV per project, AERB radiography per inspector, bilingual English/Hindi. Affordable, accessible, and fully customizable."
      heroBody="Atlantis NDT ERP Project Management pre-configured for Indian inspection projects — IOCL / HPCL / BPCL / Reliance / Nayara / ONGC turnaround scheduling, PESO Form XVI/XIV statutory submission per project, AERB radiography licensing per inspector, and bilingual English/Hindi UI. Affordable, accessible, and fully customizable."
      whatItIs={[
        "Project Management ERP for India tracks every inspection project from RFQ through final-invoice closure with structured fields for PESO Form XVI/XIV submission status, AERB industrial-radiography licence, OISD-141 asset-integrity scope, IBR 1950 boiler inspection awareness, BIS IS 2825 / IS 4126 code conformity, and parallel ISNT/ASNT/PCN inspector qualification. Project templates pre-load IOCL Mathura/Panipat/Haldia/Paradip refinery turnarounds, HPCL Mumbai/Visakh/Mahul shutdowns, BPCL Mumbai/Bina/Kochi major-maintenance, Reliance Jamnagar Phase I+II turnarounds, Nayara Vadinar refinery events, ONGC offshore-platform shutdowns, and L&T Heavy Engineering / BHEL / NPCIL / ISRO / HAL supplier-inspection projects.",
      ]}
      useCases={[
        { useCase: "IOCL Mathura/Panipat refinery turnaround", body: "Example: a Delhi-NCR contractor manages IOCL Mathura turnaround across 280 vessel inspections." },
        { useCase: "Reliance Jamnagar mega-turnaround", body: "Example: a Jamnagar contractor runs parallel Reliance Phase I + Phase II turnaround inspection projects." },
        { useCase: "ONGC Mumbai High offshore platform shutdown", body: "Example: a Mumbai contractor tracks ONGC Mumbai High platform-shutdown inspection across BHN, BPA, BPB and BHF platforms with sea-water damage models." },
        { useCase: "Bangalore aerospace HAL/GE/PW supplier project", body: "Example: a Bangalore aerospace contractor manages HAL fighter-aircraft engine-component inspection projects with NAS 410 Rev 5 / NADCAP-aware scope tracking." },
      ]}
      keyFeatures={[
        "IOCL / HPCL / BPCL / Reliance / Nayara / ONGC turnaround templates",
        "PESO Form XVI/XIV submission per project",
        "AERB radiography licensing per inspector per project",
        "OISD-141 asset-integrity scope per project",
        "IBR 1950 boiler inspection per project",
        "BIS IS 2825 / IS 4126 / IS 5572 code-conformity tagging",
        "ISNT / ASNT / PCN parallel inspector qualification",
        "GST e-invoice IRN integration per project invoice",
        "TDS / TCS / PF / ESI deduction auto-calculation",
        "INR-denominated cost tracking with USD parallel",
        "State factory-act submission per state",
        "Customer-portal Aadhaar-OTP authentication option",
        "Multi-state project resource leveling",
      ]}
      integrations={[
        "Primavera P6 at IOCL / HPCL / Reliance EPCs",
        "Microsoft Project at L&T / BHEL",
        "IOCL / HPCL / BPCL e-Procurement portal",
        "Reliance Industries vendor portal",
        "GST e-invoice IRN portal (NIC IRP)",
        "PESO Form XVI/XIV statutory portal",
        "AERB radiography licensing portal",
        "NABL accreditation registry",
      ]}
      faqs={[
        { question: "Does the project module support IOCL/HPCL/BPCL turnaround scheduling?", answer: "Yes. Turnaround project templates pre-load typical IOCL / HPCL / BPCL refinery turnaround scope structures with parallel-unit critical-path scheduling, PESO Form XVI inspector-qualification gates, and operator e-Procurement-portal pre-mob evidence-pack workflows." },
        { question: "Is the data hosted inside India?", answer: "Yes. By default the project data hosts on AWS Asia-Pacific (Mumbai) for MeitY data-residency compliance." },
        { question: "Does the module support state factory-act submissions?", answer: "Yes. State-level Factories Act submissions vary by jurisdiction — DISH Maharashtra, Factories Inspectorate Gujarat / Tamil Nadu / Karnataka / Telangana / Andhra Pradesh / Kerala / West Bengal each have distinct formats. Per-project state-submission workflow generates state-specific PDFs in the local regional language alongside English." },
        { question: "What does the ERP cost?", answer: "Pricing varies by region and team size — request a tailored quote at info@atlantisndt.com. The subscription includes hosting, all 28 business apps, mobile apps, training and support. Implementation services are quoted based on scope." },
        { question: "Does the project module integrate with Primavera P6 at IOCL / Reliance?", answer: "Yes. The module bidirectionally exchanges activities, milestones and resource assignments with Primavera P6 deployments at IOCL, HPCL, BPCL, Reliance Industries and tier-1 EPC contractors (L&T Hydrocarbon, EIL, Toyo, Technip) via XER file exchange or P6 web services." },
        { question: "Can the module handle PESO Form XVI/XIV submission per project?", answer: "Yes. PESO Form XVI (Petroleum Class A/B storage) and Form XIV (compressed-gas / LPG storage) submissions are auto-generated per project with all required vessel parameters, inspector-qualification evidence, and supporting documentation packaged for PESO statutory submission." },
        { question: "Does the system handle TDS / TCS / PF / ESI deductions?", answer: "Yes. TDS (Tax Deducted at Source under Section 194C / 194J), TCS (Tax Collected at Source), PF (Provident Fund 12%), and ESI (Employee State Insurance 0.75%) deductions are auto-calculated on project invoices and labour cost postings, with PF UAN and ESI IP integration." },
        { question: "Does the system integrate with IOCL/HPCL/BPCL e-Procurement?", answer: "Yes. The project module exports OISD-141-aligned evidence packs directly into IOCL, HPCL, BPCL, Reliance, Nayara, ONGC and GAIL e-Procurement-portal-compatible formats." },
      ]}
    />
  );
}
