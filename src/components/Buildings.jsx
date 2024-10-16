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

const Buildings = (props) => {
  return (
    <div
      className="building-container-whole h-[2500px] w-full overflow-hidden"
      id="arExperience"
      ref={(el) => props.storeInputRef(el, 4)}
    >
      <h2 className="flex items-center gap-4 text-2xl pt-32 pb-10 px-8">
        <TbScanEye className="text-primary_500" />
        AR Experience
      </h2>

      <div className="building-container bg-primary_50 h-full relative">
        {/* <BuildingContent store={store} /> */}
        <Canvas>
          {/* <XR store={store}> */}
            <Suspense fallback={<CanvasLoader />}>
              <PerspectiveCamera makeDefault position={[0, 1, 9]} />
              <ambientLight args={["#ffffff", 1]} />
              <directionalLight
                args={["#ffffff", 15]}
                position={[-4, 50, 95]}
              />
              <Building
                scale={0.02}
                position={[5, -2, -15]}
                rotation={[0, -1, 0]}
              />
            </Suspense>
          {/* </XR> */}
        </Canvas>
      </div>
    </div>
  );
};

export default Buildings;
