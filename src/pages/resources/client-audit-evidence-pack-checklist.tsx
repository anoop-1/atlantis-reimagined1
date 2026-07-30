import BusinessResourcePage from "@/components/BusinessResourcePage";
import { getBusinessResource } from "@/data/business-resources";

export default function ResClientAuditEvidencePackChecklist() {
  const r = getBusinessResource("client-audit-evidence-pack-checklist");
  if (!r) return null;
  return <BusinessResourcePage resource={r} />;
}
