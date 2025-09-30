'use client'

import Link from 'next/link'
import { socialLinks } from '../data/data'
import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 py-4 border-t border-gray-300 bg-background text-foreground text-center">
      <div className="max-w-3xl mx-auto px-4">
        {socialLinks.map((link, index) => (
          <span key={link.name}>
            <motion.span whileHover={{ scale: 1.1 }} transition={{ type: 'spring', stiffness: 300, damping: 20 }} style={{ display: 'inline-block' }}>
              <Link href={link.url} className="bold mx-2" target="_blank" rel="noopener noreferrer">
                {link.name}
              </Link>
            </motion.span>
            {index < socialLinks.length - 1 && ' | '}
          </span>
        ))}
      </div>
    </footer>
  )
}
