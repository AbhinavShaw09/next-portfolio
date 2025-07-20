"use client";

import { ProjectCard } from "./../components/ProjectCard";
import React from "react";

const ProjectsPage = () => {
  return (
    <React.Fragment>
      <div className="pointer-events-none whitespace-pre-wrap text-left text-5xl font-semibold leading-none text-white my-5">
        Projects
      </div>

      <div className="mb-20 space-y-10">
        <ProjectCard
          title="Syntra-StoreFront"
          description="This is the storefront for the full-stack e-commerce application built using Django, React, and Tailwind CSS. It features user authentication, product management, and a shopping cart system."
          techStack={["React", "Typscript", "Shadcn", "Tailwind CSS"]}
          imageSrc="/syntra_store_front.png"
          link="https://github.com/AbhinavShaw09/Syntra-StoreFront"
        />
        <ProjectCard
          title="Syntra-SellerFront"
          description="This is the sellerfront for the full-stack e-commerce application built using Django, React, and Tailwind CSS. It features user authentication, product management, and a shopping cart system."
          techStack={["React", "Typscript", "Shadcn", "Tailwind CSS"]}
          imageSrc="/syntra_seller_front.png"
          link="https://github.com/AbhinavShaw09/Syntra-SellerFront"
        />
        <ProjectCard
          title="Syntra-Backend"
          description="This is the backend for the full-stack e-commerce application built using Django, React, and Tailwind CSS. It features user authentication, product management, and a shopping cart system."
          techStack={["Django", "Django-Rest-Framework", "Postgres", "RabbitMQ", "Celery"]}
          imageSrc="/syntra_backend.png"
          link="https://github.com/AbhinavShaw09/Syntra-Backend"
        />
        <ProjectCard
          title="MadSocial"
          description="This is a social media application built using Django, HTML and Bootstrap. Users can login/register, update data, post images, and like/comment on posts. It has a clean, responsive UI."
          techStack={["Django", "Html/Css", "Sass", "Bootstrap"]}
          imageSrc="/home_page4.jpeg"
          link="https://github.com/AbhinavShaw09/madSocial"
        />
      </div>
    </React.Fragment>
  );
};

export default ProjectsPage;
