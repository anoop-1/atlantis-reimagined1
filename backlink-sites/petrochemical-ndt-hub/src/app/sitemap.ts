import type { MetadataRoute } from 'next';
const routes = [
  "/",
  "/atlantis-products-services",
  "/equipment",
  "/industries-and-applications",
  "/processes",
  "/processes/amine-unit-corrosion-monitoring-and-ut-strategies",
  "/processes/coker-drum-inspection-program-bulge-and-crack",
  "/processes/crude-furnace-tube-inspection-laser-and-paut",
  "/processes/fcc-unit-inspection-priority-equipment-and-damage-mechanisms",
  "/processes/high-temperature-hydrogen-attack-htha-inspection-strategy",
  "/processes/hydroprocessing-reactor-internals-inspection-2026",
  "/processes/naphthenic-acid-corrosion-inspection-strategy",
  "/processes/sru-and-tail-gas-unit-inspection-corrosion-realities",
  "/processes/sulfidation-corrosion-crude-units-monitoring-program",
  "/processes/turnaround-inspection-planning-petrochemical-shutdown",
  "/regions-and-project-planning",
  "/safety"
];
export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(route => ({ url: "https://petrochemical-ndt-hub.vercel.app" + route }));
}
