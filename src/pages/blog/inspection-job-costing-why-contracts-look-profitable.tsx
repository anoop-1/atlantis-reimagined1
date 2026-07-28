import MoneyPageTemplate from "@/components/MoneyPageTemplate";
import { getBofuPost } from "@/data/bofu-posts";

export default function BofuInspectionJobCostingWhyContractsLookProfitable() {
  const page = getBofuPost("inspection-job-costing-why-contracts-look-profitable");
  if (!page) return null;
  return <MoneyPageTemplate page={page} />;
}
