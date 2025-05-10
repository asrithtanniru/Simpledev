import Link from "next/link";
import { projects } from "../data/data";

export default function Projects() {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      <ul className="list-disc pl-8 space-y-2">
        {projects.map((exp, index) => (
          <li key={index}>
            {exp.title} - {exp.description} -{" "}
            <Link href={exp.link} className="bg-white rounded-md text-black p-0.7 px-1 py-1">
              Source
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
