import { SiReact, SiNextdotjs, SiTypescript, SiGit } from "react-icons/si";

import FloatingTechIcon from "./FloatingTechIcon";

export default function TechIcons() {
  return (
    <>
      <FloatingTechIcon
        position="top-24 left-20"
        duration={12}
        icon={<SiReact className="text-3xl text-cyan-400" />}
      />

      <FloatingTechIcon
        position="top-28 right-20"
        duration={14}
        icon={<SiNextdotjs className="text-3xl text-white" />}
      />

      <FloatingTechIcon
        position="bottom-32 left-16"
        duration={13}
        icon={<SiGit className="text-3xl text-orange-400" />}
      />

      <FloatingTechIcon
        position="bottom-32 right-16"
        duration={11}
        icon={<SiTypescript className="text-3xl text-blue-400" />}
      />
    </>
  );
}
