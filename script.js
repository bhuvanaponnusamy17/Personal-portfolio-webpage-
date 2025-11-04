 // ===== Mobile Menu Toggle =====
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// ===== Dynamic Greeting =====
const greeting = document.getElementById('greeting');
const hour = new Date().getHours();

let timeGreeting;
if (hour < 12) timeGreeting = "Good Morning, I'm";
else if (hour < 18) timeGreeting = "Good Afternoon, I'm";
else timeGreeting = "Good Evening, I'm";

greeting.innerHTML = `${timeGreeting} <span>Bhuvana P</span>`;

// ===== Scroll to Top Button =====
const scrollTopBtn = document.getElementById('scrollTopBtn');
window.addEventListener('scroll', () => {
  if (window.scrollY > 200) scrollTopBtn.style.display = "block";
  else scrollTopBtn.style.display = "none";
});

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ===== Smooth Scroll for Nav Links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
    navLinks.classList.remove('active');
  });
});
