import React from "react";
import { useNavigate } from "react-router";

const Container = ({ children, button, title, buttonAction }) => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col bg-white min-w-8/10 min-h-full border-1 border-gray-300 rounded-xl overflow-auto py-5">
      <div className="flex justify-between items-center w-full px-10 h-20">
        <div className="flex justify-center items-center gap-5">
          <button onClick={() => navigate(-1)} className="cursor-pointer">
            Go Back
          </button>
          <p className="text-2xl font-extralight">{title}</p>
        </div>
        {button && (
          <button
            className="bg-indigo-500 px-2 py-1 rounded-lg text-white text-lg font-extralight"
            onClick={buttonAction}
          >
            {button}
          </button>
        )}
      </div>
      <div className="flex-1">{children}</div>
    </div>
  );
};

export default Container;
