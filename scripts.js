/* ========================================
   CASA PLEGABLE 20FT — PREMIUM LANDING PAGE
   JavaScript Interactions
   ======================================== */

document.addEventListener('DOMContentLoaded', function () {

    // ========== LIGHTBOX GALLERY ==========
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = lightbox.querySelector('.lightbox-image');
    const lightboxCaption = lightbox.querySelector('.lightbox-caption');
    const lightboxClose = lightbox.querySelector('.lightbox-close');
    const lightboxPrev = lightbox.querySelector('.lightbox-prev');
    const lightboxNext = lightbox.querySelector('.lightbox-next');

    const galleryItems = document.querySelectorAll('.gallery-item');
    let currentImageIndex = 0;
    const galleryImages = [];

    // Collect all gallery images
    galleryItems.forEach((item, index) => {
        const img = item.querySelector('img');
        const caption = item.querySelector('.gallery-caption');
        galleryImages.push({
            src: img.src,
            alt: img.alt,
            caption: caption ? caption.textContent : ''
        });

        // Add click handler
        item.addEventListener('click', function () {
            openLightbox(index);
        });
    });

    function openLightbox(index) {
        currentImageIndex = index;
        updateLightboxImage();
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }

    function updateLightboxImage() {
        const image = galleryImages[currentImageIndex];
        lightboxImage.src = image.src;
        lightboxImage.alt = image.alt;
        lightboxCaption.textContent = image.caption;
    }

    function nextImage() {
        currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
        updateLightboxImage();
    }

    function prevImage() {
        currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
        updateLightboxImage();
    }

    // Lightbox event listeners
    lightboxClose.addEventListener('click', closeLightbox);
    lightboxNext.addEventListener('click', nextImage);
    lightboxPrev.addEventListener('click', prevImage);

    // Close on background click
    lightbox.addEventListener('click', function (e) {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    // Keyboard navigation
    document.addEventListener('keydown', function (e) {
        if (!lightbox.classList.contains('active')) return;

        switch (e.key) {
            case 'Escape':
                closeLightbox();
                break;
            case 'ArrowRight':
                nextImage();
                break;
            case 'ArrowLeft':
                prevImage();
                break;
        }
    });

    // ========== WHATSAPP WIDGET ==========
    const whatsappWidget = document.getElementById('whatsapp-widget');
    const whatsappBtn = document.getElementById('whatsapp-btn');
    const whatsappPulse = whatsappWidget.querySelector('.whatsapp-pulse');

    // Stop pulse animation after first click
    whatsappBtn.addEventListener('click', function () {
        whatsappPulse.style.animation = 'none';

        // Track click event (for analytics integration)
        if (typeof gtag !== 'undefined') {
            gtag('event', 'whatsapp_click', {
                'event_category': 'contact',
                'event_label': 'floating_widget'
            });
        }
    });

    // Restart pulse every 8 seconds
    let pulseInterval = setInterval(function () {
        if (whatsappPulse.style.animation !== 'none') {
            whatsappPulse.style.animation = 'none';
            setTimeout(() => {
                whatsappPulse.style.animation = 'pulse 2s ease-out infinite';
            }, 50);
        }
    }, 8000);

    // ========== SMOOTH SCROLL ==========
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                const headerOffset = 0;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ========== INTERSECTION OBSERVER FOR ANIMATIONS ==========
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const animateOnScroll = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Add animation classes to elements
    const animatableElements = document.querySelectorAll(
        '.feature-card, .gallery-item, .benefit-item, .testimonial-card, .faq-item'
    );

    animatableElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = `opacity 0.5s ease ${index % 3 * 0.1}s, transform 0.5s ease ${index % 3 * 0.1}s`;
        animateOnScroll.observe(el);
    });

    // Add the animate-in styles
    const style = document.createElement('style');
    style.textContent = `
        .animate-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);

    // ========== FORM HANDLING ==========
    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Collect form data
            const formData = new FormData(this);
            const data = Object.fromEntries(formData.entries());

            // Add UTM parameters
            const urlParams = new URLSearchParams(window.location.search);
            data.utm_source = urlParams.get('utm_source') || 'landing';
            data.utm_medium = urlParams.get('utm_medium') || 'web';
            data.utm_campaign = urlParams.get('utm_campaign') || 'plegable20ft';

            // Show loading state
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<svg class="btn-icon spinning" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg> Enviando...';
            submitBtn.disabled = true;

            // Simulate form submission (replace with actual endpoint)
            setTimeout(() => {
                // Success state
                submitBtn.innerHTML = '<svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22,4 12,14.01 9,11.01"/></svg> ¡Enviado!';
                submitBtn.style.background = '#10B981';

                // Track form submission
                if (typeof gtag !== 'undefined') {
                    gtag('event', 'form_submit', {
                        'event_category': 'contact',
                        'event_label': 'contact_form'
                    });
                }

                // Reset form after delay
                setTimeout(() => {
                    contactForm.reset();
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                    submitBtn.style.background = '';
                }, 3000);

                console.log('Form data:', data);
            }, 1500);
        });
    }

    // Add spinning animation for loading
    const spinStyle = document.createElement('style');
    spinStyle.textContent = `
        @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
        .spinning {
            animation: spin 1s linear infinite;
        }
    `;
    document.head.appendChild(spinStyle);

    // ========== FAQ ACCORDION ENHANCEMENTS ==========
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const summary = item.querySelector('summary');

        summary.addEventListener('click', function (e) {
            // Close other open items (optional - remove for multi-open)
            // faqItems.forEach(otherItem => {
            //     if (otherItem !== item && otherItem.open) {
            //         otherItem.open = false;
            //     }
            // });
        });
    });

    // ========== CTA BUTTON TRACKING ==========
    const ctaButtons = document.querySelectorAll('.btn-primary[href*="wa.me"]');

    ctaButtons.forEach(btn => {
        btn.addEventListener('click', function () {
            // Determine button location
            let location = 'unknown';
            const section = this.closest('section');
            if (section) {
                location = section.id || section.className.split(' ')[0];
            }

            // Track click
            if (typeof gtag !== 'undefined') {
                gtag('event', 'whatsapp_click', {
                    'event_category': 'contact',
                    'event_label': location
                });
            }

            console.log('WhatsApp CTA clicked from:', location);
        });
    });

    // ========== PDF DOWNLOAD TRACKING ==========
    const downloadButtons = document.querySelectorAll('a[href="#ficha-tecnica"], .specs-download');

    downloadButtons.forEach(btn => {
        btn.addEventListener('click', function (e) {
            // Track download attempt
            if (typeof gtag !== 'undefined') {
                gtag('event', 'download', {
                    'event_category': 'engagement',
                    'event_label': 'ficha_tecnica_pdf'
                });
            }

            console.log('PDF download clicked');

            // If this is a real PDF link, let it proceed
            // If not, show a message or handle accordingly
            if (!this.href.includes('.pdf')) {
                e.preventDefault();
                alert('El PDF de la ficha técnica estará disponible próximamente. Por favor, contactanos por WhatsApp para más información.');
            }
        });
    });

    // ========== HERO ANIMATION ON LOAD ==========
    const heroVideo = document.querySelector('.hero-video');
    if (heroVideo) {
        heroVideo.style.opacity = '0';
        heroVideo.style.transform = 'translateY(20px)';

        setTimeout(() => {
            heroVideo.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            heroVideo.style.opacity = '1';
            heroVideo.style.transform = 'translateY(0)';
        }, 200);
    }

    // ========== SCROLL PROGRESS (OPTIONAL) ==========
    // Uncomment to add a scroll progress bar
    /*
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        height: 3px;
        background: linear-gradient(135deg, #0BA398 0%, #0F766E 100%);
        z-index: 9999;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        progressBar.style.width = scrollPercent + '%';
    });
    */

    // ========== CONSOLE BRANDING ==========
    console.log('%c🏡 Casa Plegable 20FT',
        'font-size: 24px; font-weight: bold; color: #0BA398;');
    console.log('%cMóvil, lista para vivir',
        'font-size: 14px; color: #55606A;');
    console.log('%cDesarrollado con 💚',
        'font-size: 12px; color: #0F766E;');

});

// ========== UTILITY FUNCTIONS ==========

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function for scroll events
function throttle(func, limit) {
    let inThrottle;
    return function (...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}
