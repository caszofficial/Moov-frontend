import { useGetMovies } from "./hooks/useGetMovies";
import Navbar from "./Navbar/Navbar";

const App = () => {
  const { movies, searchInput, setSearchInput, moviesAPI } = useGetMovies();

  return (
    <div className="bg-zinc-200 h-screen flex flex-col">
      <Navbar value={searchInput} onChange={setSearchInput} />
      <div className="flex-1 overflow-auto grid grid-cols-5 gap-5  p-10 justify-items-center">
        {movies?.map((movie) => (
          <div
            className="bg-white border-0 rounded-lg w-50 flex flex-col items-center justify-around shadow-[inset_0px_0px_3px_#000]"
            key={movie._id}
          >
            <h1>{movie.title}</h1>
            <p>{movie.rating}</p>
            <p>{movie.releaseDate}</p>
          </div>
        ))}
        {moviesAPI?.map((movie) => (
          <div
            key={movie.id}
            className=" min-w-[250px] max-w-[250px] bg-white rounded-lg shadow-md"
          >
            {/* 1) Contenedor de la imagen con alto fijo */}
            <div className="w-full h-[400px] overflow-hidden rounded-t-lg">
              <img
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                alt={movie.title || movie.name}
                className="w-full h-full object-fill"
              />
            </div>

            {/* 2) Pie de tarjeta */}
            <div className="p-2 text-center">
              <h2 className="font-semibold text-sm">
                {movie.title || movie.name}
              </h2>
              <p className="text-xs text-gray-500">
                {movie.release_date || movie.first_air_date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
