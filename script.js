document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling with header offset
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            const headerHeight = document.querySelector('header').offsetHeight;

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - headerHeight,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Section fade-in animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, { 
        threshold: 0.1,
        rootMargin: '-50px 0px -50px 0px' 
    });

    document.querySelectorAll('.fade-in').forEach((element) => {
        observer.observe(element);
    });

    // Dynamic footer year
    const yearElement = document.getElementById('currentYear');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // Project card hover effects
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });

    // Console initialization check
    console.log('Portfolio initialized successfully');
});
