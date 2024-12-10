---
layout: page
title: Contact
permalink: /contact/
---

<div class="contact-container">
  <div class="contact-header">
    <h1>Let's Connect</h1>
    <p>Feel free to reach out for collaborations, questions, or just to say hello!</p>
  </div>

  <div class="contact-grid">
    <div class="contact-card">
      <div class="card-icon">📧</div>
      <h3>Email</h3>
      <p><a href="mailto:exiframe@hakanmelikoglu.com">exiframe@hakanmelikoglu.com</a></p>
    </div>

    <div class="contact-card">
      <div class="card-icon">💼</div>
      <h3>LinkedIn</h3>
      <p><a href="https://linkedin.com/in/hakanmelikoglu" target="_blank">Connect on LinkedIn</a></p>
    </div>

    <div class="contact-card">
      <div class="card-icon">🐙</div>
      <h3>GitHub</h3>
      <p><a href="https://github.com/hakanmelikoglu" target="_blank">Follow on GitHub</a></p>
    </div>
  </div>

  <div class="contact-form-container">
    <h2>Send a Message</h2>
    <form action="https://formspree.io/f/your-form-id" method="POST" class="contact-form">
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" id="name" name="name" required>
      </div>

      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" name="email" required>
      </div>

      <div class="form-group">
        <label for="message">Message</label>
        <textarea id="message" name="message" rows="5" required></textarea>
      </div>

      <button type="submit" class="button primary">Send Message</button>
    </form>
  </div>
</div>

<style>
.contact-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem 0;
}

.contact-header {
    text-align: center;
    margin-bottom: 3rem;
}

.contact-header h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: var(--text-color);
}

.contact-header p {
    color: var(--light-text);
    font-size: 1.1rem;
}

.contact-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2rem;
    margin-bottom: 4rem;
}

.contact-card {
    background: white;
    padding: 2rem;
    border-radius: 16px;
    text-align: center;
    transition: transform 0.2s ease;
    box-shadow: 0 4px 6px rgba(0,0,0,0.05);
}

.contact-card:hover {
    transform: translateY(-5px);
}

.card-icon {
    font-size: 2.5rem;
    margin-bottom: 1rem;
}

.contact-card h3 {
    color: var(--text-color);
    margin-bottom: 0.5rem;
}

.contact-card a {
    color: var(--primary-color);
    text-decoration: none;
    
    &:hover {
        text-decoration: underline;
    }
}

.contact-form-container {
    background: white;
    padding: 3rem;
    border-radius: 16px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.05);
}

.contact-form-container h2 {
    text-align: center;
    margin-bottom: 2rem;
    color: var(--text-color);
}

.contact-form {
    display: grid;
    gap: 1.5rem;
}

.form-group {
    display: grid;
    gap: 0.5rem;
}

.form-group label {
    font-weight: 500;
    color: var(--text-color);
}

.form-group input,
.form-group textarea {
    padding: 0.8rem;
    border: 2px solid var(--border-color);
    border-radius: 8px;
    font-family: inherit;
    font-size: 1rem;
    transition: border-color 0.2s ease;
    
    &:focus {
        outline: none;
        border-color: var(--primary-color);
    }
}

.contact-form button {
    justify-self: center;
    min-width: 200px;
}

@media (prefers-color-scheme: dark) {
    .contact-card,
    .contact-form-container {
        background: #2D2D2D;
    }
    
    .form-group input,
    .form-group textarea {
        background: #1A1A1A;
        color: white;
        border-color: rgba(255,255,255,0.1);
        
        &:focus {
            border-color: var(--primary-color);
        }
    }
}

@media (max-width: 768px) {
    .contact-container {
        padding: 1rem;
    }
    
    .contact-form-container {
        padding: 2rem;
    }
    
    .contact-header h1 {
        font-size: 2rem;
    }
}
</style> 