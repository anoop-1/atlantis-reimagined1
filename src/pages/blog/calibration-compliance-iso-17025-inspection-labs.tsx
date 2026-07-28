import MoneyPageTemplate from "@/components/MoneyPageTemplate";
import { getBofuPost } from "@/data/bofu-posts";

export default function BofuCalibrationComplianceIso17025InspectionLabs() {
  const page = getBofuPost("calibration-compliance-iso-17025-inspection-labs");
  if (!page) return null;
  return <MoneyPageTemplate page={page} />;
}
