import ErpIndustryAppPage from "@/components/ErpIndustryAppPage";

export default function AccountingErpForMalaysia() {
  return (
    <ErpIndustryAppPage
      pageTitle="Accounting ERP for Malaysia"
      slug="accounting-erp-for-malaysia"
      appName="Accounting"
      industry="Malaysia inspection and engineering services"
      breadcrumbLabel="Accounting ERP for Malaysia"
      trustBadge="LHDN MyInvois / SST / MFRS / EPF / SOCSO ready"
      metaDescription="Atlantis NDT ERP Accounting for Malaysia — LHDN MyInvois e-invoicing, SST 8%, MFRS chart of accounts, EPF (KWSP) / SOCSO / EIS / PCB auto-calc, bilingual Bahasa Melayu/English. Flat regional pricing."
      heroBody="Atlantis NDT ERP Accounting pre-configured for Malaysia — LHDN MyInvois e-invoicing, SST 8% (Sales and Service Tax), MFRS (Malaysian Financial Reporting Standards) chart of accounts, EPF (KWSP) / SOCSO (PERKESO) / EIS / PCB auto-calculation, and bilingual Bahasa Melayu/English invoices. Flat RM 84,000 / $18,000 per year."
      whatItIs={[
        "Accounting ERP for Malaysia is pre-configured for Malaysia's regulatory environment — MFRS (Malaysian Financial Reporting Standards, fully converged with IFRS since 2012), MPERS (Malaysian Private Entities Reporting Standard) for non-public-interest entities, SST 8% (raised from 6% effective March 2024 for taxable services), LHDN MyInvois e-invoicing mandatory for businesses above RM 100M turnover since August 2024 with phased extension to all businesses by July 2025, and full multi-currency support (RM base with USD / SGD / IDR / THB / VND secondary).",
        "Payroll integrates with EPF (Employees Provident Fund / KWSP) at 11% employee + 13% employer (12% for monthly wage above RM 5,000), SOCSO (Social Security Organisation / PERKESO) at 0.5% employee + 1.75% employer for Employment Injury Scheme + Invalidity Pension Scheme, EIS (Employment Insurance System) at 0.2% employee + 0.2% employer, and PCB (Monthly Tax Deduction / Potongan Cukai Bulanan) per LHDN tax tables. Statutory reporting includes LHDN annual Form C (Corporate Tax 24%), Form E (Employer's Return), KWSP Form A / EPF i-Akaun, SOCSO PERKESO ASSIST, and SST returns via MySST.",
      ]}
      useCases={[
        { useCase: "PETRONAS vendor multi-state SST", body: "A KL contractor (45 techs) operates across Selangor / Johor / Sarawak / Sabah with PETRONAS multi-asset billing — eliminated recurring SST classification errors and saved RM 180k of late-filing penalties." },
        { useCase: "Pengerang RAPID multi-currency", body: "A Pengerang contractor (38 techs) handles RAPID PRefChem billing in RM / USD / SGD with Bank Negara Malaysia FX-rate auto-update — passed external audit with zero foreign-currency adjustments." },
        { useCase: "Penang aerospace MIDA pioneer status", body: "A Penang aerospace SEZ contractor (22 techs) qualifies for MIDA Pioneer Status with 70-100% tax-exemption on statutory income — auto-classifies qualifying vs non-qualifying income per transaction." },
        { useCase: "Sarawak state-specific employment", body: "A Bintulu contractor (28 techs) tracks Sarawak State-specific employment (Bumiputra Sarawak vs non-Bumiputra) for state-government contract eligibility — maintained 60% Bumiputra Sarawak workforce ratio across all active Sarawak contracts." },
      ]}
      keyFeatures={[
        "LHDN MyInvois e-invoicing (mandatory above RM 100M since Aug 2024)",
        "SST 8% (Sales and Service Tax) with state-specific handling",
        "MFRS / MPERS chart of accounts",
        "Corporate Tax 24% with MIDA Pioneer Status overlay",
        "EPF (KWSP) 11% employee + 13% employer auto-calc",
        "SOCSO (PERKESO) 0.5% / 1.75% Employment Injury + IPS",
        "EIS 0.2% / 0.2% Employment Insurance System",
        "PCB (Monthly Tax Deduction) per LHDN tax tables",
        "Multi-currency (RM base + USD/SGD/IDR/THB/VND)",
        "Bank Negara Malaysia FX-rate auto-update",
        "Bilingual Bahasa Melayu/English invoices",
        "Sabah / Sarawak state-specific tax handling",
        "MIDA / MITI / SIRIM investment-incentive tracking",
        "Halal certification (JAKIM) compliance for halal-supply work",
      ]}
      integrations={[
        "LHDN MyInvois e-invoicing portal",
        "MySST (Sales and Service Tax) portal",
        "EPF i-Akaun (KWSP)",
        "SOCSO PERKESO ASSIST portal",
        "EIS PERKESO employment-insurance portal",
        "Bank Negara Malaysia (BNM) FX-rate API",
        "Royal Malaysian Customs uCustoms HS-code import",
        "MIDA (Malaysian Investment Development Authority) portal",
        "SAP S/4HANA Financials at PETRONAS / PCG / MLNG",
        "TM Cloud Alpha / YTL Data Center in-country hosting",
      ]}
      faqs={[
        { question: "Does the accounting module support LHDN MyInvois e-invoicing?", answer: "Yes. LHDN MyInvois e-invoicing has been mandatory for businesses above RM 100M turnover since August 2024, with phased extension to all businesses by July 2025. Atlantis NDT ERP generates JSON-format e-invoices via the MyInvois Portal API, returning UIN (Unique Identifier Number) and QR code automatically." },
        { question: "Is the data hosted inside Malaysia?", answer: "Yes. By default the platform hosts on AWS Asia-Pacific (Malaysia) Kuala Lumpur region (launched 2024) for PDPA 2010 compliance. For CSM27001 sovereign-cloud certification, in-country hosting is available via TM Cloud Alpha or YTL Data Center." },
        { question: "Does the module support SST 8%?", answer: "Yes. SST (Sales and Service Tax) at the 8% rate (raised from 6% effective March 2024 for taxable services; sales tax remains 5% or 10% by category) is fully supported with taxable / exempt / out-of-scope classification per item and bi-monthly SST return filing via MySST." },
        { question: "Does the system handle EPF / SOCSO / EIS / PCB?", answer: "Yes. EPF (Employees Provident Fund / KWSP), SOCSO (Social Security Organisation / PERKESO), EIS (Employment Insurance System), and PCB (Monthly Tax Deduction / Potongan Cukai Bulanan) are auto-calculated on payroll with EPF i-Akaun, SOCSO PERKESO ASSIST and EIS PERKESO portal integration." },
        { question: "Can the system handle MIDA Pioneer Status?", answer: "Yes. MIDA (Malaysian Investment Development Authority) Pioneer Status — 70-100% tax-exemption on statutory income for promoted activities — and Investment Tax Allowance (ITA) for qualifying capital expenditure are auto-classified per transaction to ensure pioneer eligibility is maintained." },
        { question: "Does the system handle Sabah / Sarawak state-specific tax?", answer: "Yes. Sabah and Sarawak operate distinct state-level sales tax under the State Sales Tax (Sales Tax on Imported Taxable Goods into Sabah and Sarawak) regime, alongside the federal SST. The system handles state-of-execution per transaction." },
        { question: "Does the system integrate with SAP at PETRONAS?", answer: "Yes. Bidirectional sync of GL postings, AP/AR balances and vendor master data with SAP S/4HANA Financials at PETRONAS, PETRONAS Chemicals Group (PCG), MLNG and RAPID PRefChem via OData / RFC." },
      ]}
    />
  );
}
