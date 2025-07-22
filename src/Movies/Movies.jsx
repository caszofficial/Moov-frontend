import MoviesCards from "./Components/MoviesCards";
import MoviesApiCards from "./Components/MoviesApiCards";

const Movies = () => {
  return (
    <div className="grid grid-cols-1 gap-10 justify-items-center content-center">
      <MoviesCards />
      <MoviesApiCards />
    </div>
  );
};

export default Movies;
