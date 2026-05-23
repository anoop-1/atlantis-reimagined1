import ErpIndustryAppPage from "@/components/ErpIndustryAppPage";

export default function DocumentControlForEnvironmentalTestingLabs() {
  return (
    <ErpIndustryAppPage
      pageTitle="Document Control for Environmental Testing Laboratories"
      slug="document-control-for-environmental-testing-labs"
      appName="Document Control"
      industry="environmental testing laboratories"
      breadcrumbLabel="Document Control for Environmental Labs"
      trustBadge="ISO 17025 / NELAC / EPA / CPCB"
      metaDescription="Atlantis NDT ERP Document Control for environmental testing laboratories. EPA SW-846 / TNI NELAC / NABL ISO 17025 method libraries, SOP revision control, sample chain-of-custody, regulatory submission templates. $18,000/yr flat."
      heroBody="Atlantis NDT ERP Document Control pre-configured for environmental testing laboratories — EPA SW-846 / TNI NELAC / NABL ISO 17025 method library management, SOP revision control with electronic-signature workflow, sample chain-of-custody documentation, ASTM / APHA Standard Methods / OSHA NIOSH method evidence, regulatory submission templates for EPA, ECHA, CPCB, SPCB, MPCB, ADWEA, MoIAT and customer-specific quality manual cross-walks. Part of the all-apps-included $18,000 / year subscription."
      whatItIs={[
        "Document Control for Environmental Testing Laboratories inside Atlantis NDT ERP is the Odoo 18 Documents + Quality module pre-configured for the operating reality of ISO/IEC 17025:2017-accredited environmental testing labs serving regulatory clients (EPA Region offices, state environmental agencies, CPCB / state SPCBs, ECHA EU, ADWEA UAE, MoIAT UAE), industrial clients (oil & gas operators, petrochemical operators, manufacturing, mining), commercial clients (real-estate environmental site assessments) and government clients (military base assessments, public-health monitoring). The system manages every controlled document required by ISO/IEC 17025:2017 Section 8.3 — quality manual, procedure manuals (SOPs), work instructions, test methods, sampling plans, calibration certificates of reference standards, training records, internal-audit reports, management-review minutes, calibration certificates of measurement equipment — with full revision history, electronic-signature approval workflow per FDA 21 CFR Part 11 standards, distribution control per ISO 17025 7.5, and obsolescence management.",
        "Every test method (EPA SW-846 8260D for VOCs, EPA SW-846 8270E for SVOCs, EPA SW-846 6020B for ICP-MS metals, EPA SW-846 7470A/7471B for mercury, APHA Standard Methods 4500-NH3 for ammonia, ASTM D5673 for ICP-MS, NIOSH Method 7400 for asbestos, OSHA ID-160 for lead in air, EPA Method 8330B for explosives, EPA Method 1664 for HEM) is maintained as a controlled document with revision history, validation evidence per ISO/IEC 17025:2017 Section 7.2, method-detection-limit (MDL) studies per 40 CFR Part 136 Appendix B, method-validation-record per the lab's standard validation SOP, ongoing precision-and-bias monitoring data, and proficiency-testing performance trending. When EPA, TNI, NELAC or NABL releases a method-revision update, the system supports controlled rollout to all qualified analysts with read-receipt tracking and training-effectiveness verification.",
      ]}
      useCases={[
        { useCase: "Use Case 1", body: "A Hyderabad-based NABL-accredited environmental testing lab (32 analysts, 4 method-discipline groups — water, air, soil, waste) consolidated 87 method SOPs and 1,400+ controlled documents into Atlantis NDT ERP — eliminated 6 recurring NABL surveillance findings per cycle on document-control clauses and reduced revision-rollout time from 14 days to 2 days." },
        { useCase: "Use Case 2", body: "A Houston-based EPA / TNI NELAC-accredited environmental testing lab (28 analysts) serving ExxonMobil, Shell, Chevron and Marathon refinery wastewater discharge monitoring uses electronic-signature workflow on every regulatory deliverable — cleared next TCEQ surveillance audit with zero findings." },
        { useCase: "Use Case 3", body: "A Dubai-based EIAC-accredited environmental testing lab (22 analysts) serving ADWEA / DEWA potable-water testing, ADNOC Onshore environmental compliance and Masdar City sustainability monitoring runs bilingual English/Arabic regulatory submissions per UAE Federal Law No. 24 of 1999 on environmental protection." },
        { useCase: "Use Case 4", body: "A Singapore SAC-accredited environmental testing lab (18 analysts) supporting NEA potable-water, MOM industrial hygiene and PUB wastewater monitoring uses ISO/IEC 17025:2017 + ISO 14001 + ISO 45001 triple-management-system audit-pack evidence — cleared concurrent surveillance from three different accreditation bodies (SAC, BSI, TÜV SÜD) on a single audit week." },
      ]}
      keyFeatures={[
        "ISO/IEC 17025:2017 Section 8.3 controlled-document management",
        "Method library (EPA SW-846, TNI NELAC, APHA Standard Methods, ASTM, NIOSH, OSHA)",
        "Electronic-signature workflow per FDA 21 CFR Part 11",
        "Method validation per 40 CFR Part 136 Appendix B (MDL studies)",
        "Per-analyst method-qualification tracking (Initial Demonstration of Capability — IDOC)",
        "Sample chain-of-custody from field collection through analyst dispatch",
        "Method-revision controlled rollout with training-effectiveness verification",
        "EPA / TCEQ / state-SPCB / CPCB regulatory submission templates",
        "ECHA REACH / CLP regulatory document workflow (EU)",
        "Customer quality-manual cross-walk per regulatory client",
        "ASTM E2554 statistical-control-charting for ongoing method performance",
        "Document obsolescence and archival per ISO 17025 Section 8.4",
        "Audit-trail of every read, modification and approval action",
        "Sub-tier supplier document control (reference-standard suppliers, gas suppliers)",
      ]}
      integrations={[
        "EPA WQX / WQXweb water-quality data exchange",
        "EPA NEI National Emissions Inventory submission",
        "TNI NELAC accreditation portal evidence pack",
        "TCEQ Texas STARS data submission integration",
        "Air Toxics Hot Spots Program (ARB CARB) database",
        "CPCB India ENVIS data submission",
        "ADEC Alaska e-DMR (electronic Discharge Monitoring Report)",
        "ECHA REACH-IT submission portal templates",
        "LabSystems Lablynx / STARLIMS LIMS integration",
        "Element / Eurofins / SGS / Bureau Veritas multi-lab data exchange",
      ]}
      faqs={[
        { question: "How does the system manage EPA SW-846 method revisions?", answer: "EPA SW-846 (Test Methods for Evaluating Solid Waste, Physical/Chemical Methods) revisions are issued periodically — most recently EPA SW-846 Update VI Revision 2 in 2024-2025. Atlantis NDT ERP tracks each method's current revision in your lab's accreditation scope (8260D rev 0, 8270E rev 0, 6020B rev 0, 7471B rev 1, etc.), the next-effective-date for any pending revision, and the controlled-rollout workflow when you upgrade — including method-validation studies per 40 CFR Part 136 Appendix B, analyst Initial Demonstration of Capability (IDOC) re-qualification, and customer / regulator notification of the upgraded method." },
        { question: "What is TNI NELAC and how is it different from ISO 17025?", answer: "TNI (The NELAC Institute) NELAC is the US-specific national environmental laboratory accreditation framework — a more prescriptive overlay on ISO/IEC 17025:2017 used by state-level environmental agencies in the US. NELAC 2016 Standard requires specific data-quality-objective documentation, specific quality-control sample frequencies, and specific corrective-action timelines beyond generic ISO 17025 requirements. Atlantis NDT ERP supports both ISO 17025 generic compliance and NELAC-specific additional clauses through configurable accreditation-overlay templates." },
        { question: "How is sample chain-of-custody managed for regulatory clients?", answer: "Environmental sample chain-of-custody is regulatory-grade — for EPA-enforceable monitoring, the chain-of-custody documentation is the evidence in any enforcement action. Atlantis NDT ERP captures: sample collection (sampler ID, GPS coordinates, sample collection method, preservation type, container ID, ice/refrigeration condition), field-to-courier transfer (signature, time), courier-to-lab transfer (signature, time, condition on receipt — temperature, integrity), lab-internal receipts (receiving analyst, time, condition), analyst-to-storage transfer, storage-to-analysis-bench transfer, analyst-to-archive-disposal disposition. Every transfer is electronic-signature-stamped per 21 CFR Part 11 standards." },
        { question: "Does the system support EPA method validation per 40 CFR Part 136?", answer: "Yes. EPA 40 CFR Part 136 Appendix B prescribes Method Detection Limit (MDL) study procedure — 7 spiked replicates at low concentration, calculation of MDL = t(n-1, 99%) × s, ongoing MDL verification per the EPA 2016 revision. Atlantis NDT ERP supports the full MDL workflow: study design, replicate-result entry, statistical calculation per the EPA-prescribed t-distribution method, comparison against current accreditation-scope MDL, MDL-update workflow when MDL studies show drift, and customer notification when MDL changes would affect existing customer-required reporting limits." },
        { question: "Can the system handle ECHA REACH submissions for EU customers?", answer: "Yes. ECHA REACH (Registration, Evaluation, Authorisation and Restriction of Chemicals) submissions require specific data formats — IUCLID 6 dossier structure, OECD Test Guideline conformity, GLP (Good Laboratory Practice) compliance evidence under Directive 2004/10/EC. Atlantis NDT ERP exports test-result data in IUCLID-compatible formats, maintains GLP-compliant audit-trail evidence per Directive 2004/9/EC, and supports the OECD Mutual Acceptance of Data (MAD) framework that allows REACH submissions from non-EU labs holding equivalent national GLP compliance (US FDA GLP under 21 CFR Part 58, OECD MAD partners)." },
        { question: "How does per-analyst method qualification work?", answer: "Every environmental method requires per-analyst Initial Demonstration of Capability (IDOC) before the analyst can produce reportable data. Atlantis NDT ERP tracks each analyst's IDOC studies per method (typically 4 spiked replicates analysed independently, with recovery and precision compared to method-specified acceptance criteria), ongoing demonstration of capability (typically monthly QC sample with z-score tracking), and analyst-specific Method Validation Records (MVRs) per accreditation requirements. An analyst loses qualification on a method if their ongoing QC performance drifts outside acceptance criteria — the system blocks data approval until re-qualification is completed." },
        { question: "Is the system suitable for triple-management-system environmental labs?", answer: "Yes. Many environmental labs hold parallel certifications under ISO/IEC 17025:2017 (technical competence), ISO 14001:2015 (environmental management) and ISO 45001:2018 (occupational health and safety) — sometimes plus ISO 9001:2015 (general QMS). Atlantis NDT ERP supports parallel management systems with shared procedures where applicable and management-system-specific procedures where divergent, multi-system internal-audit cycles, and combined audit-pack export when accreditation bodies conduct integrated audits (BSI Combined Assessment Programme, TÜV SÜD Combined Audit, Lloyd's Register Integrated Audit)." },
        { question: "Can we manage sub-tier supplier document control?", answer: "Yes. Environmental labs depend on critical sub-tier suppliers — reference-standard manufacturers (Restek, AccuStandard, Sigma-Aldrich, ULTRA Scientific, Inorganic Ventures), certified-reference-material producers (NIST SRM, NRC CRM, IRMM ERM), high-purity gas suppliers (Air Liquide, Praxair, BOC, Matheson Tri-Gas), bottled-water blank suppliers, and instrument-vendor service partners (Agilent, Thermo Fisher, PerkinElmer, Waters, Shimadzu). Sub-tier supplier document control includes: supplier-quality-manual on file, supplier-ISO-certification expiry, certificate-of-analysis per reference-standard lot, sub-tier audit history, and supplier-non-conformance trending — all required by ISO/IEC 17025:2017 Section 6.6 (External Provision of Products and Services)." },
      ]}
    />
  );
}
