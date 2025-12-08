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

    if (storedTheme) {
      setTheme(storedTheme)
      if (storedTheme === 'dark') {
        document.documentElement.classList.add('dark')
      }
    } else {
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setTheme('dark')
        document.documentElement.classList.add('dark')
      }
    }

    setMounted(true)
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

      const isMobile = window.innerWidth < 768
      if (typeof document !== 'undefined' && 'startViewTransition' in document && event && !isMobile) {
        const x = event.clientX
        const y = event.clientY
        const maxRadius = Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y))

        document.documentElement.style.setProperty('--x', `${x}px`)
        document.documentElement.style.setProperty('--y', `${y}px`)
        document.documentElement.style.setProperty('--r', `${maxRadius}px`)

        document.startViewTransition(() => {
          setTheme(newTheme)
        })
      } else {
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
