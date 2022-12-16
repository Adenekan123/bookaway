import { createContext, useState, useEffect } from "react";

export const HotelsContext = createContext({
  hotels: [],
});

export const HotelsProvider = ({ children }) => {
  const [hotels, setHotels] = useState([]);

  const value = { hotels };
  return (
    <HotelsContext.Provider value={value}>{children}</HotelsContext.Provider>
  );
};
