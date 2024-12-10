---
layout: page
title: EXIFrame
permalink: /project/exiframe/
---

<div class="project-container">
  <div class="project-hero">
    <div class="hero-gradient">
      <img src="{{ '/assets/images/exiframe/exifly-logo-light.png' | relative_url }}" alt="EXIFrame" class="app-icon">
    </div>
  </div>

  <div class="project-content">
    <div class="project-header">
      <img src="{{ '/assets/images/exiframe/exifly-logo-light.png' | relative_url }}" alt="EXIFrame" class="project-logo">
      <h1>EXIFrame</h1>
    </div>

    <div class="app-description">
      <p>A privacy-focused EXIF editor for iOS that puts your data control first. Edit, view, and remove EXIF data from your photos with ease.</p>
      <div class="app-links">
        <a href="https://apps.apple.com/app/exiframe/id6473508929" class="app-store-button" target="_blank">
          <img src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&amp;releaseDate=1701734400" alt="Download on the App Store">
        </a>
      </div>
    </div>

    <div class="features-section">
      <h2>Features</h2>
      <div class="features-grid">
        <div class="feature-card">
          <h3>Privacy First</h3>
          <p>All photo processing happens locally on your device. No data is ever uploaded or shared.</p>
        </div>
        <div class="feature-card">
          <h3>EXIF Editor</h3>
          <p>View and edit detailed EXIF metadata including camera settings, location, and timestamps.</p>
        </div>
        <div class="feature-card">
          <h3>Batch Processing</h3>
          <p>Edit or remove EXIF data from multiple photos at once with just a few taps.</p>
        </div>
        <div class="feature-card">
          <h3>Modern Design</h3>
          <p>Clean, intuitive interface designed for iOS with support for light and dark modes.</p>
        </div>
      </div>
    </div>

    <div class="links-section">
      <h2>Documentation</h2>
      <div class="doc-links">
        <a href="/project/exiframe/privacy-policy" class="doc-link">Privacy Policy</a>
        <a href="/project/exiframe/terms-of-use" class="doc-link">Terms of Use</a>
      </div>
    </div>
  </div>
</div>

<style>
.project-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0;
}

.project-hero {
  position: relative;
  height: 400px;
  overflow: hidden;
  margin: -30px -30px 0;
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
  margin: 2rem 0;
}

.project-logo {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  object-fit: cover;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.project-content {
  padding: 0 2rem 2rem;
}

.project-content h1 {
  font-size: 2.5rem;
  margin: 0;
  background: linear-gradient(120deg, var(--primary-color), #92FE9D);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.app-description {
  margin-bottom: 3rem;
}

.app-description p {
  font-size: 1.2rem;
  line-height: 1.6;
  color: var(--text-color);
  margin-bottom: 2rem;
}

.app-links {
  display: flex;
  gap: 1rem;
  align-items: center;
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

.features-section {
  margin-bottom: 3rem;
}

.features-section h2 {
  font-size: 2rem;
  margin-bottom: 2rem;
  background: linear-gradient(120deg, var(--primary-color), #92FE9D);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.feature-card {
  background: var(--card-background);
  padding: 1.5rem;
  border-radius: 16px;
  box-shadow: var(--card-shadow);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--hover-shadow);
}

.feature-card h3 {
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: var(--primary-color);
}

.feature-card p {
  color: var(--text-color);
  line-height: 1.6;
}

.links-section {
  margin-top: 4rem;
}

.links-section h2 {
  font-size: 2rem;
  margin-bottom: 2rem;
  background: linear-gradient(120deg, var(--primary-color), #92FE9D);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.doc-links {
  display: flex;
  gap: 1rem;
}

.doc-link {
  display: inline-block;
  padding: 0.8rem 1.6rem;
  background: var(--primary-color);
  color: white;
  text-decoration: none;
  border-radius: 12px;
  font-weight: 500;
  transition: all 0.3s ease;
}

.doc-link:hover {
  opacity: 0.9;
  transform: translateY(-2px);
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
  .project-hero {
    height: 300px;
    margin: -20px -20px 0;
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
    padding: 0 1.5rem 1.5rem;
  }

  .project-content h1 {
    font-size: 2rem;
  }

  .features-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .doc-links {
    flex-direction: column;
  }

  .doc-link {
    text-align: center;
  }
}
</style> 