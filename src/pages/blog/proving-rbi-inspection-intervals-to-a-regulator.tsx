import MoneyPageTemplate from "@/components/MoneyPageTemplate";
import { getBofuPost } from "@/data/bofu-posts";

export default function BofuProvingRbiInspectionIntervalsToARegulator() {
  const page = getBofuPost("proving-rbi-inspection-intervals-to-a-regulator");
  if (!page) return null;
  return <MoneyPageTemplate page={page} />;
}
