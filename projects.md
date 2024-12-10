---
layout: page
title: Projects
permalink: /exiframe/projects/
---

<div class="app-showcase">
  <div class="app-hero">
    <div class="app-hero-content">
      <h1>EXIFrame</h1>
      <p class="app-tagline">Your Privacy-Focused EXIF Editor</p>
      <p class="app-description">A powerful iOS app that lets you view and edit photo EXIF data while keeping your privacy intact. Perfect for photographers who care about their metadata.</p>
      
      <div class="app-buttons">
        <a href="#" class="app-store-button">
          <img src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83" alt="Download on the App Store">
        </a>
      </div>
    </div>
    <div class="app-preview">
      <img src="https://placehold.co/300x600" alt="EXIFrame App Preview">
    </div>
  </div>

  <div class="features-section">
    <h2>Key Features</h2>
    <div class="features-grid">
      <div class="feature-card">
        <span class="feature-icon">🔒</span>
        <h3>Privacy First</h3>
        <p>All data processing happens locally on your device. No data is ever uploaded to any servers.</p>
      </div>

      <div class="feature-card">
        <span class="feature-icon">📸</span>
        <h3>Batch Processing</h3>
        <p>Edit EXIF data for multiple photos at once, saving you time and effort.</p>
      </div>

      <div class="feature-card">
        <span class="feature-icon">🎯</span>
        <h3>Intuitive Interface</h3>
        <p>Clean and user-friendly design makes editing EXIF data a breeze.</p>
      </div>

      <div class="feature-card">
        <span class="feature-icon">⚡️</span>
        <h3>Fast & Efficient</h3>
        <p>Lightning-fast processing ensures you spend less time waiting.</p>
      </div>
    </div>
  </div>

  <div class="app-info">
    <div class="info-grid">
      <div class="info-card">
        <h3>Requirements</h3>
        <ul>
          <li>iOS 15.0 or later</li>
          <li>Compatible with iPhone and iPad</li>
          <li>Requires photo library access</li>
        </ul>
      </div>

      <div class="info-card">
        <h3>Support</h3>
        <ul>
          <li><a href="/exiframe/support">Get Help</a></li>
          <li><a href="/exiframe/privacy-policy/photoexif-mark">Privacy Policy</a></li>
          <li><a href="/exiframe/terms-of-use">Terms of Use</a></li>
        </ul>
      </div>

      <div class="info-card">
        <h3>Contact</h3>
        <ul>
          <li><a href="mailto:exiframe@hakanmelikoglu.com">Email Support</a></li>
          <li><a href="/exiframe/contact">Contact Form</a></li>
        </ul>
      </div>
    </div>
  </div>
</div>

<style>
.app-showcase {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem 0;
}

.app-hero {
    display: grid;
    grid-template-columns: 1fr 300px;
    gap: 4rem;
    align-items: center;
    margin-bottom: 4rem;
}

.app-hero-content h1 {
    font-size: 3.5rem;
    margin-bottom: 1rem;
    color: var(--text-color);
}

.app-tagline {
    font-size: 1.5rem;
    color: var(--primary-color);
    margin-bottom: 1.5rem;
    font-weight: 500;
}

.app-description {
    font-size: 1.1rem;
    color: var(--light-text);
    margin-bottom: 2rem;
    line-height: 1.6;
}

.app-preview img {
    width: 100%;
    height: auto;
    border-radius: 20px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.app-store-button {
    max-width: 200px;
    display: inline-block;
    transition: opacity 0.2s ease;
}

.app-store-button:hover {
    opacity: 0.8;
}

.app-store-button img {
    width: 100%;
    height: auto;
}

.features-section {
    padding: 4rem 0;
    text-align: center;
}

.features-section h2 {
    font-size: 2rem;
    margin-bottom: 3rem;
    color: var(--text-color);
}

.features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
}

.feature-card {
    background: white;
    padding: 2rem;
    border-radius: 16px;
    text-align: left;
    box-shadow: 0 4px 6px rgba(0,0,0,0.05);
    transition: transform 0.2s ease;
}

.feature-card:hover {
    transform: translateY(-5px);
}

.feature-icon {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    display: block;
}

.feature-card h3 {
    color: var(--text-color);
    margin-bottom: 1rem;
    font-size: 1.2rem;
}

.feature-card p {
    color: var(--light-text);
    line-height: 1.5;
}

.app-info {
    padding: 4rem 0;
    border-top: 1px solid var(--border-color);
}

.info-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
}

.info-card {
    background: white;
    padding: 2rem;
    border-radius: 16px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.05);
}

.info-card h3 {
    color: var(--text-color);
    margin-bottom: 1rem;
    font-size: 1.2rem;
}

.info-card ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.info-card li {
    margin-bottom: 0.8rem;
    color: var(--light-text);
}

.info-card a {
    color: var(--primary-color);
    text-decoration: none;
    
    &:hover {
        text-decoration: underline;
    }
}

@media (prefers-color-scheme: dark) {
    .feature-card,
    .info-card {
        background: #2D2D2D;
    }
}

@media (max-width: 768px) {
    .app-hero {
        grid-template-columns: 1fr;
        gap: 2rem;
        text-align: center;
    }
    
    .app-preview {
        display: none;
    }
    
    .app-hero-content h1 {
        font-size: 2.5rem;
    }
    
    .app-store-button {
        margin: 0 auto;
    }
    
    .feature-card {
        text-align: center;
    }
}
</style>