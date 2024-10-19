import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlinePhone } from "react-icons/md";
import { CiMail } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

const Footer = () => {
  const handleButtonClick = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <footer className="bg-primary_50 mt-10 w-full">
      <h1 className="uppercase text-4xl text-center pt-10">
        <span className="bg-primary text-white text-3xl py-2 tracking-widest">
          Estate
        </span>{" "}
        <span className="font-bold text-primary">Explorer</span>
      </h1>
      <div className="flex flex-col items-center gap-5 md:py-10 py-5 text-neutral_400">
        <div className="px-4 sm:p-0">
          <p className="flex items-center gap-2 ">
            <IoLocationOutline />
            12, Times Square, C.G. Road, 380018, Ahmedabad
          </p>
          <p className="flex items-center gap-2   ">
            <MdOutlinePhone /> +91 1234567890
          </p>
          <p className="flex items-center gap-2   ">
            <CiMail />
            support@estateexplorer.com
          </p>
        </div>
        <div className="flex flex-col items-center gap-5">
          {/* <p className="font-semibold text-black">Get in touch with us</p>
          <label
            htmlFor="email"
            className="bg-white flex w-80 justify-between items-center p-1 rounded-lg"
          >
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="bg-none outline-none border-none p-2"
            />
            <button className="bg-primary text-white text-xl p-3 rounded">
              <FaArrowRightLong />
            </button>
          </label> */}
          <p className="font-semibold text-black">Follow Us on</p>
          <div className="text-primary flex gap-7 text-3xl">
            <p
              onClick={() =>
                handleButtonClick(
                  "https://www.linkedin.com/company/estate-explorer-in/"
                )
              }
            >
              <FaLinkedin />
            </p>
            <p
              onClick={() =>
                handleButtonClick(
                  "https://www.facebook.com/profile.php?id=61567265972105&mibextid=ZbWKwL"
                )
              }
            >
              <FaFacebookF />
            </p>
            <p
              onClick={() =>
                handleButtonClick(
                  "https://www.instagram.com/estate_explorer_india/profilecard/?igsh=MTByenQxbGgydGRrOA=="
                )
              }
            >
              <FaInstagram />
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
