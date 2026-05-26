import ErpIndustryAppPage from "@/components/ErpIndustryAppPage";

export default function CrmForEnvironmentalTestingLabs() {
  return (
    <ErpIndustryAppPage
      pageTitle="CRM for Environmental Testing Laboratories"
      slug="crm-for-environmental-testing-labs"
      appName="CRM (Customer Relationship Management)"
      industry="environmental testing labs"
      breadcrumbLabel="CRM for Env Labs"
      trustBadge="ISO/IEC 17025 / NELAP / DoD ELAP ready"
      metaDescription="Atlantis NDT ERP CRM for environmental testing labs — ISO/IEC 17025:2017, NELAP / TNI, DoD ELAP, EPA SW-846, ASTM methods, multi-matrix sample-stream pipelines, chain-of-custody-aware opportunity tracking. Flat regional pricing."
      heroBody="Atlantis NDT ERP CRM for environmental testing laboratories — ISO/IEC 17025:2017 + NELAP / TNI + DoD ELAP + state-level certifications, EPA method-driven opportunity routing (SW-846, EPA 600, EPA 500, EPA 200, EPA Drinking Water Methods), ASTM methods, and chain-of-custody-aware multi-matrix sample pipelines (drinking water, wastewater, soil, sediment, air, biota, vapor intrusion). Part of the all-apps-included subscription."
      whatItIs={[
        "CRM for Environmental Testing Labs inside Atlantis NDT ERP is the Odoo 18 CRM module pre-configured for the regulatory and commercial reality of environmental testing — ISO/IEC 17025:2017 lab competence, NELAP (National Environmental Laboratory Accreditation Program) administered by TNI (The NELAC Institute), DoD ELAP (Environmental Laboratory Accreditation Program) for federal Department of Defense remediation work, USDA NPDES discharge monitoring, state-specific certifications (California ELAP, New York ELAP, New Jersey, Texas TNI, Florida DOH-ELAP, Pennsylvania, North Carolina, Washington, Oregon), and EPA-method-driven analytical scope.",
        "Sample streams flow as structured opportunities: drinking-water compliance (Safe Drinking Water Act, EPA 500 series methods, EPA 524.2, EPA 525.2, EPA 537.1 for PFAS), wastewater NPDES (Clean Water Act, EPA 600 series methods, 40 CFR 136), hazardous-waste characterization (RCRA, EPA SW-846 8260, 8270, 6010, 7470/7471, 9056), soil and sediment investigation (CERCLA/Superfund, brownfields), air emissions (Clean Air Act, EPA TO-15 / TO-17 for VOCs, AB 2588 for California), vapor intrusion (EPA OSWER Directive 9200.2-154), and emerging contaminants (PFAS via EPA 533 / 537.1 / 8327, 1,4-dioxane, microplastics).",
      ]}
      useCases={[
        { useCase: "Use Case 1", body: "A California ELAP-accredited lab (28 chemists) tracks SDWA drinking-water compliance contracts across 47 water districts — auto-routing PFAS sub-stream to the EPA 533-certified instrument cut TAT from 18 days to 9." },
        { useCase: "Use Case 2", body: "A Texas TNI-NELAP lab (45 chemists) serving Gulf Coast refineries and chemical plants tracks NPDES discharge-monitoring opportunities — won 9 of 11 RFPs in Q2 after CRM-driven response-time improvement (instruction-to-quote fell from 36 hours to 4)." },
        { useCase: "Use Case 3", body: "A New Jersey ELAP lab (22 chemists) handling brownfields and vapor intrusion across NJDEP-listed sites grew chain-of-custody-bound opportunities from 340/year to 580/year with the structured opportunity-routing pipeline." },
        { useCase: "Use Case 4", body: "A DoD ELAP lab (18 chemists) servicing US Army Corps of Engineers remediation at former military sites tracks DoD QSM (Quality Systems Manual) v5.4 / v5.3 compliant opportunities — winning 4 of 5 USACE quasi-set-aside opportunities in 12 months." },
      ]}
      keyFeatures={[
        "ISO/IEC 17025:2017 scope-of-accreditation per method-matrix-analyte combination",
        "NELAP / TNI multi-state accreditation tracking",
        "DoD ELAP QSM v5.4 / v5.3 scope-driven opportunity routing",
        "EPA SW-846, EPA 500-series, EPA 600-series, EPA 200-series method tagging",
        "ASTM E-series and D-series environmental method tagging",
        "Matrix tagging (drinking water, wastewater, soil, sediment, air, biota, vapor)",
        "Chain-of-custody (CoC) lifecycle tracking from sample receipt through final report",
        "PFAS opportunity tracking (EPA 533, 537.1, 8327, draft Method 1633)",
        "Emerging-contaminant pipeline (1,4-dioxane, microplastics, NDMA, hexavalent chromium)",
        "State-certification matrix per state per matrix per method per analyte",
        "Hold-time-driven scheduling (24h coliform, 48h BOD, 7d VOC water, 14d SVOC soil)",
        "Sub-contract laboratory referral tracking (when scope exceeds in-house capability)",
        "Mobile app for sample-courier and field-sample-team coordination",
      ]}
      integrations={[
        "Element LIMS / Thermo SampleManager / LabWare LIMS data exchange",
        "Promium Element / LabVantage / STARLIMS integration",
        "EPA EQuIS Enterprise (electronic data deliverable EDD generation)",
        "Locus Technologies EIM environmental data management",
        "EarthSoft EQuIS data export",
        "ESS LabAccount / Caliper / Klarisys",
        "State environmental electronic deliverable formats (CA EDF, TX TCEQ EDD, FL FDEP)",
        "USACE Environmental Data Management System (EDMS)",
        "NJDEP HazSite electronic submission portal",
        "DoD Data Validation Tool (ADaPT) electronic deliverable format",
      ]}
      faqs={[
        { question: "Does the CRM enforce method-matrix-state certification?", answer: "Yes. Every opportunity in the CRM is checked against the lab's accreditation matrix — method (e.g. EPA 8260D), matrix (e.g. drinking water), state (e.g. California ELAP), analyte (e.g. benzene). The CRM warns if an opportunity requires a method-matrix-state-analyte combination outside scope, and helpfully suggests the lab's reciprocal-recognition states or sub-contract referral partners." },
        { question: "How does the CRM handle PFAS opportunities?", answer: "PFAS analysis is the fastest-growing environmental segment. The CRM tracks PFAS opportunities by method (EPA 533 for drinking water, EPA 537.1 for drinking water, EPA 8327 for non-potable, draft EPA 1633 for biosolids and tissues), by analyte list (UCMR 5 list of 29 PFAS, EPA 537.1 list of 18 PFAS, state-specific lists California / New York / New Jersey), and by regulatory driver (USEPA MCL final rule 2024 for 6 PFAS in drinking water, state-specific groundwater cleanup levels, DoD CERCLA action levels)." },
        { question: "Can the CRM track hold-time-driven scheduling pressure?", answer: "Yes. Hold times — 24 hours for coliform, 48 hours for BOD5, 7 days for VOC water samples, 14 days for SVOC soil samples, 28 days for metals — are tracked per-opportunity-per-method. The CRM warns when an opportunity's sample-receipt date plus hold time exceeds the available bench capacity, allowing the lab to negotiate sample-receipt timing with the client before commitment." },
        { question: "Does the CRM support chain-of-custody (CoC) lifecycle tracking?", answer: "Yes. Every sample opportunity carries a chain-of-custody record from collection through final report — collector identity, collection method, container, preservative, temperature at receipt, sample condition, custody transfers, analyst initials, and final-report sign-off. Defensible CoC is the backbone of every regulatory environmental result." },
        { question: "How does the CRM handle state-level reciprocity?", answer: "State-level environmental certification reciprocity is messy — California ELAP does not automatically recognize Texas TNI; New York ELAP requires a separate application; some Mid-West states honor primary-NELAP via TNI-PT reciprocity. The CRM stores the lab's per-state-per-method-per-matrix certification record and applies the correct reciprocity logic per opportunity, eliminating the recurring mistake of accepting work the lab is not authorized to perform in the customer's jurisdiction." },
        { question: "Can the CRM forecast revenue by regulatory driver?", answer: "Yes. The CRM tags every opportunity with its regulatory driver — Safe Drinking Water Act (SDWA), Clean Water Act NPDES (CWA), Resource Conservation and Recovery Act (RCRA), Comprehensive Environmental Response Compensation and Liability Act (CERCLA), Clean Air Act (CAA), Toxic Substances Control Act (TSCA), Emergency Planning and Community Right-to-Know Act (EPCRA), Safe Drinking Water Act UCMR program — so finance can forecast revenue by regulatory program and identify exposure to regulatory changes." },
        { question: "Does the platform handle emergency-response opportunities?", answer: "Yes. Emergency-response work — train derailments, pipeline ruptures, industrial fires, hurricanes — generates compressed-TAT high-margin opportunities. The CRM has an emergency-response opportunity type with 24-hour TAT options, premium pricing, and direct integration with USACE Emergency Response Branch, US Coast Guard NSF and state-level emergency-response coordinators." },
        { question: "Can the CRM track DoD ELAP / USACE opportunities?", answer: "Yes. DoD ELAP-accredited labs face a unique commercial reality — the DoD QSM v5.4 (current as of 2026) requires specific matrix-spike recovery limits, project quality objectives (PQOs), reporting limits, and electronic deliverable formats (ADaPT EDD). The CRM stores DoD ELAP scope per analyte / matrix and routes DoD opportunities only to qualified bench chemists with current DoD ELAP-recognized training records." },
      ]}
    />
  );
}
