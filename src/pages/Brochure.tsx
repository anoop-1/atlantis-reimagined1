/**
 * /brochure — view and download the Atlantis NDT company brochure 2026 (owner, 2026-11-07).
 * Linked from the site footer. One model for both layers: src/data/brochure-2026.json rendered
 * by brochureHtml() (src/data/brochure-2026.mjs); the crawler (scripts/brochure-page.mjs) uses
 * the same function, so visitors and Google read the same HTML.
 */
import type { MouseEvent } from "react";
import { SEOHead } from "@/components/SEOHead";
import { Navigation } from "@/components/Navigation";
import ContactDetails from "@/components/ContactDetails";
import data from "@/data/brochure-2026.json";
import { brochureHtml, brochureSchema } from "@/data/brochure-2026.mjs";
import type { Brochure as BrochureData } from "@/data/brochure-2026.mjs";
import { trackEngagement } from "@/lib/enquiry-analytics";

const brochure = data as unknown as BrochureData;
const html = brochureHtml(brochure);

export default function Brochure() {
  // Our own JSON, escaped by brochureHtml(); no user input reaches it.
  const onClick = (e: MouseEvent<HTMLElement>) => {
    const a = (e.target as HTMLElement).closest("a[data-brochure]");
    if (a) trackEngagement("brochure_" + a.getAttribute("data-brochure"), { file: brochure.pdfName });
  };
  return (
    <div className="min-h-screen pt-20">
      <Navigation />
      <SEOHead
        title={brochure.title}
        description={brochure.description}
        canonical={`https://atlantisndt.com${brochure.path}`}
        structuredData={brochureSchema(brochure)}
      />
      <main onClick={onClick} dangerouslySetInnerHTML={{ __html: html }} />
      <ContactDetails />
    </div>
  );
}
