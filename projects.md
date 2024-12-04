---
layout: page
title: Projects
permalink: /exiframe/projects/
---

<div class="projects-container">
  <div class="project-card featured">
    <div class="project-content">
      <div class="project-header">
        <span class="project-label">Featured App</span>
        <h2>📱 EXIFrame</h2>
      </div>
      
      <p class="project-description">A powerful iOS app for managing and editing photo EXIF data with privacy in mind. Perfect for photographers who care about their metadata and privacy.</p>
      
      <div class="feature-list">
        <div class="feature">
          <span class="feature-icon">🔒</span>
          <div class="feature-text">
            <h3>Privacy First</h3>
            <p>All processing happens locally on your device</p>
          </div>
        </div>
        
        <div class="feature">
          <span class="feature-icon">📸</span>
          <div class="feature-text">
            <h3>Batch Processing</h3>
            <p>Edit multiple photos at once</p>
          </div>
        </div>
        
        <div class="feature">
          <span class="feature-icon">🎯</span>
          <div class="feature-text">
            <h3>Intuitive Design</h3>
            <p>User-friendly interface for easy editing</p>
          </div>
        </div>
        
        <div class="feature">
          <span class="feature-icon">⚡️</span>
          <div class="feature-text">
            <h3>Fast & Efficient</h3>
            <p>Quick processing and smooth performance</p>
          </div>
        </div>
      </div>
      
      <div class="project-links">
        <a href="#" class="app-store-button">
          <img src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&amp;releaseDate=1701216000" alt="Download on the App Store">
        </a>
        <div class="secondary-links">
          <a href="/exiframe/support" class="button outline">Get Support</a>
          <a href="/exiframe/privacy-policy/photoexif-mark" class="button outline">Privacy Policy</a>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
.projects-container {
    max-width: 1200px;
    margin: 0 auto;
}

.project-card {
    background: white;
    border-radius: 20px;
    padding: 2rem;
    margin-bottom: 2rem;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}

.project-card.featured {
    background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
    border: 1px solid rgba(0,0,0,0.1);
}

.project-header {
    margin-bottom: 2rem;
}

.project-label {
    display: inline-block;
    padding: 0.5rem 1rem;
    background: linear-gradient(45deg, #007bff20, #00bcd420);
    color: #007bff;
    border-radius: 20px;
    font-size: 0.9rem;
    font-weight: 500;
    margin-bottom: 1rem;
}

.project-description {
    font-size: 1.1rem;
    color: #666;
    margin-bottom: 2rem;
    line-height: 1.6;
}

.feature-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    margin-bottom: 2rem;
}

.feature {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    padding: 1.5rem;
    background: rgba(255,255,255,0.7);
    border-radius: 12px;
    transition: transform 0.2s ease;
}

.feature:hover {
    transform: translateY(-2px);
}

.feature-icon {
    font-size: 2rem;
}

.feature-text h3 {
    color: #333;
    margin: 0 0 0.5rem 0;
    font-size: 1.1rem;
}

.feature-text p {
    color: #666;
    margin: 0;
    font-size: 0.9rem;
}

.project-links {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    margin-top: 3rem;
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

.secondary-links {
    display: flex;
    gap: 1rem;
}

.button.outline {
    padding: 0.8rem 1.5rem;
    border: 2px solid #007bff;
    color: #007bff;
    border-radius: 8px;
    text-decoration: none;
    transition: all 0.2s ease;
    font-weight: 500;
}

.button.outline:hover {
    background: #007bff;
    color: white;
}

@media (prefers-color-scheme: dark) {
    .project-card {
        background: #1a1a1a;
    }
    
    .project-card.featured {
        background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
        border: 1px solid rgba(255,255,255,0.1);
    }
    
    .project-description {
        color: #ccc;
    }
    
    .feature {
        background: rgba(255,255,255,0.05);
    }
    
    .feature-text h3 {
        color: #fff;
    }
    
    .feature-text p {
        color: #ccc;
    }
}

@media (max-width: 768px) {
    .project-card {
        padding: 1.5rem;
    }
    
    .feature-list {
        grid-template-columns: 1fr;
        gap: 1rem;
    }
    
    .secondary-links {
        flex-direction: column;
        width: 100%;
        
        .button.outline {
            width: 100%;
            text-align: center;
        }
    }
}
</style>