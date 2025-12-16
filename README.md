# Tilak Kotapati - Portfolio

## Full-Stack Java Developer Portfolio

A modern, responsive portfolio website built with Next.js, React, and Tailwind CSS featuring an interactive hero carousel, animated skills marquee, and project showcase.

## 🚀 Live Demo

**Live Site:** [https://tkotapati07.github.io/portfolio](https://tkotapati07.github.io/portfolio)

## 💻 Tech Stack

- **Framework:** Next.js 15.1.3 (React 19)
- **Styling:** Tailwind CSS 3.4.17
- **Language:** TypeScript
- **Hosting:** GitHub Pages
- **Build:** Static Site Generation (SSG)

## 📋 Prerequisites

Before you begin, ensure you have installed:
- Node.js (version 18 or higher)
- npm or yarn package manager
- Git

## 🛠️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/Tkotapati07/portfolio.git
cd portfolio
```

### 2. Install Dependencies

```bash
npm install
```

This will install all required packages including:
- Next.js
- React
- Tailwind CSS
- TypeScript
- gh-pages (for deployment)

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the portfolio.

The page will automatically reload when you make changes.

## 🎨 Customization

### Update Personal Information

Edit `src/app/page.tsx` to customize:
- Your name and title
- Skills in the marquee
- Project details and descriptions
- Hero carousel content

### Modify Colors and Theme

Edit `tailwind.config.js` to change:
- Primary and secondary color palettes
- Animation timings
- Custom theme extensions

### Update SEO Metadata

Edit `src/app/layout.tsx` to update:
- Page title and description
- Open Graph tags
- Twitter card metadata
- Keywords

## 📦 Build for Production

```bash
npm run build
```

This creates an optimized production build in the `out` folder.

## 🚀 Deployment

### Deploy to GitHub Pages

```bash
npm run deploy
```

This command will:
1. Build the static site
2. Push to the `gh-pages` branch
3. Deploy to GitHub Pages

### Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under "Source", select `gh-pages` branch
4. Click **Save**
5. Your site will be live at: `https://tkotapati07.github.io/portfolio`

## 📁 Project Structure

```
portfolio/
├── src/
│   └── app/
│       ├── page.tsx          # Main portfolio component
│       ├── layout.tsx        # Root layout with metadata
│       └── globals.css       # Global styles
├── package.json              # Dependencies and scripts
├── next.config.js            # Next.js configuration
├── tailwind.config.js        # Tailwind CSS configuration
├── tsconfig.json             # TypeScript configuration
├── postcss.config.js         # PostCSS configuration
└── .gitignore                # Git ignore rules
```

## ✨ Features

- **Auto-Rotating Hero Carousel** - Showcases your key skills with smooth transitions
- **Animated Skills Marquee** - Displays your tech stack in a continuous scrolling animation
- **Project Slider** - Horizontal scrolling project showcase
- **Compare Projects** - Interactive feature to compare multiple projects side-by-side
- **Project Details Modal** - Quick view for project information
- **Fully Responsive** - Works seamlessly on mobile, tablet, and desktop
- **Dark Mode Support** - Automatically adapts to system preferences
- **WCAG 2.1 AA Compliant** - Accessible to all users
- **Performance Optimized** - Lighthouse score 95+
- **SEO Ready** - Proper meta tags and Open Graph support

## 🎯 Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Export static site
npm run export

# Deploy to GitHub Pages
npm run deploy

# Run linting
npm run lint
```

## 🔧 Configuration Notes

- The `basePath` in `next.config.js` is set to `/portfolio` for GitHub Pages
- The `homepage` in `package.json` points to your GitHub Pages URL
- Images should be placed in the `public` folder
- The site uses static export for GitHub Pages compatibility

## 📝 License

This project is open source and available for personal and commercial use.

## 👤 Author

**Tilak Kotapati**
- GitHub: [@Tkotapati07](https://github.com/Tkotapati07)
- Portfolio: [https://tkotapati07.github.io/portfolio](https://tkotapati07.github.io/portfolio)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## ⭐ Show Your Support

Give a ⭐️ if you like this project!

---

Built with ❤️ using Next.js and Tailwind CSS
