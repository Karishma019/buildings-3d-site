import React from "react";
import SitesCard from "./SitesCard";
import { sitesCardData } from "../utils/data";

const Info = () => {
  return (
    <section className="padding">
      <h2 className="pt-10 text-2xl font-semibold">Explore Sites</h2>
      <div className="flex gap-5 flex-wrap justify-center lg:justify-start mt-10 w-full pb-10">
        {sitesCardData.map((data) => {
          return <SitesCard key={data.id} data={data} />;
        })}
      </div>
    </section>
  );
};

export default Info;
