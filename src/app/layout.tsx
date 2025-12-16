import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Tilak Kotapati | Full-Stack Java Developer',
  description:
    'Full-stack Java developer specializing in Spring Boot, microservices, AWS, and React. Portfolio featuring modern UX, accessibility, and performance.',
  viewport: 'width=device-width, initial-scale=1',
  keywords: [
    'Java developer',
    'Spring Boot',
    'Full-stack developer',
    'React',
    'AWS',
    'microservices',
    'TypeScript',
  ],
  authors: [{ name: 'Tilak Kotapati' }],
  openGraph: {
    title: 'Tilak Kotapati | Full-Stack Java Developer',
    description:
      'Explore my portfolio of modern, accessible web applications built with Java, Spring Boot, React, and AWS.',
    url: 'https://YOUR_GITHUB_USERNAME.github.io/portfolio',
    type: 'website',
    siteName: 'Tilak Kotapati Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tilak Kotapati | Full-Stack Java Developer',
    description: 'Portfolio featuring Spring Boot microservices and modern React UIs',
  },
  robots: 'index, follow',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
