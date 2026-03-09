import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Center } from "@react-three/drei";
import { Suspense, useRef, useEffect, useState } from "react";

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

const ModelPlaceholder = () => (
   <div className="w-full h-full bg-gradient-to-br from-green-200 to-green-300 flex items-center justify-center">
      <div className="text-center">
         <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600 mx-auto mb-2"></div>
         <p className="text-sm text-green-700">Loading 3D Model...</p>
      </div>
   </div>
);

export default function InteractivePlant({ modelPath }: { modelPath: string }) {
   const containerRef = useRef<HTMLDivElement>(null);
   const [isVisible, setIsVisible] = useState(false);

   useEffect(() => {
      const observer = new IntersectionObserver(
         ([entry]) => {
            if (entry.isIntersecting) {
               setIsVisible(true);
               observer.unobserve(entry.target);
            }
         },
         { threshold: 0.1 }
      );

      if (containerRef.current) {
         observer.observe(containerRef.current);
      }

      return () => {
         if (containerRef.current) {
            observer.unobserve(containerRef.current);
         }
      };
   }, []);

   return (
      <div ref={containerRef} className="w-full h-full relative overflow-hidden rounded-2xl">
         {isVisible ? (
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
         ) : (
            <ModelPlaceholder />
         )}
      </div>
   );
}
