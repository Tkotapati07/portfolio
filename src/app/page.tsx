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
