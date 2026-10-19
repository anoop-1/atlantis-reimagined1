/**
 * /inspection section (2026-10-18; shared template 2026-10-19). The page itself is
 * src/components/ServiceSectionPage.tsx, so the inspection and Level III consulting sections share
 * one design that matches the rest of the site. Model: src/data/inspection-section/index.mjs.
 */
import { useLocation } from "react-router-dom";
import ServiceSectionPage from "@/components/ServiceSectionPage";
import InspectionRfqWizard from "@/components/InspectionRfqWizard";
import { INSPECTION_SECTION } from "@/data/inspection-section/index.mjs";

export default function InspectionSection() {
  const { pathname } = useLocation();
  return <ServiceSectionPage section={INSPECTION_SECTION} path={pathname} form={<InspectionRfqWizard />} />;
}
