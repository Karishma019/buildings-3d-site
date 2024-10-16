import { IoLocationOutline } from "react-icons/io5";
import bgLocation from "../img/bgLocation.mp4";
import { useRef } from "react";
import { useEffect } from "react";
import { FaGasPump, FaSchool } from "react-icons/fa6";
import { LiaUniversitySolid } from "react-icons/lia";
import { FaRegHospital } from "react-icons/fa";
import { CiAirportSign1 } from "react-icons/ci";
import { GiRoad } from "react-icons/gi";
import { scrollToSection } from "../utils/scrollToSection";

const LocationDetails = (props) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // If the video is in view, play it
            videoRef.current.play();
          } else {
            // If the video is out of view, pause it
            videoRef.current.pause();
          }
        });
      },
      { threshold: 0.5 } // Adjust this value (0-1) based on when you want the video to start playing
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    // Cleanup the observer when the component unmounts
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
        className="flex items-center gap-4 text-2xl pt-16 px-8"
        onClick={() => props.scrollToSection(2)}
      >
        <IoLocationOutline className="text-primary_500" />
        Location
      </h2>
      <div className="flex md:flex-row flex-col gap-8 px-8 my-5">
        <div className="bg-neutral_100 p-4 lg:w-1/4 md:w-1/3 w-full text-sm flex items-center text-center rounded-lg">
          Add exact address hereAdd exact address hereAdd exact address hereAdd
          exact address here
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
        className="bg-neutral_200 absolute bottom-20 cursor-pointer z-10 right-20 text-neutral_0 bg-opacity-30 border rounded text-sm flex items-center px-3 py-1 mt-4"
        onClick={() => scrollToSection("locationMap")}
      >
        skip
      </button>
      <video
        className=" w-full object-cover h-full"
        ref={videoRef}
        src={bgLocation}
        autoPlay
        loop
        muted
      ></video>
    </section>
  );
};

export default LocationDetails;
