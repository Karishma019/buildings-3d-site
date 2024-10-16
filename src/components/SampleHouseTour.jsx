import bgHouse from "../img/housetour.jpeg";
import { TbScanEye } from "react-icons/tb";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import { useRef } from "react";
import BuildingView from "../models/BuildingView";
import { Canvas } from "@react-three/fiber";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import { scrollToSection } from "../utils/scrollToSection";
import {
  MdKeyboardDoubleArrowDown,
  MdKeyboardDoubleArrowUp,
} from "react-icons/md";

const SampleHouseTour = (props) => {
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
      <div className="w-full h-full absolute">
        <Canvas camera={{ position: [0, 0, 2], fov: 60 }}>
          <BuildingView />
        </Canvas>
      </div>
      <div
        className="flex absolute top-24 pt-5 left-1/2 -translate-x-1/2 flex-col items-center cursor-pointer"
        onClick={() => scrollToSection("arExperience")}
      >
        <div className="rounded text-white bg-black bg-opacity-35 px-1 rounded overflow-hidden">
          <MdKeyboardDoubleArrowUp className="text-2xl rounded  cursor-pointer animate-bounce" />
        </div>
        <p className="text-white text-sm font-semibold">Scroll Up</p>
      </div>
      <div
        className="flex flex-col items-center cursor-pointer absolute bottom-24 left-1/2 -translate-x-1/2"
        onClick={() => scrollToSection("ConnectWithUs")}
      >
        <p className="text-white text-sm font-semibold ">Scroll to Explore</p>
        <div className="rounded text-white bg-black bg-opacity-35 px-1 rounded overflow-hidden">
          <MdKeyboardDoubleArrowDown className="text-2xl rounded  cursor-pointer animate-bounce" />
        </div>
      </div>

      <div className="absolute sm:top-40 top-32 sm:left-10 left-5">
        <p className="text-white bg-black bg-opacity-35 sm:text-2xl text-xl flex items-center gap-2 px-4 py-1 rounded">
          <TbScanEye className="text-3xl" /> Sample House Tour
        </p>
      </div>
      <div className="absolute bottom-10 w-full text-white flex items-center gap-4 overflow-hidden px-8">
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
          <button className=" text-sm bg-black bg-opacity-35 hover:bg-opacity-50 lg:border-zinc-600 lg:border flex-shrink-0 py-2 text-center lg:w-1/5 w-full rounded">
            Living Area
          </button>
          <button className="  text-sm bg-black bg-opacity-35 hover:bg-opacity-50 lg:border-zinc-600 lg:border flex-shrink-0 text-center lg:w-1/5 w-full  rounded">
            Kitchen{" "}
          </button>
          <button className="  text-sm bg-black bg-opacity-35 hover:bg-opacity-50 lg:border-zinc-600 lg:border flex-shrink-0 text-center lg:w-1/5 w-full  rounded">
            Bedroom 1{" "}
          </button>
          <button className="  text-sm bg-black bg-opacity-35 hover:bg-opacity-50 lg:border-zinc-600 lg:border flex-shrink-0 text-center lg:w-1/5 w-full  rounded">
            Bedroom 2{" "}
          </button>
          <button className="  text-sm bg-black bg-opacity-35 hover:bg-opacity-50 lg:border-zinc-600 lg:border flex-shrink-0 text-center lg:w-1/5 w-full  rounded">
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
    </section>
  );
};

export default SampleHouseTour;
