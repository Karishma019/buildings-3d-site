import { useCallback, useEffect, useRef, useState } from "react";
import { Element, scroller, animateScroll as scroll } from "react-scroll";
import Buildings from "../components/Buildings";
import ConnectWithUs from "../components/ConnectWithUs";
import Header from "../components/Header";
import LocationDetails from "../components/LocationDetails";
import LocationMap from "../components/LocationMap";
import MainViewSite from "../components/MainViewSite";
import ProjectDetails from "../components/ProjectDetails";
import SampleHouseTour from "../components/SampleHouseTour";
import Footer from "../components/Footer";

const animationScrollCount = 3;

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

  const [buildingStage, setBuildingStage] = useState(0);

  const tempBuild = useRef(0);

  // const [currentSection, setCurrentSection] = useState(0); // Track current section
  const currentSectionRef = useRef(0);
  const isThrottling = useRef(false); // Prevent rapid firing of scroll events
  const touchStartY = useRef(0); // Track where the touch started

  // Scroll to a section by index
  const scrollToSection = useCallback(
    (index) => {
      localStorage.setItem("fromInteraction", 0);
      const scrollOptions = {
        duration: 800,
        smooth: "easeInOutQuart",
      };
      if (index === 0) {
        scroll.scrollTo(0, scrollOptions);
      } else {
        scroller.scrollTo(sections[index], scrollOptions);
      }
    },
    [sections]
  );

  // Move to the next or previous section based on direction
  const moveToSection = useCallback((direction) => {
    let newSection = currentSectionRef.current;
    const building_section_index = 3;

    if (
      scrollPosition.current > sectionHeights.current[building_section_index] &&
      scrollPosition.current < sectionHeights.current[building_section_index + 1] &&
      tempBuild.current < animationScrollCount &&
      tempBuild.current > -1
    ) {
      isThrottling.current = true;
      setTimeout(() => (isThrottling.current = false), 1500);

      if (direction === "down") {
        setBuildingStage((prevValue) => Math.min(prevValue + 1, animationScrollCount));
        tempBuild.current = Math.min(tempBuild.current + 1, animationScrollCount);
      } else {
        setBuildingStage((prevValue) => Math.max(prevValue - 1, 0));
        tempBuild.current = Math.max(tempBuild.current - 1, 0);
      }
      return;
    } else {
      setBuildingStage(0);
    }

    if (direction === "down" && newSection < sections.length - 1) {
      newSection += 1;
    } else if (direction === "up" && newSection > 0) {
      newSection -= 1;
    }

    if (newSection !== currentSectionRef.current) {
      scrollToSection(newSection);
    }

    isThrottling.current = true;
    setTimeout(() => (isThrottling.current = false), 1300);
  }, [scrollToSection, sections]);
  // Handle scroll events
  const handleScroll = useCallback((e) => {
    e.preventDefault();
    if (isThrottling.current) return;

    scrollPosition.current = window.scrollY;
    requestAnimationFrame(() => {
      for (let i = 0; i < sectionHeights.current.length; i++) {
        if (scrollPosition.current < sectionHeights.current[i]) {
          currentSectionRef.current = i;
          break;
        }
      }
      const scrollDirection = e.deltaY > 0 ? "down" : "up";
      moveToSection(scrollDirection);
    });
  }, [moveToSection]);

  // Handle Touch Start (for Mobile)
  const handleTouchStart = useCallback((e) => {
    touchStartY.current = e.touches[0].clientY;
  }, []);

  // Handle Touch Move (for Mobile)
  const handleTouchMove = useCallback((e) => {
    e.preventDefault();
    if (isThrottling.current) return;

    const touchEndY = e.touches[0].clientY;
    const direction = touchEndY < touchStartY.current ? "down" : "up";

    if (Math.abs(touchEndY - touchStartY.current) > 50) {
      moveToSection(direction);
    }
  }, [moveToSection]);

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
    window.addEventListener("wheel", handleScroll, { passive: false }); // Desktop
    window.addEventListener("touchstart", handleTouchStart, { passive: false }); // Mobile (touch start)
    window.addEventListener("touchmove", handleTouchMove, { passive: false }); // Mobile (touch move)
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
    const fromInteraction = localStorage.getItem("fromInteraction");
    if (parseInt(fromInteraction) || 0 == 1) {
      // scroller.scrollTo(sections[5], {
      //   duration: 0,   // No animation
      //   delay: 0,      // No delay
      //   smooth: false, // Disable smooth scrolling
      //   // offset: -50,   // Optional: Adjust for header offset
      // });
      // setBuildingStage((prevValue) => animationScrollCount);
    } else {
      scroll.scrollTo(0, {
        duration: 800,
        smooth: "easeInOutQuart",
      });
    }
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
          buildingStage={buildingStage}
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
