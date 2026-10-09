import type { MetadataRoute } from 'next';
const routes = [
  "/",
  "/atlantis-products-services",
  "/methods",
  "/rail",
  "/rail/frog-and-switch-component-inspection-on-mainline-rail",
  "/rail/rail-axle-ultrasonic-inspection-procedure",
  "/rail/rail-bearing-and-axlebox-ndt-program",
  "/rail/rail-bridge-truss-inspection-aar-mra",
  "/rail/rail-coach-and-locomotive-shell-inspection",
  "/rail/rail-corrosion-fatigue-detection-rcf-cracking",
  "/rail/rail-flaw-detection-vehicle-types-and-tradeoffs",
  "/rail/rail-track-bolt-and-fishplate-inspection",
  "/rail/rolling-stock-wheel-set-ndt-paut-and-mt",
  "/rail/thermite-weld-inspection-on-continuous-welded-rail",
  "/track-assessment",
  "/wheel-inspection"
];
export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(route => ({ url: "https://rail-ndt-resource.vercel.app" + route }));
}
