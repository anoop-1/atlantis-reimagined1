/**
 * /careers/{job} — one job description page per open position (owner, 2026-11-20).
 * Same model as /careers: src/data/careers-2026-11.json through careerJobHtml() and jobPostingSchema()
 * (src/data/careers-2026-11.mjs); the crawler (scripts/careers-page.mjs) renders the same HTML.
 */
import type { MouseEvent } from "react";
import { useLocation, Navigate } from "react-router-dom";
import { SEOHead } from "@/components/SEOHead";
import { Navigation } from "@/components/Navigation";
import ContactDetails from "@/components/ContactDetails";
import data from "@/data/careers-2026-11.json";
import { careerJobHtml, jobPostingSchema, jobFor } from "@/data/careers-2026-11.mjs";
import type { CareersData } from "@/data/careers-2026-11.mjs";
import { trackEngagement } from "@/lib/enquiry-analytics";

const careers = data as unknown as CareersData;

export default function CareerJob() {
  const { pathname } = useLocation();
  const job = jobFor(careers, pathname);
  if (!job) return <Navigate to="/careers" replace />;
  const html = careerJobHtml(careers, job);
  // Our own JSON, escaped by careerJobHtml(); no user input reaches it.
  const onClick = (e: MouseEvent<HTMLElement>) => {
    const a = (e.target as HTMLElement).closest("a[data-career-apply], a[href^='tel:']");
    if (!a) return;
    if (a.getAttribute("data-career-apply")) trackEngagement("careers_apply_click", { job: job.slug });
    else trackEngagement("careers_phone_click", { job: job.slug });
  };
  return (
    <div className="min-h-screen pt-20">
      <Navigation />
      <SEOHead
        title={job.title}
        description={job.description}
        canonical={`https://atlantisndt.com${job.path}`}
        structuredData={jobPostingSchema(careers, job)}
      />
      <main onClick={onClick} dangerouslySetInnerHTML={{ __html: html }} />
      <ContactDetails />
    </div>
  );
}
