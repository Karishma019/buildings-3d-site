import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const LocationContent = () => {
  useEffect(() => {
    const sections = gsap.utils.toArray(".swipe-section .section");

    // Create a GSAP timeline
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".swipe-section",
        start: "top top",
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
          { opacity: 0 }, // Start from opacity 0
          {
            opacity: 1,
            duration: 0.5,
            ease: "power1.inOut",
          },
          index // Offset the timing for each section
        )
        .to(
          section,
          {
            opacity: 0,
            duration: 0.5,
            ease: "power1.inOut",
          },
          index + 1 // Start fading out after showing for the duration
        );
    });

    return () => {
      timeline.kill(); // Cleanup on component unmount
    };
  }, []);

  return (
    <div className="swipe-section relative h-screen w-screen max-w-[750px]">
      <div className="text-white section absolute text-center mt-10 ">
        <h1 className="text-3xl uppercase flex flex-col">
          The <span className="text-4xl">Architecture</span>
          <span className="text-6xl">Marvels</span>
        </h1>
        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet, optio?
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore
          corrupti qui voluptate cupiditate quam neque nemo itaque cumque iste
          iure.
        </p>
      </div>
      <div className="text-white section text-center absolute mt-10 ">
        <p className="text-xl">
          Explore the extraordinary feats of engineering that have shaped our
          world. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Consequuntur mollitia ullam officiis obcaecati ipsam natus, amet
          exercitationem voluptas at ea.
        </p>
      </div>
      <div className="text-white section text-center absolute mt-10 ">
        <p className="text-xl">
          Step back in time and discover the historical landmarks that tell the
          story of our past. Lorem ipsum dolor sit, amet consectetur adipisicing
          elit. Esse magnam quaerat distinctio sint, nemo fuga omnis repellat
          inventore eum dolorum.
        </p>
      </div>
    </div>
  );
};

export default LocationContent;
