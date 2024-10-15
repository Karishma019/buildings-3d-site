import Header from "../components/Header";
import bgVideo from "../img/bgMain.mp4";
import { TiLocationArrowOutline } from "react-icons/ti";

const MainViewSite = () => {
  return (
    <section className="h-screen">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={bgVideo}
        autoPlay
        loop
        muted
      ></video>

      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="text-white absolute top-0 w-full flex gap-2 flex-col h-full justify-center items-center">
        <h1 className="text-4xl md:text-6xl font-semibold">Arcadia 111</h1>
        <p className="font-normal text-lg md:text-2xl">
          3 BHK PEACEFUL LIVINGS & SHOPS
        </p>
        <button className="bg-neutral_200 bg-opacity-30 border rounded text-sm flex items-center px-3 py-1 mt-4">
          <TiLocationArrowOutline className="text-xl" />
          Share
        </button>
      </div>
    </section>
  );
};

export default MainViewSite;
