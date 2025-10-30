"use client";

import { ProjectCard } from "./../components/ProjectCard";
import React from "react";

const projects = [
  {
    title: "Pollify",
    description:
      "Pollify is a real-time opinion polling platform that allows users to create polls, vote, like polls, and view live updates as other users interact. It’s designed to be fast, responsive, and engaging — enabling instant feedback and crowd-driven insights.",
    techStack: ["FastApi", "NextJs", "Tanstack Query", "Shadcn", "Docker"],
    imageSrc: "/pollify.png",
    links: [
      { name: "🌎 link", url: "https://pollify.xyz/login" },
      { name: "🔗 github", url: "https://github.com/AbhinavShaw09/pollify" },
    ],
  },
  {
    title: "Syntra",
    description:
      "This is the full-stack e-commerce application built using Django, React, and Tailwind CSS. It features user authentication, product management, and a shopping cart system. It is split into a storefront, a seller front, and a backend.",
    techStack: [
      "React",
      "Typscript",
      "Shadcn",
      "Tailwind CSS",
      "Django",
      "Django-Rest-Framework",
      "Postgres",
      "RabbitMQ",
      "Celery",
    ],
    imageSrc: "/syntra_store_front.png",
    links: [
      {
        name: "🔗 storefront",
        url: "https://github.com/AbhinavShaw09/Syntra-StoreFront",
      },
      {
        name: "🔗 sellerfront",
        url: "https://github.com/AbhinavShaw09/Syntra-SellerFront",
      },
      {
        name: "🔗 backend",
        url: "https://github.com/AbhinavShaw09/Syntra-Backend",
      },
    ],
  },

  {
    title: "MadSocial",
    description:
      "This is a social media application built using Django, HTML and Bootstrap. Users can login/register, update data, post images, and like/comment on posts. It has a clean, responsive UI.",
    techStack: ["Django", "Html/Css", "Sass", "Bootstrap"],
    imageSrc: "/home_page4.jpeg",
    links: [
      { name: "🔗 github", url: "https://github.com/AbhinavShaw09/madSocial" },
    ],
  },
];

const Projects = () => {
  return (
    <React.Fragment>
      <div className="pointer-events-none whitespace-pre-wrap text-left text-5xl font-semibold leading-none text-white my-5">
        <h1 className="scroll-m-20 text-left text-5xl md:text-6xl font-extrabold tracking-tight text-balance">
          Projects
        </h1>
      </div>

      <div className="space-y-10">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            techStack={project.techStack}
            imageSrc={project.imageSrc}
            links={project.links}
          />
        ))}
      </div>
    </React.Fragment>
  );
};

export default Projects;
