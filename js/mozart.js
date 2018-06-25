const menu = document.getElementsByClassName("nav-menu")[0];
const navigation = document.getElementById("navigation");
const hamburger = document.getElementsByClassName("menu-ham");

menu.addEventListener("click", toggleMenu);

function toggleMenu() {
    for (let i = 0; i < hamburger.length; i++) {
        hamburger[i].classList.toggle("active");
    }
    navigation.classList.toggle("open");
}