// Theme toggle
const themeBtn = document.getElementById("themeToggle");
const icon = document.getElementById("themeIcon");

themeBtn.addEventListener("click", () => {
    const html = document.documentElement;

    if (html.getAttribute("data-theme") === "dark") {
        html.removeAttribute("data-theme");
        icon.textContent = "☾";
        localStorage.setItem("theme", "light");
    } else {
        html.setAttribute("data-theme", "dark");
        icon.textContent = "☀";
        localStorage.setItem("theme", "dark");
    }
});

// Load saved theme
window.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("theme") === "dark") {
        document.documentElement.setAttribute("data-theme", "dark");
        icon.textContent = "☀";
    }
});
