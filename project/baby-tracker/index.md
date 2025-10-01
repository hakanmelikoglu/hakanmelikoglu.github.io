---
layout: page
title: Baby Tracker
permalink: /project/baby-tracker/
---

<div class="project-container">
  <div class="project-hero">
    <div class="hero-gradient">
      <div class="app-icon">
        <div class="icon-gradient">
          <div class="baby-icon">
            <div class="baby-face">
              <div class="eye left"></div>
              <div class="eye right"></div>
              <div class="mouth"></div>
            </div>
            <div class="pacifier"></div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="project-content">
    <div class="project-header">
      <div class="project-logo">
        <div class="logo-gradient">
          <div class="baby-icon">
            <div class="baby-face">
              <div class="eye left"></div>
              <div class="eye right"></div>
              <div class="mouth"></div>
            </div>
            <div class="pacifier"></div>
          </div>
        </div>
      </div>
      <h1>Baby Tracker</h1>
    </div>

    <div class="app-description">
      <p>A comprehensive baby tracking app for iOS that helps parents monitor feeding, sleeping, diaper changes, and growth milestones. Keep track of your baby's daily routine with an intuitive and beautiful interface.</p>
      <div class="app-links">
        <a href="https://apps.apple.com/app/baby-tracker/id1234567890" class="app-store-button" target="_blank">
          <img src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&releaseDate=1701734400" alt="Download on the App Store">
        </a>
      </div>
    </div>

    <div class="features-section">
      <h2>Features</h2>
      <div class="features-grid">
        <div class="feature-card">
          <h3>Feeding Tracker</h3>
          <p>Log bottle feeds, breastfeeding sessions, and solid food intake with timestamps and duration tracking.</p>
        </div>
        <div class="feature-card">
          <h3>Sleep Monitoring</h3>
          <p>Track nap times, bedtime routines, and sleep patterns to establish healthy sleep habits.</p>
        </div>
        <div class="feature-card">
          <h3>Diaper Changes</h3>
          <p>Record wet and dirty diapers to monitor your baby's health and feeding patterns.</p>
        </div>
        <div class="feature-card">
          <h3>Growth Milestones</h3>
          <p>Document weight, height, and developmental milestones with photo memories and notes.</p>
        </div>
        <div class="feature-card">
          <h3>Health Records</h3>
          <p>Keep track of vaccinations, doctor visits, medications, and health concerns in one place.</p>
        </div>
        <div class="feature-card">
          <h3>Data Export</h3>
          <p>Export your baby's data as PDF reports to share with pediatricians or keep as keepsakes.</p>
        </div>
      </div>
    </div>

    <div class="features-section">
      <h2>Why Baby Tracker?</h2>
      <div class="features-grid">
        <div class="feature-card">
          <h3>Privacy First</h3>
          <p>All your baby's data stays on your device. No cloud storage, no data sharing - complete privacy protection.</p>
        </div>
        <div class="feature-card">
          <h3>Simple & Intuitive</h3>
          <p>Designed for sleep-deprived parents with large buttons, quick logging, and one-tap recording.</p>
        </div>
        <div class="feature-card">
          <h3>Comprehensive Reports</h3>
          <p>Generate detailed reports showing patterns, trends, and insights about your baby's development.</p>
        </div>
        <div class="feature-card">
          <h3>Multiple Babies</h3>
          <p>Track multiple children with separate profiles, perfect for families with twins or multiple kids.</p>
        </div>
      </div>
    </div>

    <div class="links-section">
      <h2>Documentation</h2>
      <div class="doc-links">
        <a href="/project/baby-tracker/privacy-policy" class="doc-link">Privacy Policy</a>
        <a href="/project/baby-tracker/terms-of-use" class="doc-link">Terms of Use</a>
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
  background: linear-gradient(45deg, #FF6B9D, #C44569, #F8B500, #FF9A8B);
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
  display: flex;
  align-items: center;
  justify-content: center;
}

.app-icon:hover {
  transform: scale(1.05);
}

.icon-gradient {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, #FF6B9D, #C44569, #F8B500, #FF9A8B);
  background-size: 300% 300%;
  animation: gradientShift 15s ease infinite;
  display: flex;
  align-items: center;
  justify-content: center;
}

.baby-icon {
  position: relative;
  width: 120px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.baby-face {
  width: 80px;
  height: 80px;
  background: #fff;
  border-radius: 50%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.eye {
  width: 8px;
  height: 8px;
  background: #333;
  border-radius: 50%;
  position: absolute;
  top: 25px;
}

.eye.left {
  left: 25px;
}

.eye.right {
  right: 25px;
}

.mouth {
  width: 20px;
  height: 10px;
  border: 2px solid #333;
  border-top: none;
  border-radius: 0 0 20px 20px;
  position: absolute;
  bottom: 20px;
}

.pacifier {
  width: 12px;
  height: 12px;
  background: #FF6B9D;
  border-radius: 50%;
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
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
  overflow: hidden;
  position: relative;
}

.logo-gradient {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, #FF6B9D, #C44569, #F8B500, #FF9A8B);
  background-size: 300% 300%;
  animation: gradientShift 15s ease infinite;
  display: flex;
  align-items: center;
  justify-content: center;
}

.project-logo .baby-icon {
  width: 30px;
  height: 30px;
}

.project-logo .baby-face {
  width: 20px;
  height: 20px;
}

.project-logo .eye {
  width: 2px;
  height: 2px;
  top: 6px;
}

.project-logo .eye.left {
  left: 6px;
}

.project-logo .eye.right {
  right: 6px;
}

.project-logo .mouth {
  width: 6px;
  height: 3px;
  bottom: 5px;
}

.project-logo .pacifier {
  width: 3px;
  height: 3px;
  right: 2px;
}

.project-content {
  padding: 0 2rem 2rem;
}

.project-content h1 {
  font-size: 2.5rem;
  margin: 0;
  background: linear-gradient(120deg, #FF6B9D, #C44569);
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
  background: linear-gradient(120deg, #FF6B9D, #C44569);
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
  color: #FF6B9D;
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
  background: linear-gradient(120deg, #FF6B9D, #C44569);
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
  background: #FF6B9D;
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

  .baby-icon {
    width: 90px;
    height: 90px;
  }

  .baby-face {
    width: 60px;
    height: 60px;
  }

  .eye {
    width: 6px;
    height: 6px;
    top: 18px;
  }

  .eye.left {
    left: 18px;
  }

  .eye.right {
    right: 18px;
  }

  .mouth {
    width: 15px;
    height: 8px;
    bottom: 15px;
  }

  .pacifier {
    width: 8px;
    height: 8px;
    right: 8px;
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
