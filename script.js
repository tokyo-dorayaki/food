document.addEventListener('DOMContentLoaded', () => {
    // Scroll Reveal Animation
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealOnScroll = () => {
        for (let i = 0; i < revealElements.length; i++) {
            const windowHeight = window.innerHeight;
            const elementTop = revealElements[i].getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < windowHeight - elementVisible) {
                revealElements[i].classList.add('active');
            }
        }
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();

    // Modal Control Helper
    const setupModal = (triggerSelector, overlaySelector) => {
        const triggers = document.querySelectorAll(triggerSelector);
        const overlay = document.querySelector(overlaySelector);
        const closeModals = overlay.querySelectorAll('.close-modal');

        triggers.forEach(trigger => {
            trigger.addEventListener('click', (e) => {
                e.preventDefault();
                overlay.style.display = 'flex';
                document.body.style.overflow = 'hidden';
            });
        });

        const closeFunc = () => {
            overlay.style.display = 'none';
            if (!document.querySelector('.modal-overlay[style*="display: flex"]')) {
                document.body.style.overflow = 'auto';
            }
        };

        closeModals.forEach(btn => btn.addEventListener('click', closeFunc));
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) closeFunc();
        });

        window.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && overlay.style.display === 'flex') closeFunc();
        });
    };

    setupModal('.open-nutrition', '.nutrition-modal');
    setupModal('.open-branch', '.branch-modal');

    // Branch slider logic
    const slider = document.querySelector('.branch-slider');
    if (slider) {
        let isAutoScrolling = true;
        const slides = slider.querySelectorAll('.slide');
        
        // Auto scroll
        setInterval(() => {
            if (!isAutoScrolling) return;
            const maxScroll = slider.scrollWidth - slider.clientWidth;
            if (slider.scrollLeft >= maxScroll - 5) {
                slider.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                slider.scrollBy({ left: 200, behavior: 'smooth' });
            }
        }, 3000);

        // Pause auto scroll on user interaction
        slider.addEventListener('scroll', () => {
            // Optional: reset timer or just leave it
        });
        slider.addEventListener('mouseenter', () => isAutoScrolling = false);
        slider.addEventListener('mouseleave', () => isAutoScrolling = true);

        // Image Zoom Logic
        slides.forEach(slide => {
            slide.addEventListener('click', () => {
                slide.classList.toggle('zoomed');
            });
        });
    }

    console.log('Tokyo Bakery Premium Script Initialized with Branch Functions');
});
