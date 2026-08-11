import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { projects } from "../data";

import ProjectDetailLayout from "./ProjectDetailLayout";

export default function ProjectDetail() {
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, [id]);

  const project = projects.find((item) => item.id === id);

  return <ProjectDetailLayout project={project} />;
}
