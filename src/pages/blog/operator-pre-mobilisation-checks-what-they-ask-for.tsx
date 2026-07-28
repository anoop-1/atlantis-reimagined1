import MoneyPageTemplate from "@/components/MoneyPageTemplate";
import { getBofuPost } from "@/data/bofu-posts";

export default function BofuOperatorPreMobilisationChecksWhatTheyAskFor() {
  const page = getBofuPost("operator-pre-mobilisation-checks-what-they-ask-for");
  if (!page) return null;
  return <MoneyPageTemplate page={page} />;
}
