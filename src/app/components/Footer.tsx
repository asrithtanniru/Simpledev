'use client'

import Link from 'next/link'
import { socialLinks } from '../data/data'
import { motion } from 'framer-motion'
import ThemeToggle from './ThemeToggle'

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 py-4 border-t border-border bg-background text-foreground transition-colors duration-300">
      <div className="px-4 relative">
        <div className="flex items-center justify-center flex-wrap gap-2">
          {socialLinks.map((link, index) => (
            <span key={link.name}>
              <motion.span whileHover={{ scale: 1.1 }} transition={{ type: 'spring', stiffness: 300, damping: 20 }} style={{ display: 'inline-block' }}>
                <Link
                  href={link.url}
                  className="bold mx-2 text-foreground hover:text-muted-foreground transition-colors"
                  target={link.url.startsWith('http') ? '_blank' : '_self'}
                  rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  {link.name}
                </Link>
              </motion.span>
              {index < socialLinks.length - 1 && <span className="mx-1 text-muted-foreground">|</span>}
            </span>
          ))}
        </div>
      </div>
      <div className="absolute right-4 top-1/2 -translate-y-1/2">
        <ThemeToggle />
      </div>
    </footer>
  )
}
