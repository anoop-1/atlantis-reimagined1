// 2026-09-29: rebuilt on the shared integration guide (src/data/software-assets/
// integrations.json). The previous version claimed a "native" connector, fixed
// deployment timelines, production customers and inspection-interval write-back,
// none of which may be claimed (fabricated-claims rule, RBI/interval rule). The
// architecture detail it carried (SAP Gateway/OData, middleware, notification
// route, minimum-authorisation service user) is kept in the new guide.
import IntegrationGuide from "@/pages/software-assets/IntegrationGuide";

export default function SapPmIntegration() {
  return <IntegrationGuide slug="sap-pm" />;
}
