import bgHouse from "../img/housetour.jpeg";
import { TbScanEye } from "react-icons/tb";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import { Suspense, useRef, useState } from "react";
import BuildingView from "../models/BuildingView";
import { Canvas } from "@react-three/fiber";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import { scrollToSection } from "../utils/scrollToSection";
import {
  MdKeyboardDoubleArrowDown,
  MdKeyboardDoubleArrowUp,
} from "react-icons/md";
import Loader from "./Loader";
import CanvasLoader from "./CanvasLoader";

const SampleHouseTour = (props) => {
  const [houseTour, setHouseTour] = useState("leavingRoom.jpg");
  const [isFullscreen, setIsFullscreen] = useState(false);
  const handleFullscreenToggle = (image) => {
    setHouseTour(image);
    setIsFullscreen((prev) => !prev);
  };

  console.log(window.innerWidth);

  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      const containerWidth = scrollRef.current.clientWidth;
      scrollRef.current.scrollBy({
        left: -containerWidth,
        behavior: "smooth",
      });
    }
  };

  // Function to handle right scroll
  const scrollRight = () => {
    if (scrollRef.current) {
      const containerWidth = scrollRef.current.clientWidth;
      scrollRef.current.scrollBy({
        left: containerWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="sampleHouseTour"
      className="relative h-screen bg-cover bg-center bg-fixed bg-no-repeat overflow-hidden"
      ref={(el) => props.storeInputRef(el, 5)}
    >
      <div className="w-full h-full absolute -z-10 block md:hidden">
        <img
          src={bgHouse}
          alt="housetour"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="w-full h-full absolute hidden md:block">
        <Canvas camera={{ position: [0, 0, 2], fov: 60 }}>
          <Suspense fallback={<CanvasLoader />}>
            <BuildingView model={houseTour} />
          </Suspense>
        </Canvas>
      </div>

      {/* model  full screen for mobile devices */}

      {isFullscreen && (
        <div className="fixed top-0 left-0 w-full h-full z-50">
          <button
            className="absolute top-20 z-50 px-3 rounded right-20 text-white bg-black bg-opacity-35  text-lg"
            onClick={handleFullscreenToggle}
          >
            X
          </button>
          <Canvas camera={{ position: [0, 0, 2], fov: 60 }}>
            <Suspense fallback={<CanvasLoader />}>
              <BuildingView model={houseTour} />
            </Suspense>
          </Canvas>
        </div>
      )}

      {/* Scroll up & down button for tabs and laptop */}

      <div
        className="flex absolute top-24 pt-5 left-1/2 -translate-x-1/2 flex-col items-center cursor-pointer hidden md:flex"
        onClick={() => scrollToSection("arExperience")}
      >
        <div className="rounded text-white bg-black bg-opacity-35 px-1 rounded overflow-hidden">
          <MdKeyboardDoubleArrowUp className="text-2xl rounded  cursor-pointer animate-bounce" />
        </div>
        <p className="text-white text-sm font-semibold">Scroll Up</p>
      </div>
      <div
        className="flex flex-col items-center cursor-pointer absolute bottom-24 left-1/2 -translate-x-1/2 hidden lg:flex"
        onClick={() => scrollToSection("ConnectWithUs")}
      >
        <p className="text-white text-sm font-semibold ">Scroll to Explore</p>
        <div className="rounded text-white bg-black bg-opacity-35 px-1 rounded overflow-hidden">
          <MdKeyboardDoubleArrowDown className="text-2xl rounded  cursor-pointer animate-bounce" />
        </div>
      </div>

      {/* Heading */}

      <div className="absolute sm:top-40 top-32 sm:left-10 left-5">
        <p className="text-white bg-black bg-opacity-35 sm:text-2xl text-xl flex items-center gap-2 px-4 py-1 rounded">
          <TbScanEye className="text-3xl" /> Sample House Tour
        </p>
      </div>

      {/* For tabs and laptop devices */}
      <div className="absolute bottom-10 md:flex hidden w-full text-white flex items-center gap-4 overflow-hidden px-8">
        <div
          className="bg-black bg-opacity-35 p-2 rounded lg:hidden"
          onClick={scrollLeft}
        >
          <FaChevronLeft className="text-xl rounded  cursor-pointer" />
        </div>
        <div
          ref={scrollRef}
          className="flex lg:gap-5 w-full overflow-x-auto scroll-hidden"
        >
          <button
            className=" text-sm bg-black bg-opacity-35 hover:bg-opacity-50 lg:border-zinc-600 lg:border flex-shrink-0 py-2 text-center lg:w-1/5 w-full rounded"
            onClick={() => {
              setHouseTour("leavingRoom.jpg");
            }}
          >
            Living Area
          </button>
          <button
            className="  text-sm bg-black bg-opacity-35 hover:bg-opacity-50 lg:border-zinc-600 lg:border flex-shrink-0 text-center lg:w-1/5 w-full  rounded"
            onClick={() => {
              setHouseTour("Kitchen.jpg");
            }}
          >
            Kitchen{" "}
          </button>
          <button
            className="  text-sm bg-black bg-opacity-35 hover:bg-opacity-50 lg:border-zinc-600 lg:border flex-shrink-0 text-center lg:w-1/5 w-full  rounded"
            onClick={() => {
              setHouseTour("Bedroom 1.jpg");
            }}
          >
            Bedroom 1{" "}
          </button>
          <button
            className="  text-sm bg-black bg-opacity-35 hover:bg-opacity-50 lg:border-zinc-600 lg:border flex-shrink-0 text-center lg:w-1/5 w-full  rounded"
            onClick={() => {
              setHouseTour("Bedroom 2.jpg");
            }}
          >
            Bedroom 2{" "}
          </button>
          <button
            className="  text-sm bg-black bg-opacity-35 hover:bg-opacity-50 lg:border-zinc-600 lg:border flex-shrink-0 text-center lg:w-1/5 w-full  rounded"
            onClick={() => {
              setHouseTour("Master.jpg");
            }}
          >
            Master Bedroom{" "}
          </button>
        </div>
        <div
          className="bg-black bg-opacity-35 p-2 rounded lg:hidden"
          onClick={scrollRight}
        >
          <FaChevronRight className="text-xl rounded  cursor-pointer" />
        </div>{" "}
      </div>
      {/*Button For mobile devices */}
      <div className="w-full gap-5 absolute sm:bottom-[20%] bottom-[10%] flex flex-col items-center md:hidden">
        <div className=" gap-5 flex text-white w-[90%] h-24 font-semibold">
          <div
            className="relative overflow-hidden bg-black bg-opacity-35 w-1/2 flex items-center justify-center rounded-lg cursor-pointer"
            onClick={() => handleFullscreenToggle("leavingRoom.jpg")}
          >
            <p>Living Area</p>
          </div>
          <div
            className="relative overflow-hidden bg-black bg-opacity-35 w-1/2 flex items-center justify-center rounded-lg cursor-pointer"
            onClick={() => handleFullscreenToggle("Kitchen.jpg")}
          >
            <p>Kitchen</p>
          </div>
        </div>
        <div className=" gap-5 flex text-white w-[90%] h-24 font-semibold">
          <div
            className="relative overflow-hidden bg-black bg-opacity-35 w-1/2 flex items-center justify-center rounded-lg cursor-pointer"
            onClick={() => handleFullscreenToggle("Bedroom 1.jpg")}
          >
            <p>Bedroom 1</p>
          </div>
          <div
            className="relative overflow-hidden bg-black bg-opacity-35 w-1/2 flex items-center justify-center rounded-lg cursor-pointer"
            onClick={() => handleFullscreenToggle("Bedroom 2.jpg")}
          >
            <p>Bedroom 2</p>
          </div>
        </div>
        <div className=" gap-5 flex text-white w-[90%] h-24 font-semibold">
          <div
            className="relative overflow-hidden bg-black bg-opacity-35 w-1/2 flex items-center justify-center rounded-lg cursor-pointer "
            onClick={() => handleFullscreenToggle("Master.jpg")}
          >
            <p>Master Bedroom</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SampleHouseTour;
