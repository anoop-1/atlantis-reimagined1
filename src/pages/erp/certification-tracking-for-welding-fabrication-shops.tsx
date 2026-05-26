import ErpIndustryAppPage from "@/components/ErpIndustryAppPage";

export default function CertificationTrackingForWeldingFabricationShops() {
  return (
    <ErpIndustryAppPage
      pageTitle="Certification Tracking for Welding & Fabrication Shops"
      slug="certification-tracking-for-welding-fabrication-shops"
      appName="Certification Tracking"
      industry="welding and fabrication shops"
      breadcrumbLabel="Cert Tracking — Weld Shops"
      trustBadge="ASME IX / AWS / ISO 9606 / CWB ready"
      metaDescription="Atlantis NDT ERP Certification Tracking for weld shops — ASME Section IX welder continuity, AWS D1.1 90-day rule, ISO 9606 welder qualification, CWB W47.1 Canadian welder cert, AWS CWI / SCWI, ASNT Level II/III. Flat regional pricing."
      heroBody="Atlantis NDT ERP Certification Tracking for welding & fabrication shops — ASME Section IX QW-322 6-month continuity rule, AWS D1.1 Clause 6.4 90-day rule + 3-year requalification, ISO 9606-1 employer-attestation renewal, CWB W47.1 Canadian welder certification, AWS CWI (Certified Welding Inspector) / SCWI (Senior CWI), AWS QC1 endorsements, ASNT Level II/III, IIW European Welding Engineer / Technologist / Specialist. Part of the all-apps-included subscription."
      whatItIs={[
        "Certification Tracking for Welding & Fabrication Shops inside Atlantis NDT ERP is the Odoo 18 HR + Quality + Compliance module configured for the welder-and-inspector certification landscape — ASME Section IX QW-322 welder continuity (6-month rule: a welder must demonstrate they have welded with each essential variable within the preceding 6 months, or requalify), AWS D1.1 Clause 6.4 (90-day rule: requalification required when a welder has not performed the qualification process within 90 days, plus full requalification every 3 years), ISO 9606-1 (welder qualification — 6-month renewal by employer attestation, 24-month full requalification).",
        "Inspector certifications include AWS CWI (Certified Welding Inspector — 9-year cycle with 3-year endorsement renewal), AWS SCWI (Senior CWI), AWS QC1 endorsements (e.g. 9-year CWI with structural-steel D1.1, bridge D1.5, sheet-metal D1.3, machinery D14), ASNT SNT-TC-1A / CP-189 Level II / III in UT/MT/PT/ET/RT/VT, CSWIP 3.1 / 3.2, IIW International Welding Engineer / Technologist / Specialist / Inspector. CWB W178.1 Welding Inspection Bureau certification for Canadian shops.",
      ]}
      useCases={[
        { useCase: "Use Case 1", body: "A Houston structural-fabrication shop (60 welders, 20 NDE techs) eliminated 6 welder-continuity-lapse findings per AISC audit cycle." },
        { useCase: "Use Case 2", body: "A Hyderabad ASME U-stamp pressure-vessel fabricator (45 welders) automated ASME Section IX QW-322 6-month rule alerts — eliminated continuity lapses entirely." },
        { useCase: "Use Case 3", body: "A Dammam petrochemical fabricator (38 welders) tracks Aramco-specific welder approvals — eliminated pre-mobilization qualification disputes." },
        { useCase: "Use Case 4", body: "A Calgary CWB / AISC certified shop (28 welders) tracks parallel CWB W47.1 + AWS D1.1 certifications — passed dual certification audit with zero findings." },
      ]}
      keyFeatures={[
        "ASME Section IX QW-322 6-month continuity rule",
        "AWS D1.1 Clause 6.4 90-day rule + 3-year requalification",
        "AWS D1.5 bridge welding qualification continuity",
        "AWS D1.6 stainless steel qualification continuity",
        "ISO 9606-1 welder qualification renewal",
        "CWB W47.1 Canadian welder certification",
        "AWS CWI (Certified Welding Inspector) 9-year cycle",
        "AWS SCWI (Senior CWI) tracking",
        "AWS QC1 endorsements (D1.1, D1.5, D1.3, D14, B2.1)",
        "ASNT SNT-TC-1A / CP-189 Level II / III tracking",
        "CSWIP 3.1 / 3.2 welding inspection tracking",
        "IIW International Welding Engineer / Technologist / Specialist",
        "Mobile app for shop-floor certification capture",
      ]}
      integrations={[
        "AWS Bridge software (welder records database)",
        "AWS QC1 endorsement registry",
        "ASME BPV Code Section IX QW-300 weld-records template",
        "CWB / Welding Bureau of Canada records",
        "BINDT PCN registry",
        "ASNT IRRSP (Radiographer Reciprocity Scheme)",
        "ASNT NDT Level III certification database",
        "ISO 3834 / EN 1090 manufacturer-document evidence",
        "IIW International Welding Engineer registry",
        "PED (Pressure Equipment Directive) notified-body integration",
      ]}
      faqs={[
        { question: "Does the platform enforce ASME Section IX QW-322 6-month rule?", answer: "Yes. ASME Section IX QW-322 requires that a welder demonstrate they have welded with each essential variable within the preceding 6 months, or that they requalify. The platform tracks last-weld-date per welder per WPS essential variable and fires 90 / 60 / 30 / 7-day alerts before lapse. When a welder's qualification on a specific WPS lapses, the platform prevents that welder from being assigned to that WPS until requalification." },
        { question: "How does the platform handle AWS D1.1 90-day rule?", answer: "Yes. AWS D1.1 Clause 6.4 requires welder requalification when the welder has not performed the qualification process within 90 days. Full requalification is required every 3 years regardless of activity. The platform tracks last-weld-date per welder per qualified process and fires 30-day alerts before lapse, with full 3-year requalification alerts fired 6, 3 and 1 month before the 3-year anniversary." },
        { question: "Can the platform handle ISO 9606-1 employer attestation?", answer: "Yes. ISO 9606-1 (Qualification testing of welders) requires renewal every 6 months by employer attestation (a senior welding engineer signs that the welder has continued to weld within the qualified range) plus full 24-month requalification. The platform supports both renewal mechanisms with electronic-signature attestation by authorized welding engineers." },
        { question: "Does the platform handle CWB W47.1?", answer: "Yes. CWB (Canadian Welding Bureau) W47.1 Division 1 / Division 2 / Division 3 certification — required for Canadian fabricators of structural steel welded to AWS D1.1 / CSA W59 — is tracked with CWB-specific continuity and renewal cycles. Joint AWS D1.1 + CWB W47.1 certification (common for cross-border shops) is supported." },
        { question: "How does the platform handle AWS CWI 9-year cycle?", answer: "Yes. AWS CWI (Certified Welding Inspector) has a 9-year cycle with 3-year endorsement renewal periods. CWI must be renewed every 9 years (or earlier with an endorsement gap), with endorsement renewals every 3 years to demonstrate continued professional development. The platform tracks both cycles and produces renewal-prompt evidence." },
        { question: "Can the platform handle parallel CWI / CSWIP certifications?", answer: "Yes. Inspectors holding both AWS CWI (US-origin) and CSWIP 3.1 / 3.2 (UK/international-origin) are common in international markets. The platform stores both certifications with separate expiry, scope and renewal workflows, allowing inspectors to be scheduled per the customer's certification requirement." },
        { question: "Does the platform track customer-specific welder approvals?", answer: "Yes. Customer-specific welder approvals (Aramco SAEP-1107, ADNOC HSE-OF Compl, Petronas PTS, EPC contractor qualifications) are maintained as customer-policy overlays. When a welder is assigned to a customer-specific scope, the platform verifies both base qualification (ASME / AWS / ISO 9606) and customer-specific approval." },
        { question: "How does the platform handle PED Notified Body integration?", answer: "Yes. PED (Pressure Equipment Directive 2014/68/EU) Notified Body integration — for fabricators serving European pressure-equipment markets — supports welder qualification per EN ISO 9606 with Notified Body witness attestation (TUV NORD, TUV SUD, Bureau Veritas, DNV, Lloyd's Register, SGS, Inspecta, Vincotte)." },
      ]}
    />
  );
}
