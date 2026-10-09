import type { MetadataRoute } from 'next';
const routes = [
  "/",
  "/api-510",
  "/atlantis-products-services",
  "/blog",
  "/blog/certification-currency-is-an-operations-problem-not-an-hr-one",
  "/blog/certification-records-national-contracts",
  "/blog/certification-tracking-software-api-510-570-653",
  "/blog/digital-twin-for-api-510-pressure-vessel-inspection",
  "/blog/what-employers-underestimate-about-certifying-technicians",
  "/study",
  "/study/api-510-vs-api-570-which-cert-first",
  "/study/api-570-piping-inspector-study-plan-2026",
  "/study/api-579-fitness-for-service-personnel-cert",
  "/study/api-580-rbi-prep-from-an-actual-exam-taker",
  "/study/api-653-aboveground-tank-inspector-prep",
  "/study/api-936-refractory-personnel-prep-real-syllabus",
  "/study/api-icp-recertification-2-cycle-cycle",
  "/study/api-source-inspection-personnel-program-explained",
  "/study/open-book-questions-api-510-test-strategy",
  "/study/study-plan-for-passing-multiple-api-exams-in-12-months"
];
export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(route => ({ url: "https://api-certification-guide.vercel.app" + route }));
}
