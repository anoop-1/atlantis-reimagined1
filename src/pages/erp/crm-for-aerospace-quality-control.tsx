import ErpIndustryAppPage from "@/components/ErpIndustryAppPage";

export default function CrmForAerospaceQualityControl() {
  return (
    <ErpIndustryAppPage
      pageTitle="CRM for Aerospace Quality Control Companies"
      slug="crm-for-aerospace-quality-control"
      appName="CRM (Customer Relationship Management)"
      industry="aerospace quality control"
      breadcrumbLabel="CRM for Aerospace QA"
      trustBadge="AS9100 / NAS 410 / NADCAP ready"
      metaDescription="Atlantis NDT ERP CRM for aerospace quality control companies — AS9100 / EN 9100 customer-portal flow-down, NADCAP audit-cycle awareness, NAS 410 Rev 5 surveyor matching, Boeing / Airbus / GE / Pratt & Whitney / Safran customer-specific written practices. Flat $18,000/yr."
      heroBody="Atlantis NDT ERP CRM for aerospace quality control firms — AS9100 / EN 9100 customer-portal opportunity flow, NADCAP MAUP audit-cycle pipeline tracking, NAS 410 Rev 5 personnel-currency-driven opportunity matching, and customer-specific written-practice opportunity routing for Boeing, Airbus, Embraer, Bombardier, Lockheed Martin, Northrop Grumman, GE Aviation, Pratt & Whitney, Rolls-Royce, Safran, Honeywell Aerospace and Collins Aerospace. Part of the all-apps-included $18,000 / year subscription."
      whatItIs={[
        "CRM for Aerospace Quality Control inside Atlantis NDT ERP is the Odoo 18 CRM module pre-configured for the unique commercial reality of aerospace NDT — opportunities flow through OEM supplier portals (Boeing D-PIM, Airbus Sphere AIRMAN, Embraer DiscoverFleet, GE Aviation iCheck, Pratt & Whitney Engine Network, Rolls-Royce SAP Ariba, Safran SupplyOn), not via cold email. Pipeline cycles are governed by NADCAP MAUP audit cycles (24 months for standard accreditation, 12 months for merit), AS9100 Rev D / EN 9100 quality-management-system surveillance audits, FAA Part 145 and EASA Part-145 repair-station renewals, and customer-specific written practices that differ between every OEM.",
        "The CRM matches opportunities to qualified technicians via NAS 410 Rev 5 personnel currency — when an opportunity requires UT Level II for Boeing 787 composite-bondline inspection per BSS7039, the CRM checks which technicians hold the specific Boeing endorsement (not just generic NAS 410 Level II), the OJT hours-on-the-aircraft, the recent vision-test currency, the eye-exam expiry, and confirms availability before letting business development advance the opportunity. This eliminates the recurring 'won the work, can't staff it' problem that plagues aerospace inspection firms.",
      ]}
      useCases={[
        { useCase: "Use Case 1", body: "A Wichita-based airframe NDT specialist (40 technicians) tracks Boeing 737 / 787 and Spirit AeroSystems opportunities — won-rate on Spirit AeroSystems Wichita Division grew from 38% to 62% in 12 months after CRM-driven written-practice matching." },
        { useCase: "Use Case 2", body: "A Bangalore aerospace QA contractor (30 technicians) serving HAL, GE Aviation India, Pratt & Whitney India and Airbus India tracks NADCAP MAUP audit cycles across 14 OEM customer audits — eliminated the recurring 'pipeline gap during audit week' bottleneck." },
        { useCase: "Use Case 3", body: "A Toulouse aerospace QA firm (22 technicians) serving Airbus Toulouse, ATR, Safran Aircraft Engines and Daher captures EASA Part-145 repair-station opportunities — quote-to-award fell from 21 days to 11 days." },
        { useCase: "Use Case 4", body: "A Connecticut engine MRO inspection firm (35 technicians) serving Pratt & Whitney, GE Aviation Lynn and Sikorsky tracks every PW1000G / V2500 / GE9X / CFM-LEAP opportunity by aircraft program — opening 19 new opportunities in 6 months." },
      ]}
      keyFeatures={[
        "Boeing D-PIM, Airbus Sphere AIRMAN, Embraer DiscoverFleet, GE iCheck supplier-portal opportunity ingest",
        "NADCAP MAUP audit-cycle tracking (24-month standard, 12-month merit)",
        "AS9100 Rev D / EN 9100 surveillance-audit calendar per customer",
        "FAA Part 145 / EASA Part-145 repair-station renewal alerts",
        "NAS 410 Rev 5 personnel-currency matching per opportunity",
        "Customer-specific written-practice mapping (Boeing BSS7039, Airbus AITM, GE/CFM, P&W)",
        "Aircraft-program tagging (737 MAX, 787, A320neo, A350, A380, A220, E2, CRJ, Embraer KC-390)",
        "Engine-program tagging (PW1000G, V2500, CFM56, CFM LEAP, GE90, GEnx, GE9X, Trent XWB)",
        "Inspection-method scope per opportunity (UT, RT, PAUT, ECT, FPI/MPI, borescope)",
        "ITAR / EAR export-control flag per opportunity (US military programs)",
        "AS9102 First Article Inspection (FAI) workflow per first-article opportunity",
        "PRI eAuditNet / Cumulus opportunity flow alignment",
        "Customer rejection-rate trending per part-number / per inspection-method",
      ]}
      integrations={[
        "Boeing D-PIM supplier portal (FlightView, GoldCare)",
        "Airbus Sphere AIRMAN / EREVOA / SQB supplier integration",
        "Embraer DiscoverFleet supplier portal",
        "GE Aviation iCheck / GoldenEye supplier qualification",
        "Pratt & Whitney Engine Network supplier portal",
        "Rolls-Royce SAP Ariba supplier integration",
        "Safran SupplyOn supplier portal",
        "Honeywell Aerospace supplier portal",
        "Collins Aerospace supplier-quality portal",
        "PRI eAuditNet / Cumulus (NADCAP submissions)",
      ]}
      faqs={[
        { question: "Does the CRM ingest opportunities from OEM supplier portals?", answer: "Yes. Atlantis NDT ERP CRM has connectors for Boeing D-PIM, Airbus Sphere AIRMAN, Embraer DiscoverFleet, GE Aviation iCheck, Pratt & Whitney Engine Network, Rolls-Royce SAP Ariba, Safran SupplyOn, Honeywell Aerospace and Collins Aerospace supplier portals. New opportunities, RFQs and qualification renewals are ingested as CRM leads / opportunities with auto-populated customer, part-number, aircraft-program, written-practice and certification-requirement fields." },
        { question: "How does NAS 410 Rev 5 personnel matching work?", answer: "Every opportunity carries the customer-specific written-practice requirement (e.g. Boeing BSS7039 UT Level II for 737 fuselage, Airbus AITM 6-1001 UT Level II for A350 wing). The CRM queries the personnel-qualification register, matches technicians who hold the specific OEM endorsement (not just generic NAS 410), checks current vision-test and eye-exam expiry, confirms recent OJT hours, and surfaces the qualified-and-available shortlist. This prevents winning work the firm can't staff." },
        { question: "Can the CRM track NADCAP MAUP audit-cycle pipelines?", answer: "Yes. NADCAP MAUP audit cycles drive much of the aerospace QA market — every approved supplier must pass MAUP audit on a 24-month standard or 12-month merit cycle. The CRM tracks every customer's last MAUP audit date, next-due date and current finding-status, so business development can target NADCAP-deficient suppliers with audit-readiness consulting opportunities, and existing customers' next audit cycles are visible 18 months ahead." },
        { question: "How does the platform handle ITAR / EAR export-control constraints?", answer: "Opportunities carrying ITAR (International Traffic in Arms Regulations) or EAR (Export Administration Regulations) restrictions are flagged. Only US-person technicians and ITAR-clearance-current staff can be assigned. Customer-specific export-control overlay (e.g. F-35 program restrictions, B-21 black-program restrictions) is layered on top so the CRM enforces compliance without manual checks." },
        { question: "Does the CRM track customer-specific written practices?", answer: "Yes. The CRM holds a written-practice library per customer: Boeing BSS7039, Airbus AITM 6-1001, Embraer NE 27-001, Lockheed Martin LM C-22, Northrop Grumman NG-5051, GE Aviation GE C50TF, Pratt & Whitney PWA-MCL, Rolls-Royce RR MTSP, Safran Aircraft Engines QA-04. Each opportunity carries the applicable written-practice code; only technicians qualified to that exact written practice can be assigned." },
        { question: "Can we forecast pipeline by aircraft program?", answer: "Yes. Pipeline forecasting can be sliced by aircraft program (737 MAX, 787, A320neo, A350, A380, A220, E2 family, KC-390, Global 7500, Falcon 6X, Gulfstream G500/G600/G700), engine program (PW1000G, V2500, CFM56, CFM LEAP, GE90, GEnx, GE9X, Trent XWB, Trent 7000), or military program (F-35, F-15, F-16, F-18, F-22, B-21, B-52, KC-46, P-8, V-22). This is invaluable for capacity planning when major aircraft programs ramp up or down." },
        { question: "Does the CRM support engine MRO inspection opportunities?", answer: "Yes. Engine MRO inspection — borescope inspection of LP/HP turbine blades, FPI (fluorescent penetrant inspection) of compressor blades, ECT inspection of blade-disc dovetails, ZGlow rumblestrip inspection — is fully supported with opportunity-level scoping per engine type, MRO interval (BSI, MPI, HPI, OPI), and shop or on-wing applicability. The CRM integrates with Pratt & Whitney Engine Network, Rolls-Royce IntelligentEngine and GE Predix Aviation supplier data streams." },
        { question: "How does the CRM handle AS9102 First Article Inspection opportunities?", answer: "AS9102 First Article Inspection (FAI) — required for every aerospace part on first production, first manufacturing change, or first inspection process — is a separate opportunity type in the CRM. AS9102 Form 1 (Part Accountability), Form 2 (Product Accountability — Materials, Special Processes, Functional Testing) and Form 3 (Characteristic Accountability, Verification and Compatibility Evaluation) are tracked per-part-number, enabling business-development teams to identify customers with pending AS9102 backlog as targets for outsourced FAI service." },
      ]}
    />
  );
}
