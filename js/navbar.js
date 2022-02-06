const hamburger_menu = document.querySelector(".hamburger-menu");
const container = document.querySelector("main");
const links = document.querySelector(".links");

hamburger_menu.addEventListener("click", () => {
    links.classList.toggle("apper");
    container.classList.toggle("active");
});

const burger = document.querySelector(".burger")

function openNav(x) {
    x.classList.toggle("change");
}

function navClose() {
    links.classList.remove("apper");
    hamburger_menu.classList.remove("change");
    container.classList.remove("active");
}