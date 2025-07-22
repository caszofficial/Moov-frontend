import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import Container from "../../components/ui/Container";
import TextField from "../../components/ui/TextField";

const MovieDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [movie, setMovie] = useState([]);

  const movieData = async () => {
    try {
      const { data } = await axios.get(`http://localhost:3005/movies/${id}`);
      setMovie(data);
    } catch (error) {
      console.log(error);
    }
  };

  const updateMovie = async () => {
    axios.patch(`http://localhost:3005/movies/${id}`, movie);
  };

  const deleteMovie = async () => {
    axios.delete(`http://localhost:3005/movies/${id}`);
    navigate("/");
  };

  useEffect(() => {
    movieData();
  }, []);

  return (
    <Container title={movie.title} button="Delete" buttonAction={deleteMovie}>
      <div className="md:grid grid-cols-1 w-full justify-items-center md:justify-items-end px-10 mb-10 hidden">
        <p className="font-extralight ">
          Movie Id: <span className="text-zinc-400">{movie._id}</span>
        </p>
        <p className="font-extralight">
          Release Date:{" "}
          <span className="text-zinc-400">{movie.releaseDate}</span>
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 content-center justify-items-center py-10">
        <div className=" grid content-center justify-items-center h-[300px] lg:h-[500px] w-fit mx-5 lg:mx-0 mb-10 lg:m-0">
          <img
            src="https://m.media-amazon.com/images/S/pv-target-images/a9d31d636887740986efb364d5194136199eb65c7bbaef157b5e1812025c2cd2.jpg"
            alt=""
            className="w-full lg:w-[400px] rounded-lg"
          />
        </div>
        <div className="flex flex-col gap-5 w-6/10">
          <TextField
            value={movie.title}
            label="Title"
            onChange={(e) => {
              setMovie({ ...movie, title: e.target.value });
            }}
          />
          <TextField
            value={movie.description}
            label="Description"
            onChange={(e) => {
              setMovie({ ...movie, description: e.target.value });
            }}
          />

          <TextField
            value={movie.producedBy}
            label="Produced By"
            onChange={(e) => {
              setMovie({ ...movie, producedBy: e.target.value });
            }}
          />
          <div className="flex flex-col gap-2">
            <p className="text-lg font-extralight text-zinc-500">Cast</p>
            {movie.actors?.map((actor) => (
              <div
                className="bg-indigo-600 rounded-lg flex-1 h-fit"
                key={actor}
              >
                <div className=" rounded-lg border-1 border-dashed border-white m-1">
                  <p className="text-white text-sm p-1 font-extralight">
                    {actor}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <TextField
            value={movie.boxOfficeRevenue}
            label="Box Office Revenue"
            onChange={(e) => {
              setMovie({ ...movie, boxOfficeRevenue: e.target.value });
            }}
          />
          <TextField
            value={movie.rating}
            label="Rating"
            onChange={(e) => setMovie({ ...movie, rating: e.target.value })}
          />

          <button
            className="bg-indigo-600 text-white text-xl rounded-lg py-1 hover:bg-indigo-600/80 hover:cursor-pointer transition-all duration-300 font-extralight"
            onClick={updateMovie}
          >
            Modify Moovie
          </button>
        </div>
      </div>
    </Container>
  );
};

export default MovieDetails;
