import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../context/AppContext";

const MoviesApiCards = () => {
  const { searchInput } = useContext(GlobalContext);

  const [moviesAPI, setMoviesAPI] = useState([]);
  const moviesFromAPI = async () => {
    const options = {
      method: "GET",
      url: `https://api.themoviedb.org/3/search/movie?query=${searchInput}&include_adult=false`,
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2OWIyZDUxNzUzMjQ4ODJlMzY0NmYzOGQ0YzNmZjhiYSIsIm5iZiI6MTc1Mjc5MDk4MC43NCwic3ViIjoiNjg3OTc3YzQ3ZmFhZDQ3NjdhMjA0MTRlIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.CNUHonsJjiyJXEjg3fz5Dm2lJNGLKrAUGipJfOANomQ",
      },
    };

    try {
      const { data } = await axios.request(options);
      console.log(data.results);
      setMoviesAPI(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!searchInput) {
      setMoviesAPI([]);
      return;
    }
    const handler = setTimeout(() => {
      moviesFromAPI();
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [searchInput]);

  return (
    <>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 content-center justify-items-center gap-10">
        {moviesAPI?.map((movie) => {
          return (
            <div
              key={movie.id}
              className=" min-w-[250px] max-w-[250px] bg-white rounded-lg shadow-md hover:cursor-pointer hover:scale-105 transition-all duration-300 hover:rotate-3"
            >
              {/* 1) Contenedor de la imagen con alto fijo */}
              <div className="w-full h-[300px] overflow-hidden rounded-t-lg">
                <img
                  src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                  alt={movie.title || movie.name}
                  className="w-full h-full object-fill"
                />
              </div>

              {/* 2) Pie de tarjeta */}
              <div className="p-2 text-center">
                <h2 className="font-extralight text-lg">
                  {movie.title || movie.name}
                </h2>
                <p className="font-extralight text-md">
                  Vote avg: {movie.vote_average}
                </p>
                <p className="text-md font-extralight text-gray-500">
                  {movie.release_date || movie.first_air_date}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MoviesApiCards;
