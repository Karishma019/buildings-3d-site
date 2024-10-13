import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-black bg-opacity-35 flex z-10 justify-between items-center sticky top-8 p-4 rounded mx-8">
      <div className="flex text-white items-center gap-16">
        <Link to={`/`} className="text-2xl px-4">{`<`}</Link>
        <h1 className="uppercase md:text-2xl text-xl w-full">
          <span className="bg-white text-black md:text-xl text-lg py-1 tracking-widest">
            Estate
          </span>{" "}
          <span className="font-bold">Explorer</span>
        </h1>
      </div>
      <nav className="hidden lg:block">
        <ul className="text-white flex gap-5">
          <li>Project Details</li>
          <li>Location</li>
          <li>AR Experience</li>
          <li>Sample House Tour</li>
          <li>Connect With Us </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
