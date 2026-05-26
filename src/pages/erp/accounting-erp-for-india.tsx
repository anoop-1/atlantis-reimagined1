import ErpIndustryAppPage from "@/components/ErpIndustryAppPage";

export default function AccountingErpForIndia() {
  return (
    <ErpIndustryAppPage
      pageTitle="Accounting ERP for India"
      slug="accounting-erp-for-india"
      appName="Accounting"
      industry="India inspection and engineering services"
      breadcrumbLabel="Accounting ERP for India"
      trustBadge="GST e-invoice IRN / TDS / TCS / MCA ready"
      metaDescription="Atlantis NDT ERP Accounting for India — GST e-invoice IRN via NIC IRP, TDS / TCS / PF / ESI / PT, Ind AS / Indian GAAP chart of accounts, MCA XBRL filing, bilingual English/Hindi. Flat regional pricing."
      heroBody="Atlantis NDT ERP Accounting pre-configured for India — GST e-invoice IRN via NIC IRP (Invoice Registration Portal), TDS / TCS / PF / ESI / Professional Tax auto-deduction, Ind AS / Indian GAAP chart of accounts, MCA XBRL filing, and bilingual English/Hindi UI. Flat ₹15,00,000 / $18,000 per year."
      whatItIs={[
        "Accounting ERP for India is pre-configured for India's complex multi-tier regulatory environment — Ind AS (Indian Accounting Standards converged with IFRS) for listed and large unlisted companies, Indian GAAP for smaller entities, GST (Goods and Services Tax) with CGST + SGST / IGST split and 5%/12%/18%/28% rate tiers, GST e-invoice IRN (Invoice Reference Number) mandatory for businesses above ₹5 crore turnover, TDS (Tax Deducted at Source) per Section 194C / 194J / 194I, TCS (Tax Collected at Source), and full multi-currency support (INR base with USD / GBP / EUR / SGD / AED secondary).",
        "Payroll integrates with PF (Provident Fund 12% under EPFO), ESI (Employee State Insurance 0.75%), Professional Tax (state-specific 0-₹2,500/year), Gratuity (15 days per year after 5 years' service capped at ₹20 lakh under Payment of Gratuity Act 1972), and Bonus Act 1965 (8.33%-20% of salary up to wage ceiling of ₹21,000). Statutory reporting includes MCA (Ministry of Corporate Affairs) XBRL annual filing, MGT-7 / AOC-4, GSTR-1 / GSTR-3B / GSTR-9 / GSTR-9C, Form 24Q / 26Q TDS returns, Form 27EQ TCS returns, and PF UAN / ESI IP / PT submissions. Multi-entity consolidation supports SEZ, EOU and STP subsidiaries with independent ledgers.",
      ]}
      useCases={[
        { useCase: "Multi-state IOCL/HPCL/BPCL contractor", body: "A Mumbai contractor (50 techs) operates across Maharashtra / Gujarat / Tamil Nadu / Andhra Pradesh / Karnataka with separate GSTINs per state — eliminated recurring inter-state GST reconciliation errors and saved ₹18 lakh of late-filing penalties." },
        { useCase: "Reliance Jamnagar mega-turnaround multi-vendor billing", body: "A Jamnagar contractor (60 techs) handles Reliance multi-vendor consolidated billing across Phase I + Phase II — passed Reliance Q/A vendor audit with zero MoC findings." },
        { useCase: "Bangalore aerospace SEZ exporter", body: "A Bangalore aerospace SEZ contractor (35 techs) operates dual books (SEZ for tax-exempt aerospace exports + DTA for domestic supply) — maintained STPI Soft Landing Pad / SEZ unit certification through three consecutive customs audits." },
        { useCase: "Pan-India multi-state Factory Act submissions", body: "A Hyderabad contractor (40 techs) submits state factory-act compliance in Telangana / Andhra Pradesh / Karnataka / Tamil Nadu — auto-generated state-language PDFs cut compliance overhead 47%." },
      ]}
      keyFeatures={[
        "GST e-invoice IRN via NIC IRP (Invoice Registration Portal)",
        "Multi-state GSTIN per state with intra-/inter-state classification",
        "GST rates 5% / 12% / 18% / 28% with HSN/SAC code per item",
        "CGST + SGST / IGST split auto-calculation",
        "TDS Section 194C (contractor) / 194J (professional) / 194I (rent)",
        "TCS Section 206C and 206C(1H) for high-value sales",
        "PF (EPFO) 12% employer + 12% employee with UAN integration",
        "ESI 0.75% with state ESIC IP integration",
        "Professional Tax (state-specific 0-₹2,500/year)",
        "Gratuity (15 days/year × salary after 5 years, capped ₹20 lakh)",
        "Bonus Act 1965 (8.33-20% up to wage ceiling ₹21,000)",
        "Ind AS / Indian GAAP chart of accounts",
        "MCA XBRL annual filing (MGT-7 / AOC-4)",
        "Bilingual English/Hindi + state-language invoices",
      ]}
      integrations={[
        "GST e-invoice IRN portal (NIC IRP)",
        "GST portal (gst.gov.in) for GSTR-1 / GSTR-3B / GSTR-9",
        "Income Tax e-filing portal (TDS / TCS / Form 26AS)",
        "MCA21 portal (MGT-7 / AOC-4 / XBRL)",
        "EPFO UAN portal (PF)",
        "ESIC portal (ESI IP)",
        "Professional Tax state portals (Maharashtra / Karnataka / WB etc.)",
        "ICEGATE customs HS-code import API",
        "SAP S/4HANA Financials at IOCL / HPCL / BPCL / Reliance",
        "Tally / BUSY interop for SME accountant data exchange",
      ]}
      faqs={[
        { question: "Does the accounting module support GST e-invoice IRN?", answer: "Yes. The GST e-invoice IRN (Invoice Reference Number) mandate applies to all businesses with turnover above ₹5 crore since August 2023. Atlantis NDT ERP generates JSON-format e-invoices and integrates with the NIC IRP (Invoice Registration Portal) via the official API, returning IRN and QR code automatically." },
        { question: "Is the data hosted inside India?", answer: "Yes. By default the platform hosts on AWS Asia-Pacific (Mumbai) for MeitY data-residency compliance. For SEBI/IRDAI/RBI sector-specific data residency, in-country hosting is available via NIC, CDAC or AWS Local Zones in Hyderabad / Bangalore / Chennai." },
        { question: "Does the module support multi-state GST?", answer: "Yes. Multi-state operations with separate GSTINs per state are supported with intra-state vs inter-state classification per invoice line, CGST + SGST or IGST split auto-calculation, HSN/SAC code per item, and reverse-charge mechanism (RCM) handling for unregistered-dealer purchases and specified services." },
        { question: "What is the INR pricing?", answer: "Flat ₹15,00,000 per year. The fee includes hosting, all 35+ Odoo apps, mobile apps, training and support. Implementation services are typically quoted ₹4-15 lakh depending on scope." },
        { question: "Does the system handle TDS / TCS?", answer: "Yes. TDS Section 194C (contractor 1% individual / 2% company), 194J (professional 10%), 194I (rent 10%) and TCS Section 206C / 206C(1H) (0.1% on sales above ₹50 lakh) are auto-calculated with PAN-validation and Form 26AS reconciliation. Quarterly Form 24Q / 26Q TDS returns and Form 27EQ TCS returns are auto-generated." },
        { question: "Can the system handle SEZ / EOU / STP units?", answer: "Yes. Special Economic Zone (SEZ), Export Oriented Unit (EOU) and Software Technology Park (STP) subsidiaries operate under independent customs / GST regimes. The system supports dual-book accounting (SEZ tax-exempt + DTA domestic) with auto-classification of qualifying vs non-qualifying transactions." },
        { question: "Does the system handle MCA XBRL filing?", answer: "Yes. MCA (Ministry of Corporate Affairs) XBRL annual filing — MGT-7 (Annual Return), AOC-4 (Financial Statements XBRL), MR-3 (Secretarial Audit) — is auto-generated from the trial balance and financial statements with MCA21 portal integration." },
        { question: "Does the system support state factory-act submissions?", answer: "Yes. State-level Factories Act submissions vary by jurisdiction — DISH Maharashtra, Factories Inspectorate Gujarat / Tamil Nadu / Karnataka / Telangana / Andhra Pradesh / Kerala / West Bengal each have distinct formats. The system generates state-specific PDFs in the local regional language alongside English." },
      ]}
    />
  );
}
