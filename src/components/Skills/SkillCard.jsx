import { motion } from "framer-motion";

export default function SkillCard({ category, index }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
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
      whileHover={{
        y: -10,
        rotateX: 3,
        rotateY: -3,
        scale: 1.02,
      }}
      style={{
        transformStyle: "preserve-3d",
      }}
      className="
      group

      relative

      overflow-hidden



      rounded-[28px]



      p-7





      bg-white/30


      dark:bg-white/[0.06]





      border



      border-black/10



      dark:border-white/10






      backdrop-blur-2xl





      shadow-[0_20px_60px_rgba(16,185,129,0.12)]



      hover:shadow-[0_30px_80px_rgba(16,185,129,0.25)]



      transition-all


      duration-500
      "
    >
      {/* GLASS REFLECTION */}

      <div
        className="
        absolute


        inset-0



        bg-gradient-to-br


        from-white/50


        via-transparent


        to-transparent



        dark:from-white/10



        pointer-events-none
        "
      />

      {/* GREEN FLOOD HOVER */}

      <div
        className="
        absolute


        bottom-0


        left-0


        w-full


        h-[60%]



        bg-gradient-to-t


        from-emerald-500/25


        via-emerald-400/10


        to-transparent



        blur-3xl




        opacity-0



        group-hover:opacity-100



        transition-opacity


        duration-700
        "
      />

      {/* CONTENT */}

      <div
        className="
        relative

        z-10
        "
      >
        <h3
          className="
        text-xl


        font-black


        mb-3



        text-slate-900



        dark:text-white
        "
        >
          {category.title}
        </h3>

        <p
          className="
        text-sm


        leading-relaxed


        mb-7




        text-slate-600



        dark:text-slate-400
        "
        >
          {category.description}
        </p>

        <div
          className="
        space-y-5
        "
        >
          {category.skills.map((skill) => (
            <div key={skill.name}>
              {/* NAME */}

              <div
                className="
              flex

              items-center

              gap-3

              mb-2
              "
              >
                <span
                  className="
                text-lg


                text-emerald-700



                dark:text-emerald-400



                drop-shadow-[0_0_10px_rgba(16,185,129,0.5)]
                "
                >
                  {skill.icon}
                </span>

                <span
                  className="
                text-sm


                font-semibold



                text-slate-800



                dark:text-slate-200
                "
                >
                  {skill.name}
                </span>
              </div>

              {/* PROGRESS BAR */}

              <div
                className="
              h-2


              rounded-full


              bg-black/10


              dark:bg-white/10



              overflow-hidden
              "
              >
                <motion.div
                  initial={{
                    width: 0,
                  }}
                  whileInView={{
                    width: `${skill.level}%`,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 1,

                    ease: "easeOut",
                  }}
                  className="
                h-full


                rounded-full




                bg-gradient-to-r



                from-emerald-600



                to-green-400




                shadow-[0_0_15px_rgba(16,185,129,0.5)]
                "
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
