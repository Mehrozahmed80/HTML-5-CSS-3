
document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.querySelector(".sidebar");
    const titles = document.querySelectorAll(".titles");
    const logo1 = document.querySelector(".logo-1");
    const logo2 = document.querySelector(".logo-2");

    // Shrink the sidebar
    sidebar.classList.add("collapsed");

    // Hide the titles
    titles.forEach(title => title.classList.add("hide"));

    // Switch logos
    logo1.style.display = "none";
    logo2.style.display = "flex";
});
