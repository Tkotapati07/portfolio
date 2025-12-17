'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

export default function Preview() {
  return (
    <div
      id="top"
      className="min-h-screen relative text-gray-900 dark:text-gray-100 overflow-hidden"
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1920&h=1080&fit=crop")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Animated gradient overlay */}
      <motion.div
        className="pointer-events-none absolute inset-0"
        animate={{
          background: [
            'linear-gradient(to bottom right, rgba(0,0,0,0.6), rgba(79,70,229,0.3))',
            'linear-gradient(to bottom right, rgba(79,70,229,0.3), rgba(0,0,0,0.6))',
            'linear-gradient(to bottom right, rgba(0,0,0,0.6), rgba(79,70,229,0.3))',
          ],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden
      />

      {/* Floating particles */}
      <FloatingParticles />

      <div className="relative z-10">
        <Header />
        <Hero />

        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16"
        >
          <motion.div
            className="rounded-3xl bg-white/90 dark:bg-black/60 backdrop-blur-xl p-8 shadow-2xl border border-white/20"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
            >
              Skills & Technologies
            </motion.h2>
            <SkillsMarquee />
          </motion.div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16"
          id="projects"
        >
          <motion.div className="rounded-3xl bg-white/90 dark:bg-black/60 backdrop-blur-xl p-8 shadow-2xl border border-white/20">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-8 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
            >
              Featured Projects
            </motion.h2>
            <ProjectSlider />
          </motion.div>
        </motion.section>

        <Footer />
      </div>
    </div>
  )
}

function FloatingParticles() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-indigo-400/30 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  )
}

function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100 }}
      className={`sticky top-0 z-50 backdrop-blur-md transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 dark:bg-black/60 shadow-lg border-b border-white/20'
          : 'bg-white/40 dark:bg-black/20 border-b border-white/10'
      }`}
    >
      <nav className="mx-auto max-w-7xl h-16 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <motion.div
          className="font-bold text-xl bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
          whileHover={{ scale: 1.05 }}
        >
          Tilak Kotapati
        </motion.div>
        <motion.a
          href="#projects"
          className="px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold hover:shadow-lg"
          whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(79,70,229,0.4)' }}
          whileTap={{ scale: 0.95 }}
        >
          View Projects
        </motion.a>
      </nav>
    </motion.header>
  )
}

function Hero() {
  const [displayText, setDisplayText] = useState('')
  const fullText = 'Full-Stack Java Developer'

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(timer)
      }
    }, 100)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32">
      <div className="text-center space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-7xl font-bold text-white drop-shadow-2xl">
            {displayText}
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
            >
              |
            </motion.span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-2xl text-gray-100 drop-shadow-lg max-w-3xl mx-auto"
        >
          Building scalable enterprise applications with Java, Spring Boot, React & AWS
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex gap-4 justify-center flex-wrap"
        >
          <motion.a
            href="#projects"
            className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-semibold shadow-lg"
            whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(79,70,229,0.4)' }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </motion.a>
          <motion.a
            href="#contact"
            className="px-8 py-3 bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 rounded-full font-semibold"
            whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.3)' }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

function SkillsMarquee() {
  const skills = [
    { name: 'Java', icon: '☕' },
    { name: 'Spring Boot', icon: '🍃' },
    { name: 'React', icon: '⚛️' },
    { name: 'TypeScript', icon: '📘' },
    { name: 'AWS', icon: '☁️' },
    { name: 'Microservices', icon: '🔧' },
    { name: 'REST APIs', icon: '🔌' },
    { name: 'SQL', icon: '🗄️' },
    { name: 'Docker', icon: '🐳' },
    { name: 'Git', icon: '📝' },
  ]

  return (
    <div className="relative overflow-hidden py-4">
      <motion.div
        className="flex gap-6"
        animate={{ x: [0, -1400] }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        {[...skills, ...skills, ...skills].map((skill, i) => (
          <motion.div
            key={i}
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900 dark:to-purple-900 rounded-full whitespace-nowrap shadow-lg"
            whileHover={{ scale: 1.1, rotate: 5 }}
          >
            <span className="text-2xl">{skill.icon}</span>
            <span className="font-semibold">{skill.name}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

function ProjectSlider() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Microservices-based e-commerce system with Spring Boot & React. Handles 10K+ concurrent users.',
      tech: ['Java', 'Spring Boot', 'React', 'AWS'],
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Task Management System',
      description: 'Real-time collaborative task manager with WebSocket integration and Redis caching.',
      tech: ['Java', 'WebSockets', 'PostgreSQL', 'Redis'],
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      title: 'API Gateway',
      description: 'Enterprise API gateway with rate limiting, authentication, and monitoring.',
      tech: ['Spring Cloud', 'Redis', 'Docker', 'Kubernetes'],
      gradient: 'from-orange-500 to-red-500',
    },
  ]

  return (
    <div className="grid md:grid-cols-3 gap-8">
      {projects.map((project, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          whileHover={{ y: -10, scale: 1.03 }}
          className="group relative p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-800 overflow-hidden"
        >
          {/* Gradient overlay on hover */}
          <motion.div
            className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
          />

          <div className="relative z-10">
            <motion.div
              className={`w-12 h-12 rounded-lg bg-gradient-to-br ${project.gradient} flex items-center justify-center mb-4`}
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-white text-2xl font-bold">{i + 1}</span>
            </motion.div>

            <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-white">
              {project.title}
            </h3>

            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.tech.map((t, j) => (
                <motion.span
                  key={j}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: j * 0.05 }}
                  whileHover={{ scale: 1.1 }}
                  className="text-xs px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full font-medium"
                >
                  {t}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Corner decoration */}
          <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${project.gradient} opacity-10 blur-2xl`} />
        </motion.div>
      ))}
    </div>
  )
}

function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="py-12 text-center backdrop-blur-sm bg-black/20"
    >
      <motion.p
        className="text-gray-300 text-sm"
        whileHover={{ scale: 1.05 }}
      >
        © 2025 Tilak Kotapati. Crafted with ❤️ and ☕
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mt-4 flex justify-center gap-4"
      >
        <motion.a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-colors"
          whileHover={{ scale: 1.2, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
        >
          GitHub
        </motion.a>
        <motion.a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-colors"
          whileHover={{ scale: 1.2, rotate: -5 }}
          whileTap={{ scale: 0.9 }}
        >
          LinkedIn
        </motion.a>
      </motion.div>
    </motion.footer>
  )
}
