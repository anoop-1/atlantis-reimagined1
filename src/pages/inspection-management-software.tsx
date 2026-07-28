import MoneyPageTemplate from "@/components/MoneyPageTemplate";
import { getMoneyPage } from "@/data/money-pages";

export default function InspectionManagementSoftware() {
  const page = getMoneyPage("inspection-management-software");
  if (!page) return null;
  return <MoneyPageTemplate page={page} />;
}
