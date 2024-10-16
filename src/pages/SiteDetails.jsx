import { useEffect ,useRef, useState} from "react";
import { Element, scroller, animateScroll as scroll  } from 'react-scroll';
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
  const scrollPosition = useRef(0);
  const sections = [
    "section1",
    "section2",
    "section3",
    "section4",
    "section5",
    "section6",
    "section7",
  ];

  const sections_obj = useRef({});

  const sectionHeights = useRef([]);

  // const [currentSection, setCurrentSection] = useState(0); // Track current section
  const currentSectionRef = useRef(0);
  const isThrottling = useRef(false); // Prevent rapid firing of scroll events
  const touchStartY = useRef(0); // Track where the touch started

  // Scroll to a section by index
  const scrollToSection = (index) => {
    if (index == 0){
      scroll.scrollTo(0, {
        duration: 800,
        smooth: "easeInOutQuart",
      });
    }
    else{
      scroller.scrollTo(sections[index], {
        duration: 800,
        smooth: "easeInOutQuart",
      });
    }

  };

  // Move to the next or previous section based on direction
  const moveToSection = (direction) => {
    console.log("1", scrollPosition.current, sectionHeights.current);
    let newSection = currentSectionRef.current;
    let building_section_index = 3;

    if (
      scrollPosition.current > sectionHeights.current[building_section_index] &&
      scrollPosition.current <
        sectionHeights.current[building_section_index + 1]
    ) {
      // Throttle the events to avoid jitter
      isThrottling.current = true;
      setTimeout(() => (isThrottling.current = false), 1000);
      return;
    }

    if (direction === "down" && newSection < sections.length - 1) {
      newSection += 1; // Move to the next section
    } else if (direction === "up" && newSection > 0) {
      newSection -= 1; // Move to the previous section
    }

    console.log("2", newSection, currentSectionRef.current);

    if (newSection !== currentSectionRef.current) {
      // currentSectionRef.current = newSection; // Update the ref value
      scrollToSection(newSection); // Smooth scroll to the new section
    }

    // Throttle the events to avoid jitter
    isThrottling.current = true;
    setTimeout(() => (isThrottling.current = false), 1000);
  };

  // Handle scroll events
  const handleScroll = (e) => {
    scrollPosition.current = window.scrollY;
    for (let i = 0; i < sectionHeights.current.length; i++) {
      if (window.scrollY < sectionHeights.current[i]) {
        currentSectionRef.current = i;
        break;
      }
    }
    if (isThrottling.current) return; // Throttle scroll to avoid jitter)
    const scrollDirection = e.deltaY > 0 ? "down" : "up"; // Detect scroll direction
    moveToSection(scrollDirection);
  };

  // Handle Touch Start (for Mobile)
  const handleTouchStart = (e) => {
    touchStartY.current = e.touches[0].clientY; // Record the Y position of the touch start
    scrollPosition.current = window.scrollY;
  };

  // Handle Touch Move (for Mobile)
  const handleTouchMove = (e) => {
    scrollPosition.current = window.scrollY;
    for (let i=0; i < sectionHeights.current.length ; i++){
      if (window.scrollY < sectionHeights.current[i]){
        currentSectionRef.current = i
        break
      }
    }
    if (isThrottling.current) return; // Throttle to prevent rapid triggers

    const touchEndY = e.touches[0].clientY; // Y position where the touch ended
    const direction = touchEndY < touchStartY.current ? "down" : "up"; // Determine swipe direction

    // Only trigger section scroll if the swipe is significant
    if (Math.abs(touchEndY - touchStartY.current) > 50) {
      moveToSection(direction);
    }
  };

  const storeInputRef = (el, index) => {
    sections_obj.current[index] = el;
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
    // Add event listeners for both wheel and touch events
    window.addEventListener("wheel", handleScroll); // Desktop
    window.addEventListener("touchstart", handleTouchStart); // Mobile (touch start)
    window.addEventListener("touchmove", handleTouchMove); // Mobile (touch move)
    console.log("yasshashash");

    let dummy_heights = [];

    for (let dummy_sec in sections_obj.current) {
      dummy_heights.push(sections_obj.current[dummy_sec].offsetHeight);
    }

    sectionHeights.current = incrementalSum(dummy_heights);

    // Cleanup event listeners on unmount
    return () => {
      window.removeEventListener("wheel", handleScroll);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Header />
      <Element key="section1" name="section1" className="section">
        <MainViewSite
          scrollToSection={scrollToSection}
          storeInputRef={storeInputRef}
        />
      </Element>
      <Element key="section2" name="section2" className="section">
        <ProjectDetails
          scrollToSection={scrollToSection}
          storeInputRef={storeInputRef}
        />
      </Element>
      <Element key="section3" name="section3" className="section">
        <LocationDetails
          scrollToSection={scrollToSection}
          storeInputRef={storeInputRef}
        />
      </Element>
      <Element key="section4" name="section4" className="section">
        <LocationMap
          scrollToSection={scrollToSection}
          storeInputRef={storeInputRef}
        />
      </Element>

      <Element key="section5" name="section5" className="section">
        <Buildings
          scrollToSection={scrollToSection}
          storeInputRef={storeInputRef}
        />
      </Element>

      <Element key="section6" name="section6" className="section">
        <SampleHouseTour
          scrollToSection={scrollToSection}
          storeInputRef={storeInputRef}
        />
      </Element>

      <Element key="section7" name="section7" className="section">
        <ConnectWithUs
          scrollToSection={scrollToSection}
          storeInputRef={storeInputRef}
        />
      </Element>

      <Footer />
    </div>
  );
};

export default SiteDetails;
