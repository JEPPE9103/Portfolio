'use client'

import { motion } from 'framer-motion'

const techStack = {
  'Frontend Development': [
    'React',
    'Next.js',
    'TypeScript',
    'Three.js',
    'Tailwind CSS',
    'WebGL'
  ],
  'Backend Development': [
    'Python',
    'Node.js',
    'Express',
    'REST APIs',
    'GraphQL',
    'WebSocket'
  ],
  'Cloud & DevOps': [
    'AWS',
    'Docker',
    'Terraform',
    'CI/CD',
    'Kubernetes',
    'Linux'
  ],
  'Data Processing': [
    'LiDAR',
    'Point Cloud Processing',
    '3D Visualization',
    'Data Analysis',
    'Machine Learning',
    'Computer Vision'
  ]
}

export default function TechStack() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">
        Tech Stack
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {Object.entries(techStack).map(([category, skills], index) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
          >
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              {category}
            </h2>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
} 