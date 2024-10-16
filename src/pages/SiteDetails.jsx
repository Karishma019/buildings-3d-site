import { useEffect ,useRef, useState} from "react";
import { Element, scroller } from 'react-scroll';
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
  const sections = ["section1", "section2", "section3", "section4"];

  // const [currentSection, setCurrentSection] = useState(0); // Track current section
  const currentSectionRef = useRef(0);
  const isThrottling = useRef(false); // Prevent rapid firing of scroll events

  // Scroll to a section by index
  const scrollToSection = (index) => {
    console.log("yash");
    scroller.scrollTo(sections[index], {
      duration: 800,
      smooth: "easeInOutQuart",
    });
  };

  // Handle scroll events
  const handleScroll = (e) => {
    if (isThrottling.current) return; // Throttle scroll to avoid jitter
    console.log('asaas', currentSectionRef.current)
    const scrollDirection = e.deltaY > 0 ? "down" : "up"; // Detect scroll direction
    let newSection = currentSectionRef.current;

    if (scrollDirection === "down" && newSection < sections.length - 1) {
      newSection += 1; // Go to next section
    } else if (scrollDirection === "up" && newSection > 0) {
      newSection -= 1; // Go to previous section
    }
    console.log('bsbsbs', newSection)
    if (newSection !== currentSectionRef.current) {
      console.log('cscscsc', newSection)
      currentSectionRef.current = newSection;
      scrollToSection(newSection);
    }

    // Throttle the scroll event to avoid rapid triggering
    isThrottling.current = true;
    setTimeout(() => (isThrottling.current = false), 1000);
  };



  const storeInputRef = (el, index) => {
    // sections.current[index] = el
  }


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
    window.addEventListener('wheel', handleScroll);

    // let dummy_heights = []

    // for (let dummy_sec in sections.current){
    //   dummy_heights.push(sections.current[dummy_sec].offsetHeight)
    // }

    // setSectionHeights(incrementalSum(dummy_heights))


    // Cleanup on unmount
    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, []);


  return (
    <div>
      <Header />
      <Element
          key="section1"
          name="section1"
          className="section"
      >
          <MainViewSite 
            scrollToSection={scrollToSection}
            storeInputRef={storeInputRef}
          />
      </Element>
      <Element
          key="section2"
          name="section2"
          className="section"
      >
        <ProjectDetails
        scrollToSection={scrollToSection}
        storeInputRef={storeInputRef}
       />
      </Element>
      <Element
          key="section3"
          name="section3"
          className="section"
      >
        <LocationDetails 
          scrollToSection={scrollToSection}
          storeInputRef={storeInputRef}
        />
      </Element>
      <Element
          key="section4"
          name="section4"
          className="section"
      >
          <LocationMap 
            scrollToSection={scrollToSection}
            storeInputRef={storeInputRef}
          />
      </Element>
      




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
