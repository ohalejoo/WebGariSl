document.addEventListener("DOMContentLoaded", () => {
  // Año en footer
  const yearSpan = document.getElementById("year");
  if (yearSpan) yearSpan.textContent = new Date().getFullYear();

  // ===== Scroll reveal =====
  const revealEls = document.querySelectorAll(".reveal");
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (prefersReduced) {
    revealEls.forEach(el => el.classList.add("visible"));
  } else if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          io.unobserve(entry.target);
        }
      });
    }, { root: null, rootMargin: "0px 0px -10% 0px", threshold: 0.1 });

    revealEls.forEach(el => io.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add("visible"));
  }




  const hamburger = document.getElementById("hamburger");
  const sidebar = document.getElementById("sidebar");
  const closeBtn = document.getElementById("closeSidebar");

  hamburger.addEventListener("click", () => {
    sidebar.style.width = "250px"; // abre el menú
  });

  closeBtn.addEventListener("click", () => {
    sidebar.style.width = "0"; // cierra el menú
  });
});
