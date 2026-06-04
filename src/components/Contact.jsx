import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaDownload,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-32"
    >
      <div className="section-container">

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
          rounded-[40px]
          p-12
          lg:p-20
          text-center
          "
        >
          <p className="text-cyan-400 uppercase tracking-widest font-semibold">
            Contact
          </p>

          <h2
            className="
            text-5xl
            md:text-6xl
            font-black
            mt-6
            mb-8
            "
          >
            Let's Build Something
            <span className="text-cyan-400">
              {" "}Great
            </span>
          </h2>

          <p
            className="
            text-slate-300
            max-w-3xl
            mx-auto
            leading-relaxed
            text-lg
            "
          >
            Whether you're looking for a developer,
            collaborator, intern, or future engineer,
            I am always open to discussing new opportunities,
            innovative projects, and meaningful challenges.
          </p>

          {/* Contact Buttons */}

          <div
            className="
            flex
            flex-wrap
            justify-center
            gap-5
            mt-12
            "
          >
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=kimhong4446@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="
              flex
              items-center
              gap-3
              bg-cyan-500
              hover:bg-cyan-400
              px-7
              py-4
              rounded-xl
              font-semibold
              transition
              "
            >
              <FaEnvelope />

              Email Me
            </a>

            <a
              href="https://github.com/York-kimhong"
              target="_blank"
              rel="noreferrer"
              className="
              flex
              items-center
              gap-3
              glass
              px-7
              py-4
              rounded-xl
              hover:border-cyan-400
              transition
              "
            >
              <FaGithub />

              GitHub
            </a>

            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noreferrer"
              className="
              flex
              items-center
              gap-3
              glass
              px-7
              py-4
              rounded-xl
              hover:border-cyan-400
              transition
              "
            >
              <FaLinkedin />

              LinkedIn
            </a>

            <a
              href="/resume.pdf"
              className="
              flex
              items-center
              gap-3
              glass
              px-7
              py-4
              rounded-xl
              hover:border-cyan-400
              transition
              "
            >
              <FaDownload />

              Resume
            </a>
          </div>

          {/* Contact Info */}

          <div
            className="
            grid
            md:grid-cols-3
            gap-8
            mt-20
            "
          >
            <div>
              <h3 className="font-bold text-xl mb-3">
                Email
              </h3>

              <p className="text-slate-400">
                kimhong4446@gmail.com
              </p>
            </div>

            <div>
              <h3 className="font-bold text-xl mb-3">
                Location
              </h3>

              <p className="text-slate-400">
                Phnom Penh, Cambodia
              </p>
            </div>

            <div>
              <h3 className="font-bold text-xl mb-3">
                Availability
              </h3>

              <p className="text-slate-400">
                Open to Opportunities
              </p>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}