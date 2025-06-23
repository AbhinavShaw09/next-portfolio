"use client";
import React from "react";
import { Safari } from "@/components/magicui/safari";
import { RippleButton } from "@/components/magicui/ripple-button";

const page = () => {
  return (
    <React.Fragment>
      <div className="pointer-events-none whitespace-pre-wrap text-left text-5xl font-semibold leading-none text-white my-5">
        Projects
      </div>
      <div className="border-2 border-indigo-600 rounded-xl shadow-lg bg-gray-900 p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6 overflow-x-auto mb-20">
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <div className="my-2 font-extrabold text-xl md:text-3xl">MadSocial</div>
            <div>
              This is social media application built using django, html and
              bootstrap. Here user can login and register, update their data,
              post images, like and comment on posts. It has a simple and clean
              UI with responsive design.
            </div>
            <div className="my-2 font-extrabold">Tech Stack</div>
            <div className="flex flex-wrap gap-2 my-2">
              <ul className="flex flex-wrap gap-2 p-0 m-0 list-none">
                <li className="bg-indigo-700/30 text-white rounded px-3 py-1 text-base">
                  Django
                </li>
                <li className="bg-indigo-700/30 text-white rounded px-3 py-1 text-base">
                  Html/Css
                </li>
                <li className="bg-indigo-700/30 text-white rounded px-3 py-1 text-base">
                  Sass
                </li>
                <li className="bg-indigo-700/30 text-white rounded px-3 py-1 text-base">
                  Bootstrap
                </li>
              </ul>
            </div>
            <RippleButton className="mt-4 bg-gray-600 hover:bg-gray-700 text-white font-semibold px-4 py-0.5 rounded-2xl">
              <a
                href="https://github.com/AbhinavShaw09/madSocial"
                className="text-white"
              >
                🔗 Link
              </a>
            </RippleButton>
          </div>

          <div className="relative">
            <Safari
              url="magicui.design"
              className="size-full"
              imageSrc="/home_page4.jpeg"
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default page;
