import type { MetadataRoute } from 'next';
const routes = [
  "/",
  "/buyer-guide",
  "/buyer-guide/implementation",
  "/buyer-guide/roi-calculator",
  "/comparisons",
  "/comparisons/digital-twin-platforms",
  "/comparisons/erp-software",
  "/features",
  "/features/ai-defect-detection",
  "/features/automated-reports",
  "/features/inspection-dashboards",
  "/features/mobile-data-collection",
  "/guides/exception-led-report-approval-demo-script",
  "/industry",
  "/industry/aerospace",
  "/industry/oil-gas",
  "/resources",
  "/resources/paper-to-digital",
  "/solutions",
  "/solutions/api-first-ndt-software-evaluation-criteria",
  "/solutions/choosing-a-cmms-aware-ndt-platform-2026",
  "/solutions/data-retention-policy-for-ndt-files-7-years-or-life-of-asset",
  "/solutions/inspection-photo-management-best-practices",
  "/solutions/integrating-ndt-data-with-cmms-sap-pm-maximo",
  "/solutions/integrating-paut-files-into-an-integrity-platform",
  "/solutions/mobile-data-capture-offline-inspection-apps",
  "/solutions/ndt-reporting-software-buyer-checklist-2026",
  "/solutions/on-prem-vs-saas-ndt-platforms-trade-offs",
  "/solutions/role-based-access-control-for-inspection-data"
];
export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(route => ({ url: "https://ndt-software-solutions.vercel.app" + route }));
}
