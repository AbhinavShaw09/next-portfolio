import React from "react";
import { TypingAnimation } from "@/components/magicui/typing-animation";

const AboutMe = () => {
  return (
    <React.Fragment>
      <div className="pointer-events-none whitespace-pre-wrap text-left text-5xl font-semibold leading-none text-white my-5">
        <h1 className="scroll-m-20 text-left text-5xl md:text-6xl font-extrabold tracking-tight text-balance">
          About Me
        </h1>
      </div>
      <div className="border-2 border-indigo-600 rounded-xl shadow-lg bg-gray-900 p-6 ">
        <TypingAnimation>Hello World ...</TypingAnimation>I&apos;m Abhinav Shaw
        — a Backend Engineer at Dukaan®. I have 1 year of experience designing
        and building scalable APIs, background services, and database-driven
        systems. My primary tech stack includes Python (Django/DRF), PostgreSQL,
        Redis, Celery, and Docker.{" "}
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
