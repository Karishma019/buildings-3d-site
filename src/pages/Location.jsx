import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import Earth from "../models/Earth";
import {
  OrbitControls,
  PerspectiveCamera,
  Scroll,
  ScrollControls,
} from "@react-three/drei";
import { angleToRadiants } from "../utils/angleToRadiants";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CanvasLoader from "../components/CanvasLoader";
gsap.registerPlugin(ScrollTrigger);

const Location = () => {
  return (
    <div className="earth-container h-screen w-full bg-blackish relative flex flex-col justify-center ">
      <Canvas>
        <Suspense fallback={<CanvasLoader />}>
          <PerspectiveCamera makeDefault position={[0, -1, 7]} />
          <ambientLight args={["#ffffff", 1]} />
          <directionalLight
            args={["#a9ceff", 15]}
            position={[-1, angleToRadiants(45), 0]}
          />
          <OrbitControls enableZoom={false} />
          <Earth
            scale={0.0025}
            position={[0, -2.5, 0]}
            rotation={[0, -angleToRadiants(85), 0]}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Location;
