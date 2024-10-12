import { Canvas } from "@react-three/fiber";
import React from "react";
import BuildingView from "../models/BuildingView";

const Building360View = () => {
  return (
    <div className="h-screen flex justify-center items-center w-screen">
      <div className="w-[900px] h-3/4">
        <Canvas camera={{ position: [0, 0, 2], fov: 60 }}>
          <BuildingView />
        </Canvas>
      </div>
    </div>
  );
};

export default Building360View;
