/**
 * ===================================
 * ORNANDO SAPUTRA BRILLIANTO
 * Professional Landing Page
 * ===================================
 * Script untuk interaksi, animasi, dan fungsionalitas dinamis
 */

// ===================================
// DARK MODE TOGGLE
// ===================================

/**
 * Inisialisasi Dark Mode
 * Cek localStorage untuk preferensi mode sebelumnya
 */
function initDarkMode() {
    const themeToggle = document.getElementById('themeToggle');
    const prefersDark = localStorage.getItem('darkMode') === 'true' ||
        (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);

    if (prefersDark) {
        document.body.classList.add('dark-mode');
        updateThemeIcon();
    }

    // Event listener untuk toggle button
    themeToggle.addEventListener('click', toggleDarkMode);
}

/**
 * Toggle antara Light dan Dark Mode
 */
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
    updateThemeIcon();
}

/**
 * Update icon berdasarkan mode yang aktif
 */
function updateThemeIcon() {
    const themeToggle = document.getElementById('themeToggle');
    const icon = themeToggle.querySelector('.toggle-icon');
    const isDarkMode = document.body.classList.contains('dark-mode');
    icon.textContent = isDarkMode ? '☀️' : '🌙';
}

// ===================================
// SMOOTH SCROLL FOR NAVIGATION
// ===================================

/**
 * Menangani smooth scroll pada klik navigation links
 */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        // Jangan intercept link eksternal atau contact links
        if (href === '#' || this.target === '_blank') {
            return;
        }

        e.preventDefault();
        const target = document.querySelector(href);
        
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            
            // Update active state pada navigation
            updateActiveNavLink(href);
        }
    });
});

/**
 * Update active state pada navigation links
 */
function updateActiveNavLink(currentHash) {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === currentHash) {
            link.classList.add('active');
        }
    });
}

// ===================================
// REVEAL ON SCROLL ANIMATION
// ===================================

/**
 * Intersection Observer untuk efek reveal on scroll
 * Elemen akan fade-in dan slide up saat masuk viewport
 */
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Tambahkan class 'revealed' untuk trigger animasi
            entry.target.classList.add('revealed');
            
            // Optional: unobserve setelah animation selesai
            // untuk performa yang lebih baik
            revealObserver.unobserve(entry.target);
        }
    });
}, {
    // Trigger saat elemen 20% dari viewport
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px'
});

/**
 * Observe semua elemen dengan class reveal-on-scroll
 */
document.querySelectorAll('.reveal-on-scroll').forEach(element => {
    revealObserver.observe(element);
});

// ===================================
// MICRO-INTERACTIONS
// ===================================

/**
 * Menambahkan efek hover dan animasi pada kartu pengalaman
 */
function setupCardInteractions() {
    const experienceCards = document.querySelectorAll('.experience-card');
    
    experienceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s ease';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transition = 'all 0.3s ease';
        });
    });
}

/**
 * Setup interaksi untuk CTA button
 */
function setupButtonInteractions() {
    const ctaButton = document.querySelector('.cta-button');
    
    if (ctaButton) {
        ctaButton.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-4px)';
        });
        
        ctaButton.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    }
}

/**
 * Setup interaksi untuk contact cards
 */
function setupContactInteractions() {
    const contactCards = document.querySelectorAll('.contact-card');
    
    contactCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.background = 'var(--color-bg-light)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.background = 'var(--color-bg)';
        });
    });
}

// ===================================
// ACTIVE NAVIGATION INDICATOR
// ===================================

/**
 * Update navigation active state saat scroll
 */
window.addEventListener('scroll', () => {
    updateNavOnScroll();
});

/**
 * Fungsi untuk update nav berdasarkan scroll position
 */
function updateNavOnScroll() {
    const sections = document.querySelectorAll('section[id]');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        const sectionId = section.getAttribute('id');
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// ===================================
// PARALLAX EFFECT (OPTIONAL)
// ===================================

/**
 * Simple parallax effect untuk hero illustration
 */
window.addEventListener('scroll', () => {
    const illustration = document.querySelector('.hero-illustration');
    if (illustration) {
        const scrollY = window.scrollY;
        illustration.style.transform = `translateY(${scrollY * 0.3}px)`;
    }
});

// ===================================
// FORM VALIDATION & PHONE NUMBER LINK
// ===================================

/**
 * Setup WhatsApp link dengan nomor yang dapat di-klik
 */
function setupWhatsAppLink() {
    const phoneNumber = '628388541961';
    const whatsappLink = document.querySelector('.whatsapp-link');
    
    if (whatsappLink) {
        // Ensure href is correct
        whatsappLink.href = `https://wa.me/${phoneNumber}`;
        whatsappLink.target = '_blank';
        whatsappLink.rel = 'noopener noreferrer';
    }
}

// ===================================
// ANIMATION TRIGGER ON SCROLL
// ===================================

/**
 * Trigger animasi elemen ketika masuk viewport
 */
function setupScrollTriggers() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.stat-item').forEach(item => {
        observer.observe(item);
    });
}

// ===================================
// NAVBAR SCROLL EFFECT
// ===================================

/**
 * Tambahkan efek subtle pada navbar saat scroll down
 */
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    
    if (scrollTop > 50) {
        navbar.style.boxShadow = 'var(--shadow-md)';
    } else {
        navbar.style.boxShadow = 'none';
    }
    
    lastScrollTop = scrollTop;
});

// ===================================
// PAGE LOAD ANIMATION
// ===================================

/**
 * Animasi saat page pertama kali load
 */
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
    setupCardInteractions();
    setupButtonInteractions();
    setupContactInteractions();
    setupWhatsAppLink();
    setupScrollTriggers();
});

// ===================================
// INTERSECTION OBSERVER FOR LAZY ANIMATION
// ===================================

/**
 * Advanced Intersection Observer untuk elemen kompleks
 */
const animationObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
});

// ===================================
// INITIALIZATION
// ===================================

/**
 * Jalankan semua fungsi inisialisasi
 */
document.addEventListener('DOMContentLoaded', () => {
    initDarkMode();
    updateNavOnScroll();
});

/**
 * Log untuk development (optional, hapus di production)
 */
console.log('✅ Ornando Saputra Brillianto - Portfolio Website Loaded');
console.log('📱 Mobile-first design dengan dark mode support');
console.log('✨ Smooth scroll, reveal on scroll, dan micro-interactions enabled');