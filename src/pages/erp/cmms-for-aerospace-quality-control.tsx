import ErpIndustryAppPage from "@/components/ErpIndustryAppPage";

export default function CmmsForAerospaceQualityControl() {
  return (
    <ErpIndustryAppPage
      pageTitle="CMMS for Aerospace Quality Control Companies"
      slug="cmms-for-aerospace-quality-control"
      appName="CMMS (Computerized Maintenance Management System)"
      industry="aerospace quality control"
      breadcrumbLabel="CMMS for Aerospace Quality Control"
      trustBadge="NAS 410 / NADCAP / FAA Part 145"
      metaDescription="Atlantis NDT ERP CMMS for aerospace quality control. NAS 410 Rev 5 currency, NADCAP MAUP audit-pack export, FAA Part 145 repair-station records, EASA Part-145 compliance. $18,000/yr flat."
      heroBody="Atlantis NDT ERP CMMS pre-configured for aerospace quality control — NAS 410 Rev 5 personnel currency tracking, NADCAP MAUP audit-pack export, FAA Part 145 repair-station documentation, EASA Part-145 compliance, AS9100 / EN 9100 quality records and equipment-calibration management for the inspection equipment that keeps your aerospace customer accreditations alive. Part of the all-apps-included $18,000 / year subscription."
      whatItIs={[
        "CMMS for Aerospace Quality Control inside Atlantis NDT ERP is the Odoo 18 Maintenance + Equipment module pre-configured for the operating reality of aerospace NDT inspection firms — NAS 410 Rev 5 (the aerospace NDT personnel qualification standard that supersedes NAS 410 Rev 4 and ATA-105), NADCAP (National Aerospace Defense Contractors Accreditation Program) MAUP audit cycles, FAA Part 145 repair-station requirements, EASA Part-145 (the European equivalent), Transport Canada CAR 573 and the customer-specific written practices of every major aerospace OEM (Boeing, Airbus, Embraer, Bombardier, Lockheed Martin, Northrop Grumman, BAE Systems, GE Aviation, Rolls-Royce, Pratt & Whitney, Safran, Honeywell Aerospace, Collins Aerospace).",
        "The CMMS tracks every piece of NDT and inspection equipment in your aerospace QA arsenal — UT instruments (Olympus EPOCH 650, EPOCH 6LT, Sonatest Veo+, GE USM Go+), phased-array systems (OmniScan X3, Verasonics Vantage, Eddyfi M2M Gekko), eddy current instruments (Olympus Nortec 600, Eddyfi Reddy), ETU (Eddy Current Testing Units), magnetic particle benches, penetrant lines, X-ray and gamma sources — with calibration intervals, traceability to national standards (NIST, NPL, BAM, NIM), gauge R&R study schedules, MSA (Measurement System Analysis) intervals, NCSL-traceable certificates, and audit-trail evidence to MIL-STD-45662A / ISO 10012 / ANSI/NCSL Z540 standards demanded by aerospace OEM auditors.",
      ]}
      useCases={[
        { useCase: "Use Case 1", body: "A Bangalore aerospace inspection firm (28 technicians) tracks NAS 410 Rev 5 currency for GE Aviation India, Pratt & Whitney India and HAL Aircraft Division work — cleared next NADCAP MAUP audit with zero findings (baseline: 3 findings per cycle)." },
        { useCase: "Use Case 2", body: "A Wichita-based airframe NDT specialist (35 technicians) consolidates Boeing 737/787 and Cessna Citation inspection records into one CMMS — equipment-calibration deviation alerts dropped from 12 per quarter to zero across two consecutive cycles." },
        { useCase: "Use Case 3", body: "A Toulouse aerospace NDT contractor (22 technicians) serving Airbus, Safran and Thales generates EASA Part-145 audit packs in single-click ZIP exports — eliminating a 5-day Excel exercise per audit cycle." },
        { useCase: "Use Case 4", body: "A Connecticut-based engine MRO inspection firm (40 technicians) serving Pratt & Whitney CFM-LEAP and Rolls-Royce Trent engine repairs uses calibration-due dashboards across 180 inspection assets — eliminated 7 missed-calibration incidents in 12 months." },
      ]}
      keyFeatures={[
        "NAS 410 Rev 5 personnel currency tracking (Level I, II, III in UT, RT, MT, PT, ET, VT)",
        "NADCAP MAUP (NDT, Heat Treat, Welding, Coatings) audit-pack export",
        "FAA Part 145 repair-station equipment register and inspection records",
        "EASA Part-145 (EU equivalent) compliance dashboard",
        "Transport Canada CAR 573 documentation",
        "AS9100 Rev D / EN 9100 quality management system records",
        "AS9102 First Article Inspection (FAI) reporting workflow",
        "Inspection equipment calibration intervals with NIST/NPL/BAM traceability",
        "Gauge R&R study scheduling and MSA records",
        "X-ray / gamma source license tracking (NRC, FANR, AERB, ASN, ENSI)",
        "OEM-specific written practice mapping (Boeing BSS7039, Airbus AITM, GE/CFM, P&W)",
        "Mobile field app for shop-floor inspection capture (offline-capable)",
        "Customer rejection-rate trending by part number, by inspection method",
        "Cradle-to-grave traceability per inspected part (lot, S/N, customer, dispatch)",
      ]}
      integrations={[
        "Boeing GoldCare / FlightView / D-PIM supplier portals",
        "Airbus Sphere AIRMAN / EREVOA / SQB supplier integration",
        "Embraer DiscoverFleet supplier portal",
        "GE Aviation iCheck / GoldenEye supplier qualification",
        "Pratt & Whitney Engine Network supplier portal",
        "Rolls-Royce SAP Ariba supplier integration",
        "Safran SAP and Microsoft Dynamics integration",
        "PRI eAuditNet / Cumulus (NADCAP audit submission)",
        "FAA Safety Management System (SMS) reporting templates",
        "EASA Continuing Airworthiness Management Organization (CAMO) integration",
      ]}
      faqs={[
        { question: "Does the CMMS support NAS 410 Rev 5 vs Rev 4 transition?", answer: "Yes. Atlantis NDT ERP ships NAS 410 Rev 5 as the default standard (effective 2014 with full industry adoption by 2017) while supporting customer-specific Rev 4 written practices for the small number of OEMs that have not yet transitioned. The system tracks personnel hours toward Level certification under both revisions concurrently and warns on configuration mismatches before they cause audit findings." },
        { question: "How does the equipment calibration workflow handle NIST traceability?", answer: "Every inspection asset has a calibration record with primary metrology lab, calibration certificate number, NIST / NPL / BAM / NIM artefact traceability chain, certified-reference-material lot numbers, ISO 17025 accreditation of the calibration provider, uncertainty budget per measurement and decision rule per ISO/IEC 17025:2017 Section 7.8.6. Calibration certificates are stored as searchable PDF attachments with full text indexing." },
        { question: "Can the platform track NADCAP MAUP audit cycles end-to-end?", answer: "Yes. NADCAP MAUP audit cycle tracking is built into the platform: 24-month standard cycle for NDT accreditation, 12-month merit cycle for top-tier suppliers, audit-finding tracking with corrective-action workflow, evidence-pack generation aligned to PRI eAuditNet checklist, automatic readiness scoring 90 / 60 / 30 days before audit date. Every NADCAP MAUP audit finding from prior cycles is tracked so you can demonstrate sustained corrective action — the single highest-weighted criterion in NADCAP audit scoring." },
        { question: "Does Atlantis NDT ERP support FAA Part 145 repair-station record retention?", answer: "Yes. FAA Part 145 Section 145.219 requires repair stations to retain inspection records for at least 2 years (5 years for major repairs/major alterations). Atlantis NDT ERP supports 7-year and 10-year retention defaults to satisfy customer-specific requirements, with immutable audit trail of every record modification, electronic-signature workflow per 14 CFR 145.221, and FAA-format 8130-3 Authorized Release Certificate generation tied to the inspection record." },
        { question: "Can we track customer-specific written practices?", answer: "Yes. Atlantis NDT ERP supports multi-OEM written-practice mapping — when a technician is qualified to Boeing BSS7039 UT Level II for the 737 fuselage program, the system tracks that specific endorsement separately from generic NAS 410 currency, and a different endorsement for Airbus AITM 6-1001 UT Level II for the A350 wing program. The system prevents scheduling a technician on a Boeing scope without active Boeing endorsement, and similarly for Airbus, GE, Pratt & Whitney, Rolls-Royce and Safran customer-specific written practices." },
        { question: "How does the CMMS handle radiographic source license tracking?", answer: "Industrial radiography source licenses (Ir-192, Co-60, Se-75, X-ray tube heads) are tracked with regulator (NRC, Agreement State, FANR, AERB, ASN, ENSI, ARPANSA, NSSC, CNSC), license number, expiry date, authorized user names, source-strength records, leak-test certificates, transport documentation (IAEA Type A/B(U), DOT, IATA, IMDG) and storage-location requirements. Renewal alerts fire 120 / 90 / 60 / 30 days before expiry — long enough to navigate regulator timelines that can be 60-120 days." },
        { question: "Is the platform suitable for engine MRO inspection work?", answer: "Yes. Engine MRO inspection — Pratt & Whitney V2500, JT8D, PW1000G, Rolls-Royce Trent series, CFM CFM56, CFM LEAP, GE GE90, GEnx, GE9X — is fully supported. Borescope inspection records, FPI (fluorescent penetrant inspection) line management, ECT inspection of blade dovetails, ZGlow rumblestrip inspection, hot-isostatic-pressing post-processing inspection, hot-section blade refurbishment NDT and shop-process variability tracking are all configured. The system integrates with Pratt & Whitney Engine Network, Rolls-Royce IntelligentEngine and GE Predix Aviation data streams." },
        { question: "Can the platform export to PRI eAuditNet for NADCAP audit submissions?", answer: "Yes. Atlantis NDT ERP generates NADCAP audit-pack ZIP exports structured to PRI eAuditNet checklist requirements — personnel qualification matrix (NAS 410 Rev 5), procedure index (NDT method procedures aligned to OEM/SOC requirements), equipment calibration certificates, customer-rejection-rate analysis, internal audit reports, management review minutes, training records, raw-material verification records, sub-tier supplier surveillance. The eAuditNet-ready ZIP can be uploaded directly to PRI's submission portal." },
      ]}
    />
  );
}
