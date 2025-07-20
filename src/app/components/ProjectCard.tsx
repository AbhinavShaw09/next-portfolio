"use client";

import { Safari } from "@/components/magicui/safari";
import { RippleButton } from "@/components/magicui/ripple-button";
import React from "react";

type ProjectCardProps = {
  title: string;
  description: string;
  techStack: string[];
  imageSrc: string;
  link: string;
};

export const ProjectCard = ({
  title,
  description,
  techStack,
  imageSrc,
  link,
}: ProjectCardProps) => {
  return (
    <div className="border-2 border-indigo-600 rounded-xl shadow-lg bg-gray-900 p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6 overflow-x-auto">
      <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <h2 className="my-2 font-extrabold text-xl md:text-3xl">{title}</h2>

          <p className="text-white text-sm leading-relaxed">{description}</p>

          <div className="my-3 font-extrabold text-white">Tech Stack</div>
          <ul className="flex flex-wrap gap-2 p-0 m-0 list-none">
            {techStack.map((tech) => (
              <li
                key={tech}
                className="bg-indigo-700/30 text-white rounded px-3 py-1 text-base"
              >
                {tech}
              </li>
            ))}
          </ul>

          <RippleButton className="mt-4 bg-gray-600 hover:bg-gray-700 text-white font-semibold px-4 py-0.5 rounded-2xl">
            <a href={link} target="_blank" rel="noopener noreferrer">
              🔗 Link
            </a>
          </RippleButton>
        </div>

        <div className="relative">
          <Safari
            url={link.replace("https://", "").replace("www.", "")}
            className="size-full"
            imageSrc={imageSrc}
          />
        </div>
      </div>
    </div>
  );
};
