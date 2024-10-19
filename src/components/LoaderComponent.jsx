// LoaderComponent.js
import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Text } from "@react-three/drei";

function BouncingText() {
  const textRef = useRef();
  const [bounce, setBounce] = useState(0);

  useFrame((state, delta) => {
    const speedMultiplier = 6;
    setBounce(bounce + delta * speedMultiplier);
    textRef.current.position.y = Math.sin(bounce) * 0.2;
  });

  return (
    <Text
      ref={textRef}
      fontSize={8}
      color="#2641BB"
      position={[1, 1, 1]}
      rotation={[0, 0, 0]}
      anchorX="center"
      anchorY="middle"
      outlineColor="#ffffff"
    >
      Estate Explorer
    </Text>
  );
}

function LoaderComponent() {
  return (
    <>
      <BouncingText />
    </>
  );
}

export default LoaderComponent;
