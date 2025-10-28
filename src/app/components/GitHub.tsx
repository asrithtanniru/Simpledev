'use client'

import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import GitHubCalendar from 'react-github-calendar'

const GITHUB_USERNAME = 'asrithtanniru'

export default function GitHub() {
  return (
    <section className="mb-8">
      <h2 className="text-xl md:text-2xl font-bold mb-3">GitHub Activity</h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white border border-gray-200 rounded-lg p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
      >
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <FiGithub className="text-xl" />
            <span className="font-semibold">GitHub Contributions</span>
          </div>
          <motion.a
            href={`https://github.com/${GITHUB_USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-1 text-black-600 hover:text-black-800 transition-colors"
          >
            View Profile
            <FiExternalLink className="text-sm" />
          </motion.a>
        </div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }} className="overflow-x-auto">
          <GitHubCalendar
            username={GITHUB_USERNAME}
            blockSize={12}
            blockMargin={3}
            fontSize={12}
            colorScheme="light"
            theme={{
              light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
            }}
            style={{
              minWidth: '100%',
              fontFamily: 'inherit',
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
