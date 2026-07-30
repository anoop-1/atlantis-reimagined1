import BusinessResourcePage from "@/components/BusinessResourcePage";
import { getBusinessResource } from "@/data/business-resources";

export default function ResContractMarginWorksheet() {
  const r = getBusinessResource("contract-margin-worksheet");
  if (!r) return null;
  return <BusinessResourcePage resource={r} />;
}
