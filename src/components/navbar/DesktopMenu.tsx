import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

type LinkItem = {
  key: string;
  href: string;
};

type DesktopMenuProps = {
  links: LinkItem[];
  active: string;
  navigateTo: (key: string, href: string) => void;
};

export default function DesktopMenu({
  links,
  active,
  navigateTo,
}: DesktopMenuProps) {
  const { t } = useTranslation();

  return (
    <nav
      className="
        hidden
        md:flex
        items-center
        gap-1

        rounded-2xl

        border
        border-black/5

        bg-white/30

        px-2
        py-1.5

        backdrop-blur-xl

        dark:border-white/[0.06]
        dark:bg-white/[0.03]
      "
    >
      {links.map((link) => {
        const isActive = active === link.key;

        return (
          <a
            key={link.key}
            href={link.href}
            onClick={(e) => {
              e.preventDefault();
              navigateTo(link.key, link.href);
            }}
            className="
              group
              relative

              flex
              items-center
              justify-center

              rounded-xl

              px-4
              py-2.5

              text-sm
              font-semibold

              transition-all
              duration-300

              focus:outline-none
              focus-visible:ring-2
              focus-visible:ring-emerald-500/50
            "
          >
            {/* =====================================================
                ACTIVE BACKGROUND
            ====================================================== */}

            {isActive && (
              <motion.span
                layoutId="active-nav-background"
                transition={{
                  type: "spring",
                  stiffness: 450,
                  damping: 32,
                }}
                className="
                  absolute
                  inset-0

                  rounded-xl

                  bg-emerald-500/10

                  dark:bg-emerald-400/10
                "
              />
            )}

            {/* =====================================================
                TEXT
            ====================================================== */}

            <span
              className={`
                relative
                z-10

                transition-colors
                duration-300

                ${
                  isActive
                    ? `
                      text-emerald-600
                      dark:text-emerald-400
                    `
                    : `
                      text-slate-700
                      group-hover:text-emerald-600

                      dark:text-slate-300
                      dark:group-hover:text-emerald-400
                    `
                }
              `}
            >
              {t(`nav.${link.key}`)}
            </span>

            {/* =====================================================
                HOVER / ACTIVE LINE
            ====================================================== */}

            <span
              className={`
                absolute

                bottom-0.5
                left-1/2

                h-[2px]

                -translate-x-1/2

                rounded-full

                bg-emerald-500

                shadow-[0_0_12px_rgba(16,185,129,0.8)]

                transition-all
                duration-300

                ${
                  isActive
                    ? "w-6 opacity-100"
                    : "w-0 opacity-0 group-hover:w-5 group-hover:opacity-100"
                }
              `}
            />

            {/* =====================================================
                SUBTLE HOVER GLOW
            ====================================================== */}

            <span
              className="
                pointer-events-none

                absolute
                inset-0

                rounded-xl

                bg-gradient-to-r
                from-emerald-400/0
                via-emerald-400/5
                to-emerald-400/0

                opacity-0

                transition-opacity
                duration-300

                group-hover:opacity-100
              "
            />
          </a>
        );
      })}
    </nav>
  );
}
