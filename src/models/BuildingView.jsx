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
  const [rotationSpeed] = useState(0.01);

  const orbitControlRef = useRef(null);

  useFrame(() => {
    if (orbitControlRef.current) {
      const autoAzimuthalAngle = orbitControlRef.current.getAzimuthalAngle();
      orbitControlRef.current.setAzimuthalAngle(
        autoAzimuthalAngle + rotationSpeed
      );
    }
  });

  return (
    <>
      <OrbitControls enableZoom={true} ref={orbitControlRef} />
      <Environment map={envMap} background />
    </>
  );
};

export default BuildingView;
