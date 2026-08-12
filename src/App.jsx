import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer";
import Background from "./components/Background/Background";

import ProjectDetail from "./components/Projects/ProjectDetail/ProjectDetail";

function Home() {
  const location = useLocation();

  useEffect(() => {
    const restoreScrollY = location.state?.restoreScrollY;

    if (restoreScrollY === undefined) {
      return;
    }

    // Wait for React to render the entire Home page
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        window.scrollTo({
          top: restoreScrollY,
          left: 0,
          behavior: "instant",
        });

        // Clear navigation state
        window.history.replaceState(
          {},
          document.title,
          window.location.pathname,
        );
      });
    });
  }, [location.key]);

  return (
    <div
      className="
        relative
        min-h-screen
        overflow-x-hidden
        text-slate-900
        dark:text-white
      "
    >
      {/* GLOBAL BACKGROUND */}
      <Background />

      {/* NAVBAR */}
      <Navbar />

      {/* CONTENT */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      {/* HOME */}
      <Route path="/" element={<Home />} />

      {/* PROJECT DETAIL - NO NAVBAR */}
      <Route path="/projects/:id" element={<ProjectDetail />} />
    </Routes>
  );
}
