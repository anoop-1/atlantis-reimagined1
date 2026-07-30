import BusinessResourcePage from "@/components/BusinessResourcePage";
import { getBusinessResource } from "@/data/business-resources";

export default function ResQualificationAndCalibrationRegister() {
  const r = getBusinessResource("qualification-and-calibration-register");
  if (!r) return null;
  return <BusinessResourcePage resource={r} />;
}
