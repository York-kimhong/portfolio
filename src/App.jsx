import { Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";

import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";

import Footer from "./components/Footer";

import CursorGlow from "./components/CursorGlow";

import Background from "./components/Background/Background";

// PROJECT DETAIL

import ProjectDetail from "./components/Projects/Projectdetail/Pages/ProjectDetail";

function Home() {
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

function App() {
  return (
    <Routes>
      {/* HOME PAGE */}

      <Route path="/" element={<Home />} />

      {/* PROJECT DETAIL PAGE */}

      <Route path="/projects/:id" element={<ProjectDetail />} />
    </Routes>
  );
}

export default App;
