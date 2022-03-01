var radio1 = document.querySelector("#flat");
var radio2 = document.querySelector("#house");
var radio3 = document.querySelector("#office");

var showM = document.getElementById("get");
var money = document.getElementById("money");

var step = 0;

function showVal(newVal) {
    showM.innerHTML = `${newVal} ${"m<sup>2</sup>"} `;
    calculat = newVal * step;
    money.innerHTML = `${calculat} $`;
}

function checkRadio(value) {
    switch (value) {
        case "radio1":
            step = 8;
            break;
        case "radio2":
            step = 10;
            break;
        case "radio3":
            step = 15;
            break;
    }

    showVal(0);
}