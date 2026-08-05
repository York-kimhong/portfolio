import ProjectDetailLayout from "../../../projectdetail/ProjectDetailLayout";

import { projects } from "../../../projectData";

export default function UniversitySystem() {
  const project = projects.find(
    (item) => item.title === "University Management System",
  );

  return <ProjectDetailLayout project={project} />;
}
