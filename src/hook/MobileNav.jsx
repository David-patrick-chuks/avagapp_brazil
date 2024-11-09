import React, { createContext, useContext, useState } from "react";

const MobileContext = createContext();

export const useMobile = () => {
  return useContext(MobileContext);
};

export const MobileProvider = ({ children }) => {
 const [mobile, setMobile] = useState(false);
 
 const toggleMobile = () =>{
    setMobile(prev => !prev)
    // console.log("hello kofdhd");
    
 }

  const value = {
    mobile,
    toggleMobile
  };

  
  return <MobileContext.Provider value={value}>{children}</MobileContext.Provider>;
};
