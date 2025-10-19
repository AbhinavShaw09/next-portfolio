import React from "react";

const AboutMe = () => {
  return (
    <React.Fragment>
      <div className="pointer-events-none whitespace-pre-wrap text-left text-5xl font-semibold leading-none text-white my-5">
        <h1 className="scroll-m-20 text-left text-5xl md:text-6xl font-extrabold tracking-tight text-balance">
          About Me
        </h1>
      </div>
      <div className="border-2 border-indigo-600 rounded-xl shadow-lg bg-gray-900 p-6 ">
        I&apos;m Abhinav Shaw
        — Software Engineer specializing in scalable APIs and system design —
        with 1 year of hands-on experience. My primary tech stack includes{" "}
        <span className="font-extrabold italic">Python, Django, DRF, FastAPI, NextJS ,PostgreSQL, Redis, Celery, and Docker.</span>{" "}
        <div className="mt-2">
          I enjoy solving real-world problems with clean, maintainable code and
          have worked on integrating payment gateways, JWT-based authentication,
          and third-party APIs.
        </div>
      </div>
    </React.Fragment>
  );
};

export default AboutMe;
