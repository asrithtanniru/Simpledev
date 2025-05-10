import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Hackathons from "./components/Hackathons";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Education from "./components/Education";

export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      <Hero />
      <Experience />
      <Education />
      <Skills />
      <Projects />
      <Hackathons />
    </main>
  );
}
