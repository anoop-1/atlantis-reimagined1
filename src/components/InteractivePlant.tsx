import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Center } from "@react-three/drei";
import { Suspense } from "react";

interface InteractivePlantProps {
   modelPath: string;
   scale?: number;
   position?: [number, number, number];
}

function Model({ modelPath, scale = 2.5 }: InteractivePlantProps) {
   const { scene } = useGLTF(modelPath);
   return (
      <Center>
         <primitive object={scene} scale={scale} />
      </Center>
   );
}

export default function InteractivePlant({ modelPath }: { modelPath: string }) {
   return (
      <div className="w-full h-full relative overflow-hidden rounded-2xl">
         <Canvas camera={{ position: [0, 0, 120], fov: 45 }}>
            <ambientLight intensity={0.8} />
            <directionalLight position={[5, 5, 5]} intensity={1.2} />
            <pointLight position={[-5, -5, -5]} intensity={0.4} />

            <Suspense fallback={null}>
               <Model modelPath={modelPath} />
            </Suspense>

            <OrbitControls
               enableRotate
               enableZoom
               enablePan
               minDistance={2}
               maxDistance={100}
               rotateSpeed={0.8}
               zoomSpeed={1.2}
               panSpeed={0.8}
            />
         </Canvas>
      </div>
   );
}
