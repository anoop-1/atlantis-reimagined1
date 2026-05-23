import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { SocialShare } from "@/components/SocialShare";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const faqs = [
  { question: "Does the Atlantis NDT digital twin platform have API access?", answer: "Yes. The Atlantis NDT digital twin platform exposes both a REST API (for synchronous reads / writes) and a GraphQL API (for complex read queries with field-selection efficiency). The REST API uses OAuth 2.0 client-credentials flow with API keys scoped per asset twin. Endpoints cover asset hierarchy queries, inspection-data ingestion (UT thickness, RT/PAUT scan results, corrosion-coupon weights), historian-tag time-series writes, work-order creation, and twin-state read for visualization clients. The GraphQL endpoint is used primarily by partner analytics tools (Power BI, Tableau, Grafana via the JSON API connector) to pull cross-twin queries efficiently. Both APIs are documented at /api-docs with OpenAPI 3.0 spec available for Postman / Insomnia / Bruno import. Rate limits: 1,000 requests/minute per client for REST; query-complexity limit of 5,000 nodes per request for GraphQL. Enterprise-tier customers can request higher limits." },
  { question: "Does the digital twin integrate with OSIsoft PI historian?", answer: "Yes — OSIsoft PI (now AVEVA PI System) integration is the most common historian integration we deploy because PI is the dominant historian in oil & gas, refining, and power generation. Atlantis NDT digital twin connects to PI via the PI Web API (REST endpoint) for tag-based time-series ingestion and the PI Asset Framework (PI AF) SDK for asset-hierarchy synchronization. Tag mapping is bidirectional: Atlantis NDT can read PI tag values into twin attributes (e.g., process temperature, vessel pressure, vibration RMS) and write computed twin outputs back to PI for use by other PI clients. Standard PI integration deploys in 4-8 weeks including PI AF hierarchy mapping, tag-namespace alignment, and security-context configuration (Kerberos / Windows authentication or service-account API key). For sites running PI on legacy 2018-era infrastructure, we support the older PI SDK + PI OLEDB Enterprise interface. PI Vision dashboards can embed Atlantis NDT digital twin views as iframe widgets." },
  { question: "Can the digital twin read data from AVEVA Historian (formerly Wonderware)?", answer: "Yes. AVEVA Historian (formerly Wonderware Historian, before that InSQL) integration uses the AVEVA Historian Client REST API or direct SQL Server query for sites still running the historian on-premise. Tag synchronization is configured via the InTouch tag dictionary export and mapped against the Atlantis NDT digital twin asset hierarchy. For sites running the newer AVEVA System Platform with Operations Management Interface (OMI), we support the direct OMI WebClient API. Integration typical timeline is 6-10 weeks depending on historian version and tag-count. AVEVA Insight cloud historian is also supported via its REST API for newer cloud deployments." },
  { question: "What about IBM Maximo and SAP PM integration?", answer: "Both are supported, plus Hexagon EAM, Infor EAM, and Bentley AssetWise. IBM Maximo integration uses the Maximo REST API (MIF Object Structures) or the Maximo Integration Framework MEA endpoints for work-order, asset, and inventory bidirectional sync. SAP PM (Plant Maintenance) integration runs through the SAP NetWeaver Gateway REST API for newer S/4HANA installations or via IDoc / BAPI for older ECC 6.0 environments. Hexagon EAM, Infor EAM, and Bentley AssetWise each have native REST APIs we connect through. The most common integration pattern: digital twin reads asset master data and equipment hierarchy from the EAM, ingests inspection findings and condition data, then writes back work-order recommendations with criticality, estimated cost, and recommended completion dates. Maximo and SAP PM users can configure approval workflows that escalate twin-generated work orders to the appropriate planner / supervisor based on cost threshold." },
  { question: "Does the digital twin platform integrate with Bentley OpenPlant or AVEVA E3D?", answer: "Yes — both engineering 3D systems are supported as source-of-truth for the as-designed model. The integration imports the engineering 3D model (Bentley i.dgn or i.model, AVEVA E3D Reviews .rvm, or Aveva PDMS legacy database) and maps each tagged engineering item to a digital-twin asset entity. As-built changes detected via laser scan (Faro, Leica, Trimble) can be reconciled against the engineering model with delta-reporting per ASME B31.3 / ASME VIII as-built-vs-design tolerance ranges. For sites running Intergraph SmartPlant 3D, AVEVA Marine, or Hexagon SmartPlant Foundation, we support import via the ISO 15926 reference data set with full attribute preservation." },
  { question: "What ingestion patterns does the digital twin support for inspection data?", answer: "Five primary ingestion patterns: (1) Direct API ingestion via REST POST with JSON payload — used by Atlantis NDT field reporting app and by partner inspection software with native integration; (2) File-upload ingestion — UT thickness CSV/Excel, RT digital-radiography DICONDE files, PAUT scan files (Olympus .opd, M2M / Gekko / Mantis files, Eddyfi files), corrosion-coupon weight reports; (3) IoT sensor stream ingestion — fixed CP voltage probes, vibration accelerometers, ultrasonic thickness probes via MQTT, Sparkplug B, or HTTP webhooks; (4) Inspection-management-system bridge — bi-directional sync with Bureau Veritas Inspect, Acuren ASSET, MISTRAS PCMS, BV Naval Ships VeriSTAR, DNV Synergi; (5) Manual data entry — for legacy inspection records during initial twin onboarding. Every ingestion path includes data-validation rules (value-range checking, unit normalization, missing-field detection) before the record commits to the twin." },
  { question: "Is the digital twin API rate-limited and what is the SLA?", answer: "Standard tier API rate limits: REST endpoint 1,000 requests/minute per client; GraphQL 5,000-node complexity limit per query; file-upload up to 500 MB per file with multipart upload for larger DICONDE files. SLA for the platform: 99.9% uptime (43 minutes max downtime per month) for standard tier; 99.95% for enterprise tier (22 minutes/month max). Planned maintenance windows are advance-notified 14 days minimum and scheduled outside business hours for the customer's primary timezone. For mission-critical deployments (FPSO with $2M+ daily production cost), we offer a dedicated single-tenant deployment with 99.99% SLA and active-active multi-region failover at a custom pricing tier above standard." },
  { question: "How does authentication work for digital twin API integration?", answer: "Authentication uses OAuth 2.0 client-credentials flow with API keys scoped per asset twin or per workspace. For client systems unable to support OAuth 2.0, we support API-key-as-bearer-token with the same scope restrictions but stronger rate-limiting. SCIM 2.0 is supported for user-account provisioning from Okta, Azure AD / Entra ID, and Google Workspace. SAML 2.0 SSO is available for the human-user web console (separate from API authentication). All API traffic is TLS 1.2 minimum (TLS 1.3 preferred); platform-side data at rest is AES-256 encrypted; field-level encryption is available for sensitive attributes (e.g., specific corrosion-survey results restricted to authorized engineers). Audit logs of all API access are retained 7 years per SOX/GDPR/PIPL requirements." }
];

const integrations = [
  { system: "OSIsoft PI / AVEVA PI System", type: "Process historian", method: "PI Web API + PI AF SDK", typicalTimeline: "4-8 weeks", note: "Most common historian integration; bidirectional tag sync" },
  { system: "AVEVA Historian (Wonderware)", type: "Process historian", method: "AVEVA Historian REST + SQL", typicalTimeline: "6-10 weeks", note: "Supports legacy on-premise + new cloud Insight" },
  { system: "Aspen InfoPlus.21 (IP.21)", type: "Process historian", method: "IP.21 REST API + COM", typicalTimeline: "6-10 weeks", note: "Common in refining, petrochemical" },
  { system: "GE Proficy Historian", type: "Process historian", method: "Proficy REST + iFix Connectivity", typicalTimeline: "5-8 weeks", note: "Common in power generation" },
  { system: "IBM Maximo (EAM)", type: "Asset / work-order mgmt", method: "Maximo REST + MIF MEA", typicalTimeline: "6-10 weeks", note: "Bidirectional asset + work-order sync" },
  { system: "SAP PM / SAP S/4HANA PM", type: "Asset / work-order mgmt", method: "NetWeaver Gateway REST + BAPI", typicalTimeline: "8-14 weeks", note: "S/4HANA easier than legacy ECC 6.0" },
  { system: "Hexagon EAM (formerly Infor)", type: "Asset / work-order mgmt", method: "EAM REST API", typicalTimeline: "5-8 weeks", note: "Strong in mining + power" },
  { system: "Bentley AssetWise", type: "Asset / work-order mgmt", method: "AssetWise REST API", typicalTimeline: "6-10 weeks", note: "Strong in rail, transit, and utilities" },
  { system: "AVEVA E3D / PDMS", type: "Engineering 3D model", method: "RVM import + ISO 15926", typicalTimeline: "4-8 weeks", note: "As-designed model import + as-built delta" },
  { system: "Bentley OpenPlant / OpenBridge", type: "Engineering 3D model", method: "i.dgn + i.model import", typicalTimeline: "4-8 weeks", note: "Strong in pipeline + bridge" },
  { system: "Hexagon SmartPlant", type: "Engineering 3D model", method: "ISO 15926 + SmartPlant Foundation", typicalTimeline: "6-10 weeks", note: "Refinery + petrochemical EPC" },
  { system: "Olympus PAUT (.opd files)", type: "Inspection data", method: "Direct file upload + parser", typicalTimeline: "Instant", note: "Native support for OmniScan files" },
  { system: "M2M / Gekko / Mantis PAUT", type: "Inspection data", method: "Direct file upload + parser", typicalTimeline: "Instant", note: "Native support for Gekko files" },
  { system: "DICONDE digital radiography", type: "Inspection data", method: "DICONDE file upload", typicalTimeline: "Instant", note: "ASTM E2339-compliant" },
  { system: "Faro / Leica / Trimble laser scans", type: "As-built reality capture", method: ".e57 / .rcp / .pts import", typicalTimeline: "Instant", note: "Reality capture for as-built model" },
];

export default function DigitalTwinPlatformAPIIntegrationGuide() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      <SEOHead
        title="Digital Twin Platform API Access & Integration Guide (PI, Maximo, AVEVA)"
        description="Digital twin platform with API access — REST + GraphQL. Integration patterns for OSIsoft PI, AVEVA Historian, IBM Maximo, SAP PM, Bentley OpenPlant, AVEVA E3D. OAuth 2.0, rate limits, SLA."
        keywords="digital twin platform with api access, digital twin tools that integrate with historian data pi system, digital twin api integration, osisoft pi digital twin, maximo digital twin integration, aveva pi digital twin, digital twin rest api"
        canonical="https://atlantisndt.com/blog/digital-twin-platform-api-access-integration-guide"
        article={{
          headline: "Digital Twin Platform API Access & Integration Guide — PI, Maximo, AVEVA, SAP",
          datePublished: "2026-05-23",
          author: "Atlantis NDT Editorial Team",
          section: "Digital Twins"
        }}
        faq={faqs}
      />
      <Breadcrumbs />

      <section className="bg-gradient-to-br from-blue-700 to-indigo-900 text-white pt-24 pb-16">
        <div className="container mx-auto max-w-4xl px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="text-blue-200 mb-4">Integration Guide • May 2026 • 13 min read</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Digital Twin Platform API Access &amp; Integration Guide</h1>
            <p className="text-xl text-blue-100 mb-8">A practical 2026 integration guide for the Atlantis NDT digital twin platform — REST and GraphQL API patterns for OSIsoft PI / AVEVA PI System, AVEVA Historian (Wonderware), Aspen IP.21, IBM Maximo, SAP PM, Hexagon EAM, Bentley OpenPlant, AVEVA E3D, plus DICONDE radiography and Olympus / M2M PAUT file ingestion.</p>
          </motion.div>
        </div>
      </section>

      <div className="py-6 bg-white border-b">
        <div className="container mx-auto max-w-4xl px-6">
          <SocialShare title="Digital Twin Platform API Integration Guide" description="REST + GraphQL APIs and integration patterns for OSIsoft PI, AVEVA Historian, Maximo, SAP PM." />
        </div>
      </div>

      <article className="py-16">
        <div className="container mx-auto max-w-4xl px-6">

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Why Digital Twin API Access Determines Long-Term Platform Value</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              A digital twin platform that cannot read process data from your historian, read asset and work-order data from your EAM, and read as-designed geometry from your engineering 3D system is a sealed silo — it can render pretty visuals at deployment but will not be the single pane of glass anyone actually uses to make decisions. Open API access is the structural difference between digital twin platforms that compound value over years and those that become shelfware within 18 months.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              The Atlantis NDT digital twin platform was designed API-first. Every capability available in the platform's web UI is available via REST or GraphQL endpoints; nothing is locked behind a console-only workflow. This guide covers the API architecture, the integration patterns for the dominant industrial systems (OSIsoft PI, AVEVA, Maximo, SAP PM, Bentley OpenPlant, AVEVA E3D), and the operational considerations (authentication, rate limits, SLA) that matter for production deployments.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
              <p className="text-blue-900 font-semibold mb-2">2026 digital twin API architecture key facts:</p>
              <ul className="text-blue-900 space-y-1 list-disc list-inside">
                <li>REST API: OAuth 2.0 client-credentials flow, 1,000 req/min standard, OpenAPI 3.0 spec at /api-docs</li>
                <li>GraphQL API: 5,000-node complexity limit per query, persisted-queries supported</li>
                <li>SLA: 99.9% standard / 99.95% enterprise / 99.99% dedicated-tenant</li>
                <li>SAML 2.0 SSO + SCIM 2.0 user provisioning (Okta, Entra ID, Google Workspace)</li>
                <li>TLS 1.2 minimum (1.3 preferred); AES-256 at rest; audit logs 7-year retention</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Supported Integrations — System Map</h2>
            <div className="overflow-x-auto mb-6">
              <table className="w-full bg-white rounded-lg shadow-sm text-sm">
                <thead className="bg-blue-100">
                  <tr>
                    <th className="px-3 py-2 text-left font-semibold">System</th>
                    <th className="px-3 py-2 text-left font-semibold">Type</th>
                    <th className="px-3 py-2 text-left font-semibold">Method</th>
                    <th className="px-3 py-2 text-left font-semibold">Typical Timeline</th>
                  </tr>
                </thead>
                <tbody>
                  {integrations.map((r, i) => (
                    <tr key={i} className="border-t">
                      <td className="px-3 py-2 font-semibold">{r.system}</td>
                      <td className="px-3 py-2">{r.type}</td>
                      <td className="px-3 py-2">{r.method}</td>
                      <td className="px-3 py-2 text-blue-700">{r.typicalTimeline}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">OSIsoft PI / AVEVA PI System Integration Pattern</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              PI is the dominant process historian in oil and gas, refining, and power generation, with an installed base of 19,000+ industrial sites globally. The Atlantis NDT digital twin connects to PI via two complementary surfaces. First, the PI Web API exposes a REST endpoint for tag time-series read and write — used for ingesting process variables (pressure, temperature, flow, vibration) into the twin as time-series attributes. Second, the PI Asset Framework (PI AF) SDK provides hierarchical asset modeling that maps directly to the digital twin's asset hierarchy — used for the initial bulk-load of asset structure and ongoing structural synchronization.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Standard PI integration deploys in 4-8 weeks for a single site. The work breakdown: (1) PI Web API access provisioning with service-account configuration — 1 week; (2) PI AF hierarchy export and mapping against twin asset hierarchy — 2-3 weeks; (3) Tag namespace alignment, unit-of-measure normalization, time-zone reconciliation — 1-2 weeks; (4) Bi-directional read/write validation and historical-data backfill — 1-2 weeks. PI Vision dashboards can embed Atlantis NDT digital twin views as iframe widgets so PI users get the integrated visualization without needing to leave their familiar PI tools.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">IBM Maximo and SAP PM Integration Patterns</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              EAM integration is the second pillar after historian integration. Atlantis NDT digital twin connects to IBM Maximo via the Maximo REST API exposed by the Maximo Integration Framework (MIF) — specifically the MIF Object Structures for synchronous read/write and the MEA (Maximo Enterprise Adapter) for asynchronous message-based integration in high-volume environments. The most common bi-directional sync covers: asset master read (Maximo → twin) for initial asset onboarding; work-order create from twin (twin → Maximo) when an anomaly detection triggers a maintenance recommendation; work-order status read (Maximo → twin) to close the loop on actioned recommendations.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              SAP PM integration runs through the SAP NetWeaver Gateway REST API for SAP S/4HANA installations or via IDoc / BAPI / RFC for legacy ECC 6.0 environments. Integration to S/4HANA is meaningfully faster (typically 8-10 weeks) than to ECC 6.0 (12-16 weeks) because the REST gateway exposes work-order, equipment, functional-location, and notification entities natively without requiring custom ABAP development. For S/4HANA users on the latest 2023+ release, the SAP Business Technology Platform provides additional integration patterns via SAP Integration Suite (CPI).
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Engineering 3D Model Integration (AVEVA E3D, Bentley OpenPlant, Hexagon SmartPlant)</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              The as-designed engineering 3D model is the source-of-truth for asset geometry and tagged-item attributes. AVEVA E3D (formerly Aveva PDMS) is dominant in refining, petrochemical, and offshore EPC; integration imports the E3D Reviews .rvm file with attribute preservation against the ISO 15926 reference data set. Bentley OpenPlant + OpenBridge cover pipeline and bridge engineering; integration imports the i.dgn or i.model file. Hexagon SmartPlant 3D + SmartPlant Foundation cover refinery and petrochemical EPC; integration uses ISO 15926 with SmartPlant-specific attribute mapping.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              For brownfield assets where the engineering model is incomplete, outdated, or missing entirely (common for assets older than 25 years), the digital twin supports reality-capture-as-source-of-truth: laser-scan data from Faro, Leica, or Trimble scanners can be ingested as .e57, .rcp, or .pts files. The resulting point cloud is segmented into asset entities using the Atlantis NDT auto-segmentation pipeline, with manual review by an asset-integrity engineer. As-built tolerance checks per ASME B31.3 / ASME VIII compare laser-scan reality against the engineering model with delta reporting.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Inspection Data Ingestion Patterns</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Atlantis NDT digital twin supports five ingestion patterns for inspection data. (1) Direct API ingestion via REST POST with JSON payload — the most common path for the Atlantis NDT field reporting app and for partner inspection software with native integration. (2) File-upload for UT thickness CSV/Excel, RT digital-radiography DICONDE files per ASTM E2339, PAUT scan files (Olympus .opd, M2M / Gekko / Mantis files, Eddyfi proprietary formats). (3) IoT sensor stream ingestion for fixed CP voltage probes, vibration accelerometers, ultrasonic thickness probes via MQTT, Sparkplug B, or HTTP webhooks. (4) Inspection-management-system bridge for bi-directional sync with Bureau Veritas Inspect, Acuren ASSET, MISTRAS PCMS, BV VeriSTAR, DNV Synergi. (5) Manual data entry via the web console for legacy inspection records during initial twin onboarding.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed">
              Every ingestion path includes structured data-validation rules — value-range checking (e.g., UT thickness above 50 mm is flagged for review on a 6 mm shell course), unit normalization (mm vs inches, MPa vs psi), and missing-field detection — before the record commits to the twin.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Authentication, Authorization, and Audit</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Authentication for the API uses OAuth 2.0 client-credentials flow with API keys scoped per asset twin or per workspace, supporting access tokens with 60-minute lifetime and refresh tokens with configurable lifetime. For client systems unable to support OAuth 2.0, we support API-key-as-bearer-token with the same scope restrictions but stronger rate-limiting. SCIM 2.0 is supported for user-account provisioning from Okta, Microsoft Entra ID, and Google Workspace — when a user is deactivated in the identity provider, the API revokes their access on the next scheduled SCIM sync.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              SAML 2.0 SSO is available for the human-user web console, separate from API authentication. Role-based access control (RBAC) supports nine standard roles plus unlimited custom roles, with attribute-based access control (ABAC) available for finer-grained restrictions (e.g., user can only see inspection records from their assigned asset hierarchy). All API access and all UI access produces audit-log entries retained for 7 years to satisfy SOX, GDPR, PIPL, and HIPAA-equivalent retention requirements. Audit logs are exportable via API for ingestion into customer SIEM (Splunk, Elastic, Microsoft Sentinel).
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Related Resources</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link to="/digital-twins" className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-500 hover:shadow-md transition"><h4 className="font-bold text-blue-900">Digital Twins Platform Overview</h4><p className="text-slate-600 text-sm">Full capability and pricing.</p></Link>
              <Link to="/digital-twin-roi-calculator" className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-500 hover:shadow-md transition"><h4 className="font-bold text-blue-900">Free ROI Calculator</h4><p className="text-slate-600 text-sm">5-year NPV, payback, IRR per asset class.</p></Link>
              <Link to="/blog/digital-twin-implementation-roadmap-oil-gas-2026" className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-500 hover:shadow-md transition"><h4 className="font-bold text-blue-900">12-Month Implementation Roadmap</h4><p className="text-slate-600 text-sm">Phased deployment for oil &amp; gas.</p></Link>
              <Link to="/contact" className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-500 hover:shadow-md transition"><h4 className="font-bold text-blue-900">Book an Integration Workshop</h4><p className="text-slate-600 text-sm">Architecture review for your specific stack.</p></Link>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((f, i) => (
                <details key={i} className="bg-white p-5 rounded-lg shadow-sm">
                  <summary className="font-bold text-lg cursor-pointer text-blue-900">{f.question}</summary>
                  <p className="text-slate-700 mt-3 leading-relaxed">{f.answer}</p>
                </details>
              ))}
            </div>
          </section>

          <section className="bg-gradient-to-br from-blue-700 to-indigo-900 text-white p-10 rounded-2xl mb-12">
            <h2 className="text-3xl font-bold mb-4">Open API. Documented. Tested.</h2>
            <p className="text-blue-100 text-lg mb-6">Atlantis NDT digital twin — REST + GraphQL, OAuth 2.0, OpenAPI 3.0 spec, native integration with PI, Maximo, SAP PM, AVEVA E3D, and 12+ more.</p>
            <div className="flex flex-wrap gap-4">
              <Link to="/digital-twins" className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 flex items-center gap-2">See Platform Pricing <ArrowRight className="w-4 h-4" /></Link>
              <Link to="/contact" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-500 flex items-center gap-2">Book a Demo <ArrowRight className="w-4 h-4" /></Link>
            </div>
          </section>

          <ContactDetails />
        </div>
      </article>
    </div>
  );
}
