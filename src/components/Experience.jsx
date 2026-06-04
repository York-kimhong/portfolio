import { motion } from "framer-motion";
import {
  HiAcademicCap,
  HiCode,
  HiServer,
  HiGlobeAlt,
} from "react-icons/hi";

export default function Experience() {
  const timeline = [
    {
      year: "2027",
      title: "Bachelor of Information Technology Engineering",
      organization: "Royal University of Phnom Penh",
      description:
        "Expected graduation with focus on software engineering, database systems, networking, and enterprise technologies.",
      icon: <HiAcademicCap />,
    },

    {
      year: "2026",
      title: "Full Stack Portfolio Development",
      organization: "Personal Project",
      description:
        "Designed and developed a premium portfolio showcasing software engineering, networking, and project experience.",
      icon: <HiCode />,
    },

    {
      year: "2025",
      title: "Laravel E-Commerce Platform",
      organization: "Web Development Project",
      description:
        "Built a complete e-commerce solution with authentication, product management, and order processing.",
      icon: <HiGlobeAlt />,
    },

    {
      year: "2025",
      title: "Java MVC Inventory System",
      organization: "Software Engineering Project",
      description:
        "Developed a structured inventory management system using Java, MVC architecture, and MySQL.",
      icon: <HiServer />,
    },

    {
      year: "2024",
      title: "Enterprise Networking Projects",
      organization: "Cisco Networking",
      description:
        "Configured VLANs, routing protocols, ACLs, switching infrastructure, and network security policies.",
      icon: <HiServer />,
    },
  ];

  return (
    <section
      id="experience"
      className="py-32 relative"
    >
      <div className="section-container">

        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-24"
        >
          <p className="text-cyan-400 uppercase tracking-widest font-semibold">
            Journey
          </p>

          <h2 className="section-title mt-4">
            Experience & Education
          </h2>

          <p className="section-subtitle mx-auto">
            A timeline highlighting academic achievements,
            technical growth, and software engineering projects.
          </p>
        </motion.div>

        {/* Timeline */}

        <div className="relative max-w-5xl mx-auto">

          {/* Center Line */}

          <div
            className="
            absolute
            left-1/2
            top-0
            bottom-0
            w-[2px]
            bg-white/10
            hidden
            md:block
            "
          />

          {timeline.map((item, index) => (
            <motion.div
              key={index}
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
                duration: 0.6,
                delay: index * 0.1,
              }}
              className={`
                relative
                mb-16
                flex
                ${
                  index % 2 === 0
                    ? "md:justify-start"
                    : "md:justify-end"
                }
              `}
            >
              <div
                className="
                glass
                rounded-3xl
                p-8
                w-full
                md:w-[45%]
                "
              >
                <div className="flex items-center gap-4 mb-5">

                  <div
                    className="
                    w-14
                    h-14
                    rounded-xl
                    bg-cyan-500/10
                    border
                    border-cyan-500/20
                    flex
                    items-center
                    justify-center
                    text-cyan-400
                    text-2xl
                    "
                  >
                    {item.icon}
                  </div>

                  <div>
                    <p className="text-cyan-400 font-semibold">
                      {item.year}
                    </p>

                    <h3 className="font-bold text-xl">
                      {item.title}
                    </h3>
                  </div>

                </div>

                <p className="text-slate-400 mb-3">
                  {item.organization}
                </p>

                <p className="text-slate-300 leading-relaxed">
                  {item.description}
                </p>

              </div>

              {/* Timeline Dot */}

              <div
                className="
                hidden
                md:flex
                absolute
                left-1/2
                top-10
                -translate-x-1/2
                w-5
                h-5
                rounded-full
                bg-cyan-400
                shadow-[0_0_20px_rgba(34,211,238,0.8)]
                "
              />
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}