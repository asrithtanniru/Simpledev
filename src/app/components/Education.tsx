'use client'

import { education } from '../data/data'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Education() {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-3 text-foreground">Education</h2>
      <div className="space-y-2">
        {education.map((edu, index) => (
          <motion.div key={index} className="flex items-center justify-between p-3 rounded-lg hover:bg-accent/50 transition-colors" whileHover="hovered" initial="default" animate="default">
            <div className="flex items-center space-x-4">
              <motion.div
                variants={{
                  hovered: { scale: 1.12 },
                  default: { scale: 1 },
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <Image src={edu.logo} alt="University Logo" width={48} height={48} className="rounded-full" />
              </motion.div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">{edu.name}</h3>
                <p className="text-sm font-medium text-muted-foreground">{edu.course}</p>
              </div>
            </div>
            <span className="text-sm font-medium text-muted-foreground">{edu.year}</span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
