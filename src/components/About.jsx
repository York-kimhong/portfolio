import { motion } from "framer-motion";
import {
  HiCode,
  HiDatabase,
  HiGlobeAlt,
  HiChip,
} from "react-icons/hi";

export default function About() {
  const highlights = [
    {
      icon: <HiCode />,
      title: "Software Development",
      description:
        "Designing and developing scalable applications using modern programming practices and software engineering principles.",
    },
    {
      icon: <HiDatabase />,
      title: "Database Systems",
      description:
        "Building structured and efficient database solutions with MySQL and relational database design concepts.",
    },
    {
      icon: <HiGlobeAlt />,
      title: "Web Technologies",
      description:
        "Creating responsive and modern web applications using React, Laravel, JavaScript, and related technologies.",
    },
    {
      icon: <HiChip />,
      title: "Enterprise Networking",
      description:
        "Configuring and managing network infrastructures including routing, switching, VLANs, ACLs, and security policies.",
    },
  ];

  return (
    <section
      id="about"
      className="py-32 relative"
    >
      <div className="section-container">

        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-cyan-400 uppercase tracking-widest font-semibold">
            About Me
          </p>

          <h2 className="section-title mt-4">
            Engineering Solutions Through Technology
          </h2>

          <p className="section-subtitle mx-auto">
            I am an Information Technology Engineering student
            at Royal University of Phnom Penh with a strong
            interest in software engineering, full stack
            development, database systems, and enterprise
            networking.

            My goal is to develop technology solutions that
            improve efficiency, solve real-world challenges,
            and create meaningful user experiences.
          </p>
        </motion.div>

        {/* Main Content */}

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="glass rounded-[32px] p-10">

              <h3 className="text-3xl font-bold mb-6">
                Professional Summary
              </h3>

              <p className="text-slate-300 leading-relaxed mb-6">
                I specialize in developing modern software
                applications while continuously expanding my
                knowledge of networking, cybersecurity,
                cloud technologies, and system architecture.
              </p>

              <p className="text-slate-300 leading-relaxed mb-6">
                Throughout my academic journey, I have
                completed projects involving Java
                applications, Laravel web systems,
                database management, and Cisco networking.
              </p>

              <p className="text-slate-300 leading-relaxed">
                I believe successful technology solutions
                are built through strong technical
                foundations, continuous learning, and a
                commitment to quality.
              </p>

            </div>
          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6"
          >
            {highlights.map((item, index) => (
              <div
                key={index}
                className="
                glass
                rounded-3xl
                p-8
                hover:translate-y-[-8px]
                transition-all
                duration-300
                "
              >
                <div
                  className="
                  text-4xl
                  text-cyan-400
                  mb-5
                  "
                >
                  {item.icon}
                </div>

                <h4 className="text-xl font-bold mb-3">
                  {item.title}
                </h4>

                <p className="text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </motion.div>

        </div>

      </div>
    </section>
  );
}