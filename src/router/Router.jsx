import React from "react";
import { Route, Routes } from "react-router";
import App from "../App";
import CreateMovie from "../Movies/Create/CreateMovie";
import Movies from "../Movies/Movies";
import MovieDetails from "../Movies/Update/MovieDetails";

const Router = ({ value, onChange }) => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Movies value={value} onChange={onChange} />}
        />
        <Route path="/movies/:id" element={<MovieDetails />} />
        <Route path="/create" element={<CreateMovie />} />
      </Routes>
    </>
  );
};

export default Router;
