// ===============================
// MOBILE MENU
// ===============================

function toggleMenu() {
  const nav = document.getElementById("navMenu");
  nav.classList.toggle("active");
}


// ===============================
// CLOSE MENU AFTER CLICK
// ===============================

document.querySelectorAll("#navMenu a").forEach(link => {
  link.addEventListener("click", () => {
    document.getElementById("navMenu").classList.remove("active");
  });
});


// ===============================
// SCROLL REVEAL ANIMATION
// ===============================

const revealElements = document.querySelectorAll(
  ".section, .project-card, .skill-card, .timeline-item"
);

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.15
  }
);

revealElements.forEach(element => {
  element.classList.add("reveal");
  observer.observe(element);
});


// ===============================
// ACTIVE NAVIGATION
// ===============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar nav a");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach(section => {

    const sectionTop = section.offsetTop - 150;

    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }

  });

  navLinks.forEach(link => {

    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }

  });

});


// ===============================
// CURRENT YEAR
// ===============================

const year = new Date().getFullYear();

const footer = document.querySelector("footer p");

if (footer) {
  footer.innerHTML =
    `© ${year} Iqbal Nurul Ihsan. All rights reserved.`;
}
