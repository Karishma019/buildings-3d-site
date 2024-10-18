import { OrbitControls, useFBX } from "@react-three/drei";
import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { angleToRadiants } from "../utils/angleToRadiants";
gsap.registerPlugin(ScrollTrigger);

const NewBuilding = (props) => {
  const fbx = useFBX("/models/FinalBuilding4.fbx");
  const buildingRef = useRef();

  console.log(fbx);

  useLayoutEffect(() => {
    // new ScrollTrigger({});
    console.log("hima", props.buildingStage);
    if (props.buildingStage == 1) {
      const tl = gsap.timeline();
      tl.to(buildingRef.current.position, {
        x: 0.1,
        y: 1.8,
        z: 1,
        duration: 1,
        ease: "power1.out",
      }).to(
        buildingRef.current.rotation,
        {
          y: 0.1,
          duration: 1,
          ease: "power1.out",
        },
        "<"
      );
    } else if (props.buildingStage == 2) {
      const tl2 = gsap.timeline();
      tl2
        // .to(buildingRef.current.position, {
        //   // x: 0,
        //   y: 1,
        //   duration: 1,
        //   ease: "power1.out",
        // })
        // .to(
        //   buildingRef.current.position,
        //   {
        //     // x: 0,
        //     // z: -2,
        //     duration: 1,
        //     ease: "power1.out",
        //   },
        //   "<"
        // )
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
        // .to(
        //   buildingRef.current.position,
        //   {
        //     // x: 0,
        //     y: -0.2,
        //     // z: -0.75,
        //     duration: 1,
        //     ease: "power1.out",
        //   },
        //   "<"
        // )
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
  }, [props.buildingStage]);

  return (
    <>
      <OrbitControls
        enableZoom={false}
        minPolarAngle={angleToRadiants(66)}
        maxPolarAngle={angleToRadiants(76)}
      />
      {fbx && <primitive object={fbx} {...props} ref={buildingRef} />}
    </>
  );
};

export default NewBuilding;
