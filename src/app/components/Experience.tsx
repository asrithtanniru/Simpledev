import { experiences } from "../data/data";
import Image from "next/image";

export default function Experience() {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold mb-4">Experience</h2>
      <div className="space-y-4">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-4 rounded-lg"
          >
            <div className="flex items-center space-x-4">
              {exp.logo && (
                <Image
                  src={exp.logo}
                  alt={`${exp.company} logo`}
                  width={48}
                  height={48}
                  className="rounded-full"
                />
              )}
              <div>
                <h3 className="text-lg font-semibold">{exp.title}</h3>
                <p className="text-sm ">{exp.company}</p>
              </div>
            </div>
            <span className="text-sm">{exp.period}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
