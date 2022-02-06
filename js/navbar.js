const hamburger_menu = document.querySelector(".hamburger-menu");
const links = document.querySelector(".links");
const nav_links = document.querySelector(".nav_links");
const calculator = document.querySelector(".calculator");
const burger = document.querySelector(".burger");

hamburger_menu.addEventListener("click", () => {
    links.classList.toggle("apper");
});

function openNav(x) {
    x.classList.toggle("change");
    hamburger_menu.classList.toggle("move");
}

function navClose() {
    links.classList.remove("apper");
    hamburger_menu.classList.remove("change");
}

function openCalculator() {
    calculator.classList.add("calculator_apper");
    burger.classList.add("burger_apper");
    hamburger_menu.style.display = "none";
    nav_links.style.zIndex = "0";

}

function closeCalculator() {
    calculator.classList.remove("calculator_apper");
    burger.classList.remove("burger_apper");
    hamburger_menu.style.display = "flex";
    nav_links.style.zIndex = "1";
}