"use client";
import React from "react";

import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import MyTechStack from "./components/MyTechStack";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <React.Fragment>
      <div className="mt-4 md:max-w-4xl max-w-xl text-left text-md leading-relaxed text-gray-300 ">
        <AboutMe />
        <Experience />
        <Projects />
        <MyTechStack />
      </div>
    </React.Fragment>
  );
}
