import React from "react";

const Info = () => {
  return (
    <section className="h-screen bg-blackish flex justify-center items-center  text-white">
      <div className="max-w-[1200px]  text-center flex flex-col gap-10">
        <h1 className="text-6xl">
          Discover a city where cutting-edge structures rise alongside iconic
          landmarks, creating a skyline that reflects both vision and
          creativity.
        </h1>
        <p className="text-4xl">
          Alternatively, listen to the{" "}
          <span className="text-primary underline">
            audio version of this website
          </span>
        </p>
      </div>
    </section>
  );
};

export default Info;
