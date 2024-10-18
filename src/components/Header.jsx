import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import { TfiMenuAlt } from "react-icons/tfi";
import { IoLocationOutline } from "react-icons/io5";
import { TbScanEye } from "react-icons/tb";
import { IoCallOutline } from "react-icons/io5";
import { BiHomeAlt } from "react-icons/bi";
import { scrollToSection } from "../utils/scrollToSection";

const Header = ({ formPage }) => {
  const [isOpen, setisOpen] = useState(false);
  console.log(formPage);
  return (
    <header className="bg-black bg-opacity-35 flex z-10 justify-between items-center sticky top-8 p-4 rounded mx-8 ">
      <div
        className={`flex text-white items-center ${
          formPage && "w-full"
        } sm:gap-16`}
      >
        <Link
          to={"/"}
          className={`text-2xl ${formPage == undefined && "px-4"}`}
        >{`<`}</Link>
        <h1
          className={`uppercase md:text-2xl  ${
            formPage != undefined && "text-center"
          } text-xl w-full`}
        >
          <span className="bg-white text-black md:text-xl text-lg py-1 tracking-widest">
            Estate
          </span>{" "}
          <span className="font-bold">Explorer</span>
        </h1>
      </div>
      {formPage == undefined && (
        <>
          {" "}
          <IoMdMenu
            className="text-neutral_0 text-3xl lg:hidden cursor-pointer"
            onClick={() => setisOpen(true)}
          />
          <nav
            className={`absolute right-0 ${
              isOpen ? "top-0" : "-top-[500px]"
            }  bg-black bg-opacity-40 p-4 rounded-lg lg:hidden transition-all duration-300`}
          >
            <div
              className="w-full flex justify-end cursor-pointer"
              onClick={() => setisOpen(false)}
            >
              <IoCloseSharp className="text-neutral_0 bg-neutral_200 p-2 text-4xl rounded" />
            </div>
            <ul className="text-white flex flex-col gap-5 text-sm md:text-lg my-4">
              <li
                className="hover:bg-black hover:bg-opacity-30 flex items-center gap-2 rounded py-1 cursor-pointer px-3"
                onClick={() => scrollToSection("projectDetails")}
              >
                <TfiMenuAlt /> Project Details
              </li>
              <li
                className="hover:bg-black hover:bg-opacity-30 rounded flex items-center gap-2 py-1 cursor-pointer px-3"
                onClick={() => scrollToSection("locationDetails")}
              >
                <IoLocationOutline />
                Location
              </li>
              <li
                className="hover:bg-black hover:bg-opacity-30 rounded flex items-center gap-2 py-1 cursor-pointer px-3"
                onClick={() => scrollToSection("arExperience")}
              >
                <TbScanEye /> AR Experience
              </li>
              <li
                className="hover:bg-black hover:bg-opacity-30 rounded flex items-center gap-2 py-1 cursor-pointer px-3"
                onClick={() => scrollToSection("sampleHouseTour")}
              >
                <BiHomeAlt /> Sample House Tour
              </li>
              <li
                className="hover:bg-black hover:bg-opacity-30 rounded flex items-center gap-2 py-1  cursor-pointer px-3"
                onClick={() => scrollToSection("ConnectWithUs")}
              >
                <IoCallOutline /> Connect With Us{" "}
              </li>
            </ul>
          </nav>
          <nav className="hidden lg:block">
            <ul className="text-white flex gap-2">
              <li
                className="hover:bg-black hover:bg-opacity-30 rounded cursor-pointer px-3"
                onClick={() => scrollToSection("projectDetails")}
              >
                Project Details
              </li>
              <li
                className="hover:bg-black hover:bg-opacity-30 rounded cursor-pointer px-3"
                onClick={() => scrollToSection("locationDetails")}
              >
                Location
              </li>
              <li
                className="hover:bg-black hover:bg-opacity-30 rounded cursor-pointer px-3"
                onClick={() => scrollToSection("arExperience")}
              >
                AR Experience
              </li>
              <li
                className="hover:bg-black hover:bg-opacity-30 rounded cursor-pointer px-3"
                onClick={() => scrollToSection("sampleHouseTour")}
              >
                Sample House Tour
              </li>
              <li
                className="hover:bg-black hover:bg-opacity-30 rounded cursor-pointer px-3"
                onClick={() => scrollToSection("ConnectWithUs")}
              >
                Connect With Us{" "}
              </li>
            </ul>
          </nav>
        </>
      )}
    </header>
  );
};

export default Header;
