import React from "react";
import { Route, Routes } from "react-router";
import App from "../App";
import CreateMovie from "../Movies/Create/CreateMovie";
import Movies from "../Movies/Movies";

const Router = ({ movies, moviesAPI }) => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Movies movies={movies} moviesAPI={moviesAPI} />}
        />
        <Route path="/create" element={<CreateMovie />} />
      </Routes>
    </>
  );
};

export default Router;
