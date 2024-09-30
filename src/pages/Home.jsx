import React from "react";
import bgImage from "../img/building-background.jpg";

const Home = () => {
  return (
    <section
      className="relative h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImage})` }} // Using the local image
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>{" "}
      {/* Optional overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold">
          Welcome to Our Website
        </h1>
        <p className="mt-4 text-lg md:text-2xl">We provide amazing services</p>
      </div>
    </section>
  );
};

export default Home;
