---
layout: home
title: Home
---

<div class="hero-section" markdown="1">
  <div class="hero-content">
    <div class="profile-image">
      <!-- Add your profile image URL here -->
      <img src="https://github.com/hakanmelikoglu.png" alt="Hakan Melikoglu" />
    </div>
    <h1>Hello, I'm Hakan Melikoglu 👋</h1>
    <h2>iOS Developer & Technology Enthusiast</h2>
    <p>I create intuitive and user-focused iOS applications that make a difference in people's daily lives.</p>
    <div class="hero-buttons">
      <a href="/exiframe/projects" class="button primary">View Projects</a>
      <a href="/exiframe/blog" class="button secondary">Read Blog</a>
    </div>
  </div>
</div>

<div class="featured-project">
  <div class="project-content">
    <div class="project-text">
      <span class="label">Featured Project</span>
      <h2>📱 EXIFrame</h2>
      <p>A powerful iOS app for managing and editing photo EXIF data with privacy in mind.</p>
      
      <div class="feature-grid">
        <div class="feature-item">
          <span class="feature-icon">🔒</span>
          <h3>Privacy-focused</h3>
          <p>Your data stays on your device</p>
        </div>
        <div class="feature-item">
          <span class="feature-icon">📸</span>
          <h3>Batch Processing</h3>
          <p>Edit multiple photos at once</p>
        </div>
        <div class="feature-item">
          <span class="feature-icon">🎯</span>
          <h3>Intuitive Design</h3>
          <p>Easy to use interface</p>
        </div>
        <div class="feature-item">
          <span class="feature-icon">⚡️</span>
          <h3>Fast & Efficient</h3>
          <p>Quick processing times</p>
        </div>
      </div>

      <div class="project-links">
        <a href="/exiframe/projects" class="button">Learn More</a>
        <a href="/exiframe/support" class="button outline">Get Support</a>
      </div>
    </div>
  </div>
</div>

<div class="blog-section">
  <h2>Latest Blog Posts</h2>
  <p class="section-description">Stay tuned for my thoughts on iOS development, tech insights, and project updates.</p>
  <div class="coming-soon">
    <span class="soon-icon">📝</span>
    <p>New blog posts coming soon!</p>
  </div>
</div>

<div class="connect-section">
  <h2>Let's Connect</h2>
  <div class="social-links">
    <a href="https://linkedin.com/in/hakanmelikoglu" class="social-link linkedin">
      <span class="icon">💼</span>
      <span class="text">LinkedIn</span>
    </a>
    <a href="https://github.com/hakanmelikoglu" class="social-link github">
      <span class="icon">🐙</span>
      <span class="text">GitHub</span>
    </a>
    <a href="mailto:exiframe@hakanmelikoglu.com" class="social-link email">
      <span class="icon">📧</span>
      <span class="text">Email</span>
    </a>
  </div>
</div>

<style>
.hero-section {
    text-align: center;
    padding: 4rem 2rem;
    background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
    border-radius: 20px;
    margin: -2rem -1rem 3rem -1rem;
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
    font-size: 2.8rem;
    margin-bottom: 1rem;
    background: linear-gradient(45deg, #007bff, #00bcd4);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 700;
}

.hero-section h2 {
    font-size: 1.5rem;
    color: #666;
    margin-bottom: 1.5rem;
    font-weight: 500;
}

.hero-section p {
    font-size: 1.2rem;
    color: #555;
    margin-bottom: 2rem;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
}

.hero-buttons {
    display: flex;
    gap: 1rem;
    justify-content: center;
    margin-top: 2rem;
}

.button {
    display: inline-block;
    padding: 0.8rem 1.5rem;
    border-radius: 8px;
    font-weight: 500;
    text-decoration: none;
    transition: all 0.3s ease;
}

.button.primary {
    background: linear-gradient(45deg, #007bff, #00bcd4);
    color: white;
}

.button.secondary {
    background: white;
    color: #007bff;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.button.outline {
    border: 2px solid #007bff;
    color: #007bff;
    background: transparent;
}

.button:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}

.featured-project {
    background: white;
    border-radius: 20px;
    padding: 3rem 2rem;
    margin-bottom: 3rem;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}

.project-content {
    max-width: 1000px;
    margin: 0 auto;
}

.label {
    display: inline-block;
    padding: 0.5rem 1rem;
    background: linear-gradient(45deg, #007bff20, #00bcd420);
    color: #007bff;
    border-radius: 20px;
    font-size: 0.9rem;
    font-weight: 500;
    margin-bottom: 1rem;
}

.feature-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2rem;
    margin: 2rem 0;
}

.feature-item {
    text-align: center;
    padding: 1.5rem;
    background: #f8f9fa;
    border-radius: 12px;
    transition: transform 0.3s ease;
}

.feature-item:hover {
    transform: translateY(-5px);
}

.feature-icon {
    font-size: 2rem;
    margin-bottom: 1rem;
    display: block;
}

.feature-item h3 {
    color: #333;
    margin-bottom: 0.5rem;
    font-size: 1.1rem;
}

.feature-item p {
    color: #666;
    font-size: 0.9rem;
}

.project-links {
    display: flex;
    gap: 1rem;
    justify-content: center;
    margin-top: 2rem;
}

.blog-section {
    text-align: center;
    padding: 3rem 2rem;
    background: white;
    border-radius: 20px;
    margin-bottom: 3rem;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}

.section-description {
    color: #666;
    margin-bottom: 2rem;
}

.coming-soon {
    padding: 3rem;
    background: #f8f9fa;
    border-radius: 12px;
}

.soon-icon {
    font-size: 3rem;
    display: block;
    margin-bottom: 1rem;
}

.connect-section {
    text-align: center;
    padding: 3rem 2rem;
    background: white;
    border-radius: 20px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}

.social-links {
    display: flex;
    gap: 1.5rem;
    justify-content: center;
    margin-top: 2rem;
}

.social-link {
    display: flex;
    align-items: center;
    padding: 0.8rem 1.5rem;
    background: #f8f9fa;
    border-radius: 8px;
    text-decoration: none;
    color: #333;
    transition: all 0.3s ease;
}

.social-link:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.social-link .icon {
    font-size: 1.2rem;
    margin-right: 0.5rem;
}

@media (max-width: 768px) {
    .hero-section {
        padding: 3rem 1rem;
    }
    
    .hero-section h1 {
        font-size: 2.2rem;
    }
    
    .feature-grid {
        grid-template-columns: 1fr;
        gap: 1rem;
    }
    
    .social-links {
        flex-direction: column;
        gap: 1rem;
    }
    
    .hero-buttons {
        flex-direction: column;
    }
    
    .project-links {
        flex-direction: column;
    }
}

@media (prefers-color-scheme: dark) {
    .hero-section {
        background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
    }
    
    .hero-section h2 {
        color: #ccc;
    }
    
    .hero-section p {
        color: #bbb;
    }
    
    .featured-project,
    .blog-section,
    .connect-section {
        background: #1a1a1a;
    }
    
    .feature-item {
        background: #2d2d2d;
    }
    
    .feature-item h3 {
        color: #fff;
    }
    
    .feature-item p {
        color: #ccc;
    }
    
    .social-link {
        background: #2d2d2d;
        color: #fff;
    }
    
    .button.secondary {
        background: #2d2d2d;
        color: #fff;
    }
    
    .coming-soon {
        background: #2d2d2d;
    }
    
    .section-description {
        color: #ccc;
    }
}
</style> 