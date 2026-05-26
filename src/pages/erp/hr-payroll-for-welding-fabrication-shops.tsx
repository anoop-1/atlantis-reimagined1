import ErpIndustryAppPage from "@/components/ErpIndustryAppPage";

export default function HrPayrollForWeldingFabricationShops() {
  return (
    <ErpIndustryAppPage
      pageTitle="HR & Payroll for Welding & Fabrication Shops"
      slug="hr-payroll-for-welding-fabrication-shops"
      appName="HR & Payroll"
      industry="welding and fabrication shops"
      breadcrumbLabel="HR/Payroll — Weld Shops"
      trustBadge="OSHA / DOL / EI / WCB / IFRS ready"
      metaDescription="Atlantis NDT ERP HR & Payroll for welding & fabrication shops — OSHA 1910 / 1926 compliance, piecework / hourly / salaried wage structures, certification-linked pay (AWS / CWB / CWI), apprenticeship tracking, multi-jurisdiction payroll. Flat regional pricing."
      heroBody="Atlantis NDT ERP HR & Payroll configured for welding & fabrication shops — OSHA 29 CFR 1910 (General Industry) / 1926 (Construction) compliance, piecework / hourly / salaried wage structures common in fabrication, certification-linked pay (AWS welder certification differentials, CWB W47.1 certification differentials, AWS CWI premium), apprenticeship program tracking, multi-jurisdiction payroll for cross-border shops. Part of the all-apps-included subscription."
      whatItIs={[
        "HR & Payroll for Welding & Fabrication Shops inside Atlantis NDT ERP is the Odoo 18 HR + Payroll + Time-and-Attendance + Compliance module configured for the workforce reality of fabrication — OSHA 29 CFR 1910.252 (Welding, Cutting and Brazing General Requirements), 1910.253 (Oxygen-fuel gas welding), 1910.254 (Arc welding and cutting), 1910.255 (Resistance welding), 1910.146 (Confined Spaces — common in tank and pressure-vessel fabrication), 1910.179 (Overhead and gantry cranes), 1926.350-354 (Construction welding standards) — all encoded as recurring training requirements with certification expiry alerts.",
        "Compensation structures common in fabrication — piecework rates per AWS / ASME-qualified weld, hourly rates with shift differentials, salaried tradesmen, apprentice progression schedules (typical 4-year apprenticeship with quarterly progression checkpoints), AWS-certified welder differentials, CWB W47.1 differential for Canadian shops, AWS CWI / SCWI inspector premium, NDE Level II / III differentials — are all automated. Apprenticeship records (US DOL Registered Apprenticeship, Canadian Red Seal trade program) are maintained as live data.",
      ]}
      useCases={[
        { useCase: "Use Case 1", body: "A Houston structural-fabrication shop (60 welders, 20 NDE techs) automated AWS-certification-linked payroll differentials and reduced payroll-dispute incidents from 12 per quarter to 1." },
        { useCase: "Use Case 2", body: "A Hyderabad ASME U-stamp pressure-vessel fabricator (45 welders) handles ESIC / EPF / TDS / gratuity / state professional tax for Telangana — automated PF challan generation." },
        { useCase: "Use Case 3", body: "A Dammam petrochemical fabricator (38 welders) handles GOSI (General Organization for Social Insurance) and Iqama-tracking for expat workforce — automated GOSI monthly statement generation." },
        { useCase: "Use Case 4", body: "A Calgary CWB / AISC certified shop (28 welders) tracks Red Seal apprenticeship progression and Ironworkers Local 720 / Boilermakers Local 146 union scale rates." },
      ]}
      keyFeatures={[
        "OSHA 29 CFR 1910 / 1926 compliance training tracking",
        "Confined-space entry (1910.146) certification tracking",
        "Hot-work permit (1910.252) training tracking",
        "Crane / hoist (1910.179) operator certification",
        "Piecework / hourly / salaried wage structures",
        "AWS-certified welder differential automation",
        "CWB W47.1 certification differential (Canada)",
        "AWS CWI / SCWI inspector premium",
        "ASNT Level II / III NDE technician differential",
        "Apprenticeship program tracking (US DOL Registered Apprenticeship, Red Seal)",
        "Union-scale rate management (Ironworkers, Boilermakers, Pipefitters, Operating Engineers)",
        "Multi-jurisdiction US / Canadian / international payroll",
        "Mobile app for shop-floor time capture (clock-in, clock-out, lunch tracking)",
      ]}
      integrations={[
        "ADP / Workday / UKG (Ultimate Kronos Group) payroll integration",
        "OSHA 300 / 300A / 301 logs electronic submission",
        "US DOL Registered Apprenticeship reporting",
        "Canadian Red Seal trade-program reporting",
        "AWS Bridge software (welder records)",
        "CWB / Welding Bureau of Canada records",
        "Union-scale rate database integration (Ironworkers, Boilermakers, Pipefitters)",
        "WCB (provincial Workers' Compensation Board) reporting",
        "GOSI (Saudi Arabia) monthly statement",
        "ESIC / EPF (India) statutory return generation",
      ]}
      faqs={[
        { question: "Does the platform handle OSHA 1910 / 1926 training tracking?", answer: "Yes. OSHA 29 CFR 1910 (General Industry) and 1926 (Construction) training requirements — welding (1910.252-255), confined space (1910.146), hot work (1910.252), crane / hoist (1910.179), lockout/tagout (1910.147), respiratory protection (1910.134), fall protection (1926.501), scaffolding (1926.451) — are tracked per technician with expiry alerts." },
        { question: "How does the platform handle piecework payroll?", answer: "Yes. Piecework rates — common for production welding (per weld, per linear foot, per joint, per spool) — are automated. Per-AWS-WPS rate tables, per-joint-type rate variations, and quality-bonus calculations (no-rework bonuses, first-time-pass bonuses) flow into per-pay-period payroll. Minimum-wage compliance per US FLSA / Canadian provincial regulations is enforced for piecework workers." },
        { question: "Can the platform handle apprenticeship programs?", answer: "Yes. US DOL Registered Apprenticeship programs and Canadian Red Seal trade programs — typically 4-year cycles with quarterly progression checkpoints — are tracked. Apprentice-to-journeyman progression triggers automatic pay-scale increases. Sponsor-attestation workflow for hours-of-work documentation is supported." },
        { question: "Does the platform handle union-scale rates?", answer: "Yes. Union-scale rate management — Ironworkers, Boilermakers, Pipefitters, Operating Engineers, Sheet Metal Workers, United Steelworkers, IBEW — is supported. Per-local union scale rates, fringe-benefit contributions, pension contributions, health-and-welfare contributions, and apprenticeship-training contributions are calculated per pay period and reported on union pay-stub formats." },
        { question: "How does the platform handle Saudi GOSI compliance?", answer: "Yes. GOSI (General Organization for Social Insurance) — Saudi Arabia's social insurance scheme — is supported. Monthly GOSI statement generation, employer/employee contribution rates per Saudi/non-Saudi worker, Iqama-tracking for expat workers (with auto-suspension on Iqama-expiry), Wage Protection System (WPS) compliance, and bilingual Arabic/English pay-slip generation are all built in." },
        { question: "Can the platform handle Indian ESIC / EPF / TDS?", answer: "Yes. Indian payroll compliance — ESIC (Employees' State Insurance Corporation, applicable to organizations with 10+ employees earning under ₹21,000/month), EPF (Employees' Provident Fund, 12% employer + 12% employee on basic+DA), gratuity (Payment of Gratuity Act 1972, 15-days basic-pay per year of service after 5 years), bonus (Payment of Bonus Act 1965), TDS (Tax Deducted at Source per Income Tax Act), professional tax (state-level) — is supported with automated challan generation." },
        { question: "Does the platform handle OSHA injury reporting?", answer: "Yes. OSHA 300 (Log of Work-Related Injuries and Illnesses), 300A (Summary of Work-Related Injuries and Illnesses), and 301 (Injury and Illness Incident Report) are auto-generated from incident reports. Electronic submission via OSHA ITA (Injury Tracking Application) is supported. State OSHA equivalents (Cal/OSHA, MIOSHA, Indiana OSHA) are supported per state-specific reporting." },
        { question: "Can the platform handle multi-jurisdiction payroll?", answer: "Yes. Multi-jurisdiction US (50 states + DC), Canadian (10 provinces + 3 territories), and international (UK, EU members, India, Saudi Arabia, UAE, Australia, Mexico, Brazil) payroll is supported with per-jurisdiction withholding, social-security, workers-comp, and statutory-reporting compliance." },
      ]}
    />
  );
}
