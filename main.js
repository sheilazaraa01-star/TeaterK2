// =========================================
// TEATER TARUHAN — JAVASCRIPT
// =========================================

// HERO SLIDER
const slides = document.querySelectorAll(".hero-slide");
const dots = document.querySelectorAll(".dot");
const previousButton = document.getElementById("prevSlide");
const nextButton = document.getElementById("nextSlide");

let currentSlide = 0;
let slideTimer;

function showSlide(index) {
  if (!slides.length) return;

  currentSlide = (index + slides.length) % slides.length;

  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === currentSlide);
  });

  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === currentSlide);
  });
}

function startSlideTimer() {
  if (slides.length < 2) return;

  clearInterval(slideTimer);
  slideTimer = setInterval(() => {
    showSlide(currentSlide + 1);
  }, 5000);
}

if (previousButton) {
  previousButton.addEventListener("click", () => {
    showSlide(currentSlide - 1);
    startSlideTimer();
  });
}

if (nextButton) {
  nextButton.addEventListener("click", () => {
    showSlide(currentSlide + 1);
    startSlideTimer();
  });
}

dots.forEach((dot) => {
  dot.addEventListener("click", () => {
    showSlide(Number(dot.dataset.slide));
    startSlideTimer();
  });
});

showSlide(0);
startSlideTimer();

// MOBILE NAVIGATION
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

// BACK TO TOP
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (backToTop) {
    backToTop.classList.toggle("visible", window.scrollY > 350);
  }
});

if (backToTop) {
  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// DARK / LIGHT THEME
const themeToggle = document.getElementById("themeToggle");

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");

    const isLight = document.body.classList.contains("light-theme");
    themeToggle.textContent = isLight ? "☾" : "☼";
    themeToggle.setAttribute(
      "aria-label",
      isLight ? "Aktifkan tema gelap" : "Aktifkan tema terang",
    );
  });
}

// FOOTER YEAR
const yearElement = document.getElementById("currentYear");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}
