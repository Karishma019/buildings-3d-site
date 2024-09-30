import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import { PerspectiveCamera, Scroll, ScrollControls } from "@react-three/drei";
import { angleToRadiants } from "../utils/angleToRadiants";
import Building from "../models/Building";
import CanvasLoader from "../components/CanvasLoader";

const Buildings = () => {
  return (
    <div className="building-container h-screen w-full bg-primary_light relative flex flex-col justify-center ">
      <Canvas>
        <Suspense fallback={<CanvasLoader />}>
          <PerspectiveCamera makeDefault position={[0, 6, 7]} />
          <ambientLight args={["#ffffff", 1]} />
          <directionalLight
            args={["#a9ceff", 15]}
            position={[-1, angleToRadiants(45), 0]}
          />
          <Building
            scale={0.04}
            position={[0, -1, 0]}
            rotation={[0, -angleToRadiants(10), 0]}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Buildings;
