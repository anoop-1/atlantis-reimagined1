// // components/InteractiveModel.tsx
// import { Canvas, useFrame } from "@react-three/fiber";
// import { OrbitControls, useGLTF, Stars } from "@react-three/drei";
// import { Suspense, useRef } from "react";

// interface InteractiveModelProps {
//    modelPath: string; // path to GLB
//    scale?: number;
//    position?: [number, number, number];
// }

// function Model({
//    modelPath,
//    scale = 2.5,
//    position = [0, 0, 0],
// }: InteractiveModelProps) {
//    const { scene } = useGLTF(modelPath);
//    const modelRef = useRef<any>();

//    useFrame(() => {
//       if (modelRef.current) modelRef.current.rotation.y += 0.001;
//    });

//    return (
//       <primitive
//          object={scene}
//          ref={modelRef}
//          scale={scale}
//          position={position}
//       />
//    );
// }

// export default function InteractiveModelWrapper({
//    modelPath,
// }: {
//    modelPath: string;
// }) {
//    return (
//       <div className="w-full h-full relative overflow-hidden rounded-2xl">
//          <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>

//             <ambientLight intensity={0.6} />
//             <directionalLight position={[5, 5, 5]} intensity={1.2} />
//             <pointLight position={[-5, -5, -5]} intensity={0.4} />

//             <Suspense fallback={null}>
//                <Model modelPath={modelPath} />
//             </Suspense>

//             <OrbitControls
//                enableZoom={false}
//                enablePan={false}
//                enableDamping
//                dampingFactor={0.05}
//             />
//          </Canvas>
//       </div>
//    );
// }
// components/InteractiveModel.tsx
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Suspense, useRef, useEffect, useState } from "react";

interface InteractiveModelProps {
   modelPath: string; // path to GLB
   scale?: number;
   position?: [number, number, number];
}

function Model({
   modelPath,
   scale = 2.5,
   position = [0, 0, 0],
}: InteractiveModelProps) {
   const { scene } = useGLTF(modelPath);
   return <primitive object={scene} scale={scale} position={position} />;
}

const ModelPlaceholder = () => (
   <div className="w-full h-full bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center">
      <div className="text-center">
         <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-slate-400 mx-auto mb-2"></div>
         <p className="text-sm text-slate-600">Loading 3D Model...</p>
      </div>
   </div>
);

export default function InteractiveModelWrapper({
   modelPath,
}: {
   modelPath: string;
}) {
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
            <Canvas camera={{ position: [0, 0, 60], fov: 45 }}>
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
                  maxDistance={10}
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
