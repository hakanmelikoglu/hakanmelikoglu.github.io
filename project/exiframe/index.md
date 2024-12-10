---
layout: page
title: EXIFrame
permalink: /project/exiframe/
---

<div class="app-landing">
  <div class="hero-section">
    <div class="hero-content">
      <h1>EXIFrame</h1>
      <p class="tagline">Your Privacy-Focused EXIF Editor for iOS</p>
      <div class="app-buttons">
        <a href="https://apps.apple.com/app/exiframe/id6450112660" class="app-store-button" target="_blank">
          <img src="/assets/images/app-store-badge.svg" alt="Download on the App Store">
        </a>
      </div>
    </div>
    <div class="hero-image">
      <img src="/assets/images/exiframe-preview.png" alt="EXIFrame App Preview" class="app-preview">
    </div>
  </div>

  <div class="features-section">
    <h2>Key Features</h2>
    <div class="features-grid">
      <div class="feature-card">
        <div class="feature-icon">🔒</div>
        <h3>Privacy First</h3>
        <p>All processing happens locally on your device. No data is ever uploaded to any servers.</p>
      </div>

      <div class="feature-card">
        <div class="feature-icon">📸</div>
        <h3>Batch Processing</h3>
        <p>Edit EXIF data for multiple photos at once, saving you time and effort.</p>
      </div>

      <div class="feature-card">
        <div class="feature-icon">🎯</div>
        <h3>Intuitive Interface</h3>
        <p>Clean and user-friendly design makes editing EXIF data a breeze.</p>
      </div>

      <div class="feature-card">
        <div class="feature-icon">⚡️</div>
        <h3>Fast & Efficient</h3>
        <p>Lightning-fast processing ensures you spend less time waiting.</p>
      </div>
    </div>
  </div>

  <div class="info-section">
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
          <li><a href="/support">Get Help</a></li>
          <li><a href="/project/exiframe/privacy-policy">Privacy Policy</a></li>
          <li><a href="/project/exiframe/terms-of-use">Terms of Use</a></li>
        </ul>
      </div>

      <div class="info-card">
        <h3>Contact</h3>
        <ul>
          <li><a href="mailto:exiframe@hakanmelikoglu.com">Email Support</a></li>
          <li><a href="https://github.com/hakanmelikoglu">GitHub</a></li>
        </ul>
      </div>
    </div>
  </div>
</div>

<style>
.app-landing {
    max-width: 1200px;
    margin: 0 auto;
}

.hero-section {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
    padding: 4rem 0;
}

.hero-content h1 {
    font-size: 3.5rem;
    margin-bottom: 1rem;
    background: linear-gradient(120deg, var(--primary-color), #5856D6);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.tagline {
    font-size: 1.5rem;
    color: var(--light-text);
    margin-bottom: 2rem;
}

.app-preview {
    width: 100%;
    max-width: 400px;
    height: auto;
    border-radius: 24px;
    box-shadow: var(--card-shadow);
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
    background: var(--card-background);
    padding: 2rem;
    border-radius: 16px;
    text-align: left;
    box-shadow: var(--card-shadow);
    transition: transform 0.2s ease;
}

.feature-card:hover {
    transform: translateY(-5px);
}

.feature-icon {
    font-size: 2.5rem;
    margin-bottom: 1rem;
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

.info-section {
    padding: 4rem 0;
    border-top: 1px solid var(--border-color);
}

.info-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
}

.info-card {
    background: var(--card-background);
    padding: 2rem;
    border-radius: 16px;
    box-shadow: var(--card-shadow);
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

.app-store-button img {
    height: 40px;
    width: auto;
}

@media (max-width: 768px) {
    .hero-section {
        grid-template-columns: 1fr;
        text-align: center;
        gap: 2rem;
    }
    
    .hero-content h1 {
        font-size: 2.5rem;
    }
    
    .tagline {
        font-size: 1.2rem;
    }
    
    .app-preview {
        max-width: 80%;
        margin: 0 auto;
    }
}
</style> 