// 2026-09-29: rebuilt on the shared integration guide (src/data/software-assets/
// integrations.json). The previous version claimed a "native" connector, fixed
// deployment timelines, production customers on MAS and inspection-interval
// write-back, none of which may be claimed. The architecture detail it carried
// (REST/OSLC, integration framework, service requests, MAS) is kept.
import IntegrationGuide from "@/pages/software-assets/IntegrationGuide";

export default function IbmMaximoIntegration() {
  return <IntegrationGuide slug="ibm-maximo" />;
}
