import React, { useEffect, useRef, useState } from "react";

const StepScroll = () => {
  const sections = useRef([]);
  const [activeSection, setActiveSection] = useState(0);

  const handleScroll = (e) => {
    const deltaY = e.deltaY;
    let newActive = activeSection;

    if (deltaY > 0 && activeSection < sections.current.length - 1) {
      newActive = activeSection + 1;
    } else if (deltaY < 0 && activeSection > 0) {
      newActive = activeSection - 1;
    }

    if (newActive !== activeSection) {
      setActiveSection(newActive);
      sections.current[newActive].scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    window.addEventListener("wheel", handleScroll);
    return () => window.removeEventListener("wheel", handleScroll);
  }, [activeSection]);

  return (
    <div>
      {[...Array(5)].map((_, index) => (
        <div
          key={index}
          ref={(el) => (sections.current[index] = el)}
          style={{
            height: "100vh",
            backgroundColor: index % 2 === 0 ? "lightblue" : "lightcoral",
          }}
        >
          <h1>Section {index + 1}</h1>
        </div>
      ))}
    </div>
  );
};

export default StepScroll;
