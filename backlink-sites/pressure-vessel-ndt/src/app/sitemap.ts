import type { MetadataRoute } from 'next';
const routes = [
  "/",
  "/design",
  "/fabrication",
  "/guides/repair-zone-sketches-drawing-revision-traceability",
  "/guides/vessel-thickness-weld-repair-scope",
  "/operation",
  "/operation/api-510-internal-vs-external-inspection-decision",
  "/operation/asme-section-viii-fabrication-ndt-requirements-walkthrough",
  "/operation/corrosion-monitoring-locations-cml-selection-guide",
  "/operation/long-range-ut-screening-pressure-vessels",
  "/operation/low-temperature-vessel-impact-test-requirements",
  "/operation/on-stream-inspection-with-pulsed-eddy-current",
  "/operation/pressure-vessel-nozzle-weld-inspection-deep-dive",
  "/operation/pressure-vessel-thermal-relief-valve-and-prv-tie-ins",
  "/operation/reformer-tubes-creep-damage-monitoring-strategies",
  "/operation/rerating-pressure-vessels-when-it-is-worth-it",
  "/resource-library"
];
export default function sitemap(): MetadataRoute.Sitemap { return routes.map(route => ({ url: "https://pressure-vessel-ndt.vercel.app" + route })); }
