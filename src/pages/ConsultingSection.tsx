/**
 * NDT Level III consulting topic pages (owner, 2026-10-19): audit consulting, client and
 * subcontractor approval audits, SNT-TC-1A programme setup, documentation requirements,
 * regulatory compliance, ISO 9001 / 17020 / 17025. Same template as /inspection
 * (src/components/ServiceSectionPage.tsx). Model: src/data/consulting-section/index.mjs.
 */
import { useLocation } from "react-router-dom";
import ServiceSectionPage from "@/components/ServiceSectionPage";
import EnquiryCaptureForm from "@/components/EnquiryCaptureForm";
import { CONSULTING_SECTION } from "@/data/consulting-section/index.mjs";

export default function ConsultingSection() {
  const { pathname } = useLocation();
  return <ServiceSectionPage section={CONSULTING_SECTION} path={pathname} form={<EnquiryCaptureForm variant="consulting" />} />;
}
