import ErpIndustryAppPage from "@/components/ErpIndustryAppPage";

export default function CrmErpForSingapore() {
  return (
    <ErpIndustryAppPage
      pageTitle="CRM ERP for Singapore"
      slug="crm-erp-for-singapore"
      appName="CRM (Customer Relationship Management)"
      industry="Singapore inspection and engineering services"
      breadcrumbLabel="CRM ERP for Singapore"
      trustBadge="MOM CERT / NEA / SAC / BCA ready"
      metaDescription="Atlantis NDT ERP CRM for Singapore — MOM CERT NDT-personnel certification, NEA Radiation Protection licensing, SAC ISO 17020/17025 accreditation, BCA building inspection, InvoiceNow PEPPOL e-invoice. Flat regional pricing (S$24,300)."
      heroBody="Atlantis NDT ERP CRM pre-configured for Singapore inspection firms — MOM (Ministry of Manpower) CERT NDT-personnel certification, NEA (National Environment Agency) Radiation Protection licensing, SAC (Singapore Accreditation Council) ISO 17020/17025 accreditation, BCA-graded contractor status, and InvoiceNow PEPPOL e-invoicing. Flat S$24,300 / $18,000 per year."
      whatItIs={[
        "CRM ERP for Singapore inside Atlantis NDT ERP is pre-configured for Singapore's high-density Jurong Island and broader inspection-services market. Every opportunity carries structured fields for MOM CERT (Workplace Safety and Health (NDT Inspection) Regulations) NDT-personnel qualification, NEA Radiation Protection and Nuclear Safety (RPNS) industrial-radiography licence, SAC-SINGLAS ISO 17020/17025 accreditation currency, BCA-graded contractor registration, MPA (Maritime and Port Authority) marine-inspection licensing, and CAAS (Civil Aviation Authority of Singapore) Part 145 repair-station status.",
        "Pipeline data is hosted on AWS Asia-Pacific (Singapore) ap-southeast-1 region for PDPA (Personal Data Protection Act 2012) data-residency compliance, with optional in-country hosting via Singtel DC or M1 Cloud for clients requiring MTCS (Multi-Tier Cloud Security) Level 3 sovereign-cloud certification. Reports generate English PDF output (plus optional Simplified Chinese / Bahasa Melayu / Tamil for select trade-mark and statutory submissions). S$-denominated commercial terms apply by default with USD secondary currency.",
      ]}
      useCases={[
        { useCase: "Jurong Island ExxonMobil/Shell/SRC contractor", body: "A Jurong-Island-access inspection firm (32 techs) tracks parallel ExxonMobil Singapore Refining Company, Shell Bukom and Pulau Ular, Singapore Petroleum Company (SPC) and PCS pipelines with MOM CERT currency — eliminated the 4-6 per-shutdown island-access disputes and lifted operator-bid conversion from 24% to 41%." },
        { useCase: "Tuas BCA / construction-fabrication vendor", body: "A Tuas contractor (24 techs) routes opportunities by BCA contractor-grade (W01/W02/W04) and PUB-Sand permits — mobilisation lead time on Singapore construction-fabrication scopes fell from 11 days to 3 days." },
        { useCase: "Sembawang / Tuas marine and shipyard specialist", body: "A Sembawang-based contractor (28 techs) manages Sembcorp Marine, Keppel Shipyard, ST Engineering Marine, Pacific Carriers Ltd and ASL Marine parallel pipelines with IACS classification-society routing — won three additional shipyard scopes after structured surveyor-pool visibility." },
        { useCase: "Changi aerospace MRO supplier", body: "A Changi-based inspection firm (20 techs) tracks ST Engineering Aerospace, Pratt & Whitney Singapore, Rolls-Royce Seletar, SIA Engineering Company (SIAEC) and JAMCO Singapore opportunities with NAS 410 Rev 5 / EN 4179 / CAAS AWB Part 145 currency — eliminated dual-formatting overhead for aerospace and Jurong Island work." },
      ]}
      keyFeatures={[
        "MOM CERT (WSH NDT Inspection Regulations) personnel-cert tracking",
        "NEA RPNS industrial-radiography licence tracking",
        "SAC-SINGLAS ISO 17020 / 17025 accreditation currency",
        "BCA-graded contractor registration (W01/W02/W04) tagging",
        "MPA marine-inspection licensing for shipyard/offshore work",
        "CAAS AWB Part 145 repair-station documentation",
        "EMA gas/electricity infrastructure regulator awareness",
        "Jurong Island access permit (JTC / EMA / NEA / EDB) tracking",
        "Sembcorp / Keppel / ST Engineering Marine vendor portals",
        "ST Engineering Aerospace / Pratt & Whitney / Rolls-Royce vendor portals",
        "PDPA 2012 data-residency overlay (Singapore-only)",
        "InvoiceNow PEPPOL e-invoicing (IMDA) integration",
        "GST 9% compliance with IRAS e-Tax integration",
        "Customer-facing portal with SingPass / Corppass authentication",
      ]}
      integrations={[
        "Sembcorp Industries vendor portal",
        "Keppel Offshore & Marine vendor portal",
        "ST Engineering vendor portal",
        "SIA Engineering Company supplier portal",
        "JTC (Jurong Town Corporation) facility-access system",
        "Singtel DC / M1 Cloud MTCS-3 hosting",
        "IMDA InvoiceNow PEPPOL e-invoicing",
        "IRAS GST e-Tax portal",
        "SAC-SINGLAS accreditation registry",
        "NEA RPNS licensing portal",
      ]}
      faqs={[
        { question: "Does the CRM support MOM CERT certification tracking?", answer: "Yes. Every opportunity carries structured fields for MOM CERT NDT-personnel certification (the Workplace Safety and Health (NDT Inspection) Regulations require CERT-certified personnel for NDT on Singapore pressure equipment) — including method, level and expiry date per individual. The CRM auto-flags opportunities where CERT currency would expire before contract execution." },
        { question: "Is the data hosted inside Singapore?", answer: "Yes. By default the CRM hosts on AWS Asia-Pacific (Singapore) ap-southeast-1 region for PDPA 2012 data-residency compliance. For clients requiring MTCS (Multi-Tier Cloud Security) Level 3 sovereign-cloud certification, in-country hosting is available via Singtel DC or M1 Cloud — both IMDA-licensed data-centre operators with Tier-III+ Uptime Institute certification." },
        { question: "How does the CRM handle NEA radiography licensing?", answer: "NEA Radiation Protection and Nuclear Safety (RPNS) industrial-radiography authorisation status is tracked per radiographer, per radioactive source (Ir-192 / Se-75), and per opportunity. The CRM auto-alerts when source-handling qualifications expire and integrates with NEA RPNS e-licensing for renewal tracking." },
        { question: "What is the S$ pricing?", answer: "Flat S$24,300 per year at the prevailing USD = 1.35 S$ exchange rate. The fee includes hosting, all 35+ Odoo apps, mobile apps, training and support. Implementation services for Singapore clients (data migration, custom Jurong-Island-operator report design, InvoiceNow PEPPOL integration, BCA / CAAS / MPA workflow templates) are typically quoted S$22,000-65,000 depending on scope." },
        { question: "Does the platform handle InvoiceNow PEPPOL e-invoicing?", answer: "Yes. IMDA InvoiceNow PEPPOL e-invoicing has been mandatory for GST-registered businesses since November 2025 (Phase 2). Atlantis NDT ERP generates PEPPOL BIS Billing 3.0 UBL XML invoices and integrates with the IMDA InvoiceNow network via PEPPOL Access Points, returning delivery confirmation automatically." },
        { question: "Does the CRM track BCA-graded contractor registration?", answer: "Yes. BCA contractor-grade registration (W01/W02/W04 for general building works, ME01/ME05 for mechanical-engineering, CR06 for fire-protection-engineering) is tracked at the legal-entity level with grade-renewal alerts. The CRM auto-flags opportunities where the required BCA grade exceeds the firm's current registration." },
        { question: "Can the CRM handle CAAS Part 145 aerospace MRO work?", answer: "Yes. CAAS Approved Maintenance Organisation (Part 145) status, NAS 410 Rev 5 personnel certification, EN 4179 European Aerospace Standard compliance, and customer-specific written practices from Pratt & Whitney, Rolls-Royce, GE Aviation, Honeywell Aerospace and Boeing are tracked in parallel. NADCAP eAuditNet audit-pack export is a single-click operation." },
        { question: "Does the system integrate with Sembcorp / Keppel / ST Engineering vendor portals?", answer: "Yes. The CRM exports SAC-SINGLAS-aligned evidence packs directly into Sembcorp Industries, Keppel Offshore & Marine, ST Engineering and SIAEC vendor-portal-compatible formats, eliminating manual document-uploading workflow that historically slowed pre-mob qualification by 3-5 days." },
      ]}
    />
  );
}
