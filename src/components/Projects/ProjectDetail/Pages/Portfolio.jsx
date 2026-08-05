import ProjectDetailLayout from "../ProjectDetailLayout";

import { projects } from "../../data";

export default function Portfolio() {
  const project = projects.find(
    (item) => item.title === "Personal Portfolio Website",
  );

  console.log("Portfolio project:", project);

  return <ProjectDetailLayout project={project} />;
}
