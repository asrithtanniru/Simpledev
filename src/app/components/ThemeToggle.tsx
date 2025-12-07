'use client'

import { motion, AnimatePresence } from 'framer-motion'
import useTheme from './Theme-provider'
import { FiSun, FiMoon } from 'react-icons/fi'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    toggleTheme(event)
  }

  return (
    <motion.button
      onClick={handleClick}
      className="relative flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-foreground hover:border-muted-foreground transition-colors duration-200 focus:outline-none"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <AnimatePresence mode="wait" initial={false}>
        {theme === 'light' ? (
          <motion.div
            key="sun"
            initial={{ rotate: -90, opacity: 0, scale: 0 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: 90, opacity: 0, scale: 0 }}
            transition={{
              duration: 0.2,
              ease: 'easeOut',
            }}
            className="absolute"
          >
            <FiSun className="w-4 h-4 md:w-5 md:h-5 text-foreground" />
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            initial={{ rotate: 90, opacity: 0, scale: 0 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: -90, opacity: 0, scale: 0 }}
            transition={{
              duration: 0.2,
              ease: 'easeOut',
            }}
            className="absolute"
          >
            <FiMoon className="w-4 h-4 md:w-5 md:h-5 text-foreground" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  )
}
