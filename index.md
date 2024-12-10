---
layout: page
title: Home
permalink: /
---

<div class="home-container">
  <div class="hero-section">
    <div class="hero-content">
      <h1>Hi, I'm Hakan</h1>
      <p class="subtitle">iOS Developer & Technology Enthusiast</p>
      <p class="description">Crafting privacy-focused iOS apps with modern design and seamless user experience.</p>
    </div>
  </div>

  <div class="featured-project">
    <div class="project-card">
      <div class="project-hero">
        <div class="hero-gradient">
          <img src="/assets/images/exiframe/exifly-logo-light.png" alt="EXIFrame" class="app-icon">
        </div>
      </div>
      <div class="project-content">
        <div class="project-header">
          <img src="/assets/images/exiframe/exifly-logo-light.png" alt="EXIFrame" class="project-logo">
          <h2>EXIFrame</h2>
        </div>
        <p class="project-description">A privacy-focused EXIF editor for iOS that puts your data control first. Edit, view, and remove EXIF data from your photos with ease.</p>
        <div class="project-links">
          <a href="/project/exiframe/" class="primary-button">Learn More</a>
          <a href="https://apps.apple.com/app/exiframe/id6473508929" class="app-store-button" target="_blank">
            <img src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&amp;releaseDate=1701734400" alt="Download on the App Store">
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
.home-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
}

.hero-section {
  text-align: center;
  padding: 4rem 0;
  margin-bottom: 2rem;
}

.hero-content h1 {
  font-size: 3rem;
  margin: 0 0 1rem;
  background: linear-gradient(120deg, var(--primary-color), #92FE9D);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.subtitle {
  font-size: 1.5rem;
  color: var(--text-color);
  margin-bottom: 1rem;
}

.description {
  font-size: 1.2rem;
  color: var(--light-text);
  max-width: 600px;
  margin: 0 auto;
}

.project-card {
  background: var(--card-background);
  border-radius: 24px;
  overflow: hidden;
  box-shadow: var(--card-shadow);
  margin-bottom: 2rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.project-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--hover-shadow);
}

.project-hero {
  position: relative;
  height: 400px;
  overflow: hidden;
}

.hero-gradient {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, #00C9FF, #92FE9D, #FFF94C, #FF9A8B);
  background-size: 300% 300%;
  animation: gradientShift 15s ease infinite;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.app-icon {
  width: 180px;
  height: 180px;
  border-radius: 37.5%;
  background: #fff;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease;
  object-fit: cover;
}

.app-icon:hover {
  transform: scale(1.05);
}

.project-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.project-logo {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  object-fit: cover;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.project-content {
  padding: 2rem;
}

.project-content h2 {
  font-size: 2rem;
  margin: 0;
  background: linear-gradient(120deg, var(--primary-color), #92FE9D);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.project-description {
  font-size: 1.1rem;
  line-height: 1.6;
  color: var(--text-color);
  margin-bottom: 2rem;
}

.project-links {
  display: flex;
  gap: 1rem;
  align-items: center;
  flex-wrap: wrap;
}

.primary-button {
  display: inline-block;
  padding: 0.8rem 1.6rem;
  background: var(--primary-color);
  color: white;
  text-decoration: none;
  border-radius: 12px;
  font-weight: 500;
  transition: all 0.3s ease;
}

.primary-button:hover {
  opacity: 0.9;
  transform: translateY(-2px);
}

.app-store-button {
  display: inline-block;
  transition: transform 0.3s ease;
}

.app-store-button:hover {
  transform: translateY(-2px);
}

.app-store-button img {
  height: 40px;
  width: auto;
}

@keyframes gradientShift {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

@media (max-width: 768px) {
  .hero-section {
    padding: 2rem 0;
  }

  .hero-content h1 {
    font-size: 2.5rem;
  }

  .subtitle {
    font-size: 1.25rem;
  }

  .description {
    font-size: 1rem;
  }

  .project-hero {
    height: 300px;
  }

  .app-icon {
    width: 140px;
    height: 140px;
  }

  .project-logo {
    width: 40px;
    height: 40px;
  }

  .project-content {
    padding: 1.5rem;
  }

  .project-links {
    flex-direction: column;
    align-items: stretch;
  }

  .primary-button,
  .app-store-button {
    text-align: center;
  }
}
</style> 