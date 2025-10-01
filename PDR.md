# Product Design Requirements (PDR) - Personal Website Refactor

## 1. Project Overview

### 1.1 Purpose
Transform the current Jekyll-based personal website into a modern, clean, and responsive personal website showcasing Hakan Melikoglu as an iOS developer and technology enthusiast.

### 1.2 Current State Analysis
- **Current Technology**: Jekyll static site generator
- **Current Structure**: Basic Jekyll site with custom styling
- **Current Content**: Homepage, project pages (EXIFrame, LittleLog), about, contact, blog
- **Current Issues**: 
  - Heavy reliance on Jekyll with complex custom styling
  - Inconsistent design patterns across pages
  - Limited modern JavaScript functionality
  - Basic dark mode implementation

### 1.3 Target State
- **Technology Stack**: Modern HTML5, CSS3, and JavaScript (ES6+)
- **Design**: Clean, modern, minimalist design with consistent branding
- **Functionality**: Full dark mode support, smooth animations, responsive design
- **Performance**: Fast loading, optimized assets, modern web standards

## 2. Design Requirements

### 2.1 Visual Design
- **Style**: Modern, clean, minimalist aesthetic
- **Color Scheme**: 
  - Primary: #5856D6 (purple)
  - Secondary: #92FE9D (green accent)
  - Text: #2c3e50 (dark gray) / #e1e1e1 (light gray for dark mode)
  - Background: #ffffff / #1a1a1a (dark mode)
- **Typography**: System fonts (SF Pro, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto)
- **Spacing**: Consistent 8px grid system
- **Border Radius**: 12px for cards, 8px for buttons
- **Shadows**: Subtle, layered shadows for depth

### 2.2 Layout Structure
- **Header**: Fixed/sticky navigation with logo (left) and menu (right)
- **Main Content**: Clean, centered content with max-width constraints
- **Footer**: Simple footer with social links and copyright
- **Responsive**: Mobile-first approach with breakpoints at 768px, 1024px

### 2.3 Navigation
- **Logo**: "Hakan Melikoglu" text logo with gradient styling
- **Menu Items**: Home, Blog, Projects, About, Contact
- **Mobile**: Hamburger menu with slide-out navigation
- **Active States**: Clear indication of current page

## 3. Technical Requirements

### 3.1 Technology Stack
- **HTML5**: Semantic markup, accessibility features
- **CSS3**: 
  - CSS Grid and Flexbox for layouts
  - CSS Custom Properties (variables) for theming
  - CSS Animations and Transitions
  - Media queries for responsive design
- **JavaScript (ES6+)**:
  - Vanilla JavaScript (no frameworks)
  - Modern ES6+ features (modules, async/await, etc.)
  - Dark mode toggle functionality
  - Smooth scrolling and animations
  - Form handling

### 3.2 File Structure
```
/
├── index.html
├── blog.html
├── projects.html
├── about.html
├── contact.html
├── css/
│   ├── main.css
│   ├── components.css
│   └── dark-mode.css
├── js/
│   ├── main.js
│   ├── dark-mode.js
│   └── animations.js
├── assets/
│   ├── images/
│   │   ├── exiframe/
│   │   └── baby-tracker/
│   └── icons/
└── project/
    ├── exiframe/
    │   ├── index.html
    │   ├── privacy-policy.html
    │   └── terms-of-use.html
    └── baby-tracker/
        ├── index.html
        ├── privacy-policy.html
        └── terms-of-use.html
```

## 4. Page Specifications

### 4.1 Homepage (index.html)
- **Hero Section**: 
  - Name: "Hi, I'm Hakan"
  - Title: "iOS Developer & Technology Enthusiast"
  - Description: Brief introduction
  - CTA: "View My Work" button
- **Featured Projects**: 
  - EXIFrame app showcase
  - LittleLog app showcase
  - Project cards with hover effects
- **About Preview**: Brief about section with link to full about page
- **Contact CTA**: Call-to-action to contact page

### 4.2 Projects Page (projects.html)
- **Page Header**: "My iOS Apps" title with description
- **Project Grid**: 
  - EXIFrame project card
  - LittleLog project card
  - Each card includes: app icon, title, description, features, links
- **Project Details**: Links to individual project pages

### 4.3 Individual Project Pages
- **EXIFrame** (`/project/exiframe/index.html`):
  - Hero section with app icon and gradient background
  - App description and App Store link
  - Features grid (4 main features)
  - Documentation links (Privacy Policy, Terms of Use)
- **LittleLog** (`/project/littlelog/index.html`):
  - Similar structure to EXIFrame
  - Custom app icon (CSS-generated baby face)
  - 6 main features in grid layout
  - Documentation links

### 4.4 About Page (about.html)
- **Profile Section**: Photo, name, brief intro
- **Experience Timeline**: Professional experience
- **Skills Grid**: Technical skills with icons
- **Connect Section**: Social links and contact info

### 4.5 Contact Page (contact.html)
- **Contact Methods**: Email, LinkedIn, GitHub cards
- **Contact Form**: Name, email, message fields
- **Form Handling**: Client-side validation, Formspree integration

### 4.6 Blog Page (blog.html)
- **Page Header**: "Blog" title with description
- **Blog Posts List**: Placeholder for future blog posts
- **Pagination**: Ready for future blog implementation

## 5. Dark Mode Implementation

### 5.1 Theme System
- **CSS Custom Properties**: Root-level variables for colors
- **Toggle Button**: Header-based dark mode toggle
- **Persistence**: localStorage for theme preference
- **System Preference**: Respects user's system preference
- **Smooth Transition**: CSS transitions between themes

### 5.2 Dark Mode Colors
- **Background**: #1a1a1a
- **Card Background**: #2d2d2d
- **Text**: #e1e1e1
- **Secondary Text**: #a1a1a1
- **Border**: rgba(255, 255, 255, 0.1)
- **Primary**: #5856D6 (unchanged)
- **Accent**: #92FE9D (unchanged)

## 6. Responsive Design

### 6.1 Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

### 6.2 Mobile Considerations
- **Touch Targets**: Minimum 44px touch targets
- **Navigation**: Hamburger menu with slide-out
- **Typography**: Readable font sizes (16px minimum)
- **Images**: Responsive images with proper sizing
- **Forms**: Mobile-friendly form inputs

## 7. Accessibility Requirements

### 7.1 WCAG 2.1 AA Compliance
- **Color Contrast**: Minimum 4.5:1 ratio for normal text
- **Keyboard Navigation**: Full keyboard accessibility
- **Screen Readers**: Proper semantic HTML and ARIA labels
- **Focus Indicators**: Clear focus states for interactive elements

## 8. Animation and Interactions

### 8.1 Micro-interactions
- **Hover Effects**: Subtle hover animations on interactive elements
- **Button States**: Press, hover, and focus states
- **Card Animations**: Lift effect on hover
- **Loading States**: Smooth loading animations

### 8.2 Page Transitions
- **Smooth Scrolling**: Native smooth scrolling behavior
- **Fade Animations**: Subtle fade-in animations for content
- **Parallax Effects**: Subtle parallax on hero sections

## 9. Success Metrics

### 9.1 Performance Metrics
- **Page Load Time**: < 3 seconds
- **Lighthouse Score**: > 90
- **Bounce Rate**: < 40%
- **Time on Site**: > 2 minutes

### 9.2 User Experience Metrics
- **Mobile Usability**: 100% mobile-friendly
- **Accessibility Score**: > 95%
- **User Feedback**: Positive user feedback
- **Conversion Rate**: Contact form submissions

## 10. GitHub Pages Deployment

### 10.1 Repository Configuration
- **Repository Name**: hakanmelikoglu.github.io
- **Branch**: main (primary branch for deployment)
- **Custom Domain**: hakanmelikoglu.com
- **HTTPS**: Automatically provided by GitHub Pages
- **Build Process**: Static site - no build step required
- **Deployment**: Automatic deployment on push to main branch

### 10.2 GitHub Pages Settings
- **Source**: Deploy from a branch (main)
- **Custom Domain**: hakanmelikoglu.com (configured in repository settings)
- **Enforce HTTPS**: Enabled
- **Jekyll**: Disabled (using static HTML/CSS/JS)

### 10.3 File Structure for GitHub Pages
```
hakanmelikoglu.github.io/
├── index.html (root page)
├── projects.html
├── about.html
├── contact.html
├── blog.html
├── css/
│   ├── main.css
│   ├── components.css
│   └── dark-mode.css
├── js/
│   ├── main.js
│   ├── dark-mode.js
│   └── animations.js
├── assets/
│   └── images/
└── project/
    ├── exiframe/
    └── littlelog/
```

### 10.4 Deployment Process
1. **Code Changes**: Make changes to HTML, CSS, or JS files
2. **Commit Changes**: `git add .` and `git commit -m "Update message"`
3. **Push to GitHub**: `git push origin main`
4. **Automatic Deployment**: GitHub Pages automatically builds and deploys
5. **Live Site**: Changes are live at hakanmelikoglu.com within minutes

### 10.5 Maintenance
- **Content Updates**: Direct file editing in repository
- **Performance Monitoring**: GitHub Pages analytics
- **Security Updates**: Regular dependency updates
- **Backup Strategy**: Version control with GitHub
- **Deployment**: Automatic via Git push
