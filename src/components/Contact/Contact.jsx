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
      {/* PREMIUM GREEN AMBIENT LIGHT */}

      <div
        className="
        absolute


        top-20


        left-1/2


        -translate-x-1/2



        w-[650px]


        h-[350px]



        rounded-full



        bg-emerald-500/15



        dark:bg-emerald-400/10



        blur-[150px]



        pointer-events-none
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


        mb-20
        "
        >
          <p
            className="
          text-xs


          uppercase


          tracking-[0.4em]


          font-bold



          text-emerald-700



          dark:text-emerald-400
          "
          >
            CONTACT
          </p>

          <h2
            className="
          mt-5


          text-4xl


          md:text-6xl


          font-black





          bg-gradient-to-r



          from-emerald-800



          via-emerald-600



          to-green-700





          dark:from-white



          dark:via-emerald-200



          dark:to-green-300





          bg-clip-text


          text-transparent
          "
          >
            Open to Frontend Opportunities
          </h2>

          <p
            className="
          mt-6


          max-w-2xl


          mx-auto



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

        {/* CONTENT */}

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
            duration: 0.8,
          }}
          className="
        grid


        lg:grid-cols-2


        gap-10


        items-start
        "
        >
          <ContactInfo />

          <ContactForm />
        </motion.div>
      </div>
    </section>
  );
}
