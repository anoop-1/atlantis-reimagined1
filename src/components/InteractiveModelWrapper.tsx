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
import { Suspense } from "react";

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

export default function InteractiveModelWrapper({
   modelPath,
}: {
   modelPath: string;
}) {
   return (
      <div className="w-full h-full relative overflow-hidden rounded-2xl">
         <Canvas camera={{ position: [0, 0, 60], fov: 45 }}>
            <ambientLight intensity={0.8} />
            <directionalLight position={[5, 5, 5]} intensity={1.2} />
            <pointLight position={[-5, -5, -5]} intensity={0.4} />

            <Suspense fallback={null}>
               <Model modelPath={modelPath} />
            </Suspense>

            <OrbitControls
               enableRotate={true} // allow rotation
               enableZoom={true} // allow zoom
               enablePan={true} // allow pan
               minDistance={2} // min zoom distance
               maxDistance={10} // max zoom distance
               rotateSpeed={0.8} // rotation sensitivity
               zoomSpeed={1.2} // zoom sensitivity
               panSpeed={0.8} // pan sensitivity
            />
         </Canvas>
      </div>
   );
}
