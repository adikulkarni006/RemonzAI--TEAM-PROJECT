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

// PROJECT NAME - animated
const text = "RemonzAi!";
let index = 0;
function type() {
    if (index < text.length) {
        document.getElementById("animatedTitle").innerHTML += text.charAt(index);
        index++;
        setTimeout(type, 100);
    }
}
window.onload = type;

function toggleSidebar() {
    document.getElementById("sidebar").classList.toggle("active");
}