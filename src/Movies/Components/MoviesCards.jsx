import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const MoviesCards = () => {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();
  const moviesData = async () => {
    try {
      const { data } = await axios.get("http://localhost:3005/movies");
      setMovies(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    moviesData();
  }, []);

  return (
    <>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-10 justify-items-center content-center">
        {movies?.map((movie) => (
          <div
            className="min-w-[250px] max-w-[250px] bg-white rounded-lg shadow-md hover:cursor-pointer hover:scale-105 transition-all duration-300 hover:rotate-3"
            key={movie._id}
            onClick={() => navigate(`/movies/${movie._id}`)}
          >
            <div className="w-full h-[400px] overflow-hidden rounded-t-lg">
              <img
                src={movie.imageUrl || null}
                alt={movie.title || movie.name}
                className="w-full h-full object-fill"
              />
            </div>
            <div className="p-2 text-center">
              <h2 className="font-extralight text-lg">{movie.title}</h2>
              <p className="font-extralight text-md">Rating: {movie.rating}</p>
              <p className="font-extralight text-sm text-gray-500">
                {movie.releaseDate}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MoviesCards;
