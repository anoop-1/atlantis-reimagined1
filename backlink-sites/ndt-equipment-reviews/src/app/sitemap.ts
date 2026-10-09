import type { MetadataRoute } from 'next';
const routes = [
  "/",
  "/atlantis-products-services",
  "/reviews",
  "/reviews/calibration-blocks-buying-guide-2026",
  "/reviews/crawler-vs-handheld-aut-for-pipeline-girths",
  "/reviews/digital-rt-detectors-flat-panel-vs-line-scan",
  "/reviews/epoch-6lt-vs-epoch-650-real-world-comparison",
  "/reviews/magnetic-particle-yoke-vs-prod-vs-coil-real-world",
  "/reviews/omniscan-x3-vs-x3-64-which-channel-count-fits",
  "/reviews/phased-array-probe-buying-guide-frequency-and-aperture",
  "/reviews/rt-source-projector-comparison-iridium-vs-selenium",
  "/reviews/thermal-imaging-cameras-for-industrial-ndt-2026",
  "/reviews/ut-couplant-glycerin-vs-gel-vs-paste-when-each-fits",
  "/ultrasonic"
];
export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(route => ({ url: "https://ndt-equipment-reviews.vercel.app" + route }));
}
