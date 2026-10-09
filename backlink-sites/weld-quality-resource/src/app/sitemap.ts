import type { MetadataRoute } from 'next';
const routes = [
  "/",
  "/defects",
  "/guides/repair-reexamination-evidence-chronology",
  "/methods",
  "/methods/aws-d1-1-weld-acceptance-cracks-vs-incomplete-fusion",
  "/methods/duplex-stainless-weld-inspection-watchouts",
  "/methods/orbital-welding-inspection-semiconductor-pharma-piping",
  "/methods/phased-array-vs-radiography-girth-welds-which-finds-more",
  "/methods/visual-weld-inspection-vt-pitfalls-cwi-experience",
  "/methods/weld-distortion-vs-residual-stress-different-problems",
  "/methods/weld-inspection-for-cryogenic-services-9-percent-nickel",
  "/methods/weld-mapping-as-a-quality-discipline",
  "/methods/weld-repair-vs-replace-decisions-on-pressure-piping",
  "/methods/welder-qualification-vs-procedure-qualification-records"
];
export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(route => ({ url: "https://weld-quality-resource.vercel.app" + route }));
}
