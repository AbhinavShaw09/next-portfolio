import { HoverEffect } from "@/components/ui/card-hover-effect";

export function CardHoverEffect() {
  return (
    <div className="max-w-5xl mx-auto px-4 border border-gray-800 rounded-lg shadow-lg bg-gray-900">
      <HoverEffect items={Experience} />
    </div>
  );
}
export const Experience = [
  {
    title: "Dukaan®",
    description:
      "Integrated Paytm gateway services for users to recieve the tractions from DukaanPay, added the blacklisting fraud users feature for the super admin, adding new features and maintaining the codebase.",
    role: "Backend Engineer",
    date: "October 2024 - November 2025",
    link: "https://mydukaan.io/",
  },
  {
    title: "Nirmata",
    description:
      "Worked as a Automation Engineer where I created the automation framework from scratch using playwright and jenkins for CI, Automated 70% of the manual test cases. Reduced the total duration of automation pipeline from 4 hours down to 1 hour.",
    role: "SDET Intern",
    date: "July 2024 - October 2024",
    link: "http://nirmata.com/",
  },
  {
    title: "Octowit AI",
    description:
      "Worked as a backend engineer where I was involved in writing api for the backend using drf and django, worked on gcp and azure services for different features ,used docker for containerisation, also worked on the backend for the prototype of NamaskarAI.",
    role: "SDE Intern",
    date: "Aug 2024 - Nov 2024",
    link: "http://octowit.ai/",
  },
];
