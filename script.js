// Function to animate elements on scroll
function revealOnScroll() {
    const sections = document.querySelectorAll('.section');

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight - 100) {
            section.classList.add('active');
        }
    });
}

// Listen for the scroll event
window.addEventListener('scroll', revealOnScroll);

// Initially run the function to show elements already in view
revealOnScroll();
