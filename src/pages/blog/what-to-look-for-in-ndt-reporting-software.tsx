import MoneyPageTemplate from "@/components/MoneyPageTemplate";
import { getBofuPost } from "@/data/bofu-posts";

export default function BofuWhatToLookForInNdtReportingSoftware() {
  const page = getBofuPost("what-to-look-for-in-ndt-reporting-software");
  if (!page) return null;
  return <MoneyPageTemplate page={page} />;
}
