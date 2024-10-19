import React from "react";
import bgImage from "../img/building-background.jpg";
import logo from "../img/innoVRative logo.png";
import SitesCard from "../components/SitesCard";
import mainImg from "../img/mainLanding.jpg";
import Info from "../components/Info";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="clipPath flex bg-gradient-to-t from-primary_100 -z-10 via-primary_50 to-white absolute lg:h-[1000px] md:h-[700px] h-[580px] w-full"></div>
      <h1 className="uppercase md:text-4xl text-3xl text-center pt-4 h-20 w-full bg-white sticky z-10 top-0">
        <span className="bg-black text-white md:text-3xl text-2xl py-2 tracking-widest">
          Estate
        </span>{" "}
        <span className="font-bold">Explorer</span>
      </h1>
      <div className=" flex-col flex gap-3 md:gap-10 padding">
        <div className="flex w-full mt-10 justify-between lg:h-[350px]">
          <div className="lg:w-1/2 w-full font-semibold">
            <h1 className="text-2xl text-center sm:text-start md:text-5xl lg:text-6xl">
              Explore Properties in Immersive 3D
            </h1>
            <p className="text-primary lg:text-2xl md:text-xl mt-3">
              Real Estate made #SIMPLE
            </p>
            <p className="mt-6 lg:text-xl md:text-lg text-sm text-center font-normal">
              Discover properties in stunning 3D from any device, anytime. Tour
              every detail virtually and make confident real estate decisions
              without leaving home.
            </p>
          </div>
          <div className="bg-zinc-300 w-1/2 rounded w-[528px] hidden lg:block overflow-hidden">
            <img src={mainImg} className="w-full h-full" />
          </div>
        </div>
        <div className="bg-white p-4 rounded-2xl shadow-2xl text-center">
          <p className="font-semibold">{`AR App at ₹1`}</p>
          <p className="text-sm mt-2 mb-4">{`Build an immersive AR experience for your project for only ₹1!`}</p>
          <Link
            to={`/form-details`}
            className="bg-primary text-white px-4 py-2 rounded text-sm"
          >
            Get AR App
          </Link>
        </div>
      </div>
      <Info />
      <Footer />
    </>
  );
};

export default Home;
