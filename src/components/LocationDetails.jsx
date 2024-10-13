import { IoLocationOutline } from "react-icons/io5";
import bgLocation from "../img/bgLocation.mp4";
import { useRef } from "react";
import { useEffect } from "react";

const LocationDetails = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // If the video is in view, play it
            videoRef.current.play();
          } else {
            // If the video is out of view, pause it
            videoRef.current.pause();
          }
        });
      },
      { threshold: 0.5 } // Adjust this value (0-1) based on when you want the video to start playing
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    // Cleanup the observer when the component unmounts
    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <section className="relative h-screen" id="locationDetails">
      <h2 className="flex items-center gap-4 text-2xl py-16 px-8">
        <IoLocationOutline className="text-primary_500" />
        Location
      </h2>
      <button className="bg-neutral_200 absolute bottom-20 cursor-pointer right-20 text-neutral_0 bg-opacity-30 border rounded text-sm flex items-center px-3 py-1 mt-4">
        skip
      </button>
      <video
        className=" w-full object-cover h-full"
        ref={videoRef}
        src={bgLocation}
        autoPlay
        loop
        muted
      ></video>
    </section>
  );
};

export default LocationDetails;
