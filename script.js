const btn = document.getElementById("theme-btn");
const body = document.body;

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark");
    btn.textContent = "☀️ Light Mode";
}

// Toggle Theme
btn.addEventListener("click", () => {
    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
        btn.textContent = "☀️ Light Mode";
        localStorage.setItem("theme", "dark");
    } else {
        btn.textContent = "🌙 Dark Mode";
        localStorage.setItem("theme", "light");
    }
});
