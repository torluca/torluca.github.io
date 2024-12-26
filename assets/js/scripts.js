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

// JavaScript to toggle dropdown menu
const menuToggle = document.getElementById("menu-toggle");
const dropdownMenu = document.querySelector(".dropdown-menu");

// Toggle the menu on clicking the icon
menuToggle.addEventListener("click", () => {
    dropdownMenu.classList.toggle("active");
    menuToggle.classList.toggle("active");
});
