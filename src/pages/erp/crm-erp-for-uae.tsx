import ErpIndustryAppPage from "@/components/ErpIndustryAppPage";

export default function CrmErpForUae() {
  return (
    <ErpIndustryAppPage
      pageTitle="CRM ERP for UAE"
      slug="crm-erp-for-uae"
      appName="CRM (Customer Relationship Management)"
      industry="UAE inspection and engineering services"
      breadcrumbLabel="CRM ERP for UAE"
      trustBadge="ADNOC AGES / FANR / OSHAD ready"
      metaDescription="Atlantis NDT ERP CRM for UAE — ADNOC AGES qualification mapping, FANR radiography licensing, OSHAD-SF HSE compliance, EIAC/ENAS accreditation tracking, bilingual Arabic/English pipeline. Flat $18,000/yr (AED 66,000)."
      heroBody="Atlantis NDT ERP CRM pre-configured for UAE inspection firms — ADNOC AGES (Asset Integrity Group Engineering Standards) opportunity scoring, FANR radiography licensing awareness, OSHAD-SF HSE framework alignment, EIAC / ENAS / DAC accreditation tracking, and bilingual Arabic/English CRM output. Flat AED 66,000 / $18,000 per year."
      whatItIs={[
        "CRM ERP for UAE inside Atlantis NDT ERP is pre-configured for the Emirates' inspection-services market. Every opportunity is tagged against ADNOC group (ADNOC Onshore, ADNOC Offshore, ADNOC Refining, ADNOC Gas, ADNOC LNG, Borouge), ENOC, Emirates Global Aluminium, DUCAB, Dolphin Energy, Sharjah National Oil Company (SNOC), and Ras Al Khaimah Maritime City counterparties — with structured fields for the AGES (Asset Integrity Group Engineering Standards) scope, FANR (Federal Authority for Nuclear Regulation) industrial-radiography licence number, and OSHAD-SF (Occupational Safety and Health Center Abu Dhabi — Statutory Framework) compliance status.",
        "Data residency defaults to AWS Middle East (UAE) region in Abu Dhabi or Bahrain, with optional in-country hosting via Etisalat Digital or du UAE Cloud for clients requiring NESA (National Electronic Security Authority) IA Standards compliance. Reports generate bilingual Arabic/English PDF output with AED-denominated commercial terms by default. The platform supports ADGM (Abu Dhabi Global Market) and DIFC (Dubai International Financial Centre) free-zone subsidiaries with independent data-residency overlays for regulated entities operating under English common law within the wider UAE legal framework.",
      ]}
      useCases={[
        { useCase: "Abu Dhabi ADNOC Approved Contractor", body: "A Mussafah-based inspection firm (80 techs) tracks parallel ADNOC Onshore, ADNOC Offshore, ADNOC Refining and Borouge pipelines — eliminated the recurring AGES qualification submission gap and now passes ADNOC Technical Center audits with zero findings." },
        { useCase: "Jebel Ali / Dubai Investment Park contractor", body: "A Jebel Ali inspection firm (45 techs) routes opportunities by FANR radiography source-handling licence and DAC accreditation status — pre-mob qualification submission fell from 11 days to 2.5 days." },
        { useCase: "Sharjah SNOC-focused vendor", body: "A Hamriyah Free Zone contractor (22 techs) manages Sharjah National Oil Company (Saja'a, Moveyeid, Kahaif) opportunities and Hamriyah Free Zone Authority permit status in parallel — won three additional SNOC scopes after structured pipeline visibility." },
        { useCase: "Ras Al Khaimah / Fujairah marine-port specialist", body: "An RAK-based contractor (18 techs) tracks Ras Al Khaimah Maritime City and Fujairah bunker-port inspection opportunities — the CRM forecasts MoU (Riyadh / Indian Ocean MoU) port-state-control inspection demand 6-12 months ahead." },
      ]}
      keyFeatures={[
        "ADNOC AGES qualification scope per opportunity",
        "ADNOC Onshore / Offshore / Refining / Gas / LNG / Borouge parallel pipelines",
        "ENOC / EGA / DUCAB / Dolphin / SNOC / TAQA counterparty tagging",
        "FANR industrial-radiography licence tracking",
        "OSHAD-SF (Statutory Framework) HSE compliance status",
        "EIAC / ENAS / DAC accreditation currency alerts",
        "ADGM / DIFC free-zone subsidiary data-residency overlay",
        "Bilingual Arabic/English CRM views and PDF output",
        "Hijri/Gregorian dual dating throughout",
        "AED-denominated default with USD/SAR secondary",
        "UAE Federal Tax Authority (FTA) e-invoicing readiness",
        "ADNOC Tejari vendor-portal evidence export",
        "NESA IA Standards compliance overlay for sensitive data",
        "Cross-emirate workforce mobility (MoHRE / TASNEEF) tracking",
      ]}
      integrations={[
        "ADNOC Tejari vendor portal",
        "ADNOC APQS personnel qualification database",
        "ENOC vendor portal",
        "Emirates Global Aluminium vendor portal",
        "DUCAB vendor portal",
        "SNOC vendor portal",
        "Etisalat Digital / du UAE Cloud hosting",
        "FTA e-invoicing portal",
        "EIAC / ENAS / DAC accreditation registry",
        "FANR radiography licensing portal",
      ]}
      faqs={[
        { question: "Does the CRM support ADNOC AGES qualification tracking?", answer: "Yes. Every opportunity carries structured fields for AGES (Asset Integrity Group Engineering Standards) personnel-qualification scope, ADNOC Company Standard ACS-01 inspection-report formats, and Tejari vendor-portal status. The CRM auto-flags opportunities where AGES currency would expire before contract execution." },
        { question: "Is the data hosted inside the UAE?", answer: "By default the CRM hosts on AWS Middle East (UAE) in Abu Dhabi for ADNOC-aligned data residency. For clients requiring full NESA IA Standards compliance, in-country hosting is available via Etisalat Digital or du UAE Cloud — both TDRA-licensed cloud service providers." },
        { question: "How does the CRM handle FANR radiography licensing?", answer: "FANR industrial-radiography authorisation status is tracked per radiographer, per radioactive source, and per opportunity. The CRM auto-alerts when source-handling qualifications expire and integrates with FANR e-licensing for renewal tracking. FANR's bi-annual surveillance audits become single-click evidence-pack exports." },
        { question: "What is the AED pricing?", answer: "Flat AED 66,000 per year at the prevailing USD = 3.6725 AED pegged exchange rate. The fee includes hosting, all 35+ Odoo apps, mobile apps, training and support. Implementation services for UAE clients (data migration, custom ADNOC/ENOC report design, bilingual Arabic/English template build) are typically quoted AED 75,000-220,000 depending on scope." },
        { question: "Does the platform handle UAE FTA e-invoicing?", answer: "Yes. The UAE Federal Tax Authority e-invoicing mandate (rolling implementation 2026-2027) is supported via the platform's XML invoice generator with Peppol-aligned UBL output, ready for FTA platform integration when the technical standard finalises." },
        { question: "Does the CRM support ADGM and DIFC free-zone subsidiaries?", answer: "Yes. ADGM and DIFC subsidiaries operate under English common law within the UAE federal framework. The CRM supports parallel ADGM/DIFC and onshore-UAE legal-entity records with independent data-residency overlays, separate ledgers, and free-zone-aware procurement workflows." },
        { question: "Can the CRM track OSHAD-SF HSE compliance?", answer: "Yes. The OSHAD-SF (Statutory Framework) compliance status is tracked at the entity, project and opportunity levels — including OSHAD-RV (Regulatory Vehicles) for the construction and oil-and-gas sectors. The CRM auto-flags opportunities where OSHAD-SF currency would expire mid-contract." },
        { question: "Does the system integrate with ADNOC Tejari?", answer: "Yes. The CRM exports AGES-aligned evidence packs directly into ADNOC Tejari-compatible formats, eliminating manual document-uploading workflow that historically slowed pre-mob qualification by 7-9 days." },
      ]}
    />
  );
}
