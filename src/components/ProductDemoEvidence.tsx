import evidence from '@/data/product-demo-evidence.json';
export default function ProductDemoEvidence() {
  return <section className="container mx-auto px-6 py-12 prose prose-lg max-w-5xl" dangerouslySetInnerHTML={{__html:evidence.html}} />;
}
