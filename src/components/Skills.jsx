import { motion } from "framer-motion";
import {
  FaJava,
  FaReact,
  FaPhp,
  FaGitAlt,
  FaGithub,
  FaLinux,
  FaNodeJs,
} from "react-icons/fa";

import {
  SiLaravel,
  SiMysql,
  SiJavascript,
  SiCisco,
  SiPostman,
} from "react-icons/si";

export default function Skills() {
  const categories = [
    {
      title: "Software Development",
      skills: [
        {
          name: "Java",
          icon: <FaJava />,
        },
        {
          name: "PHP",
          icon: <FaPhp />,
        },
        {
          name: "JavaScript",
          icon: <SiJavascript />,
        },
        {
          name: "Node.js",
          icon: <FaNodeJs />,
        },
      ],
    },

    {
      title: "Web Technologies",
      skills: [
        {
          name: "React",
          icon: <FaReact />,
        },
        {
          name: "Laravel",
          icon: <SiLaravel />,
        },
        {
          name: "MySQL",
          icon: <SiMysql />,
        },
      ],
    },

    {
      title: "Networking",
      skills: [
        {
          name: "Cisco",
          icon: <SiCisco />,
        },
        {
          name: "Routing",
          icon: "🌐",
        },
        {
          name: "VLAN",
          icon: "🔗",
        },
        {
          name: "ACL",
          icon: "🛡️",
        },
      ],
    },

    {
      title: "Tools & Platforms",
      skills: [
        {
          name: "Git",
          icon: <FaGitAlt />,
        },
        {
          name: "GitHub",
          icon: <FaGithub />,
        },
        {
          name: "Linux",
          icon: <FaLinux />,
        },
        {
          name: "Postman",
          icon: <SiPostman />,
        },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-32"
    >
      <div className="section-container">

        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="text-cyan-400 uppercase tracking-widest font-semibold">
            Technical Expertise
          </p>

          <h2 className="section-title mt-4">
            Skills & Technologies
          </h2>

          <p className="section-subtitle mx-auto">
            Technologies and tools I use to build
            software solutions, web applications,
            and enterprise network infrastructures.
          </p>
        </motion.div>

        {/* Categories */}

        <div className="space-y-12">

          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
                delay: categoryIndex * 0.1,
              }}
            >
              <h3
                className="
                text-2xl
                font-bold
                mb-6
                "
              >
                {category.title}
              </h3>

              <div
                className="
                grid
                sm:grid-cols-2
                md:grid-cols-3
                lg:grid-cols-4
                gap-6
                "
              >
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="
                    glass
                    rounded-3xl
                    p-8
                    hover:-translate-y-2
                    transition-all
                    duration-300
                    "
                  >
                    <div
                      className="
                      text-5xl
                      text-cyan-400
                      mb-5
                      "
                    >
                      {skill.icon}
                    </div>

                    <h4
                      className="
                      text-xl
                      font-semibold
                      "
                    >
                      {skill.name}
                    </h4>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}