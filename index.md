---
layout: default
title: Home
---

<div class="hero-section">
  <div class="hero-content">
    <h1>Hi, I'm Hakan Melikoglu</h1>
    <p class="hero-subtitle">iOS Developer & Technology Enthusiast</p>
    <div class="hero-buttons">
      <a href="/projects" class="button primary">View My Projects</a>
      <a href="/about" class="button outline">About Me</a>
    </div>
  </div>
</div>

<div class="featured-section">
  <h2>Featured Project</h2>
  <div class="featured-app">
    <div class="app-preview">
      <img src="/assets/images/exiframe-preview.png" alt="EXIFrame App Preview" class="app-screenshot">
    </div>
    <div class="app-info">
      <h3>EXIFrame</h3>
      <p class="app-description">A privacy-focused EXIF editor for iOS that puts your data control first. Remove or edit metadata from your photos with ease.</p>
      <ul class="app-features">
        <li>✓ Remove sensitive EXIF data</li>
        <li>✓ Edit location information</li>
        <li>✓ Batch processing</li>
        <li>✓ Privacy-first approach</li>
      </ul>
      <div class="app-links">
        <a href="https://apps.apple.com/app/exiframe/id6450112660" class="app-store-button" target="_blank">
          <img src="/assets/images/app-store-badge.svg" alt="Download on the App Store">
        </a>
      </div>
    </div>
  </div>
</div>

<style>
.hero-section {
  padding: 6rem 0;
  text-align: center;
  background: linear-gradient(180deg, var(--background-color) 0%, var(--background-color) 100%);
  border-bottom: 1px solid var(--border-color);
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.hero-content h1 {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  background: linear-gradient(120deg, var(--primary-color), #5856D6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: -1px;
}

.hero-subtitle {
  font-size: 1.5rem;
  color: var(--light-text);
  margin-bottom: 2rem;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.button {
  display: inline-block;
  padding: 0.8rem 1.6rem;
  border-radius: 12px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
}

.button.primary {
  background: var(--primary-color);
  color: white;
}

.button.outline {
  border: 2px solid var(--primary-color);
  color: var(--primary-color);
}

.button:hover {
  transform: translateY(-2px);
  opacity: 0.9;
}

.featured-section {
  padding: 6rem 0;
}

.featured-section h2 {
  text-align: center;
  margin-bottom: 3rem;
  font-size: 2rem;
  font-weight: 700;
}

.featured-app {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.app-preview {
  text-align: center;
}

.app-screenshot {
  max-width: 100%;
  height: auto;
  border-radius: 24px;
  box-shadow: var(--card-shadow);
}

.app-info h3 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: var(--primary-color);
}

.app-description {
  font-size: 1.2rem;
  color: var(--light-text);
  margin-bottom: 2rem;
  line-height: 1.6;
}

.app-features {
  list-style: none;
  padding: 0;
  margin: 0 0 2rem;
}

.app-features li {
  margin-bottom: 1rem;
  font-size: 1.1rem;
  color: var(--text-color);
}

.app-store-button img {
  height: 40px;
  width: auto;
}

@media (max-width: 768px) {
  .hero-content h1 {
    font-size: 2.5rem;
  }
  
  .hero-subtitle {
    font-size: 1.2rem;
  }
  
  .featured-app {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .app-preview {
    order: -1;
  }
  
  .app-screenshot {
    max-width: 80%;
  }
}
</style> 