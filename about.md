---
layout: page
title: About
permalink: /exiframe/about/
---

<div class="about-container">
  <div class="about-header">
    <div class="profile-image">
      <img src="https://github.com/hakanmelikoglu.png" alt="Hakan Melikoglu">
    </div>
    <h1>About Me</h1>
    <p class="intro">Hi, I'm Hakan Melikoglu. I'm an iOS developer passionate about creating intuitive and privacy-focused mobile applications that make a difference in people's lives.</p>
  </div>

  <div class="about-grid">
    <div class="about-card">
      <h2>Experience</h2>
      <p>I specialize in iOS development using Swift and SwiftUI. My current focus is on developing EXIFrame, an iOS application that helps users manage their photo EXIF data efficiently and securely.</p>
      
      <div class="experience-timeline">
        <div class="timeline-item">
          <span class="year">2023</span>
          <div class="timeline-content">
            <h3>EXIFrame iOS App</h3>
            <p>Developed and launched a privacy-focused EXIF editor for iOS</p>
          </div>
        </div>
      </div>
    </div>

    <div class="about-card">
      <h2>Skills</h2>
      <div class="skills-list">
        <div class="skill-item">
          <span class="skill-icon">📱</span>
          <div class="skill-details">
            <h3>iOS Development</h3>
            <p>Swift, SwiftUI, UIKit</p>
          </div>
        </div>

        <div class="skill-item">
          <span class="skill-icon">🔄</span>
          <div class="skill-details">
            <h3>Version Control</h3>
            <p>Git, GitHub</p>
          </div>
        </div>

        <div class="skill-item">
          <span class="skill-icon">🚀</span>
          <div class="skill-details">
            <h3>App Store Publishing</h3>
            <p>App submission, TestFlight</p>
          </div>
        </div>

        <div class="skill-item">
          <span class="skill-icon">🎨</span>
          <div class="skill-details">
            <h3>UI/UX Design</h3>
            <p>User Interface Design</p>
          </div>
        </div>

        <div class="skill-item">
          <span class="skill-icon">🔒</span>
          <div class="skill-details">
            <h3>Privacy & Security</h3>
            <p>Data Protection, Security Best Practices</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="connect-card">
    <h2>Let's Connect</h2>
    <p>Feel free to reach out through any of these platforms:</p>
    <div class="social-links">
      <a href="https://linkedin.com/in/hakanmelikoglu" class="social-link" target="_blank">
        <span class="social-icon">💼</span>
        <span>LinkedIn</span>
      </a>
      <a href="https://github.com/hakanmelikoglu" class="social-link" target="_blank">
        <span class="social-icon">🐙</span>
        <span>GitHub</span>
      </a>
      <a href="/exiframe/contact" class="social-link">
        <span class="social-icon">✉️</span>
        <span>Contact</span>
      </a>
    </div>
  </div>
</div>

<style>
.about-container {
    max-width: 900px;
    margin: 0 auto;
    padding: 2rem 0;
}

.about-header {
    text-align: center;
    margin-bottom: 4rem;
}

.profile-image {
    width: 180px;
    height: 180px;
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

.about-header h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: var(--text-color);
}

.intro {
    font-size: 1.2rem;
    color: var(--light-text);
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;
}

.about-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-bottom: 3rem;
}

.about-card {
    background: white;
    padding: 2rem;
    border-radius: 16px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.05);
}

.about-card h2 {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    color: var(--text-color);
}

.about-card p {
    color: var(--light-text);
    line-height: 1.6;
    margin-bottom: 1.5rem;
}

.experience-timeline {
    margin-top: 2rem;
}

.timeline-item {
    display: flex;
    gap: 1.5rem;
    margin-bottom: 1.5rem;
}

.year {
    font-weight: 600;
    color: var(--primary-color);
    min-width: 60px;
}

.timeline-content h3 {
    color: var(--text-color);
    margin-bottom: 0.5rem;
    font-size: 1.1rem;
}

.timeline-content p {
    margin: 0;
    font-size: 0.9rem;
}

.skills-list {
    display: grid;
    gap: 1.5rem;
}

.skill-item {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
}

.skill-icon {
    font-size: 1.5rem;
    min-width: 40px;
}

.skill-details h3 {
    color: var(--text-color);
    margin-bottom: 0.3rem;
    font-size: 1.1rem;
}

.skill-details p {
    margin: 0;
    font-size: 0.9rem;
}

.connect-card {
    background: white;
    padding: 3rem;
    border-radius: 16px;
    text-align: center;
    box-shadow: 0 4px 6px rgba(0,0,0,0.05);
}

.connect-card h2 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: var(--text-color);
}

.connect-card p {
    color: var(--light-text);
    margin-bottom: 2rem;
}

.social-links {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
}

.social-link {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.8rem 1.5rem;
    background: var(--background-color);
    border-radius: 8px;
    color: var(--text-color);
    text-decoration: none;
    transition: all 0.2s ease;
    
    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    }
}

.social-icon {
    font-size: 1.2rem;
}

@media (prefers-color-scheme: dark) {
    .about-card,
    .connect-card {
        background: #2D2D2D;
    }
    
    .social-link {
        background: #1A1A1A;
    }
}

@media (max-width: 768px) {
    .about-container {
        padding: 1rem;
    }
    
    .profile-image {
        width: 150px;
        height: 150px;
    }
    
    .about-header h1 {
        font-size: 2rem;
    }
    
    .social-links {
        flex-direction: column;
    }
    
    .connect-card {
        padding: 2rem;
    }
}
</style>