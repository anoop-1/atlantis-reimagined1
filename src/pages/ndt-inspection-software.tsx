import MoneyPageTemplate from "@/components/MoneyPageTemplate";
import { getMoneyPage } from "@/data/money-pages";

export default function NdtInspectionSoftware() {
  const page = getMoneyPage("ndt-inspection-software");
  if (!page) return null;
  return <MoneyPageTemplate page={page} />;
}
