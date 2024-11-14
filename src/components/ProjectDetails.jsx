import { TfiMenuAlt } from "react-icons/tfi";
import { BsGrid1X2 } from "react-icons/bs";
import { BiHomeAlt } from "react-icons/bi";
import { useSiteData } from "../contextAPI/SiteDataContext";

const ProjectDetails = (props) => {
  const { siteData } = useSiteData();
  return (
    <section
      className="py-10"
      id="projectDetails"
      ref={(el) => props.storeInputRef(el, 1)}
    >
      <h2 className="flex items-center gap-4 text-2xl md:pt-20 pt-12 lg:pb-10 mb:pb-5 pb-4 px-8">
        <TfiMenuAlt className="text-primary_500" />
        Project Details
      </h2>
      <div className="bg-[#D4D4D4] lg:p-8 p-4 flex flex-col lg:gap-8 gap-4 w-full">
        <div className="flex lg:flex-row flex-col lg:gap-8 gap-4">
          <div className="bg-neutral_0 lg:w-1/2  w-full rounded-xl md:py-4 py-2 shadow-xl  md:px-10 px-5">
            <h3 className="text-primary font-semibold">
              {siteData?.projectDetails[0]?.title}
            </h3>
            <div className="flex items-start sm:items-center flex-col sm:flex-row gap-2 sm:gap-5 text-sm md:py-2 py-1">
              <p className=" flex items-center gap-3">
                <BsGrid1X2 /> {siteData?.projectDetails[0]?.area}
              </p>
              <p className="flex items-center gap-3">
                <BiHomeAlt />
                {siteData?.projectDetails[0]?.properties}
              </p>
            </div>
          </div>

          <div className="bg-neutral_0 lg:w-1/2  w-full rounded-xl md:py-4 py-2 shadow-xl  md:px-10 px-5">
            <h3 className="text-primary font-semibold">
              {siteData?.projectDetails[1]?.title}
            </h3>
            <div className="flex items-start sm:items-center flex-col sm:flex-row gap-2 sm:gap-5 text-sm py-2">
              <p className=" flex items-center gap-3">
                <BsGrid1X2 /> {siteData?.projectDetails[1]?.area}
              </p>
              <p className="flex items-center gap-3">
                <BiHomeAlt />
                {siteData?.projectDetails[1]?.properties}
              </p>
            </div>
          </div>
        </div>
        <div className="flex lg:flex-row flex-col lg:gap-8 gap-4">
          <div className="bg-neutral_0 lg:w-1/2  w-full rounded-xl md:py-4 py-2 shadow-xl  md:px-10 px-5">
            <h3 className="text-primary font-semibold">
              {siteData?.projectDetails[2]?.title}
            </h3>
            <div className="text-sm md:pt-4 pt-2">
              <p className="flex items-center gap-2">
                <span className="h-5 w-5 bg-neutral_100 rounded"></span>
                {siteData?.projectDetails[2]?.point1}
              </p>
              <p className="pt-2 flex items-center gap-2">
                <span className="h-5 w-5 bg-neutral_100 rounded"></span>
                {siteData?.projectDetails[2]?.point2}
              </p>
            </div>
          </div>
          <div className="lg:w-1/2  w-full flex flex-col lg:gap-8 gap-4 font-semibold">
            <h3 className="bg-neutral_0 rounded-xl md:py-4 py-2 shadow-xl  md:px-10 px-5 text-primary">
              {siteData?.projectDetails[3]?.title}
            </h3>
            <h3 className="bg-neutral_0 w-full  rounded-xl text-primary w-full  md:py-4 py-2 shadow-xl  md:px-10 px-5">
              {siteData?.projectDetails[4]?.title}
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
