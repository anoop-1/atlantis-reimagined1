import ErpIndustryAppPage from "@/components/ErpIndustryAppPage";

export default function CrmForCalibrationLaboratories() {
  return (
    <ErpIndustryAppPage
      pageTitle="CRM for Calibration Laboratories"
      slug="crm-for-calibration-laboratories"
      appName="CRM (Customer Relationship Management)"
      industry="calibration laboratories"
      breadcrumbLabel="CRM for Calibration Labs"
      trustBadge="ISO/IEC 17025 / ILAC MRA ready"
      metaDescription="Atlantis NDT ERP CRM for calibration laboratories — ISO/IEC 17025:2017 scope-of-accreditation routing, ILAC MRA cross-border traceability, NIST/NPL/PTB/NIM/NMIJ artifact lineage. Manage cal-due, on-site visits and asset-fleet relationships. Flat regional pricing."
      heroBody="Atlantis NDT ERP CRM tuned for ISO/IEC 17025 calibration laboratories — scope-of-accreditation-driven opportunity routing, ILAC MRA mutual-recognition awareness, NIST/NPL/PTB/NIM/NMIJ primary-standard traceability tracking, and asset-fleet relationship management for industrial clients with hundreds or thousands of calibrated instruments. Part of the all-apps-included subscription."
      whatItIs={[
        "CRM for Calibration Laboratories inside Atlantis NDT ERP is the Odoo 18 CRM module pre-configured for the operating reality of accredited calibration laboratories — ISO/IEC 17025:2017 (the international standard for calibration / testing competence), the ILAC MRA (International Laboratory Accreditation Cooperation Mutual Recognition Arrangement) covering 100+ accreditation bodies, and primary-standard traceability through NIST (USA), NPL (UK), PTB (Germany), NIM (China), NMIJ (Japan), KRISS (South Korea), BIPM (international SI), VSL (Netherlands), NRC (Canada) or other national metrology institutes.",
        "The CRM treats every client asset as a long-lived relationship — when a refinery has 800 pressure gauges, 200 temperature transmitters, 150 flow meters and 50 differential-pressure transmitters, the CRM tracks each instrument's serial number, calibration interval (3, 6, 12 or 24 months), last calibration date, next-due date, accreditation scope coverage (which parameter / range / uncertainty the lab is accredited for), customer's MSA (Measurement System Analysis) and Gauge R&R targets, and recurring-revenue forecast. This is fundamentally different from generic CRM — calibration is recurring, asset-driven and traceability-bound.",
      ]}
      useCases={[
        { useCase: "Use Case 1", body: "An ISO/IEC 17025-accredited cal lab in Houston (12 metrologists) tracks 14,000 client instruments across 38 refining and petrochem accounts — auto-generated cal-due reports drive 92% on-time recall vs the previous 67% baseline." },
        { useCase: "Use Case 2", body: "A Mumbai NABL-accredited cal lab (8 metrologists) manages 23 IBR pressure-gauge clients with statutory 6-month re-calibration intervals — eliminated zero-revenue dropout from 11% to under 2%." },
        { useCase: "Use Case 3", body: "A Singapore SAC-SINGLAS cal lab (15 metrologists) serving Jurong Island clients tracks ILAC MRA scope coverage per instrument — winning two ExxonMobil contracts that previously went to UKAS-only competitors." },
        { useCase: "Use Case 4", body: "A Dubai EIAC-accredited cal lab (10 metrologists) running an on-site mobile-lab van for ADNOC tracks every site visit, instrument turnaround, and customer-side cal certificate via the CRM — cutting customer cal-cert dispute resolution from 4 days to 4 hours." },
      ]}
      keyFeatures={[
        "ISO/IEC 17025:2017 scope-of-accreditation per instrument-parameter-range-uncertainty quad",
        "ILAC MRA member accreditation-body recognition (UKAS, ANAB, A2LA, DAkkS, COFRAC, EA-MRA)",
        "Primary-standard traceability lineage (NIST, NPL, PTB, NIM, NMIJ, KRISS, BIPM, VSL, NRC)",
        "Asset-fleet master per customer (serial numbers, manufacturers, ranges, intervals)",
        "Calibration-interval driver per instrument (3/6/12/24 month or risk-based)",
        "Auto-generated 90/60/30-day cal-due alerts to customer + internal scheduler",
        "On-site mobile-lab van routing and site-visit scheduling",
        "Recurring-revenue forecast per customer (12-month rolling cal pipeline)",
        "MSA / Gauge R&R study scheduling and ISO 10012 measurement-management records",
        "Decision rule per ISO/IEC 17025:2017 Section 7.8.6 (acceptance, conditional acceptance)",
        "Uncertainty budget per measurement (Type A / Type B / combined / expanded U=k*uc)",
        "ISO 17034 reference-material producer / CRM (Certified Reference Material) traceability",
        "Multi-currency cert pricing (USD, EUR, GBP, AED, SAR, INR, SGD)",
      ]}
      integrations={[
        "Beamex CMX / LOGiCAL calibration software import/export",
        "Fluke Calibration MET/TEAM data exchange",
        "Crystal Engineering 30-Series / nVision data file ingestion",
        "Druck DPI 620 / 620G genii calibration files",
        "Additel CMX calibration data exchange",
        "Indysoft GAGEpack instrument-management import",
        "ProCalV5 / Prime Technologies calibration records",
        "Honeywell Field Device Manager calibration logs",
        "Yokogawa CENTUM VP calibration scheduler",
        "ANAB / UKAS / EA-MRA scope-of-accreditation directories",
      ]}
      faqs={[
        { question: "Does the CRM enforce scope-of-accreditation on opportunity creation?", answer: "Yes. Every opportunity in Atlantis NDT ERP CRM for cal labs is constrained by the lab's ISO/IEC 17025 scope of accreditation. When you create an opportunity to calibrate a 0–100 MPa pressure gauge with target uncertainty 0.02%, the system checks that the lab is accredited for that parameter, range and uncertainty — and warns if you are about to quote work outside scope. This prevents the costly error of quoting outside accredited scope and either losing the work post-quote or issuing an unaccredited certificate by accident." },
        { question: "Can the CRM track ILAC MRA cross-border recognition?", answer: "Yes. ILAC MRA recognition is loaded as a customer-side filter — when a customer is a multinational requiring ILAC MRA-recognized accreditation (e.g. an aerospace OEM, an automotive OEM, a pharma manufacturer), the CRM enforces that only ILAC MRA-recognized accreditation bodies (UKAS, ANAB, EA-MRA members, APAC members) are acceptable. This is a hard contractual requirement for many aerospace, automotive and pharmaceutical customers." },
        { question: "How does the CRM manage primary-standard traceability lineage?", answer: "Every accredited calibration certificate must trace measurement back to the SI through primary standards. The CRM stores the primary metrology institute (NIST, NPL, PTB, NIM, NMIJ, KRISS), the artifact / standard ID, the calibration date and uncertainty of the working standard, and the chain of intermediate standards. When a primary standard is re-calibrated, the CRM flags every downstream certificate issued from that standard for review — critical when a NIST artifact is found out-of-tolerance retroactively." },
        { question: "Does the platform handle on-site mobile-lab van workflows?", answer: "Yes. Mobile-cal-van work — common for large client fleets where instruments are too risky or expensive to ship — is tracked as a special opportunity type. The CRM books the van, the metrologist, the on-site travel time, the customer's site-access requirements (PPE, safety induction, gate-pass currency), and the instruments to be calibrated. Per-trip P&L is tracked so you can see van-utilization-vs-margin in real time." },
        { question: "Can the CRM forecast 12-month recurring-revenue per customer?", answer: "Yes. Because every instrument has a known interval (3/6/12/24 months) and last-cal date, the CRM produces a deterministic 12-month forward revenue forecast per customer — typically far more accurate than generic CRM forecasting. This is invaluable for cal-lab finance directors who need to commit to capacity expansion or lease commitments." },
        { question: "How does the CRM handle Decision Rule conversations?", answer: "ISO/IEC 17025:2017 Section 7.8.6 requires the lab to state the Decision Rule used when reporting conformity (e.g. simple acceptance, guard band w/k=2, statistical conformity). The CRM stores the Decision Rule per customer-per-instrument-class — so when a customer asks 'is this gauge in tolerance', the cal lab can produce a defensible statement of conformity that complies with both ISO/IEC 17025 and the customer's specific Decision Rule preference." },
        { question: "Does the CRM integrate with calibration-execution software?", answer: "Yes. Atlantis NDT ERP CRM imports calibration data from Beamex CMX/LOGiCAL, Fluke MET/TEAM, Crystal Engineering nVision, Druck DPI 620, Additel CMX, ProCalV5, Indysoft GAGEpack and other execution-side calibration software — so when the metrologist finishes a calibration on the bench or in the field, the certificate flows back into the CRM and triggers the next-due-date update automatically." },
        { question: "Can the CRM track inter-laboratory comparison (PT/ILC) opportunities?", answer: "Yes. Proficiency Testing / Inter-Laboratory Comparison participation (mandatory under ISO/IEC 17025:2017 Section 7.7.2) is tracked as a structured calendar of internal-cost activity — but also as a business-development opportunity, because successful PT/ILC participation is often a contractual prerequisite for high-value clients (pharma, aerospace, semiconductor). The CRM flags clients who require recent PT/ILC evidence and matches the lab's participation history to those requirements." },
      ]}
    />
  );
}
