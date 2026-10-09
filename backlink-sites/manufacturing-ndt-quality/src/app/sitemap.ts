import type { MetadataRoute } from 'next';
const routes = [
  "/",
  "/atlantis-products-services",
  "/automation",
  "/automation/ai-defect-detection",
  "/automation/inline-testing",
  "/automation/robotic-inspection",
  "/career",
  "/career/qc-inspector",
  "/industries",
  "/industries/automotive",
  "/industries/electronics",
  "/industries/heavy-equipment",
  "/industries/semiconductor",
  "/practices",
  "/practices/additive-manufactured-parts-ndt-cap-cct-vs-ut",
  "/practices/casting-radiography-acceptance-by-grade",
  "/practices/first-article-inspection-fai-with-ndt-integration",
  "/practices/forging-ndt-acceptance-criteria-by-grade",
  "/practices/in-process-quality-control-vs-final-ndt-trade-offs",
  "/practices/inline-ut-on-tube-mills-defect-detection",
  "/practices/magnetic-particle-on-castings-fluorescent-vs-dry",
  "/practices/phased-array-ut-on-thick-wall-monobloc-forgings",
  "/practices/plate-mill-ndt-screening-during-rolling",
  "/practices/supplier-quality-audit-ndt-shop",
  "/processes",
  "/processes/additive-manufacturing",
  "/processes/casting-inspection",
  "/processes/forging-ndt",
  "/standards"
];
export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(route => ({ url: "https://manufacturing-ndt-quality.vercel.app" + route }));
}
