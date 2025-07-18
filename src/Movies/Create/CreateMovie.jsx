import React, { useEffect, useState } from "react";
import TextField from "../../components/ui/TextField";
import Container from "../../components/ui/Container";
import axios from "axios";

const CreateMovie = () => {
  const [values, setValues] = useState({
    title: "",
    rating: "",
    releaseDate: "",
  });

  const createMovie = async () => {
    try {
      await axios.post("http://localhost:3005/movies", values);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = () => {
    createMovie();
  };

  return (
    <Container title="Create Movie">
      <div className="grid grid-cols-2 gap-5 px-10">
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
          value={values.releaseDate}
          onChange={(e) => {
            setValues({ ...values, releaseDate: e.target.value });
          }}
          label="Release Date"
        />
      </div>
      <div className="flex justify-center items-center h-20">
        <button
          className="bg-indigo-500 px-2 w-7/10 py-1 text-xl text-white rounded-lg hover:text-indigo-700 hover:bg-indigo-300 hover:cursor-pointer transition duration-300"
          onClick={handleClick}
        >
          Create
        </button>
      </div>
    </Container>
  );
};

export default CreateMovie;
