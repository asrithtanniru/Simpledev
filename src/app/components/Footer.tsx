'use client'

import Link from 'next/link'
import { socialLinks } from '../data/data'
import { motion } from 'framer-motion'
import { Tooltip } from './tooltip-card'

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 py-4 border-t border-gray-300 bg-background text-foreground text-center">
      <div className="max-w-3xl mx-auto px-4">
        <div className="flex items-center justify-center flex-wrap gap-2">
          {socialLinks.map((link, index) => (
            <span key={link.name}>
              <motion.span whileHover={{ scale: 1.1 }} transition={{ type: 'spring', stiffness: 300, damping: 20 }} style={{ display: 'inline-block' }}>
                <Tooltip
                  content={
                    <div className="text-sm text-gray-700 dark:text-gray-200">
                      <div className="font-medium">{link.name}</div>
                      <div className="truncate max-w-xs">{link.url}</div>
                    </div>
                  }
                >
                  <Link href={link.url} className="bold mx-2" target={link.url.startsWith('http') ? '_blank' : '_self'} rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}>
                    {link.name}
                  </Link>
                </Tooltip>
              </motion.span>
              {index < socialLinks.length - 1 && <span className="mx-1">|</span>}
            </span>
          ))}
        </div>
      </div>
    </footer>
  )
}
