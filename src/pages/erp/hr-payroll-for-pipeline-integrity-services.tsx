import ErpIndustryAppPage from "@/components/ErpIndustryAppPage";

export default function HrPayrollForPipelineIntegrityServices() {
  return (
    <ErpIndustryAppPage
      pageTitle="HR & Payroll for Pipeline Integrity Services"
      slug="hr-payroll-for-pipeline-integrity-services"
      appName="HR & Payroll"
      industry="pipeline integrity services"
      breadcrumbLabel="HR/Payroll — Pipeline"
      trustBadge="PHMSA / DOT / Davis-Bacon / IFRS ready"
      metaDescription="Atlantis NDT ERP HR & Payroll for pipeline integrity firms — DOT drug-and-alcohol, Davis-Bacon prevailing wage, OQ / ASNT / NACE / API 1169 certification-linked payroll, multi-state withholding for FIFO crews. Flat $18,000/yr."
      heroBody="Atlantis NDT ERP HR & Payroll configured for pipeline integrity service contractors — DOT (US Department of Transportation) drug-and-alcohol testing per 49 CFR Part 40 / 199 / 382, Davis-Bacon Act prevailing-wage compliance for federally-funded pipeline projects, certification-linked payroll (OQ / ASNT / NACE / API 1169 endorsement-driven pay differentials), multi-state withholding for FIFO crews, and IFRS-aligned multi-currency payroll. Part of the all-apps-included $18,000 / year subscription."
      whatItIs={[
        "HR & Payroll for Pipeline Integrity Services inside Atlantis NDT ERP is the Odoo 18 HR + Payroll + Time-and-Attendance + Compliance module configured for the unique workforce challenges of pipeline-integrity work — DOT drug-and-alcohol testing per 49 CFR Part 40 (procedures) / Part 199 (pipeline operators) / Part 382 (motor carriers) with random-testing-pool management, pre-employment / post-accident / reasonable-suspicion / return-to-duty / follow-up testing categories tracked via DOT-MRO (Medical Review Officer) flow, Davis-Bacon Act prevailing-wage compliance for federally-funded pipeline projects (specifically OQ tasks performed on federally-funded pipeline construction triggers Davis-Bacon).",
        "Certification-linked payroll automates the pay-differential structure typical of pipeline integrity contractors — ASNT Level II / III differentials, API 1169 / SIFE / SISE differentials, NACE CIP / CP / ICCS differentials, customer-specific OQ task qualification differentials, radiographer / radiographer-assistant differentials. Time-and-attendance is captured per project per operator per task, enabling per-project profitability reporting at the pay-period level.",
      ]}
      useCases={[
        { useCase: "Use Case 1", body: "A Houston pipeline integrity firm (75 staff) automated DOT random-testing pool and Davis-Bacon prevailing-wage compliance — eliminated 4 prevailing-wage findings per cycle and zero DOT compliance findings." },
        { useCase: "Use Case 2", body: "A Calgary CER-regulated contractor (40 staff) handles multi-province (AB/BC/SK) payroll with French/English bilingual pay-stub formatting for Quebec-based work." },
        { useCase: "Use Case 3", body: "A Mumbai pipeline contractor (35 staff) manages ESIC, PF, gratuity and Provident Fund payroll alongside bilingual English/Hindi pay-slip formatting." },
        { useCase: "Use Case 4", body: "A Sao Paulo pipeline contractor (28 staff) handles INSS, FGTS, IRRF withholding alongside CLT compliance and bilingual Portuguese/English pay-slip generation." },
      ]}
      keyFeatures={[
        "DOT 49 CFR Part 40 / 199 / 382 drug-and-alcohol testing",
        "DOT random-testing pool management",
        "DOT-MRO (Medical Review Officer) workflow integration",
        "Davis-Bacon Act prevailing-wage compliance (US federally-funded pipeline)",
        "Service Contract Act (SCA) prevailing-wage compliance",
        "Certification-linked pay differentials (ASNT, API, NACE, OQ)",
        "Per-customer / per-project time tracking",
        "Per-OQ-task time tracking for cost allocation",
        "Multi-state US withholding (50 states + DC + territories)",
        "Multi-province Canadian withholding (10 provinces + 3 territories)",
        "IFRS / GAAP multi-currency payroll",
        "FIFO / rotational-crew shift-pattern management (28x14, 21x21, custom)",
        "Mobile app for field-crew time capture (offline-capable, geo-tagged)",
      ]}
      integrations={[
        "ADP / Workday / UKG (Ultimate Kronos Group) payroll integration",
        "DOT-MRO online portal integration",
        "Davis-Bacon prevailing-wage rate database (US DOL)",
        "PHMSA Operator Qualification Performance Records",
        "Veriforce / ISNetworld OQ compliance integration",
        "QuickBooks / Sage 50 / Xero accounting integration",
        "Avalara AvaTax / TaxJar sales-tax integration",
        "Workday VNDLY contingent-workforce management",
        "ServiceTitan field-service workforce platform",
        "Provincial regulator workforce-reporting portals (AB, BC, SK)",
      ]}
      faqs={[
        { question: "Does the platform handle DOT drug-and-alcohol testing?", answer: "Yes. DOT 49 CFR Part 40 (procedures) / Part 199 (pipeline operators) / Part 382 (motor carriers) drug-and-alcohol testing is structured — random-testing pool management with required percentages per calendar year (drug 50% / alcohol 10% for pipeline operators per Part 199), pre-employment / post-accident / reasonable-suspicion / return-to-duty / follow-up testing categories with DOT-MRO flow integration. Designated Employer Representative (DER) audit trail is preserved." },
        { question: "How does the platform handle Davis-Bacon prevailing-wage?", answer: "Yes. Davis-Bacon Act prevailing-wage compliance — applicable to federally-funded pipeline construction over $2,000 — is supported. The platform integrates with the US Department of Labor prevailing-wage rate database, calculates per-trade per-county minimum wage rates, tracks fringe-benefit credit, and produces WH-347 certified-payroll reports. Service Contract Act (SCA) prevailing-wage compliance for federally-contracted services is also supported." },
        { question: "Can the platform handle certification-linked pay differentials?", answer: "Yes. Pay-differential structure typical of pipeline contractors — ASNT Level II base differential, ASNT Level III premium differential, API 1169 Pipeline Inspector premium, NACE CIP Level 2 / 3 premium, customer-specific OQ task qualification premium, radiographer (Ir-192/Co-60) differential, FIFO mobilization premium — is automated. When a technician is assigned to a task requiring a specific certification, the differential is applied automatically." },
        { question: "How does the platform handle FIFO / rotational crews?", answer: "Yes. FIFO (Fly-in Fly-out) and rotational-crew shift patterns — 28x14, 21x21, 14x14, custom rotations — are core to pipeline integrity workforces. The platform manages crew rotations with travel time, on-site time, FIFO mobilization premium, per-diem allowance, and overtime calculation per US FLSA (Fair Labor Standards Act) overtime rules, Canadian provincial overtime rules, or international jurisdiction overtime rules." },
        { question: "Does the platform handle multi-state withholding?", answer: "Yes. Multi-state US withholding (50 states + DC + Puerto Rico + Guam + USVI) — common for FIFO crews working across multiple states in a pay period — is fully supported. Per-state withholding calculation, reciprocity-agreement handling (e.g. NJ-PA, MD-DC), and multi-jurisdiction unemployment insurance contribution are automated. Canadian multi-province withholding (10 provinces + 3 territories) is similarly supported." },
        { question: "Can the platform integrate with Veriforce / ISNetworld?", answer: "Yes. Veriforce, ISNetworld, Avetta and Achilles — the major contractor pre-qualification platforms — integrate with the HR system. Personnel OQ records flow bidirectionally so contractor staff appear as qualified on operator OQ portals automatically, and operator-mandated training-currency requirements (annual refresher, periodic refresher) are tracked in the HR system." },
        { question: "How does the platform handle Canadian payroll?", answer: "Yes. Canadian federal (Canada Pension Plan / Employment Insurance / federal income tax) and provincial (provincial income tax, provincial workers-compensation, provincial labour-relations) compliance is supported. Bilingual French/English pay-stub formatting for Quebec is built-in. Provincial-specific rules (Ontario WSIB, Alberta WCB, BC WorkSafeBC, Quebec CNESST) are encoded." },
        { question: "Does the platform support Indian payroll compliance?", answer: "Yes. Indian payroll compliance — ESIC (Employees' State Insurance Corporation), EPF (Employees' Provident Fund), gratuity (Payment of Gratuity Act 1972), bonus (Payment of Bonus Act 1965), professional tax (state-level), TDS (Tax Deducted at Source), HRA exemption — is supported. Bilingual English/Hindi pay-slip formatting and state-specific minimum wage compliance is built-in." },
      ]}
    />
  );
}
