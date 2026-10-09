import type { MetadataRoute } from 'next';
const routes = [
  "/",
  "/atlantis-products-services",
  "/blog",
  "/blog/asset-integrity-digital-twin-rbi-in-3d-model",
  "/blog/building-an-asset-integrity-management-system-12-month-roadmap",
  "/blog/closing-the-loop-from-ndt-finding-to-integrity-action",
  "/blog/damage-mechanism-review-dmr-step-by-step",
  "/blog/digital-twin-roi-calculator",
  "/blog/erp-vs-spreadsheets-ndt",
  "/blog/fitness-for-service-api-579-when-to-use-which-level",
  "/blog/inspection-data-quality-when-it-quietly-fails-rbi",
  "/blog/integrity-management-software-pitfalls-buyers-miss",
  "/blog/integrity-operating-windows-ow-best-practices-refineries",
  "/blog/level-iii-authority-as-a-contracted-function",
  "/blog/measuring-asset-integrity-kpis-that-actually-matter",
  "/blog/ndt-erp-for-asset-integrity-programs-2026",
  "/blog/risk-based-inspection-vs-time-based-which-cuts-cost-more",
  "/blog/turnaround-readiness-review-30-day-window",
  "/blog/what-owners-should-demand-from-inspection-contractor-data",
  "/blog/why-rbi-programmes-drift-and-how-to-tell-early",
  "/digital-twins",
  "/digital-twins/oil-gas",
  "/digital-twins/predictive-maintenance",
  "/erp-solutions",
  "/erp-solutions/implementation-guide",
  "/ndt-software",
  "/ndt-software/ndtconnect-review",
  "/ndt-software/reporting-tools"
];
export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(route => ({ url: "https://asset-integrity-hub.vercel.app" + route }));
}
