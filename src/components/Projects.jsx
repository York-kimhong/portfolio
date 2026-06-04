import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      title: "Inventory Management System",
      category: "Software Engineering",
      description:
        "Enterprise inventory platform built using Java MVC architecture. Features product management, supplier tracking, stock monitoring, reporting, and order processing.",

      tech: [
        "Java",
        "MySQL",
        "MVC",
      ],

      image:
        "https://placehold.co/1200x800/0f172a/ffffff?text=Inventory+Management+System",

      github: "#",
      demo: "#",
    },

    {
      title: "Laravel E-Commerce Platform",
      category: "Full Stack Development",
      description:
        "Modern e-commerce solution featuring authentication, product catalog management, shopping cart functionality, order processing, and administrative dashboard.",

      tech: [
        "Laravel",
        "PHP",
        "MySQL",
        "Bootstrap",
      ],

      image:
        "https://placehold.co/1200x800/0f172a/ffffff?text=Laravel+E-Commerce",

      github: "#",
      demo: "#",
    },

    {
      title: "Enterprise Network Infrastructure",
      category: "Network Engineering",
      description:
        "Designed and implemented a secure enterprise network with VLAN segmentation, routing protocols, ACL policies, and network security best practices.",

      tech: [
        "Cisco",
        "VLAN",
        "ACL",
        "Routing",
      ],

      image:
        "https://placehold.co/1200x800/0f172a/ffffff?text=Enterprise+Network",

      github: "#",
      demo: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="py-32"
    >
      <div className="section-container">

        {/* Header */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="text-center mb-20"
        >
          <p className="text-cyan-400 uppercase tracking-widest font-semibold">
            Portfolio
          </p>

          <h2 className="section-title mt-4">
            Featured Projects
          </h2>

          <p className="section-subtitle mx-auto">
            A selection of software development,
            web application, and networking
            projects demonstrating technical
            expertise and engineering principles.
          </p>

        </motion.div>

        {/* Projects */}

        <div className="space-y-20">

          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.7,
              }}
              className="
              glass
              rounded-[32px]
              overflow-hidden
              "
            >
              <div
                className={`
                grid
                lg:grid-cols-2
                ${
                  index % 2 !== 0
                    ? "lg:[&>*:first-child]:order-2"
                    : ""
                }
                `}
              >
                {/* Image */}

                <div className="relative">

                  <img
                    src={project.image}
                    alt={project.title}
                    className="
                    w-full
                    h-full
                    object-cover
                    min-h-[350px]
                    "
                  />

                </div>

                {/* Content */}

                <div
                  className="
                  p-10
                  lg:p-14
                  flex
                  flex-col
                  justify-center
                  "
                >
                  <span
                    className="
                    text-cyan-400
                    text-sm
                    uppercase
                    tracking-widest
                    "
                  >
                    {project.category}
                  </span>

                  <h3
                    className="
                    text-4xl
                    font-bold
                    mt-3
                    mb-6
                    "
                  >
                    {project.title}
                  </h3>

                  <p
                    className="
                    text-slate-300
                    leading-relaxed
                    mb-8
                    "
                  >
                    {project.description}
                  </p>

                  {/* Tech Stack */}

                  <div
                    className="
                    flex
                    flex-wrap
                    gap-3
                    mb-8
                    "
                  >
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="
                        px-4
                        py-2
                        rounded-full
                        bg-white/5
                        border
                        border-white/10
                        text-sm
                        "
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}

                  <div
                    className="
                    flex
                    flex-wrap
                    gap-4
                    "
                  >
                    <a
                      href={project.github}
                      className="
                      flex
                      items-center
                      gap-2
                      px-6
                      py-3
                      rounded-xl
                      bg-white/5
                      hover:bg-white/10
                      transition
                      "
                    >
                      <FaGithub />

                      GitHub
                    </a>

                    <a
                      href={project.demo}
                      className="
                      flex
                      items-center
                      gap-2
                      px-6
                      py-3
                      rounded-xl
                      bg-cyan-500
                      hover:bg-cyan-400
                      transition
                      "
                    >
                      <FaExternalLinkAlt />

                      Live Demo
                    </a>

                  </div>

                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}