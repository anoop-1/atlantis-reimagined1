import MoneyPageTemplate from "@/components/MoneyPageTemplate";
import { getBofuPost } from "@/data/bofu-posts";

export default function BofuBuildingACmlRegisterThatSurvivesTenYears() {
  const page = getBofuPost("building-a-cml-register-that-survives-ten-years");
  if (!page) return null;
  return <MoneyPageTemplate page={page} />;
}
