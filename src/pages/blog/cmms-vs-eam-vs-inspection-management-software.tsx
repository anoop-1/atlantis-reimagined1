import MoneyPageTemplate from "@/components/MoneyPageTemplate";
import { getBofuPost } from "@/data/bofu-posts";

export default function BofuCmmsVsEamVsInspectionManagementSoftware() {
  const page = getBofuPost("cmms-vs-eam-vs-inspection-management-software");
  if (!page) return null;
  return <MoneyPageTemplate page={page} />;
}
