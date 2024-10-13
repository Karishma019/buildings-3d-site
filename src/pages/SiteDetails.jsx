import Buildings from "../components/Buildings";
import ConnectWithUs from "../components/ConnectWithUs";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LocationDetails from "../components/LocationDetails";
import LocationMap from "../components/LocationMap";
import MainViewSite from "../components/MainViewSite";
import ProjectDetails from "../components/ProjectDetails";

const SiteDetails = () => {
  return (
    <>
      <Header />
      <MainViewSite />
      <ProjectDetails />
      <LocationDetails />
      <LocationMap />
      <Buildings />
      <ConnectWithUs />
      <Footer />
    </>
  );
};

export default SiteDetails;
