// Section scroll
document.querySelectorAll('[data-scroll]').forEach(target => {
    target.addEventListener('click', event => {
        event.preventDefault(); // Prevent default anchor behavior
        const targetId = target.getAttribute('data-scroll');
        const targetSection = document.getElementById(targetId);
        
        if (targetSection) {
            const offset = 100; // Set your desired offset
            const elementPosition = targetSection.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - offset;

            // Smooth scroll to the calculated position
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});
