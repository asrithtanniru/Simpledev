import Link from "next/link";
import ProfileImage from "./components/ProfileImage";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <div className="flex items-center mb-5">
        <div>
          <h1 className="text-4xl font-bold">Hi, i am <span className="bold">Asrith Tanniru</span>👋</h1>
        </div>
        <div className="ml-auto ">
          <ProfileImage />
        </div>
      </div>

      <p className="mb-4 ">
        I am a 2nd year UG student, studying computer science.
      </p>
      <p className="mb-16">
        works on app development
      </p>

      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-4">Experience</h2>
        <ul className="list-disc pl-8 space-y-2">
          <li>Educational Initiatives [Dec 2024 - May 2025]</li>

        </ul>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-4">Projects</h2>
        <ul className="list-disc pl-8 space-y-2">
          <li><Link href="/projects" className="underline">projects</Link></li>
        </ul>
      </section>

      <Skills />
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-4">Hackathons</h2>
        <ul className="list-disc pl-8 space-y-2">
          <li>Hacksrm6.0</li>
        </ul>
      </section>


      {/* <section className="mb-16">
        <h2 className="text-2xl font-bold mb-4">Papers</h2>
        <div className="mb-4">
          [P1][Survey][BTech Project]<br />
          <Link href="#" className="underline">
          </Link>
        </div>
        <div>

        </div>
      </section> */}

    </main>
  );
}
