'use client'

import { skills } from '../data/data'

export default function Skills() {
  return (
    <section className="mb-8">
      <h2 className="text-xl md:text-2xl font-bold mb-3">Skills</h2>

      <div className="flex flex-wrap gap-1.5 md:gap-2">
        {skills.map((skill) => {
          const IconComponent = skill.icon
          return (
            <div
              key={skill.name}
              className="flex items-center gap-1.5 md:gap-2 px-2.5 md:px-3 py-1.5 md:py-2 rounded-full text-white text-xs md:text-sm font-medium"
              style={{ backgroundColor: skill.color }}
            >
              <IconComponent size={14} className="md:w-4 md:h-4" />
              <span className="whitespace-nowrap">{skill.name}</span>
            </div>
          )
        })}
      </div>
    </section>
  )
}
