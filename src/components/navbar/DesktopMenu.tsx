import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function DesktopMenu({ links, active, navigateTo }) {
  const { t } = useTranslation();

  return (
    <nav
      className="
      hidden
      md:flex
      items-center
      gap-6
      "
    >
      {links.map((link) => (
        <a
          key={link.key}
          href={link.href}
          onClick={(e) => {
            e.preventDefault();

            navigateTo(link.key, link.href);
          }}
          className="
          relative

          py-3

          px-2


          text-sm

          font-medium



          text-slate-800

          dark:text-slate-300



          transition-colors

          duration-300


          group
          "
        >
          {/* TEXT */}
          <span
            className="
            transition-colors

            duration-300


            group-hover:text-emerald-600


            dark:group-hover:text-emerald-300
            "
          >
            {t(`nav.${link.key}`)}
          </span>

          {/* HOVER LINE */}

          <span
            className="
            absolute

            left-1/2

            -translate-x-1/2


            -bottom-1


            w-0


            h-[2px]


            rounded-full


            bg-emerald-600


            dark:bg-emerald-400



            shadow-[0_0_15px_rgba(16,185,129,0.8)]



            transition-all

            duration-300



            group-hover:w-8
            "
          />

          {/* ACTIVE LINE */}

          {active === link.key && (
            <motion.span
              layoutId="active-nav-line"
              className="
              absolute


              left-1/2


              -translate-x-1/2



              -bottom-1



              w-8



              h-[3px]



              rounded-full




              bg-gradient-to-r


              from-emerald-600


              via-green-500


              to-emerald-600




              dark:from-emerald-400


              dark:via-green-300


              dark:to-emerald-400




              shadow-[0_0_20px_rgba(34,197,94,0.9)]

              "
              transition={{
                type: "spring",
                stiffness: 500,
                damping: 30,
              }}
            />
          )}
        </a>
      ))}
    </nav>
  );
}
