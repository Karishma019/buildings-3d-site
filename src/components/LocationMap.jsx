import bgImage from "../img/building-background.jpg";

const LocationMap = () => {
  return (
    <section
      style={{ background: `url(${bgImage})` }}
      className="h-screen bg-center bg-no-repeat bg-cover relative"
    >
      <div className="bg-neutral_0 gap-3 lg:gap-0 sm:w-80 w-72 flex lg:flex-row flex-col items-start p-6 md:w-1/2 lg:w-1/3 rounded-3xl shadow-2xl -translate-x-1/2 absolute top-40 left-1/2">
        <div className="lg:w-1/2 w-full lg:text-start text-center">
          <h1 className="text-primary_500 font-semibold lg:text-2xl text-xl">
            Arcadia 111
          </h1>
          <p className="text-neutral_500 text-sm">
            12, Times Square, C.G. Road, 380018, Ahmedabad Gujarat, India
          </p>
        </div>
        <div className="lg:w-1/2 w-full lg:text-end text-center">
          <button className="bg-primary_50 border-primary_500 font-semibold py-1 px-3 border-2 rounded text-primary_500">
            Open in Google maps
          </button>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;
