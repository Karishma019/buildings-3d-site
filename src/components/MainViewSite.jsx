import Header from "../components/Header";
import bgImage from "../img/building-background.jpg";
import { TiLocationArrowOutline } from "react-icons/ti";

const MainViewSite = () => {
  return (
    <section
      className="relative h-screen bg-cover bg-center bg-fixed bg-center bg-no-repeat p-8"
      style={{ backgroundImage: `url(${bgImage})` }} // Using the local image
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="z-10 relative h-full">
        <Header />
        <div className="text-white absolute top-0 w-full flex gap-2 flex-col h-full justify-center items-center">
          <h1 className="text-6xl font-semibold">Arcadia 111</h1>
          <p className="font-normal text-2xl">3 BHK PEACEFUL LIVINGS & SHOPS</p>
          <button className="bg-neutral_200 bg-opacity-30 border rounded text-sm flex items-center px-3 py-1 mt-4">
            <TiLocationArrowOutline className="text-xl" />
            Share
          </button>
        </div>
      </div>
    </section>
  );
};

export default MainViewSite;
