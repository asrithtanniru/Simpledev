import { experiences } from '../data/data'
import Image from 'next/image'

export default function Experience() {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-3">Experience</h2>
      <div className="space-y-2">
        {experiences.map((exp, index) => (
          <div key={index} className="flex items-center justify-between p-3 rounded-lg">
            <div className="flex items-center space-x-4">
              {exp.logo && <Image src={exp.logo} alt={`${exp.company} logo`} width={48} height={48} className="rounded-full" />}
              <div>
                <h3 className="text-sm md:text-lg font-semibold">{exp.title}</h3>
                <p className="text-xs md:text-sm">{exp.company}</p>
              </div>
            </div>
            <span className="text-xs md:text-sm whitespace-nowrap">{exp.period}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
