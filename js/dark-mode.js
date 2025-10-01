/* ===== DARK MODE FUNCTIONALITY ===== */

class DarkMode {
    constructor() {
        this.themeToggle = document.getElementById('theme-toggle');
        this.htmlElement = document.documentElement;
        this.storageKey = 'theme-preference';
        this.theme = this.getStoredTheme() || this.getSystemTheme();
        
        this.init();
    }
    
    init() {
        this.setTheme(this.theme);
        this.bindEvents();
        this.updateToggleIcon();
    }
    
    bindEvents() {
        if (this.themeToggle) {
            this.themeToggle.addEventListener('click', () => {
                this.toggleTheme();
            });
        }
        
        // Listen for system theme changes
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
            if (!this.getStoredTheme()) {
                this.setTheme(e.matches ? 'dark' : 'light');
                this.updateToggleIcon();
            }
        });
        
        // Listen for storage changes (sync across tabs)
        window.addEventListener('storage', (e) => {
            if (e.key === this.storageKey) {
                this.theme = e.newValue || this.getSystemTheme();
                this.setTheme(this.theme);
                this.updateToggleIcon();
            }
        });
    }
    
    getSystemTheme() {
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    
    getStoredTheme() {
        try {
            return localStorage.getItem(this.storageKey);
        } catch (error) {
            console.warn('Unable to access localStorage:', error);
            return null;
        }
    }
    
    setStoredTheme(theme) {
        try {
            localStorage.setItem(this.storageKey, theme);
        } catch (error) {
            console.warn('Unable to save to localStorage:', error);
        }
    }
    
    setTheme(theme) {
        this.theme = theme;
        this.htmlElement.setAttribute('data-theme', theme);
        this.setStoredTheme(theme);
        
        // Dispatch custom event for other components
        window.dispatchEvent(new CustomEvent('themeChanged', {
            detail: { theme: theme }
        }));
    }
    
    toggleTheme() {
        const newTheme = this.theme === 'dark' ? 'light' : 'dark';
        this.setTheme(newTheme);
        this.updateToggleIcon();
        
        // Add animation class for smooth transition
        this.htmlElement.classList.add('theme-transitioning');
        setTimeout(() => {
            this.htmlElement.classList.remove('theme-transitioning');
        }, 300);
    }
    
    updateToggleIcon() {
        if (!this.themeToggle) return;
        
        const sunIcon = this.themeToggle.querySelector('.theme-toggle__icon--sun');
        const moonIcon = this.themeToggle.querySelector('.theme-toggle__icon--moon');
        
        if (sunIcon && moonIcon) {
            if (this.theme === 'dark') {
                sunIcon.style.opacity = '0';
                sunIcon.style.transform = 'rotate(-180deg) scale(0.8)';
                moonIcon.style.opacity = '1';
                moonIcon.style.transform = 'rotate(0deg) scale(1)';
            } else {
                sunIcon.style.opacity = '1';
                sunIcon.style.transform = 'rotate(0deg) scale(1)';
                moonIcon.style.opacity = '0';
                moonIcon.style.transform = 'rotate(180deg) scale(0.8)';
            }
        }
    }
    
    // Public method to get current theme
    getCurrentTheme() {
        return this.theme;
    }
    
    // Public method to set theme programmatically
    setThemeProgrammatically(theme) {
        if (theme === 'dark' || theme === 'light') {
            this.setTheme(theme);
            this.updateToggleIcon();
        }
    }
    
    // Public method to check if dark mode is active
    isDarkMode() {
        return this.theme === 'dark';
    }
    
    // Public method to check if light mode is active
    isLightMode() {
        return this.theme === 'light';
    }
}

// Initialize dark mode when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    window.darkMode = new DarkMode();
});

// Export for use in other modules
window.DarkMode = DarkMode;
