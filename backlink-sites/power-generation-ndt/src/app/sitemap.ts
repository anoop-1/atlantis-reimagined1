import type { MetadataRoute } from 'next';
const routes = [
  "/",
  "/atlantis-products-services",
  "/career/salary-guide",
  "/components",
  "/components/boiler-tubes",
  "/components/condenser-tubes",
  "/components/hrsg",
  "/components/steam-turbine",
  "/industries-and-applications",
  "/plant",
  "/plant-types",
  "/plant-types/boiler",
  "/plant-types/gas-turbine",
  "/plant-types/nuclear",
  "/plant-types/wind-turbine",
  "/plant/boiler-tube-inspection-program-for-fossil-plants",
  "/plant/condenser-tube-inspection-for-power-plants",
  "/plant/cooling-tower-structural-inspection-fiberglass-and-concrete",
  "/plant/gas-turbine-hot-section-inspection-borescope-and-fpi",
  "/plant/generator-stator-and-rotor-ndt-techniques",
  "/plant/hrsg-tube-inspection-for-combined-cycle-plants",
  "/plant/inspection-of-wind-turbine-tower-flange-bolts",
  "/plant/solar-pv-tracker-and-mounting-structure-inspection",
  "/plant/steam-piping-creep-damage-monitoring-program",
  "/plant/turbine-blade-root-inspection-eddy-current-and-paut",
  "/regions-and-project-planning",
  "/standards",
  "/technology",
  "/technology/digital-twins-power",
  "/technology/rbi-power-plants"
];
export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(route => ({ url: "https://power-generation-ndt.vercel.app" + route }));
}
