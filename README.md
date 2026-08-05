# Jisham Vallikkadan - Personal Portfolio Web Application 🚀

A modern, high-performance, dark-themed personal portfolio web application engineered for **Jisham Vallikkadan**, built with HTML5, ES6+ JavaScript, Vanilla CSS design system, and Vite. Includes automated deployment configuration for GitHub Pages via GitHub Actions.

![Repository](https://img.shields.io/badge/GitHub-jisham--portfolio-00f2fe?style=for-the-badge&logo=github)
![Tech Stack](https://img.shields.io/badge/Stack-HTML5%20%7C%20CSS3%20%7C%20JavaScript%20%7C%20Vite-4facfe?style=for-the-badge)
![Deployment](https://img.shields.io/badge/Deploy-GitHub%20Pages-9d4edd?style=for-the-badge&logo=githubpages)

---

## ✨ Features

- 🎨 **Glassmorphism & Ambient Glow UI**: Dark mode color palette with custom HSL glowing gradients and sleek glass components.
- ⚡ **Interactive Particle Canvas**: Custom HTML5 Canvas background animation in the hero section.
- 📊 **Animated Statistics Counter**: Real-time counter metrics triggered on scroll.
- 🛠️ **Skill Filter & Progress Bars**: Interactive category filtering (Frontend, Backend, Cloud & DevOps, Tools).
- 💼 **Featured Projects Showcase**: Category badges, technology tags, GitHub repository links, and live demo triggers.
- ⏳ **Career Journey Timeline**: Interactive work experience timeline.
- ✉️ **Interactive Contact Form**: Integrated AJAX form validation with visual toast notifications.
- 📱 **Fully Responsive**: Optimized for Mobile, Tablet, and Ultra-wide Desktop displays.
- 🤖 **Automated GitHub Pages Deployment**: Pre-configured `.github/workflows/deploy.yml` pipeline.

---

## 🛠️ Local Development Setup

### 1. Prerequisites
Ensure you have [Node.js](https://nodejs.org/) (v18 or higher) installed on your machine.

### 2. Installation
Open your terminal in this directory and install dependencies:
```bash
npm install
```

### 3. Run Development Server
Start the Vite local development server:
```bash
npm run dev
```
Open your browser at `http://localhost:5173/` (or the URL printed in the terminal).

### 4. Build for Production
To build the optimized static assets:
```bash
npm run build
```

---

## 🚀 How to Deploy to your GitHub Repository

To push this portfolio to your repository `https://github.com/jisham-vallikkadan/jisham-portfolio` and deploy it live on GitHub Pages:

### Step 1: Initialize Git & Commit Files (in this project folder)
```bash
git init
git add .
git commit -m "feat: Initial commit of Jisham Vallikkadan personal portfolio website"
```

### Step 2: Link Remote Repository & Push to Main
```bash
git branch -M main
git remote add origin https://github.com/jisham-vallikkadan/jisham-portfolio.git
git push -u origin main
```

### Step 3: Enable GitHub Pages in your Repository Settings
1. Go to your GitHub repository: [https://github.com/jisham-vallikkadan/jisham-portfolio](https://github.com/jisham-vallikkadan/jisham-portfolio)
2. Click on **Settings** tab at the top.
3. On the left sidebar, click **Pages**.
4. Under **Build and deployment** -> **Source**, select **GitHub Actions**.
5. The GitHub Action workflow will automatically trigger, build the Vite app, and publish your website live at:  
   👉 `https://jisham-vallikkadan.github.io/jisham-portfolio/`

---

## 📁 Directory Structure

```
jisham-portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml      # Automated GitHub Actions deployment pipeline
├── public/                 # Static public assets
├── index.html              # Main HTML5 entry point with SEO metadata
├── styles.css              # Complete CSS design system & responsive layout
├── main.js                 # Interactive logic, canvas animation, & event handlers
├── vite.config.js          # Vite build & GitHub Pages base URL configuration
├── package.json            # NPM dependencies and build scripts
└── README.md               # Documentation & deployment instructions
```

---

*Engineered with ❤️ for Jisham Vallikkadan.*
