import axios from "axios";
import { useEffect, useState } from "react";

export const useGetMovies = () => {
  const [movies, setMovies] = useState([]);
  const [moviesAPI, setMoviesAPI] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const moviesData = async () => {
    try {
      const { data } = await axios.get("http://localhost:3005/movies");
      setMovies(data);
    } catch (error) {
      console.log(error);
    }
  };

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

    // Si el usuario teclea antes de los 500ms, limpiamos el timeout
    return () => {
      clearTimeout(handler);
    };
  }, [searchInput]);

  useEffect(() => {
    moviesData();
    moviesFromAPI();
  }, []);

  return { movies, searchInput, setSearchInput, moviesAPI };
};

export default useGetMovies;
