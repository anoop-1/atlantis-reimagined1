import ErpIndustryAppPage from "@/components/ErpIndustryAppPage";

export default function AccountingErpForSingapore() {
  return (
    <ErpIndustryAppPage
      pageTitle="Accounting ERP for Singapore"
      slug="accounting-erp-for-singapore"
      appName="Accounting"
      industry="Singapore inspection and engineering services"
      breadcrumbLabel="Accounting ERP for Singapore"
      trustBadge="InvoiceNow PEPPOL / GST / IRAS / CPF ready"
      metaDescription="Atlantis NDT ERP Accounting for Singapore — IMDA InvoiceNow PEPPOL e-invoicing, GST 9%, SFRS chart of accounts, CPF / SDL / FWL auto-calc, IRAS e-filing. Flat regional pricing (S$24,300)."
      heroBody="Atlantis NDT ERP Accounting pre-configured for Singapore — IMDA InvoiceNow PEPPOL e-invoicing (mandatory November 2025 Phase 2), GST 9% (raised from 8% effective January 2024), SFRS (Singapore Financial Reporting Standards) / SFRS(I) chart of accounts, and CPF / SDL / FWL auto-calculation. Flat S$24,300 / $18,000 per year."
      whatItIs={[
        "Accounting ERP for Singapore is pre-configured for Singapore's regulatory environment — SFRS (Singapore Financial Reporting Standards) fully converged with IFRS, SFRS(I) for entities applying IFRS in full, SFRS for Small Entities for SMEs, GST 9% (raised from 8% effective 1 January 2024) with zero-rated international services and exempt financial services, IMDA InvoiceNow PEPPOL e-invoicing mandatory for GST-registered businesses since November 2025 Phase 2, and full multi-currency support (S$ base with USD / MYR / IDR / CNY / THB / VND secondary).",
        "Payroll integrates with CPF (Central Provident Fund) at 20% employee + 17% employer for Singapore Citizens / PRs (Year 3+), SDL (Skills Development Levy) at 0.25%, FWL (Foreign Worker Levy) for S-Pass and Work Permit holders per sector and quota, and IRAS AIS (Auto-Inclusion Scheme) Form IR8A annual employee income reporting. Statutory reporting includes ACRA Annual Return / AGM filing, GST F5 quarterly return, IR8A annual employee submission, GIRO direct-debit for CPF / GST / IRAS, and SGQR-compliant invoice QR codes. Multi-entity consolidation supports Singapore HoldCo + offshore subsidiaries with independent ledgers.",
      ]}
      useCases={[
        { useCase: "Jurong Island operator-tenant billing", body: "A Jurong-Island contractor (32 techs) bills ExxonMobil / Shell / SRC / PCS multi-operator clients via InvoiceNow PEPPOL — eliminated 4-6 per-shutdown invoice-format disputes." },
        { useCase: "Sembcorp Marine multi-currency project billing", body: "A Tuas contractor (28 techs) handles Sembcorp Marine project billing in S$ / USD / EUR with MAS FX-rate auto-update — passed external audit with zero foreign-currency adjustments." },
        { useCase: "Changi aerospace AIS / IR8A filing", body: "A Changi aerospace contractor (20 techs) submits IRAS AIS Form IR8A for 20 staff including Singapore Citizens / PRs / S-Pass / Work Permit holders — eliminated manual IR8A preparation and saved 3 days of year-end accountant time." },
        { useCase: "Multi-sector GST classification", body: "An island-resident contractor (24 techs) handles GST 9% standard / 0% international services (cross-border NDT consulting) / exempt financial services billing — passed IRAS GST F5 audit with zero classification findings." },
      ]}
      keyFeatures={[
        "IMDA InvoiceNow PEPPOL e-invoicing (mandatory Nov 2025 Phase 2)",
        "GST 9% (raised from 8% effective Jan 2024)",
        "SFRS / SFRS(I) / SFRS for Small Entities chart of accounts",
        "Corporate Tax 17% with partial-exemption first S$200k",
        "CPF 20% employee + 17% employer (Year 3+ SC/PR)",
        "SDL (Skills Development Levy) 0.25%",
        "FWL (Foreign Worker Levy) S-Pass / Work Permit per sector",
        "IRAS AIS (Auto-Inclusion Scheme) Form IR8A submission",
        "Multi-currency (S$ base + USD/MYR/IDR/CNY/THB/VND)",
        "MAS (Monetary Authority of Singapore) FX-rate auto-update",
        "English UI with optional Simplified Chinese / Bahasa Melayu / Tamil",
        "SGQR-compliant invoice QR codes",
        "ACRA Annual Return / AGM filing automation",
        "GIRO direct-debit for CPF / GST / IRAS",
      ]}
      integrations={[
        "IMDA InvoiceNow PEPPOL e-invoicing network",
        "IRAS GST F5 e-Tax portal",
        "IRAS AIS (Auto-Inclusion Scheme) submission",
        "CPF iSubmit portal",
        "ACRA BizFile+ annual return filing",
        "MAS Foreign Exchange Reference Rates API",
        "Singapore Customs TradeNet HS-code import",
        "SAP S/4HANA Financials at ExxonMobil / Shell / Sembcorp",
        "Singtel DC / M1 Cloud MTCS-3 hosting",
        "SingPass / Corppass customer portal authentication",
      ]}
      faqs={[
        { question: "Does the accounting module support InvoiceNow PEPPOL e-invoicing?", answer: "Yes. IMDA InvoiceNow PEPPOL e-invoicing has been mandatory for GST-registered businesses since November 2025 Phase 2 rollout. Atlantis NDT ERP generates PEPPOL BIS Billing 3.0 UBL XML invoices and integrates with the IMDA InvoiceNow network via PEPPOL Access Points, returning delivery confirmation automatically." },
        { question: "Is the data hosted inside Singapore?", answer: "Yes. By default the platform hosts on AWS Asia-Pacific (Singapore) ap-southeast-1 for PDPA 2012 compliance. For MTCS Level 3 sovereign-cloud certification, in-country hosting is available via Singtel DC or M1 Cloud." },
        { question: "Does the module support GST 9%?", answer: "Yes. GST 9% (raised from 8% effective 1 January 2024) is fully supported with zero-rated international services and exempt financial services classification, IRAS GST F5 quarterly return filing, and reverse-charge mechanism for imported services." },
        { question: "Does the system handle CPF / SDL / FWL?", answer: "Yes. CPF (Central Provident Fund) at 20% employee + 17% employer for Singapore Citizens / PRs Year 3+ (lower rates for first 2 years of PR status), SDL (Skills Development Levy) at 0.25% (capped at S$11.25/month per employee), and FWL (Foreign Worker Levy) for S-Pass and Work Permit holders per sector and quota are auto-calculated with CPF iSubmit integration." },
        { question: "Can the system handle IRAS AIS / Form IR8A?", answer: "Yes. IRAS AIS (Auto-Inclusion Scheme) Form IR8A annual employee income reporting is auto-generated from payroll with direct submission to IRAS via the AIS API. Form IR8S (additional employee income) and Form IR21 (tax clearance for departing foreign employees) are also supported." },
        { question: "Does the system handle ACRA Annual Return?", answer: "Yes. ACRA Annual Return (AR) / AGM (Annual General Meeting) filing via BizFile+ is auto-generated from the financial statements and director / shareholder registers, with XBRL-format financial statements for companies above the SFRS threshold." },
        { question: "Does the system integrate with Jurong Island operator SAP?", answer: "Yes. Bidirectional sync of GL postings, AP/AR balances and vendor master data with SAP S/4HANA Financials at ExxonMobil Singapore Refining Company, Shell Bukom, Sembcorp Industries, Keppel Offshore & Marine and ST Engineering via OData / RFC." },
      ]}
    />
  );
}
