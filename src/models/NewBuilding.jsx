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

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".building-container-whole",
        start: "top top",
        end: "10% top",
        // markers: true,
        scrub: false,
        pin: true,
        toggleActions: "play none reverse none",
      },
    });
    tl.to(buildingRef.current.position, {
      x: 0,
      y: 1.5,
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

    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".building-container-whole",
        start: "15% top",
        end: "25% 100%",
        // markers: true,
        scrub: false,
        pin: true,
        toggleActions: "play none reverse none",
      },
    });

    tl2
      .to(buildingRef.current.position, {
        // x: 0,
        y: 1,
        duration: 1,
        ease: "power1.out",
      })
      .to(
        buildingRef.current.position,
        {
          // x: 0,
          // z: -2,
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

    const tl3 = gsap.timeline({
      scrollTrigger: {
        trigger: ".building-container-whole",
        start: "30% top",
        end: "40% 100%",
        // markers: true,
        scrub: false,
        pin: true,
        toggleActions: "play none reverse none",
      },
    });
    tl3
      .to(
        buildingRef.current.position,
        {
          // x: 0,
          y: -0.2,
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
  }, []);

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
