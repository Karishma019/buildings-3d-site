import React, { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { QRCodeSVG } from "qrcode.react";
import { useSiteData } from "../contextAPI/SiteDataContext";
import {useNavigate} from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const BuildingContent = (props) => {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const contentRef = useRef(null);
  const content1 = useRef(null);
  const content2 = useRef(null);
  const pointerRef = useRef(null);
  const navigate = useNavigate();
  const { siteData } = useSiteData();

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


  const showARModel = () => navigate('/ar')

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
    if (props.buildingStage == 1) {
      const tl = gsap.timeline();
      tl.to(
        content1.current,
        {
          opacity: 0,
          duration: 2,
          ease: "power1.out",
        },
        "<"
      );
    } else if (props.buildingStage == 2) {
      const tl2 = gsap.timeline();
      tl2
        .to(
          content1.current,
          {
            opacity: 0,
            duration: 2,
            ease: "power1.out",
          },
          "<"
        )
        .to(
          content2.current,
          {
            opacity: 1,
            duration: 2,
            ease: "power1.out",
          },
          "<"
        );
    } else if (props.buildingStage == 3) {
      const tl3 = gsap.timeline();
      tl3
        .to(
          content2.current,
          {
            opacity: 0,
            duration: 2,
            ease: "power1.out",
          },
          "<"
        )
        .to(
          pointerRef.current,
          {
            opacity: 1,
            duration: 4,
            ease: "power1.out",
          },
          "<"
        );
    }
  }, [props.buildingStage]);

  const qrValue = `${window.origin}/ar`;

  return (
    <>
      <div
        className="building-section z-10 absolute h-full w-full"
        ref={contentRef}
      >
        {props.buildingStage == 0 && (
          <div
            ref={content1}
            className="bg-neutral_0 p-6  lg:w-1/3 w-2/3 rounded-3xl opacity-1 shadow-lg -translate-x-1/2 absolute top-2 left-1/2"
          >
            <h1 className="text-primary_500 font-semibold text-normal">
              Explore the Site in your space with Augmented Reality{" "}
            </h1>
              <button onClick={showARModel} className="bg-primary_50 mt-4 border-primary_500 md:text-sm text-xs  text-center font-semibold py-1 px-3 border-2 rounded text-primary_500 lg:hidden block">
                  Start AR Experience{" "}
              </button>
            <div className="w-full justify-center gap-5 mt-2 lg:flex hidden">
              <div className="w-32 h-20">
                <QRCodeSVG value={qrValue} level={"H"} size={90} />
              </div>
              <p className="md:text-sm text-xs  text-start">
                Scan the QR Code with a supported device to launch the AR
                Experience
              </p>
            </div>
          </div>
        )}
        {props.buildingStage > 0 && props.buildingStage < 3 && (
          <div
            ref={content2}
            className="bg-neutral_0  md:p-6 p-4 flex flex-col overflow-hidden gap-3 opacity-0 lg:w-1/3 w-[90%] rounded-3xl shadow-2xl -translate-x-1/2 absolute top-2 left-1/2"
          >
            {/* <h1 className="text-primary_500 font-semibold text-normal">
              Serenity Clubhouse{" "}
            </h1> */}
            <div className="flex overflow-x-auto scroll-hidden" ref={scrollRef}>
              {siteData?.modelContent?.map((item, index) => {
                return (
                  <div key={index} className="flex-shrink-0 flex-grow-0 w-full">
                    <h1 className="text-primary_500 font-semibold text-normal pb-1">
                      {item?.title}
                    </h1>
                    <p className="md:text-sm text-xs  text-start flex-shrink-0 flex-grow-0 w-full">
                      {item?.description}
                    </p>
                  </div>
                );
              })}
              {/* <p className="md:text-sm text-xs  text-start flex-shrink-0 w-full">
                A versatile space designed for relaxation and social gatherings,
                offering comfortable seating, entertainment options, and areas
                for events or activities.
              </p>
              <p className="md:text-sm text-xs  text-start flex-shrink-0 w-full">
                A versatile space designed for relaxation and social gatherings,
                offering comfortable seating, entertainment options, and areas
                for events or activities.
              </p>

              <p className="md:text-sm text-xs  text-start flex-shrink-0 w-full">
                A versatile space designed for relaxation and social gatherings,
                offering comfortable seating, entertainment options, and areas
                for events or activities.
              </p> */}
            </div>
            <div className="flex justify-between md:text-sm text-xs  items-center">
              <p
                className="text-primary lg:block hidden font-semibold cursor-pointer"
                onClick={scrollLeft}
              >
                Back
              </p>
              <p
                className="text-primary lg:hidden  md:text-3xl text-2xl block font-semibold cursor-pointer"
                onClick={scrollLeft}
              >
                {"<"}
              </p>
              <div className="flex gap-2">
                {[...Array(siteData?.modelContent?.length)].map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full cursor-pointer ${
                      activeIndex === index
                        ? "bg-primary_500"
                        : "bg-primary_100"
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
                className="text-primary lg:hidden md:text-3xl text-2xl block font-semibold cursor-pointer"
                onClick={scrollRight}
              >
                {">"}
              </p>
            </div>
          </div>
        )}
        {props.buildingStage == 3 && (
          <div
            ref={pointerRef}
            className=" p-6 flex justify-center  lg:w-1/3 w-2/3 rounded-3xl opacity-0 -translate-x-1/2 absolute top-5 left-1/2"
          >
            <button
              className="bg-primary_50 border-primary_500 md:text-sm text-xs  text-center font-semibold py-1 px-3 border-2 rounded text-primary_500 "
              onClick={() => props.setIsOpen(true)}
            >
              Click to interact with the model{" "}
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default BuildingContent;
