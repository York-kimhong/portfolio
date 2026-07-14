import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaNodeJs,
  FaJava,
  FaPython,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiPostman,
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
        level: 95,
        icon: <FaHtml5 />,
      },

      {
        name: "React.js",
        level: 85,
        icon: <FaReact />,
      },

      {
        name: "JavaScript",
        level: 85,
        icon: <FaJsSquare />,
      },

      {
        name: "Next.js",
        level: 75,
        icon: <SiNextdotjs />,
      },

      {
        name: "Tailwind CSS",
        level: 85,
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

      {
        name: "Postman",
        level: 60,
        icon: <SiPostman />,
      },

      {
        name: "REST API",
        level: 60,
        icon: <FaNodeJs />,
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
        level: 75,
        icon: <FaJava />,
      },

      {
        name: "Python",
        level: 70,
        icon: <FaPython />,
      },

      {
        name: "MySQL",
        level: 75,
        icon: <SiMysql />,
      },
    ],
  },
];
