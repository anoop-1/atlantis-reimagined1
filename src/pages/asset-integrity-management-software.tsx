import MoneyPageTemplate from "@/components/MoneyPageTemplate";
import { getMoneyPage } from "@/data/money-pages";

export default function AssetIntegrityManagementSoftware() {
  const page = getMoneyPage("asset-integrity-management-software");
  if (!page) return null;
  return <MoneyPageTemplate page={page} />;
}
