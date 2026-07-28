import MoneyPageTemplate from "@/components/MoneyPageTemplate";
import { getMoneyPage } from "@/data/money-pages";

export default function ErpOilGasMalaysia() {
  const page = getMoneyPage("erp-oil-gas-malaysia");
  if (!page) return null;
  return <MoneyPageTemplate page={page} />;
}
