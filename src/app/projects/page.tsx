'use client'

import ProjectCard from '@/components/ProjectCard'

const projects = [
  {
    title: 'Domuus',
    description: 'A modern app for checking children in and out at places like friends&apos; houses, relatives, or activities. Unlike GPS-based tracking apps, Domuus lets children maintain their privacy while giving parents peace of mind with convenient check-ins and real-time notifications.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Firebase'],
    githubUrl: 'https://github.com/JEPPE9103/DomuusWebapp',
    demoUrl: 'https://domuus-webapp.vercel.app'
  },
  {
    title: 'TaskMaster',
    description: 'A sleek and user-friendly To-Do List application built with Next.js and Firebase. Features user authentication, real-time task saving in Firestore, and a modern UI design.',
    technologies: ['Next.js', 'Firebase', 'TypeScript', 'Tailwind CSS'],
    githubUrl: 'https://github.com/JEPPE9103/TaskMaster',
    demoUrl: 'https://task-master-eight-lemon.vercel.app'
  },
  {
    title: 'LaundryGuardian',
    description: 'A web-based IoT dashboard for monitoring temperature and humidity in laundry rooms using ESP32 and Firebase. Real-time data visualization and alerts.',
    technologies: ['JavaScript', 'ESP32', 'Firebase', 'IoT', 'WebSocket'],
    githubUrl: 'https://github.com/JEPPE9103/LaundryGuardian'
  },
  {
    title: 'TempSensor',
    description: 'Spring Boot application that interacts with temperature sensors via serial connection, storing data in a database and providing a REST API for accessing sensor details.',
    technologies: ['Java', 'Spring Boot', 'REST API', 'Database', 'IoT'],
    githubUrl: 'https://github.com/JEPPE9103/TempSensor'
  }
]

export default function Projects() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">
        Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  )
} 