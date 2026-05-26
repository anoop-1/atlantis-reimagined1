import ErpIndustryAppPage from "@/components/ErpIndustryAppPage";

export default function QualityManagementForWeldingFabricationShops() {
  return (
    <ErpIndustryAppPage
      pageTitle="Quality Management for Welding & Fabrication Shops"
      slug="quality-management-for-welding-fabrication-shops"
      appName="Quality Management"
      industry="welding and fabrication shops"
      breadcrumbLabel="Quality Management for Welding"
      trustBadge="ASME / AWS / ISO 3834 ready"
      metaDescription="Atlantis NDT ERP Quality Management for welding and fabrication shops. AWS D1.1 / D1.5 welder qualification, ASME Section IX PQR/WPS, ISO 3834-2, EN 15085 rail, NDE traveler workflow. regional pricing flat."
      heroBody="Atlantis NDT ERP Quality Management pre-configured for welding and fabrication shops — AWS D1.1 / D1.5 / D17.1 welder qualification tracking, ASME Section IX PQR / WPS management, ISO 3834-2 fabrication QMS, EN 15085 rail welding, EN 1090 structural steel CE marking, NDE traveler workflow and OEM contractor-portal evidence-pack export for L&T Heavy Engineering, Bharat Forge, McDermott, Saipem, Daewoo Shipbuilding and TechnipFMC. Part of the all-apps-included subscription."
      whatItIs={[
        "Quality Management for Welding and Fabrication Shops inside Atlantis NDT ERP is the Odoo 18 Quality module pre-configured for the operating reality of pressure-vessel, structural-steel, pipe-spool, modular-assembly and shipbuilding fabrication firms. The system manages AWS D1.1 (structural welding code — steel), AWS D1.5 (bridge welding code), AWS D17.1 (aerospace welding), AWS D1.6 (stainless steel), ASME Section IX (WPS / PQR welder-qualification records), ISO 9606 (welder qualification — fusion welding), ISO 3834-2 (comprehensive quality requirements for fusion welding), EN 15085 (rail vehicle welding), EN 1090 (CE marking of structural steel), API 1104 (pipeline welding) and Lloyd's Register / ABS / DNV / BV / IRClass classification-society welder-qualification matrices for shipbuilding.",
        "Every welder in your shop is tracked with PQR (Procedure Qualification Record), WPS (Welding Procedure Specification) endorsements, WPQ (Welder Performance Qualification) test records, six-month continuity requirements under ASME Section IX QW-322, customer-specific endorsements (Aramco SAEP-1142, ADNOC, PETRONAS, Reliance Industries written practices), NDE traveler integration (PT / MT / UT / RT records per weld) and lot-by-lot heat-number traceability from raw material through cutting, forming, fit-up, tack-welding, root-pass welding, fill, cap, post-weld heat treatment, NDE, hydrotest and final-dispatch sign-off — all in one Odoo 18 database.",
      ]}
      useCases={[
        { useCase: "Use Case 1", body: "A Vadodara-based pressure-vessel fabrication shop (80 welders, 25 QA technicians) serving Reliance Hazira and L&T Heavy Engineering generates NDE-traveler-integrated AS 9100 / AS 1554 / IS 2825 evidence packs — cleared L&T NDE supplier audit with zero findings and won 4 additional MOC pressure-vessel scopes in the next bid cycle." },
        { useCase: "Use Case 2", body: "A Houston pipe-spool fabricator (45 welders) serving Kiewit, S&B Engineers and Bechtel ASME Section VIII fabrication consolidated 12 customer welder-qualification spreadsheets into one Atlantis tenant — cut welder-currency disputes with QC inspectors from 8 per week to zero." },
        { useCase: "Use Case 3", body: "A Daegu-based shipyard (180 welders) serving Daewoo / Hyundai / Samsung shipbuilding scope manages IACS classification-society welder endorsements (Lloyd's Register, ABS, DNV, BV, ClassNK) plus IMO IGC Code cryogenic 9% Ni weld qualifications — cleared next IACS surveyor audit on FPSO weld-pack documentation with zero non-conformances." },
        { useCase: "Use Case 4", body: "A Pune-based structural fabricator (60 welders) producing EN 1090 Execution Class 3 / 4 components for European wind-turbine tower contracts uses the EN 1090 Factory Production Control (FPC) module to issue CE marking declarations with full PQR/WPS/WPQ traceability — cleared next TÜV Rheinland EN 1090 surveillance audit with zero major findings." },
      ]}
      keyFeatures={[
        "ASME Section IX PQR / WPS / WPQ management with continuity tracking",
        "AWS D1.1 / D1.5 / D17.1 / D1.6 welder qualification matrices",
        "ISO 9606-1 (steel) and ISO 9606-2 (aluminium) qualification records",
        "ISO 3834-2 comprehensive quality requirements compliance",
        "EN 1090 Execution Class 1/2/3/4 Factory Production Control workflow",
        "EN 15085 rail vehicle welding CL1/CL2/CL3/CL4 certification",
        "API 1104 pipeline welding qualification database",
        "NDE traveler workflow (RT, UT, MT, PT, VT, PAUT, TOFD per weld)",
        "Heat-number traceability from material receipt to dispatch",
        "PWHT (Post-Weld Heat Treatment) cycle records with thermocouple charts",
        "Customer-specific written practices (Aramco SAEP-1142, ADNOC, PETRONAS, Reliance)",
        "IACS classification-society welder endorsements (LR, ABS, DNV, BV, ClassNK, KR)",
        "Filler-metal lot tracking with material-test-report (MTR) PDF storage",
        "Non-conformance + repair-rate trending by welder, by joint type, by procedure",
      ]}
      integrations={[
        "L&T Heavy Engineering NDE traveler integration",
        "Bharat Forge supplier portal",
        "Reliance Industries vendor portal",
        "Saudi Aramco SAEP-1142 / APQS portal",
        "ADNOC Tejari supplier qualification",
        "Lloyd's Register / ABS / DNV / Bureau Veritas / ClassNK classification-society survey-pack export",
        "Aveva ERM / Marian / SmartPlant Foundation MTO export",
        "Hexagon Intergraph SmartPlant 3D / TEKLA Structures fabrication-drawing import",
        "Autodesk Vault / Solidworks PDM CAD integration",
        "ProEdge Welding Procedure Manager",
      ]}
      faqs={[
        { question: "Does the system support both ASME Section IX and ISO 9606 welder qualifications concurrently?", answer: "Yes. Many fabrication shops work on both US-spec (ASME Section IX) and EU-spec (ISO 9606 / EN ISO 15614) jobs simultaneously. Atlantis NDT ERP tracks parallel qualifications for each welder with code-specific essential and non-essential variables (welding process, base material P-number, filler material F-number, position, progression, thickness range, diameter range, backing) and warns when a job's WPS requires variables outside the welder's qualified range." },
        { question: "How does the six-month continuity requirement work in the system?", answer: "ASME Section IX QW-322.1 requires welders to weld in their qualified process at least once every six months to maintain qualification. Atlantis NDT ERP tracks every weld each welder performs (by date, process, position, base material P-number) and dashboard-flags welders approaching six months without qualifying-process production work. Six-month gap automatically suspends the qualification. Re-qualification (typically a single coupon weld) is scheduled and tracked through to the new endorsement." },
        { question: "Can the system manage NDE travelers across multiple jobs simultaneously?", answer: "Yes. A typical fabrication shop has hundreds of welds in production at any time, each with its own NDE requirements (100% RT for ASME Section VIII Div 1 Cat. A welds, spot RT 10% per UW-52, 100% UT per ASME Section VIII Div 2, MT/PT on root and final passes per ASME Section V Article 6/7). The traveler workflow tracks each weld's NDE history — what's been done, what's pending, what was accepted, what was repaired and how many times. NDE rejection-rate trending by welder identifies training needs before they cause customer disputes." },
        { question: "Does Atlantis NDT ERP integrate with SmartPlant 3D and TEKLA for fabrication drawings?", answer: "Yes. The Quality module ingests material take-off (MTO) and weld-list exports from Aveva ERM, Hexagon SmartPlant 3D, TEKLA Structures and Autodesk Inventor. Every shop-floor weld is linked back to the parent drawing weld-symbol and the engineering specification — when a customer engineering RFI changes a weld procedure mid-job, the system propagates the change to every affected fabrication packet without manual re-keying." },
        { question: "How does the system handle PWHT (Post-Weld Heat Treatment) records?", answer: "PWHT cycle records are first-class entities — every PWHT batch has the parts heated, the procedure followed (typically ASME Section VIII UCS-56 or AS 3788), the heating-rate ramp, the soak temperature and time at temperature, the cooling-rate ramp, thermocouple-chart attachments (PDF or CSV from thermocouple logger), the PWHT vendor (in-shop or sub-contract), and customer-specific approval requirements. PWHT-completion gates prevent dispatch of fabricated items without compliant PWHT evidence." },
        { question: "Can we track filler-metal heat numbers and material test reports?", answer: "Yes. Filler-metal lot tracking is integrated with procurement — every batch of filler metal (electrodes, wire, flux) is received with a Material Test Report (MTR) PDF, lot number, AWS / EN / ASME spec, manufacturer, supplier, and qualified usage range. The system tracks filler-metal lot consumption per weld so that — if a future customer audit, regulator query or warranty issue requires it — you can re-construct the full traceability chain from the dispatched fabricated item back to the specific filler-metal lot used on each weld." },
        { question: "Is the system suitable for shipbuilding welding documentation?", answer: "Yes. Shipbuilding welding involves IACS classification-society oversight (Lloyd's Register Rules for Ships, ABS Rules for Building and Classing Steel Vessels, DNV-OS-C401, BV Rules for the Classification of Steel Ships, ClassNK Rules), IMO IGC Code for LNG / LPG cryogenic 9% Ni welds, AWS D3.6M underwater welding for hull repairs, and ship-specific weld-survey scope. Atlantis NDT ERP manages IACS classification-society survey-pack export, IGC Code 9% Ni weld pre-heat / inter-pass / post-weld procedure compliance, and ship hull-block weld-tracker integration with Aveva Marine / Hexagon Marine / Tribon shipbuilding CAD systems." },
        { question: "Does the system support EN 1090 Execution Class 3 / 4 CE marking?", answer: "Yes. EN 1090-2 Execution Class 3 / 4 structural steel (the highest CE marking compliance tiers) requires Factory Production Control (FPC), welding coordinator (IWE / IWT / IWS) accountability, welding-procedure qualification per EN ISO 15614, and welder qualification per EN ISO 9606. Atlantis NDT ERP supports the full EN 1090-2 FPC workflow — Welding Coordinator dashboards, audit-trail of every welder qualification action, EN 1090 declaration of conformity generation, and TÜV Rheinland / TÜV SÜD / Lloyd's Register / Bureau Veritas Notified Body audit-pack export." },
      ]}
    />
  );
}
