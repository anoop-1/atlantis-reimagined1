import type { MetadataRoute } from 'next';
const routes = [
  "/",
  "/blog",
  "/blog/digital-twin-for-composite-structure-integrity",
  "/blog/managing-composite-inspection-data-in-erp",
  "/blog/why-composite-inspection-records-are-harder-than-metal",
  "/defects",
  "/guides/composite-inspection-access-brief",
  "/guides/reference-panel-geometry-records-for-repeat-review",
  "/methods",
  "/resource-library",
  "/techniques",
  "/techniques/cfrp-phased-array-vs-thermography-which-finds-disbonds",
  "/techniques/composite-bolted-joint-inspection-aerospace",
  "/techniques/composite-overwrapped-pressure-vessel-copv-inspection",
  "/techniques/composite-repair-patch-inspection-and-validation",
  "/techniques/pulse-thermography-vs-lock-in-thermography-quick-decision-guide",
  "/techniques/sandwich-panel-honeycomb-core-defects-and-detection",
  "/techniques/shearography-on-composite-pressure-vessels",
  "/techniques/visual-inspection-of-composite-tooling-cure-defects",
  "/techniques/wind-blade-inspection-from-rope-access-to-drones",
  "/techniques/wind-blade-trailing-edge-bond-line-inspection"
];
export default function sitemap(): MetadataRoute.Sitemap { return routes.map(route => ({ url: "https://composite-testing-hub.vercel.app" + route })); }
