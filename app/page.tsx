import {Navbar} from "./components/Navbar";
import {HeroSection} from "./components/HeroSection";
import ProjectShowcase from "./components/ProjectShowCase";

function App() {
  return (
    <div className="relative">
      <Navbar />
      <HeroSection />
      <ProjectShowcase />
    </div>
  );
}

export default App;