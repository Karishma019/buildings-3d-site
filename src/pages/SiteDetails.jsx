import { useEffect, useRef, useState } from "react";
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


  useEffect(() => {
    // Extract query parameters from the URL
    const params = new URLSearchParams(window.location.search);
    const downloadUrl = params.get("download"); // Query parameter: ?download=<URL>

    if (downloadUrl) {
      // Trigger the download
      const anchor = document.createElement("a");
      anchor.href = "https://estate-explorer-apk-store.s3.ap-south-1.amazonaws.com/Arcadia111.apk?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCmFwLXNvdXRoLTEiSDBGAiEAhT8pJ68MPyNg%2FPwYeHzTtoWNIOFRZc5A2%2BUd%2BqPpCFQCIQDAvehdbNsORWNLvpgmXwR5hmbOpT9f50NJyJA75AOuPSr9AghsEAQaDDU0NTI4NTU4NTM0MiIMR4ndc7mRCi0brLtFKtoCLpCX4ZM%2B4EbbJu4fxw5vcZnkMfUwPHDbZBhQDN8OejC%2FQTDGeUOsOQeaeUBf%2BNlTyuMjkgPFLrKbsSrk%2Bn9p5xpqnDnC3kqvkwWDdDhYAGnFHilObDt1N6238xYOYVCPdvKi2%2BUC69omBAd%2Fdiz8K%2BmntJCBF%2F6CsoeldSdX9u9nGIsx%2FSZk9872ZrxOpvJEyzPTCzDUmCt9yXhSOJ1tX8JCUWUFcJFNh86E6HVfL7CNHfz8tUzp29%2Bv0%2FkG%2Fp8DCOHh8x12ZaAkqWT1q3cJWc0zS516iHKhwbv%2BRa80Olj%2BnaJG7SydxChnW2iEeOUwsVfAEqT6Q1p9QM0eI3RBy55ZIgvdjl3W99DTimSE%2BF8vlljmL2qKumj%2Fobkfbj0avGmAWAuaEer6MgtjMKINCNzCYe%2Brd9F62ddUCTMKyJqsNUS0LlzYybSrQ3kRmcz3lhkXlT9O2ZpAHTDx4tG4BjqyAkGbmqPOypGfgLcF0%2BN0MMR0ucBxSUpvG%2BHansn7c7trMrWsPdG9%2BHEzhsWTCVJ1hZ8LaZZizBfe1Mym20M4efqWJYCDbv2gdDcJH8xz6hBIkaCCwaB74VEm3ePM4qaAL%2BsecCxr7kEPpyUWTBOTYVxMAscI8KSf2mK9fCXB2XprE4ZMG8gypT%2FSmXnq170GT2xSzFWoyS00P6LS3vWpnHr8e6Bj2g3o%2BRlFVP4WXjO0mGLn5NyNSUTUfHEmqoSLyKlrxngrvubOdw7GqVJ2lYOaGJ58xRg7YcpQs0KWAfQjyUMA8iUxkgRWheAWw8n9w5PGC5SWqraa%2F3WIefa0Mfh9FA58a50aMRGVkNNh1G43JkxVIB5FMe68Nerd26Ftf%2BJuthqHQqROZTvRhpNmxq44jg%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241020T025751Z&X-Amz-SignedHeaders=host&X-Amz-Expires=43200&X-Amz-Credential=ASIAX55MNXG7OKY3APEN%2F20241020%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Signature=6fce220f19d1972ba81df97f1b3908d980a87879dc16673c8d197754d3c49eea";
      // anchor.download = ""; // Optional: Suggests the file to be downloaded
      anchor.target = "_blank"; // Open in a new tab (optional)
      anchor.rel = "noopener noreferrer"; // Security best practices

      document.body.appendChild(anchor);
      anchor.click();
      document.body.removeChild(anchor);
    }
  }, []); // Runs once when the component loads

  const sections_obj = useRef({});

  const sectionHeights = useRef([]);

  const [buildingStage, setBuildingStage] = useState(0);

  const tempBuild = useRef(0);

  // const [currentSection, setCurrentSection] = useState(0); // Track current section
  const currentSectionRef = useRef(0);
  const isThrottling = useRef(false); // Prevent rapid firing of scroll events
  const touchStartY = useRef(0); // Track where the touch started

  // Scroll to a section by index
  const scrollToSection = (index) => {
    localStorage.setItem("fromInteraction", 0);
    if (index == 0) {
      scroll.scrollTo(0, {
        duration: 800,
        smooth: "easeInOutQuart",
      });
    } else {
      scroller.scrollTo(sections[index], {
        duration: 800,
        smooth: "easeInOutQuart",
      });
    }
  };

  // Move to the next or previous section based on direction
  const moveToSection = (direction) => {
    let newSection = currentSectionRef.current;
    let building_section_index = 3;
    console.log("yash")
    if (
      (scrollPosition.current > sectionHeights.current[building_section_index] &&
      scrollPosition.current <
        sectionHeights.current[building_section_index + 1] &&
      tempBuild.current > -1 && direction == "down" && tempBuild.current != animationScrollCount) || 
      (tempBuild.current < animationScrollCount+1 && direction == "up" &&
        scrollPosition.current > sectionHeights.current[building_section_index] &&
      scrollPosition.current <
        sectionHeights.current[building_section_index + 1] && tempBuild.current != 0
      )
    ) {
      isThrottling.current = true;
      setTimeout(() => (isThrottling.current = false), 1500);
      // Throttle the events to avoid jitter
      if (direction === "down") {
        setBuildingStage((prevValue) =>
          prevValue < animationScrollCount ? prevValue + 1 : prevValue
        );
        tempBuild.current < animationScrollCount
          ? (tempBuild.current += 1)
          : tempBuild.current;
      } else {
        setBuildingStage((prevValue) =>
          prevValue > 0 ? prevValue - 1 : prevValue
        );
        tempBuild.current > 0 ? (tempBuild.current -= 1) : tempBuild.current;
      }

      return;
    } 

    if (direction === "down" && newSection < sections.length - 1) {
      newSection += 1; // Move to the next section
    } else if (direction === "up" && newSection > 0) {
      newSection -= 1; // Move to the previous section
    }

    if (newSection !== currentSectionRef.current) {
      // currentSectionRef.current = newSection; // Update the ref value
      scrollToSection(newSection); // Smooth scroll to the new section
    }

    // Throttle the events to avoid jitter
    isThrottling.current = true;
    setTimeout(() => (isThrottling.current = false), 1300);
  };

  // Handle scroll events
  const handleScroll = (e) => {
    // console.log("yash", e.deltaY)
    e.preventDefault();
    scrollPosition.current = window.scrollY;

    // Uncomment this portion to decide current section based on scroll position
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
    e.preventDefault();
    scrollPosition.current = window.scrollY;

    // Uncomment this portion to decide current section based on scroll position
    for (let i = 0; i < sectionHeights.current.length; i++) {
      if (window.scrollY < sectionHeights.current[i]) {
        currentSectionRef.current = i;
        break;
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
    window.addEventListener("wheel", handleScroll, { passive: false }); // Desktop
    window.addEventListener("touchstart", handleTouchStart, { passive: false }); // Mobile (touch start)
    window.addEventListener("touchmove", handleTouchMove, { passive: false }); // Mobile (touch move)

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
        duration: 0,
        duration: 0,
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
