import { Canvas, useFrame } from "@react-three/fiber";
import React, { Suspense, useEffect, useRef } from "react";
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
import LocationContent from "../components/LocationContent";
gsap.registerPlugin(ScrollTrigger);

const Location = () => {
  return (
    <div className="earth-container h-screen w-full bg-blackish relative flex flex-col items-center">
      <LocationContent />
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, -1, 7]} />
        <ambientLight args={["#ffffff", 1]} />
        <directionalLight
          args={["#a9ceff", 15]}
          position={[-1, angleToRadiants(45), 0]}
        />
        <OrbitControls enableZoom={false} />

        <Suspense fallback={<CanvasLoader />}>
          <Earth
            scale={0.003}
            position={[0, -2, 0]}
            rotation={[0, -angleToRadiants(85), 0]}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Location;
