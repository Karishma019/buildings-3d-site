import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const BuildingContent = () => {
  useEffect(() => {
    const sections = gsap.utils.toArray(".building-section .content");

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".building-section",
        markers: true,
        pin: true,
        // end: `bottom top`, // Adjust based on the number of sections
        scrub: true, // Smooth scrubbing
      },
    });

    sections.forEach((section, index) => {
      timeline
        .fromTo(
          section,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 0.5,
            ease: "power1.inOut",
          },
          index
        )
        .to(
          section,
          {
            opacity: 0,
            duration: 0.5,
            ease: "power1.inOut",
          },
          index + 1
        );
    });

    return () => {
      timeline.kill();
    };
  }, []);

  return (
    <div className="building-section z-10 absolute h-full w-full">
      <div className="bg-neutral_0 p-6 text-center lg:w-1/2 w-2/3 rounded-3xl shadow-2xl content -translate-x-1/2 absolute top-40 left-1/2">
        <h1 className="text-primary_500 font-semibold text-lg">
          Explore the Site in your space with Augmented Reality{" "}
        </h1>
        <button className="bg-primary_50 mt-4 border-primary_500 text-sm font-semibold py-1 px-3 border-2 rounded text-primary_500">
          Start AR Experience{" "}
        </button>
      </div>
      <div className="content text-center text-white absolute top-40 -translate-x-1/2 left-1/2 max-w-[510px]">
        <p className="text-5xl font-bold">Explore the extraordinary</p>
      </div>
      <div className="content text-center text-white absolute top-40 left-1/2 max-w-[510px]">
        <p className="text-xl">feats of engineering</p>
      </div>
      <div className="content text-center text-white absolute top-40 left-1/2 max-w-[510px]">
        <p className="text-xl">that have shaped our world. </p>
      </div>
    </div>
  );
};

export default BuildingContent;
