import React from "react";

const TextField = ({ value, onChange, label }) => {
  return (
    <>
      {label && (
        <label htmlFor="input">
          <p className="text-lg text-zinc-500 mb-1">{label}</p>
          <input
            type="text"
            value={value}
            onChange={onChange}
            className="border-1 border-zinc-300 w-full px-2 py-1 rounded-lg bg-zinc-100 focus-visible:outline-none"
          />
        </label>
      )}
    </>
  );
};

export default TextField;
