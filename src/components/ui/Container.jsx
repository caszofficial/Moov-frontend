import React from "react";

const Container = ({ children, button, title }) => {
  return (
    <div className="flex flex-col bg-white min-w-8/10 min-h-full border-1 border-gray-300 rounded-xl overflow-auto">
      <div className="flex justify-between items-center w-full px-10 h-20">
        <p className="text-2xl font-bold">{title}</p>
        {button && (
          <button className="bg-indigo-500 px-2 py-1 rounded-lg text-white text-lg font-semibold">
            {button}
          </button>
        )}
      </div>
      <div className="flex-1">{children}</div>
    </div>
  );
};

export default Container;
