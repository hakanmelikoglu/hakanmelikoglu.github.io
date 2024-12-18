---
layout: page
title: Projects
permalink: /projects/
---

<div class="projects-container">
  <div class="project-card exiframe">
    <div class="project-hero">
      <div class="hero-gradient">
        <div class="app-icon">
          <div class="icon-gradient">
            <div class="camera-settings">
              <div class="setting">
                <span class="icon">ƒ</span>
                <span class="value">1.8</span>
              </div>
              <div class="setting">
                <span class="value">ISO</span>
                <span class="value">100</span>
              </div>
              <div class="setting">
                <span class="value">1/60</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="project-content">
      <div class="project-header">
        <div class="project-logo">
          <div class="logo-gradient">
            <div class="camera-settings">
              <div class="setting">
                <span class="icon">ƒ</span>
                <span class="value">1.8</span>
              </div>
              <div class="setting">
                <span class="value">ISO</span>
                <span class="value">100</span>
              </div>
              <div class="setting">
                <span class="value">1/60</span>
              </div>
            </div>
          </div>
        </div>
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

<style>
.projects-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
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
  overflow: hidden;
  position: relative;
  transition: transform 0.3s ease;
}

.app-icon:hover {
  transform: scale(1.05);
}

.icon-gradient {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, #00C9FF, #92FE9D, #FFF94C, #FF9A8B);
  background-size: 300% 300%;
  animation: gradientShift 15s ease infinite;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding-bottom: 1.5rem;
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
  overflow: hidden;
  position: relative;
}

.logo-gradient {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, #00C9FF, #92FE9D, #FFF94C, #FF9A8B);
  background-size: 300% 300%;
  animation: gradientShift 15s ease infinite;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding-bottom: 0.25rem;
}

.project-logo .camera-settings {
  transform: scale(0.2);
  margin-bottom: -8px;
}

.camera-settings {
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  padding: 0.5rem 1rem;
  border-radius: 12px;
  display: flex;
  gap: 1rem;
  font-family: -apple-system, BlinkMacSystemFont, "SF Mono", monospace;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transform: scale(0.6);
}

.setting {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  color: #1a1a1a;
  font-size: 1.2rem;
  font-weight: 500;
}

.setting .icon {
  font-family: -apple-system, BlinkMacSystemFont, "SF Pro", system-ui;
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

@media (prefers-color-scheme: dark) {
  .camera-settings {
    background: rgba(0, 0, 0, 0.8);
  }

  .setting {
    color: white;
  }
}

@media (max-width: 768px) {
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

  .camera-settings {
    transform: scale(0.5);
    padding: 0.4rem 0.8rem;
    gap: 0.8rem;
  }

  .project-logo .camera-settings {
    transform: scale(0.15);
    margin-bottom: -10px;
  }

  .setting {
    font-size: 1rem;
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