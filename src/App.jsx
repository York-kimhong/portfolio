import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-[#050816] text-white overflow-x-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 -z-50">

        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[150px]" />

        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-violet-500/10 rounded-full blur-[150px]" />

        <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2" />

      </div>

      {/* Main Layout */}
      <Navbar />

      <main>

        <Hero />

        <About />

        <Skills />

        <Experience />

        <Projects />

        <Certifications />

        <Contact />

      </main>

      <Footer />

    </div>
  );
}

export default App;