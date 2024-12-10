---
layout: page
title: Projects
permalink: /projects/
---

<div class="projects-container">
  <div class="projects-header">
    <h1>My Projects</h1>
    <p>A collection of projects I've worked on, focusing on privacy, user experience, and innovation.</p>
  </div>

  <div class="projects-grid">
    <div class="project-card">
      <div class="project-content">
        <h2>EXIFrame</h2>
        <p class="project-description">A privacy-focused EXIF editor for iOS that puts your data control first.</p>
        <ul class="project-features">
          <li>✓ Local EXIF data processing</li>
          <li>✓ Privacy-first approach</li>
          <li>✓ Batch processing support</li>
          <li>✓ Modern iOS design</li>
        </ul>
        <div class="project-links">
          <a href="/project/exiframe" class="button primary">Learn More</a>
          <a href="https://apps.apple.com/app/exiframe/id6450112660" class="button outline" target="_blank">View on App Store</a>
        </div>
      </div>
    </div>

    <!-- More projects can be added here -->
  </div>
</div>

<style>
.projects-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem 0;
}

.projects-header {
    text-align: center;
    margin-bottom: 4rem;
}

.projects-header h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: var(--text-color);
}

.projects-header p {
    font-size: 1.2rem;
    color: var(--light-text);
    max-width: 600px;
    margin: 0 auto;
}

.projects-grid {
    display: grid;
    gap: 2rem;
}

.project-card {
    background: var(--card-background);
    border-radius: 16px;
    overflow: hidden;
    box-shadow: var(--card-shadow);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.project-card:hover {
    transform: translateY(-4px);
    box-shadow: var(--hover-shadow);
}

.project-content {
    padding: 2rem;
}

.project-content h2 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
    color: var(--primary-color);
}

.project-description {
    font-size: 1.1rem;
    color: var(--light-text);
    margin-bottom: 1.5rem;
    line-height: 1.6;
}

.project-features {
    list-style: none;
    padding: 0;
    margin: 0 0 2rem;
}

.project-features li {
    margin-bottom: 0.8rem;
    color: var(--text-color);
}

.project-links {
    display: flex;
    gap: 1rem;
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

@media (max-width: 768px) {
    .projects-container {
        padding: 1rem;
    }
    
    .projects-header h1 {
        font-size: 2rem;
    }
    
    .project-links {
        flex-direction: column;
    }
    
    .button {
        text-align: center;
    }
}
</style>