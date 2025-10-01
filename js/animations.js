/* ===== ANIMATIONS AND EFFECTS ===== */

class Animations {
    constructor() {
        this.observers = new Map();
        this.animationElements = new Set();
        this.isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        
        this.init();
    }
    
    init() {
        if (this.isReducedMotion) {
            return; // Skip animations if user prefers reduced motion
        }
        
        this.setupIntersectionObserver();
        this.setupScrollAnimations();
        this.setupHoverEffects();
        this.setupGradientAnimations();
        this.setupParallaxEffects();
    }
    
    setupIntersectionObserver() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        this.intersectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animateElement(entry.target);
                }
            });
        }, observerOptions);
        
        // Observe all elements with animation classes
        const animatedElements = document.querySelectorAll('[data-animate]');
        animatedElements.forEach(el => {
            this.intersectionObserver.observe(el);
        });
    }
    
    setupScrollAnimations() {
        // Fade in on scroll
        const fadeElements = document.querySelectorAll('.fade-in');
        fadeElements.forEach(el => {
            this.intersectionObserver.observe(el);
        });
        
        // Slide in from different directions
        const slideElements = document.querySelectorAll('.slide-in');
        slideElements.forEach(el => {
            this.intersectionObserver.observe(el);
        });
        
        // Scale in animation
        const scaleElements = document.querySelectorAll('.scale-in');
        scaleElements.forEach(el => {
            this.intersectionObserver.observe(el);
        });
    }
    
    setupHoverEffects() {
        // Project card hover effects
        const projectCards = document.querySelectorAll('.project-card');
        projectCards.forEach(card => {
            this.addHoverEffect(card);
        });
        
        // Button hover effects
        const buttons = document.querySelectorAll('.btn');
        buttons.forEach(button => {
            this.addButtonHoverEffect(button);
        });
        
        // Social link hover effects
        const socialLinks = document.querySelectorAll('.social-link');
        socialLinks.forEach(link => {
            this.addSocialLinkHoverEffect(link);
        });
    }
    
    setupGradientAnimations() {
        // Animated gradient backgrounds
        const gradientElements = document.querySelectorAll('.gradient-animated');
        gradientElements.forEach(el => {
            this.startGradientAnimation(el);
        });
        
        // Project card gradients
        const projectGradients = document.querySelectorAll('.project-card__gradient');
        projectGradients.forEach(gradient => {
            this.startGradientAnimation(gradient);
        });
    }
    
    setupParallaxEffects() {
        // Hero section parallax
        const hero = document.querySelector('.hero');
        if (hero) {
            this.addParallaxEffect(hero, 0.5);
        }
        
        // Project card parallax
        const projectCards = document.querySelectorAll('.project-card');
        projectCards.forEach(card => {
            this.addParallaxEffect(card, 0.2);
        });
    }
    
    animateElement(element) {
        const animationType = element.dataset.animate || 'fade-in';
        
        switch (animationType) {
            case 'fade-in':
                this.fadeIn(element);
                break;
            case 'slide-in-left':
                this.slideInLeft(element);
                break;
            case 'slide-in-right':
                this.slideInRight(element);
                break;
            case 'slide-in-up':
                this.slideInUp(element);
                break;
            case 'scale-in':
                this.scaleIn(element);
                break;
            case 'bounce-in':
                this.bounceIn(element);
                break;
            default:
                this.fadeIn(element);
        }
    }
    
    fadeIn(element) {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        
        requestAnimationFrame(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        });
    }
    
    slideInLeft(element) {
        element.style.opacity = '0';
        element.style.transform = 'translateX(-50px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        
        requestAnimationFrame(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateX(0)';
        });
    }
    
    slideInRight(element) {
        element.style.opacity = '0';
        element.style.transform = 'translateX(50px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        
        requestAnimationFrame(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateX(0)';
        });
    }
    
    slideInUp(element) {
        element.style.opacity = '0';
        element.style.transform = 'translateY(50px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        
        requestAnimationFrame(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        });
    }
    
    scaleIn(element) {
        element.style.opacity = '0';
        element.style.transform = 'scale(0.8)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        
        requestAnimationFrame(() => {
            element.style.opacity = '1';
            element.style.transform = 'scale(1)';
        });
    }
    
    bounceIn(element) {
        element.style.opacity = '0';
        element.style.transform = 'scale(0.3)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        
        requestAnimationFrame(() => {
            element.style.opacity = '1';
            element.style.transform = 'scale(1)';
        });
    }
    
    addHoverEffect(element) {
        element.addEventListener('mouseenter', () => {
            element.style.transform = 'translateY(-8px)';
            element.style.boxShadow = 'var(--shadow-xl)';
        });
        
        element.addEventListener('mouseleave', () => {
            element.style.transform = 'translateY(0)';
            element.style.boxShadow = 'var(--shadow-md)';
        });
    }
    
    addButtonHoverEffect(button) {
        button.addEventListener('mouseenter', () => {
            button.style.transform = 'translateY(-2px)';
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'translateY(0)';
        });
    }
    
    addSocialLinkHoverEffect(link) {
        link.addEventListener('mouseenter', () => {
            link.style.transform = 'translateY(-2px) scale(1.1)';
        });
        
        link.addEventListener('mouseleave', () => {
            link.style.transform = 'translateY(0) scale(1)';
        });
    }
    
    startGradientAnimation(element) {
        if (element.style.backgroundSize) {
            element.style.animation = 'gradientShift 15s ease infinite';
        }
    }
    
    addParallaxEffect(element, speed = 0.5) {
        const updateParallax = () => {
            const scrolled = window.pageYOffset;
            const parallax = scrolled * speed;
            element.style.transform = `translateY(${parallax}px)`;
        };
        
        const throttledUpdate = this.throttle(updateParallax, 16);
        window.addEventListener('scroll', throttledUpdate);
    }
    
    // Throttle function for performance
    throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }
    
    // Add custom animation
    addCustomAnimation(element, animationName, duration = 0.6) {
        element.style.animation = `${animationName} ${duration}s ease`;
    }
    
    // Remove animation
    removeAnimation(element) {
        element.style.animation = '';
        element.style.transition = '';
    }
    
    // Pause all animations
    pauseAnimations() {
        document.body.style.animationPlayState = 'paused';
    }
    
    // Resume all animations
    resumeAnimations() {
        document.body.style.animationPlayState = 'running';
    }
    
    // Check if element is in viewport
    isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    
    // Destroy animations (cleanup)
    destroy() {
        if (this.intersectionObserver) {
            this.intersectionObserver.disconnect();
        }
        
        // Remove all event listeners
        this.animationElements.forEach(element => {
            element.removeEventListener('mouseenter', this.handleMouseEnter);
            element.removeEventListener('mouseleave', this.handleMouseLeave);
        });
        
        this.animationElements.clear();
    }
}

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    window.animations = new Animations();
});

// Handle reduced motion preference changes
window.matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change', (e) => {
    if (e.matches) {
        // Disable animations
        document.body.style.animationPlayState = 'paused';
    } else {
        // Re-enable animations
        document.body.style.animationPlayState = 'running';
        if (window.animations) {
            window.animations.init();
        }
    }
});

// Export for use in other modules
window.Animations = Animations;
