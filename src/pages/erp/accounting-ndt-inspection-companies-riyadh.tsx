import ErpTripleCrossPage, { ErpTripleCrossProps } from '@/components/ErpTripleCrossPage';
const data: ErpTripleCrossProps = {
  "moduleSlug": "accounting",
  "industrySlug": "ndt-inspection-companies",
  "citySlug": "riyadh",
  "moduleName": "Accounting & Finance",
  "industryName": "NDT Inspection Companies",
  "cityName": "Riyadh",
  "countryName": "Saudi Arabia",
  "isoCountry": "SA",
  "lat": 24.7136,
  "lng": 46.6753,
  "title": "Accounting & Finance Software for NDT Inspection Companies in Riyadh",
  "desc": "Accounting ERP module for NDT inspection companies in Riyadh — ZATCA e-invoicing, VAT, IFRS, Saudization (Nitaqat), Aramco APQS invoicing, bilingual Arabic / English. Demo: info@atlantisndt.com.",
  "introPara1": "NDT inspection companies in Riyadh operate under Saudi financial-reporting regulations — ZATCA (Zakat, Tax and Customs Authority) e-invoicing (Fatoorah Phase 1 mandatory since December 2021, Phase 2 from January 2023), VAT 15% (effective July 2020), corporate income tax (20% for foreign-owned, Zakat 2.5% for Saudi-owned), Saudization (Nitaqat) compliance, IFRS adoption (Saudi Arabia adopted IFRS in 2017), and Aramco APQS/VQIP invoicing protocols.",
  "introPara2": "Riyadh NDT contractors manage multi-customer invoicing with Aramco-specific invoice formats, VQIP (Vendor Qualification and Inspection Program) payment-portal integration, ZATCA Fatoorah Phase 2 e-invoicing, bilingual Arabic / English statutory documentation, and Saudization quota tracking under Nitaqat (Platinum, Gold, Silver, Green, Yellow, Red colour bands). Atlantis NDT ERP Accounting is purpose-configured for the Kingdom-wide market.",
  "introPara3": "Configured for Riyadh, the module pre-loads ZATCA Fatoorah Phase 2 e-invoicing integration, Aramco APQS / VQIP invoicing flow, SACS-002 cybersecurity-aligned data residency, bilingual Arabic / English documentation, Saudization Nitaqat quota tracking, and the audit frameworks that ZATCA, the Capital Market Authority (CMA, for listed), and the Saudi Central Bank (SAMA) actually use.",
  "features": [
    "Accounting configured for Riyadh's Kingdom-wide multi-region invoicing market",
    "ZATCA Fatoorah Phase 2 e-invoicing integration (mandatory since Jan 2023)",
    "VAT 15% calculation with quarterly VAT return automation",
    "Corporate income tax (20% foreign-owned) + Zakat (2.5% Saudi-owned) calculation",
    "IFRS-compliant financial statements (Saudi Arabia adopted IFRS in 2017)",
    "Aramco APQS / VQIP vendor-portal invoicing integration",
    "SACS-002 cybersecurity-aligned data residency",
    "Saudization (Nitaqat) quota tracking (Platinum, Gold, Silver, Green colour bands)",
    "Operator-specific invoicing for Aramco, SABIC, Ma'aden, NEOM, SPARK",
    "Bilingual Arabic / English invoice formatting (ZATCA Fatoorah requirement)",
    "Multi-currency invoicing in SAR and USD with daily FX update",
    "Mobile app for KSA-based finance staff (offline capable)"
  ],
  "operators": ["Saudi Aramco (corporate HQ functions, Riyadh)", "SABIC", "Ma'aden", "NEOM", "Red Sea Global", "Qiddiya Investment Company", "Diriyah Gate Development Authority", "King Salman Energy Park (SPARK)"],
  "regulators": ["ZATCA (Zakat, Tax and Customs Authority)", "Saudi Central Bank (SAMA)", "Capital Market Authority (CMA)", "Ministry of Human Resources and Social Development (MHRSD, Nitaqat / Saudization)", "Ministry of Commerce", "Saudi Accreditation Center (SAC)", "Ministry of Finance", "Aramco APQS/VQIP"],
  "painPoints": [
    "Accounting for Riyadh NDT companies done in legacy QuickBooks / Sage with manual ZATCA Fatoorah Phase 2 compliance",
    "Aramco APQS/VQIP invoice formatting maintained in separate Excel templates per project",
    "Saudization Nitaqat quota tracking done in HR Excel — quota-breach risk exposure",
    "Bilingual Arabic / English documentation done by hand — costly errors and delays"
  ],
  "useCases": [
    "A mid-size Riyadh NDT inspection company deploys Accounting against Aramco corporate-procurement contracts. Automated ZATCA Fatoorah Phase 2 e-invoicing, eliminated 9 invoice-rejection cycles per quarter.",
    "A Riyadh NDT contractor uses Accounting to handle Aramco APQS/VQIP invoicing alongside Vision 2030 mega-project (NEOM, SPARK) invoicing simultaneously without manual reformatting.",
    "A growing Riyadh NDT inspection company consolidates Accounting across Aramco, SABIC, Ma'aden and Vision 2030 projects. Nitaqat Saudization quota tracking automated with hire-fire impact modeling.",
    "An audit-driven Riyadh NDT inspection company uses Accounting to pass ZATCA Phase 2 audit with zero findings — Aramco APQS/VQIP invoice traceability assembles in 30 seconds."
  ],
  "faqs": [
    ["Is Accounting configured for NDT inspection companies operating in Riyadh?", "Yes. The Accounting module is pre-loaded with ZATCA Fatoorah Phase 2 e-invoicing integration, VAT 15% calculation, corporate income tax + Zakat, IFRS-compliant financial statements, Aramco APQS/VQIP invoicing flow, and Saudization Nitaqat quota tracking."],
    ["Which Saudi financial regulators does Accounting align with?", "The compliance dashboard maps to ZATCA, Saudi Central Bank (SAMA), Capital Market Authority (CMA, for listed companies), Ministry of Human Resources and Social Development (MHRSD, for Nitaqat), Ministry of Commerce."],
    ["Can Riyadh NDT inspection companies integrate Accounting with Aramco APQS/VQIP?", "Yes. The platform supports direct evidence-pack export to Aramco APQS (Approved Personnel Qualification System) and VQIP (Vendor Qualification and Inspection Program) invoicing portals."],
    ["What does Accounting cost for an NDT inspection company in Riyadh?", "Accounting is bundled inside the standard affordable, accessible (contact us; approximately SAR 67,500) Atlantis NDT ERP subscription. Invoicing is supported in SAR or USD with daily FX update. SACS-002 cybersecurity-aligned data residency is included where required."],
    ["Does Accounting support ZATCA Fatoorah Phase 2 e-invoicing?", "Yes. ZATCA Fatoorah Phase 2 e-invoicing (mandatory since January 2023 for all VAT-registered businesses, with phased rollout by revenue band) is fully integrated. Cryptographic stamp (CSID / UUID), QR code generation, ZATCA API connection, and B2B and B2C invoice formats are all supported in both Arabic and English."]
  ]
} as ErpTripleCrossProps;
export default function ErpTriple_accounting_ndt_inspection_companies_riyadh() { return <ErpTripleCrossPage {...data} />; }
