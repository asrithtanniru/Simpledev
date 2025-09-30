'use client'

import { skills } from '../data/data'
import { motion } from 'framer-motion'

export default function Skills() {
  return (
    <section className="mb-8">
      <h2 className="text-xl md:text-2xl font-bold mb-3">Skills</h2>

      <div className="flex flex-wrap gap-1.5 md:gap-2">
        {skills.map((skill) => {
          const IconComponent = skill.icon
          return (
            <motion.div
              key={skill.name}
              className="flex items-center gap-1.5 md:gap-2 px-2.5 md:px-3 py-1.5 md:py-2 rounded-full text-white text-xs md:text-sm font-medium cursor-pointer"
              style={{ backgroundColor: skill.color }}
              whileHover="hovered"
              initial="default"
              animate="default"
            >
              <motion.span
                variants={{
                  hovered: { scale: 1.35 },
                  default: { scale: 1 },
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                style={{ display: 'flex', alignItems: 'center' }}
              >
                <IconComponent size={14} className="md:w-4 md:h-4" />
              </motion.span>
              <span className="whitespace-nowrap">{skill.name}</span>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
