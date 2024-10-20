import { OrbitControls, useFBX, useGLTF } from "@react-three/drei";
import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { angleToRadiants } from "../utils/angleToRadiants";
import { useFrame } from "@react-three/fiber";
gsap.registerPlugin(ScrollTrigger);

const NewBuilding = (props) => {
  // const fbx = useFBX("/models/FinalBuilding4.fbx");
  const { nodes, materials } = useGLTF("/models/a.glb");

  const buildingRef = useRef();
  // const orbitControlRef = useRef();

  // useFrame((state) => {
  //   const { x, y } = state.pointer;
  //   if (orbitControlRef.current) {
  //     orbitControlRef.current.setAzimuthalAngle(-x * angleToRadiants(45));
  //     orbitControlRef.current.setPolarAngle((y + 1) * angleToRadiants(60));
  //   }
  // });

  // console.log(fbx);

  useLayoutEffect(() => {
    // new ScrollTrigger({});
    console.log("hima", props.buildingStage);
    if (props.buildingStage == 1) {
      const tl = gsap.timeline();
      tl.to(buildingRef.current.position, {
        z: 2,
        y: 1.5,
        x: 0,
        duration: 1,
        ease: "power1.out",
      }).to(
        buildingRef.current.rotation,
        {
          x: 0,
          y: 0.1,
          duration: 1,
          ease: "power1.out",
        },
        "<"
      );
    } else if (props.buildingStage == 2) {
      const tl2 = gsap.timeline();
      tl2
        .to(
          buildingRef.current.position,
          {
            x: 0.5,
            duration: 1,
            ease: "power1.out",
          },
          "<"
        )
        .to(
          buildingRef.current.rotation,
          {
            y: 1.5,
            duration: 1,
            ease: "power1.out",
          },
          "<"
        )
        .to(
          buildingRef.current.rotation,
          {
            x: 0.2,
            duration: 1,
            ease: "power1.out",
          },
          "<"
        );
    } else if (props.buildingStage == 3) {
      const tl3 = gsap.timeline();
      tl3
        .to(
          buildingRef.current.position,
          {
            x: 0.1,
            duration: 1,
            ease: "power1.out",
          },
          "<"
        )
        .to(
          buildingRef.current.rotation,
          {
            // x: 0,
            y: 2,
            // z: -0.75,
            duration: 1,
            ease: "power1.out",
          },
          "<"
        )
        .to(
          buildingRef.current.rotation,
          {
            // x: 0,
            y: 3,
            // z: -0.75,
            duration: 1,
            ease: "power1.out",
          },
          "<"
        );
    }
    else if (props.buildingStage == 0) {
      const tl4 = gsap.timeline();
      tl4
        .to(
          buildingRef.current.position,
          {
            x: -0.4,
            y:1.3,
            duration: 1,
            ease: "power1.out",
          },
          "<"
        )
        .to(
          buildingRef.current.rotation,
          {
            x: 1,
            y: -1,
            duration: 1,
            ease: "power1.out",
          },
          "<"
        );
    }
  }, [props.buildingStage]);

  return (
    <>
      <OrbitControls
        // ref={orbitControlRef}
        enableZoom={false}
        enablePan={false}
        // minPolarAngle={angleToRadiants(66)}
        // maxPolarAngle={angleToRadiants(76)}
      />
      <group {...props} dispose={null} ref={buildingRef}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TopViewSides.geometry}
          material={materials["TopViewSides.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Top_View002.geometry}
          material={materials["Top View.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.InnerRenderNew001.geometry}
          material={materials["InnerRenderNew.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.InnerRenderNew.geometry}
          material={materials["InnerRenderNew.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Ground.geometry}
          material={materials["TopViewSides.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001.geometry}
          material={materials["Material.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube.geometry}
          material={materials["Material.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["0003015"].geometry}
          material={materials["Material.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["0003012"].geometry}
          material={materials["Material.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["0003003"].geometry}
          material={materials["0003.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["0003002"].geometry}
          material={materials["0002.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["0003001"].geometry}
          material={materials["0000.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["0003"].geometry}
          material={materials["0001.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Ground001.geometry}
          material={materials["TopViewSides.001"]}
          position={[0.057, 0.001, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Top_View001.geometry}
          material={materials["Top View.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Top_View001_1.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Component#614_1"].geometry}
          material={materials["[Cladding Stucco White]"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Component#614_2"].geometry}
          material={materials["*74"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Component#614_3"].geometry}
          material={materials["[Small Aggregate]"]}
        />
      </group>
      {/* {fbx && <primitive object={fbx} {...props} ref={buildingRef} />} */}
    </>
  );
};

useGLTF.preload("/models/a.glb");

export default NewBuilding;
