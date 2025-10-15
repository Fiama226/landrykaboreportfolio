import "./globals.css";

import HeroSection from "./components/firstpage/firstpage";

import Projects from "./components/projects/projects";
import Skills from "./components/skills/skillsComponent";
import AboutSection from "./components/aboutMe/aboutMe";

function App() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <Skills />
      <Projects />
    </>
  );
}

export default App;
