const navToggle = document.querySelector(".nav_toggle");
navToggle.addEventListener("click", toggleNavigation);

const navMenu = document.querySelector(".nav_menu");

function toggleNavigation() {
    navMenu.classList.toggle("nav_menu_visible");
}
