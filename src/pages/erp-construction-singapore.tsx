import MoneyPageTemplate from "@/components/MoneyPageTemplate";
import { getMoneyPage } from "@/data/money-pages";

export default function ErpConstructionSingapore() {
  const page = getMoneyPage("erp-construction-singapore");
  if (!page) return null;
  return <MoneyPageTemplate page={page} />;
}
