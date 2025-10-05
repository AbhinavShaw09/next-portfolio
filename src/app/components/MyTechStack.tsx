import React from "react";
import { OrbitingSkills } from "./OrbitingSkills";
import { SkillCategorytMap } from "./SkillComponent";
import { SkillCategory } from "./SkillCategory";

const MyTechStack = () => {
  return (
    <React.Fragment>
      <div className="pointer-events-none whitespace-pre-wrap text-left text-5xl font-semibold leading-none text-white my-5">
        <h1 className="scroll-m-20 text-left text-5xl md:text-6xl font-extrabold tracking-tight text-balance">
          My Tech Stack
        </h1>
      </div>
      <div className="border-2 border-indigo-600 rounded-xl shadow-lg bg-gray-900 p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6 overflow-x-auto mb-20">
        <div className="flex-1 grid grid-cols-1 gap-6">
          {SkillCategorytMap.map((skillcategory) => {
            return (
              <SkillCategory
                key={skillcategory[0]}
                title={skillcategory[0]}
                skills={skillcategory[1]}
              />
            );
          })}
        </div>
        <div className="flex justify-center md:justify-end w-full md:w-auto min-w-[250px] md:min-w-[350px] lg:min-w-[400px]">
          <OrbitingSkills />
        </div>
      </div>
    </React.Fragment>
  );
};

export default MyTechStack;
