import ErpIndustryAppPage from "@/components/ErpIndustryAppPage";

export default function AccountingErpForSaudiArabia() {
  return (
    <ErpIndustryAppPage
      pageTitle="Accounting ERP for Saudi Arabia"
      slug="accounting-erp-for-saudi-arabia"
      appName="Accounting"
      industry="Saudi Arabia inspection and engineering services"
      breadcrumbLabel="Accounting ERP for Saudi Arabia"
      trustBadge="ZATCA Phase 2 / SOCPA / GOSI ready"
      countrySlug="saudi-arabia"
      countryLabel="Saudi Arabia"
      metaDescription="Atlantis NDT ERP Accounting for Saudi Arabia — ZATCA Fatoorah Phase 2 e-invoicing with QR-code TLV, SOCPA-aligned chart of accounts, VAT 15% / WHT, GOSI / Mudad / Wage Protection. Affordable, accessible, and fully customizable."
      heroBody="Atlantis NDT ERP Accounting pre-configured for Saudi Arabia — ZATCA Fatoorah Phase 2 e-invoicing with QR-code TLV encoding, SOCPA (Saudi Organization for Chartered Public Accountants)-aligned chart of accounts, VAT 15% / WHT (withholding tax), GOSI workforce reporting, and Mudad / Wage Protection System integration. Affordable, accessible, and fully customizable."
      whatItIs={[
        "Accounting ERP for Saudi Arabia is pre-configured for the Kingdom's regulatory environment — SOCPA-aligned chart of accounts mapped to the Saudi national chart of accounts, ZATCA (Zakat, Tax and Customs Authority) Fatoorah Phase 2 (Integration) e-invoicing with mandatory QR-code TLV (Tag-Length-Value) encoding and cryptographic stamping, VAT 15% standard rate with zero-rated exports and exempt residential rentals, WHT 5-20% on cross-border services payments, Zakat calculation for Saudi/GCC-owned shareholders, and full multi-currency support (SAR base with USD / EUR / AED / GBP / INR secondary).",
        "Payroll integrates with GOSI (General Organization for Social Insurance) — Saudi nationals at 22% contribution rate (10% employer + 9% employee + 1% Saned + 2% Hafiz), expatriates at 2% occupational-hazard contribution. Wage Protection via Mudad (the SAMA-licensed Wage Protection System) ensures wage transfers to bank accounts are reportable to MoL. Saudization (Nitaqat) headcount-band tracking is built in. Year-end reporting supports IFRS for SMEs and full IFRS for SOCPA-regulated reporting entities.",
      ]}
      useCases={[
        { useCase: "Aramco contractor multi-VAT-rate billing", body: "An Eastern Province contractor (75 techs) bills Aramco at 15% VAT for domestic services and 0% for cross-border consulting — eliminated three recurring ZATCA filing-error refilings and saved approximately SAR 280k of late-filing penalties." },
        { useCase: "SABIC petrochemical complex multi-entity reporting", body: "A Jubail contractor (60 techs) consolidated 4 legal entities (Saudi LLC, free-zone, Bahrain subsidiary, UAE subsidiary) into Atlantis NDT ERP — passed external audit with zero IFRS adjustments." },
        { useCase: "Vision 2030 mega-project Saudization tracking", body: "A Riyadh contractor (35 techs) tracks Saudization (Nitaqat) compliance per project with GOSI-integrated headcount — maintained Platinum-band status across all 12 active Vision 2030 project assignments." },
        { useCase: "RCJY industrial-city ZATCA Phase 2 e-invoicing", body: "A Yanbu contractor (40 techs) deployed ZATCA Fatoorah Phase 2 e-invoicing with QR-code TLV — cleared the August 2024 mandatory integration deadline with zero compliance gaps." },
      ]}
      keyFeatures={[
        "ZATCA Fatoorah Phase 2 e-invoicing with QR-code TLV encoding",
        "ZATCA cryptographic stamping (CSID / PCSID)",
        "SOCPA-aligned chart of accounts",
        "VAT 15% standard / 0% export / exempt rental",
        "WHT 5-20% withholding tax on cross-border services",
        "Zakat calculation for Saudi/GCC shareholders",
        "GOSI Saudi-national 22% / expat 2% auto-calculation",
        "Mudad Wage Protection System integration",
        "Saudization (Nitaqat) headcount-band tracking",
        "Multi-currency (SAR base + USD/EUR/AED/GBP/INR)",
        "Hijri/Gregorian dual dating throughout",
        "Bilingual Arabic/English invoices and journals",
        "IFRS for SMEs and full IFRS reporting",
        "ZATCA Customs HS-code import data integration",
      ]}
      integrations={[
        "ZATCA Fatoorah e-invoicing platform",
        "GOSI workforce-data exchange",
        "Mudad Wage Protection System",
        "Saudi Central Bank (SAMA) bank statement OFX/SWIFT",
        "SAP S/4HANA Financials at Aramco / SABIC",
        "Oracle E-Business Suite at Saudi conglomerates",
        "Hyperion Financial Management at multi-entity groups",
        "STC Cloud / Mobily Business in-Kingdom hosting",
        "Saudi Customs (ZATCA Customs) HS-code import API",
        "SOCPA accountant-portal evidence export",
      ]}
      faqs={[
        { question: "Does the accounting module support ZATCA Phase 2 e-invoicing?", answer: "Yes. ZATCA Fatoorah Phase 2 (Integration) e-invoicing has been progressively mandated since January 2023 for Saudi VAT-registered taxpayers. Atlantis NDT ERP generates ZATCA-compliant XML invoices with QR-code TLV (Tag-Length-Value) encoding, CSID/PCSID cryptographic stamping, and integrates with the ZATCA portal via the official integration API." },
        { question: "Is the data hosted inside Saudi Arabia?", answer: "By default the platform hosts on AWS Middle East (Bahrain) for SACS-002 compliance. For full NCA Cloud Cybersecurity Controls (CCC-1:2020) compliance, in-Kingdom hosting is available via STC Cloud (Riyadh) or Mobily Business — both NCA-licensed providers." },
        { question: "Does the module support GOSI workforce reporting?", answer: "Yes. GOSI (General Organization for Social Insurance) workforce reporting — Saudi nationals at 22% contribution (10% employer + 9% employee + 1% Saned unemployment + 2% Hafiz/Hadaf), expatriates at 2% occupational-hazard contribution — is fully integrated with monthly contribution-filing workflows." },
        { question: "Does the system handle Zakat calculation?", answer: "Yes. Zakat (2.5% on net assets for Saudi-owned and GCC-owned shareholders) is calculated automatically based on the Zakat base — Saudi-source revenue, net assets and adjusted profits — with annual Zakat declaration filing workflow." },
        { question: "Can the system track Saudization (Nitaqat)?", answer: "Yes. Nitaqat (Saudization) headcount-band tracking — Platinum / Green / Yellow / Red bands per economic activity classification — is integrated with GOSI workforce data so the firm's Nitaqat band is recalculated in real time as headcount changes." },
        { question: "Does the system handle WHT on cross-border services?", answer: "Yes. Saudi WHT (withholding tax) — 5% on royalties / consulting / management fees, 15% on services from related-party non-residents, 20% on remittances to tax-haven jurisdictions — is auto-calculated on cross-border payments with double-tax-treaty relief applied where applicable." },
        { question: "Does the system integrate with Mudad Wage Protection?", answer: "Yes. Mudad (the SAMA-licensed Wage Protection System) integration ensures monthly wage transfers to bank accounts are reportable to the Ministry of Labour (MoL) within the required reporting window, with auto-generated Mudad-format submission files." },
      ]}
    />
  );
}
