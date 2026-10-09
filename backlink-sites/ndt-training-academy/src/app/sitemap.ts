import type { MetadataRoute } from 'next';
const routes = [
  "/",
  "/atlantis-products-services",
  "/career",
  "/certifications",
  "/certifications/api-exam-prep",
  "/certifications/asnt-study-guide",
  "/curriculum",
  "/curriculum/building-an-ndt-school-business-model",
  "/curriculum/designing-a-level-ii-ut-course-syllabus",
  "/curriculum/designing-a-paut-level-ii-practical-program",
  "/curriculum/eye-exam-jaeger-near-vision-ndt-acceptance",
  "/curriculum/how-to-write-an-snt-tc-1a-employer-written-practice",
  "/curriculum/mt-and-pt-practical-stations-for-classroom-courses",
  "/curriculum/online-vs-in-person-ndt-courses-where-each-wins",
  "/curriculum/pcn-vs-cswip-vs-asnt-for-european-students",
  "/curriculum/practical-vs-theory-hours-snt-tc-1a-vs-cp-189",
  "/curriculum/scheduling-and-tracking-on-the-job-training-hours",
  "/industries-and-applications",
  "/regional",
  "/regional/india",
  "/regional/middle-east",
  "/regional/usa",
  "/regions-and-project-planning",
  "/training",
  "/training/mt-pt-training",
  "/training/rt-training",
  "/training/ut-training"
];
export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(route => ({ url: "https://ndt-training-academy.vercel.app" + route }));
}
