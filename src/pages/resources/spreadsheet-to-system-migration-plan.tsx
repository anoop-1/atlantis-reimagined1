import BusinessResourcePage from "@/components/BusinessResourcePage";
import { getBusinessResource } from "@/data/business-resources";

export default function ResSpreadsheetToSystemMigrationPlan() {
  const r = getBusinessResource("spreadsheet-to-system-migration-plan");
  if (!r) return null;
  return <BusinessResourcePage resource={r} />;
}
