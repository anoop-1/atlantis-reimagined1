import BusinessResourcePage from "@/components/BusinessResourcePage";
import { getBusinessResource } from "@/data/business-resources";

export default function ResNdtSoftwareBuyerChecklist() {
  const r = getBusinessResource("ndt-software-buyer-checklist");
  if (!r) return null;
  return <BusinessResourcePage resource={r} />;
}
