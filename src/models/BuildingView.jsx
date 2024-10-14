import { Environment, useEnvironment } from "@react-three/drei";
import { OrbitControls } from "@react-three/drei";
import { angleToRadiants } from "../utils/angleToRadiants";
import { useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const BuildingView = () => {
  const envMap = useEnvironment({
    files: "/models/brown_photostudio_02_4k.exr",
  });

  const orbitControlRef = useRef(null);

  return (
    <>
      <OrbitControls
        enableZoom={true}
        ref={orbitControlRef}
        autoRotate
        autoRotateSpeed={-0.75}
        enablePan={true}
        enableRotate={true}
      />
      <Environment map={envMap} background />
    </>
  );
};

export default BuildingView;
