/**
 * /careers — open positions at Atlantis NDT (owner, 2026-11-20). Linked from the site footer and /about.
 * One model for both layers: src/data/careers-2026-11.json rendered by careersHubHtml()
 * (src/data/careers-2026-11.mjs); the crawler (scripts/careers-page.mjs) uses the same function.
 */
import type { MouseEvent } from "react";
import { SEOHead } from "@/components/SEOHead";
import { Navigation } from "@/components/Navigation";
import ContactDetails from "@/components/ContactDetails";
import data from "@/data/careers-2026-11.json";
import { careersHubHtml, careersHubSchema } from "@/data/careers-2026-11.mjs";
import type { CareersData } from "@/data/careers-2026-11.mjs";
import { trackEngagement } from "@/lib/enquiry-analytics";

const careers = data as unknown as CareersData;

export default function Careers() {
  const html = careersHubHtml(careers);
  // Our own JSON, escaped by careersHubHtml(); no user input reaches it.
  const onClick = (e: MouseEvent<HTMLElement>) => {
    const a = (e.target as HTMLElement).closest("a[data-career-apply], a[data-career]");
    if (!a) return;
    const apply = a.getAttribute("data-career-apply");
    if (apply) trackEngagement("careers_apply_click", { job: apply });
    else trackEngagement("careers_job_click", { job: a.getAttribute("data-career") || "" });
  };
  return (
    <div className="min-h-screen pt-20">
      <Navigation />
      <SEOHead
        title={careers.hub.title}
        description={careers.hub.description}
        canonical={`https://atlantisndt.com${careers.hub.path}`}
        structuredData={careersHubSchema(careers)}
      />
      <main onClick={onClick} dangerouslySetInnerHTML={{ __html: html }} />
      <ContactDetails />
    </div>
  );
}
