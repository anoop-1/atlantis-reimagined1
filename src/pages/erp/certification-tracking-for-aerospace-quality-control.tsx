import ErpIndustryAppPage from "@/components/ErpIndustryAppPage";

export default function CertificationTrackingForAerospaceQualityControl() {
  return (
    <ErpIndustryAppPage
      pageTitle="Certification Tracking for Aerospace Quality Control"
      slug="certification-tracking-for-aerospace-quality-control"
      appName="Certification Tracking"
      industry="aerospace quality control"
      breadcrumbLabel="Cert Tracking — Aerospace"
      trustBadge="NAS 410 / EN 4179 / NADCAP ready"
      metaDescription="Atlantis NDT ERP Certification Tracking for aerospace QA — NAS 410 Rev 5 (US aerospace NDT cert), EN 4179 (European aerospace NDT cert), NADCAP-recognized written practices, OEM-specific Boeing BSS / Airbus AITM / GE / P&W / RR endorsements. Flat regional pricing."
      heroBody="Atlantis NDT ERP Certification Tracking for aerospace quality control firms — NAS 410 Rev 5 (the US aerospace NDT personnel qualification standard, superseding NAS 410 Rev 4 and ATA-105), EN 4179 (the European equivalent), NADCAP-recognized written practices, FAA Part 145 inspection-authorisation tracking, EASA Part-66 license categories, and OEM-specific endorsements for Boeing, Airbus, Embraer, Lockheed Martin, Northrop Grumman, GE Aviation, Pratt & Whitney, Rolls-Royce, Safran. Part of the all-apps-included subscription."
      whatItIs={[
        "Certification Tracking for Aerospace Quality Control inside Atlantis NDT ERP is the Odoo 18 HR + Quality + Compliance module configured for the layered certification matrix of aerospace NDT — NAS 410 Rev 5 (effective globally since 2014 with full adoption by 2017) sets out Level I (qualified to perform NDT under direct supervision), Level II (qualified to set up equipment, calibrate, perform NDT, interpret and evaluate results, document inspections), Level III (qualified to develop procedures, approve techniques, certify Levels I and II) — across UT, RT, MT, PT, ET, VT, TT, LT, NRT, AET methods. Vision-test currency (Snellen near-vision 20/25 corrected, color contrast) is tracked separately with 12-month cycles.",
        "EN 4179 (Aerospace series — Qualification and approval of personnel for non-destructive testing) is the European counterpart, used by Airbus, Safran, Rolls-Royce Civil Aerospace, BAE Systems, Thales, Dassault Aviation. The two standards are technically aligned but documentary differences require parallel tracking for firms serving both US and European aerospace markets. Customer-specific written practices — Boeing BSS7039, Airbus AITM 6-1001, Embraer NE 27-001, GE Aviation GE C50TF, P&W PWA-MCL, Rolls-Royce RR MTSP — are additional layers on top of the base NAS 410 / EN 4179 qualification.",
      ]}
      useCases={[
        { useCase: "Use Case 1", body: "A Wichita airframe NDT specialist (40 technicians) tracking NAS 410 Rev 5 + Boeing BSS7039 + Spirit AeroSystems written practice eliminated 9 mismatch incidents per year." },
        { useCase: "Use Case 2", body: "A Bangalore aerospace QA contractor (30 technicians) tracks NAS 410 Rev 5, EN 4179 (for Airbus India work), DGCA approvals, and customer-specific written practices for 9 OEM customers." },
        { useCase: "Use Case 3", body: "A Toulouse Airbus / Safran supplier QA firm (22 technicians) tracks EN 4179 + Airbus AITM 6-1001 + Safran QA-04 + EASA Part-66 — cleared NADCAP audit with zero personnel-currency findings." },
        { useCase: "Use Case 4", body: "A Connecticut engine MRO firm (35 technicians) tracks NAS 410 Rev 5 + P&W PWA-MCL + GE C50TF + FAA Part 145 inspection authorisations — passed FAA audit with full record-currency demonstrated." },
      ]}
      keyFeatures={[
        "NAS 410 Rev 5 Level I / II / III tracking across UT, RT, MT, PT, ET, VT, TT, LT, NRT, AET",
        "EN 4179 Level 1 / 2 / 3 tracking (European aerospace NDT)",
        "Vision-test currency (12-month cycle, Snellen, color contrast)",
        "Eye-exam currency tracking",
        "OJT (On-Job-Training) hours per method per program",
        "Customer-specific written-practice endorsements",
        "Boeing BSS7039 / BSS7320 endorsements",
        "Airbus AITM 6-1001 endorsements",
        "GE Aviation GE C50TF endorsements",
        "Pratt & Whitney PWA-MCL endorsements",
        "Rolls-Royce RR MTSP endorsements",
        "Safran Aircraft Engines QA-04 endorsements",
        "FAA Part 145 inspection authorisation tracking",
        "EASA Part-66 license category tracking",
        "Mobile app for shop-floor certification capture",
      ]}
      integrations={[
        "ASNT NDT Level III certification database",
        "ASNT IRRSP (Radiographer Reciprocity Scheme)",
        "BINDT PCN registry (UK/European aerospace)",
        "DGCA India aerospace inspection-authorisation",
        "EASA Part-66 license database",
        "PRI eAuditNet / Cumulus NADCAP audit submission",
        "Boeing D-PIM supplier portal",
        "Airbus Sphere AIRMAN / EREVOA supplier portal",
        "GE Aviation iCheck supplier portal",
        "P&W Engine Network supplier portal",
      ]}
      faqs={[
        { question: "Does the platform handle NAS 410 Rev 4 to Rev 5 transition?", answer: "Yes. NAS 410 Rev 5 is the current standard (effective globally since 2014 with full industry adoption by 2017). The platform tracks personnel hours toward Level certification under both Rev 4 and Rev 5 concurrently for the small number of OEMs whose written practices still reference Rev 4, and warns on configuration mismatches before they cause audit findings." },
        { question: "How does the platform handle parallel NAS 410 / EN 4179?", answer: "Yes. Many global aerospace QA firms hold parallel NAS 410 (US-origin) and EN 4179 (European-origin) certifications across their technician pool. The platform stores both certifications per technician with separate expiry, scope and renewal workflows. EN 4179 alignment to NAS 410 (technically substantially equivalent but documentary differences) is maintained as cross-reference data." },
        { question: "Can the platform track OEM-specific endorsements?", answer: "Yes. Customer-specific endorsements (Boeing BSS7039 UT Level II for 737 fuselage, Airbus AITM 6-1001 UT Level II for A350 wing, GE Aviation GE C50TF UT Level II for engine work, P&W PWA-MCL UT Level II for engine work, Rolls-Royce RR MTSP UT Level II for Trent engine work) are tracked separately from generic NAS 410 currency. When a technician is qualified to Boeing BSS7039 UT Level II for the 737 fuselage program, the system tracks that specific endorsement, and a different endorsement for Airbus AITM 6-1001 UT Level II for the A350 wing program." },
        { question: "How does the platform handle vision-test currency?", answer: "Yes. NAS 410 Rev 5 §4.2.4 requires annual vision tests — Snellen near vision 20/25 corrected (Jaeger J2 equivalent), Snellen far vision (where relevant for specific methods), color contrast (typically Ishihara plates or Farnsworth D-15 for color-vision-dependent methods like PT/MT). The platform tracks vision-test currency per technician with 30-day pre-expiry alerts." },
        { question: "Does the platform track OJT hours?", answer: "Yes. NAS 410 Rev 5 requires documented OJT (On-Job Training) hours per method per program before a technician can be qualified Level II. Typical hours are 800 hours UT, 400 hours RT, 130 hours MT, 70 hours PT, 200 hours ET, 16 hours VT (NAS 410 Rev 5 Table 1 minimums). Customer-specific written practices often require additional hours (Boeing typically requires 50-100% more than NAS 410 minimums). The platform tracks OJT accumulation per technician." },
        { question: "Can the platform handle FAA Part 145 inspection authorisation?", answer: "Yes. FAA Part 145 inspection authorisation — required for technicians performing safety-critical inspections at FAA Part 145 repair stations — is tracked per technician with inspection-authorisation level (Hidden Damage Inspection, Conformity Inspection, Non-Routine Inspection, Final Inspection per repair station's manual). FAA-specific tracking is parallel to but distinct from NAS 410 / EN 4179 NDT certification." },
        { question: "How does the platform handle EASA Part-66?", answer: "Yes. EASA Part-66 license categories (A, B1, B2, C, L) — the European maintenance personnel licensing system — are tracked per technician with category-specific authorisations and 5-year renewal cycles. For aerospace firms operating in EU markets, EASA Part-66 is required alongside EN 4179 NDT certification." },
        { question: "Does the platform integrate with PRI eAuditNet?", answer: "Yes. PRI eAuditNet / Cumulus (NADCAP audit-submission portal) integration produces personnel qualification matrix evidence in NADCAP-ready format. The eAuditNet upload includes per-technician NAS 410 / EN 4179 certificates, vision-test currency, OJT records, and customer-specific endorsement portfolio." },
      ]}
    />
  );
}
