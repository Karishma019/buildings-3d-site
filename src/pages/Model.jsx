import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";

import {
  OrbitControls,
  PerspectiveCamera,
  Scroll,
  ScrollControls,
  Text,
} from "@react-three/drei";
import NewBuilding from "../models/NewBuilding";
import CanvasLoader from "../components/CanvasLoader";
import Header from "../components/Header";
import { FaHandPointer } from "react-icons/fa6";

const Model = () => {
  return (
    <div className="h-screen relative">
      <div className="flex flex-col items-center  absolute top-[20%] z-10 left-[50%] -translate-x-1/2">
        <div className=" rounded-full bg-black bg-opacity-20 absolute h-5 w-5 animate-ping"></div>
        <FaHandPointer />
        <p className="mg:text-sm text-xs font-semibold mt-2">
          Interact with model
        </p>
      </div>
      <Header formPage={true} link="model" />
      <Canvas>
        <Suspense fallback={<CanvasLoader />}>
          <PerspectiveCamera makeDefault position={[0, 1, 9]} />
          <ambientLight args={["#ffffff", 1]} />
          <directionalLight args={["#ffffff0", 3]} position={[-1, 1, 1]} />
          <NewBuilding scale={4} position={[0, 0, 0]} rotation={[0, 0, 0]} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Model;
