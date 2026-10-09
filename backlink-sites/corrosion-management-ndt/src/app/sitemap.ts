import type { MetadataRoute } from 'next';
const routes = [
  "/",
  "/guides/reconciling-mismatched-corrosion-campaign-baselines",
  "/industry",
  "/industry/pipeline",
  "/industry/refinery",
  "/management",
  "/management/building-corrosion-management-program-iso-55000",
  "/management/corrosion-rate-vs-thickness-trends-what-the-data-says",
  "/management/cui-inspection-strategy-when-to-strip-insulation",
  "/management/cui-strategy",
  "/management/erosion-corrosion-vs-flow-accelerated-corrosion",
  "/management/galvanic-corrosion-prevention-design-and-inspection",
  "/management/inhibitor-injection-program-effectiveness-monitoring",
  "/management/microbiologically-influenced-corrosion-mic-detection",
  "/management/msl-stress-corrosion-cracking-austenitic-stainless",
  "/management/ph-monitoring-vs-corrosion-coupons-which-data-trust",
  "/management/rbi",
  "/management/remaining-life",
  "/management/sweet-vs-sour-corrosion-inspection-program-design",
  "/ndt-methods",
  "/ndt-methods/guided-wave",
  "/ndt-methods/mfl",
  "/ndt-methods/ut-thickness",
  "/standards",
  "/standards/nace",
  "/types",
  "/types/cui",
  "/types/erosion",
  "/types/mic",
  "/types/pitting",
  "/types/scc"
];
export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(route => ({ url: "https://corrosion-management-ndt.vercel.app" + route }));
}
