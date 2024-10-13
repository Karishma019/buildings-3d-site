import { TfiMenuAlt } from "react-icons/tfi";
import { BsGrid1X2 } from "react-icons/bs";
import { BiHomeAlt } from "react-icons/bi";

const ProjectDetails = () => {
  return (
    <section className="py-10 ">
      <h2 className="flex items-center gap-4 text-2xl pb-10 px-8">
        <TfiMenuAlt className="text-primary_500" />
        Project Details
      </h2>
      <div className="bg-[#D4D4D4] p-8 flex flex-col gap-8 w-full">
        <div className="flex lg:flex-row flex-col gap-8">
          <div className="bg-neutral_0 lg:w-1/2  w-full rounded-xl py-4 shadow-xl  px-10">
            <h3 className="text-primary font-semibold">A Block</h3>
            <div className="flex items-center gap-5 text-sm py-2">
              <p className=" flex items-center gap-3">
                <BsGrid1X2 /> 280 sqyd / 2520 sqft
              </p>
              <p className="flex items-center gap-3">
                <BiHomeAlt />
                116 Flats
              </p>
            </div>
          </div>

          <div className="bg-neutral_0 lg:w-1/2  w-full rounded-xl py-4 shadow-xl   px-10">
            <h3 className="text-primary font-semibold">A Block</h3>
            <div className="flex items-center gap-5 text-sm py-2">
              <p className=" flex items-center gap-3">
                <BsGrid1X2 /> 256 sqyd / 2304 sqft
              </p>
              <p className="flex items-center gap-3">
                <BiHomeAlt />
                118 Flats
              </p>
            </div>
          </div>
        </div>
        <div className="flex lg:flex-row flex-col gap-8">
          <div className="bg-neutral_0 lg:w-1/2  w-full rounded-xl py-4 shadow-xl  px-10">
            <h3 className="text-primary font-semibold">Penthouse</h3>
            <div className="text-sm pt-4">
              <p className="flex items-center gap-2">
                <div className="h-5 w-5 bg-neutral_100 rounded"></div>4 Duplex
                Penthouses (21st & 22nd floor)
              </p>
              <p className="pt-2 flex items-center gap-2">
                {" "}
                <div className="h-5 w-5 bg-neutral_100 rounded"></div>4 Side by
                Side Penthouses (22nd floor)
              </p>
            </div>
          </div>
          <div className="lg:w-1/2  w-full flex flex-col gap-8 font-semibold">
            <h3 className="bg-neutral_0 rounded-xl py-4 shadow-xl text-primary px-10">
              35+ Amenities
            </h3>
            <h3 className="bg-neutral_0 w-full shadow-xl rounded-xl py-4 text-primary w-full  px-10">
              Two Floor Parking
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
