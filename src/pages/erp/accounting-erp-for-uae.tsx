import ErpIndustryAppPage from "@/components/ErpIndustryAppPage";

export default function AccountingErpForUae() {
  return (
    <ErpIndustryAppPage
      pageTitle="Accounting ERP for UAE"
      slug="accounting-erp-for-uae"
      appName="Accounting"
      industry="UAE inspection and engineering services"
      breadcrumbLabel="Accounting ERP for UAE"
      trustBadge="FTA / WPS / AAOIFI / Corporate Tax ready"
      metaDescription="Atlantis NDT ERP Accounting for UAE — FTA e-invoicing PEPPOL, IFRS / AAOIFI chart of accounts, VAT 5%, UAE Corporate Tax 9%, WPS (Wage Protection System), MoHRE compliance. Affordable, accessible, and fully customizable."
      heroBody="Atlantis NDT ERP Accounting pre-configured for UAE — FTA (Federal Tax Authority) e-invoicing on PEPPOL-aligned UBL, IFRS chart of accounts with AAOIFI Islamic-finance overlay, VAT 5% standard / 0% exports / exempt residential / out-of-scope DZIT, UAE Corporate Tax 9% (introduced June 2023), and WPS (Wage Protection System) integration. Affordable, accessible, and fully customizable."
      whatItIs={[
        "Accounting ERP for UAE is pre-configured for the Emirates' regulatory environment — IFRS chart of accounts with AAOIFI (Accounting and Auditing Organization for Islamic Financial Institutions) overlay for Sharia-compliant subsidiaries, FTA e-invoicing on PEPPOL-aligned UBL XML (rolling 2026-2027 mandate), VAT 5% with FTA TRN (Tax Registration Number) cryptographic validation, UAE Corporate Tax 9% on taxable income above AED 375k (introduced 1 June 2023), QFZP (Qualifying Free Zone Person) 0% tax regime for qualifying free-zone subsidiaries, and full multi-currency support (AED base with USD / SAR / EUR / GBP / INR secondary).",
        "Payroll integrates with WPS (Wage Protection System administered jointly by MoHRE and the UAE Central Bank) — monthly wage transfers to bank accounts are reportable within the required window with WPS SIF (Salary Information File) auto-generation. Emiratisation (Tawteen / Nafis) headcount tracking is integrated with MoHRE workforce data. End-of-Service Gratuity calculation under Article 51 of UAE Labour Law (Federal Decree-Law 33 of 2021) is auto-calculated. Multi-entity consolidation supports onshore-UAE, ADGM (Abu Dhabi Global Market) and DIFC (Dubai International Financial Centre) free-zone entities with independent ledgers.",
      ]}
      useCases={[
        { useCase: "ADNOC contractor VAT + Corporate Tax", body: "An Abu Dhabi contractor (80 techs) bills ADNOC at 5% VAT and tracks UAE Corporate Tax 9% liability — eliminated three recurring FTA filing-error refilings in year one." },
        { useCase: "JAFZA / DAFZA free-zone QFZP regime", body: "A Jebel Ali Free Zone trading contractor (32 techs) qualifies for QFZP 0% UAE Corporate Tax on free-zone qualifying income — the system auto-classifies qualifying vs non-qualifying income per transaction." },
        { useCase: "ADGM-regulated subsidiary consolidation", body: "An ADGM-resident financial-services subsidiary (12 staff) consolidates with the parent onshore-Dubai LLC under IFRS — passed external audit with zero IFRS adjustments." },
        { useCase: "Emiratisation Tawteen tracking", body: "A Sharjah contractor (45 techs) tracks Emiratisation (Tawteen) compliance with MoHRE workforce data — maintained the required 2% Emiratisation ratio across all skilled-worker bands." },
      ]}
      keyFeatures={[
        "FTA e-invoicing PEPPOL-aligned UBL XML (2026-2027 mandate)",
        "IFRS chart of accounts with AAOIFI Islamic-finance overlay",
        "VAT 5% standard / 0% exports / exempt residential / out-of-scope DZIT",
        "UAE Corporate Tax 9% on taxable income above AED 375k",
        "QFZP free-zone 0% qualifying-income classification",
        "WPS (Wage Protection System) SIF auto-generation",
        "Emiratisation (Tawteen / Nafis) MoHRE integration",
        "End-of-Service Gratuity Article 51 auto-calculation",
        "Multi-currency (AED base + USD/SAR/EUR/GBP/INR)",
        "Multi-entity consolidation (onshore + ADGM + DIFC)",
        "Hijri/Gregorian dual dating throughout",
        "Bilingual Arabic/English invoices and journals",
        "FTA TRN cryptographic validation",
        "UAE Customs HS-code import data integration",
      ]}
      integrations={[
        "FTA e-invoicing portal (PEPPOL Access Points)",
        "WPS via UAE Central Bank-licensed banks",
        "MoHRE workforce-data exchange",
        "UAE Central Bank SWIFT / OFX bank statements",
        "SAP S/4HANA Financials at ADNOC / Borouge / EGA",
        "Etisalat Digital / du UAE Cloud hosting",
        "UAE Customs (Federal Customs Authority) HS-code import API",
        "DED (Department of Economic Development) trade-licence registry",
        "JAFZA / DAFZA / Hamriyah Free Zone authority systems",
        "ADGM / DIFC regulator e-filing",
      ]}
      faqs={[
        { question: "Does the accounting module support UAE Corporate Tax 9%?", answer: "Yes. UAE Corporate Tax 9% on taxable income above AED 375,000 (introduced 1 June 2023 under Federal Decree-Law 47 of 2022) is fully supported with FTA Corporate Tax registration tracking, taxable-income calculation including transfer-pricing adjustments per OECD Pillar 2 GloBE Rules, and annual return filing workflow." },
        { question: "Is the data hosted inside the UAE?", answer: "Yes. By default the platform hosts on AWS Middle East (UAE) in Abu Dhabi. For NESA IA Standards compliance, in-country hosting is available via Etisalat Digital or du UAE Cloud — both TDRA-licensed providers." },
        { question: "Does the module support FTA e-invoicing?", answer: "Yes. The UAE FTA e-invoicing mandate (rolling 2026-2027 implementation) is supported via the PEPPOL-aligned UBL XML invoice generator, ready for FTA platform integration when the technical standard finalises." },
        { question: "Does the system handle QFZP free-zone 0% tax?", answer: "Yes. QFZP (Qualifying Free Zone Person) 0% UAE Corporate Tax regime requires that 95%+ of revenue be derived from qualifying activities (mainly trading and services to non-UAE persons or other free-zone persons). The system auto-classifies qualifying vs non-qualifying income per transaction to ensure QFZP eligibility is maintained." },
        { question: "Can the system handle WPS?", answer: "Yes. WPS (Wage Protection System administered by MoHRE and the UAE Central Bank) integration ensures monthly wage transfers are reportable within the required window, with WPS SIF (Salary Information File) auto-generation in the official format for submission via UAE Central Bank-licensed banks." },
        { question: "Does the system handle End-of-Service Gratuity?", answer: "Yes. End-of-Service Gratuity calculation under Article 51 of UAE Labour Law (Federal Decree-Law 33 of 2021) — 21 days of basic salary per year for the first 5 years, 30 days thereafter, capped at 2 years' total basic salary — is auto-calculated and accrued monthly." },
        { question: "Does the system support ADGM and DIFC subsidiaries?", answer: "Yes. ADGM and DIFC subsidiaries operate under English common law within the UAE federal framework. The accounting module supports parallel ADGM/DIFC and onshore-UAE legal-entity records with independent ledgers, IFRS-compliant consolidation, and free-zone-aware tax workflows." },
      ]}
    />
  );
}
