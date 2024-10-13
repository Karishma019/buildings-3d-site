import { IoLocationOutline } from "react-icons/io5";
import bgLocation from "../img/bgLocation.mp4";

const LocationDetails = () => {
  return (
    <section className="relative h-screen">
      <h2 className="flex items-center gap-4 text-2xl py-16 px-8">
        <IoLocationOutline className="text-primary_500" />
        Location
      </h2>
      <button className="bg-neutral_200 absolute bottom-20 cursor-pointer right-20 text-neutral_0 bg-opacity-30 border rounded text-sm flex items-center px-3 py-1 mt-4">
        skip
      </button>
      <video
        className=" w-full object-cover"
        src={bgLocation}
        autoPlay
        loop
        muted
      ></video>
    </section>
  );
};

export default LocationDetails;
