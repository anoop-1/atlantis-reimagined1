/**
 * Risk-based inspection (RBI) pages under /inspection/risk-based-inspection/{slug} (2026-11-23, owner: RBI as a
 * remote service; topics, countries and tank/refining hubs). Same template as the inspection, consulting and
 * maritime sections (src/components/ServiceSectionPage.tsx). Only the record this page shows is loaded (one JSON
 * per page via import.meta.glob); the crawler builds the same model with every record (scripts/rbi-section-2026-11.mjs).
 */
import { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import ServiceSectionPage from "@/components/ServiceSectionPage";
import EnquiryCaptureForm from "@/components/EnquiryCaptureForm";
import { Navigation } from "@/components/Navigation";
import NotFound from "@/pages/NotFound";
import list from "@/data/rbi-section/list.json";
import { buildRbiSection, recordFor, type RbiRow } from "@/data/rbi-section/model.mjs";

const ROWS = (list as unknown as { pages: RbiRow[] }).pages;
const FILES = import.meta.glob("../data/rbi-section/pages/*.json", { import: "default" });

export default function RbiSection() {
  const { pathname } = useLocation();
  const slug = recordFor(pathname, ROWS);
  const [loaded, setLoaded] = useState<{ slug: string; rec: unknown } | null>(null);

  useEffect(() => {
    if (!slug) return;
    const load = FILES[`../data/rbi-section/pages/${slug}.json`];
    if (!load) return;
    let live = true;
    load().then((rec) => { if (live) setLoaded({ slug, rec }); });
    return () => { live = false; };
  }, [slug]);

  const section = useMemo(
    () => (slug && loaded?.slug === slug ? buildRbiSection(ROWS, { [slug]: loaded.rec }) : null),
    [slug, loaded],
  );

  // A planned page that is not written yet (list.json row without a pages/{slug}.json) is a 404, not a blank page.
  if (!slug || !FILES[`../data/rbi-section/pages/${slug}.json`]) return <NotFound />;
  if (!section) return <div className="min-h-screen pt-20"><Navigation /></div>;
  return <ServiceSectionPage section={section} path={pathname} form={<EnquiryCaptureForm variant="rbi" />} />;
}
