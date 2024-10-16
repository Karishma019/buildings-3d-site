import { Environment, useEnvironment } from "@react-three/drei";
import { OrbitControls } from "@react-three/drei";
import { angleToRadiants } from "../utils/angleToRadiants";
import { useEffect, useRef, useState } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextureLoader } from "three";

gsap.registerPlugin(ScrollTrigger);

const BuildingView = ({ model }) => {
  // const envMap = useEnvironment({
  //   files: "/models/brown_photostudio_02_4k.exr",
  // });

  const texture = useLoader(TextureLoader, `/models/${model}`);

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
      <mesh>
        <sphereGeometry args={[500, 60, 40]} />
        <meshBasicMaterial map={texture} side={THREE.BackSide} />
      </mesh>

      {/* <Environment map={envMap} background /> */}
    </>
  );
};

export default BuildingView;
