import { Html } from "@react-three/drei";
import React from "react";

const CanvasLoader = () => {
  return (
    <Html>
      <section className="h-screen flex justify-center items-center fade-in-out">
        <h1 className="uppercase text-4xl text-center pt-10">
          <span className="bg-primary text-white text-3xl py-2 tracking-widest">
            Estate
          </span>
          <span className="font-bold text-primary">Explorer</span>
        </h1>
      </section>
    </Html>
  );
};

export default CanvasLoader;
