/**
 * NDT report validation section (2026-11-23): the hub /report-validation and its industry, method, digital-review and
 * city pages /report-validation/{slug}. Same template as the inspection, consulting, maritime and RBI sections
 * (src/components/ServiceSectionPage.tsx). The hub record is bundled; a child page loads only its own record (one JSON
 * per page via import.meta.glob). The crawler builds the same model with every record
 * (scripts/report-validation-section-2026-11.mjs). The older review guides under /report-validation/* keep their own
 * explicit routes on the depth-page system, which React Router ranks above the :slug route.
 */
import { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import ServiceSectionPage from "@/components/ServiceSectionPage";
import EnquiryCaptureForm from "@/components/EnquiryCaptureForm";
import { Navigation } from "@/components/Navigation";
import NotFound from "@/pages/NotFound";
import list from "@/data/report-validation-section/list.json";
import root from "@/data/report-validation-section/root.json";
import { buildRvSection, pathFor, recordFor, type RvRow } from "@/data/report-validation-section/model.mjs";

const FILES = import.meta.glob("../data/report-validation-section/pages/*.json", { import: "default" });
const fileFor = (slug: string) => `../data/report-validation-section/pages/${slug}.json`;
// Only rows with a record are published (a planned row without pages/{slug}.json is a 404).
const ROWS = (list as unknown as { pages: RvRow[] }).pages.filter((r) => FILES[fileFor(r.slug)]);

export default function ReportValidationSection() {
  const { pathname } = useLocation();
  const slug = recordFor(pathname, ROWS);
  const [loaded, setLoaded] = useState<{ slug: string; rec: unknown } | null>(null);

  useEffect(() => {
    if (!slug) return;
    const load = FILES[fileFor(slug)];
    if (!load) return;
    let live = true;
    load().then((rec) => { if (live) setLoaded({ slug, rec }); });
    return () => { live = false; };
  }, [slug]);

  const section = useMemo(() => {
    if (slug === null) return buildRvSection(ROWS, {}, root);
    if (slug && loaded?.slug === slug) return buildRvSection(ROWS, { [slug]: loaded.rec }, root);
    return null;
  }, [slug, loaded]);

  if (slug === undefined) return <NotFound />;
  if (!section) return <div className="min-h-screen pt-20"><Navigation /></div>;
  return <ServiceSectionPage section={section} path={slug ? pathFor(slug) : pathname.replace(/\/+$/, "")} form={<EnquiryCaptureForm variant="validation" />} />;
}
