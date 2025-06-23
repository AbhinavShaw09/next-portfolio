import { OrbitingCircles } from "@/components/magicui/orbiting-circles";
import { OrbitingsIcons } from "./OrbitingIcons";

export function OrbitingSkills() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden">
      <OrbitingCircles iconSize={40}>
        <OrbitingsIcons.react />
        <OrbitingsIcons.tailwindcss />
        <OrbitingsIcons.nextjs />
        <OrbitingsIcons.django />
        <OrbitingsIcons.python />
        <OrbitingsIcons.javascipt />
      </OrbitingCircles>
      <OrbitingCircles iconSize={30} radius={80} reverse speed={2}>
        <OrbitingsIcons.redis />
        <OrbitingsIcons.git />
        <OrbitingsIcons.kubernetes />
        <OrbitingsIcons.docker />
        <OrbitingsIcons.postgres />
      </OrbitingCircles>
    </div>
  );
}
