export const scrollToSection = (id) => {
  console.log(id);
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

export const scrollToSectionWithoutDelay = (id) => {
  console.log(id);
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "auto" });
  }
};
