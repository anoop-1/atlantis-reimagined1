import MoneyPageTemplate from "@/components/MoneyPageTemplate";
import { getBofuPost } from "@/data/bofu-posts";

export default function BofuTrackingAsntCertificationExpiryAtScale() {
  const page = getBofuPost("tracking-asnt-certification-expiry-at-scale");
  if (!page) return null;
  return <MoneyPageTemplate page={page} />;
}
