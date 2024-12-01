import { IoLocationOutline } from "react-icons/io5";
import { useRef, useState, useEffect } from "react";
import { scrollToSection } from "../utils/scrollToSection";
import { useSiteData } from "../contextAPI/SiteDataContext";

const LocationDetails = (props) => {
  const { siteData } = useSiteData();
  const videoRef = useRef(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleFullscreenToggle = () => {
    setIsFullscreen((prev) => !prev);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            videoRef.current.play();
          } else {
            videoRef.current.pause();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <section
      className="relative h-screen overflow-hidden"
      id="locationDetails"
      ref={(el) => props.storeInputRef(el, 2)}
    >
      <h2
        className="flex items-center gap-4 text-2xl md:pt-32 pt-24 px-8"
        onClick={() => props.scrollToSection(2)}
      >
        <IoLocationOutline className="text-primary_500" />
        Location
      </h2>
      <div className="flex md:flex-row flex-col md:gap-8 gap-4 px-8 my-5">
        <div className="bg-neutral_100 p-4 lg:w-1/4 md:w-1/3 w-full text-sm flex items-center text-center rounded-lg">
          {siteData?.locationDetails}
        </div>
        <div className="bg-neutral_100 lg:w-3/4 md:w-2/3 w-full rounded-lg p-4">
          <p className="font-semibold text-primary lg:text-lg mb-1">
            Advantages
          </p>
          <div className="lg:text-normal text-sm lg:gap-10 gap-2 flex lg:flex-row flex-col w-full">
            <div className="lg:w-1/3 w-full flex flex-col gap-2">
              <div className="flex justify-between">
                <p className="flex items-center gap-3">
                  {siteData?.locationAdvantages[0]?.icon}
                  {siteData?.locationAdvantages[0]?.title}
                </p>
                <p> {siteData?.locationAdvantages[0]?.time}</p>
              </div>
              <div className="flex justify-between">
                <p className="flex items-center gap-3">
                  {siteData?.locationAdvantages[1]?.icon}
                  {siteData?.locationAdvantages[1]?.title}
                </p>
                <p>{siteData?.locationAdvantages[1]?.time}</p>
              </div>
            </div>
            <div className="lg:w-1/3 w-full flex flex-col gap-2">
              <div className="flex justify-between">
                <p className="flex items-center gap-3">
                  {siteData?.locationAdvantages[2]?.icon}
                  {siteData?.locationAdvantages[2]?.title}
                </p>
                <p>{siteData?.locationAdvantages[2]?.time}</p>
              </div>
              <div className="flex justify-between">
                <p className="flex items-center gap-3">
                  {siteData?.locationAdvantages[3]?.icon}
                  {siteData?.locationAdvantages[3]?.title}
                </p>
                <p>{siteData?.locationAdvantages[3]?.time}</p>
              </div>
            </div>

            <div className="lg:w-1/3 w-full flex flex-col gap-2">
              <div className="flex justify-between">
                <p className="flex items-center gap-3">
                  {siteData?.locationAdvantages[4]?.icon}
                  {siteData?.locationAdvantages[4]?.title}
                </p>
                <p>{siteData?.locationAdvantages[4]?.time}</p>
              </div>
              <div className="flex justify-between">
                <p className="flex items-center gap-3">
                  {siteData?.locationAdvantages[5]?.icon}
                  {siteData?.locationAdvantages[5]?.title}
                </p>
                <p>{siteData?.locationAdvantages[5]?.time}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        className="bg-neutral_200 absolute bottom-20 cursor-pointer z-10 right-20 text-neutral_0 bg-opacity-30 hidden lg:block border rounded text-sm flex items-center px-3 py-1 mt-4"
        onClick={() => scrollToSection("locationMap")}
      >
        skip
      </button>

      {isFullscreen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black flex justify-center items-center z-50">
          <button
            className="absolute top-4 right-4 text-white text-lg"
            onClick={handleFullscreenToggle}
          >
            X
          </button>
          <video
            className="w-auto h-auto max-w-full max-h-full"
            ref={videoRef}
            src={siteData?.locationVideo}
            autoPlay
            loop
            muted
          />
        </div>
      )}

      <div className="w-full relative h-full">
        <video
          className="w-full object-cover h-full"
          ref={videoRef}
          src={siteData?.locationVideo}
          autoPlay
          loop
          muted
        ></video>
        <button
          className="bg-black absolute top-20 cursor-pointer z-10 left-1/2 -translate-x-1/2 text-neutral_0 bg-opacity-30 border border-2 font-semibold rounded text-sm flex items-center px-3 py-1 mt-4 md:hidden"
          onClick={handleFullscreenToggle}
        >
          Watch Video
        </button>
      </div>
    </section>
  );
};

export default LocationDetails;
