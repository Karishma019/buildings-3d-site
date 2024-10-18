import { IoLocationOutline } from "react-icons/io5";
import bgLocation from "../img/bgLocation.mp4";
import { useRef, useState, useEffect } from "react";
import { FaGasPump, FaSchool } from "react-icons/fa6";
import { LiaUniversitySolid } from "react-icons/lia";
import { FaRegHospital } from "react-icons/fa";
import { CiAirportSign1 } from "react-icons/ci";
import { GiRoad } from "react-icons/gi";
import { scrollToSection } from "../utils/scrollToSection";

const LocationDetails = (props) => {
  const videoRef = useRef(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleFullscreenToggle = () => {
    setIsFullscreen((prev) => !prev);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            videoRef.current.play();
          } else {
            videoRef.current.pause();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <section
      className="relative h-screen"
      id="locationDetails"
      ref={(el) => props.storeInputRef(el, 2)}
    >
      <h2
        className="flex items-center gap-4 text-2xl md:pt-32 pt-24 px-8"
        onClick={() => props.scrollToSection(2)}
      >
        <IoLocationOutline className="text-primary_500" />
        Location
      </h2>
      <div className="flex md:flex-row flex-col md:gap-8 gap-4 px-8 my-5">
        <div className="bg-neutral_100 p-4 lg:w-1/4 md:w-1/3 w-full text-sm flex items-center text-center rounded-lg">
          ARCADIA 111, behind Fun Blast, Chharodi, Ahmedabad, Gujarat 382481{" "}
        </div>
        <div className="bg-neutral_100 lg:w-3/4 md:w-2/3 w-full rounded-lg p-4">
          <p className="font-semibold text-primary lg:text-lg mb-1">
            Advantages
          </p>
          <div className="lg:text-normal text-sm lg:gap-10 gap-2 flex lg:flex-row flex-col w-full">
            <div className="lg:w-1/3 w-full flex flex-col gap-2">
              <div className="flex justify-between">
                <p className="flex items-center gap-3">
                  <FaSchool />
                  SGVP International School
                </p>
                <p>03 min</p>
              </div>
              <div className="flex justify-between">
                <p className="flex items-center gap-3">
                  <LiaUniversitySolid />
                  Nirma University
                </p>
                <p>03 min</p>
              </div>
            </div>
            <div className="lg:w-1/3 w-full flex flex-col gap-2">
              <div className="flex justify-between">
                <p className="flex items-center gap-3">
                  <FaGasPump />
                  Shell Petrol Pump, Sarkhej
                </p>
                <p>03 min</p>
              </div>
              <div className="flex justify-between">
                <p className="flex items-center gap-3">
                  <GiRoad />
                  Gota Cross Road{" "}
                </p>
                <p>08 min</p>
              </div>
            </div>

            <div className="lg:w-1/3 w-full flex flex-col gap-2">
              <div className="flex justify-between">
                <p className="flex items-center gap-3">
                  <FaRegHospital />
                  KD Hospital
                </p>
                <p>06 min</p>
              </div>
              <div className="flex justify-between">
                <p className="flex items-center gap-3">
                  <CiAirportSign1 />
                  Airport
                </p>
                <p>18 min</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        className="bg-neutral_200 absolute bottom-20 cursor-pointer z-10 right-20 text-neutral_0 bg-opacity-30 hidden lg:block border rounded text-sm flex items-center px-3 py-1 mt-4"
        onClick={() => scrollToSection("locationMap")}
      >
        skip
      </button>

      {isFullscreen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black flex justify-center items-center z-50">
          <button
            className="absolute top-4 right-4 text-white text-lg"
            onClick={handleFullscreenToggle}
          >
            X
          </button>
          <video
            className="w-auto h-auto max-w-full max-h-full"
            ref={videoRef}
            src={bgLocation}
            autoPlay
            loop
            muted
          />
        </div>
      )}

      <div className="w-full relative h-full">
        <video
          className="w-full object-cover h-full"
          ref={videoRef}
          src={bgLocation}
          autoPlay
          loop
          muted
        ></video>
        <button
          className="bg-black absolute top-20 cursor-pointer z-10 left-1/2 -translate-x-1/2 text-neutral_0 bg-opacity-30 border border-2 font-semibold rounded text-sm flex items-center px-3 py-1 mt-4 md:hidden"
          onClick={handleFullscreenToggle}
        >
          Watch Video
        </button>
      </div>
    </section>
  );
};

export default LocationDetails;
