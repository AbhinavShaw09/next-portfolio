"use client";
import React from "react";
import { SkillComponent } from "./SkillComponent";

interface SkillCategoryProps {
  title: string;
  skills: { name: string }[];
}

export function SkillCategory({ title, skills }: SkillCategoryProps) {
  return (
    <div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <ul className="flex flex-wrap gap-2 pl-0 list-none">
        {skills.map((skillcategory) => (
          <SkillComponent key={skillcategory.name}>
            {skillcategory.name}
          </SkillComponent>
        ))}
      </ul>
    </div>
  );
}
