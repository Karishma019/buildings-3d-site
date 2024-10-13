import React from "react";
import { IoCallOutline } from "react-icons/io5";

const ConnectWithUs = () => {
  return (
    <section className="relative h-[500px]">
      <h2 className="flex items-center gap-4  pt-10 text-2xl px-8">
        <IoCallOutline className="text-primary_500" />
        Connect With Us
      </h2>

      <div className="clipPath flex bg-gradient-to-t from-primary_100 -z-10 via-primary_50 to-white absolute h-full w-full"></div>
      <div className=" flex justify-center items-center h-full">
        <div className="bg-white flex rounded-xl flex-col items-center p-8 w-1/2 gap-4 shadow-lg">
          <input
            type="text"
            placeholder="Enter your name"
            className="bg-[#D4D4D433] outline-none text-lg w-full rounded-lg py-2 px-4"
          />
          <input
            type="text"
            placeholder="Enter your number"
            className="bg-[#D4D4D433] outline-none text-lg w-full rounded-lg py-2 px-4"
          />
          <input
            type="email"
            placeholder="Enter your email address"
            className="bg-[#D4D4D433] outline-none text-lg  w-full rounded-lg py-2 px-4"
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
