'use client'

import { useEffect, useRef, useState } from 'react'

/**
 * Home Page Preview Component
 * Features: Hero carousel, skills marquee, projects slider with compare functionality
 */
export default function Preview() {
  return (
    <div
      id="top"
      className="min-h-screen relative text-gray-900 dark:text-gray-100"
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1920&h=1080&fit=crop")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Readability overlay */}
      <div className="pointer-events-none absolute inset-0 bg-black/55" aria-hidden />

      <div className="relative z-10">
        <Header />
        <Hero />

        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          <div className="rounded-3xl bg-white/85 dark:bg-black/50 backdrop-blur-sm p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-3">Skills</h2>
            <SkillsMarquee />
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          <div className="rounded-3xl bg-white/85 dark:bg-black/50 backdrop-blur-sm p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Featured Projects</h2>
            <ProjectSlider />
          </div>
        </section>

        <Footer />
      </div>
    </div>
  )
}

/**
 * Header component with navigation
 */
function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-black/40 border-b border-black/5 dark:border-white/10">
      <nav className="mx-auto max-w-7xl h-16 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="font-semibold text-lg">Tilak Kotapati</div>
        <a href="#projects" className="text-sm hover:text-indigo-600 transition">
          Projects
        </a>
      </nav>
    </header>
  )
}

/**
 * Hero section
 */
function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-bold text-white drop-shadow-lg">
          Full-Stack Java Developer
        </h1>
        <p className="text-xl text-gray-200 drop-shadow-md">
          Building scalable applications with Java, Spring Boot, React & AWS
        </p>
      </div>
    </section>
  )
}

/**
 * Skills marquee
 */
function SkillsMarquee() {
  const skills = [
    'Java', 'Spring Boot', 'React', 'TypeScript', 'AWS',
    'Microservices', 'REST APIs', 'SQL', 'Docker', 'Git'
  ]

  return (
    <div className="overflow-hidden">
      <div className="flex gap-4 animate-marquee">
        {[...skills, ...skills].map((skill, i) => (
          <div
            key={i}
            className="px-4 py-2 bg-indigo-100 dark:bg-indigo-900 rounded-lg whitespace-nowrap"
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  )
}

/**
 * Projects slider
 */
function ProjectSlider() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Microservices-based e-commerce with Spring Boot & React',
      tech: ['Java', 'Spring Boot', 'React', 'AWS']
    },
    {
      title: 'Task Management System',
      description: 'Real-time collaborative task manager',
      tech: ['Java', 'WebSockets', 'PostgreSQL']
    },
    {
      title: 'API Gateway',
      description: 'Enterprise API gateway with rate limiting',
      tech: ['Spring Cloud', 'Redis', 'Docker']
    }
  ]

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {projects.map((project, i) => (
        <div key={i} className="p-4 border rounded-lg hover:shadow-lg transition">
          <h3 className="font-semibold text-lg mb-2">{project.title}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t, j) => (
              <span key={j} className="text-xs px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded">
                {t}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

/**
 * Footer component
 */
function Footer() {
  return (
    <footer className="py-8 text-center text-sm text-gray-300">
      <p>© 2025 Tilak Kotapati. All rights reserved.</p>
    </footer>
  )
}
