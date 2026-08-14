import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaJava,
} from "react-icons/fa";

import {
  SiTypescript,
  SiTailwindcss,
  SiMysql,
} from "react-icons/si";

export const skillCategories = [
  {
    title: "Frontend Development",

    description:
      "Building responsive interfaces and practicing modern frontend development concepts.",

    skills: [
      {
        name: "HTML / CSS",
        level: 80,
        icon: <FaHtml5 />,
      },

      {
        name: "React.js",
        level: 70,
        icon: <FaReact />,
      },

      {
        name: "JavaScript",
        level: 70,
        icon: <FaJsSquare />,
      },

      {
        name: "Tailwind CSS",
        level: 80,
        icon: <SiTailwindcss />,
      },

      {
        name: "TypeScript",
        level: 55,
        icon: <SiTypescript />,
      },
    ],
  },

  {
    title: "UI / UX Design",

    description:
      "Designing simple and user-friendly interfaces with attention to usability and visual consistency.",

    skills: [
      {
        name: "Figma",
        level: 75,
        icon: <FaFigma />,
      },

      {
        name: "Responsive Design",
        level: 90,
        icon: <FaCss3Alt />,
      },

      {
        name: "Component Design",
        level: 75,
        icon: <FaFigma />,
      },
    ],
  },

  {
    title: "Tools & Workflow",

    description:
      "Using development tools and workflows to organize and improve projects.",

    skills: [
      {
        name: "Git",
        level: 80,
        icon: <FaGitAlt />,
      },

      {
        name: "GitHub",
        level: 80,
        icon: <FaGithub />,
      },

    ],
  },

  {
    title: "Programming Fundamentals",

    description:
      "Understanding programming concepts and databases to support application development.",

    skills: [
      {
        name: "Java",
        level: 50,
        icon: <FaJava />,
      },

      {
        name: "MySQL",
        level: 50,
        icon: <SiMysql />,
      },
    ],
  },
];
