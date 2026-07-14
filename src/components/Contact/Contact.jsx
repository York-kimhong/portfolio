import { motion } from "framer-motion";

import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section
      id="contact"
      className="
      relative
      py-32
      overflow-hidden
      "
    >
      {/* BACKGROUND GLOW */}

      <motion.div
        animate={{
          x: [0, 80, -40, 0],
          y: [0, -50, 30, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
        absolute
        top-20
        left-10

        w-96
        h-96

        bg-cyan-500/10

        rounded-full

        blur-[140px]
        "
      />

      <motion.div
        animate={{
          x: [0, -60, 40, 0],
          y: [0, 40, -30, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
        absolute
        bottom-10
        right-10

        w-[420px]
        h-[420px]

        bg-purple-500/10

        rounded-full

        blur-[150px]
        "
      />

      <div
        className="
        section-container
        relative
        z-10
        "
      >
        {/* HEADER */}

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
          text-center
          mb-16
          "
        >
          <p
            className="
            text-cyan-400
            uppercase
            tracking-[0.35em]
            text-sm
            font-semibold
            "
          >
            CONTACT
          </p>

          <h2
            className="
            mt-5

            text-4xl
            md:text-5xl

            font-black

            bg-gradient-to-r

            from-white

            via-cyan-300

            to-purple-400

            bg-clip-text

            text-transparent
            "
          >
            Open to Frontend Opportunities
          </h2>

          <p
            className="
            mt-5

            max-w-2xl

            mx-auto

            text-slate-400

            leading-relaxed
            "
          >
            I am currently looking for frontend internship opportunities where I
            can contribute my skills, collaborate with a team, and continue
            growing as a developer.
          </p>
        </motion.div>

        {/* CONTENT */}

        <div
          className="
          grid

          lg:grid-cols-2

          gap-10
          "
        >
          <ContactInfo />

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
