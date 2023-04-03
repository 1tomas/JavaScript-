const navToggle = document.querySelector(".nav_toggle");
navToggle.addEventListener("click", ver);

const navMenu = document.querySelector(".nav_menu");

function ver (){
    navMenu.classList.toggle("nav_menu_visible")
}