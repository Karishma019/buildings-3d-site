import site1Img from "../img/card.jpeg";

const SitesCard = () => {
  return (
    <>
      <div className="w-[350px] lg:w-[440px] rounded-xl flex-shrink-0 flex flex-col border-primary_light overflow-hidden shadow">
        <div className="h-60 overflow-hidden">
          <img src={site1Img} className="h-80 object-cover w-full" />
        </div>
        <div className=" text-black py-2 px-2 mt-2">
          <div className="flex justify-between items-center">
            <h3 className="font-semibold">Arcadia 111</h3>
            <button className="bg-white rounded border-primary border px-4 py-1 text-sm text-primary">
              View Site
            </button>
          </div>
          <p className="text-sm font-light mb-2">Ahmedabad</p>
          <p className="text-sm font-light">
            This is a basic description about the site and how this can be the
            best choice by the clients because of the facilities it provides and
            the price range that is affordable.
          </p>
        </div>
      </div>
    </>
  );
};

export default SitesCard;
