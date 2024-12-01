import React, { createContext, useContext, useState } from "react";

export const SiteDataContext = createContext();

export const SiteDataProvider = ({ children }) => {
  const [siteData, setSiteData] = useState(null);

  return (
    <SiteDataContext.Provider value={{ siteData, setSiteData }}>
      {children}
    </SiteDataContext.Provider>
  );
};

export const useSiteData = () => {
  const data = useContext(SiteDataContext);
  return data;
};
