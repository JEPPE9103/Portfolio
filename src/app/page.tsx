'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import ProjectCard from '@/components/ProjectCard'

const projects = [
  {
    title: 'TaskMaster',
    description: 'A modern task management application with real-time updates, collaborative features, and intuitive design. Built with Next.js and Tailwind CSS.',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript'],
    githubUrl: 'https://github.com/JEPPE9103/TaskMaster',
    imageUrl: '/images/taskmaster.png'
  },
  {
    title: 'Domuus',
    description: 'A modern app for checking children in and out at places like friends&apos; houses, relatives, or activities. Unlike GPS-based tracking apps, Domuus lets children maintain their privacy while giving parents peace of mind with convenient check-ins and real-time notifications.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Firebase'],
    githubUrl: 'https://github.com/JEPPE9103/DomuusWebapp',
    imageUrl: '/images/domuus.png'
  },
  {
    title: 'Portfolio',
    description: 'A modern, responsive portfolio website built with Next.js and Tailwind CSS, featuring smooth animations and a clean design.',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript'],
    githubUrl: 'https://github.com/JEPPE9103/Portfolio',
    imageUrl: '/images/portfolio.png'
  }
]

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center gap-12 mb-16"
        >
          {/* Profile Image */}
          <div className="w-48 h-48 relative rounded-full overflow-hidden border-4 border-blue-500 shadow-xl">
            <Image
              src="/images/profile.jpg"
              alt="Jesper Persson"
              fill
              className="object-cover object-[center_1%]"
              priority
            />
          </div>

          {/* Introduction */}
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Jesper Persson
            </h1>
            <h2 className="text-xl md:text-2xl text-blue-600 dark:text-blue-400 mb-4">
              Software Developer & Electrician
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Electrician turned software developer, specialized in building high-performance,
              interactive visualization systems for infrastructure monitoring. Experienced in fast-paced startup teams,
              contributing across frontend and backend with technologies like React, Three.js, Python and
              cloud infrastructure.
            </p>
            <div className="flex gap-4">
              <Link 
                href="/projects"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                View Projects
              </Link>
              <Link 
                href="/contact"
                className="border-2 border-blue-600 text-blue-600 dark:text-blue-400 px-6 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
              >
                Contact Me
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Key Skills Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
              3D Visualization & Frontend
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Specialized in Three.js for real-time 3D visualization, building interactive applications with React, Next.js, and TypeScript for infrastructure monitoring.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
              Backend & AI Integration
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Developing Python backend services for AI-powered data processing and analysis. Creating APIs for real-time infrastructure health monitoring systems.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
              Technical Leadership
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              8 years experience leading technical teams, managing electrical installations, ensuring safety compliance, and delivering complex construction projects.
            </p>
          </div>
        </motion.section>

        {/* About Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg"
        >
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
            About Me
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            Currently completing my internship as a Software Engineer at Joltsynsor in Cambridge, UK, where I&apos;m 
            working on an AI-driven infrastructure health monitoring platform. My role involves developing 
            visualization systems for structural analysis and creating backend services that process data using 
            machine learning algorithms to forecast infrastructure conditions.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Prior to transitioning into software development, I spent 8 years at K4 Elektriska in Stockholm, where I 
            led technical teams in electrical and fiber installations for major construction projects. This experience 
            gave me a strong foundation in project delivery, team leadership, and technical problem-solving.
          </p>
        </motion.section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
