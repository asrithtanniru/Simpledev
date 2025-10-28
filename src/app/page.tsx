import Skills from './components/Skills'
import Experience from './components/Experience'
import Hackathons from './components/Hackathons'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Education from './components/Education'
import GitHub from './components/GitHub'

export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <Hero />
      <Experience />
      <Education />
      <GitHub />
      <Skills />
      <Projects />
      <Hackathons />
    </main>
  )
}
