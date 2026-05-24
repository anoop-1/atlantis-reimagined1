import ErpIndustryAppPage from "@/components/ErpIndustryAppPage";

export default function FieldServiceForPipelineIntegrityServices() {
  return (
    <ErpIndustryAppPage
      pageTitle="Field Service for Pipeline Integrity Services"
      slug="field-service-for-pipeline-integrity-services"
      appName="Field Service"
      industry="pipeline integrity services"
      breadcrumbLabel="Field Service — Pipeline"
      trustBadge="PHMSA / CER / OQ / API 1163 ready"
      metaDescription="Atlantis NDT ERP Field Service for pipeline integrity firms — dig-program dispatch, ILI run scheduling, OQ task-list compliance, offline-capable mobile capture for remote pipeline ROW, GPS-tagged anomaly verification. Flat $18,000/yr."
      heroBody="Atlantis NDT ERP Field Service configured for pipeline integrity contractors — dig-program dispatch optimisation, ILI tool-run scheduling and crew coordination, OQ (Operator Qualification) task-list compliance per ASME B31Q / API 1161, offline-capable mobile capture for remote pipeline ROW (Right-of-Way), GPS-tagged anomaly verification, and post-job customer-deliverable workflow. Part of the all-apps-included $18,000 / year subscription."
      whatItIs={[
        "Field Service for Pipeline Integrity Services inside Atlantis NDT ERP is the Odoo 18 Field Service + Inventory + Mobile module configured for the geographically dispersed, ROW-driven operating model of pipeline integrity — dig-program dispatch (where multiple anomaly-verification digs across a 500-km pipeline are sequenced to minimise crew travel and equipment-rotation cost), ILI tool-run scheduling (coordinating launching-trap and receiving-trap crews, tool-mobilisation logistics, cleaning-pig sequences, ILI tool deployment, and post-run analysis), OQ task-list compliance enforcement (when a technician arrives on site, the mobile app verifies they hold current OQ for every task they are about to perform), and offline-capable data capture for remote ROW with no cellular coverage.",
        "Customer-facing workflows are streamlined — anomaly verification dig records flow back to ILI providers (Rosen NIMS, NDT Global, GE PII, TDW, Baker Hughes) for POI/POD statistics, and to the pipeline operator's integrity-management database (Maximo, SAP Asset Intelligence Network, PCS Veriforce Integrity Manager). Per-dig profitability is tracked in real time so the field-service supervisor can spot mobilisation aborts, equipment failures, or scope-creep before they erode the margin.",
      ]}
      useCases={[
        { useCase: "Use Case 1", body: "A Houston pipeline integrity firm (75 staff) optimised a 78-dig campaign across the Permian Basin — reduced crew-days by 11% and equipment-mobilisation cost by 24%." },
        { useCase: "Use Case 2", body: "A Calgary CER-regulated contractor (40 staff) managing dig programs across BC, AB and SK pipeline systems captured 100% of dig-records via offline mobile app — eliminated the historical 12-15% data-loss-in-transit incidents." },
        { useCase: "Use Case 3", body: "A Mumbai pipeline contractor (35 staff) servicing GAIL India's Hazira-Vijaipur-Jagdishpur (HVJ) pipeline used GPS-tagged dig verification to clear OISD-141 audit with zero ROW-record findings." },
        { useCase: "Use Case 4", body: "A Sao Paulo pipeline contractor (28 staff) supporting Transpetro tracks dig profitability per anomaly — identified the routing optimisation that reduced average per-dig mobilization time by 38%." },
      ]}
      keyFeatures={[
        "Dig-program dispatch optimisation (minimise crew-days, equipment-rotation cost)",
        "ILI tool-run scheduling (launching/receiving trap coordination)",
        "OQ task-list compliance enforcement at task-execution time",
        "GPS-tagged anomaly verification (lat/long, elevation, accuracy)",
        "Offline-capable mobile data capture (zero cellular coverage support)",
        "Auto-sync on network restoration (delta sync, conflict resolution)",
        "Per-dig profitability tracking (real time)",
        "Mobilization-abort tracking (qualification, equipment, weather, safety)",
        "Photo and video capture per dig (with GPS / timestamp / orientation)",
        "PHMSA HCA / Class Location overlay on field-service map",
        "Customer-portal integration (Rosen NIMS, NDT Global, etc.)",
        "Pipeline operator integration (Maximo, SAP AIN, PCS Veriforce IM)",
        "Mobile app for field crew (iOS + Android, offline-capable)",
      ]}
      integrations={[
        "Rosen NIMS (Network Integrity Management System) dig-data ingest",
        "NDT Global pipeline-data file format ingest",
        "T.D. Williamson SmartPig dig-data ingest",
        "GE PII PipeView dig-data integration",
        "Baker Hughes Process and Pipeline Services dig-data exchange",
        "PHMSA NPMS pipeline-data overlay",
        "Maximo asset-management dig-record upload",
        "SAP Asset Intelligence Network (AIN) dig-record upload",
        "PCS Veriforce Integrity Manager dig-record upload",
        "Veriforce / ISNetworld / Avetta OQ compliance integration",
      ]}
      faqs={[
        { question: "Does the platform optimise dig-program dispatch?", answer: "Yes. Dig-program dispatch optimisation — common when a single ILI run identifies 50-200+ anomalies requiring verification across a 100-500 km pipeline — minimises crew-days, equipment-rotation cost, and mobilisation overhead. The platform considers anomaly cluster geography, crew qualifications, equipment availability, AUT scanner currency, and customer-mandated mobilisation windows to produce an optimal dig sequence." },
        { question: "How does the platform enforce OQ compliance at task execution?", answer: "Yes. When a technician arrives on site and opens a work order in the mobile app, the platform verifies they hold current OQ (Operator Qualification per ASME B31Q / API 1161 / DOT 49 CFR 192/195) for every task they are about to perform — for the specific customer / operator whose pipeline this is. If the OQ is missing or expired, the mobile app blocks task execution and routes the work to a qualified-and-available technician." },
        { question: "Can the platform handle offline-capable mobile capture?", answer: "Yes. Pipeline ROW often spans areas with zero cellular coverage — remote Alberta, North Dakota Bakken, Permian Basin remote sections, Niger Delta interior, Siberian Far East, Australian outback, Saudi Empty Quarter. The mobile app captures all dig data offline (text, photos, video, GPS coordinates) and syncs to the platform when network connectivity is restored, with automated conflict resolution and delta-sync." },
        { question: "Does the platform support GPS-tagged anomaly verification?", answer: "Yes. Every dig record carries GPS coordinates (lat/long with WGS-84 datum, elevation, GPS accuracy estimate) captured at the time of dig. This is invaluable for ILI calibration (relating the ILI's reported anomaly location to the actual ground-truth location), pipeline integrity record-keeping, and customer-audit defense (where the auditor asks 'show me you actually dug at the location you say you dug')." },
        { question: "How does the platform track per-dig profitability?", answer: "Per-dig profitability is calculated in real time — labour cost (per OQ-qualified technician hour), equipment cost (per AUT scanner hour, per support truck day), consumables cost (couplant, MT particles, PT chemistry, calibration blocks), mobilisation cost (crew transport, accommodation, per-diem), customer-billed revenue (per anomaly or per dig per the customer contract). Variance from quoted budget flags mid-job for the supervisor's attention." },
        { question: "Can the platform integrate with operator asset-management systems?", answer: "Yes. Pipeline operator integrity-management systems — Maximo (Enbridge, Plains, ONEOK), SAP Asset Intelligence Network (TC Energy, Williams), PCS Veriforce Integrity Manager (Kinder Morgan, Pembina), in-house operator-built systems — all receive dig-record uploads via API or scheduled batch upload. Format compliance is automated." },
        { question: "Does the platform integrate with ILI providers?", answer: "Yes. ILI verification-dig data flows back to ILI providers (Rosen NIMS, NDT Global, GE PII, T.D. Williamson, Baker Hughes) for POI / POD statistics that improve future ILI tool performance and customer reporting. ILI providers contractually require this verification data — the platform's automated upload prevents the historical pain of multi-week data-rec delays." },
        { question: "How does the platform handle mobilization-abort tracking?", answer: "Mobilization aborts (qualification gap, equipment failure, weather hold, safety stand-down) are tracked as a separate event class with root-cause analysis. Trend analysis identifies recurring abort categories so corrective action (additional training, equipment redundancy, safety improvement) can be targeted at the actual root cause." },
      ]}
    />
  );
}
