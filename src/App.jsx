import Navbar from "./components/navbar/Navbar";

import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";

import Footer from "./components/Footer";

import CursorGlow from "./components/CursorGlow";

import Background from "./components/Background/Background";

function App() {
  return (
    <div
      className="
      relative

      min-h-screen

      overflow-x-hidden


      text-slate-900

      dark:text-white


      transition-colors

      duration-700
      "
    >
      {/* GLOBAL BACKGROUND */}

      <Background />

      {/* NAVBAR */}

      <Navbar />

      {/* CONTENT */}

      <main
        className="
        relative

        z-10
        "
      >
        <CursorGlow />

        <Hero />

        <About />

        <Skills />

        <Projects />

        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
