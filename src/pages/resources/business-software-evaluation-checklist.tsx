import BusinessResourcePage from "@/components/BusinessResourcePage";
import { getBusinessResource } from "@/data/business-resources";

export default function ResBusinessSoftwareEvaluationChecklist() {
  const r = getBusinessResource("business-software-evaluation-checklist");
  if (!r) return null;
  return <BusinessResourcePage resource={r} />;
}
