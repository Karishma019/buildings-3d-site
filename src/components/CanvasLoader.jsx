import { Html } from "@react-three/drei";
import React from "react";

const CanvasLoader = () => {
  return (
    <Html>
      <div className="h-screen flex justify-center items-center w-screen">
        <p className="text-white">loading......</p>
      </div>
    </Html>
  );
};

export default CanvasLoader;
