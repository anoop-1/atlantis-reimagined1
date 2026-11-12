/**
 * /maritime section (2026-11-07; moved from /maritime-inspection 2026-11-10): ship thickness measurement and hull/piping inspection for
 * ports in Europe, the Middle East and Egypt, China and Singapore. Same template as the inspection and
 * consulting sections (src/components/ServiceSectionPage.tsx), so the pages carry the site design.
 *
 * Only the record this page shows is loaded (one JSON per page via import.meta.glob); every other page
 * is a stub that is enough for breadcrumbs and links. The crawler builds the same model with every
 * record loaded (scripts/maritime-section-2026-11.mjs).
 */
import { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import ServiceSectionPage from "@/components/ServiceSectionPage";
import EnquiryCaptureForm from "@/components/EnquiryCaptureForm";
import { Navigation } from "@/components/Navigation";
import NotFound from "@/pages/NotFound";
import list from "@/data/maritime-section/city-list.json";
import comboList from "@/data/maritime-section/combo-list.json";
import { buildMaritimeSection, recordFor, type CityRow, type ComboRow } from "@/data/maritime-section/model.mjs";

const CITY_ROWS = (list as unknown as { cities: CityRow[] }).cities;
const CITY_FILES = import.meta.glob("../data/maritime-section/cities/*.json", { import: "default" });
const PAGE_FILES = import.meta.glob("../data/maritime-section/pages/*.json", { import: "default" });
const COMBO_ROWS = (comboList as unknown as { combos: ComboRow[] }).combos;
const COMBO_FILES = import.meta.glob("../data/maritime-section/combos/*.json", { import: "default" });
const DIR = { city: "cities", page: "pages", combo: "combos" } as const;

export default function MaritimeSection() {
  const { pathname } = useLocation();
  const want = recordFor(pathname, CITY_ROWS, COMBO_ROWS);
  const key = want ? `${want.kind}:${want.slug}` : "";
  const [loaded, setLoaded] = useState<{ key: string; rec: unknown } | null>(null);

  useEffect(() => {
    if (!want) return;
    const file = `../data/maritime-section/${DIR[want.kind]}/${want.slug}.json`;
    const load = (want.kind === "city" ? CITY_FILES : want.kind === "combo" ? COMBO_FILES : PAGE_FILES)[file];
    if (!load) return;
    let live = true;
    load().then((rec) => { if (live) setLoaded({ key, rec }); });
    return () => { live = false; };
  }, [key]); // eslint-disable-line react-hooks/exhaustive-deps

  const section = useMemo(
    () => (want && loaded?.key === key ? buildMaritimeSection(CITY_ROWS, { [want.slug]: loaded.rec }, COMBO_ROWS) : null),
    [key, loaded], // eslint-disable-line react-hooks/exhaustive-deps
  );

  if (!want) return <NotFound />;
  if (!section) return <div className="min-h-screen pt-20"><Navigation /></div>;
  return <ServiceSectionPage section={section} path={pathname} form={<EnquiryCaptureForm variant="maritime" />} />;
}
