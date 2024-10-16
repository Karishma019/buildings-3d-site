import { useEffect ,useRef, useState} from "react";
import Buildings from "../components/Buildings";
import ConnectWithUs from "../components/ConnectWithUs";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LocationDetails from "../components/LocationDetails";
import LocationMap from "../components/LocationMap";
import MainViewSite from "../components/MainViewSite";
import ProjectDetails from "../components/ProjectDetails";
import SampleHouseTour from "../components/SampleHouseTour";



const SiteDetails = () => {

  const [scrollPosition, setScrollPosition] = useState(0);
  const [deltaY, setDeltaY] = useState(0);
  const [sectionHeights, setSectionHeights] = useState([])



  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);

  const sections = useRef({});
  const [activeSection, setActiveSection] = useState(0);

  const scrollToSection = (index) => {
    sections.current[index].scrollIntoView({ behavior: 'smooth' });
    setActiveSection(index);
  };

  const storeInputRef = (el, index) => {
    sections.current[index] = el
  }

  const handleScroll = (e) => {
    let newActive = activeSection;
    console.log("yaysay", activeSection, window.scrollY)
    if (window.scrollY > 250 && activeSection == 0) {
      console.log('scrolled', newActive)
      scrollToSection(1)
      
    }
  };

  const handleWheel = (el) => {
    setScrollPosition(window.scrollY);
    const deltaY = el.deltaY;
    setDeltaY(deltaY);
  };

  function incrementalSum(arr) {
    let result = [];
    let sum = 0;
  
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
      result.push(sum);
    }
  
    return result;
  }

  useEffect(() => {
    window.addEventListener('wheel', handleWheel);

    let dummy_heights = []

    for (let dummy_sec in sections.current){
      dummy_heights.push(sections.current[dummy_sec].offsetHeight)
    }

    setSectionHeights(incrementalSum(dummy_heights))


    // Cleanup on unmount
    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, []);

  // Trigger scrollIntoView based on wheel scroll position
  useEffect(() => {
    let building_section_index = 3;


    for (let i=0; i < sectionHeights.length ; i++){
      if (scrollPosition < 150){
        break;
      }
      else if (scrollPosition > sectionHeights[building_section_index] && scrollPosition < sectionHeights[building_section_index+1]){
        break;
      }
      else if (i == 0 && scrollPosition < sectionHeights[i]){
        if (deltaY > 0){
          scrollToSection(i + 1)
        }
        else{
          scrollToSection(i)
        }
        
        break;
      }
      else if (scrollPosition > sectionHeights[i-1]+100 && scrollPosition < sectionHeights[i]){
        if (i == sectionHeights.length -1){
          break;
        }
        if (deltaY > 0){
          scrollToSection(i + 1)
        }
        else{
          scrollToSection(i)
        }
        break;
      }
    }

  }, [scrollPosition]);

  return (
    <div>
      <Header />
      <MainViewSite 
      scrollToSection={scrollToSection}
      storeInputRef={storeInputRef}
      />
      <ProjectDetails
        scrollToSection={scrollToSection}
        storeInputRef={storeInputRef}
       />
      <LocationDetails 
      scrollToSection={scrollToSection}
      storeInputRef={storeInputRef}
      />
      <LocationMap 
            scrollToSection={scrollToSection}
            storeInputRef={storeInputRef}
      />
      <Buildings
                  scrollToSection={scrollToSection}
                  storeInputRef={storeInputRef}
       />
      <SampleHouseTour 
                        scrollToSection={scrollToSection}
                        storeInputRef={storeInputRef}
      />
      <ConnectWithUs 
                        scrollToSection={scrollToSection}
                        storeInputRef={storeInputRef}
      />
      <Footer />
    </div>
  );
};

export default SiteDetails;
