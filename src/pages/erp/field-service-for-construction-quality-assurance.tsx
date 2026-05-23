import ErpIndustryAppPage from "@/components/ErpIndustryAppPage";

export default function FieldServiceForConstructionQualityAssurance() {
  return (
    <ErpIndustryAppPage
      pageTitle="Field Service Management for Construction Quality Assurance"
      slug="field-service-for-construction-quality-assurance"
      appName="Field Service Management"
      industry="construction quality assurance"
      breadcrumbLabel="Field Service for Construction QA"
      trustBadge="ASTM / ACI / AWS / OSHA aligned"
      metaDescription="Atlantis NDT ERP Field Service Management for construction quality assurance. Concrete cylinder testing dispatch, soil-density and proctor reports, structural welding inspection, mobile data capture, ASTM/ACI compliance. $18,000/yr flat."
      heroBody="Atlantis NDT ERP Field Service Management pre-configured for construction quality assurance firms — concrete cylinder testing dispatch with ASTM C39 / C31 compliance, soil-density and proctor reporting per ASTM D6938 / D1557, structural welding inspection per AWS D1.1, mobile data capture for site technicians, AASHTO highway-construction QA, and ACI 318 / 562 / 369 concrete inspection records. Part of the all-apps-included $18,000 / year subscription."
      whatItIs={[
        "Field Service Management for Construction Quality Assurance inside Atlantis NDT ERP is the Odoo 18 Field Service module pre-configured for the operating reality of construction QA / QC firms — the contractors performing concrete-cylinder breaks, soil-density and proctor-curve testing, asphalt-mix testing, structural-welding inspection, rebar inspection, post-tensioning inspection, masonry inspection, fireproofing inspection and pile-driving QA for general contractors, EPC firms, and government infrastructure projects worldwide. The system understands that a construction QA technician spends most of their day in the field with intermittent mobile connectivity — captured data must be reliable offline, dispatch routing must minimize windshield time, and the chain-of-custody from sample collection through lab testing to customer report must be auditable to ASTM, ACI, AWS, AASHTO and ICC standards.",
        "Every field-service work order is structured around the construction-project hierarchy: prime contractor (Bechtel, Fluor, Skanska, Turner, Kiewit, Mortenson, Hensel Phelps, AECOM, McCarthy Building Companies, DPR Construction, Whiting-Turner, Suffolk, Walsh Group, PCL, Hunt Construction), construction project (refinery expansion, LNG terminal, airport runway, highway interchange, hospital, university campus, data centre, semiconductor fab), construction discipline (structural concrete, structural steel, earthwork, asphalt paving, masonry, MEP commissioning, fireproofing), inspection scope (lot, location, line, station), specification standard (ACI 318 building code, AWS D1.1 structural welding, ASTM D6938 soil density, AASHTO M148 paving) and project-specific QA / QC plan revision. The mobile field app captures every sample with photo evidence, GPS coordinates, technician ID and timestamp.",
      ]}
      useCases={[
        { useCase: "Use Case 1", body: "A Houston-area construction QA firm (38 field technicians, 18 lab technicians) serves DPR Construction, Skanska USA and Hensel Phelps on data-centre and semiconductor-fab construction — handles 480+ concrete cylinder samples/week with full ASTM C39 break-strength records, eliminated 24 mis-routed-sample incidents per quarter, and recovered approximately $620K/year of disputed-rework revenue." },
        { useCase: "Use Case 2", body: "A Dubai-based construction QA firm (45 technicians) serving ADNOC Ruwais expansion, Etihad Rail, Masdar City and Dubai South Aviation City construction generates EIAC / ENAS ISO 17025 audit-pack evidence for concrete, soil, asphalt and welding QA — cleared next EIAC surveillance audit with zero findings." },
        { useCase: "Use Case 3", body: "A Bangalore-based construction QA firm (32 technicians) serving Bangalore Metro Phase II, KIA T2 expansion, ITPL phase 4 and Bengaluru Suburban Rail Project uses bilingual English/Kannada field-app data capture and IS 456 / IS 13311 / IS 1893 compliance records — cleared next BBMP municipal-engineering audit with zero non-conformances." },
        { useCase: "Use Case 4", body: "A New York-based construction QA firm (28 technicians) serving Port Authority NYNJ, NYC DDC, MTA Capital Construction and major Manhattan high-rise projects manages NYC DOB and SEAA structural-steel certification, AWS CWI welder-qualification verification, AISC 360 steel-construction compliance and ICC ES Special Inspector qualifications — eliminated 11 NYC DOB inspection-rejection incidents per quarter." },
      ]}
      keyFeatures={[
        "Mobile field-app data capture with offline support and GPS tagging",
        "Concrete cylinder break-strength records per ASTM C39 / ACI 318 Chapter 26",
        "Soil-density and proctor-curve reporting per ASTM D6938 / D1557",
        "Asphalt mix-design verification per AASHTO M148 / M323",
        "Structural welding inspection per AWS D1.1 / AISC 360",
        "Rebar inspection per ACI 117 / 318 / 530",
        "Post-tensioning inspection per ACI ITG-7 / PTI M50",
        "Pile-driving QA per ASTM D4945 / AASHTO PDA / Crosshole Sonic Logging",
        "Fireproofing inspection per AISC 360 / UL Cementitious / Intumescent specs",
        "Real-time dispatch with route optimization per technician territory",
        "Sample chain-of-custody from field collection through lab to report dispatch",
        "ICC ES Special Inspector qualification tracking",
        "AWS CWI / CWS certification expiry alerts",
        "Customer-specific QA / QC plan revision management",
      ]}
      integrations={[
        "Procore construction-management platform",
        "Autodesk Construction Cloud (ACC) / BIM 360 integration",
        "Bentley ProjectWise document management",
        "Aconex (Oracle) document management",
        "PlanGrid (Autodesk) field-team integration",
        "QESTLab / Argos lab information management",
        "Inspectis FieldPro mobile-capture migration",
        "Procore-Bluebeam-Revu construction-document workflow",
        "AGTEK earthwork-tracking integration",
        "Trimble Connect / Tekla Structures field-engineer access",
      ]}
      faqs={[
        { question: "How does the mobile field app handle offline data capture?", answer: "Construction sites routinely have poor mobile connectivity — Atlantis NDT ERP's field app stores every form, photo and measurement locally on the technician's iOS or Android device, then syncs to the cloud when connectivity returns. Sync is conflict-free (server timestamps win on identical records), with optimistic offline mode supporting up to 14 days of unsynchronized work before any data-loss risk. Photo and measurement records are stored with embedded GPS coordinates and timestamp metadata that cannot be edited post-capture — critical for audit-trail integrity." },
        { question: "Can the system manage concrete cylinder sample chain-of-custody?", answer: "Yes. Concrete cylinder sample management is a high-volume, audit-critical workflow. Sample collection in the field is logged with: pour location (column line, slab area, drilled-shaft elevation), pour timestamp, mix design ID, batch ticket from ready-mix supplier, slump test result, air content (where applicable), cylinder ID barcode (typically 4-6 cylinders per sample set per ASTM C172 / ASTM C31 sampling). The sample is transported to the lab with chain-of-custody scan at hand-off, lab-receipt scan on arrival, curing-room storage location, and 7-day / 28-day break-strength testing per ASTM C39. Any deviation from specified compressive strength (typically 3,000 / 4,000 / 5,000 / 6,000 / 8,000 psi designs) triggers customer notification per ACI 318 Section 26.12." },
        { question: "Does the system support AWS D1.1 structural welding inspection?", answer: "Yes. AWS D1.1 Structural Welding Code — Steel — is the dominant structural welding inspection standard in the US. The field app supports CWI (Certified Welding Inspector) workflow for: visual inspection per AWS D1.1 Section 6 acceptance criteria, UT inspection per AWS D1.1 Section 6 Part F (Annex K), MT inspection per Section 6 Part E, PT inspection per Section 6 Part D, welder qualification verification (matching welder ID to current WPS endorsement), pre-heat and inter-pass temperature record, post-weld heat-treatment record where applicable. AISC 360-22 and AISC 341-22 (seismic-design) cross-references are built into the inspection-criteria library." },
        { question: "How does the system handle ICC ES Special Inspector qualification tracking?", answer: "Yes. Special Inspector qualifications under IBC Chapter 17 are tracked per discipline (structural steel, reinforced concrete, masonry, soils, post-tensioned concrete, sprayed fireproofing, structural welding) and per IAS AC172 / IAS AC291 inspection-agency accreditation status. Many jurisdictions (NYC DOB, LA DBS, Chicago DOB, San Francisco DBI, Florida) have additional jurisdiction-specific licensing — NYC DOB Special Inspector (SI) Class 1, LA DBS Deputy Inspector, Chicago Self-Certified Plan Examiner — all tracked separately with expiry alerts and per-jurisdiction continuing-education requirements." },
        { question: "Can the field app handle pile-driving QA?", answer: "Yes. Pile-driving QA workflows include: dynamic pile testing per ASTM D4945 (PDA — Pile Driving Analyzer), CAPWAP analysis for static-capacity estimation, crosshole sonic logging (CSL) per ASTM D6760 for drilled-shaft integrity, low-strain integrity testing (PIT — Pile Integrity Test), and static load testing per ASTM D1143. The field app supports onsite PDA data capture, blow-count logging, hammer-energy verification, and refusal-condition documentation. Geotechnical engineer of record (GEOR) sign-off workflows are built into the deliverables-management module." },
        { question: "Does the system support AASHTO highway-construction QA?", answer: "Yes. AASHTO highway-construction QA includes: aggregate gradation per AASHTO T27, asphalt-mix testing per AASHTO T209 / T166 (Marshall / Superpave), in-place density per AASHTO T343, concrete-pavement testing per AASHTO T22 / T97 / T119 / T148 / T196 / T231. State DOT-specific requirements (TxDOT Specs, FDOT Specs, CalTrans CalTest, ODOT, PennDOT, NYSDOT) are configurable per project. AASHTO M148 mix-design conformance, pay-factor calculation per state-DOT method (typically PWL — Percent Within Limits — or PRS), and AASHTO accreditation evidence are all supported." },
        { question: "How does dispatch routing work for field technicians?", answer: "Field-service dispatch optimization considers technician home-base, qualifications, customer SLA, sample collection windows (concrete typically requires sampling within 15 minutes of pour discharge per ASTM C172), drive-time matrix per local traffic patterns, and per-job minimum-hour billing rules. The dispatch board shows pending work orders, assigned-but-not-dispatched work orders, in-progress work orders and same-day completions on a map view with route optimization. Mobile-app-based real-time technician location tracking (with privacy-mode toggle for off-hours) enables dispatcher reassignment when emergencies disrupt the planned schedule." },
        { question: "Is the system suitable for high-rise / mega-project construction QA?", answer: "Yes. Mega-project construction (data centres, semiconductor fabs, LNG terminals, refinery expansions, airport terminals, stadiums, supertall towers) involves thousands of inspection records per month across dozens of trades, multiple shifts, weekend pour schedules, and complex stakeholder reporting. Atlantis NDT ERP handles project-level configuration including: prime-contractor portal evidence-pack export (Procore / Autodesk Construction Cloud / Aconex / Bentley ProjectWise), trade-specific dashboards, real-time pour-monitoring boards, and per-project archived-record retention configurable to 5-10 years for litigation defensibility." },
      ]}
    />
  );
}
