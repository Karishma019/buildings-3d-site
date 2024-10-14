import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";

import {
  OrbitControls,
  PerspectiveCamera,
  Scroll,
  ScrollControls,
  Text,
} from "@react-three/drei";
import { angleToRadiants } from "../utils/angleToRadiants";
import Building from "../models/Building";
import CanvasLoader from "./CanvasLoader";
import BuildingContent from "./BuildingContent";
import { TbScanEye } from "react-icons/tb";
import { createXRStore, XR } from "@react-three/xr";

const store = createXRStore();

const Buildings = () => {
  return (
    <div
      className="building-container h-screen relative w-full overflow-hidden"
      id="arExperience"
    >
      <h2 className="flex items-center gap-4 text-2xl py-10 px-8 lg:hidden block">
        <TbScanEye className="text-primary_500" />
        AR Experience
      </h2>

      <div className="bg-primary_50 h-full relative">
        <BuildingContent store={store} />
        <Canvas>
          <XR store={store}>
            <Suspense fallback={<CanvasLoader />}>
              <PerspectiveCamera makeDefault position={[0, 1, 9]} />
              <ambientLight args={["#ffffff", 1]} />
              <directionalLight args={["#a9ceff", 15]} position={[-4, 2, 35]} />
              <Building
                scale={0.05}
                position={[0, -2, 0]}
                rotation={[0, 0, 0]}
              />
            </Suspense>
          </XR>
        </Canvas>
      </div>
    </div>
  );
};

export default Buildings;
