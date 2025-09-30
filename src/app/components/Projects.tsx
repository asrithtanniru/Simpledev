'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { projects } from '../data/data'
import { FiGithub, FiExternalLink, FiDownload } from 'react-icons/fi'

export default function Projects() {
  return (
    <section className="mb-8">
      <h2 className="text-xl md:text-2xl font-bold mb-3">Projects</h2>

      <div className="grid gap-4 md:gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover="hovered"
            className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <motion.div
              className="bg-gray-50 h-48 md:h-80 relative overflow-hidden"
              variants={{
                hovered: { scale: 1.05 },
                default: { scale: 1 },
              }}
              initial="default"
              transition={{ duration: 0.3 }}
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover object-top"
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                }}
              />
            </motion.div>

            <div className="p-4 md:p-6">
              <h3 className="text-lg md:text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-600 text-sm md:text-base mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 + techIndex * 0.05 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md cursor-default"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>

              <div className="flex gap-3">
                {project.githubLink && (
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-2 bg-black text-white text-sm rounded-lg hover:bg-gray-800 transition-colors"
                    >
                      <motion.span
                        variants={{
                          hovered: { rotate: 360 },
                          default: { rotate: 0 },
                        }}
                        transition={{ duration: 0.5 }}
                      >
                        <FiGithub size={16} />
                      </motion.span>
                      Code
                    </Link>
                  </motion.div>
                )}
                {project.liveLink && (
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-2 border border-gray-300 text-gray-700 text-sm rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <motion.span
                        variants={{
                          hovered:
                            project.type === 'mobile'
                              ? { y: [0, -3, 3, 0] } // Bounce down animation for download
                              : { x: 3, y: -3 }, // Diagonal movement for external link
                          default: { x: 0, y: 0 },
                        }}
                        transition={{
                          duration: project.type === 'mobile' ? 0.6 : 0.3,
                          repeat: project.type === 'mobile' ? Infinity : 0,
                          repeatDelay: project.type === 'mobile' ? 0.2 : 0,
                        }}
                      >
                        {project.type === 'mobile' ? <FiDownload size={16} /> : <FiExternalLink size={16} />}
                      </motion.span>
                      {project.type === 'mobile' ? 'Download' : 'Website'}
                    </Link>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
