import ErpIndustryAppPage from "@/components/ErpIndustryAppPage";

export default function CertificationTrackingForAerospaceQualityControl() {
  return (
    <ErpIndustryAppPage
      pageTitle="Certification Tracking for Aerospace Quality Control"
      slug="certification-tracking-for-aerospace-quality-control"
      appName="Certification Tracking"
      industry="aerospace quality control"
      breadcrumbLabel="Cert Tracking — Aerospace"
      trustBadge="NADCAP ready"
      metaDescription="Atlantis NDT ERP Certification Tracking for aerospace QA — aerospace personnel certification, EN 4179 (European aerospace NDT cert), NADCAP-recognized written practices, OEM-specific Boeing BSS / Airbus AITM / GE / P&W / RR endorsements. Quote on request."
      heroBody="Atlantis NDT ERP Certification Tracking for aerospace quality control firms — aerospace personnel qualification records, EN 4179 (the European aerospace standard), NADCAP-recognized written practices, FAA Part 145 inspection-authorisation tracking, EASA Part-66 license categories, and OEM-specific endorsements. Part of the all-apps-included subscription."
      whatItIs={[
        "Vision-test currency (Snellen near-vision 20/25 corrected, color contrast) is tracked separately with 12-month cycles.",
        "EN 4179 (Aerospace series — Qualification and approval of personnel for non-destructive testing) is the European counterpart, used by Airbus, Safran, Rolls-Royce Civil Aerospace, BAE Systems, Thales, Dassault Aviation. The two standards are technically aligned but documentary differences require parallel tracking for firms serving both US and European aerospace markets.",
      ]}
      useCases={[
        { useCase: "Use Case 1", body: "Example: a Wichita airframe NDT shop records each technician's certification by level and method, with OJT and training hours, and checks who is expiring soon before assigning work on a customer program." },
        { useCase: "Use Case 2", body: "Example: a Bangalore aerospace QA contractor keeps EN 4179 and customer-specific aerospace certifications side by side for each technician, with vision tests and their expiry dates tracked in the same record." },
        { useCase: "Use Case 3", body: "Example: a Toulouse supplier QA firm uses the Expiring Soon and Expired lists before a NADCAP audit to confirm that every technician's certification and vision test is current." },
        { useCase: "Use Case 4", body: "Example: a Connecticut engine MRO inspection firm gets a timesheet warning when a technician books hours without a valid certificate, so a lapse is caught in the office rather than by an auditor." },
      ]}
      keyFeatures={[
        
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
        
        
        { question: "Can the platform track OEM-specific endorsements?", answer: "Yes. Customer-specific endorsements (Boeing BSS7039 UT Level II for 737 fuselage, Airbus AITM 6-1001 UT Level II for A350 wing, GE Aviation GE C50TF UT Level II for engine work, P&W PWA-MCL UT Level II for engine work, Rolls-Royce RR MTSP UT Level II for Trent engine work) are tracked separately from generic certification currency. When a technician is qualified to Boeing BSS7039 UT Level II for the 737 fuselage program, the system tracks that specific endorsement, and a different endorsement for Airbus AITM 6-1001 UT Level II for the A350 wing program." },
        { question: "How does the platform handle vision-test currency?", answer: "Yes. The platform tracks vision-test currency per technician with 30-day pre-expiry alerts." },
        { question: "Does the platform track OJT hours?", answer: "Yes. The platform tracks OJT accumulation per technician." },
        { question: "Can the platform handle FAA Part 145 inspection authorisation?", answer: "Yes. FAA Part 145 inspection authorisation — required for technicians performing safety-critical inspections at FAA Part 145 repair stations — is tracked per technician with inspection-authorisation level (Hidden Damage Inspection, Conformity Inspection, Non-Routine Inspection, Final Inspection per repair station's manual)." },
        { question: "How does the platform handle EASA Part-66?", answer: "Yes. EASA Part-66 license categories (A, B1, B2, C, L) — the European maintenance personnel licensing system — are tracked per technician with category-specific authorisations and 5-year renewal cycles. For aerospace firms operating in EU markets, EASA Part-66 is required alongside EN 4179 NDT certification." },
        { question: "Does the platform integrate with PRI eAuditNet?", answer: "Yes. PRI eAuditNet / Cumulus (NADCAP audit-submission portal) integration produces personnel qualification matrix evidence in NADCAP-ready format." },
      ]}
    />
  );
}
