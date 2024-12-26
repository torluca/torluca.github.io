// Slideshow logic
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slideshow img');
    let currentSlide = 0;

    setInterval(() => {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }, 30000); // 30 seconds
});

// JavaScript for handling dropdown menu toggle
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const dropdown = document.getElementById("dropdown");

    menuToggle.addEventListener("click", () => {
        // Toggle the dropdown menu
        dropdown.classList.toggle("active");

        // Ensure menu icon toggles back
        menuToggle.classList.toggle("active");
    });
});
