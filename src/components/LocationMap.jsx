import bgImage from "../img/building-background.jpg";

const LocationMap = () => {
  return (
    <section
      style={{ background: `url(${bgImage})` }}
      className="h-screen bg-center bg-no-repeat bg-cover relative"
    >
      <div className="bg-neutral_0 flex items-start p-6 w-1/3 rounded-3xl shadow-2xl -translate-x-1/2 absolute top-40 left-1/2">
        <div className="w-1/2">
          <h1 className="text-primary_500 font-semibold text-2xl">
            Arcadia 111
          </h1>
          <p className="text-neutral_500 text-sm">
            12, Times Square, C.G. Road, 380018, Ahmedabad Gujarat, India
          </p>
        </div>
        <div className="w-1/2 text-end">
          <button className="bg-primary_50 border-primary_500 font-semibold py-1 px-3 border-2 rounded text-primary_500">
            Open in Google maps
          </button>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;
