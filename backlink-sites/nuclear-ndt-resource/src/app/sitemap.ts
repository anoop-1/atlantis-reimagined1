import type { MetadataRoute } from 'next';
const routes = [
  "/",
  "/reactor-systems",
  "/regulatory",
  "/techniques",
  "/techniques/asme-section-xi-isi-program-essentials",
  "/techniques/asme-section-xi-iwe-iwl-containment-inspection",
  "/techniques/pdi-paut-procedure-qualification-deep-dive-2026",
  "/techniques/phased-array-qualification-for-nuclear-applications",
  "/techniques/piping-weld-inspection-class-1-vs-class-2-rules",
  "/techniques/reactor-coolant-pump-inspection-asme-xi-rules",
  "/techniques/reactor-vessel-head-penetration-inspection-pdi-qualification",
  "/techniques/small-modular-reactor-smr-ndt-emerging-considerations",
  "/techniques/spent-fuel-pool-liner-leak-detection-and-inspection",
  "/techniques/steam-generator-tube-inspection-eddy-current-strategies"
];
export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(route => ({ url: "https://nuclear-ndt-resource.vercel.app" + route }));
}
