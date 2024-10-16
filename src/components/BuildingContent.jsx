import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const BuildingContent = () => {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const content1 = useRef(null);
  const content2 = useRef(null);

  const scrollToIndex = (index) => {
    if (scrollRef.current) {
      const containerWidth = scrollRef.current.clientWidth;
      scrollRef.current.scrollTo({
        left: containerWidth * index,
        behavior: "smooth",
      });
      setActiveIndex(index);
    }
  };

  const scrollLeft = () => {
    if (activeIndex > 0) {
      scrollToIndex(activeIndex - 1);
    }
  };

  const scrollRight = () => {
    if (activeIndex < 4) {
      scrollToIndex(activeIndex + 1);
    }
  };

  useLayoutEffect(() => {
    console.log(content1, content2);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".building-section",
        start: "top top",
        end: "10% bottom",
        markers: true,
        scrub: false,
        pin: true,
        toggleActions: "play none reverse none",
      },
    });
    tl.to(
      content1.current,
      {
        opacity: 0,
        duration: 2,
        ease: "power1.out",
      },
      "<"
    );

    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".building-section",
        start: "28% top",
        end: "40% bottom",
        markers: true,
        scrub: false,
        pin: true,
        toggleActions: "play none reverse none",
      },
    });

    tl2.to(
      content2.current,
      {
        opacity: 1,
        duration: 2,
        ease: "power1.out",
      },
      "<"
    );
    // .to(
    //   content2.current,
    //   {
    //     top: "6rem",
    //     duration: 2,
    //     ease: "power1.out",
    //   },
    //   "<"
    // );
  }, []);

  return (
    <div className="building-section z-10 absolute h-full w-full">
      <div
        ref={content1}
        className="bg-neutral_0 p-6  lg:w-1/3 w-2/3 rounded-3xl shadow-2xl -translate-x-1/2 absolute top-12 left-1/2"
      >
        <h1 className="text-primary_500 font-semibold text-normal">
          Explore the Site in your space with Augmented Reality{" "}
        </h1>
        <div className="w-full justify-center gap-5 mt-2 lg:flex hidden">
          <div className="bg-neutral_100 w-32 h-20"></div>
          <p className="text-sm text-start">
            Scan the QR Code with a supported device to launch the AR Experience
          </p>
        </div>
        <button
          className="bg-primary_50 mt-4 border-primary_500 text-sm text-center font-semibold py-1 px-3 border-2 rounded text-primary_500 lg:hidden block"
          onClick={() => store.enterAR()}
        >
          Start AR Experience{" "}
        </button>
      </div>

      <div
        ref={content2}
        className="bg-neutral_0  p-6 flex flex-col overflow-hidden gap-3 opacity-0 lg:w-1/3 w-2/3 rounded-3xl shadow-2xl -translate-x-1/2 absolute top-[30%] left-1/2"
      >
        <h1 className="text-primary_500 font-semibold text-normal">
          Serenity Clubhouse{" "}
        </h1>
        <div className="flex overflow-x-auto scroll-hidden" ref={scrollRef}>
          <p className="text-sm text-start flex-shrink-0 w-full">
            A versatile space designed for relaxation and social gatherings,
            offering comfortable seating, entertainment options, and areas for
            events or activities.{" "}
          </p>
          <p className="text-sm text-start flex-shrink-0 w-full">
            A comfortable seating, entertainment options, and areas for events
            or activities.
          </p>
          <p className="text-sm text-start flex-shrink-0 w-full">
            A seating, entertainment options, and areas for events or
            activities.
          </p>

          <p className="text-sm text-start flex-shrink-0 w-full">
            A space designed for relaxation and social gatherings, offering
            comfortable seating, entertainment options, and areas for events or
            activities.
          </p>
        </div>
        <div className="flex justify-between text-sm items-center">
          <p
            className="text-primary lg:block hidden font-semibold cursor-pointer"
            onClick={scrollLeft}
          >
            Back
          </p>
          <p
            className="text-primary lg:hidden  text-3xl block font-semibold cursor-pointer"
            onClick={scrollLeft}
          >
            {"<"}
          </p>
          <div className="flex gap-2">
            {[...Array(4)].map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full cursor-pointer ${
                  activeIndex === index ? "bg-primary_500" : "bg-primary_100"
                }`}
                onClick={() => scrollToIndex(index)}
              ></div>
            ))}
          </div>
          <p
            className="text-primary lg:block hidden font-semibold cursor-pointer"
            onClick={scrollRight}
          >
            Next
          </p>
          <p
            className="text-primary lg:hidden text-3xl block font-semibold cursor-pointer"
            onClick={scrollRight}
          >
            {">"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BuildingContent;
