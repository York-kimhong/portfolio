import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi";

export default function Hero() {
  return (
    <section
      id="home"
      className="
      min-h-screen
      flex
      items-center
      relative
      overflow-hidden
      "
    >
      {/* Background Glow */}

      <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px]" />

      <div className="absolute bottom-20 right-20 w-96 h-96 bg-violet-500/20 rounded-full blur-[120px]" />

      <div className="section-container">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Side */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >

            <span
              className="
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
              IT ENGINEERING STUDENT • FULL STACK DEVELOPER
            </span>

            <h1
              className="
              mt-8
              text-6xl
              md:text-7xl
              xl:text-8xl
              font-black
              leading-tight
              "
            >
              Building
              <br />

              <span className="text-cyan-400">
                Modern Software
              </span>

              <br />

              Solutions
            </h1>

            <p
              className="
              mt-8
              text-lg
              text-slate-300
              max-w-xl
              leading-relaxed
              "
            >
              Passionate Information Technology Engineering
              student focused on software engineering,
              full stack development, enterprise networking,
              and modern web technologies.

              I enjoy building scalable systems that solve
              real-world problems.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <a
                href="#projects"
                className="
                bg-cyan-500
                hover:bg-cyan-400
                px-7
                py-4
                rounded-xl
                font-semibold
                flex
                items-center
                gap-2
                transition
                "
              >
                View Projects

                <HiArrowRight />
              </a>

              <a
                href="/resume.pdf"
                className="
                glass
                px-7
                py-4
                rounded-xl
                hover:border-cyan-400
                transition
                "
              >
                Download Resume
              </a>

            </div>

          </motion.div>

          {/* Right Side */}

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >

            <div
              className="
              glass
              rounded-[32px]
              p-8
              "
            >

              <div
                className="
                aspect-square
                rounded-3xl
                bg-gradient-to-br
                from-cyan-500/20
                to-violet-500/20
                flex
                items-center
                justify-center
                "
              >
                {/* Replace with your photo later */}

                <div
                  className="
                  w-70
                  h-70
                  rounded-full
                  bg-slate-800
                  border
                  border-white/10
                  flex
                  items-center
                  justify-center
                  text-6xl
                  font-bold
                  "
                >
                  <img
                    src="/profile.jpg"
                    alt="York Kimhong"
                    className="w-70 h-70 rounded-full object-cover"
                  />
                </div>

              </div>

              <div className="grid grid-cols-2 gap-6 mt-8">

                <div>
                  <h3 className="text-4xl font-bold text-cyan-400">
                    15+
                  </h3>

                  <p className="text-slate-400">
                    Projects
                  </p>
                </div>

                <div>
                  <h3 className="text-4xl font-bold text-cyan-400">
                    10+
                  </h3>

                  <p className="text-slate-400">
                    Technologies
                  </p>
                </div>

                <div>
                  <h3 className="text-4xl font-bold text-cyan-400">
                    3+
                  </h3>

                  <p className="text-slate-400">
                    Years Learning
                  </p>
                </div>

                <div>
                  <h3 className="text-4xl font-bold text-cyan-400">
                    100%
                  </h3>

                  <p className="text-slate-400">
                    Commitment
                  </p>
                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}