import { useEffect, useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const links = [
    {
      name: "About",
      href: "#about",
    },
    {
      name: "Skills",
      href: "#skills",
    },
    {
      name: "Experience",
      href: "#experience",
    },
    {
      name: "Projects",
      href: "#projects",
    },
    {
      name: "Contact",
      href: "#contact",
    },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-slate-950/80 backdrop-blur-xl border-b border-white/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">

          <div className="h-20 flex items-center justify-between">

            {/* Logo */}

            <a
              href="#"
              className="text-2xl font-black tracking-tight"
            >
              York
              <span className="text-cyan-400">
                {" "}
                Kimhong
              </span>
            </a>

            {/* Desktop Menu */}

            <nav className="hidden md:flex items-center gap-8">

              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="
                  text-slate-300
                  hover:text-white
                  transition
                  duration-300
                  "
                >
                  {link.name}
                </a>
              ))}

            </nav>

            {/* Resume Button */}

            <div className="hidden md:block">

              <a
                href="/resume.pdf"
                className="
                px-5
                py-2.5
                rounded-xl
                bg-cyan-500
                hover:bg-cyan-400
                transition
                font-medium
                "
              >
                Resume
              </a>

            </div>

            {/* Mobile Menu */}

            <button
              onClick={() => setOpen(!open)}
              className="md:hidden text-3xl"
            >
              {open ? <HiX /> : <HiMenuAlt3 />}
            </button>

          </div>

        </div>
      </header>

      {/* Mobile Navigation */}

      <div
        className={`
        fixed
        top-0
        right-0
        h-screen
        w-[280px]
        bg-slate-950
        border-l
        border-white/10
        z-40
        transition-transform
        duration-300
        ${
          open
            ? "translate-x-0"
            : "translate-x-full"
        }
      `}
      >
        <div className="pt-24 px-8">

          <div className="flex flex-col gap-8">

            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="
                text-lg
                text-slate-300
                hover:text-white
                transition
                "
              >
                {link.name}
              </a>
            ))}

            <a
              href="/resume.pdf"
              className="
              mt-6
              bg-cyan-500
              text-center
              py-3
              rounded-xl
              "
            >
              Download Resume
            </a>

          </div>

        </div>
      </div>
    </>
  );
}