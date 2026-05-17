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

    // Modal Control
    const modalTrigger = document.querySelector('.open-nutrition');
    const modalOverlay = document.querySelector('.modal-overlay');
    const closeModal = document.querySelector('.close-modal');

    if (modalTrigger && modalOverlay && closeModal) {
        modalTrigger.addEventListener('click', (e) => {
            e.preventDefault();
            modalOverlay.style.display = 'flex';
            document.body.style.overflow = 'hidden'; // Stop scroll
        });

        const closeFunc = () => {
            modalOverlay.style.display = 'none';
            document.body.style.overflow = 'auto';
        };

        closeModal.addEventListener('click', closeFunc);
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) closeFunc();
        });

        // Close on ESC
        window.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') closeFunc();
        });
    }

    console.log('Tokyo Bakery Premium Script Initialized');
});
