'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import ProfileImage from './ProfileImage'
import { personalInfo } from '../data/data'
import useTheme from './Theme-provider'

export default function Hero() {
  const [showIntro, setShowIntro] = useState<boolean | null>(null)
  const { mounted } = useTheme()

  useEffect(() => {
    if (!mounted) return

    const hasSeenIntro = sessionStorage.getItem('hasSeenIntro')

    if (!hasSeenIntro) {
      setShowIntro(true)
      sessionStorage.setItem('hasSeenIntro', 'true')

      const timer = setTimeout(() => {
        setShowIntro(false)
      }, 3000)

      return () => clearTimeout(timer)
    } else {
      setShowIntro(false)
    }
  }, [mounted])

  useEffect(() => {
    if (showIntro) {
      document.body.classList.add('hide-footer')
      document.documentElement.classList.add('hide-body')
    } else {
      document.body.classList.remove('hide-footer')
      document.documentElement.classList.remove('hide-body')
    }

    return () => {
      document.body.classList.remove('hide-footer')
      document.documentElement.classList.remove('hide-body')
    }
  }, [showIntro])

  if (showIntro === null) {
    return <div className="fixed inset-0 bg-background z-50" />
  }

  return (
    <>
      {showIntro && (
        <div className="fixed inset-0 flex items-center justify-center px-4 bg-background z-50 transition-colors duration-300">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="flex flex-col items-center justify-center space-y-4"
          >
            <div className="flex items-center justify-center space-x-4">
              <ProfileImage />
              <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 0.5 }} className="text-xl md:text-3xl font-regular text-foreground">
                Hi, I&apos;m <span className="font-bold">{personalInfo.name}</span> 👋
              </motion.h1>
            </div>
          </motion.div>
        </div>
      )}

      {!showIntro && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, ease: 'easeOut' }} className="w-full">
          <div className="mb-6">
            <div className="flex flex-row items-center justify-between gap-4 md:gap-6">
              <div className="flex-1 space-y-3 md:space-y-4">
                <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 0.1 }} className="text-2xl md:text-4xl font-bold text-foreground">
                  {personalInfo.name}
                </motion.h1>

                <motion.p initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-sm md:text-lg text-muted-foreground">
                  {personalInfo.title}
                </motion.p>

                <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 0.3 }}>
                  <a
                    href={personalInfo.resumeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary text-primary-foreground font-medium px-3 py-2 md:px-6 md:py-3 rounded-lg transition-colors hover:bg-primary/90 inline-block text-xs md:text-base"
                  >
                    View Resume
                  </a>
                </motion.div>
              </div>

              <div className="flex-shrink-0">
                <ProfileImage />
              </div>
            </div>
          </div>
          <div className="mb-6">
            <motion.h2 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 0.4 }} className="text-2xl md:text-3xl font-bold mb-5 text-foreground">
              About
            </motion.h2>

            <div className="space-y-4 text-left">
              <motion.p initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 0.5 }} className="text-lg text-muted-foreground">
                Building{' '}
                <span className="bg-orange-100 dark:bg-orange-900/40 text-orange-800 dark:text-orange-300 px-1 py-0.5 rounded font-semibold hover:bg-orange-200 dark:hover:bg-orange-900/60 transition-colors cursor-pointer">
                  full-stack mobile and web apps
                </span>{' '}
                with React Native, Expo, Next.js, and NestJS, focusing on{' '}
                <span className="bg-green-100 dark:bg-green-900/40 text-green-800 dark:text-green-300 px-1 py-0.5 rounded font-semibold hover:bg-green-200 dark:hover:bg-green-900/60 transition-colors cursor-pointer">
                  scalability
                </span>{' '}
                and{' '}
                <span className="bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300 px-1 py-0.5 rounded font-semibold hover:bg-blue-200 dark:hover:bg-blue-900/60 transition-colors cursor-pointer">
                  user experience
                </span>
                .
              </motion.p>

              <motion.p initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 0.7 }} className="text-lg text-muted-foreground">
                Currently deep diving into{' '}
                <span className="bg-purple-100 dark:bg-purple-900/40 text-purple-800 dark:text-purple-300 px-1 py-0.5 rounded font-semibold hover:bg-purple-200 dark:hover:bg-purple-900/60 transition-colors cursor-pointer">
                  DevOps and deployment workflows
                </span>{' '}
                while exploring advanced mobile architectures and building production-ready apps.
              </motion.p>
            </div>
          </div>
        </motion.div>
      )}
    </>
  )
}
