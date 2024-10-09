import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const BuildingContent = () => {
  useEffect(() => {
    const sections = gsap.utils.toArray(".building-section .content");

    // Create a GSAP timeline
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".building-section",
        // markers: true,
        pin: true,
        // end: `bottom top`, // Adjust based on the number of sections
        scrub: true, // Smooth scrubbing
      },
    });

    // Loop through each section and add to the timeline
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
    <div className="building-section z-10 absolute h-screen w-screen">
      <div className="content text-center text-white absolute top-2  left-[40%] max-w-[750px]">
        <h1 className="text-3xl uppercase flex flex-col">
          The <span className="text-4xl">Loremipsum dolor</span>
          <span className="text-6xl">Loremipsum</span>
        </h1>
      </div>
      <div className=" content text-center text-white absolute top-1/2 left-10 mt-10  max-w-[510px]">
        <p className="text-xl">
          Explore the extraordinary feats of engineering that have shaped our
          world. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Consequuntur mollitia ullam officiis obcaecati ipsam natus, amet
          exercitationem voluptas at ea.
        </p>
      </div>
      <div className=" content text-center text-white absolute top-1/2 left-10 mt-10  max-w-[510px]">
        <p className="text-xl">
          Step back in time and discover the historical landmarks that tell the
          story of our past. Lorem ipsum dolor sit, amet consectetur adipisicing
          elit. Esse magnam quaerat distinctio sint, nemo fuga omnis repellat
          inventore eum dolorum.
        </p>
      </div>
      <div className=" content text-center absolute top-1/2 left-10 mt-10 te max-w-[510px]">
        <p className="text-xl">
          discover the historical landmarks that tell the story of our past.
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse magnam
          quaerat distinctio sint, nemo fuga omnis repellat inventore eum
          dolorum.
        </p>
      </div>
    </div>
  );
};

export default BuildingContent;
