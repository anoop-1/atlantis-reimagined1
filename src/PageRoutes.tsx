import { lazy } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
const RouteTable = lazy(() => import("./RouteTable"));
const About = lazy(() => import("./pages/About"));
const BlogPage = lazy(() => import("./pages/Blog"));
const CaseStudiesHub = lazy(() => import("./pages/CaseStudiesHub"));
const ConsultingServices = lazy(() => import("./pages/ConsultingServices"));
const ConsultingServicesIndia = lazy(() => import("./pages/ConsultingServices-India"));
const ConsultingServicesMiddleEast = lazy(() => import("./pages/ConsultingServices-ME"));
const ConsultingServicesUSA = lazy(() => import("./pages/ConsultingServices-USA"));
const Contact = lazy(() => import("./pages/Contact"));
const DigitalTwinReporting = lazy(() => import("./pages/digital-twin-reporting"));
const DigitalTwins = lazy(() => import("./pages/DigitalTwins"));
const Erp = lazy(() => import("./pages/Erp"));
const ErpAppsHub = lazy(() => import("./pages/ErpAppsHub"));
const ErpPricing = lazy(() => import("./pages/ErpPricing"));
const FreeTrial = lazy(() => import("./pages/FreeTrial"));
const Index = lazy(() => import("./pages/Index"));
const InspectionManagementSoftware = lazy(() => import("./pages/inspection-management-software"));
const InspectionServices = lazy(() => import("./pages/InspectionServices"));
const NDTConsultingLevelIII = lazy(() => import("./pages/ndt-consulting-level-iii"));
const NDTTrainingOnline = lazy(() => import("./pages/ndt-training-online"));
const NdtErpIntegrationMatrix = lazy(() => import("./pages/NdtErpIntegrationMatrix"));
const NdtInspectionSoftware = lazy(() => import("./pages/ndt-inspection-software"));
const PracticalNdt = lazy(() => import("./pages/PracticalNdt"));
const ThreeDScanning = lazy(() => import("./pages/ThreeDScanning"));
const ToolsHub = lazy(() => import("./pages/tools/index"));
const Training = lazy(() => import("./pages/Training"));
const TrainingIndia = lazy(() => import("./pages/Training-India"));
const TrainingMiddleEast = lazy(() => import("./pages/Training-ME"));
const TrainingUSA = lazy(() => import("./pages/Training-USA"));
const UltrasonicAscanSimulator = lazy(() => import("./pages/tools/UltrasonicAscanSimulator"));
const fastPaths = new Set(["/", "/about", "/contact", "/training", "/training-usa", "/training-me", "/training-india", "/consulting", "/consulting-usa", "/consulting-me", "/consulting-india", "/erp", "/erp/pricing", "/erp/apps", "/free-trial", "/ndt-erp-integration-matrix", "/ndt-inspection-software", "/inspection-management-software", "/practical-ndt", "/digital-twins", "/digital-twin-reporting", "/inspection-services", "/3d-scanning-services", "/ndt-training-online", "/consulting/ndt-consulting-level-iii", "/tools/ultrasonic-a-scan-simulator", "/tools", "/blog", "/case-studies"]);
export default function PageRoutes() {
 const {pathname} = useLocation();
 const path = pathname.replace(/\/+$/, "").toLowerCase() || "/";
 if (!fastPaths.has(path)) return <RouteTable />;
 return <Routes>
<Route path="/" element={<Index />} />
<Route path="/about" element={<About />} />
<Route path="/contact" element={<Contact />} />
<Route path="/training" element={<Training />} />
<Route path="/training-usa" element={<TrainingUSA />} />
<Route path="/training-me" element={<TrainingMiddleEast />} />
<Route path="/training-india" element={<TrainingIndia />} />
<Route path="/consulting" element={<ConsultingServices />} />
<Route path="/consulting-usa" element={<ConsultingServicesUSA />} />
<Route path="/consulting-me" element={<ConsultingServicesMiddleEast />} />
<Route path="/consulting-india" element={<ConsultingServicesIndia />} />
<Route path="/erp" element={<Erp />} />
<Route path="/erp/pricing" element={<ErpPricing />} />
<Route path="/erp/apps" element={<ErpAppsHub />} />
<Route path="/free-trial" element={<FreeTrial />} />
<Route path="/ndt-erp-integration-matrix" element={<NdtErpIntegrationMatrix />} />
<Route path="/ndt-inspection-software" element={<NdtInspectionSoftware />} />
<Route path="/inspection-management-software" element={<InspectionManagementSoftware />} />
<Route path="/practical-ndt" element={<PracticalNdt />} />
<Route path="/digital-twins" element={<DigitalTwins />} />
<Route path="/digital-twin-reporting" element={<DigitalTwinReporting />} />
<Route path="/inspection-services" element={<InspectionServices />} />
<Route path="/3d-scanning-services" element={<ThreeDScanning />} />
<Route path="/ndt-training-online" element={<NDTTrainingOnline />} />
<Route path="/consulting/ndt-consulting-level-iii" element={<NDTConsultingLevelIII />} />
<Route path="/tools/ultrasonic-a-scan-simulator" element={<UltrasonicAscanSimulator />} />
<Route path="/tools" element={<ToolsHub />} />
<Route path="/blog" element={<BlogPage />} />
<Route path="/case-studies" element={<CaseStudiesHub />} />
</Routes>;
}
