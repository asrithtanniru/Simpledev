'use client'

import { experiences } from '../data/data'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Experience() {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-3">Experience</h2>
      <div className="space-y-2">
        {experiences.map((exp, index) => (
          <motion.div key={index} className="flex items-center justify-between p-3 rounded-lg" whileHover="hovered" initial="default" animate="default">
            <div className="flex items-center space-x-4">
              {exp.logo && (
                <motion.div
                  variants={{
                    hovered: { scale: 1.12 },
                    default: { scale: 1 },
                  }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  <Image src={exp.logo} alt={`${exp.company} logo`} width={48} height={48} className="rounded-full" />
                </motion.div>
              )}
              <div>
                <h3 className="text-sm md:text-lg font-semibold">{exp.title}</h3>
                <p className="text-xs md:text-sm">{exp.company}</p>
              </div>
            </div>
            <span className="text-xs md:text-sm whitespace-nowrap">{exp.period}</span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
