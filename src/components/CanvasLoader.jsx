import { Html } from "@react-three/drei";
import React from "react";

const CanvasLoader = () => {
  return (
    <Html>
      <h1 className="uppercase absolute -left-32 text-4xl">
        <span className="bg-primary text-white text-3xl py-2 tracking-widest">
          Estate
        </span>
        <span className="font-bold text-primary">Explorer</span>
      </h1>
    </Html>
  );
};

export default CanvasLoader;
