import ErpIndustryAppPage from "@/components/ErpIndustryAppPage";

export default function ProjectManagementErpForSingapore() {
  return (
    <ErpIndustryAppPage
      pageTitle="Project Management ERP for Singapore"
      slug="project-management-erp-for-singapore"
      appName="Project Management"
      industry="Singapore inspection projects and turnarounds"
      breadcrumbLabel="Project Management for Singapore"
      trustBadge="MOM CERT / NEA / SAC-SINGLAS / BCA ready"
      countrySlug="singapore"
      countryLabel="Singapore"
      metaDescription="Atlantis NDT ERP Project Management for Singapore — Jurong Island turnaround scheduling, MOM CERT per inspector, NEA RPNS radiography per project, InvoiceNow PEPPOL per invoice. Affordable, accessible, and fully customizable."
      heroBody="Atlantis NDT ERP Project Management pre-configured for Singapore inspection projects — Jurong Island operator-tenant turnaround scheduling, MOM CERT inspector mobilization, NEA RPNS radiography per project, and IMDA InvoiceNow PEPPOL e-invoicing. Affordable, accessible, and fully customizable."
      whatItIs={[
        "Project Management ERP for Singapore tracks every inspection project from RFQ through final-invoice closure with structured fields for MOM CERT NDT-personnel certification (Workplace Safety and Health (NDT Inspection) Regulations), NEA RPNS industrial-radiography licensing, SAC-SINGLAS ISO 17020/17025 accreditation, BCA-graded contractor status, MPA marine-inspection licensing, CAAS Part 145 aerospace-MRO documentation, and JTC / EMA / NEA / EDB Jurong Island access-permit integration.",
        "Project templates pre-load ExxonMobil Singapore Refining Company turnarounds, Shell Bukom / Pulau Ular shutdowns, Singapore Refining Company major-maintenance, PCS / Sumitomo / Mitsui Phenols petrochemical shutdowns, Sembcorp Marine / Keppel Shipyard / ST Engineering Marine FPSO and vessel inspection, ST Engineering Aerospace / Pratt & Whitney / Rolls-Royce / SIAEC aerospace MRO projects, and BCA-graded construction-fabrication inspection. S$-denominated cost tracking with CPF / SDL / FWL auto-calculation.",
      ]}
      useCases={[
        { useCase: "ExxonMobil Singapore Refining turnaround", body: "Example: a Jurong-Island contractor manages ExxonMobil Singapore Refining Company turnaround across 240 vessel inspections." },
        { useCase: "Shell Bukom shutdown event", body: "Example: a Pulau Bukom-focused contractor runs Shell Bukom FCC / hydroprocess shutdown inspection with 180 vessels." },
        { useCase: "Sembcorp Marine FPSO conversion project", body: "Example: a Tuas contractor manages Sembcorp Marine FPSO conversion inspection with IACS classification-society survey integration." },
        { useCase: "ST Engineering Aerospace narrow-body MRO project", body: "Example: a Changi aerospace contractor manages ST Engineering Aerospace narrow-body MRO inspection projects with NAS 410 Rev 5 / CAAS Part 145-aware scope tracking." },
      ]}
      keyFeatures={[
        "Jurong Island operator-tenant turnaround templates",
        "MOM CERT NDT certification per inspector per project",
        "NEA RPNS industrial-radiography per project",
        "SAC-SINGLAS ISO 17020 / 17025 accreditation per project",
        "BCA-graded contractor status per project",
        "MPA marine-inspection licensing per shipyard project",
        "CAAS AWB Part 145 per aerospace MRO project",
        "JTC Jurong Island Pass / EMA / NEA / EDB access integration",
        "IMDA InvoiceNow PEPPOL e-invoicing per project invoice",
        "CPF / SDL / FWL auto-calculation on labour costs",
        "S$-denominated cost tracking with USD parallel",
        "English UI with optional Simplified Chinese / Bahasa Melayu / Tamil",
        "Customer-portal SingPass / Corppass authentication",
        "GST 9% compliance with IRAS e-Tax integration",
      ]}
      integrations={[
        "Primavera P6 at ExxonMobil / Shell EPCs",
        "Microsoft Project at SRC / PCS",
        "Sembcorp / Keppel / ST Engineering vendor portals",
        "ST Engineering Aerospace supplier portal",
        "JTC Jurong Island Pass system",
        "Singtel DC / M1 Cloud MTCS-3 hosting",
        "IMDA InvoiceNow PEPPOL e-invoicing",
        "IRAS GST e-Tax portal",
        "SAC-SINGLAS accreditation registry",
      ]}
      faqs={[
        { question: "Does the project module support Jurong Island turnaround scheduling?", answer: "Yes. Turnaround project templates pre-load typical ExxonMobil / Shell / SRC / PCS turnaround scope structures with parallel-unit critical-path scheduling, MOM CERT inspector-qualification gates, and operator-tenant vendor-portal pre-mob evidence-pack workflows. JTC Jurong Island Pass access-permit integration ensures every inspector mobilizing to JIE has valid pass status." },
        { question: "Is the data hosted inside Singapore?", answer: "Yes. By default the project data hosts on AWS Asia-Pacific (Singapore) ap-southeast-1 for PDPA 2012 compliance. For MTCS Level 3 sovereign-cloud certification, in-country hosting is available via Singtel DC or M1 Cloud." },
        { question: "Does the module support InvoiceNow PEPPOL e-invoicing?", answer: "Yes. IMDA InvoiceNow PEPPOL e-invoicing has been mandatory for GST-registered businesses since November 2025 Phase 2. The project module generates PEPPOL BIS Billing 3.0 UBL XML invoices via PEPPOL Access Points per project milestone or stage payment." },
        { question: "Does the project module integrate with Primavera P6 at ExxonMobil / Shell?", answer: "Yes. The module bidirectionally exchanges activities, milestones and resource assignments with Primavera P6 deployments at ExxonMobil Singapore Refining Company, Shell Bukom, Sembcorp Marine, Keppel Offshore & Marine and tier-1 EPC contractors via XER file exchange or P6 web services." },
        { question: "Can the module handle CAAS Part 145 aerospace MRO projects?", answer: "Yes. CAAS Approved Maintenance Organisation (Part 145) project tracking, NAS 410 Rev 5 personnel certification per project, EN 4179 European Aerospace Standard compliance, and customer-specific written practices from Pratt & Whitney, Rolls-Royce, GE Aviation, Honeywell Aerospace and Boeing are tracked per project. NADCAP eAuditNet audit-pack export is single-click per project." },
        { question: "Does the system handle CPF / SDL / FWL deductions?", answer: "Yes. CPF (Central Provident Fund 20% employee + 17% employer), SDL (Skills Development Levy 0.25%), and FWL (Foreign Worker Levy for S-Pass and Work Permit holders) are auto-calculated on project labour cost postings, with CPF iSubmit and IRAS AIS integration." },
        { question: "Does the system integrate with Jurong Island operator portals?", answer: "Yes. The project module exports SAC-SINGLAS-aligned evidence packs directly into ExxonMobil, Shell, SRC, PCS and Sembcorp Industries vendor-portal-compatible formats." },
      ]}
    />
  );
}
