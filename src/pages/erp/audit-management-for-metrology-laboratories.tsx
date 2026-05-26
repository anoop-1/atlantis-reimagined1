import ErpIndustryAppPage from "@/components/ErpIndustryAppPage";

export default function AuditManagementForMetrologyLaboratories() {
  return (
    <ErpIndustryAppPage
      pageTitle="Audit Management for Metrology Laboratories"
      slug="audit-management-for-metrology-laboratories"
      appName="Audit Management"
      industry="metrology laboratories"
      breadcrumbLabel="Audit Management for Metrology Labs"
      trustBadge="ISO 17025 / ANSI Z540 / NIST-traceable"
      metaDescription="Atlantis NDT ERP Audit Management for metrology laboratories. ISO/IEC 17025:2017 internal/external audit workflow, NABL/A2LA/ANAB/UKAS surveillance, proficiency testing tracking, CIPM-aligned evidence packs. regional pricing flat."
      heroBody="Atlantis NDT ERP Audit Management pre-configured for metrology laboratories — ISO/IEC 17025:2017 internal and external audit workflow, NABL / A2LA / ANAB / UKAS / EIAC / DAC / SAC surveillance cycles, proficiency-testing (PT) and inter-laboratory comparison (ILC) tracking, CIPM MRA-aligned evidence packs, ANSI/NCSL Z540.3 conformity-assessment audit trail and customer-witness-audit logistics for major industrial, aerospace and pharmaceutical clients. Part of the all-apps-included subscription."
      whatItIs={[
        "Audit Management for Metrology Laboratories inside Atlantis NDT ERP is the Odoo 18 Quality + Audit module pre-configured for the operating reality of ISO/IEC 17025:2017-accredited calibration and testing laboratories. The system manages the four overlapping audit cycles every accredited metrology lab navigates: (1) Annual internal audits per ISO/IEC 17025:2017 Section 8.8 — covering every accredited scope at least once per accreditation cycle, with management review feedback loop; (2) Accreditation body surveillance audits — NABL India CIPM-aligned cycle (typically annual + biennial reassessment), A2LA US (annual surveillance, full reassessment every 2 years), ANAB US, UKAS UK, ENAS / EIAC UAE, DAC Dubai, SAC Singapore, JAS-ANZ Australia/NZ; (3) Customer witness audits — typically demanded by aerospace OEMs (Boeing BSL-37, Airbus QSAR-K2, GE Aviation Q9000), pharmaceutical customers (FDA-equivalent QSR audits), and automotive (IATF 16949 Tier 1) — happen on demand and require ad-hoc evidence-pack preparation; (4) Regulatory inspections — FDA 21 CFR Part 11 / Part 820, DOT, Health Canada, MHRA, EMA, PMDA for specific industries.",
        "Every audit (internal or external) is tracked as a project with: audit type, scope (which accredited methods/disciplines), planned date, audit team (auditors with qualifications, observers, escorts), evidence-pack requirements per audit-checklist clause, findings management (Critical / Major / Minor / Observation per accreditation-body taxonomy), root-cause analysis using 5-Why or Fishbone method, corrective-action workflow with owner / due-date / verification-of-effectiveness, and management-review summary. The system tracks finding frequency by clause across audit cycles — letting the QA manager see which ISO 17025 clauses repeatedly generate findings and where prevention investment will have the biggest impact.",
      ]}
      useCases={[
        { useCase: "Use Case 1", body: "A Mumbai-based NABL CIPM-aligned metrology laboratory (45 technicians, 9 accredited disciplines) consolidated 14 separate audit spreadsheets into Atlantis NDT ERP — eliminated 8 recurring NABL surveillance findings per cycle (typical baseline: 12 findings) and cleared the next full reassessment with zero major non-conformances." },
        { useCase: "Use Case 2", body: "An A2LA-accredited metrology laboratory in Houston (32 technicians) serving Boeing, GE Aviation and Lockheed Martin customer-witness audits manages parallel A2LA, Boeing BSL-37 and customer-specific quality manuals — audit-prep time per audit dropped from 12 days to 2 days." },
        { useCase: "Use Case 3", body: "A Dubai-based EIAC-accredited metrology laboratory (28 technicians) running 16 ILC (Inter-Laboratory Comparison) and PT (Proficiency Testing) schemes annually across pressure, temperature, dimensional, mass, force and electrical disciplines tracks z-score performance trends per technique — flagged 3 systematic biases before they triggered accreditation-body intervention." },
        { useCase: "Use Case 4", body: "A Singapore SAC-accredited metrology laboratory (22 technicians) supporting pharmaceutical (Pfizer Tuas, Glaxo Tuas, Lonza Tuas, MSD Tuas) and semiconductor (Micron Singapore, GlobalFoundries Singapore, UMC Singapore, TSMC Singapore) customers manages FDA 21 CFR Part 11 electronic-signature audit-trail evidence — cleared next FDA QSR audit with zero observations." },
      ]}
      keyFeatures={[
        "ISO/IEC 17025:2017 internal audit cycle management (per Section 8.8)",
        "Accreditation-body surveillance audit calendar (NABL, A2LA, ANAB, UKAS, EIAC, DAC, SAC)",
        "CIPM MRA-aligned evidence pack generation",
        "Customer witness audit logistics and evidence preparation",
        "Proficiency Testing (PT) and Inter-Laboratory Comparison (ILC) tracking with z-score trending",
        "Finding management (Critical / Major / Minor / Observation per body taxonomy)",
        "Root-cause analysis (5-Why / Fishbone / FMEA) workflow",
        "Corrective action with owner, due date, verification of effectiveness",
        "ANSI/NCSL Z540.3 conformity-assessment audit trail",
        "FDA 21 CFR Part 11 electronic-signature audit-trail evidence",
        "Management review minutes and tracking",
        "Auditor qualification database (ISO 19011 internal-auditor competence)",
        "Document-control integration (procedure revision history)",
        "Trend analysis: finding frequency by ISO 17025 clause across cycles",
      ]}
      integrations={[
        "NABL CIPM-aligned audit evidence export",
        "A2LA Document Submission Portal integration",
        "ANAB CALIBQ submission templates",
        "UKAS Online Customer Portal evidence pack",
        "BIPM CMC (Calibration and Measurement Capabilities) submission",
        "ASTM Interlaboratory Studies Program (ISP) integration",
        "NCSL International round-robin participation",
        "EURACHEM proficiency-testing programs",
        "APMP (Asia Pacific Metrology Programme) ILC schemes",
        "Customer audit-portal upload (Boeing, GE, Pratt & Whitney, Airbus, Pfizer, Glaxo)",
      ]}
      faqs={[
        { question: "How does the system manage parallel accreditation-body audit cycles?", answer: "Most metrology labs hold parallel accreditations under multiple national bodies (NABL India + A2LA US + UKAS UK + ENAS/EIAC UAE + SAC Singapore + DAC Dubai). Each body has its own surveillance frequency, evidence-format requirements, and finding-classification taxonomy. Atlantis NDT ERP supports per-body audit calendars with body-specific evidence-pack templates, body-specific finding taxonomies (NABL uses Critical/Major/Minor; A2LA uses Concerns/Major NCs/Minor NCs; UKAS uses Mandatory/Optional findings), and body-specific surveillance scheduling. A single calibration record can produce evidence for multiple accreditation audits without duplicate work." },
        { question: "What is CIPM MRA and why does it matter?", answer: "The CIPM Mutual Recognition Arrangement (CIPM MRA), signed under the Comité International des Poids et Mesures, allows accredited national metrology institutes (NIST, NPL, BAM, NIM, KRISS, PTB, INMETRO, NMIA, KEBS) to mutually recognize each other's measurement standards. For accredited calibration labs, CIPM MRA-aligned traceability means that a Mumbai-NABL-accredited calibration is recognized in 100+ countries as equivalent to a NIST-traceable US calibration. Atlantis NDT ERP tracks CMC (Calibration and Measurement Capabilities) entries per accreditation body and ensures every customer calibration cites the CMC entry under which it was performed." },
        { question: "How is proficiency testing (PT) participation tracked?", answer: "ISO/IEC 17025:2017 Section 7.7 requires accredited labs to participate in proficiency testing schemes and inter-laboratory comparisons covering each major accreditation scope at sufficient frequency to demonstrate ongoing technical competence. Atlantis NDT ERP tracks: PT scheme provider (EURACHEM, ASTM ISP, NCSL Round Robin, A2LA, EA InterLab), discipline covered, participation date, the lab's measurement result, the assigned (reference) value, the z-score result, the En-number result, the action taken on out-of-criterion results, and the trend of z-scores over time for each scope. Systematic bias (consistent positive or negative z-score over multiple rounds) is automatically flagged for technical-management review." },
        { question: "Can the system handle FDA 21 CFR Part 11 electronic-signature audit trails?", answer: "Yes. FDA 21 CFR Part 11 (Electronic Records; Electronic Signatures) requires pharmaceutical-customer-serving calibration labs to maintain immutable electronic-signature audit trails on every record creation, modification or approval. Atlantis NDT ERP provides: user-unique authentication (multi-factor), electronic signatures with intent-of-signature capture (e.g. 'authored by', 'reviewed by', 'approved by'), automatic audit-trail recording of every record change (who, when, what, why), validation documentation per GAMP 5, and OQ (Operational Qualification) / PQ (Performance Qualification) test evidence available on demand for customer FDA-equivalent audits." },
        { question: "How does customer witness audit logistics work?", answer: "Customer witness audits (Boeing BSL-37, Airbus QSAR-K2, GE Aviation Q9000, Pratt & Whitney ASQR-09, Rolls-Royce SABRe) are typically scheduled 30-90 days in advance and require: customer-specific evidence-pack preparation (auditor's templates, not ISO 17025 generic), customer-specific personnel-qualification matrices, customer-specific procedure cross-walks (showing how your ISO 17025 procedures meet each customer-specific clause), and customer-supplier non-disclosure agreement (NDA) management. The system stores customer-specific quality manuals and tracks audit-trail evidence for each clause cross-walk so that auditor questions have immediate answers." },
        { question: "Does the system handle ANSI/NCSL Z540.3 conformity assessment?", answer: "Yes. ANSI/NCSL Z540.3 is the US national standard for measurement equipment calibration intervals and conformity assessment, widely required by US defense (DoD) and aerospace (Boeing, Lockheed Martin, Raytheon Technologies, Northrop Grumman) customers in addition to ISO/IEC 17025:2017. Z540.3 mandates Probability of False Accept (PFA) below 2% for measurement conformity decisions — Atlantis NDT ERP calculates PFA per Z540.3 Appendix C and applies guard-banded decision rules per ILAC G8:2019 to achieve compliance. PFA records are stored per calibration certificate and available for Z540.3-mandated reporting." },
        { question: "Can we track auditor competence per ISO 19011?", answer: "Yes. ISO 19011 (Guidelines for auditing management systems) requires internal auditors to demonstrate competence — discipline-specific knowledge, audit-process knowledge, behavioural skills, education and audit experience. Atlantis NDT ERP maintains an auditor qualification database with: relevant discipline expertise, completed audit cycles (count and date), specific audit-skill training (lead auditor course, internal auditor course, lab-specific accreditation training), continuing-professional-development (CPD) records, and conflict-of-interest declarations. The audit-planning workflow automatically blocks scheduling auditors against scopes they are not currently qualified to audit." },
        { question: "How does management review integration work?", answer: "ISO/IEC 17025:2017 Section 8.9 requires periodic management review of the QMS, with mandatory inputs (changes in scope, audit findings and corrective actions, customer feedback, PT/ILC results, complaints, validation status of methods, supplier evaluation results, internal-audit results, accreditation-body audit results) and mandatory outputs (resource needs, training needs, opportunities for improvement). Atlantis NDT ERP automatically rolls up the mandatory inputs for each management review session, generates a draft agenda, captures the discussion notes, and tracks each output (resource request, training plan, improvement opportunity) through to closure with auditor-friendly evidence retention." },
      ]}
    />
  );
}
