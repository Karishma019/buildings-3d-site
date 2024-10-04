import site1Img from "../img/site1.png";

const SitesCard = () => {
  return (
    <>
      <div className="w-72 rounded-xl flex-shrink-0 flex flex-col border-primary_light border overflow-hidden">
        <img src={site1Img} className="w-full" />
        <div className=" bg-primary text-white py-2 px-2">
          <h3 className="font-semibold">Arcadia 111</h3>
          <p className="text-sm font-light my-2">Ahmedabad</p>
          <p className="text-sm font-light">
            This is a basic description about the site and how this can be the
            best choice by the clients because of the facilities it provides and
            the price range that is affordable.
          </p>
          <button className="bg-white rounded text-lg mt-3 py-1 text-center w-full font-semibold text-primary">
            Visit Site
          </button>
        </div>
      </div>
    </>
  );
};

export default SitesCard;
