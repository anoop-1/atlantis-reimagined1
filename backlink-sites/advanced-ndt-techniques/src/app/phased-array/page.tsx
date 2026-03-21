export default function PhasedArray() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-violet-800 mb-8">Phased Array Ultrasonic Testing</h1>
      <article className="prose prose-lg max-w-none">
        <p className="text-gray-700 leading-relaxed mb-4">
          Phased array technology has revolutionized ultrasonic inspection capability through electronic beam steering. Linear arrays with 16, 32, or 64 elements enable sweep of sound beams across wide angular ranges without mechanical repositioning. This allows complete weld coverage from single access points, dramatically reducing inspection time and improving repeatability. ASME BPVC Section V now recognizes phased array as equivalent or superior to conventional ultrasonics for pressure equipment inspection.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Time-of-flight diffraction (TOFD) complements phased array by providing three-dimensional flaw imaging and precise depth measurement. TOFD's superior sensitivity to small cracks makes it the reference standard for validation. In critical applications, dual-technique examination (PAUT plus TOFD) provides redundant detection ensuring high-confidence assessment. <a href="https://atlantisndt.com" rel="noopener" className="text-violet-600 hover:text-violet-800 font-semibold">NDT training programs</a> develop expertise in these sophisticated techniques.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Full matrix capture (FMC) combined with total focusing method (TFM) processing enables creation of virtual images of inspected regions with unprecedented clarity. These advanced processing approaches leverage increased computing power to extract maximum information from collected ultrasonic data. Machine learning algorithms now augment traditional interpretation, improving consistency and reducing human error.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Phased array ultrasonics continue evolving with increased array element counts, faster data acquisition, and improved signal processing. These advancements translate to superior defect detection probability and more confident sizing of indications, supporting defensible operational decisions for critical equipment.
        </p>
      </article>
    </div>
  );
}
