import React from "react";
import { Route, Routes } from "react-router";
import App from "../App";
import Nabvar from "../Navbar/Nabvar";

const Router = () => {
  return (
    <>
      <Nabvar>
        <Routes>
          <Route path="/" element={<App />} />
        </Routes>
      </Nabvar>
    </>
  );
};

export default Router;
