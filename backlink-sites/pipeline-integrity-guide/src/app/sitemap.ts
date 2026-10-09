import type { MetadataRoute } from 'next';
const routes = [
  "/",
  "/atlantis-products-services",
  "/case-studies",
  "/case-studies/class-location-changes-mop-and-the-inspector-implications",
  "/case-studies/crack-management-program-pipeline-asme-b31-8s",
  "/case-studies/direct-assessment-eca-dca-ica-which-when",
  "/case-studies/ili-data-validation-workflow-anomaly-truth-table",
  "/case-studies/in-line-inspection-tool-selection-mfl-vs-ut-vs-emat",
  "/case-studies/integrity-verification-process-post-spike-hydrotest",
  "/case-studies/pipeline-coating-disbondment-detection-tools",
  "/case-studies/pipeline-girth-weld-quality-management-eca-strain",
  "/case-studies/pipeline-leak-detection-program-design-cpm-vs-extended",
  "/case-studies/pipeline-rehabilitation-options-composite-vs-steel-sleeve",
  "/industries-and-applications",
  "/methods",
  "/regions-and-project-planning",
  "/standards"
];
export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(route => ({ url: "https://pipeline-integrity-guide.vercel.app" + route }));
}
