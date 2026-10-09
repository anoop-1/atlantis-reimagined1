import type { MetadataRoute } from 'next';
const routes = [
  "/",
  "/above-ground",
  "/blog",
  "/blog/tank-programme-evidence-chain-what-auditors-read",
  "/maintenance",
  "/tanks",
  "/tanks/api-650-construction-ndt-acceptance-walkthrough",
  "/tanks/api-653-out-of-service-internal-inspection-checklist",
  "/tanks/asphalt-and-fuel-oil-tank-inspection-considerations",
  "/tanks/floating-roof-seal-inspection-and-leak-detection",
  "/tanks/soil-side-corrosion-on-tank-floors-and-detection",
  "/tanks/tank-floor-mfl-vs-paut-which-fits-the-job",
  "/tanks/tank-relocation-and-reerection-ndt-rules",
  "/tanks/tank-roof-pontoon-leak-detection-vacuum-box",
  "/tanks/tank-secondary-containment-inspection-and-integrity",
  "/tanks/tank-shell-thickness-program-with-out-of-service-inspection",
  "/underground"
];
export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(route => ({ url: "https://tank-inspection-resource.vercel.app" + route }));
}
