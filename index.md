---
layout: home
title: Home
---

<div class="hero-section">
  <div class="hero-content">
    <div class="profile-image">
      <img src="https://github.com/hakanmelikoglu.png" alt="Hakan Melikoglu">
    </div>
    <h1>Hi, I'm Hakan Melikoglu</h1>
    <h2>iOS Developer & Technology Enthusiast</h2>
    <p>Crafting intuitive and privacy-focused iOS applications that make a difference.</p>
    <div class="hero-buttons">
      <a href="/exiframe/projects" class="button primary">View Projects</a>
      <a href="/exiframe/contact" class="button secondary">Get in Touch</a>
    </div>
  </div>
</div>

<div class="featured-app">
  <div class="app-content">
    <div class="app-text">
      <span class="label">Featured App</span>
      <h2>EXIFrame</h2>
      <p>A powerful iOS app for managing and editing photo EXIF data with privacy in mind.</p>
      
      <div class="feature-grid">
        <div class="feature-item">
          <span class="feature-icon">🔒</span>
          <div class="feature-text">
            <h3>Privacy First</h3>
            <p>All processing happens locally on your device</p>
          </div>
        </div>
        
        <div class="feature-item">
          <span class="feature-icon">📸</span>
          <div class="feature-text">
            <h3>Batch Processing</h3>
            <p>Edit multiple photos at once</p>
          </div>
        </div>
      </div>
      
      <div class="app-buttons">
        <a href="#" class="app-store-button">
          <img src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83" alt="Download on the App Store">
        </a>
        <a href="/exiframe/projects" class="button outline">Learn More</a>
      </div>
    </div>
    <div class="app-preview">
      <img src="https://placehold.co/300x600" alt="EXIFrame App Preview">
    </div>
  </div>
</div>

<div class="skills-section">
  <h2>Skills & Expertise</h2>
  <div class="skills-grid">
    <div class="skill-card">
      <span class="skill-icon">📱</span>
      <h3>iOS Development</h3>
      <p>Swift, SwiftUI, UIKit</p>
    </div>
    
    <div class="skill-card">
      <span class="skill-icon">🎨</span>
      <h3>UI/UX Design</h3>
      <p>User-centered design principles</p>
    </div>
    
    <div class="skill-card">
      <span class="skill-icon">🔐</span>
      <h3>Privacy & Security</h3>
      <p>Data protection best practices</p>
    </div>
  </div>
</div>

<style>
.hero-section {
    padding: 6rem 2rem;
    background: linear-gradient(135deg, var(--background-color) 0%, var(--secondary-color) 100%);
    margin: -2rem -1rem 3rem -1rem;
    text-align: center;
}

.hero-content {
    max-width: 800px;
    margin: 0 auto;
}

.profile-image {
    width: 150px;
    height: 150px;
    margin: 0 auto 2rem;
    border-radius: 50%;
    overflow: hidden;
    border: 4px solid white;
    box-shadow: 0 4px 10px rgba(0,0,0,0.1);
}

.profile-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.hero-section h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
    color: var(--text-color);
}

.hero-section h2 {
    font-size: 1.5rem;
    color: var(--light-text);
    margin-bottom: 1.5rem;
    font-weight: 500;
}

.hero-section p {
    font-size: 1.2rem;
    color: var(--text-color);
    margin-bottom: 2rem;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
}

.hero-buttons {
    display: flex;
    gap: 1rem;
    justify-content: center;
}

.featured-app {
    padding: 4rem 2rem;
    background: white;
    border-radius: 20px;
    margin-bottom: 4rem;
    box-shadow: 0 4px 6px rgba(0,0,0,0.05);
}

.app-content {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 300px;
    gap: 4rem;
    align-items: center;
}

.label {
    display: inline-block;
    padding: 0.5rem 1rem;
    background: rgba(124,156,191,0.1);
    color: var(--primary-color);
    border-radius: 20px;
    font-size: 0.9rem;
    font-weight: 500;
    margin-bottom: 1rem;
}

.app-text h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: var(--text-color);
}

.app-text p {
    font-size: 1.1rem;
    color: var(--light-text);
    margin-bottom: 2rem;
}

.feature-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2rem;
    margin: 2rem 0;
}

.feature-item {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    padding: 1.5rem;
    background: var(--background-color);
    border-radius: 12px;
    transition: transform 0.2s ease;
}

.feature-item:hover {
    transform: translateY(-2px);
}

.feature-icon {
    font-size: 2rem;
}

.feature-text h3 {
    color: var(--text-color);
    margin: 0 0 0.5rem 0;
    font-size: 1.1rem;
}

.feature-text p {
    color: var(--light-text);
    margin: 0;
    font-size: 0.9rem;
}

.app-buttons {
    display: flex;
    gap: 1rem;
    align-items: center;
    margin-top: 2rem;
}

.app-store-button {
    max-width: 200px;
    transition: opacity 0.2s ease;
}

.app-store-button:hover {
    opacity: 0.8;
}

.app-store-button img {
    width: 100%;
    height: auto;
}

.app-preview img {
    width: 100%;
    height: auto;
    border-radius: 20px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.skills-section {
    padding: 4rem 2rem;
    text-align: center;
}

.skills-section h2 {
    font-size: 2rem;
    margin-bottom: 3rem;
    color: var(--text-color);
}

.skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto;
}

.skill-card {
    background: white;
    padding: 2rem;
    border-radius: 16px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.05);
    transition: transform 0.2s ease;
}

.skill-card:hover {
    transform: translateY(-5px);
}

.skill-icon {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    display: block;
}

.skill-card h3 {
    color: var(--text-color);
    margin-bottom: 0.5rem;
}

.skill-card p {
    color: var(--light-text);
}

@media (prefers-color-scheme: dark) {
    .featured-app,
    .skill-card {
        background: #2D2D2D;
    }
    
    .feature-item {
        background: #1A1A1A;
    }
}

@media (max-width: 768px) {
    .hero-section {
        padding: 4rem 1rem;
    }
    
    .hero-section h1 {
        font-size: 2.2rem;
    }
    
    .app-content {
        grid-template-columns: 1fr;
        gap: 2rem;
    }
    
    .app-preview {
        display: none;
    }
    
    .hero-buttons,
    .app-buttons {
        flex-direction: column;
    }
    
    .app-store-button {
        margin: 0 auto;
    }
}
</style> 