import React, { useEffect } from "react";
import Container from "../components/ui/Container";
import useGetMovies from "../hooks/useGetMovies";

const Movies = ({ movies, moviesAPI }) => {
  return (
    <Container title="Top Worldwide movies">
      <div className="grid grid-cols-1 gap-5">
        <div className="grid grid-cols-5 gap-5 justify-items-center content-center">
          {movies?.map((movie) => (
            <div
              className="min-w-[250px] max-w-[250px] bg-white rounded-lg shadow-md"
              key={movie._id}
            >
              <div className="w-full h-[400px] overflow-hidden rounded-t-lg">
                <img
                  src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                  alt={movie.title || movie.name}
                  className="w-full h-full object-fill"
                />
              </div>
              <div className="p-2 text-center">
                <h2 className="font-semibold text-sm">{movie.title}</h2>
                <p className="font-semibold text-xs">{movie.rating}</p>
                <p className="text-xs text-gray-500">{movie.releaseDate}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-5 content-center justify-items-center gap-5">
          {moviesAPI?.map((movie) => {
            return (
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
            );
          })}
        </div>
      </div>
    </Container>
  );
};

export default Movies;
