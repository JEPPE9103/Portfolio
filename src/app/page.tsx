'use client'

import { motion } from 'framer-motion'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">
          About Me
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          Electrical engineer turned software developer, specialized in building high-performance, 
          interactive 3D visualization systems for LiDAR data. Experienced in fast-paced startup teams, 
          contributing across frontend and backend with technologies like React, Three.js, Python and 
          cloud infrastructure. Passionate about creating scalable, efficient solutions.
        </p>
      </motion.section>
    </div>
  )
}
