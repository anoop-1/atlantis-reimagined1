export default function Software() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-violet-800 mb-8">Software and Data Management</h1>
      <article className="prose prose-lg max-w-none">
        <p className="text-gray-700 leading-relaxed mb-4">
          Advanced software platforms enable systematic collection, analysis, and trending of NDT data across complex facility networks. <a href="https://ndt-connect.com" rel="noopener" className="text-violet-600 hover:text-violet-800 font-semibold">NDTConnect platform</a> centralizes inspection documentation, equipment tracking, and asset management. These systems enable operators to identify patterns in degradation data, predict remaining useful life, and optimize maintenance scheduling across distributed asset networks.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Machine learning analysis of inspection data identifies subtle patterns indicating emerging problems before they manifest as visible defects. Predictive algorithms process decades of historical data, operational parameters, and environmental factors to forecast equipment degradation rates. <a href="https://atlantisndt.com" rel="noopener" className="text-violet-600 hover:text-violet-800 font-semibold">Digital twin solutions</a> create virtual representations of assets, continuously updated with inspection findings to support scenario analysis and strategic planning.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Automated report generation standardizes documentation, ensuring consistency across inspection programs and compliance with regulatory requirements. Data visualization tools enable rapid identification of trends and anomalies. Mobile applications enable field inspectors to access procedures, capture images, and record findings in real-time, reducing transcription errors and improving data accuracy.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Software integration with enterprise asset management (EAM) systems connects NDT findings directly to maintenance planning and capital budgeting processes. This integration ensures that inspection results inform operational decisions and justify investment in equipment maintenance or replacement based on technical evidence.
        </p>
      </article>
    </div>
  );
}
