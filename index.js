
// const video = document.getElementById("heroVideo");
// const btn = document.getElementById("playBtn");

// btn.addEventListener("click", () => {
//     video.volume = 0.2;
//     video.muted = false;
//     video.play();
//     btn.style.display = "none"; // hide after play
// });



// function toggleMenu() {
//     document.getElementById("navLinks").classList.toggle("show");
// }
const langToggle = document.getElementById('lang-toggle');
let currentLang = 'en';

langToggle.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'hi' : 'en';
    langToggle.textContent = currentLang === 'en' ? 'हिंदी' : 'English';

    document.querySelectorAll('[data-en]').forEach(el => {
        el.textContent = el.getAttribute(`data-${currentLang}`);
    });
});


document.addEventListener("DOMContentLoaded", function () {

    const slides = document.querySelectorAll(".about-slider .slide");
    let index = 0;

    slides.forEach(slide => slide.classList.remove("active"));
    slides[0].classList.add("active");

    setInterval(() => {
        slides[index].classList.remove("active");
        index = (index + 1) % slides.length;
        slides[index].classList.add("active");
    }, 2000);

});


function openJourney() {
    const modal = document.getElementById("journeyModal");
    if (modal) {
        modal.style.display = "block";
    } else {
        console.error("Modal not found");
    }
}

function closeJourney() {
    const modal = document.getElementById("journeyModal");
    if (modal) {
        modal.style.display = "none";
    }
}
