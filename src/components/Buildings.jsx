import { Canvas } from "@react-three/fiber";
import React, { Suspense, useState } from "react";

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
import { FaHandPointer } from "react-icons/fa";
import Header from "./Header";
import { useSiteData } from "../contextAPI/SiteDataContext";

const store = createXRStore();

const Buildings = (props) => {
  const { siteData } = useSiteData();

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="building-container-whole relative h-[1200px] w-full overflow-hidden"
      id="arExperience"
      ref={(el) => props.storeInputRef(el, 4)}
    >
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full z-50 bg-white">
          {/* <button
            className="absolute top-10 z-50 px-3 rounded right-10 text-white bg-black bg-opacity-35  text-lg"
            onClick={() => setIsOpen(false)}
          >
            X
          </button> */}
          <Header formPage={true} link="model" setIsOpen={setIsOpen} />
          <div className="flex flex-col items-center  absolute top-[20%] z-10 left-[50%] -translate-x-1/2">
            <div className=" rounded-full bg-black bg-opacity-20 absolute h-5 w-5 animate-ping"></div>
            <FaHandPointer />
            <p className="mg:text-sm text-xs font-semibold mt-2">
              Interact with model
            </p>
          </div>
          <Canvas>
            <Suspense fallback={<CanvasLoader />}>
              <PerspectiveCamera makeDefault position={[0, 1, 9]} />
              <ambientLight args={["#ffffff", 1]} />
              <directionalLight args={["#ffffff0", 3]} position={[-1, 1, 1]} />
              {siteData?.model &&
                React.cloneElement(siteData?.model, {
                  scale: 3.5,
                  position: [0, 0, 0],
                  rotation: [0, 0, 0],
                })}
            </Suspense>
          </Canvas>
        </div>
      )}

      <h2 className="flex items-center gap-4 text-2xl pt-28 pb-5 px-8">
        <TbScanEye className="text-primary_500" />
        AR Experience
      </h2>
      <BuildingContent
        store={store}
        buildingStage={props.buildingStage}
        setIsOpen={setIsOpen}
      />
      <div className="building-container bg-primary_50 md:h-full h-[87%] relative">
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
            {siteData?.model &&
              React.cloneElement(siteData.model, {
                scale: 2,
                position: [-0.4, 1.3, 0],
                rotation: [1, -1, 0],
                buildingStage: props.buildingStage,
              })}
          </Suspense>
          {/* </XR> */}
        </Canvas>
      </div>
    </div>
  );
};

export default Buildings;
