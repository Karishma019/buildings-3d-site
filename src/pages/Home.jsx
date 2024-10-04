import React from "react";
import bgImage from "../img/building-background.jpg";
import logo from "../img/innoVRative logo.png";
import SitesCard from "../components/SitesCard";
const Home = () => {
  return (
    <section
      className="relative h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImage})` }} // Using the local image
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 flex flex-col gap-20 h-full text-white px-20 py-10">
        <div className="flex justify-between">
          <img src={logo} alt="innoVRative logo" />
          <button className="border-2 px-4 py-2 rounded hover:bg-white hover:text-black transition">
            Get free AR app
          </button>
        </div>
        <div className="flex flex-col gap-8">
          <div className="text-5xl text-center">
            <h1 className="uppercase">
              <span className="bg-white text-black text-4xl py-2 tracking-widest">
                Estate
              </span>{" "}
              <span className="font-bold">Explorer</span>
            </h1>
            <p className="text-sm font-semibold mt-4">By innoVRative</p>
          </div>
          <h2 className="text-3xl font-semibold">Explore Sites:</h2>
          <div className="flex flex-nowrap gap-8 overflow-x-auto slides-container">
            <SitesCard />
            <SitesCard />
            <SitesCard />
            <SitesCard />
            <SitesCard />
            <SitesCard />
            <SitesCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
