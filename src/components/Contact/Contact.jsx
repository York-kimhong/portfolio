import { motion } from "framer-motion";

import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

const smoothEase = [0.22, 1, 0.36, 1];

export default function Contact() {
  return (
    <section
      id="contact"
      className="
        relative
        py-32
      "
    >
      <div className="section-container relative z-10">
        {/* ================================
            HEADER
        ================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: false,
            amount: 0.15,
          }}
          transition={{
            duration: 0.4,
            ease: smoothEase,
          }}
          className="
            mb-20
            text-center
          "
        >
          {/* LABEL */}

          <motion.p
            initial={{
              opacity: 0,
              y: 8,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: false,
              amount: 0.15,
            }}
            transition={{
              duration: 0.3,
              ease: smoothEase,
            }}
            className="
              text-xs
              font-bold
              uppercase
              tracking-[0.4em]
              text-emerald-700
              dark:text-emerald-400
            "
          >
            CONTACT
          </motion.p>

          {/* TITLE */}

          <h2
            className="
              mt-5
              bg-gradient-to-r
              from-emerald-800
              via-emerald-600
              to-green-700
              bg-clip-text
              text-4xl
              font-black
              text-transparent
              md:text-6xl
              dark:from-white
              dark:via-emerald-200
              dark:to-green-300
            "
          >
            Open to Frontend Opportunities
          </h2>

          {/* DESCRIPTION */}

          <p
            className="
              mx-auto
              mt-6
              max-w-2xl
              text-lg
              leading-relaxed
              text-slate-600
              dark:text-slate-400
            "
          >
            I am currently looking for frontend internship opportunities where I
            can contribute my skills, collaborate with a team, and continue
            growing as a developer.
          </p>
        </motion.div>

        {/* ================================
            CONTENT

            No parent animation here.
            ContactInfo and ContactForm
            should animate independently.
        ================================= */}

        <div
          className="
            grid
            items-start
            gap-10
            lg:grid-cols-2
          "
        >
          {/* LEFT */}

          <motion.div
            initial={{
              opacity: 0,
              x: -35,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: false,
              amount: 0.15,
            }}
            transition={{
              duration: 0.4,
              ease: smoothEase,
            }}
          >
            <ContactInfo />
          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{
              opacity: 0,
              x: 35,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: false,
              amount: 0.15,
            }}
            transition={{
              duration: 0.4,
              delay: 0.04,
              ease: smoothEase,
            }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
