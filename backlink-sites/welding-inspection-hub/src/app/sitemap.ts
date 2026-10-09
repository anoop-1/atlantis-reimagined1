import type { MetadataRoute } from 'next';
const routes = [
  "/",
  "/career",
  "/career/cwi",
  "/career/salary",
  "/defects",
  "/defects/cracks",
  "/defects/lack-of-fusion",
  "/defects/porosity",
  "/guides/weld-quantity-report-commercial-closeout-reconciliation",
  "/inspect",
  "/inspect/aws-d17-1-aerospace-fusion-welding-walkthrough",
  "/inspect/cwi-vs-cswip-vs-iwi-which-cert-for-which-market",
  "/inspect/gtaw-vs-gmaw-process-influence-on-weld-quality",
  "/inspect/iwip-and-iwip-c-paths-vs-cwi-comparison",
  "/inspect/macro-etch-test-on-welds-what-it-actually-shows",
  "/inspect/underwater-welding-inspection-class-and-standard",
  "/inspect/visual-weld-acceptance-by-code-asme-vs-aws",
  "/inspect/weld-acceptance-on-coated-and-cladded-components",
  "/inspect/weld-procedure-qualification-record-pqr-from-zero",
  "/inspect/welding-distortion-control-on-thin-plate-fabrication",
  "/ndt-methods",
  "/ndt-methods/mt-weld",
  "/ndt-methods/paut-weld",
  "/ndt-methods/rt-weld",
  "/ndt-methods/tofd-weld",
  "/ndt-methods/ut-weld",
  "/processes",
  "/processes/smaw-ndt",
  "/standards",
  "/standards/api-1104",
  "/standards/asme-ix",
  "/standards/aws-d1-1"
];
export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(route => ({ url: "https://welding-inspection-hub.vercel.app" + route }));
}
