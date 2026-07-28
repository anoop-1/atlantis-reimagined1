import MoneyPageTemplate from "@/components/MoneyPageTemplate";
import { getBofuPost } from "@/data/bofu-posts";

export default function BofuPassingAnApi653ClientAuditEvidencePack() {
  const page = getBofuPost("passing-an-api-653-client-audit-evidence-pack");
  if (!page) return null;
  return <MoneyPageTemplate page={page} />;
}
