import { useContext } from "react";
import Navbar from "./Navbar/Navbar";
import Router from "./router/Router";
import { GlobalContext } from "./context/AppContext";
import Footer from "./Footer/Footer";

const App = () => {
  const { searchInput, setSearchInput } = useContext(GlobalContext);
  return (
    <div className="bg-zinc-200 min-h-screen flex flex-col">
      <Navbar value={searchInput} onChange={setSearchInput} />
      <div className="flex-1 overflow-hidden p-10 grid justify-items-center">
        <Router />
      </div>
      <Footer />
    </div>
  );
};

export default App;
