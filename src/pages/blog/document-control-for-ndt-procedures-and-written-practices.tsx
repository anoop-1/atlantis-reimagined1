import MoneyPageTemplate from "@/components/MoneyPageTemplate";
import { getBofuPost } from "@/data/bofu-posts";

export default function BofuDocumentControlForNdtProceduresAndWrittenPractices() {
  const page = getBofuPost("document-control-for-ndt-procedures-and-written-practices");
  if (!page) return null;
  return <MoneyPageTemplate page={page} />;
}
