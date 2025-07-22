import { useNavigate } from "react-router";

const Navbar = ({ value, onChange }) => {
  // const { searchInput, setSearchInput } = useContext(AppContext);
  const navigate = useNavigate();
  return (
    <div className="h-fit px-5 grid grid-cols-1 md:grid-cols-2">
      <div className="h-full flex justify-center md:justify-start items-center">
        <h1
          className="text-3xl font-extralight text-center cursor-pointer text-indigo-500 md:py-0 py-5"
          onClick={() => navigate("/")}
        >
          Moov
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 content-center justify-items-center">
        <button
          className="text-white bg-indigo-600 md:bg-transparent md:text-indigo-600 p-2 rounded-lg cursor-pointer font-extralight text-lg"
          onClick={() => navigate("/create")}
        >
          Create a Moovie
        </button>
        <div className="flex flex-col justify-center items-center">
          <label
            htmlFor="input"
            className="font-extralight text-sm w-fit md:hidden"
          >
            Search for a moovie
          </label>
          <input
            type="text"
            placeholder="Avengers"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="border-b-1 px-2 py-1 text-lg border-indigo-500 text-indigo-500 font-extralight focus-visible:outline-none focus-visible:border-b-2"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
