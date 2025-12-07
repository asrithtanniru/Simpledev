'use client'

import { createContext, useContext, useEffect, useState, useCallback } from 'react'

type Theme = 'light' | 'dark'

type ThemeContextType = {
  theme: Theme
  toggleTheme: (event?: React.MouseEvent) => void
  mounted: boolean
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') as Theme | null

    // Only use stored theme if user has explicitly set it before
    // First-time visitors always see light mode
    if (storedTheme) {
      setTheme(storedTheme)
      if (storedTheme === 'dark') {
        document.documentElement.classList.add('dark')
      }
    }
    // Default is already light, so no need to do anything for first-time visitors

    setMounted(true)
    // Add theme-ready class after a small delay to enable transitions
    setTimeout(() => {
      document.documentElement.classList.add('theme-ready')
    }, 100)
  }, [])

  useEffect(() => {
    if (!mounted) return

    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('theme', theme)
  }, [theme, mounted])

  const toggleTheme = useCallback(
    (event?: React.MouseEvent) => {
      const newTheme = theme === 'light' ? 'dark' : 'light'

      // Check if View Transitions API is supported
      if (typeof document !== 'undefined' && 'startViewTransition' in document && event) {
        // Get click coordinates for the circular reveal
        const x = event.clientX
        const y = event.clientY
        // Calculate the maximum radius needed to cover the entire screen
        const maxRadius = Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y))

        // Set CSS custom properties for the animation origin
        document.documentElement.style.setProperty('--x', `${x}px`)
        document.documentElement.style.setProperty('--y', `${y}px`)
        document.documentElement.style.setProperty('--r', `${maxRadius}px`)

        document.startViewTransition(() => {
          setTheme(newTheme)
        })
      } else {
        // Fallback for browsers without View Transitions API
        setTheme(newTheme)
      }
    },
    [theme]
  )

  return <ThemeContext.Provider value={{ theme, toggleTheme, mounted }}>{children}</ThemeContext.Provider>
}

export default function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
