import React from "react";
import bgImage from "../img/building-background.jpg";
import logo from "../img/innoVRative logo.png";
import SitesCard from "../components/SitesCard";
import mainImg from "../img/main.png";
const Home = () => {
  return (
    <>
      <div className="clipPath flex bg-gradient-to-t from-primary_100 -z-10 via-primary_50 to-white absolute lg:h-[900px] md:h-[700px] h-[550px] w-full"></div>
      <div className=" flex-col flex gap-3 md:gap-10 padding">
        <h1 className="uppercase text-4xl text-center pt-10">
          <span className="bg-black text-white text-3xl py-2 tracking-widest">
            Estate
          </span>{" "}
          <span className="font-bold">Explorer</span>
        </h1>
        <div className="flex w-full mt-10 justify-between lg:h-[350px]">
          <div className="lg:w-1/2 w-full font-semibold">
            <h1 className="text-3xl md:text-5xl lg:text-6xl">
              Explore Properties in Immersive 3D
            </h1>
            <p className="text-primary lg:text-2xl md:text-xl mt-3">
              Real Estate made #SIMPLE
            </p>
            <p className="mt-6 lg:text-xl md:text-lg font-normal">
              Discover properties in stunning 3D from any device, anytime. Tour
              every detail virtually and make confident real estate decisions
              without leaving home.
            </p>
          </div>
          <div className="bg-zinc-300 w-1/2 rounded w-[528px] hidden lg:block overflow-hidden">
            <img src={mainImg} className="object-cover w-full object-top" />
          </div>
        </div>
        <div className="bg-white p-4 rounded-2xl shadow-2xl text-center">
          <p className="font-semibold">{`<Try it Yourself>`}</p>
          <p className="text-sm mt-2">{`<Install out AR App and need copy for this description message>`}</p>
          <button className="bg-primary text-white px-4 py-2 rounded text-sm mt-5">
            Get AR App
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
