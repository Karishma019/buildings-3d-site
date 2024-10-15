import { useEffect } from "react";
import Buildings from "../components/Buildings";
import ConnectWithUs from "../components/ConnectWithUs";
import Header from "../components/Header";
import LocationDetails from "../components/LocationDetails";
import LocationMap from "../components/LocationMap";
import MainViewSite from "../components/MainViewSite";
import ProjectDetails from "../components/ProjectDetails";
import SampleHouseTour from "../components/SampleHouseTour";

const SiteDetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Header />
      <div className="scrollsnap scroll-hidden">
        <MainViewSite />
        <ProjectDetails />
        <LocationDetails />
        <LocationMap />
        <Buildings />
        <SampleHouseTour />
        <ConnectWithUs />
      </div>
    </div>
  );
};

export default SiteDetails;
