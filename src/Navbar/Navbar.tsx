import { useNavigate } from "react-router";

const Navbar = ({ value, onChange }) => {
  const navigate = useNavigate();
  return (
    <div className=" bg-indigo-500 h-15 flex justify-between px-10 items-center">
      <h1 className="text-2xl text-center text-white">API MOVIES</h1>
      <button
        className=" bg-white p-2 rounded-lg"
        onClick={() => navigate("/create")}
      >
        Create
      </button>
      <input
        type="text"
        placeholder="Avengers"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="border-1 px-2 rounded-md py-1 border-white text-white focus-visible:outline-none"
      />
    </div>
  );
};

export default Navbar;
