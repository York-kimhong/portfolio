import { useEffect, useState } from "react";

interface Section {
  key: string;
  href: string;
}

export default function useScrollSpy(sections: Section[]) {
  const [active, setActive] = useState(sections[0]?.key || "");

  const [scrolled, setScrolled] = useState(false);

  const [isScrolling, setIsScrolling] = useState(false);

  // Navbar background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Scroll Spy
  useEffect(() => {
    if (isScrolling) return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      let current = sections[0]?.key || "";

      sections.forEach((section) => {
        const element = document.querySelector(section.href);

        if (element) {
          const sectionTop =
            element.getBoundingClientRect().top + window.scrollY;

          if (scrollPosition >= sectionTop) {
            current = section.key;
          }
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sections, isScrolling]);

  // Navbar click navigation
  const navigateTo = (key: string, href: string) => {
    setActive(key);

    setIsScrolling(true);

    const element = document.querySelector(href);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",

        block: "start",
      });
    }

    setTimeout(() => {
      setIsScrolling(false);
    }, 1000);
  };

  return {
    active,

    scrolled,

    navigateTo,
  };
}
