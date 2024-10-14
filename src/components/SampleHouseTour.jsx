import bgHouse from "../img/housetour.jpeg";
import { TbScanEye } from "react-icons/tb";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import { useRef } from "react";

const SampleHouseTour = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -350, // Adjust the value to scroll more or less
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: 350, // Adjust the value to scroll more or less
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="sampleHouseTour"
      className="relative h-screen bg-cover bg-center bg-fixed bg-no-repeat"
      style={{ background: `url(${bgHouse})` }}
    >
      <div className="absolute top-40 left-10">
        <p className="text-white bg-black bg-opacity-35 text-2xl flex items-center gap-2 px-4 py-1 rounded">
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
          className="flex gap-5 w-full overflow-x-auto scroll-hidden"
        >
          <button className=" text-sm bg-black bg-opacity-35 hover:bg-opacity-50 border-zinc-600 border flex-shrink-0 py-2 text-center lg:w-[17.1rem] w-full rounded">
            Living Area
          </button>
          <button className="  text-sm bg-black bg-opacity-35 hover:bg-opacity-50 border-zinc-600 border flex-shrink-0 text-center lg:w-[17.1rem] w-full  rounded">
            Kitchen{" "}
          </button>
          <button className="  text-sm bg-black bg-opacity-35 hover:bg-opacity-50 border-zinc-600 border flex-shrink-0 text-center lg:w-[17.1rem] w-full  rounded">
            Bedroom 1{" "}
          </button>
          <button className="  text-sm bg-black bg-opacity-35 hover:bg-opacity-50 border-zinc-600 border flex-shrink-0 text-center lg:w-[17.1rem] w-full  rounded">
            Bedroom 2{" "}
          </button>
          <button className="  text-sm bg-black bg-opacity-35 hover:bg-opacity-50 border-zinc-600 border flex-shrink-0 text-center lg:w-[17.1rem] w-full  rounded">
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
