import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Journey from "./components/journey/Journey";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";
import Competencies from "./components/skills/Competencies";
import Contact from "./components/contact/Contact";
import useTheme from "./hooks/useTheme";
import ChatWidget from "./components/ChatWidget";

function App() {
  const [dark, toggleTheme] = useTheme();

  return (
    // Changed this line to be a proper div with a className
    <div className="relative min-h-screen">
      <Navbar dark={dark} onToggleTheme={toggleTheme} />
      <Hero />
      <About />
      <Journey />

      <div className="wrap">
        <Projects />
        <Skills />
        <Competencies />
      </div>

      <Contact />
      <Footer />
      <ChatWidget />
    {/* Changed the closing tag from </> to </div> */}
    </div>
  );
}

export default App;