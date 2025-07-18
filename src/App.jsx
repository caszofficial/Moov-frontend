import { useGetMovies } from "./hooks/useGetMovies";
import Navbar from "./Navbar/Navbar";
import Router from "./router/Router";

const App = () => {
  const { searchInput, setSearchInput, movies, moviesAPI } = useGetMovies();
  return (
    <div className="bg-zinc-200 h-screen flex flex-col">
      <Navbar value={searchInput} onChange={setSearchInput} />
      <div className="flex-1 overflow-hidden p-10 grid justify-items-center">
        <Router movies={movies} moviesAPI={moviesAPI} />
      </div>
    </div>
  );
};

export default App;
