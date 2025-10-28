'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FiArrowLeft } from 'react-icons/fi'

export default function BlogPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-8">
        <Link href="/" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors mb-6">
          <FiArrowLeft className="w-4 h-4" />
          Back to Portfolio
        </Link>

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Blog</h1>
        <p className="text-lg text-gray-600">Thoughts on development, technology, and building great products.</p>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="text-center py-16">
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.3,
            type: 'spring',
            stiffness: 200,
            damping: 10,
          }}
          className="mb-6"
        ></motion.div>

        <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.4 }} className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          Coming Soon
        </motion.h2>

        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.5 }} className="text-gray-600 mb-8 max-w-md mx-auto">
          I'm working on some exciting articles about development, technology, and my journey. Stay tuned!
        </motion.p>
      </motion.div>
    </div>
  )
}
