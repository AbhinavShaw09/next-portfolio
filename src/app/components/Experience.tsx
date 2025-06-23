import React from "react";
import { CardHoverEffect } from "./CardHoverEffect";

const Experience = () => {
  return (
    <React.Fragment>
      <div className="pointer-events-none whitespace-pre-wrap text-left text-5xl font-semibold leading-none text-white my-5">
        Experience
      </div>
      <div className="mt-2 text-gray-300 border-2 border-indigo-600 rounded-xl">
        <CardHoverEffect />
      </div>
    </React.Fragment>
  );
};

export default Experience;
