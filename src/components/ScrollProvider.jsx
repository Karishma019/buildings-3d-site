import React, { createContext, useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

export const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
  const scrollRef = useRef(null);
  const locomotiveScrollRef = useRef(null);

  useEffect(() => {
    // Initialize Locomotive Scroll
    if (scrollRef.current && locomotiveScrollRef.current) {
      locomotiveScrollRef.current = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
        // You can add more options here
      });

      // Update ScrollTrigger on scroll
      locomotiveScrollRef.current.on("scroll", (obj) => {
        ScrollTrigger.update();
      });

      // Clean up on component unmount
      return () => {
        if (locomotiveScrollRef.current) {
          locomotiveScrollRef.current.destroy();
        }
      };
    }
  }, []);

  return (
    <ScrollContext.Provider value={{ scrollRef }}>
      <div ref={scrollRef} data-scroll-container>
        {children}
      </div>
    </ScrollContext.Provider>
  );
};
