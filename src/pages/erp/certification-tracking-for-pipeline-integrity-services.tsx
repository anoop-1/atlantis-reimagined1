import ErpIndustryAppPage from "@/components/ErpIndustryAppPage";

export default function CertificationTrackingForPipelineIntegrityServices() {
  return (
    <ErpIndustryAppPage
      pageTitle="Certification Tracking for Pipeline Integrity Services"
      slug="certification-tracking-for-pipeline-integrity-services"
      appName="Certification Tracking"
      industry="pipeline integrity services"
      breadcrumbLabel="Cert Tracking — Pipeline"
      trustBadge="ASNT / API 1169 / NACE / CSWIP ready"
      metaDescription="Atlantis NDT ERP Certification Tracking for pipeline integrity firms — ASNT Level II/III, API 1169 Pipeline Construction Inspector, API SIFE/SISE, NACE CIP / CP-3, CSWIP 3.x, OQ (Operator Qualification) per ASME B31Q. Quote on request."
      heroBody="Atlantis NDT ERP Certification Tracking for pipeline integrity service providers — ASNT Level II / III in UT, MT, PT, ET, RT, VT, AET; API 1169 Pipeline Construction Inspector; API SIFE (Source Inspector Fixed Equipment), API SISE (Source Inspector Rotating Equipment); NACE CIP Level 1/2/3, NACE CP-3, NACE ICCS; CSWIP 3.1 / 3.2 welding inspection; OQ (Operator Qualification) per ASME B31Q / ASME OQ tasks. Part of the all-apps-included subscription."
      whatItIs={[
        "Certification Tracking for Pipeline Integrity Services inside Atlantis NDT ERP is the Atlantis ERP HR + Quality + Compliance module configured for the certification matrix that defines pipeline integrity work — ASNT SNT-TC-1A or CP-189 Level II / III qualifications in UT / MT / PT / ET / RT / VT / AET / TT, API 1169 (Pipeline Construction Inspector — 5-year cycle), API SIFE / SISE (Source Inspector for Fixed / Rotating Equipment — 5-year cycle), API 510 / 570 / 653 inspector certifications (5-year cycle with annual maintenance), NACE CIP Level 1 / 2 / 3 (3-year cycle), NACE CP-3 (Cathodic Protection Tester — 3-year), NACE ICCS (Internal Corrosion for Coating Systems), CSWIP 3.1 (Welding Inspector) / 3.2 (Senior Welding Inspector) — 5-year cycle.",
        "OQ (Operator Qualification) per US DOT 49 CFR 192 Subpart N (gas) and 49 CFR 195 Subpart G (hazardous liquid) — implemented via ASME B31Q / API 1161 OQ task lists — is the most operator-specific certification scheme. Each operator (Enbridge, TC Energy, Pembina, Williams) maintains its own OQ task list, with periodic re-qualification required every 3-5 years. The system tracks per-technician per-task OQ status across multiple operators.",
      ]}
      useCases={[
        { useCase: "Use Case 1", body: "Example: a Houston pipeline integrity firm records ASNT certifications and other client-required qualifications for each technician, and checks the Expiring Soon list before mobilising a crew." },
        { useCase: "Use Case 2", body: "Example: a Calgary contractor records ISO 9712 certifications issued through CGSB alongside ASNT ones, each with its own expiry, so crews for federally regulated pipelines are picked from current records." },
        { useCase: "Use Case 3", body: "Example: a Mumbai pipeline contractor sets up daily email alerts for technician certificates, so supervisors hear about an expiring qualification before that technician is booked for a mobilisation." },
        { useCase: "Use Case 4", body: "Example: a São Paulo pipeline contractor assigns crews in Team Assignments by method, level and availability, and the system blocks any technician from being double-booked." },
      ]}
      keyFeatures={[
        "ASNT SNT-TC-1A / CP-189 Level II / III tracking (UT, MT, PT, ET, RT, VT, AET)",
        "API 1169 Pipeline Construction Inspector (5-year cycle)",
        "API SIFE / SISE inspector certification",
        "API 510 / 570 / 653 inspector certification",
        "NACE CIP Level 1 / 2 / 3 tracking",
        "NACE CP-3 / CP-4 (Cathodic Protection)",
        "NACE ICCS (Internal Corrosion for Coating Systems)",
        "CSWIP 3.1 / 3.2 welding inspection",
        "CGSB 48.9712 Canadian NDT certification",
        "ISNT Level II / III (India)",
        "OQ (Operator Qualification) per ASME B31Q / API 1161 / DOT 49 CFR 192/195",
        "Operator-specific OQ task-list tracking (Enbridge, TC Energy, Pembina, Williams)",
        "Mobile app for field-crew certification capture (offline-capable)",
      ]}
      integrations={[
        "ASNT IRRSP (International Radiographer Reciprocity Scheme Portal)",
        "ASNT NDT Level III certification database",
        "API ICP (Individual Certification Programs) registry",
        "NACE Online (AMPP) certification registry",
        "CSWIP / BINDT PCN registry",
        "CGSB / Natural Resources Canada certification registry",
        "ISNT online certification system",
        "Veriforce OQ tracking integration",
        "ISNetworld OQ tracking integration",
        "Avetta OQ tracking integration",
      ]}
      faqs={[
        { question: "Does the platform track OQ across multiple operators?", answer: "Yes. OQ (Operator Qualification) per DOT 49 CFR 192 Subpart N / 195 Subpart G is operator-specific — every operator (Enbridge, TC Energy, Pembina, Williams, Kinder Morgan, Plains All American, Energy Transfer, ONEOK, Magellan) maintains its own OQ task list. The platform tracks per-technician per-task OQ status across all operators the technician works for, with re-qualification cycles (typically 3-5 years per task) auto-scheduled." },
        { question: "How does the platform handle API 1169 currency?", answer: "Yes. API 1169 (Pipeline Construction Inspector) — 5-year cycle with annual maintenance — is tracked with the API IRRSP / ICP database. Re-certification windows fire 6, 3, 1 month before expiry. Expired certifications block the inspector from being scheduled to API 1169-required scopes." },
        { question: "Can the platform track NACE CIP / CP / ICCS?", answer: "Yes. NACE Coating Inspector Program (CIP) Level 1 (basic), Level 2 (intermediate), Level 3 (peer-reviewed senior); NACE Cathodic Protection (CP-1, CP-2, CP-3, CP-4); NACE Internal Corrosion for Coating Systems (ICCS) — all are tracked with 3-year cycles. Now part of AMPP (Association for Materials Protection and Performance) — both NACE and AMPP certification IDs are accepted." },
        { question: "Does the platform handle CSWIP welding inspection?", answer: "Yes. CSWIP 3.1 (Welding Inspector) and CSWIP 3.2 (Senior Welding Inspector) — UK/European-origin certifications widely accepted globally — are tracked on 5-year cycles. ASME / API integration for inspectors who hold both schemes is supported." },
        { question: "How does the platform handle the 90-day rule for NDT continuity?", answer: "Yes. The 90-day rule per AWS / NDT-method-specific continuity requirements (a technician who has not actively performed the method in the prior 90 days requires re-qualification) is tracked. Last-method-execution date per technician is captured via field-mobile-app entries; alerts fire 30 days before 90-day lapse." },
        { question: "Can the platform handle multi-scheme parallel certifications?", answer: "Yes. Many pipeline-integrity technicians hold parallel certifications — ASNT (US-origin) + CGSB 48.9712 (Canadian) + ISO 9712 (international) + customer-specific written practices. The platform stores all parallel certifications with separate expiry and renewal workflows." },
        { question: "Does the platform integrate with Veriforce / ISNetworld?", answer: "Yes. Veriforce, ISNetworld, Avetta and Achilles — the major contractor pre-qualification platforms in North America — are integrated. Personnel OQ records flow bidirectionally so contractor staff appear as qualified on operator OQ portals automatically." },
        { question: "How does the platform handle radiographic safety?", answer: "Industrial radiography safety — NRC (US Nuclear Regulatory Commission), Agreement State (US), CNSC (Canada), FANR (UAE), AERB (India), NRRC (Saudi Arabia), ASN (France), ONR (UK) — radiographer-card tracking, dose-record management per ALARA, radiographer-assistant certification, and source-pit operator qualification are all integrated." },
      ]}
    />
  );
}
