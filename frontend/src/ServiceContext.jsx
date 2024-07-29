import React, { createContext, useState } from "react";

export const ServiceContext = createContext();

export const ServiceProvider = ({ children }) => {
  const [serviceType, setServiceType] = useState("instagram");

  return (
    <ServiceContext.Provider value={{ serviceType, setServiceType }}>
      {children}
    </ServiceContext.Provider>
  );
};
