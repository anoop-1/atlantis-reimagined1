import type { MetadataRoute } from 'next';
const routes = [
  "/",
  "/atlantis-products-services",
  "/industries-and-applications",
  "/regions-and-project-planning",
  "/tube-inspection",
  "/tubes",
  "/tubes/air-cooler-header-box-inspection-for-cracks",
  "/tubes/air-cooler-tube-bundle-inspection-program",
  "/tubes/cleaning-tubes-before-ndt-why-it-decides-everything",
  "/tubes/expansion-joint-inspection-on-shell-and-tube-exchangers",
  "/tubes/fouling-vs-corrosion-tube-signal-interpretation",
  "/tubes/iris-vs-ecit-vs-rfet-tube-inspection-decision",
  "/tubes/plugging-vs-retubing-heat-exchanger-economics",
  "/tubes/shell-and-tube-vs-plate-frame-inspection-realities",
  "/tubes/tube-bundle-extraction-and-rebundling-decisions",
  "/tubes/tube-to-tubesheet-weld-inspection-techniques"
];
export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(route => ({ url: "https://heat-exchanger-ndt.vercel.app" + route }));
}
