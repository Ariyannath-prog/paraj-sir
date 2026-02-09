// Theme toggle
const toggle = document.querySelector(".theme-toggle");
const html = document.documentElement;
let currentTheme =
  localStorage.getItem("theme") ||
  (window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light");

html.setAttribute("data-theme", currentTheme);
toggle.textContent = currentTheme === "dark" ? "☀️" : "🌙";

toggle.addEventListener("click", () => {
  currentTheme = currentTheme === "dark" ? "light" : "dark";
  html.setAttribute("data-theme", currentTheme);
  toggle.textContent = currentTheme === "dark" ? "☀️" : "🌙";
  localStorage.setItem("theme", currentTheme);
});

// Back to Top Button
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 600) {
    backToTop.style.display = "flex";
  } else {
    backToTop.style.display = "none";
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
