'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function ProfileImage() {
  return (
    <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.6, ease: 'easeOut' }} className="relative">
      <div className="w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden border-4 border-gray-200 shadow-lg">
        <Image src="/images/image.png" alt="Asrith Tanniru" width={160} height={160} className="w-full h-full object-cover" priority />
      </div>
    </motion.div>
  )
}
