import ErpIndustryAppPage from "@/components/ErpIndustryAppPage";

export default function CertificationTrackingForAerospaceQualityControl() {
  return (
    <ErpIndustryAppPage
      pageTitle="Certification Tracking for Aerospace Quality Control"
      slug="certification-tracking-for-aerospace-quality-control"
      appName="Certification Tracking"
      industry="aerospace quality control"
      breadcrumbLabel="Cert Tracking — Aerospace"
      trustBadge="SNT-TC-1A / EN 4179 / NADCAP ready"
      metaDescription="Atlantis NDT ERP Certification Tracking for aerospace QA — SNT-TC-1A-based aerospace NDT certification, EN 4179 (European aerospace NDT cert), NADCAP-recognized written practices, OEM-specific Boeing BSS / Airbus AITM / GE / P&W / RR endorsements. Quote on request."
      heroBody="Atlantis NDT ERP Certification Tracking for aerospace quality control firms — personnel certification under ASNT SNT-TC-1A (2024) written practices with customer aerospace flow-down, EN 4179 certificates for European programmes, NADCAP-recognized written practices, FAA Part 145 inspection-authorisation tracking, EASA Part-66 license categories, and OEM-specific endorsements for Boeing, Airbus, Embraer, Lockheed Martin, Northrop Grumman, GE Aviation, Pratt & Whitney, Rolls-Royce, Safran. Part of the all-apps-included subscription."
      whatItIs={[
        "Certification Tracking for Aerospace Quality Control inside Atlantis NDT ERP is the Atlantis ERP HR + Quality + Compliance module configured for the layered certification matrix of aerospace NDT — the employer's written practice, built on ASNT SNT-TC-1A (2024) and approved by its NDT Level III, sets out Level I, Level II and Level III qualification through training hours, documented experience, General, Specific and Practical examinations and vision examinations — across UT, RT, MT, PT, ET, VT, TT, LT, NRT, AET methods, with each customer's aerospace requirements and OEM endorsements tracked on top. Vision-test currency (near-vision acuity, color contrast) is tracked separately on the interval the written practice sets. Atlantis also provides ASNT NDT Level III consulting to write or update that written practice.",
        "EN 4179 (Aerospace series — Qualification and approval of personnel for non-destructive testing) is the European aerospace standard, used by Airbus, Safran, Rolls-Royce Civil Aerospace, BAE Systems, Thales, Dassault Aviation; the platform records EN 4179 certificates as a separate scheme for firms serving European aerospace markets. Customer-specific written practices — Boeing BSS7039, Airbus AITM 6-1001, Embraer NE 27-001, GE Aviation GE C50TF, P&W PWA-MCL, Rolls-Royce RR MTSP — are additional layers on top of the base SNT-TC-1A written-practice (or EN 4179) qualification.",
      ]}
      useCases={[
        { useCase: "Use Case 1", body: "Example: a Wichita airframe NDT shop records each technician's SNT-TC-1A written-practice certification by level and method, with OJT and training hours, and checks who is expiring soon before assigning work on a customer program." },
        { useCase: "Use Case 2", body: "Example: a Bangalore aerospace QA contractor keeps SNT-TC-1A written-practice and EN 4179 certifications side by side for each technician, with vision tests and their expiry dates tracked in the same record." },
        { useCase: "Use Case 3", body: "Example: a Toulouse supplier QA firm uses the Expiring Soon and Expired lists before a NADCAP audit to confirm that every technician's certification and vision test is current." },
        { useCase: "Use Case 4", body: "Example: a Connecticut engine MRO inspection firm gets a timesheet warning when a technician books hours without a valid certificate, so a lapse is caught in the office rather than by an auditor." },
      ]}
      keyFeatures={[
        "SNT-TC-1A written-practice Level I / II / III tracking across UT, RT, MT, PT, ET, VT, TT, LT, NRT, AET",
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
        { question: "Can the platform hold EN 4179 alongside SNT-TC-1A certifications?", answer: "Yes. Many global aerospace QA firms hold EN 4179 certifications for European programmes alongside certifications under their SNT-TC-1A-based written practice. The platform stores both certifications per technician with separate expiry, scope and renewal workflows, so each customer audit sees the scheme it asked for." },
        { question: "Can the platform track OEM-specific endorsements?", answer: "Yes. Customer-specific endorsements (Boeing BSS7039 UT Level II for 737 fuselage, Airbus AITM 6-1001 UT Level II for A350 wing, GE Aviation GE C50TF UT Level II for engine work, P&W PWA-MCL UT Level II for engine work, Rolls-Royce RR MTSP UT Level II for Trent engine work) are tracked separately from generic written-practice certification currency. When a technician is qualified to Boeing BSS7039 UT Level II for the 737 fuselage program, the system tracks that specific endorsement, and a different endorsement for Airbus AITM 6-1001 UT Level II for the A350 wing program." },
        { question: "How does the platform handle vision-test currency?", answer: "Yes. The written practice sets the vision examinations — near-vision acuity, far vision where relevant for specific methods, color contrast (typically Ishihara plates or Farnsworth D-15 for color-vision-dependent methods like PT/MT) — and their interval, and a customer's flow-down can add its own. The platform tracks vision-test currency per technician with 30-day pre-expiry alerts." },
        { question: "Does the platform track OJT hours?", answer: "Yes. The written practice sets documented OJT (On-Job Training) and experience hours per method and level before a technician can be certified Level II, and customer-specific written practices can add hours for their programmes. The platform tracks OJT accumulation per technician." },
        { question: "Can the platform handle FAA Part 145 inspection authorisation?", answer: "Yes. FAA Part 145 inspection authorisation — required for technicians performing safety-critical inspections at FAA Part 145 repair stations — is tracked per technician with inspection-authorisation level (Hidden Damage Inspection, Conformity Inspection, Non-Routine Inspection, Final Inspection per repair station's manual). FAA-specific tracking is parallel to but distinct from SNT-TC-1A written-practice and EN 4179 NDT certification." },
        { question: "How does the platform handle EASA Part-66?", answer: "Yes. EASA Part-66 license categories (A, B1, B2, C, L) — the European maintenance personnel licensing system — are tracked per technician with category-specific authorisations and 5-year renewal cycles. For aerospace firms operating in EU markets, EASA Part-66 is required alongside EN 4179 NDT certification." },
        { question: "Does the platform integrate with PRI eAuditNet?", answer: "Yes. PRI eAuditNet / Cumulus (NADCAP audit-submission portal) integration produces personnel qualification matrix evidence in NADCAP-ready format. The eAuditNet upload includes per-technician written-practice and EN 4179 certificates, General / Specific / Practical examination records, vision-test currency, OJT records, and customer-specific endorsement portfolio for the Nadcap AC7114 audit." },
      ]}
    />
  );
}
