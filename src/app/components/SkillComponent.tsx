"use client";

import React from "react";

interface SkillProps {
  name: string;
}

export function SkillComponent({ children }: { children: React.ReactNode }) {
  return (
    <li className="bg-indigo-700/30 text-white rounded px-3 py-1 text-base">
      {children}
    </li>
  );
}

export const FrontendSkillsList = [
  { name: "HTML/CSS" },
  { name: "JavaScript" },
  { name: "React" },
  { name: "Next.js" },
  { name: "Tailwind CSS" },
];

export const BackendSkillsList = [
  { name: "Python" },
  { name: "Django/DRF" },
  { name: "PostgreSQL" },
  { name: "Redis" },
  { name: "Celery" },
  { name: "REST APIs" },
  { name: "JWT Auth" },
  { name: "Payment Integration" },
  { name: "Third-party APIs" },
];

export const DevopsSkillsList = [
  { name: "Docker" },
  { name: "Git" },
  { name: "CI/CD" },
  { name: "Linux" },
];

export const SkillCategorytMap: [string, SkillProps[]][] = [
  ["Frontend", FrontendSkillsList],
  ["Backend", BackendSkillsList],
  ["Devops", DevopsSkillsList],
];
