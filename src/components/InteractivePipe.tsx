import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Suspense } from "react";

interface InteractivePipeProps {
   modelPath: string; // path to GLB
   scale?: number;
   position?: [number, number, number];
}

function Model({
   modelPath,
   scale = 2.5,
   position = [0, 0, 0],
}: InteractivePipeProps) {
   const { scene } = useGLTF(modelPath);
   return <primitive object={scene} scale={scale} position={position} />;
}

export default function InteractivePipe({
   modelPath,
}: {
   modelPath: string;
}) {
   return (
      <div className="w-full h-full relative overflow-hidden rounded-2xl">
         <Canvas camera={{ position: [90, 0, 10], fov: 45 }}>
            <ambientLight intensity={0.8} />
            <directionalLight position={[5, 5, 5]} intensity={1.2} />
            <pointLight position={[-5, -5, -5]} intensity={0.4} />

            <Suspense fallback={null}>
               <Model modelPath={modelPath} />
            </Suspense>

            <OrbitControls
               enableRotate={true}
               enableZoom={true}
               enablePan={true}
               minDistance={2}
               maxDistance={60}
               rotateSpeed={0.8}
               zoomSpeed={1.2}
               panSpeed={0.8}
            />
         </Canvas>
      </div>
   );
}
