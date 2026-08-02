import { motion } from "framer-motion";

import {
  FaGithub,
  FaLinkedin,
  FaDownload,
  FaTelegramPlane,
  FaEnvelope,
} from "react-icons/fa";

export default function ContactInfo() {
  const socials = [
    {
      name: "Email",
      icon: <FaEnvelope />,
      link: "mailto:kimhong4446@gmail.com",
    },

    {
      name: "Telegram",
      icon: <FaTelegramPlane />,
      link: "https://t.me/Yorkkimhong",
    },

    {
      name: "GitHub",
      icon: <FaGithub />,
      link: "https://github.com/York-kimhong",
    },

    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      link: "https://linkedin.com/in/york-kimhong-90523338a",
    },
  ];

  return (
    <div
      className="
      relative

      overflow-hidden



      rounded-[32px]



      p-6

      sm:p-8





      bg-white/40



      dark:bg-white/[0.06]





      border



      border-black/10



      dark:border-white/10





      backdrop-blur-2xl





      shadow-[0_20px_60px_rgba(16,185,129,0.12)]

      "
    >
      {/* GREEN GLASS FLOOD */}

      <div
        className="
        absolute


        bottom-0


        left-0


        w-full


        h-40




        bg-gradient-to-t



        from-emerald-500/20



        to-transparent





        blur-3xl



        opacity-70



        pointer-events-none
        "
      />

      <div
        className="
        relative

        z-10
        "
      >
        <h3
          className="
        text-xl

        sm:text-2xl


        font-black


        mb-8



        text-slate-900



        dark:text-white
        "
        >
          Let's Connect
        </h3>

        <div
          className="
        space-y-6
        "
        >
          <div>
            <p
              className="
            text-sm

            text-slate-500

            dark:text-slate-400
            "
            >
              Email
            </p>

            <p
              className="
            mt-1

            font-semibold

            text-slate-900

            dark:text-white

            break-all
            "
            >
              kimhong4446@gmail.com
            </p>
          </div>

          <div>
            <p
              className="
            text-sm

            text-slate-500

            dark:text-slate-400
            "
            >
              Location
            </p>

            <p
              className="
            mt-1

            font-semibold

            text-slate-900

            dark:text-white
            "
            >
              Phnom Penh, Cambodia
            </p>
          </div>

          <div>
            <p
              className="
            text-sm

            text-slate-500

            dark:text-slate-400
            "
            >
              Availability
            </p>

            <p
              className="
            mt-1

            font-semibold

            text-slate-900

            dark:text-white
            "
            >
              Open to Frontend Internship Opportunities
            </p>
          </div>
        </div>

        {/* SOCIAL BUTTONS */}

        <div
          className="
        flex

        flex-wrap

        items-center


        gap-3


        mt-10
        "
        >
          {socials.map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              target="_blank"
              rel="noreferrer"
              initial="rest"
              whileHover="hover"
              variants={{
                rest: {
                  width: 48,
                },

                hover: {
                  width: 125,
                },
              }}
              transition={{
                duration: 0.25,

                ease: "easeOut",
              }}
              className="
            relative

            h-12

            flex

            items-center

            justify-center



            rounded-xl





            bg-black/5



            dark:bg-white/5





            border



            border-black/10



            dark:border-white/10





            text-slate-600



            dark:text-slate-300





            hover:text-emerald-600



            dark:hover:text-emerald-300





            hover:border-emerald-400/50





            overflow-hidden



            transition-colors
            "
            >
              <motion.span
                variants={{
                  rest: {
                    x: 0,
                  },

                  hover: {
                    x: -35,
                  },
                }}
                transition={{
                  duration: 0.25,
                }}
                className="
              absolute


              left-1/2


              -translate-x-1/2


              text-lg
              "
              >
                {item.icon}
              </motion.span>

              <motion.span
                variants={{
                  rest: {
                    opacity: 0,
                    x: 20,
                  },

                  hover: {
                    opacity: 1,
                    x: 10,
                  },
                }}
                transition={{
                  duration: 0.25,
                }}
                className="
              text-sm

              font-semibold

              whitespace-nowrap
              "
              >
                {item.name}
              </motion.span>
            </motion.a>
          ))}

          {/* RESUME */}

          <motion.a
            href="/York_Kimhong.pdf"
            download="York_Kimhong.pdf"
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="
        h-12


        px-5



        flex


        items-center


        gap-2




        rounded-xl





        bg-gradient-to-r



        from-emerald-600



        to-green-500





        text-white





        text-sm


        font-semibold





        shadow-[0_10px_30px_rgba(16,185,129,0.35)]





        hover:from-emerald-500



        hover:to-green-400





        transition-all
        "
          >
            <FaDownload />
            Resume
          </motion.a>
        </div>
      </div>
    </div>
  );
}
