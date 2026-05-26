import ErpIndustryAppPage from "@/components/ErpIndustryAppPage";

export default function CmmsForSingapore() {
  return (
    <ErpIndustryAppPage
      pageTitle="CMMS for Singapore"
      slug="cmms-for-singapore"
      appName="CMMS (Computerized Maintenance Management System)"
      industry="Singapore industrial maintenance operations"
      breadcrumbLabel="CMMS for Singapore"
      trustBadge="MOM CERT / NEA / SAC-SINGLAS / BCA ready"
      metaDescription="Atlantis NDT ERP CMMS for Singapore — MOM CERT NDT certification, NEA RPNS radiography, SAC-SINGLAS accreditation, BCA-graded contractor, InvoiceNow PEPPOL. Flat regional pricing (S$24,300)."
      heroBody="Atlantis NDT ERP CMMS pre-configured for Singapore industrial-maintenance operations — MOM CERT NDT-personnel certification, NEA RPNS (Radiation Protection and Nuclear Safety) radiography licensing, SAC-SINGLAS ISO 17020/17025 accreditation, and English / multilingual asset registers. Flat S$24,300 / $18,000 per year."
      whatItIs={[
        "CMMS for Singapore inside Atlantis NDT ERP is pre-configured for Jurong Island's high-density petrochemical complex and the broader Singapore industrial-maintenance market. Damage-mechanism profiles are pre-loaded for principal Singapore service environments — ExxonMobil Singapore Refining Company (Jurong) opportunity-crude TAN corrosion, Shell Bukom and Pulau Ular FCC and hydroprocess service, Singapore Refining Company atmospheric-and-vacuum distillation, PCS olefins-cracker furnace tubes, Sumitomo / Mitsui phenols-and-aromatics service, and tropical-humidity / sea-salt external corrosion across coastal facilities.",
        "The CMMS tracks work-order lifecycle with MOM CERT NDT-personnel qualification, WSH (NDT Inspection) Regulations compliance, NEA RPNS radiography licensing, JTC / EMA / NEA / EDB Jurong Island access-permit integration, BCA-graded contractor status tracking, MPA marine-inspection licensing, and CAAS Part 145 aerospace-MRO documentation. Reports generate English PDF (plus optional Simplified Chinese / Bahasa Melayu / Tamil) with S$-denominated commercial terms and IMDA InvoiceNow PEPPOL e-invoicing.",
      ]}
      useCases={[
        { useCase: "ExxonMobil Singapore Refining maintenance", body: "A Jurong-Island ExxonMobil Singapore Refining Company maintenance contractor (240 vessels) uses CMMS RBI scheduling tied to API 581 — eliminated 4-6 per-shutdown island-access disputes across two consecutive major maintenance seasons." },
        { useCase: "Shell Bukom / Pulau Ular operator", body: "A Pulau Bukom / Pulau Ular Shell-focused maintenance contractor (180 vessels) uses CMMS-integrated FCC catalyst-handling and hydroprocess damage-mechanism tracking — recovered approximately S$420k/year in reclaimed shutdown billable time." },
        { useCase: "PCS / SRC / Sumitomo petrochemical maintenance", body: "A Tuas-based maintenance contractor (260 vessels across PCS, SRC, Sumitomo Chemical, Mitsui Phenols and Lanxess) tracks plant-specific damage mechanisms with NACE / API-aligned intervals — eliminated three repeat MOM CERT-evidence gaps in 18 months." },
        { useCase: "Sembcorp Marine / Keppel Shipyard contractor", body: "A Tuas / Sembawang marine maintenance contractor (140 assets across shipyard-resident vessels, FPSO modules, jack-up rigs) tracks IACS classification-society survey intervals with MPA marine-inspection licensing integration." },
      ]}
      keyFeatures={[
        "MOM CERT WSH (NDT Inspection) personnel-certification tracking",
        "NEA RPNS industrial-radiography licence tracking",
        "SAC-SINGLAS ISO 17020 / 17025 accreditation currency",
        "BCA-graded contractor registration (W01/W02/W04) tagging",
        "MPA marine-inspection licensing for shipyard/offshore work",
        "CAAS AWB Part 145 aerospace-MRO repair-station documentation",
        "Jurong Island access permit (JTC / EMA / NEA / EDB) tracking",
        "API 510 / 570 / 653 inspection interval auto-calculation",
        "NACE MR0175 sour-service damage-mechanism profiles",
        "Opportunity-crude TAN naphthenic-acid corrosion models",
        "PDPA 2012 data-residency overlay (Singapore-only)",
        "InvoiceNow PEPPOL e-invoicing (IMDA) integration",
        "GST 9% compliance with IRAS e-Tax integration",
        "Customer-facing portal with SingPass / Corppass authentication",
      ]}
      integrations={[
        "ExxonMobil SAP PM / Singapore Refining vendor portal",
        "Shell Bukom Pulau Ular vendor portal",
        "Sembcorp Industries vendor portal",
        "Keppel Offshore & Marine vendor portal",
        "ST Engineering vendor portal",
        "JTC facility-access system",
        "Singtel DC / M1 Cloud MTCS-3 hosting",
        "IMDA InvoiceNow PEPPOL e-invoicing",
        "IRAS GST e-Tax portal",
        "SAC-SINGLAS accreditation registry",
      ]}
      faqs={[
        { question: "Does the CMMS support MOM CERT NDT certification?", answer: "Yes. Every work order carries structured fields for MOM CERT NDT-personnel certification (the WSH (NDT Inspection) Regulations require CERT-certified personnel for NDT on Singapore pressure equipment) — including method, level and expiry date per individual. The CMMS auto-flags work orders where CERT currency would expire before completion." },
        { question: "Is the data hosted inside Singapore?", answer: "Yes. By default the CMMS hosts on AWS Asia-Pacific (Singapore) ap-southeast-1 region for PDPA 2012 compliance. For clients requiring MTCS Level 3 sovereign-cloud certification, in-country hosting is available via Singtel DC or M1 Cloud — both IMDA-licensed Tier-III+ Uptime Institute-certified data-centre operators." },
        { question: "Does the CMMS handle Jurong Island access permits?", answer: "Yes. JTC Jurong Town Corporation, EMA, NEA, EDB and individual operator-site access permits — including the JTC Jurong Island Pass system, ExxonMobil JIE access pass, and Shell Bukom Pulau Ular gate pass — are tracked per inspector per facility. The CMMS auto-flags access-permit-expiry before mobilisation." },
        { question: "What is the S$ pricing?", answer: "Flat S$24,300 per year at the prevailing USD = 1.35 S$ exchange rate. The fee includes hosting, all 35+ Odoo apps, mobile apps, training and support. Implementation services for Singapore clients (data migration, custom Jurong-Island operator template design, InvoiceNow PEPPOL integration, BCA / CAAS / MPA workflow templates) are typically quoted S$22,000-65,000 depending on scope." },
        { question: "Does the platform handle InvoiceNow PEPPOL e-invoicing?", answer: "Yes. IMDA InvoiceNow PEPPOL e-invoicing has been mandatory for GST-registered businesses since November 2025 Phase 2 rollout. Atlantis NDT ERP generates PEPPOL BIS Billing 3.0 UBL XML invoices and integrates with IMDA InvoiceNow network via PEPPOL Access Points." },
        { question: "Does the CMMS track BCA-graded contractor registration?", answer: "Yes. BCA contractor-grade registration (W01/W02/W04 for general building works, ME01/ME05 for mechanical-engineering, CR06 for fire-protection-engineering) is tracked at the legal-entity level with grade-renewal alerts." },
        { question: "Can the CMMS handle CAAS Part 145 aerospace MRO work?", answer: "Yes. CAAS Approved Maintenance Organisation (Part 145) status, NAS 410 Rev 5 personnel certification, EN 4179 European Aerospace Standard compliance, and customer-specific written practices from Pratt & Whitney, Rolls-Royce, GE Aviation, Honeywell Aerospace and Boeing are tracked in parallel. NADCAP eAuditNet audit-pack export is single-click." },
        { question: "Does the system integrate with Jurong Island operator portals?", answer: "Yes. The CMMS exports SAC-SINGLAS-aligned evidence packs directly into ExxonMobil, Shell, Singapore Refining Company, PCS and Sembcorp Industries vendor-portal-compatible formats." },
      ]}
    />
  );
}
