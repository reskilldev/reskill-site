document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector(".primary-nav");
  if (!nav) return;

  // Create the mobile hamburger menu toggle
  const toggle = document.createElement("button");
  toggle.innerHTML = "&#9776;"; // ☰ hamburger icon
  toggle.className = "nav-toggle";
  toggle.setAttribute("aria-expanded", "false");
  toggle.setAttribute("aria-label", "Toggle navigation");

  const headerContainer = document.querySelector(".site-header .container");
  headerContainer.insertBefore(toggle, nav);

  // Toggle nav visibility on mobile
  toggle.addEventListener("click", () => {
    const expanded = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!expanded));
    nav.classList.toggle("show");
  });
});