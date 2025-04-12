'use client'

import ProjectCard from '@/components/ProjectCard'

const projects = [
  {
    title: '3D LiDAR Visualization System',
    description: 'Interactive 3D visualization system for LiDAR data processing and analysis, built with Three.js and React.',
    technologies: ['React', 'Three.js', 'TypeScript', 'WebGL'],
    githubUrl: 'https://github.com/yourusername/lidar-visualization',
    demoUrl: 'https://demo-lidar-visualization.vercel.app'
  },
  {
    title: 'Cloud Infrastructure Manager',
    description: 'Python-based tool for managing and monitoring cloud infrastructure across multiple providers.',
    technologies: ['Python', 'AWS', 'Docker', 'Terraform'],
    githubUrl: 'https://github.com/yourusername/cloud-manager'
  },
  {
    title: 'Real-time Data Dashboard',
    description: 'Real-time dashboard for monitoring system metrics and performance indicators.',
    technologies: ['Next.js', 'TypeScript', 'WebSocket', 'Chart.js'],
    githubUrl: 'https://github.com/yourusername/data-dashboard',
    demoUrl: 'https://data-dashboard-demo.vercel.app'
  }
]

export default function Projects() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">
        Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  )
} 