window.addEventListener("DOMContentLoaded", () => {

  const projectCount = document.querySelectorAll(".project-card").length;
  const projectCountEl = document.getElementById("projectCount");
  if (projectCountEl) projectCountEl.textContent = projectCount;

 
  const html = document.documentElement;
  const themeToggle = document.getElementById("themeToggle");
  const themeIcon = document.getElementById("themeIcon");

  function applyTheme(theme) {
    if (theme === "dark") {
      html.setAttribute("data-theme", "dark");
      if (themeIcon) themeIcon.textContent = "☀";
      localStorage.setItem("theme", "dark");
    } else {
      html.removeAttribute("data-theme");
      if (themeIcon) themeIcon.textContent = "☾";
      localStorage.setItem("theme", "light");
    }
  }

  const savedTheme = localStorage.getItem("theme") || "light";
  applyTheme(savedTheme);

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const isDark = html.getAttribute("data-theme") === "dark";
      applyTheme(isDark ? "light" : "dark");
    });
  }
});
