import MoneyPageTemplate from "@/components/MoneyPageTemplate";
import { getBofuPost } from "@/data/bofu-posts";

export default function BofuMultiCrewInspectionSchedulingWithoutDoubleBooking() {
  const page = getBofuPost("multi-crew-inspection-scheduling-without-double-booking");
  if (!page) return null;
  return <MoneyPageTemplate page={page} />;
}
