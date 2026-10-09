import type { MetadataRoute } from 'next';
const routes = [
  "/",
  "/career",
  "/career/offshore-salary",
  "/components",
  "/components/ballast-tank",
  "/components/hull-thickness",
  "/components/mooring-chain",
  "/offshore",
  "/offshore/ballast-water-treatment-system-ndt-considerations",
  "/offshore/cargo-tank-coating-inspection-on-chemical-tankers",
  "/offshore/class-survey-ndt-scope-abs-dnv-lloyd",
  "/offshore/flexible-riser-inspection-techniques-emerging",
  "/offshore/fpso-turret-inspection-and-swivel-stack",
  "/offshore/in-water-survey-vs-drydock-survey-ndt-coverage",
  "/offshore/jacket-platform-girth-weld-inspection-from-rope-access",
  "/offshore/mooring-chain-inspection-onshore-vs-in-situ",
  "/offshore/rov-inspection",
  "/offshore/subsea-flowline-rigid-vs-flexible-inspection",
  "/offshore/tanker-ballast-tank-inspection-coating-and-thickness",
  "/offshore/underwater-ndt",
  "/standards",
  "/standards/dnv",
  "/standards/iacs",
  "/techniques",
  "/techniques/acfm",
  "/techniques/mfl-pipeline",
  "/vessels",
  "/vessels/container-ship",
  "/vessels/lng-carrier",
  "/vessels/tanker-hull"
];
export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(route => ({ url: "https://marine-offshore-ndt.vercel.app" + route }));
}
