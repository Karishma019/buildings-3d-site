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
import NewBuilding from "../models/NewBuilding";

const store = createXRStore();

const Buildings = (props) => {
  return (
    <div
      className="building-container-whole relative h-[1200px] w-full overflow-hidden"
      id="arExperience"
      ref={(el) => props.storeInputRef(el, 4)}
    >
      <h2 className="flex items-center gap-4 text-2xl pt-28 pb-5 px-8">
        <TbScanEye className="text-primary_500" />
        AR Experience
      </h2>
      <BuildingContent store={store} buildingStage={props.buildingStage} />
      <div className="building-container bg-primary_50 h-full relative">
        <Canvas>
          {/* <XR store={store}> */}
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 1, 9]} />
            <ambientLight args={["#ffffff", 1]} />
            <directionalLight args={["#ffffff0", 3]} position={[-1, 1, 1]} />
            {/* <Building
              scale={0.02}
              position={[5, -2, -15]}
              rotation={[0, -1, 0]}
            /> */}
            <NewBuilding
              scale={2}
              position={[-0.4, 1.5, 0]}
              rotation={[1, -1, 0]}
              buildingStage={props.buildingStage}
            />
          </Suspense>
          {/* </XR> */}
        </Canvas>
      </div>
    </div>
  );
};

export default Buildings;
