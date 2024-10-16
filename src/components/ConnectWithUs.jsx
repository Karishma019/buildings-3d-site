import React from "react";
import { IoCallOutline } from "react-icons/io5";
import Footer from "./Footer";

const ConnectWithUs = (props) => {
  return (
    <section
      className="relative"
      id="ConnectWithUs"
      ref={(el) => props.storeInputRef(el, 6)}
    >
      <h2 className="flex items-center gap-4  pt-32 text-2xl px-8">
        <IoCallOutline className="text-primary_500" />
        Connect With Us
      </h2>

      <div className="clipPath flex bg-gradient-to-t from-primary_100 -z-10 via-primary_50 to-white absolute h-full w-full lg:hidden"></div>
      <div className=" flex items-center px-8">
        <div className="bg-white flex rounded-xl flex-col items-center p-8 w-2/3 lg:w-1/2  gap-4 shadow-lg">
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
      </div>
    </section>
  );
};

export default ConnectWithUs;
