import { useState } from "react";
import TextField from "../../components/ui/TextField";
import Container from "../../components/ui/Container";
import axios from "axios";

const CreateMovie = () => {
  // const [image, setImage] = useState("");
  const [values, setValues] = useState({
    title: "",
    rating: "",
    releaseDate: "",
    imageUrl: "",
  });

  const createMovie = async () => {
    console.log(values);
    try {
      await axios.post("http://localhost:3005/movies", values);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = () => {
    createMovie();
  };

  const handleUploadImage = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    try {
      const { data } = await axios.post(
        "http://localhost:3005/movies/uploadImage",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      console.log(data.url);
      // setImage(data.url)
      setValues({ ...values, imageUrl: data.url });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container title="Create Movie">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 px-10">
        <TextField
          type="file"
          label="upload image"
          onChange={(e) => {
            handleUploadImage(e.target.files[0]);
          }}
        />
        <TextField
          value={values.title}
          onChange={(e) => {
            setValues({ ...values, title: e.target.value });
          }}
          label="Title"
        />
        <TextField
          value={values.rating}
          onChange={(e) => {
            setValues({ ...values, rating: e.target.value });
          }}
          label="Rating"
        />
        <TextField
          type="date"
          value={values.releaseDate}
          onChange={(e) => {
            setValues({ ...values, releaseDate: e.target.value });
          }}
          label="Release Date"
        />
        <TextField
          type="text"
          value={values.description}
          onChange={(e) => {
            setValues({ ...values, description: e.target.value });
          }}
          label="Description"
        />
        <TextField
          type="text"
          value={values.producedBy}
          onChange={(e) => {
            setValues({ ...values, producedBy: e.target.value });
          }}
          label="Produced By"
        />
        <TextField
          type="text"
          value={values.boxOfficeRevenue}
          onChange={(e) => {
            setValues({ ...values, boxOfficeRevenue: e.target.value });
          }}
          label="Box Office Revenue"
        />
        <TextField
          type="text"
          value={values.actors}
          onChange={(e) => {
            setValues({ ...values, actors: e.target.value });
          }}
          label="Actors"
        />
      </div>
      <div className="flex justify-center items-center h-20">
        <button
          className="bg-indigo-500 px-2 w-7/10 py-1 text-xl text-white rounded-lg font-extralight hover:text-indigo-700 hover:bg-indigo-300 hover:cursor-pointer transition duration-300"
          onClick={handleClick}
        >
          Create Moovie
        </button>
      </div>
    </Container>
  );
};

export default CreateMovie;
