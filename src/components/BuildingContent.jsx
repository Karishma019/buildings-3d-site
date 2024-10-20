import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaHandPointer } from "react-icons/fa6";
import { Link } from "react-router-dom";
import qrImg from "../img/qr.jpeg";

gsap.registerPlugin(ScrollTrigger);

const BuildingContent = (props) => {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const contentRef = useRef(null);
  const content1 = useRef(null);
  const content2 = useRef(null);
  const pointerRef = useRef(null);

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

  return (
    <>
      <div
        className="building-section z-10 absolute h-full w-full"
        ref={contentRef}
      >
        {
        (props.buildingStage == 0) &&
        <div
          ref={content1}
          className="bg-neutral_0 p-6  lg:w-1/3 w-2/3 rounded-3xl opacity-1 shadow-lg -translate-x-1/2 absolute top-2 left-1/2"
        >
          <h1 className="text-primary_500 font-semibold text-normal">
            Explore the Site in your space with Augmented Reality{" "}
          </h1>
          <div className="w-full justify-center gap-5 mt-2 lg:flex hidden">
            <div className="bg-neutral_100 w-32 h-20">
              <img src={qrImg} />
            </div>
            <p className="md:text-sm text-xs  text-start">
              Scan the QR Code with a supported device to launch the AR
              Experience
            </p>
          </div>
          <Link
            className="bg-primary_50 mt-4 border-primary_500 md:text-sm text-xs  text-center font-semibold py-1 px-3 border-2 rounded text-primary_500 lg:hidden block"
            to={"https://estate-explorer-apk-store.s3.ap-south-1.amazonaws.com/Arcadia111.apk?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCmFwLXNvdXRoLTEiSDBGAiEAhT8pJ68MPyNg%2FPwYeHzTtoWNIOFRZc5A2%2BUd%2BqPpCFQCIQDAvehdbNsORWNLvpgmXwR5hmbOpT9f50NJyJA75AOuPSr9AghsEAQaDDU0NTI4NTU4NTM0MiIMR4ndc7mRCi0brLtFKtoCLpCX4ZM%2B4EbbJu4fxw5vcZnkMfUwPHDbZBhQDN8OejC%2FQTDGeUOsOQeaeUBf%2BNlTyuMjkgPFLrKbsSrk%2Bn9p5xpqnDnC3kqvkwWDdDhYAGnFHilObDt1N6238xYOYVCPdvKi2%2BUC69omBAd%2Fdiz8K%2BmntJCBF%2F6CsoeldSdX9u9nGIsx%2FSZk9872ZrxOpvJEyzPTCzDUmCt9yXhSOJ1tX8JCUWUFcJFNh86E6HVfL7CNHfz8tUzp29%2Bv0%2FkG%2Fp8DCOHh8x12ZaAkqWT1q3cJWc0zS516iHKhwbv%2BRa80Olj%2BnaJG7SydxChnW2iEeOUwsVfAEqT6Q1p9QM0eI3RBy55ZIgvdjl3W99DTimSE%2BF8vlljmL2qKumj%2Fobkfbj0avGmAWAuaEer6MgtjMKINCNzCYe%2Brd9F62ddUCTMKyJqsNUS0LlzYybSrQ3kRmcz3lhkXlT9O2ZpAHTDx4tG4BjqyAkGbmqPOypGfgLcF0%2BN0MMR0ucBxSUpvG%2BHansn7c7trMrWsPdG9%2BHEzhsWTCVJ1hZ8LaZZizBfe1Mym20M4efqWJYCDbv2gdDcJH8xz6hBIkaCCwaB74VEm3ePM4qaAL%2BsecCxr7kEPpyUWTBOTYVxMAscI8KSf2mK9fCXB2XprE4ZMG8gypT%2FSmXnq170GT2xSzFWoyS00P6LS3vWpnHr8e6Bj2g3o%2BRlFVP4WXjO0mGLn5NyNSUTUfHEmqoSLyKlrxngrvubOdw7GqVJ2lYOaGJ58xRg7YcpQs0KWAfQjyUMA8iUxkgRWheAWw8n9w5PGC5SWqraa%2F3WIefa0Mfh9FA58a50aMRGVkNNh1G43JkxVIB5FMe68Nerd26Ftf%2BJuthqHQqROZTvRhpNmxq44jg%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241020T025751Z&X-Amz-SignedHeaders=host&X-Amz-Expires=43200&X-Amz-Credential=ASIAX55MNXG7OKY3APEN%2F20241020%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Signature=6fce220f19d1972ba81df97f1b3908d980a87879dc16673c8d197754d3c49eea"}
          >
            Start AR Experience{" "}
          </Link>
        </div>
        }
        {
        (props.buildingStage > 0 && props.buildingStage < 3) &&
        
        <div
          ref={content2}
          className="bg-neutral_0  md:p-6 p-4 flex flex-col overflow-hidden gap-3 opacity-0 lg:w-1/3 w-[90%] rounded-3xl shadow-2xl -translate-x-1/2 absolute top-2 left-1/2"
        >
          <h1 className="text-primary_500 font-semibold text-normal">
            Serenity Clubhouse{" "}
          </h1>
          <div className="flex overflow-x-auto scroll-hidden" ref={scrollRef}>
            <p className="md:text-sm text-xs  text-start flex-shrink-0 flex-grow-0 w-full">
              A versatile space designed for relaxation and social gatherings,
              offering comfortable seating, entertainment options, and areas for
              events or activities.
            </p>
            <p className="md:text-sm text-xs  text-start flex-shrink-0 w-full">
              A versatile space designed for relaxation and social gatherings,
              offering comfortable seating, entertainment options, and areas for
              events or activities.
            </p>
            <p className="md:text-sm text-xs  text-start flex-shrink-0 w-full">
              A versatile space designed for relaxation and social gatherings,
              offering comfortable seating, entertainment options, and areas for
              events or activities.
            </p>

            <p className="md:text-sm text-xs  text-start flex-shrink-0 w-full">
              A versatile space designed for relaxation and social gatherings,
              offering comfortable seating, entertainment options, and areas for
              events or activities.
            </p>
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
              className="text-primary lg:hidden md:text-3xl text-2xl block font-semibold cursor-pointer"
              onClick={scrollRight}
            >
              {">"}
            </p>
          </div>
        </div>
        }
        {
          (props.buildingStage == 3) &&
          <div
          ref={pointerRef}
          className=" p-6 flex justify-center  lg:w-1/3 w-2/3 rounded-3xl opacity-0 -translate-x-1/2 absolute top-5 left-1/2"
        >
          <Link
            to={`/model`}
            className="bg-primary_50 border-primary_500 md:text-sm text-xs  text-center font-semibold py-1 px-3 border-2 rounded text-primary_500 "
          >
            Click to interact with the model{" "}
          </Link>
        </div>
        }

      </div>
    </>
  );
};

export default BuildingContent;
