import { createContext, useState } from "react";

export const GlobalContext = createContext();

const AppContext = ({ children }) => {
  const [searchInput, setSearchInput] = useState("");
  return (
    <GlobalContext.Provider value={{ searchInput, setSearchInput }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default AppContext;
