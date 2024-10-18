import React from "react";
import { IoCallOutline } from "react-icons/io5";
import Footer from "./Footer";
import img from "../img/image.png";

const ConnectWithUs = (props) => {
  return (
    <section
      className="relative lg:h-auto md:h-[690px] h-[570px]"
      id="ConnectWithUs"
      ref={(el) => props.storeInputRef(el, 6)}
    >
      <h2 className="flex items-center gap-4  pt-32 text-2xl px-8">
        <IoCallOutline className="text-primary_500" />
        Connect With Us
      </h2>

      <div className="clipPath flex bg-gradient-to-t from-primary_100 -z-10 via-primary_50 to-white absolute h-full w-full lg:hidden"></div>
      <div className=" flex items-center px-8 lg:justify-between justify-center h-[80%]">
        <div className="bg-white flex rounded-xl flex-col items-center p-8 md:w-2/3 w-[90%] lg:w-1/4  gap-4 shadow-2xl lg:mt-0 mt-10">
          <input
            type="text"
            placeholder="Enter your name"
            className="bg-[#D4D4D433] outline-none sm:text-lg text-sm w-full rounded-lg py-2 px-4"
          />
          <input
            type="text"
            placeholder="Enter your number"
            className="bg-[#D4D4D433] outline-none sm:text-lg text-sm w-full rounded-lg py-2 px-4"
          />
          <input
            type="email"
            placeholder="Enter your email address"
            className="bg-[#D4D4D433] outline-none sm:text-lg text-sm  w-full rounded-lg py-2 px-4"
          />
          <button className="bg-primary text-white w-32 py-1 rounded-lg">
            Submit
          </button>
        </div>
        <div className="lg:w-1/2 hidden lg:block pl-32">
          <img
            src={img}
            alt="building"
            className="w-[490px] h-[331px] object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default ConnectWithUs;
