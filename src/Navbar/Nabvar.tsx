import React from "react";

const Nabvar = () => {
  return (
    <div className="bg-indigo-500 h-15 flex justify-between px-10 items-center">
      <h1 className="text-2xl text-center text-white">API MOVIES</h1>
      <input
        type="text"
        placeholder="Avengers"
        className="border-1 px-2 rounded-md py-1 border-white text-white focus-visible:outline-none"
      />
    </div>
  );
};

export default Nabvar;
