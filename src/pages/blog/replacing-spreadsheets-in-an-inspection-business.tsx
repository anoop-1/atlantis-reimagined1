import MoneyPageTemplate from "@/components/MoneyPageTemplate";
import { getBofuPost } from "@/data/bofu-posts";

export default function BofuReplacingSpreadsheetsInAnInspectionBusiness() {
  const page = getBofuPost("replacing-spreadsheets-in-an-inspection-business");
  if (!page) return null;
  return <MoneyPageTemplate page={page} />;
}
