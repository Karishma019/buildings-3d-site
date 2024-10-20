import bgImage from "../img/locationdetailsImg.jpg";

const LocationMap = (props) => {
  const handleButtonClick = () => {
    window.open(
      "https://maps.app.goo.gl/ybHhbaj3xy9hhG1eA",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section
      className="h-screen relative"
      id="locationMap"
      ref={(el) => props.storeInputRef(el, 3)}
    >
      <div className="bg-neutral_0 gap-3 lg:gap-0 sm:w-80 w-72 flex lg:flex-row flex-col items-start p-6 md:w-1/2 lg:w-1/3 rounded-3xl shadow-xl -translate-x-1/2 absolute md:top-28 top-32 left-1/2">
        <div className="lg:w-1/2 w-full lg:text-start text-center">
          <h1 className="text-primary_500 font-semibold lg:text-2xl text-xl">
            Arcadia 111
          </h1>
          <p className="text-neutral_500 text-sm">
          ARCADIA 111, behind Fun Blast, Chharodi, Ahmedabad, Gujarat 382481
          </p>
        </div>
        <div className="lg:w-1/2 w-full lg:text-end text-center">
          <button
            className="bg-primary_50 border-primary_500 font-semibold py-1 px-3 border-2 rounded text-primary_500"
            onClick={handleButtonClick}
          >
            Open in Google maps
          </button>
        </div>
      </div>
      <div className="w-full h-full">
        <div className="bg-custom-gradient lg:h-1/3 h-1/2"></div>
        <img
          src={bgImage}
          alt="map-location"
          className="w-full lg:h-2/3 h-1/2 object-cover lg:object-top object-right"
        />
      </div>
    </section>
  );
};

export default LocationMap;
