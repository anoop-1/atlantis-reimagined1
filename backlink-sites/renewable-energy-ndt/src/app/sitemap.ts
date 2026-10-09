import type { MetadataRoute } from 'next';
const routes = [
  "/",
  "/geothermal",
  "/guides/tower-blade-balance-plant-record-boundaries",
  "/renewables",
  "/renewables/csp-receiver-tube-inspection-concentrated-solar",
  "/renewables/floating-offshore-wind-inspection-emerging-practice",
  "/renewables/geothermal-well-casing-corrosion-and-inspection",
  "/renewables/green-hydrogen-pipeline-inspection-considerations",
  "/renewables/hydrogen-storage-vessel-inspection-considerations",
  "/renewables/pv-module-electroluminescence-and-infrared-inspection",
  "/renewables/tidal-and-wave-energy-asset-inspection-introduction",
  "/renewables/wind-blade-leading-edge-erosion-detection-and-repair",
  "/renewables/wind-turbine-foundation-grout-inspection-offshore",
  "/renewables/wind-turbine-gearbox-and-bearing-condition-monitoring",
  "/solar",
  "/wind"
];
export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(route => ({ url: "https://renewable-energy-ndt.vercel.app" + route }));
}
