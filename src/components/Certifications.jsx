import { motion } from "framer-motion";
import {
  FaCertificate,
  FaAward,
  FaMedal,
} from "react-icons/fa";

export default function Certifications() {
  const certifications = [
    {
      title: "CCNA",
      issuer: "Cisco",
      status: "In Progress",
      icon: <FaCertificate />,
    },

    {
      title: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      status: "Planned",
      icon: <FaAward />,
    },

    {
      title: "Oracle Java Foundations",
      issuer: "Oracle",
      status: "Planned",
      icon: <FaMedal />,
    },

    {
      title: "Google IT Support",
      issuer: "Google",
      status: "Planned",
      icon: <FaCertificate />,
    },
  ];

  return (
    <section
      id="certifications"
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
            Achievements
          </p>

          <h2 className="section-title mt-4">
            Certifications & Learning
          </h2>

          <p className="section-subtitle mx-auto">
            Continuous learning and professional development
            are essential parts of my journey as an IT engineer.
          </p>
        </motion.div>

        {/* Certification Cards */}

        <div
          className="
          grid
          md:grid-cols-2
          lg:grid-cols-4
          gap-8
          "
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
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
                duration: 0.6,
                delay: index * 0.1,
              }}
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
                mb-6
                "
              >
                {cert.icon}
              </div>

              <h3
                className="
                text-xl
                font-bold
                mb-3
                "
              >
                {cert.title}
              </h3>

              <p className="text-slate-400 mb-4">
                {cert.issuer}
              </p>

              <span
                className="
                inline-block
                px-4
                py-2
                rounded-full
                bg-cyan-500/10
                border
                border-cyan-500/20
                text-cyan-400
                text-sm
                "
              >
                {cert.status}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Learning Philosophy */}

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
          className="
          glass
          rounded-[32px]
          p-10
          mt-20
          text-center
          "
        >
          <h3 className="text-3xl font-bold mb-6">
            Commitment to Continuous Growth
          </h3>

          <p
            className="
            text-slate-300
            leading-relaxed
            max-w-3xl
            mx-auto
            "
          >
            Technology evolves rapidly, and I believe
            continuous learning is essential for staying
            relevant. My focus is on strengthening expertise
            in software engineering, cloud computing,
            networking, cybersecurity, and modern development
            practices.
          </p>
        </motion.div>

      </div>
    </section>
  );
}