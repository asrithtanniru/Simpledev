import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Hackathons from "./components/Hackathons";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Education from "./components/Education";
import { Code, Code2, DownloadCloud, Send } from "lucide-react";

export default function Home() {
  return (
    <>

      <div className="absolute top-20 left-10 opacity-60">
        <Send color="#888" size={38} />
      </div>
      <div className="absolute top-1/3 right-16 opacity-60">
        <Code color="#888" size={32} />
      </div>
      <div className="absolute bottom-1/3 left-20 opacity-60">
        <Code2 color="#888" size={50} />
      </div>
      <div className="absolute bottom-48 right-12 opacity-60">
        <DownloadCloud color="#888" size={26} />
      </div>

      <main className="max-w-3xl mx-auto px-4 py-16 ">
        <Hero />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <Hackathons />
      </main>
    </>
  );
}
