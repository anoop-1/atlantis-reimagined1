import type { MetadataRoute } from 'next';
const routes = [
  "/",
  "/atlantis-products-services",
  "/case-studies",
  "/industries",
  "/industries/aerospace-inspection",
  "/industries/oil-gas-inspection",
  "/industries/power-generation-inspection",
  "/standards",
  "/standards/api-inspection-codes",
  "/standards/asme-codes-ndt",
  "/technology",
  "/technology/digital-twins-asset-management",
  "/technology/erp-for-inspection-companies",
  "/technology/ndt-reporting-software",
  "/topics",
  "/topics/benchmarking-cost-per-weld-inspected-2026",
  "/topics/building-an-in-house-vs-outsourced-ndt-program",
  "/topics/cross-sector-ndt-program-benchmarks-2026",
  "/topics/inspection-contract-clauses-that-protect-the-owner",
  "/topics/integrity-data-management-platforms-buyer-guide",
  "/topics/iso-9712-vs-asnt-snt-tc-1a-multi-region-teams",
  "/topics/mobilization-demobilization-cost-discipline",
  "/topics/multi-method-ndt-team-staffing-model",
  "/topics/standard-operating-procedures-for-cross-discipline-teams",
  "/topics/training-budget-allocation-ndt-team"
];
export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(route => ({ url: "https://industrial-inspection-resources.vercel.app" + route }));
}
