import MoneyPageTemplate from "@/components/MoneyPageTemplate";
import { getBofuPost } from "@/data/bofu-posts";

export default function BofuOfflineFieldDataCaptureForInspectionCrews() {
  const page = getBofuPost("offline-field-data-capture-for-inspection-crews");
  if (!page) return null;
  return <MoneyPageTemplate page={page} />;
}
