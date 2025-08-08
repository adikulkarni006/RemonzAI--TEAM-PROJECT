document.addEventListener("DOMContentLoaded", function () {
const toggleBtn = document.getElementById("theme-toggle");

if (!toggleBtn) return;

const currentTheme = localStorage.getItem("theme");
if (currentTheme === "dark") {
    document.body.classList.add("dark-mode");
    toggleBtn.textContent = "☀️ Light";
}

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
    toggleBtn.textContent = "☀️ Light";
    } else {
    localStorage.setItem("theme", "light");
    toggleBtn.textContent = "🌙 Dark";
    }
});
});