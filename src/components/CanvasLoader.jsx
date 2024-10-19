import { Html } from "@react-three/drei";
import React from "react";

const CanvasLoader = () => {
  return (
    <Html>
      <div className="uppercase absolute -left-32 text-4xl w-full h-screen z-50 animate-pulse">
        <span className="bg-primary text-white text-3xl py-2 tracking-widest">
          Estate
        </span>
        <span className="font-bold text-primary bg-white">Explorer</span>
      </div>
    </Html>
  );
};

export default CanvasLoader;
